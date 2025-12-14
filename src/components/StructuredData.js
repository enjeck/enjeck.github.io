export default function StructuredData({ type, data }) {
  let structuredData = {}

  if (type === 'person') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Enjeck',
      url: 'https://enjeck.github.io',
      jobTitle: 'Full Stack Developer',
      sameAs: [
        'https://github.com/enjeck',
        'https://www.linkedin.com/in/c1e0/'
      ]
    }
  } else if (type === 'article') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: data.title,
      datePublished: data.date,
      author: {
        '@type': 'Person',
        name: 'Enjeck'
      },
      publisher: {
        '@type': 'Person',
        name: 'Enjeck'
      }
    }
  } else if (type === 'website') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: "Enjeck's Portfolio",
      url: 'https://enjeck.github.io',
      author: {
        '@type': 'Person',
        name: 'Enjeck'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
