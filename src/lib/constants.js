export const COMPANY_INFO = {
  name: "Signy",
  legalName: "Signy Solutions India Pvt Ltd",
  phone: "+91-9167775222",
  phoneHref: "tel:+919167775222",
  email: "signy4455@gmail.com",
  emailHref: "mailto:signy4455@gmail.com",
  address: "1609 Floor 16, 9, Business Bay Off, New Link Rd, behind Evershine Mall, Malad W, Mumbai, Maharashtra 400064",
  googleMapsUrl: "https://maps.google.com/?q=Business+Bay+Malad+West+Mumbai+400064",
  copyright: "© 2022 Signy Solutions. All Rights Reserved.",
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
      { label: "Bulk SMS", href: "/services/bulk-sms", desc: "Automated bulk messaging" },
      { label: "WhatsApp Business API", href: "/services/whatsapp-business-api", desc: "Official WhatsApp business messaging" },
      { label: "Voice Calls", href: "/services/voice-calls", desc: "Clear, reliable voice broadcast" },
      { label: "Google Verified SMS", href: "/services/google-verified-sms", desc: "Verified sender identity & logo" },
      { label: "RCS Messaging", href: "/services/rcs", desc: "Rich interactive multimedia chat" },
      { label: "Chatbots", href: "/services/chatbots", desc: "24/7 intelligent customer support" },
    ]
  },
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
    iconName: "MessageSquare",
  },
  {
    id: "whatsapp-business-api",
    title: "WhatsApp Business API",
    desc: "Manage customer conversations effortlessly with the WhatsApp Business API. Automate replies, send notifications, and boost sales from one unified WhatsApp platform.",
    href: "/services/whatsapp-business-api",
    iconName: "PhoneCall",
  },
  {
    id: "voice-calls",
    title: "Voice Calls",
    desc: "Experience seamless interaction with voice calls. Connect with anyone, anywhere, anytime with clear and reliable audio connections.",
    href: "/services/voice-calls",
    iconName: "Volume2",
  },
  {
    id: "google-verified-sms",
    title: "Google Verified SMS",
    desc: "Build Trust with Every Message. Elevate your brand's credibility by displaying your verified business name and logo directly in the text thread. Through Google's verification program, we ensure your communications are instantly recognized and trusted by customers.",
    href: "/services/google-verified-sms",
    iconName: "ShieldCheck",
  },
  {
    id: "rcs",
    title: "RCS (Rich Communication Services)",
    desc: "Transform Conversations with Rich Media. Move beyond basic SMS and engage your audience with dynamic, interactive messaging. Send high-resolution images, videos, audio files, and more through RCS, creating visually rich and compelling conversations that drive engagement.",
    href: "/services/rcs",
    iconName: "Sparkles",
  },
  {
    id: "chatbots",
    title: "Chatbot",
    desc: "Deliver Instant Support, Around the Clock. Enhance your customer service with intelligent chatbot automation. Provide immediate, 24/7 responses to common inquiries, resolve issues faster, and allow your human team to focus on higher-value, complex interactions.",
    href: "/services/chatbots",
    iconName: "Bot",
  }
];

export const BENEFITS = [
  {
    title: "A proven digital solution to lower your communication costs.",
    emoji: "💰",
    description: "Our integrated digital solutions drive significant cost savings by streamlining and automating your communication workflows. By eliminating repetitive manual tasks, we reduce operational expenses and empower your team to focus on strategic priorities, boosting overall productivity and efficiency.",
  },
  {
    title: "Instant Expert Support",
    emoji: "📩",
    description: "Quick resolutions. Expert guidance. We ensure any issue is addressed immediately, so you can keep moving forward and achieving your desired outcomes.",
  },
  {
    title: "Implementation Perfected by Experts",
    emoji: "",
    description: "Our specialist team ensures your success. We tailor the platform to your strategy, integrate it with your workflow, and guide you to a seamless launch that delivers results.",
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
    value: "400+",
    title: "Loyal clients",
    description: "Trusted by over 400 satisfied clients, our proven track record reflects the reliability and effectiveness of our solutions. You can count on our commitment to excellence to help drive your business forward."
  },
  {
    value: "Trusted",
    title: "Employees",
    description: "Expertise, not headcount, powers our SMS solutions. Our dedicated team delivers exceptional service and innovative support, focused entirely on driving your business forward."
  },
  {
    value: "330",
    title: "successfully delivered projects",
    description: "We don't just promise results; we deliver them. With a portfolio of 300+ successful projects, we've repeatedly proven our ability to meet and exceed client expectations with high-quality solutions."
  }
];

export const TESTIMONIALS = [
  {
    review: "Their team guided us step-by-step in implementing WhatsApp Business API and chatbot solutions. Their expertise in compliance and best practices ensured we were set up correctly from day one. Communication is clear, reports are detailed, and the service just works. Very impressed.",
    rating: 5,
  },
  {
    review: "Signy has completely streamlined our communication with their reliable bulk SMS and WhatsApp API. The platform is intuitive and their support team is proactive. They've helped us scale efficiently and improve customer response times.",
    rating: 4,
  },
  {
    review: "Choosing Signy was one of our best decisions—their API solutions and chatbot services work flawlessly. Their attention to detail, from onboarding to ongoing support, ensures we can focus on growth. Highly recommended for any business looking for an all-in-one communication partner.",
    rating: 5,
  },
  {
    review: "Exceptional experience using Signy for voice calls and Google Business Messages. The setup was seamless, and their team ensured smooth integration. Deliverability is consistently high, making them a trusted partner for our day-to-day communications.",
    rating: 5,
  }
];

export const CTA_CONTENT = {
  headline: "Become part of a growing community of hundreds of successful businesses. Start scaling today.",
  buttonLabel: "Get in touch",
  buttonHref: "/contact"
};
