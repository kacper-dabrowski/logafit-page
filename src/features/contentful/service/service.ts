import { ContentfulClientApi, createClient } from "contentful";
import { CacheService } from "../../../shared/cache/cache";
import { InMemoryCacheService } from "../../../shared/cache/inMemory";

export enum AvailableEntity {
  FeaturedVenues = "featuredVenue",
  CompanyDetails = "contact",
  Locations = "locations",
  Events = "events",
  Pages = "pages",
}

export class ContentfulClientService {
  private client: ContentfulClientApi<undefined>;

  constructor(private cacheService: CacheService) {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    });
  }

  async getEntries(name: AvailableEntity): Promise<unknown[]> {
    return this.cacheService.wrap(name, () => this.fetchEntries(name));
  }

  private async fetchEntries(name: AvailableEntity): Promise<unknown[]> {
    const response = await this.client.getEntries({ content_type: name });

    return response.items.map((item) => ({
      ...item.fields,
      createdAt: item.sys.createdAt,
      updatedAt: item.sys.updatedAt,
    }));
  }
}

export const contentfulClientService = new ContentfulClientService(
  new InMemoryCacheService(),
);
