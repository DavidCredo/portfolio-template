import { defineCollection, z } from "astro:content";

export const projects = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        techStack: z.array(z.string()),
        projectDuration: z.string(),
        team: z.string(),
        longDescription: z.string(),
        shortDescription: z.string(),
        tags: z.array(z.string()),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        url: z.string().optional(),
        content: z.array(z.object({
            title: z.string().optional(),
            body: z.string().optional(),
            graphics: z.array(z.object({
                src: z.string(),
                alt: z.string(),
            })).optional(),
        })).optional(),

    }),
});