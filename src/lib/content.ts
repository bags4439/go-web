export const siteConfig = {
  name: 'AutoImport GH',
  tagline: 'Import your dream car. Stress-free.',
  description:
    "Ghana's trusted platform for importing vehicles from the US, Dubai, and China. Dedicated agents. Full transparency.",
  email: 'hello@autoimportgh.com',
  whatsapp: '+233 XX XXX XXXX',
  location: 'Accra, Ghana',
  officeHours: 'Mon – Fri, 9am – 5pm GMT',
  appStoreUrl: '#',
  playStoreUrl: '#',
  youtubeUrl: 'https://www.youtube.com/watch?v=PLACEHOLDER',
}

export const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Sources', href: '#sources' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: "Ghana's #1 Car Import Platform",
  title: ['Import your', 'dream car', 'stress-free'],
  subtitle:
    '[PLACEHOLDER TAGLINE] — A one-line pitch describing how AutoImport GH makes importing vehicles from the US, Dubai, or China simple, transparent, and reliable.',
  ctaPrimary: 'Download the app',
  ctaSecondary: 'See how it works →',
  trustCount: '[X]+',
  trustLabel: 'happy customers from Accra, Kumasi & beyond',
}

export const stats = [
  { value: '[X]+', label: 'Cars imported' },
  { value: '[X]+', label: 'Happy customers' },
  { value: '3', label: 'Source countries' },
  { value: '[X]%', label: 'Success rate' },
]

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'From preference to\nparking spot in 4 steps',
  subtitle:
    'Your dedicated agent handles everything — from finding your car to delivering it to your door.',
  videoLabel: 'Watch how it works',
  videoSubLabel: '2 min explainer video',
  steps: [
    {
      number: '1',
      title: 'Tell us what you want',
      desc: 'Open the app, set your make, model, source country, condition and budget. Takes less than 2 minutes.',
    },
    {
      number: '2',
      title: 'Meet your agent',
      desc: 'A dedicated import agent is assigned within 2 hours. They search auctions and dealers on your behalf.',
    },
    {
      number: '3',
      title: 'Approve and pay',
      desc: 'Your agent sends vehicle options in chat with full cost breakdowns. You approve, they handle the rest.',
    },
    {
      number: '4',
      title: 'Car delivered to you',
      desc: 'Shipping, port clearance, and delivery — all tracked in the app in real time. No surprises.',
    },
  ],
}

export const sources = {
  eyebrow: 'Where we source from',
  title: 'Three continents.\nOne app.',
  subtitle:
    'Choose your preferred source — or let your agent find the best deal across all three.',
  items: [
    {
      flag: '🇺🇸',
      name: 'US & Canada',
      desc: 'Copart & IAAI auctions — used, salvage, clean title',
      tags: ['Used', 'Salvage', 'Clean title'],
      colorClass: 'us',
    },
    {
      flag: '🇦🇪',
      name: 'Dubai',
      desc: 'Dealer sourced — typically low mileage, well maintained',
      tags: ['Used', 'Low mileage'],
      colorClass: 'dubai',
    },
    {
      flag: '🇨🇳',
      name: 'China',
      desc: 'Brand new EVs and ICE vehicles — direct from manufacturers',
      tags: ['Brand new', 'EVs', 'ICE'],
      colorClass: 'china',
    },
  ],
}

export const features = {
  eyebrow: 'Why AutoImport GH',
  title: 'Built for the Ghanaian\ncar buyer',
  subtitle:
    'Everything you need to import with confidence — from first search to final delivery.',
  items: [
    {
      icon: '🕵️',
      title: 'Dedicated agent',
      desc: 'A real human agent assigned to your order — searching, bidding, and communicating on your behalf.',
    },
    {
      icon: '💬',
      title: 'Real-time chat',
      desc: 'Chat directly with your agent through the app. No WhatsApp groups, no lost messages.',
    },
    {
      icon: '📍',
      title: 'Full journey tracking',
      desc: 'Track every stage — search, bid, win, shipping, clearance, delivery — all in one timeline.',
    },
    {
      icon: '🔒',
      title: 'Transparent payments',
      desc: 'No hidden fees. See a full cost breakdown before you commit to anything.',
    },
    {
      icon: '📄',
      title: 'All documents in one place',
      desc: 'Vehicle title, GRA declaration, duty receipt — all stored and accessible in your order vault.',
    },
    {
      icon: '🚗',
      title: 'Any car, any source',
      desc: 'From a Toyota Camry from a US auction to a brand new BYD from China — we handle it all.',
    },
  ],
}

export const about = {
  eyebrow: 'About us',
  title: 'Our story',
  body: [
    '[PLACEHOLDER — Founding story paragraph. Describe how and why AutoImport GH was founded, the problem it solves, and the team behind it. Keep it personal and authentic.]',
    "[PLACEHOLDER — Second paragraph about the team's background, experience in vehicle importing, and commitment to transparency for Ghanaian buyers.]",
  ],
  mission: {
    label: 'Our Mission',
    text: "[PLACEHOLDER — One or two sentences stating the company's mission. Example: 'To make importing a vehicle to Ghana as simple, transparent and stress-free as ordering on your phone.']",
  },
  stats: [
    { value: '[X]+', label: 'Cars imported' },
    { value: '[X]+', label: 'Vetted agents' },
    { value: '[X]', label: 'Years experience' },
    { value: 'GH 🇬🇭', label: 'Based in Ghana' },
  ],
  imagePlaceholderAlt: 'AutoImport GH team photo',
}

export const download = {
  eyebrow: 'Get the app',
  title: 'Start importing\ntoday',
  subtitle:
    'Available on iOS and Android. Set your preferences, meet your agent, and track your car — all from your phone.',
  ios: { label: 'Download on the', store: 'App Store' },
  android: { label: 'Get it on', store: 'Google Play' },
}

export const contact = {
  eyebrow: 'Get in touch',
  title: "We'd love to\nhear from you",
  formTitle: 'Send us a message',
  info: [
    { icon: '📧', label: 'Email', value: siteConfig.email },
    { icon: '💬', label: 'WhatsApp', value: siteConfig.whatsapp },
    { icon: '📍', label: 'Location', value: siteConfig.location },
    { icon: '🕐', label: 'Office hours', value: siteConfig.officeHours },
  ],
  fields: {
    name: { label: 'Full name', placeholder: 'Kwame Mensah' },
    email: { label: 'Email address', placeholder: 'kwame@example.com' },
    message: { label: 'Message', placeholder: "Tell us what you're looking for..." },
    submit: 'Send message →',
  },
}

export const footer = {
  description: siteConfig.description,
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Source countries', href: '#sources' },
        { label: 'Features', href: '#features' },
        { label: 'Download', href: '#download' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '#about' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ],
  copyright: '© 2025 AutoImport GH. All rights reserved.',
  legalLinks: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}
