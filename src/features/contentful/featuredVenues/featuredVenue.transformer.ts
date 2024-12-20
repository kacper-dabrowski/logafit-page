import { z } from "zod";
import { SchemaBasedEntityTransformer } from "../entryTransformer";
import { ImageMeta, imageMetaSchema } from "../service/contentful.types";

export interface FeaturedVenue {
  name: string;
  backgroundColor: string;
  textColor: string;
  image: ImageMeta;
}

const featuredVenueSchema = z.object({
  name: z.string(),
  backgroundColor: z.string(),
  textColor: z.string(),
  image: imageMetaSchema,
});

export const featuredVenueTransformer =
  new SchemaBasedEntityTransformer<FeaturedVenue>(featuredVenueSchema);
