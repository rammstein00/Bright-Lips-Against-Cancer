import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ShoppingBag, ExternalLink } from 'lucide-react';

const Products: React.FC = () => {
  // Mapping products to their real store URLs from the official site
  const storeLinks: Record<string, string> = {
    '1': 'https://www.brightlipsac.org/product/blanket/2?cs=true&cst=custom',
    '2': 'https://www.brightlipsac.org/product/tank-top/4?cs=true&cst=custom',
    '3': 'https://www.brightlipsac.org/product/t-shirt-unisex/5?cs=true&cst=custom',
    '4': 'https://www.brightlipsac.org/product/tote-bag/1?cs=true&cst=custom',
    '5': 'https://www.brightlipsac.org/shop', // Stickers link to general shop as specific link wasn't provided
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Support Through <span className="text-brandTeal">Style</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Every purchase helps us provide recreational gifts and activities for patients going through chemotherapy.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={storeLinks[product.id]} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative aspect-[3/4] bg-brandLight rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-gray-100 cursor-pointer"
                aria-label={`Buy ${product.name}`}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay actions (still visible on hover for visual cue) */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3 backdrop-blur-[2px]">
                   <div className="bg-white p-4 rounded-full text-brandTeal shadow-xl">
                      <ShoppingBag size={24} />
                   </div>
                   <div className="bg-white p-4 rounded-full text-gray-800 shadow-xl">
                      <ExternalLink size={24} />
                   </div>
                </div>

                <div className="absolute top-4 right-4 bg-brandTeal text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10">
                  ${product.price.toFixed(2)}
                </div>
              </a>

              <div className="text-center px-4">
                <a 
                  href={storeLinks[product.id]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brandTeal transition-colors">{product.name}</h3>
                </a>
                <p className="text-sm text-gray-500 font-light mb-4 line-clamp-2">{product.description}</p>
                <div className="h-0.5 w-12 bg-gray-200 mx-auto group-hover:w-full group-hover:bg-brandTeal transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <a 
            href="https://www.brightlipsac.org/shop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brandRed text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brandRed/20 hover:translate-y-[-2px] transition-all group"
           >
              Visit Our Official Store
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ShoppingBag className="ml-2" size={20} />
              </motion.span>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Products;