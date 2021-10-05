import * as React from 'react'
import SEO from '../components/seo'
import '../styles/styles.css'
import { Link, graphql } from 'gatsby'
import tutcode1 from './../../content/assets/project-images/tutcode1.png'
import tutcode2 from './../../content/assets/project-images/tutcode2.png'
import personal1 from './../../content/assets/project-images/personal-site1.png'
import personal2 from './../../content/assets/project-images/personal-site2.png'
import ll1 from './../../content/assets/project-images/libre-logos1.png'
import ll2 from './../../content/assets/project-images/libre-logos2.png'
import j2s1 from './../../content/assets/project-images/jpg2svg1.png'
import j2s2 from './../../content/assets/project-images/jpg2svg2.png'
import blobby1 from './../../content/assets/project-images/blobby1.png'
import blobby2 from './../../content/assets/project-images/blobby2.png'
import Footer from '../components/footer'
import ToggleMenu from '../components/ToggleMenu'

const IndexPage = props => {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <div className="layout-container indexpage">
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <ToggleMenu />
      <div id="pages">
        <div className="first-page">
          <div className="intro-cont">
            <div className="introduction">
              <h2>
                {' '}
                :) <span className="hello"> Hello! </span>
                Nice to meet you. I'm <span className="my-name">Enjeck</span>, a{' '}
                <span className="country">Cameroon</span>-based
                <span className="dev"> fullstack developer</span> and
                <span className="write"> technical writer</span> with UI/UX {' '}
                <span className="design">design</span> skills.
              </h2>
            </div>
          </div>
          <div className="scroll-down">
            <span>scroll down</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="arrow-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"
            >
              <path
                fill="currentColor"
                d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div id="skills">
          <div className="skills">
            <span>
              Front end Web development • 3d design • Graphic design • Community
              management • Open source • Technical support • Technical Writing •
              Figma • Pricacy & cybersecurity • Search Engine Optimization •
              Logo design{' '}
            </span>
          </div>
          <div className="langs">
            <span>
              HTML5 • CSS3 • JavaScript • Markdown • npm • Inkscape • Gimp •
              Figma • Git & GitHub & GitLab • SVG • PHP • Python • Wordpress •
              Mailchimp{' '}
            </span>
          </div>
        </div>
        <div className="second-page" id="works">
          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">Personal Website</h2>
                <p className="technologies">
                  {' '}
                  HTML • CSS • JavaScript (React, Gatsby)
                </p>
                <p className="work-col__text">
                  My personal website, designed and developed from scratch. It
                  features a lot of hover effects, custom styling and a blog.
                </p>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={personal2} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={personal1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">TUTCODE</h2>
                <p className="technologies"> HTML • CSS • JavaScript</p>
                <p className="work-col__text">
                  A website where people can simultaneously code and watch/read
                  tutorials. It's a more convenient way to learn and practice
                  how to code (with HTML, CSS and JavaScript) on the same page.
                </p>
                <a
                  href="https://github.com/enjeck/TutCode"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={tutcode1} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={tutcode2} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">Libre Logos</h2>
                <p className="technologies"> HTML • CSS • JavaScript (Gatsby)</p>
                <p className="work-col__text">
                  A project to provide free logos to open source projects.
                  Website and logos designed and built by yours truly. 
                  The website is responsive and the individual logo pages are 
                  programmatically-generated.
                </p>
                <a
                  href="https://github.com/enjeck/libre-logos"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={ll2} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={ll1} alt="" />
                </div>
              </div>
            </div>
          </div>


          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">Crazy Password</h2>
                <p className="technologies"> HTML • CSS • JavaScript • Python (Django)</p>
                <p className="work-col__text">
                A password validation game with ridiculous requirements. 
                Using Django for this project was overkill, but I really wanted to 
                 play around with regular expressions in Python, and Django already had
                 a password validation engine I could add unto. 
                </p>
                <a
                  href="https://github.com/enjeck/CrazyPassword"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>


          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">jpg2svg</h2>
                <p className="technologies"> HTML • CSS • JavaScript • Python (Flask)</p>
                <p className="work-col__text">
                An program to convert JPG/JPEG images into SVG. It comes with a web interface where 
                you can upload an image, have it converted to SVG in the server, and you can 
                download the converted SVG file if you want. 
                </p>
                <a
                  href="https://github.com/enjeck/jpg2svg"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={j2s1} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={j2s2} alt="" />
                </div>
              </div>
            </div>
          </div>


          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">Geo Guess</h2>
                <p className="technologies"> HTML • CSS • JavaScript • Python (Flask)</p>
                <p className="work-col__text">
                A distance guessing game. You are shown random cities around the world,
                and you have to guess how far you are from the random city. The better your
                guesss, the higher your score. 
                </p>
                <a
                  href="https://github.com/enjeck/Geo-Guess"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>


          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">Blobby</h2>
                <p className="technologies"> HTML • CSS • JavaScript • Python (Flask)</p>
                <p className="work-col__text">
                Generative blob SVG characters using Python. No characters are the same! 
                Each Blobby character has a different body shape. The shape is always unique, 
                and the colors and eyes are randomly applied to each shape.  
                Additionally, the images can be downloaded as SVG or PNG. 
                </p>
                <a
                  href="https://github.com/enjeck/Blobby"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={blobby2} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={blobby1} alt="" />
                </div>
              </div>
            </div>
          </div>


          <div className="work-container">
            <div className="work-separator">
              <span className="work-separator-year">2021</span>
              <span className="work-separator-line"></span>
            </div>
            <div className="work">
              <div data-scroll="" data-scroll-speed="1" className="work-col">
                <h2 className="work-col__name">Sheet to Site </h2>
                <p className="technologies"> HTML • CSS • JavaScript • PHP</p>
                <p className="work-col__text">
                An experiment with building a website directly from Google Sheets. You edit a spreadsheet,
                enter a link to the spreadsheet, and your changes are reflected on the website. It lets
                you work on HTML and CSS styles from a spreadsheet, and the values as fetched from the 
                provided spreedsheet using the Google Sheets API. 
                </p>
                <a
                  href="https://github.com/enjeck/Google-Sheet-to-website"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-work"
                >
                  <span className="btn-work__text">Visit site</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="btn-work__icon"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
        <div className="contact-page" id="contact">
          <p className="page-desc"> Want to follow my work or talk to me? </p>
          <div className="social">
            <div className="social-item">
              <div className="social-top">
                <a href="https://github.com/enjeck" className="social-name">
                  {' '}
                  GitHub{' '}
                </a>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  xmlSpace="preserve"
                  className="social-item__icon"
                >
                  <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                </svg>
              </div>
              <div className="social-more">Explore my projects and code</div>
            </div>
            <div className="social-item">
              <div className="social-top">
                <a href="https://www.linkedin.com/in/c1e0/" className="social-name">
                  {' '}
                  Linkedin{' '}
                </a>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  xmlSpace="preserve"
                  className="social-item__icon"
                >
                  <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                </svg>
              </div>
              <div className="social-more">Connect with me</div>
            </div>
            <div className="social-item">
              <div className="social-top">
                <a href="mailto:enjeckc1e0@gmail.com" className="social-name">
                  {' '}
                  Email{' '}
                </a>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 476.213 476.213"
                  xmlSpace="preserve"
                  className="social-item__icon"
                >
                  <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                </svg>
              </div>
              <div className="social-more">Write something nice to me</div>
            </div>
          </div>
        </div>
        <div className="blog-page">
          <h2 className="page-heading"> Blog </h2>
          <div className="blog-items">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug} className="blog-item">
                  <div className="bg1"> </div>
                  <div className="bg2"> </div>
                  <div className="blog-item-content">
                    <div className="categories">
                      {node.frontmatter.categories.map(category => {
                        return <span className="category">{category}</span>
                      })}
                    </div>
                    <small className="date">{node.frontmatter.date}</small>
                    <h3>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </h3>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      <p
                        className="except"
                        dangerouslySetInnerHTML={{ __html: node.excerpt }}
                      />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
          <a href="/blog"className="btn-work btn-blog">
            <span className="btn-work__text">Read more articles</span>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 476.213 476.213"
              xmlSpace="preserve"
              className="btn-work__icon"
            >
              <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
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
