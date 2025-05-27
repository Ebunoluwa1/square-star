import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.string(),
    description: z.string(),
    url: z.string(),
    image: z.string().optional(),
    // slug: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
