import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Youtube, Instagram, Twitter, Mail, Globe, ChevronDown, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageCode } from '../translations';

// Helper for active link styles
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive 
          ? 'text-accent' 
          : 'text-slate-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

const languages: { code: LanguageCode; name: string }[] = [
  { code: 'BR', name: 'Português (BR)' },
  { code: 'US', name: 'English' },
  { code: 'ES', name: 'Español' },
  { code: 'FR', name: 'Français' },
  { code: 'DE', name: 'Deutsch' },
  { code: 'IT', name: 'Italiano' },
  { code: 'JP', name: '日本語' },
  { code: 'CN', name: '中文' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-primary text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-primary/80 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                <span className="text-xl">🍌</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-accent leading-none">Iniciei no Digital</span>
                <span className="text-[10px] text-slate-400 leading-none">Nano Banana</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/">{t('nav_home')}</NavLink>
              <NavLink to="/explore">{t('nav_explore')}</NavLink>
              <NavLink to="/generator">{t('nav_generator')}</NavLink>
              <NavLink to="/tutorials">{t('nav_tutorials')}</NavLink>
              <NavLink to="/contact">{t('nav_contact')}</NavLink>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {/* New White Pill YouTube Button */}
              <a 
                href="https://www.youtube.com/@inicieinodigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg group"
              >
                <Play className="w-5 h-5 text-red-600 fill-red-600 group-hover:scale-110 transition-transform" />
                <span className="tracking-tight">YouTube</span>
              </a>
              
              {/* Language Selector */}
              <div className="relative" ref={langMenuRef}>
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 border border-slate-700 rounded-md hover:border-slate-500 hover:text-white bg-slate-900 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-slate-800 transition-colors ${
                          language === lang.code ? 'text-accent bg-slate-800/50' : 'text-slate-300'
                        }`}
                      >
                        <span className="font-mono text-xs text-slate-500 w-6 font-bold">{lang.code}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-900">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <div className="flex flex-col space-y-4 py-4">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>{t('nav_home')}</NavLink>
                <NavLink to="/explore" onClick={() => setIsMenuOpen(false)}>{t('nav_explore')}</NavLink>
                <NavLink to="/generator" onClick={() => setIsMenuOpen(false)}>{t('nav_generator')}</NavLink>
                <NavLink to="/tutorials" onClick={() => setIsMenuOpen(false)}>{t('nav_tutorials')}</NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>{t('nav_contact')}</NavLink>
              </div>
              <div className="border-t border-slate-800 pt-4 flex flex-col gap-4">
                 <div className="flex items-center justify-between">
                    <a 
                        href="https://www.youtube.com/@inicieinodigital" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-full font-bold"
                      >
                        <Play className="w-5 h-5 text-red-600 fill-red-600" />
                        <span>YouTube</span>
                      </a>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                                setIsMenuOpen(false);
                            }}
                            className={`text-left px-3 py-2 text-xs border rounded ${
                                language === lang.code ? 'border-accent text-accent' : 'border-slate-700 text-slate-400'
                            }`}
                        >
                            {lang.name}
                        </button>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                  <span className="text-xl">🍌</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-accent leading-none">Iniciei no Digital</span>
                  <span className="text-[10px] text-slate-400 leading-none">Nano Banana</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 max-w-xs">
                {t('footer_desc')}
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{t('footer_links')}</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-slate-400 hover:text-accent">{t('nav_home')}</Link></li>
                <li><Link to="/explore" className="text-sm text-slate-400 hover:text-accent">{t('nav_explore')}</Link></li>
                <li><Link to="/generator" className="text-sm text-slate-400 hover:text-accent">{t('nav_generator')}</Link></li>
                <li><Link to="/tutorials" className="text-sm text-slate-400 hover:text-accent">{t('nav_tutorials')}</Link></li>
                <li><Link to="/contact" className="text-sm text-slate-400 hover:text-accent">{t('nav_contact')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">{t('nav_contact')}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:igor.vilarim@gmail.com">igor.vilarim@gmail.com</a>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors">
                  <Twitter className="w-4 h-4" />
                  <a href="https://twitter.com/igor_vilarim" target="_blank" rel="noreferrer">@igor_vilarim</a>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors">
                  <Instagram className="w-4 h-4" />
                  <a href="https://instagram.com/inicieinodigital" target="_blank" rel="noreferrer">@inicieinodigital</a>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors">
                  <Youtube className="w-4 h-4" />
                  <a href="https://youtube.com/@inicieinodigital" target="_blank" rel="noreferrer">@inicieinodigital</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © 2025 Iniciei no Digital. {t('footer_rights')} {language}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;