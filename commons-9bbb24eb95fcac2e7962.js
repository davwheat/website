(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0NVa":function(e,t,r){e.exports={link:"link-module--link--2P1mM"}},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",u),f}}},"8Crm":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r("I5md"))&&n.__esModule?n:{default:n};var o=function(e,t){var r=(0,a.default)(e),n=(0,a.default)(t),o=(Math.max(r,n)+.05)/(Math.min(r,n)+.05);return Math.floor(100*o)/100};t.default=o},F3JL:function(e,t){function n(e){var t,r,n=e[0]/255,a=e[1]/255,o=e[2]/255,i=Math.min(n,a,o),u=Math.max(n,a,o),c=u-i;return u==i?t=0:n==u?t=(a-o)/c:a==u?t=2+(o-n)/c:o==u&&(t=4+(n-a)/c),(t=Math.min(60*t,360))<0&&(t+=360),r=(i+u)/2,[t,100*(u==i?0:r<=.5?c/(u+i):c/(2-u-i)),100*r]}function a(e){var t,r,n=e[0],a=e[1],o=e[2],i=Math.min(n,a,o),u=Math.max(n,a,o),c=u-i;return r=0==u?0:c/u*1e3/10,u==i?t=0:n==u?t=(a-o)/c:a==u?t=2+(o-n)/c:o==u&&(t=4+(n-a)/c),(t=Math.min(60*t,360))<0&&(t+=360),[t,r,u/255*1e3/10]}function o(e){var t=e[0],r=e[1],a=e[2];return[n(e)[0],100*(1/255*Math.min(t,Math.min(r,a))),100*(a=1-1/255*Math.max(t,Math.max(r,a)))]}function i(e){var t,r=e[0]/255,n=e[1]/255,a=e[2]/255;return[100*((1-r-(t=Math.min(1-r,1-n,1-a)))/(1-t)||0),100*((1-n-t)/(1-t)||0),100*((1-a-t)/(1-t)||0),100*t]}function u(e){return O[JSON.stringify(e)]}function c(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]}function l(e){var t=c(e),r=t[0],n=t[1],a=t[2];return n/=100,a/=108.883,r=(r/=95.047)>.008856?Math.pow(r,1/3):7.787*r+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(r-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function s(e){var t,r,n,a,o,i=e[0]/360,u=e[1]/100,c=e[2]/100;if(0==u)return[o=255*c,o,o];t=2*c-(r=c<.5?c*(1+u):c+u-c*u),a=[0,0,0];for(var l=0;l<3;l++)(n=i+1/3*-(l-1))<0&&n++,n>1&&n--,o=6*n<1?t+6*(r-t)*n:2*n<1?r:3*n<2?t+(r-t)*(2/3-n)*6:t,a[l]=255*o;return a}function f(e){var t=e[0]/60,r=e[1]/100,n=e[2]/100,a=Math.floor(t)%6,o=t-Math.floor(t),i=255*n*(1-r),u=255*n*(1-r*o),c=255*n*(1-r*(1-o));n*=255;switch(a){case 0:return[n,c,i];case 1:return[u,n,i];case 2:return[i,n,c];case 3:return[i,u,n];case 4:return[c,i,n];case 5:return[n,i,u]}}function d(e){var t,n,a,o,i=e[0]/360,u=e[1]/100,c=e[2]/100,l=u+c;switch(l>1&&(u/=l,c/=l),a=6*i-(t=Math.floor(6*i)),0!=(1&t)&&(a=1-a),o=u+a*((n=1-c)-u),t){default:case 6:case 0:r=n,g=o,b=u;break;case 1:r=o,g=n,b=u;break;case 2:r=u,g=n,b=o;break;case 3:r=u,g=o,b=n;break;case 4:r=o,g=u,b=n;break;case 5:r=n,g=u,b=o}return[255*r,255*g,255*b]}function h(e){var t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function p(e){var t,r,n,a=e[0]/100,o=e[1]/100,i=e[2]/100;return r=-.9689*a+1.8758*o+.0415*i,n=.0557*a+-.204*o+1.057*i,t=(t=3.2406*a+-1.5372*o+-.4986*i)>.0031308?1.055*Math.pow(t,1/2.4)-.055:t*=12.92,r=r>.0031308?1.055*Math.pow(r,1/2.4)-.055:r*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(t=Math.min(Math.max(0,t),1)),255*(r=Math.min(Math.max(0,r),1)),255*(n=Math.min(Math.max(0,n),1))]}function m(e){var t=e[0],r=e[1],n=e[2];return r/=100,n/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(r=r>.008856?Math.pow(r,1/3):7.787*r+16/116)-16,500*(t-r),200*(r-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function y(e){var t,r,n,a,o=e[0],i=e[1],u=e[2];return o<=8?a=(r=100*o/903.3)/100*7.787+16/116:(r=100*Math.pow((o+16)/116,3),a=Math.pow(r/100,1/3)),[t=t/95.047<=.008856?t=95.047*(i/500+a-16/116)/7.787:95.047*Math.pow(i/500+a,3),r,n=n/108.883<=.008859?n=108.883*(a-u/200-16/116)/7.787:108.883*Math.pow(a-u/200,3)]}function v(e){var t,r=e[0],n=e[1],a=e[2];return(t=360*Math.atan2(a,n)/2/Math.PI)<0&&(t+=360),[r,Math.sqrt(n*n+a*a),t]}function w(e){return p(y(e))}function T(e){var t,r=e[0],n=e[1];return t=e[2]/360*2*Math.PI,[r,n*Math.cos(t),n*Math.sin(t)]}function k(e){return E[e]}e.exports={rgb2hsl:n,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:i,rgb2keyword:u,rgb2xyz:c,rgb2lab:l,rgb2lch:function(e){return v(l(e))},hsl2rgb:s,hsl2hsv:function(e){var t=e[0],r=e[1]/100,n=e[2]/100;if(0===n)return[0,0,0];return[t,100*(2*(r*=(n*=2)<=1?n:2-n)/(n+r)),100*((n+r)/2)]},hsl2hwb:function(e){return o(s(e))},hsl2cmyk:function(e){return i(s(e))},hsl2keyword:function(e){return u(s(e))},hsv2rgb:f,hsv2hsl:function(e){var t,r,n=e[0],a=e[1]/100,o=e[2]/100;return t=a*o,[n,100*(t=(t/=(r=(2-a)*o)<=1?r:2-r)||0),100*(r/=2)]},hsv2hwb:function(e){return o(f(e))},hsv2cmyk:function(e){return i(f(e))},hsv2keyword:function(e){return u(f(e))},hwb2rgb:d,hwb2hsl:function(e){return n(d(e))},hwb2hsv:function(e){return a(d(e))},hwb2cmyk:function(e){return i(d(e))},hwb2keyword:function(e){return u(d(e))},cmyk2rgb:h,cmyk2hsl:function(e){return n(h(e))},cmyk2hsv:function(e){return a(h(e))},cmyk2hwb:function(e){return o(h(e))},cmyk2keyword:function(e){return u(h(e))},keyword2rgb:k,keyword2hsl:function(e){return n(k(e))},keyword2hsv:function(e){return a(k(e))},keyword2hwb:function(e){return o(k(e))},keyword2cmyk:function(e){return i(k(e))},keyword2lab:function(e){return l(k(e))},keyword2xyz:function(e){return c(k(e))},xyz2rgb:p,xyz2lab:m,xyz2lch:function(e){return v(m(e))},lab2xyz:y,lab2rgb:w,lab2lch:v,lch2lab:T,lch2xyz:function(e){return y(T(e))},lch2rgb:function(e){return w(T(e))}};var E={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},O={};for(var M in E)O[JSON.stringify(E[M])]=M},"FsU/":function(e,t,r){var n=r("F3JL"),a=function(){return new l};for(var o in n){a[o+"Raw"]=function(e){return function(t){return"number"==typeof t&&(t=Array.prototype.slice.call(arguments)),n[e](t)}}(o);var i=/(\w+)2(\w+)/.exec(o),u=i[1],c=i[2];(a[u]=a[u]||{})[c]=a[o]=function(e){return function(t){"number"==typeof t&&(t=Array.prototype.slice.call(arguments));var r=n[e](t);if("string"==typeof r||void 0===r)return r;for(var a=0;a<r.length;a++)r[a]=Math.round(r[a]);return r}}(o)}var l=function(){this.convs={}};l.prototype.routeSpace=function(e,t){var r=t[0];return void 0===r?this.getValues(e):("number"==typeof r&&(r=Array.prototype.slice.call(t)),this.setValues(e,r))},l.prototype.setValues=function(e,t){return this.space=e,this.convs={},this.convs[e]=t,this},l.prototype.getValues=function(e){var t=this.convs[e];if(!t){var r=this.space,n=this.convs[r];t=a[r][e](n),this.convs[e]=t}return t},["rgb","hsl","hsv","cmyk","keyword"].forEach((function(e){l.prototype[e]=function(t){return this.routeSpace(e,arguments)}})),e.exports=a},I5md:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r("SNo0"))&&n.__esModule?n:{default:n};function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.ignoreTransparency,n=void 0!==r&&r;if(!e)throw new TypeError("getRelativeLuminance() needs you to pass the color parameter.");var i=(0,a.default)(e),u=o(i.rgba,4),c=u[0],l=u[1],s=u[2],f=u[3];if(f<1&&!n)throw new TypeError("getRelativeLuminance() does not now how to handle transparency.");var d=[c,l,s].map((function(e){return e/255})),h=d.map((function(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),p=o(h,3),m=p[0],y=p[1],b=p[2],g=.2126*m+.7152*y+.0722*b;return g};t.default=i},Lixt:function(e,t,r){e.exports={pageSection:"Section-module--pageSection--q28mp",pad:"Section-module--pad--SxM-Z"}},PPOi:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("q1tI"),a=r.n(n),o=r("xVrI"),i=r.n(o),u=r("iuhU"),c=r("SNp1"),l=r.n(c);function s(e){var t=e.children,r=e.color,n=e.size,o=e.firstElement;return a.a.createElement("section",{className:Object(u.a)(i.a.hero,[o&&i.a.firstElement],["small"===n&&i.a.heroSmall],["normal"===n&&i.a.heroNormal],["large"===n&&i.a.heroLarge],["huge"===n&&i.a.heroHuge]),style:{backgroundColor:r,color:l()(r,["#000","#fff"])}},a.a.createElement("div",{className:i.a.heroInner},t))}s.defaultProps={color:"#000",size:"normal",firstElement:!1}},SNo0:function(e,t,r){var n=r("FsU/");e.exports=function(e){var t,r,a,o;if(t=/^((?:rgb|hs[lv]|cmyk|xyz|lab)a?)\s*\(([^\)]*)\)/.exec(e)){var i=t[1],u="cmyk"===(c=i.replace(/a$/,""))?4:3;r=n[c],a=t[2].replace(/^\s+|\s+$/g,"").split(/\s*,\s*/).map((function(e,t){return/%$/.test(e)&&t===u?parseFloat(e)/100:(/%$/.test(e),parseFloat(e))})),i===c&&a.push(1),o=void 0===a[u]?1:a[u],a=a.slice(0,u),r[c]=function(){return a}}else if(/^#[A-Fa-f0-9]+$/.test(e)){var c;u=(c=e.replace(/^#/,"")).length;r=n.rgb,a=(a=c.split(3===u?/(.)/:/(..)/)).filter(Boolean).map((function(e){return 3===u?parseInt(e+e,16):parseInt(e,16)})),o=1,r.rgb=function(){return a},a[0]||(a[0]=0),a[1]||(a[1]=0),a[2]||(a[2]=0)}else(r=n.keyword).keyword=function(){return e},a=e,o=1;var l={rgb:void 0,hsl:void 0,hsv:void 0,cmyk:void 0,keyword:void 0,hex:void 0};try{l.rgb=r.rgb(a)}catch(s){}try{l.hsl=r.hsl(a)}catch(s){}try{l.hsv=r.hsv(a)}catch(s){}try{l.cmyk=r.cmyk(a)}catch(s){}try{l.keyword=r.keyword(a)}catch(s){}return l.rgb&&(l.hex="#"+l.rgb.map((function(e){var t=e.toString(16);return 1===t.length?"0"+t:t})).join("")),l.rgb&&(l.rgba=l.rgb.concat(o)),l.hsl&&(l.hsla=l.hsl.concat(o)),l.hsv&&(l.hsva=l.hsv.concat(o)),l.cmyk&&(l.cmyka=l.cmyk.concat(o)),l}},SNp1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r("8Crm"))&&n.__esModule?n:{default:n};var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.reduce((function(t,r){return(0,a.default)(e,r)>(0,a.default)(e,t)?r:t}))};t.default=o},Szx7:function(e,t,r){},X4R9:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("zLVn"),a=r("q1tI"),o=r.n(a),i=r("Wbzz"),u=r("0NVa"),c=r.n(u),l=r("iuhU");function s(e){var t=e.href,r=e.children,a=e.className,u=Object(n.a)(e,["href","children","className"]);return o.a.createElement(i.Link,Object.assign({to:t,className:Object(l.a)(c.a.link,a)},u),r)}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var u,c,l,s;if(Array.isArray(t)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((u=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(r&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],i[l[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},iuhU:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},jyHa:function(e,t,r){e.exports={mainContent:"layout-module--mainContent--2bi0O"}},nmfA:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("X4R9"),i=r("xU+q"),u=r.n(i),c=function(e){e.siteTitle;return a.a.createElement("header",{className:u.a.header},a.a.createElement("div",{className:u.a.headerInnerContainer},a.a.createElement(o.a,{href:"/",className:u.a.name},"David Wheatley"),a.a.createElement("nav",{className:u.a.nav},a.a.createElement(o.a,{href:"/blog"},"Blog"))))};c.defaultProps={siteTitle:""};var l=c,s=r("y9Tk"),f=r.n(s);function d(){return a.a.createElement("footer",{className:f.a.container},a.a.createElement("main",{className:f.a.content},a.a.createElement("section",{className:f.a.about},a.a.createElement("p",{className:"text-speak-up"},"© ",(new Date).getFullYear()," David Wheatley"),a.a.createElement("p",{className:"text-whisper"},a.a.createElement("a",{href:"https://github.com/davwheat/personal-portfolio",rel:"noopener noreferrer"},"View this site on GitHub"))),a.a.createElement("nav",{className:f.a.nav},a.a.createElement(o.a,{href:"/"},"Home"),a.a.createElement(o.a,{href:"/blog"},"Blog"),a.a.createElement(o.a,{href:"/my-work"},"Portfolio"),a.a.createElement("a",{href:"https://github.com/davwheat",rel:"noopener noreferrer"},"My GitHub"))))}var h=r("qhky"),p=r("Wbzz");function m(e){var t=e.description,r=e.lang,n=e.meta,o=e.title,i=Object(p.useStaticQuery)("63159454").site,u=t||i.siteMetadata.description;return a.a.createElement(h.a,{htmlAttributes:{lang:r},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(n)})}m.defaultProps={lang:"en",meta:[],description:""};var y=m,b=(r("wUCB"),r("jyHa")),g=r.n(b);r("Szx7"),t.a=function(e){var t=e.children,r=e.title;return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{title:r}),a.a.createElement(l,null),a.a.createElement("main",{className:g.a.mainContent},t),a.a.createElement(d,null))}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));var n,a,o,i,u=r("17x9"),c=r.n(u),l=r("8+s/"),s=r.n(l),f=r("bmMU"),d=r.n(f),h=r("q1tI"),p=r.n(h),m=r("6qGY"),y=r.n(m),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),k="cssText",E="href",O="http-equiv",M="innerHTML",S="itemprop",A="name",C="property",x="rel",j="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",L="defer",q="encodeSpecialCharacters",H="onChangeClientState",_="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),z=[w.NOSCRIPT,w.SCRIPT,w.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,w.TITLE),r=Q(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,N);return t||n||void 0},W=function(e){return Q(e,H)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||r===x&&"canonical"===e[r].toLowerCase()||c===x&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==M&&u!==k&&u!==S||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=y()({},n[u],a[u]);n[u]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},Z=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ce(w.BODY,n),ce(w.HTML,a),ue(f,d);var h={baseTag:le(w.BASE,r),linkTags:le(w.LINK,o),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,u),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,s)},p={},m={};Object.keys(h).forEach((function(e){var t=h[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(m[e]=h[e].oldTags)})),t&&t(),c(e,p,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(w.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===M)r.innerHTML=t.innerHTML;else if(n===k)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[p.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+J(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===M||r===k){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),p.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===M||e===k)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+J(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},he=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(w.BASE,t,n),bodyAttributes:de(b,r,n),htmlAttributes:de(g,a,n),link:de(w.LINK,o,n),meta:de(w.META,i,n),noscript:de(w.NOSCRIPT,u,n),script:de(w.SCRIPT,c,n),style:de(w.STYLE,l,n),title:de(w.TITLE,{title:f,titleAttributes:d},n)}},pe=s()((function(e){return{baseTag:G([E,I],e),bodyAttributes:$(b,e),defer:Q(e,L),encode:Q(e,q),htmlAttributes:$(g,e),linkTags:X(w.LINK,[x,E],e),metaTags:X(w.META,[A,T,O,C,S],e),noscriptTags:X(w.NOSCRIPT,[M],e),onChangeClientState:W(e),scriptTags:X(w.SCRIPT,[j,M],e),styleTags:X(w.STYLE,[k],e),title:K(e),titleAttributes:$(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),he)((function(){return null})),me=(a=pe,i=o=function(e){function t(){return F(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return D({},n,((t={})[r.type]=[].concat(n[r.type]||[],[D({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return D({},a,((t={})[n.type]=i,t.titleAttributes=D({},o),t));case w.BODY:return D({},a,{bodyAttributes:D({},o)});case w.HTML:return D({},a,{htmlAttributes:D({},o)})}return D({},a,((r={})[n.type]=D({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=D({},t);return Object.keys(e).forEach((function(t){var n;r=D({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(V(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=V(e,["children"]),n=D({},r);return t&&(n=this.mapChildrenToProps(t,n)),p.a.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(p.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=he({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,r("yLpj"))},t7TV:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("zLVn"),a=r("q1tI"),o=r.n(a),i=r("iuhU"),u=r("Lixt"),c=r.n(u);function l(e){var t=e.children,r=e.usePadding,a=Object(n.a)(e,["children","usePadding"]);return o.a.createElement("section",Object.assign({},a,{className:Object(i.a)(c.a.pageSection,[r&&c.a.pad])}),t)}},utDn:function(e){e.exports=JSON.parse('{"primaryRed":"#f04c63","primaryBlue":"#51c5dd","blueDark":"#0a4f70","neutralGrey":"#c6c4c4"}')},wUCB:function(e,t,r){},"xU+q":function(e,t,r){e.exports={header:"header-module--header--nJleS",name:"header-module--name--1a5b2",headerInnerContainer:"header-module--headerInnerContainer--18eqI",nav:"header-module--nav--2dybh"}},xVrI:function(e,t,r){e.exports={hero:"Hero-module--hero--2qMeE",heroInner:"Hero-module--heroInner--7r2fL",firstElement:"Hero-module--firstElement--2Qjis",heroSmall:"Hero-module--heroSmall--3HfKs",heroNormal:"Hero-module--heroNormal--1dIaY",heroLarge:"Hero-module--heroLarge--10hER",heroHuge:"Hero-module--heroHuge--8Ttj1"}},y9Tk:function(e,t,r){e.exports={container:"footer-module--container--2E5Y8",content:"footer-module--content--11DvS",about:"footer-module--about--1U_vi",nav:"footer-module--nav--20XRz"}},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=commons-9bbb24eb95fcac2e7962.js.map