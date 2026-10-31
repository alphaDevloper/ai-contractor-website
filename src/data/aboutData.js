/**
 * aboutData.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all editable copy on the About page.
 * Components in AboutPage.jsx import from here — no copy lives in JSX.
 *
 * SEO keywords naturally embedded throughout:
 *   PRIMARY    : roofing contractor Calgary, residential roofing Calgary,
 *                licensed roofing contractor Calgary
 *   HAIL/STORM : hail damage roof repair Calgary, impact resistant shingles Calgary
 *   TRUST      : GAF Master Elite, IKO ShieldPRO, 10-year workmanship warranty,
 *                licensed and insured roofer Calgary
 *   LOCAL      : NW Calgary, NE Calgary, SE Calgary, SW Calgary,
 *                Airdrie, Okotoks, Chestermere, Cochrane
 *   INTENT     : free roof estimate Calgary, free roof inspection Calgary
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const aboutHero = {
  eyebrow: "CALGARY'S TRUSTED ROOFING TEAM",

  /** H1 — two lines separated by <br /> in JSX */
  titleLine1: "FAMILY-OWNED.",
  titleLine2: "OWNER-MANAGED.",

  /** Displayed as uppercase subtitle below H1 */
  subtitle: "HONEST ESTIMATES. PREMIUM MATERIALS. GUARANTEED WORK.",

  /** Four spans in the hero trust bar */
  trustBar: [
    "LICENSED & INSURED RESIDENTIAL ROOFING — CALGARY, AB",
    "FREE ON-SITE ROOF INSPECTIONS & TRANSPARENT PRICING",
    "GAF MASTER ELITE® & IKO SHIELDPRO® CERTIFIED",
    "100% IN-HOUSE CREWS — ZERO SUBCONTRACTING",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. STATS STRIP  (4 cards)
// ─────────────────────────────────────────────────────────────────────────────
export const aboutStats = [
  {
    number: "312+",
    label: "FIVE-STAR GOOGLE REVIEWS",
  },
  {
    number: "850+",
    label: "CALGARY ROOFS COMPLETED",
  },
  {
    /** JSX renders accentStar separately as a styled <span> */
    number: "5.0",
    accentStar: "★",
    label: "AVERAGE CUSTOMER SATISFACTION",
  },
  {
    number: "10-YR",
    label: "WORKMANSHIP WARRANTY — SIGNED",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. ORIGIN / "BUILT ON TRUST & CRAFT" SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const aboutOrigin = {
  eyebrow: "OUR ORIGIN",

  /** H2 — two lines */
  headingLine1: "BUILT ON",
  headingLine2: "TRUST & CRAFT",

  /**
   * ~90 words.
   * PRIMARY kw: "roofing contractor Calgary"
   * TRUST kw:   "10-year workmanship warranty"
   * HAIL kw:    "hail damage"
   */
  description:
    "AeroDome Roofing has protected Calgary homes since 2011. What started as a two-person crew in the NW has grown into one of the most referred roofing contractors in Calgary — built entirely on word-of-mouth, not advertising spend. Every project we take on — from a storm-hit shingle repair to a full residential roof replacement — is backed by a 10-year workmanship warranty and installed by our own certified crew. Our 5.0-star rating and 312+ Google reviews are the result of one simple rule: never recommend something a homeowner doesn't actually need.",

  primaryBtn: "GET MY FREE ESTIMATE",
  secondaryBtn: "SEE OUR WORK",
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. MEET THE FOUNDER SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const aboutFounder = {
  eyebrow: "MEET THE FOUNDER",

  /** H2 — two lines */
  headingLine1: "OWNER-LED. LOCAL.",
  headingLine2: "CALGARY, ALBERTA.",

  /**
   * Paragraph 1 — ~100 words.
   * PRIMARY kw: "licensed roofing contractor Calgary"
   * TRUST kw:   "GAF Master Elite", "IKO ShieldPRO"
   * No hollow phrases; no "committed to excellence"
   */
  paragraphOne:
    "AeroDome Roofing was founded by Nolan Thrace in 2011 with one goal: give Calgary homeowners a licensed roofing contractor they could actually trust. Nolan oversees every project personally — from your first on-site inspection to the final clean-up sweep. You won't deal with commissioned sales reps or out-of-province storm chasers. Just clear communication, honest pricing, and workmanship held to GAF Master Elite® and IKO ShieldPRO® standards. If a repair is all your roof needs, that's exactly what you'll get. No upsells.",

  /**
   * Paragraph 2 — service area list.
   * LOCAL kw: NW Calgary, NE Calgary, SE Calgary, SW Calgary, Airdrie, Okotoks, Chestermere, Cochrane
   */
  paragraphTwo:
    "Proudly serving NW Calgary, NE Calgary, SE Calgary, SW Calgary, Airdrie, Cochrane, Chestermere, Okotoks, and Strathmore with dedicated in-house roofing crews.",

  ctaBtn: "LEARN MORE ABOUT US",

  /** Mission & Vision cards */
  mission: {
    title: "OUR MISSION",
    text: "To deliver honest, long-lasting roofing solutions to Calgary homeowners — protecting their most valuable asset through every season, every hailstorm, and every harsh Alberta winter.",
  },
  vision: {
    title: "OUR VISION",
    text: "To be the most trusted residential roofing contractor in Calgary, known across every quadrant for integrity, craftsmanship, and a guarantee that actually means something.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. VALUES SECTION  (3 cards)
// ─────────────────────────────────────────────────────────────────────────────
export const aboutValues = {
  eyebrow: "HOW WE OPERATE",
  heading: "THE VALUES WE WORK BY",

  /** Sub-paragraph below heading */
  subtext:
    "No shortcuts, no sales games. These are the principles that guide every roof we inspect, repair, or replace in Calgary.",

  cards: [
    {
      /** DollarSign icon */
      title: "YOU ONLY PAY FOR WHAT YOUR ROOF ACTUALLY NEEDS",
      description:
        "Full replacement is not always the right call. If a targeted repair or maintenance service will protect your Calgary home for years, that's the only option we'll recommend — and we'll show you why in writing.",
    },
    {
      /** Award icon */
      title: "TOP-TIER CERTIFICATIONS. NO EXCEPTIONS.",
      description:
        "Every project uses premium materials — impact-resistant shingles, proper ice-and-water shield, and code-compliant ventilation — installed strictly to GAF Master Elite® and IKO ShieldPRO® manufacturer specs.",
    },
    {
      /** HardHat icon */
      title: "NOLAN ON SITE. EVERY SINGLE TIME.",
      description:
        "You won't deal with a project manager you've never met. Nolan Thrace is present at every inspection, every installation, and every final walk-through — because your roof is not a job to delegate.",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6 & 8. MARQUEE TICKER RIBBON
// ─────────────────────────────────────────────────────────────────────────────
export const aboutMarqueeText = "AERODOME ROOFING — CALGARY'S TRUSTED ROOFER";

// ─────────────────────────────────────────────────────────────────────────────
// 7. FINAL CTA SECTION
// ─────────────────────────────────────────────────────────────────────────────
export const aboutCta = {
  eyebrow: "READY TO START?",

  /** H2 — two lines */
  headingLine1: "GET YOUR FREE",
  headingLine2: "ROOF INSPECTION TODAY",

  /**
   * ~35 words.
   * INTENT kw: "free roof inspection Calgary"
   */
  description:
    "Tell us about your home. We respond in under five minutes and give you honest, no-pressure advice on the right solution for your roof.",

  /** Dark form card */
  formCard: {
    title: "SEE WHAT YOUR PROJECT WILL COST",
    subtitle:
      "Free on-site roof inspection · Flat-rate proposal · No obligation.",
  },

  /** Success message after form submit — {firstName} and {phone} are interpolated in JSX */
  successMessage:
    "Thanks, {firstName}. Nolan Thrace or our senior estimator will call you at {phone} within 15 minutes.",

  /** Microcopy below the submit button */
  microcopy: "Free on-site inspection · No obligation · Flat-rate pricing",

  submitBtn: "GET AN ESTIMATE",
};

