import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_ARTICLES, BlogArticle } from '../constants';
import { ArrowRight, Calendar, X, Share2, Heart } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section id="blog" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-6 md:mb-0">
             <span className="text-brandTeal font-bold uppercase tracking-[0.2em] text-sm block mb-2">Resource Hub</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Our <span className="italic">Blog</span></h2>
          </div>
          <p className="text-gray-600 max-w-md font-light">
             Explore insights, patient stories, and tips on navigating life during and after treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-brandTeal/5 border border-gray-100 bg-gray-50">
                <motion.img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 text-xs font-bold text-gray-700 shadow-sm border border-white/20">
                  <Calendar size={14} className="text-brandTeal" />
                  <span>{article.date}</span>
                </div>
                <div className="absolute inset-0 bg-brandTeal/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full font-bold text-brandTeal shadow-xl scale-90 group-hover:scale-100 transition-transform">
                    Read Article
                  </div>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brandTeal transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {article.excerpt}
                </p>
                <button className="flex items-center text-brandRed font-bold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-gray-900/40 backdrop-blur-md"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header/Image */}
              <div className="relative h-64 md:h-80 shrink-0">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all active:scale-90"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-brandTeal text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Article</span>
                    <span className="text-xs opacity-80">{selectedArticle.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">{selectedArticle.title}</h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl text-gray-900 font-bold mb-8 italic leading-relaxed border-l-4 border-brandRed pl-6">
                    {selectedArticle.excerpt}
                  </p>
                  <div className="prose prose-lg text-gray-600 font-light leading-loose space-y-6">
                    {selectedArticle.content.split('. ').map((para, i) => (
                      <p key={i}>{para}.</p>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-brandRed transition-colors">
                        <Heart size={20} />
                        <span className="text-sm font-bold">124</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-400 hover:text-brandTeal transition-colors">
                        <Share2 size={20} />
                        <span className="text-sm font-bold">Share</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="bg-brandTeal text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brandTeal/20 hover:bg-brandTeal/90 transition-all"
                    >
                      Close Reader
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;