/**
 * servicesData.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for ALL copy on ServicesPage.jsx (hub) and
 * ServiceDetailPage.jsx (individual service pages).
 *
 * SEO keywords embedded throughout:
 *   PRIMARY    : roof replacement Calgary, roof repair Calgary,
 *                roofing contractor Calgary, residential roofing Calgary,
 *                licensed roofing contractor Calgary
 *   HAIL/STORM : hail damage roof repair Calgary, storm damage roof repair
 *                Calgary, Class 4 impact resistant shingles Calgary
 *   PRODUCTS   : IKO Dynasty shingles Calgary, Owens Corning Duration shingles,
 *                James Hardie siding Calgary, flat roof Calgary,
 *                gutter installation Calgary
 *   LOCAL      : NW Calgary, NE Calgary, SE Calgary, SW Calgary, Airdrie,
 *                Okotoks, Chestermere, Cochrane
 *   TRUST      : GAF Master Elite, IKO ShieldPRO, 10-year workmanship warranty,
 *                licensed and insured roofer Calgary, COR certified
 *   INTENT     : free roof estimate Calgary, free roof inspection Calgary
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const servicesHero = {
  breadcrumb: "HOME > SERVICES",
  eyebrow: "CALGARY'S LICENSED ROOFING CONTRACTOR",
  headline: "ROOFING + EXTERIORS, ONE ACCOUNTABLE TEAM",
  subtitle:
    "RESIDENTIAL ROOF REPLACEMENT, HAIL DAMAGE REPAIR & EXTERIOR RESTORATION ACROSS CALGARY, ALBERTA — ALL BACKED BY A 10-YEAR WORKMANSHIP WARRANTY.",
  bgImage: "/images/service_crew.jpg"
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. SERVICES QUICK-NAV HUB
// ─────────────────────────────────────────────────────────────────────────────
export const servicesHub = {
  eyebrow: "WHAT WE DO",
  headline: "EVERY EXTERIOR PROBLEM. ONE LICENSED TEAM.",
  intro:
    "Whether your roof took a hail hit in NE Calgary, your gutters pulled away in Airdrie, or your siding is overdue before winter — AeroDome's fully in-house crew handles everything from your first free inspection to the final sign-off. No subcontractors. No surprises.",
  aerialImage: "/images/services_aerial_roof.jpg",
  aerialCaption: "RECENT ROOF REPLACEMENT • AERODOME ROOFING — NW CALGARY",
  buttons: [
    { name: "ROOF REPLACEMENT", id: "roof-replacement", icon: "Home" },
    { name: "ROOF REPAIR", id: "roof-repair", icon: "Hammer" },
    { name: "NEW ROOF INSTALLATION", id: "new-roof-installation", icon: "HardHat" },
    { name: "RESIDENTIAL ROOFING", id: "residential-roofing", icon: "Building" },
    { name: "WINDOW REPLACEMENT", id: "windows", icon: "Grid" },
    { name: "COMMERCIAL ROOFING", id: "commercial-roofing", icon: "Building2" },
    { name: "JAMES HARDIE SIDING", id: "siding", icon: "Layers" },
    { name: "GUTTERS & EAVESTROUGHS", id: "gutters", icon: "Droplets" },
    { name: "CONCRETE & HARDSCAPING", id: "concrete", icon: "Hammer" },
    { name: "STORM DAMAGE RESTORATION", id: "storm-damage", icon: "Zap" },
    { name: "SOLAR ROOFING", id: "solar-roofing", icon: "Sun" }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. ALTERNATING SERVICE SHOWCASES + DETAIL PAGE DATA
//    Fields used on ServicesPage (hub):  eyebrow, title, description, bullets,
//                                        image, imageAlt, ctaText, secondaryCtaText
//    Fields used on ServiceDetailPage:   all remaining fields below
// ─────────────────────────────────────────────────────────────────────────────
export const servicesShowcase = [
  // ─── RESIDENTIAL ROOFING ───────────────────────────────────────────────────
  {
    id: "residential-roofing",
    breadcrumb: "RESIDENTIAL ROOFING",
    eyebrow: "LICENSED ROOFING CONTRACTOR CALGARY",
    title: "RESIDENTIAL ROOFING",
    heroHeadline: "RESIDENTIAL ROOFING CALGARY HOMEOWNERS TRUST",
    description:
      "AeroDome is the licensed roofing contractor Calgary homeowners trust for every home roofing service — from asphalt shingle roof replacement to emergency roof leak repair and missing shingles repair. As a residential roofing contractor our city relies on, we tackle hail damage roof repair, storm damage residential roof, and full roof replacement with Class 4 hail resistant roofing — all backed by a 10-year workmanship warranty. Contact your local roofing company for a free estimate today.",
    bullets: [
      "Free roof inspection Calgary & instant roof quote Calgary homeowners rely on",
      "Class 4 impact resistant shingles Calgary (IKO Dynasty & Owens Corning Duration)",
      "Complete roof leak repair Calgary & full residential roof replacement Calgary",
      "10-year workmanship warranty Calgary from a licensed and insured roofer Calgary"
    ],
    image: "/images/about_residential_home.jpg",
    imageAlt: "Licensed residential roofing contractor Calgary — AeroDome Roofing",
    reverse: false,
    ctaText: "LEARN MORE",
    secondaryCtaText: "FREE ROOF ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY CHOOSE US",
    whyHeading: "CALGARY'S 5 STAR RATED ROOFING COMPANY",
    whyItems: [
      { icon: "Award", text: "5 star rated roofing company Calgary & BBB accredited roofing company Calgary — Owens Corning Platinum contractor Calgary & IKO Craftsman installer Calgary credentials with award winning roofing Calgary reputation." },
      { icon: "ShieldCheck", text: "10-year workmanship warranty Calgary & full manufacturer roofing warranty Calgary — installed exclusively by our licensed and insured roofer Calgary team with zero third-party subcontractors." },
      { icon: "Clock", text: "Hail resistant roofing Calgary & storm damage residential roof Calgary specialists — providing insurance ready roof inspection Calgary reports as the roofing company that helps with insurance claims Calgary." }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT DOES ROOF REPLACEMENT INCLUDE CALGARY",
    includedItems: [
      "Complete tear-off & asphalt shingle roof replacement Calgary with premium architectural shingles",
      "Ice and water shield Calgary installation across eaves, roof valley repair Calgary sections & chimneys",
      "Engineered roof ventilation Calgary & drip edge installation Calgary for -40°C freeze-thaw protection",
      "Flashing seal for skylight leak repair Calgary, roof repair around chimney Calgary & magnetic nail sweep"
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "NEW ROOF INSTALLATION CALGARY IN 4 SIMPLE STEPS",
    processSubtitle:
      "From your free roof inspection Calgary to final sign-off — transparent pricing and affordable residential roofing Calgary can depend on.",
    processSteps: [
      {
        step: "01",
        title: "FREE ROOF INSPECTION CALGARY & DAMAGE AUDIT",
        desc: "We perform a thorough 21-point attic and drone scan — assessing missing shingles repair Calgary needs, roof leak repair Calgary vulnerabilities, or storm damage residential roof Calgary impact."
      },
      {
        step: "02",
        title: "BEST ROOFING MATERIAL FOR CALGARY CLIMATE",
        desc: "Choose from Class 4 impact resistant shingles Calgary, UL 2218 shingles Calgary, IKO Dynasty shingles Calgary, or Owens Corning Duration shingles Calgary with upfront roof replacement financing Calgary options."
      },
      {
        step: "03",
        title: "PRECISION HOME ROOFING SERVICES CALGARY",
        desc: "Our in-house crew executes new roof installation Calgary or emergency roof repair Calgary adhering strictly to Alberta Building Code, with daily site tarping and same day roof repair Calgary protocols when weather turns."
      },
      {
        step: "04",
        title: "WARRANTY SIGN-OFF & MITIGATION OF LOSS ROOF CALGARY",
        desc: "Nolan Thrace inspects every flashing and valley before issuing your transferable 10-year workmanship warranty Calgary and insurance documentation for complete mitigation of loss roof Calgary compliance."
      }
    ],
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqHeading: "RESIDENTIAL ROOFING CALGARY FAQS",
    faqs: [
      {
        q: "WHAT IS THE AVERAGE ROOF REPLACEMENT COST CALGARY?",
        a: "Roof replacement cost Calgary typically ranges between $7,500 and $16,500+ depending on architectural pitch, square footage, and chosen asphalt shingles Calgary. AeroDome provides a transparent, affordable residential roofing Calgary quote with flexible roof replacement financing Calgary so you know exact costs before work starts."
      },
      {
        q: "HOW LONG DOES ROOF REPLACEMENT TAKE CALGARY?",
        a: "How long does roof replacement take Calgary? For most standard homes across the Greater Calgary area, Airdrie, Okotoks, Chestermere, and Cochrane, residential roof replacement Calgary is completed in just 1 to 2 days, weather permitting, including full cleanup and magnetic nail sweeps."
      },
      {
        q: "DOES INSURANCE COVER ROOF REPLACEMENT CALGARY AFTER A STORM?",
        a: "Does insurance cover roof replacement Calgary? Yes, Alberta home insurance roof coverage generally covers hail damage roof repair Calgary or full replacement when storm impact is confirmed. We conduct a roof inspection after hail Calgary, capture before and after hail damage roof Calgary photos, and handle your hail damage insurance claim Calgary directly with your adjuster."
      },
      {
        q: "HOW DO I GET A ROOFING QUOTE CALGARY OR EMERGENCY ROOF REPAIR CALGARY?",
        a: "You can get a roofing quote Calgary or book same day roof repair Calgary by calling (403) 918-4444. We provide an instant roof quote Calgary homeowners can review online or schedule a free roof inspection Calgary wide from NW Calgary to SE Calgary."
      }
    ],
    relatedServices: ["storm-damage", "gutters", "siding"]
  },

  // ─── ROOF REPAIR ───────────────────────────────────────────────────────────
  {
    id: "roof-repair",
    breadcrumb: "ROOF REPAIR",
    eyebrow: "EMERGENCY & SAME DAY ROOF REPAIR CALGARY",
    title: "ROOF REPAIR",
    heroHeadline: "ROOF REPAIR IN CALGARY — FIXED FAST, DONE RIGHT",
    description:
      "AeroDome is the licensed roof repair contractor Calgary homeowners call first — available 24/7 for emergency roof repair before water damage spreads. From roof leak repair and residential roof repair to same day and affordable roof repair, our local crew responds fast with upfront pricing and a 10-year workmanship warranty. Book your free inspection with a trusted local roof repair company today.",
    bullets: [
      "Free roof repair estimate Calgary with same day emergency roof tarping Calgary",
      "Fast roof leak repair Calgary & missing shingles repair Calgary before water spreads",
      "Flashing, roof valley repair Calgary & skylight leak repair Calgary guaranteed watertight",
      "10-year workmanship warranty roof repair Calgary backed by a licensed and insured roofer Calgary"
    ],
    image: "/images/before_hail.jpg",
    imageAlt: "Emergency roof repair and leak detection in Calgary — AeroDome Roofing",
    reverse: true,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET SAME-DAY REPAIR QUOTE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY CHOOSE US",
    whyHeading: "WHY CALGARY CALLS AERODOME FOR ROOF REPAIR",
    whyItems: [
      { icon: "Clock", text: "Same day roof repair Calgary & rapid emergency roof tarping Calgary — our local roofer Calgary crews respond fast across the Greater Calgary area to dry-in active leaks and prevent costly drywall or mould damage." },
      { icon: "ShieldCheck", text: "Honest roof repair vs replacement Calgary advice — we never push an expensive replacement when a targeted asphalt shingle repair Calgary solves your problem, backed by our workmanship warranty roof repair Calgary guarantee." },
      { icon: "Award", text: "5 star rated roofer Calgary & BBB accredited roofing Calgary — trusted roofing contractor Calgary with Owens Corning shingles Calgary and IKO shingles Calgary matching skills for a seamless architectural finish." }
    ],
    scopeEyebrow: "REPAIR TYPES WE FIX",
    scopeHeading: "WHAT'S INCLUDED IN ROOF REPAIR CALGARY",
    includedItems: [
      "Roof leak repair after rain Calgary & missing shingles repair Calgary matched to your existing profile",
      "Roof flashing repair Calgary, chimney flashings & skylight leak repair Calgary using high-grade roof sealant Calgary",
      "Roof valley repair Calgary & ice dam damage repair Calgary with self-adhering ice and water shield Calgary",
      "Roof vent repair Calgary, roof deck repair Calgary, soffit and fascia repair Calgary & full magnetic nail sweep"
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "HOW ROOF REPAIR WORKS IN 4 FAST STEPS",
    processSubtitle:
      "No runaround, no high-pressure sales pitches, and no surprises — just fast, reliable residential roof repair Calgary homeowners depend on.",
    processSteps: [
      {
        step: "01",
        title: "RAPID TRIAGE & FREE ROOF INSPECTION CALGARY",
        desc: "Call our direct dispatch line for same day roof repair Calgary response. Nolan Thrace or our repair specialist arrives promptly, traces the moisture path to its source, and secures immediate emergency roof tarping Calgary if water is actively entering."
      },
      {
        step: "02",
        title: "HONEST DIAGNOSIS & SAME DAY ROOF QUOTE CALGARY",
        desc: "We show you clear photo evidence of the failure — whether damaged flashings, hail bruises, or ice damming. You receive an upfront, affordable roof repair Calgary quote with zero pressure and zero upsells."
      },
      {
        step: "03",
        title: "PRECISION ASPHALT SHINGLE REPAIR CALGARY",
        desc: "Our in-house Calgary crew replaces broken decking, installs ice and water shield Calgary, and secures color-matched IKO shingles Calgary or Owens Corning shingles Calgary with industrial-grade roof sealant Calgary."
      },
      {
        step: "04",
        title: "WATERPROOF WATER TEST & WARRANTY SIGN-OFF",
        desc: "We conduct a high-pressure water test to verify 100% leak-free integrity, perform a magnetic lawn sweep, and hand you an insurance ready roof inspection Calgary report and signed workmanship warranty."
      }
    ],
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqHeading: "COMMON QUESTIONS ABOUT ROOF REPAIR IN CALGARY",
    faqs: [
      {
        q: "HOW MUCH DOES ROOF REPAIR COST IN CALGARY?",
        a: "How much does roof repair cost Calgary? Minor fixes like missing shingles repair Calgary or small flashing reseals start between $350 and $850. Complex roof valley repair Calgary, skylight leaks, or roof deck repair Calgary typically range from $950 to $2,500+. AeroDome provides a free roof repair estimate Calgary with flat-rate quotes."
      },
      {
        q: "HOW DO I KNOW IF MY ROOF NEEDS REPAIR OR REPLACEMENT CALGARY?",
        a: "Roof repair vs replacement Calgary comes down to age and damage extent. If your roof is under 15 years old and damage is confined to a localized area, a targeted repair is your best and most cost-effective choice. If shingles are brittle across the entire slope, we provide honest advice so you can plan ahead."
      },
      {
        q: "DOES ALBERTA HOME INSURANCE COVER ROOF REPAIR IN CALGARY?",
        a: "Does insurance cover roof repair Calgary? Alberta home insurance roof repair coverage generally applies when damage results from an unpreventable storm event, such as a hail storm or severe wind. AeroDome is a roofing company that helps with insurance claims Calgary — preparing photo reports for your hail damage insurance claim Calgary."
      },
      {
        q: "HOW FAST CAN YOU COMPLETE EMERGENCY ROOF REPAIR IN CALGARY?",
        a: "For active leaks, we prioritize emergency roof repair Calgary and same day roof repair Calgary across NW Calgary, NE Calgary, SW Calgary, SE Calgary, Airdrie, Okotoks, Chestermere, and Cochrane. Most repairs are fully completed in 2 to 4 hours on the same day."
      }
    ],
    relatedServices: ["residential-roofing", "storm-damage", "gutters"]
  },

  // ─── ROOF REPLACEMENT ──────────────────────────────────────────────────────
  {
    id: "roof-replacement",
    breadcrumb: "ROOF REPLACEMENT",
    eyebrow: "LICENSED ROOF REPLACEMENT CONTRACTOR CALGARY",
    title: "ROOF REPLACEMENT",
    heroHeadline: "ROOF REPLACEMENT IN CALGARY — BUILT TO OUTLAST ALBERTA WEATHER",
    description:
      "AeroDome is the licensed roof replacement contractor Calgary homeowners choose for full roof replacement and new roof installation built to outlast Alberta weather. As a trusted residential roof replacement company, we handle everything from asphalt shingle roof replacement to complete tear-offs — with Class 4 impact resistant shingles, transparent flat-rate pricing, and a 10-year workmanship warranty. Get your free estimate from a local roof replacement company today.",
    bullets: [
      "Free roof replacement estimate Calgary with 21-point drone attic scan",
      "Class 4 impact resistant shingles Calgary (IKO Dynasty & Owens Corning Duration)",
      "Full tear-off, roof decking replacement Calgary check & synthetic underlayment",
      "10-year workmanship warranty roofing Calgary plus manufacturer lifetime warranty"
    ],
    image: "/images/after_roof.jpg",
    imageAlt: "Full residential roof replacement in Calgary — AeroDome Roofing",
    reverse: false,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY CHOOSE US",
    whyHeading: "CALGARY'S TRUSTED ROOF REPLACEMENT COMPANY",
    whyItems: [
      {
        icon: "Award",
        text: "5 star rated roofing company Calgary & BBB accredited roofing company Calgary — certified as an Owens Corning Platinum contractor Calgary and IKO Craftsman installer Calgary with award winning roofing Calgary standards."
      },
      {
        icon: "ShieldCheck",
        text: "Two warranties, not one — every new roof installation Calgary project is backed by our 10-year workmanship warranty roofing Calgary guarantee plus full Owens Corning lifetime warranty Calgary or IKO roofing warranty Calgary coverage."
      },
      {
        icon: "Clock",
        text: "Hail resistant roof replacement Calgary & storm damage roof replacement Calgary specialists — we document hail damage insurance claim Calgary losses with forensic drone reports for insurance roof replacement Calgary claims."
      }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT DOES ROOF REPLACEMENT INCLUDE CALGARY",
    includedItems: [
      "Full tear-off and roof decking replacement Calgary inspection — removing all old shingles down to bare plywood",
      "High-temp ice and water shield Calgary installed in all valleys, eaves, and penetrations for freeze-thaw defence",
      "Class 4 impact resistant shingles Calgary installation (IKO Dynasty shingles Calgary or Owens Corning Duration shingles Calgary)",
      "Engineered roof ventilation Calgary, soffit and ridge vent Calgary balancing & full magnetic lawn sweep"
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "FULL ROOF REPLACEMENT CALGARY IN 4 SIMPLE STEPS",
    processSubtitle:
      "From your free roof inspection Calgary to the final walkthrough — predictable timelines, transparent pricing, and zero surprises.",
    processSteps: [
      {
        step: "01",
        title: "FREE ROOF INSPECTION CALGARY & DAMAGE REPORT",
        desc: "We conduct a 21-point drone and attic inspection to evaluate whether you need a roof replacement vs repair Calgary. If storm impact is present, we prepare an insurance ready roof inspection Calgary file at no added cost."
      },
      {
        step: "02",
        title: "MATERIAL SELECTION & FLAT-RATE QUOTE",
        desc: "We help you choose the best roofing shingles for Calgary climate — including UL 2218 impact resistant shingles Calgary with Class 4 insurance discounts — and provide flexible roof replacement financing Calgary options."
      },
      {
        step: "03",
        title: "LICENSED IN-HOUSE TEAR-OFF & INSTALLATION",
        desc: "Our full-time crew completes your new roof installation Calgary in 1 to 2 days, replacing rotted sheathing, sealing drip edge installation Calgary perimeters, and keeping your property protected with heavy-duty tarps."
      },
      {
        step: "04",
        title: "FINAL WALKTHROUGH & DUAL WARRANTY SIGN-OFF",
        desc: "Nolan Thrace inspects every flashing and ridge cap with you, verifies a magnetic nail sweep, and delivers your signed 10-year workmanship warranty Calgary alongside your manufacturer warranty."
      }
    ],
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqHeading: "COMMON QUESTIONS ABOUT ROOF REPLACEMENT IN CALGARY",
    faqs: [
      {
        q: "HOW MUCH DOES ROOF REPLACEMENT COST IN CALGARY?",
        a: "Roof replacement cost Calgary generally ranges from $7,500 to $18,000+ depending on architectural square footage, pitch, decking condition, and shingle tier. AeroDome provides a guaranteed flat-rate proposal with affordable roof replacement Calgary plans and 0% roof replacement financing Calgary options."
      },
      {
        q: "HOW LONG DOES A ROOF REPLACEMENT TAKE IN CALGARY?",
        a: "How long does roof replacement take Calgary? For standard single-family homes in the Greater Calgary area, Airdrie, Okotoks, Chestermere, and Cochrane, a full roof replacement Calgary is completed in 1 to 2 days, weather permitting. Daily cleanup and magnetic sweeps are standard."
      },
      {
        q: "DOES HOME INSURANCE COVER FULL ROOF REPLACEMENT IN CALGARY?",
        a: "Does insurance cover full roof replacement Calgary? Alberta home insurance full roof replacement coverage may apply if your roof suffered sudden hail damage or storm damage. AeroDome is a roofing company that handles insurance claims Calgary — meeting your adjuster on-site to document losses."
      },
      {
        q: "WHAT IS THE BEST ROOFING MATERIAL FOR CALGARY'S CLIMATE?",
        a: "Class 4 impact resistant shingles Calgary — such as IKO Dynasty shingles Calgary or Owens Corning Duration shingles Calgary — are the top choice for Calgary's hail alley. They resist 2-inch hail impacts, withstand -40°C Chinook freeze-thaw cycles, and may lower your annual insurance premiums by up to 15%."
      }
    ],
    relatedServices: ["roof-repair", "storm-damage", "gutters"]
  },

  // ─── WINDOW REPLACEMENT ────────────────────────────────────────────────────
  {
    id: "windows",
    breadcrumb: "WINDOWS",
    eyebrow: "ENERGY-EFFICIENT WINDOW REPLACEMENT CALGARY",
    title: "WINDOW REPLACEMENT",
    heroHeadline: "WINDOW REPLACEMENT",
    description:
      "Calgary's temperature swings — from +35°C summers to -40°C winters — push drafty, aging windows past their limit fast. Gaps let in cold air, condensation builds between panes, and your heating bill climbs steadily. AeroDome installs custom-measured, Energy Star® certified double and triple-pane windows sealed with dual weather-strip barriers engineered for -40°C performance. Our in-house installers remove old units, flash every opening correctly, and finish interiors and exteriors — leaving no gaps, no mess, and no thermal bridges.",
    bullets: [
      "Energy Star® certified double & triple-pane thermal glass",
      "Precision laser measurement — no gaps, no drafty reveals",
      "Dual weather-strip barriers engineered for -40°C Calgary winters",
      "Complete interior trim & exterior aluminum capping finish"
    ],
    image: "/images/service_windows.jpg",
    imageAlt: "Energy-efficient window replacement Calgary — AeroDome Roofing",
    reverse: true,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY AERODOME",
    whyHeading: "WHY AERODOME FOR WINDOWS",
    whyItems: [
      { icon: "Sparkles", text: "Energy Star® rated window options — cuts heating & cooling costs immediately" },
      { icon: "ShieldCheck", text: "Precision laser measurement to the millimeter — zero gap installation" },
      { icon: "TrendingDown", text: "Dual weather-strip barriers reduce heat loss through Calgary winters" }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT'S INCLUDED",
    includedItems: [
      "Removal & responsible disposal of old window units",
      "Proper insulated flashing & waterproofing around every opening",
      "Energy-efficient double or triple-pane thermal glass installation",
      "Interior trim & exterior aluminum capping — finished clean"
    ],
    processEyebrow: "THE PROCESS",
    processHeading: "HOW IT WORKS",
    processSubtitle:
      "Simple, transparent, and seamless — from your first call to the final signed warranty.",
    processSteps: [
      {
        step: "01",
        title: "WINDOW CONSULTATION & AUDIT",
        desc: "We assess your current windows, discuss Energy Star® style and performance options, and recommend the right fit for your home's layout and Calgary heating budget."
      },
      {
        step: "02",
        title: "PRECISION LASER MEASUREMENT",
        desc: "Our estimators measure every opening down to the millimeter using laser instruments. No guesswork, no gaps, no drafty cold-air reveals after installation."
      },
      {
        step: "03",
        title: "CERTIFIED INSTALLATION",
        desc: "Our in-house installers remove old units, flash and waterproof every opening, and install new sealed thermal-efficient windows — leaving no debris behind."
      },
      {
        step: "04",
        title: "FINAL WALKTHROUGH",
        desc: "We walk through every installed window with you, check seals, operate all hardware, and confirm airtight performance before final sign-off."
      }
    ],
    faqEyebrow: "GOT QUESTIONS?",
    faqHeading: "COMMON QUESTIONS",
    faqs: [
      {
        q: "WHAT WINDOW BRANDS DO YOU INSTALL IN CALGARY?",
        a: "We partner with leading Canadian and North American manufacturers including Andersen, Pella, and Lux Windows, offering durable vinyl, composite, and aluminum-clad frames engineered for Alberta's extreme freeze-thaw cycles."
      },
      {
        q: "CAN WINDOW DAMAGE BE COVERED BY MY HOME INSURANCE?",
        a: "Yes — if window damage is caused by severe hail, windborne debris, or storm impact, it is often covered under your homeowner's policy. We provide complete forensic damage reports and meet directly with your insurance adjuster."
      },
      {
        q: "HOW LONG DOES WINDOW REPLACEMENT TAKE?",
        a: "Most residential window replacements are completed within 1 to 2 days depending on the number of openings. Our crew cleans up completely and leaves zero debris after each shift."
      },
      {
        q: "DO YOU REPLACE SINGLE WINDOWS OR ONLY FULL HOMES?",
        a: "Both. While whole-home replacements offer maximum energy savings and bundle value, we regularly replace single compromised, broken, or drafty windows and sliding patio doors."
      }
    ],
    relatedServices: ["siding", "gutters", "storm-damage"]
  },

  // ─── STORM DAMAGE RESTORATION ──────────────────────────────────────────────
  {
    id: "storm-damage",
    breadcrumb: "STORM DAMAGE",
    eyebrow: "HAIL DAMAGE ROOF REPAIR CALGARY",
    title: "STORM DAMAGE RESTORATION",
    heroHeadline: "HAIL & STORM DAMAGE RESTORATION IN CALGARY",
    description:
      "Calgary's hailstorms can destroy shingle integrity, dent fascia, crack siding, and compromise roof ventilation — all without a visible indoor leak. By the time water shows on your ceiling, the damage has been advancing for weeks. AeroDome's storm damage restoration team performs forensic drone inspections, documents every hail impact with digital photography, meets your Alberta insurance adjuster on-site, and manages the complete hail damage roof repair — from emergency tarping through certified installation — under direct insurance billing.",
    bullets: [
      "Same-week emergency roof tarping & leak mitigation",
      "Forensic photographic proof & direct insurance adjuster walk-through",
      "Itemized Xactimate billing & insurance claim documentation",
      "Full code upgrade — shingles, fascia, eavestroughs & siding"
    ],
    image: "/images/after_roof.jpg",
    imageAlt: "Hail damage roof repair Calgary storm restoration — AeroDome Roofing",
    reverse: true,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY AERODOME",
    whyHeading: "WHY AERODOME FOR STORM DAMAGE",
    whyItems: [
      { icon: "ShieldCheck", text: "Forensic photographic proof & direct insurance billing — we handle the paperwork" },
      { icon: "Award", text: "On-site adjuster walk-through representation — we ensure every item is covered" },
      { icon: "Clock", text: "Same-week emergency tarping & leak mitigation — fast response across Calgary" }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT'S INCLUDED",
    includedItems: [
      "21-point photographic storm damage inspection report",
      "Emergency leak mitigation & temporary waterproof tarping",
      "Direct itemized billing negotiations with your insurance adjuster",
      "Full restoration — shingles, fascia, eavestroughs & siding"
    ],
    processEyebrow: "THE PROCESS",
    processHeading: "HOW IT WORKS",
    processSubtitle:
      "Simple, transparent, and seamless — from your first call to the final signed warranty.",
    processSteps: [
      {
        step: "01",
        title: "FORENSIC DAMAGE INSPECTION",
        desc: "We perform high-definition drone and close-up camera inspection of shingles, soft metals, vents, and gutters — documenting every hail impact before evidence fades."
      },
      {
        step: "02",
        title: "INSURANCE CLAIM DOCUMENTATION",
        desc: "We draft an itemized Xactimate estimate and provide undeniable photographic evidence of hail bruising to support your Alberta home insurance claim."
      },
      {
        step: "03",
        title: "ADJUSTER WALKTHROUGH",
        desc: "We meet your insurance adjuster on-site on your behalf, walking every elevation to ensure every damaged component — shingles, ridge caps, vents, flashings — is included."
      },
      {
        step: "04",
        title: "CERTIFIED RESTORATION",
        desc: "Our in-house crew completes the full roof and exterior restoration with Class 4 impact-resistant shingles and premium materials, backed by our 10-year workmanship warranty."
      }
    ],
    faqEyebrow: "GOT QUESTIONS?",
    faqHeading: "COMMON QUESTIONS",
    faqs: [
      {
        q: "WILL FILING A HAIL CLAIM RAISE MY INSURANCE RATES IN ALBERTA?",
        a: "In Alberta, severe weather events like hailstorms are classified as Acts of Nature — comprehensive claims that typically do not spike your individual premium rate the way at-fault claims do. Consult your broker for your specific policy terms."
      },
      {
        q: "WHAT IF MY INSURANCE ADJUSTER SAYS THERE IS NO DAMAGE?",
        a: "Adjusters often inspect from ground level or miss micro-fractures in shingle fiberglass mats. We provide high-resolution macro photography and request a re-inspection with our senior estimator present on your roof."
      },
      {
        q: "HOW LONG DO I HAVE TO FILE A HAIL CLAIM IN CALGARY?",
        a: "Most Alberta homeowner policies require filing within 1 to 2 years of the storm event. However, moisture works through freeze-thaw cycles every winter — early inspection protects your claim and your home."
      },
      {
        q: "WHAT OUT-OF-POCKET COSTS WILL I HAVE?",
        a: "Under standard replacement-cost coverage, your only out-of-pocket expense is your deductible. We handle direct insurance invoicing for all remaining labour and materials."
      }
    ],
    relatedServices: ["residential-roofing", "siding", "windows"]
  },

  // ─── CONCRETE ─────────────────────────────────────────────────────────────
  {
    id: "concrete",
    breadcrumb: "CONCRETE",
    eyebrow: "CONCRETE DRIVEWAYS & PATIOS CALGARY",
    title: "CONCRETE",
    heroHeadline: "ENGINEERED CONCRETE DRIVEWAYS, PATIOS & WALKWAYS",
    description:
      "Calgary's deep frost lines destroy poorly built concrete slabs. Heaving, cracking, and spalling happen when contractors skip proper base preparation, use the wrong mix, or neglect expansion joints. AeroDome pours engineered concrete designed for Alberta's climate: 32 MPa air-entrained mix over compacted crushed gravel, tied with a 10M steel rebar grid, sealed with industrial-grade siloxane to resist road salt and repeated freeze-thaw stress. Driveways, patios, exposed aggregate, and stamped decorative finishes available across Calgary and Okotoks.",
    bullets: [
      "32 MPa air-entrained commercial mix — engineered for Alberta frost",
      "10M rebar grid & 6-inch compacted gravel base on every pour",
      "Broom-finish, stamped & exposed aggregate decorative designs",
      "Industrial siloxane sealant protects against de-icing salt spalling"
    ],
    image: "/images/services_concrete_patio.jpg",
    imageAlt: "Engineered concrete driveway patio installation Calgary — AeroDome Roofing",
    reverse: false,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY AERODOME",
    whyHeading: "WHY AERODOME FOR CONCRETE",
    whyItems: [
      { icon: "ShieldCheck", text: "Engineered 10M rebar grid over 6-inch compacted gravel — built for Alberta's severe frost lines" },
      { icon: "Sparkles", text: "32 MPa air-entrained commercial concrete mix — resists freeze-thaw expansion damage" },
      { icon: "TrendingDown", text: "High-solids siloxane sealer prevents de-icing salt spalling and colour fade" }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT'S INCLUDED",
    includedItems: [
      "Subgrade excavation & laser-leveled gravel compaction",
      "10M grade 400 steel rebar grid elevated on chairs",
      "Precision concrete pour with hand-troweled control joints",
      "Deep penetrating siloxane sealant & protective cure finish"
    ],
    processEyebrow: "THE PROCESS",
    processHeading: "HOW IT WORKS",
    processSubtitle:
      "Simple, transparent, and seamless — from your first call to the final signed warranty.",
    processSteps: [
      {
        step: "01",
        title: "DESIGN & DRAINAGE SURVEY",
        desc: "We survey slope, soil drainage, and elevation grading to ensure water runs cleanly away from your foundation — a critical step in Calgary's wet spring seasons."
      },
      {
        step: "02",
        title: "BASE & REBAR PREP",
        desc: "We excavate to virgin ground, compact a 6-inch crushed gravel base, and tie a 10M steel rebar grid to resist Alberta's deep frost heaving."
      },
      {
        step: "03",
        title: "POUR & FINISH",
        desc: "Our concrete specialists pour 32 MPa air-entrained mix, screed, edge, and apply your chosen finish — broom, stamped pattern, or exposed aggregate."
      },
      {
        step: "04",
        title: "CUT, SEAL & CURE",
        desc: "We saw control joints to direct thermal shrinkage, wash the surface, and apply a penetrating siloxane sealer to protect against Calgary road salt and UV fade."
      }
    ],
    faqEyebrow: "GOT QUESTIONS?",
    faqHeading: "COMMON QUESTIONS",
    faqs: [
      {
        q: "HOW LONG BEFORE I CAN PARK ON NEW CONCRETE?",
        a: "You can walk on new concrete after 24 to 48 hours. Light passenger vehicles can park after 7 days. Full 28-day cure strength is recommended before parking heavy trucks, trailers, or RVs."
      },
      {
        q: "HOW DO YOU STOP CRACKING IN CALGARY'S COLD WINTERS?",
        a: "We excavate deeper, use 6+ inches of compacted crushed gravel base, tie 10M steel rebar grids, specify air-entrained concrete mix, and place expansion control joints every 8 to 10 feet."
      },
      {
        q: "IS STAMPED CONCRETE SLIPPERY WHEN WET OR ICY?",
        a: "We add micro-grip anti-slip aggregate directly into our high-solids topical sealers, providing safe traction even during wet Calgary spring thaw conditions."
      },
      {
        q: "HOW OFTEN SHOULD CONCRETE BE RESEALED IN CALGARY?",
        a: "We recommend a fresh coat of siloxane or acrylic sealer every 2 to 3 years to maintain colour vibrancy and defend against Calgary road salt and freeze-thaw damage."
      }
    ],
    relatedServices: ["residential-roofing", "siding", "gutters"]
  },

  // ─── SIDING ───────────────────────────────────────────────────────────────
  {
    id: "siding",
    breadcrumb: "SIDING",
    eyebrow: "JAMES HARDIE SIDING CALGARY",
    title: "SIDING",
    heroHeadline: "PREMIUM SIDING & EXTERIOR CLADDING IN CALGARY",
    description:
      "Calgary's hail, wind, and extreme temperature cycles crack vinyl siding and rot wood trim. James Hardie® fiber cement is non-combustible, hail-resistant, and dimensionally stable at -40°C. As a James Hardie® Preferred Contractor, AeroDome installs fiber cement lap, board-and-batten, and shake profiles with rigid insulation backing, breathable housewrap, and colour-matched aluminum fascia — a complete exterior envelope that protects your home for decades and qualifies for a 30-year manufacturer warranty. Serving SW Calgary, Cochrane, Okotoks, and beyond.",
    bullets: [
      "James Hardie® Preferred Contractor — fiber cement siding specialists",
      "Hail-proof, non-combustible cladding rated for Alberta weather",
      "Rigid continuous insulation backing — reduces thermal heat loss",
      "Custom aluminum trim coil, colour-matched soffits & fascia"
    ],
    image: "/images/services_siding_living.jpg",
    imageAlt: "James Hardie siding installation Calgary — AeroDome Roofing",
    reverse: true,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY AERODOME",
    whyHeading: "WHY AERODOME FOR SIDING",
    whyItems: [
      { icon: "Award", text: "James Hardie® Preferred Contractor — factory-certified fiber cement siding installation" },
      { icon: "ShieldCheck", text: "Hail-proof, non-combustible cladding — superior to vinyl in Calgary's climate" },
      { icon: "TrendingDown", text: "Rigid continuous exterior insulation eliminates thermal bridging & cuts heating costs" }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT'S INCLUDED",
    includedItems: [
      "Old siding tear-off & wall sheathing rot inspection",
      "Continuous breathable housewrap & moisture barrier installation",
      "Precision corner trims, window drip flashing & j-channels",
      "Colour-matched hidden-vent soffits & custom fascia capping"
    ],
    processEyebrow: "THE PROCESS",
    processHeading: "HOW IT WORKS",
    processSubtitle:
      "Simple, transparent, and seamless — from your first call to the final signed warranty.",
    processSteps: [
      {
        step: "01",
        title: "EXTERIOR DESIGN & COLOUR",
        desc: "Select profiles — lap, board-and-batten, or shake — and explore 3D digital renderings of your home in James Hardie® ColorPlus® factory finishes."
      },
      {
        step: "02",
        title: "SHEATHING & MOISTURE PREP",
        desc: "We strip old siding, inspect and repair damaged plywood sheathing, and install advanced breathable weather barriers with fully taped seams."
      },
      {
        step: "03",
        title: "PRECISION CLADDING INSTALL",
        desc: "Our siding technicians blind-nail each plank with corrosion-resistant fasteners, maintaining proper expansion gaps at every horizontal and vertical joint."
      },
      {
        step: "04",
        title: "ALUMINUM TRIM & FINAL INSPECTION",
        desc: "Custom aluminum bending around every door and window ensures an airtight, maintenance-free seal. Nolan walks through the completed exterior with you before sign-off."
      }
    ],
    faqEyebrow: "GOT QUESTIONS?",
    faqHeading: "COMMON QUESTIONS",
    faqs: [
      {
        q: "IS JAMES HARDIE SIDING BETTER THAN VINYL FOR CALGARY WINTERS?",
        a: "Yes. James Hardie fiber cement does not become brittle and shatter in -30°C hailstorms the way vinyl does, nor does it melt or warp in summer heat. It carries a 30-year non-prorated manufacturer warranty."
      },
      {
        q: "CAN NEW SIDING LOWER MY HEATING BILLS?",
        a: "Significantly. When we replace siding, we add 1 to 1.5 inches of continuous exterior rigid foam insulation behind the new cladding — eliminating thermal bridging and boosting wall R-values throughout Calgary's long heating season."
      },
      {
        q: "DO YOU OFFER BOARD AND BATTEN SIDING STYLES?",
        a: "Yes. Modern vertical board-and-batten, traditional horizontal lap, and cedar-shake profiles are all available in dozens of factory-baked ColorPlus® finishes that never need repainting."
      },
      {
        q: "CAN HAIL-DAMAGED SIDING BE REPAIRED THROUGH INSURANCE?",
        a: "Yes. If hail dented or cracked your siding, we document the damage photographically, match the profile and paint, and coordinate the insurance claim or full replacement — whichever best protects your home."
      }
    ],
    relatedServices: ["residential-roofing", "windows", "gutters"]
  },

  // ─── COMMERCIAL ROOFING ───────────────────────────────────────────────────
  {
    id: "commercial-roofing",
    breadcrumb: "COMMERCIAL ROOFING",
    eyebrow: "COMMERCIAL FLAT ROOF CONTRACTOR CALGARY",
    title: "COMMERCIAL ROOFING",
    heroHeadline: "COMMERCIAL & FLAT ROOF SYSTEMS IN CALGARY",
    description:
      "A leaking flat roof costs far more than the repair — it interrupts operations, damages inventory, and triggers liability. AeroDome's commercial roofing team installs SBS 2-ply modified bitumen, TPO single-ply, and EPDM flat roof systems engineered for Calgary's temperature extremes. We use infrared thermal imaging to locate entrapped moisture before it destroys your substrate, design tapered insulation to eliminate ponding, and schedule around your business hours — warehouses, multi-family condominiums, and office facilities across Greater Calgary and Chestermere.",
    bullets: [
      "SBS 2-ply modified bitumen & TPO single-ply flat roof systems",
      "Infrared thermal moisture scan — pinpoints hidden substrate damage",
      "Tapered polyiso insulation design — eliminates ponding water",
      "COR™ safety certified with full WCB commercial site coverage"
    ],
    image: "/images/hero_roofing.jpg",
    imageAlt: "Commercial flat roof installation Calgary — AeroDome Roofing",
    reverse: false,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY AERODOME",
    whyHeading: "WHY AERODOME FOR COMMERCIAL ROOFING",
    whyItems: [
      { icon: "ShieldCheck", text: "COR™ safety certified with full WCB coverage — zero compromise on commercial site safety" },
      { icon: "Award", text: "Certified SBS 2-ply torch-on & TPO single-ply flat roof installers" },
      { icon: "TrendingDown", text: "Zero-downtime scheduling & optional bi-annual preventive maintenance programs" }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT'S INCLUDED",
    includedItems: [
      "Thermal infrared moisture scan & substrate core testing",
      "Tapered insulation drainage design to stop ponding water",
      "Industrial base & cap sheet membrane torch application",
      "Parapet coping, scuppers, roof drains & expansion joint sealing"
    ],
    processEyebrow: "THE PROCESS",
    processHeading: "HOW IT WORKS",
    processSubtitle:
      "Simple, transparent, and seamless — from your first call to the final signed warranty.",
    processSteps: [
      {
        step: "01",
        title: "ROOF AUDIT & INFRARED SCAN",
        desc: "Comprehensive infrared thermal assessment to pinpoint entrapped moisture, substrate deterioration, and drainage failures before they compromise your building envelope."
      },
      {
        step: "02",
        title: "ENGINEERED SYSTEM DESIGN",
        desc: "Custom tapered polyiso insulation design to direct standing water efficiently toward commercial drains — eliminating the ponding that voids most flat roof warranties."
      },
      {
        step: "03",
        title: "CERTIFIED COMMERCIAL INSTALLATION",
        desc: "Execution under rigorous fire watch and COR™ site safety protocols with minimal disruption to your building operations, staff, and tenants."
      },
      {
        step: "04",
        title: "WARRANTY & MAINTENANCE PLAN",
        desc: "Final warranty sign-off with the option to enrol in bi-annual preventive maintenance — the most cost-effective way to extend flat roof service life in Calgary's climate."
      }
    ],
    faqEyebrow: "GOT QUESTIONS?",
    faqHeading: "COMMON QUESTIONS",
    faqs: [
      {
        q: "WHICH FLAT ROOF SYSTEM WORKS BEST IN CALGARY'S CLIMATE?",
        a: "SBS 2-ply modified bitumen is the gold standard for Calgary due to its elastomeric flexibility through -40°C freeze-thaw extremes. TPO single-ply is also popular where reflective energy efficiency is a priority."
      },
      {
        q: "CAN OUR FACILITY STAY OPEN DURING FLAT ROOF INSTALLATION?",
        a: "Yes. We coordinate staging areas, material hoisting schedules, and low-odour adhesive alternatives so warehouse, retail, or office operations continue without meaningful disruption."
      },
      {
        q: "HOW DO YOU SOLVE PONDING WATER ON FLAT ROOFS?",
        a: "We engineer custom tapered polyisocyanurate insulation packages that create positive drainage slope, channeling all rainfall and snowmelt directly toward properly sized roof drains."
      },
      {
        q: "DO YOU OFFER EMERGENCY COMMERCIAL ROOF REPAIR IN CALGARY?",
        a: "Yes. Our commercial emergency rapid-response truck is equipped to dispatch and permanently seal critical roof penetrations and active leaks within hours of your call."
      }
    ],
    relatedServices: ["residential-roofing", "storm-damage", "gutters"]
  },

  // ─── GUTTERS & DOWNSPOUTS ─────────────────────────────────────────────────
  {
    id: "gutters",
    breadcrumb: "GUTTERS",
    eyebrow: "SEAMLESS GUTTER INSTALLATION CALGARY",
    title: "GUTTERS & DOWNSPOUTS",
    heroHeadline: "CUSTOM CONTINUOUS SEAMLESS GUTTERS & GUARDS",
    description:
      "Calgary's intense spring downpours and sudden summer storms dump water faster than undersized, failing eavestroughs can handle. When gutters overflow, water drives against your foundation, erodes your grade, and creates ice dams along your roofline in winter. AeroDome installs continuous seamless aluminum eavestroughs — custom extruded on-site to your exact roofline — paired with Alu-Rex gutter guards and oversized 3×4\" downspouts sized for Alberta's cloudburst volumes. No seams. No joints. No freeze-thaw failures. Serving Calgary, Cochrane, Airdrie, and Okotoks.",
    bullets: [
      "Continuous on-site seamless extrusion — eliminates leaking seam joints",
      "Alu-Rex T-Rex leaf & pine needle gutter guard protection",
      "Oversized 3×4\" commercial downspouts — double the flow capacity",
      "Colour-matched baked enamel — 25+ colours, guaranteed no rust"
    ],
    image: "/images/service_gutters.jpg",
    imageAlt: "Seamless aluminum gutter installation Calgary — AeroDome Roofing",
    reverse: true,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY AERODOME",
    whyHeading: "WHY AERODOME FOR GUTTERS & EAVESTROUGHS",
    whyItems: [
      { icon: "Sparkles", text: "Continuous on-site roll forming eliminates every leaky seam joint along your roofline" },
      { icon: "ShieldCheck", text: "Alu-Rex continuous hanger system rated to hold 250 lbs per linear foot of snow load" },
      { icon: "TrendingDown", text: "Oversized 3×4\" downspouts prevent foundation flooding & ice dam formation in Calgary winters" }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT'S INCLUDED",
    includedItems: [
      "Old eavestrough removal & responsible environmental recycling",
      "Fascia rot inspection & drip edge metal flashing check",
      "On-site custom seamless 5\" or 6\" heavy-gauge aluminum extrusion",
      "Alu-Rex T-Rex continuous leaf guard & oversized downspouts"
    ],
    processEyebrow: "THE PROCESS",
    processHeading: "HOW IT WORKS",
    processSubtitle:
      "Simple, transparent, and seamless — from your first call to the final signed warranty.",
    processSteps: [
      {
        step: "01",
        title: "WATER FLOW EVALUATION",
        desc: "We analyze your roof's square footage, pitch, and valley locations to calculate optimal eavestrough width and downspout placement for Calgary's heaviest rainfall volumes."
      },
      {
        step: "02",
        title: "ON-SITE CUSTOM EXTRUSION",
        desc: "Our mobile fabrication truck rolls single-piece eavestrough lengths precisely to your roofline dimensions — no seams, no joints, no potential leak points."
      },
      {
        step: "03",
        title: "CONTINUOUS HANGER FASTENING",
        desc: "We fasten with Alu-Rex continuous brackets every 12 inches for maximum snow load capacity and ice resistance through Calgary's extended freeze-thaw season."
      },
      {
        step: "04",
        title: "WATER TEST & SITE CLEANUP",
        desc: "We test all slopes with water to verify rapid, complete drainage, install gutter guards, and clean the entire perimeter before departing your property."
      }
    ],
    faqEyebrow: "GOT QUESTIONS?",
    faqHeading: "COMMON QUESTIONS",
    faqs: [
      {
        q: "WHY ARE SEAMLESS GUTTERS BETTER THAN SECTIONAL EAVESTROUGHS?",
        a: "Traditional sectional gutters have joints every 10 feet that leak as expanding ice forces them apart each winter. Seamless gutters have no joints along the entire roofline — eliminating the source of the problem entirely."
      },
      {
        q: "DO ALU-REX GUTTER GUARDS HELP PREVENT ICE DAMS IN CALGARY?",
        a: "Yes. Alu-Rex guards keep gutters free of pine needles and leaves, allowing snowmelt to drain freely instead of backing up and freezing into massive heavy ice sheets that can damage fascia and shingles."
      },
      {
        q: "WHAT SIZE DOWNSPOUTS DO YOU RECOMMEND FOR CALGARY?",
        a: "We recommend oversized 3×4-inch commercial downspouts. They drain double the water volume of standard 2×3 downspouts — essential during Alberta's intense cloudbursts and spring melt."
      },
      {
        q: "CAN EAVESTROUGHS BE COLOUR-MATCHED TO MY SIDING OR TRIM?",
        a: "Yes. We offer 25+ baked-on enamel colours to precisely match your fascia board, roof drip edge, window trim, or James Hardie® siding profile."
      }
    ],
    relatedServices: ["residential-roofing", "siding", "windows"]
  },

  // ─── NEW ROOF INSTALLATION ─────────────────────────────────────────────────
  {
    id: "new-roof-installation",
    breadcrumb: "NEW ROOF INSTALLATION",
    eyebrow: "LICENSED NEW ROOF INSTALLATION CONTRACTOR CALGARY",
    title: "NEW ROOF INSTALLATION",
    heroHeadline: "NEW ROOF INSTALLATION IN CALGARY — BUILT RIGHT FROM DAY ONE",
    description:
      "AeroDome is the licensed new roof installation contractor Calgary homeowners and builders trust to get every layer right the first time. From new home roof installation to custom home roofing and home addition roof installation, our in-house crew installs complete roofing systems — asphalt shingle installation, ventilation, flashing, ice and water shield — all backed by a 10-year workmanship warranty starting the day we finish. Get a free roof installation quote today.",
    bullets: [
      "Free roofing consultation & roof installation quote — no obligation",
      "Class 4 impact resistant shingles (IKO Dynasty & Owens Corning Duration) — the Calgary standard",
      "Full roofing system installation: underlayment, ventilation, flashing, drip edge & ridge cap",
      "10-year workmanship warranty + manufacturer lifetime warranty — both starting fresh"
    ],
    image: "/images/after_roof.jpg",
    imageAlt: "New roof installation Calgary — AeroDome Roofing licensed contractor",
    reverse: false,
    ctaText: "LEARN MORE",
    secondaryCtaText: "GET MY FREE ESTIMATE",

    // ── Detail Page Fields ──────────────────────────────────────────────────
    whyEyebrow: "WHY CHOOSE US",
    whyHeading: "CALGARY'S TRUSTED NEW ROOF INSTALLATION COMPANY",
    whyItems: [
      {
        icon: "Award",
        text: "Material guidance included on every project — as an Owens Corning Platinum contractor Calgary and IKO Craftsman installer Calgary, we walk every homeowner through shingle grades, warranty tiers, and Class 4 impact resistant shingles before a single nail goes down. No pressure. Just the right information."
      },
      {
        icon: "ShieldCheck",
        text: "Two warranties from day one — your new roof installation comes with a 10-year workmanship warranty Calgary plus the manufacturer's lifetime material warranty, both starting fresh from the date of installation. Installed exclusively by our licensed and insured roofer Calgary team. No subcontractors."
      },
      {
        icon: "Clock",
        text: "New construction roofing Calgary experience — our crew works alongside builders and other trades across NW Calgary, NE Calgary, SE Calgary, SW Calgary, Airdrie, Okotoks, Chestermere, and Cochrane without causing delays. We coordinate directly with your general contractor from framing through final inspection."
      }
    ],
    scopeEyebrow: "SCOPE OF WORK",
    scopeHeading: "WHAT DOES A NEW ROOF INSTALLATION INCLUDE",
    includedItems: [
      "Roof decking installation inspection & synthetic underlayment Calgary laid across the full deck surface",
      "Ice and water shield installation at all eaves, valleys, and penetrations for Calgary freeze-thaw protection",
      "Asphalt shingle installation Calgary — IKO Dynasty shingles or Owens Corning Duration shingles with architectural profile",
      "Drip edge installation, roof flashing installation, ridge cap installation & soffit and ridge vent installation Calgary"
    ],
    processEyebrow: "OUR PROCESS",
    processHeading: "NEW ROOF INSTALLATION CALGARY IN 4 SIMPLE STEPS",
    processSubtitle:
      "From your free roofing consultation to final warranty handover — transparent pricing, no trade delays, and no surprises on a job this important.",
    processSteps: [
      {
        step: "01",
        title: "FREE CONSULTATION & MATERIAL SELECTION",
        desc: "We meet with you or your builder to review plans, assess deck readiness, and walk through every material option — from IKO Dynasty shingles Calgary to Owens Corning Duration shingles Calgary and Class 4 impact resistant shingles. You receive a flat-rate new roof installation quote Calgary before any commitment."
      },
      {
        step: "02",
        title: "SYSTEM SIZING & TRADE COORDINATION",
        desc: "We size the full roofing system to your plans — calculating ventilation requirements, ice and water shield coverage, and drip edge perimeters to Alberta Building Code. For new construction roofing Calgary projects, we coordinate directly with framers, HVAC, and other trades to prevent scheduling conflicts."
      },
      {
        step: "03",
        title: "FULL ROOFING SYSTEM INSTALLATION",
        desc: "Our in-house crew installs every layer in sequence: roof decking inspection, synthetic underlayment Calgary, ice and water shield, drip edge, flashing, architectural shingles, ridge cap, and a fully balanced soffit and ridge vent installation Calgary. Nothing is skipped, nothing is subcontracted."
      },
      {
        step: "04",
        title: "FINAL INSPECTION & DUAL WARRANTY SIGN-OFF",
        desc: "Nolan Thrace inspects every flashing, valley, and ridge cap with you before issuing your 10-year workmanship warranty Calgary and the manufacturer's lifetime material warranty — both signed, dated, and transferable to future owners. A full magnetic nail sweep completes the site."
      }
    ],
    faqEyebrow: "FREQUENTLY ASKED QUESTIONS",
    faqHeading: "NEW ROOF INSTALLATION CALGARY FAQS",
    faqs: [
      {
        q: "HOW MUCH DOES A NEW ROOF INSTALLATION COST IN CALGARY?",
        a: "New roof installation cost Calgary typically ranges from $8,000 to $20,000+ depending on square footage, roof pitch, decking condition, and chosen shingle tier. Class 4 impact resistant shingles carry a higher material cost but can reduce your Alberta insurance premium by up to 15%. AeroDome provides a guaranteed flat-rate roof installation quote Calgary — you know the full cost before we start. Roof installation financing Calgary is also available."
      },
      {
        q: "HOW LONG DOES A NEW ROOF INSTALLATION TAKE IN CALGARY?",
        a: "How long does roof installation take Calgary? For most new home roof installation projects across the Greater Calgary area, Airdrie, Okotoks, Chestermere, and Cochrane, a complete installation is finished in 1 to 2 days once decking is ready. New construction roofing Calgary timelines depend on builder scheduling — we coordinate directly to prevent delays."
      },
      {
        q: "WHAT IS THE BEST ROOFING MATERIAL FOR A NEW HOME IN CALGARY?",
        a: "Class 4 impact resistant shingles Calgary — specifically IKO Dynasty shingles Calgary or Owens Corning Duration shingles Calgary — are the smart standard for new home construction in Calgary's hail alley. They meet UL 2218 impact resistance testing, withstand -40°C Chinook freeze-thaw cycles, and may lower your annual insurance premium. Book a free roofing consultation and we will walk you through every option."
      },
      {
        q: "CAN YOU WORK WITH MY BUILDER OR GENERAL CONTRACTOR IN CALGARY?",
        a: "Yes. AeroDome has direct experience as a roofing contractor for new builds Calgary — working alongside general contractors, framers, and other trades in new home developments across NW Calgary, SW Calgary, Airdrie, and surrounding communities. We communicate scheduling directly with your site supervisor to keep the project moving without delays."
      }
    ],
    relatedServices: ["roof-replacement", "residential-roofing", "gutters"]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. SPECIAL OFFERS SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const specialOffersSection = {
  eyebrow: "OFFERS",
  title: "FREE INSPECTIONS, ALWAYS",
  subtitle:
    "Every roof assessment includes a 21-point photographic digital report, attic moisture check, and a transparent flat-rate estimate — with zero pressure to sign anything.",
  militaryDiscount: {
    badge: "MILITARY, VETERANS & FIRST RESPONDERS",
    description:
      "AeroDome Roofing is proud to extend a 10% discount on all roofing, siding, window, and exterior services to active military personnel, veterans, and first responders serving the Calgary area and surrounding communities.",
    footnote:
      "PRESENT VALID ID AT ESTIMATE. NO PRESSURE. NO OBLIGATION. 100% UNBIASED ASSESSMENT."
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. BOTTOM LEAD CAPTURE CTA SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const servicesCta = {
  eyebrow: "READY TO GET STARTED?",
  heading: "GET YOUR FREE ROOF INSPECTION TODAY",
  description:
    "Whether your Calgary home took hail damage, your shingles are reaching end of life, or you just want honest advice before winter — Nolan Thrace and our certified in-house crew are ready to inspect your property. No obligation. Flat-rate pricing.",
  phoneLabel: "Direct Line · Speaks Directly With Nolan",
  phoneNumber: "+1 (403) 918-4444",
  formTitle: "WE CALL YOU BACK IN 15 MINUTES",
  formSubtitle:
    "Free on-site roof inspection with photo report & transparent flat-rate estimate.",
  formButton: "GET MY FREE ESTIMATE",
  microcopy: "Free on-site inspection · No obligation · Flat-rate pricing"
};

/**
 * Helper function to retrieve full dynamic service details by ID.
 * If a new service is added to servicesShowcase with only partial fields,
 * this function automatically populates intelligent defaults for Why, Scope, Process, and FAQs.
 */
