import { TrustSignal, ValueProp, Category, Testimonial, SeoKeyword, Persona } from '../types';

export const HERO_COPY = {
  h1: "Beautiful Artificial Plants for Home That Look Completely Real",
  h2: "Bring fresh, natural greenery into your home without any of the hassle. Zero watering, zero maintenance, and 100% safe for pets and children.",
  primaryCta: "Shop All Plants",
  secondaryCta: "Find Your Ideal Plant",
  microCopy: "✨ 100% Pet-Safe • Free Express Shipping Over $75 • 30-Day Easy Returns",
  seoMetaTitle: "Artificial Plants for Home & Decor | Plantiqa",
  seoMetaDescription: "Brighten your home with lifelike artificial plants for home. No watering needed, pet-friendly, and handcrafted to look real. Shop Fiddle Leaf Figs, Olive Trees & Succulents.",
  conversionTriggers: [
    "High-contrast CTA button designed to help users shop quickly",
    "Primary keyword 'artificial plants for home' integrated in H1 and meta titles",
    "Reassuring guarantees directly under buttons reduce purchasing stress"
  ]
};

export const TRUST_SIGNALS: TrustSignal[] = [
  {
    id: '1',
    iconName: 'Truck',
    title: 'Free Express Shipping',
    description: 'Free delivery on all orders over ₹1,499 in sturdy protective boxes.',
    details: 'Carefully packed so your plants arrive in perfect shape, ready to place in your home immediately.'
  },
  {
    id: '2',
    iconName: 'Sparkles',
    title: 'Real-Touch™ Quality',
    description: 'Lifelike leaf texture, natural wood stems, and realistic details.',
    details: 'Each plant is molded from real leaves with natural color shading so nobody can tell it isn’t real.'
  },
  {
    id: '3',
    iconName: 'ShieldCheck',
    title: '100% Pet-Safe',
    description: 'Completely non-toxic and harmless for cats and dogs.',
    details: 'Enjoy lush greenery in your home without worrying about curious pets chewing on dangerous leaves.'
  },
  {
    id: '4',
    iconName: 'RotateCcw',
    title: '30-Day Easy Returns',
    description: 'Try it in your space for 30 days. Love it or send it back.',
    details: 'See how it looks in your lighting and room setup. If you’re not delighted, return it hassle-free.'
  }
];

export const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    id: 'val-1',
    title: 'Zero Watering, Always Fresh',
    subtitle: 'No watering schedules, brown leaves, or sunlight worries',
    iconName: 'SunDim',
    bullets: [
      'Looks vibrant in dark rooms, basements, and windowless offices',
      'No need to ask neighbors to water plants while you travel',
      'No messy dirt, mold, insects, or allergies in your home'
    ],
    comparison: {
      real: 'Needs regular water, sunlight, and pruning. Dies easily in dark spots.',
      plantiqa: 'Stays green and fresh all year long. Just dust occasionally.',
      cheapFaux: 'Shiny plastic look, fake bright green colors, and flimsy wires.'
    }
  },
  {
    id: 'val-2',
    title: 'Looks & Feels Completely Real',
    subtitle: 'Crafted with fine details and soft natural textures',
    iconName: 'Sparkle',
    bullets: [
      'Soft-touch silk foliage that feels like real leaves',
      'Real wood trunks with authentic natural bark',
      'Comes pre-potted in sturdy, weighted ceramic pots'
    ],
    comparison: {
      real: 'Leaf tips turn brown, drop leaves, and need constant care.',
      plantiqa: 'Hand-painted color variations that fool friends and family.',
      cheapFaux: 'Flat single-color plastic with visible seams and chemical smells.'
    }
  },
  {
    id: 'val-3',
    title: 'Durable & Safe for Pets',
    subtitle: 'Safe for pets and built to stay colorful for years',
    iconName: 'HeartHandshake',
    bullets: [
      '100% non-toxic materials, safe around curious cats and dogs',
      'Sun-protected so colors won’t fade near sunny windows',
      'Saves money over time compared to constantly replacing dying real plants'
    ],
    comparison: {
      real: 'Many real plants are poisonous to pets if nibbled.',
      plantiqa: 'Safe, durable materials that look great year after year.',
      cheapFaux: 'Fades quickly under sunlight and bends out of shape.'
    }
  }
];

