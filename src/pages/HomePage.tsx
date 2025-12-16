import { Link } from 'react-router-dom';
import {
  ChevronDown, Star, MapPin, Calendar, Users, ArrowRight,
  Wifi, Car, Utensils, Dumbbell, Waves, TreePine, Coffee, Clock,
  Mountain, Quote, Phone, Mail, CheckCircle
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { images } from '../data/images';

const rooms = [
  {
    name: 'Deluxe Room',
    description: 'Spacious comfort with mountain views',
    price: '4,500',
    size: '350 sq ft',
    image: images.rooms.deluxe,
  },
  {
    name: 'Premium Suite',
    description: 'Elegant suite with separate living area',
    price: '7,500',
    size: '550 sq ft',
    image: images.rooms.premium,
  },
  {
    name: 'Royal Himalayan Suite',
    description: 'Ultimate luxury with panoramic views',
    price: '12,000',
    size: '800 sq ft',
    image: images.rooms.suite,
  },
];

const experiences = [
  {
    title: 'Temple Tours',
    description: 'Visit ancient Raghunath Temple, Bhima Kali Temple at Sarahan, and more sacred sites.',
    image: images.experiences.temple,
    duration: 'Full Day',
  },
  {
    title: 'River Rafting',
    description: 'Experience thrilling rapids on the mighty Sutlej River.',
    image: images.experiences.rafting,
    duration: 'Half Day',
  },
  {
    title: 'Mountain Treks',
    description: 'Explore Jalori Pass, Seruvalsar Lake, and scenic mountain trails.',
    image: images.experiences.trekking,
    duration: 'Full Day',
  },
  {
    title: 'Cultural Immersion',
    description: 'Discover Padam Palace, attend the famous Lavi Fair, and explore local villages.',
    image: images.experiences.cultural,
    duration: 'Half Day',
  },
];

const amenities = [
  { icon: Wifi, name: 'High-Speed WiFi', description: 'Stay connected throughout your stay' },
  { icon: Car, name: 'Free Parking', description: 'Secure covered parking available' },
  { icon: Utensils, name: 'Multi-Cuisine Restaurant', description: 'Local & international flavors' },
  { icon: Dumbbell, name: 'Fitness Center', description: 'Modern equipment & yoga space' },
  { icon: Waves, name: 'Spa Services', description: 'Traditional wellness treatments' },
  { icon: TreePine, name: 'Garden Terrace', description: 'Scenic outdoor relaxation' },
  { icon: Coffee, name: '24/7 Room Service', description: 'Round-the-clock dining' },
  { icon: Clock, name: 'Concierge Service', description: 'Personalized travel assistance' },
];

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'An absolutely stunning property with breathtaking views of the Himalayas. The staff went above and beyond to make our anniversary special. The Himachali cuisine was authentic and delicious!',
    image: images.testimonials[0],
  },
  {
    name: 'Priya Mehta',
    location: 'Mumbai',
    rating: 5,
    text: 'We visited during the Lavi Fair and it was magical. The hotel arranged everything perfectly - from temple visits to local experiences. Truly a hidden gem in Himachal!',
    image: images.testimonials[1],
  },
  {
    name: 'Amit Verma',
    location: 'Bangalore',
    rating: 5,
    text: 'Perfect base for exploring Rampur Bushahr and nearby attractions. The rooms are luxurious, the food is excellent, and the mountain views from the balcony are unforgettable.',
    image: images.testimonials[2],
  },
];

