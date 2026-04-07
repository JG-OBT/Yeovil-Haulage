import { Package, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const materials = [
  'Sturdy Moving Boxes',
  'Heavy Duty Tape',
  'Bubble Wrap',
  'Wardrobe Boxes',
  'Packing Paper',
  'Protective Covers',
];

export default function Packing() {
  return (
    <section id="packing" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/packing-boxes/800/800" 
                alt="Packing Materials" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Packing & Materials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Everything You Need for a <span className="text-brand-accent">Safe Move</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We offer a full range of professional packing materials and services to ensure 
              your belongings are protected throughout the journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {materials.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
              <h4 className="text-xl font-display font-bold mb-4 flex items-center gap-3">
                <Package className="w-6 h-6 text-brand-primary" />
                Full Packing Service
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Don't have time to pack? Our professional team can handle everything for you, 
                from fragile items to bulky furniture. We'll ensure everything is packed 
                securely and labelled clearly.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors"
              >
                Inquire About Packing
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
