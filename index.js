// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty,n=Object.prototype,a=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?o:function(e,t,r){var o,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(l.call(e,t)||c.call(e,t)?(o=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=o):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var f=t,_=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function d(e){return e!=e}function b(e,t){return d(e)||d(t)?NaN:e===t?_:p}function y(e){return d(e)?(t=NaN,function(){return t}):function(t){return d(t)?NaN:t===e?_:p};var t}f(b,"factory",{configurable:!1,enumerable:!1,writable:!1,value:y}),e.default=b,e.factory=y,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).logpdf={});
//# sourceMappingURL=index.js.map