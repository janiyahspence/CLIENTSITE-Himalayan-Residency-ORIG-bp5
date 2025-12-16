import { Link } from 'react-router-dom';
import {
  Clock, UtensilsCrossed, Coffee, Wine, ChefHat, Leaf,
  Star, CheckCircle, Phone, Calendar
} from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { images } from '../data/images';

const venues = [
  {
    name: 'The Mountain View Restaurant',
    tagline: 'Fine Dining with Himalayan Vistas',
    description: 'Our signature restaurant offers an elegant dining experience with panoramic views of the snow-capped peaks. Savor multi-cuisine delights prepared by our expert chefs using locally sourced ingredients and traditional recipes passed down through generations.',
    image: images.dining.restaurant,
    timing: '7:00 AM - 10:30 PM',
    cuisine: 'Multi-Cuisine',
    features: ['Panoramic Mountain Views', 'Live Kitchen', 'Private Dining Available', 'Wine Selection'],
    specialties: ['Himachali Thali', 'Continental Breakfast', 'Tandoor Specialties', 'Fresh Trout'],
  },
  {
    name: 'Chai & Stories Cafe',
    tagline: 'Cozy Corner for Conversations',
    description: 'A warm, intimate space perfect for savoring aromatic local teas, fresh-baked treats, and light snacks. The perfect spot to unwind with a book or catch up with fellow travelers while enjoying views of the garden terrace.',
    image: images.dining.cafe,
    timing: '6:30 AM - 9:00 PM',
    cuisine: 'Cafe & Bakery',
    features: ['Garden Terrace Seating', 'Freshly Baked Goods', 'Local Tea Selection', 'Light Meals'],
    specialties: ['Kangra Green Tea', 'Apple Cider', 'Homemade Cookies', 'Sandwiches & Wraps'],
  },
  {
    name: 'The Summit Lounge',
    tagline: 'Evenings Under the Stars',
    description: 'Unwind in our sophisticated lounge bar featuring an extensive selection of spirits, wines, and signature cocktails. With its cozy fireplace and outdoor terrace, it\'s the perfect place for pre-dinner drinks or nightcaps.',
    image: images.dining.bar,
    timing: '5:00 PM - 11:00 PM',
    cuisine: 'Bar & Lounge',
    features: ['Outdoor Terrace', 'Fireplace Seating', 'Live Music (Weekends)', 'Premium Spirits'],
    specialties: ['Himalayan Sunset Cocktail', 'Local Apple Wine', 'Single Malts', 'Tapas Menu'],
  },
];

const menuHighlights = [
  {
    category: 'Himachali Specialties',
    description: 'Traditional dishes passed down through generations',
    items: [
      { name: 'Siddu', desc: 'Steamed wheat bread stuffed with walnuts and poppy seeds, served with ghee', price: '350' },
      { name: 'Chha Gosht', desc: 'Tender lamb curry in yogurt and gram flour gravy with aromatic spices', price: '650' },
      { name: 'Dham Thali', desc: 'Traditional festive platter with rice, dal, rajma, and local vegetables', price: '450' },
      { name: 'Babru', desc: 'Himachali kachori with black gram stuffing and tamarind chutney', price: '280' },
    ],
  },
  {
    category: 'North Indian Favorites',
    description: 'Classic dishes from across the Indian subcontinent',
    items: [
      { name: 'Butter Chicken', desc: 'Creamy tomato-based curry with tender chicken', price: '520' },
      { name: 'Dal Makhani', desc: 'Slow-cooked black lentils with cream and butter', price: '380' },
      { name: 'Paneer Tikka', desc: 'Marinated cottage cheese grilled to perfection', price: '420' },
      { name: 'Biryani', desc: 'Fragrant basmati rice with aromatic spices (Veg/Non-veg)', price: '480' },
    ],
  },
  {
    category: 'Continental Selection',
    description: 'International flavors for global palates',
    items: [
      { name: 'Grilled Rainbow Trout', desc: 'Fresh local trout with herb butter and seasonal vegetables', price: '750' },
      { name: 'Pasta Primavera', desc: 'Fresh pasta with garden vegetables in your choice of sauce', price: '450' },
      { name: 'Classic Caesar Salad', desc: 'Crisp romaine with parmesan, croutons, and Caesar dressing', price: '380' },
      { name: 'Mushroom Risotto', desc: 'Creamy Arborio rice with local wild mushrooms', price: '520' },
    ],
  },
];

