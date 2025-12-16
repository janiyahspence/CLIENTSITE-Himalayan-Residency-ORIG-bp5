import { Link } from 'react-router-dom';
import {
  Mountain, Award, Heart, Users, Calendar, MapPin, Star, Shield,
  Leaf, Clock, CheckCircle, ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { images } from '../data/images';

const timeline = [
  {
    year: '18th Century',
    title: 'Royal Heritage',
    description: 'Rampur Bushahr served as the capital of the princely state of Bushahr, a key stop on the ancient Silk Road connecting Tibet and India.',
  },
  {
    year: '2008',
    title: 'Foundation',
    description: 'The Himalayan Residency was established with a vision to showcase the rich heritage and natural beauty of Rampur Bushahr to travelers worldwide.',
  },
  {
    year: '2015',
    title: 'Major Renovation',
    description: 'Complete renovation integrating modern luxury amenities while preserving traditional Himachali architectural elements.',
  },
  {
    year: '2020',
    title: 'Excellence Award',
    description: 'Recognized as one of the finest heritage properties in Himachal Pradesh for exceptional hospitality and guest experiences.',
  },
  {
    year: 'Today',
    title: 'Continuing Legacy',
    description: 'Welcoming guests from around the world to experience authentic Himalayan hospitality and the magic of Rampur Bushahr.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Warm Hospitality',
    description: 'Every guest is treated as family, with personalized service that goes beyond expectations.',
  },
  {
    icon: Mountain,
    title: 'Authentic Experiences',
    description: 'We connect guests with genuine local culture, traditions, and the natural beauty of the Himalayas.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and supporting the local community and environment.',
  },
  {
    icon: Shield,
    title: 'Quality Excellence',
    description: 'Uncompromising standards in comfort, cleanliness, and service delivery.',
  },
];

const team = [
  {
    name: 'Mr. Vikram Singh',
    role: 'General Manager',
    description: '20+ years in hospitality, passionate about showcasing Himachali culture to the world.',
  },
  {
    name: 'Chef Rajan Thakur',
    role: 'Executive Chef',
    description: 'Master of traditional Himachali cuisine with expertise in international flavors.',
  },
  {
    name: 'Ms. Priya Sharma',
    role: 'Guest Relations Manager',
    description: 'Dedicated to creating personalized, memorable experiences for every guest.',
  },
];

const accolades = [
  { icon: Star, text: '5.0 Rating on Travel Platforms' },
  { icon: Award, text: 'Excellence in Hospitality Award 2023' },
  { icon: Users, text: '10,000+ Happy Guests' },
  { icon: Calendar, text: '15+ Years of Service' },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={images.about.main}
            alt="Himalayan Residency"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <span className="text-secondary-400 uppercase tracking-[0.3em] text-sm mb-4">
            Discover Our Story
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-shadow">
            About Us
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">
            A legacy of Himalayan hospitality rooted in the rich heritage of Rampur Bushahr
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-subtitle">Our Story</span>
              <h2 className="section-title">Where Heritage Meets Hospitality</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                The Himalayan Residency stands proudly in Rampur Bushahr, a town steeped in history
                and natural splendor. Once the capital of the ancient Bushahr kingdom and a vital
                stop on the Silk Road connecting Tibet to India, this region has welcomed travelers
                for centuries.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Our property was founded with a singular vision: to share the magic of this extraordinary
                place with travelers from around the world. We believe that true hospitality comes from
                the heart, and every member of our team is dedicated to making your stay unforgettable.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                From the moment you arrive, you'll be embraced by the warmth of Himachali hospitality,
                surrounded by breathtaking mountain vistas, and immersed in a culture that has remained
                authentic for generations. This is more than a hotel - it's a gateway to experiencing
                the soul of the Himalayas.
              </p>
              <div className="flex flex-wrap gap-6">
                {accolades.map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-neutral-700">
                    <item.icon className="text-primary-600" size={20} />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={images.about.heritage}
                alt="Heritage"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary-700 p-8 text-white hidden lg:block">
                <div className="font-serif text-5xl mb-2">15+</div>
                <div className="uppercase tracking-wider text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Our Journey"
            title="A Rich History"
            description="From royal heritage to modern hospitality, tracing our path through time."
          />

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-200 hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`lg:flex items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <span className="text-secondary-600 font-serif text-2xl">{item.year}</span>
                      <h3 className="font-serif text-xl mt-2 mb-3">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-primary-700 rounded-full mx-auto relative z-10" />
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide every aspect of our service and hospitality."
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary-600 transition-colors duration-300">
                  <value.icon className="text-secondary-400 group-hover:text-white transition-colors" size={36} />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{value.title}</h3>
                <p className="text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="The Location"
            title="Rampur Bushahr - A Timeless Destination"
            description="Discover the rich history and natural beauty of our mountain home."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                Rampur Bushahr is a historic township nestled along the left bank of the Sutlej River
                at an elevation of 1,005 meters. Once the capital of the princely state of Bushahr
                in the 18th century, it served as a crucial trading post on the ancient Silk Road
                connecting Afghanistan, Ladakh, China, and Tibet.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Home to the majestic Padam Palace of the royal family',
                  'Ancient temples including Raghunath and Bhima Kali',
                  'Gateway to Sarahan, Kinnaur, and Spiti Valley',
                  'Famous for the annual Lavi Fair - one of India\'s largest trade fairs',
                  '126 km from Shimla via scenic NH5 highway',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-primary-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/experiences" className="btn-outline inline-flex items-center gap-2">
                Explore Experiences <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={images.experiences.temple}
                alt="Temple"
                className="w-full h-48 object-cover"
              />
              <img
                src={images.experiences.cultural}
                alt="Culture"
                className="w-full h-48 object-cover mt-8"
              />
              <img
                src={images.experiences.trekking}
                alt="Trekking"
                className="w-full h-48 object-cover"
              />
              <img
                src={images.experiences.rafting}
                alt="Rafting"
                className="w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Our Team"
            title="Meet the People Behind Your Experience"
            description="Dedicated professionals committed to making your stay unforgettable."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="text-primary-700" size={40} />
                </div>
                <h3 className="font-serif text-xl mb-1">{member.name}</h3>
                <p className="text-secondary-600 text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-neutral-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Why Choose Us"
            title="The Himalayan Residency Difference"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Prime Location',
                description: 'Ideally situated on NH5 with easy access to temples, palaces, and natural attractions.',
              },
              {
                icon: Star,
                title: 'Exceptional Service',
                description: '5-star rated hospitality with personalized attention to every guest.',
              },
              {
                icon: Mountain,
                title: 'Stunning Views',
                description: 'Panoramic vistas of the Himalayan peaks from every corner of the property.',
              },
              {
                icon: Clock,
                title: 'Local Expertise',
                description: 'Deep knowledge of the region to help you discover hidden gems.',
              },
              {
                icon: Leaf,
                title: 'Eco-Conscious',
                description: 'Sustainable practices that protect the pristine mountain environment.',
              },
              {
                icon: Heart,
                title: 'Authentic Experience',
                description: 'Genuine Himachali culture, cuisine, and traditions at your doorstep.',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 bg-neutral-50 hover:bg-primary-50 transition-colors">
                <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
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
            Experience the Magic Yourself
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join the thousands of guests who have discovered the beauty and warmth of
            Himalayan Residency. Your mountain adventure awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Book Your Stay
            </Link>
            <Link to="/rooms" className="bg-white text-primary-900 px-8 py-3 font-medium tracking-wide uppercase text-sm hover:bg-secondary-100 transition-all duration-300 inline-block">
              View Rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
