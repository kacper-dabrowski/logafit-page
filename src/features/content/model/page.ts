export interface PageModel {
  title: string;
  content: any;
  files: any;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  pathname: string;
  category: PageCategory;
}

export enum PageCategory {
  SwimmingSchoolCategory = "swimmingSchoolCategory",
}
