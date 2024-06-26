import { z, defineCollection } from "astro:content";

const authorsCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    sortOrder: z.number(),
    name: z.string(),
    jobTitle: z.string(),
    picture: image(),
    pictureAlt: z.string(),
    links: z.object({
      website: z.string().url().optional(),
      x: z.string(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      youtube: z.string().url().optional(),
    }).optional(),
  }),
});

const faqCollections = defineCollection({
  type: 'content',
  schema: z.object({
    question: z.string(),
  })
})

const reviewsCollection = defineCollection({
  type: 'content',
  schema: ({image}) => z.object({
    name: z.string(),
    jobTitle: z.string(),
    picture: image(),
  })
})

export const collections = {
  authors: authorsCollection,
  faq: faqCollections,
  reviews: reviewsCollection,
};