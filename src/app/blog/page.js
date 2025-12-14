import Layout from '@/components/Layout'
import BlogListClient from '@/components/BlogListClient'
import { getAllPosts } from '@/lib/blog'
import '../../styles/blog.css'
import '../../styles/styles.css'

export const metadata = {
  title: 'Blog - Technical Writing & Development Insights',
  description: 'Technical articles about JavaScript, React, Next.js, web development, UX writing, and software engineering best practices by Enjeck.',
  keywords: ['technical blog', 'web development', 'JavaScript tutorials', 'React guides', 'Next.js', 'programming articles'],
  openGraph: {
    title: 'Blog - Technical Writing & Development Insights',
    description: 'Technical articles about web development and software engineering',
    type: 'website',
  },
}

// Calculate reading time based on word count
function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return minutes
}

export default function BlogPage() {
  const posts = getAllPosts().map(post => ({
    ...post,
    excerpt: post.content.substring(0, 260).replace(/#|```|\*\*/g, '').trim() + '...',
    readingTime: calculateReadingTime(post.content)
  }))

  return (
    <Layout>
      <div className="blog-main">
        <h1 className="page-heading">Blog</h1>
        <BlogListClient posts={posts} />
      </div>
    </Layout>
  )
}