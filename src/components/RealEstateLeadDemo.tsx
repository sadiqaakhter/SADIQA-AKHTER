import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Bot, 
  Home, 
  Calendar, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  MapPin,
  DollarSign,
  Zap
} from 'lucide-react';
import { cn } from '@/src/utils/cn';

const conversation = [
  {
    role: 'user',
    text: "Hi, I'm interested in the 3-bedroom house on Maple Ave.",
    type: 'incoming',
    label: 'New Lead from Zillow'
  },
  {
    role: 'agent',
    text: "Hello! I'm the Apex Realty AI assistant. I'd love to help you with that. To better assist you, are you currently pre-approved for a mortgage?",
    type: 'qualification',
    label: 'AI Qualification'
  },
  {
    role: 'user',
    text: "Yes, I am. My budget is around $650k.",
    type: 'data',
    label: 'Lead Response'
  },
  {
    role: 'agent',
    text: "Great! Maple Ave is listed at $625k, so that fits perfectly. Would you like to schedule a viewing for this Saturday at 10:00 AM or 2:00 PM?",
    type: 'scheduling',
    label: 'AI Scheduling'
  },
  {
    role: 'user',
    text: "Saturday at 10:00 AM works for me.",
    type: 'confirmation',
    label: 'Lead Confirmed'
  },
  {
    role: 'agent',
    text: "Perfect! I've scheduled your viewing for Saturday at 10:00 AM. I've also sent the property disclosure documents to your email. See you then!",
    type: 'success',
    label: 'Task Completed'
  }
];

export function RealEstateLeadDemo() {
  const [step, setStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || step >= conversation.length - 1) return;
    const timer = setTimeout(() => {
      setStep(s => s + 1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [step, isAutoPlaying]);

  const reset = () => {
    setStep(0);
    setIsAutoPlaying(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-24 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Context & Stats */}
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-neon-blue mb-4 block"
          >
            Industry Use Case
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter uppercase leading-[0.9]">
            Real Estate <br />
            <span className="text-gradient">Lead Automation</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 font-light leading-relaxed">
            See how our AI agents handle the entire lead lifecycle—from initial inquiry to qualified viewing—without a single human touchpoint.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Response Time', val: '< 1 min', icon: Clock },
              { label: 'Qualification Rate', val: '+45%', icon: CheckCircle2 },
              { label: 'Booking Efficiency', val: '3x Faster', icon: Calendar },
              { label: 'Cost per Lead', val: '-60%', icon: DollarSign },
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 border-white/5">
                <stat.icon className="w-5 h-5 text-neon-blue mb-4" />
                <div className="text-2xl font-display font-bold mb-1">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>

          <button 
            onClick={reset}
            className="mt-12 flex items-center gap-2 text-neon-blue font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
          >
            <Zap className="w-4 h-4" />
            Restart Simulation
          </button>
        </div>

        {/* Right Side: Visual Flow */}
        <div className="relative">
          <div className="glass-card p-8 min-h-[600px] flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10" />
            
            {/* Header */}
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Home className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <div className="font-bold text-sm">Property Inquiry</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest">Maple Ave Listing</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-[10px] font-bold text-neon-blue uppercase tracking-widest">
                Active Agent
              </div>
            </div>

            {/* Chat Flow */}
            <div className="flex-grow space-y-6 relative z-10">
              <AnimatePresence mode="popLayout">
                {conversation.slice(0, step + 1).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={cn(
                      "flex gap-4 max-w-[85%]",
                      msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border",
                      msg.role === 'user' ? "bg-white/5 border-white/10" : "bg-neon-blue/10 border-neon-blue/20"
                    )}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-white/40" /> : <Bot className="w-4 h-4 text-neon-blue" />}
                    </div>
                    <div className="space-y-1">
                      <div className={cn(
                        "text-[8px] font-bold uppercase tracking-widest mb-1",
                        msg.role === 'user' ? "text-right text-white/20" : "text-neon-blue/40"
                      )}>
                        {msg.label}
                      </div>
                      <div className={cn(
                        "p-4 rounded-2xl text-xs leading-relaxed shadow-xl",
                        msg.role === 'user' 
                          ? "bg-white text-black font-medium rounded-tr-none" 
                          : "bg-white/[0.03] border border-white/10 rounded-tl-none text-white/80"
                      )}>
                        {msg.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Automation Actions (Sidebar/Overlay) */}
            <AnimatePresence>
              {step === conversation.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute right-4 top-24 w-48 space-y-3 z-20"
                >
                  {[
                    { icon: Mail, text: 'Docs Sent', color: 'text-blue-400' },
                    { icon: Calendar, text: 'Event Created', color: 'text-purple-400' },
                    { icon: MessageSquare, text: 'CRM Updated', color: 'text-emerald-400' },
                  ].map((action, i) => (
                    <div key={i} className="bg-dark-bg/90 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-2xl">
                      <action.icon className={cn("w-4 h-4", action.color)} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{action.text}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer Status */}
            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">System Online</span>
              </div>
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Step {step + 1} of {conversation.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
