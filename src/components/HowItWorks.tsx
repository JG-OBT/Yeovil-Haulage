import { FileText, Calendar, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    id: 'quote',
    title: 'Request a Free Quote',
    description: "Tell us about your move. We'll provide a clear, competitive quote with no hidden fees.",
    icon: FileText,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'plan',
    title: 'Plan Your Move',
    description: "We'll help you plan every detail, including optional packing services and materials.",
    icon: Calendar,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 'move',
    title: 'Move Day',
    description: 'Our professional team handles everything on the day, ensuring a smooth transition.',
    icon: Truck,
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">How It Works</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Your Stress-Free Move in 3 Simple Steps</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            We've refined our process over 35 years to make your move as simple and straightforward as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 -z-10 -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              
              <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-8`}>
                <step.icon className="w-10 h-10" />
              </div>
              
              <h4 className="text-2xl font-display font-bold mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl active:scale-95"
          >
            Start Your Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
