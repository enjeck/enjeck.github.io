import Link from 'next/link'
import { notFound } from 'next/navigation'
import Layout from '@/components/Layout'
import StructuredData from '@/components/StructuredData'
import ReadingProgress from '@/components/ReadingProgress'
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
  const description = post.content.substring(0, 155).replace(/#|```|\*\*/g, '').trim()
  return {
    title: post.frontmatter.title,
    description: description,
    keywords: post.frontmatter.categories || [],
    openGraph: {
      title: post.frontmatter.title,
      description: description,
      type: 'article',
      publishedTime: post.frontmatter.date,
    },
    twitter: {
      card: 'summary',
      title: post.frontmatter.title,
      description: description,
    },
  }
}

// Calculate reading time based on word count
function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return minutes
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

  // Calculate reading time
  const readingTime = calculateReadingTime(post.content)

  // Get previous and next posts
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === slug)
  const previous = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const next = currentIndex > 0 ? allPosts[currentIndex - 1] : null

  return (
    <>
      <ReadingProgress />
      <Layout>
        <StructuredData
          type="article"
          data={{
            title: post.frontmatter.title,
            date: post.frontmatter.date
          }}
        />
        <article className="blogpost-content">
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
            <div className="post-meta">
              <time className="date" dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
              <span className="reading-time">{readingTime} min read</span>
            </div>
          </div>

          <div className="blog-body">
            {content}
          </div>

          <hr />

          <nav className="post-navigation" aria-label="Post navigation">
            <h3> Read other posts</h3>
            <ul>
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
          </nav>
        </article>
      </Layout>
    </>
  )
}