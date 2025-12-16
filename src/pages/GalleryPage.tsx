import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid, Filter } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import { images } from '../data/images';

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'property', name: 'Property' },
  { id: 'rooms', name: 'Rooms & Suites' },
  { id: 'dining', name: 'Dining' },
  { id: 'experiences', name: 'Experiences' },
  { id: 'surroundings', name: 'Surroundings' },
];

const galleryImages = [
  { src: images.hero, category: 'property', title: 'Himalayan Panorama', description: 'Breathtaking views from our property' },
  { src: images.about.main, category: 'property', title: 'Main Building', description: 'Our heritage property facade' },
  { src: images.rooms.deluxe, category: 'rooms', title: 'Deluxe Room', description: 'Comfortable elegance with mountain views' },
  { src: images.rooms.premium, category: 'rooms', title: 'Premium Suite', description: 'Spacious suite with living area' },
  { src: images.rooms.suite, category: 'rooms', title: 'Royal Suite', description: 'Panoramic views and luxury amenities' },
  { src: images.rooms.family, category: 'rooms', title: 'Family Suite', description: 'Perfect for family getaways' },
  { src: images.rooms.honeymoon, category: 'rooms', title: 'Honeymoon Suite', description: 'Romantic retreat for couples' },
  { src: images.rooms.royal, category: 'rooms', title: 'Executive Room', description: 'Business meets comfort' },
  { src: images.dining.restaurant, category: 'dining', title: 'Main Restaurant', description: 'Fine dining with mountain views' },
  { src: images.dining.cafe, category: 'dining', title: 'Chai & Stories Cafe', description: 'Cozy cafe experience' },
  { src: images.dining.bar, category: 'dining', title: 'Summit Lounge', description: 'Evening drinks and conversations' },
  { src: images.dining.dishes[0], category: 'dining', title: 'Culinary Delights', description: 'Fresh local ingredients' },
  { src: images.dining.dishes[1], category: 'dining', title: 'Local Cuisine', description: 'Authentic Himachali flavors' },
  { src: images.dining.dishes[2], category: 'dining', title: 'Gourmet Selection', description: 'International cuisine options' },
  { src: images.experiences.temple, category: 'experiences', title: 'Temple Tours', description: 'Ancient spiritual sites' },
  { src: images.experiences.rafting, category: 'experiences', title: 'River Rafting', description: 'Adventure on the Sutlej' },
  { src: images.experiences.trekking, category: 'experiences', title: 'Mountain Treks', description: 'Explore Himalayan trails' },
  { src: images.experiences.cultural, category: 'experiences', title: 'Cultural Tours', description: 'Local heritage exploration' },
  { src: images.experiences.wildlife, category: 'experiences', title: 'Wildlife Safari', description: 'Nature encounters' },
  { src: images.experiences.spa, category: 'experiences', title: 'Spa & Wellness', description: 'Relaxation and rejuvenation' },
  { src: images.heroVideo, category: 'surroundings', title: 'Mountain Views', description: 'Stunning Himalayan landscapes' },
  { src: images.about.heritage, category: 'surroundings', title: 'Local Heritage', description: 'Rich cultural backdrop' },
  { src: images.amenities.garden, category: 'property', title: 'Garden Terrace', description: 'Peaceful outdoor spaces' },
  { src: images.amenities.pool, category: 'property', title: 'Swimming Pool', description: 'Refreshing mountain retreat' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <span className="text-secondary-400 uppercase tracking-[0.3em] text-sm mb-4">
            Visual Journey
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-shadow">
            Photo Gallery
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">
            Explore the beauty of Himalayan Residency and its breathtaking surroundings
          </p>
        </div>
      </section>

      <section className="py-12 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Filter className="text-secondary-400" size={20} />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-secondary-600 text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-neutral-600">
              Showing {filteredImages.length} photos
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
            <div className="flex items-center gap-2 text-neutral-500">
              <Grid size={18} />
              <span className="text-sm">Gallery View</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`relative overflow-hidden cursor-pointer group ${
                  index % 7 === 0 || index % 7 === 4 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index % 7 === 0 || index % 7 === 4 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48 md:h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-4">
                    <ZoomIn className="mx-auto mb-2" size={24} />
                    <h3 className="font-medium">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Collections"
            title="Browse by Category"
            description="Explore different aspects of your stay through our curated photo collections."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(c => c.id !== 'all').map((category) => {
              const categoryImages = galleryImages.filter(img => img.category === category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="relative overflow-hidden group text-left"
                >
                  <img
                    src={categoryImages[0]?.src || images.hero}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white mb-1">{category.name}</h3>
                    <p className="text-white/70 text-sm">{categoryImages.length} photos</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-subtitle">Share Your Experience</span>
              <h2 className="section-title">Your Memories Matter</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed text-lg">
                We love seeing the Himalayan Residency through our guests' eyes! Share your photos
                and experiences on social media with #HimalayanResidency and you might be featured
                on our gallery.
              </p>
              <p className="text-neutral-600 mb-8">
                Tag us @HimalayanResidencyRampur on Instagram and Facebook for a chance to be
                featured in our Guest Moments collection.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'TripAdvisor'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="bg-primary-700 text-white px-4 py-2 text-sm hover:bg-primary-800 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {images.testimonials.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Guest ${index + 1}`}
                  className="w-full h-32 object-cover"
                />
              ))}
              {galleryImages.slice(0, 6).map((img, index) => (
                <img
                  key={`gallery-${index}`}
                  src={img.src}
                  alt={img.title}
                  className="w-full h-32 object-cover"
                />
              ))}
            </div>
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
            Experience It In Person
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Photos can only capture a fraction of the magic. Book your stay and create
            your own unforgettable memories at Himalayan Residency.
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

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-secondary-400 transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-secondary-400 transition-colors z-10"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-secondary-400 transition-colors z-10"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-6xl mx-auto px-4">
            <img
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].title}
              className="max-h-[80vh] mx-auto object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-serif text-xl">{filteredImages[currentImageIndex].title}</h3>
              <p className="text-neutral-400">{filteredImages[currentImageIndex].description}</p>
              <p className="text-neutral-500 text-sm mt-2">
                {currentImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
