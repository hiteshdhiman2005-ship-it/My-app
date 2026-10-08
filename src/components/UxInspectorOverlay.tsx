import React from 'react';
import { Sparkles, Check, HelpCircle, FileText, Code } from 'lucide-react';

interface UxInspectorOverlayProps {
  onOpenCopywritingHub: () => void;
  onDisableInspector: () => void;
}

export const UxInspectorOverlay: React.FC<UxInspectorOverlayProps> = ({
  onOpenCopywritingHub,
  onDisableInspector,
}) => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-4xl mx-auto bg-amber-900 text-amber-50 p-4 rounded-2xl shadow-2xl border-2 border-amber-400 backdrop-blur-md animate-fadeIn">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-400 text-amber-950 font-bold flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-amber-200 uppercase tracking-wider block">
              UX & Copywriter Inspector Active
            </span>
            <p className="text-amber-100/90 text-[11px]">
              Showing H1, H2, SEO keywords, CTA targets, and section conversion rationale over the live Shopify layout.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <button
            onClick={onOpenCopywritingHub}
            className="px-3.5 py-1.5 bg-amber-400 text-amber-950 font-bold rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" /> 📊 Page Insights, Strategy & Liquid Code
          </button>

          <button
            onClick={onDisableInspector}
            className="px-2.5 py-1.5 bg-amber-950/80 hover:bg-black text-amber-200 rounded-lg transition-colors cursor-pointer"
          >
            Turn Off Overlay
          </button>
        </div>

      </div>
    </div>
  );
};
