import { Home, Warehouse, Briefcase, Package, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    id: 'house-removals',
    title: 'House Removals',
    description: 'Stress-free domestic moves tailored to your needs. From small flats to large family homes.',
    icon: Home,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    description: 'Safe and secure storage options for your furniture and belongings, short or long term.',
    icon: Warehouse,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    id: 'business-moves',
    title: 'Business & Industrial',
    description: 'Professional office and industrial relocations with minimal downtime for your business.',
    icon: Briefcase,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    id: 'packing',
    title: 'Packing Services',
    description: 'Full packing service available, or we can provide all the materials you need to pack yourself.',
    icon: Package,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    id: 'long-distance',
    title: 'Long Distance Removals',
    description: 'Reliable national removals across the UK. We ensure your belongings arrive safely, no matter the distance.',
    icon: Globe,
    color: 'bg-rose-50 text-rose-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Expert Moving Solutions for Every Need</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're moving across the street or across the country, 
            our experienced team provides professional, reliable service every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
