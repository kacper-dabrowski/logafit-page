import { z } from "zod";
import { PageImageData, PageModel } from "../model/page";

export const mapContentfulPageToPageModel = (dto: any): PageModel => {
  const featuredPhotoData = dto?.fields?.featuredPhoto;

  const thumbnailData = dto?.fields?.thumbnail;

  return {
    title: dto.fields.title,
    content: dto.fields.content,
    files: dto.fields.files,
    image: mapRequiredImageDto(featuredPhotoData),
    thumbnail: mapImageDto(thumbnailData),
    pathname: dto.fields.pathname,
    category: dto.fields.category.fields.title,
  };
};

const imageDataSchema = z.object({
  fields: z
    .object({
      file: z
        .object({
          url: z.string().optional(),
          details: z
            .object({
              image: z
                .object({
                  width: z.number().optional(),
                  height: z.number().optional(),
                })
                .optional(),
            })
            .optional(),
        })
        .optional(),
      description: z.string().optional(),
    })
    .optional(),
});

function mapRequiredImageDto(imageData: unknown): PageImageData {
  const requiredImageData = mapImageDto(imageData);

  if (!requiredImageData) {
    throw new Error(
      `Image data is required, details: ${JSON.stringify(imageData)}`,
    );
  }

  return requiredImageData;
}

function mapImageDto(imageData: unknown): PageImageData | undefined {
  const parsingResult = imageDataSchema.safeParse(imageData);

  if (!parsingResult.success) {
    return undefined;
  }

  const { data } = parsingResult;

  return {
    url: data.fields?.file?.url ? `https:${data.fields.file.url}` : undefined,
    alt: data.fields?.description,
    width: data.fields?.file?.details?.image?.width,
    height: data.fields?.file?.details?.image?.height,
  };
}
