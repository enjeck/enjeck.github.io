import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllPosts } from '@/lib/blog'
import '../../styles/blog.css'
import '../../styles/styles.css'

export const metadata = {
  title: 'Blog - Enjeck',
  description: 'Technical blog posts',
}

export default function BlogPage() {
  const posts = getAllPosts().map(post => ({
    ...post,
    excerpt: post.content.substring(0, 260).replace(/#|```|\*\*/g, '').trim() + '...'
  }))

  return (
    <Layout>
      <div className="blog-main">
        <h2 className="page-heading">Blog</h2>
        <div className="blog-items">
          {posts.map((post) => (
            <div key={post.slug} className="blog-item">
              <div className="bg1"></div>
              <div className="bg2"></div>
              <div className="blog-item-content">
                <div className="categories">
                  {post.frontmatter.categories && post.frontmatter.categories.map(cat => (
                    <span key={cat} className="category">{cat}</span>
                  ))}
                </div>
                <small className="date">{post.frontmatter.date}</small>
                <h3>
                  <Link href={`/blog/${post.slug}`} style={{ boxShadow: 'none' }}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <Link href={`/blog/${post.slug}`} style={{ boxShadow: 'none' }}>
                  <p
                    className="except"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}