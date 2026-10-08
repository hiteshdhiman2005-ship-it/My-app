import React from 'react';
import { ImageCarousel, CarouselSlide } from './ImageCarousel';
import { Sparkles, ArrowRight, Camera } from 'lucide-react';
import { PageType } from '../types';

interface LookbookCarouselProps {
  onNavigate?: (page: PageType) => void;
}

const LOOKBOOK_SLIDES: CarouselSlide[] = [
  {
    id: 'lookbook-1',
    url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2000&q=95',
    alt: 'Luxury artificial fiddle leaf fig tree standing tall in a sunlit living room corner styled in handcrafted sandstone ceramic pot',
    title: 'Sunlit Living Room Sanctuary',
    subtitle: 'Styled with 6.5ft Royal Japanese Fiddle Leaf Fig in Sandstone Ceramic',
    badge: 'Living Room Lookbook',
    price: '₹4,999',
    originalPrice: '₹5,999',
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: 'lookbook-2',
    url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=2000&q=95',
    alt: 'Realistic faux olive tree indoor statement piece in weathered stone pot inside a modern rustic dining room alcove',
    title: 'Rustic Tuscan Dining Alcove',
    subtitle: 'Styled with 7.0ft Tuscany Faux Olive Tree in Aged Stone Pot',
    badge: 'Dining Alcove Lookbook',
    price: '₹5,499',
    originalPrice: '₹6,499',
    rating: 5.0,
    reviewCount: 94,
  },
  {
    id: 'lookbook-3',
    url: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=2000&q=95',
    alt: 'Cat friendly artificial indoor monstera deliciosa plant styled beside a platform bed in an urban loft sanctuary',
    title: 'Urban Loft Bedroom Nook',
    subtitle: 'Styled with 5.0ft Split-Leaf Monstera Deliciosa',
    badge: 'Bedroom Sanctuary',
    price: '₹3,799',
    originalPrice: '₹4,499',
    rating: 4.8,
    reviewCount: 86,
  },
  {
    id: 'lookbook-4',
    url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=2000&q=95',
    alt: 'Fake plants for windowless bathroom featuring cascading faux satin pothos vines hanging above white vanity mirror',
    title: 'Windowless Bath Vanity Oasis',
    subtitle: 'Styled with Cascading Satin Pothos Hanging Vine in Matte White Ceramic',
    badge: 'Bathroom Oasis',
    price: '₹1,899',
    originalPrice: '₹2,299',
    rating: 4.9,
    reviewCount: 62,
  },
  {
    id: 'lookbook-5',
    url: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=2000&q=95',
    alt: 'Zero maintenance indoor plants for office: upright architectural snake plant in terracotta pot inspired by best indoor plants for oxygen',
    title: 'Executive Minimalist Office Sanctuary',
    subtitle: 'Styled with Sansevieria Snake Plant — inspired by the best indoor plants for oxygen',
    badge: 'Oxygen Plant Aesthetic',
    price: '₹1,999',
    originalPrice: '₹2,499',
    rating: 4.9,
    reviewCount: 110,
  },
  {
    id: 'lookbook-6',
    url: 'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=2000&q=95',
    alt: 'Best plant stand for indoors: mid-century modern solid walnut adjustable wooden stand elevating potted ceramic plants in home corner',
    title: 'Best Plant Stand for Indoors - Mid-Century Nook',
    subtitle: 'Styled with Mid-Century Adjustable Walnut Wooden Plant Stand',
    badge: 'Best Plant Stand Styling',
    price: '₹1,899',
    originalPrice: '₹2,499',
    rating: 5.0,
    reviewCount: 162,
  },
  {
    id: 'lookbook-7',
    url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2000&q=95',
    alt: 'Industrial black metal plant stand tower elevating tall artificial trees for living room corners',
    title: 'Industrial Heavy Duty Metal Stand Tower',
    subtitle: 'Voted Best Plant Stand for Indoors for Statement Trees & Monsteras',
    badge: 'Pedestal Stand Showcase',
    price: '₹2,799',
    originalPrice: '₹3,499',
    rating: 4.9,
    reviewCount: 74,
  },
];

export const LookbookCarousel: React.FC<LookbookCarouselProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#FAF8F5] py-20 border-b border-[#EAE5DC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2EFE4] text-[#3B5542] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#C7DFC9]">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>Interior Design Inspiration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C281E] tracking-tight">
              Botanical Interior Lookbook Carousel
            </h2>
            <p className="text-sm text-[#5C6E5E] mt-1 max-w-2xl">
              Swipe or click through real client rooms styled with Plantiqa ultra-realistic artificial foliage.
            </p>
          </div>

          {onNavigate && (
            <button
              onClick={() => {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white text-xs font-semibold rounded-full transition-all shadow-md cursor-pointer self-start md:self-auto"
            >
              <span>Explore All Featured Plants</span>
              <ArrowRight className="w-4 h-4 text-emerald-300" />
            </button>
          )}
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <ImageCarousel
            slides={LOOKBOOK_SLIDES}
            autoPlay={true}
            interval={5000}
            showThumbnails={true}
            showDots={true}
            showControls={true}
            showOverlayInfo={true}
            containerClassName="h-[400px] sm:h-[500px]"
            onSlideClick={() => {
              if (onNavigate) {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          />
        </div>

      </div>
    </section>
  );
};
