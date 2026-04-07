import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="section-padding bg-brand-primary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-20 rounded-[3rem] text-center max-w-5xl mx-auto shadow-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Moving house? <br />
              <span className="text-brand-accent">Make the right move today.</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of happy customers who have trusted Yeovil Haulage 
              for their local and national removals since 1985.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#contact" 
                className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 active:scale-95"
              >
                Get Free Quote
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:07860387618" 
                className="bg-white hover:bg-gray-50 text-brand-primary px-10 py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
