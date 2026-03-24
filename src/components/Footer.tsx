import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-dark-bg/50 backdrop-blur-md border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-10 group">
              <Logo size="md" className="group-hover:scale-105 transition-transform duration-500" />
            </Link>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-10 max-w-sm">
              Architecting the autonomous future. We build AI systems that redefine business efficiency.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-blue hover:text-black hover:border-neon-blue transition-all duration-500">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-10">Solutions</h4>
            <ul className="space-y-6 text-sm text-white/40 font-light">
              <li><Link to="/services" className="hover:text-neon-blue transition-colors">AI Chatbots</Link></li>
              <li><Link to="/services" className="hover:text-neon-blue transition-colors">Workflow Automation</Link></li>
              <li><Link to="/services" className="hover:text-neon-blue transition-colors">AI Content Systems</Link></li>
              <li><Link to="/services" className="hover:text-neon-blue transition-colors">AI Agents</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-10">Studio</h4>
            <ul className="space-y-6 text-sm text-white/40 font-light">
              <li><Link to="/about" className="hover:text-neon-blue transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-neon-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-neon-blue transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-neon-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-10">Newsletter</h4>
            <p className="text-sm text-white/40 mb-8 font-light">Get the latest AI insights delivered to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-neon-blue/50 transition-all placeholder:text-white/20"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-neon-blue transition-all duration-500">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:grid md:grid-cols-12 gap-10 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          <div className="md:col-span-4">
            © 2026 Source II Studio. All rights reserved.
          </div>
          <div className="md:col-span-4 flex justify-center gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="md:col-span-4 flex justify-end gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
            Neural Link Active
          </div>
        </div>
      </div>
    </footer>
  );
}
