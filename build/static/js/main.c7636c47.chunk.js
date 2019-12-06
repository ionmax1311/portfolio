(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,function(t,e,a){t.exports={wrap:"WorksItem_wrap__3NVfL",itemWrap:"WorksItem_itemWrap__3xbdz",itemHover:"WorksItem_itemHover__Hirp1",hover:"WorksItem_hover__2CH7o",button:"WorksItem_button__3qsHX",wrapButtons:"WorksItem_wrapButtons__bXZ3Y",description:"WorksItem_description__3hdeU",tagsItem:"WorksItem_tagsItem__2dL67"}},function(t,e,a){t.exports={titleWrap:"WorksFilter_titleWrap__2juVz",title:"WorksFilter_title__2402k",wrapTitleItem:"WorksFilter_wrapTitleItem__2te-N",titleFilterWrap:"WorksFilter_titleFilterWrap__JDiJE",activeItem:"WorksFilter_activeItem__1wr4_"}},,,function(t,e,a){t.exports={footer:"Footer_footer__1mVPd",linkedin:"Footer_linkedin__TwI6i",github:"Footer_github__srUFJ"}},function(t,e,a){t.exports={header:"Header_header__1NaZ9",title:"Header_title__1T7VT",text:"Header_text__32krc"}},function(t,e,a){t.exports={line:"Content_line__S74Fw"}},,,,,,,function(t,e,a){t.exports=a(27)},,,,,function(t,e,a){},function(t,e,a){},,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),s=(a(20),a(21),a(7)),l=a.n(s),c=function(){return r.a.createElement("header",{className:l.a.header},r.a.createElement("h2",{className:l.a.title},"Maksim Ionash"),r.a.createElement("p",{className:l.a.text},"Here are some of my works that I did during study and work"))},m=a(8),d=a.n(m),p=a(4),u=a(3),g=a.n(u),h=a(14),_=a(5),b=a(2),f=a.n(b),E=function(t){var e=Object(n.useState)(!1),a=Object(p.a)(e,2),i=a[0],o=a[1],s=Object(n.useState)(null),l=Object(p.a)(s,2),c=l[0],m=l[1],d=function(){o(!1),m(null)},u=t.content.map((function(t){return r.a.createElement("div",{className:f.a.itemWrap,onMouseEnter:function(){var e;e=t.id,o(!0),m(e)},onMouseLeave:d,key:t.id},r.a.createElement("div",{className:i&&c===t.id?"".concat(f.a.hover," ").concat(f.a.itemHover):f.a.itemHover},r.a.createElement("p",{className:f.a.description},t.desc),r.a.createElement("div",{className:f.a.wrapButtons},r.a.createElement("a",{className:f.a.button,type:"button",target:"_blank",rel:"noopener noreferrer",href:t.demo},"DEMO"),r.a.createElement("a",{className:f.a.button,type:"button",target:"_blank",rel:"noopener noreferrer",href:t.code},"CODE"))),r.a.createElement("img",{src:t.img,alt:"img",width:"200",height:"150"}),r.a.createElement("span",{className:f.a.tagsItem},t.tagsStr," "),t.title)}));return r.a.createElement("div",{className:f.a.wrap},u)},k=function(t){var e=r.a.useState(t.content),a=Object(p.a)(e,2),n=a[0],i=a[1],o=r.a.useState(1),s=Object(p.a)(o,2),l=s[0],c=s[1],m=[{id:1,title:"all"},{id:2,title:"react"},{id:3,title:"ajax"},{id:4,title:"html/css"},{id:5,title:"bootstrap"}].map((function(e){return r.a.createElement("li",{className:l===e.id?g.a.activeItem:"",onClick:function(){c(e.id),i((function(){return"all"===e.title?t.content:t.content.filter((function(t){return-1!==t.tags.indexOf(e.title)}))}))},key:e.id},e.title)}));return r.a.createElement("div",null,r.a.createElement("div",{className:g.a.wrapTitleItem},r.a.createElement("div",{className:g.a.titleWrap},r.a.createElement(_.a,{icon:h.a}),r.a.createElement("h3",{className:g.a.title},"works")),r.a.createElement("ul",{className:g.a.titleFilterWrap},m)),r.a.createElement("div",{className:g.a.contentWrap},r.a.createElement(E,{content:n})))},v=function(t){return r.a.createElement("main",{className:d.a.content},r.a.createElement("div",{className:d.a.line}),r.a.createElement(k,{content:t.content}),r.a.createElement("div",{className:d.a.line}))},N=a(6),I=a.n(N),W=a(11),w=function(){return r.a.createElement("footer",{className:I.a.footer},r.a.createElement("p",null,r.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&copy;"}}),"Maksim Ionash"),r.a.createElement("div",{className:I.a.linkWrap},r.a.createElement("a",{href:"https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B8%D0%BE%D0%BD%D0%B0%D1%88-9b584614a/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_.a,{className:I.a.linkedin,icon:W.b})),r.a.createElement("a",{href:"https://github.com/student1311",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_.a,{className:I.a.github,icon:W.a}))))},x=[{tagsStr:"react | bootstrap",tags:["react","bootstrap"],id:1,desc:"app, with firebase auth, and GIF search",demo:"https://student1311.github.io/giphs-app/build/",code:"https://github.com/student1311/giphs-app",title:"Giphy-app",img:"./img/giph.png"},{tagsStr:"react",tags:"react",id:2,desc:"portfolio",demo:"https://student1311.github.io/portfolio/build/",code:"https://github.com/student1311/portfolio",title:"This portfolio",img:"./img/portfolio.png"},{tagsStr:"html/css | ajax",tags:["html/css","ajax"],id:3,desc:"Landing page",demo:"https://student1311.github.io/horizon/",code:"https://github.com/student1311/horizon",title:"Landing",img:"./img/horizon.png"},{tagsStr:"react",tags:["react"],id:4,desc:"simple todo-app,using propTypes",demo:"https://student1311.github.io/todo-app/build/",code:"https://github.com/student1311/todo-app",title:"Todo-app",img:"./img/todo.png"},{tagsStr:"html/css | ajax",tags:["html/css","ajax"],id:5,desc:"Landing page",demo:"https://student1311.github.io/video/",code:"https://github.com/student1311/video",title:"Landing",img:"./img/video.png"},{tagsStr:"html/css",tags:["html/css"],id:6,desc:"using animation.css, gulp, svg animation",demo:"https://student1311.github.io/graph/",code:"https://github.com/student1311/graph",title:"Landing",img:"./img/graph.png"},{tagsStr:"html/css | ajax | bootstrap",tags:["html/css","ajax","bootstrap"],id:7,desc:"set google data sheets,sms verification,",demo:"https://student1311.github.io/test/",code:"https://github.com/student1311/test",title:"Landing",img:"./img/test.png"}];var D=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null),r.a.createElement(v,{content:x}),r.a.createElement(w,null))};o.a.render(r.a.createElement(D,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.c7636c47.chunk.js.map