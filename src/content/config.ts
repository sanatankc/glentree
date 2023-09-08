import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string()
  }),
});

const campusCollection = defineCollection({
  type: 'content', 
  schema: ({image}) => z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    bannerBg: z.string(),
    virtualCampusLink: z.string(),
    galleryImages: z.any(),
    showcase: z.any(),
    affiliationNo: z.string(),
  }),
});
const homeCollection = defineCollection({
  type: 'content', 
  schema: () => z.object({
    title: z.string(),
    heroImages: z.array(
      z.object({
        image_desktop: z.string().optional(),
        image_mobile: z.string().optional(),
        position: z.string().optional(),
      }),
    )
  }),
});

const disclosureCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    disclosure: z.any(),
  }),
});

export const collections = {
  'school': blogCollection,
  'campus': campusCollection,
  'home': homeCollection,
  'disclosure': disclosureCollection,
};