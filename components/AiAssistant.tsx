import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Heart } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Message } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your Bright Lips Assistant. How can I help or support you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Use direct process.env.API_KEY as per instructions
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: 'You are a compassionate assistant for "Bright Lips Against Cancer". Goal: provide emotional support and info about the nonprofit helping chemo patients. Empathetic, lighthearted, resilience-focused. Mention "Bright Lips" occasionally. Concise.',
          temperature: 0.7,
        },
      });

      const aiText = response.text || "I'm here for you. Stay strong!";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble connecting, but remember: You are brave and strong!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            <div className="bg-brandTeal p-4 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Heart size={18} fill="white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Bright Lips Assistant</h3>
                  <div className="flex items-center text-[10px] opacity-80 uppercase tracking-widest font-bold">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                    Online Support
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brandLight/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' ? 'bg-brandTeal text-white rounded-tr-none' : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-brandTeal" />
                    <span className="text-xs text-gray-400 font-medium">Assistant is thinking...</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-white border-t flex space-x-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 border-none focus:ring-2 ring-brandTeal/20 rounded-xl px-4 py-2 text-sm outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brandTeal text-white p-2 rounded-xl hover:bg-brandTeal/90 transition-all active:scale-95 disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brandRed text-white p-4 rounded-full shadow-2xl shadow-brandRed/30 hover:scale-110 active:scale-95 transition-all group relative"
      >
        <div className="absolute inset-0 bg-brandRed rounded-full animate-ping opacity-20 pointer-events-none" />
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default AiAssistant;