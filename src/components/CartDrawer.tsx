import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Tag, Check, ArrowUpRight } from 'lucide-react';
import { CartItem, PageType } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onNavigate?: (page: PageType) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onNavigate,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 1499 || items.length === 0 ? 0 : 150;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VERDANT10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid promo code. Try "VERDANT10" for 10% off!');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckedOut(true);
    setTimeout(() => {
      setIsCheckedOut(false);
      onClose();
      alert('🎉 Order Placed Successfully! Thank you for elevating your space with Plantiqa.');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-end">
      <div className="bg-[#FAF8F5] w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl relative animate-slideInRight">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE5DC]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2C3B2E]" />
            <h2 className="font-serif text-xl font-bold text-[#1C281E]">Your Shopping Bag</h2>
            <span className="text-xs bg-[#EAE5DC] text-[#2C3B2E] px-2 py-0.5 rounded-full font-bold">
              {items.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-[#EAE5DC] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="my-3 p-3 bg-white rounded-xl border border-[#EAE5DC] text-xs">
          {subtotal >= 1499 ? (
            <p className="font-bold text-emerald-800 flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-600" /> You unlocked Free Express Shipping!
            </p>
          ) : (
            <p className="text-gray-600">
              Add <strong className="text-[#2C3B2E]">₹{(1499 - subtotal).toLocaleString('en-IN')}</strong> more for Free Shipping!
            </p>
          )}
          <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
            <div
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${Math.min((subtotal / 1499) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto space-y-4 py-2">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="text-sm font-semibold text-gray-600">Your bag is empty</p>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">Discover hyper-realistic, pet-safe plants to elevate your space.</p>
              {onNavigate && (
                <button
                  onClick={() => {
                    onNavigate('products');
                    onClose();
                  }}
                  className="px-5 py-2.5 bg-[#2C3B2E] text-white text-xs font-semibold rounded-full hover:bg-[#1E2B20] transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
                >
                  <span>Browse Plant Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#EAE5DC] shadow-xs"
              >
                <img
                  src={item.product.image}
                  alt={item.product.imageAlt || `${item.product.name} - ${item.product.categoryLabel}`}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-bold text-[#1C281E] truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs text-[#5C6E5E]">{item.product.height}</p>
                  <p className="font-serif font-bold text-[#2C3B2E] text-sm mt-1">
                    ₹{item.product.price.toLocaleString('en-IN')}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-0.5 text-xs font-bold">
                    <button onClick={() => onUpdateQty(item.product.id, -1)} className="hover:text-black cursor-pointer">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQty(item.product.id, 1)} className="hover:text-black cursor-pointer">+</button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-[#EAE5DC] space-y-3">
            
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo Code (e.g. VERDANT10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-3 py-2 bg-white rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#2C3B2E]"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-[#EAE5DC] hover:bg-[#DDD6C8] text-[#2C3B2E] font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Apply
              </button>
            </form>

            <div className="space-y-1.5 text-xs text-gray-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-emerald-800 font-semibold">
                  <span>10% Discount (VERDANT10)</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Express Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-[#1C281E] pt-2 border-t border-gray-200">
                <span>Total Due</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={handleSimulateCheckout}
              disabled={isCheckedOut}
              className="w-full py-4 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white font-bold text-sm rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50"
            >
              {isCheckedOut ? (
                <span>Processing Order...</span>
              ) : (
                <>
                  <span>Checkout Now (₹{total.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center text-[10px] text-gray-500 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>30-Day Money Back Guarantee • Encrypted Checkout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
