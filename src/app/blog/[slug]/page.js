import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/lib/blog'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'

// Components available in MDX
import CodeBlock from '@/components/code'

const components = {
  pre: CodeBlock,
  // Add other custom components
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.title,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.content,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [rehypeKatex],
      },
    },
  })

  // Get previous and next posts
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const previous = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <Layout>
      <div className="blogpost-content">
        <div className="centered">
          <Link href="/blog" style={{ 
            borderBottom: "2px dotted var(--dark-black)", 
            padding: "10px 20px"
          }}>
            ← Back to blog
          </Link>
          <h1 className="blogpost-title">
            <span>{post.frontmatter.title}</span>
          </h1>
          <p className="date">{post.frontmatter.date}</p>
        </div>
        
        <div className="blog-body">
          {content}
        </div>

        <hr />

        <ul className="post-navigation">
          <li>
            {previous && (
              <Link href={`/blog/${previous.slug}`}>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={`/blog/${next.slug}`}>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Layout>
  )
}