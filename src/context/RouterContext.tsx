import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { PageType, Product, BlogPost } from '../types';
import { PRODUCTS } from '../data/products';
import { BLOG_POSTS } from '../data/blogData';

export interface RouteInfo {
  pathname: string;
  search: string;
  page: PageType | 'not-found';
  productId: string | null;
  product: Product | null;
  blogSlug: string | null;
  blogPost: BlogPost | null;
  spaceFilter: string | null;
  categoryFilter: string | null;
  queryParams: Record<string, string>;
}

export interface NavigateOptions {
  replace?: boolean;
  scrollToTop?: boolean;
  space?: string;
  category?: string;
  productId?: string;
  blogSlug?: string;
}

export type NavigateTarget =
  | string
  | PageType
  | {
      page: PageType;
      space?: string;
      category?: string;
      productId?: string;
      blogSlug?: string;
    };

interface RouterContextValue extends RouteInfo {
  navigate: (target: NavigateTarget, options?: NavigateOptions) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function parseCurrentRoute(): RouteInfo {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const search = typeof window !== 'undefined' ? window.location.search : '';

  const params = new URLSearchParams(search);
  const queryParams: Record<string, string> = {};
  params.forEach((value, key) => {
    queryParams[key] = value;
  });

  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  const segments = cleanPath.split('/').filter(Boolean);

  let page: PageType | 'not-found' = 'home';
  let productId: string | null = null;
  let blogSlug: string | null = null;

  if (segments.length === 0 || segments[0] === 'home') {
    page = 'home';
  } else if (segments[0] === 'products') {
    page = 'products';
    if (segments[1]) {
      productId = segments[1];
    }
  } else if (segments[0] === 'services') {
    page = 'services';
  } else if (segments[0] === 'blog') {
    page = 'blog';
    if (segments[1]) {
      blogSlug = segments[1];
    }
  } else if (segments[0] === 'contact') {
    page = 'contact';
  } else {
    // Check if direct product ID was typed e.g. /prod-1
    const matchingProduct = PRODUCTS.find((p) => p.id === segments[0]);
    if (matchingProduct) {
      page = 'products';
      productId = matchingProduct.id;
    } else {
      page = 'not-found';
    }
  }

  const product = productId ? PRODUCTS.find((p) => p.id === productId) || null : null;
  const blogPost = blogSlug ? BLOG_POSTS.find((b) => b.slug === blogSlug || b.id === blogSlug) || null : null;

  const spaceFilter = queryParams.space || (queryParams.room || null);
  const categoryFilter = queryParams.category || null;

  return {
    pathname: cleanPath,
    search,
    page,
    productId,
    product,
    blogSlug,
    blogPost,
    spaceFilter,
    categoryFilter,
    queryParams,
  };
}

function buildUrl(target: NavigateTarget, options?: NavigateOptions): string {
  if (typeof target === 'string') {
    // Check if target is a simple page identifier like 'products' or 'services'
    if (['home', 'products', 'services', 'blog', 'contact'].includes(target)) {
      return buildUrl({ page: target as PageType, ...options });
    }
    return target;
  }

  const page = typeof target === 'object' ? target.page : target;
  const space = (typeof target === 'object' ? target.space : undefined) || options?.space;
  const category = (typeof target === 'object' ? target.category : undefined) || options?.category;
  const productId = (typeof target === 'object' ? target.productId : undefined) || options?.productId;
  const blogSlug = (typeof target === 'object' ? target.blogSlug : undefined) || options?.blogSlug;

  if (page === 'home') return '/';
  if (page === 'services') return '/services';
  if (page === 'contact') return '/contact';

  if (page === 'products') {
    if (productId) {
      return `/products/${encodeURIComponent(productId)}`;
    }
    const params = new URLSearchParams();
    if (category && category !== 'all') params.set('category', category);
    if (space && space !== 'all') params.set('space', space);
    const qs = params.toString();
    return qs ? `/products?${qs}` : '/products';
  }

  if (page === 'blog') {
    if (blogSlug) {
      return `/blog/${encodeURIComponent(blogSlug)}`;
    }
    const params = new URLSearchParams();
    if (category && category !== 'All' && category !== 'all') params.set('category', category);
    const qs = params.toString();
    return qs ? `/blog?${qs}` : '/blog';
  }

  return '/';
}

function updateDocumentMeta(route: RouteInfo) {
  if (typeof document === 'undefined') return;

  let title = 'Plantiqa | Ultra-Realistic Artificial Plants & Modern Botanicals';
  let description =
    'Shop Plantiqa for ultra-realistic artificial plants. Enjoy zero watering, 100% pet-friendly foliage, and handcrafted luxury trees with free express shipping.';

  const baseUrl = 'https://plantiqa.vercel.app';
  let canonicalPath = route.pathname;

  if (route.page === 'home') {
    title = 'Plantiqa | Ultra-Realistic Artificial Plants & Modern Botanicals';
    canonicalPath = '/';
  } else if (route.page === 'products') {
    if (route.product) {
      title = `${route.product.name} | Plantiqa`;
      description = route.product.description;
      canonicalPath = `/products/${route.product.id}`;
    } else if (route.spaceFilter) {
      const spaceNames: Record<string, string> = {
        'bathroom': 'Bathroom Shelves & Moisture',
        'living-room': 'Living Room Corners',
        'office': 'Executive Desks & Workspaces',
        'dark-rooms': 'Dark & Windowless Rooms',
        'pet-safe': 'Pet-Safe Botanicals',
      };
      const spaceName = spaceNames[route.spaceFilter] || route.spaceFilter;
      title = `${spaceName} Botanicals | Plantiqa`;
      canonicalPath = `/products?space=${route.spaceFilter}`;
    } else if (route.categoryFilter) {
      title = `${route.categoryFilter.charAt(0).toUpperCase() + route.categoryFilter.slice(1)} Collection | Plantiqa`;
      canonicalPath = `/products?category=${route.categoryFilter}`;
    } else {
      title = 'Shop Realistic Artificial Plants & Faux Botanicals | Plantiqa';
      description =
        'Explore luxury artificial fiddle leaf fig trees, realistic faux olive trees, tabletop succulents, and pet-friendly indoor botanicals.';
      canonicalPath = '/products';
    }
  } else if (route.page === 'services') {
    title = 'Commercial & Residential Plant Styling Services | Plantiqa';
    description =
      'Custom artificial plant styling for luxury homes, restaurants, corporate offices, and hospitality venues. White-glove staging and tailored arrangements.';
    canonicalPath = '/services';
  } else if (route.page === 'blog') {
    if (route.blogPost) {
      title = `${route.blogPost.title} | Plantiqa Blog`;
      description = route.blogPost.excerpt;
      canonicalPath = `/blog/${route.blogPost.slug}`;
    } else {
      title = 'Botanical Journal & Plant Styling Guides | Plantiqa Blog';
      description =
        'Discover interior styling ideas, low-light decor advice, pet safety tips, and biophilic design inspiration.';
      canonicalPath = '/blog';
    }
  } else if (route.page === 'contact') {
    title = 'Contact Concierge & Consultation | Plantiqa';
    description =
      'Connect with the Plantiqa interior styling team for trade accounts, custom potting orders, or order inquiries.';
    canonicalPath = '/contact';
  } else {
    title = 'Page Not Found (404) | Plantiqa';
  }

  document.title = title;

  // Update canonical link tag
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', `${baseUrl}${canonicalPath}`);

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }

