(()=>{"use strict";var e,t={1461:(e,t,a)=>{var n=a(7294),s=a(3935),l=a(8519),o=a(195),i=a(6486),r=a(6767),c=a.n(r);let m={color:c().hsl(0,100,50)};setInterval((()=>{m.color=m.color.rotate(.5)}),50);const u=m,d=(0,n.createContext)(),p=(0,n.createContext)(),h=function(e,t){switch(t.type){case"setSection":return void(e.section=t.data);case"showFooter":return void(e.showFooter=t.data);case"setSize":return void(e.size=t.value);case"openMenu":return void(e.menuOpen=!0);case"closeMenu":return void(e.menuOpen=!1)}};var _=a(7625),v=a(1436);const f=function(e){return n.createElement("svg",{className:e.className,viewBox:"0 0 620 400"},n.createElement("path",{d:"M549.4,0v103.5H358.8V0h-70.6v44.8C252.1,16.6,204.4,0,149.1,0H0v400h149.1c55.3,0,103-16.8,139.1-45.2V400 h70.6V296.5h190.7V400H620V0H549.4z M70.6,336v-99l75.6,99H70.6z M219.7,320L70.6,127V64h1l180.1,232.5 C242.7,306,231.7,314,219.7,320z M285.7,230L157.1,64c79.6,3.5,131.1,60,131.1,136v1C288.2,211,287.2,220.5,285.7,230z M549.4,231.5 h-190l0.1-63h189.8V231.5z"}))},g=function(){const e=(0,n.useContext)(d),t=(0,n.useContext)(p);function a(e){const t=document.querySelector(`.${e}`);window.scrollTo({top:t.offsetTop,behavior:"smooth"})}return n.createElement("header",{className:"header"+("top"==e.section?" header--hidden":"")},n.createElement("button",{onClick:()=>a("top"),className:"header__logo "+(e.menuOpen?"header__logo--hidden":"")},n.createElement(f,{className:"header__svg"})),"huge"==e.size&&n.createElement("menu",{className:"menu"},n.createElement("button",{onClick:()=>a("about"),className:"menu__button menu__button--about"+("about"==e.section?" menu__button--active":""),"data-letter":"A"},"About"),n.createElement("button",{onClick:()=>a("work"),className:"menu__button menu__button--work"+("work"==e.section?" menu__button--active":""),"data-letter":"W"},"Work"),n.createElement("button",{onClick:()=>a("skills"),className:"menu__button menu__button--skills"+("skills"==e.section?" menu__button--active":""),"data-letter":"S"},"Skills"),n.createElement("button",{onClick:()=>a("contact"),className:"menu__button menu__button--contact"+("contact"==e.section?" menu__button--active":""),"data-letter":"C"},"Contact")),("large"==e.size||"medium"==e.size||"small"==e.size||"tiny"==e.size)&&n.createElement("button",{className:"burger  "+(e.menuOpen?"burger--active":""),onClick:function(){e.menuOpen?t({type:"closeMenu"}):t({type:"openMenu"})}},e.menuOpen&&n.createElement(_.G,{icon:v.NBC,className:"burger__icon"}),!e.menuOpen&&n.createElement(_.G,{icon:v.xiG,className:"burger__icon"})))},b=function(){function e(e){const t=document.querySelector(`.${e}`);window.scrollTo({top:t.offsetTop,behavior:"smooth"})}return(0,n.useContext)(d),n.createElement("section",{className:"section top"},n.createElement("div",{className:"top__titles"},n.createElement("h1",{className:"top__title"},"Dan Hart"),n.createElement("h2",{className:"top__subtitle"},"Web Developer")),n.createElement("menu",{className:"menu top__menu"},n.createElement("button",{onClick:()=>e("about"),className:"menu__button menu__button--about top__button","data-letter":"A"},"About"),n.createElement("button",{onClick:()=>e("work"),className:"menu__button menu__button--work top__button","data-letter":"W"},"Work"),n.createElement("button",{onClick:()=>e("skills"),className:"menu__button menu__button--skills top__button","data-letter":"S"},"Skills"),n.createElement("button",{onClick:()=>e("contact"),className:"menu__button menu__button--contact top__button","data-letter":"C"},"Contact")))},k=function(){return n.createElement("section",{className:"section about"},n.createElement("span",{className:"about__hi"},"Hi, I'm Dan"),n.createElement("p",{className:"about__paragraph"},"I’m a web developer from Woking, Surrey. I’ve been coding since 2016, primarily working with front-end technologies but with some back-end experience too. Aside from standard HTML and CSS, I mostly use Javascript and related tools - including React, Node, Webpack, Express, Vue and jQuery. I initially started out with Wordpress, so I’m very familiar with that too."),n.createElement("p",{className:"about__paragraph"},"I’ve previously worked at a digital marketing agency in Guildford as the senior member of a small web team, and have since continued expanding my skillset through personal projects and educational courses. I am now available and looking for new opportunities - ideally a full-time work-from-home role."),n.createElement("a",{href:"/cv.pdf",download:!0,className:"about__cv button"},n.createElement("span",null,"Download my CV"),n.createElement(_.G,{icon:v.kwI})))};var y=a(9755);!function(e,t,a,n){function s(t,a){this.element=t,this.settings=e.extend({},o,a),this._defaults=o,this._name=l,this.init()}var l="mgGlitch",o={destroy:!1,glitch:!0,scale:!0,blend:!0,blendModeType:"hue",glitch1TimeMin:600,glitch1TimeMax:900,glitch2TimeMin:10,glitch2TimeMax:115,zIndexStart:5};e.extend(s.prototype,{init:function(){this.glitch()},glitch:function(){function t(e,t){return Math.floor(Math.random()*(t-e+1))+e}var a=this.element,n=this.settings.scale,s=this.settings.glitch1TimeMin,l=this.settings.glitch1TimeMax,o=this.settings.glitch2TimeMin,i=this.settings.glitch2TimeMax,r=this.settings.zIndexStart;!0===this.settings.destroy?((e(a).hasClass("el-front-1")||e(a).hasClass("front-3")||e(a).hasClass("front-2"))&&e(".front-1, .front-2, .front-3").remove(),e(".back").removeClass("back")):!1===this.settings.destroy&&(e(a).clone().insertBefore(a).addClass("back").css({"z-index":r}),!0===this.settings.blend&&(e(a).clone().insertAfter(a).addClass("front-3").css({"z-index":r+3,"mix-blend-mode":this.settings.blendModeType}),function s(){var l=t(10,1900),r=t(10,1300),c=t(0,40),m=t(0,40),u=t(o,i);if(!0===n)var d=(Math.random()*(1.1-.9)+.9).toFixed(2);else!1===n&&(d=1);e(a).next().next().css({clip:"rect("+l+"px, 9999px, "+r+"px,0px)",left:c,right:m,"-webkit-transform":"scale("+d+")","-ms-transform":"scale("+d+")",transform:"scale("+d+")"}),setTimeout(s,u)}()),!0===this.settings.glitch&&(e(a).clone().insertAfter(a).addClass("front-2").css({"z-index":r+2}),e(".back").next().addClass("front-1").css({"z-index":r+1}),function n(){var o=t(10,1900),i=t(10,1300),r=t(0,16),c=t(0,16),m=t(s,l);e(a).css({clip:"rect("+o+"px, 9999px, "+i+"px,0px)",right:c,left:r}),setTimeout(n,m)}(),function s(){var l=t(10,1900),r=t(10,1300),c=t(0,40),m=t(0,40),u=t(o,i);if(!0===n)var d=(Math.random()*(1.1-.9)+.9).toFixed(2);else!1===n&&(d=1);e(a).next().css({clip:"rect("+l+"px, 9999px, "+r+"px,0px)",left:c,right:m,"-webkit-transform":"scale("+d+")","-ms-transform":"scale("+d+")",transform:"scale("+d+")"}),setTimeout(s,u)}()))}}),e.fn[l]=function(e){return this.each((function(){new s(this,e)}))}}(a.n(y)(),window,document);var E=a(1417);const w=function(){return n.createElement("section",{className:"section work"},n.createElement("p",{className:"work__paragraph"},"These are a selection of websites I've built over the years to showcase my ability, featuring a variety of different methods and tools. Please visit the link underneath to see the source code on my Github page."),n.createElement("div",{className:"work__container"},[{name:"VibeRates",link:"https://viberat.es",image:"viberates.jpg"},{name:"The Hart Attack",link:"https://thehartattack.com",image:"thehartattack.jpg"},{name:"The Apocalypse",link:"https://thehartattack.github.io/apocalypse",image:"theapocalypse.jpg"},{name:"Stardust Festival",link:"https://danhart.uk/stardustfestival",image:"stardustfestival.jpg"},{name:"Dan Hart (2019)",link:"https://danhart.uk/2019",image:"danhart2019.jpg"},{name:"Dan Hart (2017)",link:"https://danhart.uk/2017",image:"danhart2017.jpg"},{name:"Heretic Hearts",link:"https://heretic-hearts.firebaseapp.com",image:"heretichearts.jpg"}].map(((e,t)=>n.createElement("a",{key:t,href:e.link,target:"_blank",className:"work__item"},n.createElement("div",{className:"work__image-container"},n.createElement("div",{className:"work__image",style:{backgroundImage:`url(./assets/images/${e.image})`}}),n.createElement(_.G,{icon:v.Xjp,className:"work__link-icon"})))))),n.createElement("a",{href:"https://github.com/TheHartAttack",target:"_blank",rel:"noopener noreferrer",className:"work__link button"},n.createElement("span",null,"Source code"),n.createElement(_.G,{icon:E.zhw})))};var N=a(6358),x=a(7082);const C=function(){return n.createElement("div",{className:"skills__grid-labels"},n.createElement("div",{className:"skills__grid-header"},n.createElement("div",{className:"skills__grid-header-section"},"Usage:"),n.createElement("div",{className:"skills__grid-header-section"},"Rarely"),n.createElement("div",{className:"skills__grid-header-section"},"Sometimes"),n.createElement("div",{className:"skills__grid-header-section"},"Often")),n.createElement("div",{className:"skills__grid-section"}),n.createElement("div",{className:"skills__grid-section"}),n.createElement("div",{className:"skills__grid-section"}),n.createElement("div",{className:"skills__grid-section"}))};N.p8.registerPlugin(x.i);const S=function(e){const t=(0,n.useRef)([]);t.current=[],(0,n.useEffect)((()=>{const e=document.querySelector(".skills__hex").getBoundingClientRect().width,a=.75*window.innerHeight;t.current.forEach((t=>{t.querySelectorAll(".skills__hex").forEach(((t,n)=>{N.p8.fromTo(t,{x:-e/2,opacity:0,rotation:-45},{x:0,opacity:1,rotation:0,duration:.125,ease:"none",scrollTrigger:{id:"",trigger:t.parentElement,start:`top ${a}`,toggleActions:"play none none none"},delay:.125*n})}))}))}),[]);const a=e=>{e&&!t.current.includes(e)&&t.current.push(e)};return n.createElement("div",{className:"skills__grid"},n.createElement("h3",{className:"skills__title"},e.title),n.createElement("div",{className:"skills__grid-inner"},e.skills.map(((t,s)=>{if(t.type==e.type){const e=[];for(let a=0;a<t.level;a++)e.push(a+1);return n.createElement("div",{key:s,className:"skills__item",ref:a},n.createElement("div",{className:"skills__skill"},t.skill),n.createElement("div",{className:"skills__level"},e.map((e=>n.createElement("div",{key:e,className:"skills__hex"},n.createElement("div",{className:"skills__hex-inner"}))))))}})),n.createElement(C,null)))},z=function(){const e=(0,n.useContext)(d),t=[{skill:"HTML",level:9,type:"basic"},{skill:"CSS",level:9,type:"basic"},{skill:"Javascript",level:9,type:"basic"},{skill:"React",level:9,type:"js"},{skill:"Vue",level:6,type:"js"},{skill:"Wordpress",level:9,type:"misc"},{skill:"Webpack",level:9,type:"js"},{skill:"Git",level:6,type:"misc"},{skill:"SASS",level:9,type:"style"},{skill:"PostCSS",level:6,type:"style"},{skill:"jQuery",level:9,type:"js"},{skill:"Node",level:9,type:"js"},{skill:"Express",level:6,type:"js"},{skill:"Photoshop",level:9,type:"gfx"},{skill:"Illustrator",level:9,type:"gfx"},{skill:"After Effects",level:3,type:"gfx"},{skill:"PHP",level:3,type:"misc"},{skill:"Bootstrap",level:3,type:"style"},{skill:"SQL",level:3,type:"db"},{skill:"Firebase",level:6,type:"db"},{skill:"MongoDB",level:9,type:"db"},{skill:"Three",level:3,type:"js"},{skill:"GSAP",level:3,type:"js"}];return n.createElement("section",{className:"section skills"},n.createElement("p",{className:"skills__paragraph"},"Here is an overview of my technical skillset, including my level of experience with each skill:"),("tiny"==e.size||"small"==e.size||"medium"==e.size)&&n.createElement("div",{className:"skills__column"},n.createElement(S,{skills:t,title:"Basics",type:"basic"}),n.createElement(S,{skills:t,title:"Styling",type:"style"}),n.createElement(S,{skills:t,title:"Javascript",type:"js"}),n.createElement(S,{skills:t,title:"Graphics",type:"gfx"}),n.createElement(S,{skills:t,title:"Database",type:"db"}),n.createElement(S,{skills:t,title:"Other",type:"misc"})),("large"==e.size||"huge"==e.size)&&n.createElement(n.Fragment,null,n.createElement("div",{className:"skills__column"},n.createElement(S,{skills:t,title:"Basics",type:"basic"}),n.createElement(S,{skills:t,title:"Styling",type:"style"}),n.createElement(S,{skills:t,title:"Graphics",type:"gfx"})),n.createElement("div",{className:"skills__column"},n.createElement(S,{skills:t,title:"Javascript",type:"js"}),n.createElement(S,{skills:t,title:"Database",type:"db"}),n.createElement(S,{skills:t,title:"Other",type:"misc"}))))};var M=a(9669),T=a.n(M);const j=function(){const[e,t]=(0,o.x)({name:"",email:"",message:"",submitting:!1,submitCount:0,status:""});return(0,n.useEffect)((()=>{if(e.submitCount){async function a(){try{if(!e.name)throw new Error("You must provide a name.");if(!e.email)throw new Error("You must provide an email.");if(!e.message)throw new Error("You must provide a message.");t((e=>{e.submitting=!0}));const a=new FormData;if(a.append("name",e.name),a.append("email",e.email),a.append("message",e.message),200!=(await T().post("/contact.php",a,{headers:{"Content-Type":"multipart/form-data"}})).status)throw new Error("Server error.");t((e=>{e.name="",e.email="",e.message="",e.submitting=!1,e.status="Message sent."}))}catch(e){t((t=>{t.submitting=!1,t.status=e.message})),console.log(e)}}a()}}),[e.submitCount]),(0,n.useEffect)((()=>{e.status&&setTimeout((()=>{t((e=>{e.status=""}))}),5250)}),[e.status]),n.createElement("section",{className:"section contact"},n.createElement("form",{onSubmit:async function(e){e.preventDefault(),t((e=>{e.submitCount++}))},className:"contact__form"},n.createElement("p",{className:"contact__text"},"If you’re interested in working with me, please send me an email using the form below."),n.createElement("div",{className:"contact__group"},n.createElement("label",{htmlFor:"contact-name"},"Name"),n.createElement("input",{onChange:e=>{t((t=>{t.name=e.target.value}))},type:"text",id:"contact-name",className:"contact__input",value:e.name})),n.createElement("div",{className:"contact__group"},n.createElement("label",{htmlFor:"contact-email"},"Email"),n.createElement("input",{onChange:e=>{t((t=>{t.email=e.target.value}))},type:"text",id:"contact-email",className:"contact__input",value:e.email})),n.createElement("div",{className:"contact__group"},n.createElement("label",{htmlFor:"contact-message"},"Message"),n.createElement("textarea",{onChange:e=>{t((t=>{t.message=e.target.value}))},type:"text",id:"contact-message",className:"contact__textarea",value:e.message})),n.createElement("div",{className:"contact__group contact__group--submit"},n.createElement("button",{className:"button contact__submit",disabled:e.submitting},n.createElement("span",null,"Send"),n.createElement(_.G,{icon:v.FU$,className:"contact__icon"}),n.createElement(_.G,{icon:v.LM3,className:"contact__submitting"})),e.status&&n.createElement("span",{className:"contact__status"},e.status))),n.createElement("div",{className:"contact__map"}))};var O=a(6024);const H=function(){const e=(0,n.useContext)(d);return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"footer__hex "+(e.showFooter?"footer__hex--active":"")},n.createElement(_.G,{icon:O.rU,className:"footer__copy"})," ",(new Date).getFullYear()))},F=function(){const e=(0,n.useContext)(p);function t(t){e({type:"closeMenu"});const a=document.querySelector(`.${t}`);window.scrollTo({top:a.offsetTop,behavior:"smooth"})}return n.createElement("menu",{className:"menu overlay__menu"},n.createElement("button",{onClick:()=>t("about"),className:"menu__button menu__button--about overlay__button","data-letter":"A"},"About"),n.createElement("button",{onClick:()=>t("work"),className:"menu__button menu__button--work overlay__button","data-letter":"W"},"Work"),n.createElement("button",{onClick:()=>t("skills"),className:"menu__button menu__button--skills overlay__button","data-letter":"S"},"Skills"),n.createElement("button",{onClick:()=>t("contact"),className:"menu__button menu__button--contact overlay__button","data-letter":"C"},"Contact"))};function I(){const[e,t]=(0,o.C)(h,{section:"top",showFooter:!1,size:"tiny",menuOpen:!1});function a(){const e=window.scrollY,a=window.innerHeight,n=document.querySelector(".about").offsetTop,s=document.querySelector(".work").offsetTop,l=document.querySelector(".skills").offsetTop,o=document.querySelector(".contact").offsetTop;t(e>=o-a/2?{type:"setSection",data:"contact"}:e>=l-a/2?{type:"setSection",data:"skills"}:e>=s-a/2?{type:"setSection",data:"work"}:e>=n-a/2?{type:"setSection",data:"about"}:{type:"setSection",data:"top"}),window.innerHeight+e>=document.body.offsetHeight?t({type:"showFooter",data:!0}):t({type:"showFooter",data:!1})}function s(){const e=window.innerWidth;e<360?t({type:"setSize",value:"tiny"}):e>=360&&e<720?t({type:"setSize",value:"small"}):e>=720&&e<1080?t({type:"setSize",value:"medium"}):e>=1080&&e<1440?t({type:"setSize",value:"large"}):e>=1440&&t({type:"setSize",value:"huge"})}return(0,n.useEffect)((()=>{setInterval((()=>{const e=c()(u.color.string()),t=e.darken(.5);document.documentElement.style.setProperty("--themeColor",t);const a=e.fade(.5);document.documentElement.style.setProperty("--themeColor50",a);const n=e.fade(.75);document.documentElement.style.setProperty("--themeColor75",n)}),50),new class{constructor(){this.app=document.querySelector("#app"),this.font=new FontFace("Magzetician","url('./assets/fonts/Magzetician.woff2')"),this.removeCanvas(),this.injectCanvas(),this.draw(),this.actions()}actions(){window.addEventListener("resize",(()=>this.resize()))}resize(){this.canvas.width=document.querySelector("#app").clientWidth,this.canvas.height=document.querySelector("#app").clientHeight,clearInterval(this.int),this.draw()}removeCanvas(){const e=document.querySelector(".matrix");e&&e.remove()}injectCanvas(){this.canvas=document.createElement("canvas"),this.canvas.classList.add("matrix"),this.canvas.width=this.app.clientWidth,this.canvas.height=this.app.clientHeight,this.app.insertBefore(this.canvas,this.app.firstChild)}async draw(){const e=this.canvas.getContext("2d"),t=this.canvas.width,a=this.canvas.height;e.fillStyle="#000",e.fillRect(0,0,t,a);const n=Math.floor(t/20)+1,s=Array(n).fill(0),l=await this.font.load();document.fonts.add(l),this.int=setInterval((()=>{e.shadowBlur=0,e.shadowColor="#0001",e.fillStyle="#0001",e.fillRect(0,0,t,a),e.fillStyle=u.color.string(),e.font="20px Magzetician",e.shadowBlur=10,e.shadowColor=u.color.string(),s.forEach(((t,n)=>{const l=String.fromCharCode(65+Math.round(26*Math.random())),o=30*n;e.fillText(l,o,t),t>100+Math.random()*a*50?s[n]=0:s[n]=t+30}))}),50)}},a(),window.addEventListener("scroll",(0,i.throttle)(a,250))}),[e.size]),(0,n.useEffect)((()=>(window.addEventListener("resize",(0,i.debounce)(s,100)),s(),()=>window.removeEventListener("resize",s))),[]),(0,n.useEffect)((()=>{e.menuOpen?document.querySelector("body").classList.add("noscroll"):document.querySelector("body").classList.remove("noscroll")}),[e.menuOpen]),n.createElement(d.Provider,{value:e},n.createElement(p.Provider,{value:t},n.createElement(g,null),n.createElement(b,null),n.createElement(k,null),n.createElement(w,null),n.createElement(z,null),n.createElement(j,null),n.createElement(H,null),n.createElement(l.Z,{timeout:250,in:e.menuOpen,classNames:"overlay",unmountOnExit:!0},n.createElement(F,null))))}s.render(n.createElement(I,null),document.querySelector("#app"))}},a={};function n(e){var s=a[e];if(void 0!==s)return s.exports;var l=a[e]={id:e,loaded:!1,exports:{}};return t[e].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}n.m=t,e=[],n.O=(t,a,s,l)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){for(var[a,s,l]=e[m],i=!0,r=0;r<a.length;r++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](a[r])))?a.splice(r--,1):(i=!1,l<o&&(o=l));if(i){e.splice(m--,1);var c=s();void 0!==c&&(t=c)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[a,s,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var s,l,[o,i,r]=a,c=0;if(o.some((t=>0!==e[t]))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(r)var m=r(n)}for(t&&t(a);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[o[c]]=0;return n.O(m)},a=self.webpackChunkdanhart2021=self.webpackChunkdanhart2021||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var s=n.O(void 0,[253],(()=>n(1461)));s=n.O(s)})();