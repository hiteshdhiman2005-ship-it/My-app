import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, PageType } from '../types';
import { Search, Filter, ShoppingBag, Eye, Star, ShieldCheck, Check, Sparkles, Wrench, BookOpen, HelpCircle, ArrowRight } from 'lucide-react';
import { ZoomImage } from '../components/ZoomImage';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
  onNavigate?: (page: PageType) => void;
  onOpenQuiz?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onAddToCart,
  onOpenQuickView,
  onNavigate,
  onOpenQuiz,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [petSafeOnly, setPetSafeOnly] = useState<boolean>(false);
  const [bestSellersOnly, setBestSellersOnly] = useState<boolean>(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'statement', label: 'Floor Trees' },
    { id: 'stands', label: 'Plant Stands' },
    { id: 'succulents', label: 'Desk & Succulents' },
    { id: 'vines', label: 'Hanging Vines' },
    { id: 'accent', label: 'Medium Plants' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesCat = product.categoryLabel.toLowerCase().includes(query);
        const matchesFeat = product.features.some(f => f.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCat && !matchesFeat) return false;
      }
      // Pet safe filter
      if (petSafeOnly && !product.isPetSafe) return false;
      // Best seller filter
      if (bestSellersOnly && !product.isBestSeller) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy, petSafeOnly, bestSellersOnly]);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Catalog Hero Banner */}
      <section className="bg-[#2F4232] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#4A6B50]">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/50">
            Real-Touch™ Plant Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            Our Plant Collection
          </h1>
          <p className="text-sm sm:text-base text-[#D8E8DA] max-w-2xl mx-auto leading-relaxed">
            Lifelike artificial plants and trees handcrafted to look real. Non-toxic, easy to clean, and backed by our 30-Day Easy Returns.
          </p>
        </div>
      </section>

      {/* Main Catalog Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Controls Bar: Search, Sorting, and Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#EAE5DC] mb-8 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search catalog or keywords (e.g. best plant stand for indoors, Fiddle Leaf, Monstera)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3B2E] focus:border-transparent text-[#1C281E]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="w-full py-2.5 px-3 text-xs sm:text-sm bg-[#FAF8F5] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2C3B2E] text-[#1C281E] cursor-pointer"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Quick Filter Toggles */}
            <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
              <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={petSafeOnly}
                  onChange={(e) => setPetSafeOnly(e.target.checked)}
                  className="rounded text-[#2C3B2E] focus:ring-[#2C3B2E] w-4 h-4 cursor-pointer"
                />
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Pet Safe</span>
              </label>

              <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={bestSellersOnly}
                  onChange={(e) => setBestSellersOnly(e.target.checked)}
                  className="rounded text-[#2C3B2E] focus:ring-[#2C3B2E] w-4 h-4 cursor-pointer"
                />
                <span>Best Sellers</span>
              </label>
            </div>

          </div>

          {/* Category Tabs & Popular Secondary Keyword Searches */}
          <div className="space-y-3 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#2C3B2E] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-[#3D4A3E] hover:bg-[#EAE5DC]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Secondary Keyword Quick Search Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs border-t border-gray-100/60">
              <span className="font-bold text-gray-500 uppercase tracking-wider text-[10px]">Secondary Keyword Searches:</span>
              {[
                { label: 'Small artificial plants for bathroom shelves', query: 'bathroom shelves' },
                { label: 'Fake plants for dark rooms', query: 'dark rooms' },
                { label: 'Fake office plants that look real', query: 'office' }
              ].map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => {
                    setSearchQuery(chip.query);
                    setSelectedCategory('all');
                  }}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all cursor-pointer border ${
                    searchQuery === chip.query
                      ? 'bg-[#2C3B2E] text-white border-[#1E2B20]'
                      : 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100'
                  }`}
                  title={`Filter products for: ${chip.label}`}
                >
                  ✨ {chip.label}
                </button>
              ))}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[11px] font-semibold text-gray-500 hover:text-gray-800 underline ml-1 cursor-pointer"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-[#5C6E5E]">
            Showing <strong className="text-[#1C281E]">{filteredProducts.length}</strong> botanicals
          </p>
          {(selectedCategory !== 'all' || searchQuery || petSafeOnly || bestSellersOnly) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setPetSafeOnly(false);
                setBestSellersOnly(false);
              }}
              className="text-xs font-semibold text-[#2C3B2E] underline hover:text-emerald-800 cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#EAE5DC] space-y-4">
            <p className="text-base font-semibold text-gray-700">No botanicals matched your current filter criteria.</p>
            <p className="text-xs text-gray-500">Try adjusting your search keywords or turning off specific toggles.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setPetSafeOnly(false);
                setBestSellersOnly(false);
              }}
              className="px-5 py-2.5 bg-[#2C3B2E] text-white text-xs font-semibold rounded-full hover:bg-[#1E2B20] transition-colors cursor-pointer"
            >
              Show All Botanicals
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const isAdded = addedProductId === product.id;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image Container with Magnifying Zoom */}
                  <div className="relative aspect-4/5 overflow-hidden bg-[#FAF8F5]">
                    <ZoomImage
                      src={product.image}
                      alt={product.imageAlt || product.name}
                      containerClassName="w-full h-full"
                      zoomScale={2.0}
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 items-start z-10 pointer-events-none">
                      {product.badge && (
                        <span className="bg-[#2C3B2E] text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-md shadow-xs">
                          {product.badge}
                        </span>
                      )}
                      {product.isPetSafe && (
                        <span className="bg-emerald-800 text-emerald-100 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-300" /> Pet Safe
                        </span>
                      )}
                    </div>

                    {/* Quick View Button */}
                    <button
                      onClick={() => onOpenQuickView(product)}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#1C281E] p-2 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-110 cursor-pointer z-20"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#5C6E5E] mb-1">
                        <span>{product.categoryLabel}</span>
                        <span>{product.height}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#1C281E] group-hover:text-[#2C3B2E] transition-colors">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-1 text-xs text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-gray-800">{product.rating}</span>
                        <span className="text-gray-400 text-[11px]">({product.reviewCount})</span>
                      </div>

                      <p className="text-xs text-gray-600 line-clamp-2 mt-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Footer Row: Price & Add To Cart */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through mr-1.5">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                        <span className="text-lg font-serif font-bold text-[#2C3B2E]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdd(product)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-700 text-white shadow-sm'
                            : 'bg-[#2C3B2E] hover:bg-[#1E2B20] text-white shadow-xs'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-200" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Cross-Page Internal Navigation Banner */}
        {onNavigate && (
          <div className="mt-16 pt-12 border-t border-[#EAE5DC] grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Link to Services */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs hover:border-[#2C3B2E] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C281E]">Commercial & Custom Styling</h4>
                <p className="text-xs text-[#5C6E5E] leading-relaxed">
                  Need large 12ft trees for a lobby or custom potting for your office space? Explore our white-glove styling services.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C3B2E] hover:text-emerald-800 cursor-pointer pt-2"
              >
                <span>Explore Design Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Link to Blog / Quiz */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs hover:border-[#2C3B2E] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C281E]">Plant Styling & Care Guides</h4>
                <p className="text-xs text-[#5C6E5E] leading-relaxed">
                  Learn branch shaping techniques, leaf cleaning tips, and pet-safe botanical arrangement ideas in our journal.
                </p>
              </div>
              <button
                onClick={() => onNavigate('blog')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C3B2E] hover:text-emerald-800 cursor-pointer pt-2"
              >
                <span>Read Design Journal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Link to Contact Support */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs hover:border-[#2C3B2E] transition-all space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C281E]">Have Questions Before Buying?</h4>
                <p className="text-xs text-[#5C6E5E] leading-relaxed">
                  Our plant experts are available 7 days a week to answer questions regarding leaf textures, planters, and shipping.
                </p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C3B2E] hover:text-emerald-800 cursor-pointer pt-2"
              >
                <span>Contact Customer Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
