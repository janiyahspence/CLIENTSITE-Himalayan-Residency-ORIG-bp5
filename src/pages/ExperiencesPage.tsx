import { Link } from 'react-router-dom';
import {
  Clock, MapPin, Users, Star, ArrowRight, Mountain, Camera,
  Waves, TreePine, Building, Tent, CheckCircle, Calendar, Phone
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { images } from '../data/images';

const experiences = [
  {
    id: 'temple-tours',
    title: 'Sacred Temple Tours',
    tagline: 'Discover Ancient Spirituality',
    description: 'Explore the rich spiritual heritage of Rampur Bushahr and its surrounding regions. Visit ancient Hindu and Buddhist temples, each with unique architectural styles and fascinating legends.',
    image: images.experiences.temple,
    duration: 'Full Day (8-10 hours)',
    groupSize: '2-8 people',
    difficulty: 'Easy',
    price: '2,500',
    highlights: [
      'Raghunath Temple - 17th century shrine with exquisite wood carvings',
      'Bhima Kali Temple, Sarahan - One of India\'s most sacred Shakti Peethas',
      'Narsingh Temple - Ancient temple dedicated to Lord Vishnu',
      'Dumgir Buddhist Temple - Features a giant prayer wheel',
    ],
    includes: ['Transport', 'Expert Guide', 'Entry Fees', 'Packed Lunch', 'Bottled Water'],
    bestTime: 'Year Round',
  },
  {
    id: 'river-rafting',
    title: 'Sutlej River Rafting',
    tagline: 'Thrilling Rapids Adventure',
    description: 'Experience the adrenaline rush of white water rafting on the mighty Sutlej River. Navigate through exciting rapids surrounded by stunning mountain gorges and pristine wilderness.',
    image: images.experiences.rafting,
    duration: 'Half Day (4-5 hours)',
    groupSize: '4-12 people',
    difficulty: 'Moderate to Challenging',
    price: '3,500',
    highlights: [
      'Grade III-IV rapids for an exciting adventure',
      'Stunning views of Himalayan gorges',
      'Professional safety equipment and trained guides',
      'Riverside snack break at scenic spot',
    ],
    includes: ['Transport', 'Professional Guide', 'Safety Gear', 'Snacks', 'Insurance'],
    bestTime: 'March to June',
  },
  {
    id: 'mountain-treks',
    title: 'Himalayan Treks',
    tagline: 'Journey Through Alpine Beauty',
    description: 'Embark on guided treks through pristine mountain trails, from gentle nature walks to challenging high-altitude expeditions. Discover hidden waterfalls, alpine meadows, and breathtaking viewpoints.',
    image: images.experiences.trekking,
    duration: 'Half to Full Day',
    groupSize: '2-10 people',
    difficulty: 'Easy to Challenging',
    price: '1,500',
    highlights: [
      'Jalori Pass Trek (3,223m) - Gateway to Kullu Valley',
      'Seruvalsar Lake - Sacred alpine lake trek',
      'Nature walks through deodar forests',
      'Sunrise viewpoint expeditions',
    ],
    includes: ['Guide', 'Trekking Poles', 'First Aid Kit', 'Snacks', 'Packed Lunch (full day)'],
    bestTime: 'March to November',
  },
  {
    id: 'cultural-immersion',
    title: 'Cultural Immersion',
    tagline: 'Experience Himachali Heritage',
    description: 'Dive deep into the rich cultural tapestry of Rampur Bushahr. Visit historic palaces, attend traditional festivals, interact with local artisans, and discover the ancient trade route heritage.',
    image: images.experiences.cultural,
    duration: 'Half to Full Day',
    groupSize: '2-6 people',
    difficulty: 'Easy',
    price: '2,000',
    highlights: [
      'Padam Palace tour (by permission)',
      'Village walks through Nirath and Duttnagar',
      'Local handicraft demonstrations',
      'Traditional Himachali cooking class',
    ],
    includes: ['Transport', 'Local Guide', 'Cultural Interactions', 'Tea/Snacks'],
    bestTime: 'Year Round',
  },
  {
    id: 'wildlife-safari',
    title: 'Wildlife Sanctuary Visit',
    tagline: 'Encounter Mountain Wildlife',
    description: 'Explore the diverse flora and fauna of the Himalayan foothills. Visit nearby wildlife sanctuaries to spot Himalayan wildlife including various bird species, deer, and if lucky, the elusive snow leopard.',
    image: images.experiences.wildlife,
    duration: 'Full Day',
    groupSize: '2-6 people',
    difficulty: 'Easy to Moderate',
    price: '4,000',
    highlights: [
      'Rupi Bhaba Wildlife Sanctuary',
      'Daranghati Sanctuary',
      'Bird watching in deodar forests',
      'Wildlife photography opportunities',
    ],
    includes: ['Transport', 'Naturalist Guide', 'Entry Permits', 'Binoculars', 'Packed Lunch'],
    bestTime: 'September to May',
  },
  {
    id: 'wellness-spa',
    title: 'Wellness & Spa',
    tagline: 'Rejuvenate Body and Soul',
    description: 'Indulge in traditional Himalayan wellness treatments and modern spa therapies. Our spa offers a sanctuary of relaxation with treatments inspired by ancient Ayurvedic traditions.',
    image: images.experiences.spa,
    duration: '1-3 hours',
    groupSize: '1-2 people',
    difficulty: 'Easy',
    price: '1,800',
    highlights: [
      'Himalayan Hot Stone Massage',
      'Ayurvedic Body Treatments',
      'Aromatherapy Sessions',
      'Yoga and Meditation Classes',
    ],
    includes: ['Spa Treatment', 'Herbal Tea', 'Relaxation Lounge Access', 'Robe & Slippers'],
    bestTime: 'Year Round',
  },
];

const nearbyAttractions = [
  {
    name: 'Sarahan',
    distance: '45 km',
    description: 'Home to the magnificent Bhima Kali Temple',
    image: images.experiences.temple,
  },
  {
    name: 'Jalori Pass',
    distance: '74 km',
    description: 'Scenic mountain pass at 3,223m elevation',
    image: images.experiences.trekking,
  },
  {
    name: 'Tattapani Hot Springs',
    distance: '35 km',
    description: 'Natural hot water springs along Sutlej',
    image: images.experiences.spa,
  },
  {
    name: 'Kinnaur Valley',
    distance: '80 km',
    description: 'Gateway to the apple orchards and beyond',
    image: images.hero,
  },
];

const specialEvents = [
  {
    name: 'Lavi Fair',
    timing: 'November',
    description: 'One of India\'s largest trade fairs, 300+ years old tradition',
  },
  {
    name: 'Dussehra Festival',
    timing: 'October',
    description: 'Vibrant celebrations with traditional processions',
  },
  {
    name: 'Baisakhi',
    timing: 'April',
    description: 'Harvest festival with local music and dance',
  },
];

export default function ExperiencesPage() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={images.experiences.trekking}
            alt="Mountain Trek"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <span className="text-secondary-400 uppercase tracking-[0.3em] text-sm mb-4">
            Things to Do
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-shadow">
            Experiences
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">
            From sacred temples to thrilling adventures - discover the magic of Rampur Bushahr
          </p>
        </div>
      </section>

      <section className="py-12 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Mountain, text: 'Trekking & Hiking' },
              { icon: Building, text: 'Heritage Tours' },
              { icon: Waves, text: 'River Adventures' },
              { icon: TreePine, text: 'Nature Walks' },
              { icon: Camera, text: 'Photography Tours' },
              { icon: Tent, text: 'Camping' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-white">
                <item.icon className="text-secondary-400" size={24} />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Curated Activities"
            title="Discover & Explore"
            description="Our concierge team has curated the best experiences to help you discover the wonders of this extraordinary region."
          />

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                id={exp.id}
                className={`grid lg:grid-cols-2 gap-12 items-start`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden group sticky top-24">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white px-4 py-2">
                      <span className="text-primary-700 font-medium">From INR {exp.price}</span>
                      <span className="text-neutral-500 text-sm"> /person</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-secondary-600 uppercase tracking-widest text-sm">{exp.tagline}</span>
                  <h3 className="font-serif text-3xl md:text-4xl mt-2 mb-4">{exp.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-6 mb-6 py-4 border-y border-neutral-200">
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Clock className="text-primary-600" size={18} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Users className="text-primary-600" size={18} />
                      <span className="text-sm">{exp.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Star className="text-primary-600" size={18} />
                      <span className="text-sm">{exp.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Calendar className="text-primary-600" size={18} />
                      <span className="text-sm">{exp.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-neutral-800">Highlights</h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-neutral-600 text-sm">
                          <CheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" size={16} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-3 text-neutral-800">Includes</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.includes.map((item) => (
                        <span
                          key={item}
                          className="bg-primary-50 text-primary-700 px-3 py-1 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                    Book This Experience <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Nearby Attractions"
            title="Day Trip Destinations"
            description="Explore the wonders beyond Rampur Bushahr with our guided day trips."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAttractions.map((attraction) => (
              <div key={attraction.name} className="bg-white group cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="text-white flex items-center gap-1 text-sm">
                      <MapPin size={14} /> {attraction.distance}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">{attraction.name}</h3>
                  <p className="text-neutral-600 text-sm">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-outline">
              Plan a Day Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Local Festivals"
            title="Experience Himachali Culture"
            description="Time your visit to witness the vibrant festivals and traditions of the region."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {specialEvents.map((event) => (
              <div key={event.name} className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 text-center">
                <span className="text-secondary-400 text-sm uppercase tracking-wider">{event.timing}</span>
                <h3 className="font-serif text-2xl text-white my-3">{event.name}</h3>
                <p className="text-neutral-300">{event.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 mt-12 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl text-white mb-4">The Famous Lavi Fair</h3>
                <p className="text-neutral-300 mb-4">
                  Don't miss the legendary Lavi Fair, held every November for over 300 years.
                  This international trade fair was once a vital stop on the ancient Silk Road,
                  where traders from Tibet, Afghanistan, and India exchanged goods.
                </p>
                <p className="text-neutral-300">
                  Today, it's a vibrant celebration featuring traditional goods, local handicrafts,
                  dry fruits, woolens, and cultural performances. Book early for stays during this
                  popular event!
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Woolen Goods', 'Dry Fruits', 'Handicrafts', 'Local Cuisine', 'Cultural Shows', 'Traditional Music'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white">
                    <CheckCircle className="text-secondary-400" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Personalized Tours"
            title="Create Your Own Adventure"
            description="Can't find what you're looking for? Our concierge team can create customized itineraries tailored to your interests."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Photography Expeditions',
                description: 'Capture the Himalayas with guided tours to the best viewpoints and sunrise spots.',
              },
              {
                title: 'Bird Watching Tours',
                description: 'Spot Himalayan monal, koklass pheasant, and over 200 bird species.',
              },
              {
                title: 'Apple Orchard Visits',
                description: 'Visit local orchards and learn about Himachal\'s famous apple cultivation.',
              },
              {
                title: 'Stargazing Nights',
                description: 'Experience clear mountain skies with minimal light pollution.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-50 p-6 hover:bg-primary-50 transition-colors">
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-50 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl mb-4">Concierge Services</h3>
                <p className="text-neutral-600 mb-4">
                  Our experienced concierge team is at your service to plan and book all your activities.
                  From airport transfers to adventure excursions, we handle every detail.
                </p>
                <ul className="space-y-2">
                  {[
                    'Custom itinerary planning',
                    'Vehicle and driver arrangements',
                    'Expert guide bookings',
                    'Equipment rental assistance',
                    'Restaurant reservations',
                    'Special celebration arrangements',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-neutral-700">
                      <CheckCircle className="text-primary-600" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8">
                <h4 className="font-serif text-xl mb-4">Contact Concierge</h4>
                <div className="space-y-4">
                  <a href="tel:+911234567890" className="flex items-center gap-3 text-neutral-700 hover:text-primary-700 transition-colors">
                    <Phone size={20} />
                    +91 123 456 7890
                  </a>
                  <p className="text-neutral-500 text-sm">
                    Available 24/7 for in-house guests. Please book activities at least 24 hours in advance.
                  </p>
                </div>
                <Link to="/contact" className="btn-primary w-full text-center mt-6">
                  Send Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-0">
          <img
            src={images.experiences.cultural}
            alt="Cultural experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready for Your Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Let us help you plan the perfect Himalayan experience. Contact our team to book activities
            or create a customized itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Plan Your Trip
            </Link>
            <Link to="/rooms" className="bg-white text-primary-900 px-8 py-3 font-medium tracking-wide uppercase text-sm hover:bg-secondary-100 transition-all duration-300 inline-block">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
