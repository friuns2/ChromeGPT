"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{16848:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(85893),o=n(31996),l=n(29260),i=n.n(l);function u(e){e.website;var t,n,l=e.block;return(0,r.jsx)("section",{style:{backgroundColor:null===l||void 0===l?void 0:l.background},className:"flex-shrink-0",children:(0,r.jsx)("div",{className:(0,o.AK)((null===l||void 0===l?void 0:l.fullWidth)?"w-full":"container py-20","mx-auto"),children:(0,r.jsx)("div",{className:(0,o.AK)(!(null===l||void 0===l?void 0:l.fullWidth)&&"max-h-250 max-w-250 mx-auto"),children:(null===l||void 0===l||null===(t=l.media)||void 0===t?void 0:t.url)&&(0,r.jsx)("div",{className:(0,o.AK)("relative overflow-hidden",(null===l||void 0===l?void 0:l.fullWidth)?"w-full h-60 md:h-80 lg:h-120 xl:h-150":(n=null===l||void 0===l?void 0:l.aspectRatio,"1:1"===n?"aspect-h-1 aspect-w-1 ":"2:3"===n?"aspect-w-2 aspect-h-3":"3:2"===n?"aspect-w-3 aspect-h-2":"aspect-w-16 aspect-h-9"),!(null===l||void 0===l?void 0:l.fullWidth)&&function(e){return"small"===e?"rounded-sm":"medium"===e?"rounded-md":"large"===e?"rounded-lg":""}(null===l||void 0===l?void 0:l.cornerRadius)),children:(0,r.jsx)(i(),{src:null===l||void 0===l?void 0:l.media.url,alt:null===l||void 0===l?void 0:l.media.author,layout:"fill",objectFit:"cover",className:(0,o.AK)("w-full h-full object-center object-cover")})})})})})}},57190:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,d=e.disabled||!i,c=r(o.useState(!1),2),s=c[0],f=c[1],v=r(o.useState(null),2),h=v[0],m=v[1];o.useEffect((function(){if(i){if(d||s)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n),o=r.id,l=r.observer,i=r.elements;return i.set(e,t),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),u.delete(o);var t=a.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&a.splice(t,1)}}}(h,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(r)}}}),[h,d,n,t,s]);var p=o.useCallback((function(){f(!1)}),[]);return[m,s,p]};var o=n(67294),l=n(9311),i="function"===typeof IntersectionObserver,u=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);