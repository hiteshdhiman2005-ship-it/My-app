import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'commercial-greenery',
    title: 'Commercial & Office Botanical Design',
    subtitle: 'Turn workplaces into biophilic sanctuaries that boost productivity without maintenance costs.',
    category: 'Commercial',
    priceStarting: '$1,200',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Zero maintenance fake office plants that look real: commercial biophilic office greenery installation in executive conference room',
    description: 'Our expert botanical architects design custom greenery installations for corporate headquarters, luxury hotels, restaurants, and retail spaces. We engineer lightweight, dust-repellent botanical displays tailored to your architecture.',
    features: [
      'On-site spatial lighting & acoustics assessment',
      '3D photo rendering before installation',
      'Custom artisan planters matched to your brand interior',
      'UV-resistant Real-Touch™ foliage for sunlit glass atrium spaces',
      'Zero monthly maintenance or watering contracts required'
    ],
    processSteps: [
      { step: 1, title: 'Spatial Audit', desc: 'We review blueprints and high-traffic floor plans.' },
      { step: 2, title: 'Botanical Concepting', desc: 'Custom 3D mood boards and foliage selection.' },
      { step: 3, title: 'White-Glove Setup', desc: 'Seamless evening or weekend installation without disruption.' }
    ],
    idealFor: 'Hotels, Corporate Offices, Restaurants, Luxury Retail Boutiques'
  },
  {
    id: 'residential-styling',
    title: 'Residential Interior Botanical Consultation',
    subtitle: 'Tailored faux plant selection and placement for luxury living rooms, patios, and bedrooms.',
    category: 'Residential',
    priceStarting: '$450',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Luxury artificial fiddle leaf fig and tall artificial trees for living room corners styled during residential botanical consultation',
    description: 'Transform your home with curated statement trees, leafy accents, and trailing vines. A dedicated Plantiqa design consultant selects exact scale models that complement your furniture, ceiling height, and natural color palette.',
    features: [
      'Virtual 1-on-1 video walkthrough with senior botanical stylist',
      'Curated sample box sent to your home (leaf swatches & ceramic pots)',
      'Custom sizing for oversized statement trees up to 12 feet tall',
      'Pet-safety certification and non-toxic ceramic potting',
      'Unboxing, shaping, and positioning guide included'
    ],
    processSteps: [
      { step: 1, title: 'Virtual Consultation', desc: '30-minute walkthrough of your home space.' },
      { step: 2, title: 'Curated Palette', desc: 'Receive tailored plant & planter combinations.' },
      { step: 3, title: 'Delivered & Styled', desc: 'Ready-to-enjoy botanical pieces delivered to your door.' }
    ],
    idealFor: 'Homeowners, Luxury Apartment Dwellers, Interior Design Enthusiasts'
  },
  {
    id: 'custom-potting',
    title: 'Custom Artisan Potting & Re-Potting',
    subtitle: 'Pair any botanical tree with hand-cast concrete, Italian terracotta, or matte ceramic vessels.',
    category: 'Custom Potting',
    priceStarting: '$120',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'Custom artisan pottery and stone vessel potting service for realistic faux olive tree indoor greenery',
    description: 'Elevate off-the-shelf or existing faux plants with our premium artisan potting service. We hand-weight each planter with real river stone and organic Spanish moss bedding for an indistinguishable natural aesthetic.',
    features: [
      'Choice of 18 artisan matte ceramic, ribbed stoneware, or aged terracotta pots',
      'Weighted stabilizer base prevents accidental tipping by children or pets',
      'Authentic preserved Spanish moss or dark river pebble top bedding',
      'Hand-shaped branch styling prior to dispatch'
    ],
    processSteps: [
      { step: 1, title: 'Pottery Selection', desc: 'Pick your pot finish, texture, and rim diameter.' },
      { step: 2, title: 'Botanical Mounting', desc: 'Securely weighted base with real organic moss topper.' },
      { step: 3, title: 'Crated Transport', desc: 'Safely boxed and shipped direct to your entryway.' }
    ],
    idealFor: 'Designers, Collectors, Custom Interior Projects'
  },
  {
    id: 'corporate-lease',
    title: 'Botanical Refresh & Seasonal Lease Program',
    subtitle: 'Keep your venue dynamic with seasonal floral rotations and zero asset depreciation.',
    category: 'Corporate Lease',
    priceStarting: '$299 / mo',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1600&q=95',
    imageAlt: 'High end fake plants that look real rotated seasonally for corporate lobbies and executive hospitality suites',
    description: 'Experience seasonal botanical changes throughout the year—from crisp spring white cherry blossoms to lush summer Monsteras and warm autumn olive branches. Full flexibility with hassle-free rotations.',
    features: [
      'Quarterly botanical rotation adapted to seasonal decor',
      'All maintenance, dust-cleaning, and replacement covered',
      '100% tax-deductible operational expense for businesses',
      'Flexible term contracts with easy upgrades'
    ],
    processSteps: [
      { step: 1, title: 'Seasonal Schedule', desc: 'Select your preferred 4 quarterly themes.' },
      { step: 2, title: 'Quarterly Swap', desc: 'Our team swaps out arrangements seamlessly in 1 hour.' },
      { step: 3, title: 'Always Pristine', desc: 'Your space stays fresh and Instagram-ready.' }
    ],
    idealFor: 'Luxury Spas, Event Venues, Law Firms, Executive Suites'
  }
];