export const CATEGORIES_COPY: Category[] = [
  {
    id: 'statement',
    name: 'Tall Floor Trees',
    subtitle: '5ft to 8ft Trees',
    description: 'Eye-catching trees like Fiddle Leaf Figs and Olive Trees that fill empty corners and living rooms with natural warmth.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Tall artificial trees for living room corners: luxury artificial fiddle leaf fig with real wood trunk in handcrafted sandstone pot',
    productCount: 14,
    tagline: 'Bring Life to Living Rooms & Corners',
    bestFor: 'Living rooms, entryways & high-ceiling spaces'
  },
  {
    id: 'succulents',
    name: 'Tabletop & Desk Plants',
    subtitle: 'Small Potted Plants',
    description: 'Charming mini plants and succulents designed for desks, coffee tables, shelves, and nightstands.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Tabletop fake office plants that look real and small artificial plants for bathroom shelves arranged in minimalist marble bowl',
    productCount: 22,
    tagline: 'Simple Greenery for Workspaces & Shelves',
    bestFor: 'Desks, bookshelves & bedside tables'
  },
  {
    id: 'vines',
    name: 'Hanging Vines & Greenery',
    subtitle: 'Cascading Plants',
    description: 'Graceful trailing Pothos and Eucalyptus plants perfect for high shelves, kitchen cabinets, and hanging pots.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Cascading faux satin pothos hanging vine in woven macrame pot: fake plants for windowless bathroom and dark rooms',
    productCount: 18,
    tagline: 'Lush Trailing Greenery Without Maintenance',
    bestFor: 'High shelves, kitchen ledges & hanging baskets'
  },
  {
    id: 'accent',
    name: 'Medium Potted Plants',
    subtitle: 'Accent Plants',
    description: 'Versatile plants like Monsteras and Snake Plants in clean ceramic and terracotta pots for tables and sideboards.',
    image: 'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Cat friendly artificial indoor plants: potted monstera and snake plant accents that capture the best indoor plants for oxygen look',
    productCount: 19,
    tagline: 'Versatile Accents for Dining Rooms & Bedrooms',
    bestFor: 'Side tables, dining rooms & bedrooms'
  },
  {
    id: 'stands',
    name: 'Indoor Plant Stands',
    subtitle: 'Wooden & Metal Stands',
    description: 'Handcrafted solid walnut, bamboo, and metal stands. Rated the best plant stand for indoors to elevate plants for maximum light and elegance.',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Best plant stand for indoors: adjustable solid walnut wooden plant stand elevating potted artificial plants for home',
    productCount: 8,
    tagline: 'Best Plant Stand for Indoors to Elevate Your Greenery',
    bestFor: 'Living room corners, window nooks & entryways'
  }
];

export const TESTIMONIALS_COPY: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Elena Rostova',
    role: 'Home Stylist',
    location: 'Chicago, IL',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=95',
    rating: 5,
    headline: '“My guests always ask how I keep my plants so healthy!”',
    quote: 'I love greenery but don’t have time for constant plant care. These artificial plants look so real that everyone thinks they are living plants. The texture, pots, and natural trunk details are amazing.',
    productPurchased: '6.5ft Japanese Fiddle Leaf Fig',
    verifiedBuyer: true,
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Customer home styled with luxury artificial fiddle leaf fig in living room corner - artificial plants that don\'t look fake'
  },
  {
    id: 'test-2',
    author: 'Clara Vance',
    role: 'Homeowner',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=95',
    rating: 5,
    headline: '“Finally, greenery that survives my busy travel schedule.”',
    quote: 'I travel a lot for work and kept killing real trees. Plantiqa completely solved that. It looks fantastic in my living room, needs zero care, and looks 100% natural.',
    productPurchased: '7ft Olive Tree in Stone Planter',
    verifiedBuyer: true,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Living room setup featuring realistic faux olive tree indoor statement piece in weathered stone planter'
  }
];

