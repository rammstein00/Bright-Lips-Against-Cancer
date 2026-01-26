import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-cyan-50/30 to-white">
      {/* Animated background blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-brandTeal opacity-[0.05] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-brandRed opacity-[0.03] rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-brandTeal/10 shadow-sm mb-6">
              <Sparkles size={16} className="text-brandTeal" />
              <span className="text-sm font-semibold text-brandTeal uppercase tracking-widest">Against All Odds</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6">
              Bright <span className="text-brandRed italic">Lips,</span> <br />
              <span className="text-brandTeal italic">Big</span> Smiles.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed font-light">
              We provide emotional support and comfort to chemotherapy patients and their families. Join our mission to paint the world with resilience and hope.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-brandTeal text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brandTeal/20 hover:translate-y-[-2px] hover:shadow-2xl transition-all flex items-center justify-center group">
                Support Our Mission
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-800 border-2 border-gray-100 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                Watch Our Story
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-4 grayscale opacity-60">
              <img src="https://picsum.photos/seed/p1/50/50" className="w-10 h-10 rounded-full ring-2 ring-white" alt="Support" />
              <img src="https://picsum.photos/seed/p2/50/50" className="w-10 h-10 rounded-full ring-2 ring-white -ml-4" alt="Support" />
              <img src="https://picsum.photos/seed/p3/50/50" className="w-10 h-10 rounded-full ring-2 ring-white -ml-4" alt="Support" />
              <p className="text-sm text-gray-500 font-medium">+1.2k supporters this month</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-brandTeal/20 border-8 border-white bg-gray-100 aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={HERO_IMAGES[currentImageIndex]} 
                  alt="Chemotherapy Support Slideshow" 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Floating "Emotional Care" card with continuous animation */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-brandRed p-3 rounded-full text-white">
                    <Heart fill="white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Emotional Care</h3>
                    <p className="text-sm text-gray-600 font-light leading-snug">Because fighting cancer isn't just about the medicine.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating decoration */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-4 border-dashed border-brandTeal/20 rounded-full pointer-events-none"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brandRed rounded-full opacity-10 blur-xl animate-pulse pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;