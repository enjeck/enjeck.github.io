'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BlogListClient({ posts }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    if (!searchQuery || searchQuery.length < 2) return true
    
    const searchText = `${post.frontmatter.title} ${post.excerpt} ${post.frontmatter.categories?.join(' ')}`.toLowerCase()
    return searchText.includes(searchQuery.toLowerCase())
  })

  return (
    <>
      <div className="search-container">
        <label htmlFor="blog-search" className="sr-only">Search blog posts</label>
        <input
          id="blog-search"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="search-input"
          aria-label="Search blog posts"
        />
      </div>

      {searchQuery.length >= 2 && filteredPosts.length === 0 && (
        <div className="no-results">
          <p>No articles found for "{searchQuery}"</p>
        </div>
      )}

      <div className="blog-items">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="blog-item">
            <div className="bg1"></div>
            <div className="bg2"></div>
            <div className="blog-item-content">
              <div className="categories">
                {post.frontmatter.categories && post.frontmatter.categories.map(cat => (
                  <span key={cat} className="category">{cat}</span>
                ))}
              </div>
              <div className="post-meta">
                <small className="date">{post.frontmatter.date}</small>
                <small className="reading-time">{post.readingTime} min read</small>
              </div>
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
    </>
  )
}
