import { PageCategory, PageModel } from "../model/page";

export const mapContentfulPageToPageModel = (dto: any): PageModel => {
  return {
    title: dto.fields.title,
    content: dto.fields.content,
    files: dto.fields.files,
    image: {
      url: `https:${dto.fields.featuredPhoto.fields.file.url}`,
      alt: dto.fields.featuredPhoto.fields.description,
      width: dto.fields.featuredPhoto.fields.file.details.image.width,
      height: dto.fields.featuredPhoto.fields.file.details.image.height,
    },
    pathname: dto.fields.pathname,
    category: PageCategory.SwimmingSchoolCategory,
  };
};
