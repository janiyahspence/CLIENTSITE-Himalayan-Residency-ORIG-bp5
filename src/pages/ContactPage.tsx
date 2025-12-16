import { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar,
  Users, CheckCircle, Facebook, Instagram, Twitter, Youtube
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { images } from '../data/images';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 123 456 7890', '+91 987 654 3210'],
    subtitle: 'Available 24/7',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@himalayanresidency.com', 'reservations@himalayanresidency.com'],
    subtitle: 'Response within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Badrash, NH5', 'Rampur Bushahr, Shimla District', 'Himachal Pradesh 172001'],
    subtitle: '126 km from Shimla',
  },
  {
    icon: Clock,
    title: 'Reception Hours',
    details: ['Check-in: 2:00 PM', 'Check-out: 11:00 AM'],
    subtitle: '24/7 Front Desk',
  },
];

const faqs = [
  {
    question: 'What is the best time to visit Rampur Bushahr?',
    answer: 'The best time to visit is from March to June and September to November when the weather is pleasant with temperatures between 15-25C. Winter (December-February) offers snow views but can be cold.',
  },
  {
    question: 'How do I reach Himalayan Residency from Shimla?',
    answer: 'We are located 126 km from Shimla, approximately 2.5-3 hours drive via NH5. The scenic route passes through Kufri, Fagu, and Narkanda. We can arrange airport/railway station transfers.',
  },
  {
    question: 'Do you offer airport/railway transfers?',
    answer: 'Yes, we provide transfer services from Shimla (Jubbarhatti) Airport and Railway Station. Chandigarh Airport transfers can also be arranged. Please contact us for rates.',
  },
  {
    question: 'What activities are available nearby?',
    answer: 'Popular activities include temple tours, river rafting on Sutlej, mountain treks, cultural village visits, and wildlife sanctuary trips. Our concierge can help plan your itinerary.',
  },
  {
    question: 'Is WiFi available at the property?',
    answer: 'Yes, complimentary high-speed WiFi is available throughout the property including all rooms, common areas, and the restaurant.',
  },
  {
    question: 'Do you accommodate dietary restrictions?',
    answer: 'Absolutely! Our kitchen caters to vegetarian, vegan, Jain, and gluten-free requirements. Please inform us in advance so we can prepare accordingly.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={images.contact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <span className="text-secondary-400 uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-shadow">
            Contact Us
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">
            We're here to help you plan your perfect Himalayan getaway
          </p>
        </div>
      </section>

      <section className="py-12 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                <info.icon className="text-secondary-400 mx-auto mb-3" size={28} />
                <h3 className="text-white font-medium mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail) => (
                    <p key={detail} className="text-neutral-300 text-sm">{detail}</p>
                  ))}
                </div>
                <p className="text-secondary-400 text-xs mt-2">{info.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="section-subtitle">Send Us a Message</span>
              <h2 className="section-title">Book Your Stay or Inquire</h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
                For immediate assistance, please call us directly.
              </p>

              {submitted ? (
                <div className="bg-primary-50 p-8 text-center">
                  <CheckCircle className="text-primary-700 mx-auto mb-4" size={48} />
                  <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
                  <p className="text-neutral-600 mb-4">
                    Your message has been received. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Room Reservation</option>
                      <option value="group">Group Booking</option>
                      <option value="event">Events & Celebrations</option>
                      <option value="corporate">Corporate Bookings</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      placeholder="+91 123 456 7890"
                    />
                  </div>

                  {(formData.subject === 'reservation' || formData.subject === 'group') && (
                    <>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Check-in Date
                          </label>
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Check-out Date
                          </label>
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Number of Guests
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5+">5+ Guests</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">
                            Room Preference
                          </label>
                          <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                          >
                            <option value="">Select a room</option>
                            <option value="deluxe">Deluxe Room</option>
                            <option value="premium">Premium Suite</option>
                            <option value="royal">Royal Himalayan Suite</option>
                            <option value="family">Family Suite</option>
                            <option value="honeymoon">Honeymoon Suite</option>
                            <option value="executive">Executive Room</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-primary inline-flex items-center gap-2">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            <div>
              <div className="bg-neutral-50 p-8 mb-8">
                <h3 className="font-serif text-2xl mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <a href="tel:+911234567890" className="flex items-center gap-4 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Call Us</p>
                      <p className="font-medium text-neutral-900">+91 123 456 7890</p>
                    </div>
                  </a>
                  <a href="mailto:info@himalayanresidency.com" className="flex items-center gap-4 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email Us</p>
                      <p className="font-medium text-neutral-900">info@himalayanresidency.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/911234567890" className="flex items-center gap-4 p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                      <MessageSquare className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">WhatsApp</p>
                      <p className="font-medium text-neutral-900">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-primary-900 p-8 text-white">
                <h3 className="font-serif text-2xl mb-4">Connect With Us</h3>
                <p className="text-neutral-300 mb-6">
                  Follow us on social media for updates, offers, and glimpses of life at Himalayan Residency.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, name: 'Facebook' },
                    { icon: Instagram, name: 'Instagram' },
                    { icon: Twitter, name: 'Twitter' },
                    { icon: Youtube, name: 'YouTube' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 bg-white/10 flex items-center justify-center hover:bg-secondary-600 transition-colors"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-secondary-50 p-8">
                <h3 className="font-serif text-xl mb-4">Special Services</h3>
                <div className="space-y-3">
                  {[
                    { icon: Calendar, text: 'Event & Wedding Planning' },
                    { icon: Users, text: 'Corporate Retreat Packages' },
                    { icon: MapPin, text: 'Airport/Railway Transfers' },
                  ].map((service) => (
                    <div key={service.text} className="flex items-center gap-3 text-neutral-700">
                      <service.icon className="text-primary-600" size={18} />
                      <span>{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Location"
            title="Find Us"
            description="Located on the scenic NH5, we're easily accessible from Shimla and other major destinations."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl mb-6">How to Reach</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <MapPin className="text-primary-600" size={18} />
                    From Shimla
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    126 km via NH5 (approximately 2.5-3 hours). The scenic route passes through
                    Kufri, Fagu, Matiana, and Narkanda with beautiful mountain views.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <MapPin className="text-primary-600" size={18} />
                    From Chandigarh
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Approximately 240 km (5-6 hours drive via Shimla). Alternatively, fly to
                    Chandigarh Airport and drive or take our transfer service.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <MapPin className="text-primary-600" size={18} />
                    Nearest Airport
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Jubbarhatti Airport, Shimla (152 km) - Limited flights<br />
                    Chandigarh Airport (240 km) - Better connectivity
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <MapPin className="text-primary-600" size={18} />
                    Nearest Railway
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    Shimla Railway Station (126 km) - Narrow gauge toy train from Kalka<br />
                    Kalka Railway Station (240 km) - Well connected to Delhi
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[400px] bg-neutral-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="text-primary-600 mx-auto mb-4" size={48} />
                <h3 className="font-serif text-xl mb-2">Himalayan Residency</h3>
                <p className="text-neutral-600">
                  Badrash, NH5<br />
                  Rampur Bushahr, Shimla District<br />
                  Himachal Pradesh 172001
                </p>
                <a
                  href="https://maps.google.com/?q=Rampur+Bushahr+Himachal+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-4 inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="FAQ"
            title="Frequently Asked Questions"
            description="Find quick answers to common questions about your stay."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-neutral-50 p-6">
                <h3 className="font-medium text-neutral-900 mb-3">{faq.question}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Have more questions? We're happy to help!
            </p>
            <a href="tel:+911234567890" className="btn-primary inline-flex items-center gap-2">
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Mountain backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            We Look Forward to Hosting You
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Experience the warmth of Himachali hospitality and the beauty of the Himalayas.
            Contact us today to begin planning your unforgettable stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+911234567890" className="btn-secondary inline-flex items-center gap-2">
              <Phone size={18} /> +91 123 456 7890
            </a>
            <a href="mailto:info@himalayanresidency.com" className="bg-white text-primary-900 px-8 py-3 font-medium tracking-wide uppercase text-sm hover:bg-secondary-100 transition-all duration-300 inline-flex items-center gap-2">
              <Mail size={18} /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
