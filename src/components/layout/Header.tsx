import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Mountain } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="hidden lg:block bg-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
              <Phone size={14} />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:info@himalayanresidency.com" className="flex items-center gap-2 hover:text-secondary-300 transition-colors">
              <Mail size={14} />
              <span>info@himalayanresidency.com</span>
            </a>
          </div>
          <div className="text-secondary-300">
            Badrash, NH5, Rampur Bushahr, Himachal Pradesh 172001
          </div>
        </div>
      </div>

      <header
        className={`fixed top-0 lg:top-10 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-lg lg:top-0'
            : 'bg-white/10 backdrop-blur-md'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-primary-700' : 'bg-white/20'}`}>
                <Mountain className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <div>
                <h1 className={`font-serif text-xl font-semibold tracking-wide transition-colors ${
                  isScrolled ? 'text-primary-900' : 'text-white'
                }`}>
                  Himalayan Residency
                </h1>
                <p className={`text-xs tracking-widest uppercase transition-colors ${
                  isScrolled ? 'text-secondary-600' : 'text-white/80'
                }`}>
                  Rampur Bushahr
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors relative group ${
                    isScrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white hover:text-secondary-300'
                  } ${location.pathname === link.path ? (isScrolled ? 'text-primary-700' : 'text-secondary-300') : ''}`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${isScrolled ? 'bg-primary-700' : 'bg-secondary-300'}`} />
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`px-6 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  isScrolled
                    ? 'bg-primary-700 text-white hover:bg-primary-800'
                    : 'bg-white/20 text-white border border-white/40 hover:bg-white hover:text-primary-900'
                }`}
              >
                Book Now
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-primary-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-primary-900 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-serif tracking-wide transition-colors ${
                location.pathname === link.path ? 'text-secondary-400' : 'text-white hover:text-secondary-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 btn-secondary"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
