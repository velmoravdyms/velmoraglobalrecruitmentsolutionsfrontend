import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://velmoraglobalrecruitmentsolutions.velmoragrouphub.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://velmoraglobalrecruitmentsolutions.velmoragrouphub.com/submit',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
        {
      url: 'https://velmoraglobalrecruitmentsolutions.velmoragrouphub.com/#about',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://velmoraglobalrecruitmentsolutions.velmoragrouphub.com/#services',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://velmoraglobalrecruitmentsolutions.velmoragrouphub.com/#contact',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },

  ]
}