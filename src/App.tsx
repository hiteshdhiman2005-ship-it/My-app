import React, { useState, useEffect } from 'react';
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
import { RouterProvider, useRouter, Link } from './context/RouterContext';
import { Leaf, ArrowRight, ShoppingBag } from 'lucide-react';

function AppContent() {
  const {
    page,
    productId,
    product: routeProduct,
    blogSlug,
    spaceFilter,
    categoryFilter,
    navigate,
  } = useRouter();

  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 } // Default 1 item so cart drawer starts with sample item
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  // Sync route product to modal when direct URL like /products/prod-1 is loaded
  useEffect(() => {
    if (productId && routeProduct) {
      setModalProduct(routeProduct);
    } else if (!productId) {
      setModalProduct(null);
    }
  }, [productId, routeProduct]);

  const handleNavigate = (
    targetPage: PageType | string,
    options?: { space?: string; category?: string; productId?: string; blogSlug?: string }
  ) => {
    navigate(targetPage, options);
  };

  const handleOpenProduct = (prod: Product) => {
    setModalProduct(prod);
    navigate(`/products/${prod.id}`, { scrollToTop: false });
  };

  const handleCloseProduct = () => {
    setModalProduct(null);
    if (productId) {
      const params = new URLSearchParams();
      if (spaceFilter) params.set('space', spaceFilter);
      if (categoryFilter) params.set('category', categoryFilter);
      const qs = params.toString();
      navigate(qs ? `/products?${qs}` : '/products', { replace: true, scrollToTop: false });
    }
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

  const handleUpdateCartQty = (prodId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === prodId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (prodId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== prodId));
  };

  const activeHeaderPage: PageType = page === 'not-found' ? 'home' : page;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C281E] font-sans antialiased selection:bg-[#2C3B2E] selection:text-white flex flex-col justify-between">
      
      {/* Navigation Header with Real URLs */}
      <Header
        activePage={activeHeaderPage}
        onNavigate={(p) => handleNavigate(p)}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {page === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenQuickView={handleOpenProduct}
            onOpenQuiz={() => setIsQuizOpen(true)}
          />
        )}

        {page === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenQuickView={handleOpenProduct}
            onOpenQuiz={() => setIsQuizOpen(true)}
            initialSpace={spaceFilter || 'all'}
            initialCategory={categoryFilter || 'all'}
          />
        )}

        {page === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
          />
        )}

        {page === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onOpenQuickView={handleOpenProduct}
            initialSlug={blogSlug}
          />
        )}

        {page === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}

        {page === 'not-found' && (
          <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE5DC] shadow-md max-w-lg text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#2C3B2E] mx-auto flex items-center justify-center">
                <Leaf className="w-7 h-7 text-[#4A6B50]" />
              </div>
              <h1 className="font-serif text-3xl font-bold text-[#1C281E]">Page Not Found</h1>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The botanical page or product you're looking for could not be found or may have moved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/"
                  className="px-6 py-2.5 bg-[#2C3B2E] text-white text-xs font-bold rounded-full hover:bg-[#1E2B20] transition-colors"
                >
                  Return to Home
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-2.5 bg-white text-[#2C3B2E] border border-[#2C3B2E] text-xs font-bold rounded-full hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Browse Catalog</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer with Real URLs */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals & Drawers */}
      <PlantQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onAddToCart={handleAddToCart}
      />

      <QuickViewModal
        product={modalProduct}
        onClose={handleCloseProduct}
        onAddToCart={handleAddToCart}
        onNavigate={(p) => handleNavigate(p)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveCartItem}
        onNavigate={(p) => handleNavigate(p)}
      />

    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
