'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar({ posts }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (query.length > 2) {
      const filtered = posts.filter(post => {
        const searchText = `${post.frontmatter.title} ${post.excerpt} ${post.frontmatter.categories?.join(' ')}`.toLowerCase()
        return searchText.includes(query.toLowerCase())
      })
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, posts])

  const handleResultClick = (slug) => {
    router.push(`/blog/${slug}`)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="search-container">
      <label htmlFor="blog-search" className="sr-only">Search blog posts</label>
      <input
        id="blog-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        className="search-input"
        aria-label="Search blog posts"
        aria-expanded={isOpen}
        aria-controls="search-results"
      />
      {isOpen && results.length > 0 && (
        <ul id="search-results" className="search-results" role="listbox">
          {results.map((post) => (
            <li 
              key={post.slug}
              onClick={() => handleResultClick(post.slug)}
              className="search-result-item"
              role="option"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleResultClick(post.slug)
              }}
            >
              <strong>{post.frontmatter.title}</strong>
              <small className="date">{post.frontmatter.date}</small>
            </li>
          ))}
        </ul>
      )}
      {isOpen && results.length === 0 && query.length > 2 && (
        <div className="search-results">
          <p>No results found for "{query}"</p>
        </div>
      )}
    </div>
  )
}