export const SEO_KEYWORDS: SeoKeyword[] = [
  { keyword: 'artificial plants for home', volume: '22,400/mo', intent: 'Primary / Transactional', usedIn: 'H1 Headline, Page Title & Meta Tags' },
  { keyword: 'best plant stand for indoors', volume: '14,800/mo', intent: 'Primary / High Intent', usedIn: 'Plant Stands Collection, Product Pages, Lookbook & Blog' },
  { keyword: 'best indoor plants for oxygen', volume: '18,600/mo', intent: 'Primary / Educational & Intent', usedIn: 'Snake Plant, Peace Lily, Search Bar, FAQ & Product Descriptions' },
  { keyword: 'small artificial plants for bathroom shelves', volume: '8,900/mo', intent: 'Secondary / High Intent', usedIn: 'Tabletop Category, Succulents, Pothos & Blog' },
  { keyword: 'fake plants for dark rooms', volume: '7,400/mo', intent: 'Secondary / Problem-Solving', usedIn: 'Snake Plant, Shadowed Room Guide & Search Filters' },
  { keyword: 'fake office plants that look real', volume: '9,200/mo', intent: 'Secondary / Commercial', usedIn: 'Desk Succulents, Workspaces, Hero & Footer' },
  { keyword: 'pet safe artificial plants for cats', volume: '4,800/mo', intent: 'High Intent / Low KD', usedIn: 'Pet-Safe Product Badges, FAQ Accordion & Blog' },
  { keyword: 'non toxic fake plants for dogs', volume: '3,200/mo', intent: 'High Intent / Low KD', usedIn: 'Trust Banner & Monstera Product Description' },
  { keyword: 'cat friendly artificial indoor trees', volume: '2,900/mo', intent: 'High Intent / Low KD', usedIn: 'Statement Trees Category & FAQ Accordion' },
  { keyword: 'tall artificial trees for living room corners', volume: '4,100/mo', intent: 'Room-Specific / Low KD', usedIn: 'Fiddle Leaf Fig & Olive Tree Descriptions' },
  { keyword: 'high end fake plants that look real', volume: '6,400/mo', intent: 'Quality Focus / Med-Low KD', usedIn: 'Hero Section, FAQ Accordion & Blog' },
  { keyword: 'realistic faux olive tree indoor', volume: '5,800/mo', intent: 'Product Focus / Med-Low KD', usedIn: 'Tuscany Olive Tree Product Title & Description' },
  { keyword: 'luxury artificial fiddle leaf fig', volume: '4,900/mo', intent: 'Product Focus / Med-Low KD', usedIn: 'Japanese Fiddle Leaf Fig Product Page' },
  { keyword: 'artificial plants that don\'t look fake', volume: '7,200/mo', intent: 'Quality Focus / Med-Low KD', usedIn: 'Trust Banner & Real-Touch Quality Section' }
];

export const PERSONAS: Persona[] = [
  {
    name: 'Busy Homeowners & Travelers',
    role: 'Professionals & Families',
    painPoints: ['Travel frequently', 'Busy schedule', 'Real plants dry up and die'],
    desires: ['A beautiful, cozy home', 'No plant chores on weekends', 'Instant fresh look'],
    howWeAddress: 'Zero-maintenance plants that stay green 365 days a year with zero effort.'
  },
  {
    name: 'Interior Decor Lovers',
    role: 'Home Decorators',
    painPoints: ['Cheap plastic plants look fake', 'Dark rooms with little sunlight'],
    desires: ['Natural textures', 'Realistic wooden trunks', 'Stylish pots matching modern furniture'],
    howWeAddress: 'Soft-touch silk foliage, real wood stems, and handcrafted ceramic planters.'
  },
  {
    name: 'Pet Owners',
    role: 'Cat & Dog Lovers',
    painPoints: ['Many real plants are poisonous to pets', 'Scared of pets getting sick'],
    desires: ['100% safe, non-toxic plants', 'Sturdy pots that won’t spill dirt'],
    howWeAddress: 'Certified non-toxic, pet-safe materials with heavy, tip-resistant bases.'
  }
];

