import React, { useState } from 'react';
import { ShieldCheck, Truck, RotateCcw, Heart, Send, Check, Leaf } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const navTo = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2F4232] text-[#FAF8F5] pt-16 pb-12 border-t border-[#4A6B50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Guarantee Strip */}
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
            <button 
              onClick={() => navTo('home')} 
              className="text-left flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-[#3D5542] text-white flex items-center justify-center border border-[#5D8264]">
                <Leaf className="w-5 h-5 text-emerald-200 fill-emerald-300/30" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Planti<span className="text-emerald-300 font-sans font-semibold">qa</span>
              </span>
            </button>
            <p className="text-xs text-gray-300 leading-relaxed">
              Real-Touch™ artificial plants for home. Handcrafted foliage with natural wood trunks, zero watering, and non-toxic materials.
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-emerald-300 uppercase tracking-wider">Explore Pages</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => navTo('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => navTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Product Catalog
                </button>
              </li>
              <li>
                <button onClick={() => navTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  Design Services
                </button>
              </li>
              <li>
                <button onClick={() => navTo('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Botanical Blog
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Botanical Collections */}
          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-emerald-300 uppercase tracking-wider">Featured Collections</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => navTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Statement Floor Trees
                </button>
              </li>
              <li>
                <button onClick={() => navTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Desktop & Shelf Succulents
                </button>
              </li>
              <li>
                <button onClick={() => navTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Cascading Hanging Vines
                </button>
              </li>
              <li>
                <button onClick={() => navTo('products')} className="hover:text-white transition-colors cursor-pointer">
                  Architectural Ceramic Planters
                </button>
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
                <span>Thank you! Check your inbox for code <strong>VERDANT10</strong>.</span>
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

        {/* Secondary SEO Keywords Tag Cloud */}
        <div className="pt-8 border-t border-[#3D5542] space-y-3">
          <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-emerald-300">
            Popular Secondary Plant Searches
          </h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { label: 'Small artificial plants for bathroom shelves', target: 'products' },
              { label: 'Fake plants for dark rooms', target: 'products' },
              { label: 'Fake office plants that look real', target: 'products' },
              { label: 'Pet-safe artificial plants for cats', target: 'products' },
              { label: 'Non-toxic fake plants for dogs', target: 'products' },
              { label: 'Tall artificial trees for living room corners', target: 'products' }
            ].map((kw) => (
              <button
                key={kw.label}
                onClick={() => navTo(kw.target as PageType)}
                className="px-3 py-1 bg-[#3D5542] hover:bg-[#4A6B50] text-emerald-200 hover:text-white rounded-full text-[11px] transition-colors border border-[#5D8264] cursor-pointer"
              >
                🌿 {kw.label}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#3D5542] text-center text-xs text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Plantiqa Artificial Plants for Home. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-gray-300">
            <button onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => navTo('contact')} className="hover:text-white transition-colors cursor-pointer">
              Support
            </button>
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