export function getServiceDetail(serviceId) {
  if (!serviceId) return null;
  const normalizedId = serviceId.toLowerCase().trim();

  const found = servicesShowcase.find(
    s => s.id.toLowerCase() === normalizedId || s.title.toLowerCase().replace(/\s+/g, '-') === normalizedId
  );

  if (!found) return null;

  const dynamicService = {
    ...found,
    heroHeadline: found.heroHeadline || found.title,
    breadcrumb: found.breadcrumb || found.title,
    whyEyebrow: found.whyEyebrow || "WHY AERODOME",
    whyHeading: found.whyHeading || `WHY AERODOME FOR ${found.title}`,
    whyItems: found.whyItems && found.whyItems.length > 0 ? found.whyItems : [
      { icon: "ShieldCheck", text: `Certified top-tier ${found.title.toLowerCase()} installation by in-house crew` },
      { icon: "Award", text: "10-year workmanship warranty backed by manufacturer guarantees" },
      { icon: "TrendingDown", text: "Transparent flat-rate pricing with zero hidden surcharges" }
    ],
    scopeEyebrow: found.scopeEyebrow || "SCOPE OF WORK",
    scopeHeading: found.scopeHeading || "WHAT'S INCLUDED",
    includedItems: found.includedItems && found.includedItems.length > 0 ? found.includedItems : (
      found.bullets && found.bullets.length >= 4 ? found.bullets.slice(0, 4) : [
        "Comprehensive site inspection and precise measurement",
        "Safe demolition, removal, and disposal of old materials",
        "Engineered installation using commercial-grade materials",
        "Final quality audit and magnetic perimeter clean-up"
      ]
    ),
    processEyebrow: found.processEyebrow || "THE PROCESS",
    processHeading: found.processHeading || "HOW IT WORKS",
    processSubtitle: found.processSubtitle || "Simple, transparent, and seamless from the first call to the final inspection.",
    processSteps: found.processSteps && found.processSteps.length > 0 ? found.processSteps : [
      {
        step: "01",
        title: "CONSULTATION & ESTIMATE",
        desc: "We inspect your property, discuss options, and provide a transparent flat-rate quote — no obligation."
      },
      {
        step: "02",
        title: "PRECISE MEASUREMENT",
        desc: "Our project estimators measure dimensions to the millimeter with zero room for error."
      },
      {
        step: "03",
        title: "EXPERT INSTALLATION",
        desc: "Our dedicated in-house team executes the installation following strict Calgary building codes."
      },
      {
        step: "04",
        title: "FINAL INSPECTION",
        desc: "We perform a multi-point quality audit with you to ensure complete satisfaction before sign-off."
      }
    ],
    faqEyebrow: found.faqEyebrow || "GOT QUESTIONS?",
    faqHeading: found.faqHeading || "COMMON QUESTIONS",
    faqs: found.faqs && found.faqs.length > 0 ? found.faqs : [
      {
        q: `HOW LONG DOES ${found.title} TAKE TO COMPLETE?`,
        a: "Most residential projects are completed within 1 to 3 days depending on scope and weather. We leave your site spotless each day."
      },
      {
        q: "DO YOU USE SUBCONTRACTORS?",
        a: "No. All projects are handled exclusively by our trained, vetted, and COR™ safety-certified in-house crews."
      },
      {
        q: "IS MY PROJECT BACKED BY A WARRANTY?",
        a: "Yes. Every installation is protected by our 10-year in-house workmanship warranty in addition to full manufacturer material warranties."
      },
      {
        q: "HOW DO I GET STARTED WITH A FREE QUOTE?",
        a: "Submit our estimate form or call (403) 918-4444 to book your free on-site assessment with Nolan Thrace."
      }
    ],
    relatedServices: found.relatedServices && found.relatedServices.length > 0 ? found.relatedServices : (
      servicesShowcase.filter(s => s.id !== found.id).slice(0, 3).map(s => s.id)
    )
  };

  return dynamicService;
}
