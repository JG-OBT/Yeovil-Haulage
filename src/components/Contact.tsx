import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'motion/react';

type FormData = {
  name: string;
  phone: string;
  email: string;
  moveDetails: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-primary text-sm font-bold uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Get Your <span className="text-brand-accent">Free Quote</span> Today
            </h3>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Ready to make your next move? Fill out the form below or give us a call. 
              Our team is ready to help you plan a stress-free move.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">Call Us</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">Our friendly team is ready to help.</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:07860387618" className="text-brand-primary font-bold hover:text-brand-secondary transition-colors">07860 387618</a>
                    <a href="tel:01935424784" className="text-brand-primary font-bold hover:text-brand-secondary transition-colors">01935 424784</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">Email Us</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">Send us your questions or quote requests.</p>
                  <a href="mailto:ERIC@YEOVILHAULAGE.CO.UK" className="text-brand-primary font-bold hover:text-brand-secondary transition-colors break-all">
                    ERIC@YEOVILHAULAGE.CO.UK
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">Visit Us</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-1">Our office and storage facility.</p>
                  <p className="text-brand-primary font-bold">
                    Unit 11 Boundary Avenue Commerce Park,<br />
                    Lufton, Yeovil, BA22 8UU
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">Opening Hours</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-bold">Mon–Fri:</span> 9am–9pm<br />
                    <span className="font-bold">Sat:</span> 9am–5pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <h4 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-brand-accent" />
              Send a Message
            </h4>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Name</label>
                  <input 
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone</label>
                  <input 
                    {...register('phone', { required: 'Phone is required' })}
                    className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                    placeholder="Your Phone Number"
                  />
                  {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email</label>
                <input 
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all`}
                  placeholder="Your Email Address"
                />
                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Move Details</label>
                <textarea 
                  {...register('moveDetails', { required: 'Please provide some details about your move' })}
                  rows={4}
                  className={`w-full px-5 py-4 rounded-xl bg-gray-50 border ${errors.moveDetails ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none`}
                  placeholder="Tell us about your move (e.g., from/to, number of rooms, preferred date)"
                />
                {errors.moveDetails && <p className="text-xs text-red-500 font-medium">{errors.moveDetails.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 rounded-xl text-lg font-bold text-white transition-all shadow-lg flex items-center justify-center gap-3 ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-primary hover:bg-brand-secondary active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Quote Request
                  </>
                )}
              </button>

              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-50 text-emerald-700 rounded-xl text-center font-bold border border-emerald-100"
                >
                  Thank you! Your request has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
