import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Bot, 
  Zap, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  ChevronRight,
  Cpu,
  Globe,
  Database,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/utils/cn';
import { AIAgentDemo } from '../components/AIAgentDemo';
import { AIStrategyGenerator } from '../components/AIStrategyGenerator';

const services = [
  {
    title: 'AI Chatbots',
    description: 'Intelligent, 24/7 customer support that actually solves problems.',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Workflow Automation',
    description: 'Connect your tools and automate repetitive tasks with Zapier & Make.',
    icon: Zap,
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'AI Content Systems',
    description: 'Scale your content production with AI-driven social media pipelines.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI Agents',
    description: 'Custom GPTs and agents trained on your specific business data.',
    icon: Bot,
    color: 'from-emerald-500 to-teal-500',
  },
];

const stats = [
  { label: 'Hours Saved/Month', value: '40+' },
  { label: 'Lead Conversion', value: '3x' },
  { label: 'ROI Increase', value: '150%' },
  { label: 'Client Satisfaction', value: '99%' },
];

export function Home() {
  return (
    <div className="overflow-hidden selection:bg-neon-blue selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" 
              alt="Background" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-30">
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-neon-blue rounded-full blur-[160px] animate-pulse" />
            <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-neon-purple rounded-full blur-[160px] animate-pulse [animation-delay:2s]" />
          </div>
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-0 noise-bg" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] uppercase mb-8 text-neon-blue backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              The Future of Work is Autonomous
            </span>
            
            <h1 className="text-6xl md:text-[120px] font-display font-bold leading-[0.85] mb-10 tracking-tighter uppercase">
              We Build <br />
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,242,255,0.3)]">AI Systems</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/50 mb-12 leading-relaxed font-light">
              Stop wasting hours on manual work. We design and deploy AI agents, 
              automations, and creative systems that help you scale faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all duration-500 flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                Book a Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-3 backdrop-blur-md"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Scroll</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section - Minimalist Grid */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                key={i} 
                className="text-center group"
              >
                <div className="text-4xl md:text-7xl font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-500">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Demo - The "How It Works" Section */}
      <section className="bg-dark-bg relative">
        <AIAgentDemo />
      </section>

      {/* Services Grid - Refined Cards */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-neon-purple/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter uppercase">
                Our <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="text-white/50 text-lg">
                We don't just give you tools. We build custom AI agents, automations, and creative systems that integrate directly into your workflow.
              </p>
            </div>
            <Link to="/services" className="group flex items-center gap-2 text-neon-blue font-bold uppercase tracking-widest text-xs">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 group relative overflow-hidden"
              >
                <div className={cn("w-16 h-16 rounded-[2rem] bg-gradient-to-br flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500", service.color)}>
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-grow bg-white/10" />
                  <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-neon-blue group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Brutalist Style */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
                Trusted by <br />
                <span className="text-white/30 italic">Industry Leaders</span>
              </h2>
              <div className="grid grid-cols-2 gap-8 grayscale opacity-30">
                {['TechFlow', 'NovaAI', 'Quantum', 'Apex'].map((brand) => (
                  <div key={brand} className="text-3xl font-display font-bold tracking-tighter">{brand}</div>
                ))}
              </div>
            </div>
            <div className="space-y-12">
              {[
                { 
                  name: 'Sarah Chen', 
                  role: 'CEO at TechFlow', 
                  text: 'Source II Studio transformed our customer support. Our AI bot handles 80% of queries now, saving us thousands every month.',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
                },
                { 
                  name: 'Marcus Thorne', 
                  role: 'Founder of NovaAI', 
                  text: 'The workflow automation they built for our sales team is incredible. We\'ve seen a 3x increase in lead conversion.',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
                },
              ].map((t, i) => (
                <div key={i} className="relative pl-8 border-l border-neon-blue/30">
                  <p className="text-xl text-white/70 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-10 h-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-white/30">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AIStrategyGenerator />

      {/* Final CTA - Immersive */}
      <section className="py-60 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Animated Glow Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [-20, 20, -20],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/20 blur-[160px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
              x: [20, -20, 20],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/15 blur-[140px] rounded-full"
          />
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Limited Availability for Q2</span>
            </div>
            
            <h2 className="text-6xl md:text-[120px] font-display font-bold mb-12 tracking-tighter uppercase leading-[0.8] text-white">
              Ready to <br />
              <span className="text-gradient italic">Automate?</span>
            </h2>
            
            <p className="text-white/40 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              Join the forward-thinking companies already using our <span className="text-white">autonomous systems</span> to reclaim their competitive edge.
            </p>
            
            <div className="relative inline-block group">
              {/* Button Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              <Link
                to="/contact"
                className="relative inline-flex px-16 py-8 bg-white text-black rounded-full font-bold text-lg hover:bg-neon-blue transition-all duration-500 items-center gap-4 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4"
                >
                  Book Your Free Audit
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                </motion.span>
              </Link>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-20 grayscale">
              {['TechFlow', 'NovaAI', 'Quantum', 'Apex'].map((brand) => (
                <div key={brand} className="text-xl font-display font-bold tracking-widest uppercase">{brand}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
