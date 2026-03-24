import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Zap, 
  Sparkles, 
  Bot, 
  Database, 
  Search, 
  BarChart, 
  Globe,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/utils/cn';

const services = [
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    icon: Zap,
    description: 'Connect your entire tech stack and automate repetitive business processes.',
    features: [
      'Zapier / Make / n8n custom workflows',
      'CRM & ERP AI integrations',
      'Automated email & WhatsApp sequences',
      'Data entry & processing automation'
    ],
    color: 'from-orange-500 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ai-chatbots',
    title: 'Intelligent AI Chatbots',
    icon: MessageSquare,
    description: 'Advanced conversational agents that handle sales, support, and lead qualification.',
    features: [
      '24/7 automated customer support',
      'Multi-language capabilities',
      'Direct integration with your knowledge base',
      'Lead qualification & booking automation'
    ],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ai-content',
    title: 'AI Content Systems',
    icon: Sparkles,
    description: 'Scale your marketing output with automated content generation pipelines.',
    features: [
      'Automated social media scheduling',
      'AI-powered blog & SEO systems',
      'Video & image generation pipelines',
      'Multi-platform content repurposing'
    ],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'ai-agents',
    title: 'Custom AI Agents',
    icon: Bot,
    description: 'Specialized AI employees trained on your company data to perform specific roles.',
    features: [
      'Internal company knowledge bots',
      'Custom GPTs for specific departments',
      'AI research & analysis assistants',
      'Automated reporting & insights'
    ],
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
  }
];

export function Services() {
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
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-neon-blue mb-6 block">Our Expertise</span>
            <h1 className="text-6xl md:text-[100px] font-display font-bold mb-10 tracking-tighter uppercase leading-[0.85]">
              Autonomous <br />
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-white/50 max-w-2xl text-xl font-light leading-relaxed">
              We build custom AI systems that solve real business problems, 
              save time, and drive revenue.
            </p>
          </motion.div>
        </div>

        <div className="space-y-48">
          {services.map((service, i) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className={cn("lg:col-span-6", i % 2 === 1 ? 'lg:order-2' : '')}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className={cn("w-20 h-20 rounded-[2.5rem] bg-gradient-to-br flex items-center justify-center mb-10 shadow-2xl", service.color)}>
                    <service.icon className="text-white w-10 h-10" />
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter uppercase">{service.title}</h2>
                  <p className="text-white/50 text-xl mb-10 leading-relaxed font-light">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-2 h-2 rounded-full bg-neon-blue group-hover:scale-150 transition-transform" />
                        <span className="text-sm text-white/60 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all duration-500 items-center gap-3 group shadow-2xl"
                    >
                      Get a Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to={service.id === 'ai-content' ? '/portfolio/saas-content-hub' : `/services/case-study/${service.id}`}
                      className="inline-flex px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all duration-500 items-center gap-3 group"
                    >
                      View Case Study
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
              <div className={cn("lg:col-span-6 relative", i % 2 === 1 ? 'lg:order-1' : '')}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-neon-blue/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="glass-card p-2 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-[1.8rem] w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Section - Brutalist Grid */}
        <section className="mt-60 border-t border-white/5 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter uppercase leading-[0.9]">
                Industries <br />
                <span className="text-white/20 italic">We Serve</span>
              </h2>
              <p className="text-white/40 text-lg font-light">
                Tailored AI solutions for specific market verticals.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-1">
              {[
                { name: 'E-commerce', icon: Globe },
                { name: 'Real Estate', icon: Database },
                { name: 'SaaS', icon: Cpu },
                { name: 'Healthcare', icon: Search },
                { name: 'Finance', icon: BarChart },
                { name: 'Education', icon: Globe },
                { name: 'Legal', icon: Database },
                { name: 'Agency', icon: Sparkles },
              ].map((industry, i) => (
                <div key={i} className="relative flex flex-col items-center justify-center gap-6 p-10 border border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <industry.icon className="w-8 h-8 text-white/20 group-hover:text-neon-blue transition-colors" />
                  <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">{industry.name}</span>
                  {industry.name === 'Real Estate' && (
                    <Link 
                      to="/industries#real-estate-demo"
                      className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neon-blue">View Demo</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
