import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Zap, Bot, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/utils/cn';

const projects = [
  {
    title: 'Global E-commerce AI Support',
    client: 'Shopify Plus Brand',
    description: 'Automated 85% of customer support queries using custom AI agents trained on product data.',
    tags: ['AI Chatbots', 'E-commerce'],
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Real Estate Lead Automation',
    client: 'Apex Realty',
    description: 'Automated lead qualification and appointment booking via WhatsApp and email integrations.',
    tags: ['Workflow Automation', 'Real Estate'],
    icon: Zap,
    color: 'from-orange-500 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'AI Marketing Content Hub',
    client: 'SaaS Startup',
    description: 'Built a system that generates and schedules 30+ social media posts per month automatically.',
    tags: ['AI Content Systems', 'SaaS'],
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000'
  }
];

export function Portfolio() {
  return (
    <div className="pt-48 pb-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-purple rounded-full blur-[160px]" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-neon-blue mb-6 block">Case Studies</span>
            <h1 className="text-6xl md:text-[100px] font-display font-bold mb-10 tracking-tighter uppercase leading-[0.85]">
              Proven <br />
              <span className="text-gradient">Impact</span>
            </h1>
            <p className="text-white/50 max-w-2xl text-xl font-light leading-relaxed">
              Explore how we've helped businesses automate their workflows 
              and scale their impact using AI.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass-card overflow-hidden bg-white/[0.02] border-white/5 group-hover:border-white/10 transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700" />
                  <div className={cn("absolute top-6 left-6 w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-2xl", project.color)}>
                    <project.icon className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 tracking-tight uppercase group-hover:text-neon-blue transition-colors">{project.title}</h3>
                  <p className="text-[10px] text-neon-blue font-bold mb-6 uppercase tracking-widest">{project.client}</p>
                  <p className="text-white/40 text-sm leading-relaxed mb-10 font-light">
                    {project.description}
                  </p>
                  <Link 
                    to="/portfolio/saas-content-hub"
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-all flex items-center gap-3"
                  >
                    View Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative glass-card p-12 md:p-24 text-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
                Ready to be our <br /><span className="text-white/20 italic">next success story?</span>
              </h2>
              <Link
                to="/contact"
                className="inline-flex px-12 py-6 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all duration-500 items-center gap-3 group shadow-2xl uppercase tracking-widest text-xs"
              >
                Book Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
