import { defineCollection, z } from "astro:content";

export const layout = defineCollection({
    type: "data",
    schema: z.object({
        head: z.object({
            title: z.string(),
            description: z.string(),
            favicon: z.string(),
            mailadress: z.string(),
        }),
        header: z.object({
            logo: z.string(),
        }),
        body: z.object({}).optional(),
        footer: z.object({}).optional(),
    }),
});