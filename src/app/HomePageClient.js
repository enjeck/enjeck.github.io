'use client'

import Link from 'next/link'
import Image from 'next/image'
import ToggleMenu from '@/components/ToggleMenu'
import Footer from '@/components/footer'
import BlogPreview from '@/components/BlogPreview'
import StructuredData from '@/components/StructuredData'


const enjeck1 = "/images/enjeckblog.png";
const enjeck2 = "/images/enjeck.png";
const gfolio1 = "/images/gfolio2.png";
const gfolio2 = "/images/gfolio1.png";
const jpg2svg1 = "/images/jpg2svg1.png";
const jpg2svg2 = "/images/jpg2svg2.png";
const blobby1 = "/images/blobbies2.png";
const blobby2 = "/images/blobbies1.png";
const btns1 = "/images/btns2.png";
const btns2 = "/images/btns1.png";
const theoremgraphs1 = "/images/theorem-graphs2.png";
const theoremgraphs2 = "/images/theorem-graphs1.png";
const num2math1 = "/images/num2math2.png";
const num2math2 = "/images/num2math1.png";
const librelogos1 = "/images/librelogos2.png";
const librelogos2 = "/images/librelogos1.png";

const ProjectsContent = [
  {
    link: "https://enjeck.com/",
    img1: enjeck1,
    img2: enjeck2,
    name: "Personal Website",
    excerpt: `Custom-designed personal website featuring advanced CSS animations, interactive hover effects, and an integrated blog platform. Fully responsive design showcasing work, built with Next.js.`,
    tools: "Next.js · React · CSS",
    year: "2024"
  }, ,
  {
    link: "https://gfolio.enjeck.com/",
    img1: gfolio1,
    img2: gfolio2,
    name: "Gfolio",
    excerpt: `A unique portfolio website that reimagines the Google Search interface for personal branding. Built with React and modern web technologies to showcase projects in a familiar, intuitive format that engages visitors.`,
    tools: "React · Next.js · CSS",
    year: "2022"
  },
  {
    link: "https://enjeck.com/num2math",
    img1: num2math1,
    img2: num2math2,
    name: "num2math",
    excerpt: `Generate complicated math expressions using random numbers and operations.`,
    tools: "JavaScript",
    year: "2022"
  },
  {
    link: "https://enjeck.com/libre-logos/",
    img1: librelogos1,
    img2: librelogos2,
    name: "Libre Logos",
    excerpt: `A curated collection of free, professionally designed logos for open source projects. Features responsive design with dynamically generated individual logo pages. Combines design expertise with automated content generation using Next.js.`,
    tools: "Next.js · React · CSS · Design",
    year: "2022"
  },
  {
    link: "https://github.com/enjeck/jpg2svg",
    img1: jpg2svg1,
    img2: jpg2svg2,
    name: "jpg2svg",
    excerpt: `A full-stack image conversion tool with an intuitive web interface for transforming JPG/JPEG images into scalable SVG format. Features server-side processing and instant downloads, built with JavaScript and Python.`,
    tools: "JavaScript · Python · Flask",
    year: "2021"
  },
  {
    link: "https://enjeck.com/Blobby/",
    img1: blobby1,
    img2: blobby2,
    name: "Blobby",
    excerpt: `A creative Python project generating unique SVG blob characters with randomized shapes, colors, and features. Each character is algorithmically created with distinct attributes, demonstrating procedural design and SVG manipulation techniques.`,
    tools: "Python · SVG · Random Art",
    year: "2021"
  },
  {
    link: "https://enjeck.com/theorem-graphs",
    img1: theoremgraphs1,
    img2: theoremgraphs2,
    name: "Theorem Graphs",
    excerpt: `Visualize mathematical theorems in graphs, using data from Wikipedia.`,
    tools: "JavaScript",
    year: "2022"
  },
  {
    link: "https://enjeck.com/btns",
    img1: btns1,
    img2: btns2,
    name: "btns",
    excerpt: `A curated collection of modern button designs featuring advanced CSS hover effects and animations. Ready-to-use components for enhancing user interface interactions and elevating web design aesthetics.`,
    tools: "CSS · HTML · UI Design",
    year: "2021"
  }
];

