import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://crazedev04.github.io/nicolaslogiudice'

const routes = [
  '',
  '/about',
  '/projects',
  '/technologies',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }))
}
