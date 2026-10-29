/**
 * homepageData.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all editable homepage copy.
 * Edit this file to update headings, paragraphs, cards, FAQs, and CTAs
 * without touching any component code.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── HERO SECTION ────────────────────────────────────────────────────────────
export const heroContent = {
  eyebrow: "CALGARY'S HAIL & STORM DAMAGE SPECIALISTS",
  headline: "CALGARY'S TRUSTED RESIDENTIAL ROOFING CONTRACTOR",
  ratingText: "5.0★ ON GOOGLE",
  ratingCount: "(312+ REVIEWS)",
  checks: [
    "10-Year Workmanship Warranty • Up to 50-Yr Material Protection",
    "100% Local In-House Crew • Zero Subcontracting",
    "Free On-Site Roof Inspection — Hail, Leaks & Age Damage"
  ],
  formCard: {
    title: "SEE WHAT YOUR ROOF REPLACEMENT WILL COST",
    subtitle: "Get a free on-site inspection and a guaranteed flat-rate proposal.",
    submitLabel: "GET MY FREE ESTIMATE",
    microcopy: "Free on-site inspection • No obligation • Flat-rate pricing"
  }
};

// ─── TRUST BAR ────────────────────────────────────────────────────────────────
// 5 certification items displayed as trust badges.
export const trustBarItems = [
  { name: "GAF MASTER ELITE®", sub: "Top 2% of Roofers in North America", badge: "GAF" },
  { name: "IKO SHIELDPRO®", sub: "Certified Residential & Commercial", badge: "IKO" },
  { name: "COR™ SAFETY CERTIFIED", sub: "Alberta Construction Safety Assoc.", badge: "COR" },
  { name: "JAMES HARDIE®", sub: "Preferred Exterior Siding Installer", badge: "JH" },
  { name: "10-YEAR WARRANTY", sub: "Workmanship Guarantee on All Installs", badge: "10-YR" }
];

// ─── TICKER RIBBON ────────────────────────────────────────────────────────────
// Scrolling marquee items shown between every section.
export const tickerItems = [
  "ROOF REPLACEMENT CALGARY",
  "HAIL & STORM RESTORATION",
  "10-YEAR WORKMANSHIP WARRANTY",
  "100% LOCAL IN-HOUSE CREW",
  "5.0★ GOOGLE RATED (312 REVIEWS)",
  "GAF MASTER ELITE® CONTRACTOR",
  "COR™ SAFETY CERTIFIED ALBERTA",
  "TRANSPARENT FLAT-RATE PRICING",
  "EMERGENCY SAME-WEEK TARPING",
  "0% FINANCING UP TO 18 MONTHS"
];

// ─── SOCIAL PROOF / REVIEWS ───────────────────────────────────────────────────
// 3 Google review cards.
export const socialProofContent = {
  eyebrow: "HEAR FROM OUR CLIENTS",
  heading: "5.0★ ON GOOGLE",
  subtitle: "REAL REVIEWS FROM REAL CALGARY HOMEOWNERS",
  ctaLabel: "SEE ALL 312+ GOOGLE REVIEWS",
  reviews: [
    {
      name: "Brenton & Tara S.",
      location: "Aspen Woods, Calgary SW",
      time: "1 month ago",
      text: "After the severe August hailstorm wiped out half our cedar shingles, Nolan personally came out with his AI camera equipment and mapped every impact point. The new Class 4 GAF shingles look breathtaking, and their crew cleaned up every single nail in our driveway with roller magnets. Incredible work."
    },
    {
      name: "Dean R.",
      location: "Bayside, Airdrie",
      time: "3 weeks ago",
      text: "A windstorm tore off 12 feet of ridge capping on our two-story roof on a Thursday evening. AeroDome had an emergency tarp crew at our home early Friday morning and fully repaired it by Monday. Flat-rate pricing was given upfront with zero surprise fees. You can tell they use their own local crew rather than subbing it out."
    },
    {
      name: "Kirsten M.",
      location: "Sunset Ridge, Cochrane",
      time: "2 months ago",
      text: "We replaced our 18-year-old original roof. Nolan walked us through the IKO vs. GAF options and helped us take advantage of the 0% financing plan for 18 months. The crew was courteous, worked from 7:30 AM to 6 PM, and wrapped up a 2,800 sq ft roof in just two days. Outstanding contractor."
    }
  ]
};

// ─── OWNER STORY ─────────────────────────────────────────────────────────────
// Two-column owner section with photo and two metric boxes.
export const ownerStoryContent = {
  eyebrow: "LOCAL • TRUSTED • EXPERIENCED",
  heading: "OWNER-LED. LOCAL. CALGARY.",
  leadText:
    "In 2011, Nolan Thrace founded AeroDome Roofing with one non-negotiable: we will never subcontract a Calgary roof. Alberta's volatile weather — from 110 km/h Chinook winds to golf-ball hailstorms — demands year-round local expertise that storm-chasing out-of-province crews cannot provide.",
  bodyText:
    "Every shingle is installed by our permanent, COR™ safety-certified crew. Nolan personally inspects your roof before and after every project, and backs it with a signed 10-Year Workmanship Warranty.",
  ctaLabel: "READ OUR FULL STORY",
  floatingBadge: {
    years: "14+",
    strong: "YEARS IN BUSINESS",
    sub: "FOUNDED 2011"
  },
  metrics: [
    {
      iconName: "Award",
      title: "850+ ROOFS COMPLETED",
      desc: "Serving Calgary, Airdrie, Cochrane, Chestermere, and Okotoks since 2011."
    },
    {
      iconName: "ShieldCheck",
      title: "100% LOCAL CREWS",
      desc: "Zero subcontracting. Every installer is a full-time, certified AeroDome employee."
    }
  ]
};

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
// 10 service buttons in a 2-column grid, plus section heading/intro.
export const servicesContent = {
  eyebrow: "OUR SERVICES",
  heading: "ROOFING + EXTERIORS, ONE ACCOUNTABLE TEAM",
  intro:
    "From emergency roof leak repair to full hail damage restoration and complete architectural shingle replacements, our certified in-house Calgary crew delivers uncompromising quality with zero subcontracting.",
  photoBadge: "RECENT COMPLETION • ASPEN WOODS, CALGARY SW",
  photoAlt: "AeroDome completed residential architectural shingle roof in Calgary",
  // Each button triggers the lead modal with the query string as context.
  buttons: [
    { name: "ROOF REPLACEMENT", iconName: "Home", query: "Residential Roof Replacement" },
    { name: "ROOF REPAIR", iconName: "Hammer", query: "Roof Repair & Leak Detection" },
    { name: "STORM DAMAGE", iconName: "Zap", query: "Hail & Storm Damage Restoration" },
    { name: "GUTTERS", iconName: "Droplets", query: "Eavestrough & Gutter Installation" },
    { name: "SIDING", iconName: "Layers", query: "Exterior Siding & Flashing" },
    { name: "COMMERCIAL ROOFING", iconName: "Building2", query: "Commercial Roofing" },
    { name: "SKYLIGHTS", iconName: "Sun", query: "Skylight Installation & Replacement" },
    { name: "21-POINT INSPECTION", iconName: "Search", query: "Roof Inspections & Maintenance" },
    { name: "INSURANCE CLAIMS", iconName: "FileText", query: "Hail & Storm Damage Restoration" },
    { name: "FLAT ROOFING", iconName: "ShieldCheck", query: "Flat / Low-Slope Roofing" }
  ]
};

// ─── WHY CHOOSE US ────────────────────────────────────────────────────────────
// 6 feature points in a 2-column grid.
export const whyChooseUsContent = {
  eyebrow: "WHY WE'RE THE RIGHT CHOICE FOR CALGARY",
  heading: "BUILT FOR YOUR NEIGHBOURHOOD",
  intro:
    "Residential roofing and exterior installations engineered for Calgary's extreme climate — surviving hailstorms, Chinook wind gusts, and harsh prairie winters.",
  photoAlt: "AeroDome certified roofing crew on Calgary residential roof",
  photoTag: "AERODOME CERTIFIED IN-HOUSE CREW • CALGARY, ALBERTA",
  points: [
    {
      iconName: "Users",
      title: "LOCAL CREWS ONLY (NO SUBS)",
      desc: "100% full-time in-house technicians. Zero subcontracting, ever."
    },
    {
      iconName: "ShieldCheck",
      title: "10-YEAR WORKMANSHIP WARRANTY",
      desc: "Signed certificate issued directly by founder Nolan Thrace."
    },
    {
      iconName: "Zap",
      title: "SAME-WEEK EMERGENCY TARPING",
      desc: "Rapid dry-in response for active storm, hail, and wind damage leaks."
    },
    {
      iconName: "DollarSign",
      title: "0% FINANCING UP TO 18 MONTHS",
      desc: "Predictable, zero-interest monthly plans on qualifying roof replacements."
    },
    {
      iconName: "Camera",
      title: "AI-ASSISTED DAMAGE INSPECTIONS",
      desc: "High-resolution photo mapping to detect hidden hail bruising and shingle fractures."
    },
    {
      iconName: "CheckCircle2",
      title: "ZERO-NAIL LAWN GUARANTEE",
      desc: "Triple magnetic roller sweeps protect children, pets, and tires."
    }
  ]
};

// ─── PROJECT PROOF ───────────────────────────────────────────────────────────
// Before/after slider with 2 projects.
export const projectProofContent = {
  eyebrow: "OUR WORK",
  heading: "ROOFS WE HAVE REPLACED",
  subtitle: "Real hail damage restorations and roof replacements across Calgary, Airdrie, Cochrane & surrounding areas.",
  afterTag: "AFTER: NEW ROOF",
  beforeTag: "BEFORE: HAIL DAMAGE",
  warrantyBadge: "10-Year Workmanship Warranty",
  projects: [
    {
      title: "Class 4 Hail Restoration & Re-Roof",
      location: "Aspen Woods, Calgary SW",
      shingle: "GAF Timberline HDZ® Charcoal Slate"
    },
    {
      title: "Storm Wind Damage & Gutter System",
      location: "Bayside, Airdrie",
      shingle: "IKO Dynasty® Class 4 Impact"
    }
  ]
};

// ─── PROCESS SECTION ─────────────────────────────────────────────────────────
// 4 steps with heading, intro, and CTA button.
export const processContent = {
  eyebrow: "HOW IT WORKS",
  heading: "FOUR STEPS, NO SURPRISES",
  intro:
    "Transparent communication, guaranteed flat-rate pricing, and respectful treatment of your Calgary property — from first call to final walkthrough.",
  photoBadge: "100% IN-HOUSE CREW • 10-YEAR WORKMANSHIP GUARANTEE",
  photoAlt: "AeroDome residential roofing installation in progress in Calgary",
  ctaLabel: "GET MY FREE ESTIMATE",
  steps: [
    {
      num: "01",
      title: "BOOK YOUR FREE ROOF INSPECTION",
      desc: "We inspect your roof, run AI-assisted photo analysis, and assess hail, wind, or age-related damage — with zero sales pressure."
    },
    {
      num: "02",
      title: "RECEIVE A FLAT-RATE WRITTEN PROPOSAL",
      desc: "Review an itemized quote with zero hidden fees. Choose your shingle profile and explore 0% financing plans up to 18 months."
    },
    {
      num: "03",
      title: "IN-HOUSE INSTALLATION BY LOCAL CREW",
      desc: "Our COR™-certified Calgary crew completes most homes in 1 to 2 days, using protective tarps and daily magnetic nail sweeps."
    },
    {
      num: "04",
      title: "FINAL WALKTHROUGH & 10-YEAR WARRANTY",
      desc: "Nolan Thrace personally inspects your finished roof and issues your signed 10-Year Workmanship Warranty certificate."
    }
  ]
};

// ─── SPECIAL OFFERS ──────────────────────────────────────────────────────────
// One-card offers section.
export const specialOffersContent = {
  eyebrow: "SPECIAL OFFERS",
  heading: "FREE INSPECTIONS, ALWAYS",
  subtitle:
    "We never charge to inspect your roof, run AI photo damage scans, or provide an itemized flat-rate estimate. No obligation, ever.",
  offerCard: {
    heading: "MILITARY, FIRST RESPONDERS & 0% FINANCING (UP TO 18 MO)",
    body:
      "We proudly offer dedicated credits for Canadian military veterans, active service personnel, and Calgary first responders. All qualifying full roof replacements are eligible for zero-interest 0% APR financing up to 18 months through our Canadian lending partners.",
    ctaLabel: "CLAIM YOUR OFFER"
  }
};

// ─── RESOURCES / BLOG TIPS ───────────────────────────────────────────────────
// 3 article cards. slugs must match existing blog posts in blogs.js.
export const resourcesContent = {
  eyebrow: "KNOWLEDGE & RESOURCES",
  heading: "ROOFING GUIDES FOR CALGARY HOMEOWNERS",
  subtitle:
    "Practical guides to help you make confident decisions about your home's roof.",
  viewAllLabel: "View All Roofing Articles & Advice →",
  tips: [
    {
      tag: "COST & PLANNING",
      title: "HOW MUCH DOES A ROOF REPLACEMENT COST IN CALGARY?",
      slug: "roof-replacement-cost-in-kansas-city-what-drives-the-price",
      desc: "An unvarnished breakdown of architectural shingle costs: square footage, pitch multipliers, tear-off fees, and Alberta ice barrier requirements."
    },
    {
      tag: "HAIL & STORM",
      title: "HOW TO SPOT HIDDEN HAIL DAMAGE BEFORE WINTER",
      slug: "storm-chaser-roofers-in-overland-park-6-red-flags-homeowners-miss",
      desc: "Why golf-ball hail causes invisible fractures beneath the fiberglass matting that only leak months later during Calgary's freeze-thaw cycles."
    },
    {
      tag: "MATERIALS",
      title: "CLASS 4 IMPACT SHINGLES: WORTH THE UPGRADE IN CALGARY?",
      slug: "class-4-impact-resistant-shingles-worth-the-upgrade",
      desc: "Evaluating the UL 2218 impact test, insurance premium discounts for Alberta homeowners, and long-term resale value on hail-resistant shingles."
    }
  ]
};

// ─── FAQ SECTION ─────────────────────────────────────────────────────────────
// 5 accordion questions. Preserve exactly 5 — matches existing UI default open index.
export const faqContent = {
  eyebrow: "GOT QUESTIONS?",
  heading: "FREQUENTLY ASKED",
  faqs: [
    {
      q: "HOW MUCH DOES A ROOF REPLACEMENT COST IN CALGARY?",
      a: "Most Calgary homes (1,800–2,500 sq ft) range from $6,800 to $13,500 for a complete tear-off and architectural shingle replacement. The final price depends on roof pitch, complexity, layers to remove, and whether you select Class 3 or Class 4 impact-resistant shingles. AeroDome provides transparent flat-rate quotes — covering all materials, disposal, permits, and cleanup with zero hidden charges."
    },
    {
      q: "DO YOU PROVIDE 100% FREE ON-SITE ROOF INSPECTIONS?",
      a: "Yes — completely free and with zero obligation. Nolan or a senior Calgary estimator will inspect your shingles, flashing, vents, and gutters, then provide an AI-assisted damage report and an itemized written quote. We do not practice high-pressure sales."
    },
    {
      q: "HOW CAN I TELL IF HAIL DAMAGED MY ROOF?",
      a: "Hail bruising often hides beneath the fiberglass mat and is invisible from the ground. Signs include granule loss in your downspouts, soft dents on metal vents or gutters, and dark circular impact marks on shingles. AeroDome's free AI-assisted inspection photographs every square foot of your roof to find damage your insurer may otherwise miss."
    },
    {
      q: "SHOULD I REPAIR OR REPLACE MY CALGARY ROOF?",
      a: "If your roof is under 15 years old with isolated damage, targeted repair is often sufficient. If it's 20-plus years old, has widespread hail bruising, or has had multiple repairs, full replacement typically delivers better long-term value. Our estimators give you an honest recommendation — not the most expensive option."
    },
    {
      q: "WHICH SHINGLES ARE BEST FOR CALGARY WEATHER?",
      a: "Class 4 impact-resistant architectural shingles — such as GAF Timberline HDZ® and IKO Dynasty® — are the best choice for Calgary's hail alley. Their rubberized SBS core resists hail puncture, and many Alberta insurers offer premium discounts of up to 15% for qualifying Class 4 installations. AeroDome is certified to install both lines."
    }
  ]
};

// ─── SERVICE AREA SECTION ────────────────────────────────────────────────────
// 10 city pills in a 2-column grid, plus heading, intro, and CTA.
export const serviceAreaContent = {
  eyebrow: "WHERE WE WORK",
  heading: "SERVING CALGARY & FOOTHILLS",
  intro:
    "We focus 100% of our operations across Greater Calgary and surrounding Alberta communities, with daily in-house crew dispatch and rapid same-week emergency storm response.",
  ctaLabel: "CHECK YOUR NEIGHBOURHOOD",
  mapCaption: "DAILY IN-HOUSE CREW COVERAGE • GREATER CALGARY AREA",
  cities: [
    "CALGARY NW", "AIRDRIE",
    "CALGARY SW", "COCHRANE",
    "CALGARY SE", "CHESTERMERE",
    "CALGARY NE", "OKOTOKS",
    "BELTLINE / INNER CITY", "STRATHMORE"
  ]
};

// ─── FINAL CTA SECTION ───────────────────────────────────────────────────────
// Bottom lead-capture section with phone link and form.
export const finalCtaContent = {
  eyebrow: "READY TO PROTECT YOUR HOME?",
  heading: "GET YOUR FREE ROOF INSPECTION TODAY",
  desc:
    "Whether you need hail damage assessed for an Alberta insurance claim, a roof repair quote, or want to replace aging shingles before Calgary's winter, our certified in-house crew is ready.",
  phoneLabel: "Call our local Calgary office directly:",
  phone: "+1 333 456789",
  phoneHref: "tel:+1333456789",
  formCard: {
    title: "SEE WHAT YOUR PROJECT WILL COST",
    subtitle: "Guaranteed flat-rate pricing • 100% free on-site inspection",
    submitLabel: "GET AN ESTIMATE",
    microcopy: "Free on-site inspection • No obligation • Flat-rate pricing"
  }
};

