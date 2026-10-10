import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Royal Japanese Fiddle Leaf Fig Tree',
    category: 'statement',
    categoryLabel: 'Statement Floor Plants',
    price: 4999,
    originalPrice: 5999,
    rating: 4.9,
    reviewCount: 128,
    height: '6.5 Feet (78 in)',
    potType: 'Handcrafted Sandstone Ceramic Pot with Natural Moss',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Luxury artificial fiddle leaf fig tree with real wood trunk in sandstone ceramic pot designed for living room corners',
    gallery: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Close-up texture of Real-Touch silk fiddle leaf fig leaves with hand-painted veining',
      'Architectural fiddle leaf fig tree displayed in sunlit living room corner next to modern sofa',
      'Handcrafted sandstone ceramic pot with natural moss base supporting fiddle leaf fig'
    ],
    description: 'This luxury artificial fiddle leaf fig features 48 Real-Touch™ silk leaves with hand-painted veining and an organic timber trunk. Handcrafted to bring vibrant botanical height to living room corners, open foyers, and sunrooms without shedding or browning.',
    features: [
      'Architectural 6.5-foot height ideally proportioned for living room corners and tall ceilings',
      'Naturally twisted genuine timber trunk with realistic organic bark texture',
      'UV-inhibited silk foliage prevents yellowing in bright living room windows',
      'Certified non-toxic and pet-safe for households with curious cats and dogs'
    ],
    isBestSeller: true,
    isPetSafe: true,
    badge: 'Most Popular',
    spaces: ['living-room', 'pet-safe'],
    idealRooms: ['Living Room Corners', 'High-Ceiling Foyers', 'Sunlit Alcoves']
  },
  {
    id: 'prod-2',
    name: 'Tuscany Faux Olive Tree in Aged Stone Planter',
    category: 'statement',
    categoryLabel: 'Statement Floor Plants',
    price: 5499,
    originalPrice: 6499,
    rating: 5.0,
    reviewCount: 94,
    height: '7.0 Feet (84 in)',
    potType: 'Weathered Tuscan Terracotta Pot',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Realistic faux olive tree indoor statement piece with silvery leaves and olives in weathered Tuscan terracotta pot',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Detail of delicate faux olive tree branches with silvery-green silk foliage and lifelike fruits',
      'Tuscany faux olive tree styled in luxury dining room alcove and living room corner'
    ],
    description: 'A realistic faux olive tree indoor statement piece adorned with silvery-green leaves and subtle botanical olive fruits. Engineered to bring serene Mediterranean elegance to living room corners, dining alcoves, and open-plan seating areas.',
    features: [
      'Bespoke Mediterranean olive tree styling with natural silvery underside leaf detailing',
      'Delicate hand-clustered faux olive fruits with organic tonal gradations',
      'Pre-weighted anti-topple stone pot ensures stability around pets and robots',
      'Real-Touch™ silk foliage engineered to look completely indistinguishable from living trees'
    ],
    isBestSeller: true,
    isPetSafe: true,
    badge: 'Editor’s Pick',
    spaces: ['living-room', 'pet-safe'],
    idealRooms: ['Living Room Corners', 'Dining Room Alcoves', 'Open Plan Lounges']
  },
  {
    id: 'prod-3',
    name: 'Architectural Echeveria & Aloe Succulent Arrangement',
    category: 'succulents',
    categoryLabel: 'Desk & Tabletop Succulents',
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviewCount: 210,
    height: '10 Inches',
    potType: 'Minimalist Matte Marble Bowl',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Tabletop faux succulents in minimalist marble bowl styled on bathroom shelves and executive office desks',
    gallery: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Overhead view of lifelike echeveria rosettes and mini aloe planted with real polished river stones',
      'Modern workspace styling featuring lifelike desk succulents in minimalist marble bowl'
    ],
    description: 'A serene tabletop arrangement of rubberized rosettes and miniature aloe in an Italian marble bowl. Designed specifically for compact spaces where live plants struggle, offering lush botanical warmth for small bathroom shelves, dark rooms, and executive office desks.',
    features: [
      'Lifelike succulent rosettes with soft velvety Real-Touch™ tactile finish',
      'Compact 10-inch footprint engineered for bathroom shelves, vanity ledges, and floating niches',
      'Zero-light tolerance keeps foliage permanently lush in dark rooms and windowless offices',
      'Solid Italian marble bowl layered with authentic hand-polished river stones'
    ],
    isBestSeller: false,
    isPetSafe: true,
    badge: 'Desk Essential',
    spaces: ['bathroom', 'office', 'dark-rooms', 'pet-safe'],
    idealRooms: ['Bathroom Shelves', 'Executive Desks', 'Floating Bookshelves', 'Dark Rooms']
  },
  {
    id: 'prod-4',
    name: 'Cascading Satin Pothos in Macramé Hanger',
    category: 'vines',
    categoryLabel: 'Lush Hanging & Cascading Vines',
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviewCount: 86,
    height: '36 Inch Vine Cascade',
    potType: 'Woven Cotton Macramé & Ceramic Pot',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Cascading faux satin pothos hanging vine in woven macrame pot for bathroom shelves and dark rooms',
    gallery: [
      'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Detail of trailing heart-shaped satin pothos leaves with natural silver variegation',
      'Hanging faux pothos vine styled above ceramic bath vanity ledge and shower shelf'
    ],
    description: 'Heart-shaped satin leaves cascading naturally over 3 feet. Crafted for small artificial plants for bathroom shelves, shower ledges, and high kitchen cabinets where natural humidity and low sunlight cause living plants to wither.',
    features: [
      '36-inch trailing length with organically flexible cascading vine stems',
      'Moisture-impervious polymer leaves designed for bathroom shelves, shower ledges, and humid powder rooms',
      'Natural silver variegation brightens windowless hallways and low-light dark rooms',
      '100% non-toxic construction safe for curious cats and playful puppies'
    ],
    isBestSeller: true,
    isPetSafe: true,
    spaces: ['bathroom', 'dark-rooms', 'pet-safe'],
    idealRooms: ['Bathroom Shelves', 'Shower Niches', 'High Kitchen Cabinets', 'Dark Hallways']
  },
  {
    id: 'prod-5',
    name: 'Potted Monstera Deliciosa (Swiss Cheese Plant)',
    category: 'accent',
    categoryLabel: 'Architectural Accent Planters',
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviewCount: 154,
    height: '42 Inches',
    potType: 'Ribbed White Ceramic Pot',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Pet-friendly artificial monstera deliciosa plant with split tropical leaves in ribbed white ceramic pot',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'High gloss split leaves of artificial monstera deliciosa Swiss cheese plant with natural fenestrations',
      'Pet-safe potted monstera plant displayed in sunny modern living room'
    ],
    description: 'Iconic split leaves with glossy tropical green finishes modeled after the Swiss Cheese plant. While live Monsteras contain toxic calcium oxalate crystals dangerous to pets, this pet-safe artificial alternative offers dramatic tropical beauty with total peace of mind.',
    features: [
      'Deep botanical fenestrations with natural leaf splits and subtle ribbing',
      'Certified non-toxic and hypoallergenic for households with curious cats and dogs',
      'Ribbed matte white ceramic pot pre-set with preserved natural woodland moss',
      'Dust-repellent anti-static finish keeps tropical leaves vibrant with minimal cleaning'
    ],
    isBestSeller: false,
    isPetSafe: true,
    badge: 'Pet Friendly',
    spaces: ['living-room', 'office', 'pet-safe'],
    idealRooms: ['Living Room Sideboards', 'Executive Offices', 'Pet-Friendly Lounges']
  },
  {
    id: 'prod-6',
    name: 'Modern Snake Plant (Sansevieria Trifasciata)',
    category: 'accent',
    categoryLabel: 'Architectural Accent Planters',
    price: 1999,
    originalPrice: 2499,
    rating: 4.8,
    reviewCount: 72,
    height: '38 Inches',
    potType: 'Mid-Century Terracotta Pot with Wooden Stand',
    image: 'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Architectural faux snake plant in terracotta pot with wooden stand for dark rooms and modern offices',
    gallery: [
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Upright sword leaves of artificial sansevieria snake plant capturing realistic banding',
      'Modern potted snake plant styled in dim entryway on walnut stand'
    ],
    description: 'Upright architectural sword leaves featuring rich deep green banding and sunny yellow margins. Modeled after the beloved Sansevieria, this lifelike botanical brings sculptural structure to dark rooms, executive workspaces, and windowless hallways where natural light is unavailable.',
    features: [
      'High-density structural polymer stems capture authentic upright sword silhouette',
      'Engineered for dark rooms, basement suites, and windowless bathrooms where live plants fade',
      'Professional biophilic accent for corporate desks, conference rooms, and credenzas',
      'Includes mid-century solid wood elevated stand with non-scratch protective feet',
      'Never yellows, drops leaves, or attracts soil gnats and moisture molds'
    ],
    isBestSeller: false,
    isPetSafe: true,
    spaces: ['dark-rooms', 'office', 'living-room', 'pet-safe'],
    idealRooms: ['Dark Rooms & Basements', 'Office Reception & Desks', 'Entryway Consoles']
  },
  {
    id: 'prod-7',
    name: 'Artisan Natural Botanical Foliage Collection',
    category: 'succulents',
    categoryLabel: 'Desk & Tabletop Succulents',
    price: 1499,
    originalPrice: 1899,
    rating: 5.0,
    reviewCount: 43,
    height: '24 Inches',
    potType: 'Handcrafted Terracotta Vessel',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Handcrafted terracotta vessel with organic faux botanical foliage for bathroom shelves and desk workspaces',
    gallery: [
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Detailed botanical foliage texture and earthy terracotta vessel finish of high end faux plants',
      'Sideboard styling with artisan botanical foliage collection in dim living room hallway'
    ],
    description: 'A curated botanical foliage arrangement featuring Real-Touch™ organic textures in an artisan terracotta clay vessel. Compact and balanced, it serves as an ideal accent for small bathroom shelves, powder room counters, and dim hallway consoles.',
    features: [
      'Handcrafted terracotta vessel with authentic kiln-fired rustic texture',
      'Compact footprint tailored for small bathroom shelves, vanity ledges, and bedside tables',
      'Real-Touch™ multi-tonal greenery that maintains rich color in low-light spaces and dark rooms',
      'Inert, non-toxic botanicals completely safe for curious household pets'
    ],
    isBestSeller: true,
    isPetSafe: true,
    badge: 'New Arrival',
    spaces: ['bathroom', 'office', 'dark-rooms', 'pet-safe'],
    idealRooms: ['Bathroom Shelves', 'Vanity Counters', 'Desk Workspaces', 'Floating Shelves']
  },
  {
    id: 'prod-8',
    name: 'Zen Studio Botanical Fern & Bamboo Grove',
    category: 'statement',
    categoryLabel: 'Statement Floor Plants',
    price: 3499,
    originalPrice: 4299,
    rating: 4.9,
    reviewCount: 38,
    height: '52 Inches',
    potType: 'Custom Matte Black Ceramic Cylinder',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Zen botanical fern and bamboo grove in matte black ceramic pot for living room corners and executive offices',
    gallery: [
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Macro view of soft feather fern fronds and slender natural-toned bamboo stems',
      'Executive office boardroom corner decorated with biophilic zen fern and bamboo floor plant'
    ],
    description: 'An ethereal combination of feather-soft fern fronds and slender natural bamboo canes. This botanical floor sculpture introduces tranquil organic rhythm to executive office corners, meditation nooks, and low-light living rooms.',
    features: [
      'Feather-soft silk fern fronds paired with authentic bamboo culms',
      'Transforms dark office corners and reading nooks into tranquil biophilic sanctuaries',
      'Hand-finished matte black ceramic cylinder with weighted volcanic stone core',
      'Pliable inner wire framing allows customized branch shaping and canopy spread'
    ],
    isBestSeller: true,
    isPetSafe: true,
    badge: 'Limited Edition',
    spaces: ['living-room', 'office', 'dark-rooms', 'pet-safe'],
    idealRooms: ['Living Room Corners', 'Executive Suites', 'Meditation Spaces', 'Low-Light Studios']
  },
  {
    id: 'prod-9',
    name: 'Mid-Century Solid Walnut Adjustable Indoor Plant Stand',
    category: 'stands',
    categoryLabel: 'Indoor Plant Stands',
    price: 1899,
    originalPrice: 2499,
    rating: 5.0,
    reviewCount: 162,
    height: '16 Inches (Adjustable Width 8"-12")',
    potType: 'Kiln-Dried American Walnut Wood',
    image: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Handcrafted adjustable solid walnut wooden plant stand elevating potted ceramic plants in living room corners',
    gallery: [
      'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Adjustable sliding crossbar joint of solid American walnut indoor plant stand',
      'Mid-century modern walnut plant stand holding potted ficus tree in hardwood living room corner',
      'Elevated plant display with walnut plant stand supporting heavy glazed ceramic pot'
    ],
    description: 'Handcrafted from sustainable solid American walnut with a precision sliding crossbar mechanism that adjusts from 8 to 12 inches to elevate your favorite potted greenery in living room corners and sunlit alcoves.',
    features: [
      'Precision sliding joint accommodates ceramic planters from 8 to 12 inches in diameter',
      'Solid kiln-dried American walnut with natural organic grain and matte oil finish',
      'Heavy-duty mortise construction supports up to 150 lbs of heavy potted ceramics',
      'Protective felt floor pads prevent scratches on hardwood and polished tile'
    ],
    isBestSeller: true,
    isPetSafe: true,
    badge: 'Top Rated Stand',
    spaces: ['living-room', 'office'],
    idealRooms: ['Living Room Corners', 'Sunlit Windows', 'Executive Lobbies']
  },
  {
    id: 'prod-10',
    name: 'Nordic 3-Tier Bamboo Pedestal Indoor Plant Stand',
    category: 'stands',
    categoryLabel: 'Indoor Plant Stands',
    price: 2299,
    originalPrice: 2899,
    rating: 4.9,
    reviewCount: 88,
    height: '34 Inches (Multi-Level Display)',
    potType: 'Eco-Friendly Carbonized Bamboo',
    image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Nordic 3-tier staggered carbonized bamboo pedestal plant stand for compact apartment living rooms and bathroom shelves',
    gallery: [
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Tiered round bamboo display shelves holding multiple compact succulents and trailing vines',
      'Multi-level bamboo plant stand arranged beside window corner to maximize vertical greenery display',
      'Compact Nordic bamboo plant stand styled in minimalist bedroom corner'
    ],
    description: 'Maximize vertical greenery in compact urban apartments. Staggered circular bamboo tiers create a multi-level botanical display for small artificial plants, bathroom shelf accessories, corner alcoves, and window nooks.',
    features: [
      'Three staggered circular display tiers maximize vertical corner space in compact rooms',
      'Moisture-sealed carbonized bamboo resists humidity in bathrooms and kitchens',
      'Accommodates multiple small tabletop botanicals and cascading hanging vines',
      'Tool-free assembly with concealed brass hardware and sturdy balanced base'
    ],
    isBestSeller: false,
    isPetSafe: true,
    badge: 'Space Saver',
    spaces: ['living-room', 'bathroom', 'dark-rooms'],
    idealRooms: ['Compact Living Corners', 'Bathroom Powder Rooms', 'Apartment Window Nooks']
  },
  {
    id: 'prod-11',
    name: 'Architectural Matte Black Industrial Metal Plant Stand Tower',
    category: 'stands',
    categoryLabel: 'Indoor Plant Stands',
    price: 2799,
    originalPrice: 3499,
    rating: 4.9,
    reviewCount: 74,
    height: '28 Inches Tower Base',
    potType: 'Powder-Coated Heavy Gauge Steel',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Architectural matte black steel pedestal stand tower elevating tall artificial trees for living room corners',
    gallery: [
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1512424886137-d2bfe883f67c?auto=format&fit=crop&w=1600&q=95',
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1600&q=95'
    ],
    galleryAlt: [
      'Heavy gauge welded steel frame detail with rust-resistant matte black powder coating',
      'Industrial metal plant tower supporting large ceramic planter in contemporary loft',
      'Architectural pedestal tower elevating luxury artificial fiddle leaf fig for dramatic ceiling height'
    ],
    description: 'A sculpted industrial metal pedestal engineered to elevate large statement trees such as Fiddle Leaf Figs and Olive Trees in living room corners, high-ceiling lofts, and boutique office lobbies.',
    features: [
      'Heavy-gauge welded steel pedestal engineered specifically for large statement trees',
      'Elevates foliage 28 inches to dramatically fill living room corners and accentuate tall ceilings',
      'Architectural open-wire silhouette maintains spacious light transmission and sightlines',
      'Durable matte black powder coating protects against scratches and humidity'
    ],
    isBestSeller: true,
    isPetSafe: true,
    badge: 'Designer Pick',
    spaces: ['living-room', 'office'],
    idealRooms: ['Living Room Corners', 'High-Ceiling Lofts', 'Boutique Office Lobbies']
  }
];
