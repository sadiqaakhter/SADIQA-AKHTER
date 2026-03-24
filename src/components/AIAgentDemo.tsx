import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Code, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  Terminal,
  Database,
  Globe
} from 'lucide-react';
import { cn } from '@/src/utils/cn';

const steps = [
  {
    id: 'input',
    title: 'Input Received',
    icon: MessageSquare,
    description: 'User asks: "Find the best AI tools for e-commerce and summarize their pricing."',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    id: 'analysis',
    title: 'Strategic Analysis',
    icon: Cpu,
    description: 'Agent identifies intent: Market Research & Data Extraction.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    id: 'tools',
    title: 'Tool Execution',
    icon: Zap,
    description: 'Executing Google Search & Web Scraping modules.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    subtasks: [
      { icon: Globe, label: 'Searching Google...' },
      { icon: Database, label: 'Extracting pricing tables...' },
      { icon: Code, label: 'Formatting data...' }
    ]
  },
  {
    id: 'output',
    title: 'Final Output',
    icon: CheckCircle2,
    description: 'Delivering a structured report with 5 tools and comparison table.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  }
];

export function AIAgentDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-neon-blue mb-4 block"
        >
          Interactive Demo
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter">
          How Our <span className="text-gradient">AI Agents</span> Work
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">
          Watch a real-time visualization of our agents processing a complex business request.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Steps List */}
        <div className="lg:col-span-5 space-y-4">
          {steps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => {
                setActiveStep(idx);
                setIsAutoPlaying(false);
              }}
              className={cn(
                "w-full text-left p-6 rounded-3xl border transition-all duration-500 group relative overflow-hidden",
                activeStep === idx 
                  ? "bg-white/5 border-white/20 shadow-2xl" 
                  : "bg-transparent border-white/5 hover:border-white/10"
              )}
            >
              {activeStep === idx && (
                <motion.div 
                  layoutId="active-bg"
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-transparent -z-10"
                />
              )}
              <div className="flex gap-4 items-start">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500",
                  activeStep === idx ? "scale-110 " + step.bg : "bg-white/5"
                )}>
                  <step.icon className={cn("w-6 h-6", activeStep === idx ? step.color : "text-white/20")} />
                </div>
                <div>
                  <h3 className={cn(
                    "font-display font-bold mb-1 transition-colors",
                    activeStep === idx ? "text-white" : "text-white/40"
                  )}>
                    {step.title}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed transition-colors",
                    activeStep === idx ? "text-white/60" : "text-white/20"
                  )}>
                    {step.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Visualization Area */}
        <div className="lg:col-span-7 h-full">
          <div className="glass-card h-[500px] relative overflow-hidden flex flex-col p-0">
            {/* Header / Terminal Bar */}
            <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                Agent_Runtime_v2.4
              </div>
            </div>

            {/* Content Display */}
            <div className="flex-grow p-8 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col"
                >
                  {activeStep === 0 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-neon-blue">
                        <MessageSquare className="w-6 h-6" />
                        <span className="font-mono text-sm">Incoming Request...</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl font-mono text-sm text-white/80 leading-relaxed italic">
                        "Hey Source II, I need to find the top 5 AI-driven e-commerce tools for 2024. Can you summarize their key features and pricing structures for me?"
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 text-purple-400">
                        <Cpu className="w-6 h-6" />
                        <span className="font-mono text-sm">Analyzing Intent...</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'Primary Goal', val: 'Market Intelligence' },
                          { label: 'Data Type', val: 'Pricing/Features' },
                          { label: 'Complexity', val: 'High (Web Scraping)' },
                          { label: 'Priority', val: 'Standard' }
                        ].map((item, i) => (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            key={i} 
                            className="bg-white/5 border border-white/10 p-4 rounded-xl"
                          >
                            <div className="text-[10px] text-white/30 uppercase mb-1">{item.label}</div>
                            <div className="text-sm font-bold">{item.val}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-yellow-400">
                        <Zap className="w-6 h-6" />
                        <span className="font-mono text-sm">Executing Tools...</span>
                      </div>
                      <div className="space-y-3">
                        {steps[2].subtasks?.map((task, i) => (
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.5 }}
                            key={i}
                            className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5"
                          >
                            <task.icon className="w-5 h-5 text-yellow-400" />
                            <span className="text-sm font-mono">{task.label}</span>
                            <motion.div 
                              animate={{ opacity: [0.2, 1, 0.2] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="ml-auto w-2 h-2 rounded-full bg-yellow-400" 
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-emerald-400">
                        <CheckCircle2 className="w-6 h-6" />
                        <span className="font-mono text-sm">Task Completed</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-xs font-bold text-white/40 uppercase">Tool Name</span>
                          <span className="text-xs font-bold text-white/40 uppercase">Pricing</span>
                        </div>
                        {[
                          { name: 'Klaviyo AI', price: '$45/mo' },
                          { name: 'Octane AI', price: '$50/mo' },
                          { name: 'Gorgias', price: 'Custom' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="font-bold">{item.name}</span>
                            <span className="text-emerald-400 font-mono">{item.price}</span>
                          </div>
                        ))}
                        <div className="pt-4 text-xs text-white/40 italic">
                          + 2 more tools found. Full report attached.
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
            </div>

            {/* Footer / Progress Bar */}
            <div className="p-1">
              <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  className="h-full bg-neon-blue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
