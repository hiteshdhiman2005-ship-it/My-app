import React, { useState } from 'react';
import { Truck, Sparkles, ShieldCheck, RotateCcw, ChevronDown, HelpCircle } from 'lucide-react';
import { TRUST_SIGNALS } from '../data/copywritingContent';

interface TrustBannerProps {
  isInspectorMode: boolean;
}

export const TrustBanner: React.FC<TrustBannerProps> = ({ isInspectorMode }) => {
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-6 h-6 text-emerald-800" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-800" />;
      case 'RotateCcw':
        return <RotateCcw className="w-6 h-6 text-emerald-800" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-800" />;
    }
  };

  return (
    <section id="trust" className="bg-[#FAF8F5] py-8 border-b border-[#E8E2D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isInspectorMode && (
          <div className="mb-4 bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded inline-block">
            Trust Signals Banner • Eliminates First-Time Buyer Skepticism Above the Fold
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_SIGNALS.map((signal) => {
            const isExpanded = activeDetailId === signal.id;
            return (
              <div
                key={signal.id}
                onClick={() => setActiveDetailId(isExpanded ? null : signal.id)}
                className={`p-4 rounded-xl bg-white border transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group relative ${
                  isExpanded ? 'border-emerald-700 bg-emerald-50/20' : 'border-[#EAE5DC] hover:border-[#D0C8B8]'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#EAE5DC] group-hover:bg-[#2C3B2E] group-hover:text-white transition-colors shrink-0">
                    {getIcon(signal.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-sans font-bold text-sm text-[#1C281E] tracking-tight">
                        {signal.title}
                      </h3>
                      <HelpCircle className="w-3.5 h-3.5 text-gray-400 group-hover:text-emerald-700 transition-colors" />
                    </div>
                    <p className="text-xs text-[#5C6E5E] mt-0.5 leading-snug">
                      {signal.description}
                    </p>
                  </div>
                </div>

                {/* Interactive Tooltip Details on click */}
                {isExpanded && (
                  <div className="mt-3 pt-2.5 border-t border-emerald-100 text-xs text-[#3E5241] leading-relaxed animate-fadeIn">
                    <p className="font-medium text-emerald-900 mb-0.5">Why this matters:</p>
                    {signal.details}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
