(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,function(e,t,a){e.exports={wrap:"WorksItem_wrap__3gPAE",itemWrap:"WorksItem_itemWrap__i2UTI",itemHover:"WorksItem_itemHover__YiIUV",hover:"WorksItem_hover__3ToOK",button:"WorksItem_button__R-Q-c",wrapButtons:"WorksItem_wrapButtons__3mU76",description:"WorksItem_description__2-zbK",tagsItem:"WorksItem_tagsItem__NTV3C",title:"WorksItem_title__3PG-A"}},function(e,t,a){e.exports={title:"WorksFilter_title__3cmVi",filterWrap:"WorksFilter_filterWrap__2N9v0",wrapTitleItem:"WorksFilter_wrapTitleItem__2SD9r",titleFilterWrap:"WorksFilter_titleFilterWrap__2KjVM",activeItem:"WorksFilter_activeItem__1xT03",Hamburger:"WorksFilter_Hamburger__3MDVF",mobile:"WorksFilter_mobile__3xy3j",line:"WorksFilter_line__y7-Vz",titleWrap:"WorksFilter_titleWrap__3L2Xw"}},,function(e,t,a){e.exports={header:"Header_header__2IEvG",title:"Header_title__jti_y",subTitle:"Header_subTitle__1SHUT",wrapTitle:"Header_wrapTitle__3pXXR",text:"Header_text__3uzOc"}},function(e,t,a){e.exports={footer:"Footer_footer__2LJOE",linkedin:"Footer_linkedin__3_R11",github:"Footer_github__27bg-",copy:"Footer_copy__1zoo8"}},function(e,t,a){e.exports={line:"Content_line__eKAjh"}},function(e,t,a){e.exports={Hamburger:"Hamburger_Hamburger__Ibc2J",mobile:"Hamburger_mobile__1Sdjh"}},,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),o=a.n(r),s=(a(21),a(22),a(15)),c=a.n(s),l=a(5),m=a.n(l),p=function(){return i.a.createElement("header",{className:m.a.header},i.a.createElement("div",{className:m.a.wrapTitle},i.a.createElement("h4",{className:m.a.title},"Maksim Ionash"),i.a.createElement(c.a,{strings:["WEB CODER","REACT DEVELOPER","FRONTEND DEVELOPER"],className:m.a.subTitle,typeSpeed:90,backSpeed:20,loop:!0})),i.a.createElement("p",{className:m.a.text},"Here are some of my works that I did during study and work"))},d=a(7),u=a.n(d),g=a(4),_=a(3),h=a.n(_),b=a(2),f=a.n(b),E=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(null),c=Object(g.a)(s,2),l=c[0],m=c[1],p=function(){o(!1),m(null)},d=e.content.map((function(e){return i.a.createElement("div",{className:f.a.itemWrap,onMouseEnter:function(){var t;t=e.id,o(!0),m(t)},onMouseLeave:p,key:e.id},i.a.createElement("div",{className:r&&l===e.id?"".concat(f.a.hover," ").concat(f.a.itemHover):f.a.itemHover},i.a.createElement("p",{className:f.a.description},e.desc),i.a.createElement("div",{className:f.a.wrapButtons},i.a.createElement("a",{className:"".concat(f.a.button," waves-effect  btn "),type:"button",target:"_blank",rel:"noopener noreferrer",href:e.demo},"DEMO"),i.a.createElement("a",{className:"".concat(f.a.button," waves-effect  btn "),type:"button",target:"_blank",rel:"noopener noreferrer",href:e.code},"CODE"))),i.a.createElement("img",{src:e.img,alt:"img",width:"200",height:"150"}),i.a.createElement("span",{className:f.a.tagsItem},e.tagsStr," "),i.a.createElement("p",{className:f.a.title},e.title))}));return i.a.createElement("div",{className:f.a.wrap},d)},k=a(8),v=a.n(k),x=function(e){var t="".concat(e.width||36,"px"),a="".concat(e.height||30,"px"),n="".concat(parseInt(a.replace("px",""))/2,"px"),r=e.isOpen||!1,o=e.strokeWidth||2,s="-".concat(o/2,"px"),c=e.animationDuration||"0.4",l=function(e,t,a){return"translate3d(0,".concat(e?n:t,",0) rotate(").concat(e?"".concat(a,"deg"):"0",")")},m={container:{width:t,height:a},lineBase:{display:"block",height:"".concat(o,"px"),width:"100%",background:e.color||"#fff",transitionTimingFunction:"ease",transitionDuration:"".concat(c,"s"),borderRadius:"".concat(e.borderRadius||0,"px"),transformOrigin:"center",position:"absolute"},firstLine:{transform:l(r,0,45),marginTop:s},secondLine:{transitionTimingFunction:"ease-out",transitionDuration:"".concat(c/4,"s"),opacity:r?"0":"1",top:n,marginTop:s},thirdLine:{transform:l(r,a,-45),marginTop:s}};return i.a.createElement("div",{className:e.isOpen?" ".concat(v.a.Hamburger," ").concat(v.a.mobile):"".concat(v.a.Hamburger),style:m.container,onClick:e.menuClicked},i.a.createElement("span",{style:Object.assign({},m.lineBase,m.firstLine)}),i.a.createElement("span",{style:Object.assign({},m.lineBase,m.secondLine)}),i.a.createElement("span",{style:Object.assign({},m.lineBase,m.thirdLine)}))},N=function(e){var t=Object(n.useState)(!1),a=Object(g.a)(t,2),r=a[0],o=a[1],s=i.a.useState(e.content),c=Object(g.a)(s,2),l=c[0],m=c[1],p=i.a.useState(1),d=Object(g.a)(p,2),u=d[0],_=d[1],b=[{id:1,title:"all"},{id:2,title:"react"},{id:3,title:"ajax"},{id:4,title:"html/css"},{id:5,title:"bootstrap"}].map((function(t){return i.a.createElement("li",{className:u===t.id?"".concat(h.a.activeItem," waves-effect orange btn "):"waves-effect   btn",onClick:function(){_(t.id),o(!1),m((function(){return"all"===t.title?e.content:e.content.filter((function(e){return-1!==e.tags.indexOf(t.title)}))}))},key:t.id},t.title)}));return i.a.createElement("div",{className:h.a.filterWrap},i.a.createElement(x,{menuClicked:function(){o(!r)},isOpen:r,width:22,height:18,strokeWidth:1,rotate:0,color:"#fff",borderRadius:5,animationDuration:.3}),i.a.createElement("div",{className:r?" ".concat(h.a.wrapTitleItem," ").concat(h.a.mobile):"".concat(h.a.wrapTitleItem)},i.a.createElement("div",{className:h.a.titleWrap},i.a.createElement("h3",{className:h.a.title},"works")),i.a.createElement("ul",{className:h.a.titleFilterWrap},b)),i.a.createElement("div",{className:h.a.line}),i.a.createElement("div",{className:h.a.contentWrap},i.a.createElement(E,{content:l})))},W=function(e){return i.a.createElement("main",{className:u.a.content},i.a.createElement("div",{className:u.a.line}),i.a.createElement(N,{content:e.content}),i.a.createElement("div",{className:u.a.line}))},w=a(6),I=a.n(w),y=a(10),T=a(11),O=function(){return i.a.createElement("footer",{className:I.a.footer},i.a.createElement("p",{className:I.a.copy},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&copy;"}}),"Maksim Ionash"),i.a.createElement("div",{className:I.a.linkWrap},i.a.createElement("a",{href:"https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D0%B8%D0%BE%D0%BD%D0%B0%D1%88-9b584614a/",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(T.a,{className:I.a.linkedin,icon:y.b})),i.a.createElement("a",{href:"https://github.com/ionmax1311",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(T.a,{className:I.a.github,icon:y.a}))))},D=[{tagsStr:"react | bootstrap",tags:["react","bootstrap"],id:1,desc:"app, with firebase auth, and GIF search",demo:"https://ionmax1311.github.io/giphys_app/build/",code:"https://github.com/ionmax1311/giphys_app",title:"Giphy-app",img:"./img/giph.png"},{tagsStr:"react",tags:"react",id:2,desc:"portfolio, using React Hooks",demo:"https://ionmax1311.github.io/portfolio/build/",code:"https://github.com/ionmax1311/portfolio",title:"This portfolio",img:"./img/portfolio.png"},{tagsStr:"html/css | ajax",tags:["html/css","ajax"],id:3,desc:"Landing page",demo:"https://ionmax1311.github.io/horizon/index.html",code:"https://github.com/ionmax1311/horizon",title:"Landing",img:"./img/horizon.png"},{tagsStr:"react",tags:["react"],id:4,desc:"simple todo-app,using redux, propTypes",demo:"https://ionmax1311.github.io/todo-app_redux/build/",code:"https://github.com/ionmax1311/todo-app_redux",title:"Todo-app-redux",img:"./img/todo.png"},{tagsStr:"html/css | ajax",tags:["html/css","ajax"],id:5,desc:"landing page, submit form data in srm",demo:"https://ionmax1311.github.io/video/",code:"https://github.com/ionmax1311/video",title:"Landing page",img:"./img/video.png"},{tagsStr:"html/css",tags:["html/css"],id:6,desc:"using animation.css, gulp, svg animation",demo:"https://ionmax1311.github.io/graph/",code:"https://github.com/ionmax1311/graph",title:"Landing page",img:"./img/graph.png"},{tagsStr:"html/css | ajax | bootstrap",tags:["html/css","ajax","bootstrap"],id:7,desc:"set google data sheets,sms verification,",demo:"https://online-investor.top/",code:"https://github.com/ionmax1311/investor",title:"Landing page",img:"./img/investor.png"}];var j=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(W,{content:D}),i.a.createElement(O,null))};o.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.ad123075.chunk.js.map