export const COMPANY_INFO = {
  name: "Signy",
  legalName: "Signy Solutions India Pvt Ltd",
  phone: "+91-916777 5222",
  phoneHref: "tel:+919167775222",
  email: "signy4455@gmail.com",
  emailHref: "mailto:signy4455@gmail.com",
  address: "1609 Floor 16, 9, Business Bay Off, New Link Rd, behind Evershine Mall, Malad W, Mumbai, Maharashtra 400064",
  googleMapsUrl: "https://maps.google.com/?q=Business+Bay+Malad+West+Mumbai+400064",
  copyright: "© 2026 Signy Solutions. All Rights Reserved.",
  tagline: "Signy – Celebrating over a decade of excellence as a premier Bulk SMS, Voice Call, and Mobile Value-Added Services (VAS) provider.",
  socials: {
    facebook: "https://www.facebook.com/login/",
    instagram: "https://www.instagram.com/redfox.0804",
  }
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "All Services", href: "/services", desc: "Explore our full suite of enterprise communication channels" },
      { label: "Bulk SMS", href: "/services/bulk-sms", desc: "Automated, high-deliverability bulk messaging" },
      { label: "WhatsApp Business API", href: "/services/whatsapp-business-api", desc: "Official WhatsApp automation & catalog marketing" },
      { label: "Voice Calls", href: "/services/voice-calls", desc: "Crystal clear automated and IVR outbound voice" },
      { label: "Google Verified SMS", href: "/services/google-verified-sms", desc: "Verified business badge and brand logo in SMS thread" },
      { label: "RCS Messaging", href: "/services/rcs", desc: "Rich media, carousels, and interactive conversational buttons" },
      { label: "Chatbot", href: "/services/chatbots", desc: "24/7 intelligent AI & rule-based customer support automation" },
      { label: "Two-Way Communication", href: "/services/two-way-communication", desc: "Interactive inbound & outbound messaging" },
      { label: "Web Development", href: "/services/web-development", desc: "Custom web applications & API integrations" },
      { label: "SEO Service", href: "/services/seo", desc: "Data-driven organic search visibility & rank optimization" },
      { label: "Social Media Marketing", href: "/services/social-media", desc: "Targeted brand reach and campaign management" }
    ]
  },
  { label: "Why Us", href: "/why-us" },
  { label: "Get in touch", href: "/contact", isCta: true },
];

export const HERO_CONTENT = {
  eyebrow: "Welcome 👋",
  headline: "Maximize reach, engagement, and results with messaging campaigns.",
  subheadline: "Supercharge your marketing efforts with messaging campaigns designed for reach and engagement. High open rates and rapid response times make messaging one of the most effective ways to communicate and convert.",
  cta1: { label: "Know More", href: "/about" },
  cta2: { label: "Get in touch", href: "/contact" }
};

export const SERVICES = [
  {
    id: "bulk-sms",
    title: "Bulk Messaging",
    desc: "Communicate smarter with bulk messaging. Instantly reach thousands with automated, personalized messages that drive action.",
    href: "/services/bulk-sms",
    badge: "High Deliverability",
    iconName: "MessageSquare",
    color: "#4ABFAD",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    features: ["99.9% Uptime", "Instant Delivery Reports", "DLT Compliant Routing"]
  },
  {
    id: "whatsapp-business-api",
    title: "WhatsApp Business API",
    desc: "Manage customer conversations effortlessly with the WhatsApp Business API. Automate replies, send notifications, and boost sales from one unified WhatsApp platform.",
    href: "/services/whatsapp-business-api",
    badge: "Official Meta Partner",
    iconName: "PhoneCall",
    color: "#25D366",
    bgGradient: "from-green-500/10 to-emerald-500/5",
    features: ["Green Tick Verification", "Automated Chatbots", "Broadcasting & Templates"]
  },
  {
    id: "voice-calls",
    title: "Voice Calls",
    desc: "Experience seamless interaction with voice calls. Connect with anyone, anywhere, anytime with clear and reliable audio connections.",
    href: "/services/voice-calls",
    badge: "HD Audio",
    iconName: "Volume2",
    color: "#8B5CF6",
    bgGradient: "from-purple-500/10 to-indigo-500/5",
    features: ["Automated OBD Dialing", "Custom IVR Workflows", "Live Call Analytics"]
  },
  {
    id: "google-verified-sms",
    title: "Google Verified SMS",
    desc: "Build Trust with Every Message. Elevate your brand's credibility by displaying your verified business name and logo directly in the text thread. Through Google's verification program, we ensure your communications are instantly recognized and trusted by customers.",
    href: "/services/google-verified-sms",
    badge: "Google Verified",
    iconName: "ShieldCheck",
    color: "#3B82F6",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
    features: ["Official Google Shield Badge", "Brand Logo & Verification", "Phishing Protection"]
  },
  {
    id: "rcs",
    title: "RCS (Rich Communication Services)",
    desc: "Transform Conversations with Rich Media. Move beyond basic SMS and engage your audience with dynamic, interactive messaging. Send high-resolution images, videos, audio files, and more through RCS, creating visually rich and compelling conversations that drive engagement.",
    href: "/services/rcs",
    badge: "Next-Gen SMS",
    iconName: "Sparkles",
    color: "#EC4899",
    bgGradient: "from-pink-500/10 to-rose-500/5",
    features: ["Rich Carousel Cards", "Suggested Action Chips", "Verified Sender ID"]
  },
  {
    id: "chatbots",
    title: "Chatbot",
    desc: "Deliver Instant Support, Around the Clock. Enhance your customer service with intelligent chatbot automation. Provide immediate, 24/7 responses to common inquiries, resolve issues faster, and allow your human team to focus on higher-value, complex interactions.",
    href: "/services/chatbots",
    badge: "24/7 AI Automation",
    iconName: "Bot",
    color: "#F59E0B",
    bgGradient: "from-amber-500/10 to-orange-500/5",
    features: ["Zero Response Lag", "CRM Integration", "Multi-Language Support"]
  }
];

