import React, { useState } from 'react';
import { Sun, Sparkles, HeartHandshake, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/copywritingContent';

interface ValuePropositionProps {
  isInspectorMode: boolean;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ isInspectorMode }) => {
  const [activeComparisonTab, setActiveComparisonTab] = useState<'all' | 'real' | 'cheap'>('all');

  return (
    <section id="value-prop" className="bg-[#FAF8F5] py-20 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#2C3B2E] text-xs font-semibold uppercase tracking-wider">
            <span>Why Choose Plantiqa</span>
          </div>

          <div className="relative">
            {isInspectorMode && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-20">
                Value Proposition Section • 3 Short Columns (Overcomes Objection: "Why Faux?")
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C281E]">
              Engineered to Outshine Real Greenery & Cheaper Faux
            </h2>
          </div>

          <p className="text-base text-[#5C6E5E] max-w-2xl mx-auto">
            Say goodbye to yellowing leaves, pests, and toxic plant hazards. Enjoy flawless botanical elegance 365 days a year without raising a finger.
          </p>
        </div>

        {/* 3 Short Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={prop.id}
              className="bg-white rounded-2xl p-8 border border-[#EAE5DC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Column Badge / Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#5C6E5E] bg-[#EAE5DC] px-2.5 py-1 rounded-full">
                    0{idx + 1}
                  </span>
                  <div className="p-3 rounded-xl bg-[#EAE5DC] text-[#2C3B2E] group-hover:bg-[#2C3B2E] group-hover:text-white transition-colors">
                    {idx === 0 && <Sun className="w-6 h-6" />}
                    {idx === 1 && <Sparkles className="w-6 h-6" />}
                    {idx === 2 && <HeartHandshake className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C281E] mb-2 group-hover:text-[#2C3B2E] transition-colors">
                  {prop.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#3E5241] uppercase tracking-wider mb-6">
                  {prop.subtitle}
                </p>

                <ul className="space-y-3.5 mb-8 text-sm text-[#4A524B]">
                  {prop.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Comparison Snip */}
              <div className="pt-4 border-t border-gray-100 bg-[#FAF8F5] p-3.5 rounded-xl text-xs space-y-1.5">
                <span className="font-bold text-[#2C3B2E] block">VS. Traditional Live Plants:</span>
                <p className="text-[#6B756E] italic">"{prop.comparison.real}"</p>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Comparison Matrix Box */}
        <div className="bg-white rounded-2xl border border-[#E0D8CC] p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1C281E]">The Greenery Comparison Matrix</h3>
              <p className="text-xs text-[#5C6E5E]">See how Plantiqa measures up against live houseplants and low-grade plastic faux plants.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#EAE5DC] p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveComparisonTab('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeComparisonTab === 'all' ? 'bg-[#2C3B2E] text-white shadow-xs' : 'text-[#3D4A3E] hover:text-black'
                }`}
              >
                All Features
              </button>
              <button
                onClick={() => setActiveComparisonTab('real')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeComparisonTab === 'real' ? 'bg-[#2C3B2E] text-white shadow-xs' : 'text-[#3D4A3E] hover:text-black'
                }`}
              >
                Vs. Live Plants
              </button>
              <button
                onClick={() => setActiveComparisonTab('cheap')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeComparisonTab === 'cheap' ? 'bg-[#2C3B2E] text-white shadow-xs' : 'text-[#3D4A3E] hover:text-black'
                }`}
              >
                Vs. Cheap Plastic
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-[#1C281E] uppercase text-[11px] tracking-wider bg-[#FAF8F5]">
                  <th className="py-3 px-4 font-bold">Feature / Quality</th>
                  <th className="py-3 px-4 font-bold bg-emerald-50 text-emerald-900 border-x border-emerald-100">
                    🌿 Plantiqa
                  </th>
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'real') && (
                    <th className="py-3 px-4 font-bold text-gray-500">🥀 Live Houseplants</th>
                  )}
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'cheap') && (
                    <th className="py-3 px-4 font-bold text-gray-500">⚠️ Cheap Plastic Faux</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#1C281E]">Maintenance Needed</td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 border-x border-emerald-100 font-medium text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero (Dust annually)
                  </td>
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'real') && (
                    <td className="py-3.5 px-4 text-gray-600">High (Water, pruning, light)</td>
                  )}
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'cheap') && (
                    <td className="py-3.5 px-4 text-gray-600">Low (Dust attraction)</td>
                  )}
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#1C281E]">Pet Toxicity & Hazards</td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 border-x border-emerald-100 font-medium text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Pet-Safe & Non-Toxic
                  </td>
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'real') && (
                    <td className="py-3.5 px-4 text-red-600 flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-red-500" /> High (Many are poisonous)
                    </td>
                  )}
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'cheap') && (
                    <td className="py-3.5 px-4 text-amber-700 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4 text-amber-500" /> Flimsy wires & plastic bits
                    </td>
                  )}
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#1C281E]">Botanical Realism</td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 border-x border-emerald-100 font-medium text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real-Touch™ Hand-Dusted Silk
                  </td>
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'real') && (
                    <td className="py-3.5 px-4 text-gray-600">Varies (Browning tips)</td>
                  )}
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'cheap') && (
                    <td className="py-3.5 px-4 text-red-600 flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-red-500" /> Shininess, neon greens, seam lines
                    </td>
                  )}
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-[#1C281E]">Lifespan & UV Stability</td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 border-x border-emerald-100 font-medium text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Decades (UV Protected)
                  </td>
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'real') && (
                    <td className="py-3.5 px-4 text-gray-600">Months to years (Often dies)</td>
                  )}
                  {(activeComparisonTab === 'all' || activeComparisonTab === 'cheap') && (
                    <td className="py-3.5 px-4 text-gray-600">Fades to purple/blue in sun</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