const specialFeatures = [
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our culinary team combines traditional Himachali expertise with international training.',
  },
  {
    icon: Leaf,
    title: 'Farm to Table',
    description: 'Fresh ingredients sourced from local farms and our own kitchen garden.',
  },
  {
    icon: Wine,
    title: 'Curated Beverages',
    description: 'Extensive selection of wines, local brews, and artisanal cocktails.',
  },
  {
    icon: Star,
    title: 'Special Diets',
    description: 'Vegetarian, vegan, and gluten-free options available across all menus.',
  },
];

const experiences = [
  {
    title: 'Private Dining',
    description: 'Intimate dinners for special occasions with personalized menu and dedicated service.',
    image: images.dining.dishes[0],
  },
  {
    title: 'Cooking Classes',
    description: 'Learn to prepare authentic Himachali dishes with our expert chefs.',
    image: images.dining.dishes[1],
  },
  {
    title: 'Wine Tasting',
    description: 'Sample local apple wines and premium selections from around the world.',
    image: images.dining.dishes[2],
  },
  {
    title: 'Bonfire Dinner',
    description: 'Al fresco dining under the stars with live music and barbecue.',
    image: images.dining.dishes[3],
  },
];

export default function DiningPage() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={images.dining.restaurant}
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <span className="text-secondary-400 uppercase tracking-[0.3em] text-sm mb-4">
            Culinary Experiences
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-shadow">
            Dining
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">
            A taste of the Himalayas - where traditional recipes meet contemporary cuisine
          </p>
        </div>
      </section>

      <section className="py-12 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="text-secondary-400 mx-auto mb-3" size={32} />
                <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Dining Venues"
            title="Where Flavor Meets View"
            description="Experience culinary excellence in our thoughtfully designed dining spaces, each offering a unique ambiance."
          />

          <div className="space-y-20">
            {venues.map((venue, index) => (
              <div
                key={venue.name}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden group">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center gap-4 text-white">
                        <span className="flex items-center gap-2">
                          <Clock size={16} />
                          {venue.timing}
                        </span>
                        <span className="flex items-center gap-2">
                          <UtensilsCrossed size={16} />
                          {venue.cuisine}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-secondary-600 uppercase tracking-widest text-sm">{venue.tagline}</span>
                  <h3 className="font-serif text-3xl md:text-4xl mt-2 mb-4">{venue.name}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">{venue.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-medium mb-2 text-neutral-800">Features</h4>
                      {venue.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-neutral-600 mb-1">
                          <CheckCircle className="text-primary-600" size={16} />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-neutral-800">Specialties</h4>
                      {venue.specialties.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-neutral-600 mb-1">
                          <Star className="text-secondary-600" size={16} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact" className="btn-outline">
                    Reserve a Table
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
            subtitle="Room Service"
            title="Dining in Your Room"
            description="Enjoy our full menu in the comfort of your accommodation with 24-hour room service."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={images.dining.roomService}
                alt="Room Service"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4">24/7 In-Room Dining</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Whether it's an early morning breakfast on your balcony watching the sunrise over the
                mountains, or a late-night snack after a day of exploration, our room service team is
                ready to serve you around the clock.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  'Full menu available',
                  'Special dietary options',
                  'Romantic dinner setup',
                  'Breakfast in bed',
                  'Balcony dining arrangement',
                  'Celebration packages',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-neutral-700">
                    <CheckCircle className="text-primary-600" size={18} />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-neutral-500 text-sm">
                Dial '0' from your room phone or contact reception to place your order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Sample Menu"
            title="Culinary Highlights"
            description="A glimpse of our diverse menu featuring traditional Himachali cuisine and international favorites."
            light
          />

          <div className="grid md:grid-cols-3 gap-8">
            {menuHighlights.map((category) => (
              <div key={category.category} className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <h3 className="font-serif text-xl text-white mb-2">{category.category}</h3>
                <p className="text-neutral-400 text-sm mb-6">{category.description}</p>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <span className="text-secondary-400">INR {item.price}</span>
                      </div>
                      <p className="text-neutral-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-neutral-400 mt-8 text-sm">
            Prices are indicative. Full menu available at the restaurant. Taxes additional.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Special Experiences"
            title="Beyond the Menu"
            description="Elevate your stay with our curated culinary experiences."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp) => (
              <div key={exp.title} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl mb-2">{exp.title}</h3>
                <p className="text-neutral-600 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-outline">
              Inquire About Experiences
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-subtitle">Local Flavors</span>
              <h2 className="section-title">The Taste of Himachal</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                Himachal Pradesh boasts a rich culinary heritage influenced by its geography, climate,
                and cultural diversity. At Himalayan Residency, we take pride in showcasing these
                authentic flavors that have been perfected over generations.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Our chefs work closely with local farmers and producers to source the freshest ingredients,
                from organic vegetables grown in the valley to premium meats and dairy from high-altitude
                pastures. Don't miss trying local specialties like Siddu, Chha Gosht, and Dham.
              </p>
              <div className="bg-white p-6">
                <h4 className="font-medium mb-4">Must-Try Local Ingredients</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Chilgoza (Pine Nuts)',
                    'Himachali Rajma',
                    'Local Trout',
                    'Mountain Honey',
                    'Wild Mushrooms',
                    'Fresh Apricots',
                    'Kangra Tea',
                    'Apple Products',
                  ].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-neutral-700 text-sm">
                      <Leaf className="text-primary-600" size={14} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {images.dining.dishes.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Dish ${index + 1}`}
                  className={`w-full object-cover ${index % 2 === 0 ? 'h-48' : 'h-56 mt-8'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Information"
            title="Dining Details"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8">
              <Clock className="text-primary-700 mb-4" size={32} />
              <h3 className="font-serif text-xl mb-4">Operating Hours</h3>
              <div className="space-y-2 text-neutral-600">
                <p><strong>Breakfast:</strong> 7:00 AM - 10:30 AM</p>
                <p><strong>Lunch:</strong> 12:30 PM - 3:00 PM</p>
                <p><strong>Tea Time:</strong> 4:00 PM - 6:00 PM</p>
                <p><strong>Dinner:</strong> 7:00 PM - 10:30 PM</p>
                <p><strong>Room Service:</strong> 24 Hours</p>
              </div>
            </div>
            <div className="bg-neutral-50 p-8">
              <Calendar className="text-primary-700 mb-4" size={32} />
              <h3 className="font-serif text-xl mb-4">Reservations</h3>
              <p className="text-neutral-600 mb-4">
                Table reservations recommended for dinner and special occasions.
                In-house guests receive priority seating.
              </p>
              <p className="text-neutral-600">
                <strong>Private Dining:</strong> Minimum 24 hours advance booking required.
              </p>
            </div>
            <div className="bg-neutral-50 p-8">
              <Coffee className="text-primary-700 mb-4" size={32} />
              <h3 className="font-serif text-xl mb-4">Dress Code</h3>
              <p className="text-neutral-600 mb-4">
                Smart casual attire is recommended for dinner at the main restaurant.
              </p>
              <p className="text-neutral-600">
                The cafe and lounge maintain a relaxed atmosphere suitable for informal attire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-0">
          <img
            src={images.dining.restaurant}
            alt="Restaurant backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Reserve Your Table
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Experience the finest culinary journey in the Himalayas. Contact us to make a reservation
            or inquire about private dining and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Make Reservation
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
