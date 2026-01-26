import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Products', href: 'products' },
    { name: 'Events', href: 'events' },
    { name: 'About', href: 'about' },
    { name: 'Blog', href: 'blog' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
               <motion.div 
                 animate={{ 
                   scale: [1, 1.2, 1],
                   opacity: [0.2, 0.4, 0.2] 
                 }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="absolute -inset-2 bg-brandTeal rounded-full blur-xl transition-opacity group-hover:opacity-60" 
               />
               <img 
                 src="https://i.postimg.cc/mD8R5Y2m/logo-bright-lips.png" 
                 alt="Bright Lips Logo" 
                 className="h-14 w-auto object-contain relative z-10 transition-transform group-hover:scale-110" 
               />
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-brandTeal font-medium transition-colors text-sm uppercase tracking-wider outline-none relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brandTeal transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button className="relative p-2 text-gray-600 hover:text-brandRed transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute top-0 right-0 bg-brandRed text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
            </button>
            <button 
              onClick={() => scrollToSection('hero')}
              className="bg-brandTeal text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-brandTeal/20 hover:bg-brandTeal/90 transition-all active:scale-95 text-sm uppercase tracking-wide"
            >
              Donate Now
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-600">
               <ShoppingCart size={22} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-gray-600 hover:text-brandTeal text-lg font-medium px-2 py-2 transition-colors border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('hero')}
                className="w-full bg-brandTeal text-white px-6 py-3 rounded-xl font-bold shadow-lg"
              >
                Donate Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;