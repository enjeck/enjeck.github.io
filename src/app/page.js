import HomePageClient from './HomePageClient'
import { getAllPosts } from '@/lib/blog'

export default function HomePage() {
  // Server component - fetch blog posts
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 3).map(post => ({
    slug: post.slug,
    frontmatter: post.frontmatter,
    excerpt: post.content.substring(0, 260).replace(/#|```|\*\*/g, '').trim() + '...'
  }))
  
  return <HomePageClient posts={recentPosts} />
}
