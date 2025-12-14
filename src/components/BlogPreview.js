'use client'

import Link from 'next/link'

export default function BlogPreview({ posts }) {
  return (
    <div className="blog-items">
      {posts.map((post) => {
        const title = post.frontmatter.title || post.slug
        return (
          <div key={post.slug} className="blog-item">
            <div className="bg1"> </div>
            <div className="bg2"> </div>
            <div className="blog-item-content">
              <div className="categories">
                {post.frontmatter.categories && post.frontmatter.categories.map((category) => {
                  return <span key={category} className="category">{category}</span>
                })}
              </div>
              <div className="post-meta">
                <small className="date">{post.frontmatter.date}</small>
              </div>
              <h3>
                <Link style={{ boxShadow: 'none' }} href={`/blog/${post.slug}`}>
                  {title}
                </Link>
              </h3>
              <Link style={{ boxShadow: 'none' }} href={`/blog/${post.slug}`}>
                <p className="except">
                  {post.excerpt || 'Read more...'}
                </p>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
