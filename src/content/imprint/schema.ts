import { defineCollection, z } from "astro:content";

export const imprint = defineCollection({
    type: "data",
    schema: z.object({
        fullName: z.string(),
        legalForm: z.string().optional(),
        street: z.string(),
        houseNumber: z.string(),
        zip: z.string(),
        city: z.string(),
        country: z.string(),
        phone: z.string().optional(),
        email: z.string(),
    }),
}); 