import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navAbout'), href: '#about' },
    { name: t('navMenu'), href: '#menu' },
    { name: t('navReviews'), href: '#reviews' },
    { name: t('navLocation'), href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 top-0 pt-4 px-4 sm:px-6 lg:px-8">
      <div className={cn(
        "max-w-5xl mx-auto rounded-full transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg py-3 px-6" : "bg-black/40 backdrop-blur-sm py-4 px-8"
      )}>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-1.5" aria-label="Janette's Spicy Island Home">
              <span className="text-2xl tracking-tighter uppercase font-display">
                <span className="text-white">JANNETTE'S</span>{' '}
                <span className="text-red-600">SPICY</span>{' '}
                <span className="text-[#006B3F]">ISLAND</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium tracking-wide text-gray-200 hover:text-white transition-colors uppercase">
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-400 uppercase">
              <button 
                onClick={() => i18n.changeLanguage('en')} 
                className={cn(i18n.language === 'en' ? 'text-white' : 'hover:text-white')}
                aria-label="Switch to English"
                aria-pressed={i18n.language === 'en'}
              >
                EN
              </button>
              <span className="text-gray-600" aria-hidden="true">/</span>
              <button 
                onClick={() => i18n.changeLanguage('fr')} 
                className={cn(i18n.language === 'fr' ? 'text-white' : 'hover:text-white')}
                aria-label="Passer au français"
                aria-pressed={i18n.language === 'fr'}
              >
                FR
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <a href="tel:+15146834741" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label={t('navCallNow')}>
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-white"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-display tracking-wider text-white hover:bg-white/10 rounded-xl uppercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center justify-center gap-4 px-4 py-3 text-lg font-display tracking-wider text-white">
                <button 
                  onClick={() => i18n.changeLanguage('en')} 
                  className={cn(i18n.language === 'en' ? 'text-white' : 'text-gray-500')}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <span className="text-gray-700" aria-hidden="true">/</span>
                <button 
                  onClick={() => i18n.changeLanguage('fr')} 
                  className={cn(i18n.language === 'fr' ? 'text-white' : 'text-gray-500')}
                  aria-label="Passer au français"
                >
                  FR
                </button>
              </div>
              <a 
                href="tel:+15146834741" 
                className="mt-6 flex items-center justify-center gap-2 w-full bg-orange-600 text-white px-5 py-4 rounded-xl font-bold uppercase tracking-wider"
              >
                <Phone className="w-5 h-5" />
                {t('navCallNow')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
