
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="https://i.postimg.cc/mD8R5Y2m/logo-bright-lips.png" alt="Logo" className="w-12 h-12 brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-brandTeal leading-none">Bright Lips</span>
                <span className="text-[10px] text-brandRed font-bold tracking-widest uppercase">Against Cancer</span>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Making a difference in the lives of chemotherapy patients through love, care, and community support.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brandTeal transition-colors"><Facebook size={20} /></a>
               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brandRed transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brandTeal uppercase tracking-widest">Location</h4>
            <div className="space-y-4 text-gray-400 font-light">
               <div className="flex items-start space-x-3">
                 <MapPin size={20} className="shrink-0 text-brandTeal" />
                 <span>Bright Lips Against Cancer<br />10292 NW 9th Street Cir, Suite 203<br />Miami, Florida 33172</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Phone size={20} className="shrink-0 text-brandTeal" />
                 <span>+1 (305) 555-0123</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Mail size={20} className="shrink-0 text-brandTeal" />
                 <span>brightlipsagainstcancer@gmail.com</span>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brandTeal uppercase tracking-widest">Hours</h4>
            <ul className="space-y-3 text-gray-400 font-light">
               <li className="flex justify-between"><span>Monday</span> <span className="text-gray-600 italic">Closed</span></li>
               <li className="flex justify-between"><span>Tuesday</span> <span>9:00 am - 5:00 pm</span></li>
               <li className="flex justify-between"><span>Wednesday</span> <span>9:00 am - 5:00 pm</span></li>
               <li className="flex justify-between"><span>Thursday</span> <span>9:00 am - 5:00 pm</span></li>
               <li className="flex justify-between"><span>Friday</span> <span>9:00 am - 2:00 pm</span></li>
               <li className="flex justify-between"><span>Sat - Sun</span> <span className="text-gray-600 italic">Closed</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-brandTeal uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-400 mb-6 font-light">Get the latest updates on events and success stories.</p>
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10 focus-within:border-brandTeal transition-all">
              <input type="email" placeholder="Your Email" className="bg-transparent border-none focus:ring-0 px-4 py-2 w-full text-sm outline-none" />
              <button className="bg-brandTeal text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-light tracking-widest uppercase">
          <p>© 2026 BRIGHT LIPS AGAINST CANCER. ALL RIGHTS RESERVED.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={12} className="text-brandRed" fill="#E31B23" />
            <span>in Miami</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
