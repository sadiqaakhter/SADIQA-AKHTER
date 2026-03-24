import { Zap, MessageSquare, Sparkles, Bot, Clock, TrendingUp, BarChart3, CheckCircle2 } from 'lucide-react';

export const caseStudiesData = {
  'ai-automation': {
    id: 'ai-automation',
    title: 'Enterprise Workflow Automation',
    subtitle: 'Global Logistics Corp',
    client: 'LogiTech Solutions — A global supply chain leader.',
    challenge: 'Manual data entry and fragmented communication across 12 international offices.',
    result: '90% reduction in processing time & $2.4M annual savings.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920',
    stats: [
      { label: 'Tasks Automated', value: '45k/mo', icon: Zap },
      { label: 'Time Saved', value: '120h/wk', icon: Clock },
      { label: 'Error Rate', value: '-98%', icon: TrendingUp },
      { label: 'ROI', value: '420%', icon: BarChart3 },
    ],
    solution: {
      title: 'Building an Autonomous Logistics Hub',
      desc: 'We integrated their legacy ERP with a custom AI automation layer that handles document parsing, automated routing, and real-time status updates.',
      steps: [
        { title: 'Intelligent Document Parsing', desc: 'AI-powered OCR that extracts data from invoices and shipping manifests with 99.9% accuracy.' },
        { title: 'Automated Exception Handling', desc: 'System identifies discrepancies and automatically notifies relevant stakeholders for resolution.' },
        { title: 'Real-time API Sync', desc: 'Seamless data flow between CRM, ERP, and third-party logistics providers.' },
        { title: 'Predictive Analytics', desc: 'AI identifies potential bottlenecks before they occur, suggesting alternative routes.' }
      ]
    },
    quote: {
      text: "The automation layer Source II Studio built has completely transformed our operations. We're now handling 3x the volume with the same headcount.",
      author: 'Sarah Jenkins',
      role: 'COO, LogiTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
    }
  },
  'ai-chatbots': {
    id: 'ai-chatbots',
    title: '24/7 Intelligent Support',
    subtitle: 'Apex Retail Group',
    client: 'Apex Retail — A leading multi-channel fashion retailer.',
    challenge: 'Overwhelming support volume during peak seasons leading to high churn and low CSAT.',
    result: '85% query resolution rate & 40% increase in conversion.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1920',
    stats: [
      { label: 'Queries Resolved', value: '12k/wk', icon: MessageSquare },
      { label: 'Response Time', value: '<2s', icon: Clock },
      { label: 'CSAT Score', value: '4.8/5', icon: TrendingUp },
      { label: 'Sales Lift', value: '22%', icon: BarChart3 },
    ],
    solution: {
      title: 'Conversational Commerce Engine',
      desc: 'We deployed a suite of intelligent chatbots across Web, WhatsApp, and Instagram, trained on their entire product catalog and support history.',
      steps: [
        { title: 'Contextual Product Discovery', desc: 'Bots that understand natural language queries like "I need a summer dress for a wedding" and provide curated options.' },
        { title: 'Automated Order Tracking', desc: 'Direct integration with Shopify API to provide real-time updates without human intervention.' },
        { title: 'Lead Qualification & Handoff', desc: 'System identifies high-value customers and seamlessly transfers them to live agents when necessary.' },
        { title: 'Multi-lingual Support', desc: 'Native support for 12 languages, allowing for global expansion without scaling the support team.' }
      ]
    },
    quote: {
      text: "Our customers love the instant responses. The AI chatbot has become our top-performing 'salesperson' and support agent combined.",
      author: 'David Chen',
      role: 'Head of Digital, Apex Retail',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
    }
  },
  'ai-agents': {
    id: 'ai-agents',
    title: 'Custom AI Workforce',
    subtitle: 'Innova Research Lab',
    client: 'Innova Research — A biotech firm specializing in drug discovery.',
    challenge: 'Researchers spending 40% of their time on literature review and data synthesis instead of lab work.',
    result: '60% faster research cycles & 2 new patents filed in record time.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?auto=format&fit=crop&q=80&w=1920',
    stats: [
      { label: 'Papers Analyzed', value: '10k+', icon: Bot },
      { label: 'Research Speed', value: '2.5x', icon: Clock },
      { label: 'Accuracy', value: '99.5%', icon: TrendingUp },
      { label: 'Cost Saved', value: '$800k', icon: BarChart3 },
    ],
    solution: {
      title: 'The Autonomous Research Assistant',
      desc: 'We built a fleet of specialized AI agents that act as digital research assistants, trained on proprietary data and scientific databases.',
      steps: [
        { title: 'Automated Literature Review', desc: 'Agents that scan thousands of daily publications and summarize relevant findings for specific teams.' },
        { title: 'Data Synthesis & Hypothesis', desc: 'AI that identifies patterns in experimental data and suggests new hypotheses for testing.' },
        { title: 'Regulatory Compliance Bot', desc: 'Agent that ensures all documentation meets strict FDA and international standards automatically.' },
        { title: 'Internal Knowledge Graph', desc: 'A searchable, AI-powered brain that connects all past research and prevents redundant work.' }
      ]
    },
    quote: {
      text: "The AI agents have become indispensable members of our team. They handle the heavy lifting of data, allowing our scientists to focus on innovation.",
      author: 'Dr. Elena Rossi',
      role: 'Director of R&D, Innova Research',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
    }
  }
};
