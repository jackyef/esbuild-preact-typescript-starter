import{a as r,b as se,c as x,d as ae,e as ue,f as _,g as A,h as J,i as l,j as ne,k as ie,l as le}from"./chunk.E3UMOF7O.js";var k=Object.assign,C=(t,e,n)=>new Promise((o,s)=>{var a=c=>{try{d(n.next(c))}catch(m){s(m)}},B=c=>{try{d(n.throw(c))}catch(m){s(m)}},d=c=>c.done?o(c.value):Promise.resolve(c.value).then(a,B);d((n=n.apply(t,e)).next())});function w(t,e,n){var o,s,a;r.__&&r.__(t,e),s=(o=n===se)?null:n&&n.__k||e.__k,t=_(A,null,[t]),a=[],ie(e,(o?e:n||e).__k=t,s||x,x,e.ownerSVGElement!==void 0,n&&!o?[n]:s?null:e.childNodes.length?ae.slice.call(e.childNodes):null,a,n||x,o),le(a,t)}var V,W;function H(t,e,n){ue.p=e,V=t,W=n}typeof window!="undefined"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.5.7",r,{Fragment:A,Component:J});var u,i,S,p=0,h=[],M=r.__b,I=r.__r,L=r.diffed,q=r.__c,E=r.unmount;function g(t,e){r.__h&&r.__h(i,t,p||e),p=0;var n=i.__H||(i.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function v(t){return p=1,K(N,t)}function K(t,e,n){var o=g(u++,2);return o.t=t,o.__c||(o.__=[n?n(e):N(void 0,e),function(s){var a=o.t(o.__[0],s);o.__[0]!==a&&(o.__=[a,o.__[1]],o.__c.setState({}))}],o.__c=i),o.__}function O(t,e){var n=g(u++,3);!r.__s&&D(n.__H,e)&&(n.__=t,n.__H=e,i.__H.__h.push(n))}function T(t){return p=5,X(function(){return{current:t}},[])}function X(t,e){var n=g(u++,7);return D(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function G(){h.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(f),t.__H.__h.forEach(y),t.__H.__h=[]}catch(e){t.__H.__h=[],r.__e(e,t.__v)}}),h=[]}r.__b=function(t){i=null,M&&M(t)},r.__r=function(t){I&&I(t),u=0;var e=(i=t.__c).__H;e&&(e.__h.forEach(f),e.__h.forEach(y),e.__h=[])},r.diffed=function(t){L&&L(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(h.push(e)!==1&&S===r.requestAnimationFrame||((S=r.requestAnimationFrame)||function(n){var o,s=function(){clearTimeout(a),P&&cancelAnimationFrame(o),setTimeout(n)},a=setTimeout(s,100);P&&(o=requestAnimationFrame(s))})(G)),i=void 0},r.__c=function(t,e){e.some(function(n){try{n.__h.forEach(f),n.__h=n.__h.filter(function(o){return!o.__||y(o)})}catch(o){e.some(function(s){s.__h&&(s.__h=[])}),e=[],r.__e(o,n.__v)}}),q&&q(t,e)},r.unmount=function(t){E&&E(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(f)}catch(n){r.__e(n,e.__v)}};var P=typeof requestAnimationFrame=="function";function f(t){var e=i;typeof t.__c=="function"&&t.__c(),i=e}function y(t){var e=i;t.__c=t.__(),i=e}function D(t,e){return!t||t.length!==e.length||e.some(function(n,o){return n!==t[o]})}function N(t,e){return typeof e=="function"?e(t):e}var F="logo.D5W2Y7US.png",U=l`
  text-align: center;
  min-height: 100vh;
  background-color: #282c34;
`,R=l`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`,ye=l`
  color: #61dafb;
`,z=l`
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
  @keyframes App-logo-spin {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.06);
    }
  }
`,b=l`
  width: 80%;
`,Y=l`
  background: #333333;
  border-radius: 2rem;
  border: 1px solid #282c34;
  padding: 2rem;
  display: block;
  width: 30vw;
  margin: 2rem auto;
  text-align: left;
  @media only screen and (max-width: 600px) {
    pre {
      padding: 1.25rem;
      width: auto;
    }
  }
`,Z=l`
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  background: #484c54;
  color: white;
  font-size: 1.25rem;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`,j=l`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`,ee=t=>{let e=T(null),[n,o]=v(!1);O(()=>{let a=()=>C(void 0,null,function*(){console.log("loadChunk called"),e.current=(yield import("./components/SomeComponent.js")).default,o(!0)});a()},[]);let s=n?_(e.current,k({},t)):null;return s},te=({name:t=""})=>{let[e,n]=v(!1);return console.log("Welcome,",t),_("div",{className:U},_("header",{className:R},_("img",{src:F,className:z,alt:"logo"}),_("p",null,"Edit ",_("code",null,"src/App.jsx")," and save to reload."),_("p",null,"Welcome to esbuild + Preact + TypeScript starter!"),_("div",{className:b},_("pre",{className:Y},_("code",null,"$ yarn install"),_("br",null),_("code",null,"$ yarn build"),_("br",null),_("code",null,"$ yarn run")))),_("main",{className:j},_("div",{className:b},_("button",{className:Z,onClick:()=>n(!0)},"Click me to render a lazily loaded component"),e?_(ee,null):null)))},$=te,Q=()=>ne`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;H(_);var oe=document.getElementById("root");Q();w(_($,{name:"John Doe"}),oe);
//# sourceMappingURL=client.js.map
