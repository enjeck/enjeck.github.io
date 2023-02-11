/*! For license information please see component---src-pages-index-js-1a3b2fd0f28551bb7249.js.LICENSE.txt */
(self.webpackChunkenjeck_personal_website=self.webpackChunkenjeck_personal_website||[]).push([[678],{81419:function(e,a,t){var n=t(67294);function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=l(n),s=function(){return s=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var l in a=arguments[t])Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);return e},s.apply(this,arguments)};!function(e){if(e&&"undefined"!=typeof window){var a=document.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e,document.head.appendChild(a)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');a.Z=function(e){var a,t,l,c,i=e.style,o=void 0===i?{}:i,m=e.className,d=void 0===m?"":m,p=e.play,u=void 0===p||p,v=e.pauseOnHover,E=void 0!==v&&v,w=e.pauseOnClick,g=void 0!==w&&w,f=e.direction,h=void 0===f?"left":f,N=e.speed,y=void 0===N?20:N,k=e.delay,b=void 0===k?0:k,x=e.loop,_=void 0===x?0:x,S=e.gradient,C=void 0===S||S,L=e.gradientColor,j=void 0===L?[255,255,255]:L,B=e.gradientWidth,H=void 0===B?200:B,q=e.onFinish,O=e.onCycleComplete,G=e.children,M=n.useState(0),X=M[0],R=M[1],T=n.useState(0),Z=T[0],z=T[1],V=n.useState(!1),A=V[0],I=V[1],P=n.useRef(null),W=n.useRef(null);n.useEffect((function(){if(A){var e=function(){W.current&&P.current&&(R(P.current.getBoundingClientRect().width),z(W.current.getBoundingClientRect().width))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[A]),n.useEffect((function(){I(!0)}),[]);var F="rgba("+j[0]+", "+j[1]+", "+j[2],J=Z<X?X/y:Z/y;return r.default.createElement(n.Fragment,null,A?r.default.createElement("div",{ref:P,style:s(s({},o),(a={},a["--pause-on-hover"]=!u||E?"paused":"running",a["--pause-on-click"]=!u||E&&!g||g?"paused":"running",a)),className:d+" marquee-container"},C&&r.default.createElement("div",{style:(t={},t["--gradient-color"]=F+", 1), "+F+", 0)",t["--gradient-width"]="number"==typeof H?H+"px":H,t),className:"overlay"}),r.default.createElement("div",{ref:W,style:(l={},l["--play"]=u?"running":"paused",l["--direction"]="left"===h?"normal":"reverse",l["--duration"]=J+"s",l["--delay"]=b+"s",l["--iteration-count"]=_?""+_:"infinite",l),className:"marquee",onAnimationIteration:O,onAnimationEnd:q},G),r.default.createElement("div",{style:(c={},c["--play"]=u?"running":"paused",c["--direction"]="left"===h?"normal":"reverse",c["--duration"]=J+"s",c["--delay"]=b+"s",c["--iteration-count"]=_?""+_:"infinite",c),className:"marquee","aria-hidden":"true"},G)):null)}},23424:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return u}});var n=t(67294),l=t(81419),r=t(60262),s=t(71082),c=t.p+"static/gfolio1-41e08538060c1ec790eba602667b47f1.png",i=t.p+"static/gfolio2-036591adf5119ed5612df9df07e049eb.png",o=(t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p+"static/blobby1-8ba79eb9b1765aff8e5ff77ca7cb24ac.png"),m=t.p+"static/blobby2-86c9310279832d94bd783a3597e79ea1.png",d=t(41619),p=t(20471),u=function(e){var a=e.data.allMdx.edges;return n.createElement("div",{className:"layout-container indexpage"},n.createElement(r.Z,{title:"Home",keywords:["blog","gatsby","javascript","react"]}),n.createElement(p.Z,null),n.createElement("div",{id:"pages"},n.createElement("div",{className:"first-page"},n.createElement("div",{className:"intro-cont"},n.createElement("div",{className:"introduction"},n.createElement("h2",null," ",":) ",n.createElement("span",{className:"hello"}," Hello!")," "," Nice to meet you. I'm ",n.createElement("span",{className:"my-name"},"Enjeck"),", a"," ",n.createElement("span",{className:"country"},"Cameroon"),"-based",n.createElement("span",{className:"dev"}," fullstack developer")," and",n.createElement("span",{className:"write"}," technical writer")," with UI/UX"," ",n.createElement("span",{className:"design"},"design")," skills."))),n.createElement("div",{className:"scroll-down"},n.createElement("span",null,"scroll down"),n.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"arrow-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-arrow-down fa-w-14 fa-5x"},n.createElement("path",{fill:"currentColor",d:"M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z",className:""})))),n.createElement("div",{id:"skills"},n.createElement("div",null,n.createElement(l.Z,{class:"marquee",pauseOnHover:"true"},n.createElement("span",null," Web development "),n.createElement("span",null," 3d design "),n.createElement("span",null," Graphic design "),n.createElement("span",null," Open source "),n.createElement("span",null," Community management "),n.createElement("span",null," Search Engine Optimization"),n.createElement("span",null," Technical support "))),n.createElement("div",null,n.createElement(l.Z,{class:"marquee",pauseOnHover:"true"},n.createElement("span",null," HTML5 "),n.createElement("span",null," CSS3 "),n.createElement("span",null," JavaScript "),n.createElement("span",null," Markdown"),n.createElement("span",null," Python "),n.createElement("span",null," React "),n.createElement("span",null," Inkscape "),n.createElement("span",null," Wordpress "),n.createElement("span",null," Gatsby ")))),n.createElement("div",{className:"second-page",id:"works"},n.createElement("div",{className:"work-container"},n.createElement("div",{className:"work-separator"},n.createElement("span",{className:"work-separator-year"},"2021"),n.createElement("span",{className:"work-separator-line"})),n.createElement("div",{className:"work"},n.createElement("div",{"data-scroll":"","data-scroll-speed":"1",className:"work-col"},n.createElement("h2",{className:"work-col__name"},"gfolio"),n.createElement("p",{className:"technologies"}," HTML • CSS • JavaScript (React)"),n.createElement("p",{className:"work-col__text"},"A Google Search themed portfolio website."),n.createElement("a",{href:"gfolio.enjeck.com/",target:"_blank",rel:"noreferrer",className:"btn-project-link"},"Visit site")),n.createElement("div",{className:"work-medias"},n.createElement("div",{className:"work-medias__img"},n.createElement("img",{src:i,alt:""})),n.createElement("div",{className:"work-medias__img"},n.createElement("img",{src:c,alt:""}))))),n.createElement("div",{className:"work-container"},n.createElement("div",{className:"work-separator"},n.createElement("span",{className:"work-separator-year"},"2021"),n.createElement("span",{className:"work-separator-line"})),n.createElement("div",{className:"work"},n.createElement("div",{"data-scroll":"","data-scroll-speed":"1",className:"work-col"},n.createElement("h2",{className:"work-col__name"},"Blobby"),n.createElement("p",{className:"technologies"}," ","HTML • CSS • JavaScript • Python (Flask)"),n.createElement("p",{className:"work-col__text"},"Generative blob SVG characters using Python. No characters are the same! Each Blobby character has a different body shape. The shape is always unique, and the colors and eyes are randomly applied to each shape. Additionally, the images can be downloaded as SVG or PNG."),n.createElement("a",{href:"hhttps://blobby-figures.herokuapp.com/",target:"_blank",rel:"noreferrer",className:"btn-project-link"},"Visit site")),n.createElement("div",{className:"work-medias"},n.createElement("div",{className:"work-medias__img"},n.createElement("img",{src:m,alt:""})),n.createElement("div",{className:"work-medias__img"},n.createElement("img",{src:o,alt:""}))))),n.createElement("a",{href:"https://github.com/enjeck/",className:"btn-work btn-blog"},n.createElement("span",{className:"btn-work__text"},"View more projects"),n.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 476.213 476.213",xmlSpace:"preserve",className:"btn-work__icon"},n.createElement("polygon",{points:"345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "})))),n.createElement("div",{className:"contact-page",id:"contact"},n.createElement("p",{className:"page-desc"}," Want to follow my work or talk to me? "),n.createElement("div",{className:"social"},n.createElement("div",{className:"social-item"},n.createElement("a",{href:"https://github.com/enjeck",className:"social-top"},n.createElement("span",{className:"social-name"}," GitHub "),n.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 476.213 476.213",xmlSpace:"preserve",className:"social-item__icon"},n.createElement("polygon",{points:"345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "}))),n.createElement("div",{className:"social-more"},"Explore my projects and code")),n.createElement("div",{className:"social-item"},n.createElement("a",{href:"https://www.linkedin.com/in/c1e0/",className:"social-top"},n.createElement("span",{className:"social-name"}," Linkedin "),n.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 476.213 476.213",xmlSpace:"preserve",className:"social-item__icon"},n.createElement("polygon",{points:"345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "}))),n.createElement("div",{className:"social-more"},"Connect with me")),n.createElement("div",{className:"social-item"},n.createElement("a",{href:"mailto:enjeckc1e0@gmail.com",className:"social-top"},n.createElement("span",{className:"social-name"}," Email "),n.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 476.213 476.213",xmlSpace:"preserve",className:"social-item__icon"},n.createElement("polygon",{points:"345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "}))),n.createElement("div",{className:"social-more"},"Chat with me")))),n.createElement("div",{className:"blog-page"},n.createElement("h2",{className:"page-heading"}," Blog "),n.createElement("div",{className:"blog-items"},a.map((function(e){var a=e.node,t=a.frontmatter.title||a.fields.slug;return n.createElement("div",{key:a.fields.slug,className:"blog-item"},n.createElement("div",{className:"bg1"}," "),n.createElement("div",{className:"bg2"}," "),n.createElement("div",{className:"blog-item-content"},n.createElement("div",{className:"categories"},a.frontmatter.categories.map((function(e){return n.createElement("span",{className:"category"},e)}))),n.createElement("small",{className:"date"},a.frontmatter.date),n.createElement("h3",null,n.createElement(s.Link,{style:{boxShadow:"none"},to:a.fields.slug},t)),n.createElement(s.Link,{style:{boxShadow:"none"},to:a.fields.slug},n.createElement("p",{className:"except",dangerouslySetInnerHTML:{__html:a.excerpt}}))))}))),n.createElement("a",{href:"/blog",className:"btn-work btn-blog"},n.createElement("span",{className:"btn-work__text"},"Read more articles"),n.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 476.213 476.213",xmlSpace:"preserve",className:"btn-work__icon"},n.createElement("polygon",{points:"345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 "}))))),n.createElement(d.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1a3b2fd0f28551bb7249.js.map