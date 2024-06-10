import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        techStack: z.array(z.string()),
        projectDuration: z.string(),
        teamSize: z.number(),
        longDescription: z.string(),
        shortDescription: z.string(),
        tags: z.array(z.string()),
        thumbnail: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        url: z.string(),
        content: z.array(z.object({
            title: z.string(),
            body: z.string(),
            graphics: z.array(z.object({
                src: z.string(),
                alt: z.string(),
            })).optional(),

        })).optional(),

    }),
})

export const collections = {
    'projects': projects,
}