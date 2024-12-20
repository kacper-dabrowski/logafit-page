import { z } from "zod";
import { ImageMeta, imageMetaSchema } from "./service/contentful.types";
import { DefaultEntryTransformer } from "./entryTransformer";

export interface FeaturedVenue {
  title: string;
  backgroundColor: string;
  textColor: string;
  image: ImageMeta;
}

const featuredVenueSchema = z.object({
  title: z.string(),
  backgroundColor: z.string(),
  textColor: z.string(),
  image: imageMetaSchema,
});

export const featuredVenueTransformer =
  new DefaultEntryTransformer<FeaturedVenue>(featuredVenueSchema);
