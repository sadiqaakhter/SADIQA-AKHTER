import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Database, 
  Cpu, 
  Search, 
  BarChart, 
  Sparkles, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/utils/cn';
import { RealEstateLeadDemo } from '../components/RealEstateLeadDemo';

const industries = [
  {
    name: 'E-commerce',
    icon: Globe,
    description: 'Automate customer support, inventory management, and personalized marketing campaigns.',
    benefits: ['24/7 Support Bots', 'Inventory Forecasting', 'Dynamic Pricing AI', 'Personalized Recommendations'],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Real Estate',
    icon: Database,
    description: 'Automate lead qualification, appointment booking, and property analysis.',
    benefits: ['Lead Qualification Bots', 'Automated Booking', 'Property Value Analysis', 'CRM Data Automation'],
    color: 'from-orange-500 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'SaaS & Tech',
    icon: Cpu,
    description: 'Scale your product with AI-powered features, automated onboarding, and intelligent documentation.',
    benefits: ['Onboarding Automation', 'AI Feature Integration', 'Documentation Search', 'Usage Analytics AI'],
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Healthcare',
    icon: Search,
    description: 'Improve patient care with automated scheduling, data analysis, and intelligent assistants.',
    benefits: ['Patient Scheduling', 'Medical Data Analysis', 'Internal Knowledge Bots', 'Compliance Automation'],
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Finance',
    icon: BarChart,
    description: 'Enhance security and efficiency with AI-driven risk assessment and automated reporting.',
    benefits: ['Risk Assessment AI', 'Automated Reporting', 'Fraud Detection', 'Financial Analysis Bots'],
    color: 'from-red-500 to-orange-500',
    image: 'https://images.unsplash.com/photo-1611974714024-462cd93709c1?auto=format&fit=crop&q=80&w=1000'
  },
  {
    name: 'Agencies',
    icon: Sparkles,
    description: 'Scale your output with AI content pipelines and automated client reporting.',
    benefits: ['Content Generation', 'Client Reporting Bots', 'Workflow Automation', 'AI Strategy Audits'],
    color: 'from-indigo-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000'
  }
];

export function Industries() {
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
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-neon-blue mb-6 block">Market Verticals</span>
            <h1 className="text-6xl md:text-[100px] font-display font-bold mb-10 tracking-tighter uppercase leading-[0.85]">
              AI for <br />
              <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="text-white/50 max-w-2xl text-xl font-light leading-relaxed mb-10">
              We build custom AI solutions tailored to the unique challenges 
              and opportunities of your specific industry.
            </p>
            <button 
              onClick={() => document.getElementById('real-estate-demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-neon-blue hover:text-white transition-colors group"
            >
              Featured: Real Estate Automation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-32">
              {industries.map((industry, i) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-black p-12 group hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden"
                >
                  {/* Background Image Overlay */}
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6 text-neon-blue -rotate-45" />
                  </div>
                  <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-10 shadow-2xl", industry.color)}>
                    <industry.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-6 tracking-tight uppercase">{industry.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-10 font-light">
                    {industry.description}
                  </p>
                  <div className="space-y-4 mb-12">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/40" />
                        <span className="text-[11px] uppercase tracking-widest text-white/50 font-bold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-neon-blue transition-all"
                    >
                      Get Industry Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    {industry.name === 'Real Estate' && (
                      <button 
                        onClick={() => document.getElementById('real-estate-demo')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[9px] font-bold uppercase tracking-widest text-neon-blue/40 hover:text-neon-blue transition-colors"
                      >
                        View Demo
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
        </div>

        {/* Featured Demo: Real Estate */}
        <section id="real-estate-demo" className="mb-32 border-y border-white/5 bg-white/[0.01]">
          <RealEstateLeadDemo />
        </section>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative glass-card p-12 md:p-24 text-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
                Don't see your <br />
                <span className="text-white/20 italic">industry?</span>
              </h2>
              <p className="text-white/40 mb-12 max-w-xl mx-auto text-xl font-light leading-relaxed">
                Our AI systems are highly adaptable. Contact us to discuss how we can build 
                a custom solution for your specific business model.
              </p>
              <Link
                to="/contact"
                className="inline-flex px-12 py-6 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all duration-500 items-center gap-3 group shadow-2xl uppercase tracking-widest text-xs"
              >
                Request a Custom Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
