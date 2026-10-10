import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, PageType } from '../types';
import { Search, ShoppingBag, Eye, Star, ShieldCheck, Check, Sparkles, Wrench, BookOpen, HelpCircle, ArrowRight, X } from 'lucide-react';
import { ZoomImage } from '../components/ZoomImage';
import { Link, useRouter } from '../context/RouterContext';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
  onNavigate?: (page: PageType, options?: { space?: string; category?: string }) => void;
  onOpenQuiz?: () => void;
  initialSpace?: string;
  initialCategory?: string;
}

interface SpaceMeta {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

const SPACES: SpaceMeta[] = [
  {
    id: 'all',
    label: 'All Spaces',
    icon: '🌿',
    title: 'Complete Botanical Collection',
    description: 'Explore our full collection of Real-Touch™ artificial plants, luxury floor trees, and architectural indoor stands handcrafted to look completely real.',
    highlights: ['✨ Real-Touch™ Tactile Realism', '🚚 Free Express Shipping Over ₹1,499', '🛡️ 30-Day Risk-Free Trial']
  },
  {
    id: 'bathroom',
    label: 'Bathroom Shelves & Moisture',
    icon: '🛁',
    title: 'Small Artificial Plants for Bathroom Shelves & Humid Spaces',
    description: 'Transform powder rooms, shower ledges, and vanity shelves into serene spa sanctuaries. Engineered with moisture-impervious Real-Touch™ polymers that withstand steam and damp air without molding, shedding, or needing natural light.',
    highlights: ['💧 100% Steam & Moisture Resistant', '🌿 Compact Profiles Crafted for Floating Shelves', '☀️ Thrives in Zero-Window Powder Rooms']
  },
  {
    id: 'living-room',
    label: 'Living Room Corners',
    icon: '🛋️',
    title: 'Tall Artificial Trees & Stands for Living Room Corners',
    description: 'Sculptural floor trees and elevating hardwood pedestals crafted to naturally anchor seating areas, open alcoves, and tall ceilings. Built with authentic timber trunks and hand-curved branches that cast organic leaf shadows.',
    highlights: ['🌳 Organic Timber Hardwood Trunks', '📐 Proportioned for 8ft to 12ft Ceilings', '⚖️ Pre-Weighted Anti-Topple Stone Pots']
  },
  {
    id: 'office',
    label: 'Executive Desks & Office',
    icon: '💼',
    title: 'Fake Office Plants That Look Real for Desks & Workspaces',
    description: 'Calming tabletop succulents and biophilic greenery in Italian marble and ceramic planters. Engineered to reduce screen fatigue, enhance focus, and elevate workstations with zero watering, soil dirt, or weekend maintenance.',
    highlights: ['🔬 Biophilic Focus & Stress Reduction', '🚫 Zero Water, Gnats, or Soil Allergen Risks', '🏛️ Solid Italian Marble & Stoneware Planters']
  },
  {
    id: 'dark-rooms',
    label: 'Dark Rooms & Windowless Spaces',
    icon: '🌑',
    title: 'Fake Plants for Dark Rooms & Low-Light Spaces',
    description: 'Hyper-realistic botanical arrangements that stay permanently lush where biological houseplants perish. Specially crafted for basement suites, interior corridors, and dim reading nooks with zero natural window exposure.',
    highlights: ['🌑 100% Zero-Light Tolerant', '✨ UV-Stable Non-Fading Silk Leaves', '🌱 Never Drops Leaves or Needs Misting']
  },
  {
    id: 'pet-safe',
    label: 'Pet-Friendly Homes',
    icon: '🐾',
    title: 'Pet-Safe Artificial Plants for Cats & Dogs',
    description: 'Certified 100% non-toxic, hypoallergenic botanicals made from inert food-grade polymers. Eliminate the danger of toxic sap, gastrointestinal distress, and calcium oxalate crystals found in living indoor foliage.',
    highlights: ['🐾 Certified 100% Non-Toxic to Cats & Dogs', '🐕 Heavy Tip-Proof Bases', '🌱 Zero Mud or Fertilizers Tracked on Rugs']
  }
];

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onAddToCart,
  onOpenQuickView,
  onNavigate,
  onOpenQuiz,
  initialSpace = 'all',
  initialCategory = 'all'
}) => {
  const { navigate } = useRouter();
  const [selectedSpace, setSelectedSpace] = useState<string>(initialSpace);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [petSafeOnly, setPetSafeOnly] = useState<boolean>(false);
  const [bestSellersOnly, setBestSellersOnly] = useState<boolean>(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  useEffect(() => {
    if (initialSpace) setSelectedSpace(initialSpace);
  }, [initialSpace]);

  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'statement', label: 'Floor Trees' },
    { id: 'stands', label: 'Plant Stands' },
    { id: 'succulents', label: 'Desk & Succulents' },
    { id: 'vines', label: 'Hanging Vines' },
    { id: 'accent', label: 'Medium Plants' },
  ];

  const updateUrlFilters = (space: string, category: string) => {
    const params = new URLSearchParams();
    if (space && space !== 'all') params.set('space', space);
    if (category && category !== 'all') params.set('category', category);
    const qs = params.toString();
    navigate(qs ? `/products?${qs}` : '/products', { replace: true, scrollToTop: false });
  };

  const handleSpaceChange = (spaceId: string) => {
    setSelectedSpace(spaceId);
    updateUrlFilters(spaceId, selectedCategory);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    updateUrlFilters(selectedSpace, categoryId);
  };

  const handleResetFilters = () => {
    setSelectedSpace('all');
    setSelectedCategory('all');
    setSearchQuery('');
    setPetSafeOnly(false);
    setBestSellersOnly(false);
    navigate('/products', { replace: true, scrollToTop: false });
  };

  const currentSpaceMeta = useMemo(() => {
    return SPACES.find((s) => s.id === selectedSpace) || SPACES[0];
  }, [selectedSpace]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Space filter
      if (selectedSpace !== 'all') {
        if (selectedSpace === 'pet-safe') {
          if (!product.isPetSafe) return false;
        } else if (!product.spaces?.includes(selectedSpace as any)) {
          return false;
        }
      }

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
        const matchesRoom = product.idealRooms?.some(r => r.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesCat && !matchesFeat && !matchesRoom) return false;
      }

      // Pet safe filter toggle
      if (petSafeOnly && !product.isPetSafe) return false;

      // Best seller filter toggle
      if (bestSellersOnly && !product.isBestSeller) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedSpace, selectedCategory, searchQuery, sortBy, petSafeOnly, bestSellersOnly]);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Catalog Hero Banner */}
      <section className="bg-[#2F4232] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#4A6B50]">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            Handcrafted Botanical Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            Ultra-Realistic Artificial Plants for Home
          </h1>
          <p className="text-sm sm:text-base text-[#D8E8DA] max-w-2xl mx-auto leading-relaxed">
            Thoughtfully curated greenery for living room corners, bathroom shelves, and workspaces. Handcrafted with Real-Touch™ foliage and zero watering required.
          </p>
        </div>
      </section>

      {/* Main Catalog Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Controls Bar: Spaces, Categories, Search, and Filters */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-[#EAE5DC] mb-8 space-y-5">
          
          {/* Room & Space Navigation Filter */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#2C3B2E] uppercase tracking-wider flex items-center gap-1.5">
                <span>Shop by Space & Need</span>
              </span>
              {selectedSpace !== 'all' && (
                <button
                  onClick={() => handleSpaceChange('all')}
                  className="text-xs text-gray-500 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Show all spaces</span>
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {SPACES.map((space) => {
                const isActive = selectedSpace === space.id;
                return (
                  <button
                    key={space.id}
                    onClick={() => handleSpaceChange(space.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                      isActive
                        ? 'bg-[#2C3B2E] text-white border-[#2C3B2E] shadow-sm font-semibold'
                        : 'bg-[#FAF8F5] text-gray-700 hover:bg-[#EAE5DC] border-[#EAE5DC]'
                    }`}
                  >
                    <span>{space.icon}</span>
                    <span>{space.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search, Sort, & Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-3 border-t border-gray-100">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search plants, rooms, or features (e.g. bathroom shelves, olive tree, desk)..."
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
              <span className="text-xs font-medium text-gray-500 whitespace-nowrap">Sort:</span>
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

          {/* Plant Type Category Tabs */}
          <div className="pt-2 border-t border-gray-100 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mr-1 shrink-0">Type:</span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2C3B2E] text-white'
                    : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#EAE5DC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Dedicated Space Editorial Banner */}
        {selectedSpace !== 'all' && (
          <div className="bg-gradient-to-br from-[#2F4232] to-[#1E2B20] text-white p-6 sm:p-7 rounded-2xl shadow-sm border border-[#4A6B50] mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                  <span>{currentSpaceMeta.icon}</span>
                  <span className="uppercase tracking-wider">Dedicated Space Curation</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {currentSpaceMeta.title}
                </h2>
              </div>
              <button
                onClick={() => handleSpaceChange('all')}
                className="self-start sm:self-auto px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-xs font-medium rounded-full text-white transition-colors cursor-pointer"
              >
                Clear Space Filter
              </button>
            </div>
            
            <p className="text-xs sm:text-sm text-[#D8E8DA] max-w-3xl leading-relaxed">
              {currentSpaceMeta.description}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-white/10 text-xs text-emerald-200">
              {currentSpaceMeta.highlights.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs text-[#5C6E5E]">
            Showing <strong className="text-[#1C281E]">{filteredProducts.length}</strong> botanicals
            {selectedSpace !== 'all' && <span> for <strong>{currentSpaceMeta.label}</strong></span>}
          </p>
          {(selectedSpace !== 'all' || selectedCategory !== 'all' || searchQuery || petSafeOnly || bestSellersOnly) && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-semibold text-[#2C3B2E] underline hover:text-emerald-800 cursor-pointer"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-[#EAE5DC] space-y-4">
            <p className="text-base font-semibold text-gray-700">No botanicals matched your current filter criteria.</p>
            <p className="text-xs text-gray-500">Try choosing a different room space or clearing the category filter.</p>
            <button
              onClick={handleResetFilters}
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
                  {/* Image Container with Magnifying Zoom and Link */}
                  <div className="relative aspect-4/5 overflow-hidden bg-[#FAF8F5]">
                    <Link
                      href={`/products/${product.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenQuickView(product);
                      }}
                      className="block w-full h-full"
                    >
                      <ZoomImage
                        src={product.image}
                        alt={product.imageAlt || product.name}
                        containerClassName="w-full h-full"
                        zoomScale={2.0}
                      />
                    </Link>

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

                    {/* Quick View Button with Direct URL */}
                    <Link
                      href={`/products/${product.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenQuickView(product);
                      }}
                      className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#1C281E] p-2 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-110 cursor-pointer z-20 flex items-center justify-center"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#5C6E5E] mb-1">
                        <span>{product.categoryLabel}</span>
                        <span>{product.height}</span>
                      </div>

                      <Link
                        href={`/products/${product.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenQuickView(product);
                        }}
                        className="font-serif text-lg font-bold text-[#1C281E] group-hover:text-[#2C3B2E] transition-colors block"
                      >
                        {product.name}
                      </Link>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mt-1 text-xs text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-gray-800">{product.rating}</span>
                        <span className="text-gray-400 text-[11px]">({product.reviewCount})</span>
                      </div>

                      {/* Space & Ideal Room Tags */}
                      {product.idealRooms && product.idealRooms.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2.5">
                          {product.idealRooms.slice(0, 2).map((room, rIdx) => (
                            <span
                              key={rIdx}
                              className="text-[10px] font-medium bg-[#FAF8F5] text-[#3D4A3E] px-2 py-0.5 rounded-md border border-[#EAE5DC]"
                            >
                              📍 {room}
                            </span>
                          ))}
                        </div>
                      )}

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

        {/* Cross-Page Internal Navigation Banner with Real URLs */}
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
            <Link
              href="/services"
              onClick={() => onNavigate && onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C3B2E] hover:text-emerald-800 cursor-pointer pt-2"
            >
              <span>Explore Design Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Link to Blog */}
          <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs hover:border-[#2C3B2E] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C281E]">Plant Styling & Care Guides</h4>
              <p className="text-xs text-[#5C6E5E] leading-relaxed">
                Learn branch shaping techniques, bathroom moisture styling, and pet-safe botanical arrangement ideas in our journal.
              </p>
            </div>
            <Link
              href="/blog"
              onClick={() => onNavigate && onNavigate('blog')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C3B2E] hover:text-emerald-800 cursor-pointer pt-2"
            >
              <span>Read Design Journal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Link to Contact Support */}
          <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs hover:border-[#2C3B2E] transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#1C281E]">Have Questions Before Buying?</h4>
              <p className="text-xs text-[#5C6E5E] leading-relaxed">
                Our plant experts are available 7 days a week to answer questions regarding leaf textures, planters, and room placement.
              </p>
            </div>
            <Link
              href="/contact"
              onClick={() => onNavigate && onNavigate('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C3B2E] hover:text-emerald-800 cursor-pointer pt-2"
            >
              <span>Contact Customer Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
