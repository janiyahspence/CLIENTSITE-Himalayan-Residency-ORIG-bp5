import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Rooms', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const experiences = [
  'Temple Tours',
  'River Rafting',
  'Mountain Treks',
  'Cultural Tours',
  'Lavi Fair',
  'Local Cuisine',
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary-700">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold tracking-wide">
                  Himalayan Residency
                </h3>
                <p className="text-xs tracking-widest uppercase text-secondary-400">
                  Rampur Bushahr
                </p>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Experience the timeless beauty of the Himalayas at our luxury retreat nestled in the historic town of Rampur Bushahr. Where heritage meets modern comfort.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-secondary-600 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Experiences</h4>
            <ul className="space-y-3">
              {experiences.map((exp) => (
                <li key={exp}>
                  <Link
                    to="/experiences"
                    className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm"
                  >
                    {exp}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  Badrash, NH5, Rampur Bushahr,<br />
                  Shimla District, Himachal Pradesh 172001
                </span>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-3 text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                  <Phone size={18} className="text-secondary-500" />
                  <span>+91 123 456 7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@himalayanresidency.com" className="flex items-center gap-3 text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                  <Mail size={18} className="text-secondary-500" />
                  <span>info@himalayanresidency.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              2024 Himalayan Residency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="text-neutral-500 hover:text-secondary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-neutral-500 hover:text-secondary-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
