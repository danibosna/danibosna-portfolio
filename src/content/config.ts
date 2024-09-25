// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your schema
export const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  description: z.string(),
  img: z.string(),
});
// export type BlogTypes = z.infer<typeof blogSchema>;

// 2. Define your collection(s)
const shareCollection = defineCollection({
  // type: "content",
  schema: blogSchema,
});

export type BlogTypes = typeof shareCollection;
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  share: shareCollection,
  crypto: shareCollection,
  vulnerabilities: shareCollection,
};
