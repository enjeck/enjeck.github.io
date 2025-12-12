import './globals.css'
import '../styles/styles.css'
import '../styles/blog.css'
import GoogleAnalytics from './GoogleAnalytics'

export const metadata = {
  title: "Enjeck's Personal Website",
  description: 'Personal website with MDX blog',
  authors: [{ name: 'Enjeck' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}