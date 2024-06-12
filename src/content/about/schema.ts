import { defineCollection, z } from "astro:content";

export const about = defineCollection({
    type: "data",
    schema: z.object({
        introduction: z.string(),
        elaboration: z.string(),
        image: z.string(),
        imageAlt: z.string(),
    }),
}); 