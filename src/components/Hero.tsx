import { Phone, ArrowRight, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/removals-truck/1920/1080?blur=2" 
          alt="Removals Truck" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-transparent"></div>
      </div>

      <div className="container-custom px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span>Established 1985 • Fully Insured</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.1]">
            Reliable House Removals in <span className="text-brand-accent">Yeovil</span> & Across the UK
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
            Over 35 years helping people move safely, smoothly, and on time. 
            Local expertise with a national reach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 active:scale-95"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:07860387618" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-brand-accent" />
              </div>
              <span className="text-sm font-medium">Modern Fleet</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-accent" />
              </div>
              <span className="text-sm font-medium">Local & National</span>
            </div>
          </div>
        </motion.div>

        {/* Optional: Trust Badges / Stats for Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-end"
        >
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl max-w-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold text-xl">
                35+
              </div>
              <div>
                <h4 className="text-white font-bold">Years Experience</h4>
                <p className="text-white/60 text-sm">Moving families since 1985</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-white/80 italic">"Excellent service, very professional and punctual. Highly recommended!"</p>
                <p className="text-xs text-brand-accent mt-2 font-bold">— Local Customer</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-white/80 italic">"Made our long distance move completely stress-free."</p>
                <p className="text-xs text-brand-accent mt-2 font-bold">— National Client</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
