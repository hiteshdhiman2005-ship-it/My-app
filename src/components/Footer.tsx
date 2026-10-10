import React, { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, Check, Leaf } from 'lucide-react';
import { PageType } from '../types';
import { Link } from '../context/RouterContext';

interface FooterProps {
  onNavigate: (page: PageType, options?: { space?: string; category?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navTo = (page: PageType, options?: { space?: string; category?: string }) => {
    onNavigate(page, options);
  };

  return (
    <footer className="bg-[#2C3B2E] text-white pt-16 pb-8 border-t border-[#3D5542]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Value Guarantees Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-[#3D5542] text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Truck className="w-8 h-8 text-emerald-300" />
            <div>
              <h4 className="font-serif font-bold text-sm">Free Express Shipping</h4>
              <p className="text-xs text-gray-300">On all plant orders over ₹1,499</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-300" />
            <div>
              <h4 className="font-serif font-bold text-sm">100% Pet-Safe Certification</h4>
              <p className="text-xs text-gray-300">Non-toxic, hypoallergenic materials</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <RotateCcw className="w-8 h-8 text-emerald-300" />
            <div>
              <h4 className="font-serif font-bold text-sm">30-Day Risk-Free Trial</h4>
              <p className="text-xs text-gray-300">Love the foliage or return hassle-free</p>
            </div>
          </div>
        </div>

        {/* Links & Newsletter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <Link 
              href="/"
              onClick={() => navTo('home')} 
              className="text-left flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-[#3D5542] text-white flex items-center justify-center border border-[#5D8264]">
                <Leaf className="w-5 h-5 text-emerald-200 fill-emerald-300/30" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Planti<span className="text-emerald-300 font-sans font-semibold">qa</span>
              </span>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed">
              Real-Touch™ artificial plants for home. Handcrafted foliage with natural wood trunks, zero watering, and non-toxic materials.
            </p>
          </div>

          {/* Quick Page Links with Real URLs */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-emerald-300 uppercase tracking-wider">Explore Pages</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" onClick={() => navTo('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/products" onClick={() => navTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => navTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Design Services
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => navTo('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Botanical Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Botanical Collections with Real URLs */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-emerald-300 uppercase tracking-wider">Featured Collections</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  href="/products?category=statement" 
                  onClick={() => navTo('products', { category: 'statement' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Statement Floor Trees
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=succulents" 
                  onClick={() => navTo('products', { category: 'succulents' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Desktop & Shelf Succulents
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=vines" 
                  onClick={() => navTo('products', { category: 'vines' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cascading Hanging Vines
                </Link>
              </li>
              <li>
                <Link 
                  href="/products?category=stands" 
                  onClick={() => navTo('products', { category: 'stands' })} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Architectural Plant Stands
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm">Join The Botanical Club</h4>
            <p className="text-xs text-gray-300">
              Subscribe for 10% off your first order plus seasonal styling guides.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#3D5542] rounded-xl border border-emerald-400/50 text-xs text-emerald-200 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Thank you! Check your inbox for code <strong>PLANTIQA10</strong>.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-[#3D5542] border border-[#5D8264] text-xs text-white placeholder-gray-300 focus:outline-none focus:border-emerald-300"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#5D8264] hover:bg-[#4A6B50] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Curated Space Solutions & Styling Guides with Real URLs */}
        <div className="pt-8 border-t border-[#3D5542] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h4 className="font-serif font-bold text-sm text-emerald-300">
              Curated Spaces & Botanical Home Solutions
            </h4>
            <span className="text-[11px] text-gray-300">
              Handcrafted for rooms where living houseplants struggle
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <Link
              href="/products?space=living-room"
              onClick={() => navTo('products', { space: 'living-room' })}
              className="p-3.5 bg-[#3D5542]/70 hover:bg-[#3D5542] border border-[#5D8264]/60 hover:border-emerald-400/60 rounded-xl text-left transition-all group cursor-pointer block"
            >
              <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-1 group-hover:text-white">
                <span>🛋️</span>
                <span>Living Room Corners</span>
              </div>
              <p className="text-[11px] text-gray-300 leading-snug">
                Tall statement trees & stands proportioned to fill empty corners.
              </p>
            </Link>

            <Link
              href="/products?space=bathroom"
              onClick={() => navTo('products', { space: 'bathroom' })}
              className="p-3.5 bg-[#3D5542]/70 hover:bg-[#3D5542] border border-[#5D8264]/60 hover:border-emerald-400/60 rounded-xl text-left transition-all group cursor-pointer block"
            >
              <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-1 group-hover:text-white">
                <span>🛁</span>
                <span>Bathroom Shelves</span>
              </div>
              <p className="text-[11px] text-gray-300 leading-snug">
                Steam-resistant cascading vines & compact shelf succulents.
              </p>
            </Link>

            <Link
              href="/products?space=office"
              onClick={() => navTo('products', { space: 'office' })}
              className="p-3.5 bg-[#3D5542]/70 hover:bg-[#3D5542] border border-[#5D8264]/60 hover:border-emerald-400/60 rounded-xl text-left transition-all group cursor-pointer block"
            >
              <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-1 group-hover:text-white">
                <span>💼</span>
                <span>Workspaces & Desks</span>
              </div>
              <p className="text-[11px] text-gray-300 leading-snug">
                Biophilic tabletop greenery that looks completely real on desks.
              </p>
            </Link>

            <Link
              href="/products?space=dark-rooms"
              onClick={() => navTo('products', { space: 'dark-rooms' })}
              className="p-3.5 bg-[#3D5542]/70 hover:bg-[#3D5542] border border-[#5D8264]/60 hover:border-emerald-400/60 rounded-xl text-left transition-all group cursor-pointer block"
            >
              <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-1 group-hover:text-white">
                <span>🌑</span>
                <span>Dark & Low-Light Rooms</span>
              </div>
              <p className="text-[11px] text-gray-300 leading-snug">
                Zero-light tolerant greenery for basement suites and dim corridors.
              </p>
            </Link>

            <Link
              href="/products?space=pet-safe"
              onClick={() => navTo('products', { space: 'pet-safe' })}
              className="p-3.5 bg-[#3D5542]/70 hover:bg-[#3D5542] border border-[#5D8264]/60 hover:border-emerald-400/60 rounded-xl text-left transition-all group cursor-pointer block"
            >
              <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-1 group-hover:text-white">
                <span>🐾</span>
                <span>Pet-Friendly Living</span>
              </div>
              <p className="text-[11px] text-gray-300 leading-snug">
                Certified 100% non-toxic foliage safe for curious cats and dogs.
              </p>
            </Link>
          </div>
        </div>

        {/* Copyright & SEO Links with Real URLs */}
        <div className="pt-6 border-t border-[#3D5542] text-center text-xs text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Plantiqa Artificial Plants for Home. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-gray-300">
            <Link href="/contact" onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/contact" onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Support
            </Link>
            <span>•</span>
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-300 transition-colors cursor-pointer"
            >
              Sitemap.xml
            </a>
            <span>•</span>
            <a 
              href="/robots.txt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-300 transition-colors cursor-pointer"
            >
              Robots.txt
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
