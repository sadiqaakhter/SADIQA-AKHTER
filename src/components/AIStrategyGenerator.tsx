import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Loader2, 
  CheckCircle2, 
  ChevronRight,
  Building2,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '@/src/utils/cn';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface StrategyStep {
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
}

export function AIStrategyGenerator() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    teamSize: '',
    mainGoal: '',
  });
  const [strategy, setStrategy] = useState<StrategyStep[] | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateStrategy = async () => {
    setLoading(true);
    try {
      const prompt = `Generate a tailored AI strategy for a business with the following details:
        Business Name: ${formData.businessName}
        Industry: ${formData.industry}
        Team Size: ${formData.teamSize}
        Main Goal: ${formData.mainGoal}

        Return the strategy as a JSON array of 4 steps. Each step should have:
        - title: A short, catchy title for the step.
        - description: A clear, actionable description of what to do.
        - impact: One of "High", "Medium", or "Low" based on the expected business impact.

        Ensure the advice is specific to their industry and goals.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const result = JSON.parse(response.text || '[]');
      setStrategy(result);
      setStep(3);
    } catch (error) {
      console.error('Error generating strategy:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="strategy-tool">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-neon-blue mb-6 block">Interactive Tool</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tighter uppercase">
              Generate Your <span className="text-gradient">AI Strategy</span>
            </h2>
            <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
              Get a tailored roadmap for integrating autonomous intelligence into your business in seconds.
            </p>
          </motion.div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000" />
          <div className="relative glass-card p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-5" />
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center">
                      <Building2 className="text-neon-blue w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">Business Context</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Business Name</label>
                      <input 
                        type="text" 
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="e.g. CloudScale AI"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-blue/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Industry</label>
                      <select 
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-blue/50 transition-all appearance-none"
                      >
                        <option value="" className="bg-dark-bg">Select Industry</option>
                        <option value="SaaS" className="bg-dark-bg">SaaS</option>
                        <option value="E-commerce" className="bg-dark-bg">E-commerce</option>
                        <option value="Real Estate" className="bg-dark-bg">Real Estate</option>
                        <option value="Marketing" className="bg-dark-bg">Marketing</option>
                        <option value="Healthcare" className="bg-dark-bg">Healthcare</option>
                        <option value="Other" className="bg-dark-bg">Other</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    onClick={() => setStep(2)}
                    disabled={!formData.businessName || !formData.industry}
                    className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-neon-blue transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:bg-white"
                  >
                    Next Step
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                      <Target className="text-neon-purple w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold">Goals & Scale</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Team Size</label>
                      <select 
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-blue/50 transition-all appearance-none"
                      >
                        <option value="" className="bg-dark-bg">Select Size</option>
                        <option value="1-10" className="bg-dark-bg">1-10 employees</option>
                        <option value="11-50" className="bg-dark-bg">11-50 employees</option>
                        <option value="51-200" className="bg-dark-bg">51-200 employees</option>
                        <option value="200+" className="bg-dark-bg">200+ employees</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Primary Goal</label>
                      <input 
                        type="text" 
                        name="mainGoal"
                        value={formData.mainGoal}
                        onChange={handleInputChange}
                        placeholder="e.g. Automate customer support"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-blue/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex-1 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
                    >
                      Back
                    </button>
                    <button 
                      onClick={generateStrategy}
                      disabled={loading || !formData.teamSize || !formData.mainGoal}
                      className="flex-[2] py-4 bg-white text-black rounded-xl font-bold hover:bg-neon-blue transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          Generate Strategy
                          <Sparkles className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && strategy && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10"
                >
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center">
                        <Lightbulb className="text-neon-blue w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Your AI Roadmap</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Customized for {formData.businessName}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setStep(1);
                        setStrategy(null);
                      }}
                      className="text-[10px] font-bold uppercase tracking-widest text-neon-blue hover:text-white transition-colors"
                    >
                      Start Over
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {strategy.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/30 transition-all group"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-white/40 group-hover:text-neon-blue transition-colors">
                            0{i + 1}
                          </div>
                          <span className={cn(
                            "text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-md",
                            item.impact === 'High' ? "bg-neon-blue/20 text-neon-blue" :
                            item.impact === 'Medium' ? "bg-neon-purple/20 text-neon-purple" :
                            "bg-white/10 text-white/40"
                          )}>
                            {item.impact} Impact
                          </span>
                        </div>
                        <h4 className="font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">{item.title}</h4>
                        <p className="text-xs text-white/40 leading-relaxed font-light">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="p-8 rounded-3xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-white/10 text-center">
                    <h4 className="text-lg font-bold mb-4">Ready to implement this strategy?</h4>
                    <p className="text-sm text-white/50 mb-8 max-w-md mx-auto">
                      Our experts can help you build and deploy these autonomous systems in as little as 2 weeks.
                    </p>
                    <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neon-blue transition-all flex items-center gap-2 mx-auto text-xs uppercase tracking-widest">
                      Schedule Implementation Call
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
