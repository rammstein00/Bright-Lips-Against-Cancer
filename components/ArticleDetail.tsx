import React from 'react';
import { motion } from 'framer-motion';
import { BlogArticle } from '../constants';
import { ArrowLeft, Calendar, Share2, Heart, MessageCircle } from 'lucide-react';

interface ArticleDetailProps {
  article?: BlogArticle;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-brandLight">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <button onClick={onBack} className="text-brandTeal font-bold">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pb-24"
    >
      {/* Header Image Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        
        <div className="absolute top-28 left-4 sm:left-8 lg:left-16 z-20">
          <button 
            onClick={onBack}
            className="group flex items-center space-x-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full text-brandTeal font-bold shadow-xl hover:bg-brandTeal hover:text-white transition-all"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Stories</span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-30">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[3rem] shadow-2xl shadow-brandTeal/5 p-8 md:p-16 border border-gray-50"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="bg-brandTeal/10 text-brandTeal px-4 py-2 rounded-full flex items-center space-x-2 text-xs font-bold uppercase tracking-widest">
              <Calendar size={14} />
              <span>{article.date}</span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">6 min read</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-10">
            {article.title}
          </h1>

          <div className="flex items-center space-x-4 mb-12 pb-12 border-b border-gray-100">
            <img 
              src="https://scontent.flas1-1.fna.fbcdn.net/v/t1.6435-9/104804455_972690146494989_5604347788892809637_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=2-aDfB_hY6QQ7kNvwF6bBy_&_nc_oc=AdnZB71z9mkTdrqV-P1DDdXpXU5b89NWkpDWPsM0-5yZQ05xwjHdUJ0pEMLnp_2E7eI&_nc_zt=23&_nc_ht=scontent.flas1-1.fna&_nc_gid=b6oB_l4_Fwq05TW_Qocj5w&oh=00_Afp0R49UnDofRhtfE0u3aLPm4HADOHSVw3gl7G67JB4z8A&oe=699F29D2" 
              className="w-14 h-14 rounded-full border-2 border-brandTeal object-cover shadow-md" 
              alt="Lisandra Balboa" 
            />
            <div>
              <div className="font-bold text-gray-900 text-lg">Lisandra Balboa</div>
              <div className="text-xs text-brandTeal font-bold uppercase tracking-widest">Founder & Executive Director</div>
            </div>
          </div>

          <div className="prose prose-xl max-w-none">
            <p className="text-2xl text-gray-600 font-light leading-relaxed italic border-l-4 border-brandRed pl-8 mb-12">
              {article.excerpt}
            </p>
            
            <div className="text-gray-700 font-light leading-loose space-y-8 text-lg">
              {article.content.split('. ').map((para, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {para}. {i % 3 === 0 && i !== 0 && (
                    <span className="block my-12 p-8 bg-brandLight rounded-3xl text-brandTeal font-medium border border-brandTeal/10 italic">
                      "Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn't."
                    </span>
                  )}
                </motion.p>
              ))}
              
              <p>
                In addition to our emotional support, we continue to work alongside medical professionals to understand how small environmental shifts can improve patient outcomes. A brighter room, a familiar scent, or even a soft texture like our specialized blankets can lower cortisol levels and create a sense of safety during the most stressful hours of treatment.
              </p>
            </div>
          </div>

          {/* Social Interactions */}
          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-brandRed transition-colors group">
                <div className="bg-gray-50 p-3 rounded-full group-hover:bg-brandRed/10">
                  <Heart size={22} />
                </div>
                <span className="font-bold">2.4k</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-brandTeal transition-colors group">
                <div className="bg-gray-50 p-3 rounded-full group-hover:bg-brandTeal/10">
                  <MessageCircle size={22} />
                </div>
                <span className="font-bold">48</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2">Share this story</span>
              <button className="p-3 bg-gray-50 rounded-full text-gray-400 hover:bg-brandTeal hover:text-white transition-all"><Share2 size={18} /></button>
            </div>
          </div>
        </motion.div>

        {/* Next/Prev Navigation */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={onBack}
            className="bg-brandRed text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl shadow-brandRed/20 hover:-translate-y-1 transition-all"
          >
            Explore More Stories
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleDetail;