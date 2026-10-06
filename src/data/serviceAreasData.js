export const serviceAreasHero = {
  breadcrumb: "HOME > SERVICE AREAS",
  eyebrow: "WHERE WE WORK",
  headline: "SERVING GREATER KANSAS CITY & BEYOND",
  subtitle: "Rapid response times, zero travel fees, and on-site owner inspections across Missouri and Kansas, with dedicated teams for inspection or emergency calls.",
  bgImage: "/images/services_aerial_roof.jpg"
};

export const serviceAreaHighlights = [
  {
    icon: "Clock",
    title: "SAME-DAY RESPONSE",
    description: "We schedule inspections within 24 to 48 hours, with emergency response crews for immediate assistance."
  },
  {
    icon: "Car",
    title: "NO TRAVEL FEES",
    description: "Free on-site estimates and accurate quotes anywhere across Missouri and Kansas."
  },
  {
    icon: "UserCheck",
    title: "OWNER VISITS EVERY VISIT",
    description: "Receive personal inspections every single time to ensure high-quality service and no middleman markup."
  }
];

export const serviceAreaContent = {
  eyebrow: "OUR SERVICE AREA",
  headline: "WHERE WE WORK",
  description: "We serve homeowners across the greater Kansas City metro on the Kansas or Missouri sides of the state line. If you're within roughly 50 miles of Grain Valley, MO, you're in our zone. Not sure? Just call and we'll let you know.",
  disclaimerText: "Don't see your city? Call us at (816) 542-4103 and we'll confirm if you're in our service area.",
  phone: "(816) 542-4103",
  mapEmbedUrl: "https://maps.google.com/maps?q=Kansas%20City%2C%20MO&t=&z=10&ie=UTF8&iwloc=&output=embed",
  mapHeader: "KANSAS CITY & SURROUNDING METRO COVERAGE",
  mapBadge: "Active Coverage Radius (50 Miles)"
};

// Easily add, remove, or edit regions and their locations here
export const serviceAreaRegions = [
  {
    regionName: "KANSAS CITY METRO",
    locations: [
      "Kansas City, MO",
      "Kansas City, KS",
      "Overland Park, KS",
      "Olathe, KS",
      "Lee's Summit, MO",
      "Independence, MO",
      "Blue Springs, MO",
      "Raytown, MO",
      "Grandview, MO",
      "Belton, MO"
    ]
  },
  {
    regionName: "EASTERN JACKSON COUNTY",
    locations: [
      "Grain Valley, MO",
      "Blue Springs, MO",
      "Oak Grove, MO",
      "Lone Jack, MO",
      "Odessa, MO",
      "Bates City, MO",
      "Lake Tapawingo, MO",
      "Greenwood, MO"
    ]
  },
  {
    regionName: "JOHNSON COUNTY, KS",
    locations: [
      "Shawnee, KS",
      "Lenexa, KS",
      "Prairie Village, KS",
      "Leawood, KS",
      "Gardner, KS",
      "Roeland Park, KS",
      "Fairway, KS",
      "Merriam, KS"
    ]
  },
  {
    regionName: "CLAY & PLATTE COUNTY",
    locations: [
      "Liberty, MO",
      "North Kansas City, MO",
      "Gladstone, MO",
      "Parkville, MO",
      "Kearney, MO",
      "Smithville, MO",
      "Riverside, MO",
      "Platte City, MO",
      "Weatherby Lake, MO"
    ]
  },
  {
    regionName: "ST. LOUIS METRO",
    locations: [
      "St. Louis, MO"
    ]
  }
];

export const serviceAreaMidBanner = {
  eyebrow: "READY TO START",
  headline: "IN YOUR AREA. READY TO HELP.",
  description: "Request your free inspection today. Our crew is in your neighborhood daily so we can give you an honest, custom proposal that fits your exact roof needs.",
  phone: "(816) 542-4103",
  primaryCtaText: "GET A FREE INSPECTION"
};

