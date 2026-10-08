import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

export const TransformationSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="bg-[#FAF8F5] py-20 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#2C3B2E] text-xs font-semibold uppercase tracking-wider">
            <span>Instant Aesthetic Upgrade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C281E]">
            Drag to Experience The Transformation
          </h2>
          <p className="text-sm text-[#5C6E5E]">
            Slide left and right to see how Plantiqa turns sterile, empty spaces into warm, sunlit botanical sanctuaries.
          </p>
        </div>

        {/* Interactive Before/After Drag Canvas */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#E0D8CC] select-none h-[400px] sm:h-[500px]">
          
          {/* "After" Image (Background Full) */}
          <img
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2000&q=95"
            alt="Living room transformed with luxury artificial fiddle leaf fig and tall artificial trees for living room corners"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#2C3B2E] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md z-10">
            AFTER: Transformed with Plantiqa 🌿
          </div>

          {/* "Before" Image (Clipped) */}
          <div
            className="absolute top-0 bottom-0 left-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=95"
              alt="Empty minimalist living room before decorating with artificial plants for home"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute top-4 left-4 bg-gray-900/90 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md z-10">
              BEFORE: Dull & Empty Space
            </div>
          </div>

          {/* Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-white text-[#2C3B2E] shadow-2xl flex items-center justify-center border-2 border-[#2C3B2E] -ml-4.5">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
          </div>

          {/* HTML Range Input Overlay */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            aria-label="Drag to compare before and after"
          />

        </div>

      </div>
    </section>
  );
};
