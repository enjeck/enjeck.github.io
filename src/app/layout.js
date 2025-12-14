import './globals.css'
import '../styles/styles.css'
import '../styles/blog.css'
import GoogleAnalytics from './GoogleAnalytics'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  metadataBase: new URL('https://enjeck.github.io'),
  title: {
    default: "Enjeck - Software Engineer & Technical Writer",
    template: "%s | Enjeck"
  },
  description: 'Portfolio of Enjeck, a software engineer and technical writer. Explore projects, blog posts, and technical articles.',
  keywords: ['Software Engineer', 'Technical Writer', 'React', 'Next.js', 'JavaScript', 'UI/UX Design', 'Web Development'],
  authors: [{ name: 'Enjeck', url: 'https://enjeck.github.io' }],
  creator: 'Enjeck',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enjeck.github.io',
    siteName: "Enjeck's Portfolio",
    title: "Enjeck - Software Engineer & Technical Writer",
    description: 'Portfolio showcasing web development projects and technical writing',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Enjeck - Software Engineer & Technical Writer",
    description: 'Portfolio showcasing web development projects and technical writing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        />
        <StructuredData type="website" />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}