export const serviceAreaLeadSection = {
  eyebrow: "GET STARTED TODAY",
  headline: "READY TO GET STARTED?",
  description: "It's free, easy to request, and custom tailored for Kansas City weather. Get started online with a no-pressure consultation or a free roof inspection. Capstone is family owned, woman-led, locally managed, and just one phone call away.",
  phone: "(816) 542-4103",
  formTitle: "GET MY FREE ESTIMATE",
  formSubtitle: "Tell us your needs and get an answer in minutes.",
  submitBtnText: "GET MY FREE ESTIMATE",
  securityText: "We will never share your personal information with third parties. No spam ever."
};

// 14 Services for the 2-Column Grid in Service Area Details
export const serviceMenuItems = [
  { name: "Roof Repair", path: "/services/residential-roofing" },
  { name: "Roof Replacement", path: "/services/residential-roofing" },
  { name: "New Roof Installation", path: "/services/residential-roofing" },
  { name: "Emergency Roofing", path: "/services/storm-damage" },
  { name: "Roof Inspections", path: "/services/residential-roofing" },
  { name: "Hail Damage Repair", path: "/services/storm-damage" },
  { name: "Storm Damage Restoration", path: "/services/storm-damage" },
  { name: "Insurance Claims", path: "/services/storm-damage" },
  { name: "Siding", path: "/services/siding" },
  { name: "Gutters", path: "/services/gutters" },
  { name: "Windows", path: "/services/windows" },
  { name: "Garage Doors", path: "/services" },
  { name: "Metal Roofing", path: "/services/commercial-roofing" },
  { name: "Commercial Roofing", path: "/services/commercial-roofing" }
];

// List of Top Service Areas for Header Dropdown
export const serviceAreaDropdownList = [
  { name: "Parkville, MO", slug: "parkville", region: "Clay & Platte County" },
  { name: "Overland Park, KS", slug: "overland-park", region: "Johnson County, KS" },
  { name: "Lee's Summit, MO", slug: "lees-summit", region: "Kansas City Metro" },
  { name: "Liberty, MO", slug: "liberty", region: "Clay & Platte County" },
  { name: "Blue Springs, MO", slug: "blue-springs", region: "Eastern Jackson County" },
  { name: "Shawnee, KS", slug: "shawnee", region: "Johnson County, KS" },
  { name: "Olathe, KS", slug: "olathe", region: "Johnson County, KS" },
  { name: "Grain Valley, MO", slug: "grain-valley", region: "Eastern Jackson County" },
  { name: "Platte City, MO", slug: "platte-city", region: "Clay & Platte County" },
  { name: "Riverside, MO", slug: "riverside", region: "Clay & Platte County" },
  { name: "North Kansas City, MO", slug: "north-kansas-city", region: "Clay & Platte County" },
  { name: "Lenexa, KS", slug: "lenexa", region: "Johnson County, KS" }
];

