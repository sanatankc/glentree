import { z, defineCollection } from 'astro:content';

const campusCollection = defineCollection({
  type: 'content', 
  schema: ({image}) => z.object({
    heroImages: z.array(
      z.object({
        image_desktop: z.string(),
        image_mobile: z.string(),
        alt: z.string(),
        position: z.string(),
      })
    ).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    bannerBg: z.string().optional(),
    virtualCampusLink: z.string().optional(),
    galleryImages: z.any().optional(),
    showcase: z.any().optional(),
    affiliationNo: z.string().optional(),
    aroundTheCampus: z.object({
      description: z.string(),
      bulletPoints: z.array(
        z.object({
          bulletPoint: z.string(),
        })
      ).optional(),
      gallery: z.array(
        z.object({
          image: z.string(),
          altTag: z.string().optional(),
          title: z.string().optional(),
          description: z.string().optional(),
        })
      ).optional(),
    }).optional(),
    contactUs: z.object({
      phoneNo: z.string(),
      email: z.string(),
      mapEmbedLink: z.string(),
      address: z.string(),
      workingHours: z.string(),
    }),
  }),
});

const homeCollection = defineCollection({
  type: 'content', 
  schema: () => z.object({
    title: z.string().optional(),
    heroImages: z.array(
      z.object({
        image_desktop: z.string().optional(),
        image_mobile: z.string().optional(),
        position: z.string().optional(),
      })
    ).optional(),
    testimonials: z.array(
      z.object({
        testimonial_picture: z.string().optional(),
        testimonial_picture_alt: z.string().optional(),
        testimonial: z.string().optional(), // 'rich-text' translates to 'any' in Zod
        author: z.string().optional(),
        role: z.string().optional(),
        embedId: z.string().optional(),
      })
    ).optional(),
    bigAdmissionCTA: z.object({
      subtitle: z.string().optional(),
      heading: z.string().optional(),
      body: z.string().optional(),
      primaryCTAText: z.string().optional(),
      primaryCTALink: z.string().optional(),
      secondaryCTALink: z.string().optional(),
      secondaryCTAText: z.string().optional(),
    }).optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).optional(),
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

const updateCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    thumbnail: z.string(),
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    videoLink: z.string(),
    alt: z.string(),
  }),
})

const curriculumCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    academics: z.array(
      z.object({
        title: z.string(),
        grade: z.string(),
        concepts: z.array(
          z.object({
            concept: z.string(),
          })
        ),
        image: z.string().optional(),
        imageAlt: z.string().optional(),
        newlyAdded: z.boolean().optional(),
      })
    ),
  }),
});

const afterschoolCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    afterschool: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        thumbnailAlt: z.string(),
      })
    ),
  }),
});


const clubsCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    clubs: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        thumbnailAlt: z.string(),
      })
    ),
  }),
});

const coscholasticsCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    coscholastics: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        thumbnailAlt: z.string(),
      })
    ),
  }),
});


const admissionsCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    admissionProcess: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
      })
    ),
    keyInformation: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
  }),
});


export const collections = {
  'school': blogCollection,
  'campus': campusCollection,
  'home': homeCollection,
  'disclosure': disclosureCollection,
  'blog': blogCollection,
  'update': updateCollection,
  'curriculum': curriculumCollection,
  afterschool: afterschoolCollection,
  clubs: clubsCollection,
  coscholastics: coscholasticsCollection,
  admissions: admissionsCollection,
};