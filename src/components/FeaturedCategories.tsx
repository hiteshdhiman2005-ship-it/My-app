import React, { useState } from 'react';
import { ArrowUpRight, Star, ShoppingBag, Eye, ShieldCheck, Filter, ArrowRight } from 'lucide-react';
import { CATEGORIES_COPY } from '../data/copywritingContent';
import { PRODUCTS } from '../data/products';
import { Product, PageType } from '../types';
import { ZoomImage } from './ZoomImage';

interface FeaturedCategoriesProps {
  isInspectorMode: boolean;
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
  onNavigate?: (page: PageType) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  isInspectorMode,
  onAddToCart,
  onOpenQuickView,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="categories" className="bg-[#FAF8F5] py-20 border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE5DC] text-[#2C3B2E] text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Curated Collections</span>
            </div>
            
            <div className="relative">
              {isInspectorMode && (
                <div className="absolute -top-6 left-0 bg-amber-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-sm z-20">
                  Featured Categories • 4 Logical Categories with Catchy SEO Descriptions
                </div>
              )}
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C281E]">
                Explore Our Botanical Collections
              </h2>
            </div>
            <p className="text-sm text-[#5C6E5E] mt-1 max-w-xl">
              Hand-assembled with Real-Touch™ silk foliage and weighted artisan pottery for every room scale.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#2C3B2E] text-white shadow-md'
                  : 'bg-white text-[#3D4A3E] border border-[#EAE5DC] hover:border-gray-400'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            {CATEGORIES_COPY.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2C3B2E] text-white shadow-md'
                    : 'bg-white text-[#3D4A3E] border border-[#EAE5DC] hover:border-gray-400'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Logical Featured Category Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CATEGORIES_COPY.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
                className={`group relative rounded-2xl overflow-hidden bg-white border transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between ${
                  isSelected ? 'ring-2 ring-[#2C3B2E] border-transparent' : 'border-[#EAE5DC] hover:border-[#C0B8A8]'
                }`}
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <ZoomImage
                    src={cat.image}
                    alt={cat.imageAlt || cat.name}
                    containerClassName="w-full h-full"
                    zoomScale={1.8}
                    showBadge={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#2C3B2E] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider pointer-events-none">
                    {cat.productCount} Designs
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-medium text-emerald-300 uppercase tracking-widest block">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-serif text-lg font-bold leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Catchy Description */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white space-y-3">
                  <p className="text-xs text-[#5C6E5E] leading-relaxed">
                    {cat.description}
                  </p>
                  
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-[#2C3B2E] font-semibold group-hover:text-emerald-800">
                    <span>{cat.tagline}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Filtered Product Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h3 className="font-serif text-xl font-bold text-[#1C281E] flex items-center gap-2">
              <span>Catalog Preview</span>
              <span className="text-xs font-sans font-normal text-[#5C6E5E]">({filteredProducts.length} items)</span>
            </h3>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs text-[#2C3B2E] underline font-medium hover:text-black cursor-pointer"
              >
                Clear Category Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Product Image & Badges */}
                <div 
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      onOpenQuickView(product);
                    }
                  }}
                  className="relative h-64 overflow-hidden bg-[#FAF8F5] cursor-pointer"
                  title="Click picture to go to Product Page"
                >
                  <ZoomImage
                    src={product.image}
                    alt={product.imageAlt || product.name}
                    containerClassName="w-full h-full"
                    zoomScale={2.0}
                  />
                  
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#2C3B2E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10 pointer-events-none">
                      {product.badge}
                    </span>
                  )}

                  {product.isPetSafe && (
                    <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-900 border border-emerald-200 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm z-10 pointer-events-none">
                      <ShieldCheck className="w-3 h-3 text-emerald-700" /> Pet Safe
                    </span>
                  )}

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3 z-20 pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuickView(product);
                      }}
                      className="px-4 py-2 bg-white/95 hover:bg-white text-[#1C281E] text-xs font-semibold rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer pointer-events-auto"
                    >
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#5C6E5E] mb-1">
                      <span>{product.categoryLabel}</span>
                      <span className="font-semibold text-gray-700">{product.height}</span>
                    </div>

                    <h4
                      onClick={() => {
                        if (onNavigate) {
                          onNavigate('products');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          onOpenQuickView(product);
                        }
                      }}
                      className="font-serif text-lg font-bold text-[#1C281E] group-hover:text-[#2C3B2E] transition-colors cursor-pointer line-clamp-1"
                      title="Click to go to Product Page"
                    >
                      {product.name}
                    </h4>

                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="flex items-center text-amber-500 text-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold ml-1 text-gray-900">{product.rating}</span>
                      </div>
                      <span className="text-xs text-[#6B756E]">({product.reviewCount} reviews)</span>
                    </div>

                    <p className="text-xs text-[#6B756E] mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through mr-1.5">
                          ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-xl font-serif font-bold text-[#2C3B2E]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-4 py-2.5 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* View Full Catalog Button */}
          {onNavigate && (
            <div className="text-center pt-8">
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-3.5 bg-[#2C3B2E] text-white hover:bg-[#1E2B20] text-xs font-bold rounded-full transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>View Full Botanical Catalog ({PRODUCTS.length} Items)</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
