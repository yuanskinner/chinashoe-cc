import { defineCollection, z } from 'astro:content';

const encyclopediaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    author: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const suppliersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    location: z.string(),
    region: z.string(),
    specialization: z.array(z.string()),
    certifications: z.array(z.string()),
    moq: z.string(),
    established: z.number(),
    image: z.string().optional(),
    verified: z.boolean().default(false),
  }),
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    readTime: z.string(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  encyclopedia: encyclopediaCollection,
  news: newsCollection,
  suppliers: suppliersCollection,
  guides: guidesCollection,
};
