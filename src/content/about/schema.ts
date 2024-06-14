import { defineCollection, z } from "astro:content";
import { IconType } from "../../types";

export const about = defineCollection({
    type: "data",
    schema: z.object({
        introduction: z.string(),
        elaboration: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        timeLineData: z.array(z.object({
            title: z.string(),
            location: z.string(),
            description: z.string(),
            dateStart: z.string().transform((str) => new Date(str)),
            dateEnd: z.string().transform((str) => new Date(str)).optional(),
            type: z.nativeEnum(IconType),
        })),
    }),
}); 