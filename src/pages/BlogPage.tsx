import React, { useState, useMemo, useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost, Product, PageType } from '../types';
import { Search, BookOpen, Clock, Calendar, User, ArrowRight, X, Share2, Check, ShoppingBag, Wrench, Mail } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';

interface BlogPageProps {
  onNavigate?: (page: PageType) => void;
  onAddToCart?: (product: Product) => void;
  onOpenQuickView?: (product: Product) => void;
  initialSlug?: string | null;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onAddToCart,
  onOpenQuickView,
  initialSlug,
}) => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(() => {
    if (initialSlug) {
      return BLOG_POSTS.find((p) => p.slug === initialSlug || p.id === initialSlug) || null;
    }
    return null;
  });
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  useEffect(() => {
    if (initialSlug) {
      const match = BLOG_POSTS.find((p) => p.slug === initialSlug || p.id === initialSlug);
      if (match) setActivePost(match);
    } else {
      setActivePost(null);
    }
  }, [initialSlug]);

  const categories = ['All', 'Interior Design', 'Plant Care', 'Trend Report', 'Pet Friendly'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(q);
        const matchExcerpt = post.excerpt.toLowerCase().includes(q);
        if (!matchTitle && !matchExcerpt) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  const handleOpenPost = (post: BlogPost) => {
    setActivePost(post);
    navigate(`/blog/${post.slug}`, { scrollToTop: false });
  };

  const handleClosePost = () => {
    setActivePost(null);
    navigate('/blog', { replace: true, scrollToTop: false });
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Blog Hero Header */}
      <section className="bg-[#2F4232] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#4A6B50]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800/50">
            Plant & Design Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5]">
            Styling Tips & Guides
          </h1>
          <p className="text-sm sm:text-base text-[#D8E8DA] max-w-2xl mx-auto leading-relaxed">
            Simple decor ideas, plant guides, and styling tips to make your home or office beautiful with hassle-free artificial plants.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        
        {/* Featured Post Banner */}
        {featuredPost && !searchQuery && selectedCategory === 'All' && (
          <div className="bg-white rounded-3xl overflow-hidden border border-[#EAE5DC] shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
            <Link
              href={`/blog/${featuredPost.slug}`}
              onClick={(e) => {
                e.preventDefault();
                handleOpenPost(featuredPost);
              }}
              className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden block"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.imageAlt || featuredPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[#2C3B2E] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                Featured Article
              </div>
            </Link>

            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#5C6E5E]">
                  <span className="font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenPost(featuredPost);
                  }}
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#1C281E] hover:text-[#4A6B50] transition-colors leading-tight block"
                >
                  {featuredPost.title}
                </Link>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={`${featuredPost.author.name}, ${featuredPost.author.role}`}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-bold text-gray-800">{featuredPost.author.name}</p>
                    <p className="text-[11px] text-gray-400">{featuredPost.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenPost(featuredPost);
                  }}
                  className="px-4 py-2 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white text-xs font-bold rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2C3B2E] text-white shadow-xs font-semibold'
                      : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#EAE5DC]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search botanical guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#FAF8F5] border border-[#EAE5DC] rounded-full text-xs focus:outline-none focus:border-[#2C3B2E] transition-colors"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenPost(post);
                  }}
                  className="relative h-48 overflow-hidden bg-[#FAF8F5] block"
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#2C3B2E] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {post.category}
                  </div>
                </Link>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-[#5C6E5E]">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenPost(post);
                    }}
                    className="font-serif text-xl font-bold text-[#1C281E] group-hover:text-[#2C3B2E] transition-colors leading-snug block"
                  >
                    {post.title}
                  </Link>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={`${post.author.name}, ${post.author.role}`}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs font-semibold text-gray-700">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenPost(post);
                  }}
                  className="text-xs font-bold text-[#2C3B2E] hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </article>
          ))}
        </div>

        {/* Cross-Link Navigation Banner with Real URLs */}
        <div className="bg-[#EAE5DC] p-8 sm:p-10 rounded-3xl border border-[#DCD3C5] text-center space-y-4 mt-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C281E]">
            Inspired by Our Botanical Design Articles?
          </h2>
          <p className="text-xs sm:text-sm text-[#4A524B] max-w-xl mx-auto">
            Bring these design concepts to life in your living room or office with our Real-Touch™ artificial plants and custom styling services.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/products"
              onClick={() => onNavigate && onNavigate('products')}
              className="px-6 py-3 bg-[#2C3B2E] text-white text-xs font-semibold rounded-full hover:bg-[#1E2B20] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-200" />
              <span>Shop Botanical Collection</span>
            </Link>
            <Link
              href="/services"
              onClick={() => onNavigate && onNavigate('services')}
              className="px-6 py-3 bg-white text-[#2C3B2E] border border-[#C2B8A8] text-xs font-semibold rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <Wrench className="w-4 h-4 text-[#4A6B50]" />
              <span>Explore Plant Styling Services</span>
            </Link>
            <Link
              href="/contact"
              onClick={() => onNavigate && onNavigate('contact')}
              className="px-6 py-3 bg-white text-[#2C3B2E] border border-[#C2B8A8] text-xs font-semibold rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#4A6B50]" />
              <span>Contact Design Team</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Article Reader Modal with Direct URL */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full my-8 relative shadow-2xl overflow-hidden animate-fadeIn max-h-[90vh] flex flex-col">
            
            {/* Header Sticky Control Bar */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-gray-200 z-10 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {activePost.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const articleUrl = `${window.location.origin}/blog/${activePost.slug}`;
                    navigator.clipboard.writeText(articleUrl);
                    setCopiedLink(true);
                    setTimeout(() => setCopiedLink(false), 2000);
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                </button>

                <button
                  onClick={handleClosePost}
                  className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Scroll Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
              
              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C281E] leading-tight">
                  {activePost.title}
                </h1>

                <div className="flex items-center justify-between pt-2 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={activePost.author.avatar}
                      alt={`${activePost.author.name}, ${activePost.author.role}`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold text-[#1C281E]">{activePost.author.name}</p>
                      <p className="text-[11px] text-gray-500">{activePost.author.role}</p>
                    </div>
                  </div>

                  <div className="text-right text-xs text-gray-400 space-y-0.5">
                    <p>{activePost.date}</p>
                    <p>{activePost.readTime}</p>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={activePost.image}
                  alt={activePost.imageAlt || activePost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>

              {/* Body Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed font-sans pt-2">
                {activePost.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Article Footer CTA */}
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EAE5DC] mt-8 text-center space-y-4">
                <p className="font-serif text-xl font-bold text-[#1C281E]">Ready to Transform Your Living Space?</p>
                <p className="text-xs text-gray-600">Explore our Real-Touch™ botanicals or schedule a consultation with our interior styling team.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/products"
                    onClick={() => {
                      handleClosePost();
                      if (onNavigate) onNavigate('products');
                    }}
                    className="px-6 py-2.5 bg-[#2C3B2E] text-white text-xs font-semibold rounded-full hover:bg-[#1E2B20] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Browse Plant Collection</span>
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => {
                      handleClosePost();
                      if (onNavigate) onNavigate('services');
                    }}
                    className="px-6 py-2.5 bg-white text-[#2C3B2E] border border-[#2C3B2E] text-xs font-semibold rounded-full hover:bg-[#EAE5DC] transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <Wrench className="w-3.5 h-3.5 text-[#2C3B2E]" />
                    <span>Explore Styling Services</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
