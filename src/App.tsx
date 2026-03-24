import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Industries } from './pages/Industries';
import { Blog } from './pages/Blog';
import { CaseStudySaaS } from './pages/CaseStudySaaS';
import { ServiceCaseStudy } from './pages/ServiceCaseStudy';
import { ScrollToTopOnRouteChange } from './utils/ScrollToTopOnRouteChange';
import { motion, AnimatePresence } from 'motion/react';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
              <Route path="/industries" element={<PageWrapper><Industries /></PageWrapper>} />
              <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
              <Route path="/portfolio/saas-content-hub" element={<PageWrapper><CaseStudySaaS /></PageWrapper>} />
              <Route path="/services/case-study/:id" element={<PageWrapper><ServiceCaseStudy /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Chatbot />
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}
