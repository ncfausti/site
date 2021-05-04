(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[633],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,f=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5805:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(4034),a=t(9973),o=(t(7294),t(3905)),i={id:"packaging",title:"Packaging",sidebar_label:"Packaging"},l={unversionedId:"packaging",id:"packaging",isDocsHomePage:!1,title:"Packaging",description:"To package apps for the local platform:",source:"@site/docs/packaging.md",sourceDirName:".",slug:"/packaging",permalink:"/docs/packaging",version:"current",sidebar_label:"Packaging",frontMatter:{id:"packaging",title:"Packaging",sidebar_label:"Packaging"},sidebar:"docs",previous:{title:"Building",permalink:"/docs/building"},next:{title:"Adding Assets",permalink:"/docs/adding-assets"}},p=[{value:"Building to Multiple Platforms",id:"building-to-multiple-platforms",children:[]},{value:"Running the Production Version of Your App",id:"running-the-production-version-of-your-app",children:[]},{value:"Debugging the Production Build",id:"debugging-the-production-build",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To package apps for the local platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn package\n")),(0,o.kt)("p",null,"The packaged app will be inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," directory."),(0,o.kt)("h2",{id:"building-to-multiple-platforms"},"Building to Multiple Platforms"),(0,o.kt)("p",null,"First, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.electron.build/multi-platform-build"},"Multi Platform Build")," for dependencies."),(0,o.kt)("p",null,"Then,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn package-all\n")),(0,o.kt)("p",null,"To package apps with options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn package --[option]\n# Example: yarn package --mac\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can debug your production build with devtools by simply setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG_PROD")," env variable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cross-env DEBUG_PROD=true yarn package\n")),(0,o.kt)("h2",{id:"running-the-production-version-of-your-app"},"Running the Production Version of Your App"),(0,o.kt)("p",null,"Sometimes it is useful to run the production version of your app locally. This can be done by running ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,o.kt)("h2",{id:"debugging-the-production-build"},"Debugging the Production Build"),(0,o.kt)("p",null,"If your production app isn't working as expected, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG_PROD")," env variable to build the necessary files and then start the app. It isn't necessary to package the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn cross-env DEBUG_PROD=true yarn build\nyarn cross-env DEBUG_PROD=true yarn start\n")))}u.isMDXComponent=!0}}]);