  // Update OpenGraph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', `${baseUrl}${canonicalPath}`);
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RouteInfo>(parseCurrentRoute);

  const updateRoute = useCallback(() => {
    const newRoute = parseCurrentRoute();
    setRoute(newRoute);
    updateDocumentMeta(newRoute);
  }, []);

  useEffect(() => {
    // Initial meta tag update
    updateDocumentMeta(route);

    const handlePopState = () => {
      updateRoute();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [updateRoute, route]);

  const navigate = useCallback(
    (target: NavigateTarget, options?: NavigateOptions) => {
      const url = buildUrl(target, options);

      if (options?.replace) {
        window.history.replaceState(null, '', url);
      } else {
        window.history.pushState(null, '', url);
      }

      updateRoute();

      if (options?.scrollToTop !== false) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [updateRoute]
  );

  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      navigate('/');
    }
  }, [navigate]);

  const value = useMemo<RouterContextValue>(
    () => ({
      ...route,
      navigate,
      goBack,
    }),
    [route, navigate, goBack]
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  replace?: boolean;
  scrollToTop?: boolean;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  replace = false,
  scrollToTop = true,
  onClick,
  children,
  target,
  ...rest
}) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If user clicked with modifier key or target is blank, allow native browser navigation
    if (
      !e.defaultPrevented &&
      e.button === 0 && // Left click
      (!target || target === '_self') &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey
    ) {
      e.preventDefault();
      navigate(href, { replace, scrollToTop });
    }
  };

  return (
    <a href={href} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
