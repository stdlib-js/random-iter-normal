// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import{isPrimitive as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.1-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function v(c,g,b){var x,y,w,P,L;if(!o(c)||d(c))throw new TypeError(u("0qD6v",c));if(!j(g))throw new TypeError(u("0qD72",g));if(arguments.length>2){if(!m(b))throw new TypeError(u("0qD2V",b));if(x=i({},b),h(x,"iter")){if(!l(x.iter))throw new TypeError(u("0qD2t","iter",x.iter))}else x.iter=p;w=a(c,g,x),void 0===x.prng&&!1!==x.copy&&(x.state=w.state)}else w=a(c,g),x={iter:p,state:w.state};return L=0,e(y={},"next",(function(){if(L+=1,P||L>x.iter)return{done:!0};return{value:w(),done:!1}})),e(y,"return",(function(e){if(P=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),x&&x.prng?(e(y,"seed",null),e(y,"seedLength",null),s(y,"state",n(null),r),e(y,"stateLength",null),e(y,"byteLength",null)):(t(y,"seed",(function(){return w.PRNG.seed})),t(y,"seedLength",(function(){return w.PRNG.seedLength})),s(y,"state",(function(){return w.PRNG.state}),(function(e){w.PRNG.state=e})),t(y,"stateLength",(function(){return w.PRNG.stateLength})),t(y,"byteLength",(function(){return w.PRNG.byteLength}))),e(y,"PRNG",w.PRNG),f&&e(y,f,(function(){return v(c,g,x)})),y}export{v as default};
//# sourceMappingURL=index.mjs.map
