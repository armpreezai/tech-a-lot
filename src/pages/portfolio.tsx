import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Folder, Loader2, AlertCircle, ChevronDown, Check, RefreshCw } from 'lucide-react';
import Papa from 'papaparse';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const PREDEFINED_CATEGORIES = [
  'All',
  'Website',
  'Website Revamp',
  'Database Designs',
  'Data Backups',
  'Social Media',
  'AI Bot\'s (Coming Soon)',
  'App Design (Coming Soon)'
];

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [dynamicCategories, setDynamicCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const rawSheetId = useMemo(() => {
    return (import.meta as any).env.VITE_GOOGLE_SHEET_ID || 
           (process as any).env.VITE_GOOGLE_SHEET_ID || 
           '1n09oPWMo4q2LmbLTbVEXT_mLFRduqvEyMFtrtjP2aU0';
  }, []);
  
  // Helper to extract ID from a full URL if the user accidentally pasted the whole thing
  const extractSheetId = (input: string) => {
    if (!input) return '';
    // If it's a full URL, extract the part between /d/ and /edit
    const match = input.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match) return match[1];
    
    // If it's already just an ID, trim it
    return input.trim();
  };

  const SHEET_ID = useMemo(() => extractSheetId(rawSheetId), [rawSheetId]);
  const WEB_APP_URL = useMemo(() => {
    return (import.meta as any).env.VITE_CONTACT_FORM_WEB_APP_URL || 
           (process as any).env.VITE_CONTACT_FORM_WEB_APP_URL || 
           '';
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchPortfolio = async (controller: AbortController) => {
      setIsLoading(true);
      setError(null);
      
      const fetchWithTimeout = async (url: string, timeoutMs: number) => {
        const timeoutController = new AbortController();
        const id = setTimeout(() => timeoutController.abort(), timeoutMs);
        try {
          const response = await fetch(url, { signal: timeoutController.signal });
          clearTimeout(id);
          return response;
        } catch (err) {
          clearTimeout(id);
          throw err;
        }
      };

      try {
        // 1. Try fetching from the Web App URL first (JSON API)
        if (WEB_APP_URL) {
          console.log('Attempting to fetch portfolio from Web App API...');
          try {
            const apiResponse = await fetchWithTimeout(
              `${WEB_APP_URL}?action=getPortfolio`,
              8000
            );
            if (apiResponse.ok) {
              const data = await apiResponse.json();
              if (data && Array.isArray(data)) {
                console.log('Web App API fetch successful');
                processPortfolioData(data);
                return;
              }
            }
          } catch (apiErr) {
            console.warn('Web App API fetch failed, trying direct sheet access...', apiErr);
          }
        }

        // 2. Fallback to direct sheet access if Web App fails or is not configured
        if (!SHEET_ID || SHEET_ID === 'YOUR_GOOGLE_SHEET_ID') {
          setError('Google Sheet ID not configured. Please add your actual sheet ID to the VITE_GOOGLE_SHEET_ID secret.');
          setIsLoading(false);
          return;
        }

        console.log('Attempting to fetch portfolio from sheet:', SHEET_ID);
        
        // Try CSV export
        try {
          console.log('Trying CSV export...');
          const csvResponse = await fetchWithTimeout(
            `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`,
            10000
          );

          if (csvResponse.ok) {
            const csvText = await csvResponse.text();
            console.log('CSV fetch successful');
            
            Papa.parse(csvText, {
              header: true,
              skipEmptyLines: true,
              complete: (results) => {
                const data = results.data as any[];
                const portfolioData: PortfolioItem[] = data.map((row) => {
                  const keys = Object.keys(row);
                  return {
                    title: row[keys[1]] || '', // Column B is the Project Title
                    category: row[keys[0]] || 'General', // Column A is the Category
                    description: row[keys[2]] || '',
                    imageUrl: row[keys[3]] || 'https://picsum.photos/seed/portfolio/800/600',
                    projectUrl: row[keys[4]] || '#'
                  };
                }).filter(item => item.title && item.category.toLowerCase() !== 'title');

                if (portfolioData.length > 0) {
                  processPortfolioData(portfolioData);
                } else {
                  console.warn('CSV parsed but no data found, trying JSON fallback...');
                  tryJsonFallback(controller);
                }
              },
              error: (err) => {
                console.error('CSV Parsing Error:', err);
                tryJsonFallback(controller);
              }
            });
            return;
          }
        } catch (csvErr) {
          console.warn('CSV fetch failed or timed out, trying JSON fallback...', csvErr);
        }

        // JSON Fallback
        await tryJsonFallback(controller);

      } catch (err: any) {
        handleFetchError(err);
      }
    };

    const tryJsonFallback = async (controller: AbortController) => {
      try {
        console.log('Trying JSON endpoint fallback...');
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`,
          { signal: controller.signal }
        );
        
        if (response.ok) {
          const text = await response.text();
          const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);/);
          
          let jsonData;
          if (match && match[1]) {
            jsonData = JSON.parse(match[1]);
          } else {
            const jsonStart = text.indexOf('{');
            const jsonEnd = text.lastIndexOf('}');
            if (jsonStart !== -1 && jsonEnd !== -1) {
              jsonData = JSON.parse(text.substring(jsonStart, jsonEnd + 1));
            }
          }

          if (jsonData && jsonData.status !== 'error' && jsonData.table && jsonData.table.rows) {
            const rows = jsonData.table.rows;
            const portfolioData: PortfolioItem[] = rows.map((row: any) => {
              const cells = row.c;
              if (!cells) return null;
              return {
                title: cells[1]?.v?.toString() || '', // Column B is the Project Title
                category: cells[0]?.v?.toString() || 'General', // Column A is the Category
                description: cells[2]?.v?.toString() || '',
                imageUrl: cells[3]?.v?.toString() || 'https://picsum.photos/seed/portfolio/800/600',
                projectUrl: cells[4]?.v?.toString() || '#'
              };
            }).filter((item: PortfolioItem | null): item is PortfolioItem => 
              item !== null && item.title !== '' && item.category.toLowerCase() !== 'title'
            );

            if (portfolioData.length > 0) {
              processPortfolioData(portfolioData);
              return;
            }
          }
        }
        throw new Error('Could not retrieve data from Google Sheet. Please ensure it is shared as "Anyone with the link can view".');
      } catch (err) {
        handleFetchError(err);
      }
    };

    const handleFetchError = (err: any) => {
      if (err.name === 'AbortError') {
        setError('Connection timed out. Please check your internet or ensure the sheet is public.');
      } else {
        console.error('Error fetching portfolio:', err);
        setError(err.message || 'Failed to load portfolio data. Please ensure the Google Sheet is public.');
      }
      setIsLoading(false);
    };

    const processPortfolioData = (portfolioData: PortfolioItem[]) => {
      setItems(portfolioData);
      const dataCategories = [...new Set(portfolioData.map(item => item.category))];
      const combined = [...new Set(['All', ...PREDEFINED_CATEGORIES.filter(c => c !== 'All'), ...dataCategories])];
      setDynamicCategories(combined);
      setIsLoading(false);
    };

    const controller = new AbortController();
    fetchPortfolio(controller);
    
    return () => controller.abort();
  }, [SHEET_ID]);

  const handleRefresh = () => {
    const controller = new AbortController();
    // We can't easily call the internal fetchPortfolio from here without refactoring, 
    // but a simple window reload or state reset would work.
    // For now, let's just trigger a re-render by resetting the SHEET_ID or similar, 
    // but since SHEET_ID is derived from rawSheetId, we can just reload the page for a clean sync.
    window.location.reload();
  };

  const displayCategories = dynamicCategories.length > 0 ? dynamicCategories : PREDEFINED_CATEGORIES;

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Blobs */}
      <div className="blob blob-1 bg-[#0ea5e9]/20" style={{ top: '10%', left: '10%', opacity: 0.2 }}></div>
      <div className="blob blob-2 bg-[#8b5cf6]/20" style={{ bottom: '10%', right: '10%', opacity: 0.2 }}></div>

      <header className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#8b5cf6] mr-2 tech-glow"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Our Work</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Project <span className="animated-gradient-text">Portfolio</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Explore our successful projects and digital transformations. Powered by real-time data from our project database.
        </motion.p>
      </header>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="w-12 h-12 text-[#0ea5e9] animate-spin mb-4" />
          <p className="text-gray-400 animate-pulse">Synchronizing with database...</p>
        </div>
      ) : error ? (
        <div className="max-w-2xl mx-auto glass-card p-8 border border-red-500/20 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Portfolio Connection Error</h3>
          <p className="text-gray-400 mb-6">{error}</p>
          
          {error.includes('404') && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left text-sm text-red-200">
              <p className="font-bold mb-2">Why am I seeing this?</p>
              <ul className="list-disc list-inside space-y-1">
                <li>The Google Sheet ID might be incorrect.</li>
                <li>The sheet might not be shared as <strong>"Anyone with the link can view"</strong>.</li>
                <li>The sheet might have been deleted.</li>
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleRefresh}
              className="px-6 py-2 bg-[#0ea5e9] text-white rounded-lg font-medium hover:bg-[#0ea5e9]/80 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Retry Sync
            </button>
            <a 
              href={`https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 glass border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Check Sheet
            </a>
          </div>

          <div className="text-left bg-black/30 p-4 rounded-lg text-sm font-mono text-gray-300 overflow-x-auto">
            <p className="text-[#0ea5e9] mb-2">// Setup Checklist:</p>
            <p>1. Open your Google Sheet</p>
            <p>2. Click <strong>Share</strong> (top right)</p>
            <p>3. Change to <strong>"Anyone with the link"</strong></p>
            <p>4. Ensure role is <strong>"Viewer"</strong></p>
            <p>5. Copy the ID from the URL (the long string between /d/ and /edit)</p>
            <p>6. Update <strong>VITE_GOOGLE_SHEET_ID</strong> in Settings → Secrets</p>
            <p className="mt-4 text-[#0ea5e9]">// Expected Column Structure:</p>
            <p className="text-xs">Col A: Category | Col B: Title | Col C: Description | Col D: Image URL | Col E: Project URL</p>
          </div>
        </div>
      ) : (
        <div className="relative z-10">
          {/* Category Dropdown */}
          <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-xs" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-6 py-3 rounded-xl glass border border-white/10 text-white flex items-center justify-between hover:border-[#0ea5e9]/50 transition-all duration-300 shadow-lg group"
              >
                <span className="font-medium">{activeCategory}</span>
                <ChevronDown className={`w-5 h-5 text-[#0ea5e9] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 py-2 glass border border-white/10 rounded-xl shadow-2xl z-50 backdrop-blur-xl max-h-80 overflow-y-auto"
                  >
                    {displayCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-6 py-2.5 text-left flex items-center justify-between transition-colors ${
                          activeCategory === category 
                            ? 'text-[#0ea5e9] bg-[#0ea5e9]/10' 
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="text-sm font-medium">{category}</span>
                        {activeCategory === category && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sectioned Portfolio Grid */}
          <div className="space-y-24">
            {displayCategories.filter(c => c !== 'All' && (activeCategory === 'All' || activeCategory === c)).map((category) => {
              const categoryItems = items.filter(item => item.category === category);
              
              // Don't show empty sections in "All" view
              if (categoryItems.length === 0 && activeCategory === 'All') return null;
              
              // If specifically selected but empty, show a placeholder
              if (categoryItems.length === 0 && activeCategory === category) {
                return (
                  <motion.section 
                    key={category}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">{category}</h2>
                    <p className="text-gray-500 italic">Exciting projects are in development. Stay tuned!</p>
                  </motion.section>
                );
              }

              return (
                <motion.section 
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="flex flex-col">
                      <h2 className="text-3xl font-bold text-white tracking-tight mb-1">
                        {category}
                      </h2>
                      <div className="h-1 w-12 bg-[#0ea5e9] rounded-full"></div>
                    </div>
                    <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                      {categoryItems.length} {categoryItems.length === 1 ? 'Project' : 'Projects'}
                    </span>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                      >
                        <div className="glass-card h-full border border-white/10 overflow-hidden flex flex-col hover:border-[#0ea5e9]/30 transition-colors duration-500">
                          {/* Image Container */}
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={item.imageUrl} 
                              alt={item.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 rounded-full bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-medium backdrop-blur-md">
                                {item.category}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0ea5e9] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                              {item.description}
                            </p>
                            
                            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                              <div className="flex items-center text-gray-500 text-xs">
                                <Folder className="w-3 h-3 mr-1" />
                                <span>Case Study</span>
                              </div>
                              <a 
                                href={item.projectUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center text-sm font-medium text-[#0ea5e9] hover:text-white transition-colors group/link"
                              >
                                View Project
                                <ExternalLink className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {items.length === 0 && !isLoading && !error && (
            <div className="text-center py-20">
              <p className="text-gray-500 italic">No projects found in your database.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
