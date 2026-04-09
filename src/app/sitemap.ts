import type { MetadataRoute } from 'next'

// TODO: Instead of using this env. we could do it directly from consts
import { DOMAIN } from '../lib/constants'

const siteUrl = DOMAIN

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${siteUrl.replace(/\/$/, '')}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
