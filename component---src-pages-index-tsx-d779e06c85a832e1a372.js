(self.webpackChunkpersonal_portfolio=self.webpackChunkpersonal_portfolio||[]).push([[691],{1135:function(e){e.exports=function(){for(var e=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"],t=[],a=0;a<35;a++)t[a]=7===a||12===a||17===a||22===a?"-":e[Math.floor(Math.random()*e.length-1)];return t.join("")}},598:function(e,t,a){"use strict";a.d(t,{ZP:function(){return I}});var l={verylong:750,long:250,medium:200,short:125},M=l.medium,n="ease-in-out";function I(e,t,a){void 0===t&&(t="medium"),void 0===a&&(a="ease-in-out");var I=Array.isArray(e),r=Array.isArray(t),g=Array.isArray(a);if(I){var c={transition:""};return e.forEach((function(e,I){var u,o=a||n;u=r?"number"==typeof t[I]?t[I]:l[t[I]]||l[a[a.length-1]]||M:"number"==typeof t?t:l[t]||M,g&&(o=a[I]||a[a.length-1]||n);var d=i(e,u,o);c.transition=c.transition+(""===c.transition?d:", "+d)})),c}var u,o=a||n;return u=r?"number"==typeof t[0]?t[0]:l[t[0]]||M:"number"==typeof t?t:l[t]||M,g&&(o=a[0]||n),{transition:i(e,u,o)}}function i(e,t,a){return t<5&&console.warn("`createTransitionValue` called with duration < 5ms. Are you sure this was passed in milliseconds?"),e+" "+t+"ms "+a}},6270:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var l,M,n,I,i,r=a(5007),g=a(1625),c=a(59),u=a(4944),o=a(8560),d="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAwIDQ5MCA0MzciPgoJPGcgZmlsbD0iIzYxZGFmYiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2IC03OCkiPgoJCTxwYXRoCgkJCWQ9Ik02NjYgMjk3YzAtMzMtNDAtNjQtMTAzLTgzIDE1LTY0IDgtMTE0LTIwLTEzMC03LTQtMTQtNi0yMi02djIyYzQgMCA4IDEgMTEgMyAxNCA4IDE5IDM3IDE1IDc2bC01IDI5Yy0yMC01LTQxLTgtNjQtMTEtMTMtMTgtMjctMzUtNDEtNTAgMzItMzAgNjMtNDcgODQtNDdWNzhjLTI4IDAtNjQgMjAtMTAwIDU0LTM3LTM0LTczLTU0LTEwMC01NHYyM2MyMSAwIDUxIDE2IDg0IDQ2LTE0IDE1LTI4IDMyLTQxIDUwLTIzIDMtNDQgNi02NCAxMWwtNS0yOWMtNS0zOCAxLTY4IDE0LTc2bDEyLTJWNzh2MWMtOSAwLTE2IDEtMjMgNS0yOCAxNi0zNCA2Ny0yMCAxMzAtNjIgMTktMTAyIDUwLTEwMiA4MiAwIDMzIDQwIDY0IDEwMyA4My0xNSA2My04IDExNCAyMCAxMzAgNiA0IDE0IDYgMjIgNiAyOCAwIDY0LTIwIDEwMC01NCAzNyAzNCA3MyA1MyAxMDAgNTMgOSAxIDE2LTEgMjMtNSAyOC0xNiAzNC02NyAyMC0xMzAgNjItMTkgMTAyLTUwIDEwMi04MnptLTEzMC02N2wtMTMgMzlhNDczIDQ3MyAwIDAwLTI4LTQ3em0tNDYgMTA2Yy03IDE0LTE1IDI3LTI0IDM5YTUyMCA1MjAgMCAwMS05MCAwIDU1MSA1NTEgMCAwMS00NS03OCA1MjEgNTIxIDAgMDE0NS03OCA1MjAgNTIwIDAgMDE5MCAwIDU1MSA1NTEgMCAwMTQ1IDc3Yy02IDE0LTEzIDI3LTIxIDQwem0zMy0xM2M1IDE0IDEwIDI3IDEzIDQwbC00MSA4YTU1MiA1NTIgMCAwMDI4LTQ4ek00MjEgNDMwbC0yOC0zMmE2MTkgNjE5IDAgMDA1NiAwYy05IDEyLTE5IDIyLTI4IDMyem0tNzQtNTlsLTQxLTggMTMtMzlhNDczIDQ3MyAwIDAwMjggNDd6bTc0LTIwOGwyNyAzMmE2MTkgNjE5IDAgMDAtNTUgMGM5LTEyIDE5LTIyIDI4LTMyem0tNzQgNTlhNTUyIDU1MiAwIDAwLTI4IDQ4Yy01LTE0LTEwLTI3LTEzLTQwem0tOTEgMTI1Yy0zNS0xNS01OC0zNS01OC01MCAwLTE2IDIzLTM2IDU4LTUxbDI4LTEwYzYgMTkgMTMgNDAgMjIgNjEtOSAyMC0xNiA0MS0yMiA2MHptNTQgMTQzYy0xNC04LTE5LTM3LTE1LTc2bDUtMjljMjAgNSA0MSA4IDY0IDExIDEzIDE4IDI3IDM1IDQxIDUwLTMyIDMwLTYzIDQ3LTg0IDQ3LTQgMC04LTEtMTEtM3ptMjM3LTc2YzUgMzgtMSA2OC0xNCA3NmwtMTIgMmMtMjEgMC01MS0xNi04NC00NiAxNC0xNSAyOC0zMiA0MS01MCAyMy0zIDQ0LTYgNjQtMTF6bTM5LTY3bC0yOCAxMGMtNi0xOS0xMy00MC0yMi02MSA5LTIwIDE2LTQxIDIyLTYwbDI4IDEwYzM1IDE1IDU4IDM1IDU4IDUxIDAgMTUtMjMgMzUtNTggNTB6IiAvPgoJCTxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciIC8+Cgk8L2c+Cjwvc3ZnPg==",N=a(7627),m=a(1135),s=a.n(m),T=a(4153),A=a(5505),C=(0,N.Z)({tech:(l={width:"100%",margin:"auto",textAlign:"center",display:"flex",flexDirection:"column",height:"100%",maxWidth:200},l[T.Z.upTo.phone]={maxWidth:160},l),bubble:(M={filter:"drop-shadow(0 0 8px var(--neutral-grey))",width:"100%",margin:"auto"},M[T.Z.upTo.tablet]={width:"85%"},M[T.Z.upTo.phone]={width:"70%"},M),techHeading:{paddingTop:12},centreText:{flexGrow:1,display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center"}}),D=function(e){var t=e.src,a=e.name,l=e.from,M=s()(),n=C();return r.default.createElement("div",{className:n.tech},r.default.createElement("img",{alt:a+" logo",src:t,draggable:!1,className:n.bubble}),r.default.createElement("div",{className:n.centreText},r.default.createElement("h1",{id:M,className:(0,A.Z)("text-loud",n.techHeading)},a),r.default.createElement("p",null,"Since ",l)))},j=(0,N.Z)({fullWidth:(n={width:"100vw",position:"relative",marginLeft:"-50vw",left:"50%",marginTop:64},n[T.Z.upTo.desktopSmall]={marginTop:48},n[T.Z.upTo.tablet]={marginTop:36},n),container:(I={maxWidth:960,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",margin:"auto",gap:48,paddingLeft:32,paddingRight:32,justifyContent:"center"},I[T.Z.upTo.desktopSmall]={gap:40},I[T.Z.upTo.tablet]={gap:32},I[T.Z.upTo.phone]={gap:24},I)}),y=[{name:"HTML, CSS & JS",icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KCTxwYXRoIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzTTI1OS41IDBoMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjhsLTE2LjEtMjQuOHYzNC4yaC0yMi42TTM0OC43IDBoMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+Cgk8cGF0aCBmaWxsPSIjZTQ0ZDI2IiBkPSJNMTA3LjYgNDcxbC0zMy0zNzAuNGgzNjIuOGwtMzMgMzcwLjJMMjU1LjcgNTEyIi8+Cgk8cGF0aCBmaWxsPSIjZjE2NTI5IiBkPSJNMjU2IDQ4MC41VjEzMUg0MDQuM0wzNzYgNDQ3Ii8+Cgk8cGF0aCBmaWxsPSIjZWJlYmViIiBkPSJNMTQyIDE3Ni4zaDExNHY0NS40aC02NC4ybDQuMiA0Ni41aDYwdjQ1LjNIMTU0LjRNMTU2LjQgMzM2LjNIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+Cgk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNk0zNjEuMyAyNjguMkgyNTUuOHY0NS40aDU2bC01LjMgNTktNTAuNyAxMy42djQ3LjJsOTMtMjUuOCIvPgo8L3N2Zz4=",from:2013},{name:"React",icon:d,from:2018},{name:"Gatsby.js",icon:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+CiAgPGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiM2MzkiIC8+CiAgPHBhdGggZmlsbD0iI2ZmZiIKICAgIGQ9Ik02LjIgMjEuOEExMC45IDEwLjkgMCAwMTMgMTQuMkwxMy45IDI1Yy0yLjgtLjEtNS42LTEuMS03LjctMy4yem0xMC4yIDIuOUwzLjMgMTEuNmExMSAxMSAwIDAxMTkuNi00LjFsLTEuNSAxLjNBOS4yIDkuMiAwIDAwMTQgNWE5LjEgOS4xIDAgMDAtOC41IDZMMTcgMjIuNWE5IDkgMCAwMDUuOC02LjVIMTh2LTJoN2ExMSAxMSAwIDAxLTguNiAxMC43eiIgLz4KICA8L3N2Zz4=",from:2019},{name:"React Native",icon:d,from:2020},{name:"Flarum",icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPm9ubHkgc3ltYm9sPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEMjI5MjkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0I3MTcxNyIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTc3NjJFIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNzU2MkUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xLUNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJzeW1ib2wiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgMTQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtNyIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguOTkyNDc1LCA2MC4wNTU5NzApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTE4Ljk5MjQ3NSwgLTYwLjA1NTk3MCkgIiBwb2ludHM9IjMuMjgxMDAwOTcgNjcuNzg0MzU0NCAzLjI1NTg1Mjg0IDcxLjQxNzkxMDQgMzQuNzI5MDk3IDcxLjQxNzkxMDQgMzQuNzI5MDk3IDQ4LjY5NDAyOTkiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBhdGggZD0iTTEuNTAyMzM0NDQsMCBDMC42NzI2MTgwNCwwIC02LjM0Nzg0NDM5ZS0xNSwwLjY3MzA1NzM1NyAtNC42NjY0NTM3MmUtMTUsMS41MDM1Njc2NiBMOC44NjgxMTk5MWUtMTQsNDcuNjExOTQwMyBDMC4wOTAzOTk3MTIyLDQ5LjEzNjYxOTQgMC4wMTI3MDQyMDA3LDUwLjcyNjI1OCA0Ljg2ODEyNDMxLDUzLjMyODQ4MjggQzQuODY4MTI0MzEsNTMuMzI4NDgyOCAwLjExMDQ4MDM0Miw0OC43MTk0MjUzIDcuNTk2OTg5OTcsNDguNjk0MDI5OSBMNjAuNzc1OTE5Nyw0OC42OTQwMjk5IEw2MC43NzU5MTk3LDAgTDEuNTAyMzM0NDQsMCBaIiBpZD0iUmVjdGFuZ2xlLTYiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",from:2020}].sort((function(e,t){return e.from-t.from})),E=function(){var e=j();return r.default.createElement("div",{className:e.fullWidth},r.default.createElement("div",{className:e.container},y.map((function(e){return r.default.createElement(D,{key:e.name,src:e.icon,name:e.name,from:e.from})}))))},L=a(3482),w=a(598),f=(0,N.Z)({projectsHeroOuter:{marginTop:8,marginBottom:8,"&::after, &::before":{content:'""',display:"block",background:u.vB,height:8,width:"100%"},"&::before":{clipPath:"polygon(0% 0%, 0% 100%, 100% 100%)"},"&::after":{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%)"}},projectsHero:(i={display:"grid",gap:16},i[T.Z.downTo.tablet]={alignItems:"center",gridTemplateColumns:"1fr auto"},i[T.Z.upTo.tablet]={justifyItems:"center",gridTemplateColumns:"1fr",textAlign:"center"},i),projectsLinkContainer:{},projectsLink:{display:"inline-flex",alignItems:"center",padding:"10px 18px",paddingRight:20,border:"1px solid currentColor",borderRadius:0,gap:8,transformOrigin:"center","&::after":Object.assign({content:'""',display:"inline-block",width:"0.75em",height:"0.75em",borderTop:"2px solid currentColor",borderRight:"2px solid currentColor",transform:"rotate(45deg)"},(0,w.ZP)("transform")),"&:hover, &:focus, &:active":{"&::after":{transform:"translateX(3px) scaleY(0.92) scaleX(1.05) rotate(45deg)"}}}}),x=function(){var e=f();return r.default.createElement(g.Z,{title:"Home"},r.default.createElement(c.Z,{firstElement:!0,size:"huge",color:u.tE},r.default.createElement("h1",{className:"text-shout"},"David Wheatley"),r.default.createElement("p",{role:"doc-subtitle",className:"text-loud"},"A front-end web developer from West Sussex, UK")),r.default.createElement(o.Z,null,r.default.createElement("h2",{className:"text-louder"},"Hello!"),r.default.createElement("p",{className:"text-speak"},"Usually, people's portfolio websites are super fancy, well-crafted, but also bloated and heavy. Not mine. This site is statically generated from fully-fledged React into simple, performant, and powerful HTML, CSS and Javascript with Gatsby.js."),r.default.createElement("p",{className:"text-speak"},"I prefer ",r.default.createElement("strong",null,"simple websites"),". Websites which are responsive and perform well on all devices, no matter how old and slow. Websites are for everyone, so everyone should be able to use them, no matter their device or internet connection.")),r.default.createElement(c.Z,{className:e.projectsHeroOuter,innerClassName:e.projectsHero,color:u.vB},r.default.createElement("div",null,r.default.createElement("h2",{className:"text-loud"},"Take a peek at some projects that I've worked on over the years.")),r.default.createElement("div",{className:e.projectsLinkContainer},r.default.createElement(L.Z,{className:e.projectsLink,href:"/my-projects"},"My projects"))),r.default.createElement(o.Z,null,r.default.createElement("h2",{className:"text-louder"},"What do I know?"),r.default.createElement("p",{className:"text-speak"},"I've got experience with quite a lot of technologies, which is always handy. Over the years, I've experimented with lots of different frameworks and languages, both new and old, allowing me to quickly and easily adapt to new technologies when needed."),r.default.createElement(E,null)),r.default.createElement(o.Z,null,r.default.createElement("h2",{className:"text-louder"},"Qualifications"),r.default.createElement("p",{className:"text-speak"}),r.default.createElement("table",null,r.default.createElement("thead",null,r.default.createElement("tr",null,r.default.createElement("th",null,"Course"),r.default.createElement("th",null,"Grade"))),r.default.createElement("tbody",null,r.default.createElement("tr",null,r.default.createElement("td",null,"BTEC L3 Computing"),r.default.createElement("td",null,r.default.createElement("abbr",{title:"Distinction star"},"D*"),r.default.createElement("sup",{"aria-label":"predicted result"},"P"))),r.default.createElement("tr",null,r.default.createElement("td",null,"A-level Computer Science"),r.default.createElement("td",null,"A*",r.default.createElement("sup",{"aria-label":"predicted result"},"P"))),r.default.createElement("tr",null,r.default.createElement("td",null,"A-level Maths"),r.default.createElement("td",null,"B",r.default.createElement("sup",{"aria-label":"predicted result"},"P"))),r.default.createElement("tr",null,r.default.createElement("td",null,"GCSE Computer Science"),r.default.createElement("td",null,"9")),r.default.createElement("tr",null,r.default.createElement("td",null,"AQA L2 Further Maths Certificate"),r.default.createElement("td",null,"9")),r.default.createElement("tr",null,r.default.createElement("td",null,"GCSE English & Maths"),r.default.createElement("td",null,"9")),r.default.createElement("tr",null,r.default.createElement("td",null,"GCSE Business"),r.default.createElement("td",null,"9"))),r.default.createElement("tfoot",null,r.default.createElement("tr",null,r.default.createElement("td",{colSpan:2},"P - predicted result (still studying)"))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d779e06c85a832e1a372.js.map