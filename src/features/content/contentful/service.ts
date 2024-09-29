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

  async getPathnames(): Promise<string[]> {
    const pages = await this.getPages();

    return pages.map((page) => page.pathname);
  }

  async getPages(): Promise<PageModel[]> {
    if (this.pages.length > 0) {
      return this.pages;
    }

    const pages = await this.fetchPages("page");

    return this.pages.concat(
      pages.items.map((page) => mapContentfulPageToPageModel(page)),
    );
  }

  private async fetchPages(contentType: string) {
    return this.client.getEntries({
      content_type: contentType,
    });
  }
}

export const contentfulContentService = new ContentfulContentService();
