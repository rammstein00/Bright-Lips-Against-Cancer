import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_ARTICLES } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
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
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-brandTeal/5 border border-gray-100">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 text-xs font-bold text-gray-700 shadow-sm">
                  <Calendar size={14} className="text-brandTeal" />
                  <span>{article.date}</span>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brandTeal transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {article.excerpt}
                </p>
                <button className="flex items-center text-brandRed font-bold group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;