const stats = [
  { value: '5.0', label: 'Guest Rating' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '50+', label: 'Luxury Rooms' },
  { value: '10k+', label: 'Happy Guests' },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Himalayan Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <span className="text-secondary-400 uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in">
            Welcome to
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-shadow">
            Himalayan Residency
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 font-light">
            Rampur Bushahr, Himachal Pradesh
          </p>
          <p className="max-w-2xl text-white/70 mb-10 text-lg">
            Where ancient heritage meets mountain serenity. Experience luxury at 1,005 meters,
            surrounded by the majestic peaks of the Himalayas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/rooms" className="btn-secondary">
              Explore Rooms
            </Link>
            <Link to="/contact" className="btn-primary bg-secondary-600 hover:bg-secondary-700">
              Book Your Stay
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </section>

      <section className="bg-primary-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-secondary-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <img
                src={images.about.main}
                alt="Himalayan Residency"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-2xl hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-primary-900">1,005m</div>
                    <div className="text-neutral-500 text-sm">Elevation Above Sea</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="section-subtitle">About Us</span>
              <h2 className="section-title">A Legacy of Himalayan Hospitality</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Nestled in the historic town of Rampur Bushahr, once the capital of the princely
                state of Bushahr, The Himalayan Residency stands as a testament to timeless luxury
                and warm Himachali hospitality.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Located along the ancient Silk Road trade route, our property offers a unique blend
                of heritage and modern comfort. Wake up to panoramic views of snow-capped peaks,
                explore ancient temples, and immerse yourself in the rich culture of this enchanting region.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {['Panoramic Mountain Views', 'Heritage Location', 'Award-Winning Service', 'Authentic Experiences'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary-600" size={20} />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-outline inline-flex items-center gap-2">
                Discover Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Accommodations"
            title="Luxurious Rooms & Suites"
            description="Each room is thoughtfully designed to offer comfort, elegance, and stunning views of the Himalayan landscape."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.name} className="group">
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white px-4 py-2 text-sm font-medium">{room.size}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-2">{room.name}</h3>
                <p className="text-neutral-600 mb-4">{room.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-serif text-primary-700">INR {room.price}</span>
                    <span className="text-neutral-500 text-sm"> / night</span>
                  </div>
                  <Link to="/rooms" className="text-primary-700 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="btn-outline">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={images.dining.restaurant}
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Culinary Experience"
            title="A Taste of the Himalayas"
            description="Savor authentic Himachali cuisine alongside international favorites, all prepared with locally sourced ingredients and traditional recipes."
            light
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h3 className="font-serif text-2xl text-white mb-3">Signature Himachali Dishes</h3>
                <p className="text-neutral-300 mb-4">
                  Experience the authentic flavors of the mountains with our signature dishes
                  prepared by expert chefs using time-honored recipes.
                </p>
                <ul className="space-y-2 text-neutral-200">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                    Siddu - Steamed bread with walnut stuffing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                    Chha Gosht - Traditional lamb curry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                    Dham - Festive platter with rice and lentils
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full" />
                    Babru - Himachali kachori with tamarind chutney
                  </li>
                </ul>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="font-serif text-4xl text-secondary-400">6am</div>
                  <div className="text-white/70 text-sm">Breakfast Opens</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-4xl text-secondary-400">24/7</div>
                  <div className="text-white/70 text-sm">Room Service</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-4xl text-secondary-400">5+</div>
                  <div className="text-white/70 text-sm">Cuisines Offered</div>
                </div>
              </div>
              <Link to="/dining" className="btn-secondary inline-flex items-center gap-2">
                Explore Dining <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {images.dining.dishes.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Dish ${index + 1}`}
                  className={`w-full object-cover ${index % 3 === 0 ? 'h-48' : 'h-56'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Things to Do"
            title="Unforgettable Experiences"
            description="From ancient temples to thrilling adventures, discover the magic of Rampur Bushahr and the surrounding Himalayan region."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp) => (
              <div key={exp.title} className="group relative overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-secondary-400 text-sm flex items-center gap-1 mb-2">
                    <Clock size={14} /> {exp.duration}
                  </span>
                  <h3 className="font-serif text-xl text-white mb-2">{exp.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/experiences" className="btn-outline">
              View All Experiences
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Amenities"
            title="World-Class Facilities"
            description="Enjoy modern amenities designed to enhance your comfort and create memorable experiences."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.name}
                className="bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-700 transition-colors duration-300">
                  <amenity.icon className="text-primary-700 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="font-serif text-lg mb-2">{amenity.name}</h3>
                <p className="text-neutral-500 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Guest Reviews"
            title="What Our Guests Say"
            description="Don't just take our word for it - hear from travelers who have experienced the magic of Himalayan Residency."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-neutral-50 p-8 relative">
                <Quote className="absolute top-6 right-6 text-primary-100" size={48} />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-secondary-500 fill-secondary-500" size={18} />
                  ))}
                </div>
                <p className="text-neutral-600 mb-6 relative z-10 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-neutral-900">{testimonial.name}</div>
                    <div className="text-neutral-500 text-sm flex items-center gap-1">
                      <MapPin size={12} /> {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-subtitle text-secondary-400">Location</span>
              <h2 className="section-title text-white">How to Reach Us</h2>
              <p className="text-neutral-300 mb-8 leading-relaxed">
                Located on NH5 in the historic town of Rampur Bushahr, we're easily accessible
                from major cities while being surrounded by pristine Himalayan beauty.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">From Shimla</h4>
                    <p className="text-neutral-400">126 km via NH5 (~2.5 hours drive through scenic mountain roads via Kufri, Narkanda)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Nearest Airport</h4>
                    <p className="text-neutral-400">Jubbarhatti Airport, Shimla (152 km) or Chandigarh Airport (180 km)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Best Time to Visit</h4>
                    <p className="text-neutral-400">March to June & September to November (Pleasant weather, 15-25C)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8">
              <h3 className="font-serif text-2xl mb-6 text-primary-900">Plan Your Visit</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-neutral-50 hover:bg-primary-50 transition-colors cursor-pointer">
                  <Phone className="text-primary-700" />
                  <div>
                    <div className="text-sm text-neutral-500">Call Us</div>
                    <div className="font-medium text-neutral-900">+91 123 456 7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-neutral-50 hover:bg-primary-50 transition-colors cursor-pointer">
                  <Mail className="text-primary-700" />
                  <div>
                    <div className="text-sm text-neutral-500">Email Us</div>
                    <div className="font-medium text-neutral-900">info@himalayanresidency.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-neutral-50 hover:bg-primary-50 transition-colors cursor-pointer">
                  <MapPin className="text-primary-700" />
                  <div>
                    <div className="text-sm text-neutral-500">Address</div>
                    <div className="font-medium text-neutral-900">Badrash, NH5, Rampur Bushahr, HP 172001</div>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full text-center mt-6">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Photo Gallery"
            title="Glimpses of Paradise"
            description="Browse through our collection of stunning photographs capturing the beauty of our property and surroundings."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.gallery.slice(0, 8).map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden group cursor-pointer ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 || index === 5 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-0">
          <img
            src={images.heroVideo}
            alt="Mountain backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Begin Your Himalayan Journey
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Escape to the mountains and discover a world of tranquility, adventure, and authentic
            Himachali hospitality. Your unforgettable stay awaits.
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
