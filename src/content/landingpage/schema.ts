import { defineCollection, z } from "astro:content";

export const landingpage = defineCollection({
    type: "data",
    schema: z.object({
        slogan: z.string(),
        introduction: z.string(),
        profilePicture: z.string(),
    }),
});