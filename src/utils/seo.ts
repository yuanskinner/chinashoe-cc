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
      'https://linkedin.com/company/chinashoe',
      'https://twitter.com/chinashoecc',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@chinashoe.cc',
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
      item: item.url.startsWith('http') ? item.url : `https://chinashoe.cc${item.url}`,
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
