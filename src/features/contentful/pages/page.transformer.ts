import { z } from "zod";
import { imageMetaSchema } from "../service/contentful.types";
import { SchemaBasedEntityTransformer } from "../entryTransformer";

export const pageSchema = z.object({
  title: z.string(),
  content: z.any(),
  slug: z.string(),
  heroImage: imageMetaSchema,
  serviceDescription: z.string(),
  offers: z.array(
    z.object({
      name: z.string(),
      price: z.string(),
      description: z.string(),
    }),
  ),
});

export type Page = z.infer<typeof pageSchema>;

export const pageTransformer = new SchemaBasedEntityTransformer<Page>(
  pageSchema,
);
