import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

const Products: React.FC = () => {
  /**
   * Mapeo verificado de IDs locales a URLs de la tienda oficial Square de Bright Lips AC.
   * Basado en la estructura: /product/{nombre}/{id_interno}
   */
  const storeLinks: Record<string, string> = {
    '1': 'https://www.brightlipsac.org/product/blanket/2',       // Blanket
    '2': 'https://www.brightlipsac.org/product/tank-top/4',      // Tank Top
    '3': 'https://www.brightlipsac.org/product/t-shirt-unisex/5', // T-Shirt
    '4': 'https://www.brightlipsac.org/product/tote-bag/1',      // Tote Bag
    '5': 'https://www.brightlipsac.org/product/sticker/3',       // Sticker (Corregido)
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
            <span className="text-brandRed font-bold uppercase tracking-widest text-sm mb-2 block">Official Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Support Our <span className="text-brandTeal">Cause</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Toca cualquier producto para ser redirigido a nuestra tienda segura. Cada compra ayuda directamente a pacientes en quimioterapia.
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
            >
              <a 
                href={storeLinks[product.id] || 'https://www.brightlipsac.org/shop'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block bg-white rounded-[2.5rem] p-4 transition-all hover:shadow-2xl hover:shadow-brandTeal/10 border border-transparent hover:border-brandTeal/10 cursor-pointer active:scale-95"
              >
                <div className="relative aspect-[3/4] bg-brandLight rounded-[2rem] overflow-hidden mb-6 shadow-inner">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Badge de Precio */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-2 rounded-2xl text-sm font-bold shadow-lg z-10 flex items-center space-x-1 border border-gray-100">
                    <span className="text-brandTeal">$</span>
                    <span>{product.price.toFixed(2)}</span>
                  </div>

                  {/* Overlay con icono de compra optimizado */}
                  <div className="absolute inset-0 bg-brandTeal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                    <motion.div 
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="bg-white p-5 rounded-full text-brandTeal shadow-2xl flex items-center justify-center"
                    >
                      <ShoppingBag size={28} />
                    </motion.div>
                  </div>
                </div>

                <div className="text-center px-2">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brandTeal transition-colors">
                      {product.name}
                    </h3>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-brandTeal transition-colors" />
                  </div>
                  <p className="text-sm text-gray-500 font-light mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="h-1 w-8 bg-gray-100 mx-auto rounded-full group-hover:w-24 group-hover:bg-brandTeal transition-all duration-500" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.brightlipsac.org/shop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brandRed text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-brandRed/30 hover:bg-brandRed/90 transition-all group"
           >
              Shop Full Store
              <ShoppingBag className="ml-3" size={22} />
           </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Products;