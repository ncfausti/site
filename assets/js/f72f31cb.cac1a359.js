(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[484],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8210:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var o=n(4034),r=n(9973),s=(n(7294),n(3905)),a={id:"component-tests",title:"Component Tests",sidebar_label:"Component Tests"},i={unversionedId:"component-tests",id:"component-tests",isDocsHomePage:!1,title:"Component Tests",description:"Component tests in ERB use Jest and Enzyme. While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications.",source:"@site/docs/component-tests.md",sourceDirName:".",slug:"/component-tests",permalink:"/docs/component-tests",version:"current",sidebar_label:"Component Tests",frontMatter:{id:"component-tests",title:"Component Tests",sidebar_label:"Component Tests"},sidebar:"docs",previous:{title:"Styling",permalink:"/docs/styling"},next:{title:"Continuous Integration (CI)",permalink:"/docs/ci"}},p=[{value:"Writing Component Tests",id:"writing-component-tests",children:[{value:"Running Tests",id:"running-tests",children:[]},{value:"Snapshot Tests",id:"snapshot-tests",children:[]},{value:"Watching Tests",id:"watching-tests",children:[]}]}],c={toc:p};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Component tests in ERB use ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/airbnb/enzyme"},"Enzyme"),". While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications."),(0,s.kt)("h2",{id:"writing-component-tests"},"Writing Component Tests"),(0,s.kt)("p",null,"By convention, all component test modules have the following filename suffix: ",(0,s.kt)("inlineCode",{parentName:"p"},".spec.js"),". An example of test module filename would be ",(0,s.kt)("inlineCode",{parentName:"p"},"Counter.spec.js"),"."),(0,s.kt)("p",null,"We start by writing a function that will setup the actions of our component and importing the necessary modules:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="tests/Counter.spec.js"',title:'"tests/Counter.spec.js"'},"import { spy } from 'sinon';\nimport React from 'react';\nimport Enzyme, { shallow } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\nimport renderer from 'react-test-renderer';\nimport Counter from '../../app/components/Counter';\n\nEnzyme.configure({ adapter: new Adapter() });\nfunction setup() {\n  const actions = {\n    increment: spy(),\n    incrementIfOdd: spy(),\n    incrementAsync: spy(),\n    decrement: spy()\n  };\n  const component = shallow(<Counter counter={1} {...actions} />);\n  return {\n    component,\n    actions,\n    buttons: component.find('button'),\n    p: component.find('.counter')\n  };\n}\n")),(0,s.kt)("p",null,"Now we describe a set of tests with ",(0,s.kt)("inlineCode",{parentName:"p"},"describe()")," and describe the test itself with ",(0,s.kt)("inlineCode",{parentName:"p"},"it()"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="tests/Counter.spec.js"',title:'"tests/Counter.spec.js"'},"// --snip--\n\ndescribe('Counter Component', () => {\n  it('should match exact snapshot', () => {\n    const { actions } = setup();\n    const counter = (\n      <div>\n        <Router>\n          <Counter counter={1} {...actions} />\n        </Router>\n      </div>\n    );\n    const tree = renderer.create(counter).toJSON();\n\n    expect(tree).toMatchSnapshot();\n  });\n});\n")),(0,s.kt)("h3",{id:"running-tests"},"Running Tests"),(0,s.kt)("p",null,"Tests can be run by running ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn test"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn test\n")),(0,s.kt)("h3",{id:"snapshot-tests"},"Snapshot Tests"),(0,s.kt)("p",null,"Snapshot tests are probably one of the most powerful features of Jest. With them, you can easily capture the current state of an object and test against that state in future executions of the test. For more details on this, see Jest's ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/snapshot-testing"},"Snapshot Testing docs"),"."),(0,s.kt)("p",null,"After adding a new test to ERB, run ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn test -u"),". This create a new snapshot if one does not exist already or it will update an existing one."),(0,s.kt)("h3",{id:"watching-tests"},"Watching Tests"),(0,s.kt)("p",null,"Suppose you are making change to React components and you want to see if components have broken while you are making changes. Running ",(0,s.kt)("inlineCode",{parentName:"p"},"yarn test -w")," will run tests all the tests that are affected by the changes made to the React components."))}l.isMDXComponent=!0}}]);