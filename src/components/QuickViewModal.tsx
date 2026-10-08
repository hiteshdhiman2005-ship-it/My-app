import React from 'react';
import { X, Star, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product, PageType } from '../types';
import { ImageCarousel, CarouselSlide } from './ImageCarousel';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onNavigate?: (page: PageType) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onNavigate,
}) => {
  if (!product) return null;

  const gallerySlides: CarouselSlide[] = (product.gallery && product.gallery.length > 0)
    ? product.gallery.map((img, i) => ({
        id: `${product.id}-gal-${i}`,
        url: img,
        alt: product.galleryAlt?.[i] || `${product.name} - Botanical View ${i + 1} (${product.potType}, ${product.height})`,
        badge: i === 0 ? product.badge : undefined,
      }))
    : [{ id: product.id, url: product.image, alt: product.imageAlt || `${product.name} - ${product.categoryLabel}`, badge: product.badge }];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 animate-fadeIn overflow-hidden max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors cursor-pointer z-30"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          
          {/* Left Column: Image Carousel with Thumbnails */}
          <div className="w-full">
            <ImageCarousel
              slides={gallerySlides}
              autoPlay={false}
              showThumbnails={true}
              showDots={true}
              showControls={true}
              containerClassName="h-64 sm:h-80"
              onSlideClick={() => {
                if (onNavigate) {
                  onNavigate('products');
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            />
            {onNavigate && (
              <p className="text-[11px] text-gray-400 text-center mt-2 flex items-center justify-center gap-1">
                <span>Click image to open full catalog view</span>
                <ArrowRight className="w-3 h-3 text-emerald-600" />
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
                {product.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1C281E] leading-tight mt-0.5">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-500 text-xs">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-bold ml-1 text-gray-900">{product.rating}</span>
                </div>
                <span className="text-xs text-[#6B756E]">({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            <div className="text-2xl font-serif font-bold text-[#2C3B2E] flex items-center gap-2">
              <span>₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="text-sm font-sans text-gray-400 line-through font-normal">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            <p className="text-xs text-[#5C6E5E] leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-bold text-[#1C281E]">Height:</span> {product.height}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-bold text-[#1C281E]">Included Planter:</span> {product.potType}
              </div>
              {product.isPetSafe && (
                <div className="flex items-center gap-1.5 text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Pet-Safe & Non-Toxic Silk Formula
                </div>
              )}
            </div>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full py-3.5 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white font-semibold text-sm rounded-full transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" /> Add To Shopping Bag (₹{product.price.toLocaleString('en-IN')})
            </button>

            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('products');
                  onClose();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 bg-white text-[#2C3B2E] border border-[#2C3B2E] hover:bg-[#FAF8F5] font-semibold text-xs rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Full Product Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2C3B2E]" />
              </button>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
