export interface PageImageData {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface PageModel {
  title: string;
  content: any;
  files: any;
  image: PageImageData;
  thumbnail?: PageImageData;
  pathname: string;
  category: PageCategory;
}

export interface ThumbnailData {
  title: string;
  thumbnailImage: PageImageData;
  learnMoreUrl: string;
}

export const getThumbnailDataFromPageModel = (
  page: PageModel,
): ThumbnailData => {
  return {
    title: page.title,
    thumbnailImage: page.thumbnail!,
    learnMoreUrl: page.pathname,
  };
};

export const groupPagesByCategory = (
  pages: PageModel[],
): Record<string, PageModel[]> => {
  return { ...Object.groupBy(pages, (page) => page.category) };
};

export enum PageCategory {
  SwimmingSchoolCategory = "swimmingSchoolCategory",
}
