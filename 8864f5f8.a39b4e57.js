(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var o=n(1),l=n(9),r=(n(0),n(163)),a={id:"dev-tools",title:"DevTools",sidebar_label:"DevTools"},c={id:"dev-tools",title:"DevTools",description:"### Toggle Chrome DevTools",source:"@site/docs/dev-tools.md",permalink:"/docs/dev-tools",sidebar_label:"DevTools",sidebar:"docs",previous:{title:"Tool Tips",permalink:"/docs/tool-tips"},next:{title:"FAQ",permalink:"/docs/faq"}},b=[{value:"Toggle Chrome DevTools",id:"toggle-chrome-devtools",children:[]},{value:"DevTools extension",id:"devtools-extension",children:[]}],i={rightToc:b},s="wrapper";function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(s,Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"toggle-chrome-devtools"},"Toggle Chrome DevTools"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"OS X: ",Object(r.b)("kbd",null,"Cmd")," ",Object(r.b)("kbd",null,"Alt")," ",Object(r.b)("kbd",null,"I")," or ",Object(r.b)("kbd",null,"F12")),Object(r.b)("li",{parentName:"ul"},"Linux: ",Object(r.b)("kbd",null,"Ctrl")," ",Object(r.b)("kbd",null,"Shift")," ",Object(r.b)("kbd",null,"I")," or ",Object(r.b)("kbd",null,"F12")),Object(r.b)("li",{parentName:"ul"},"Windows: ",Object(r.b)("kbd",null,"Ctrl")," ",Object(r.b)("kbd",null,"Shift")," ",Object(r.b)("kbd",null,"I")," or ",Object(r.b)("kbd",null,"F12"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"See ",Object(r.b)("a",Object(o.a)({parentName:"em"},{href:"https://github.com/sindresorhus/electron-debug"}),"electron-debug")," for more information.")),Object(r.b)("h3",{id:"devtools-extension"},"DevTools extension"),Object(r.b)("p",null,"This boilerplate includes the following DevTools extensions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/electron/devtron"}),"Devtron")," - Install via ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/sindresorhus/electron-debug"}),"electron-debug"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/react-devtools"}),"React Developer Tools")," - Install via ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GPMDP/electron-devtools-installer"}),"electron-devtools-installer"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/zalmoxisus/redux-devtools-extension"}),"Redux DevTools")," - Install via ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/GPMDP/electron-devtools-installer"}),"electron-devtools-installer"),".")),Object(r.b)("p",null,"You can find the tabs on Chrome DevTools."),Object(r.b)("p",null,"If you want to update extensions version, please set ",Object(r.b)("inlineCode",{parentName:"p"},"UPGRADE_EXTENSIONS")," env, just run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"UPGRADE_EXTENSIONS=1 yarn run dev\n\n# For Windows\nset UPGRADE_EXTENSIONS=1 && yarn run dev\n")))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var o=n(0),l=n.n(o),r=l.a.createContext({}),a=function(e){var t=l.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=a(e.components);return l.a.createElement(r.Provider,{value:t},e.children)};var b="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),s=a(n),u=o,d=s[c+"."+u]||s[u]||i[u]||r;return n?l.a.createElement(d,Object.assign({},{ref:t},b,{components:n})):l.a.createElement(d,Object.assign({},{ref:t},b))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<r;u++)a[u]=n[u];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);