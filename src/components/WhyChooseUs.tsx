import { Clock, ShieldCheck, Users, MessageSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    id: 'experience',
    title: 'Over 35 Years Experience',
    description: 'Established in 1985, we have helped thousands of families and businesses move safely and efficiently.',
    icon: Clock,
  },
  {
    id: 'insured',
    title: 'Fully Insured Moves',
    description: 'Your belongings are in safe hands. We provide full insurance coverage for complete peace of mind.',
    icon: ShieldCheck,
  },
  {
    id: 'reliable',
    title: 'Reliable & Punctual',
    description: 'We pride ourselves on our reliability. We arrive on time and handle every move with professional care.',
    icon: Users,
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    description: 'Stay informed throughout your move. Our friendly team is always available to answer your questions.',
    icon: MessageSquare,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              The Trusted Name in <span className="text-brand-secondary">Yeovil Removals</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We understand that moving can be stressful. That's why we've spent over three decades 
              refining our process to ensure every move is as smooth and stress-free as possible.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/happy-movers/800/800" 
                alt="Professional Movers" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Trust Badges Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-brand-accent p-8 rounded-2xl shadow-xl z-20 hidden md:block max-w-[280px]">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg">Thousands of Successful Moves</span>
              </div>
              <p className="text-white/80 text-sm italic">
                "We've built our reputation on repeat customers and local recommendations."
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
