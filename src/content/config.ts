// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
  }),
});

const campusCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    bannerBg: z.string(),
    virtualCampusLink: z.string(),
    galleryImages: z.any(),
    affiliationNo: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'school': blogCollection,
  'campus': campusCollection,

};