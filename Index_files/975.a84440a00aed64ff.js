"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[975],{57190:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(94941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,f=r(o.useState(!1),2),s=f[0],d=f[1],p=r(o.useState(null),2),g=p[0],v=p[1];o.useEffect((function(){if(a){if(c||s)return;if(g&&g.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},l.push(n),u.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),u.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(g,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[g,c,n,t,s]);var y=o.useCallback((function(){d(!1)}),[]);return[v,s,y]};var o=n(67294),i=n(9311),a="function"===typeof IntersectionObserver,u=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95519:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultRenderAnnounceSlideMessage=t.default=void 0;var r,o=(r=n(67294))&&r.__esModule?r:{default:r};var i={position:"absolute",width:"1px",height:"1px",overflow:"hidden",padding:0,margin:"-1px",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0};t.defaultRenderAnnounceSlideMessage=function(e){var t=e.currentSlide,n=e.count;return"Slide ".concat(t+1," of ").concat(n)};var a=function(e){var t=e.message,n=e.ariaLive,r=void 0===n?"polite":n;return o.default.createElement("div",{"aria-live":r,"aria-atomic":"true",style:i,tabIndex:-1},t)};t.default=a},52294:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Carousel=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(67294)),i=p(n(45366)),a=p(n(95519)),u=n(78056),l=p(n(16971)),c=p(n(50299)),f=n(87353),s=n(42314),d=n(40418);function p(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e){var t=e,n=t.adaptiveHeight,r=t.adaptiveHeightAnimation,c=t.afterSlide,p=t.animation,g=t.autoplay,v=t.autoplayInterval,b=t.autoplayReverse,h=t.beforeSlide,S=t.cellAlign,O=t.cellSpacing,C=t.children,w=t.className,P=t.disableAnimation,j=t.dragging,M=t.dragThreshold,x=t.enableKeyboardControls,D=t.frameAriaLabel,A=t.innerRef,k=t.keyCodeConfig,E=t.onDrag,B=t.onDragEnd,_=t.onDragStart,T=t.onUserNavigation,R=t.pauseOnHover,N=t.renderAnnounceSlideMessage,I=t.scrollMode,L=t.slideIndex,H=t.slidesToScroll,W=t.slidesToShow,U=t.speed,z=t.style,F=t.swiping,V=t.wrapAround,X=t.zoomScale,$=o.default.Children.toArray(C).filter(Boolean),q=$.length,K="fade"===p?W:H,Z=m((0,o.useState)((function(){return(0,f.getDefaultSlideIndex)(L,q,W,K,S,b,I)})),2),G=Z[0],J=Z[1],Q=m((0,o.useState)(!1),2),Y=Q[0],ee=Q[1],te=m((0,o.useState)(!1),2),ne=te[0],re=te[1],oe=m((0,o.useState)(0),2),ie=oe[0],ae=oe[1],ue=m((0,o.useState)(0),2),le=ue[0],ce=ue[1],fe=(0,o.useRef)(null),se=(0,o.useRef)(0),de=(0,o.useRef)(null),pe=(0,o.useRef)(null),ge=(0,o.useRef)(),ve=(0,o.useRef)(null),ye=(0,o.useRef)(!0),be=(0,o.useCallback)((function(e){e&&e.querySelectorAll(".slider-list img").forEach((function(e){return e.setAttribute("draggable","false")})),de.current=e}),[]);(0,o.useEffect)((function(){return ye.current=!0,function(){ye.current=!1}}),[]);var me=A||pe,he=(0,o.useCallback)((function(e){if(de.current&&me.current){var t=(0,f.getBoundedIndex)(e,q),n=e!==G;n&&h(G,t);var r=de.current.getBoundingClientRect().left-me.current.getBoundingClientRect().left,o=de.current.offsetWidth,i=(0,u.getPercentOffsetForSlide)(t,q,W,S,V)/100*o;if(V){var a=o/3;e<0&&(i+=a),e>=q&&(i-=a)}if(ce(i-r),n)J(t),setTimeout((function(){ye.current&&c(t)}),P?40:U||500)}}),[c,h,me,S,G,P,U,q,W,V]),Se=(0,o.useCallback)((function(){var e=(0,f.getNextMoveIndex)(I,V,G,q,K,W,S);G!==e&&he(e)}),[S,G,he,K,I,q,W,V]),Oe=(0,o.useCallback)((function(){var e=(0,f.getPrevMoveIndex)(I,V,G,K,W,S);G!==e&&he(e)}),[S,G,he,K,I,W,V]),Ce=(0,o.useRef)(L);(0,o.useEffect)((function(){void 0===L||L===Ce.current||b||(he(L),Ce.current=L)}),[L,b,he]),(0,o.useEffect)((function(){var e=null;return Y&&(e=Date.now()),function(){null!==e&&null!==ve.current&&(ve.current+=Date.now()-e)}}),[Y]),(0,o.useEffect)((function(){if(g&&!Y){var e=null!==ve.current?v-(Date.now()-ve.current):v;ge.current=setTimeout((function(){ve.current=Date.now(),b?Oe():Se()}),e)}return g&&Y&&clearTimeout(ge.current),function(){clearTimeout(ge.current)}}),[Y,g,v,b,Oe,Se]);var we=(0,o.useRef)([]),Pe=function(e){if(ne&&me.current){re(!1);var t=0;if(we.current.length>1)for(var n=we.current[0],r=we.current[we.current.length-1],o=r.time-n.time,i=9*Math.abs((r.pos-n.pos)/o);Math.abs(i)>1;)t+=i,i*=.92;we.current=[];var a=Math.abs(ie)+Math.abs(t);B(e),fe.current=null,ae(0);var u=me.current.offsetWidth*Math.min(1,K/W),l=u*M;if(a<l)he(G);else{for(var c=W>=2*K?1+Math.floor((a-l)/u):1,s=G,d=0;d<c;d+=1)s=ie>0?(0,f.getNextMoveIndex)(I,V,s,q,K,W,S):(0,f.getPrevMoveIndex)(I,V,s,K,W,S);s!==G&&T(e),he(s)}}},je=(0,o.useCallback)((function(e){F&&de.current&&me.current&&(re(!0),se.current=de.current.getBoundingClientRect().left-me.current.getBoundingClientRect().left,_(e))}),[me,_,F]),Me=(0,o.useCallback)((function(e){if(ne){for(var t=null===fe.current,n=null!==fe.current?e-fe.current:0,r=ie+n,o=Date.now();we.current.length>0&&!(o-we.current[0].time<=100);)we.current.shift();we.current.push({pos:r,time:o}),t||ae(r),fe.current=e}}),[ne,ie]),xe=(0,o.useCallback)((function(e){if(ne&&me.current){_(e);var t=me.current.offsetWidth-e.touches[0].pageX;Me(t)}}),[ne,me,Me,_]),De=(0,o.useCallback)((function(e){j&&de.current&&me.current&&(re(!0),se.current=de.current.getBoundingClientRect().left-me.current.getBoundingClientRect().left,_(e))}),[me,j,_]),Ae=(0,o.useCallback)((function(e){if(ne&&me.current){E(e);var t=e.clientX-me.current.getBoundingClientRect().left,n=me.current.offsetWidth-t;Me(n)}}),[me,ne,Me,E]),ke=function(e){e.preventDefault(),Pe(e)},Ee=(0,o.useCallback)((function(){R&&ee(!0)}),[R]),Be=(0,o.useCallback)((function(){R&&ee(!1)}),[R]),_e=(0,s.useFrameHeight)(n,W,q),Te=_e.frameHeight,Re=_e.handleVisibleSlideHeightChange,Ne=_e.initializedAdaptiveHeight,Ie=function(e){return $.map((function(t,r){return o.default.createElement(i.default,{key:"".concat(e,"-").concat(r),count:q,currentSlide:G,index:r,isCurrentSlide:G===r,typeOfSlide:e,wrapAround:V,cellSpacing:O,animation:p,slidesToShow:W,speed:U,zoomScale:X,cellAlign:S,onVisibleSlideHeightChange:Re,adaptiveHeight:n,initializedAdaptiveHeight:Ne},t)}))};return o.default.createElement("div",{className:"slider-container",style:{position:"relative"},onMouseEnter:Ee,onMouseLeave:Be},o.default.createElement(a.default,{ariaLive:g&&!Y?"off":"polite",message:N({currentSlide:G,count:q})}),(0,l.default)(t,q,G,he,Se,Oe,K),o.default.createElement("div",{className:["slider-frame",w||""].join(" ").trim(),style:y({overflow:"hidden",width:"100%",position:"relative",outline:"none",height:Te,transition:r?"height 300ms ease-in-out":void 0,willChange:"height",userSelect:"none"},z),"aria-label":D,role:"region",tabIndex:x?0:-1,onKeyDown:x?function(e){var t=null;if(Object.keys(k).forEach((function(n){var r;null!==(r=k[n])&&void 0!==r&&r.includes(e.keyCode)&&(t=n)})),null!==t)switch(e.preventDefault(),e.stopPropagation(),t){case"nextSlide":T(e),Se();break;case"previousSlide":T(e),Oe();break;case"firstSlide":case"lastSlide":T(e);var n=(0,d.getDotIndexes)(q,K,I,W,V,S);he("firstSlide"===t?n[0]:n[n.length-1]);break;case"pause":ee((function(e){return!e}))}}:void 0,ref:me,onMouseUp:ke,onMouseDown:De,onMouseMove:Ae,onMouseLeave:ke,onTouchStart:je,onTouchEnd:Pe,onTouchMove:xe},o.default.createElement(u.SliderList,{animationDistance:le,cellAlign:S,currentSlide:G,disableEdgeSwiping:t.disableEdgeSwiping,draggedOffset:se.current-ie,disableAnimation:P,easing:t.easing,edgeEasing:t.edgeEasing,isDragging:ne,ref:be,scrollMode:I,animation:p,slideCount:q,slidesToScroll:K,slidesToShow:W,speed:U,wrapAround:V},V?Ie("prev-cloned"):null,Ie(),V?Ie("next-cloned"):null)))};t.Carousel=S,S.defaultProps=c.default;var O=S;t.default=O},16132:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getControlContainerStyles=void 0;var r=n(1916);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={position:"absolute",display:"flex",zIndex:1,top:0,left:0,bottom:0,right:0};t.getControlContainerStyles=function(e){return i(i({},function(e){var t,n;switch(e){case r.Positions.TopLeft:case r.Positions.TopCenter:case r.Positions.TopRight:t="flex-start";break;case r.Positions.CenterLeft:case r.Positions.CenterCenter:case r.Positions.CenterRight:t="center";break;case r.Positions.BottomLeft:case r.Positions.BottomCenter:case r.Positions.BottomRight:t="flex-end"}switch(e){case r.Positions.TopLeft:case r.Positions.CenterLeft:case r.Positions.BottomLeft:n="flex-start";break;case r.Positions.TopCenter:case r.Positions.CenterCenter:case r.Positions.BottomCenter:n="center";break;case r.Positions.TopRight:case r.Positions.CenterRight:case r.Positions.BottomRight:n="flex-end"}return{alignItems:t,justifyContent:n}}(e)),u)}},16971:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(67294)),i=n(16132),a=n(40418),u=n(1916);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=[{funcName:"renderTopLeftControls",key:u.Positions.TopLeft},{funcName:"renderTopCenterControls",key:u.Positions.TopCenter},{funcName:"renderTopRightControls",key:u.Positions.TopRight},{funcName:"renderCenterLeftControls",key:u.Positions.CenterLeft},{funcName:"renderCenterCenterControls",key:u.Positions.CenterCenter},{funcName:"renderCenterRightControls",key:u.Positions.CenterRight},{funcName:"renderBottomLeftControls",key:u.Positions.BottomLeft},{funcName:"renderBottomCenterControls",key:u.Positions.BottomCenter},{funcName:"renderBottomRightControls",key:u.Positions.BottomRight}],p=function(e,t,n,r,u,l,c){if(e.withoutControls)return null;var s=f(f({},e),{},{currentSlide:n,slideCount:t}),p=(0,a.nextButtonDisabled)(s),g=(0,a.prevButtonDisabled)(s),v=(0,a.getDotIndexes)(t,c,e.scrollMode,e.slidesToShow,e.wrapAround,e.cellAlign);return d.map((function(a){var s;return e[a.funcName]&&"function"===typeof e[a.funcName]?o.default.createElement("div",{key:a.funcName,style:f(f({},(0,i.getControlContainerStyles)(a.key)),{},{pointerEvents:"none"})},o.default.createElement("div",{className:["slider-control-".concat(a.key.toLowerCase()),e.defaultControlsConfig.containerClassName||""].join(" ").trim(),style:{pointerEvents:"auto"}},null===(s=e[a.funcName])||void 0===s?void 0:s.call(e,{cellAlign:e.cellAlign,cellSpacing:e.cellSpacing,currentSlide:n,defaultControlsConfig:e.defaultControlsConfig||{},pagingDotsIndices:v,goToSlide:r,nextDisabled:p,nextSlide:u,onUserNavigation:e.onUserNavigation,previousDisabled:g,previousSlide:l,scrollMode:e.scrollMode,slideCount:t,slidesToScroll:c,slidesToShow:e.slidesToShow||1,vertical:e.vertical,wrapAround:e.wrapAround}))):o.default.createElement(o.Fragment,{key:a.funcName})}))};t.default=p},50299:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(67294))&&r.__esModule?r:{default:r},i=n(1916),a=n(40418);var u=function(e){return Math.pow(e-1,3)+1},l={adaptiveHeight:!1,adaptiveHeightAnimation:!0,afterSlide:function(){},autoplay:!1,autoplayInterval:3e3,autoplayReverse:!1,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,defaultControlsConfig:{},disableAnimation:!1,disableEdgeSwiping:!1,dragging:!0,dragThreshold:.5,easing:u,edgeEasing:u,enableKeyboardControls:!1,frameAriaLabel:"carousel-slider",keyCodeConfig:{nextSlide:[39,68,38,87],previousSlide:[37,65,40,83],firstSlide:[81],lastSlide:[69],pause:[32]},onDragStart:function(){},onDrag:function(){},onDragEnd:function(){},onUserNavigation:function(){},pauseOnHover:!0,renderAnnounceSlideMessage:n(95519).defaultRenderAnnounceSlideMessage,renderBottomCenterControls:function(e){return o.default.createElement(a.PagingDots,e)},renderCenterLeftControls:function(e){return o.default.createElement(a.PreviousButton,e)},renderCenterRightControls:function(e){return o.default.createElement(a.NextButton,e)},scrollMode:i.ScrollMode.page,slidesToScroll:1,slidesToShow:1,speed:500,style:{},swiping:!0,vertical:!1,withoutControls:!1,wrapAround:!1,children:o.default.createElement(o.default.Fragment,null)};t.default=l},40418:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.prevButtonDisabled=t.nextButtonDisabled=t.getDotIndexes=t.PreviousButton=t.PagingDots=t.NextButton=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,n&&n.set(e,o);return o}(n(67294)),i=n(1916),a=n(87353);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,textTransform:"uppercase",opacity:e?.3:1,cursor:e?"not-allowed":"pointer"}};t.prevButtonDisabled=function(e){var t=e.cellAlign,n=e.currentSlide,r=e.slidesToShow;return!e.wrapAround&&(0===n||"right"===t&&n<=r-1)};t.PreviousButton=function(e){var t=e.previousSlide,n=e.defaultControlsConfig,r=n.prevButtonClassName,i=n.prevButtonStyle,a=void 0===i?{}:i,u=n.prevButtonText,l=n.prevButtonOnClick,f=e.onUserNavigation,d=e.previousDisabled;return o.default.createElement("button",{className:r,style:c(c({},s(d)),a),disabled:d,onClick:function(e){null===l||void 0===l||l(e),e.defaultPrevented||(f(e),e.preventDefault(),t())},"aria-label":"previous",type:"button"},u||"Prev")};t.nextButtonDisabled=function(e){var t=e.cellAlign,n=e.currentSlide,r=e.slideCount,o=e.slidesToShow;return!e.wrapAround&&(n>=r-1||"left"===t&&n>=r-o)};t.NextButton=function(e){var t=e.nextSlide,n=e.defaultControlsConfig,r=n.nextButtonClassName,i=n.nextButtonStyle,a=void 0===i?{}:i,u=n.nextButtonText,l=n.nextButtonOnClick,f=e.nextDisabled,d=e.onUserNavigation;return o.default.createElement("button",{className:r,style:c(c({},s(f)),a),disabled:f,onClick:function(e){null===l||void 0===l||l(e),e.defaultPrevented||(d(e),e.preventDefault(),t())},"aria-label":"next",type:"button"},u||"Next")};t.getDotIndexes=function(e,t,n,r,o,a){var u=[],l=t<=0?1:t;if(o){for(var c=0;c<e;c+=l)u.push(c);return u}if("center"===a){for(var f=0;f<e-1;f+=l)u.push(f);return e>0&&u.push(e-1),u}if("left"===a){if(r>=e)return[0];for(var s=e-r,d=0;d<s;d+=l)u.push(d);return n===i.ScrollMode.remainder?u.push(s):u.push(u[u.length-1]+l),u}if("right"===a){if(r>=e)return[e-1];var p=r-1;if(n===i.ScrollMode.remainder){for(var g=p;g<e-1;g+=l)u.push(g);u.push(e-1)}else{for(var v=e-1;v>p;v-=l)u.push(v);u.push(u[u.length-1]-l),u.reverse()}return u}return u};t.PagingDots=function(e){var t=e.pagingDotsIndices,n=e.defaultControlsConfig,r=n.pagingDotsContainerClassName,i=n.pagingDotsClassName,u=n.pagingDotsStyle,l=void 0===u?{}:u,f=n.pagingDotsOnClick,s=e.currentSlide,d=e.onUserNavigation,p=e.slideCount,g=e.goToSlide,v=(0,o.useCallback)((function(e){return{cursor:"pointer",opacity:e?1:.5,background:"transparent",border:"none",fill:"black"}}),[]),y=(0,a.getBoundedIndex)(s,p);return o.default.createElement("ul",{className:r,style:{position:"relative",top:-10,display:"flex",margin:0,padding:0,listStyleType:"none"}},t.map((function(e,n){var r=y===e||y<e&&(0===n||y>t[n-1]);return o.default.createElement("li",{key:e,className:r?"paging-item active":"paging-item"},o.default.createElement("button",{className:i,type:"button",style:c(c({},v(r)),l),onClick:function(t){null===f||void 0===f||f(t),t.defaultPrevented||(d(t),g(e))},"aria-label":"slide ".concat(e+1," bullet"),"aria-selected":r},o.default.createElement("svg",{className:"paging-dot",width:"6",height:"6","aria-hidden":"true",focusable:"false",viewBox:"0 0 6 6"},o.default.createElement("circle",{cx:"3",cy:"3",r:"3"}))))})))}},42314:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.useFrameHeight=void 0;var r=n(67294),o=n(53771);function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.useFrameHeight=function(e,t,n){var u=a((0,o.useStateWithRef)([]),3),l=u[0],c=u[1],f=u[2],s=a((0,r.useState)(!1),2),d=s[0],p=s[1];return{handleVisibleSlideHeightChange:(0,r.useCallback)((function(e,r){var o,a=f.current;o=null===r?a.filter((function(t){return t.slideIndex!==e})):[].concat(i(a),[{slideIndex:e,height:r}]),c(o),o.length>=Math.min(n,Math.ceil(t))&&p(!0)}),[n,c,t,f]),frameHeight:(0,r.useMemo)((function(){if(e){if(!d)return"auto";var t=Math.max.apply(Math,[0].concat(i(l.map((function(e){return e.height})))));return"".concat(t,"px")}return"auto"}),[e,d,l]),initializedAdaptiveHeight:d}}},53771:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.useStateWithRef=void 0;var r=n(67294);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.useStateWithRef=function(e){var t=o((0,r.useState)(e),2),n=t[0],i=t[1],a=(0,r.useRef)(e);return[n,(0,r.useCallback)((function(e){a.current=e,i(e)}),[]),a]}},54923:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.useTween=void 0;var r=n(67294);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){u=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.useTween=function(e,t,n,i){var a=o((0,r.useState)(1),2),u=a[0],l=a[1],c=(0,r.useRef)(Date.now()),f=(0,r.useRef)(),s=(0,r.useRef)(!0),d=(0,r.useRef)(null),p=null===d.current||d.current===n||i?u:0;return(0,r.useEffect)((function(){if(d.current=n,s.current)s.current=!1;else if(!i){c.current=Date.now(),l(0);return function t(){f.current=requestAnimationFrame((function(){var n=Date.now(),r=Math.min(1,(n-c.current)/e);l(r),r<1?t():f.current=void 0}))}(),function(){void 0!==f.current&&(cancelAnimationFrame(f.current),l(1))}}}),[n,e,i]),{isAnimating:1!==p,value:t(p)}}},33752:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r={NextButton:!0,PreviousButton:!0,PagingDots:!0};Object.defineProperty(t,"NextButton",{enumerable:!0,get:function(){return a.NextButton}}),Object.defineProperty(t,"PagingDots",{enumerable:!0,get:function(){return a.PagingDots}}),Object.defineProperty(t,"PreviousButton",{enumerable:!0,get:function(){return a.PreviousButton}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.Carousel}});var o=n(52294),i=n(1916);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||e in t&&t[e]===i[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))}));var a=n(40418)},45366:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}o.default=e,n&&n.set(e,o);return o}(n(67294)),i=n(87353);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}var u=function(e,t,n,r,o,i,a,u,l,c){var f=function(e,t){return"".concat(t?100/(3*e):100/e,"%")}(e,r),s=n?1:0,d="fade"===i?200:500,p="auto";return l&&(p=c?"100%":n?"auto":"0"),{width:f,flex:1,height:p,padding:"0 ".concat(o?o/2:0,"px"),transition:i?"".concat(a||d,"ms ease 0s"):void 0,transform:"zoom"===i?"scale(".concat(t&&n?1:u||.85,")"):void 0,opacity:"fade"===i?s:1}},l=function(e){var t=e.count,n=e.children,r=e.currentSlide,a=e.index,l=e.isCurrentSlide,c=e.typeOfSlide,f=e.wrapAround,s=e.cellSpacing,d=e.animation,p=e.speed,g=e.slidesToShow,v=e.zoomScale,y=e.cellAlign,b=e.onVisibleSlideHeightChange,m=e.adaptiveHeight,h=e.initializedAdaptiveHeight,S=f?function(e,t,n){return"prev-cloned"===n?e-t:"next-cloned"===n?e+t:e}(a,t,c):a,O=(0,i.isSlideVisible)(r,S,g,y),C=(0,o.useRef)(null),w=(0,o.useRef)(!1);(0,o.useEffect)((function(){var e=C.current;if(e){var t,n=null===(t=e.getBoundingClientRect())||void 0===t?void 0:t.height;O?e.removeAttribute("inert"):e.setAttribute("inert","true");var r=w.current;O&&!r?b(S,n):!O&&r&&b(S,null),w.current=O}}),[m,S,O,b,g]);var P=l&&O?" slide-current":"";return o.default.createElement("div",{ref:C,className:"slide".concat(P).concat(c?" ".concat(c):"").concat(O?" slide-visible":""),style:u(t,l,O,f,s,d,p,v,m,h)},n)};t.default=l},78056:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getPercentOffsetForSlide=t.SliderList=void 0;var r,o=(r=n(67294))&&r.__esModule?r:{default:r},i=n(40418),a=n(54923);var u=function(e,t,n,r,o){var i=o?3*t:t,a=100/i,u=o?-100/3:0;"right"===r&&n>1&&(u+=a*(n-1));"center"===r&&n>1&&(u+=a*((n-1)/2));return u-100/i*e};t.getPercentOffsetForSlide=u;var l=o.default.forwardRef((function(e,t){var n=e.animation,r=e.animationDistance,l=e.cellAlign,c=e.children,f=e.currentSlide,s=e.disableAnimation,d=e.disableEdgeSwiping,p=e.draggedOffset,g=e.easing,v=e.edgeEasing,y=e.isDragging,b=e.scrollMode,m=e.slideCount,h=e.slidesToScroll,S=e.slidesToShow,O=e.speed,C=e.wrapAround,w="".concat(100*(C?3*m:m)/S,"%"),P=[m,S,l,C],j=(0,i.getDotIndexes)(m,h,b,S,C,l),M="".concat(p,"px");if(y&&d&&!C){var x=[j[0],j[j.length-1]].map((function(e){return u.apply(void 0,[e].concat(P))}));M="clamp(".concat(x[1],"%, ").concat(p,"px, ").concat(x[0],"%)")}var D,A=u.apply(void 0,[f].concat(P)),k=!d&&!C&&(f===j[0]&&r<0||f===j[j.length-1]&&r>0),E=(0,a.useTween)(O,k?v:g,f+r,y||s||"fade"===n),B=E.value,_=E.isAnimating;if(y||0!==A||_)if(y)D="translateX(".concat(M,")");else{var T=_?(1-B)*r:0;D="translateX(calc(".concat(A,"% - ").concat(T,"px))")}return o.default.createElement("div",{ref:t,className:"slider-list",style:{width:w,textAlign:"left",userSelect:"auto",transform:D,display:"flex"}},c)}));t.SliderList=l,l.displayName="SliderList"},1916:function(e,t){var n,r,o,i;Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollMode=t.Positions=t.Directions=t.Alignment=void 0,t.Alignment=n,function(e){e.Center="center",e.Right="right",e.Left="left"}(n||(t.Alignment=n={})),t.Directions=r,function(e){e.Next="next",e.Prev="prev",e.Up="up",e.Down="down"}(r||(t.Directions=r={})),t.Positions=o,function(e){e.TopLeft="TopLeft",e.TopCenter="TopCenter",e.TopRight="TopRight",e.CenterLeft="CenterLeft",e.CenterCenter="CenterCenter",e.CenterRight="CenterRight",e.BottomLeft="BottomLeft",e.BottomCenter="BottomCenter",e.BottomRight="BottomRight"}(o||(t.Positions=o={})),t.ScrollMode=i,function(e){e.page="page",e.remainder="remainder"}(i||(t.ScrollMode=i={}))},87353:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isSlideVisible=t.getPrevMoveIndex=t.getNextMoveIndex=t.getDefaultSlideIndex=t.getBoundedIndex=void 0;var r=n(40418),o=n(1916);t.isSlideVisible=function(e,t,n,r){return"left"===r?t<e+n&&t>e-1:"center"===r?t>e-n/2-.5&&t<=e||t>e&&t<e+n/2+.5:"right"===r&&(t<e+1&&t>e-n)};t.getNextMoveIndex=function(e,t,n,r,i,a,u){return t?n+i:n>=r-1||"left"===u&&n>=r-a?n:e===o.ScrollMode.remainder&&"left"===u?Math.min(n+i,r-a):Math.min(n+i,r-1)};t.getPrevMoveIndex=function(e,t,n,r,i,a){return t?n-r:n<=0||"right"===a&&n<=i-1?n:e===o.ScrollMode.remainder&&"right"===a?Math.max(n-r,i-1):Math.max(n-r,0)};t.getDefaultSlideIndex=function(e,t,n,o,i,a,u){if(void 0!==e)return e;var l=(0,r.getDotIndexes)(t,o,u,n,!1,i);return a?l[l.length-1]:l[0]};t.getBoundedIndex=function(e,t){return(e%t+t)%t}}}]);