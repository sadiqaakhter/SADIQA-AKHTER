import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Bot, 
  Sparkles, 
  BarChart3, 
  Clock, 
  TrendingUp,
  ChevronRight,
  Globe,
  Database,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/utils/cn';

export function CaseStudySaaS() {
  return (
    <div className="bg-dark-bg selection:bg-neon-blue selection:text-black">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1920" 
            alt="Case Study Background" 
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 grid-bg opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Case Study: SaaS Startup</span>
            </div>
            
            <h1 className="text-6xl md:text-[140px] font-display font-bold mb-12 tracking-tighter uppercase leading-[0.8] text-white">
              AI Marketing <br />
              <span className="text-gradient italic">Content Hub</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-white/10 pt-12">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-4">The Client</span>
                <p className="text-xl font-light text-white/80">CloudScale AI — A rapidly growing B2B SaaS platform.</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-4">The Challenge</span>
                <p className="text-xl font-light text-white/80">Scaling high-quality content across 4 platforms with a 1-person marketing team.</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-4">The Result</span>
                <p className="text-xl font-bold text-neon-blue">300% Increase in Engagement & 70% Time Saved.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid - Technical Dashboard Style */}
      <section className="py-32 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
            {[
              { label: 'Monthly Posts', value: '30+', icon: Sparkles },
              { label: 'Time Saved', value: '25h/wk', icon: Clock },
              { label: 'Engagement', value: '+310%', icon: TrendingUp },
              { label: 'Cost Reduction', value: '65%', icon: BarChart3 },
            ].map((stat, i) => (
              <div key={i} className="bg-black p-12 flex flex-col items-center text-center group hover:bg-white/[0.02] transition-colors">
                <stat.icon className="w-6 h-6 text-white/20 mb-6 group-hover:text-neon-blue transition-colors" />
                <div className="text-5xl font-display font-bold mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - Split Layout */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-neon-blue mb-8 block">The Solution</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
                Building an <br />
                <span className="text-white/20 italic">Autonomous Pipeline</span>
              </h2>
              <p className="text-white/50 text-xl font-light leading-relaxed mb-12">
                We developed a multi-stage AI content hub that handles everything from ideation to scheduling. 
                The system uses a custom-trained LLM to maintain the brand's unique voice across all channels.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Ideation Engine', desc: 'AI analyzes trending industry topics and generates 50+ content hooks weekly.' },
                  { title: 'Multi-Format Generation', desc: 'One core idea is automatically repurposed into LinkedIn posts, Twitter threads, and blog outlines.' },
                  { title: 'Visual Asset Pipeline', desc: 'Integration with Midjourney API to generate custom, on-brand imagery for every post.' },
                  { title: 'Automated Scheduling', desc: 'Final approval workflow that pushes content to Buffer and Webflow automatically.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-neon-blue/30 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-neon-blue/10 blur-3xl rounded-full" />
              <div className="relative glass-card p-8 border-white/10 overflow-hidden">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Pipeline_Status: Active</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Ideation', status: 'Completed', progress: 100 },
                    { label: 'Drafting', status: 'In Progress', progress: 65 },
                    { label: 'Visuals', status: 'Pending', progress: 0 },
                    { label: 'Review', status: 'Waiting', progress: 0 }
                  ].map((step, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-bold text-white/60">{step.label}</span>
                        <span className="text-[10px] font-mono text-neon-blue">{step.status}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${step.progress}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-neon-blue"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-xl">
                  <p className="text-[11px] font-mono text-neon-blue leading-relaxed">
                    &gt; System generating 12 variants for LinkedIn... <br />
                    &gt; Brand voice check: 98% match <br />
                    &gt; Ready for human review.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple mx-auto mb-12 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-12 italic leading-tight">
              "Source II Studio didn't just give us a tool; they gave us a competitive advantage. We're producing 10x more content with the same team size."
            </h3>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" 
                alt="Client" 
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-neon-blue"
                referrerPolicy="no-referrer"
              />
              <div className="font-bold text-lg">Marcus Thorne</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/30">Founder, CloudScale AI</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/10 blur-[160px] rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter uppercase leading-[0.85]">
              Ready for your <br />
              <span className="text-gradient">Success Story?</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex px-12 py-6 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all duration-500 items-center gap-3 group shadow-2xl"
            >
              Book Your Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
