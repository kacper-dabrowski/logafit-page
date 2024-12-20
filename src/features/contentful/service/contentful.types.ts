import { z } from "zod";

export interface ImageMeta {
  fields: {
    file: {
      contentType: string;
      details: {
        image: { height: number; width: number };
      };
      url: string;
      title: string;
      description: string;
    };
  };
}

export const imageMetaSchema = z.object({
  fields: z.object({
    file: z.object({
      contentType: z.string(),
      details: z.object({
        image: z.object({
          height: z.number(),
          width: z.number(),
        }),
      }),
      url: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  }),
});
