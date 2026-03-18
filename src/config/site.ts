/**
 * Site configuration
 */
export const siteConfig = {
  name: 'Akubrecah Dev Cave PDF',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: 'https://pdfcraft.devtoolcafe.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/Akubrecah Dev Cave PDFTool/pdfcraft',
    twitter: 'https://twitter.com/pdfcraft',
  },
  creator: 'Akubrecah Technologies',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | Akubrecah Dev Cave PDF',
    defaultTitle: 'Akubrecah Dev Cave PDF - Professional PDF Tools',
    twitterHandle: '@pdfcraft',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
};
