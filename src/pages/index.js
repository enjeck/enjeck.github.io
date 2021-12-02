import * as React from "react";
import Marquee from "react-fast-marquee";
import SEO from "../components/seo";
import "../styles/styles.css";
import { Link, graphql } from "gatsby";
import gfolio1 from "./../../content/assets/project-images/gfolio1.png";
import gfolio2 from "./../../content/assets/project-images/gfolio2.png";
import tutcode1 from "./../../content/assets/project-images/tutcode1.png";
import tutcode2 from "./../../content/assets/project-images/tutcode2.png";
import personal1 from "./../../content/assets/project-images/personal-site1.png";
import personal2 from "./../../content/assets/project-images/personal-site2.png";
import ll1 from "./../../content/assets/project-images/libre-logos1.png";
import ll2 from "./../../content/assets/project-images/libre-logos2.png";
import j2s1 from "./../../content/assets/project-images/jpg2svg1.png";
import j2s2 from "./../../content/assets/project-images/jpg2svg2.png";
import blobby1 from "./../../content/assets/project-images/blobby1.png";
import blobby2 from "./../../content/assets/project-images/blobby2.png";
import Footer from "../components/footer";
import ToggleMenu from "../components/ToggleMenu";

const IndexPage = (props) => {
  const { data } = props;
  const posts = data.allMdx.edges;

  return (
    <div className="layout-container indexpage">
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <ToggleMenu />
      <div id="pages">
        <div className="first-page">
          <div className="intro-cont">
            <div className="introduction">
              <h2>
                {" "}
                :) <span className="hello"> Hello!</span>
                {" "} Nice to meet you. I'm <span className="my-name">Enjeck</span>, a{" "}
                <span className="country">Cameroon</span>-based
                <span className="dev"> fullstack developer</span> and
                <span className="write"> technical writer</span> with UI/UX{" "}
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
          <div>
            <Marquee class="marquee" pauseOnHover="true">
              <span> Web development </span>
              <span> 3d design </span>
              <span> Graphic design </span>
              <span> Open source </span>
              <span> Community management </span>
              <span> Search Engine Optimization</span>
              <span> Technical support </span>
            </Marquee>
          </div>
          <div >
            <Marquee class="marquee" pauseOnHover="true">
              <span> HTML5 </span>
              <span> CSS3 </span>
              <span> JavaScript </span>
              <span> Markdown</span>
              <span> Python </span>
              <span> React </span>
              <span> Inkscape </span>
              <span> Wordpress </span>
              <span> Gatsby </span>
            </Marquee>
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
                <h2 className="work-col__name">gfolio</h2>
                <p className="technologies"> HTML • CSS • JavaScript (React)</p>
                <p className="work-col__text">
                  A Google Search themed portfolio website.
                </p>
                <a
                  href="gfolio.enjeck.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project-link"
                >
                  Visit site
                </a>
              </div>
              <div className="work-medias">
                <div className="work-medias__img">
                  <img src={gfolio2} alt="" />
                </div>
                <div className="work-medias__img">
                  <img src={gfolio1} alt="" />
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
                <h2 className="work-col__name">Blobby</h2>
                <p className="technologies">
                  {" "}
                  HTML • CSS • JavaScript • Python (Flask)
                </p>
                <p className="work-col__text">
                  Generative blob SVG characters using Python. No characters are
                  the same! Each Blobby character has a different body shape.
                  The shape is always unique, and the colors and eyes are
                  randomly applied to each shape. Additionally, the images can
                  be downloaded as SVG or PNG.
                </p>
                <a
                  href="hhttps://blobby-figures.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project-link"
                >
                  Visit site
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

          <a href="https://github.com/enjeck/" className="btn-work btn-blog">
            <span className="btn-work__text">View more projects</span>
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
        <div className="contact-page" id="contact">
          <p className="page-desc"> Want to follow my work or talk to me? </p>
          <div className="social">
            <div className="social-item">
              <a href="https://github.com/enjeck" className="social-top">
                <span className="social-name"> GitHub </span>
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
              </a>
              <div className="social-more">Explore my projects and code</div>
            </div>
            <div className="social-item">
              <a
                href="https://www.linkedin.com/in/c1e0/"
                className="social-top"
              >
                <span className="social-name"> Linkedin </span>
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
              </a>
              <div className="social-more">Connect with me</div>
            </div>
            <div className="social-item">
              <a href="mailto:enjeckc1e0@gmail.com" className="social-top">
                <span className="social-name"> Email </span>
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
              </a>
              <div className="social-more">Chat with me</div>
            </div>
          </div>
        </div>
        <div className="blog-page">
          <h2 className="page-heading"> Blog </h2>
          <div className="blog-items">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <div key={node.fields.slug} className="blog-item">
                  <div className="bg1"> </div>
                  <div className="bg2"> </div>
                  <div className="blog-item-content">
                    <div className="categories">
                      {node.frontmatter.categories.map((category) => {
                        return <span className="category">{category}</span>;
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
              );
            })}
          </div>
          <a href="/blog" className="btn-work btn-blog">
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
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 4, sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
