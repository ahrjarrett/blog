(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{136:function(e,t,n){"use strict";n.r(t);n(48);var a=n(0),r=n.n(a),i=n(139),o=n(144),s=n(138),u=function(e){var t=e.data.site.siteMetadata,n=t.title,a=t.description;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:s.a}},r.a.createElement("h2",null,n),r.a.createElement("p",null,a))},l=function(){return r.a.createElement(i.StaticQuery,{query:"2107883300",render:function(e){return r.a.createElement(u,{data:e})},data:o})};n.d(t,"query",function(){return d});var c={display:"flex",flexDirection:"column",alignItems:"center",fontFamily:s.a},d="2689790146";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement("div",{style:c},t.map(function(e){var t=e.node.frontmatter;return r.a.createElement("div",{key:t.path},r.a.createElement(i.Link,{to:t.path},t.title))})))}},137:function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(141)),i=a(n(142)),o=a(n(7)),s=a(n(49)),u=a(n(50)),l=a(n(4)),c=a(n(0)),d=n(16),p=n(139);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=f(n);return c.default.createElement(d.Link,(0,i.default)({to:m,state:l,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:l,replace:h})),!0}},v))},t}(c.default.Component);v.propTypes=(0,i.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=v;t.default=m;var y=function(e,t){window.___navigate(f(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},138:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol"},139:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(137),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(140),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(45);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},140:function(e,t,n){var a;e.exports=(a=n(143))&&a.default||a},141:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},142:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},143:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(70),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Jarrett's blog",description:"This is where I write, mostly about programming-related things but sometimes books stuff also."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-e7e4f3f045d31214b436.js.map