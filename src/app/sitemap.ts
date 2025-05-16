import { MetadataRoute } from "next";

const BASE_URL = "https://logafit.pl";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/wydarzenia`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/dowiedz-sie-wiecej`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${BASE_URL}/zapisz-sie`,
      lastModified: new Date().toISOString(),
    },
  ];
}
