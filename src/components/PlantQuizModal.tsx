import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface PlantQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const PlantQuizModal: React.FC<PlantQuizModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState({
    space: '',
    light: '',
    petOwner: '',
  });

  if (!isOpen) return null;

  const handleSelect = (key: string, val: string) => {
    setAnswers((prev) => ({ ...prev, [key]: val }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // Results
    }
  };

  const getRecommendedProduct = (): Product => {
    if (answers.space === 'floor') return PRODUCTS[0]; // Fiddle Leaf Fig
    if (answers.space === 'desk') return PRODUCTS[2]; // Succulent
    if (answers.space === 'shelf') return PRODUCTS[3]; // Hanging Pothos
    return PRODUCTS[1]; // Olive Tree
  };

  const recProduct = getRecommendedProduct();

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ space: '', light: '', petOwner: '' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#EAE5DC] space-y-6 animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#2C3B2E] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>30-Sec Botanical Matcher</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C281E]">
            Find Your Ideal Faux Plant Match
          </h2>
        </div>

        {/* Step Indicator */}
        {step <= 3 && (
          <div className="flex items-center justify-between text-xs font-semibold text-[#5C6E5E] px-4">
            <span>Step {step} of 3</span>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-1.5 rounded-full transition-colors ${
                    s <= step ? 'bg-[#2C3B2E]' : 'bg-[#EAE5DC]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Space Type */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1C281E] text-center">
              Where do you plan to display your plant?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'floor', label: 'Living Room Floor / Entryway', icon: '🪴' },
                { id: 'desk', label: 'Office Desk or Side Table', icon: '💻' },
                { id: 'shelf', label: 'Bookcase or Hanging Ledge', icon: '📚' },
                { id: 'corner', label: 'Bedroom or Dining Nook', icon: '✨' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('space', opt.id)}
                  className="p-4 rounded-2xl bg-white border border-[#EAE5DC] hover:border-[#2C3B2E] text-left text-sm font-semibold text-[#1C281E] hover:bg-[#EAE5DC]/50 transition-all flex items-center gap-3 shadow-xs cursor-pointer"
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Lighting Environment */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1C281E] text-center">
              What is the lighting situation in that space?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'dark', label: 'Dim / No Windows (Basement/Hall)', icon: '🌙' },
                { id: 'indirect', label: 'Filtered Indirect Sunlight', icon: '⛅' },
                { id: 'direct', label: 'Bright Direct Window Light', icon: '☀️' },
                { id: 'fluorescent', label: 'Fluorescent Office Lighting', icon: '💡' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('light', opt.id)}
                  className="p-4 rounded-2xl bg-white border border-[#EAE5DC] hover:border-[#2C3B2E] text-left text-sm font-semibold text-[#1C281E] hover:bg-[#EAE5DC]/50 transition-all flex items-center gap-3 shadow-xs cursor-pointer"
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Pet Friendly Priority */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-[#1C281E] text-center">
              Do you have cats or dogs at home?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'cats', label: 'Yes, curious cats or dogs', icon: '🐾' },
                { id: 'no_pets', label: 'No pets at home', icon: '🏡' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('petOwner', opt.id)}
                  className="p-4 rounded-2xl bg-white border border-[#EAE5DC] hover:border-[#2C3B2E] text-left text-sm font-semibold text-[#1C281E] hover:bg-[#EAE5DC]/50 transition-all flex items-center gap-3 shadow-xs cursor-pointer"
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Recommended Result */}
        {step === 4 && (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="p-3 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-700" />
              100% Match Found For Your Space
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#EAE5DC] flex flex-col sm:flex-row items-center gap-5 text-left shadow-md">
              <img
                src={recProduct.image}
                alt={recProduct.imageAlt || `${recProduct.name} - recommended artificial plants for home match`}
                referrerPolicy="no-referrer"
                className="w-28 h-28 rounded-xl object-cover shrink-0"
              />
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  {recProduct.categoryLabel}
                </span>
                <h4 className="font-serif text-lg font-bold text-[#1C281E]">
                  {recProduct.name}
                </h4>
                <p className="text-xs text-[#5C6E5E] line-clamp-2">
                  {recProduct.description}
                </p>
                <p className="text-lg font-serif font-bold text-[#2C3B2E]">
                  ${recProduct.price}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onAddToCart(recProduct);
                  onClose();
                }}
                className="flex-1 py-3.5 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white font-semibold text-sm rounded-full transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Add Matched Plant To Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={resetQuiz}
                className="px-4 py-3.5 border border-[#2C3B2E] text-[#2C3B2E] hover:bg-[#EAE5DC] font-medium text-xs rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
