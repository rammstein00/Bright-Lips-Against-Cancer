
import React from 'react';
import { motion } from 'framer-motion';
import { EVENTS } from '../constants';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-brandLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-6 md:mb-0">
             <span className="text-brandRed font-bold uppercase tracking-[0.2em] text-sm block mb-2">Our Community</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Upcoming <span className="italic">Events</span></h2>
          </div>
          <p className="text-gray-600 max-w-md font-light">
             Join us in our upcoming activities designed to raise awareness and celebrate life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENTS.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-brandTeal/5 border border-white flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8"
            >
              <div className="bg-brandTeal/10 p-6 rounded-2xl text-center min-w-[100px]">
                <span className="text-brandTeal font-bold text-3xl block">{event.date.split(' ')[2]}</span>
                <span className="text-brandTeal/60 text-xs font-bold uppercase tracking-widest">{event.date.split(' ')[1]}</span>
              </div>
              
              <div className="flex-1">
                <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${
                  event.status === 'Sold Out' ? 'bg-red-50 text-brandRed' : 'bg-brandTeal/10 text-brandTeal'
                }`}>
                  {event.status}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-2 text-brandTeal" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={16} className="mr-2 text-brandTeal" />
                    {event.location}
                  </div>
                </div>
              </div>

              <button className={`p-4 rounded-2xl transition-all ${
                event.status === 'Sold Out' ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-brandRed text-white hover:bg-brandRed/90 shadow-lg shadow-brandRed/20'
              }`}>
                <Ticket size={24} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
