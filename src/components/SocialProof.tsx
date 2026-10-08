import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_COPY } from '../data/copywritingContent';
import { PageType } from '../types';

interface SocialProofProps {
  isInspectorMode: boolean;
  onNavigate?: (page: PageType) => void;
}

export const SocialProof: React.FC<SocialProofProps> = ({ isInspectorMode, onNavigate }) => {
  return (
    <section id="social-proof" className="bg-[#FAF8F5] py-20 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#2C3B2E] text-xs font-semibold uppercase tracking-wider">
            <span>Verified Customer Experiences</span>
          </div>

          <div className="relative">
            {isInspectorMode && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-20">
                Social Proof Section • 2 Realistic Testimonials (Focus: Lifelike Look & Time Saved)
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C281E]">
              Loved by Stylists, Executive Homes & Pet Owners
            </h2>
          </div>

          <p className="text-sm text-[#5C6E5E]">
            Over 4,800+ homes and designer spaces elevated with zero leaf drop and zero maintenance.
          </p>
        </div>

        {/* 2 Detailed Realistic Customer Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TESTIMONIALS_COPY.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-8 border border-[#EAE5DC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#EAE5DC]/60 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-500 gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-gray-900 ml-1.5">5.0 / 5.0</span>
                  </div>

                  {test.verifiedBuyer && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Purchase
                    </span>
                  )}
                </div>

                {/* Catchy Headline */}
                <h3 className="font-serif text-xl font-bold text-[#1C281E] leading-tight">
                  {test.headline}
                </h3>

                {/* Main Quote */}
                <p className="text-sm text-[#3D4A3E] leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info & Product Image */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={`${test.author}, verified buyer review profile`}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#EAE5DC]"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#1C281E]">
                      {test.author}
                    </h4>
                    <p className="text-xs text-[#5C6E5E]">
                      {test.role} • <span className="text-gray-400">{test.location}</span>
                    </p>
                    <p className="text-[11px] font-medium text-emerald-800 mt-0.5">
                      Purchased: {test.productPurchased}
                    </p>
                  </div>
                </div>

                {test.image && (
                  <div 
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-200 shadow-xs hidden sm:block cursor-pointer hover:border-[#2C3B2E] transition-colors"
                    title="Click picture to view in Product Catalog"
                  >
                    <img
                      src={test.image}
                      alt={test.imageAlt || `Customer home styling showcasing ${test.productPurchased} - artificial plants that look real`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Press & Designer Badges Banner */}
        <div className="mt-16 pt-10 border-t border-[#E8E2D8] text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5C6E5E]">
            As Featured In & Trusted By Top Interior Design Firms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all text-sm font-serif font-bold text-[#2C3B2E]">
            <span>ARCHITECTURAL DIGEST</span>
            <span>ELLE DECOR</span>
            <span>DOMINO MAGAZINE</span>
            <span>HOUSE BEAUTIFUL</span>
            <span>VOGUE LIVING</span>
          </div>
        </div>

      </div>
    </section>
  );
};
