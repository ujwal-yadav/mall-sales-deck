import { Section, Stat, Attraction, DiningCategory, RetailCategory, LeasingPath, VenueSpec, InquiryType } from "@/types";

export const SECTIONS: Section[] = [
  { id: "hero", label: "Welcome", shortLabel: "Home" },
  { id: "why-moa", label: "Why Mall of America", shortLabel: "Why MOA" },
  { id: "retail", label: "Retail", shortLabel: "Retail" },
  { id: "luxury", label: "Luxury", shortLabel: "Luxury" },
  { id: "dining", label: "Dining & Lifestyle", shortLabel: "Dining" },
  { id: "attractions", label: "Attractions", shortLabel: "Attractions" },
  { id: "events", label: "Events & Platform", shortLabel: "Events" },
  { id: "cta", label: "Get Started", shortLabel: "Contact" },
];

export const KEY_STATS: Stat[] = [
  { value: 5.6, suffix: "M", label: "Square Feet" },
  { value: 520, suffix: "+", label: "Stores" },
  { value: 32, suffix: "M+", label: "Annual Visitors" },
  { value: 3, suffix: "B+", prefix: "$", label: "Economic Impact" },
];

export const SECONDARY_STATS: Stat[] = [
  { value: 400, suffix: "+", label: "Events Per Year" },
  { value: 11, suffix: "K+", label: "Employees" },
  { value: 12300, suffix: "", label: "Parking Spaces" },
  { value: 520, suffix: "ft", label: "Home Run Record" },
];

export const ATTRACTIONS: Attraction[] = [
  {
    name: "Nickelodeon Universe",
    tagline: "Largest Indoor Theme Park in America",
    description:
      "7 acres of thrills featuring 27 rides and attractions, including roller coasters, log flumes, and family favorites — all indoors, all year round.",
    image: "/images/theme-park.jpg",
  },
  {
    name: "SEA LIFE Minnesota Aquarium",
    tagline: "300-Foot Underwater Tunnel",
    description:
      "Walk through a 300-foot curved ocean tunnel surrounded by sharks, rays, and over 4,500 sea creatures in 1.2 million gallons of water.",
    image: "/images/aquarium.jpg",
  },
  {
    name: "FlyOver America",
    tagline: "Immersive Flight Experience",
    description:
      "A state-of-the-art flight ride that takes you soaring over America's most iconic landscapes with wind, mist, and scents.",
    image: "/images/flyover.jpg",
  },
  {
    name: "Crayola Experience",
    tagline: "25 Hands-On Attractions",
    description:
      "An interactive art experience where visitors name and wrap their own crayon, star in a coloring page, and explore 60,000 sq ft of creative play.",
    image: "/images/entertainment.jpg",
  },
];

export const DINING_CATEGORIES: DiningCategory[] = [
  {
    name: "Fine Dining",
    description: "Upscale dining experiences from award-winning chefs",
    image: "/images/fine-dining.jpg",
  },
  {
    name: "Casual Dining",
    description: "Family-friendly restaurants with diverse cuisines",
    image: "/images/casual-dining.jpg",
  },
  {
    name: "Fast Casual",
    description: "Premium quick-service concepts and food halls",
    image: "/images/fast-casual.jpg",
  },
  {
    name: "Coffee & Desserts",
    description: "Artisan cafes, bakeries, and sweet destinations",
    image: "/images/coffee.jpg",
  },
];

export const RETAIL_CATEGORIES: RetailCategory[] = [
  { name: "Fashion & Apparel", count: "200+", image: "/images/fashion.jpg" },
  { name: "Luxury & Premium", count: "40+", image: "/images/luxury-retail.jpg" },
  { name: "Lifestyle & Home", count: "80+", image: "/images/lifestyle.jpg" },
  { name: "Specialty & Unique", count: "100+", image: "/images/specialty.jpg" },
  { name: "Pop-Up Ready", count: "15+", image: "/images/popup.jpg" },
];

