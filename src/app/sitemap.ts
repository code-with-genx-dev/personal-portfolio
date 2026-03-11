import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://visva-chi.vercel.app/',
      lastModified: new Date(),
    },
  ]
}