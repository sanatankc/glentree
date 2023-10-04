import { z, defineCollection } from 'astro:content';

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
    aroundTheCampus: z.object({
      title: z.string(),
      description: z.string(),
      ctaText: z.string(),
      gallery: z.array(
        z.object({
          image: z.string().optional(),
          title: z.string().optional(),
          description: z.string().optional(),
        })
      )
    }).optional(),
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

const blogCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    caption: z.string(),
    blog: z.any(),
  }),
})

export const collections = {
  'school': blogCollection,
  'campus': campusCollection,
  'home': homeCollection,
  'disclosure': disclosureCollection,
  'blog': blogCollection
};