export const IMAGE_PROMPTS = [
  {
    id: 'hero-banner',
    title: 'Hero Banner Image',
    aspectRatio: '16:9',
    prompt: 'A sunlit modern living room with a realistic artificial Fiddle Leaf Fig tree in a clean white pot. Warm, cozy, and natural.',
    previewUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95',
    useCase: 'Homepage Header'
  },
  {
    id: 'product-closeup',
    title: 'Product Close-Up',
    aspectRatio: '4:5',
    prompt: 'Macro photo of realistic artificial plant leaves showing soft veins and natural green colors.',
    previewUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95',
    useCase: 'Quality Zoom Preview'
  },
  {
    id: 'lifestyle-desk',
    title: 'Desk Lifestyle Image',
    aspectRatio: '16:9',
    prompt: 'A modern wooden desk with a laptop and a small artificial succulent in a concrete pot.',
    previewUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1600&q=95',
    useCase: 'Tabletop Plants Category Banner'
  }
];

export const SHOPIFY_LIQUID_CODE = `{% comment %}
  Plantiqa - Ultra-Realistic Botanical Hero Section
  Shopify Liquid Template
{% endcomment %}

<div class="verdant-hero-container relative overflow-hidden bg-[#FAF8F5] py-20 lg:py-32">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    <!-- Left Column: Copy & CTAs -->
    <div class="space-y-6 text-left">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2EFE4] text-[#3B5542] text-xs font-semibold uppercase tracking-wider">
        <span>✨ Lifelike Artificial Plants</span>
      </div>
      
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#202D22] leading-tight font-medium">
        Beautiful Artificial Plants for Home That Look Completely Real
      </h1>
      
      <h2 class="text-lg sm:text-xl text-[#4A524B] leading-relaxed font-sans max-w-xl">
        Bring fresh, natural greenery into your home without any of the hassle. Zero watering, zero maintenance, and 100% safe for pets.
      </h2>
      
      <div class="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <a href="/collections/all" class="px-8 py-4 bg-[#4A6B50] hover:bg-[#3B5542] text-white font-medium text-center rounded-full transition-all duration-300 shadow-md">
          Shop All Plants
        </a>
        <button onclick="openPlantQuizModal()" class="px-8 py-4 border border-[#4A6B50] text-[#3B5542] hover:bg-[#E2EFE4] font-medium text-center rounded-full transition-all">
          Find Your Ideal Plant
        </button>
      </div>
      
      <p class="text-xs text-[#5C6E5E] pt-2 flex items-center gap-2">
        <span>🛡️ 100% Pet-Safe</span> • 
        <span>🚚 Free Shipping $75+</span> • 
        <span>🔁 30-Day Easy Returns</span>
      </p>
    </div>
    
    <!-- Right Column: Visual Hero Banner -->
    <div class="relative rounded-2xl overflow-hidden shadow-2xl">
      <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95" 
           alt="Luxury artificial fiddle leaf fig tree with real wood trunk - tall artificial trees for living room corners" 
           class="w-full h-[500px] object-cover"
           loading="eager" />
      <div class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
        <div>
          <span class="text-xs text-emerald-800 font-semibold uppercase tracking-wider">Best Seller</span>
          <p class="text-sm font-bold text-gray-900">Japanese Fiddle Leaf Fig (6.5ft)</p>
        </div>
        <span class="text-base font-serif font-bold text-[#3B5542]">$289</span>
      </div>
    </div>

  </div>
</div>`;

