import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import "../styles/blog.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All blog posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className = "blog-main">
        <h2 className = "page-heading"> Blog </h2>
        <div className="blog-items">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className="blog-item">
              <div className="bg1"> </div>
              <div className="bg2"> </div>
              <div className="blog-item-content">
              <div className = "categories">
                {node.frontmatter.categories.map(category => {
                  return(
                      <span className="category">{category}</span>
                  ) 
                })}
              </div>
              <small className="date">{node.frontmatter.date}</small>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              <p className = "except" 
              dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </Link>
              </div>
            </div>
          )
        })}
        </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 260)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            categories
          }
        }
      }
    }
  }
`
