import { MetadataRoute } from "next";
import { eventTransformer } from "../features/contentful/events/event.transformer";
import {
  AvailableEntity,
  contentfulClientService,
} from "../features/contentful/service/service";

const BASE_URL = "https://logafit.pl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = eventTransformer.transformMany(
    await contentfulClientService.getEntries(AvailableEntity.Events),
  );

  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/zapisz-sie`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej/plywanie-dla-niemowlat`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej/plywanie-dla-dzieci`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej/aqua-fitness`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej/rehabilitacja-w-wodzie`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej/plywanie-korekcyjne`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej/koncepcja-halliwick`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej/osteopatia`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const eventPages = events.map((event) => ({
    url: `${BASE_URL}/wydarzenia/${event.slug}`,
    lastModified: event.updatedAt,
  }));

  return [...staticPages, ...eventPages];
}
