"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(P,a){
var f=require('@stdlib/constants-float64-pinf/dist'),q=require('@stdlib/constants-float64-ninf/dist'),n=require('@stdlib/math-base-assert-is-nan/dist');function v(e,r){return n(e)||n(r)?NaN:e===r?f:q}a.exports=v
});var N=i(function(x,s){
var p=require('@stdlib/utils-constant-function/dist'),F=require('@stdlib/constants-float64-pinf/dist'),y=require('@stdlib/constants-float64-ninf/dist'),o=require('@stdlib/math-base-assert-is-nan/dist');function I(e){if(o(e))return p(NaN);return r;function r(t){return o(t)?NaN:t===e?F:y}}s.exports=I
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=u(),l=N();d(c,"factory",l);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
