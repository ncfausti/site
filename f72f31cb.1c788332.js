(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var s=n(1),a=n(9),o=(n(0),n(163)),r={id:"component-tests",title:"Component Tests",sidebar_label:"Component Tests"},i={id:"component-tests",title:"Component Tests",description:"Component tests in ERB use [Jest](https://jestjs.io) and [Enzyme](https://github.com/airbnb/enzyme). While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications.",source:"@site/docs/component-tests.md",permalink:"/docs/component-tests",sidebar_label:"Component Tests",sidebar:"docs",previous:{title:"Adding Assets",permalink:"/docs/adding-assets"},next:{title:"End to End Tests",permalink:"/docs/e2e-tests"}},c=[{value:"Writing Component Tests",id:"writing-component-tests",children:[{value:"Running Tests",id:"running-tests",children:[]},{value:"Snapshot Tests",id:"snapshot-tests",children:[]},{value:"Watching Tests",id:"watching-tests",children:[]}]}],p={rightToc:c},l="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(l,Object(s.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Component tests in ERB use ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"https://jestjs.io"}),"Jest")," and ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/airbnb/enzyme"}),"Enzyme"),". While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications."),Object(o.b)("h2",{id:"writing-component-tests"},"Writing Component Tests"),Object(o.b)("p",null,"By convention, all component test modules have the following filename suffix: ",Object(o.b)("inlineCode",{parentName:"p"},".spec.js"),". An example of test module filename would be ",Object(o.b)("inlineCode",{parentName:"p"},"Counter.spec.js"),"."),Object(o.b)("p",null,"We start by writing a function that will setup the actions of our component and importing the necessary modules:"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"import { spy } from 'sinon';\nimport React from 'react';\nimport Enzyme, { shallow } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\nimport renderer from 'react-test-renderer';\nimport Counter from '../../app/components/Counter';\n\nEnzyme.configure({ adapter: new Adapter() });\nfunction setup() {\n  const actions = {\n    increment: spy(),\n    incrementIfOdd: spy(),\n    incrementAsync: spy(),\n    decrement: spy()\n  };\n  const component = shallow(<Counter counter={1} {...actions} />);\n  return {\n    component,\n    actions,\n    buttons: component.find('button'),\n    p: component.find('.counter')\n  };\n}\n")),Object(o.b)("p",null,"Now we describe a set of tests with ",Object(o.b)("inlineCode",{parentName:"p"},"describe()")," and describe the test itself with ",Object(o.b)("inlineCode",{parentName:"p"},"it()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-js"}),"describe('Counter Component', () => {\n  it('should match exact snapshot', () => {\n    const { actions } = setup();\n    const counter = (\n      <div>\n        <Router>\n          <Counter counter={1} {...actions} />\n        </Router>\n      </div>\n    );\n    const tree = renderer.create(counter).toJSON();\n\n    expect(tree).toMatchSnapshot();\n  });\n});\n")),Object(o.b)("h3",{id:"running-tests"},"Running Tests"),Object(o.b)("p",null,"Tests can be run by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),"yarn test\n")),Object(o.b)("h3",{id:"snapshot-tests"},"Snapshot Tests"),Object(o.b)("p",null,"Snapshot tests are probably one of the most powerful features of Jest. With them, you can easily capture the current state of an object and test against that state in future executions of the test. For more details on this, see Jest's ",Object(o.b)("a",Object(s.a)({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing"}),"Snapshot Testing docs"),"."),Object(o.b)("p",null,"After adding a new test to ERB, run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test -u"),". This create a new snapshot if one does not exist already or it will update an existing one."),Object(o.b)("h3",{id:"watching-tests"},"Watching Tests"),Object(o.b)("p",null,"Suppose you are making change to React components and you want to see if components have broken while you are making changes. Running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test -w")," will run tests all the tests that are affected by the changes made to the React components."))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var s=n(0),a=n.n(s),o=a.a.createContext({}),r=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=r(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(s.forwardRef)((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&-1===t.indexOf(s)&&(n[s]=e[s]);return n}(e,["components","mdxType","originalType","parentName"]),l=r(n),u=s,m=l[i+"."+u]||l[u]||p[u]||o;return n?a.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(m,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);