// Detailed curated service area profiles
export const serviceAreaDetails = {
  "parkville": {
    slug: "parkville",
    city: "Parkville",
    state: "MO",
    fullName: "Parkville, MO",
    region: "CLAY & PLATTE COUNTY",
    heroHeadline: "ROOFING CONTRACTOR IN PARKVILLE, MO",
    heroSubtitle: "Parkville homeowners face severe Midwest weather. Hail storms, high winds, and heavy snow all take a toll on roofs in Parkville, Platte County, and surrounding communities. Capstone is locally owned, woman-led, and on-site for every inspection and installation.",
    bgImage: "/images/services_aerial_roof.jpg",
    stats: {
      coverage: "64152 ZIP Code",
      distance: "38 mi from HQ",
      responseTime: "Same Day",
      travelFees: "None"
    },
    whyChooseEyebrow: "WHY PARKVILLE HOMEOWNERS CHOOSE CAPSTONE",
    whyChooseTitle: "LOCAL ROOFING. OWNER ON SITE.",
    whyChoosePoints: [
      {
        num: "1",
        text: "We are situated close to Parkville with fast response times. We dispatch directly from Grain Valley HQ with our local in-house crew."
      },
      {
        num: "2",
        text: "Receive personal inspections every single time. Marcus inspects your roof personally to ensure zero markup surprises."
      },
      {
        num: "3",
        text: "Free comprehensive inspection reports. No high-pressure sales. You will get an honest, custom proposal that fits your exact needs."
      }
    ],
    climateEyebrow: "PARKVILLE CLIMATE NOTES",
    climateHeadline: "WHAT YOUR ROOF FACES HERE",
    climateDescription: "Parkville sits in the Kansas City / Platte County storm corridor. Severe hail storms, straight-line winds, and rapid freeze-thaw cycles cause unnoticed granule loss and shingle deterioration. Fast forensic roof inspections prevent costly water leaks.",
    topServices: [
      { name: "STORM DAMAGE RESTORATION", path: "/services/storm-damage" },
      { name: "ROOF REPLACEMENT", path: "/services/residential-roofing" },
      { name: "INSURANCE CLAIMS", path: "/services/storm-damage" },
      { name: "SIDING", path: "/services/siding" }
    ],
    neighborhoodsIntro: "Parkville neighborhoods we've worked in or regularly service in Platte Co. If your subdivision is not listed, call us; we likely cover it:",
    neighborhoods: [
      "Riss Lake",
      "The Bluffs",
      "Stonehenge",
      "Pine Ridge",
      "The National",
      "Thousand Oaks",
      "Misty Woods"
    ],
    adjacentCommunities: [
      { name: "Platte City", slug: "platte-city" },
      { name: "Riverside", slug: "riverside" },
      { name: "Weatherby Lake", slug: "weatherby-lake" },
      { name: "Kansas City North", slug: "north-kansas-city" }
    ],
    faqs: [
      {
        question: "DO YOU SERVE PARKVILLE?",
        answer: "Yes, Parkville is one of our primary Platte County service areas. We have dedicated crews working across Parkville, Riss Lake, and surrounding neighborhoods every week with zero travel fees."
      },
      {
        question: "HOW FAST CAN YOU RESPOND TO A PARKVILLE ROOF EMERGENCY?",
        answer: "We offer same-day emergency response for severe hail and wind damage events in Parkville. Our dispatch team provides emergency tarping and leak stabilization typically within 2 to 4 hours."
      },
      {
        question: "DO YOU HANDLE PARKVILLE HOA APPROVALS?",
        answer: "Absolutely. We regularly coordinate with Architectural Review Committees (ARCs) across Parkville subdivisions including The National, Riss Lake, and Thousand Oaks to provide compliant shingle samples and specification sheets."
      },
      {
        question: "WHAT PERMITS DOES PARKVILLE REQUIRE FOR A FULL ROOF REPLACEMENT?",
        answer: "The City of Parkville requires building permits for residential roof replacements. Our team pulls all necessary Platte County and municipal permits, schedules the post-installation inspection, and guarantees 100% building code compliance."
      },
      {
        question: "WILL MY PARKVILLE HOMEOWNER INSURANCE COVER HAIL DAMAGE?",
        answer: "Most homeowner policies in Missouri cover wind and hail damage. We provide free forensic digital drone damage assessments, meet your insurance adjuster on-site, and ensure all damaged elements are accurately documented for your claim."
      }
    ]
  },
  "overland-park": {
    slug: "overland-park",
    city: "Overland Park",
    state: "KS",
    fullName: "Overland Park, KS",
    region: "JOHNSON COUNTY, KS",
    heroHeadline: "ROOFING CONTRACTOR IN OVERLAND PARK, KS",
    heroSubtitle: "From historic older homes in North Overland Park to newer subdivisions in South OP, our certified crew delivers durable, impact-resistant roofing systems built for Kansas wind and hail storms.",
    bgImage: "/images/services_aerial_roof.jpg",
    stats: {
      coverage: "66204 & 66213 ZIPs",
      distance: "29 mi from HQ",
      responseTime: "Same Day",
      travelFees: "None"
    },
    whyChooseEyebrow: "WHY OVERLAND PARK HOMEOWNERS CHOOSE CAPSTONE",
    whyChooseTitle: "LOCAL ROOFING. OWNER ON SITE.",
    whyChoosePoints: [
      {
        num: "1",
        text: "Dedicated Johnson County dispatch with crews in Overland Park weekly for free inspections and consultations."
      },
      {
        num: "2",
        text: "Personal on-site owner supervision guarantees that your roof installation meets manufacturer warranty specifications."
      },
      {
        num: "3",
        text: "Honest, itemized estimates with Class 4 impact-rated shingle upgrades that qualify for Kansas insurance premium discounts."
      }
    ],
    climateEyebrow: "OVERLAND PARK CLIMATE NOTES",
    climateHeadline: "WHAT YOUR ROOF FACES HERE",
    climateDescription: "Johnson County experiences frequent spring hail storms with 1-to-2 inch hail and severe convective wind gusts. Unchecked storm impacts crack asphalt shingle mats and cause slow water leaks into decking and insulation.",
    topServices: [
      { name: "ROOF REPLACEMENT", path: "/services/residential-roofing" },
      { name: "STORM DAMAGE RESTORATION", path: "/services/storm-damage" },
      { name: "SIDING", path: "/services/siding" },
      { name: "GUTTERS", path: "/services/gutters" }
    ],
    neighborhoodsIntro: "Overland Park subdivisions and neighborhoods we regularly service across Johnson County:",
    neighborhoods: [
      "Nottingham Forest",
      "Stonewall",
      "Brookridge",
      "Cherry Hill",
      "Blue Valley Meadows",
      "Deer Creek",
      "Oak Park"
    ],
    adjacentCommunities: [
      { name: "Leawood", slug: "leawood" },
      { name: "Olathe", slug: "olathe" },
      { name: "Lenexa", slug: "lenexa" },
      { name: "Shawnee", slug: "shawnee" }
    ],
    faqs: [
      {
        question: "DO YOU SERVE OVERLAND PARK?",
        answer: "Yes! Overland Park is one of our largest service hubs in Johnson County, KS. We provide free on-site inspections anywhere in OP."
      },
      {
        question: "HOW FAST CAN YOU RESPOND TO AN OVERLAND PARK ROOF EMERGENCY?",
        answer: "We offer rapid same-day emergency dispatch across Overland Park to tarp damaged roofs and prevent water intrusion."
      },
      {
        question: "DO YOU HANDLE OVERLAND PARK HOA APPROVALS?",
        answer: "Yes, we handle HOA color approvals and architectural documentation for neighborhoods throughout Johnson County."
      },
      {
        question: "WHAT PERMITS DOES OVERLAND PARK REQUIRE FOR A FULL ROOF REPLACEMENT?",
        answer: "The City of Overland Park requires a roofing permit. We manage the application, code adherence, and final city inspection."
      },
      {
        question: "WILL MY OVERLAND PARK HOMEOWNER INSURANCE COVER HAIL DAMAGE?",
        answer: "Yes, most Kansas policies cover hail and wind. We provide detailed digital damage scopes and meet directly with your adjuster."
      }
    ]
  },
  "liberty": {
    slug: "liberty",
    city: "Liberty",
    state: "MO",
    fullName: "Liberty, MO",
    region: "CLAY & PLATTE COUNTY",
    heroHeadline: "ROOFING CONTRACTOR IN LIBERTY, MO",
    heroSubtitle: "Protecting historic and modern Liberty homes with top-grade roofing and exteriors. Capstone delivers prompt storm restoration and roof replacement with zero travel fees.",
    bgImage: "/images/services_aerial_roof.jpg",
    stats: {
      coverage: "64068 ZIP Code",
      distance: "26 mi from HQ",
      responseTime: "Same Day",
      travelFees: "None"
    },
    whyChooseEyebrow: "WHY LIBERTY HOMEOWNERS CHOOSE CAPSTONE",
    whyChooseTitle: "LOCAL ROOFING. OWNER ON SITE.",
    whyChoosePoints: [
      {
        num: "1",
        text: "Direct route access from our East metro HQ ensures rapid dispatch to Liberty and Clay County."
      },
      {
        num: "2",
        text: "Hands-on owner inspections on every roof replacement to ensure immaculate workmanship."
      },
      {
        num: "3",
        text: "Transparent flat-rate quotes without hidden charges or high-pressure sales."
      }
    ],
    climateEyebrow: "LIBERTY CLIMATE NOTES",
    climateHeadline: "WHAT YOUR ROOF FACES HERE",
    climateDescription: "Liberty's position in northern Clay County leaves it vulnerable to intense Midwest storm fronts, driving rain, and winter ice damming.",
    topServices: [
      { name: "STORM DAMAGE RESTORATION", path: "/services/storm-damage" },
      { name: "ROOF REPLACEMENT", path: "/services/residential-roofing" },
      { name: "INSURANCE CLAIMS", path: "/services/storm-damage" },
      { name: "GUTTERS", path: "/services/gutters" }
    ],
    neighborhoodsIntro: "Liberty neighborhoods and subdivisions we frequently service:",
    neighborhoods: [
      "Shoal Creek Valley",
      "Canterbury",
      "Historic Liberty",
      "Clay Meadows",
      "Brookview Hills",
      "Prairie Field"
    ],
    adjacentCommunities: [
      { name: "Kearney", slug: "kearney" },
      { name: "Gladstone", slug: "gladstone" },
      { name: "North Kansas City", slug: "north-kansas-city" },
      { name: "Smithville", slug: "smithville" }
    ],
    faqs: [
      {
        question: "DO YOU SERVE LIBERTY?",
        answer: "Yes, we service all of Liberty and Clay County regularly with free on-site roof estimates."
      },
      {
        question: "HOW FAST CAN YOU RESPOND TO A LIBERTY ROOF EMERGENCY?",
        answer: "Our team provides same-day emergency tarping across Liberty within 2 to 4 hours."
      },
      {
        question: "DO YOU HANDLE LIBERTY HOA APPROVALS?",
        answer: "Yes, we prepare full HOA packets with shingle samples for Liberty homeowner associations."
      },
      {
        question: "WHAT PERMITS DOES LIBERTY REQUIRE FOR A FULL ROOF REPLACEMENT?",
        answer: "We handle all City of Liberty roofing permits and schedule the mandatory municipal inspections."
      },
      {
        question: "WILL MY LIBERTY HOMEOWNER INSURANCE COVER HAIL DAMAGE?",
        answer: "Yes, wind and hail damage is typically covered. We handle the claims documentation from start to finish."
      }
    ]
  }
};

