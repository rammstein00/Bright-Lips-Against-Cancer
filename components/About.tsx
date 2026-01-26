
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, HandHeart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -top-12 -left-12 w-64 h-64 bg-brandTeal/10 rounded-full blur-3xl" />
             <div className="relative z-10 grid grid-cols-2 gap-4">
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  src="https://picsum.photos/seed/abt1/400/500" 
                  className="rounded-3xl shadow-xl hover:rotate-2 transition-transform duration-500 mt-12" 
                />
                <motion.img 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  src="https://picsum.photos/seed/abt2/400/500" 
                  className="rounded-3xl shadow-xl -hover:rotate-2 transition-transform duration-500 mb-12" 
                />
             </div>
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ repeat: Infinity, duration: 5 }}
               className="absolute -bottom-10 right-10 md:-right-20 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-50 z-20 max-w-[280px]"
             >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-brandTeal rounded-full flex items-center justify-center text-white">
                    <HandHeart size={24} />
                  </div>
                  <span className="font-bold text-gray-900">Empowering Souls</span>
                </div>
                <p className="text-sm text-gray-500 italic leading-relaxed">
                  "Bright Lips gave me the smile I thought I had lost during chemo. They are family."
                </p>
                <div className="mt-4 text-xs font-bold text-brandTeal uppercase tracking-widest">— Maria S.</div>
             </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brandTeal font-bold uppercase tracking-widest text-sm block mb-4">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              A nonprofit dedicated to <span className="text-brandRed">emotional healing</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
              Bright Lips Against Cancer, Inc. is a nonprofit organization created to help the fight against cancer. We provide emotional support to patients and families going through chemotherapy treatment with a variety of recreational gifts and activities.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="bg-brandTeal/10 p-4 rounded-2xl text-brandTeal shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Our Commitment</h4>
                  <p className="text-gray-500 font-light">Raising ovarian cancer awareness and supporting other nonprofit organizations to raise funds for research.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5">
                <div className="bg-brandRed/10 p-4 rounded-2xl text-brandRed shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Passionate Community</h4>
                  <p className="text-gray-500 font-light">We are a family of survivors, volunteers, and advocates working together to bring big smiles.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