export const KEY_TENANTS = [
  "Nordstrom",
  "Macy's",
  "LEGO",
  "M&M's World",
  "Zara",
  "H&M",
  "Apple",
  "Nike",
  "Sephora",
  "L.L.Bean",
  "Primark",
  "Forever 21",
];

export const UPCOMING_TENANTS = [
  "Primark",
  "NBA Store",
  "New Balance",
  "Victoria's Secret",
  "MINISO",
  "Pop Mart",
  "Pandora",
  "J.Crew",
];

export const EVENT_TYPES = [
  {
    name: "Live Concerts",
    description: "Major performances and music events drawing thousands",
    icon: "music",
  },
  {
    name: "Brand Activations",
    description: "Immersive brand experiences and product launches",
    icon: "sparkles",
  },
  {
    name: "Celebrity Appearances",
    description: "Meet-and-greets, signings, and red carpet events",
    icon: "star",
  },
  {
    name: "Corporate Events",
    description: "Conferences, galas, and private corporate functions",
    icon: "building",
  },
  {
    name: "Product Launches",
    description: "High-visibility debut events for new products",
    icon: "rocket",
  },
  {
    name: "Fashion Shows",
    description: "Runway events and seasonal fashion showcases",
    icon: "shirt",
  },
];

export const LEASING_PATHS: LeasingPath[] = [
  {
    id: "luxury",
    title: "Luxury & Premium",
    subtitle: "Elevated Brand Positioning",
    description:
      "Join Nordstrom, Apple, and Sephora in Minnesota's premier luxury destination. Connected to JW Marriott and Radisson Blu, serving affluent visitors from an 8-state trade area.",
    stats: [
      { value: 32, suffix: "M", label: "Annual Visitors" },
      { value: 40, suffix: "+", label: "Premium Brands" },
      { value: 2, suffix: "", label: "Luxury Hotels Connected" },
    ],
    features: [
      "Premium floor positioning",
      "Dedicated luxury wing",
      "VIP valet & concierge services",
      "Connected hotel walkways",
    ],
    image: "/images/luxury-retail.jpg",
  },
  {
    id: "retail",
    title: "Retail & Fashion",
    subtitle: "Maximum Foot Traffic",
    description:
      "520+ stores generating $3B+ annual economic impact. The nation's #1 retail destination with unmatched foot traffic and visitor diversity.",
    stats: [
      { value: 520, suffix: "+", label: "Stores" },
      { value: 5.6, suffix: "M", label: "Sq Ft GLA" },
      { value: 3, suffix: "B+", prefix: "$", label: "Annual Impact" },
    ],
    features: [
      "4-floor retail environment",
      "High-traffic anchor adjacency",
      "Year-round climate-controlled",
      "Multi-state visitor draw",
    ],
    image: "/images/fashion.jpg",
  },
  {
    id: "fnb",
    title: "Food & Beverage",
    subtitle: "Dining as a Destination",
    description:
      "50+ dining concepts serving 32 million annual visitors. From fine dining to fast casual, food is a primary traffic driver — not an afterthought.",
    stats: [
      { value: 50, suffix: "+", label: "Dining Concepts" },
      { value: 32, suffix: "M", label: "Annual Diners" },
      { value: 4, suffix: "", label: "Dining Floors" },
    ],
    features: [
      "Third-floor food hall",
      "Street-level restaurant spaces",
      "Proximity to entertainment",
      "Tourist & local customer mix",
    ],
    image: "/images/fine-dining.jpg",
  },
  {
    id: "popup",
    title: "Pop-Up & Seasonal",
    subtitle: "Flexible Brand Activation",
    description:
      "Test your concept with minimal commitment. Pop-up spaces offer maximum visibility with flexible terms, perfect for emerging brands and seasonal activations.",
    stats: [
      { value: 15, suffix: "+", label: "Pop-Up Spaces" },
      { value: 90, suffix: "K+", label: "Daily Visitors" },
      { value: 400, suffix: "+", label: "Annual Events" },
    ],
    features: [
      "Short-term flexible leases",
      "High-visibility locations",
      "Event integration options",
      "Full marketing support",
    ],
    image: "/images/popup.jpg",
  },
];

