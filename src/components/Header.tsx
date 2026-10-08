import React, { useState } from 'react';
import { ShoppingBag, Search, ShieldCheck, Menu, X, ArrowRight, Leaf } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenQuiz,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
      {/* Top Banner */}
      <div className="bg-[#4A6B50] text-[#F2F7F3] py-2 px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
            <span>✨ <strong>Free Express Shipping</strong> on orders over ₹1,499 | 30-Day Guarantee</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-[#D8E8DA]">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-200" /> 100% Pet Safe</span>
            <span>•</span>
            <span>🌿 Real-Touch™ Botanicals</span>
            {onOpenQuiz && (
              <>
                <span>•</span>
                <button onClick={onOpenQuiz} className="underline hover:text-white transition-colors cursor-pointer">
                  Plant Matcher Quiz
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A6B50] to-[#2F4232] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform border border-[#7A9E81]/30">
            <Leaf className="w-5.5 h-5.5 text-emerald-200 fill-emerald-300/30" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold text-[#202D22] tracking-tight block leading-none">
              Planti<span className="text-[#4A6B50] font-sans font-semibold">qa</span>
            </span>
            <span className="text-[10px] text-[#5D8264] uppercase font-semibold tracking-wider block font-sans mt-0.5">
              Artificial Plants for Home
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#4A6B50] text-white shadow-xs font-semibold'
                    : 'text-[#3B5542] hover:text-[#202D22] hover:bg-[#E2EFE4]/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('products')}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#3B5542] hover:text-[#202D22] bg-[#E2EFE4] hover:bg-[#C7DFC9] px-3.5 py-2 rounded-full transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Catalog</span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full text-[#202D22] hover:bg-[#E2EFE4] transition-colors cursor-pointer"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#4A6B50] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#202D22] hover:bg-[#E2EFE4] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] px-6 py-6 space-y-3 animate-fadeIn">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6B756E] mb-2">Navigation</p>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-[#4A6B50] text-white font-semibold'
                    : 'text-[#202D22] hover:bg-[#E2EFE4]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className={`w-4 h-4 ${isActive ? 'text-emerald-200' : 'text-gray-400'}`} />
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
