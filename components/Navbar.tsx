import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, UserCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import UserMenu from './UserMenu';
import { useAuth } from './AuthContext';

interface NavbarProps {
  onNavigateHome?: () => void;
  onOpenAuth?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useAuth();

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

  const handleLogoClick = () => {
    if (onNavigateHome) onNavigateHome();
    scrollToSection('hero');
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Check if we are on an article page
    if (window.location.hash.includes('article/')) {
      if (onNavigateHome) onNavigateHome();
      // Delay slightly to allow the home view to mount
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || window.location.hash.includes('article') ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={handleLogoClick}
          >
            <Logo className="h-20 w-auto relative z-10 transition-transform group-hover:scale-105 duration-500" />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-brandTeal font-medium transition-colors text-sm uppercase tracking-wider outline-none relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brandRed transition-all group-hover:w-full"></span>
              </button>
            ))}
            <button className="relative p-2 text-gray-600 hover:text-brandRed transition-colors">
              <ShoppingCart size={22} />
              <span className="absolute top-0 right-0 bg-brandRed text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
            </button>

            {/* Auth: Sign In button or User Menu */}
            {user ? (
              <UserMenu />
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-brandTeal/30 text-brandTeal hover:bg-brandTeal hover:text-white font-bold text-sm uppercase tracking-wide transition-all active:scale-95"
              >
                <UserCircle size={18} />
                <span>Sign In</span>
              </button>
            )}

            <button 
              onClick={() => scrollToSection('hero')}
              className="bg-brandTeal text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brandTeal/20 hover:bg-brandTeal/90 transition-all active:scale-95 text-sm uppercase tracking-wide"
            >
              Donate Now
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile: User avatar or sign in */}
            {user ? (
              <UserMenu />
            ) : (
              <button onClick={onOpenAuth} className="text-brandTeal p-2">
                <UserCircle size={24} />
              </button>
            )}
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

              {/* Mobile sign in button */}
              {!user && (
                <button
                  onClick={() => { setIsOpen(false); if (onOpenAuth) onOpenAuth(); }}
                  className="w-full bg-white border-2 border-brandTeal text-brandTeal px-6 py-3 rounded-xl font-bold"
                >
                  Sign In / Sign Up
                </button>
              )}

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