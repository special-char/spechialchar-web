import { MetadataRoute } from "next";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type Sitemap = {
  url: string;
  lastModified: string | Date | undefined;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
    | undefined;
  priority?: number | undefined;
};

const fetchRoutes = async () => {
  const response = await fetch(
    `https://cdn.builder.io/api/v2/content/page?apiKey=${BUILDER_API_KEY}&fields=data.url&fields=lastUpdated`
  );

  const resjson = response.json();
  return resjson;
};

const updatedDate = (lastUpdated: any) => {
  if (!lastUpdated || isNaN(new Date(lastUpdated).getTime())) {
    return undefined;
  }
  const date = new Date(lastUpdated);
  const isoDate = date.toISOString();
  return isoDate;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const funcall = await fetchRoutes();

  let staticPages: Sitemap[] = [];
  let dynamicPages: Sitemap[] = [];

  const dynamicSitemap: Sitemap[] = funcall?.results?.reduce(
    (p: Sitemap[], c: any) => {
      const data = [];
      data.push({
        url: `${BASE_URL}${c.data.url}`,
        lastModified: updatedDate(c?.lastUpdated),
        priority: 0.9,
      });

      return [...p, ...data];
    },
    []
  );

  if (dynamicSitemap) dynamicPages = [...dynamicSitemap];

  return [...staticPages, ...dynamicPages];
}
