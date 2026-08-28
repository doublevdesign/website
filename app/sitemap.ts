import type { MetadataRoute } from "next"

const siteUrl = "https://doublevdesign.at"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/en/`,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/de/`,
      changeFrequency: "monthly",
    },
  ]
}
