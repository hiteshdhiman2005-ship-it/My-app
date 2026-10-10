import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustBanner } from '../components/TrustBanner';
import { ValueProposition } from '../components/ValueProposition';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { RealTouchQualityInspector } from '../components/RealTouchQualityInspector';
import { LookbookCarousel } from '../components/LookbookCarousel';
import { TransformationSlider } from '../components/TransformationSlider';
import { SocialProof } from '../components/SocialProof';
import { Product, PageType } from '../types';
import { ArrowRight, BookOpen, Wrench } from 'lucide-react';
import { Link } from '../context/RouterContext';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
  onOpenQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onOpenQuickView,
  onOpenQuiz,
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        isInspectorMode={false}
        onOpenQuiz={onOpenQuiz}
        onScrollToCategories={() => onNavigate('products')}
        onNavigate={onNavigate}
      />

      {/* Trust Signals */}
      <TrustBanner isInspectorMode={false} />

      {/* Value Proposition */}
      <ValueProposition isInspectorMode={false} />

      {/* Featured Catalog Section */}
      <FeaturedCategories
        isInspectorMode={false}
        onAddToCart={onAddToCart}
        onOpenQuickView={onOpenQuickView}
        onNavigate={onNavigate}
      />

      {/* Real Touch Botanical Inspector */}
      <RealTouchQualityInspector onNavigate={onNavigate} />

      {/* Botanical Lookbook Image Carousel */}
      <LookbookCarousel onNavigate={onNavigate} />

      {/* Room Transformation Slider */}
      <TransformationSlider />

      {/* Social Proof Testimonials */}
      <SocialProof isInspectorMode={false} onNavigate={onNavigate} />

      {/* Cross-Link Banner for Services & Blog */}
      <section className="bg-[#1C281E] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#2C3B2E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Services Box */}
          <div className="bg-[#263628] p-8 rounded-2xl border border-[#3A4E3D] space-y-4 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-300 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#E8E0D5]">Commercial & Residential Styling Services</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Need custom 12ft trees for a hotel lobby or a tailored consultation for your home? Explore our white-glove botanical design and leasing services.
            </p>
            <Link
              href="/services"
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-white transition-colors cursor-pointer pt-2"
            >
              <span>Explore Styling Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Blog Box */}
          <div className="bg-[#263628] p-8 rounded-2xl border border-[#3A4E3D] space-y-4 hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-300 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#E8E0D5]">Botanical Design Journal & Care Guides</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Read expert tips on branch shaping, pairing leaf textures, pet-safe plant alternatives, and biophilic lighting design.
            </p>
            <Link
              href="/blog"
              onClick={() => {
                onNavigate('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-white transition-colors cursor-pointer pt-2"
            >
              <span>Read Journal Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};
