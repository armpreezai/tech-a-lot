import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useScroll } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#10b981] z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            <div className="flex-shrink-0 flex items-center md:w-48 z-10">
              <Link to="/" className="flex items-center">
                <img src="/tech-a-lot-logo.png" alt="Tech-A-Lot Logo" className="h-20 w-auto object-contain" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-6 lg:space-x-10 items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-max -ml-[25px] pl-[1px] z-20">
              <Link to="/" className={`nav-link text-[17px] ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link to="/services" className={`nav-link text-[17px] ${isActive('/services') ? 'active' : ''}`}>Services</Link>
              <Link to="/integrated-solutions" className={`nav-link text-[17px] ${isActive('/integrated-solutions') ? 'active' : ''}`}>Integrated Solutions</Link>
              <Link to="/about" className={`nav-link text-[17px] ${isActive('/about') ? 'active' : ''}`}>About</Link>
              <Link to="/portfolio" className={`nav-link text-[17px] ${isActive('/portfolio') ? 'active' : ''}`}>Portfolio</Link>
              <Link to="/contact" className={`nav-link text-[17px] ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            </div>
            <div className="hidden md:flex items-center justify-end md:w-48 z-10">
              <Link to="/contact" className="btn-primary">Get in Touch</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-[#0ea5e9] focus:outline-none">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md shadow-lg absolute w-full border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
              <Link to="/integrated-solutions" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/integrated-solutions') ? 'active' : ''}`}>Integrated Solutions</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
              <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Portfolio</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
