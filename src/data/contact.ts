// Contact Information
// All contact details should be referenced from this file, never hardcoded

export const CONTACT = {
  email: 'Nicole99124@gmail.com',
  tel: '+8615986707004',
  whatsapp: 'wa.me/8615986707004',
  instagram: 'instagram.com/women_shoes9012',
  linkedin: 'linkedin.cn/inicareer/in/chunzhang2025',
  facebook: 'https://www.facebook.com/p/Lady-shoes-factory-in-china-100065057501406',
} as const;

export const CONTACT_DISPLAY = {
  email: 'Nicole99124@gmail.com',
  tel: '+86 15986707004',
  whatsapp: '+86 15986707004',
  instagram: '@women_shoes9012',
  linkedin: 'Chun Zhang',
  facebook: 'Lady Shoes Factory in China',
} as const;

export const CONTACT_URLS = {
  email: `mailto:${CONTACT.email}`,
  tel: `tel:${CONTACT.tel}`,
  whatsapp: `https://${CONTACT.whatsapp}`,
  instagram: `https://${CONTACT.instagram}`,
  linkedin: `https://${CONTACT.linkedin}`,
  facebook: CONTACT.facebook,
} as const;
