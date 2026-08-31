import type { MetadataRoute } from "next"

const siteUrl = "https://doublevdesign.at"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/en/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/de/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
