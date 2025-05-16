import { MetadataRoute } from "next";
import { eventTransformer } from "../../features/contentful/events/event.transformer";
import {
  AvailableEntity,
  contentfulClientService,
} from "../../features/contentful/service/service";

const BASE_URL = "https://logafit.pl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = eventTransformer.transformMany(
    await contentfulClientService.getEntries(AvailableEntity.Events),
  );

  return events.map((event) => ({
    url: `${BASE_URL}/wydarzenia/${event.slug}`,
    lastModified: event.updatedAt,
  }));
}
