import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen } from 'lucide-react';

export function Blog() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute inset-0 grid-bg opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-neon-blue" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Knowledge Hub</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter uppercase">
            The <span className="text-gradient">Blog</span>
          </h1>
          
          <div className="glass-card p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <Sparkles className="w-12 h-12 text-neon-blue mx-auto mb-8 animate-pulse" />
            
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-6 tracking-tight">
              Our latest insights <br />
              <span className="text-white/40 italic">coming soon.</span>
            </h2>
            
            <p className="text-white/40 text-lg font-light max-w-md mx-auto leading-relaxed">
              We're architecting a new way to share our findings on autonomous systems, 
              AI strategy, and the future of work. Stay tuned.
            </p>

            <div className="mt-12 flex justify-center gap-4">
              <div className="w-2 h-2 rounded-full bg-neon-blue animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-neon-blue animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-neon-blue animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
