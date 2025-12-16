import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wifi, Tv, Coffee, Wind, Bath, Mountain, Users, Maximize,
  CheckCircle, ArrowRight, Phone, Star
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { images } from '../data/images';

const rooms = [
  {
    id: 'deluxe',
    name: 'Deluxe Room',
    tagline: 'Comfortable elegance with mountain charm',
    description: 'Our Deluxe Rooms offer a perfect blend of comfort and style, featuring handcrafted wooden furnishings, premium bedding, and large windows that frame the stunning Himalayan landscape. Ideal for couples or solo travelers seeking a peaceful mountain retreat.',
    price: '4,500',
    size: '350 sq ft',
    capacity: '2 Adults',
    view: 'Mountain View',
    image: images.rooms.deluxe,
    amenities: ['King-size Bed', 'Mountain View Balcony', 'Rainfall Shower', 'Mini Bar', 'LED TV', 'Free WiFi', 'Room Service', 'Tea/Coffee Maker'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Welcome drink', 'Newspaper on request'],
  },
  {
    id: 'premium',
    name: 'Premium Suite',
    tagline: 'Elevated luxury with separate living space',
    description: 'The Premium Suite offers an elevated experience with a separate living area, elegant decor inspired by Himachali heritage, and a private balcony perfect for watching sunrise over the mountains. Features include a work desk and seating area for added convenience.',
    price: '7,500',
    size: '550 sq ft',
    capacity: '2 Adults + 1 Child',
    view: 'Panoramic Mountain View',
    image: images.rooms.premium,
    amenities: ['King-size Bed', 'Separate Living Area', 'Private Balcony', 'Bathtub & Shower', 'Mini Bar', '55" LED TV', 'High-speed WiFi', 'Nespresso Machine'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Welcome amenity', 'Evening turndown service', 'Priority restaurant reservations'],
  },
  {
    id: 'royal-suite',
    name: 'Royal Himalayan Suite',
    tagline: 'The pinnacle of mountain luxury',
    description: 'Our signature accommodation offers unparalleled luxury with over 800 sq ft of living space, including a master bedroom, spacious living room, and a wraparound balcony with 180-degree mountain views. Experience royal treatment with personalized butler service.',
    price: '12,000',
    size: '800 sq ft',
    capacity: '2 Adults + 2 Children',
    view: '180° Panoramic View',
    image: images.rooms.suite,
    amenities: ['Super King Bed', 'Wraparound Balcony', 'Jacuzzi Tub', 'Living & Dining Area', 'Premium Mini Bar', '65" Smart TV', 'Bose Sound System', 'Espresso Machine'],
    features: ['Butler service', 'Complimentary breakfast', 'Airport transfers', 'Spa credit included', 'In-room dining setup', 'Late checkout'],
  },
  {
    id: 'family',
    name: 'Family Suite',
    tagline: 'Spacious comfort for the whole family',
    description: 'Designed with families in mind, this spacious suite features two bedrooms, a common living area, and child-friendly amenities. Enjoy quality family time with ample space for everyone while surrounded by the beauty of the Himalayas.',
    price: '9,500',
    size: '700 sq ft',
    capacity: '4 Adults or 2 Adults + 3 Children',
    view: 'Garden & Mountain View',
    image: images.rooms.family,
    amenities: ['1 King + 2 Twin Beds', 'Two Bathrooms', 'Family Living Area', 'Kids\' Welcome Kit', 'Gaming Console', 'Two LED TVs', 'Free WiFi', 'Mini Refrigerator'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Kids eat free', 'Babysitting available', 'Board games provided'],
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Suite',
    tagline: 'Romance amidst the mountains',
    description: 'Celebrate love in our specially designed Honeymoon Suite featuring romantic decor, a private jacuzzi with mountain views, and exclusive couple amenities. Perfect for newlyweds seeking an intimate mountain escape.',
    price: '10,500',
    size: '600 sq ft',
    capacity: '2 Adults',
    view: 'Private Valley View',
    image: images.rooms.honeymoon,
    amenities: ['Four-poster King Bed', 'Private Jacuzzi', 'Rose Petal Setup', 'Champagne on Arrival', 'Couples\' Amenity Kit', '55" Smart TV', 'Bluetooth Speaker', 'Premium Mini Bar'],
    features: ['Candlelit dinner setup', 'Couples\' spa discount', 'Late checkout guaranteed', 'Flower arrangements', 'Complimentary cake'],
  },
  {
    id: 'executive',
    name: 'Executive Room',
    tagline: 'Business meets comfort',
    description: 'Ideal for business travelers, our Executive Room combines professional amenities with mountain serenity. Features include a dedicated work desk, high-speed WiFi, and ergonomic chair for productive stays.',
    price: '5,500',
    size: '400 sq ft',
    capacity: '2 Adults',
    view: 'Mountain View',
    image: images.rooms.royal,
    amenities: ['Queen-size Bed', 'Work Desk & Chair', 'Rainfall Shower', 'Express Laundry', '50" LED TV', 'High-speed WiFi', 'Mini Bar', 'Nespresso Machine'],
    features: ['Daily housekeeping', 'Complimentary breakfast', 'Meeting room access', 'Printing services', 'Express check-in/out'],
  },
];

const commonAmenities = [
  { icon: Wifi, name: 'Free High-Speed WiFi' },
  { icon: Tv, name: 'LED Smart TV' },
  { icon: Coffee, name: 'Tea/Coffee Maker' },
  { icon: Wind, name: 'Climate Control' },
  { icon: Bath, name: 'Premium Toiletries' },
  { icon: Mountain, name: 'Mountain Views' },
];

export default function RoomsPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return (
    <div>
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={images.rooms.suite}
            alt="Luxury Suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <span className="text-secondary-400 uppercase tracking-[0.3em] text-sm mb-4">
            Accommodations
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-shadow">
            Rooms & Suites
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">
            Experience mountain luxury in our thoughtfully designed accommodations with stunning Himalayan views
          </p>
        </div>
      </section>

      <section className="py-12 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {commonAmenities.map((amenity) => (
              <div key={amenity.name} className="flex items-center gap-3 text-white">
                <amenity.icon className="text-secondary-400" size={24} />
                <span className="text-sm">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Choose Your Retreat"
            title="Our Accommodations"
            description="From cozy deluxe rooms to expansive suites, find the perfect space for your Himalayan getaway."
          />

          <div className="space-y-20">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative group overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary-700 text-white px-4 py-2 text-sm font-medium">
                      {room.view}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-primary-900 font-serif text-xl">
                      INR {room.price}<span className="text-sm text-neutral-500">/night</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-secondary-600 uppercase tracking-widest text-sm">{room.tagline}</span>
                  <h3 className="font-serif text-3xl md:text-4xl mt-2 mb-4">{room.name}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{room.description}</p>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Maximize className="text-primary-600" size={20} />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Users className="text-primary-600" size={20} />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-700">
                      <Mountain className="text-primary-600" size={20} />
                      <span>{room.view}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedRoom(selectedRoom === room.id ? null : room.id)}
                    className="text-primary-700 font-medium mb-4 hover:text-primary-800 transition-colors"
                  >
                    {selectedRoom === room.id ? 'Hide Details' : 'View All Amenities'} <ArrowRight className="inline ml-1" size={16} />
                  </button>

                  {selectedRoom === room.id && (
                    <div className="bg-neutral-50 p-6 mb-6 animate-fade-in">
                      <h4 className="font-medium mb-3">Room Amenities</h4>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {room.amenities.map((amenity) => (
                          <div key={amenity} className="flex items-center gap-2 text-sm text-neutral-600">
                            <CheckCircle className="text-primary-600" size={16} />
                            {amenity}
                          </div>
                        ))}
                      </div>
                      <h4 className="font-medium mb-3">Included Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {room.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                            <CheckCircle className="text-secondary-600" size={16} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link to="/contact" className="btn-primary">
                    Book This Room
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
            subtitle="Room Features"
            title="Standard Amenities in All Rooms"
            description="Every room at Himalayan Residency comes equipped with these essential amenities for your comfort."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: 'High-Speed WiFi', desc: 'Complimentary wireless internet throughout the property' },
              { icon: Tv, title: 'Entertainment', desc: 'LED Smart TV with satellite channels and streaming' },
              { icon: Coffee, title: 'Refreshments', desc: 'Tea/coffee maker with premium local teas' },
              { icon: Wind, title: 'Climate Control', desc: 'Individual AC and heating for perfect comfort' },
              { icon: Bath, title: 'Luxury Bath', desc: 'Premium toiletries and plush towels' },
              { icon: Mountain, title: 'Scenic Views', desc: 'Windows designed to maximize mountain vistas' },
              { icon: Phone, title: '24/7 Service', desc: 'Round-the-clock room service and assistance' },
              { icon: Star, title: 'Daily Housekeeping', desc: 'Thorough cleaning and turndown service' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                  <item.icon className="text-primary-700" size={24} />
                </div>
                <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-primary-900 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary-400 uppercase tracking-widest text-sm">Special Offers</span>
                <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 mb-6">
                  Book Direct & Save
                </h2>
                <p className="text-neutral-300 mb-6">
                  Book directly with us and enjoy exclusive benefits including best rate guarantee,
                  complimentary room upgrades (subject to availability), and special welcome amenities.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Best Rate Guarantee',
                    'Complimentary Room Upgrade',
                    'Early Check-in / Late Check-out',
                    'Welcome Fruit Basket',
                    'Free Cancellation (48 hours)',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <CheckCircle className="text-secondary-400" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-serif text-2xl mb-6 text-primary-900">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Room Type</label>
                    <select className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none">
                      <option>Select a room</option>
                      {rooms.map((room) => (
                        <option key={room.id} value={room.id}>{room.name} - INR {room.price}/night</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-neutral-600 mb-1">Check In</label>
                      <input type="date" className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-600 mb-1">Check Out</label>
                      <input type="date" className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-1">Guests</label>
                    <select className="w-full p-3 border border-neutral-200 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults + 1 Child</option>
                      <option>2 Adults + 2 Children</option>
                    </select>
                  </div>
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Check Availability
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Policies"
            title="Good to Know"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Check-in / Check-out',
                items: ['Check-in: 2:00 PM', 'Check-out: 11:00 AM', 'Early check-in subject to availability', 'Late check-out available on request'],
              },
              {
                title: 'Payment & Cancellation',
                items: ['All major credit cards accepted', 'UPI & bank transfers welcome', 'Free cancellation up to 48 hours', 'No-show charged at 100%'],
              },
              {
                title: 'Additional Services',
                items: ['Extra bed: INR 1,500/night', 'Airport transfer: INR 4,000', 'Laundry service available', 'Pet-friendly rooms on request'],
              },
            ].map((policy) => (
              <div key={policy.title} className="bg-white p-8">
                <h3 className="font-serif text-xl mb-4">{policy.title}</h3>
                <ul className="space-y-2">
                  {policy.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-neutral-600 text-sm">
                      <CheckCircle className="text-primary-600 mt-0.5 flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
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
            Ready to Experience Mountain Luxury?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today to book your perfect room and begin your Himalayan journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Book Now
            </Link>
            <a href="tel:+911234567890" className="bg-white text-primary-900 px-8 py-3 font-medium tracking-wide uppercase text-sm hover:bg-secondary-100 transition-all duration-300 inline-flex items-center justify-center gap-2">
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
