/**
 * galleryData.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all copy and metadata on the Gallery page.
 * Consumed by GalleryPage.jsx.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const galleryHero = {
  breadcrumb: "HOME > OUR WORK",
  eyebrow: "AERODOME ROOFING PROJECT GALLERY",
  headline: "Real Roofs. Real Calgary Homes.",
  subtitle:
    "Explore residential roofing Calgary projects completed by licensed roofing contractor Nolan Thrace and our dedicated in-house crew. From storm damage roof replacement in NW Calgary to durable asphalt shingle installations across the city, every project is backed by our 10-year workmanship warranty.",
  bgImage: "/images/services_aerial_roof.jpg"
};

export const galleryCategories = [
  "All Projects",
  "Residential Roof Replacement",
  "Hail Damage Roof Repair",
  "James Hardie Siding & Gutters",
  "Asphalt Shingle Roofs"
];

export const galleryProjects = [
  {
    id: "full-roof-nw-calgary",
    title: "FULL ROOF REPLACEMENT, NW CALGARY",
    category: "Residential Roof Replacement",
    categories: ["All Projects", "Residential Roof Replacement", "Asphalt Shingle Roofs"],
    categoryLabel: "RESIDENTIAL ROOFING",
    image: "/images/about_residential_home.jpg",
    imageAlt: "Class 4 impact resistant shingles roof replacement NW Calgary - AeroDome Roofing",
    caption: "Full residential roof replacement in NW Calgary using Class 4 impact resistant shingles with high-grade synthetic underlayment and custom drip edge flashing."
  },
  {
    id: "new-architectural-shingle",
    title: "ARCHITECTURAL SHINGLE INSTALLATION",
    category: "Asphalt Shingle Roofs",
    categories: ["All Projects", "Asphalt Shingle Roofs", "Residential Roof Replacement"],
    categoryLabel: "ASPHALT SHINGLES",
    image: "/images/after_roof.jpg",
    imageAlt: "IKO Dynasty shingles asphalt shingle roof Calgary - AeroDome Roofing",
    caption: "Complete asphalt shingle roof Calgary installation using IKO Dynasty shingles in [[NEIGHBOURHOOD]], providing Class 3 hail resistance and wind rating up to 210 km/h."
  },
  {
    id: "hail-damage-restoration",
    title: "HAIL STORM DAMAGE RESTORATION",
    category: "Hail Damage Roof Repair",
    categories: ["All Projects", "Hail Damage Roof Repair", "Residential Roof Replacement"],
    categoryLabel: "HAIL RESTORATION",
    image: "/images/before_hail.jpg",
    imageAlt: "Impact resistant shingles hail damage roof repair Calgary - AeroDome Roofing",
    caption: "Comprehensive hail damage roof repair Calgary restoration in NE Calgary, replacing fractured ridge caps, damaged vents, and dented flashings with impact resistant shingles."
  },
  {
    id: "complete-roof-replacement",
    title: "RESIDENTIAL ROOF REPLACEMENT",
    category: "Residential Roof Replacement",
    categories: ["All Projects", "Residential Roof Replacement", "Asphalt Shingle Roofs"],
    categoryLabel: "RESIDENTIAL ROOFING",
    image: "/images/services_aerial_roof.jpg",
    imageAlt: "Owens Corning Duration shingles roof replacement SW Calgary - AeroDome Roofing",
    caption: "Complete roof replacement Calgary installation in SW Calgary featuring Owens Corning Duration shingles, complete ice and water shield membrane, and ridge ventilation."
  },
  {
    id: "roof-replacement-in-progress",
    title: "CREW ROOF INSTALLATION IN PROGRESS",
    category: "Asphalt Shingle Roofs",
    categories: ["All Projects", "Asphalt Shingle Roofs", "Residential Roof Replacement"],
    categoryLabel: "IN-HOUSE CREW",
    image: "/images/hero_roofing.jpg",
    imageAlt: "Asphalt shingle roof replacement SE Calgary - AeroDome Roofing",
    caption: "Owner-supervised residential roofing installation in SE Calgary by our in-house crew, adhering strictly to Alberta building code and manufacturer nail pattern standards."
  },
  {
    id: "professional-roof-inspection",
    title: "MULTI-POINT ROOF INSPECTION & REPAIR",
    category: "Residential Roof Replacement",
    categories: ["All Projects", "Residential Roof Replacement", "Hail Damage Roof Repair"],
    categoryLabel: "INSPECTION & REPAIR",
    image: "/images/service_crew.jpg",
    imageAlt: "Roof inspection and roof repair NW Calgary - AeroDome Roofing",
    caption: "Detailed roof inspection Calgary assessment and leak detection in NW Calgary, executing targeted roof repair to stop interior moisture intrusion without unnecessary full re-roofing."
  },
  {
    id: "owner-managed-installation",
    title: "OWNER-MANAGED QUALITY INSTALLATION",
    category: "Residential Roof Replacement",
    categories: ["All Projects", "Residential Roof Replacement", "Asphalt Shingle Roofs"],
    categoryLabel: "SUPERVISED INSTALL",
    image: "/images/owner_nolan.jpg",
    imageAlt: "Licensed roofing contractor residential roofing Calgary - AeroDome Roofing",
    caption: "On-site quality audit conducted by licensed roofing contractor Nolan Thrace in [[NEIGHBOURHOOD]], confirming flashing alignment and magnetic perimeter nail sweep completion."
  },
  {
    id: "seamless-aluminum-gutters",
    title: "CONTINUOUS SEAMLESS EAVESTROUGHS",
    category: "James Hardie Siding & Gutters",
    categories: ["All Projects", "James Hardie Siding & Gutters"],
    categoryLabel: "EAVESTROUGHS",
    image: "/images/service_gutters.jpg",
    imageAlt: "Heavy gauge aluminum gutter installation Calgary - AeroDome Roofing",
    caption: "Continuous heavy-gauge aluminum gutter installation Calgary service in Airdrie, paired with leaf relief screening to direct storm run-off away from home foundations."
  },
  {
    id: "james-hardie-siding",
    title: "JAMES HARDIE® SIDING & ACCENTS",
    category: "James Hardie Siding & Gutters",
    categories: ["All Projects", "James Hardie Siding & Gutters"],
    categoryLabel: "FIBER CEMENT",
    image: "/images/services_siding_living.jpg",
    imageAlt: "James Hardie siding exterior installation Cochrane - AeroDome Roofing",
    caption: "Non-combustible James Hardie siding Calgary and trim installation in Cochrane, delivering high-durability weather protection against driving Alberta rain, hail, and extreme freeze-thaw cycles."
  },
  {
    id: "energy-star-windows",
    title: "HIGH-EFFICIENCY WINDOW UPGRADE",
    category: "James Hardie Siding & Gutters",
    categories: ["All Projects", "James Hardie Siding & Gutters"],
    categoryLabel: "WINDOWS & TRIM",
    image: "/images/service_windows.jpg",
    imageAlt: "Triple pane exterior window replacement Okotoks - AeroDome Roofing",
    caption: "Energy-efficient window replacement and insulated flashing integration in Okotoks, sealed against cold drafts and designed to withstand severe Alberta winter temperature swings."
  },
  {
    id: "storm-emergency-tarping",
    title: "STORM DAMAGE ROOF RESTORATION",
    category: "Hail Damage Roof Repair",
    categories: ["All Projects", "Hail Damage Roof Repair", "Asphalt Shingle Roofs"],
    categoryLabel: "STORM MITIGATION",
    image: "/images/hero_roofing.jpg",
    imageAlt: "Class 4 shingles storm damage roof replacement Chestermere - AeroDome Roofing",
    caption: "Rapid storm damage roof replacement Calgary project in Chestermere following summer hail, upgrading compromised decking and installing impact resistant shingles with complete insurance documentation."
  },
  {
    id: "stamped-concrete-patio",
    title: "EXTERIOR HARDSCAPE & WALKWAYS",
    category: "Residential Roof Replacement",
    categories: ["All Projects", "Residential Roof Replacement"],
    categoryLabel: "EXTERIOR SURFACES",
    image: "/images/services_concrete_patio.jpg",
    imageAlt: "Sealed decorative concrete patio installation Calgary - AeroDome Roofing",
    caption: "Reinforced decorative concrete patio and perimeter walkway installation in Calgary, properly graded for positive drainage away from roof downspout discharge areas."
  }
];

export const galleryCta = {
  eyebrow: "GET STARTED TODAY",
  headline: "Like What You See? Get a Free Estimate for Your Home.",
  description:
    "Protect your property before the next Calgary storm season. Contact licensed roofing contractor Nolan Thrace for a comprehensive roof inspection and flat-rate proposal.",
  phoneLabel: "Direct Line · Speak Directly With Nolan",
  phoneNumber: "(403) 918-4444",
  formTitle: "GET MY FREE ESTIMATE",
  formSubtitle: "Fast response time · 100% Free on-site inspection",
  formButton: "GET MY FREE ESTIMATE",
  microcopy: "Free on-site inspection · No obligation · Flat-rate pricing"
};
