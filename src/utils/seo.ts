// SEO utilities for generating meta tags, structured data, etc.

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  canonicalUrl?: string;
  noindex?: boolean;
}

export function generateSEO(props: SEOProps) {
  const siteUrl = 'https://chinashoe.cc';
  const defaultImage = `${siteUrl}/og-default.jpg`;
  
  return {
    title: props.title.includes('chinashoe') ? props.title : `${props.title} | ChinaShoe.cc`,
    description: props.description,
    image: props.image || defaultImage,
    type: props.type || 'website',
    canonicalUrl: props.canonicalUrl ? `${siteUrl}${props.canonicalUrl}` : undefined,
    noindex: props.noindex,
  };
}

export function generateOpenGraph(props: SEOProps) {
  return {
    title: props.title,
    description: props.description,
    image: props.image,
    type: props.type,
    url: props.canonicalUrl,
    siteName: 'ChinaShoe.cc',
  };
}

export function generateTwitterCard(props: SEOProps) {
  return {
    card: 'summary_large_image',
    title: props.title,
    description: props.description,
    image: props.image,
    site: '@chinashoecc',
    creator: '@chinashoecc',
  };
}

// Generate Schema.org structured data
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ChinaShoe.cc',
    url: 'https://chinashoe.cc',
    logo: 'https://chinashoe.cc/favicon.svg',
    description: 'Your trusted B2B footwear knowledge hub - Connecting global shoe buyers with Chinese manufacturers and industry insights.',
    sameAs: [
      'https://www.linkedin.com/in/chun-zhang-aba391186',
      'https://twitter.com/chinashoecc',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'Nicole99124@gmail.com',
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ChinaShoe.cc',
    url: 'https://chinashoe.cc',
    description: 'B2B Footwear Industry Knowledge Hub - China Shoe Source Platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://chinashoe.cc/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url?.startsWith('http') ? item.url : `https://chinashoe.cc${item.url || ''}`,
    })),
  };
}

// Generate Article Schema for content pages
export function generateArticleSchema(props: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  section?: string;
}) {
  const siteUrl = 'https://chinashoe.cc';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.title,
    description: props.description,
    url: props.url?.startsWith('http') ? props.url : `${siteUrl}${props.url}`,
    image: props.image || `${siteUrl}/og-default.jpg`,
    datePublished: props.publishedTime || new Date().toISOString(),
    dateModified: props.modifiedTime || new Date().toISOString(),
    author: props.authors?.map(a => ({
      '@type': 'Person',
      name: a,
    })) || [{ '@type': 'Person', name: 'ChinaShoe.cc Editorial Team' }],
    publisher: {
      '@type': 'Organization',
      name: 'ChinaShoe.cc',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url?.startsWith('http') ? props.url : `${siteUrl}${props.url}`,
    },
    articleSection: props.section || 'Footwear Industry',
    keywords: props.tags?.join(', ') || '',
  };
}

// Generate FAQ Schema for FAQ content
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Generate HowTo Schema for step-by-step guides
export function generateHowToSchema(props: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    totalTime: props.totalTime,
    step: props.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}

// Navigation data
export const mainNavItems = [
  { label: 'Encyclopedia', href: '/encyclopedia/', description: 'Footwear knowledge base' },
  { label: 'Suppliers', href: '/suppliers/', description: 'Verified manufacturers' },
  { label: 'News', href: '/news/', description: 'Industry updates' },
  { label: 'Inspiration', href: '/inspiration/', description: 'Design trends' },
  { label: 'Market', href: '/market/', description: 'Market data & reports' },
  { label: 'Sourcing', href: '/sourcing/', description: 'Procurement guides' },
];

export const footerNavItems = {
  resources: [
    { label: 'Encyclopedia', href: '/encyclopedia/' },
    { label: 'Sourcing Guides', href: '/sourcing/' },
    { label: 'Supplier Directory', href: '/suppliers/' },
    { label: 'Design Inspiration', href: '/inspiration/' },
  ],
  company: [
    { label: 'About Us', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
  ],
  categories: [
    { label: 'Running Shoes', href: '/encyclopedia/running-shoes/' },
    { label: 'Leather Shoes', href: '/encyclopedia/leather-shoes/' },
    { label: 'Sneakers', href: '/encyclopedia/sneakers/' },
    { label: 'Safety Shoes', href: '/encyclopedia/safety-shoes/' },
  ],
};
