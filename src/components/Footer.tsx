import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-20"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0ea5e9] to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {/* Business Hours */}
          <div className="flex flex-col items-center md:items-start md:pr-12 md:border-r border-white/5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-sky-500/80">
              Operations
            </h4>
            <div className="w-full max-w-[240px] space-y-4">
              {[
                { day: 'Mon — Thu', time: '08:30 - 17:00' },
                { day: 'Friday', time: '08:30 - 16:00' },
                { day: 'Saturday', time: '09:00 - 14:00' },
                { day: 'Sunday', time: 'Closed', isOff: true }
              ].map((item) => (
                <div key={item.day} className="flex justify-between items-center">
                  <span className="text-[11px] uppercase tracking-wider text-gray-500">{item.day}</span>
                  <span className={`text-xs font-light ${item.isOff ? 'text-gray-600 italic' : 'text-gray-300'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo & Navigation */}
          <div className="flex flex-col items-center px-12">
            <Link to="/" className="mb-12 group">
              <img 
                src="/tech-a-lot-logo.png" 
                alt="Tech-A-Lot Logo" 
                className="h-[55px] w-[55px] object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-700" 
              />
            </Link>
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 ml-0 -mt-[30px]">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/services', label: 'Services' },
                  { to: '/about', label: 'About' },
                  { to: '/portfolio', label: 'Portfolio' },
                  { to: '/contact', label: 'Contact' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-[11px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end md:pl-12 md:border-l border-white/5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 text-emerald-500/80">
              Connection
            </h4>
            <div className="space-y-6 text-center md:text-right">
              <div className="group">
                <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 mb-1">Electronic Mail</p>
                <a href="mailto:info@tech-a-lot.co.za" className="text-sm font-light text-gray-300 hover:text-sky-400 transition-colors">
                  info@tech-a-lot.co.za
                </a>
              </div>
              <div className="group">
                <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 mb-1">Telephonic</p>
                <a href="tel:0826504740" className="text-sm font-light text-gray-300 hover:text-emerald-400 transition-colors">
                  +27 82 650 4740
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-px bg-sky-500/30"></div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
              &copy; 2026 Tech-A-Lot <span className="mx-2">/</span> Digital Solutions
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/privacy-policy" className="text-[9px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-[9px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
