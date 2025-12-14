import { getAllPosts } from '@/lib/blog'

export const dynamic = 'force-static'

export default function sitemap() {
  const baseUrl = 'https://enjeck.github.io'

  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...posts]
}
