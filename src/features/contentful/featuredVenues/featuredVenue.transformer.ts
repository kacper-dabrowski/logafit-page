import { z } from "zod";
import { SchemaBasedEntityTransformer } from "../entryTransformer";
import { ImageMeta, imageMetaSchema } from "../service/contentful.types";

export interface FeaturedVenue {
  name: string;
  backgroundColor: string;
  textColor: string;
  image: ImageMeta;
  order: number;
}

const featuredVenueSchema = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  textColor: z.string(),
  image: imageMetaSchema,
  order: z.number(),
});

export const featuredVenueTransformer =
  new SchemaBasedEntityTransformer<FeaturedVenue>(featuredVenueSchema);
