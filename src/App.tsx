import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { CartDrawer } from './components/CartDrawer';
import { PlantQuizModal } from './components/PlantQuizModal';
import { QuickViewModal } from './components/QuickViewModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem, PageType } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [catalogSpace, setCatalogSpace] = useState<string>('all');
  const [catalogCategory, setCatalogCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 } // Default 1 item so cart drawer starts with sample item
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleNavigate = (page: PageType, options?: { space?: string; category?: string }) => {
    if (options?.space !== undefined) setCatalogSpace(options.space);
    if (options?.category !== undefined) setCatalogCategory(options.category);
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C281E] font-sans antialiased selection:bg-[#2C3B2E] selection:text-white flex flex-col justify-between">
      
      {/* Navigation Header */}
      <Header
        activePage={activePage}
        onNavigate={(page) => handleNavigate(page)}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenQuickView={(prod) => setQuickViewProduct(prod)}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenQuickView={(prod) => setQuickViewProduct(prod)}
            onOpenQuiz={() => setIsQuizOpen(true)}
            initialSpace={catalogSpace}
            initialCategory={catalogCategory}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenQuickView={(prod) => setQuickViewProduct(prod)}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals & Drawers */}
      <PlantQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onNavigate={(page) => { setActivePage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onNavigate={(page) => { setActivePage(page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
      />

    </div>
  );
}
