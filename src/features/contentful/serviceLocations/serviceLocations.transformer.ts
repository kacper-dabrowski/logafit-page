import { z } from "zod";
import { SchemaBasedEntityTransformer } from "../entryTransformer";

const serviceLocationsSchema = z
  .object({
    title: z.string(),
    list: z.array(z.string()),
    category: z.object({
      fields: z.object({ title: z.string(), order: z.number() }),
    }),
  })
  .transform((data) => ({
    category: data.category.fields.title,
    title: data.title,
    list: data.list,
    order: data.category.fields.order,
  }));

export type ServiceLocation = z.infer<typeof serviceLocationsSchema>;

export const serviceLocationsTransformer =
  new SchemaBasedEntityTransformer<ServiceLocation>(serviceLocationsSchema);
