import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Events from './components/Events';
import About from './components/About';
import Blog from './components/Blog';
import ArticleDetail from './components/ArticleDetail';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { BLOG_ARTICLES, BlogArticle } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'article'>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Simple hash-based routing listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article/')) {
        const id = hash.replace('#article/', '');
        setSelectedArticleId(id);
        setView('article');
        window.scrollTo(0, 0);
      } else {
        setView('home');
        setSelectedArticleId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentArticle = BLOG_ARTICLES.find(a => a.id === selectedArticleId);

  const navigateToHome = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen selection:bg-brandTeal/20 selection:text-brandTeal bg-brandLight">
      <Navbar onNavigateHome={navigateToHome} />
      
      <main className="pt-0">
        {view === 'home' ? (
          <>
            <Hero />
            
            {/* Statistics / Impact Section */}
            <section className="bg-brandTeal py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                  <div className="space-y-1">
                    <div className="text-4xl font-bold">5,000+</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Smiles Delivered</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold">120+</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Events Hosted</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold">$45k</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Research Funds</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold">10k+</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Global Advocates</div>
                  </div>
                </div>
              </div>
            </section>

            <Products />
            <Events />
            <About />
            <Blog />
            
            {/* Testimonial Banner */}
            <section className="bg-brandRed py-24 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 flex flex-wrap pointer-events-none">
                {Array.from({length: 20}).map((_, i) => (
                  <Heart key={i} size={80} className="m-8" />
                ))}
              </div>
              <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-3xl md:text-5xl font-serif text-white leading-tight italic"
                >
                  "In the middle of the storm, we found our light through the simplest gesture: a bright red smile."
                </motion.h2>
                <div className="mt-8 text-white/80 font-bold uppercase tracking-widest text-sm">— The Bright Lips Community</div>
              </div>
            </section>
          </>
        ) : (
          <ArticleDetail article={currentArticle} onBack={navigateToHome} />
        )}
      </main>

      <Footer />
      <AiAssistant />
    </div>
  );
};

// Framer Motion import added for the testimonial heading
import { motion } from 'framer-motion';

// Simple helper component used in the Heart grid above
const Heart: React.FC<{size: number, className?: string}> = ({size, className}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    stroke="none"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default App;