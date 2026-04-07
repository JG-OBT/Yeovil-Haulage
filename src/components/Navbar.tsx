import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Packing', href: '#packing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex flex-col">
          <span className={`text-xl font-display font-bold leading-none ${scrolled ? 'text-brand-primary' : 'text-white'}`}>
            Yeovil Haulage
          </span>
          <span className={`text-[10px] font-medium tracking-widest uppercase ${scrolled ? 'text-gray-500' : 'text-white/80'}`}>
            Established 1985
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-secondary ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <a 
              href="tel:07860387618" 
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                scrolled ? 'text-brand-primary' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              07860 387618
            </a>
            <a 
              href="#contact" 
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              Get Free Quote
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-brand-secondary flex justify-between items-center"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <div className="flex flex-col gap-4">
                <a 
                  href="tel:07860387618" 
                  className="flex items-center justify-center gap-3 bg-gray-50 text-brand-primary py-4 rounded-xl font-bold border border-gray-100"
                >
                  <Phone className="w-5 h-5" />
                  07860 387618
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-accent text-white py-4 rounded-xl font-bold text-center shadow-lg"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
