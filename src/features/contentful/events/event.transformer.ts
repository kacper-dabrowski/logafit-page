import { z } from "zod";
import slugify from "slugify";
import { SchemaBasedEntityTransformer } from "../entryTransformer";
import { ImageMeta } from "../service/contentful.types";

export interface Event {
  eventName: string;
  type: "lato" | "zima";
  location: string;
  image: ImageMeta;
  order: number;
  emoji: string;
  color: string;
  dates: string[];
  participants: string;
  accentColor: string;
  slug: string;
  details: any;
}

const eventSchema = z
  .object({
    eventName: z.string(),
    type: z.enum(["lato", "zima"]),
    location: z.string(),
    color: z.object({ value: z.string() }).transform(({ value }) => value),
    emoji: z.string(),
    details: z.any(),
    dates: z.array(z.string()),
    participants: z.string(),
    accentColor: z
      .object({ value: z.string() })
      .transform(({ value }) => value),
  })
  .transform((data) => ({
    ...data,
    slug: slugify(data.eventName, { lower: true }),
  }));

export const eventTransformer = new SchemaBasedEntityTransformer<Event>(
  eventSchema,
);
