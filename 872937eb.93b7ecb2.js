(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));n(0);var a=n(144);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const o={id:"adding-dependencies",title:"Adding Dependencies",sidebar_label:"Adding Dependencies"},i=[{value:"How to add modules to the project",id:"how-to-add-modules-to-the-project",children:[{value:"Module Structure",id:"module-structure",children:[]},{value:"Which <code>package.json</code> file to use",id:"which-packagejson-file-to-use",children:[]},{value:"Further Readings",id:"further-readings",children:[]}]}],l={rightToc:i},c="wrapper";function p({components:e,...t}){return Object(a.b)(c,r({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"how-to-add-modules-to-the-project"},"How to add modules to the project"),Object(a.b)("p",null,"You will need to add other modules to this boilerplate, depending on the requirements of your project. For example, you may want to add ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/brianc/node-postgres"}),"node-postgres")," to communicate with PostgreSQL database, or\n",Object(a.b)("a",r({parentName:"p"},{href:"http://www.material-ui.com/"}),"material-ui")," to reuse react UI components."),Object(a.b)("p",null,"\u26a0\ufe0f Please read the following section before installing any dependencies \u26a0\ufe0f"),Object(a.b)("h3",{id:"module-structure"},"Module Structure"),Object(a.b)("p",null,"This boilerplate uses a ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/electron-userland/electron-builder/wiki/Two-package.json-Structure"}),"two package.json structure"),". This means, you will have two ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," files."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"./package.json")," in the root of your project"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("inlineCode",{parentName:"li"},"./app/package.json")," inside ",Object(a.b)("inlineCode",{parentName:"li"},"app")," folder")),Object(a.b)("h3",{id:"which-packagejson-file-to-use"},"Which ",Object(a.b)("inlineCode",{parentName:"h3"},"package.json")," file to use"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Rule of thumb")," is: all modules go into ",Object(a.b)("inlineCode",{parentName:"p"},"./package.json")," except native modules, or modules with native dependencies or peer dependencies. Native modules, or packages with native dependencies should go into ",Object(a.b)("inlineCode",{parentName:"p"},"./app/package.json"),"."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If the module is native to a platform (like node-postgres), it should be listed under ",Object(a.b)("inlineCode",{parentName:"li"},"dependencies")," in ",Object(a.b)("inlineCode",{parentName:"li"},"./app/package.json")),Object(a.b)("li",{parentName:"ol"},"If a module is ",Object(a.b)("inlineCode",{parentName:"li"},"import"),"ed by another module, include it in ",Object(a.b)("inlineCode",{parentName:"li"},"dependencies")," in ",Object(a.b)("inlineCode",{parentName:"li"},"./package.json"),". See ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md"}),"this ESLint rule"),". Examples of such modules are ",Object(a.b)("inlineCode",{parentName:"li"},"material-ui"),", ",Object(a.b)("inlineCode",{parentName:"li"},"redux-form"),", and ",Object(a.b)("inlineCode",{parentName:"li"},"moment"),"."),Object(a.b)("li",{parentName:"ol"},"Otherwise, modules used for building, testing and debugging should be included in ",Object(a.b)("inlineCode",{parentName:"li"},"devDependencies")," in ",Object(a.b)("inlineCode",{parentName:"li"},"./package.json"),".")),Object(a.b)("h3",{id:"further-readings"},"Further Readings"),Object(a.b)("p",null,"See the wiki page, ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/wiki/Module-Structure----Two-package.json-Structure"}),"Module Structure\u2009\u2014\u2009Two package.json Structure")," to understand what is native module, the rationale behind two package.json structure and more."),Object(a.b)("p",null,"For an example app that uses this boilerplate and packages native dependencies, see ",Object(a.b)("a",r({parentName:"p"},{href:"https://github.com/amilajack/erb-sqlite-example"}),"erb-sqlite-example"),"."))}p.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a),o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),d=i(n),s=a,u=d[l+"."+s]||d[s]||p[s]||o;return n?r.a.createElement(u,Object.assign({},{ref:t},c,{components:n})):r.a.createElement(u,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);