import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
                Let's build your <br /><span className="text-gradient">AI Future.</span>
              </h1>
              <p className="text-white/50 text-xl mb-12 leading-relaxed max-w-lg">
                Ready to automate? Book a call or send us a message to start your AI transformation.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-blue/50 transition-colors">
                    <Mail className="text-neon-blue w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Email Us</div>
                    <div className="text-lg font-bold">hello@sourceii.studio</div>
                  </div>
                </div>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-blue/50 transition-colors">
                    <Calendar className="text-neon-blue w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Book a Call</div>
                    <div className="text-lg font-bold">calendly.com/sourceii</div>
                  </div>
                </a>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MessageSquare className="text-neon-blue w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">Live Chat</div>
                    <div className="text-lg font-bold">Available 24/7 via AI</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="text-2xl font-display font-bold mb-8">Send us a message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-blue transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-blue transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Service Interested In</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-blue transition-colors appearance-none">
                        <option className="bg-dark-bg">AI Automation</option>
                        <option className="bg-dark-bg">AI Chatbots</option>
                        <option className="bg-dark-bg">AI Content Systems</option>
                        <option className="bg-dark-bg">AI Agents</option>
                        <option className="bg-dark-bg">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                      <textarea 
                        required
                        rows={4} 
                        placeholder="Tell us about your project..." 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neon-blue transition-colors"
                      />
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-neon-blue/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="text-neon-blue w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">Message Sent!</h3>
                  <p className="text-white/50 mb-8 max-w-xs">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-neon-blue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