export default function HomePageClient({ posts }) {
  return (
    <div className="layout-container indexpage">
      <StructuredData type="person" />
      <ToggleMenu />
      <main id="main-content">
        <div id="pages">
          <section className="first-page" aria-label="Introduction">
            <div className="intro-cont">
              <div className="introduction">
                <h1>
                  {' '}
                  <span aria-hidden="true">:)</span> <span className="hello"> Hello!</span>
                  {' '} Nice to meet you. I'm <span className="my-name">Enjeck</span>, a{' '}
                  <span className="dev"> software engineer</span> and
                  <span className="write"> technical writer</span> with UI/UX{' '}
                  <span className="design">design</span> skills.
                </h1>
              </div>
            </div>
            <div className="scroll-down" aria-label="Scroll down to see more content">
              <span aria-hidden="true">scroll down</span>
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
          </section>


          <section className="second-page" id="works" aria-labelledby="works-heading">
            <h2 id="works-heading" className="sr-only">Featured Projects</h2>
            {ProjectsContent.map((project, index) => (
              <article className="work-container" key={index}>
                <div className="work-separator" role="presentation">
                  <span className="work-separator-year">{project.year}</span>
                  <span className="work-separator-line" aria-hidden="true"></span>
                </div>
                <div className="work">
                  <div className="work-col">
                    <h3 className="work-col__name">{project.name}</h3>
                    <p className="technologies" aria-label="Technologies used">{project.tools}</p>
                    <p className="work-col__text">
                      {project.excerpt}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-link"
                      aria-label={`Visit ${project.name} website`}
                    >
                      Visit site
                    </a>
                  </div>
                  <div className="work-medias" role="img" aria-label={`${project.name} screenshots`}>
                    <div className="work-medias__img">
                      <Image
                        src={project.img1}
                        alt={`${project.name} preview`}
                        loading="lazy"
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="work-medias__img">
                      <Image
                        src={project.img2}
                        alt={`${project.name} preview`}
                        loading="lazy"
                        width={600}
                        height={400}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <a
              href="https://github.com/enjeck/"
              className="btn-work btn-blog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more projects on GitHub"
            >
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
                aria-hidden="true"
              >
                <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
              </svg>
            </a>
          </section>

          <section className="contact-page" id="contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="sr-only">Contact and Social Links</h2>
            <p className="page-desc"> Want to follow my work or talk to me? </p>
            <nav className="social" aria-label="Social media links">
              <div className="social-item">
                <a
                  href="https://github.com/enjeck"
                  className="social-top"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                >
                  <span className="social-name"> GitHub </span>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="social-item__icon"
                    aria-hidden="true"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                >
                  <span className="social-name"> Linkedin </span>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="social-item__icon"
                    aria-hidden="true"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
                <div className="social-more">Connect with me</div>
              </div>
              <div className="social-item">
                <a
                  href="mailto:enjeckc1e0@gmail.com"
                  className="social-top"
                  aria-label="Send me an email"
                >
                  <span className="social-name"> Email </span>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 476.213 476.213"
                    xmlSpace="preserve"
                    className="social-item__icon"
                    aria-hidden="true"
                  >
                    <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
                  </svg>
                </a>
                <div className="social-more">Chat with me</div>
              </div>
            </nav>
          </section>

          <section className="blog-page" aria-labelledby="blog-heading">
            <h2 id="blog-heading" className="page-heading"> Blog </h2>
            <BlogPreview posts={posts} />
            <Link href="/blog" className="btn-work btn-blog" aria-label="Read more blog articles">
              <span className="btn-work__text">Read more articles</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 476.213 476.213"
                xmlSpace="preserve"
                className="btn-work__icon"
                aria-hidden="true"
              >
                <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "></polygon>
              </svg>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