// Dynamic helper function: returns curated or dynamically generated data for ANY slug
export function getServiceAreaDetail(slug) {
  if (!slug) return serviceAreaDetails["parkville"];
  
  const cleanSlug = slug.toLowerCase().trim();
  
  // Return direct match if available
  if (serviceAreaDetails[cleanSlug]) {
    return serviceAreaDetails[cleanSlug];
  }

  // Generate dynamic profile for any city in regions or any slug requested
  // Convert slug to human city name: e.g. "blue-springs" -> "Blue Springs"
  const formattedCity = cleanSlug
    .replace(/-mo$|-ks$|-ab$/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Determine state based on common Kansas vs Missouri cities
  const isKs = cleanSlug.includes('ks') || 
    ['overland-park', 'olathe', 'shawnee', 'lenexa', 'leawood', 'gardner', 'prairie-village', 'merriam', 'roeland-park', 'fairway'].includes(cleanSlug);
  const state = isKs ? "KS" : "MO";
  const fullName = `${formattedCity}, ${state}`;

  // Find region from serviceAreaRegions
  let regionName = isKs ? "JOHNSON COUNTY, KS" : "KANSAS CITY METRO";
  for (const reg of serviceAreaRegions) {
    if (reg.locations.some(loc => loc.toLowerCase().includes(formattedCity.toLowerCase()))) {
      regionName = reg.regionName;
      break;
    }
  }

  return {
    slug: cleanSlug,
    city: formattedCity,
    state: state,
    fullName: fullName,
    region: regionName,
    heroHeadline: `ROOFING CONTRACTOR IN ${formattedCity.toUpperCase()}, ${state}`,
    heroSubtitle: `${formattedCity} homeowners face severe Midwest weather. Hail storms, high winds, and heavy snow all take a toll on roofs in ${formattedCity} and surrounding communities. Capstone is locally owned, woman-led, and on-site for every inspection and installation.`,
    bgImage: "/images/services_aerial_roof.jpg",
    stats: {
      coverage: `${formattedCity} Metro`,
      distance: "Local Dispatch",
      responseTime: "Same Day",
      travelFees: "None"
    },
    whyChooseEyebrow: `WHY ${formattedCity.toUpperCase()} HOMEOWNERS CHOOSE CAPSTONE`,
    whyChooseTitle: "LOCAL ROOFING. OWNER ON SITE.",
    whyChoosePoints: [
      {
        num: "1",
        text: `We are situated close to ${formattedCity} with fast response times. We dispatch directly from HQ with our local in-house crew.`
      },
      {
        num: "2",
        text: "Receive personal inspections every single time. Marcus inspects your roof personally to ensure zero markup surprises."
      },
      {
        num: "3",
        text: "Free comprehensive inspection reports. No high-pressure sales. You will get an honest, custom proposal that fits your exact needs."
      }
    ],
    climateEyebrow: `${formattedCity.toUpperCase()} CLIMATE NOTES`,
    climateHeadline: "WHAT YOUR ROOF FACES HERE",
    climateDescription: `${formattedCity} sits in the active Midwest storm corridor. Severe hail storms, straight-line winds, and rapid freeze-thaw cycles cause unnoticed granule loss and shingle deterioration. Fast forensic roof inspections prevent costly water leaks.`,
    topServices: [
      { name: "STORM DAMAGE RESTORATION", path: "/services/storm-damage" },
      { name: "ROOF REPLACEMENT", path: "/services/residential-roofing" },
      { name: "INSURANCE CLAIMS", path: "/services/storm-damage" },
      { name: "SIDING", path: "/services/siding" }
    ],
    neighborhoodsIntro: `${formattedCity} neighborhoods and subdivisions we regularly service in the area. If your subdivision is not listed, call us; we likely cover it:`,
    neighborhoods: [
      `${formattedCity} North`,
      `${formattedCity} South`,
      `${formattedCity} Estates`,
      `${formattedCity} Hills`,
      "Downtown District",
      "Crestview Village"
    ],
    adjacentCommunities: [
      { name: "Kansas City", slug: "kansas-city-mo" },
      { name: "Parkville", slug: "parkville" },
      { name: "Liberty", slug: "liberty" },
      { name: "Overland Park", slug: "overland-park" }
    ],
    faqs: [
      {
        question: `DO YOU SERVE ${formattedCity.toUpperCase()}?`,
        answer: `Yes, ${formattedCity} is part of our core service area. We dispatch local in-house crews daily with zero travel fees.`
      },
      {
        question: `HOW FAST CAN YOU RESPOND TO A ${formattedCity.toUpperCase()} ROOF EMERGENCY?`,
        answer: `We provide same-day emergency response across ${formattedCity}. Our team can arrive to tarp and secure damaged roofs within 2 to 4 hours.`
      },
      {
        question: `DO YOU HANDLE ${formattedCity.toUpperCase()} HOA APPROVALS?`,
        answer: `Yes. We provide complete shingle spec sheets, color options, and documentation required by ${formattedCity} homeowners associations.`
      },
      {
        question: `WHAT PERMITS DOES ${formattedCity.toUpperCase()} REQUIRE FOR A FULL ROOF REPLACEMENT?`,
        answer: `We pull all required local and municipal building permits, coordinate city inspections, and ensure 100% building code compliance.`
      },
      {
        question: `WILL MY ${formattedCity.toUpperCase()} HOMEOWNER INSURANCE COVER HAIL DAMAGE?`,
        answer: `Yes, storm damage from wind and hail is typically covered. We provide forensic digital inspection reports and meet your insurance adjuster on-site.`
      }
    ]
  };
}


