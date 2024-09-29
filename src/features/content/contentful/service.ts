import { ContentfulClientApi, createClient } from "contentful";
import { mapContentfulPageToPageModel } from "./dto";
import { PageModel } from "../model/page";

export class ContentfulContentService {
  private client: ContentfulClientApi<undefined>;

  private pages: PageModel[] = [];

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    });
  }

  async getPageByPathname(pathname: string): Promise<PageModel | undefined> {
    const pages = await this.getPages();

    return pages.find((page) => page.pathname === pathname);
  }

  async getPageByCategory(category: string): Promise<PageModel | undefined> {
    const pages = await this.getPages();

    return pages.find((page) => page.category === category);
  }

  async getPages(): Promise<PageModel[]> {
    if (this.pages.length > 0) {
      return this.pages;
    }

    const pages = await this.fetchPages();

    return this.pages.concat(
      pages.items.map((page) => mapContentfulPageToPageModel(page)),
    );
  }

  private async fetchPages() {
    return this.client.getEntries({
      content_type: "page",
    });
  }
}

export const contentfulContentService = new ContentfulContentService();
