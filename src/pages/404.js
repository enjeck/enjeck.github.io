import React from 'react'
import "../styles/404.css"
import Layout from '../components/Layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <div className="page-404">
        <h1 className="heading-404">404</h1>
        <h3>Oops! Page not found</h3>
        <p>Sorry, the page you are looking for does not exist.</p>
        <div className="buttons-404">

        <a href="/"
                           className="btn-work btn-blog">
                           <span className="btn-work__text">Back to home </span> 
                           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                              viewBox="0 0 476.213 476.213" xmlSpace="preserve" className="btn-work__icon">
                              <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 ">
                              </polygon>
                           </svg>
                        </a>
        <a href="/blog"
                           className="btn-work btn-blog">
                           <span className="btn-work__text">Visit blog</span> 
                           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                              viewBox="0 0 476.213 476.213" xmlSpace="preserve" className="btn-work__icon">
                              <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 ">
                              </polygon>
                           </svg>
                        </a>
                        </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
