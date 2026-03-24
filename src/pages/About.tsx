import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
              We are <span className="text-gradient">Source II Studio</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              A team of AI specialists, creative designers, and automation experts 
              dedicated to helping businesses scale through intelligent systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">Our Mission</h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Our mission is to bridge the gap between complex AI technology and practical business applications. 
              We believe that every business, regardless of size, should have access to the same 
              efficiency-driving tools that the tech giants use.
            </p>
            <div className="space-y-4">
              {[
                { icon: Target, title: 'Results-Driven', desc: 'We focus on ROI and measurable business impact.' },
                { icon: Users, title: 'Human-Centric', desc: 'AI should empower people, not replace them.' },
                { icon: Award, title: 'Excellence', desc: 'We build robust, production-ready systems.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-neon-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
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
            <div className="absolute -inset-4 bg-neon-purple/10 blur-2xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Collaboration" 
              className="relative rounded-2xl w-full h-auto border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="glass-card p-12 md:p-20 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Ready to transform?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">
            Join the forward-thinking companies already using our AI systems to automate their growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all items-center gap-2 group"
          >
            Work With Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
