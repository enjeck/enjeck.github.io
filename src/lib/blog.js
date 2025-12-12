import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPostSlugs() {
  const folders = fs.readdirSync(postsDirectory)
  return folders.map(folder => ({
    slug: folder
  }))
}

export function getPostBySlug(slug) {
  const postPath = path.join(postsDirectory, slug)
  const filePath = fs.existsSync(path.join(postPath, 'index.mdx'))
    ? path.join(postPath, 'index.mdx')
    : path.join(postPath, 'index.md')
  
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data,
    content,
  }
}

export function getAllPosts() {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map(({ slug }) => getPostBySlug(slug))
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date)
      const dateB = new Date(b.frontmatter.date)
      return dateB - dateA // Sort newest first
    })
  
  return posts
}