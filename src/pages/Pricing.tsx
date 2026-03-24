import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/utils/cn';

const plans = [
  {
    name: 'Starter',
    price: '1,499',
    description: 'Perfect for small businesses looking to start their AI journey.',
    features: [
      '1 Custom AI Chatbot',
      'Basic Workflow Automation',
      'Standard Support',
      'AI Audit & Strategy',
      'Monthly Maintenance'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Growth',
    price: '3,999',
    description: 'Ideal for growing companies needing advanced AI systems.',
    features: [
      '3 Custom AI Chatbots',
      'Advanced Workflow Automation',
      'AI Content Pipeline',
      'Priority Support',
      'Bi-weekly Strategy Calls',
      'Custom CRM Integration'
    ],
    cta: 'Start Growing',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale AI transformation for large organizations.',
    features: [
      'Unlimited AI Agents',
      'Full System Automation',
      'Custom AI Model Training',
      'Dedicated Account Manager',
      '24/7 Priority Support',
      'On-site Training'
    ],
    cta: 'Contact Us',
    popular: false
  }
];

export function Pricing() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Choose the plan that fits your business needs. No hidden fees.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "glass-card p-10 flex flex-col relative overflow-hidden",
                plan.popular && "border-neon-blue/50 neon-glow scale-105 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-neon-blue text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm">{plan.description}</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold">
                    {plan.price === 'Custom' ? '' : '$'}
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-white/40 text-sm">/month</span>}
                </div>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="text-neon-blue w-5 h-5 flex-shrink-0" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className={cn(
                  "w-full py-4 rounded-full font-bold transition-all text-center flex items-center justify-center gap-2 group",
                  plan.popular 
                    ? "bg-white text-black hover:bg-neon-blue" 
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                )}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="mt-40 max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long does implementation take?', a: 'Most projects take 2-4 weeks from audit to deployment, depending on complexity.' },
              { q: 'Do I need technical knowledge?', a: 'Not at all. We handle all the tech. You just focus on running your business.' },
              { q: 'Can I cancel my monthly plan?', a: 'Yes, our monthly maintenance plans are flexible and can be cancelled at any time.' },
              { q: 'What tools do you use?', a: 'We use a mix of OpenAI, Anthropic, Zapier, Make, and custom-coded solutions.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neon-blue" />
                  {faq.q}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
