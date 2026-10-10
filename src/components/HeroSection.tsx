import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle, Eye } from 'lucide-react';
import { HERO_COPY } from '../data/copywritingContent';
import { ImageCarousel, CarouselSlide } from './ImageCarousel';
import { PageType } from '../types';
import { Link } from '../context/RouterContext';

interface HeroSectionProps {
  isInspectorMode: boolean;
  onOpenQuiz: () => void;
  onScrollToCategories: () => void;
  onNavigate?: (page: PageType) => void;
}

const HERO_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'hero-1',
    url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2000&q=95',
    alt: 'Luxury artificial fiddle leaf fig tree with real timber trunk in ceramic pot - tall artificial trees for living room corners',
    title: 'Royal Japanese Fiddle Leaf Fig (6.5ft)',
    subtitle: 'Real Wood Trunk • Hand-Painted Silk Leaves',
    badge: '100% Lifelike Quality',
    price: '₹4,999',
    originalPrice: '₹5,999',
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: 'hero-2',
    url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=2000&q=95',
    alt: 'Realistic faux olive tree indoor statement tree with silvery green leaves in weathered Tuscan terracotta pot',
    title: 'Tuscany Faux Olive Tree (7.0ft)',
    subtitle: 'Weathered Tuscan Terracotta Pot Included',
    badge: 'Editor’s Pick',
    price: '₹5,499',
    originalPrice: '₹6,499',
    rating: 5.0,
    reviewCount: 94,
  },
  {
    id: 'hero-3',
    url: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=2000&q=95',
    alt: 'Pet safe artificial plants for cats: tropical faux monstera deliciosa with glossy split leaves in white ceramic pot',
    title: 'Tropical Split-Leaf Monstera (5.0ft)',
    subtitle: 'High Gloss Natural Resin Coating • Pet-Safe',
    badge: 'Best Seller',
    price: '₹3,799',
    originalPrice: '₹4,499',
    rating: 4.8,
    reviewCount: 86,
  },
  {
    id: 'hero-4',
    url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=2000&q=95',
    alt: 'Fake plants for windowless bathroom and dark rooms: cascading faux satin pothos vines in macrame ceramic planter',
    title: 'Cascading Satin Pothos Hanging Vine',
    subtitle: 'Includes Macrame Hanger & Matte Ceramic Pot',
    badge: 'Trending Design',
    price: '₹1,899',
    originalPrice: '₹2,299',
    rating: 4.9,
    reviewCount: 62,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  isInspectorMode,
  onOpenQuiz,
  onScrollToCategories,
  onNavigate,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="hero" className="relative bg-[#FAF8F5] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden border-b border-[#EAE5DC]">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8E0D5]/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-900/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Category / Pre-heading Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EFE4] text-[#3B5542] text-xs font-semibold uppercase tracking-wider border border-[#C7DFC9]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Lifelike Artificial Plants & Trees</span>
            </div>

            {/* H1 SEO Headline */}
            <div className="relative group">
              {isInspectorMode && (
                <div className="absolute -top-7 left-0 bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-20">
                  SEO Target H1 • Priority Keyword: "Realistic Artificial Plants"
                </div>
              )}
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#202D22] leading-[1.15] tracking-tight ${
                isInspectorMode ? 'outline-2 outline-dashed outline-amber-500 bg-amber-50/50 p-2 rounded-lg' : ''
              }`}>
                {HERO_COPY.h1}
              </h1>
            </div>

            {/* H2 Persuasive Subheadline */}
            <div className="relative">
              {isInspectorMode && (
                <div className="absolute -top-6 left-0 bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-20">
                  Subheadline H2 • Emotional Positioning & Audience Pain Points
                </div>
              )}
              <h2 className={`text-lg sm:text-xl text-[#4A524B] leading-relaxed font-sans font-normal max-w-2xl ${
                isInspectorMode ? 'outline-2 outline-dashed outline-blue-500 bg-blue-50/50 p-2 rounded-lg' : ''
              }`}>
                {HERO_COPY.h2}
              </h2>
            </div>

            {/* Primary & Secondary Call to Action (CTA) Buttons */}
            <div className="relative pt-2">
              {isInspectorMode && (
                <div className="absolute -top-6 left-0 bg-emerald-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-20">
                  High-Conversion Primary & Secondary CTA Pair
                </div>
              )}
              <div className={`flex flex-col sm:flex-row gap-4 items-stretch sm:items-center ${
                isInspectorMode ? 'outline-2 outline-dashed outline-emerald-500 bg-emerald-50/50 p-2 rounded-lg' : ''
              }`}>
                <Link
                  href="/products"
                  onClick={onScrollToCategories}
                  className="px-8 py-4 bg-[#4A6B50] hover:bg-[#3B5542] text-[#FAF8F5] font-semibold text-base rounded-full transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{HERO_COPY.primaryCta}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={onOpenQuiz}
                  className="px-7 py-4 border border-[#4A6B50] text-[#3B5542] hover:bg-[#E2EFE4] font-medium text-base rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>{HERO_COPY.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Trust Micro-Copy under CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#5C6E5E] font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                100% Pet-Safe & Non-Toxic
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                30-Day Easy Returns
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-700" />
                Real-Touch Silk
              </span>
            </div>

          </div>

          {/* Right Column: High-Res Interactive Visual Hero Carousel Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <ImageCarousel
                slides={HERO_CAROUSEL_SLIDES}
                autoPlay={true}
                interval={4500}
                showThumbnails={true}
                showDots={false}
                showControls={true}
                showOverlayInfo={true}
                containerClassName="h-[460px] sm:h-[520px]"
                onSlideClick={() => {
                  if (onNavigate) {
                    onNavigate('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              />

              {/* Quick Zoom Leaf Inspector Button */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute top-4 right-14 bg-[#2C3B2E]/90 hover:bg-[#2C3B2E] text-white p-2 sm:p-2.5 rounded-full shadow-lg backdrop-blur-md transition-transform hover:scale-110 flex items-center gap-1.5 px-3 sm:px-3.5 cursor-pointer z-20"
                title="See Close-Up Detail"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-300" />
                <span className="text-[11px] font-semibold">Macro Leaf Detail</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Video / Texture Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl space-y-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold p-1 cursor-pointer"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 text-[#2C3B2E]">
              <Eye className="w-5 h-5 text-emerald-600" />
              <h3 className="font-serif text-xl font-bold">Close-Up Leaf & Texture Detail</h3>
            </div>
            <p className="text-xs text-gray-600">
              See the natural hand-painted color shading, realistic soft texture, and flexible stems up close.
            </p>
            <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95"
                alt="Macro inspection showing hyper-realistic leaf veining and soft-touch botanical texture of Plantiqa high end fake plants that look real"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white/90">
                  🔬 10x Macro View: Molded directly from real plant leaves
                </span>
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="px-5 py-2 bg-[#2C3B2E] text-white text-xs font-semibold rounded-full hover:bg-[#1E2B20] transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
