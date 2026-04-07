import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container-custom px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl mb-6">Yeovil Haulage Ltd</h3>
            <p className="mb-6 text-sm leading-relaxed">
              Professional removals and storage services since 1985. 
              Helping people move safely, smoothly, and on time across the UK.
            </p>
            <div className="flex items-center gap-2 text-brand-accent font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Free quotes available
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>House Removals</li>
              <li>Storage Solutions</li>
              <li>Business & Industrial Moves</li>
              <li>Packing Services</li>
              <li>Long Distance Removals</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-secondary shrink-0" />
                <div>
                  <a href="tel:07860387618" className="hover:text-white transition-colors">07860 387618</a>
                  <br />
                  <a href="tel:01935424784" className="hover:text-white transition-colors">01935 424784</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-secondary shrink-0" />
                <a href="mailto:ERIC@YEOVILHAULAGE.CO.UK" className="hover:text-white transition-colors break-all">
                  ERIC@YEOVILHAULAGE.CO.UK
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary shrink-0" />
                <span>
                  Unit 11 Boundary Avenue Commerce Park,<br />
                  Lufton, Yeovil, BA22 8UU
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-secondary shrink-0" />
                <div>
                  <p><span className="font-medium text-white">Mon–Fri:</span> 9am–9pm</p>
                  <p><span className="font-medium text-white">Sat:</span> 9am–5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Yeovil Haulage Ltd. All rights reserved.</p>
          <p>Serving Yeovil, Somerset & Dorset</p>
        </div>
      </div>
    </footer>
  );
}
