import React, { useState } from 'react';
import { Sparkles, Eye, ShieldCheck, Check, Search, ArrowRight, ShoppingBag } from 'lucide-react';
import { PageType } from '../types';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  subtitle: string;
  description: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'veins',
    x: 45,
    y: 32,
    title: 'Hand-Painted Leaf Veins',
    subtitle: 'Tactile Silk Finish',
    description: 'Every individual leaf features natural gradient shading and micro-embossed secondary vein pathways molded from living Ficus specimens.'
  },
  {
    id: 'bark',
    x: 60,
    y: 75,
    title: 'Natural Timber Trunk',
    subtitle: 'Authentic Bark Texture',
    description: 'Constructed around genuine repurposed hardwood trunks with organic knotting and authentic moss inserts.'
  },
  {
    id: 'pet',
    x: 25,
    y: 50,
    title: 'Non-Toxic Polymer Coating',
    subtitle: '100% Pet-Safe Formula',
    description: 'Certified hypoallergenic silk and polymer materials containing zero toxic sap, lead, or phthalates.'
  },
  {
    id: 'uv',
    x: 75,
    y: 25,
    title: 'Built-in UV Inhibitors',
    subtitle: 'Anti-Fading Protection',
    description: 'Infused with sun-shielding compounds so your foliage retains rich emerald and olive tones even next to floor-to-ceiling windows.'
  }
];

interface RealTouchQualityInspectorProps {
  onNavigate?: (page: PageType) => void;
}

export const RealTouchQualityInspector: React.FC<RealTouchQualityInspectorProps> = ({ onNavigate }) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section id="quality" className="bg-[#1C281E] text-[#FAF8F5] py-20 border-b border-[#2C3B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Macro Leaf Viewer */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#3E5241] shadow-2xl bg-gray-900 group">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=2000&q=95"
                alt="Macro inspection of hyper-realistic Real-Touch leaf texture on Plantiqa high end fake plants that look real"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Hotspot Dots */}
              {HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(hotspot)}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer z-20 ${
                      isActive
                        ? 'bg-emerald-400 text-black ring-4 ring-emerald-300/50 scale-125'
                        : 'bg-white/80 text-black hover:bg-white hover:scale-110'
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-900 font-bold text-[10px]" />
                  </button>
                );
              })}

              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border border-white/20 text-emerald-300 flex items-center gap-2">
                <Search className="w-3.5 h-3.5" />
                <span>Interactive Microscopic Craft Inspector</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hotspot Explanations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C3B2E] text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-Touch™ Quality Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Anatomy of Unmatched Realism
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              We spent 3 years analyzing botanical specimens to replicate the subtle imperfections that make real plants so beautiful. Click the inspection points on the image to explore our craftsmanship.
            </p>

            {/* Selected Hotspot Detail Card */}
            <div className="p-6 rounded-2xl bg-[#2C3B2E]/80 border border-emerald-500/30 space-y-3 animate-fadeIn shadow-lg">
              <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                <span>{activeHotspot.subtitle}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200">Verified Specification</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                {activeHotspot.title}
              </h3>

              <p className="text-sm text-gray-200 leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="pt-3 border-t border-emerald-800/60 flex items-center gap-2 text-xs text-emerald-300 font-medium">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Engineered for 20+ years of maintenance-free luxury</span>
              </div>
            </div>

            {/* Hotspot Pills */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {HOTSPOTS.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(h)}
                  className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all cursor-pointer border ${
                    activeHotspot.id === h.id
                      ? 'bg-emerald-800/60 text-white border-emerald-400'
                      : 'bg-[#2C3B2E]/40 text-gray-300 border-transparent hover:bg-[#2C3B2E]'
                  }`}
                >
                  <span className="block font-bold">{h.title}</span>
                  <span className="text-[10px] text-gray-400">{h.subtitle}</span>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
