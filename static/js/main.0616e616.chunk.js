(this["webpackJsonpportofolio-react-app"]=this["webpackJsonpportofolio-react-app"]||[]).push([[0],{164:function(e,c,t){},165:function(e,c,t){"use strict";t.r(c);var s=t(4),a=t(87),i=t.n(a),n=(t(93),t(17)),r=t(88),o=t.n(r),l=t(0),d=function(e){var c=e.data;if(c)var t=c.name,s=c.occupation,a=c.description,i=c.address.city,n=c.social.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.url,children:Object(l.jsx)("i",{className:e.className})})},e.name)}));return Object(l.jsxs)("header",{id:"home",children:[Object(l.jsxs)("nav",{id:"nav-wrap",children:[Object(l.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(l.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(l.jsxs)("ul",{id:"nav",className:"nav",children:[Object(l.jsx)("li",{className:"current",children:Object(l.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(l.jsx)("div",{className:"row banner",children:Object(l.jsxs)("div",{className:"banner-text",children:[Object(l.jsx)("h1",{className:"responsive-headline",children:Object(l.jsx)(o.a,{typing:.5,children:'console.log("Hello World")'})}),Object(l.jsxs)("h3",{children:[t?"I'm ".concat(t,"."):null," Based in ",i,"."," ",Object(l.jsx)("span",{children:s}),". ",a,"."]}),Object(l.jsx)("hr",{}),Object(l.jsx)("ul",{className:"social",children:n})]})}),Object(l.jsx)("p",{className:"scrolldown",children:Object(l.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(l.jsx)("i",{className:"icon-down-circle"})})})]})},j=function(e){var c=e.data;if(c)var t=c.social.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.url,children:Object(l.jsx)("i",{className:e.className})})},e.name)}));return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"twelve columns",children:[Object(l.jsx)("ul",{className:"social-links",children:t}),Object(l.jsx)("ul",{className:"copyright",children:Object(l.jsxs)("li",{children:["Published by",Object(l.jsx)("a",{style:{margin:"0 4px"},href:"https://www.youtube.com/watch?v=UtF6Jej8yb4",children:"Armin"}),"on December 2021."]})})]}),Object(l.jsx)("div",{id:"go-top",children:Object(l.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(l.jsx)("i",{className:"icon-up-open"})})})]})})},h=function(e){var c=e.data;if(c)var t=c.name,s="images/"+c.image,a=c.bio,i=c.address.city,n=c.address.state,r=c.address.zip,o=c.phone,d=c.email,j=c.resumedownload;return Object(l.jsx)("section",{id:"about",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"three columns",children:Object(l.jsx)("img",{className:"profile-pic",src:s,alt:"Armin's Profile Pic"})}),Object(l.jsxs)("div",{className:"nine columns main-col",children:[Object(l.jsx)("h2",{children:"About Me"}),Object(l.jsx)("p",{children:a}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"columns contact-details",children:[Object(l.jsx)("h2",{children:"Contact Details"}),Object(l.jsxs)("p",{className:"address",children:[Object(l.jsx)("span",{children:t}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{children:[i," ",n,", ",r]}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:o}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:d})]})]}),Object(l.jsx)("div",{className:"columns download",children:Object(l.jsx)("p",{children:Object(l.jsxs)("a",{href:j,className:"button",children:[Object(l.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})},m=function(e){var c=e.data;if(c)var t=c.education.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.school}),Object(l.jsxs)("p",{className:"info",children:[e.degree," ",Object(l.jsx)("span",{children:"\u2022"}),Object(l.jsx)("em",{className:"date",children:e.graduated})]}),Object(l.jsx)("p",{children:e.description})]},e.school)})),s=c.work.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.company}),Object(l.jsxs)("p",{className:"info",children:[e.title,Object(l.jsx)("span",{children:"\u2022"})," ",Object(l.jsx)("em",{className:"date",children:e.years})]}),Object(l.jsx)("p",{children:e.description})]},e.company)})),a=c.skills.map((function(e){return Object(l.jsx)("li",{className:"skill-column",children:Object(l.jsx)("em",{children:e})},e)}));return Object(l.jsxs)("section",{id:"resume",children:[Object(l.jsxs)("div",{className:"row education",children:[Object(l.jsx)("div",{className:"three columns header-col",children:Object(l.jsx)("h1",{children:Object(l.jsx)("span",{children:"Education"})})}),Object(l.jsx)("div",{className:"nine columns main-col",children:Object(l.jsx)("div",{className:"row item",children:Object(l.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(l.jsxs)("div",{className:"row work",children:[Object(l.jsx)("div",{className:"three columns header-col",children:Object(l.jsx)("h1",{children:Object(l.jsx)("span",{children:"Experience"})})}),Object(l.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(l.jsxs)("div",{className:"row skill",children:[Object(l.jsx)("div",{className:"three columns header-col",children:Object(l.jsx)("h1",{children:Object(l.jsx)("span",{children:"Skills"})})}),Object(l.jsx)("div",{className:"nine columns main-col",children:Object(l.jsx)("ul",{className:"skill-row",children:a})})]})]})},b=function(e){var c=e.data,t=Object(s.useState)(""),a=Object(n.a)(t,2),i=a[0],r=a[1],o=Object(s.useState)(""),d=Object(n.a)(o,2),j=d[0],h=d[1],m=Object(s.useState)(""),b=Object(n.a)(m,2),u=b[0],x=b[1],O=Object(s.useState)(""),p=Object(n.a)(O,2),f=p[0],g=p[1];if(c)var v=c.name,N=(c.address.street,c.address.city),w=c.address.state,y=c.address.zip,k=c.phone,S=c.email,C=c.contactmessage;var E=function(){window.open("mailto:".concat(S,"?subject=").concat(encodeURIComponent(u),"&body=").concat(encodeURIComponent(i)," (").concat(encodeURIComponent(j),"): ").concat(encodeURIComponent(f)))};return Object(l.jsxs)("section",{id:"contact",children:[Object(l.jsxs)("div",{className:"row section-head",children:[Object(l.jsx)("div",{className:"two columns header-col",children:Object(l.jsx)("h1",{children:Object(l.jsx)("span",{children:"Get In Touch."})})}),Object(l.jsx)("div",{className:"ten columns",children:Object(l.jsx)("p",{className:"lead",children:C})})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"eight columns",children:[Object(l.jsx)("form",{onSubmit:E,children:Object(l.jsxs)("fieldset",{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(l.jsx)("span",{className:"required",children:"*"})]}),Object(l.jsx)("input",{type:"text",defaultValue:"",value:i,size:"35",id:"contactName",name:"contactName",onChange:function(e){return r(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(l.jsx)("span",{className:"required",children:"*"})]}),Object(l.jsx)("input",{type:"text",defaultValue:"",value:j,size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return h(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(l.jsx)("input",{type:"text",defaultValue:"",value:u,size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return x(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(l.jsx)("span",{className:"required",children:"*"})]}),Object(l.jsx)("textarea",{cols:"50",value:f,onChange:function(e){return g(e.target.value)},id:"contactMessage",name:"contactMessage",style:{resize:"vertical"}})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:E,type:"submit",className:"submit",children:"Submit"})})]})}),Object(l.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(l.jsxs)("div",{id:"message-success",children:[Object(l.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(l.jsx)("br",{})]})]}),Object(l.jsx)("aside",{className:"four columns footer-widgets",children:Object(l.jsxs)("div",{className:"widget widget_contact",children:[Object(l.jsx)("h4",{children:"Address and Phone"}),Object(l.jsxs)("p",{className:"address",children:[v,Object(l.jsx)("br",{}),S,Object(l.jsx)("br",{}),N,", ",w," ",y,Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:k})]})]})})]})]})},u=function(e){var c=e.data;if(c)var t=c.testimonials.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)("blockquote",{children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("cite",{children:e.user})]})},e.user)}));return Object(l.jsx)("section",{id:"testimonials",children:Object(l.jsx)("div",{className:"text-container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"two columns header-col"}),Object(l.jsx)("div",{className:"ten columns flex-container",children:Object(l.jsx)("ul",{className:"slides",children:t})})]})})})},x=function(e){var c=e.data;if(c)var t=c.projects.map((function(e){var c="images/portfolio/"+e.image;return Object(l.jsx)("div",{className:"columns portfolio-item",children:Object(l.jsx)("div",{className:"item-wrap",children:Object(l.jsxs)("a",{onClick:function(){return c=e.url,void(window.location.href=c);var c},children:[Object(l.jsx)("img",{alt:e.title,src:c}),Object(l.jsx)("div",{className:"overlay",children:Object(l.jsxs)("div",{className:"portfolio-item-meta",children:[Object(l.jsx)("h5",{children:e.title}),Object(l.jsx)("p",{children:e.category})]})}),Object(l.jsx)("div",{className:"link-icon",children:Object(l.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(l.jsx)("section",{id:"portfolio",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"twelve columns collapsed",children:[Object(l.jsx)("h1",{children:"Check Out Some of My Works."}),Object(l.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:t})]})})})},O=(t(164),function(){var e=Object(s.useState)({main:{name:"Armin Lokvancic",occupation:"IT Student",description:"Simplicity is the soul of efficiency.",image:"profilepic.jpg",bio:"Hi everyone! I'm high-energy student currently on second year of Bachelor science diploma in Software engineering and prepared to contribute abilities to Software Engineer role while further developing acquired skills and gaining real-world experience. Highly organized, responsible and well-versed in many programming languages. Due to my preference for healthy lifestyle, selected food and spending time in the gym are some of my passions.",contactmessage:"Feel free to send me your suggestions and offers!",email:"armin_lokvancic@hotmail.com",phone:"+387 62155856",address:{street:"",city:"Sarajevo",state:"Ilid\u017ea",zip:"71000"},website:"",resumedownload:"https://drive.google.com/file/d/1W9AeseWuvyYNOSnEtCx_KF-xabF3_74T/view?usp=sharing",social:[{name:"facebook",url:"https://www.facebook.com/lokvancic.armin/",className:"fa fa-facebook"},{name:"linkedin",url:"https://www.linkedin.com/in/arminlokvancic/",className:"fa fa-linkedin"},{name:"instagram",url:"https://www.instagram.com/arminlokvancic/",className:"fa fa-instagram"},{name:"github",url:"https://github.com/arminl17",className:"fa fa-github"}]},resume:{skillmessage:"My Programming Language Proficiency",education:[{school:"Faculty of information technologies Mostar",degree:"Student, Software engineering",graduated:"Current",description:"Second year of Bachelor science degree"},{school:"Electrical Engineering High School - Sarajevo",degree:"High school diploma, computer science",graduated:"July 2018",description:"Main focus was programming"},{school:"EduBits course - Spring boot",degree:"Finished course for Java's framework Spring.",graduated:"December 2021",description:"Main focus was developing backend for movie application"}],work:[{company:"Sinkro D.O.O",title:"CNC operator",years:"2018-2021",description:"Cutted foam in certain shapes. Worked in autoCAD for 3 years. Taught small groups of workers to operate the machine"}],skills:["JavaScript","HTML","CSS","ReactJS","Spring Boot","NodeJS","Express","Bootstrap","C++","C#","Git","PostgreSQL","MySQL","Photoshop"]},portfolio:{projects:[{title:"CryptoCheck",category:"ReactJS bootstrap",image:"cryptocheck.png",url:"https://github.com/arminl17/cryptoCheck"},{title:"ToDo with ReactNative",category:"NodeJS ExpressServer MySQL ReactNative",image:"reactnative.png",url:"https://github.com/arminl17/nativeToDo"},{title:"ToDo with weather info",category:"ReactJS ",image:"todoWeather.png",url:"https://github.com/arminl17/todolist-weather"},{title:"League of Legends statistics",category:"EJS NodeJS ExpressServer ",image:"lolstats.png",url:"https://github.com/arminl17/LoLStats"},{title:"Netflix Clone",category:"React",image:"netflixClone.png",url:"https://github.com/arminl17/netflixClone"}]},testimonials:{testimonials:[{text:"Simplicity is the soul of efficiency.",user:"Austin Freeman"},{text:"Programming isn\u2019t about what you know; it\u2019s about what you can figure out.",user:"Chris Pine"}]}}),c=Object(n.a)(e,2),t=c[0];c[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{data:t.main}),Object(l.jsx)(h,{data:t.main}),Object(l.jsx)(m,{data:t.resume}),Object(l.jsx)(x,{data:t.portfolio}),Object(l.jsx)(u,{data:t.testimonials}),Object(l.jsx)(b,{data:t.main}),Object(l.jsx)(j,{data:t.main})]})}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/website",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/website","/service-worker.js");p?function(e){fetch(e).then((function(c){404===c.status||-1===c.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):f(e)}))}}()},93:function(e,c,t){}},[[165,1,2]]]);
//# sourceMappingURL=main.0616e616.chunk.js.map