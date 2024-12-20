import {
  ContentfulClientApi,
  createClient,
  EntryCollection,
  EntrySkeletonType,
} from "contentful";
import { EntryTransformer } from "../entryTransformer";

export class ContentfulClientService {
  private client: ContentfulClientApi<undefined>;

  private entries?: EntryCollection<EntrySkeletonType, undefined, string>;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    });
  }

  async getEntries(transformer: EntryTransformer<unknown>) {
    if (!this.entries) {
      this.entries = await this.client.getEntries();
    }

    return this.entries.items.map((entry) => transformer.transform(entry));
  }
}
