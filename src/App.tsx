/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Packing from './components/Packing';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-primary/10 selection:text-brand-primary">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Packing />
        <CTA />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Buttons (Mobile-First) */}
      <AnimatePresence>
        {showFloating && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col gap-4"
          >
            {/* WhatsApp-style Button (Actually opens contact or phone) */}
            <a 
              href="tel:07860387618"
              className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group relative"
              aria-label="Call Us"
            >
              <MessageCircle className="w-7 h-7" />
              <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
                Chat with us
              </span>
            </a>
            
            <a 
              href="tel:01935424784"
              className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-secondary transition-all hover:scale-110 active:scale-95 group relative"
              aria-label="Call Office"
            >
              <Phone className="w-6 h-6" />
              <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
                Call Office
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 p-4 grid grid-cols-2 gap-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a 
          href="tel:07860387618" 
          className="flex items-center justify-center gap-2 bg-gray-100 text-brand-primary py-3.5 rounded-xl font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a 
          href="#contact" 
          className="flex items-center justify-center gap-2 bg-brand-accent text-white py-3.5 rounded-xl font-bold active:scale-95 transition-transform shadow-lg shadow-brand-accent/20"
        >
          Get Quote
        </a>
      </div>
      
      {/* Spacer for Sticky Mobile Bar */}
      <div className="lg:hidden h-20" />
    </div>
  );
}

