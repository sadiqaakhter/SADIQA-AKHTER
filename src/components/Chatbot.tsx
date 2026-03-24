import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/src/utils/cn';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Source II Studio! I\'m your AI automation strategist. How can I help you reclaim your time and automate your business workflows today?' }
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

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are the Lead AI Strategist for Source II Studio. Your goal is to help potential clients understand the ROI of AI automation. Be professional, visionary, and highly knowledgeable about AI agents, Zapier/Make automations, and creative content pipelines. If asked about pricing, refer them to the Pricing page. If they want to book a call, guide them to the Contact page. Keep responses concise but impactful.",
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-white text-black rounded-[2rem] shadow-2xl flex items-center justify-center z-50 neon-glow group overflow-hidden"
      >
        <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <MessageSquare className="w-7 h-7 relative z-10" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-28 right-8 w-[90vw] md:w-[450px] h-[650px] glass-card flex flex-col z-50 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border-white/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 bg-white/[0.02] flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-10" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple p-[1px]">
                  <div className="w-full h-full bg-dark-bg rounded-[calc(1rem-1px)] flex items-center justify-center">
                    <Bot className="text-neon-blue w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="font-display font-bold text-lg tracking-tight">Source II <span className="text-neon-blue">Strategist</span></div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <span className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">Neural Link Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide bg-gradient-to-b from-transparent to-white/[0.01]"
            >
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={cn(
                    "flex gap-4 max-w-[90%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border",
                    msg.role === 'user' ? "bg-white/5 border-white/10" : "bg-neon-blue/10 border-neon-blue/20"
                  )}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white/40" /> : <Bot className="w-5 h-5 text-neon-blue" />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-sm leading-relaxed shadow-xl",
                    msg.role === 'user' 
                      ? "bg-white text-black font-medium rounded-tr-none" 
                      : "bg-white/[0.03] border border-white/10 rounded-tl-none text-white/80"
                  )}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-neon-blue/20 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 text-neon-blue animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/10 bg-white/[0.02] relative">
              <div className="absolute inset-0 grid-bg opacity-5" />
              <div className="relative z-10">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about AI ROI..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:border-neon-blue/50 transition-all placeholder:text-white/20"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:bg-neon-blue transition-all duration-300 disabled:opacity-50 disabled:grayscale"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 text-[9px] text-center text-white/20 flex items-center justify-center gap-2 font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-3 h-3 text-neon-blue" />
                Source II Autonomous Intelligence
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
