import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Chambres', href: '#chambres' },
    { name: 'Restauration', href: '#restauration' },
    { name: 'Événements', href: '#evenements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-luxury-blue shadow-2xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className={`absolute inset-0 bg-luxury-blue/90 backdrop-blur-md border-b border-white/5 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Sun className="h-7 w-7 text-gold-400 transition-transform duration-700 group-hover:rotate-180" />
              <div className="absolute inset-0 blur-sm bg-gold-400/20 group-hover:bg-gold-400/40 transition-all"></div>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-display font-bold text-2xl text-white tracking-wider">GFAC</span>
              <span className="text-[10px] font-bold text-gold-500 uppercase tracking-[0.3em] ml-0.5">HÔTEL</span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-gold-400 transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-8 pl-8 border-l border-white/10">
            <button className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
              <Globe className="w-3 h-3" />
              <span>FR</span>
            </button>
            <a 
              href="#contact"
              className="px-8 py-2.5 bg-gold-500 text-luxury-blue text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold-400 transition-all"
            >
              RÉSERVER
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white/80 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-luxury-blue border-b border-white/5"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-gold-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="px-6 py-8 border-t border-white/5 flex flex-col gap-6">
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <Globe className="w-4 h-4" /> FR / EN
                </button>
                <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-4 bg-gold-500 text-luxury-blue text-xs font-black uppercase tracking-[0.2em]"
                >
                  RÉSERVER MAINTENANT
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