export const BENEFITS = [
  {
    number: "01",
    title: "Proven Enterprise Communication Cost Optimization 💰",
    description: "Our high-throughput routing engine and direct carrier connectivity eliminate intermediary markups. Automate bulk outreach and transactional notifications with automated fallback routing that cuts overall communication costs by up to 45%.",
    image: "/images/cost-savings.jpg",
    metric: "Up to 45% reduction in messaging overhead"
  },
  {
    number: "02",
    title: "Instant 24/7 Technical Operations & SLA Support 📩",
    description: "Round-the-clock dedicated technical specialists ensuring 99.99% uptime. Rapid resolution SLAs, proactive deliverability monitoring, and customized DLT template approvals so your business never stops sending.",
    image: "/images/expert-support.jpg",
    metric: "< 15 min average dedicated engineer SLA"
  },
  {
    number: "03",
    title: "Turnkey Multi-Channel API Architecture ⚡",
    description: "Deploy WhatsApp, RCS, Bulk SMS, and Voice IVR into your app in minutes with unified RESTful APIs, webhooks, and SDKs. Built for extreme concurrency of over 100,000 requests per second with end-to-end encryption.",
    image: "/images/api-integration.jpg",
    metric: "300+ enterprise API integrations active"
  }
];

export const PARTNER_LOGOS = [
  { name: "Jabong", src: "/images/jabong.png" },
  { name: "Times Internet", src: "/images/times-internet.png" },
  { name: "Fashion", src: "/images/fashion.png" },
  { name: "Bella Vita", src: "/images/bella-vita.png" },
  { name: "GNC", src: "/images/gnc.png" },
  { name: "ICICI Bank", src: "/images/icici.png" },
  { name: "Dominos", src: "/images/dominos.png" },
  { name: "Edelweiss", src: "/images/edelweiss.png" },
  { name: "Pizza Hut", src: "/images/pizza-hut.png" },
  { name: "BSE", src: "/images/bse.png" }
];

export const STATS = [
  {
    value: 400,
    suffix: "+",
    title: "Enterprise Clients",
    metric: "Active Brands",
    description: "Trusted by over 400 leading enterprises, e-commerce giants, and financial institutions across Asia and global markets."
  },
  {
    value: 99,
    decimal: ".99",
    suffix: "%",
    title: "Carrier Route Reliability",
    metric: "Guaranteed SLA",
    description: "Direct tier-1 telecom carrier connections with intelligent automated failover routing for zero message drop rates."
  },
  {
    value: 330,
    suffix: "+",
    title: "Delivered Custom Solutions",
    metric: "Turnkey Deployments",
    description: "Battle-tested API integrations, WhatsApp AI chatbots, and voice call workflows deployed seamlessly across industry sectors."
  },
  {
    value: 5,
    suffix: "B+",
    title: "Messages Processed",
    metric: "Annual Volume",
    description: "Ultra-fast infrastructure processing billions of OTPs, RCS rich cards, and promotional campaigns with low latency."
  }
];

export const TESTIMONIALS = [
  {
    review: "Their team guided us step-by-step in implementing WhatsApp Business API and chatbot solutions. Their expertise in compliance and best practices ensured we were set up correctly from day one. Communication is clear, reports are detailed, and the service just works. Very impressed.",
    rating: 5,
    author: "Enterprise Product Lead",
    company: "Fintech Enterprise"
  },
  {
    review: "Signy has completely streamlined our communication with their reliable bulk SMS and WhatsApp API. The platform is intuitive and their support team is proactive. They've helped us scale efficiently and improve customer response times.",
    rating: 4,
    author: "Operations Director",
    company: "E-Commerce Brand"
  },
  {
    review: "Choosing Signy was one of our best decisions—their API solutions and chatbot services work flawlessly. Their attention to detail, from onboarding to ongoing support, ensures we can focus on growth. Highly recommended for any business looking for an all-in-one communication partner.",
    rating: 5,
    author: "Head of Marketing",
    company: "Retail Group"
  },
  {
    review: "Exceptional experience using Signy for voice calls and Google Business Messages. The setup was seamless, and their team ensured smooth integration. Deliverability is consistently high, making them a trusted partner for our day-to-day communications.",
    rating: 5,
    author: "Chief Technology Officer",
    company: "Services Conglomerate"
  }
];

export const CTA_CONTENT = {
  headline: "Become part of a growing community of hundreds of successful businesses. Start scaling today.",
  buttonLabel: "Get in touch",
  buttonHref: "/contact"
};
