(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[655],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,b=f.setTabGroupChoices,v=(0,r.useState)(s),h=v[0],k=v[1],y=r.Children.toArray(e.children),N=[];if(null!=m){var w=g[m];null!=w&&w!==h&&p.some((function(e){return e.value===w}))&&k(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=p[n].value;k(r),null!=m&&(b(m,r),setTimeout((function(){var e,n,r,a,i,o,c,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case c:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:E,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4540:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),o=n(1395),l=n(8215),c={id:"editor-configuration",title:"Editor Configuration",sidebar_label:"Editor Configuration"},u={unversionedId:"editor-configuration",id:"editor-configuration",isDocsHomePage:!1,title:"Editor Configuration",description:"<Tabs",source:"@site/docs/editor-configuration.md",sourceDirName:".",slug:"/editor-configuration",permalink:"/docs/editor-configuration",editUrl:"https://github.com/electron-react-boilerplate/site/edit/master/docs/editor-configuration.md",version:"current",sidebar_label:"Editor Configuration",frontMatter:{id:"editor-configuration",title:"Editor Configuration",sidebar_label:"Editor Configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Building",permalink:"/docs/building"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{defaultValue:"vscode",values:[{label:"VSCode",value:"vscode"},{label:"Atom",value:"atom"},{label:"Sublime",value:"sublime"},{label:"Other",value:"other"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"vscode",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"vscode will suggest installing the plugins recommended by electron-react-boilerplate. This is the recommended way of installing the recommended editor plugins"))),(0,i.kt)("p",null,"If you would like to manually install the plugins you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," executable. If you have ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),", you can run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"code --install-extension dbaeumer.vscode-eslint\ncode --install-extension dzannotti.vscode-babel-coloring\ncode --install-extension EditorConfig.EditorConfig\n"))),(0,i.kt)(l.Z,{value:"atom",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apm install editorconfig linter linter-eslint language-babel atom-typescript\n"))),(0,i.kt)(l.Z,{value:"sublime",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/editorconfig-sublime#readme"},"Editorconfig Integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://packagecontrol.io/packages/TypeScript"},"TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SublimeLinter/SublimeLinter3"},"Linting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/roadhump/SublimeLinter-eslint"},"ESLint Integration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/babel/babel-sublime"},"Syntax Highlighting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ternjs/tern_for_sublime"},"Autocompletion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://packagecontrol.io/packages/JavaScript%20%26%20NodeJS%20Snippets"},"Node Snippets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://packagecontrol.io/packages/ES6-Toolkit"},"ES6 Snippets")))),(0,i.kt)(l.Z,{value:"other",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://editorconfig.org/#download"},"Editorconfig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://eslint.org/docs/user-guide/integrations#editors"},"ESLint"))))))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);