export const VENUE_SPECS: VenueSpec[] = [
  {
    name: "Rotunda",
    capacity: "5,000+",
    sqft: "14,000",
    features: [
      "Central location with 4-story atrium",
      "360-degree visibility",
      "Full AV infrastructure",
      "Ground-floor main stage",
    ],
    image: "/images/event-venue.jpg",
  },
  {
    name: "North Atrium",
    capacity: "2,500+",
    sqft: "8,000",
    features: [
      "Premium event space",
      "Natural skylight lighting",
      "Modular stage setup",
      "Adjacent to anchor stores",
    ],
    image: "/images/concert.jpg",
  },
  {
    name: "Event Court",
    capacity: "1,500+",
    sqft: "6,000",
    features: [
      "Versatile open floor plan",
      "Branding opportunities",
      "Celebrity appearance ready",
      "Product launch configured",
    ],
    image: "/images/event-space.jpg",
  },
];

export const LOCATION_FACTS = [
  {
    icon: "plane",
    title: "Airport Adjacent",
    description: "Direct light rail connection to Minneapolis-St. Paul International Airport",
  },
  {
    icon: "train",
    title: "Transit Hub",
    description: "Minnesota's busiest transit station — METRO Blue Line, Red Line, and D Line",
  },
  {
    icon: "highway",
    title: "Highway Access",
    description: "I-494 & Highway 77 junction — accessible from the entire Twin Cities metro",
  },
  {
    icon: "hotel",
    title: "Connected Hotels",
    description: "JW Marriott & Radisson Blu with skybridge access — 1,000+ rooms combined",
  },
];

export const INQUIRY_TYPES: { id: InquiryType; title: string; subtitle: string; description: string }[] = [
  {
    id: "lease",
    title: "Lease Space",
    subtitle: "Retail Opportunities",
    description: "Find your perfect space in the nation's largest retail destination.",
  },
  {
    id: "partner",
    title: "Partner With Us",
    subtitle: "Sponsorship & Partnerships",
    description: "Activate your brand in front of 32 million annual visitors.",
  },
  {
    id: "event",
    title: "Host an Event",
    subtitle: "Event Bookings",
    description: "Bring your vision to life on the nation's biggest stage.",
  },
];

export const SQ_FOOTAGE_OPTIONS = [
  "Under 1,000 sq ft",
  "1,000 – 2,500 sq ft",
  "2,500 – 5,000 sq ft",
  "5,000 – 10,000 sq ft",
  "10,000+ sq ft",
];

export const MALL_LOCATIONS = [
  "North Garden",
  "South Avenue",
  "East Broadway",
  "West Market",
  "Central Rotunda",
  "No Preference",
];

export const PARTNERSHIP_TYPES = [
  "Sponsorship",
  "Advertising",
  "Collaboration",
  "Brand Activation",
  "Other",
];

export const BUDGET_RANGES = [
  "Under $50K",
  "$50K – $100K",
  "$100K – $250K",
  "$250K – $500K",
  "$500K+",
];

export const ATTENDANCE_RANGES = [
  "Under 500",
  "500 – 1,000",
  "1,000 – 2,500",
  "2,500 – 5,000",
  "5,000+",
];

export const VISITOR_DEMOGRAPHICS = {
  tradeArea: "8-state regional draw",
  states: ["Minnesota", "Wisconsin", "Iowa", "Nebraska", "North Dakota", "South Dakota", "Illinois", "Ohio"],
  localPercentage: 80,
  touristPercentage: 20,
  peakVisitors: "42M",
  currentVisitors: "32M",
  comparison: "More annual tourists than Walt Disney World and Disneyland combined",
};
