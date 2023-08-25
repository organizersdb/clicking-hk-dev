function Wv(e,t){for(var i=0;i<t.length;i++){const o=t[i];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in e)){const a=Object.getOwnPropertyDescriptor(o,s);a&&Object.defineProperty(e,s,a.get?a:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();var Ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sm={exports:{}},al={},am={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Zv=Symbol.for("react.fragment"),Vv=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),Gv=Symbol.for("react.provider"),qv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),Qv=Symbol.for("react.suspense"),Xv=Symbol.for("react.memo"),Jv=Symbol.for("react.lazy"),Yp=Symbol.iterator;function e2(e){return e===null||typeof e!="object"?null:(e=Yp&&e[Yp]||e["@@iterator"],typeof e=="function"?e:null)}var lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},um=Object.assign,cm={};function er(e,t,i){this.props=e,this.context=t,this.refs=cm,this.updater=i||lm}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dm(){}dm.prototype=er.prototype;function Td(e,t,i){this.props=e,this.context=t,this.refs=cm,this.updater=i||lm}var Ld=Td.prototype=new dm;Ld.constructor=Td;um(Ld,er.prototype);Ld.isPureReactComponent=!0;var Qp=Array.isArray,fm=Object.prototype.hasOwnProperty,Md={current:null},pm={key:!0,ref:!0,__self:!0,__source:!0};function hm(e,t,i){var o,s={},a=null,u=null;if(t!=null)for(o in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(a=""+t.key),t)fm.call(t,o)&&!pm.hasOwnProperty(o)&&(s[o]=t[o]);var d=arguments.length-2;if(d===1)s.children=i;else if(1<d){for(var f=Array(d),h=0;h<d;h++)f[h]=arguments[h+2];s.children=f}if(e&&e.defaultProps)for(o in d=e.defaultProps,d)s[o]===void 0&&(s[o]=d[o]);return{$$typeof:ws,type:e,key:a,ref:u,props:s,_owner:Md.current}}function t2(e,t){return{$$typeof:ws,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ws}function n2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var Xp=/\/+/g;function $u(e,t){return typeof e=="object"&&e!==null&&e.key!=null?n2(""+e.key):t.toString(36)}function ma(e,t,i,o,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case ws:case Hv:u=!0}}if(u)return u=e,s=s(u),e=o===""?"."+$u(u,0):o,Qp(s)?(i="",e!=null&&(i=e.replace(Xp,"$&/")+"/"),ma(s,t,i,"",function(h){return h})):s!=null&&(Rd(s)&&(s=t2(s,i+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(Xp,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=o===""?".":o+":",Qp(e))for(var d=0;d<e.length;d++){a=e[d];var f=o+$u(a,d);u+=ma(a,t,i,f,s)}else if(f=e2(e),typeof f=="function")for(e=f.call(e),d=0;!(a=e.next()).done;)a=a.value,f=o+$u(a,d++),u+=ma(a,t,i,f,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function Gs(e,t,i){if(e==null)return e;var o=[],s=0;return ma(e,o,"","",function(a){return t.call(i,a,s++)}),o}function i2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var At={current:null},ga={transition:null},o2={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:ga,ReactCurrentOwner:Md};ye.Children={map:Gs,forEach:function(e,t,i){Gs(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return Gs(e,function(){t++}),t},toArray:function(e){return Gs(e,function(t){return t})||[]},only:function(e){if(!Rd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=er;ye.Fragment=Zv;ye.Profiler=Kv;ye.PureComponent=Td;ye.StrictMode=Vv;ye.Suspense=Qv;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o2;ye.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=um({},e.props),s=e.key,a=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,u=Md.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(f in t)fm.call(t,f)&&!pm.hasOwnProperty(f)&&(o[f]=t[f]===void 0&&d!==void 0?d[f]:t[f])}var f=arguments.length-2;if(f===1)o.children=i;else if(1<f){d=Array(f);for(var h=0;h<f;h++)d[h]=arguments[h+2];o.children=d}return{$$typeof:ws,type:e.type,key:s,ref:a,props:o,_owner:u}};ye.createContext=function(e){return e={$$typeof:qv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gv,_context:e},e.Consumer=e};ye.createElement=hm;ye.createFactory=function(e){var t=hm.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:Yv,render:e}};ye.isValidElement=Rd;ye.lazy=function(e){return{$$typeof:Jv,_payload:{_status:-1,_result:e},_init:i2}};ye.memo=function(e,t){return{$$typeof:Xv,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=ga.transition;ga.transition={};try{e()}finally{ga.transition=t}};ye.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ye.useCallback=function(e,t){return At.current.useCallback(e,t)};ye.useContext=function(e){return At.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return At.current.useDeferredValue(e)};ye.useEffect=function(e,t){return At.current.useEffect(e,t)};ye.useId=function(){return At.current.useId()};ye.useImperativeHandle=function(e,t,i){return At.current.useImperativeHandle(e,t,i)};ye.useInsertionEffect=function(e,t){return At.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return At.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return At.current.useMemo(e,t)};ye.useReducer=function(e,t,i){return At.current.useReducer(e,t,i)};ye.useRef=function(e){return At.current.useRef(e)};ye.useState=function(e){return At.current.useState(e)};ye.useSyncExternalStore=function(e,t,i){return At.current.useSyncExternalStore(e,t,i)};ye.useTransition=function(){return At.current.useTransition()};ye.version="18.2.0";am.exports=ye;var E=am.exports;const It=sl(E),wc=Wv({__proto__:null,default:It},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r2=E,s2=Symbol.for("react.element"),a2=Symbol.for("react.fragment"),l2=Object.prototype.hasOwnProperty,u2=r2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c2={key:!0,ref:!0,__self:!0,__source:!0};function mm(e,t,i){var o,s={},a=null,u=null;i!==void 0&&(a=""+i),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(u=t.ref);for(o in t)l2.call(t,o)&&!c2.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)s[o]===void 0&&(s[o]=t[o]);return{$$typeof:s2,type:e,key:a,ref:u,props:s,_owner:u2.current}}al.Fragment=a2;al.jsx=mm;al.jsxs=mm;sm.exports=al;var F=sm.exports,bc={},gm={exports:{}},en={},ym={exports:{}},vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var B=z.length;z.push(V);e:for(;0<B;){var J=B-1>>>1,se=z[J];if(0<s(se,V))z[J]=V,z[B]=se,B=J;else break e}}function i(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var V=z[0],B=z.pop();if(B!==V){z[0]=B;e:for(var J=0,se=z.length,pe=se>>>1;J<pe;){var ne=2*(J+1)-1,ie=z[ne],Q=ne+1,Le=z[Q];if(0>s(ie,B))Q<se&&0>s(Le,ie)?(z[J]=Le,z[Q]=B,J=Q):(z[J]=ie,z[ne]=B,J=ne);else if(Q<se&&0>s(Le,B))z[J]=Le,z[Q]=B,J=Q;else break e}}return V}function s(z,V){var B=z.sortIndex-V.sortIndex;return B!==0?B:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var f=[],h=[],v=1,g=null,x=3,P=!1,S=!1,b=!1,A=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var V=i(h);V!==null;){if(V.callback===null)o(h);else if(V.startTime<=z)o(h),V.sortIndex=V.expirationTime,t(f,V);else break;V=i(h)}}function C(z){if(b=!1,_(z),!S)if(i(f)!==null)S=!0,Z(M);else{var V=i(h);V!==null&&G(C,V.startTime-z)}}function M(z,V){S=!1,b&&(b=!1,w(N),N=-1),P=!0;var B=x;try{for(_(V),g=i(f);g!==null&&(!(g.expirationTime>V)||z&&!H());){var J=g.callback;if(typeof J=="function"){g.callback=null,x=g.priorityLevel;var se=J(g.expirationTime<=V);V=e.unstable_now(),typeof se=="function"?g.callback=se:g===i(f)&&o(f),_(V)}else o(f);g=i(f)}if(g!==null)var pe=!0;else{var ne=i(h);ne!==null&&G(C,ne.startTime-V),pe=!1}return pe}finally{g=null,x=B,P=!1}}var I=!1,R=null,N=-1,K=5,$=-1;function H(){return!(e.unstable_now()-$<K)}function ee(){if(R!==null){var z=e.unstable_now();$=z;var V=!0;try{V=R(!0,z)}finally{V?te():(I=!1,R=null)}}else I=!1}var te;if(typeof y=="function")te=function(){y(ee)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=ee,te=function(){q.postMessage(null)}}else te=function(){A(ee,0)};function Z(z){R=z,I||(I=!0,te())}function G(z,V){N=A(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){S||P||(S=!0,Z(M))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return i(f)},e.unstable_next=function(z){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var B=x;x=V;try{return z()}finally{x=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=x;x=z;try{return V()}finally{x=B}},e.unstable_scheduleCallback=function(z,V,B){var J=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?J+B:J):B=J,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=B+se,z={id:v++,callback:V,priorityLevel:z,startTime:B,expirationTime:se,sortIndex:-1},B>J?(z.sortIndex=B,t(h,z),i(f)===null&&z===i(h)&&(b?(w(N),N=-1):b=!0,G(C,B-J))):(z.sortIndex=se,t(f,z),S||P||(S=!0,Z(M))),z},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(z){var V=x;return function(){var B=x;x=V;try{return z.apply(this,arguments)}finally{x=B}}}})(vm);ym.exports=vm;var d2=ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m=E,Jt=d2;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xm=new Set,es={};function no(e,t){Ho(e,t),Ho(e+"Capture",t)}function Ho(e,t){for(es[e]=t,e=0;e<t.length;e++)xm.add(t[e])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=Object.prototype.hasOwnProperty,f2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jp={},eh={};function p2(e){return Ec.call(eh,e)?!0:Ec.call(Jp,e)?!1:f2.test(e)?eh[e]=!0:(Jp[e]=!0,!1)}function h2(e,t,i,o){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function m2(e,t,i,o){if(t===null||typeof t>"u"||h2(e,t,i,o))return!0;if(o)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ut(e,t,i,o,s,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Od(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Id,Od);xt[t]=new Ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Id,Od);xt[t]=new Ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Id,Od);xt[t]=new Ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Ut(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function zd(e,t,i,o){var s=xt.hasOwnProperty(t)?xt[t]:null;(s!==null?s.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(m2(t,i,s,o)&&(i=null),o||s===null?p2(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):s.mustUseProperty?e[s.propertyName]=i===null?s.type===3?!1:"":i:(t=s.attributeName,o=s.attributeNamespace,i===null?e.removeAttribute(t):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,o?e.setAttributeNS(o,t,i):e.setAttribute(t,i))))}var oi=_m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qs=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),So=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),bm=Symbol.for("react.context"),Ud=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),Nd=Symbol.for("react.memo"),ci=Symbol.for("react.lazy"),Em=Symbol.for("react.offscreen"),th=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var Ke=Object.assign,Du;function Ur(e){if(Du===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Du=t&&t[1]||""}return`
`+Du+e}var ju=!1;function Wu(e,t){if(!e||ju)return"";ju=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var o=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){o=h}e.call(t.prototype)}else{try{throw Error()}catch(h){o=h}e()}}catch(h){if(h&&o&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),a=o.stack.split(`
`),u=s.length-1,d=a.length-1;1<=u&&0<=d&&s[u]!==a[d];)d--;for(;1<=u&&0<=d;u--,d--)if(s[u]!==a[d]){if(u!==1||d!==1)do if(u--,d--,0>d||s[u]!==a[d]){var f=`
`+s[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=u&&0<=d);break}}}finally{ju=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Ur(e):""}function g2(e){switch(e.tag){case 5:return Ur(e.type);case 16:return Ur("Lazy");case 13:return Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 2:case 15:return e=Wu(e.type,!1),e;case 11:return e=Wu(e.type.render,!1),e;case 1:return e=Wu(e.type,!0),e;default:return""}}function kc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case So:return"Fragment";case Eo:return"Portal";case Sc:return"Profiler";case Ad:return"StrictMode";case Cc:return"Suspense";case Pc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bm:return(e.displayName||"Context")+".Consumer";case wm:return(e._context.displayName||"Context")+".Provider";case Ud:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nd:return t=e.displayName||null,t!==null?t:kc(e.type)||"Memo";case ci:t=e._payload,e=e._init;try{return kc(e(t))}catch{}}return null}function y2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(t);case 8:return t===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Si(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function v2(e){var t=Sm(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(u){o=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return o},setValue:function(u){o=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ys(e){e._valueTracker||(e._valueTracker=v2(e))}function Cm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),o="";return e&&(o=Sm(e)?e.checked?"true":"false":e.value),e=o,e!==i?(t.setValue(e),!0):!1}function Ma(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Tc(e,t){var i=t.checked;return Ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function nh(e,t){var i=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;i=Si(t.value!=null?t.value:i),e._wrapperState={initialChecked:o,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Pm(e,t){t=t.checked,t!=null&&zd(e,"checked",t,!1)}function Lc(e,t){Pm(e,t);var i=Si(t.value),o=t.type;if(i!=null)o==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mc(e,t.type,i):t.hasOwnProperty("defaultValue")&&Mc(e,t.type,Si(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ih(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Mc(e,t,i){(t!=="number"||Ma(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Nr=Array.isArray;function Uo(e,t,i,o){if(e=e.options,t){t={};for(var s=0;s<i.length;s++)t["$"+i[s]]=!0;for(i=0;i<e.length;i++)s=t.hasOwnProperty("$"+e[i].value),e[i].selected!==s&&(e[i].selected=s),s&&o&&(e[i].defaultSelected=!0)}else{for(i=""+Si(i),t=null,s=0;s<e.length;s++){if(e[s].value===i){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Rc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oh(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(j(92));if(Nr(i)){if(1<i.length)throw Error(j(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Si(i)}}function km(e,t){var i=Si(t.value),o=Si(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),o!=null&&(e.defaultValue=""+o)}function rh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ic(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qs,Lm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,o,s){MSApp.execUnsafeLocalFunction(function(){return e(t,i,o,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qs=Qs||document.createElement("div"),Qs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ts(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_2=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){_2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function Mm(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function Rm(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var o=i.indexOf("--")===0,s=Mm(i,t[i],o);i==="float"&&(i="cssFloat"),o?e.setProperty(i,s):e[i]=s}}var x2=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oc(e,t){if(t){if(x2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function zc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ac=null;function Fd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uc=null,No=null,Fo=null;function sh(e){if(e=Ss(e)){if(typeof Uc!="function")throw Error(j(280));var t=e.stateNode;t&&(t=fl(t),Uc(e.stateNode,e.type,t))}}function Im(e){No?Fo?Fo.push(e):Fo=[e]:No=e}function Om(){if(No){var e=No,t=Fo;if(Fo=No=null,sh(e),t)for(e=0;e<t.length;e++)sh(t[e])}}function zm(e,t){return e(t)}function Am(){}var Hu=!1;function Um(e,t,i){if(Hu)return e(t,i);Hu=!0;try{return zm(e,t,i)}finally{Hu=!1,(No!==null||Fo!==null)&&(Am(),Om())}}function ns(e,t){var i=e.stateNode;if(i===null)return null;var o=fl(i);if(o===null)return null;i=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(j(231,t,typeof i));return i}var Nc=!1;if(Jn)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{Nc=!1}function w2(e,t,i,o,s,a,u,d,f){var h=Array.prototype.slice.call(arguments,3);try{t.apply(i,h)}catch(v){this.onError(v)}}var jr=!1,Ra=null,Ia=!1,Fc=null,b2={onError:function(e){jr=!0,Ra=e}};function E2(e,t,i,o,s,a,u,d,f){jr=!1,Ra=null,w2.apply(b2,arguments)}function S2(e,t,i,o,s,a,u,d,f){if(E2.apply(this,arguments),jr){if(jr){var h=Ra;jr=!1,Ra=null}else throw Error(j(198));Ia||(Ia=!0,Fc=h)}}function io(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ah(e){if(io(e)!==e)throw Error(j(188))}function C2(e){var t=e.alternate;if(!t){if(t=io(e),t===null)throw Error(j(188));return t!==e?null:e}for(var i=e,o=t;;){var s=i.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){i=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===i)return ah(s),e;if(a===o)return ah(s),t;a=a.sibling}throw Error(j(188))}if(i.return!==o.return)i=s,o=a;else{for(var u=!1,d=s.child;d;){if(d===i){u=!0,i=s,o=a;break}if(d===o){u=!0,o=s,i=a;break}d=d.sibling}if(!u){for(d=a.child;d;){if(d===i){u=!0,i=a,o=s;break}if(d===o){u=!0,o=a,i=s;break}d=d.sibling}if(!u)throw Error(j(189))}}if(i.alternate!==o)throw Error(j(190))}if(i.tag!==3)throw Error(j(188));return i.stateNode.current===i?e:t}function Fm(e){return e=C2(e),e!==null?Bm(e):null}function Bm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bm(e);if(t!==null)return t;e=e.sibling}return null}var $m=Jt.unstable_scheduleCallback,lh=Jt.unstable_cancelCallback,P2=Jt.unstable_shouldYield,k2=Jt.unstable_requestPaint,it=Jt.unstable_now,T2=Jt.unstable_getCurrentPriorityLevel,Bd=Jt.unstable_ImmediatePriority,Dm=Jt.unstable_UserBlockingPriority,Oa=Jt.unstable_NormalPriority,L2=Jt.unstable_LowPriority,jm=Jt.unstable_IdlePriority,ll=null,$n=null;function M2(e){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:O2,R2=Math.log,I2=Math.LN2;function O2(e){return e>>>=0,e===0?32:31-(R2(e)/I2|0)|0}var Xs=64,Js=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function za(e,t){var i=e.pendingLanes;if(i===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,u=i&268435455;if(u!==0){var d=u&~s;d!==0?o=Fr(d):(a&=u,a!==0&&(o=Fr(a)))}else u=i&~s,u!==0?o=Fr(u):a!==0&&(o=Fr(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&s)&&(s=o&-o,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(o&4&&(o|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)i=31-Sn(t),s=1<<i,o|=e[i],t&=~s;return o}function z2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A2(e,t){for(var i=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-Sn(a),d=1<<u,f=s[u];f===-1?(!(d&i)||d&o)&&(s[u]=z2(d,t)):f<=t&&(e.expiredLanes|=d),a&=~d}}function Bc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wm(){var e=Xs;return Xs<<=1,!(Xs&4194240)&&(Xs=64),e}function Zu(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function bs(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Sn(t),e[t]=i}function U2(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<i;){var s=31-Sn(i),a=1<<s;t[s]=0,o[s]=-1,e[s]=-1,i&=~a}}function $d(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var o=31-Sn(i),s=1<<o;s&t|e[o]&t&&(e[o]|=t),i&=~s}}var Re=0;function Hm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zm,Dd,Vm,Km,Gm,$c=!1,ea=[],gi=null,yi=null,vi=null,is=new Map,os=new Map,fi=[],N2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(e,t){switch(e){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":os.delete(t.pointerId)}}function br(e,t,i,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:i,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Ss(t),t!==null&&Dd(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function F2(e,t,i,o,s){switch(t){case"focusin":return gi=br(gi,e,t,i,o,s),!0;case"dragenter":return yi=br(yi,e,t,i,o,s),!0;case"mouseover":return vi=br(vi,e,t,i,o,s),!0;case"pointerover":var a=s.pointerId;return is.set(a,br(is.get(a)||null,e,t,i,o,s)),!0;case"gotpointercapture":return a=s.pointerId,os.set(a,br(os.get(a)||null,e,t,i,o,s)),!0}return!1}function qm(e){var t=Di(e.target);if(t!==null){var i=io(t);if(i!==null){if(t=i.tag,t===13){if(t=Nm(i),t!==null){e.blockedOn=t,Gm(e.priority,function(){Vm(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ya(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var o=new i.constructor(i.type,i);Ac=o,i.target.dispatchEvent(o),Ac=null}else return t=Ss(i),t!==null&&Dd(t),e.blockedOn=i,!1;t.shift()}return!0}function ch(e,t,i){ya(e)&&i.delete(t)}function B2(){$c=!1,gi!==null&&ya(gi)&&(gi=null),yi!==null&&ya(yi)&&(yi=null),vi!==null&&ya(vi)&&(vi=null),is.forEach(ch),os.forEach(ch)}function Er(e,t){e.blockedOn===t&&(e.blockedOn=null,$c||($c=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,B2)))}function rs(e){function t(s){return Er(s,e)}if(0<ea.length){Er(ea[0],e);for(var i=1;i<ea.length;i++){var o=ea[i];o.blockedOn===e&&(o.blockedOn=null)}}for(gi!==null&&Er(gi,e),yi!==null&&Er(yi,e),vi!==null&&Er(vi,e),is.forEach(t),os.forEach(t),i=0;i<fi.length;i++)o=fi[i],o.blockedOn===e&&(o.blockedOn=null);for(;0<fi.length&&(i=fi[0],i.blockedOn===null);)qm(i),i.blockedOn===null&&fi.shift()}var Bo=oi.ReactCurrentBatchConfig,Aa=!0;function $2(e,t,i,o){var s=Re,a=Bo.transition;Bo.transition=null;try{Re=1,jd(e,t,i,o)}finally{Re=s,Bo.transition=a}}function D2(e,t,i,o){var s=Re,a=Bo.transition;Bo.transition=null;try{Re=4,jd(e,t,i,o)}finally{Re=s,Bo.transition=a}}function jd(e,t,i,o){if(Aa){var s=Dc(e,t,i,o);if(s===null)tc(e,t,o,Ua,i),uh(e,o);else if(F2(s,e,t,i,o))o.stopPropagation();else if(uh(e,o),t&4&&-1<N2.indexOf(e)){for(;s!==null;){var a=Ss(s);if(a!==null&&Zm(a),a=Dc(e,t,i,o),a===null&&tc(e,t,o,Ua,i),a===s)break;s=a}s!==null&&o.stopPropagation()}else tc(e,t,o,null,i)}}var Ua=null;function Dc(e,t,i,o){if(Ua=null,e=Fd(o),e=Di(e),e!==null)if(t=io(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Nm(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ua=e,null}function Ym(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(T2()){case Bd:return 1;case Dm:return 4;case Oa:case L2:return 16;case jm:return 536870912;default:return 16}default:return 16}}var hi=null,Wd=null,va=null;function Qm(){if(va)return va;var e,t=Wd,i=t.length,o,s="value"in hi?hi.value:hi.textContent,a=s.length;for(e=0;e<i&&t[e]===s[e];e++);var u=i-e;for(o=1;o<=u&&t[i-o]===s[a-o];o++);return va=s.slice(e,1<o?1-o:void 0)}function _a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ta(){return!0}function dh(){return!1}function tn(e){function t(i,o,s,a,u){this._reactName=i,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(i=e[d],this[d]=i?i(a):a[d]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ta:dh,this.isPropagationStopped=dh,this}return Ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),t}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hd=tn(tr),Es=Ke({},tr,{view:0,detail:0}),j2=tn(Es),Vu,Ku,Sr,ul=Ke({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(Vu=e.screenX-Sr.screenX,Ku=e.screenY-Sr.screenY):Ku=Vu=0,Sr=e),Vu)},movementY:function(e){return"movementY"in e?e.movementY:Ku}}),fh=tn(ul),W2=Ke({},ul,{dataTransfer:0}),H2=tn(W2),Z2=Ke({},Es,{relatedTarget:0}),Gu=tn(Z2),V2=Ke({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),K2=tn(V2),G2=Ke({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q2=tn(G2),Y2=Ke({},tr,{data:0}),ph=tn(Y2),Q2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=J2[e])?!!t[e]:!1}function Zd(){return e_}var t_=Ke({},Es,{key:function(e){if(e.key){var t=Q2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n_=tn(t_),i_=Ke({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=tn(i_),o_=Ke({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),r_=tn(o_),s_=Ke({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=tn(s_),l_=Ke({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u_=tn(l_),c_=[9,13,27,32],Vd=Jn&&"CompositionEvent"in window,Wr=null;Jn&&"documentMode"in document&&(Wr=document.documentMode);var d_=Jn&&"TextEvent"in window&&!Wr,Xm=Jn&&(!Vd||Wr&&8<Wr&&11>=Wr),mh=String.fromCharCode(32),gh=!1;function Jm(e,t){switch(e){case"keyup":return c_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Co=!1;function f_(e,t){switch(e){case"compositionend":return e0(t);case"keypress":return t.which!==32?null:(gh=!0,mh);case"textInput":return e=t.data,e===mh&&gh?null:e;default:return null}}function p_(e,t){if(Co)return e==="compositionend"||!Vd&&Jm(e,t)?(e=Qm(),va=Wd=hi=null,Co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xm&&t.locale!=="ko"?null:t.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!h_[e.type]:t==="textarea"}function t0(e,t,i,o){Im(o),t=Na(t,"onChange"),0<t.length&&(i=new Hd("onChange","change",null,i,o),e.push({event:i,listeners:t}))}var Hr=null,ss=null;function m_(e){f0(e,0)}function cl(e){var t=To(e);if(Cm(t))return e}function g_(e,t){if(e==="change")return t}var n0=!1;if(Jn){var qu;if(Jn){var Yu="oninput"in document;if(!Yu){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),Yu=typeof vh.oninput=="function"}qu=Yu}else qu=!1;n0=qu&&(!document.documentMode||9<document.documentMode)}function _h(){Hr&&(Hr.detachEvent("onpropertychange",i0),ss=Hr=null)}function i0(e){if(e.propertyName==="value"&&cl(ss)){var t=[];t0(t,ss,e,Fd(e)),Um(m_,t)}}function y_(e,t,i){e==="focusin"?(_h(),Hr=t,ss=i,Hr.attachEvent("onpropertychange",i0)):e==="focusout"&&_h()}function v_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(ss)}function __(e,t){if(e==="click")return cl(t)}function x_(e,t){if(e==="input"||e==="change")return cl(t)}function w_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pn=typeof Object.is=="function"?Object.is:w_;function as(e,t){if(Pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var s=i[o];if(!Ec.call(t,s)||!Pn(e[s],t[s]))return!1}return!0}function xh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wh(e,t){var i=xh(e);e=0;for(var o;i;){if(i.nodeType===3){if(o=e+i.textContent.length,e<=t&&o>=t)return{node:i,offset:t-e};e=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=xh(i)}}function o0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?o0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function r0(){for(var e=window,t=Ma();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Ma(e.document)}return t}function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b_(e){var t=r0(),i=e.focusedElem,o=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&o0(i.ownerDocument.documentElement,i)){if(o!==null&&Kd(i)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=i.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=wh(i,a);var u=wh(i,o);s&&u&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var E_=Jn&&"documentMode"in document&&11>=document.documentMode,Po=null,jc=null,Zr=null,Wc=!1;function bh(e,t,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Wc||Po==null||Po!==Ma(o)||(o=Po,"selectionStart"in o&&Kd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zr&&as(Zr,o)||(Zr=o,o=Na(jc,"onSelect"),0<o.length&&(t=new Hd("onSelect","select",null,t,i),e.push({event:t,listeners:o}),t.target=Po)))}function na(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ko={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Qu={},s0={};Jn&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function dl(e){if(Qu[e])return Qu[e];if(!ko[e])return e;var t=ko[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in s0)return Qu[e]=t[i];return e}var a0=dl("animationend"),l0=dl("animationiteration"),u0=dl("animationstart"),c0=dl("transitionend"),d0=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(e,t){d0.set(e,t),no(t,[e])}for(var Xu=0;Xu<Eh.length;Xu++){var Ju=Eh[Xu],S_=Ju.toLowerCase(),C_=Ju[0].toUpperCase()+Ju.slice(1);ki(S_,"on"+C_)}ki(a0,"onAnimationEnd");ki(l0,"onAnimationIteration");ki(u0,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(c0,"onTransitionEnd");Ho("onMouseEnter",["mouseout","mouseover"]);Ho("onMouseLeave",["mouseout","mouseover"]);Ho("onPointerEnter",["pointerout","pointerover"]);Ho("onPointerLeave",["pointerout","pointerover"]);no("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));no("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));no("onBeforeInput",["compositionend","keypress","textInput","paste"]);no("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));no("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));no("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Sh(e,t,i){var o=e.type||"unknown-event";e.currentTarget=i,S2(o,t,void 0,e),e.currentTarget=null}function f0(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var o=e[i],s=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var u=o.length-1;0<=u;u--){var d=o[u],f=d.instance,h=d.currentTarget;if(d=d.listener,f!==a&&s.isPropagationStopped())break e;Sh(s,d,h),a=f}else for(u=0;u<o.length;u++){if(d=o[u],f=d.instance,h=d.currentTarget,d=d.listener,f!==a&&s.isPropagationStopped())break e;Sh(s,d,h),a=f}}}if(Ia)throw e=Fc,Ia=!1,Fc=null,e}function Be(e,t){var i=t[Gc];i===void 0&&(i=t[Gc]=new Set);var o=e+"__bubble";i.has(o)||(p0(t,e,2,!1),i.add(o))}function ec(e,t,i){var o=0;t&&(o|=4),p0(i,e,o,t)}var ia="_reactListening"+Math.random().toString(36).slice(2);function ls(e){if(!e[ia]){e[ia]=!0,xm.forEach(function(i){i!=="selectionchange"&&(P_.has(i)||ec(i,!1,e),ec(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ia]||(t[ia]=!0,ec("selectionchange",!1,t))}}function p0(e,t,i,o){switch(Ym(t)){case 1:var s=$2;break;case 4:s=D2;break;default:s=jd}i=s.bind(null,t,i,e),s=void 0,!Nc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(t,i,{capture:!0,passive:s}):e.addEventListener(t,i,!0):s!==void 0?e.addEventListener(t,i,{passive:s}):e.addEventListener(t,i,!1)}function tc(e,t,i,o,s){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var u=o.tag;if(u===3||u===4){var d=o.stateNode.containerInfo;if(d===s||d.nodeType===8&&d.parentNode===s)break;if(u===4)for(u=o.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;u=u.return}for(;d!==null;){if(u=Di(d),u===null)return;if(f=u.tag,f===5||f===6){o=a=u;continue e}d=d.parentNode}}o=o.return}Um(function(){var h=a,v=Fd(i),g=[];e:{var x=d0.get(e);if(x!==void 0){var P=Hd,S=e;switch(e){case"keypress":if(_a(i)===0)break e;case"keydown":case"keyup":P=n_;break;case"focusin":S="focus",P=Gu;break;case"focusout":S="blur",P=Gu;break;case"beforeblur":case"afterblur":P=Gu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=H2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=r_;break;case a0:case l0:case u0:P=K2;break;case c0:P=a_;break;case"scroll":P=j2;break;case"wheel":P=u_;break;case"copy":case"cut":case"paste":P=q2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=hh}var b=(t&4)!==0,A=!b&&e==="scroll",w=b?x!==null?x+"Capture":null:x;b=[];for(var y=h,_;y!==null;){_=y;var C=_.stateNode;if(_.tag===5&&C!==null&&(_=C,w!==null&&(C=ns(y,w),C!=null&&b.push(us(y,C,_)))),A)break;y=y.return}0<b.length&&(x=new P(x,S,null,i,v),g.push({event:x,listeners:b}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",x&&i!==Ac&&(S=i.relatedTarget||i.fromElement)&&(Di(S)||S[ei]))break e;if((P||x)&&(x=v.window===v?v:(x=v.ownerDocument)?x.defaultView||x.parentWindow:window,P?(S=i.relatedTarget||i.toElement,P=h,S=S?Di(S):null,S!==null&&(A=io(S),S!==A||S.tag!==5&&S.tag!==6)&&(S=null)):(P=null,S=h),P!==S)){if(b=fh,C="onMouseLeave",w="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(b=hh,C="onPointerLeave",w="onPointerEnter",y="pointer"),A=P==null?x:To(P),_=S==null?x:To(S),x=new b(C,y+"leave",P,i,v),x.target=A,x.relatedTarget=_,C=null,Di(v)===h&&(b=new b(w,y+"enter",S,i,v),b.target=_,b.relatedTarget=A,C=b),A=C,P&&S)t:{for(b=P,w=S,y=0,_=b;_;_=mo(_))y++;for(_=0,C=w;C;C=mo(C))_++;for(;0<y-_;)b=mo(b),y--;for(;0<_-y;)w=mo(w),_--;for(;y--;){if(b===w||w!==null&&b===w.alternate)break t;b=mo(b),w=mo(w)}b=null}else b=null;P!==null&&Ch(g,x,P,b,!1),S!==null&&A!==null&&Ch(g,A,S,b,!0)}}e:{if(x=h?To(h):window,P=x.nodeName&&x.nodeName.toLowerCase(),P==="select"||P==="input"&&x.type==="file")var M=g_;else if(yh(x))if(n0)M=x_;else{M=v_;var I=y_}else(P=x.nodeName)&&P.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(M=__);if(M&&(M=M(e,h))){t0(g,M,i,v);break e}I&&I(e,x,h),e==="focusout"&&(I=x._wrapperState)&&I.controlled&&x.type==="number"&&Mc(x,"number",x.value)}switch(I=h?To(h):window,e){case"focusin":(yh(I)||I.contentEditable==="true")&&(Po=I,jc=h,Zr=null);break;case"focusout":Zr=jc=Po=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,bh(g,i,v);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":bh(g,i,v)}var R;if(Vd)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Co?Jm(e,i)&&(N="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(N="onCompositionStart");N&&(Xm&&i.locale!=="ko"&&(Co||N!=="onCompositionStart"?N==="onCompositionEnd"&&Co&&(R=Qm()):(hi=v,Wd="value"in hi?hi.value:hi.textContent,Co=!0)),I=Na(h,N),0<I.length&&(N=new ph(N,e,null,i,v),g.push({event:N,listeners:I}),R?N.data=R:(R=e0(i),R!==null&&(N.data=R)))),(R=d_?f_(e,i):p_(e,i))&&(h=Na(h,"onBeforeInput"),0<h.length&&(v=new ph("onBeforeInput","beforeinput",null,i,v),g.push({event:v,listeners:h}),v.data=R))}f0(g,t)})}function us(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Na(e,t){for(var i=t+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=ns(e,i),a!=null&&o.unshift(us(e,a,s)),a=ns(e,t),a!=null&&o.push(us(e,a,s))),e=e.return}return o}function mo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ch(e,t,i,o,s){for(var a=t._reactName,u=[];i!==null&&i!==o;){var d=i,f=d.alternate,h=d.stateNode;if(f!==null&&f===o)break;d.tag===5&&h!==null&&(d=h,s?(f=ns(i,a),f!=null&&u.unshift(us(i,f,d))):s||(f=ns(i,a),f!=null&&u.push(us(i,f,d)))),i=i.return}u.length!==0&&e.push({event:t,listeners:u})}var k_=/\r\n?/g,T_=/\u0000|\uFFFD/g;function Ph(e){return(typeof e=="string"?e:""+e).replace(k_,`
`).replace(T_,"")}function oa(e,t,i){if(t=Ph(t),Ph(e)!==t&&i)throw Error(j(425))}function Fa(){}var Hc=null,Zc=null;function Vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,L_=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,M_=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(e){return kh.resolve(null).then(e).catch(R_)}:Kc;function R_(e){setTimeout(function(){throw e})}function nc(e,t){var i=t,o=0;do{var s=i.nextSibling;if(e.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(o===0){e.removeChild(s),rs(t);return}o--}else i!=="$"&&i!=="$?"&&i!=="$!"||o++;i=s}while(i);rs(t)}function _i(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Th(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),Nn="__reactFiber$"+nr,cs="__reactProps$"+nr,ei="__reactContainer$"+nr,Gc="__reactEvents$"+nr,I_="__reactListeners$"+nr,O_="__reactHandles$"+nr;function Di(e){var t=e[Nn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[ei]||i[Nn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Th(e);e!==null;){if(i=e[Nn])return i;e=Th(e)}return t}e=i,i=e.parentNode}return null}function Ss(e){return e=e[Nn]||e[ei],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function To(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function fl(e){return e[cs]||null}var qc=[],Lo=-1;function Ti(e){return{current:e}}function $e(e){0>Lo||(e.current=qc[Lo],qc[Lo]=null,Lo--)}function Ue(e,t){Lo++,qc[Lo]=e.current,e.current=t}var Ci={},kt=Ti(Ci),Dt=Ti(!1),Ki=Ci;function Zo(e,t){var i=e.type.contextTypes;if(!i)return Ci;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in i)s[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function jt(e){return e=e.childContextTypes,e!=null}function Ba(){$e(Dt),$e(kt)}function Lh(e,t,i){if(kt.current!==Ci)throw Error(j(168));Ue(kt,t),Ue(Dt,i)}function h0(e,t,i){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return i;o=o.getChildContext();for(var s in o)if(!(s in t))throw Error(j(108,y2(e)||"Unknown",s));return Ke({},i,o)}function $a(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ci,Ki=kt.current,Ue(kt,e),Ue(Dt,Dt.current),!0}function Mh(e,t,i){var o=e.stateNode;if(!o)throw Error(j(169));i?(e=h0(e,t,Ki),o.__reactInternalMemoizedMergedChildContext=e,$e(Dt),$e(kt),Ue(kt,e)):$e(Dt),Ue(Dt,i)}var qn=null,pl=!1,ic=!1;function m0(e){qn===null?qn=[e]:qn.push(e)}function z_(e){pl=!0,m0(e)}function Li(){if(!ic&&qn!==null){ic=!0;var e=0,t=Re;try{var i=qn;for(Re=1;e<i.length;e++){var o=i[e];do o=o(!0);while(o!==null)}qn=null,pl=!1}catch(s){throw qn!==null&&(qn=qn.slice(e+1)),$m(Bd,Li),s}finally{Re=t,ic=!1}}return null}var Mo=[],Ro=0,Da=null,ja=0,ln=[],un=0,Gi=null,Yn=1,Qn="";function Ui(e,t){Mo[Ro++]=ja,Mo[Ro++]=Da,Da=e,ja=t}function g0(e,t,i){ln[un++]=Yn,ln[un++]=Qn,ln[un++]=Gi,Gi=e;var o=Yn;e=Qn;var s=32-Sn(o)-1;o&=~(1<<s),i+=1;var a=32-Sn(t)+s;if(30<a){var u=s-s%5;a=(o&(1<<u)-1).toString(32),o>>=u,s-=u,Yn=1<<32-Sn(t)+s|i<<s|o,Qn=a+e}else Yn=1<<a|i<<s|o,Qn=e}function Gd(e){e.return!==null&&(Ui(e,1),g0(e,1,0))}function qd(e){for(;e===Da;)Da=Mo[--Ro],Mo[Ro]=null,ja=Mo[--Ro],Mo[Ro]=null;for(;e===Gi;)Gi=ln[--un],ln[un]=null,Qn=ln[--un],ln[un]=null,Yn=ln[--un],ln[un]=null}var Yt=null,qt=null,je=!1,En=null;function y0(e,t){var i=cn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Rh(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Yt=e,qt=_i(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Yt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Gi!==null?{id:Yn,overflow:Qn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=cn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Yt=e,qt=null,!0):!1;default:return!1}}function Yc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qc(e){if(je){var t=qt;if(t){var i=t;if(!Rh(e,t)){if(Yc(e))throw Error(j(418));t=_i(i.nextSibling);var o=Yt;t&&Rh(e,t)?y0(o,i):(e.flags=e.flags&-4097|2,je=!1,Yt=e)}}else{if(Yc(e))throw Error(j(418));e.flags=e.flags&-4097|2,je=!1,Yt=e}}}function Ih(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function ra(e){if(e!==Yt)return!1;if(!je)return Ih(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vc(e.type,e.memoizedProps)),t&&(t=qt)){if(Yc(e))throw v0(),Error(j(418));for(;t;)y0(e,t),t=_i(t.nextSibling)}if(Ih(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){qt=_i(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Yt?_i(e.stateNode.nextSibling):null;return!0}function v0(){for(var e=qt;e;)e=_i(e.nextSibling)}function Vo(){qt=Yt=null,je=!1}function Yd(e){En===null?En=[e]:En.push(e)}var A_=oi.ReactCurrentBatchConfig;function wn(e,t){if(e&&e.defaultProps){t=Ke({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}var Wa=Ti(null),Ha=null,Io=null,Qd=null;function Xd(){Qd=Io=Ha=null}function Jd(e){var t=Wa.current;$e(Wa),e._currentValue=t}function Xc(e,t,i){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===i)break;e=e.return}}function $o(e,t){Ha=e,Qd=Io=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function pn(e){var t=e._currentValue;if(Qd!==e)if(e={context:e,memoizedValue:t,next:null},Io===null){if(Ha===null)throw Error(j(308));Io=e,Ha.dependencies={lanes:0,firstContext:e}}else Io=Io.next=e;return t}var ji=null;function ef(e){ji===null?ji=[e]:ji.push(e)}function _0(e,t,i,o){var s=t.interleaved;return s===null?(i.next=i,ef(t)):(i.next=s.next,s.next=i),t.interleaved=i,ti(e,o)}function ti(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var di=!1;function tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function x0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xi(e,t,i){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,we&2){var s=o.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),o.pending=t,ti(e,i)}return s=o.interleaved,s===null?(t.next=t,ef(o)):(t.next=s.next,s.next=t),o.interleaved=t,ti(e,i)}function xa(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,i|=o,t.lanes=i,$d(e,i)}}function Oh(e,t){var i=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var s=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var u={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};a===null?s=a=u:a=a.next=u,i=i.next}while(i!==null);a===null?s=a=t:a=a.next=t}else s=a=t;i={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Za(e,t,i,o){var s=e.updateQueue;di=!1;var a=s.firstBaseUpdate,u=s.lastBaseUpdate,d=s.shared.pending;if(d!==null){s.shared.pending=null;var f=d,h=f.next;f.next=null,u===null?a=h:u.next=h,u=f;var v=e.alternate;v!==null&&(v=v.updateQueue,d=v.lastBaseUpdate,d!==u&&(d===null?v.firstBaseUpdate=h:d.next=h,v.lastBaseUpdate=f))}if(a!==null){var g=s.baseState;u=0,v=h=f=null,d=a;do{var x=d.lane,P=d.eventTime;if((o&x)===x){v!==null&&(v=v.next={eventTime:P,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var S=e,b=d;switch(x=t,P=i,b.tag){case 1:if(S=b.payload,typeof S=="function"){g=S.call(P,g,x);break e}g=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=b.payload,x=typeof S=="function"?S.call(P,g,x):S,x==null)break e;g=Ke({},g,x);break e;case 2:di=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,x=s.effects,x===null?s.effects=[d]:x.push(d))}else P={eventTime:P,lane:x,tag:d.tag,payload:d.payload,callback:d.callback,next:null},v===null?(h=v=P,f=g):v=v.next=P,u|=x;if(d=d.next,d===null){if(d=s.shared.pending,d===null)break;x=d,d=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(1);if(v===null&&(f=g),s.baseState=f,s.firstBaseUpdate=h,s.lastBaseUpdate=v,t=s.shared.interleaved,t!==null){s=t;do u|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Yi|=u,e.lanes=u,e.memoizedState=g}}function zh(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],s=o.callback;if(s!==null){if(o.callback=null,o=i,typeof s!="function")throw Error(j(191,s));s.call(o)}}}var w0=new _m.Component().refs;function Jc(e,t,i,o){t=e.memoizedState,i=i(o,t),i=i==null?t:Ke({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var hl={isMounted:function(e){return(e=e._reactInternals)?io(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var o=Ot(),s=bi(e),a=Xn(o,s);a.payload=t,i!=null&&(a.callback=i),t=xi(e,a,s),t!==null&&(Cn(t,e,s,o),xa(t,e,s))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var o=Ot(),s=bi(e),a=Xn(o,s);a.tag=1,a.payload=t,i!=null&&(a.callback=i),t=xi(e,a,s),t!==null&&(Cn(t,e,s,o),xa(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ot(),o=bi(e),s=Xn(i,o);s.tag=2,t!=null&&(s.callback=t),t=xi(e,s,o),t!==null&&(Cn(t,e,o,i),xa(t,e,o))}};function Ah(e,t,i,o,s,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,u):t.prototype&&t.prototype.isPureReactComponent?!as(i,o)||!as(s,a):!0}function b0(e,t,i){var o=!1,s=Ci,a=t.contextType;return typeof a=="object"&&a!==null?a=pn(a):(s=jt(t)?Ki:kt.current,o=t.contextTypes,a=(o=o!=null)?Zo(e,s):Ci),t=new t(i,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function Uh(e,t,i,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,o),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function ed(e,t,i,o){var s=e.stateNode;s.props=i,s.state=e.memoizedState,s.refs=w0,tf(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=pn(a):(a=jt(t)?Ki:kt.current,s.context=Zo(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Jc(e,t,a,i),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&hl.enqueueReplaceState(s,s.state,null),Za(e,i,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(j(309));var o=i.stateNode}if(!o)throw Error(j(147,e));var s=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var d=s.refs;d===w0&&(d=s.refs={}),u===null?delete d[a]:d[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(j(284));if(!i._owner)throw Error(j(290,e))}return e}function sa(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Nh(e){var t=e._init;return t(e._payload)}function E0(e){function t(w,y){if(e){var _=w.deletions;_===null?(w.deletions=[y],w.flags|=16):_.push(y)}}function i(w,y){if(!e)return null;for(;y!==null;)t(w,y),y=y.sibling;return null}function o(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function s(w,y){return w=Ei(w,y),w.index=0,w.sibling=null,w}function a(w,y,_){return w.index=_,e?(_=w.alternate,_!==null?(_=_.index,_<y?(w.flags|=2,y):_):(w.flags|=2,y)):(w.flags|=1048576,y)}function u(w){return e&&w.alternate===null&&(w.flags|=2),w}function d(w,y,_,C){return y===null||y.tag!==6?(y=cc(_,w.mode,C),y.return=w,y):(y=s(y,_),y.return=w,y)}function f(w,y,_,C){var M=_.type;return M===So?v(w,y,_.props.children,C,_.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ci&&Nh(M)===y.type)?(C=s(y,_.props),C.ref=Cr(w,y,_),C.return=w,C):(C=Pa(_.type,_.key,_.props,null,w.mode,C),C.ref=Cr(w,y,_),C.return=w,C)}function h(w,y,_,C){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=dc(_,w.mode,C),y.return=w,y):(y=s(y,_.children||[]),y.return=w,y)}function v(w,y,_,C,M){return y===null||y.tag!==7?(y=Vi(_,w.mode,C,M),y.return=w,y):(y=s(y,_),y.return=w,y)}function g(w,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=cc(""+y,w.mode,_),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qs:return _=Pa(y.type,y.key,y.props,null,w.mode,_),_.ref=Cr(w,null,y),_.return=w,_;case Eo:return y=dc(y,w.mode,_),y.return=w,y;case ci:var C=y._init;return g(w,C(y._payload),_)}if(Nr(y)||xr(y))return y=Vi(y,w.mode,_,null),y.return=w,y;sa(w,y)}return null}function x(w,y,_,C){var M=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:d(w,y,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case qs:return _.key===M?f(w,y,_,C):null;case Eo:return _.key===M?h(w,y,_,C):null;case ci:return M=_._init,x(w,y,M(_._payload),C)}if(Nr(_)||xr(_))return M!==null?null:v(w,y,_,C,null);sa(w,_)}return null}function P(w,y,_,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return w=w.get(_)||null,d(y,w,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case qs:return w=w.get(C.key===null?_:C.key)||null,f(y,w,C,M);case Eo:return w=w.get(C.key===null?_:C.key)||null,h(y,w,C,M);case ci:var I=C._init;return P(w,y,_,I(C._payload),M)}if(Nr(C)||xr(C))return w=w.get(_)||null,v(y,w,C,M,null);sa(y,C)}return null}function S(w,y,_,C){for(var M=null,I=null,R=y,N=y=0,K=null;R!==null&&N<_.length;N++){R.index>N?(K=R,R=null):K=R.sibling;var $=x(w,R,_[N],C);if($===null){R===null&&(R=K);break}e&&R&&$.alternate===null&&t(w,R),y=a($,y,N),I===null?M=$:I.sibling=$,I=$,R=K}if(N===_.length)return i(w,R),je&&Ui(w,N),M;if(R===null){for(;N<_.length;N++)R=g(w,_[N],C),R!==null&&(y=a(R,y,N),I===null?M=R:I.sibling=R,I=R);return je&&Ui(w,N),M}for(R=o(w,R);N<_.length;N++)K=P(R,w,N,_[N],C),K!==null&&(e&&K.alternate!==null&&R.delete(K.key===null?N:K.key),y=a(K,y,N),I===null?M=K:I.sibling=K,I=K);return e&&R.forEach(function(H){return t(w,H)}),je&&Ui(w,N),M}function b(w,y,_,C){var M=xr(_);if(typeof M!="function")throw Error(j(150));if(_=M.call(_),_==null)throw Error(j(151));for(var I=M=null,R=y,N=y=0,K=null,$=_.next();R!==null&&!$.done;N++,$=_.next()){R.index>N?(K=R,R=null):K=R.sibling;var H=x(w,R,$.value,C);if(H===null){R===null&&(R=K);break}e&&R&&H.alternate===null&&t(w,R),y=a(H,y,N),I===null?M=H:I.sibling=H,I=H,R=K}if($.done)return i(w,R),je&&Ui(w,N),M;if(R===null){for(;!$.done;N++,$=_.next())$=g(w,$.value,C),$!==null&&(y=a($,y,N),I===null?M=$:I.sibling=$,I=$);return je&&Ui(w,N),M}for(R=o(w,R);!$.done;N++,$=_.next())$=P(R,w,N,$.value,C),$!==null&&(e&&$.alternate!==null&&R.delete($.key===null?N:$.key),y=a($,y,N),I===null?M=$:I.sibling=$,I=$);return e&&R.forEach(function(ee){return t(w,ee)}),je&&Ui(w,N),M}function A(w,y,_,C){if(typeof _=="object"&&_!==null&&_.type===So&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case qs:e:{for(var M=_.key,I=y;I!==null;){if(I.key===M){if(M=_.type,M===So){if(I.tag===7){i(w,I.sibling),y=s(I,_.props.children),y.return=w,w=y;break e}}else if(I.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===ci&&Nh(M)===I.type){i(w,I.sibling),y=s(I,_.props),y.ref=Cr(w,I,_),y.return=w,w=y;break e}i(w,I);break}else t(w,I);I=I.sibling}_.type===So?(y=Vi(_.props.children,w.mode,C,_.key),y.return=w,w=y):(C=Pa(_.type,_.key,_.props,null,w.mode,C),C.ref=Cr(w,y,_),C.return=w,w=C)}return u(w);case Eo:e:{for(I=_.key;y!==null;){if(y.key===I)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){i(w,y.sibling),y=s(y,_.children||[]),y.return=w,w=y;break e}else{i(w,y);break}else t(w,y);y=y.sibling}y=dc(_,w.mode,C),y.return=w,w=y}return u(w);case ci:return I=_._init,A(w,y,I(_._payload),C)}if(Nr(_))return S(w,y,_,C);if(xr(_))return b(w,y,_,C);sa(w,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(i(w,y.sibling),y=s(y,_),y.return=w,w=y):(i(w,y),y=cc(_,w.mode,C),y.return=w,w=y),u(w)):i(w,y)}return A}var Ko=E0(!0),S0=E0(!1),Cs={},Dn=Ti(Cs),ds=Ti(Cs),fs=Ti(Cs);function Wi(e){if(e===Cs)throw Error(j(174));return e}function nf(e,t){switch(Ue(fs,t),Ue(ds,e),Ue(Dn,Cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ic(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ic(t,e)}$e(Dn),Ue(Dn,t)}function Go(){$e(Dn),$e(ds),$e(fs)}function C0(e){Wi(fs.current);var t=Wi(Dn.current),i=Ic(t,e.type);t!==i&&(Ue(ds,e),Ue(Dn,i))}function of(e){ds.current===e&&($e(Dn),$e(ds))}var Ze=Ti(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oc=[];function rf(){for(var e=0;e<oc.length;e++)oc[e]._workInProgressVersionPrimary=null;oc.length=0}var wa=oi.ReactCurrentDispatcher,rc=oi.ReactCurrentBatchConfig,qi=0,Ve=null,ct=null,pt=null,Ka=!1,Vr=!1,ps=0,U_=0;function Et(){throw Error(j(321))}function sf(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Pn(e[i],t[i]))return!1;return!0}function af(e,t,i,o,s,a){if(qi=a,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wa.current=e===null||e.memoizedState===null?$_:D_,e=i(o,s),Vr){a=0;do{if(Vr=!1,ps=0,25<=a)throw Error(j(301));a+=1,pt=ct=null,t.updateQueue=null,wa.current=j_,e=i(o,s)}while(Vr)}if(wa.current=Ga,t=ct!==null&&ct.next!==null,qi=0,pt=ct=Ve=null,Ka=!1,t)throw Error(j(300));return e}function lf(){var e=ps!==0;return ps=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ve.memoizedState=pt=e:pt=pt.next=e,pt}function hn(){if(ct===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=pt===null?Ve.memoizedState:pt.next;if(t!==null)pt=t,ct=e;else{if(e===null)throw Error(j(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},pt===null?Ve.memoizedState=pt=e:pt=pt.next=e}return pt}function hs(e,t){return typeof t=="function"?t(e):t}function sc(e){var t=hn(),i=t.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=e;var o=ct,s=o.baseQueue,a=i.pending;if(a!==null){if(s!==null){var u=s.next;s.next=a.next,a.next=u}o.baseQueue=s=a,i.pending=null}if(s!==null){a=s.next,o=o.baseState;var d=u=null,f=null,h=a;do{var v=h.lane;if((qi&v)===v)f!==null&&(f=f.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),o=h.hasEagerState?h.eagerState:e(o,h.action);else{var g={lane:v,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};f===null?(d=f=g,u=o):f=f.next=g,Ve.lanes|=v,Yi|=v}h=h.next}while(h!==null&&h!==a);f===null?u=o:f.next=d,Pn(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseState=u,t.baseQueue=f,i.lastRenderedState=o}if(e=i.interleaved,e!==null){s=e;do a=s.lane,Ve.lanes|=a,Yi|=a,s=s.next;while(s!==e)}else s===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function ac(e){var t=hn(),i=t.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=e;var o=i.dispatch,s=i.pending,a=t.memoizedState;if(s!==null){i.pending=null;var u=s=s.next;do a=e(a,u.action),u=u.next;while(u!==s);Pn(a,t.memoizedState)||($t=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),i.lastRenderedState=a}return[a,o]}function P0(){}function k0(e,t){var i=Ve,o=hn(),s=t(),a=!Pn(o.memoizedState,s);if(a&&(o.memoizedState=s,$t=!0),o=o.queue,uf(M0.bind(null,i,o,e),[e]),o.getSnapshot!==t||a||pt!==null&&pt.memoizedState.tag&1){if(i.flags|=2048,ms(9,L0.bind(null,i,o,s,t),void 0,null),ht===null)throw Error(j(349));qi&30||T0(i,t,s)}return s}function T0(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function L0(e,t,i,o){t.value=i,t.getSnapshot=o,R0(t)&&I0(e)}function M0(e,t,i){return i(function(){R0(t)&&I0(e)})}function R0(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Pn(e,i)}catch{return!0}}function I0(e){var t=ti(e,1);t!==null&&Cn(t,e,1,-1)}function Fh(e){var t=zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t.queue=e,e=e.dispatch=B_.bind(null,Ve,e),[t.memoizedState,e]}function ms(e,t,i,o){return e={tag:e,create:t,destroy:i,deps:o,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(o=i.next,i.next=e,e.next=o,t.lastEffect=e)),e}function O0(){return hn().memoizedState}function ba(e,t,i,o){var s=zn();Ve.flags|=e,s.memoizedState=ms(1|t,i,void 0,o===void 0?null:o)}function ml(e,t,i,o){var s=hn();o=o===void 0?null:o;var a=void 0;if(ct!==null){var u=ct.memoizedState;if(a=u.destroy,o!==null&&sf(o,u.deps)){s.memoizedState=ms(t,i,a,o);return}}Ve.flags|=e,s.memoizedState=ms(1|t,i,a,o)}function Bh(e,t){return ba(8390656,8,e,t)}function uf(e,t){return ml(2048,8,e,t)}function z0(e,t){return ml(4,2,e,t)}function A0(e,t){return ml(4,4,e,t)}function U0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function N0(e,t,i){return i=i!=null?i.concat([e]):null,ml(4,4,U0.bind(null,t,e),i)}function cf(){}function F0(e,t){var i=hn();t=t===void 0?null:t;var o=i.memoizedState;return o!==null&&t!==null&&sf(t,o[1])?o[0]:(i.memoizedState=[e,t],e)}function B0(e,t){var i=hn();t=t===void 0?null:t;var o=i.memoizedState;return o!==null&&t!==null&&sf(t,o[1])?o[0]:(e=e(),i.memoizedState=[e,t],e)}function $0(e,t,i){return qi&21?(Pn(i,t)||(i=Wm(),Ve.lanes|=i,Yi|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=i)}function N_(e,t){var i=Re;Re=i!==0&&4>i?i:4,e(!0);var o=rc.transition;rc.transition={};try{e(!1),t()}finally{Re=i,rc.transition=o}}function D0(){return hn().memoizedState}function F_(e,t,i){var o=bi(e);if(i={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null},j0(e))W0(t,i);else if(i=_0(e,t,i,o),i!==null){var s=Ot();Cn(i,e,o,s),H0(i,t,o)}}function B_(e,t,i){var o=bi(e),s={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null};if(j0(e))W0(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,d=a(u,i);if(s.hasEagerState=!0,s.eagerState=d,Pn(d,u)){var f=t.interleaved;f===null?(s.next=s,ef(t)):(s.next=f.next,f.next=s),t.interleaved=s;return}}catch{}finally{}i=_0(e,t,s,o),i!==null&&(s=Ot(),Cn(i,e,o,s),H0(i,t,o))}}function j0(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function W0(e,t){Vr=Ka=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function H0(e,t,i){if(i&4194240){var o=t.lanes;o&=e.pendingLanes,i|=o,t.lanes=i,$d(e,i)}}var Ga={readContext:pn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},$_={readContext:pn,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:pn,useEffect:Bh,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ba(4194308,4,U0.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var i=zn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var o=zn();return t=i!==void 0?i(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=F_.bind(null,Ve,e),[o.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:Fh,useDebugValue:cf,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=Fh(!1),t=e[0];return e=N_.bind(null,e[1]),zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var o=Ve,s=zn();if(je){if(i===void 0)throw Error(j(407));i=i()}else{if(i=t(),ht===null)throw Error(j(349));qi&30||T0(o,t,i)}s.memoizedState=i;var a={value:i,getSnapshot:t};return s.queue=a,Bh(M0.bind(null,o,a,e),[e]),o.flags|=2048,ms(9,L0.bind(null,o,a,i,t),void 0,null),i},useId:function(){var e=zn(),t=ht.identifierPrefix;if(je){var i=Qn,o=Yn;i=(o&~(1<<32-Sn(o)-1)).toString(32)+i,t=":"+t+"R"+i,i=ps++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=U_++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},D_={readContext:pn,useCallback:F0,useContext:pn,useEffect:uf,useImperativeHandle:N0,useInsertionEffect:z0,useLayoutEffect:A0,useMemo:B0,useReducer:sc,useRef:O0,useState:function(){return sc(hs)},useDebugValue:cf,useDeferredValue:function(e){var t=hn();return $0(t,ct.memoizedState,e)},useTransition:function(){var e=sc(hs)[0],t=hn().memoizedState;return[e,t]},useMutableSource:P0,useSyncExternalStore:k0,useId:D0,unstable_isNewReconciler:!1},j_={readContext:pn,useCallback:F0,useContext:pn,useEffect:uf,useImperativeHandle:N0,useInsertionEffect:z0,useLayoutEffect:A0,useMemo:B0,useReducer:ac,useRef:O0,useState:function(){return ac(hs)},useDebugValue:cf,useDeferredValue:function(e){var t=hn();return ct===null?t.memoizedState=e:$0(t,ct.memoizedState,e)},useTransition:function(){var e=ac(hs)[0],t=hn().memoizedState;return[e,t]},useMutableSource:P0,useSyncExternalStore:k0,useId:D0,unstable_isNewReconciler:!1};function qo(e,t){try{var i="",o=t;do i+=g2(o),o=o.return;while(o);var s=i}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function lc(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function td(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var W_=typeof WeakMap=="function"?WeakMap:Map;function Z0(e,t,i){i=Xn(-1,i),i.tag=3,i.payload={element:null};var o=t.value;return i.callback=function(){Ya||(Ya=!0,dd=o),td(e,t)},i}function V0(e,t,i){i=Xn(-1,i),i.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=t.value;i.payload=function(){return o(s)},i.callback=function(){td(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(i.callback=function(){td(e,t),typeof o!="function"&&(wi===null?wi=new Set([this]):wi.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),i}function $h(e,t,i){var o=e.pingCache;if(o===null){o=e.pingCache=new W_;var s=new Set;o.set(t,s)}else s=o.get(t),s===void 0&&(s=new Set,o.set(t,s));s.has(i)||(s.add(i),e=i9.bind(null,e,t,i),t.then(e,e))}function Dh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jh(e,t,i,o,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Xn(-1,1),t.tag=2,xi(i,t,1))),i.lanes|=1),e)}var H_=oi.ReactCurrentOwner,$t=!1;function Rt(e,t,i,o){t.child=e===null?S0(t,null,i,o):Ko(t,e.child,i,o)}function Wh(e,t,i,o,s){i=i.render;var a=t.ref;return $o(t,s),o=af(e,t,i,o,a,s),i=lf(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ni(e,t,s)):(je&&i&&Gd(t),t.flags|=1,Rt(e,t,o,s),t.child)}function Hh(e,t,i,o,s){if(e===null){var a=i.type;return typeof a=="function"&&!vf(a)&&a.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=a,K0(e,t,a,o,s)):(e=Pa(i.type,null,o,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var u=a.memoizedProps;if(i=i.compare,i=i!==null?i:as,i(u,o)&&e.ref===t.ref)return ni(e,t,s)}return t.flags|=1,e=Ei(a,o),e.ref=t.ref,e.return=t,t.child=e}function K0(e,t,i,o,s){if(e!==null){var a=e.memoizedProps;if(as(a,o)&&e.ref===t.ref)if($t=!1,t.pendingProps=o=a,(e.lanes&s)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,ni(e,t,s)}return nd(e,t,i,o,s)}function G0(e,t,i){var o=t.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(zo,Kt),Kt|=i;else{if(!(i&1073741824))return e=a!==null?a.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(zo,Kt),Kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:i,Ue(zo,Kt),Kt|=o}else a!==null?(o=a.baseLanes|i,t.memoizedState=null):o=i,Ue(zo,Kt),Kt|=o;return Rt(e,t,s,i),t.child}function q0(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function nd(e,t,i,o,s){var a=jt(i)?Ki:kt.current;return a=Zo(t,a),$o(t,s),i=af(e,t,i,o,a,s),o=lf(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,ni(e,t,s)):(je&&o&&Gd(t),t.flags|=1,Rt(e,t,i,s),t.child)}function Zh(e,t,i,o,s){if(jt(i)){var a=!0;$a(t)}else a=!1;if($o(t,s),t.stateNode===null)Ea(e,t),b0(t,i,o),ed(t,i,o,s),o=!0;else if(e===null){var u=t.stateNode,d=t.memoizedProps;u.props=d;var f=u.context,h=i.contextType;typeof h=="object"&&h!==null?h=pn(h):(h=jt(i)?Ki:kt.current,h=Zo(t,h));var v=i.getDerivedStateFromProps,g=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function";g||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==o||f!==h)&&Uh(t,u,o,h),di=!1;var x=t.memoizedState;u.state=x,Za(t,o,u,s),f=t.memoizedState,d!==o||x!==f||Dt.current||di?(typeof v=="function"&&(Jc(t,i,v,o),f=t.memoizedState),(d=di||Ah(t,i,d,o,x,f,h))?(g||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=f),u.props=o,u.state=f,u.context=h,o=d):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,x0(e,t),d=t.memoizedProps,h=t.type===t.elementType?d:wn(t.type,d),u.props=h,g=t.pendingProps,x=u.context,f=i.contextType,typeof f=="object"&&f!==null?f=pn(f):(f=jt(i)?Ki:kt.current,f=Zo(t,f));var P=i.getDerivedStateFromProps;(v=typeof P=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==g||x!==f)&&Uh(t,u,o,f),di=!1,x=t.memoizedState,u.state=x,Za(t,o,u,s);var S=t.memoizedState;d!==g||x!==S||Dt.current||di?(typeof P=="function"&&(Jc(t,i,P,o),S=t.memoizedState),(h=di||Ah(t,i,h,o,x,S,f)||!1)?(v||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,S,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,S,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=S),u.props=o,u.state=S,u.context=f,o=h):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),o=!1)}return id(e,t,i,o,a,s)}function id(e,t,i,o,s,a){q0(e,t);var u=(t.flags&128)!==0;if(!o&&!u)return s&&Mh(t,i,!1),ni(e,t,a);o=t.stateNode,H_.current=t;var d=u&&typeof i.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&u?(t.child=Ko(t,e.child,null,a),t.child=Ko(t,null,d,a)):Rt(e,t,d,a),t.memoizedState=o.state,s&&Mh(t,i,!0),t.child}function Y0(e){var t=e.stateNode;t.pendingContext?Lh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lh(e,t.context,!1),nf(e,t.containerInfo)}function Vh(e,t,i,o,s){return Vo(),Yd(s),t.flags|=256,Rt(e,t,i,o),t.child}var od={dehydrated:null,treeContext:null,retryLane:0};function rd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Q0(e,t,i){var o=t.pendingProps,s=Ze.current,a=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(s&2)!==0),d?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ue(Ze,s&1),e===null)return Qc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=o.children,e=o.fallback,a?(o=t.mode,a=t.child,u={mode:"hidden",children:u},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=u):a=vl(u,o,0,null),e=Vi(e,o,i,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=rd(i),t.memoizedState=od,e):df(t,u));if(s=e.memoizedState,s!==null&&(d=s.dehydrated,d!==null))return Z_(e,t,u,o,d,s,i);if(a){a=o.fallback,u=t.mode,s=e.child,d=s.sibling;var f={mode:"hidden",children:o.children};return!(u&1)&&t.child!==s?(o=t.child,o.childLanes=0,o.pendingProps=f,t.deletions=null):(o=Ei(s,f),o.subtreeFlags=s.subtreeFlags&14680064),d!==null?a=Ei(d,a):(a=Vi(a,u,i,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,u=e.child.memoizedState,u=u===null?rd(i):{baseLanes:u.baseLanes|i,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~i,t.memoizedState=od,o}return a=e.child,e=a.sibling,o=Ei(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=i),o.return=t,o.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=o,t.memoizedState=null,o}function df(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,i,o){return o!==null&&Yd(o),Ko(t,e.child,null,i),e=df(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Z_(e,t,i,o,s,a,u){if(i)return t.flags&256?(t.flags&=-257,o=lc(Error(j(422))),aa(e,t,u,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,s=t.mode,o=vl({mode:"visible",children:o.children},s,0,null),a=Vi(a,s,u,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&Ko(t,e.child,null,u),t.child.memoizedState=rd(u),t.memoizedState=od,a);if(!(t.mode&1))return aa(e,t,u,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var d=o.dgst;return o=d,a=Error(j(419)),o=lc(a,o,void 0),aa(e,t,u,o)}if(d=(u&e.childLanes)!==0,$t||d){if(o=ht,o!==null){switch(u&-u){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(o.suspendedLanes|u)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,ti(e,s),Cn(o,e,s,-1))}return yf(),o=lc(Error(j(421))),aa(e,t,u,o)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=o9.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,qt=_i(s.nextSibling),Yt=t,je=!0,En=null,e!==null&&(ln[un++]=Yn,ln[un++]=Qn,ln[un++]=Gi,Yn=e.id,Qn=e.overflow,Gi=t),t=df(t,o.children),t.flags|=4096,t)}function Kh(e,t,i){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Xc(e.return,t,i)}function uc(e,t,i,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=i,a.tailMode=s)}function X0(e,t,i){var o=t.pendingProps,s=o.revealOrder,a=o.tail;if(Rt(e,t,o.children,i),o=Ze.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kh(e,i,t);else if(e.tag===19)Kh(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ue(Ze,o),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(i=t.child,s=null;i!==null;)e=i.alternate,e!==null&&Va(e)===null&&(s=i),i=i.sibling;i=s,i===null?(s=t.child,t.child=null):(s=i.sibling,i.sibling=null),uc(t,!1,s,i,a);break;case"backwards":for(i=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Va(e)===null){t.child=s;break}e=s.sibling,s.sibling=i,i=s,s=e}uc(t,!0,i,null,a);break;case"together":uc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ni(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Yi|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,i=Ei(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ei(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function V_(e,t,i){switch(t.tag){case 3:Y0(t),Vo();break;case 5:C0(t);break;case 1:jt(t.type)&&$a(t);break;case 4:nf(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,s=t.memoizedProps.value;Ue(Wa,o._currentValue),o._currentValue=s;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ue(Ze,Ze.current&1),t.flags|=128,null):i&t.child.childLanes?Q0(e,t,i):(Ue(Ze,Ze.current&1),e=ni(e,t,i),e!==null?e.sibling:null);Ue(Ze,Ze.current&1);break;case 19:if(o=(i&t.childLanes)!==0,e.flags&128){if(o)return X0(e,t,i);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ue(Ze,Ze.current),o)break;return null;case 22:case 23:return t.lanes=0,G0(e,t,i)}return ni(e,t,i)}var J0,sd,eg,tg;J0=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};sd=function(){};eg=function(e,t,i,o){var s=e.memoizedProps;if(s!==o){e=t.stateNode,Wi(Dn.current);var a=null;switch(i){case"input":s=Tc(e,s),o=Tc(e,o),a=[];break;case"select":s=Ke({},s,{value:void 0}),o=Ke({},o,{value:void 0}),a=[];break;case"textarea":s=Rc(e,s),o=Rc(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fa)}Oc(i,o);var u;i=null;for(h in s)if(!o.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var d=s[h];for(u in d)d.hasOwnProperty(u)&&(i||(i={}),i[u]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(es.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in o){var f=o[h];if(d=s!=null?s[h]:void 0,o.hasOwnProperty(h)&&f!==d&&(f!=null||d!=null))if(h==="style")if(d){for(u in d)!d.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(i||(i={}),i[u]="");for(u in f)f.hasOwnProperty(u)&&d[u]!==f[u]&&(i||(i={}),i[u]=f[u])}else i||(a||(a=[]),a.push(h,i)),i=f;else h==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(a=a||[]).push(h,f)):h==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(h,""+f):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(es.hasOwnProperty(h)?(f!=null&&h==="onScroll"&&Be("scroll",e),a||d===f||(a=[])):(a=a||[]).push(h,f))}i&&(a=a||[]).push("style",i);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};tg=function(e,t,i,o){i!==o&&(t.flags|=4)};function Pr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,o=0;if(t)for(var s=e.child;s!==null;)i|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)i|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=i,t}function K_(e,t,i){var o=t.pendingProps;switch(qd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return jt(t.type)&&Ba(),St(t),null;case 3:return o=t.stateNode,Go(),$e(Dt),$e(kt),rf(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ra(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,En!==null&&(hd(En),En=null))),sd(e,t),St(t),null;case 5:of(t);var s=Wi(fs.current);if(i=t.type,e!==null&&t.stateNode!=null)eg(e,t,i,o,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(j(166));return St(t),null}if(e=Wi(Dn.current),ra(t)){o=t.stateNode,i=t.type;var a=t.memoizedProps;switch(o[Nn]=t,o[cs]=a,e=(t.mode&1)!==0,i){case"dialog":Be("cancel",o),Be("close",o);break;case"iframe":case"object":case"embed":Be("load",o);break;case"video":case"audio":for(s=0;s<Br.length;s++)Be(Br[s],o);break;case"source":Be("error",o);break;case"img":case"image":case"link":Be("error",o),Be("load",o);break;case"details":Be("toggle",o);break;case"input":nh(o,a),Be("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Be("invalid",o);break;case"textarea":oh(o,a),Be("invalid",o)}Oc(i,a),s=null;for(var u in a)if(a.hasOwnProperty(u)){var d=a[u];u==="children"?typeof d=="string"?o.textContent!==d&&(a.suppressHydrationWarning!==!0&&oa(o.textContent,d,e),s=["children",d]):typeof d=="number"&&o.textContent!==""+d&&(a.suppressHydrationWarning!==!0&&oa(o.textContent,d,e),s=["children",""+d]):es.hasOwnProperty(u)&&d!=null&&u==="onScroll"&&Be("scroll",o)}switch(i){case"input":Ys(o),ih(o,a,!0);break;case"textarea":Ys(o),rh(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Fa)}o=s,t.updateQueue=o,o!==null&&(t.flags|=4)}else{u=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tm(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=u.createElement(i,{is:o.is}):(e=u.createElement(i),i==="select"&&(u=e,o.multiple?u.multiple=!0:o.size&&(u.size=o.size))):e=u.createElementNS(e,i),e[Nn]=t,e[cs]=o,J0(e,t,!1,!1),t.stateNode=e;e:{switch(u=zc(i,o),i){case"dialog":Be("cancel",e),Be("close",e),s=o;break;case"iframe":case"object":case"embed":Be("load",e),s=o;break;case"video":case"audio":for(s=0;s<Br.length;s++)Be(Br[s],e);s=o;break;case"source":Be("error",e),s=o;break;case"img":case"image":case"link":Be("error",e),Be("load",e),s=o;break;case"details":Be("toggle",e),s=o;break;case"input":nh(e,o),s=Tc(e,o),Be("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=Ke({},o,{value:void 0}),Be("invalid",e);break;case"textarea":oh(e,o),s=Rc(e,o),Be("invalid",e);break;default:s=o}Oc(i,s),d=s;for(a in d)if(d.hasOwnProperty(a)){var f=d[a];a==="style"?Rm(e,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Lm(e,f)):a==="children"?typeof f=="string"?(i!=="textarea"||f!=="")&&ts(e,f):typeof f=="number"&&ts(e,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(es.hasOwnProperty(a)?f!=null&&a==="onScroll"&&Be("scroll",e):f!=null&&zd(e,a,f,u))}switch(i){case"input":Ys(e),ih(e,o,!1);break;case"textarea":Ys(e),rh(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Si(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Uo(e,!!o.multiple,a,!1):o.defaultValue!=null&&Uo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Fa)}switch(i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)tg(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(j(166));if(i=Wi(fs.current),Wi(Dn.current),ra(t)){if(o=t.stateNode,i=t.memoizedProps,o[Nn]=t,(a=o.nodeValue!==i)&&(e=Yt,e!==null))switch(e.tag){case 3:oa(o.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oa(o.nodeValue,i,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(i.nodeType===9?i:i.ownerDocument).createTextNode(o),o[Nn]=t,t.stateNode=o}return St(t),null;case 13:if($e(Ze),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&qt!==null&&t.mode&1&&!(t.flags&128))v0(),Vo(),t.flags|=98560,a=!1;else if(a=ra(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[Nn]=t}else Vo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),a=!1}else En!==null&&(hd(En),En=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||Ze.current&1?dt===0&&(dt=3):yf())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return Go(),sd(e,t),e===null&&ls(t.stateNode.containerInfo),St(t),null;case 10:return Jd(t.type._context),St(t),null;case 17:return jt(t.type)&&Ba(),St(t),null;case 19:if($e(Ze),a=t.memoizedState,a===null)return St(t),null;if(o=(t.flags&128)!==0,u=a.rendering,u===null)if(o)Pr(a,!1);else{if(dt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=Va(e),u!==null){for(t.flags|=128,Pr(a,!1),o=u.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=i,i=t.child;i!==null;)a=i,e=o,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ue(Ze,Ze.current&1|2),t.child}e=e.sibling}a.tail!==null&&it()>Yo&&(t.flags|=128,o=!0,Pr(a,!1),t.lanes=4194304)}else{if(!o)if(e=Va(u),e!==null){if(t.flags|=128,o=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Pr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!je)return St(t),null}else 2*it()-a.renderingStartTime>Yo&&i!==1073741824&&(t.flags|=128,o=!0,Pr(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(i=a.last,i!==null?i.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=it(),t.sibling=null,i=Ze.current,Ue(Ze,o?i&1|2:i&1),t):(St(t),null);case 22:case 23:return gf(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Kt&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function G_(e,t){switch(qd(t),t.tag){case 1:return jt(t.type)&&Ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Go(),$e(Dt),$e(kt),rf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return of(t),null;case 13:if($e(Ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Vo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Ze),null;case 4:return Go(),null;case 10:return Jd(t.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var la=!1,Pt=!1,q_=typeof WeakSet=="function"?WeakSet:Set,X=null;function Oo(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(o){Je(e,t,o)}else i.current=null}function ad(e,t,i){try{i()}catch(o){Je(e,t,o)}}var Gh=!1;function Y_(e,t){if(Hc=Aa,e=r0(),Kd(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break e}var u=0,d=-1,f=-1,h=0,v=0,g=e,x=null;t:for(;;){for(var P;g!==i||s!==0&&g.nodeType!==3||(d=u+s),g!==a||o!==0&&g.nodeType!==3||(f=u+o),g.nodeType===3&&(u+=g.nodeValue.length),(P=g.firstChild)!==null;)x=g,g=P;for(;;){if(g===e)break t;if(x===i&&++h===s&&(d=u),x===a&&++v===o&&(f=u),(P=g.nextSibling)!==null)break;g=x,x=g.parentNode}g=P}i=d===-1||f===-1?null:{start:d,end:f}}else i=null}i=i||{start:0,end:0}}else i=null;for(Zc={focusedElem:e,selectionRange:i},Aa=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var b=S.memoizedProps,A=S.memoizedState,w=t.stateNode,y=w.getSnapshotBeforeUpdate(t.elementType===t.type?b:wn(t.type,b),A);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(C){Je(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return S=Gh,Gh=!1,S}function Kr(e,t,i){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&ad(t,i,a)}s=s.next}while(s!==o)}}function gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var o=i.create;i.destroy=o()}i=i.next}while(i!==t)}}function ld(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function ng(e){var t=e.alternate;t!==null&&(e.alternate=null,ng(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nn],delete t[cs],delete t[Gc],delete t[I_],delete t[O_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ig(e){return e.tag===5||e.tag===3||e.tag===4}function qh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ud(e,t,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Fa));else if(o!==4&&(e=e.child,e!==null))for(ud(e,t,i),e=e.sibling;e!==null;)ud(e,t,i),e=e.sibling}function cd(e,t,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(cd(e,t,i),e=e.sibling;e!==null;)cd(e,t,i),e=e.sibling}var yt=null,bn=!1;function li(e,t,i){for(i=i.child;i!==null;)og(e,t,i),i=i.sibling}function og(e,t,i){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(ll,i)}catch{}switch(i.tag){case 5:Pt||Oo(i,t);case 6:var o=yt,s=bn;yt=null,li(e,t,i),yt=o,bn=s,yt!==null&&(bn?(e=yt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):yt.removeChild(i.stateNode));break;case 18:yt!==null&&(bn?(e=yt,i=i.stateNode,e.nodeType===8?nc(e.parentNode,i):e.nodeType===1&&nc(e,i),rs(e)):nc(yt,i.stateNode));break;case 4:o=yt,s=bn,yt=i.stateNode.containerInfo,bn=!0,li(e,t,i),yt=o,bn=s;break;case 0:case 11:case 14:case 15:if(!Pt&&(o=i.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,u=a.destroy;a=a.tag,u!==void 0&&(a&2||a&4)&&ad(i,t,u),s=s.next}while(s!==o)}li(e,t,i);break;case 1:if(!Pt&&(Oo(i,t),o=i.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=i.memoizedProps,o.state=i.memoizedState,o.componentWillUnmount()}catch(d){Je(i,t,d)}li(e,t,i);break;case 21:li(e,t,i);break;case 22:i.mode&1?(Pt=(o=Pt)||i.memoizedState!==null,li(e,t,i),Pt=o):li(e,t,i);break;default:li(e,t,i)}}function Yh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new q_),t.forEach(function(o){var s=r9.bind(null,e,o);i.has(o)||(i.add(o),o.then(s,s))})}}function xn(e,t){var i=t.deletions;if(i!==null)for(var o=0;o<i.length;o++){var s=i[o];try{var a=e,u=t,d=u;e:for(;d!==null;){switch(d.tag){case 5:yt=d.stateNode,bn=!1;break e;case 3:yt=d.stateNode.containerInfo,bn=!0;break e;case 4:yt=d.stateNode.containerInfo,bn=!0;break e}d=d.return}if(yt===null)throw Error(j(160));og(a,u,s),yt=null,bn=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(h){Je(s,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rg(t,e),t=t.sibling}function rg(e,t){var i=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xn(t,e),On(e),o&4){try{Kr(3,e,e.return),gl(3,e)}catch(b){Je(e,e.return,b)}try{Kr(5,e,e.return)}catch(b){Je(e,e.return,b)}}break;case 1:xn(t,e),On(e),o&512&&i!==null&&Oo(i,i.return);break;case 5:if(xn(t,e),On(e),o&512&&i!==null&&Oo(i,i.return),e.flags&32){var s=e.stateNode;try{ts(s,"")}catch(b){Je(e,e.return,b)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,u=i!==null?i.memoizedProps:a,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&a.type==="radio"&&a.name!=null&&Pm(s,a),zc(d,u);var h=zc(d,a);for(u=0;u<f.length;u+=2){var v=f[u],g=f[u+1];v==="style"?Rm(s,g):v==="dangerouslySetInnerHTML"?Lm(s,g):v==="children"?ts(s,g):zd(s,v,g,h)}switch(d){case"input":Lc(s,a);break;case"textarea":km(s,a);break;case"select":var x=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var P=a.value;P!=null?Uo(s,!!a.multiple,P,!1):x!==!!a.multiple&&(a.defaultValue!=null?Uo(s,!!a.multiple,a.defaultValue,!0):Uo(s,!!a.multiple,a.multiple?[]:"",!1))}s[cs]=a}catch(b){Je(e,e.return,b)}}break;case 6:if(xn(t,e),On(e),o&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(b){Je(e,e.return,b)}}break;case 3:if(xn(t,e),On(e),o&4&&i!==null&&i.memoizedState.isDehydrated)try{rs(t.containerInfo)}catch(b){Je(e,e.return,b)}break;case 4:xn(t,e),On(e);break;case 13:xn(t,e),On(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(hf=it())),o&4&&Yh(e);break;case 22:if(v=i!==null&&i.memoizedState!==null,e.mode&1?(Pt=(h=Pt)||v,xn(t,e),Pt=h):xn(t,e),On(e),o&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!v&&e.mode&1)for(X=e,v=e.child;v!==null;){for(g=X=v;X!==null;){switch(x=X,P=x.child,x.tag){case 0:case 11:case 14:case 15:Kr(4,x,x.return);break;case 1:Oo(x,x.return);var S=x.stateNode;if(typeof S.componentWillUnmount=="function"){o=x,i=x.return;try{t=o,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(b){Je(o,i,b)}}break;case 5:Oo(x,x.return);break;case 22:if(x.memoizedState!==null){Xh(g);continue}}P!==null?(P.return=x,X=P):Xh(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{s=g.stateNode,h?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(d=g.stateNode,f=g.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=Mm("display",u))}catch(b){Je(e,e.return,b)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(b){Je(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:xn(t,e),On(e),o&4&&Yh(e);break;case 21:break;default:xn(t,e),On(e)}}function On(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(ig(i)){var o=i;break e}i=i.return}throw Error(j(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(ts(s,""),o.flags&=-33);var a=qh(e);cd(e,a,s);break;case 3:case 4:var u=o.stateNode.containerInfo,d=qh(e);ud(e,d,u);break;default:throw Error(j(161))}}catch(f){Je(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Q_(e,t,i){X=e,sg(e)}function sg(e,t,i){for(var o=(e.mode&1)!==0;X!==null;){var s=X,a=s.child;if(s.tag===22&&o){var u=s.memoizedState!==null||la;if(!u){var d=s.alternate,f=d!==null&&d.memoizedState!==null||Pt;d=la;var h=Pt;if(la=u,(Pt=f)&&!h)for(X=s;X!==null;)u=X,f=u.child,u.tag===22&&u.memoizedState!==null?Jh(s):f!==null?(f.return=u,X=f):Jh(s);for(;a!==null;)X=a,sg(a),a=a.sibling;X=s,la=d,Pt=h}Qh(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,X=a):Qh(e)}}function Qh(e){for(;X!==null;){var t=X;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pt||gl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Pt)if(i===null)o.componentDidMount();else{var s=t.elementType===t.type?i.memoizedProps:wn(t.type,i.memoizedProps);o.componentDidUpdate(s,i.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&zh(t,a,o);break;case 3:var u=t.updateQueue;if(u!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}zh(t,u,i)}break;case 5:var d=t.stateNode;if(i===null&&t.flags&4){i=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&i.focus();break;case"img":f.src&&(i.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var v=h.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&rs(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}Pt||t.flags&512&&ld(t)}catch(x){Je(t,t.return,x)}}if(t===e){X=null;break}if(i=t.sibling,i!==null){i.return=t.return,X=i;break}X=t.return}}function Xh(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var i=t.sibling;if(i!==null){i.return=t.return,X=i;break}X=t.return}}function Jh(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{gl(4,t)}catch(f){Je(t,i,f)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var s=t.return;try{o.componentDidMount()}catch(f){Je(t,s,f)}}var a=t.return;try{ld(t)}catch(f){Je(t,a,f)}break;case 5:var u=t.return;try{ld(t)}catch(f){Je(t,u,f)}}}catch(f){Je(t,t.return,f)}if(t===e){X=null;break}var d=t.sibling;if(d!==null){d.return=t.return,X=d;break}X=t.return}}var X_=Math.ceil,qa=oi.ReactCurrentDispatcher,ff=oi.ReactCurrentOwner,dn=oi.ReactCurrentBatchConfig,we=0,ht=null,ut=null,_t=0,Kt=0,zo=Ti(0),dt=0,gs=null,Yi=0,yl=0,pf=0,Gr=null,Bt=null,hf=0,Yo=1/0,Gn=null,Ya=!1,dd=null,wi=null,ua=!1,mi=null,Qa=0,qr=0,fd=null,Sa=-1,Ca=0;function Ot(){return we&6?it():Sa!==-1?Sa:Sa=it()}function bi(e){return e.mode&1?we&2&&_t!==0?_t&-_t:A_.transition!==null?(Ca===0&&(Ca=Wm()),Ca):(e=Re,e!==0||(e=window.event,e=e===void 0?16:Ym(e.type)),e):1}function Cn(e,t,i,o){if(50<qr)throw qr=0,fd=null,Error(j(185));bs(e,i,o),(!(we&2)||e!==ht)&&(e===ht&&(!(we&2)&&(yl|=i),dt===4&&pi(e,_t)),Wt(e,o),i===1&&we===0&&!(t.mode&1)&&(Yo=it()+500,pl&&Li()))}function Wt(e,t){var i=e.callbackNode;A2(e,t);var o=za(e,e===ht?_t:0);if(o===0)i!==null&&lh(i),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(i!=null&&lh(i),t===1)e.tag===0?z_(e1.bind(null,e)):m0(e1.bind(null,e)),M_(function(){!(we&6)&&Li()}),i=null;else{switch(Hm(o)){case 1:i=Bd;break;case 4:i=Dm;break;case 16:i=Oa;break;case 536870912:i=jm;break;default:i=Oa}i=hg(i,ag.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function ag(e,t){if(Sa=-1,Ca=0,we&6)throw Error(j(327));var i=e.callbackNode;if(Do()&&e.callbackNode!==i)return null;var o=za(e,e===ht?_t:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Xa(e,o);else{t=o;var s=we;we|=2;var a=ug();(ht!==e||_t!==t)&&(Gn=null,Yo=it()+500,Zi(e,t));do try{t9();break}catch(d){lg(e,d)}while(1);Xd(),qa.current=a,we=s,ut!==null?t=0:(ht=null,_t=0,t=dt)}if(t!==0){if(t===2&&(s=Bc(e),s!==0&&(o=s,t=pd(e,s))),t===1)throw i=gs,Zi(e,0),pi(e,o),Wt(e,it()),i;if(t===6)pi(e,o);else{if(s=e.current.alternate,!(o&30)&&!J_(s)&&(t=Xa(e,o),t===2&&(a=Bc(e),a!==0&&(o=a,t=pd(e,a))),t===1))throw i=gs,Zi(e,0),pi(e,o),Wt(e,it()),i;switch(e.finishedWork=s,e.finishedLanes=o,t){case 0:case 1:throw Error(j(345));case 2:Ni(e,Bt,Gn);break;case 3:if(pi(e,o),(o&130023424)===o&&(t=hf+500-it(),10<t)){if(za(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){Ot(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Kc(Ni.bind(null,e,Bt,Gn),t);break}Ni(e,Bt,Gn);break;case 4:if(pi(e,o),(o&4194240)===o)break;for(t=e.eventTimes,s=-1;0<o;){var u=31-Sn(o);a=1<<u,u=t[u],u>s&&(s=u),o&=~a}if(o=s,o=it()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*X_(o/1960))-o,10<o){e.timeoutHandle=Kc(Ni.bind(null,e,Bt,Gn),o);break}Ni(e,Bt,Gn);break;case 5:Ni(e,Bt,Gn);break;default:throw Error(j(329))}}}return Wt(e,it()),e.callbackNode===i?ag.bind(null,e):null}function pd(e,t){var i=Gr;return e.current.memoizedState.isDehydrated&&(Zi(e,t).flags|=256),e=Xa(e,t),e!==2&&(t=Bt,Bt=i,t!==null&&hd(t)),e}function hd(e){Bt===null?Bt=e:Bt.push.apply(Bt,e)}function J_(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var o=0;o<i.length;o++){var s=i[o],a=s.getSnapshot;s=s.value;try{if(!Pn(a(),s))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pi(e,t){for(t&=~pf,t&=~yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Sn(t),o=1<<i;e[i]=-1,t&=~o}}function e1(e){if(we&6)throw Error(j(327));Do();var t=za(e,0);if(!(t&1))return Wt(e,it()),null;var i=Xa(e,t);if(e.tag!==0&&i===2){var o=Bc(e);o!==0&&(t=o,i=pd(e,o))}if(i===1)throw i=gs,Zi(e,0),pi(e,t),Wt(e,it()),i;if(i===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ni(e,Bt,Gn),Wt(e,it()),null}function mf(e,t){var i=we;we|=1;try{return e(t)}finally{we=i,we===0&&(Yo=it()+500,pl&&Li())}}function Qi(e){mi!==null&&mi.tag===0&&!(we&6)&&Do();var t=we;we|=1;var i=dn.transition,o=Re;try{if(dn.transition=null,Re=1,e)return e()}finally{Re=o,dn.transition=i,we=t,!(we&6)&&Li()}}function gf(){Kt=zo.current,$e(zo)}function Zi(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,L_(i)),ut!==null)for(i=ut.return;i!==null;){var o=i;switch(qd(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ba();break;case 3:Go(),$e(Dt),$e(kt),rf();break;case 5:of(o);break;case 4:Go();break;case 13:$e(Ze);break;case 19:$e(Ze);break;case 10:Jd(o.type._context);break;case 22:case 23:gf()}i=i.return}if(ht=e,ut=e=Ei(e.current,null),_t=Kt=t,dt=0,gs=null,pf=yl=Yi=0,Bt=Gr=null,ji!==null){for(t=0;t<ji.length;t++)if(i=ji[t],o=i.interleaved,o!==null){i.interleaved=null;var s=o.next,a=i.pending;if(a!==null){var u=a.next;a.next=s,o.next=u}i.pending=o}ji=null}return e}function lg(e,t){do{var i=ut;try{if(Xd(),wa.current=Ga,Ka){for(var o=Ve.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}Ka=!1}if(qi=0,pt=ct=Ve=null,Vr=!1,ps=0,ff.current=null,i===null||i.return===null){dt=1,gs=t,ut=null;break}e:{var a=e,u=i.return,d=i,f=t;if(t=_t,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=f,v=d,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var x=v.alternate;x?(v.updateQueue=x.updateQueue,v.memoizedState=x.memoizedState,v.lanes=x.lanes):(v.updateQueue=null,v.memoizedState=null)}var P=Dh(u);if(P!==null){P.flags&=-257,jh(P,u,d,a,t),P.mode&1&&$h(a,h,t),t=P,f=h;var S=t.updateQueue;if(S===null){var b=new Set;b.add(f),t.updateQueue=b}else S.add(f);break e}else{if(!(t&1)){$h(a,h,t),yf();break e}f=Error(j(426))}}else if(je&&d.mode&1){var A=Dh(u);if(A!==null){!(A.flags&65536)&&(A.flags|=256),jh(A,u,d,a,t),Yd(qo(f,d));break e}}a=f=qo(f,d),dt!==4&&(dt=2),Gr===null?Gr=[a]:Gr.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var w=Z0(a,f,t);Oh(a,w);break e;case 1:d=f;var y=a.type,_=a.stateNode;if(!(a.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(wi===null||!wi.has(_)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=V0(a,d,t);Oh(a,C);break e}}a=a.return}while(a!==null)}dg(i)}catch(M){t=M,ut===i&&i!==null&&(ut=i=i.return);continue}break}while(1)}function ug(){var e=qa.current;return qa.current=Ga,e===null?Ga:e}function yf(){(dt===0||dt===3||dt===2)&&(dt=4),ht===null||!(Yi&268435455)&&!(yl&268435455)||pi(ht,_t)}function Xa(e,t){var i=we;we|=2;var o=ug();(ht!==e||_t!==t)&&(Gn=null,Zi(e,t));do try{e9();break}catch(s){lg(e,s)}while(1);if(Xd(),we=i,qa.current=o,ut!==null)throw Error(j(261));return ht=null,_t=0,dt}function e9(){for(;ut!==null;)cg(ut)}function t9(){for(;ut!==null&&!P2();)cg(ut)}function cg(e){var t=pg(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?dg(e):ut=t,ff.current=null}function dg(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=G_(i,t),i!==null){i.flags&=32767,ut=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,ut=null;return}}else if(i=K_(i,t,Kt),i!==null){ut=i;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);dt===0&&(dt=5)}function Ni(e,t,i){var o=Re,s=dn.transition;try{dn.transition=null,Re=1,n9(e,t,i,o)}finally{dn.transition=s,Re=o}return null}function n9(e,t,i,o){do Do();while(mi!==null);if(we&6)throw Error(j(327));i=e.finishedWork;var s=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var a=i.lanes|i.childLanes;if(U2(e,a),e===ht&&(ut=ht=null,_t=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||ua||(ua=!0,hg(Oa,function(){return Do(),null})),a=(i.flags&15990)!==0,i.subtreeFlags&15990||a){a=dn.transition,dn.transition=null;var u=Re;Re=1;var d=we;we|=4,ff.current=null,Y_(e,i),rg(i,e),b_(Zc),Aa=!!Hc,Zc=Hc=null,e.current=i,Q_(i),k2(),we=d,Re=u,dn.transition=a}else e.current=i;if(ua&&(ua=!1,mi=e,Qa=s),a=e.pendingLanes,a===0&&(wi=null),M2(i.stateNode),Wt(e,it()),t!==null)for(o=e.onRecoverableError,i=0;i<t.length;i++)s=t[i],o(s.value,{componentStack:s.stack,digest:s.digest});if(Ya)throw Ya=!1,e=dd,dd=null,e;return Qa&1&&e.tag!==0&&Do(),a=e.pendingLanes,a&1?e===fd?qr++:(qr=0,fd=e):qr=0,Li(),null}function Do(){if(mi!==null){var e=Hm(Qa),t=dn.transition,i=Re;try{if(dn.transition=null,Re=16>e?16:e,mi===null)var o=!1;else{if(e=mi,mi=null,Qa=0,we&6)throw Error(j(331));var s=we;for(we|=4,X=e.current;X!==null;){var a=X,u=a.child;if(X.flags&16){var d=a.deletions;if(d!==null){for(var f=0;f<d.length;f++){var h=d[f];for(X=h;X!==null;){var v=X;switch(v.tag){case 0:case 11:case 15:Kr(8,v,a)}var g=v.child;if(g!==null)g.return=v,X=g;else for(;X!==null;){v=X;var x=v.sibling,P=v.return;if(ng(v),v===h){X=null;break}if(x!==null){x.return=P,X=x;break}X=P}}}var S=a.alternate;if(S!==null){var b=S.child;if(b!==null){S.child=null;do{var A=b.sibling;b.sibling=null,b=A}while(b!==null)}}X=a}}if(a.subtreeFlags&2064&&u!==null)u.return=a,X=u;else e:for(;X!==null;){if(a=X,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Kr(9,a,a.return)}var w=a.sibling;if(w!==null){w.return=a.return,X=w;break e}X=a.return}}var y=e.current;for(X=y;X!==null;){u=X;var _=u.child;if(u.subtreeFlags&2064&&_!==null)_.return=u,X=_;else e:for(u=y;X!==null;){if(d=X,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:gl(9,d)}}catch(M){Je(d,d.return,M)}if(d===u){X=null;break e}var C=d.sibling;if(C!==null){C.return=d.return,X=C;break e}X=d.return}}if(we=s,Li(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(ll,e)}catch{}o=!0}return o}finally{Re=i,dn.transition=t}}return!1}function t1(e,t,i){t=qo(i,t),t=Z0(e,t,1),e=xi(e,t,1),t=Ot(),e!==null&&(bs(e,1,t),Wt(e,t))}function Je(e,t,i){if(e.tag===3)t1(e,e,i);else for(;t!==null;){if(t.tag===3){t1(t,e,i);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wi===null||!wi.has(o))){e=qo(i,e),e=V0(t,e,1),t=xi(t,e,1),e=Ot(),t!==null&&(bs(t,1,e),Wt(t,e));break}}t=t.return}}function i9(e,t,i){var o=e.pingCache;o!==null&&o.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&i,ht===e&&(_t&i)===i&&(dt===4||dt===3&&(_t&130023424)===_t&&500>it()-hf?Zi(e,0):pf|=i),Wt(e,t)}function fg(e,t){t===0&&(e.mode&1?(t=Js,Js<<=1,!(Js&130023424)&&(Js=4194304)):t=1);var i=Ot();e=ti(e,t),e!==null&&(bs(e,t,i),Wt(e,i))}function o9(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),fg(e,i)}function r9(e,t){var i=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(i=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(j(314))}o!==null&&o.delete(t),fg(e,i)}var pg;pg=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)$t=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return $t=!1,V_(e,t,i);$t=!!(e.flags&131072)}else $t=!1,je&&t.flags&1048576&&g0(t,ja,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ea(e,t),e=t.pendingProps;var s=Zo(t,kt.current);$o(t,i),s=af(null,t,o,e,s,i);var a=lf();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(o)?(a=!0,$a(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,tf(t),s.updater=hl,t.stateNode=s,s._reactInternals=t,ed(t,o,e,i),t=id(null,t,o,!0,a,i)):(t.tag=0,je&&a&&Gd(t),Rt(null,t,s,i),t=t.child),t;case 16:o=t.elementType;e:{switch(Ea(e,t),e=t.pendingProps,s=o._init,o=s(o._payload),t.type=o,s=t.tag=a9(o),e=wn(o,e),s){case 0:t=nd(null,t,o,e,i);break e;case 1:t=Zh(null,t,o,e,i);break e;case 11:t=Wh(null,t,o,e,i);break e;case 14:t=Hh(null,t,o,wn(o.type,e),i);break e}throw Error(j(306,o,""))}return t;case 0:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:wn(o,s),nd(e,t,o,s,i);case 1:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:wn(o,s),Zh(e,t,o,s,i);case 3:e:{if(Y0(t),e===null)throw Error(j(387));o=t.pendingProps,a=t.memoizedState,s=a.element,x0(e,t),Za(t,o,null,i);var u=t.memoizedState;if(o=u.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=qo(Error(j(423)),t),t=Vh(e,t,o,i,s);break e}else if(o!==s){s=qo(Error(j(424)),t),t=Vh(e,t,o,i,s);break e}else for(qt=_i(t.stateNode.containerInfo.firstChild),Yt=t,je=!0,En=null,i=S0(t,null,o,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Vo(),o===s){t=ni(e,t,i);break e}Rt(e,t,o,i)}t=t.child}return t;case 5:return C0(t),e===null&&Qc(t),o=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,u=s.children,Vc(o,s)?u=null:a!==null&&Vc(o,a)&&(t.flags|=32),q0(e,t),Rt(e,t,u,i),t.child;case 6:return e===null&&Qc(t),null;case 13:return Q0(e,t,i);case 4:return nf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ko(t,null,o,i):Rt(e,t,o,i),t.child;case 11:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:wn(o,s),Wh(e,t,o,s,i);case 7:return Rt(e,t,t.pendingProps,i),t.child;case 8:return Rt(e,t,t.pendingProps.children,i),t.child;case 12:return Rt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(o=t.type._context,s=t.pendingProps,a=t.memoizedProps,u=s.value,Ue(Wa,o._currentValue),o._currentValue=u,a!==null)if(Pn(a.value,u)){if(a.children===s.children&&!Dt.current){t=ni(e,t,i);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var d=a.dependencies;if(d!==null){u=a.child;for(var f=d.firstContext;f!==null;){if(f.context===o){if(a.tag===1){f=Xn(-1,i&-i),f.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var v=h.pending;v===null?f.next=f:(f.next=v.next,v.next=f),h.pending=f}}a.lanes|=i,f=a.alternate,f!==null&&(f.lanes|=i),Xc(a.return,i,t),d.lanes|=i;break}f=f.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(j(341));u.lanes|=i,d=u.alternate,d!==null&&(d.lanes|=i),Xc(u,i,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Rt(e,t,s.children,i),t=t.child}return t;case 9:return s=t.type,o=t.pendingProps.children,$o(t,i),s=pn(s),o=o(s),t.flags|=1,Rt(e,t,o,i),t.child;case 14:return o=t.type,s=wn(o,t.pendingProps),s=wn(o.type,s),Hh(e,t,o,s,i);case 15:return K0(e,t,t.type,t.pendingProps,i);case 17:return o=t.type,s=t.pendingProps,s=t.elementType===o?s:wn(o,s),Ea(e,t),t.tag=1,jt(o)?(e=!0,$a(t)):e=!1,$o(t,i),b0(t,o,s),ed(t,o,s,i),id(null,t,o,!0,e,i);case 19:return X0(e,t,i);case 22:return G0(e,t,i)}throw Error(j(156,t.tag))};function hg(e,t){return $m(e,t)}function s9(e,t,i,o){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,i,o){return new s9(e,t,i,o)}function vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a9(e){if(typeof e=="function")return vf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ud)return 11;if(e===Nd)return 14}return 2}function Ei(e,t){var i=e.alternate;return i===null?(i=cn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Pa(e,t,i,o,s,a){var u=2;if(o=e,typeof e=="function")vf(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case So:return Vi(i.children,s,a,t);case Ad:u=8,s|=8;break;case Sc:return e=cn(12,i,t,s|2),e.elementType=Sc,e.lanes=a,e;case Cc:return e=cn(13,i,t,s),e.elementType=Cc,e.lanes=a,e;case Pc:return e=cn(19,i,t,s),e.elementType=Pc,e.lanes=a,e;case Em:return vl(i,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wm:u=10;break e;case bm:u=9;break e;case Ud:u=11;break e;case Nd:u=14;break e;case ci:u=16,o=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=cn(u,i,t,s),t.elementType=e,t.type=o,t.lanes=a,t}function Vi(e,t,i,o){return e=cn(7,e,o,t),e.lanes=i,e}function vl(e,t,i,o){return e=cn(22,e,o,t),e.elementType=Em,e.lanes=i,e.stateNode={isHidden:!1},e}function cc(e,t,i){return e=cn(6,e,null,t),e.lanes=i,e}function dc(e,t,i){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l9(e,t,i,o,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function _f(e,t,i,o,s,a,u,d,f){return e=new l9(e,t,i,d,f),t===1?(t=1,a===!0&&(t|=8)):t=0,a=cn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(a),e}function u9(e,t,i){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:o==null?null:""+o,children:e,containerInfo:t,implementation:i}}function mg(e){if(!e)return Ci;e=e._reactInternals;e:{if(io(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var i=e.type;if(jt(i))return h0(e,i,t)}return t}function gg(e,t,i,o,s,a,u,d,f){return e=_f(i,o,!0,e,s,a,u,d,f),e.context=mg(null),i=e.current,o=Ot(),s=bi(i),a=Xn(o,s),a.callback=t??null,xi(i,a,s),e.current.lanes=s,bs(e,s,o),Wt(e,o),e}function _l(e,t,i,o){var s=t.current,a=Ot(),u=bi(s);return i=mg(i),t.context===null?t.context=i:t.pendingContext=i,t=Xn(a,u),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=xi(s,t,u),e!==null&&(Cn(e,s,u,a),xa(e,s,u)),u}function Ja(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function n1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function xf(e,t){n1(e,t),(e=e.alternate)&&n1(e,t)}function c9(){return null}var yg=typeof reportError=="function"?reportError:function(e){console.error(e)};function wf(e){this._internalRoot=e}xl.prototype.render=wf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));_l(e,t,null,null)};xl.prototype.unmount=wf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qi(function(){_l(null,e,null,null)}),t[ei]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Km();e={blockedOn:null,target:e,priority:t};for(var i=0;i<fi.length&&t!==0&&t<fi[i].priority;i++);fi.splice(i,0,e),i===0&&qm(e)}};function bf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function i1(){}function d9(e,t,i,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var h=Ja(u);a.call(h)}}var u=gg(t,o,e,0,null,!1,!1,"",i1);return e._reactRootContainer=u,e[ei]=u.current,ls(e.nodeType===8?e.parentNode:e),Qi(),u}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var d=o;o=function(){var h=Ja(f);d.call(h)}}var f=_f(e,0,!1,null,null,!1,!1,"",i1);return e._reactRootContainer=f,e[ei]=f.current,ls(e.nodeType===8?e.parentNode:e),Qi(function(){_l(t,f,i,o)}),f}function bl(e,t,i,o,s){var a=i._reactRootContainer;if(a){var u=a;if(typeof s=="function"){var d=s;s=function(){var f=Ja(u);d.call(f)}}_l(t,u,e,s)}else u=d9(i,t,e,s,o);return Ja(u)}Zm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Fr(t.pendingLanes);i!==0&&($d(t,i|1),Wt(t,it()),!(we&6)&&(Yo=it()+500,Li()))}break;case 13:Qi(function(){var o=ti(e,1);if(o!==null){var s=Ot();Cn(o,e,1,s)}}),xf(e,1)}};Dd=function(e){if(e.tag===13){var t=ti(e,134217728);if(t!==null){var i=Ot();Cn(t,e,134217728,i)}xf(e,134217728)}};Vm=function(e){if(e.tag===13){var t=bi(e),i=ti(e,t);if(i!==null){var o=Ot();Cn(i,e,t,o)}xf(e,t)}};Km=function(){return Re};Gm=function(e,t){var i=Re;try{return Re=e,t()}finally{Re=i}};Uc=function(e,t,i){switch(t){case"input":if(Lc(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var o=i[t];if(o!==e&&o.form===e.form){var s=fl(o);if(!s)throw Error(j(90));Cm(o),Lc(o,s)}}}break;case"textarea":km(e,i);break;case"select":t=i.value,t!=null&&Uo(e,!!i.multiple,t,!1)}};zm=mf;Am=Qi;var f9={usingClientEntryPoint:!1,Events:[Ss,To,fl,Im,Om,mf]},kr={findFiberByHostInstance:Di,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},p9={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fm(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||c9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{ll=ca.inject(p9),$n=ca}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f9;en.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(t))throw Error(j(200));return u9(e,t,null,i)};en.createRoot=function(e,t){if(!bf(e))throw Error(j(299));var i=!1,o="",s=yg;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=_f(e,1,!1,null,null,i,!1,o,s),e[ei]=t.current,ls(e.nodeType===8?e.parentNode:e),new wf(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Fm(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return Qi(e)};en.hydrate=function(e,t,i){if(!wl(t))throw Error(j(200));return bl(null,e,t,!0,i)};en.hydrateRoot=function(e,t,i){if(!bf(e))throw Error(j(405));var o=i!=null&&i.hydratedSources||null,s=!1,a="",u=yg;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),t=gg(t,null,e,1,i??null,s,!1,a,u),e[ei]=t.current,ls(e),o)for(e=0;e<o.length;e++)i=o[e],s=i._getVersion,s=s(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,s]:t.mutableSourceEagerHydrationData.push(i,s);return new xl(t)};en.render=function(e,t,i){if(!wl(t))throw Error(j(200));return bl(null,e,t,!1,i)};en.unmountComponentAtNode=function(e){if(!wl(e))throw Error(j(40));return e._reactRootContainer?(Qi(function(){bl(null,null,e,!1,function(){e._reactRootContainer=null,e[ei]=null})}),!0):!1};en.unstable_batchedUpdates=mf;en.unstable_renderSubtreeIntoContainer=function(e,t,i,o){if(!wl(i))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return bl(e,t,i,!1,o)};en.version="18.2.0-next-9e3b772b8-20220608";function vg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vg)}catch(e){console.error(e)}}vg(),gm.exports=en;var Ps=gm.exports;const da=sl(Ps);var o1=Ps;bc.createRoot=o1.createRoot,bc.hydrateRoot=o1.hydrateRoot;const h9={black:"#000",white:"#fff"},ys=h9,m9={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},go=m9,g9={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},yo=g9,y9={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},vo=y9,v9={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},_o=v9,_9={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},xo=_9,x9={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Tr=x9,w9={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},b9=w9;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},T.apply(this,arguments)}function $i(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function _g(e){if(!$i(e))return e;const t={};return Object.keys(e).forEach(i=>{t[i]=_g(e[i])}),t}function fn(e,t,i={clone:!0}){const o=i.clone?T({},e):e;return $i(e)&&$i(t)&&Object.keys(t).forEach(s=>{s!=="__proto__"&&($i(t[s])&&s in e&&$i(e[s])?o[s]=fn(e[s],t[s],i):i.clone?o[s]=$i(t[s])?_g(t[s]):t[s]:o[s]=t[s])}),o}function Pi(e){let t="https://mui.com/production-error/?code="+e;for(let i=1;i<arguments.length;i+=1)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var Oe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef=Symbol.for("react.element"),Sf=Symbol.for("react.portal"),El=Symbol.for("react.fragment"),Sl=Symbol.for("react.strict_mode"),Cl=Symbol.for("react.profiler"),Pl=Symbol.for("react.provider"),kl=Symbol.for("react.context"),E9=Symbol.for("react.server_context"),Tl=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),Il=Symbol.for("react.lazy"),S9=Symbol.for("react.offscreen"),xg;xg=Symbol.for("react.module.reference");function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ef:switch(e=e.type,e){case El:case Cl:case Sl:case Ll:case Ml:return e;default:switch(e=e&&e.$$typeof,e){case E9:case kl:case Tl:case Il:case Rl:case Pl:return e;default:return t}}case Sf:return t}}}Oe.ContextConsumer=kl;Oe.ContextProvider=Pl;Oe.Element=Ef;Oe.ForwardRef=Tl;Oe.Fragment=El;Oe.Lazy=Il;Oe.Memo=Rl;Oe.Portal=Sf;Oe.Profiler=Cl;Oe.StrictMode=Sl;Oe.Suspense=Ll;Oe.SuspenseList=Ml;Oe.isAsyncMode=function(){return!1};Oe.isConcurrentMode=function(){return!1};Oe.isContextConsumer=function(e){return mn(e)===kl};Oe.isContextProvider=function(e){return mn(e)===Pl};Oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ef};Oe.isForwardRef=function(e){return mn(e)===Tl};Oe.isFragment=function(e){return mn(e)===El};Oe.isLazy=function(e){return mn(e)===Il};Oe.isMemo=function(e){return mn(e)===Rl};Oe.isPortal=function(e){return mn(e)===Sf};Oe.isProfiler=function(e){return mn(e)===Cl};Oe.isStrictMode=function(e){return mn(e)===Sl};Oe.isSuspense=function(e){return mn(e)===Ll};Oe.isSuspenseList=function(e){return mn(e)===Ml};Oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===El||e===Cl||e===Sl||e===Ll||e===Ml||e===S9||typeof e=="object"&&e!==null&&(e.$$typeof===Il||e.$$typeof===Rl||e.$$typeof===Pl||e.$$typeof===kl||e.$$typeof===Tl||e.$$typeof===xg||e.getModuleId!==void 0)};Oe.typeOf=mn;function Ee(e){if(typeof e!="string")throw new Error(Pi(7));return e.charAt(0).toUpperCase()+e.slice(1)}function r1(...e){return e.reduce((t,i)=>i==null?t:function(...s){t.apply(this,s),i.apply(this,s)},()=>{})}function wg(e,t=166){let i;function o(...s){const a=()=>{e.apply(this,s)};clearTimeout(i),i=setTimeout(a,t)}return o.clear=()=>{clearTimeout(i)},o}function fc(e,t){return E.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}function Qt(e){return e&&e.ownerDocument||document}function Xi(e){return Qt(e).defaultView||window}function md(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const C9=typeof window<"u"?E.useLayoutEffect:E.useEffect,Ji=C9;let s1=0;function P9(e){const[t,i]=E.useState(e),o=e||t;return E.useEffect(()=>{t==null&&(s1+=1,i(`mui-${s1}`))},[t]),o}const a1=wc["useId".toString()];function k9(e){if(a1!==void 0){const t=a1();return e??t}return P9(e)}function l1({controlled:e,default:t,name:i,state:o="value"}){const{current:s}=E.useRef(e!==void 0),[a,u]=E.useState(t),d=s?e:a,f=E.useCallback(h=>{s||u(h)},[]);return[d,f]}function Ao(e){const t=E.useRef(e);return Ji(()=>{t.current=e}),E.useCallback((...i)=>(0,t.current)(...i),[])}function zt(...e){return E.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(i=>{md(i,t)})},e)}let Ol=!0,gd=!1,u1;const T9={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function L9(e){const{type:t,tagName:i}=e;return!!(i==="INPUT"&&T9[t]&&!e.readOnly||i==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function M9(e){e.metaKey||e.altKey||e.ctrlKey||(Ol=!0)}function pc(){Ol=!1}function R9(){this.visibilityState==="hidden"&&gd&&(Ol=!0)}function I9(e){e.addEventListener("keydown",M9,!0),e.addEventListener("mousedown",pc,!0),e.addEventListener("pointerdown",pc,!0),e.addEventListener("touchstart",pc,!0),e.addEventListener("visibilitychange",R9,!0)}function O9(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Ol||L9(t)}function z9(){const e=E.useCallback(s=>{s!=null&&I9(s.ownerDocument)},[]),t=E.useRef(!1);function i(){return t.current?(gd=!0,window.clearTimeout(u1),u1=window.setTimeout(()=>{gd=!1},100),t.current=!1,!0):!1}function o(s){return O9(s)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:i,ref:e}}function bg(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Cf(e,t){const i=T({},t);return Object.keys(e).forEach(o=>{if(o.toString().match(/^(components|slots)$/))i[o]=T({},e[o],i[o]);else if(o.toString().match(/^(componentsProps|slotProps)$/)){const s=e[o]||{},a=t[o];i[o]={},!a||!Object.keys(a)?i[o]=s:!s||!Object.keys(s)?i[o]=a:(i[o]=T({},a),Object.keys(s).forEach(u=>{i[o][u]=Cf(s[u],a[u])}))}else i[o]===void 0&&(i[o]=e[o])}),i}function et(e,t,i=void 0){const o={};return Object.keys(e).forEach(s=>{o[s]=e[s].reduce((a,u)=>{if(u){const d=t(u);d!==""&&a.push(d),i&&i[u]&&a.push(i[u])}return a},[]).join(" ")}),o}const c1=e=>e,A9=()=>{let e=c1;return{configure(t){e=t},generate(t){return e(t)},reset(){e=c1}}},U9=A9(),Eg=U9,N9={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ge(e,t,i="Mui"){const o=N9[t];return o?`${i}-${o}`:`${Eg.generate(e)}-${t}`}function Ne(e,t,i="Mui"){const o={};return t.forEach(s=>{o[s]=Ge(e,s,i)}),o}const eo="$$material";function ue(e,t){if(e==null)return{};var i={},o=Object.keys(e),s,a;for(a=0;a<o.length;a++)s=o[a],!(t.indexOf(s)>=0)&&(i[s]=e[s]);return i}function Sg(e){var t=Object.create(null);return function(i){return t[i]===void 0&&(t[i]=e(i)),t[i]}}var F9=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,B9=Sg(function(e){return F9.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function $9(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function D9(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var j9=function(){function e(i){var o=this;this._insertTag=function(s){var a;o.tags.length===0?o.insertionPoint?a=o.insertionPoint.nextSibling:o.prepend?a=o.container.firstChild:a=o.before:a=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(s,a),o.tags.push(s)},this.isSpeedy=i.speedy===void 0?!0:i.speedy,this.tags=[],this.ctr=0,this.nonce=i.nonce,this.key=i.key,this.container=i.container,this.prepend=i.prepend,this.insertionPoint=i.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(o){o.forEach(this._insertTag)},t.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(D9(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var a=$9(s);try{a.insertRule(o,a.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(o));this.ctr++},t.flush=function(){this.tags.forEach(function(o){return o.parentNode&&o.parentNode.removeChild(o)}),this.tags=[],this.ctr=0},e}(),Ct="-ms-",el="-moz-",Ce="-webkit-",Cg="comm",Pf="rule",kf="decl",W9="@import",Pg="@keyframes",H9="@layer",Z9=Math.abs,zl=String.fromCharCode,V9=Object.assign;function K9(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function kg(e){return e.trim()}function G9(e,t){return(e=t.exec(e))?e[0]:e}function Pe(e,t,i){return e.replace(t,i)}function yd(e,t){return e.indexOf(t)}function vt(e,t){return e.charCodeAt(t)|0}function vs(e,t,i){return e.slice(t,i)}function An(e){return e.length}function Tf(e){return e.length}function fa(e,t){return t.push(e),e}function q9(e,t){return e.map(t).join("")}var Al=1,Qo=1,Tg=0,Ht=0,lt=0,ir="";function Ul(e,t,i,o,s,a,u){return{value:e,root:t,parent:i,type:o,props:s,children:a,line:Al,column:Qo,length:u,return:""}}function Lr(e,t){return V9(Ul("",null,null,"",null,null,0),e,{length:-e.length},t)}function Y9(){return lt}function Q9(){return lt=Ht>0?vt(ir,--Ht):0,Qo--,lt===10&&(Qo=1,Al--),lt}function Xt(){return lt=Ht<Tg?vt(ir,Ht++):0,Qo++,lt===10&&(Qo=1,Al++),lt}function jn(){return vt(ir,Ht)}function ka(){return Ht}function ks(e,t){return vs(ir,e,t)}function _s(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lg(e){return Al=Qo=1,Tg=An(ir=e),Ht=0,[]}function Mg(e){return ir="",e}function Ta(e){return kg(ks(Ht-1,vd(e===91?e+2:e===40?e+1:e)))}function X9(e){for(;(lt=jn())&&lt<33;)Xt();return _s(e)>2||_s(lt)>3?"":" "}function J9(e,t){for(;--t&&Xt()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return ks(e,ka()+(t<6&&jn()==32&&Xt()==32))}function vd(e){for(;Xt();)switch(lt){case e:return Ht;case 34:case 39:e!==34&&e!==39&&vd(lt);break;case 40:e===41&&vd(e);break;case 92:Xt();break}return Ht}function ex(e,t){for(;Xt()&&e+lt!==47+10;)if(e+lt===42+42&&jn()===47)break;return"/*"+ks(t,Ht-1)+"*"+zl(e===47?e:Xt())}function tx(e){for(;!_s(jn());)Xt();return ks(e,Ht)}function nx(e){return Mg(La("",null,null,null,[""],e=Lg(e),0,[0],e))}function La(e,t,i,o,s,a,u,d,f){for(var h=0,v=0,g=u,x=0,P=0,S=0,b=1,A=1,w=1,y=0,_="",C=s,M=a,I=o,R=_;A;)switch(S=y,y=Xt()){case 40:if(S!=108&&vt(R,g-1)==58){yd(R+=Pe(Ta(y),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:R+=Ta(y);break;case 9:case 10:case 13:case 32:R+=X9(S);break;case 92:R+=J9(ka()-1,7);continue;case 47:switch(jn()){case 42:case 47:fa(ix(ex(Xt(),ka()),t,i),f);break;default:R+="/"}break;case 123*b:d[h++]=An(R)*w;case 125*b:case 59:case 0:switch(y){case 0:case 125:A=0;case 59+v:w==-1&&(R=Pe(R,/\f/g,"")),P>0&&An(R)-g&&fa(P>32?f1(R+";",o,i,g-1):f1(Pe(R," ","")+";",o,i,g-2),f);break;case 59:R+=";";default:if(fa(I=d1(R,t,i,h,v,s,d,_,C=[],M=[],g),a),y===123)if(v===0)La(R,t,I,I,C,a,g,d,M);else switch(x===99&&vt(R,3)===110?100:x){case 100:case 108:case 109:case 115:La(e,I,I,o&&fa(d1(e,I,I,0,0,s,d,_,s,C=[],g),M),s,M,g,d,o?C:M);break;default:La(R,I,I,I,[""],M,0,d,M)}}h=v=P=0,b=w=1,_=R="",g=u;break;case 58:g=1+An(R),P=S;default:if(b<1){if(y==123)--b;else if(y==125&&b++==0&&Q9()==125)continue}switch(R+=zl(y),y*b){case 38:w=v>0?1:(R+="\f",-1);break;case 44:d[h++]=(An(R)-1)*w,w=1;break;case 64:jn()===45&&(R+=Ta(Xt())),x=jn(),v=g=An(_=R+=tx(ka())),y++;break;case 45:S===45&&An(R)==2&&(b=0)}}return a}function d1(e,t,i,o,s,a,u,d,f,h,v){for(var g=s-1,x=s===0?a:[""],P=Tf(x),S=0,b=0,A=0;S<o;++S)for(var w=0,y=vs(e,g+1,g=Z9(b=u[S])),_=e;w<P;++w)(_=kg(b>0?x[w]+" "+y:Pe(y,/&\f/g,x[w])))&&(f[A++]=_);return Ul(e,t,i,s===0?Pf:d,f,h,v)}function ix(e,t,i){return Ul(e,t,i,Cg,zl(Y9()),vs(e,2,-2),0)}function f1(e,t,i,o){return Ul(e,t,i,kf,vs(e,0,o),vs(e,o+1,-1),o)}function jo(e,t){for(var i="",o=Tf(e),s=0;s<o;s++)i+=t(e[s],s,e,t)||"";return i}function ox(e,t,i,o){switch(e.type){case H9:if(e.children.length)break;case W9:case kf:return e.return=e.return||e.value;case Cg:return"";case Pg:return e.return=e.value+"{"+jo(e.children,o)+"}";case Pf:e.value=e.props.join(",")}return An(i=jo(e.children,o))?e.return=e.value+"{"+i+"}":""}function rx(e){var t=Tf(e);return function(i,o,s,a){for(var u="",d=0;d<t;d++)u+=e[d](i,o,s,a)||"";return u}}function sx(e){return function(t){t.root||(t=t.return)&&e(t)}}var ax=function(t,i,o){for(var s=0,a=0;s=a,a=jn(),s===38&&a===12&&(i[o]=1),!_s(a);)Xt();return ks(t,Ht)},lx=function(t,i){var o=-1,s=44;do switch(_s(s)){case 0:s===38&&jn()===12&&(i[o]=1),t[o]+=ax(Ht-1,i,o);break;case 2:t[o]+=Ta(s);break;case 4:if(s===44){t[++o]=jn()===58?"&\f":"",i[o]=t[o].length;break}default:t[o]+=zl(s)}while(s=Xt());return t},ux=function(t,i){return Mg(lx(Lg(t),i))},p1=new WeakMap,cx=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var i=t.value,o=t.parent,s=t.column===o.column&&t.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(t.props.length===1&&i.charCodeAt(0)!==58&&!p1.get(o))&&!s){p1.set(t,!0);for(var a=[],u=ux(i,a),d=o.props,f=0,h=0;f<u.length;f++)for(var v=0;v<d.length;v++,h++)t.props[h]=a[f]?u[f].replace(/&\f/g,d[v]):d[v]+" "+u[f]}}},dx=function(t){if(t.type==="decl"){var i=t.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(t.return="",t.value="")}};function Rg(e,t){switch(K9(e,t)){case 5103:return Ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+e+el+e+Ct+e+e;case 6828:case 4268:return Ce+e+Ct+e+e;case 6165:return Ce+e+Ct+"flex-"+e+e;case 5187:return Ce+e+Pe(e,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+Ct+"flex-$1$2")+e;case 5443:return Ce+e+Ct+"flex-item-"+Pe(e,/flex-|-self/,"")+e;case 4675:return Ce+e+Ct+"flex-line-pack"+Pe(e,/align-content|flex-|-self/,"")+e;case 5548:return Ce+e+Ct+Pe(e,"shrink","negative")+e;case 5292:return Ce+e+Ct+Pe(e,"basis","preferred-size")+e;case 6060:return Ce+"box-"+Pe(e,"-grow","")+Ce+e+Ct+Pe(e,"grow","positive")+e;case 4554:return Ce+Pe(e,/([^-])(transform)/g,"$1"+Ce+"$2")+e;case 6187:return Pe(Pe(Pe(e,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),e,"")+e;case 5495:case 3959:return Pe(e,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return Pe(Pe(e,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+Ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+e+e;case 4095:case 3583:case 4068:case 2532:return Pe(e,/(.+)-inline(.+)/,Ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return Pe(e,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+el+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yd(e,"stretch")?Rg(Pe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(vt(e,t+1)!==115)break;case 6444:switch(vt(e,An(e)-3-(~yd(e,"!important")&&10))){case 107:return Pe(e,":",":"+Ce)+e;case 101:return Pe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ce+(vt(e,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+Ct+"$2box$3")+e}break;case 5936:switch(vt(e,t+11)){case 114:return Ce+e+Ct+Pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ce+e+Ct+Pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ce+e+Ct+Pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Ce+e+Ct+e+e}return e}var fx=function(t,i,o,s){if(t.length>-1&&!t.return)switch(t.type){case kf:t.return=Rg(t.value,t.length);break;case Pg:return jo([Lr(t,{value:Pe(t.value,"@","@"+Ce)})],s);case Pf:if(t.length)return q9(t.props,function(a){switch(G9(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return jo([Lr(t,{props:[Pe(a,/:(read-\w+)/,":"+el+"$1")]})],s);case"::placeholder":return jo([Lr(t,{props:[Pe(a,/:(plac\w+)/,":"+Ce+"input-$1")]}),Lr(t,{props:[Pe(a,/:(plac\w+)/,":"+el+"$1")]}),Lr(t,{props:[Pe(a,/:(plac\w+)/,Ct+"input-$1")]})],s)}return""})}},px=[fx],hx=function(t){var i=t.key;if(i==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(b){var A=b.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var s=t.stylisPlugins||px,a={},u,d=[];u=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(b){for(var A=b.getAttribute("data-emotion").split(" "),w=1;w<A.length;w++)a[A[w]]=!0;d.push(b)});var f,h=[cx,dx];{var v,g=[ox,sx(function(b){v.insert(b)})],x=rx(h.concat(s,g)),P=function(A){return jo(nx(A),x)};f=function(A,w,y,_){v=y,P(A?A+"{"+w.styles+"}":w.styles),_&&(S.inserted[w.name]=!0)}}var S={key:i,sheet:new j9({key:i,container:u,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:f};return S.sheet.hydrate(d),S},Ig={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mt=typeof Symbol=="function"&&Symbol.for,Lf=mt?Symbol.for("react.element"):60103,Mf=mt?Symbol.for("react.portal"):60106,Nl=mt?Symbol.for("react.fragment"):60107,Fl=mt?Symbol.for("react.strict_mode"):60108,Bl=mt?Symbol.for("react.profiler"):60114,$l=mt?Symbol.for("react.provider"):60109,Dl=mt?Symbol.for("react.context"):60110,Rf=mt?Symbol.for("react.async_mode"):60111,jl=mt?Symbol.for("react.concurrent_mode"):60111,Wl=mt?Symbol.for("react.forward_ref"):60112,Hl=mt?Symbol.for("react.suspense"):60113,mx=mt?Symbol.for("react.suspense_list"):60120,Zl=mt?Symbol.for("react.memo"):60115,Vl=mt?Symbol.for("react.lazy"):60116,gx=mt?Symbol.for("react.block"):60121,yx=mt?Symbol.for("react.fundamental"):60117,vx=mt?Symbol.for("react.responder"):60118,_x=mt?Symbol.for("react.scope"):60119;function nn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Lf:switch(e=e.type,e){case Rf:case jl:case Nl:case Bl:case Fl:case Hl:return e;default:switch(e=e&&e.$$typeof,e){case Dl:case Wl:case Vl:case Zl:case $l:return e;default:return t}}case Mf:return t}}}function Og(e){return nn(e)===jl}Ie.AsyncMode=Rf;Ie.ConcurrentMode=jl;Ie.ContextConsumer=Dl;Ie.ContextProvider=$l;Ie.Element=Lf;Ie.ForwardRef=Wl;Ie.Fragment=Nl;Ie.Lazy=Vl;Ie.Memo=Zl;Ie.Portal=Mf;Ie.Profiler=Bl;Ie.StrictMode=Fl;Ie.Suspense=Hl;Ie.isAsyncMode=function(e){return Og(e)||nn(e)===Rf};Ie.isConcurrentMode=Og;Ie.isContextConsumer=function(e){return nn(e)===Dl};Ie.isContextProvider=function(e){return nn(e)===$l};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lf};Ie.isForwardRef=function(e){return nn(e)===Wl};Ie.isFragment=function(e){return nn(e)===Nl};Ie.isLazy=function(e){return nn(e)===Vl};Ie.isMemo=function(e){return nn(e)===Zl};Ie.isPortal=function(e){return nn(e)===Mf};Ie.isProfiler=function(e){return nn(e)===Bl};Ie.isStrictMode=function(e){return nn(e)===Fl};Ie.isSuspense=function(e){return nn(e)===Hl};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Nl||e===jl||e===Bl||e===Fl||e===Hl||e===mx||typeof e=="object"&&e!==null&&(e.$$typeof===Vl||e.$$typeof===Zl||e.$$typeof===$l||e.$$typeof===Dl||e.$$typeof===Wl||e.$$typeof===yx||e.$$typeof===vx||e.$$typeof===_x||e.$$typeof===gx)};Ie.typeOf=nn;Ig.exports=Ie;var xx=Ig.exports,zg=xx,wx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ag={};Ag[zg.ForwardRef]=wx;Ag[zg.Memo]=bx;var Ex=!0;function Sx(e,t,i){var o="";return i.split(" ").forEach(function(s){e[s]!==void 0?t.push(e[s]+";"):o+=s+" "}),o}var Ug=function(t,i,o){var s=t.key+"-"+i.name;(o===!1||Ex===!1)&&t.registered[s]===void 0&&(t.registered[s]=i.styles)},Ng=function(t,i,o){Ug(t,i,o);var s=t.key+"-"+i.name;if(t.inserted[i.name]===void 0){var a=i;do t.insert(i===a?"."+s:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function Cx(e){for(var t=0,i,o=0,s=e.length;s>=4;++o,s-=4)i=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,i=(i&65535)*1540483477+((i>>>16)*59797<<16),i^=i>>>24,t=(i&65535)*1540483477+((i>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(s){case 3:t^=(e.charCodeAt(o+2)&255)<<16;case 2:t^=(e.charCodeAt(o+1)&255)<<8;case 1:t^=e.charCodeAt(o)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Px={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kx=/[A-Z]|^ms/g,Tx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Fg=function(t){return t.charCodeAt(1)===45},h1=function(t){return t!=null&&typeof t!="boolean"},hc=Sg(function(e){return Fg(e)?e:e.replace(kx,"-$&").toLowerCase()}),m1=function(t,i){switch(t){case"animation":case"animationName":if(typeof i=="string")return i.replace(Tx,function(o,s,a){return Un={name:s,styles:a,next:Un},s})}return Px[t]!==1&&!Fg(t)&&typeof i=="number"&&i!==0?i+"px":i};function xs(e,t,i){if(i==null)return"";if(i.__emotion_styles!==void 0)return i;switch(typeof i){case"boolean":return"";case"object":{if(i.anim===1)return Un={name:i.name,styles:i.styles,next:Un},i.name;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)Un={name:o.name,styles:o.styles,next:Un},o=o.next;var s=i.styles+";";return s}return Lx(e,t,i)}case"function":{if(e!==void 0){var a=Un,u=i(e);return Un=a,xs(e,t,u)}break}}if(t==null)return i;var d=t[i];return d!==void 0?d:i}function Lx(e,t,i){var o="";if(Array.isArray(i))for(var s=0;s<i.length;s++)o+=xs(e,t,i[s])+";";else for(var a in i){var u=i[a];if(typeof u!="object")t!=null&&t[u]!==void 0?o+=a+"{"+t[u]+"}":h1(u)&&(o+=hc(a)+":"+m1(a,u)+";");else if(Array.isArray(u)&&typeof u[0]=="string"&&(t==null||t[u[0]]===void 0))for(var d=0;d<u.length;d++)h1(u[d])&&(o+=hc(a)+":"+m1(a,u[d])+";");else{var f=xs(e,t,u);switch(a){case"animation":case"animationName":{o+=hc(a)+":"+f+";";break}default:o+=a+"{"+f+"}"}}}return o}var g1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Un,If=function(t,i,o){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var s=!0,a="";Un=void 0;var u=t[0];u==null||u.raw===void 0?(s=!1,a+=xs(o,i,u)):a+=u[0];for(var d=1;d<t.length;d++)a+=xs(o,i,t[d]),s&&(a+=u[d]);g1.lastIndex=0;for(var f="",h;(h=g1.exec(a))!==null;)f+="-"+h[1];var v=Cx(a)+f;return{name:v,styles:a,next:Un}},Mx=function(t){return t()},Bg=wc["useInsertionEffect"]?wc["useInsertionEffect"]:!1,Rx=Bg||Mx,y1=Bg||E.useLayoutEffect,$g=E.createContext(typeof HTMLElement<"u"?hx({key:"css"}):null);$g.Provider;var Dg=function(t){return E.forwardRef(function(i,o){var s=E.useContext($g);return t(i,s,o)})},Kl=E.createContext({}),Ix=Dg(function(e,t){var i=e.styles,o=If([i],void 0,E.useContext(Kl)),s=E.useRef();return y1(function(){var a=t.key+"-global",u=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),d=!1,f=document.querySelector('style[data-emotion="'+a+" "+o.name+'"]');return t.sheet.tags.length&&(u.before=t.sheet.tags[0]),f!==null&&(d=!0,f.setAttribute("data-emotion",a),u.hydrate([f])),s.current=[u,d],function(){u.flush()}},[t]),y1(function(){var a=s.current,u=a[0],d=a[1];if(d){a[1]=!1;return}if(o.next!==void 0&&Ng(t,o.next,!0),u.tags.length){var f=u.tags[u.tags.length-1].nextElementSibling;u.before=f,u.flush()}t.insert("",o,u,!1)},[t,o.name]),null});function Ox(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return If(t)}var Of=function(){var t=Ox.apply(void 0,arguments),i="animation-"+t.name;return{name:i,styles:"@keyframes "+i+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},zx=B9,Ax=function(t){return t!=="theme"},v1=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?zx:Ax},_1=function(t,i,o){var s;if(i){var a=i.shouldForwardProp;s=t.__emotion_forwardProp&&a?function(u){return t.__emotion_forwardProp(u)&&a(u)}:a}return typeof s!="function"&&o&&(s=t.__emotion_forwardProp),s},Ux=function(t){var i=t.cache,o=t.serialized,s=t.isStringTag;return Ug(i,o,s),Rx(function(){return Ng(i,o,s)}),null},Nx=function e(t,i){var o=t.__emotion_real===t,s=o&&t.__emotion_base||t,a,u;i!==void 0&&(a=i.label,u=i.target);var d=_1(t,i,o),f=d||v1(s),h=!f("as");return function(){var v=arguments,g=o&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&g.push("label:"+a+";"),v[0]==null||v[0].raw===void 0)g.push.apply(g,v);else{g.push(v[0][0]);for(var x=v.length,P=1;P<x;P++)g.push(v[P],v[0][P])}var S=Dg(function(b,A,w){var y=h&&b.as||s,_="",C=[],M=b;if(b.theme==null){M={};for(var I in b)M[I]=b[I];M.theme=E.useContext(Kl)}typeof b.className=="string"?_=Sx(A.registered,C,b.className):b.className!=null&&(_=b.className+" ");var R=If(g.concat(C),A.registered,M);_+=A.key+"-"+R.name,u!==void 0&&(_+=" "+u);var N=h&&d===void 0?v1(y):f,K={};for(var $ in b)h&&$==="as"||N($)&&(K[$]=b[$]);return K.className=_,K.ref=w,E.createElement(E.Fragment,null,E.createElement(Ux,{cache:A,serialized:R,isStringTag:typeof y=="string"}),E.createElement(y,K))});return S.displayName=a!==void 0?a:"Styled("+(typeof s=="string"?s:s.displayName||s.name||"Component")+")",S.defaultProps=t.defaultProps,S.__emotion_real=S,S.__emotion_base=s,S.__emotion_styles=g,S.__emotion_forwardProp=d,Object.defineProperty(S,"toString",{value:function(){return"."+u}}),S.withComponent=function(b,A){return e(b,T({},i,A,{shouldForwardProp:_1(S,A,!0)})).apply(void 0,g)},S}},Fx=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],_d=Nx.bind();Fx.forEach(function(e){_d[e]=_d(e)});function Bx(e){return e==null||Object.keys(e).length===0}function $x(e){const{styles:t,defaultTheme:i={}}=e,o=typeof t=="function"?s=>t(Bx(s)?i:s):t;return F.jsx(Ix,{styles:o})}/**
 * @mui/styled-engine v5.14.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function jg(e,t){return _d(e,t)}const Dx=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},jx=["values","unit","step"],Wx=e=>{const t=Object.keys(e).map(i=>({key:i,val:e[i]}))||[];return t.sort((i,o)=>i.val-o.val),t.reduce((i,o)=>T({},i,{[o.key]:o.val}),{})};function Hx(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:i="px",step:o=5}=e,s=ue(e,jx),a=Wx(t),u=Object.keys(a);function d(x){return`@media (min-width:${typeof t[x]=="number"?t[x]:x}${i})`}function f(x){return`@media (max-width:${(typeof t[x]=="number"?t[x]:x)-o/100}${i})`}function h(x,P){const S=u.indexOf(P);return`@media (min-width:${typeof t[x]=="number"?t[x]:x}${i}) and (max-width:${(S!==-1&&typeof t[u[S]]=="number"?t[u[S]]:P)-o/100}${i})`}function v(x){return u.indexOf(x)+1<u.length?h(x,u[u.indexOf(x)+1]):d(x)}function g(x){const P=u.indexOf(x);return P===0?d(u[1]):P===u.length-1?f(u[P]):h(x,u[u.indexOf(x)+1]).replace("@media","@media not all and")}return T({keys:u,values:a,up:d,down:f,between:h,only:v,not:g,unit:i},s)}const Zx={borderRadius:4},Vx=Zx;function Yr(e,t){return t?fn(e,t,{clone:!1}):e}const zf={xs:0,sm:600,md:900,lg:1200,xl:1536},x1={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${zf[e]}px)`};function ii(e,t,i){const o=e.theme||{};if(Array.isArray(t)){const a=o.breakpoints||x1;return t.reduce((u,d,f)=>(u[a.up(a.keys[f])]=i(t[f]),u),{})}if(typeof t=="object"){const a=o.breakpoints||x1;return Object.keys(t).reduce((u,d)=>{if(Object.keys(a.values||zf).indexOf(d)!==-1){const f=a.up(d);u[f]=i(t[d],d)}else{const f=d;u[f]=t[f]}return u},{})}return i(t)}function Kx(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((o,s)=>{const a=e.up(s);return o[a]={},o},{}))||{}}function Gx(e,t){return e.reduce((i,o)=>{const s=i[o];return(!s||Object.keys(s).length===0)&&delete i[o],i},t)}function Gl(e,t,i=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&i){const o=`vars.${t}`.split(".").reduce((s,a)=>s&&s[a]?s[a]:null,e);if(o!=null)return o}return t.split(".").reduce((o,s)=>o&&o[s]!=null?o[s]:null,e)}function tl(e,t,i,o=i){let s;return typeof e=="function"?s=e(i):Array.isArray(e)?s=e[i]||o:s=Gl(e,i)||o,t&&(s=t(s,o,e)),s}function Te(e){const{prop:t,cssProperty:i=e.prop,themeKey:o,transform:s}=e,a=u=>{if(u[t]==null)return null;const d=u[t],f=u.theme,h=Gl(f,o)||{};return ii(u,d,g=>{let x=tl(h,s,g);return g===x&&typeof g=="string"&&(x=tl(h,s,`${t}${g==="default"?"":Ee(g)}`,g)),i===!1?x:{[i]:x}})};return a.propTypes={},a.filterProps=[t],a}function qx(e){const t={};return i=>(t[i]===void 0&&(t[i]=e(i)),t[i])}const Yx={m:"margin",p:"padding"},Qx={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},w1={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},Xx=qx(e=>{if(e.length>2)if(w1[e])e=w1[e];else return[e];const[t,i]=e.split(""),o=Yx[t],s=Qx[i]||"";return Array.isArray(s)?s.map(a=>o+a):[o+s]}),Af=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Uf=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Af,...Uf];function Ts(e,t,i,o){var s;const a=(s=Gl(e,t,!1))!=null?s:i;return typeof a=="number"?u=>typeof u=="string"?u:a*u:Array.isArray(a)?u=>typeof u=="string"?u:a[u]:typeof a=="function"?a:()=>{}}function Wg(e){return Ts(e,"spacing",8)}function Ls(e,t){if(typeof t=="string"||t==null)return t;const i=Math.abs(t),o=e(i);return t>=0?o:typeof o=="number"?-o:`-${o}`}function Jx(e,t){return i=>e.reduce((o,s)=>(o[s]=Ls(t,i),o),{})}function ew(e,t,i,o){if(t.indexOf(i)===-1)return null;const s=Xx(i),a=Jx(s,o),u=e[i];return ii(e,u,a)}function Hg(e,t){const i=Wg(e.theme);return Object.keys(e).map(o=>ew(e,t,o,i)).reduce(Yr,{})}function Qe(e){return Hg(e,Af)}Qe.propTypes={};Qe.filterProps=Af;function Xe(e){return Hg(e,Uf)}Xe.propTypes={};Xe.filterProps=Uf;function tw(e=8){if(e.mui)return e;const t=Wg({spacing:e}),i=(...o)=>(o.length===0?[1]:o).map(a=>{const u=t(a);return typeof u=="number"?`${u}px`:u}).join(" ");return i.mui=!0,i}function ql(...e){const t=e.reduce((o,s)=>(s.filterProps.forEach(a=>{o[a]=s}),o),{}),i=o=>Object.keys(o).reduce((s,a)=>t[a]?Yr(s,t[a](o)):s,{});return i.propTypes={},i.filterProps=e.reduce((o,s)=>o.concat(s.filterProps),[]),i}function Fn(e){return typeof e!="number"?e:`${e}px solid`}const nw=Te({prop:"border",themeKey:"borders",transform:Fn}),iw=Te({prop:"borderTop",themeKey:"borders",transform:Fn}),ow=Te({prop:"borderRight",themeKey:"borders",transform:Fn}),rw=Te({prop:"borderBottom",themeKey:"borders",transform:Fn}),sw=Te({prop:"borderLeft",themeKey:"borders",transform:Fn}),aw=Te({prop:"borderColor",themeKey:"palette"}),lw=Te({prop:"borderTopColor",themeKey:"palette"}),uw=Te({prop:"borderRightColor",themeKey:"palette"}),cw=Te({prop:"borderBottomColor",themeKey:"palette"}),dw=Te({prop:"borderLeftColor",themeKey:"palette"}),Yl=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Ts(e.theme,"shape.borderRadius",4),i=o=>({borderRadius:Ls(t,o)});return ii(e,e.borderRadius,i)}return null};Yl.propTypes={};Yl.filterProps=["borderRadius"];ql(nw,iw,ow,rw,sw,aw,lw,uw,cw,dw,Yl);const Ql=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Ts(e.theme,"spacing",8),i=o=>({gap:Ls(t,o)});return ii(e,e.gap,i)}return null};Ql.propTypes={};Ql.filterProps=["gap"];const Xl=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Ts(e.theme,"spacing",8),i=o=>({columnGap:Ls(t,o)});return ii(e,e.columnGap,i)}return null};Xl.propTypes={};Xl.filterProps=["columnGap"];const Jl=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Ts(e.theme,"spacing",8),i=o=>({rowGap:Ls(t,o)});return ii(e,e.rowGap,i)}return null};Jl.propTypes={};Jl.filterProps=["rowGap"];const fw=Te({prop:"gridColumn"}),pw=Te({prop:"gridRow"}),hw=Te({prop:"gridAutoFlow"}),mw=Te({prop:"gridAutoColumns"}),gw=Te({prop:"gridAutoRows"}),yw=Te({prop:"gridTemplateColumns"}),vw=Te({prop:"gridTemplateRows"}),_w=Te({prop:"gridTemplateAreas"}),xw=Te({prop:"gridArea"});ql(Ql,Xl,Jl,fw,pw,hw,mw,gw,yw,vw,_w,xw);function Wo(e,t){return t==="grey"?t:e}const ww=Te({prop:"color",themeKey:"palette",transform:Wo}),bw=Te({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Wo}),Ew=Te({prop:"backgroundColor",themeKey:"palette",transform:Wo});ql(ww,bw,Ew);function Gt(e){return e<=1&&e!==0?`${e*100}%`:e}const Sw=Te({prop:"width",transform:Gt}),Nf=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=i=>{var o;return{maxWidth:((o=e.theme)==null||(o=o.breakpoints)==null||(o=o.values)==null?void 0:o[i])||zf[i]||Gt(i)}};return ii(e,e.maxWidth,t)}return null};Nf.filterProps=["maxWidth"];const Cw=Te({prop:"minWidth",transform:Gt}),Pw=Te({prop:"height",transform:Gt}),kw=Te({prop:"maxHeight",transform:Gt}),Tw=Te({prop:"minHeight",transform:Gt});Te({prop:"size",cssProperty:"width",transform:Gt});Te({prop:"size",cssProperty:"height",transform:Gt});const Lw=Te({prop:"boxSizing"});ql(Sw,Nf,Cw,Pw,kw,Tw,Lw);const Mw={border:{themeKey:"borders",transform:Fn},borderTop:{themeKey:"borders",transform:Fn},borderRight:{themeKey:"borders",transform:Fn},borderBottom:{themeKey:"borders",transform:Fn},borderLeft:{themeKey:"borders",transform:Fn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Yl},color:{themeKey:"palette",transform:Wo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Wo},backgroundColor:{themeKey:"palette",transform:Wo},p:{style:Xe},pt:{style:Xe},pr:{style:Xe},pb:{style:Xe},pl:{style:Xe},px:{style:Xe},py:{style:Xe},padding:{style:Xe},paddingTop:{style:Xe},paddingRight:{style:Xe},paddingBottom:{style:Xe},paddingLeft:{style:Xe},paddingX:{style:Xe},paddingY:{style:Xe},paddingInline:{style:Xe},paddingInlineStart:{style:Xe},paddingInlineEnd:{style:Xe},paddingBlock:{style:Xe},paddingBlockStart:{style:Xe},paddingBlockEnd:{style:Xe},m:{style:Qe},mt:{style:Qe},mr:{style:Qe},mb:{style:Qe},ml:{style:Qe},mx:{style:Qe},my:{style:Qe},margin:{style:Qe},marginTop:{style:Qe},marginRight:{style:Qe},marginBottom:{style:Qe},marginLeft:{style:Qe},marginX:{style:Qe},marginY:{style:Qe},marginInline:{style:Qe},marginInlineStart:{style:Qe},marginInlineEnd:{style:Qe},marginBlock:{style:Qe},marginBlockStart:{style:Qe},marginBlockEnd:{style:Qe},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ql},rowGap:{style:Jl},columnGap:{style:Xl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Gt},maxWidth:{style:Nf},minWidth:{transform:Gt},height:{transform:Gt},maxHeight:{transform:Gt},minHeight:{transform:Gt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},eu=Mw;function Rw(...e){const t=e.reduce((o,s)=>o.concat(Object.keys(s)),[]),i=new Set(t);return e.every(o=>i.size===Object.keys(o).length)}function Iw(e,t){return typeof e=="function"?e(t):e}function Ow(){function e(i,o,s,a){const u={[i]:o,theme:s},d=a[i];if(!d)return{[i]:o};const{cssProperty:f=i,themeKey:h,transform:v,style:g}=d;if(o==null)return null;if(h==="typography"&&o==="inherit")return{[i]:o};const x=Gl(s,h)||{};return g?g(u):ii(u,o,S=>{let b=tl(x,v,S);return S===b&&typeof S=="string"&&(b=tl(x,v,`${i}${S==="default"?"":Ee(S)}`,S)),f===!1?b:{[f]:b}})}function t(i){var o;const{sx:s,theme:a={}}=i||{};if(!s)return null;const u=(o=a.unstable_sxConfig)!=null?o:eu;function d(f){let h=f;if(typeof f=="function")h=f(a);else if(typeof f!="object")return f;if(!h)return null;const v=Kx(a.breakpoints),g=Object.keys(v);let x=v;return Object.keys(h).forEach(P=>{const S=Iw(h[P],a);if(S!=null)if(typeof S=="object")if(u[P])x=Yr(x,e(P,S,a,u));else{const b=ii({theme:a},S,A=>({[P]:A}));Rw(b,S)?x[P]=t({sx:S,theme:a}):x=Yr(x,b)}else x=Yr(x,e(P,S,a,u))}),Gx(g,x)}return Array.isArray(s)?s.map(d):d(s)}return t}const Zg=Ow();Zg.filterProps=["sx"];const tu=Zg,zw=["breakpoints","palette","spacing","shape"];function Ff(e={},...t){const{breakpoints:i={},palette:o={},spacing:s,shape:a={}}=e,u=ue(e,zw),d=Hx(i),f=tw(s);let h=fn({breakpoints:d,direction:"ltr",components:{},palette:T({mode:"light"},o),spacing:f,shape:T({},Vx,a)},u);return h=t.reduce((v,g)=>fn(v,g),h),h.unstable_sxConfig=T({},eu,u==null?void 0:u.unstable_sxConfig),h.unstable_sx=function(g){return tu({sx:g,theme:this})},h}function Aw(e){return Object.keys(e).length===0}function Vg(e=null){const t=E.useContext(Kl);return!t||Aw(t)?e:t}const Uw=Ff();function nu(e=Uw){return Vg(e)}function Nw({styles:e,themeId:t,defaultTheme:i={}}){const o=nu(i),s=typeof e=="function"?e(t&&o[t]||o):e;return F.jsx($x,{styles:s})}const Fw=["sx"],Bw=e=>{var t,i;const o={systemProps:{},otherProps:{}},s=(t=e==null||(i=e.theme)==null?void 0:i.unstable_sxConfig)!=null?t:eu;return Object.keys(e).forEach(a=>{s[a]?o.systemProps[a]=e[a]:o.otherProps[a]=e[a]}),o};function Kg(e){const{sx:t}=e,i=ue(e,Fw),{systemProps:o,otherProps:s}=Bw(i);let a;return Array.isArray(t)?a=[o,...t]:typeof t=="function"?a=(...u)=>{const d=t(...u);return $i(d)?T({},o,d):o}:a=T({},o,t),T({},s,{sx:a})}function Gg(e){var t,i,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=Gg(e[t]))&&(o&&(o+=" "),o+=i);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function ge(){for(var e,t,i=0,o="";i<arguments.length;)(e=arguments[i++])&&(t=Gg(e))&&(o&&(o+=" "),o+=t);return o}const $w=["className","component"];function Dw(e={}){const{themeId:t,defaultTheme:i,defaultClassName:o="MuiBox-root",generateClassName:s}=e,a=jg("div",{shouldForwardProp:d=>d!=="theme"&&d!=="sx"&&d!=="as"})(tu);return E.forwardRef(function(f,h){const v=nu(i),g=Kg(f),{className:x,component:P="div"}=g,S=ue(g,$w);return F.jsx(a,T({as:P,ref:h,className:ge(x,s?s(o):o),theme:t&&v[t]||v},S))})}const jw=["variant"];function b1(e){return e.length===0}function qg(e){const{variant:t}=e,i=ue(e,jw);let o=t||"";return Object.keys(i).sort().forEach(s=>{s==="color"?o+=b1(o)?e[s]:Ee(e[s]):o+=`${b1(o)?s:Ee(s)}${Ee(e[s].toString())}`}),o}const Ww=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Hw(e){return Object.keys(e).length===0}function Zw(e){return typeof e=="string"&&e.charCodeAt(0)>96}const Vw=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,Kw=(e,t)=>{let i=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(i=t.components[e].variants);const o={};return i.forEach(s=>{const a=qg(s.props);o[a]=s.style}),o},Gw=(e,t,i,o)=>{var s;const{ownerState:a={}}=e,u=[],d=i==null||(s=i.components)==null||(s=s[o])==null?void 0:s.variants;return d&&d.forEach(f=>{let h=!0;Object.keys(f.props).forEach(v=>{a[v]!==f.props[v]&&e[v]!==f.props[v]&&(h=!1)}),h&&u.push(t[qg(f.props)])}),u};function Qr(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const qw=Ff(),Yw=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Mr({defaultTheme:e,theme:t,themeId:i}){return Hw(t)?e:t[i]||t}function Qw(e){return e?(t,i)=>i[e]:null}function Xw(e={}){const{themeId:t,defaultTheme:i=qw,rootShouldForwardProp:o=Qr,slotShouldForwardProp:s=Qr}=e,a=u=>tu(T({},u,{theme:Mr(T({},u,{defaultTheme:i,themeId:t}))}));return a.__mui_systemSx=!0,(u,d={})=>{Dx(u,C=>C.filter(M=>!(M!=null&&M.__mui_systemSx)));const{name:f,slot:h,skipVariantsResolver:v,skipSx:g,overridesResolver:x=Qw(Yw(h))}=d,P=ue(d,Ww),S=v!==void 0?v:h&&h!=="Root"&&h!=="root"||!1,b=g||!1;let A,w=Qr;h==="Root"||h==="root"?w=o:h?w=s:Zw(u)&&(w=void 0);const y=jg(u,T({shouldForwardProp:w,label:A},P)),_=(C,...M)=>{const I=M?M.map($=>typeof $=="function"&&$.__emotion_real!==$?H=>$(T({},H,{theme:Mr(T({},H,{defaultTheme:i,themeId:t}))})):$):[];let R=C;f&&x&&I.push($=>{const H=Mr(T({},$,{defaultTheme:i,themeId:t})),ee=Vw(f,H);if(ee){const te={};return Object.entries(ee).forEach(([W,q])=>{te[W]=typeof q=="function"?q(T({},$,{theme:H})):q}),x($,te)}return null}),f&&!S&&I.push($=>{const H=Mr(T({},$,{defaultTheme:i,themeId:t}));return Gw($,Kw(f,H),H,f)}),b||I.push(a);const N=I.length-M.length;if(Array.isArray(C)&&N>0){const $=new Array(N).fill("");R=[...C,...$],R.raw=[...C.raw,...$]}else typeof C=="function"&&C.__emotion_real!==C&&(R=$=>C(T({},$,{theme:Mr(T({},$,{defaultTheme:i,themeId:t}))})));const K=y(R,...I);return u.muiName&&(K.muiName=u.muiName),K};return y.withConfig&&(_.withConfig=y.withConfig),_}}function Jw(e){const{theme:t,name:i,props:o}=e;return!t||!t.components||!t.components[i]||!t.components[i].defaultProps?o:Cf(t.components[i].defaultProps,o)}function eb({props:e,name:t,defaultTheme:i,themeId:o}){let s=nu(i);return o&&(s=s[o]||s),Jw({theme:s,name:t,props:e})}function Bf(e,t=0,i=1){return Math.min(Math.max(t,e),i)}function tb(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let i=e.match(t);return i&&i[0].length===1&&(i=i.map(o=>o+o)),i?`rgb${i.length===4?"a":""}(${i.map((o,s)=>s<3?parseInt(o,16):Math.round(parseInt(o,16)/255*1e3)/1e3).join(", ")})`:""}function to(e){if(e.type)return e;if(e.charAt(0)==="#")return to(tb(e));const t=e.indexOf("("),i=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(i)===-1)throw new Error(Pi(9,e));let o=e.substring(t+1,e.length-1),s;if(i==="color"){if(o=o.split(" "),s=o.shift(),o.length===4&&o[3].charAt(0)==="/"&&(o[3]=o[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(Pi(10,s))}else o=o.split(",");return o=o.map(a=>parseFloat(a)),{type:i,values:o,colorSpace:s}}function iu(e){const{type:t,colorSpace:i}=e;let{values:o}=e;return t.indexOf("rgb")!==-1?o=o.map((s,a)=>a<3?parseInt(s,10):s):t.indexOf("hsl")!==-1&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),t.indexOf("color")!==-1?o=`${i} ${o.join(" ")}`:o=`${o.join(", ")}`,`${t}(${o})`}function nb(e){e=to(e);const{values:t}=e,i=t[0],o=t[1]/100,s=t[2]/100,a=o*Math.min(s,1-s),u=(h,v=(h+i/30)%12)=>s-a*Math.max(Math.min(v-3,9-v,1),-1);let d="rgb";const f=[Math.round(u(0)*255),Math.round(u(8)*255),Math.round(u(4)*255)];return e.type==="hsla"&&(d+="a",f.push(t[3])),iu({type:d,values:f})}function E1(e){e=to(e);let t=e.type==="hsl"||e.type==="hsla"?to(nb(e)).values:e.values;return t=t.map(i=>(e.type!=="color"&&(i/=255),i<=.03928?i/12.92:((i+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function ib(e,t){const i=E1(e),o=E1(t);return(Math.max(i,o)+.05)/(Math.min(i,o)+.05)}function Bn(e,t){return e=to(e),t=Bf(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,iu(e)}function ob(e,t){if(e=to(e),t=Bf(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let i=0;i<3;i+=1)e.values[i]*=1-t;return iu(e)}function rb(e,t){if(e=to(e),t=Bf(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let i=0;i<3;i+=1)e.values[i]+=(255-e.values[i])*t;else if(e.type.indexOf("color")!==-1)for(let i=0;i<3;i+=1)e.values[i]+=(1-e.values[i])*t;return iu(e)}const sb=E.createContext(null),Yg=sb;function Qg(){return E.useContext(Yg)}const ab=typeof Symbol=="function"&&Symbol.for,lb=ab?Symbol.for("mui.nested"):"__THEME_NESTED__";function ub(e,t){return typeof t=="function"?t(e):T({},e,t)}function cb(e){const{children:t,theme:i}=e,o=Qg(),s=E.useMemo(()=>{const a=o===null?i:ub(o,i);return a!=null&&(a[lb]=o!==null),a},[i,o]);return F.jsx(Yg.Provider,{value:s,children:t})}const S1={};function C1(e,t,i,o=!1){return E.useMemo(()=>{const s=e&&t[e]||t;if(typeof i=="function"){const a=i(s),u=e?T({},t,{[e]:a}):a;return o?()=>u:u}return e?T({},t,{[e]:i}):T({},t,i)},[e,t,i,o])}function db(e){const{children:t,theme:i,themeId:o}=e,s=Vg(S1),a=Qg()||S1,u=C1(o,s,i),d=C1(o,a,i,!0);return F.jsx(cb,{theme:d,children:F.jsx(Kl.Provider,{value:u,children:t})})}function fb(e,t){return T({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const pb=["mode","contrastThreshold","tonalOffset"],P1={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ys.white,default:ys.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},mc={text:{primary:ys.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ys.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function k1(e,t,i,o){const s=o.light||o,a=o.dark||o*1.5;e[t]||(e.hasOwnProperty(i)?e[t]=e[i]:t==="light"?e.light=rb(e.main,s):t==="dark"&&(e.dark=ob(e.main,a)))}function hb(e="light"){return e==="dark"?{main:vo[200],light:vo[50],dark:vo[400]}:{main:vo[700],light:vo[400],dark:vo[800]}}function mb(e="light"){return e==="dark"?{main:yo[200],light:yo[50],dark:yo[400]}:{main:yo[500],light:yo[300],dark:yo[700]}}function gb(e="light"){return e==="dark"?{main:go[500],light:go[300],dark:go[700]}:{main:go[700],light:go[400],dark:go[800]}}function yb(e="light"){return e==="dark"?{main:_o[400],light:_o[300],dark:_o[700]}:{main:_o[700],light:_o[500],dark:_o[900]}}function vb(e="light"){return e==="dark"?{main:xo[400],light:xo[300],dark:xo[700]}:{main:xo[800],light:xo[500],dark:xo[900]}}function _b(e="light"){return e==="dark"?{main:Tr[400],light:Tr[300],dark:Tr[700]}:{main:"#ed6c02",light:Tr[500],dark:Tr[900]}}function xb(e){const{mode:t="light",contrastThreshold:i=3,tonalOffset:o=.2}=e,s=ue(e,pb),a=e.primary||hb(t),u=e.secondary||mb(t),d=e.error||gb(t),f=e.info||yb(t),h=e.success||vb(t),v=e.warning||_b(t);function g(b){return ib(b,mc.text.primary)>=i?mc.text.primary:P1.text.primary}const x=({color:b,name:A,mainShade:w=500,lightShade:y=300,darkShade:_=700})=>{if(b=T({},b),!b.main&&b[w]&&(b.main=b[w]),!b.hasOwnProperty("main"))throw new Error(Pi(11,A?` (${A})`:"",w));if(typeof b.main!="string")throw new Error(Pi(12,A?` (${A})`:"",JSON.stringify(b.main)));return k1(b,"light",y,o),k1(b,"dark",_,o),b.contrastText||(b.contrastText=g(b.main)),b},P={dark:mc,light:P1};return fn(T({common:T({},ys),mode:t,primary:x({color:a,name:"primary"}),secondary:x({color:u,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:x({color:d,name:"error"}),warning:x({color:v,name:"warning"}),info:x({color:f,name:"info"}),success:x({color:h,name:"success"}),grey:b9,contrastThreshold:i,getContrastText:g,augmentColor:x,tonalOffset:o},P[t]),s)}const wb=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function bb(e){return Math.round(e*1e5)/1e5}const T1={textTransform:"uppercase"},L1='"Roboto", "Helvetica", "Arial", sans-serif';function Eb(e,t){const i=typeof t=="function"?t(e):t,{fontFamily:o=L1,fontSize:s=14,fontWeightLight:a=300,fontWeightRegular:u=400,fontWeightMedium:d=500,fontWeightBold:f=700,htmlFontSize:h=16,allVariants:v,pxToRem:g}=i,x=ue(i,wb),P=s/14,S=g||(w=>`${w/h*P}rem`),b=(w,y,_,C,M)=>T({fontFamily:o,fontWeight:w,fontSize:S(y),lineHeight:_},o===L1?{letterSpacing:`${bb(C/y)}em`}:{},M,v),A={h1:b(a,96,1.167,-1.5),h2:b(a,60,1.2,-.5),h3:b(u,48,1.167,0),h4:b(u,34,1.235,.25),h5:b(u,24,1.334,0),h6:b(d,20,1.6,.15),subtitle1:b(u,16,1.75,.15),subtitle2:b(d,14,1.57,.1),body1:b(u,16,1.5,.15),body2:b(u,14,1.43,.15),button:b(d,14,1.75,.4,T1),caption:b(u,12,1.66,.4),overline:b(u,12,2.66,1,T1),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return fn(T({htmlFontSize:h,pxToRem:S,fontFamily:o,fontSize:s,fontWeightLight:a,fontWeightRegular:u,fontWeightMedium:d,fontWeightBold:f},A),x,{clone:!1})}const Sb=.2,Cb=.14,Pb=.12;function De(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Sb})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Cb})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Pb})`].join(",")}const kb=["none",De(0,2,1,-1,0,1,1,0,0,1,3,0),De(0,3,1,-2,0,2,2,0,0,1,5,0),De(0,3,3,-2,0,3,4,0,0,1,8,0),De(0,2,4,-1,0,4,5,0,0,1,10,0),De(0,3,5,-1,0,5,8,0,0,1,14,0),De(0,3,5,-1,0,6,10,0,0,1,18,0),De(0,4,5,-2,0,7,10,1,0,2,16,1),De(0,5,5,-3,0,8,10,1,0,3,14,2),De(0,5,6,-3,0,9,12,1,0,3,16,2),De(0,6,6,-3,0,10,14,1,0,4,18,3),De(0,6,7,-4,0,11,15,1,0,4,20,3),De(0,7,8,-4,0,12,17,2,0,5,22,4),De(0,7,8,-4,0,13,19,2,0,5,24,4),De(0,7,9,-4,0,14,21,2,0,5,26,4),De(0,8,9,-5,0,15,22,2,0,6,28,5),De(0,8,10,-5,0,16,24,2,0,6,30,5),De(0,8,11,-5,0,17,26,2,0,6,32,5),De(0,9,11,-5,0,18,28,2,0,7,34,6),De(0,9,12,-6,0,19,29,2,0,7,36,6),De(0,10,13,-6,0,20,31,3,0,8,38,7),De(0,10,13,-6,0,21,33,3,0,8,40,7),De(0,10,14,-6,0,22,35,3,0,8,42,7),De(0,11,14,-7,0,23,36,3,0,9,44,8),De(0,11,15,-7,0,24,38,3,0,9,46,8)],Tb=kb,Lb=["duration","easing","delay"],Mb={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Rb={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function M1(e){return`${Math.round(e)}ms`}function Ib(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function Ob(e){const t=T({},Mb,e.easing),i=T({},Rb,e.duration);return T({getAutoHeightDuration:Ib,create:(s=["all"],a={})=>{const{duration:u=i.standard,easing:d=t.easeInOut,delay:f=0}=a;return ue(a,Lb),(Array.isArray(s)?s:[s]).map(h=>`${h} ${typeof u=="string"?u:M1(u)} ${d} ${typeof f=="string"?f:M1(f)}`).join(",")}},e,{easing:t,duration:i})}const zb={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Ab=zb,Ub=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function $f(e={},...t){const{mixins:i={},palette:o={},transitions:s={},typography:a={}}=e,u=ue(e,Ub);if(e.vars)throw new Error(Pi(18));const d=xb(o),f=Ff(e);let h=fn(f,{mixins:fb(f.breakpoints,i),palette:d,shadows:Tb.slice(),typography:Eb(d,a),transitions:Ob(s),zIndex:T({},Ab)});return h=fn(h,u),h=t.reduce((v,g)=>fn(v,g),h),h.unstable_sxConfig=T({},eu,u==null?void 0:u.unstable_sxConfig),h.unstable_sx=function(g){return tu({sx:g,theme:this})},h}const Nb=$f(),ou=Nb;function Df(){const e=nu(ou);return e[eo]||e}function tt({props:e,name:t}){return eb({props:e,name:t,defaultTheme:ou,themeId:eo})}const Wn=e=>Qr(e)&&e!=="classes",Fb=Qr,Bb=Xw({themeId:eo,defaultTheme:ou,rootShouldForwardProp:Wn}),de=Bb,$b=["theme"];function Db(e){let{theme:t}=e,i=ue(e,$b);const o=t[eo];return F.jsx(db,T({},i,{themeId:o?eo:void 0,theme:o||t}))}const jb=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},R1=jb;function Wb(e){return Ge("MuiSvgIcon",e)}Ne("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Hb=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Zb=e=>{const{color:t,fontSize:i,classes:o}=e,s={root:["root",t!=="inherit"&&`color${Ee(t)}`,`fontSize${Ee(i)}`]};return et(s,Wb,o)},Vb=de("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.color!=="inherit"&&t[`color${Ee(i.color)}`],t[`fontSize${Ee(i.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var i,o,s,a,u,d,f,h,v,g,x,P,S;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(i=e.transitions)==null||(o=i.create)==null?void 0:o.call(i,"fill",{duration:(s=e.transitions)==null||(s=s.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((a=e.typography)==null||(u=a.pxToRem)==null?void 0:u.call(a,20))||"1.25rem",medium:((d=e.typography)==null||(f=d.pxToRem)==null?void 0:f.call(d,24))||"1.5rem",large:((h=e.typography)==null||(v=h.pxToRem)==null?void 0:v.call(h,35))||"2.1875rem"}[t.fontSize],color:(g=(x=(e.vars||e).palette)==null||(x=x[t.color])==null?void 0:x.main)!=null?g:{action:(P=(e.vars||e).palette)==null||(P=P.action)==null?void 0:P.active,disabled:(S=(e.vars||e).palette)==null||(S=S.action)==null?void 0:S.disabled,inherit:void 0}[t.color]}}),Xg=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiSvgIcon"}),{children:s,className:a,color:u="inherit",component:d="svg",fontSize:f="medium",htmlColor:h,inheritViewBox:v=!1,titleAccess:g,viewBox:x="0 0 24 24"}=o,P=ue(o,Hb),S=E.isValidElement(s)&&s.type==="svg",b=T({},o,{color:u,component:d,fontSize:f,instanceFontSize:t.fontSize,inheritViewBox:v,viewBox:x,hasSvgAsChild:S}),A={};v||(A.viewBox=x);const w=Zb(b);return F.jsxs(Vb,T({as:d,className:ge(w.root,a),focusable:"false",color:h,"aria-hidden":g?void 0:!0,role:g?"img":void 0,ref:i},A,P,S&&s.props,{ownerState:b,children:[S?s.props.children:s,g?F.jsx("title",{children:g}):null]}))});Xg.muiName="SvgIcon";const I1=Xg;function jf(e,t){function i(o,s){return F.jsx(I1,T({"data-testid":`${t}Icon`,ref:s},o,{children:e}))}return i.muiName=I1.muiName,E.memo(E.forwardRef(i))}function xd(e,t){return xd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,s){return o.__proto__=s,o},xd(e,t)}function Jg(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,xd(e,t)}const O1={disabled:!1},nl=It.createContext(null);var Kb=function(t){return t.scrollTop},$r="unmounted",Fi="exited",Bi="entering",bo="entered",wd="exiting",ri=function(e){Jg(t,e);function t(o,s){var a;a=e.call(this,o,s)||this;var u=s,d=u&&!u.isMounting?o.enter:o.appear,f;return a.appearStatus=null,o.in?d?(f=Fi,a.appearStatus=Bi):f=bo:o.unmountOnExit||o.mountOnEnter?f=$r:f=Fi,a.state={status:f},a.nextCallback=null,a}t.getDerivedStateFromProps=function(s,a){var u=s.in;return u&&a.status===$r?{status:Fi}:null};var i=t.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(s){var a=null;if(s!==this.props){var u=this.state.status;this.props.in?u!==Bi&&u!==bo&&(a=Bi):(u===Bi||u===bo)&&(a=wd)}this.updateStatus(!1,a)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var s=this.props.timeout,a,u,d;return a=u=d=s,s!=null&&typeof s!="number"&&(a=s.exit,u=s.enter,d=s.appear!==void 0?s.appear:u),{exit:a,enter:u,appear:d}},i.updateStatus=function(s,a){if(s===void 0&&(s=!1),a!==null)if(this.cancelNextCallback(),a===Bi){if(this.props.unmountOnExit||this.props.mountOnEnter){var u=this.props.nodeRef?this.props.nodeRef.current:da.findDOMNode(this);u&&Kb(u)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Fi&&this.setState({status:$r})},i.performEnter=function(s){var a=this,u=this.props.enter,d=this.context?this.context.isMounting:s,f=this.props.nodeRef?[d]:[da.findDOMNode(this),d],h=f[0],v=f[1],g=this.getTimeouts(),x=d?g.appear:g.enter;if(!s&&!u||O1.disabled){this.safeSetState({status:bo},function(){a.props.onEntered(h)});return}this.props.onEnter(h,v),this.safeSetState({status:Bi},function(){a.props.onEntering(h,v),a.onTransitionEnd(x,function(){a.safeSetState({status:bo},function(){a.props.onEntered(h,v)})})})},i.performExit=function(){var s=this,a=this.props.exit,u=this.getTimeouts(),d=this.props.nodeRef?void 0:da.findDOMNode(this);if(!a||O1.disabled){this.safeSetState({status:Fi},function(){s.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:wd},function(){s.props.onExiting(d),s.onTransitionEnd(u.exit,function(){s.safeSetState({status:Fi},function(){s.props.onExited(d)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(s,a){a=this.setNextCallback(a),this.setState(s,a)},i.setNextCallback=function(s){var a=this,u=!0;return this.nextCallback=function(d){u&&(u=!1,a.nextCallback=null,s(d))},this.nextCallback.cancel=function(){u=!1},this.nextCallback},i.onTransitionEnd=function(s,a){this.setNextCallback(a);var u=this.props.nodeRef?this.props.nodeRef.current:da.findDOMNode(this),d=s==null&&!this.props.addEndListener;if(!u||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[u,this.nextCallback],h=f[0],v=f[1];this.props.addEndListener(h,v)}s!=null&&setTimeout(this.nextCallback,s)},i.render=function(){var s=this.state.status;if(s===$r)return null;var a=this.props,u=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var d=ue(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return It.createElement(nl.Provider,{value:null},typeof u=="function"?u(s,d):It.cloneElement(It.Children.only(u),d))},t}(It.Component);ri.contextType=nl;ri.propTypes={};function wo(){}ri.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:wo,onEntering:wo,onEntered:wo,onExit:wo,onExiting:wo,onExited:wo};ri.UNMOUNTED=$r;ri.EXITED=Fi;ri.ENTERING=Bi;ri.ENTERED=bo;ri.EXITING=wd;const ey=ri;function Gb(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Wf(e,t){var i=function(a){return t&&E.isValidElement(a)?t(a):a},o=Object.create(null);return e&&E.Children.map(e,function(s){return s}).forEach(function(s){o[s.key]=i(s)}),o}function qb(e,t){e=e||{},t=t||{};function i(v){return v in t?t[v]:e[v]}var o=Object.create(null),s=[];for(var a in e)a in t?s.length&&(o[a]=s,s=[]):s.push(a);var u,d={};for(var f in t){if(o[f])for(u=0;u<o[f].length;u++){var h=o[f][u];d[o[f][u]]=i(h)}d[f]=i(f)}for(u=0;u<s.length;u++)d[s[u]]=i(s[u]);return d}function Hi(e,t,i){return i[t]!=null?i[t]:e.props[t]}function Yb(e,t){return Wf(e.children,function(i){return E.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:Hi(i,"appear",e),enter:Hi(i,"enter",e),exit:Hi(i,"exit",e)})})}function Qb(e,t,i){var o=Wf(e.children),s=qb(t,o);return Object.keys(s).forEach(function(a){var u=s[a];if(E.isValidElement(u)){var d=a in t,f=a in o,h=t[a],v=E.isValidElement(h)&&!h.props.in;f&&(!d||v)?s[a]=E.cloneElement(u,{onExited:i.bind(null,u),in:!0,exit:Hi(u,"exit",e),enter:Hi(u,"enter",e)}):!f&&d&&!v?s[a]=E.cloneElement(u,{in:!1}):f&&d&&E.isValidElement(h)&&(s[a]=E.cloneElement(u,{onExited:i.bind(null,u),in:h.props.in,exit:Hi(u,"exit",e),enter:Hi(u,"enter",e)}))}}),s}var Xb=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Jb={component:"div",childFactory:function(t){return t}},Hf=function(e){Jg(t,e);function t(o,s){var a;a=e.call(this,o,s)||this;var u=a.handleExited.bind(Gb(a));return a.state={contextValue:{isMounting:!0},handleExited:u,firstRender:!0},a}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(s,a){var u=a.children,d=a.handleExited,f=a.firstRender;return{children:f?Yb(s,d):Qb(s,u,d),firstRender:!1}},i.handleExited=function(s,a){var u=Wf(this.props.children);s.key in u||(s.props.onExited&&s.props.onExited(a),this.mounted&&this.setState(function(d){var f=T({},d.children);return delete f[s.key],{children:f}}))},i.render=function(){var s=this.props,a=s.component,u=s.childFactory,d=ue(s,["component","childFactory"]),f=this.state.contextValue,h=Xb(this.state.children).map(u);return delete d.appear,delete d.enter,delete d.exit,a===null?It.createElement(nl.Provider,{value:f},h):It.createElement(nl.Provider,{value:f},It.createElement(a,d,h))},t}(It.Component);Hf.propTypes={};Hf.defaultProps=Jb;const e4=Hf,ty=e=>e.scrollTop;function il(e,t){var i,o;const{timeout:s,easing:a,style:u={}}=e;return{duration:(i=u.transitionDuration)!=null?i:typeof s=="number"?s:s[t.mode]||0,easing:(o=u.transitionTimingFunction)!=null?o:typeof a=="object"?a[t.mode]:a,delay:u.transitionDelay}}function t4(e){return Ge("MuiPaper",e)}Ne("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const n4=["className","component","elevation","square","variant"],i4=e=>{const{square:t,elevation:i,variant:o,classes:s}=e,a={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${i}`]};return et(a,t4,s)},o4=de("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],!i.square&&t.rounded,i.variant==="elevation"&&t[`elevation${i.elevation}`]]}})(({theme:e,ownerState:t})=>{var i;return T({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&T({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Bn("#fff",R1(t.elevation))}, ${Bn("#fff",R1(t.elevation))})`},e.vars&&{backgroundImage:(i=e.vars.overlays)==null?void 0:i[t.elevation]}))}),r4=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiPaper"}),{className:s,component:a="div",elevation:u=1,square:d=!1,variant:f="elevation"}=o,h=ue(o,n4),v=T({},o,{component:a,elevation:u,square:d,variant:f}),g=i4(v);return F.jsx(o4,T({as:a,ownerState:v,className:ge(g.root,s),ref:i},h))}),s4=r4;function a4(e){const{className:t,classes:i,pulsate:o=!1,rippleX:s,rippleY:a,rippleSize:u,in:d,onExited:f,timeout:h}=e,[v,g]=E.useState(!1),x=ge(t,i.ripple,i.rippleVisible,o&&i.ripplePulsate),P={width:u,height:u,top:-(u/2)+a,left:-(u/2)+s},S=ge(i.child,v&&i.childLeaving,o&&i.childPulsate);return!d&&!v&&g(!0),E.useEffect(()=>{if(!d&&f!=null){const b=setTimeout(f,h);return()=>{clearTimeout(b)}}},[f,d,h]),F.jsx("span",{className:x,style:P,children:F.jsx("span",{className:S})})}const l4=Ne("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),an=l4,u4=["center","classes","className"];let ru=e=>e,z1,A1,U1,N1;const bd=550,c4=80,d4=Of(z1||(z1=ru`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),f4=Of(A1||(A1=ru`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),p4=Of(U1||(U1=ru`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),h4=de("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),m4=de(a4,{name:"MuiTouchRipple",slot:"Ripple"})(N1||(N1=ru`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),an.rippleVisible,d4,bd,({theme:e})=>e.transitions.easing.easeInOut,an.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,an.child,an.childLeaving,f4,bd,({theme:e})=>e.transitions.easing.easeInOut,an.childPulsate,p4,({theme:e})=>e.transitions.easing.easeInOut),g4=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:a={},className:u}=o,d=ue(o,u4),[f,h]=E.useState([]),v=E.useRef(0),g=E.useRef(null);E.useEffect(()=>{g.current&&(g.current(),g.current=null)},[f]);const x=E.useRef(!1),P=E.useRef(0),S=E.useRef(null),b=E.useRef(null);E.useEffect(()=>()=>{P.current&&clearTimeout(P.current)},[]);const A=E.useCallback(C=>{const{pulsate:M,rippleX:I,rippleY:R,rippleSize:N,cb:K}=C;h($=>[...$,F.jsx(m4,{classes:{ripple:ge(a.ripple,an.ripple),rippleVisible:ge(a.rippleVisible,an.rippleVisible),ripplePulsate:ge(a.ripplePulsate,an.ripplePulsate),child:ge(a.child,an.child),childLeaving:ge(a.childLeaving,an.childLeaving),childPulsate:ge(a.childPulsate,an.childPulsate)},timeout:bd,pulsate:M,rippleX:I,rippleY:R,rippleSize:N},v.current)]),v.current+=1,g.current=K},[a]),w=E.useCallback((C={},M={},I=()=>{})=>{const{pulsate:R=!1,center:N=s||M.pulsate,fakeElement:K=!1}=M;if((C==null?void 0:C.type)==="mousedown"&&x.current){x.current=!1;return}(C==null?void 0:C.type)==="touchstart"&&(x.current=!0);const $=K?null:b.current,H=$?$.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ee,te,W;if(N||C===void 0||C.clientX===0&&C.clientY===0||!C.clientX&&!C.touches)ee=Math.round(H.width/2),te=Math.round(H.height/2);else{const{clientX:q,clientY:Z}=C.touches&&C.touches.length>0?C.touches[0]:C;ee=Math.round(q-H.left),te=Math.round(Z-H.top)}if(N)W=Math.sqrt((2*H.width**2+H.height**2)/3),W%2===0&&(W+=1);else{const q=Math.max(Math.abs(($?$.clientWidth:0)-ee),ee)*2+2,Z=Math.max(Math.abs(($?$.clientHeight:0)-te),te)*2+2;W=Math.sqrt(q**2+Z**2)}C!=null&&C.touches?S.current===null&&(S.current=()=>{A({pulsate:R,rippleX:ee,rippleY:te,rippleSize:W,cb:I})},P.current=setTimeout(()=>{S.current&&(S.current(),S.current=null)},c4)):A({pulsate:R,rippleX:ee,rippleY:te,rippleSize:W,cb:I})},[s,A]),y=E.useCallback(()=>{w({},{pulsate:!0})},[w]),_=E.useCallback((C,M)=>{if(clearTimeout(P.current),(C==null?void 0:C.type)==="touchend"&&S.current){S.current(),S.current=null,P.current=setTimeout(()=>{_(C,M)});return}S.current=null,h(I=>I.length>0?I.slice(1):I),g.current=M},[]);return E.useImperativeHandle(i,()=>({pulsate:y,start:w,stop:_}),[y,w,_]),F.jsx(h4,T({className:ge(an.root,a.root,u),ref:b},d,{children:F.jsx(e4,{component:null,exit:!0,children:f})}))}),y4=g4;function v4(e){return Ge("MuiButtonBase",e)}const _4=Ne("MuiButtonBase",["root","disabled","focusVisible"]),x4=_4,w4=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],b4=e=>{const{disabled:t,focusVisible:i,focusVisibleClassName:o,classes:s}=e,u=et({root:["root",t&&"disabled",i&&"focusVisible"]},v4,s);return i&&o&&(u.root+=` ${o}`),u},E4=de("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x4.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),S4=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:a=!1,children:u,className:d,component:f="button",disabled:h=!1,disableRipple:v=!1,disableTouchRipple:g=!1,focusRipple:x=!1,LinkComponent:P="a",onBlur:S,onClick:b,onContextMenu:A,onDragLeave:w,onFocus:y,onFocusVisible:_,onKeyDown:C,onKeyUp:M,onMouseDown:I,onMouseLeave:R,onMouseUp:N,onTouchEnd:K,onTouchMove:$,onTouchStart:H,tabIndex:ee=0,TouchRippleProps:te,touchRippleRef:W,type:q}=o,Z=ue(o,w4),G=E.useRef(null),z=E.useRef(null),V=zt(z,W),{isFocusVisibleRef:B,onFocus:J,onBlur:se,ref:pe}=z9(),[ne,ie]=E.useState(!1);h&&ne&&ie(!1),E.useImperativeHandle(s,()=>({focusVisible:()=>{ie(!0),G.current.focus()}}),[]);const[Q,Le]=E.useState(!1);E.useEffect(()=>{Le(!0)},[]);const qe=Q&&!v&&!h;E.useEffect(()=>{ne&&x&&!v&&Q&&z.current.pulsate()},[v,x,ne,Q]);function Fe(ae,oe,ke=g){return Ao(Ye=>(oe&&oe(Ye),!ke&&z.current&&z.current[ae](Ye),!0))}const ot=Fe("start",I),ve=Fe("stop",A),ce=Fe("stop",w),_e=Fe("stop",N),Me=Fe("stop",ae=>{ne&&ae.preventDefault(),R&&R(ae)}),Tt=Fe("start",H),Lt=Fe("stop",K),wt=Fe("stop",$),bt=Fe("stop",ae=>{se(ae),B.current===!1&&ie(!1),S&&S(ae)},!1),kn=Ao(ae=>{G.current||(G.current=ae.currentTarget),J(ae),B.current===!0&&(ie(!0),_&&_(ae)),y&&y(ae)}),rt=()=>{const ae=G.current;return f&&f!=="button"&&!(ae.tagName==="A"&&ae.href)},We=E.useRef(!1),Nt=Ao(ae=>{x&&!We.current&&ne&&z.current&&ae.key===" "&&(We.current=!0,z.current.stop(ae,()=>{z.current.start(ae)})),ae.target===ae.currentTarget&&rt()&&ae.key===" "&&ae.preventDefault(),C&&C(ae),ae.target===ae.currentTarget&&rt()&&ae.key==="Enter"&&!h&&(ae.preventDefault(),b&&b(ae))}),ze=Ao(ae=>{x&&ae.key===" "&&z.current&&ne&&!ae.defaultPrevented&&(We.current=!1,z.current.stop(ae,()=>{z.current.pulsate(ae)})),M&&M(ae),b&&ae.target===ae.currentTarget&&rt()&&ae.key===" "&&!ae.defaultPrevented&&b(ae)});let gn=f;gn==="button"&&(Z.href||Z.to)&&(gn=P);const Zt={};gn==="button"?(Zt.type=q===void 0?"button":q,Zt.disabled=h):(!Z.href&&!Z.to&&(Zt.role="button"),h&&(Zt["aria-disabled"]=h));const Vt=zt(i,pe,G),yn=T({},o,{centerRipple:a,component:f,disabled:h,disableRipple:v,disableTouchRipple:g,focusRipple:x,tabIndex:ee,focusVisible:ne}),Se=b4(yn);return F.jsxs(E4,T({as:gn,className:ge(Se.root,d),ownerState:yn,onBlur:bt,onClick:b,onContextMenu:ve,onFocus:kn,onKeyDown:Nt,onKeyUp:ze,onMouseDown:ot,onMouseLeave:Me,onMouseUp:_e,onDragLeave:ce,onTouchEnd:Lt,onTouchMove:wt,onTouchStart:Tt,ref:Vt,tabIndex:h?-1:ee,type:q},Zt,Z,{children:[u,qe?F.jsx(y4,T({ref:V,center:a},te)):null]}))}),ny=S4;function C4(e){return Ge("MuiTypography",e)}Ne("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const P4=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],k4=e=>{const{align:t,gutterBottom:i,noWrap:o,paragraph:s,variant:a,classes:u}=e,d={root:["root",a,e.align!=="inherit"&&`align${Ee(t)}`,i&&"gutterBottom",o&&"noWrap",s&&"paragraph"]};return et(d,C4,u)},T4=de("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.variant&&t[i.variant],i.align!=="inherit"&&t[`align${Ee(i.align)}`],i.noWrap&&t.noWrap,i.gutterBottom&&t.gutterBottom,i.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>T({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),F1={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},L4={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},M4=e=>L4[e]||e,R4=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiTypography"}),s=M4(o.color),a=Kg(T({},o,{color:s})),{align:u="inherit",className:d,component:f,gutterBottom:h=!1,noWrap:v=!1,paragraph:g=!1,variant:x="body1",variantMapping:P=F1}=a,S=ue(a,P4),b=T({},a,{align:u,color:s,className:d,component:f,gutterBottom:h,noWrap:v,paragraph:g,variant:x,variantMapping:P}),A=f||(g?"p":P[x]||F1[x])||"span",w=k4(b);return F.jsx(T4,T({as:A,ref:i,ownerState:b,className:ge(w.root,d)},S))}),B1=R4;function ol(e){return typeof e=="string"}function I4(e,t,i){return e===void 0||ol(e)?t:T({},t,{ownerState:T({},t.ownerState,i)})}function iy(e,t=[]){if(e===void 0)return{};const i={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{i[o]=e[o]}),i}function O4(e,t,i){return typeof e=="function"?e(t,i):e}function $1(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(i=>!(i.match(/^on[A-Z]/)&&typeof e[i]=="function")).forEach(i=>{t[i]=e[i]}),t}function z4(e){const{getSlotProps:t,additionalProps:i,externalSlotProps:o,externalForwardedProps:s,className:a}=e;if(!t){const P=ge(s==null?void 0:s.className,o==null?void 0:o.className,a,i==null?void 0:i.className),S=T({},i==null?void 0:i.style,s==null?void 0:s.style,o==null?void 0:o.style),b=T({},i,s,o);return P.length>0&&(b.className=P),Object.keys(S).length>0&&(b.style=S),{props:b,internalRef:void 0}}const u=iy(T({},s,o)),d=$1(o),f=$1(s),h=t(u),v=ge(h==null?void 0:h.className,i==null?void 0:i.className,a,s==null?void 0:s.className,o==null?void 0:o.className),g=T({},h==null?void 0:h.style,i==null?void 0:i.style,s==null?void 0:s.style,o==null?void 0:o.style),x=T({},h,i,f,d);return v.length>0&&(x.className=v),Object.keys(g).length>0&&(x.style=g),{props:x,internalRef:h.ref}}const A4=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Xo(e){var t;const{elementType:i,externalSlotProps:o,ownerState:s,skipResolvingSlotProps:a=!1}=e,u=ue(e,A4),d=a?{}:O4(o,s),{props:f,internalRef:h}=z4(T({},u,{externalSlotProps:d})),v=zt(h,d==null?void 0:d.ref,(t=e.additionalProps)==null?void 0:t.ref);return I4(i,T({},f,{ref:v}),s)}const U4=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function N4(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function F4(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let i=t(`[name="${e.name}"]:checked`);return i||(i=t(`[name="${e.name}"]`)),i!==e}function B4(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||F4(e))}function $4(e){const t=[],i=[];return Array.from(e.querySelectorAll(U4)).forEach((o,s)=>{const a=N4(o);a===-1||!B4(o)||(a===0?t.push(o):i.push({documentOrder:s,tabIndex:a,node:o}))}),i.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function D4(){return!0}function j4(e){const{children:t,disableAutoFocus:i=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:a=$4,isEnabled:u=D4,open:d}=e,f=E.useRef(!1),h=E.useRef(null),v=E.useRef(null),g=E.useRef(null),x=E.useRef(null),P=E.useRef(!1),S=E.useRef(null),b=zt(t.ref,S),A=E.useRef(null);E.useEffect(()=>{!d||!S.current||(P.current=!i)},[i,d]),E.useEffect(()=>{if(!d||!S.current)return;const _=Qt(S.current);return S.current.contains(_.activeElement)||(S.current.hasAttribute("tabIndex")||S.current.setAttribute("tabIndex","-1"),P.current&&S.current.focus()),()=>{s||(g.current&&g.current.focus&&(f.current=!0,g.current.focus()),g.current=null)}},[d]),E.useEffect(()=>{if(!d||!S.current)return;const _=Qt(S.current),C=R=>{const{current:N}=S;if(N!==null){if(!_.hasFocus()||o||!u()||f.current){f.current=!1;return}if(!N.contains(_.activeElement)){if(R&&x.current!==R.target||_.activeElement!==x.current)x.current=null;else if(x.current!==null)return;if(!P.current)return;let H=[];if((_.activeElement===h.current||_.activeElement===v.current)&&(H=a(S.current)),H.length>0){var K,$;const ee=!!((K=A.current)!=null&&K.shiftKey&&(($=A.current)==null?void 0:$.key)==="Tab"),te=H[0],W=H[H.length-1];typeof te!="string"&&typeof W!="string"&&(ee?W.focus():te.focus())}else N.focus()}}},M=R=>{A.current=R,!(o||!u()||R.key!=="Tab")&&_.activeElement===S.current&&R.shiftKey&&(f.current=!0,v.current&&v.current.focus())};_.addEventListener("focusin",C),_.addEventListener("keydown",M,!0);const I=setInterval(()=>{_.activeElement&&_.activeElement.tagName==="BODY"&&C(null)},50);return()=>{clearInterval(I),_.removeEventListener("focusin",C),_.removeEventListener("keydown",M,!0)}},[i,o,s,u,d,a]);const w=_=>{g.current===null&&(g.current=_.relatedTarget),P.current=!0,x.current=_.target;const C=t.props.onFocus;C&&C(_)},y=_=>{g.current===null&&(g.current=_.relatedTarget),P.current=!0};return F.jsxs(E.Fragment,{children:[F.jsx("div",{tabIndex:d?0:-1,onFocus:y,ref:h,"data-testid":"sentinelStart"}),E.cloneElement(t,{ref:b,onFocus:w}),F.jsx("div",{tabIndex:d?0:-1,onFocus:y,ref:v,"data-testid":"sentinelEnd"})]})}function W4(e){return typeof e=="function"?e():e}const H4=E.forwardRef(function(t,i){const{children:o,container:s,disablePortal:a=!1}=t,[u,d]=E.useState(null),f=zt(E.isValidElement(o)?o.ref:null,i);if(Ji(()=>{a||d(W4(s)||document.body)},[s,a]),Ji(()=>{if(u&&!a)return md(i,u),()=>{md(i,null)}},[i,u,a]),a){if(E.isValidElement(o)){const h={ref:f};return E.cloneElement(o,h)}return F.jsx(E.Fragment,{children:o})}return F.jsx(E.Fragment,{children:u&&Ps.createPortal(o,u)})});function Z4(e){const t=Qt(e);return t.body===e?Xi(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function Xr(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function D1(e){return parseInt(Xi(e).getComputedStyle(e).paddingRight,10)||0}function V4(e){const i=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return i||o}function j1(e,t,i,o,s){const a=[t,i,...o];[].forEach.call(e.children,u=>{const d=a.indexOf(u)===-1,f=!V4(u);d&&f&&Xr(u,s)})}function gc(e,t){let i=-1;return e.some((o,s)=>t(o)?(i=s,!0):!1),i}function K4(e,t){const i=[],o=e.container;if(!t.disableScrollLock){if(Z4(o)){const u=bg(Qt(o));i.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${D1(o)+u}px`;const d=Qt(o).querySelectorAll(".mui-fixed");[].forEach.call(d,f=>{i.push({value:f.style.paddingRight,property:"padding-right",el:f}),f.style.paddingRight=`${D1(f)+u}px`})}let a;if(o.parentNode instanceof DocumentFragment)a=Qt(o).body;else{const u=o.parentElement,d=Xi(o);a=(u==null?void 0:u.nodeName)==="HTML"&&d.getComputedStyle(u).overflowY==="scroll"?u:o}i.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return()=>{i.forEach(({value:a,el:u,property:d})=>{a?u.style.setProperty(d,a):u.style.removeProperty(d)})}}function G4(e){const t=[];return[].forEach.call(e.children,i=>{i.getAttribute("aria-hidden")==="true"&&t.push(i)}),t}class q4{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,i){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&Xr(t.modalRef,!1);const s=G4(i);j1(i,t.mount,t.modalRef,s,!0);const a=gc(this.containers,u=>u.container===i);return a!==-1?(this.containers[a].modals.push(t),o):(this.containers.push({modals:[t],container:i,restore:null,hiddenSiblings:s}),o)}mount(t,i){const o=gc(this.containers,a=>a.modals.indexOf(t)!==-1),s=this.containers[o];s.restore||(s.restore=K4(s,i))}remove(t,i=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=gc(this.containers,u=>u.modals.indexOf(t)!==-1),a=this.containers[s];if(a.modals.splice(a.modals.indexOf(t),1),this.modals.splice(o,1),a.modals.length===0)a.restore&&a.restore(),t.modalRef&&Xr(t.modalRef,i),j1(a.container,t.mount,t.modalRef,a.hiddenSiblings,!1),this.containers.splice(s,1);else{const u=a.modals[a.modals.length-1];u.modalRef&&Xr(u.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Y4(e){return typeof e=="function"?e():e}function Q4(e){return e?e.props.hasOwnProperty("in"):!1}const X4=new q4;function J4(e){const{container:t,disableEscapeKeyDown:i=!1,disableScrollLock:o=!1,manager:s=X4,closeAfterTransition:a=!1,onTransitionEnter:u,onTransitionExited:d,children:f,onClose:h,open:v,rootRef:g}=e,x=E.useRef({}),P=E.useRef(null),S=E.useRef(null),b=zt(S,g),[A,w]=E.useState(!v),y=Q4(f);let _=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(_=!1);const C=()=>Qt(P.current),M=()=>(x.current.modalRef=S.current,x.current.mount=P.current,x.current),I=()=>{s.mount(M(),{disableScrollLock:o}),S.current&&(S.current.scrollTop=0)},R=Ao(()=>{const Z=Y4(t)||C().body;s.add(M(),Z),S.current&&I()}),N=E.useCallback(()=>s.isTopModal(M()),[s]),K=Ao(Z=>{P.current=Z,Z&&(v&&N()?I():S.current&&Xr(S.current,_))}),$=E.useCallback(()=>{s.remove(M(),_)},[_,s]);E.useEffect(()=>()=>{$()},[$]),E.useEffect(()=>{v?R():(!y||!a)&&$()},[v,$,y,a,R]);const H=Z=>G=>{var z;(z=Z.onKeyDown)==null||z.call(Z,G),!(G.key!=="Escape"||!N())&&(i||(G.stopPropagation(),h&&h(G,"escapeKeyDown")))},ee=Z=>G=>{var z;(z=Z.onClick)==null||z.call(Z,G),G.target===G.currentTarget&&h&&h(G,"backdropClick")};return{getRootProps:(Z={})=>{const G=iy(e);delete G.onTransitionEnter,delete G.onTransitionExited;const z=T({},G,Z);return T({role:"presentation"},z,{onKeyDown:H(z),ref:b})},getBackdropProps:(Z={})=>{const G=Z;return T({"aria-hidden":!0},G,{onClick:ee(G),open:v})},getTransitionProps:()=>{const Z=()=>{w(!1),u&&u()},G=()=>{w(!0),d&&d(),a&&$()};return{onEnter:r1(Z,f.props.onEnter),onExited:r1(G,f.props.onExited)}},rootRef:b,portalRef:K,isTopModal:N,exited:A,hasTransition:y}}const e5=["onChange","maxRows","minRows","style","value"];function pa(e){return parseInt(e,10)||0}const t5={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function W1(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const n5=E.forwardRef(function(t,i){const{onChange:o,maxRows:s,minRows:a=1,style:u,value:d}=t,f=ue(t,e5),{current:h}=E.useRef(d!=null),v=E.useRef(null),g=zt(i,v),x=E.useRef(null),P=E.useRef(0),[S,b]=E.useState({outerHeightStyle:0}),A=E.useCallback(()=>{const M=v.current,R=Xi(M).getComputedStyle(M);if(R.width==="0px")return{outerHeightStyle:0};const N=x.current;N.style.width=R.width,N.value=M.value||t.placeholder||"x",N.value.slice(-1)===`
`&&(N.value+=" ");const K=R.boxSizing,$=pa(R.paddingBottom)+pa(R.paddingTop),H=pa(R.borderBottomWidth)+pa(R.borderTopWidth),ee=N.scrollHeight;N.value="x";const te=N.scrollHeight;let W=ee;a&&(W=Math.max(Number(a)*te,W)),s&&(W=Math.min(Number(s)*te,W)),W=Math.max(W,te);const q=W+(K==="border-box"?$+H:0),Z=Math.abs(W-ee)<=1;return{outerHeightStyle:q,overflow:Z}},[s,a,t.placeholder]),w=(M,I)=>{const{outerHeightStyle:R,overflow:N}=I;return P.current<20&&(R>0&&Math.abs((M.outerHeightStyle||0)-R)>1||M.overflow!==N)?(P.current+=1,{overflow:N,outerHeightStyle:R}):M},y=E.useCallback(()=>{const M=A();W1(M)||b(I=>w(I,M))},[A]),_=()=>{const M=A();W1(M)||Ps.flushSync(()=>{b(I=>w(I,M))})};E.useEffect(()=>{const M=wg(()=>{P.current=0,v.current&&_()});let I;const R=v.current,N=Xi(R);return N.addEventListener("resize",M),typeof ResizeObserver<"u"&&(I=new ResizeObserver(M),I.observe(R)),()=>{M.clear(),N.removeEventListener("resize",M),I&&I.disconnect()}}),Ji(()=>{y()}),E.useEffect(()=>{P.current=0},[d]);const C=M=>{P.current=0,h||y(),o&&o(M)};return F.jsxs(E.Fragment,{children:[F.jsx("textarea",T({value:d,onChange:C,ref:g,rows:a,style:T({height:S.outerHeightStyle,overflow:S.overflow?"hidden":void 0},u)},f)),F.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:x,tabIndex:-1,style:T({},t5.shadow,u,{paddingTop:0,paddingBottom:0})})]})});function or({props:e,states:t,muiFormControl:i}){return t.reduce((o,s)=>(o[s]=e[s],i&&typeof e[s]>"u"&&(o[s]=i[s]),o),{})}const i5=E.createContext(void 0),Zf=i5;function rr(){return E.useContext(Zf)}function o5(e){return F.jsx(Nw,T({},e,{defaultTheme:ou,themeId:eo}))}function H1(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function rl(e,t=!1){return e&&(H1(e.value)&&e.value!==""||t&&H1(e.defaultValue)&&e.defaultValue!=="")}function r5(e){return e.startAdornment}function s5(e){return Ge("MuiInputBase",e)}const a5=Ne("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),Jo=a5,l5=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],su=(e,t)=>{const{ownerState:i}=e;return[t.root,i.formControl&&t.formControl,i.startAdornment&&t.adornedStart,i.endAdornment&&t.adornedEnd,i.error&&t.error,i.size==="small"&&t.sizeSmall,i.multiline&&t.multiline,i.color&&t[`color${Ee(i.color)}`],i.fullWidth&&t.fullWidth,i.hiddenLabel&&t.hiddenLabel]},au=(e,t)=>{const{ownerState:i}=e;return[t.input,i.size==="small"&&t.inputSizeSmall,i.multiline&&t.inputMultiline,i.type==="search"&&t.inputTypeSearch,i.startAdornment&&t.inputAdornedStart,i.endAdornment&&t.inputAdornedEnd,i.hiddenLabel&&t.inputHiddenLabel]},u5=e=>{const{classes:t,color:i,disabled:o,error:s,endAdornment:a,focused:u,formControl:d,fullWidth:f,hiddenLabel:h,multiline:v,readOnly:g,size:x,startAdornment:P,type:S}=e,b={root:["root",`color${Ee(i)}`,o&&"disabled",s&&"error",f&&"fullWidth",u&&"focused",d&&"formControl",x==="small"&&"sizeSmall",v&&"multiline",P&&"adornedStart",a&&"adornedEnd",h&&"hiddenLabel",g&&"readOnly"],input:["input",o&&"disabled",S==="search"&&"inputTypeSearch",v&&"inputMultiline",x==="small"&&"inputSizeSmall",h&&"inputHiddenLabel",P&&"inputAdornedStart",a&&"inputAdornedEnd",g&&"readOnly"]};return et(b,s5,t)},lu=de("div",{name:"MuiInputBase",slot:"Root",overridesResolver:su})(({theme:e,ownerState:t})=>T({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Jo.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&T({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),uu=de("input",{name:"MuiInputBase",slot:"Input",overridesResolver:au})(({theme:e,ownerState:t})=>{const i=e.palette.mode==="light",o=T({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),s={opacity:"0 !important"},a=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:i?.42:.5};return T({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Jo.formControl} &`]:{"&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus:-ms-input-placeholder":a,"&:focus::-ms-input-placeholder":a},[`&.${Jo.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),c5=F.jsx(o5,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),d5=E.forwardRef(function(t,i){var o;const s=tt({props:t,name:"MuiInputBase"}),{"aria-describedby":a,autoComplete:u,autoFocus:d,className:f,components:h={},componentsProps:v={},defaultValue:g,disabled:x,disableInjectingGlobalStyles:P,endAdornment:S,fullWidth:b=!1,id:A,inputComponent:w="input",inputProps:y={},inputRef:_,maxRows:C,minRows:M,multiline:I=!1,name:R,onBlur:N,onChange:K,onClick:$,onFocus:H,onKeyDown:ee,onKeyUp:te,placeholder:W,readOnly:q,renderSuffix:Z,rows:G,slotProps:z={},slots:V={},startAdornment:B,type:J="text",value:se}=s,pe=ue(s,l5),ne=y.value!=null?y.value:se,{current:ie}=E.useRef(ne!=null),Q=E.useRef(),Le=E.useCallback(Se=>{},[]),qe=zt(Q,_,y.ref,Le),[Fe,ot]=E.useState(!1),ve=rr(),ce=or({props:s,muiFormControl:ve,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ce.focused=ve?ve.focused:Fe,E.useEffect(()=>{!ve&&x&&Fe&&(ot(!1),N&&N())},[ve,x,Fe,N]);const _e=ve&&ve.onFilled,Me=ve&&ve.onEmpty,Tt=E.useCallback(Se=>{rl(Se)?_e&&_e():Me&&Me()},[_e,Me]);Ji(()=>{ie&&Tt({value:ne})},[ne,Tt,ie]);const Lt=Se=>{if(ce.disabled){Se.stopPropagation();return}H&&H(Se),y.onFocus&&y.onFocus(Se),ve&&ve.onFocus?ve.onFocus(Se):ot(!0)},wt=Se=>{N&&N(Se),y.onBlur&&y.onBlur(Se),ve&&ve.onBlur?ve.onBlur(Se):ot(!1)},bt=(Se,...ae)=>{if(!ie){const oe=Se.target||Q.current;if(oe==null)throw new Error(Pi(1));Tt({value:oe.value})}y.onChange&&y.onChange(Se,...ae),K&&K(Se,...ae)};E.useEffect(()=>{Tt(Q.current)},[]);const kn=Se=>{Q.current&&Se.currentTarget===Se.target&&Q.current.focus(),$&&$(Se)};let rt=w,We=y;I&&rt==="input"&&(G?We=T({type:void 0,minRows:G,maxRows:G},We):We=T({type:void 0,maxRows:C,minRows:M},We),rt=n5);const Nt=Se=>{Tt(Se.animationName==="mui-auto-fill-cancel"?Q.current:{value:"x"})};E.useEffect(()=>{ve&&ve.setAdornedStart(!!B)},[ve,B]);const ze=T({},s,{color:ce.color||"primary",disabled:ce.disabled,endAdornment:S,error:ce.error,focused:ce.focused,formControl:ve,fullWidth:b,hiddenLabel:ce.hiddenLabel,multiline:I,size:ce.size,startAdornment:B,type:J}),gn=u5(ze),Zt=V.root||h.Root||lu,Vt=z.root||v.root||{},yn=V.input||h.Input||uu;return We=T({},We,(o=z.input)!=null?o:v.input),F.jsxs(E.Fragment,{children:[!P&&c5,F.jsxs(Zt,T({},Vt,!ol(Zt)&&{ownerState:T({},ze,Vt.ownerState)},{ref:i,onClick:kn},pe,{className:ge(gn.root,Vt.className,f,q&&"MuiInputBase-readOnly"),children:[B,F.jsx(Zf.Provider,{value:null,children:F.jsx(yn,T({ownerState:ze,"aria-invalid":ce.error,"aria-describedby":a,autoComplete:u,autoFocus:d,defaultValue:g,disabled:ce.disabled,id:A,onAnimationStart:Nt,name:R,placeholder:W,readOnly:q,required:ce.required,rows:G,value:ne,onKeyDown:ee,onKeyUp:te,type:J},We,!ol(yn)&&{as:rt,ownerState:T({},ze,We.ownerState)},{ref:qe,className:ge(gn.input,We.className,q&&"MuiInputBase-readOnly"),onBlur:wt,onChange:bt,onFocus:Lt}))}),S,Z?Z(T({},ce,{startAdornment:B})):null]}))]})}),Vf=d5;function f5(e){return Ge("MuiInput",e)}const p5=T({},Jo,Ne("MuiInput",["root","underline","input"])),Rr=p5;function h5(e){return Ge("MuiOutlinedInput",e)}const m5=T({},Jo,Ne("MuiOutlinedInput",["root","notchedOutline","input"])),ui=m5;function g5(e){return Ge("MuiFilledInput",e)}const y5=T({},Jo,Ne("MuiFilledInput",["root","underline","input"])),Ai=y5,v5=jf(F.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),_5=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],x5={entering:{opacity:1},entered:{opacity:1}},w5=E.forwardRef(function(t,i){const o=Df(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:a,appear:u=!0,children:d,easing:f,in:h,onEnter:v,onEntered:g,onEntering:x,onExit:P,onExited:S,onExiting:b,style:A,timeout:w=s,TransitionComponent:y=ey}=t,_=ue(t,_5),C=E.useRef(null),M=zt(C,d.ref,i),I=W=>q=>{if(W){const Z=C.current;q===void 0?W(Z):W(Z,q)}},R=I(x),N=I((W,q)=>{ty(W);const Z=il({style:A,timeout:w,easing:f},{mode:"enter"});W.style.webkitTransition=o.transitions.create("opacity",Z),W.style.transition=o.transitions.create("opacity",Z),v&&v(W,q)}),K=I(g),$=I(b),H=I(W=>{const q=il({style:A,timeout:w,easing:f},{mode:"exit"});W.style.webkitTransition=o.transitions.create("opacity",q),W.style.transition=o.transitions.create("opacity",q),P&&P(W)}),ee=I(S),te=W=>{a&&a(C.current,W)};return F.jsx(y,T({appear:u,in:h,nodeRef:C,onEnter:N,onEntered:K,onEntering:R,onExit:H,onExited:ee,onExiting:$,addEndListener:te,timeout:w},_,{children:(W,q)=>E.cloneElement(d,T({style:T({opacity:0,visibility:W==="exited"&&!h?"hidden":void 0},x5[W],A,d.props.style),ref:M},q))}))}),b5=w5;function E5(e){return Ge("MuiBackdrop",e)}Ne("MuiBackdrop",["root","invisible"]);const S5=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],C5=e=>{const{classes:t,invisible:i}=e;return et({root:["root",i&&"invisible"]},E5,t)},P5=de("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.invisible&&t.invisible]}})(({ownerState:e})=>T({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),k5=E.forwardRef(function(t,i){var o,s,a;const u=tt({props:t,name:"MuiBackdrop"}),{children:d,className:f,component:h="div",components:v={},componentsProps:g={},invisible:x=!1,open:P,slotProps:S={},slots:b={},TransitionComponent:A=b5,transitionDuration:w}=u,y=ue(u,S5),_=T({},u,{component:h,invisible:x}),C=C5(_),M=(o=S.root)!=null?o:g.root;return F.jsx(A,T({in:P,timeout:w},y,{children:F.jsx(P5,T({"aria-hidden":!0},M,{as:(s=(a=b.root)!=null?a:v.Root)!=null?s:h,className:ge(C.root,f,M==null?void 0:M.className),ownerState:T({},_,M==null?void 0:M.ownerState),classes:C,ref:i,children:d}))}))}),T5=k5,L5=$f(),M5=Dw({themeId:eo,defaultTheme:L5,defaultClassName:"MuiBox-root",generateClassName:Eg.generate}),oy=M5;function R5(e){return Ge("MuiButton",e)}const I5=Ne("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),ha=I5,O5=E.createContext({}),z5=O5,A5=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],U5=e=>{const{color:t,disableElevation:i,fullWidth:o,size:s,variant:a,classes:u}=e,d={root:["root",a,`${a}${Ee(t)}`,`size${Ee(s)}`,`${a}Size${Ee(s)}`,t==="inherit"&&"colorInherit",i&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${Ee(s)}`],endIcon:["endIcon",`iconSize${Ee(s)}`]},f=et(d,R5,u);return T({},u,f)},ry=e=>T({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),N5=de(ny,{shouldForwardProp:e=>Wn(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],t[`${i.variant}${Ee(i.color)}`],t[`size${Ee(i.size)}`],t[`${i.variant}Size${Ee(i.size)}`],i.color==="inherit"&&t.colorInherit,i.disableElevation&&t.disableElevation,i.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var i,o;const s=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],a=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return T({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":T({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:Bn(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Bn(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Bn(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:a,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":T({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${ha.focusVisible}`]:T({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${ha.disabled}`]:T({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${Bn(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(i=(o=e.palette).getContrastText)==null?void 0:i.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:s,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${ha.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${ha.disabled}`]:{boxShadow:"none"}}),F5=de("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.startIcon,t[`iconSize${Ee(i.size)}`]]}})(({ownerState:e})=>T({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},ry(e))),B5=de("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.endIcon,t[`iconSize${Ee(i.size)}`]]}})(({ownerState:e})=>T({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},ry(e))),$5=E.forwardRef(function(t,i){const o=E.useContext(z5),s=Cf(o,t),a=tt({props:s,name:"MuiButton"}),{children:u,color:d="primary",component:f="button",className:h,disabled:v=!1,disableElevation:g=!1,disableFocusRipple:x=!1,endIcon:P,focusVisibleClassName:S,fullWidth:b=!1,size:A="medium",startIcon:w,type:y,variant:_="text"}=a,C=ue(a,A5),M=T({},a,{color:d,component:f,disabled:v,disableElevation:g,disableFocusRipple:x,fullWidth:b,size:A,type:y,variant:_}),I=U5(M),R=w&&F.jsx(F5,{className:I.startIcon,ownerState:M,children:w}),N=P&&F.jsx(B5,{className:I.endIcon,ownerState:M,children:P});return F.jsxs(N5,T({ownerState:M,className:ge(o.className,I.root,h),component:f,disabled:v,focusRipple:!x,focusVisibleClassName:ge(I.focusVisible,S),ref:i,type:y},C,{classes:I,children:[R,u,N]}))}),D5=$5;function j5(e){return Ge("MuiModal",e)}Ne("MuiModal",["root","hidden","backdrop"]);const W5=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],H5=e=>{const{open:t,exited:i,classes:o}=e;return et({root:["root",!t&&i&&"hidden"],backdrop:["backdrop"]},j5,o)},Z5=de("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,!i.open&&i.exited&&t.hidden]}})(({theme:e,ownerState:t})=>T({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),V5=de(T5,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),K5=E.forwardRef(function(t,i){var o,s,a,u,d,f;const h=tt({name:"MuiModal",props:t}),{BackdropComponent:v=V5,BackdropProps:g,className:x,closeAfterTransition:P=!1,children:S,container:b,component:A,components:w={},componentsProps:y={},disableAutoFocus:_=!1,disableEnforceFocus:C=!1,disableEscapeKeyDown:M=!1,disablePortal:I=!1,disableRestoreFocus:R=!1,disableScrollLock:N=!1,hideBackdrop:K=!1,keepMounted:$=!1,onBackdropClick:H,open:ee,slotProps:te,slots:W}=h,q=ue(h,W5),Z=T({},h,{closeAfterTransition:P,disableAutoFocus:_,disableEnforceFocus:C,disableEscapeKeyDown:M,disablePortal:I,disableRestoreFocus:R,disableScrollLock:N,hideBackdrop:K,keepMounted:$}),{getRootProps:G,getBackdropProps:z,getTransitionProps:V,portalRef:B,isTopModal:J,exited:se,hasTransition:pe}=J4(T({},Z,{rootRef:i})),ne=T({},Z,{exited:se}),ie=H5(ne),Q={};if(S.props.tabIndex===void 0&&(Q.tabIndex="-1"),pe){const{onEnter:_e,onExited:Me}=V();Q.onEnter=_e,Q.onExited=Me}const Le=(o=(s=W==null?void 0:W.root)!=null?s:w.Root)!=null?o:Z5,qe=(a=(u=W==null?void 0:W.backdrop)!=null?u:w.Backdrop)!=null?a:v,Fe=(d=te==null?void 0:te.root)!=null?d:y.root,ot=(f=te==null?void 0:te.backdrop)!=null?f:y.backdrop,ve=Xo({elementType:Le,externalSlotProps:Fe,externalForwardedProps:q,getSlotProps:G,additionalProps:{ref:i,as:A},ownerState:ne,className:ge(x,Fe==null?void 0:Fe.className,ie==null?void 0:ie.root,!ne.open&&ne.exited&&(ie==null?void 0:ie.hidden))}),ce=Xo({elementType:qe,externalSlotProps:ot,additionalProps:g,getSlotProps:_e=>z(T({},_e,{onClick:Me=>{H&&H(Me),_e!=null&&_e.onClick&&_e.onClick(Me)}})),className:ge(ot==null?void 0:ot.className,g==null?void 0:g.className,ie==null?void 0:ie.backdrop),ownerState:ne});return!$&&!ee&&(!pe||se)?null:F.jsx(H4,{ref:B,container:b,disablePortal:I,children:F.jsxs(Le,T({},ve,{children:[!K&&v?F.jsx(qe,T({},ce)):null,F.jsx(j4,{disableEnforceFocus:C,disableAutoFocus:_,disableRestoreFocus:R,isEnabled:J,open:ee,children:E.cloneElement(S,Q)})]}))})}),G5=K5,q5=Ne("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Z1=q5,Y5=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],Q5=e=>{const{classes:t,disableUnderline:i}=e,s=et({root:["root",!i&&"underline"],input:["input"]},g5,t);return T({},t,s)},X5=de(lu,{shouldForwardProp:e=>Wn(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[...su(e,t),!i.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var i;const o=e.palette.mode==="light",s=o?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",a=o?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",u=o?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",d=o?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return T({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:a,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:u,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:a}},[`&.${Ai.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:a},[`&.${Ai.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:d}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(i=(e.vars||e).palette[t.color||"primary"])==null?void 0:i.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ai.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ai.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:s}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ai.disabled}, .${Ai.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Ai.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&T({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),J5=de(uu,{name:"MuiFilledInput",slot:"Input",overridesResolver:au})(({theme:e,ownerState:t})=>T({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9})),sy=E.forwardRef(function(t,i){var o,s,a,u;const d=tt({props:t,name:"MuiFilledInput"}),{components:f={},componentsProps:h,fullWidth:v=!1,inputComponent:g="input",multiline:x=!1,slotProps:P,slots:S={},type:b="text"}=d,A=ue(d,Y5),w=T({},d,{fullWidth:v,inputComponent:g,multiline:x,type:b}),y=Q5(d),_={root:{ownerState:w},input:{ownerState:w}},C=P??h?fn(P??h,_):_,M=(o=(s=S.root)!=null?s:f.Root)!=null?o:X5,I=(a=(u=S.input)!=null?u:f.Input)!=null?a:J5;return F.jsx(Vf,T({slots:{root:M,input:I},componentsProps:C,fullWidth:v,inputComponent:g,multiline:x,ref:i,type:b},A,{classes:y}))});sy.muiName="Input";const ay=sy;function e8(e){return Ge("MuiFormControl",e)}Ne("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const t8=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],n8=e=>{const{classes:t,margin:i,fullWidth:o}=e,s={root:["root",i!=="none"&&`margin${Ee(i)}`,o&&"fullWidth"]};return et(s,e8,t)},i8=de("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>T({},t.root,t[`margin${Ee(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>T({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),o8=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiFormControl"}),{children:s,className:a,color:u="primary",component:d="div",disabled:f=!1,error:h=!1,focused:v,fullWidth:g=!1,hiddenLabel:x=!1,margin:P="none",required:S=!1,size:b="medium",variant:A="outlined"}=o,w=ue(o,t8),y=T({},o,{color:u,component:d,disabled:f,error:h,fullWidth:g,hiddenLabel:x,margin:P,required:S,size:b,variant:A}),_=n8(y),[C,M]=E.useState(()=>{let te=!1;return s&&E.Children.forEach(s,W=>{if(!fc(W,["Input","Select"]))return;const q=fc(W,["Select"])?W.props.input:W;q&&r5(q.props)&&(te=!0)}),te}),[I,R]=E.useState(()=>{let te=!1;return s&&E.Children.forEach(s,W=>{fc(W,["Input","Select"])&&(rl(W.props,!0)||rl(W.props.inputProps,!0))&&(te=!0)}),te}),[N,K]=E.useState(!1);f&&N&&K(!1);const $=v!==void 0&&!f?v:N;let H;const ee=E.useMemo(()=>({adornedStart:C,setAdornedStart:M,color:u,disabled:f,error:h,filled:I,focused:$,fullWidth:g,hiddenLabel:x,size:b,onBlur:()=>{K(!1)},onEmpty:()=>{R(!1)},onFilled:()=>{R(!0)},onFocus:()=>{K(!0)},registerEffect:H,required:S,variant:A}),[C,u,f,h,I,$,g,x,H,S,b,A]);return F.jsx(Zf.Provider,{value:ee,children:F.jsx(i8,T({as:d,ownerState:y,className:ge(_.root,a),ref:i},w,{children:s}))})}),r8=o8;function s8(e){return Ge("MuiFormHelperText",e)}const a8=Ne("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),V1=a8;var K1;const l8=["children","className","component","disabled","error","filled","focused","margin","required","variant"],u8=e=>{const{classes:t,contained:i,size:o,disabled:s,error:a,filled:u,focused:d,required:f}=e,h={root:["root",s&&"disabled",a&&"error",o&&`size${Ee(o)}`,i&&"contained",d&&"focused",u&&"filled",f&&"required"]};return et(h,s8,t)},c8=de("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,i.size&&t[`size${Ee(i.size)}`],i.contained&&t.contained,i.filled&&t.filled]}})(({theme:e,ownerState:t})=>T({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${V1.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${V1.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),d8=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiFormHelperText"}),{children:s,className:a,component:u="p"}=o,d=ue(o,l8),f=rr(),h=or({props:o,muiFormControl:f,states:["variant","size","disabled","error","filled","focused","required"]}),v=T({},o,{component:u,contained:h.variant==="filled"||h.variant==="outlined",variant:h.variant,size:h.size,disabled:h.disabled,error:h.error,filled:h.filled,focused:h.focused,required:h.required}),g=u8(v);return F.jsx(c8,T({as:u,ownerState:v,className:ge(g.root,a),ref:i},d,{children:s===" "?K1||(K1=F.jsx("span",{className:"notranslate",children:"​"})):s}))}),f8=d8;function p8(e){return Ge("MuiFormLabel",e)}const h8=Ne("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Jr=h8,m8=["children","className","color","component","disabled","error","filled","focused","required"],g8=e=>{const{classes:t,color:i,focused:o,disabled:s,error:a,filled:u,required:d}=e,f={root:["root",`color${Ee(i)}`,s&&"disabled",a&&"error",u&&"filled",o&&"focused",d&&"required"],asterisk:["asterisk",a&&"error"]};return et(f,p8,t)},y8=de("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>T({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>T({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Jr.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Jr.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${Jr.error}`]:{color:(e.vars||e).palette.error.main}})),v8=de("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${Jr.error}`]:{color:(e.vars||e).palette.error.main}})),_8=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiFormLabel"}),{children:s,className:a,component:u="label"}=o,d=ue(o,m8),f=rr(),h=or({props:o,muiFormControl:f,states:["color","required","focused","disabled","error","filled"]}),v=T({},o,{color:h.color||"primary",component:u,disabled:h.disabled,error:h.error,filled:h.filled,focused:h.focused,required:h.required}),g=g8(v);return F.jsxs(y8,T({as:u,ownerState:v,className:ge(g.root,a),ref:i},d,{children:[s,h.required&&F.jsxs(v8,{ownerState:v,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}))}),x8=_8,w8=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ed(e){return`scale(${e}, ${e**2})`}const b8={entering:{opacity:1,transform:Ed(1)},entered:{opacity:1,transform:"none"}},yc=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ly=E.forwardRef(function(t,i){const{addEndListener:o,appear:s=!0,children:a,easing:u,in:d,onEnter:f,onEntered:h,onEntering:v,onExit:g,onExited:x,onExiting:P,style:S,timeout:b="auto",TransitionComponent:A=ey}=t,w=ue(t,w8),y=E.useRef(),_=E.useRef(),C=Df(),M=E.useRef(null),I=zt(M,a.ref,i),R=q=>Z=>{if(q){const G=M.current;Z===void 0?q(G):q(G,Z)}},N=R(v),K=R((q,Z)=>{ty(q);const{duration:G,delay:z,easing:V}=il({style:S,timeout:b,easing:u},{mode:"enter"});let B;b==="auto"?(B=C.transitions.getAutoHeightDuration(q.clientHeight),_.current=B):B=G,q.style.transition=[C.transitions.create("opacity",{duration:B,delay:z}),C.transitions.create("transform",{duration:yc?B:B*.666,delay:z,easing:V})].join(","),f&&f(q,Z)}),$=R(h),H=R(P),ee=R(q=>{const{duration:Z,delay:G,easing:z}=il({style:S,timeout:b,easing:u},{mode:"exit"});let V;b==="auto"?(V=C.transitions.getAutoHeightDuration(q.clientHeight),_.current=V):V=Z,q.style.transition=[C.transitions.create("opacity",{duration:V,delay:G}),C.transitions.create("transform",{duration:yc?V:V*.666,delay:yc?G:G||V*.333,easing:z})].join(","),q.style.opacity=0,q.style.transform=Ed(.75),g&&g(q)}),te=R(x),W=q=>{b==="auto"&&(y.current=setTimeout(q,_.current||0)),o&&o(M.current,q)};return E.useEffect(()=>()=>{clearTimeout(y.current)},[]),F.jsx(A,T({appear:s,in:d,nodeRef:M,onEnter:K,onEntered:$,onEntering:N,onExit:ee,onExited:te,onExiting:H,addEndListener:W,timeout:b==="auto"?null:b},w,{children:(q,Z)=>E.cloneElement(a,T({style:T({opacity:0,transform:Ed(.75),visibility:q==="exited"&&!d?"hidden":void 0},b8[q],S,a.props.style),ref:I},Z))}))});ly.muiSupportAuto=!0;const E8=ly,S8=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],C8=e=>{const{classes:t,disableUnderline:i}=e,s=et({root:["root",!i&&"underline"],input:["input"]},f5,t);return T({},t,s)},P8=de(lu,{shouldForwardProp:e=>Wn(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[...su(e,t),!i.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let o=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(o=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),T({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Rr.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Rr.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Rr.disabled}, .${Rr.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${o}`}},[`&.${Rr.disabled}:before`]:{borderBottomStyle:"dotted"}})}),k8=de(uu,{name:"MuiInput",slot:"Input",overridesResolver:au})({}),uy=E.forwardRef(function(t,i){var o,s,a,u;const d=tt({props:t,name:"MuiInput"}),{disableUnderline:f,components:h={},componentsProps:v,fullWidth:g=!1,inputComponent:x="input",multiline:P=!1,slotProps:S,slots:b={},type:A="text"}=d,w=ue(d,S8),y=C8(d),C={root:{ownerState:{disableUnderline:f}}},M=S??v?fn(S??v,C):C,I=(o=(s=b.root)!=null?s:h.Root)!=null?o:P8,R=(a=(u=b.input)!=null?u:h.Input)!=null?a:k8;return F.jsx(Vf,T({slots:{root:I,input:R},slotProps:M,fullWidth:g,inputComponent:x,multiline:P,ref:i,type:A},w,{classes:y}))});uy.muiName="Input";const cy=uy;function T8(e){return Ge("MuiInputLabel",e)}Ne("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const L8=["disableAnimation","margin","shrink","variant","className"],M8=e=>{const{classes:t,formControl:i,size:o,shrink:s,disableAnimation:a,variant:u,required:d}=e,h=et({root:["root",i&&"formControl",!a&&"animated",s&&"shrink",o==="small"&&"sizeSmall",u],asterisk:[d&&"asterisk"]},T8,t);return T({},t,h)},R8=de(x8,{shouldForwardProp:e=>Wn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[{[`& .${Jr.asterisk}`]:t.asterisk},t.root,i.formControl&&t.formControl,i.size==="small"&&t.sizeSmall,i.shrink&&t.shrink,!i.disableAnimation&&t.animated,t[i.variant]]}})(({theme:e,ownerState:t})=>T({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&T({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&T({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&T({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),I8=E.forwardRef(function(t,i){const o=tt({name:"MuiInputLabel",props:t}),{disableAnimation:s=!1,shrink:a,className:u}=o,d=ue(o,L8),f=rr();let h=a;typeof h>"u"&&f&&(h=f.filled||f.focused||f.adornedStart);const v=or({props:o,muiFormControl:f,states:["size","variant","required"]}),g=T({},o,{disableAnimation:s,formControl:f,shrink:h,size:v.size,variant:v.variant,required:v.required}),x=M8(g);return F.jsx(R8,T({"data-shrink":h,ownerState:g,ref:i,className:ge(x.root,u)},d,{classes:x}))}),O8=I8,z8=E.createContext({}),Sd=z8;function A8(e){return Ge("MuiList",e)}Ne("MuiList",["root","padding","dense","subheader"]);const U8=["children","className","component","dense","disablePadding","subheader"],N8=e=>{const{classes:t,disablePadding:i,dense:o,subheader:s}=e;return et({root:["root",!i&&"padding",o&&"dense",s&&"subheader"]},A8,t)},F8=de("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,!i.disablePadding&&t.padding,i.dense&&t.dense,i.subheader&&t.subheader]}})(({ownerState:e})=>T({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),B8=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiList"}),{children:s,className:a,component:u="ul",dense:d=!1,disablePadding:f=!1,subheader:h}=o,v=ue(o,U8),g=E.useMemo(()=>({dense:d}),[d]),x=T({},o,{component:u,dense:d,disablePadding:f}),P=N8(x);return F.jsx(Sd.Provider,{value:g,children:F.jsxs(F8,T({as:u,className:ge(P.root,a),ref:i,ownerState:x},v,{children:[h,s]}))})}),$8=B8,D8=Ne("MuiListItemIcon",["root","alignItemsFlexStart"]),G1=D8,j8=Ne("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),q1=j8,W8=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function vc(e,t,i){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:i?null:e.firstChild}function Y1(e,t,i){return e===t?i?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:i?null:e.lastChild}function dy(e,t){if(t===void 0)return!0;let i=e.innerText;return i===void 0&&(i=e.textContent),i=i.trim().toLowerCase(),i.length===0?!1:t.repeating?i[0]===t.keys[0]:i.indexOf(t.keys.join(""))===0}function Ir(e,t,i,o,s,a){let u=!1,d=s(e,t,t?i:!1);for(;d;){if(d===e.firstChild){if(u)return!1;u=!0}const f=o?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!dy(d,a)||f)d=s(e,d,i);else return d.focus(),!0}return!1}const H8=E.forwardRef(function(t,i){const{actions:o,autoFocus:s=!1,autoFocusItem:a=!1,children:u,className:d,disabledItemsFocusable:f=!1,disableListWrap:h=!1,onKeyDown:v,variant:g="selectedMenu"}=t,x=ue(t,W8),P=E.useRef(null),S=E.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Ji(()=>{s&&P.current.focus()},[s]),E.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(_,C)=>{const M=!P.current.style.width;if(_.clientHeight<P.current.clientHeight&&M){const I=`${bg(Qt(_))}px`;P.current.style[C.direction==="rtl"?"paddingLeft":"paddingRight"]=I,P.current.style.width=`calc(100% + ${I})`}return P.current}}),[]);const b=_=>{const C=P.current,M=_.key,I=Qt(C).activeElement;if(M==="ArrowDown")_.preventDefault(),Ir(C,I,h,f,vc);else if(M==="ArrowUp")_.preventDefault(),Ir(C,I,h,f,Y1);else if(M==="Home")_.preventDefault(),Ir(C,null,h,f,vc);else if(M==="End")_.preventDefault(),Ir(C,null,h,f,Y1);else if(M.length===1){const R=S.current,N=M.toLowerCase(),K=performance.now();R.keys.length>0&&(K-R.lastTime>500?(R.keys=[],R.repeating=!0,R.previousKeyMatched=!0):R.repeating&&N!==R.keys[0]&&(R.repeating=!1)),R.lastTime=K,R.keys.push(N);const $=I&&!R.repeating&&dy(I,R);R.previousKeyMatched&&($||Ir(C,I,!1,f,vc,R))?_.preventDefault():R.previousKeyMatched=!1}v&&v(_)},A=zt(P,i);let w=-1;E.Children.forEach(u,(_,C)=>{if(!E.isValidElement(_)){w===C&&(w+=1,w>=u.length&&(w=-1));return}_.props.disabled||(g==="selectedMenu"&&_.props.selected||w===-1)&&(w=C),w===C&&(_.props.disabled||_.props.muiSkipListHighlight||_.type.muiSkipListHighlight)&&(w+=1,w>=u.length&&(w=-1))});const y=E.Children.map(u,(_,C)=>{if(C===w){const M={};return a&&(M.autoFocus=!0),_.props.tabIndex===void 0&&g==="selectedMenu"&&(M.tabIndex=0),E.cloneElement(_,M)}return _});return F.jsx($8,T({role:"menu",ref:A,className:d,onKeyDown:b,tabIndex:s?0:-1},x,{children:y}))}),Z8=H8;function V8(e){return Ge("MuiPopover",e)}Ne("MuiPopover",["root","paper"]);const K8=["onEntering"],G8=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],q8=["slotProps"];function Q1(e,t){let i=0;return typeof t=="number"?i=t:t==="center"?i=e.height/2:t==="bottom"&&(i=e.height),i}function X1(e,t){let i=0;return typeof t=="number"?i=t:t==="center"?i=e.width/2:t==="right"&&(i=e.width),i}function J1(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function _c(e){return typeof e=="function"?e():e}const Y8=e=>{const{classes:t}=e;return et({root:["root"],paper:["paper"]},V8,t)},Q8=de(G5,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),fy=de(s4,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),X8=E.forwardRef(function(t,i){var o,s,a;const u=tt({props:t,name:"MuiPopover"}),{action:d,anchorEl:f,anchorOrigin:h={vertical:"top",horizontal:"left"},anchorPosition:v,anchorReference:g="anchorEl",children:x,className:P,container:S,elevation:b=8,marginThreshold:A=16,open:w,PaperProps:y={},slots:_,slotProps:C,transformOrigin:M={vertical:"top",horizontal:"left"},TransitionComponent:I=E8,transitionDuration:R="auto",TransitionProps:{onEntering:N}={}}=u,K=ue(u.TransitionProps,K8),$=ue(u,G8),H=(o=C==null?void 0:C.paper)!=null?o:y,ee=E.useRef(),te=zt(ee,H.ref),W=T({},u,{anchorOrigin:h,anchorReference:g,elevation:b,marginThreshold:A,externalPaperSlotProps:H,transformOrigin:M,TransitionComponent:I,transitionDuration:R,TransitionProps:K}),q=Y8(W),Z=E.useCallback(()=>{if(g==="anchorPosition")return v;const ce=_c(f),Me=(ce&&ce.nodeType===1?ce:Qt(ee.current).body).getBoundingClientRect();return{top:Me.top+Q1(Me,h.vertical),left:Me.left+X1(Me,h.horizontal)}},[f,h.horizontal,h.vertical,v,g]),G=E.useCallback(ce=>({vertical:Q1(ce,M.vertical),horizontal:X1(ce,M.horizontal)}),[M.horizontal,M.vertical]),z=E.useCallback(ce=>{const _e={width:ce.offsetWidth,height:ce.offsetHeight},Me=G(_e);if(g==="none")return{top:null,left:null,transformOrigin:J1(Me)};const Tt=Z();let Lt=Tt.top-Me.vertical,wt=Tt.left-Me.horizontal;const bt=Lt+_e.height,kn=wt+_e.width,rt=Xi(_c(f)),We=rt.innerHeight-A,Nt=rt.innerWidth-A;if(Lt<A){const ze=Lt-A;Lt-=ze,Me.vertical+=ze}else if(bt>We){const ze=bt-We;Lt-=ze,Me.vertical+=ze}if(wt<A){const ze=wt-A;wt-=ze,Me.horizontal+=ze}else if(kn>Nt){const ze=kn-Nt;wt-=ze,Me.horizontal+=ze}return{top:`${Math.round(Lt)}px`,left:`${Math.round(wt)}px`,transformOrigin:J1(Me)}},[f,g,Z,G,A]),[V,B]=E.useState(w),J=E.useCallback(()=>{const ce=ee.current;if(!ce)return;const _e=z(ce);_e.top!==null&&(ce.style.top=_e.top),_e.left!==null&&(ce.style.left=_e.left),ce.style.transformOrigin=_e.transformOrigin,B(!0)},[z]),se=(ce,_e)=>{N&&N(ce,_e),J()},pe=()=>{B(!1)};E.useEffect(()=>{w&&J()}),E.useImperativeHandle(d,()=>w?{updatePosition:()=>{J()}}:null,[w,J]),E.useEffect(()=>{if(!w)return;const ce=wg(()=>{J()}),_e=Xi(f);return _e.addEventListener("resize",ce),()=>{ce.clear(),_e.removeEventListener("resize",ce)}},[f,w,J]);let ne=R;R==="auto"&&!I.muiSupportAuto&&(ne=void 0);const ie=S||(f?Qt(_c(f)).body:void 0),Q=(s=_==null?void 0:_.root)!=null?s:Q8,Le=(a=_==null?void 0:_.paper)!=null?a:fy,qe=Xo({elementType:Le,externalSlotProps:T({},H,{style:V?H.style:T({},H.style,{opacity:0})}),additionalProps:{elevation:b,ref:te},ownerState:W,className:ge(q.paper,H==null?void 0:H.className)}),Fe=Xo({elementType:Q,externalSlotProps:(C==null?void 0:C.root)||{},externalForwardedProps:$,additionalProps:{ref:i,slotProps:{backdrop:{invisible:!0}},container:ie,open:w},ownerState:W,className:ge(q.root,P)}),{slotProps:ot}=Fe,ve=ue(Fe,q8);return F.jsx(Q,T({},ve,!ol(Q)&&{slotProps:ot},{children:F.jsx(I,T({appear:!0,in:w,onEntering:se,onExited:pe,timeout:ne},K,{children:F.jsx(Le,T({},qe,{children:x}))}))}))}),J8=X8;function eE(e){return Ge("MuiMenu",e)}Ne("MuiMenu",["root","paper","list"]);const tE=["onEntering"],nE=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],iE={vertical:"top",horizontal:"right"},oE={vertical:"top",horizontal:"left"},rE=e=>{const{classes:t}=e;return et({root:["root"],paper:["paper"],list:["list"]},eE,t)},sE=de(J8,{shouldForwardProp:e=>Wn(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),aE=de(fy,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),lE=de(Z8,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),uE=E.forwardRef(function(t,i){var o,s;const a=tt({props:t,name:"MuiMenu"}),{autoFocus:u=!0,children:d,className:f,disableAutoFocusItem:h=!1,MenuListProps:v={},onClose:g,open:x,PaperProps:P={},PopoverClasses:S,transitionDuration:b="auto",TransitionProps:{onEntering:A}={},variant:w="selectedMenu",slots:y={},slotProps:_={}}=a,C=ue(a.TransitionProps,tE),M=ue(a,nE),I=Df(),R=I.direction==="rtl",N=T({},a,{autoFocus:u,disableAutoFocusItem:h,MenuListProps:v,onEntering:A,PaperProps:P,transitionDuration:b,TransitionProps:C,variant:w}),K=rE(N),$=u&&!h&&x,H=E.useRef(null),ee=(V,B)=>{H.current&&H.current.adjustStyleForScrollbar(V,I),A&&A(V,B)},te=V=>{V.key==="Tab"&&(V.preventDefault(),g&&g(V,"tabKeyDown"))};let W=-1;E.Children.map(d,(V,B)=>{E.isValidElement(V)&&(V.props.disabled||(w==="selectedMenu"&&V.props.selected||W===-1)&&(W=B))});const q=(o=y.paper)!=null?o:aE,Z=(s=_.paper)!=null?s:P,G=Xo({elementType:y.root,externalSlotProps:_.root,ownerState:N,className:[K.root,f]}),z=Xo({elementType:q,externalSlotProps:Z,ownerState:N,className:K.paper});return F.jsx(sE,T({onClose:g,anchorOrigin:{vertical:"bottom",horizontal:R?"right":"left"},transformOrigin:R?iE:oE,slots:{paper:q,root:y.root},slotProps:{root:G,paper:z},open:x,ref:i,transitionDuration:b,TransitionProps:T({onEntering:ee},C),ownerState:N},M,{classes:S,children:F.jsx(lE,T({onKeyDown:te,actions:H,autoFocus:u&&(W===-1||h),autoFocusItem:$,variant:w},v,{className:ge(K.list,v.className),children:d}))}))}),py=uE;function cE(e){return Ge("MuiMenuItem",e)}const dE=Ne("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Or=dE,fE=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],pE=(e,t)=>{const{ownerState:i}=e;return[t.root,i.dense&&t.dense,i.divider&&t.divider,!i.disableGutters&&t.gutters]},hE=e=>{const{disabled:t,dense:i,divider:o,disableGutters:s,selected:a,classes:u}=e,f=et({root:["root",i&&"dense",t&&"disabled",!s&&"gutters",o&&"divider",a&&"selected"]},cE,u);return T({},u,f)},mE=de(ny,{shouldForwardProp:e=>Wn(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:pE})(({theme:e,ownerState:t})=>T({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Or.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Bn(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Or.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:Bn(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Or.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:Bn(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:Bn(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Or.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Or.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Z1.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Z1.inset}`]:{marginLeft:52},[`& .${q1.root}`]:{marginTop:0,marginBottom:0},[`& .${q1.inset}`]:{paddingLeft:36},[`& .${G1.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&T({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${G1.root} svg`]:{fontSize:"1.25rem"}}))),gE=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiMenuItem"}),{autoFocus:s=!1,component:a="li",dense:u=!1,divider:d=!1,disableGutters:f=!1,focusVisibleClassName:h,role:v="menuitem",tabIndex:g,className:x}=o,P=ue(o,fE),S=E.useContext(Sd),b=E.useMemo(()=>({dense:u||S.dense||!1,disableGutters:f}),[S.dense,u,f]),A=E.useRef(null);Ji(()=>{s&&A.current&&A.current.focus()},[s]);const w=T({},o,{dense:b.dense,divider:d,disableGutters:f}),y=hE(o),_=zt(A,i);let C;return o.disabled||(C=g!==void 0?g:-1),F.jsx(Sd.Provider,{value:b,children:F.jsx(mE,T({ref:_,role:v,tabIndex:C,component:a,focusVisibleClassName:ge(y.focusVisible,h),className:ge(y.root,x)},P,{ownerState:w,classes:y}))})}),yE=gE;function vE(e){return Ge("MuiNativeSelect",e)}const _E=Ne("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Kf=_E,xE=["className","disabled","error","IconComponent","inputRef","variant"],wE=e=>{const{classes:t,variant:i,disabled:o,multiple:s,open:a,error:u}=e,d={select:["select",i,o&&"disabled",s&&"multiple",u&&"error"],icon:["icon",`icon${Ee(i)}`,a&&"iconOpen",o&&"disabled"]};return et(d,vE,t)},hy=({ownerState:e,theme:t})=>T({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":T({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Kf.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),bE=de("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Wn,overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.select,t[i.variant],i.error&&t.error,{[`&.${Kf.multiple}`]:t.multiple}]}})(hy),my=({ownerState:e,theme:t})=>T({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Kf.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),EE=de("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.icon,i.variant&&t[`icon${Ee(i.variant)}`],i.open&&t.iconOpen]}})(my),SE=E.forwardRef(function(t,i){const{className:o,disabled:s,error:a,IconComponent:u,inputRef:d,variant:f="standard"}=t,h=ue(t,xE),v=T({},t,{disabled:s,variant:f,error:a}),g=wE(v);return F.jsxs(E.Fragment,{children:[F.jsx(bE,T({ownerState:v,className:ge(g.select,o),disabled:s,ref:d||i},h)),t.multiple?null:F.jsx(EE,{as:u,ownerState:v,className:g.icon})]})}),CE=SE;var em;const PE=["children","classes","className","label","notched"],kE=de("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),TE=de("legend")(({ownerState:e,theme:t})=>T({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&T({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function LE(e){const{className:t,label:i,notched:o}=e,s=ue(e,PE),a=i!=null&&i!=="",u=T({},e,{notched:o,withLabel:a});return F.jsx(kE,T({"aria-hidden":!0,className:t,ownerState:u},s,{children:F.jsx(TE,{ownerState:u,children:a?F.jsx("span",{children:i}):em||(em=F.jsx("span",{className:"notranslate",children:"​"}))})}))}const ME=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],RE=e=>{const{classes:t}=e,o=et({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},h5,t);return T({},t,o)},IE=de(lu,{shouldForwardProp:e=>Wn(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:su})(({theme:e,ownerState:t})=>{const i=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return T({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${ui.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${ui.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:i}},[`&.${ui.focused} .${ui.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${ui.error} .${ui.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${ui.disabled} .${ui.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&T({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),OE=de(LE,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),zE=de(uu,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:au})(({theme:e,ownerState:t})=>T({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),gy=E.forwardRef(function(t,i){var o,s,a,u,d;const f=tt({props:t,name:"MuiOutlinedInput"}),{components:h={},fullWidth:v=!1,inputComponent:g="input",label:x,multiline:P=!1,notched:S,slots:b={},type:A="text"}=f,w=ue(f,ME),y=RE(f),_=rr(),C=or({props:f,muiFormControl:_,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),M=T({},f,{color:C.color||"primary",disabled:C.disabled,error:C.error,focused:C.focused,formControl:_,fullWidth:v,hiddenLabel:C.hiddenLabel,multiline:P,size:C.size,type:A}),I=(o=(s=b.root)!=null?s:h.Root)!=null?o:IE,R=(a=(u=b.input)!=null?u:h.Input)!=null?a:zE;return F.jsx(Vf,T({slots:{root:I,input:R},renderSuffix:N=>F.jsx(OE,{ownerState:M,className:y.notchedOutline,label:x!=null&&x!==""&&C.required?d||(d=F.jsxs(E.Fragment,{children:[x," ","*"]})):x,notched:typeof S<"u"?S:!!(N.startAdornment||N.filled||N.focused)}),fullWidth:v,inputComponent:g,multiline:P,ref:i,type:A},w,{classes:T({},y,{notchedOutline:null})}))});gy.muiName="Input";const yy=gy;function AE(e){return Ge("MuiSelect",e)}const UE=Ne("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),zr=UE;var tm;const NE=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],FE=de("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[{[`&.${zr.select}`]:t.select},{[`&.${zr.select}`]:t[i.variant]},{[`&.${zr.error}`]:t.error},{[`&.${zr.multiple}`]:t.multiple}]}})(hy,{[`&.${zr.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),BE=de("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.icon,i.variant&&t[`icon${Ee(i.variant)}`],i.open&&t.iconOpen]}})(my),$E=de("input",{shouldForwardProp:e=>Fb(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function nm(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function DE(e){return e==null||typeof e=="string"&&!e.trim()}const jE=e=>{const{classes:t,variant:i,disabled:o,multiple:s,open:a,error:u}=e,d={select:["select",i,o&&"disabled",s&&"multiple",u&&"error"],icon:["icon",`icon${Ee(i)}`,a&&"iconOpen",o&&"disabled"],nativeInput:["nativeInput"]};return et(d,AE,t)},WE=E.forwardRef(function(t,i){const{"aria-describedby":o,"aria-label":s,autoFocus:a,autoWidth:u,children:d,className:f,defaultOpen:h,defaultValue:v,disabled:g,displayEmpty:x,error:P=!1,IconComponent:S,inputRef:b,labelId:A,MenuProps:w={},multiple:y,name:_,onBlur:C,onChange:M,onClose:I,onFocus:R,onOpen:N,open:K,readOnly:$,renderValue:H,SelectDisplayProps:ee={},tabIndex:te,value:W,variant:q="standard"}=t,Z=ue(t,NE),[G,z]=l1({controlled:W,default:v,name:"Select"}),[V,B]=l1({controlled:K,default:h,name:"Select"}),J=E.useRef(null),se=E.useRef(null),[pe,ne]=E.useState(null),{current:ie}=E.useRef(K!=null),[Q,Le]=E.useState(),qe=zt(i,b),Fe=E.useCallback(oe=>{se.current=oe,oe&&ne(oe)},[]),ot=pe==null?void 0:pe.parentNode;E.useImperativeHandle(qe,()=>({focus:()=>{se.current.focus()},node:J.current,value:G}),[G]),E.useEffect(()=>{h&&V&&pe&&!ie&&(Le(u?null:ot.clientWidth),se.current.focus())},[pe,u]),E.useEffect(()=>{a&&se.current.focus()},[a]),E.useEffect(()=>{if(!A)return;const oe=Qt(se.current).getElementById(A);if(oe){const ke=()=>{getSelection().isCollapsed&&se.current.focus()};return oe.addEventListener("click",ke),()=>{oe.removeEventListener("click",ke)}}},[A]);const ve=(oe,ke)=>{oe?N&&N(ke):I&&I(ke),ie||(Le(u?null:ot.clientWidth),B(oe))},ce=oe=>{oe.button===0&&(oe.preventDefault(),se.current.focus(),ve(!0,oe))},_e=oe=>{ve(!1,oe)},Me=E.Children.toArray(d),Tt=oe=>{const ke=Me.find(Ye=>Ye.props.value===oe.target.value);ke!==void 0&&(z(ke.props.value),M&&M(oe,ke))},Lt=oe=>ke=>{let Ye;if(ke.currentTarget.hasAttribute("tabindex")){if(y){Ye=Array.isArray(G)?G.slice():[];const Tn=G.indexOf(oe.props.value);Tn===-1?Ye.push(oe.props.value):Ye.splice(Tn,1)}else Ye=oe.props.value;if(oe.props.onClick&&oe.props.onClick(ke),G!==Ye&&(z(Ye),M)){const Tn=ke.nativeEvent||ke,oo=new Tn.constructor(Tn.type,Tn);Object.defineProperty(oo,"target",{writable:!0,value:{value:Ye,name:_}}),M(oo,oe)}y||ve(!1,ke)}},wt=oe=>{$||[" ","ArrowUp","ArrowDown","Enter"].indexOf(oe.key)!==-1&&(oe.preventDefault(),ve(!0,oe))},bt=pe!==null&&V,kn=oe=>{!bt&&C&&(Object.defineProperty(oe,"target",{writable:!0,value:{value:G,name:_}}),C(oe))};delete Z["aria-invalid"];let rt,We;const Nt=[];let ze=!1;(rl({value:G})||x)&&(H?rt=H(G):ze=!0);const gn=Me.map(oe=>{if(!E.isValidElement(oe))return null;let ke;if(y){if(!Array.isArray(G))throw new Error(Pi(2));ke=G.some(Ye=>nm(Ye,oe.props.value)),ke&&ze&&Nt.push(oe.props.children)}else ke=nm(G,oe.props.value),ke&&ze&&(We=oe.props.children);return E.cloneElement(oe,{"aria-selected":ke?"true":"false",onClick:Lt(oe),onKeyUp:Ye=>{Ye.key===" "&&Ye.preventDefault(),oe.props.onKeyUp&&oe.props.onKeyUp(Ye)},role:"option",selected:ke,value:void 0,"data-value":oe.props.value})});ze&&(y?Nt.length===0?rt=null:rt=Nt.reduce((oe,ke,Ye)=>(oe.push(ke),Ye<Nt.length-1&&oe.push(", "),oe),[]):rt=We);let Zt=Q;!u&&ie&&pe&&(Zt=ot.clientWidth);let Vt;typeof te<"u"?Vt=te:Vt=g?null:0;const yn=ee.id||(_?`mui-component-select-${_}`:void 0),Se=T({},t,{variant:q,value:G,open:bt,error:P}),ae=jE(Se);return F.jsxs(E.Fragment,{children:[F.jsx(FE,T({ref:Fe,tabIndex:Vt,role:"button","aria-disabled":g?"true":void 0,"aria-expanded":bt?"true":"false","aria-haspopup":"listbox","aria-label":s,"aria-labelledby":[A,yn].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:wt,onMouseDown:g||$?null:ce,onBlur:kn,onFocus:R},ee,{ownerState:Se,className:ge(ee.className,ae.select,f),id:yn,children:DE(rt)?tm||(tm=F.jsx("span",{className:"notranslate",children:"​"})):rt})),F.jsx($E,T({"aria-invalid":P,value:Array.isArray(G)?G.join(","):G,name:_,ref:J,"aria-hidden":!0,onChange:Tt,tabIndex:-1,disabled:g,className:ae.nativeInput,autoFocus:a,ownerState:Se},Z)),F.jsx(BE,{as:S,className:ae.icon,ownerState:Se}),F.jsx(py,T({id:`menu-${_||""}`,anchorEl:ot,open:bt,onClose:_e,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},w,{MenuListProps:T({"aria-labelledby":A,role:"listbox",disableListWrap:!0},w.MenuListProps),PaperProps:T({},w.PaperProps,{style:T({minWidth:Zt},w.PaperProps!=null?w.PaperProps.style:null)}),children:gn}))]})}),HE=WE,ZE=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],VE=["root"],KE=e=>{const{classes:t}=e;return t},Gf={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>Wn(e)&&e!=="variant",slot:"Root"},GE=de(cy,Gf)(""),qE=de(yy,Gf)(""),YE=de(ay,Gf)(""),vy=E.forwardRef(function(t,i){const o=tt({name:"MuiSelect",props:t}),{autoWidth:s=!1,children:a,classes:u={},className:d,defaultOpen:f=!1,displayEmpty:h=!1,IconComponent:v=v5,id:g,input:x,inputProps:P,label:S,labelId:b,MenuProps:A,multiple:w=!1,native:y=!1,onClose:_,onOpen:C,open:M,renderValue:I,SelectDisplayProps:R,variant:N="outlined"}=o,K=ue(o,ZE),$=y?CE:HE,H=rr(),ee=or({props:o,muiFormControl:H,states:["variant","error"]}),te=ee.variant||N,W=T({},o,{variant:te,classes:u}),q=KE(W),Z=ue(q,VE),G=x||{standard:F.jsx(GE,{ownerState:W}),outlined:F.jsx(qE,{label:S,ownerState:W}),filled:F.jsx(YE,{ownerState:W})}[te],z=zt(i,G.ref);return F.jsx(E.Fragment,{children:E.cloneElement(G,T({inputComponent:$,inputProps:T({children:a,error:ee.error,IconComponent:v,variant:te,type:void 0,multiple:w},y?{id:g}:{autoWidth:s,defaultOpen:f,displayEmpty:h,labelId:b,MenuProps:A,onClose:_,onOpen:C,open:M,renderValue:I,SelectDisplayProps:T({id:g},R)},P,{classes:P?fn(Z,P.classes):Z},x?x.props.inputProps:{})},w&&y&&te==="outlined"?{notched:!0}:{},{ref:z,className:ge(G.props.className,d,q.root)},!x&&{variant:te},K))})});vy.muiName="Select";const QE=vy;function XE(e){return Ge("MuiTextField",e)}Ne("MuiTextField",["root"]);const JE=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],e3={standard:cy,filled:ay,outlined:yy},t3=e=>{const{classes:t}=e;return et({root:["root"]},XE,t)},n3=de(r8,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),i3=E.forwardRef(function(t,i){const o=tt({props:t,name:"MuiTextField"}),{autoComplete:s,autoFocus:a=!1,children:u,className:d,color:f="primary",defaultValue:h,disabled:v=!1,error:g=!1,FormHelperTextProps:x,fullWidth:P=!1,helperText:S,id:b,InputLabelProps:A,inputProps:w,InputProps:y,inputRef:_,label:C,maxRows:M,minRows:I,multiline:R=!1,name:N,onBlur:K,onChange:$,onFocus:H,placeholder:ee,required:te=!1,rows:W,select:q=!1,SelectProps:Z,type:G,value:z,variant:V="outlined"}=o,B=ue(o,JE),J=T({},o,{autoFocus:a,color:f,disabled:v,error:g,fullWidth:P,multiline:R,required:te,select:q,variant:V}),se=t3(J),pe={};V==="outlined"&&(A&&typeof A.shrink<"u"&&(pe.notched=A.shrink),pe.label=C),q&&((!Z||!Z.native)&&(pe.id=void 0),pe["aria-describedby"]=void 0);const ne=k9(b),ie=S&&ne?`${ne}-helper-text`:void 0,Q=C&&ne?`${ne}-label`:void 0,Le=e3[V],qe=F.jsx(Le,T({"aria-describedby":ie,autoComplete:s,autoFocus:a,defaultValue:h,fullWidth:P,multiline:R,name:N,rows:W,maxRows:M,minRows:I,type:G,value:z,id:ne,inputRef:_,onBlur:K,onChange:$,onFocus:H,placeholder:ee,inputProps:w},pe,y));return F.jsxs(n3,T({className:ge(se.root,d),disabled:v,error:g,fullWidth:P,ref:i,required:te,color:f,variant:V,ownerState:J},B,{children:[C!=null&&C!==""&&F.jsx(O8,T({htmlFor:ne,id:Q},A,{children:C})),q?F.jsx(QE,T({"aria-describedby":ie,id:ne,labelId:Q,value:z,input:qe},Z,{children:u})):qe,S&&F.jsx(f8,T({id:ie},x,{children:S}))]}))}),o3=i3;var Cd={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(i,o){o(t)})(Ar,function(i){var o="1.9.4";function s(n){var r,l,c,p;for(l=1,c=arguments.length;l<c;l++){p=arguments[l];for(r in p)n[r]=p[r]}return n}var a=Object.create||function(){function n(){}return function(r){return n.prototype=r,new n}}();function u(n,r){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var c=l.call(arguments,2);return function(){return n.apply(r,c.length?c.concat(l.call(arguments)):arguments)}}var d=0;function f(n){return"_leaflet_id"in n||(n._leaflet_id=++d),n._leaflet_id}function h(n,r,l){var c,p,m,k;return k=function(){c=!1,p&&(m.apply(l,p),p=!1)},m=function(){c?p=arguments:(n.apply(l,arguments),setTimeout(k,r),c=!0)},m}function v(n,r,l){var c=r[1],p=r[0],m=c-p;return n===c&&l?n:((n-p)%m+m)%m+p}function g(){return!1}function x(n,r){if(r===!1)return n;var l=Math.pow(10,r===void 0?6:r);return Math.round(n*l)/l}function P(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function S(n){return P(n).split(/\s+/)}function b(n,r){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in r)n.options[l]=r[l];return n.options}function A(n,r,l){var c=[];for(var p in n)c.push(encodeURIComponent(l?p.toUpperCase():p)+"="+encodeURIComponent(n[p]));return(!r||r.indexOf("?")===-1?"?":"&")+c.join("&")}var w=/\{ *([\w_ -]+) *\}/g;function y(n,r){return n.replace(w,function(l,c){var p=r[c];if(p===void 0)throw new Error("No value provided for variable "+l);return typeof p=="function"&&(p=p(r)),p})}var _=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function C(n,r){for(var l=0;l<n.length;l++)if(n[l]===r)return l;return-1}var M="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function I(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var R=0;function N(n){var r=+new Date,l=Math.max(0,16-(r-R));return R=r+l,window.setTimeout(n,l)}var K=window.requestAnimationFrame||I("RequestAnimationFrame")||N,$=window.cancelAnimationFrame||I("CancelAnimationFrame")||I("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function H(n,r,l){if(l&&K===N)n.call(r);else return K.call(window,u(n,r))}function ee(n){n&&$.call(window,n)}var te={__proto__:null,extend:s,create:a,bind:u,get lastId(){return d},stamp:f,throttle:h,wrapNum:v,falseFn:g,formatNum:x,trim:P,splitWords:S,setOptions:b,getParamString:A,template:y,isArray:_,indexOf:C,emptyImageUrl:M,requestFn:K,cancelFn:$,requestAnimFrame:H,cancelAnimFrame:ee};function W(){}W.extend=function(n){var r=function(){b(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=r.__super__=this.prototype,c=a(l);c.constructor=r,r.prototype=c;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(r[p]=this[p]);return n.statics&&s(r,n.statics),n.includes&&(q(n.includes),s.apply(null,[c].concat(n.includes))),s(c,n),delete c.statics,delete c.includes,c.options&&(c.options=l.options?a(l.options):{},s(c.options,n.options)),c._initHooks=[],c.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var m=0,k=c._initHooks.length;m<k;m++)c._initHooks[m].call(this)}},r},W.include=function(n){var r=this.prototype.options;return s(this.prototype,n),n.options&&(this.prototype.options=r,this.mergeOptions(n.options)),this},W.mergeOptions=function(n){return s(this.prototype.options,n),this},W.addInitHook=function(n){var r=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function q(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=_(n)?n:[n];for(var r=0;r<n.length;r++)n[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Z={on:function(n,r,l){if(typeof n=="object")for(var c in n)this._on(c,n[c],r);else{n=S(n);for(var p=0,m=n.length;p<m;p++)this._on(n[p],r,l)}return this},off:function(n,r,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var c in n)this._off(c,n[c],r);else{n=S(n);for(var p=arguments.length===1,m=0,k=n.length;m<k;m++)p?this._off(n[m]):this._off(n[m],r,l)}return this},_on:function(n,r,l,c){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(n,r,l)===!1){l===this&&(l=void 0);var p={fn:r,ctx:l};c&&(p.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(p)}},_off:function(n,r,l){var c,p,m;if(this._events&&(c=this._events[n],!!c)){if(arguments.length===1){if(this._firingCount)for(p=0,m=c.length;p<m;p++)c[p].fn=g;delete this._events[n];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var k=this._listens(n,r,l);if(k!==!1){var O=c[k];this._firingCount&&(O.fn=g,this._events[n]=c=c.slice()),c.splice(k,1)}}},fire:function(n,r,l){if(!this.listens(n,l))return this;var c=s({},r,{type:n,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var p=this._events[n];if(p){this._firingCount=this._firingCount+1||1;for(var m=0,k=p.length;m<k;m++){var O=p[m],U=O.fn;O.once&&this.off(n,U,O.ctx),U.call(O.ctx||this,c)}this._firingCount--}}return l&&this._propagateEvent(c),this},listens:function(n,r,l,c){typeof n!="string"&&console.warn('"string" type argument expected');var p=r;typeof r!="function"&&(c=!!r,p=void 0,l=void 0);var m=this._events&&this._events[n];if(m&&m.length&&this._listens(n,p,l)!==!1)return!0;if(c){for(var k in this._eventParents)if(this._eventParents[k].listens(n,r,l,c))return!0}return!1},_listens:function(n,r,l){if(!this._events)return!1;var c=this._events[n]||[];if(!r)return!!c.length;l===this&&(l=void 0);for(var p=0,m=c.length;p<m;p++)if(c[p].fn===r&&c[p].ctx===l)return p;return!1},once:function(n,r,l){if(typeof n=="object")for(var c in n)this._on(c,n[c],r,!0);else{n=S(n);for(var p=0,m=n.length;p<m;p++)this._on(n[p],r,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[f(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[f(n)],this},_propagateEvent:function(n){for(var r in this._eventParents)this._eventParents[r].fire(n.type,s({layer:n.target,propagatedFrom:n.target},n),!0)}};Z.addEventListener=Z.on,Z.removeEventListener=Z.clearAllEventListeners=Z.off,Z.addOneTimeEventListener=Z.once,Z.fireEvent=Z.fire,Z.hasEventListeners=Z.listens;var G=W.extend(Z);function z(n,r,l){this.x=l?Math.round(n):n,this.y=l?Math.round(r):r}var V=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};z.prototype={clone:function(){return new z(this.x,this.y)},add:function(n){return this.clone()._add(B(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(B(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new z(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new z(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=V(this.x),this.y=V(this.y),this},distanceTo:function(n){n=B(n);var r=n.x-this.x,l=n.y-this.y;return Math.sqrt(r*r+l*l)},equals:function(n){return n=B(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=B(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+x(this.x)+", "+x(this.y)+")"}};function B(n,r,l){return n instanceof z?n:_(n)?new z(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new z(n.x,n.y):new z(n,r,l)}function J(n,r){if(n)for(var l=r?[n,r]:n,c=0,p=l.length;c<p;c++)this.extend(l[c])}J.prototype={extend:function(n){var r,l;if(!n)return this;if(n instanceof z||typeof n[0]=="number"||"x"in n)r=l=B(n);else if(n=se(n),r=n.min,l=n.max,!r||!l)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=l.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return B((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return B(this.min.x,this.max.y)},getTopRight:function(){return B(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var r,l;return typeof n[0]=="number"||n instanceof z?n=B(n):n=se(n),n instanceof J?(r=n.min,l=n.max):r=l=n,r.x>=this.min.x&&l.x<=this.max.x&&r.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=se(n);var r=this.min,l=this.max,c=n.min,p=n.max,m=p.x>=r.x&&c.x<=l.x,k=p.y>=r.y&&c.y<=l.y;return m&&k},overlaps:function(n){n=se(n);var r=this.min,l=this.max,c=n.min,p=n.max,m=p.x>r.x&&c.x<l.x,k=p.y>r.y&&c.y<l.y;return m&&k},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var r=this.min,l=this.max,c=Math.abs(r.x-l.x)*n,p=Math.abs(r.y-l.y)*n;return se(B(r.x-c,r.y-p),B(l.x+c,l.y+p))},equals:function(n){return n?(n=se(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function se(n,r){return!n||n instanceof J?n:new J(n,r)}function pe(n,r){if(n)for(var l=r?[n,r]:n,c=0,p=l.length;c<p;c++)this.extend(l[c])}pe.prototype={extend:function(n){var r=this._southWest,l=this._northEast,c,p;if(n instanceof ie)c=n,p=n;else if(n instanceof pe){if(c=n._southWest,p=n._northEast,!c||!p)return this}else return n?this.extend(Q(n)||ne(n)):this;return!r&&!l?(this._southWest=new ie(c.lat,c.lng),this._northEast=new ie(p.lat,p.lng)):(r.lat=Math.min(c.lat,r.lat),r.lng=Math.min(c.lng,r.lng),l.lat=Math.max(p.lat,l.lat),l.lng=Math.max(p.lng,l.lng)),this},pad:function(n){var r=this._southWest,l=this._northEast,c=Math.abs(r.lat-l.lat)*n,p=Math.abs(r.lng-l.lng)*n;return new pe(new ie(r.lat-c,r.lng-p),new ie(l.lat+c,l.lng+p))},getCenter:function(){return new ie((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ie(this.getNorth(),this.getWest())},getSouthEast:function(){return new ie(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof ie||"lat"in n?n=Q(n):n=ne(n);var r=this._southWest,l=this._northEast,c,p;return n instanceof pe?(c=n.getSouthWest(),p=n.getNorthEast()):c=p=n,c.lat>=r.lat&&p.lat<=l.lat&&c.lng>=r.lng&&p.lng<=l.lng},intersects:function(n){n=ne(n);var r=this._southWest,l=this._northEast,c=n.getSouthWest(),p=n.getNorthEast(),m=p.lat>=r.lat&&c.lat<=l.lat,k=p.lng>=r.lng&&c.lng<=l.lng;return m&&k},overlaps:function(n){n=ne(n);var r=this._southWest,l=this._northEast,c=n.getSouthWest(),p=n.getNorthEast(),m=p.lat>r.lat&&c.lat<l.lat,k=p.lng>r.lng&&c.lng<l.lng;return m&&k},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,r){return n?(n=ne(n),this._southWest.equals(n.getSouthWest(),r)&&this._northEast.equals(n.getNorthEast(),r)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ne(n,r){return n instanceof pe?n:new pe(n,r)}function ie(n,r,l){if(isNaN(n)||isNaN(r))throw new Error("Invalid LatLng object: ("+n+", "+r+")");this.lat=+n,this.lng=+r,l!==void 0&&(this.alt=+l)}ie.prototype={equals:function(n,r){if(!n)return!1;n=Q(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(r===void 0?1e-9:r)},toString:function(n){return"LatLng("+x(this.lat,n)+", "+x(this.lng,n)+")"},distanceTo:function(n){return qe.distance(this,Q(n))},wrap:function(){return qe.wrapLatLng(this)},toBounds:function(n){var r=180*n/40075017,l=r/Math.cos(Math.PI/180*this.lat);return ne([this.lat-r,this.lng-l],[this.lat+r,this.lng+l])},clone:function(){return new ie(this.lat,this.lng,this.alt)}};function Q(n,r,l){return n instanceof ie?n:_(n)&&typeof n[0]!="object"?n.length===3?new ie(n[0],n[1],n[2]):n.length===2?new ie(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new ie(n.lat,"lng"in n?n.lng:n.lon,n.alt):r===void 0?null:new ie(n,r,l)}var Le={latLngToPoint:function(n,r){var l=this.projection.project(n),c=this.scale(r);return this.transformation._transform(l,c)},pointToLatLng:function(n,r){var l=this.scale(r),c=this.transformation.untransform(n,l);return this.projection.unproject(c)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var r=this.projection.bounds,l=this.scale(n),c=this.transformation.transform(r.min,l),p=this.transformation.transform(r.max,l);return new J(c,p)},infinite:!1,wrapLatLng:function(n){var r=this.wrapLng?v(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?v(n.lat,this.wrapLat,!0):n.lat,c=n.alt;return new ie(l,r,c)},wrapLatLngBounds:function(n){var r=n.getCenter(),l=this.wrapLatLng(r),c=r.lat-l.lat,p=r.lng-l.lng;if(c===0&&p===0)return n;var m=n.getSouthWest(),k=n.getNorthEast(),O=new ie(m.lat-c,m.lng-p),U=new ie(k.lat-c,k.lng-p);return new pe(O,U)}},qe=s({},Le,{wrapLng:[-180,180],R:6371e3,distance:function(n,r){var l=Math.PI/180,c=n.lat*l,p=r.lat*l,m=Math.sin((r.lat-n.lat)*l/2),k=Math.sin((r.lng-n.lng)*l/2),O=m*m+Math.cos(c)*Math.cos(p)*k*k,U=2*Math.atan2(Math.sqrt(O),Math.sqrt(1-O));return this.R*U}}),Fe=6378137,ot={R:Fe,MAX_LATITUDE:85.0511287798,project:function(n){var r=Math.PI/180,l=this.MAX_LATITUDE,c=Math.max(Math.min(l,n.lat),-l),p=Math.sin(c*r);return new z(this.R*n.lng*r,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(n){var r=180/Math.PI;return new ie((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*r,n.x*r/this.R)},bounds:function(){var n=Fe*Math.PI;return new J([-n,-n],[n,n])}()};function ve(n,r,l,c){if(_(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=r,this._c=l,this._d=c}ve.prototype={transform:function(n,r){return this._transform(n.clone(),r)},_transform:function(n,r){return r=r||1,n.x=r*(this._a*n.x+this._b),n.y=r*(this._c*n.y+this._d),n},untransform:function(n,r){return r=r||1,new z((n.x/r-this._b)/this._a,(n.y/r-this._d)/this._c)}};function ce(n,r,l,c){return new ve(n,r,l,c)}var _e=s({},qe,{code:"EPSG:3857",projection:ot,transformation:function(){var n=.5/(Math.PI*ot.R);return ce(n,.5,-n,.5)}()}),Me=s({},_e,{code:"EPSG:900913"});function Tt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Lt(n,r){var l="",c,p,m,k,O,U;for(c=0,m=n.length;c<m;c++){for(O=n[c],p=0,k=O.length;p<k;p++)U=O[p],l+=(p?"L":"M")+U.x+" "+U.y;l+=r?re.svg?"z":"x":""}return l||"M0 0"}var wt=document.documentElement.style,bt="ActiveXObject"in window,kn=bt&&!document.addEventListener,rt="msLaunchUri"in navigator&&!("documentMode"in document),We=Ln("webkit"),Nt=Ln("android"),ze=Ln("android 2")||Ln("android 3"),gn=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Zt=Nt&&Ln("Google")&&gn<537&&!("AudioNode"in window),Vt=!!window.opera,yn=!rt&&Ln("chrome"),Se=Ln("gecko")&&!We&&!Vt&&!bt,ae=!yn&&Ln("safari"),oe=Ln("phantom"),ke="OTransition"in wt,Ye=navigator.platform.indexOf("Win")===0,Tn=bt&&"transition"in wt,oo="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ze,Qf="MozPerspective"in wt,Cy=!window.L_DISABLE_3D&&(Tn||oo||Qf)&&!ke&&!oe,ar=typeof orientation<"u"||Ln("mobile"),Py=ar&&We,ky=ar&&oo,Xf=!window.PointerEvent&&window.MSPointerEvent,Jf=!!(window.PointerEvent||Xf),ep="ontouchstart"in window||!!window.TouchEvent,Ty=!window.L_NO_TOUCH&&(ep||Jf),Ly=ar&&Vt,My=ar&&Se,Ry=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Iy=function(){var n=!1;try{var r=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",g,r),window.removeEventListener("testPassiveEventSupport",g,r)}catch{}return n}(),Oy=function(){return!!document.createElement("canvas").getContext}(),pu=!!(document.createElementNS&&Tt("svg").createSVGRect),zy=!!pu&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ay=!pu&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var r=n.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}}(),Uy=navigator.platform.indexOf("Mac")===0,Ny=navigator.platform.indexOf("Linux")===0;function Ln(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var re={ie:bt,ielt9:kn,edge:rt,webkit:We,android:Nt,android23:ze,androidStock:Zt,opera:Vt,chrome:yn,gecko:Se,safari:ae,phantom:oe,opera12:ke,win:Ye,ie3d:Tn,webkit3d:oo,gecko3d:Qf,any3d:Cy,mobile:ar,mobileWebkit:Py,mobileWebkit3d:ky,msPointer:Xf,pointer:Jf,touch:Ty,touchNative:ep,mobileOpera:Ly,mobileGecko:My,retina:Ry,passiveEvents:Iy,canvas:Oy,svg:pu,vml:Ay,inlineSvg:zy,mac:Uy,linux:Ny},tp=re.msPointer?"MSPointerDown":"pointerdown",np=re.msPointer?"MSPointerMove":"pointermove",ip=re.msPointer?"MSPointerUp":"pointerup",op=re.msPointer?"MSPointerCancel":"pointercancel",hu={touchstart:tp,touchmove:np,touchend:ip,touchcancel:op},rp={touchstart:Wy,touchmove:Ms,touchend:Ms,touchcancel:Ms},ro={},sp=!1;function Fy(n,r,l){return r==="touchstart"&&jy(),rp[r]?(l=rp[r].bind(this,l),n.addEventListener(hu[r],l,!1),l):(console.warn("wrong event specified:",r),g)}function By(n,r,l){if(!hu[r]){console.warn("wrong event specified:",r);return}n.removeEventListener(hu[r],l,!1)}function $y(n){ro[n.pointerId]=n}function Dy(n){ro[n.pointerId]&&(ro[n.pointerId]=n)}function ap(n){delete ro[n.pointerId]}function jy(){sp||(document.addEventListener(tp,$y,!0),document.addEventListener(np,Dy,!0),document.addEventListener(ip,ap,!0),document.addEventListener(op,ap,!0),sp=!0)}function Ms(n,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var l in ro)r.touches.push(ro[l]);r.changedTouches=[r],n(r)}}function Wy(n,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&gt(r),Ms(n,r)}function Hy(n){var r={},l,c;for(c in n)l=n[c],r[c]=l&&l.bind?l.bind(n):l;return n=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}var Zy=200;function Vy(n,r){n.addEventListener("dblclick",r);var l=0,c;function p(m){if(m.detail!==1){c=m.detail;return}if(!(m.pointerType==="mouse"||m.sourceCapabilities&&!m.sourceCapabilities.firesTouchEvents)){var k=fp(m);if(!(k.some(function(U){return U instanceof HTMLLabelElement&&U.attributes.for})&&!k.some(function(U){return U instanceof HTMLInputElement||U instanceof HTMLSelectElement}))){var O=Date.now();O-l<=Zy?(c++,c===2&&r(Hy(m))):c=1,l=O}}}return n.addEventListener("click",p),{dblclick:r,simDblclick:p}}function Ky(n,r){n.removeEventListener("dblclick",r.dblclick),n.removeEventListener("click",r.simDblclick)}var mu=Os(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),lr=Os(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),lp=lr==="webkitTransition"||lr==="OTransition"?lr+"End":"transitionend";function up(n){return typeof n=="string"?document.getElementById(n):n}function ur(n,r){var l=n.style[r]||n.currentStyle&&n.currentStyle[r];if((!l||l==="auto")&&document.defaultView){var c=document.defaultView.getComputedStyle(n,null);l=c?c[r]:null}return l==="auto"?null:l}function be(n,r,l){var c=document.createElement(n);return c.className=r||"",l&&l.appendChild(c),c}function He(n){var r=n.parentNode;r&&r.removeChild(n)}function Rs(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function so(n){var r=n.parentNode;r&&r.lastChild!==n&&r.appendChild(n)}function ao(n){var r=n.parentNode;r&&r.firstChild!==n&&r.insertBefore(n,r.firstChild)}function gu(n,r){if(n.classList!==void 0)return n.classList.contains(r);var l=Is(n);return l.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(l)}function he(n,r){if(n.classList!==void 0)for(var l=S(r),c=0,p=l.length;c<p;c++)n.classList.add(l[c]);else if(!gu(n,r)){var m=Is(n);yu(n,(m?m+" ":"")+r)}}function nt(n,r){n.classList!==void 0?n.classList.remove(r):yu(n,P((" "+Is(n)+" ").replace(" "+r+" "," ")))}function yu(n,r){n.className.baseVal===void 0?n.className=r:n.className.baseVal=r}function Is(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function on(n,r){"opacity"in n.style?n.style.opacity=r:"filter"in n.style&&Gy(n,r)}function Gy(n,r){var l=!1,c="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(c)}catch{if(r===1)return}r=Math.round(r*100),l?(l.Enabled=r!==100,l.Opacity=r):n.style.filter+=" progid:"+c+"(opacity="+r+")"}function Os(n){for(var r=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in r)return n[l];return!1}function Mi(n,r,l){var c=r||new z(0,0);n.style[mu]=(re.ie3d?"translate("+c.x+"px,"+c.y+"px)":"translate3d("+c.x+"px,"+c.y+"px,0)")+(l?" scale("+l+")":"")}function st(n,r){n._leaflet_pos=r,re.any3d?Mi(n,r):(n.style.left=r.x+"px",n.style.top=r.y+"px")}function Ri(n){return n._leaflet_pos||new z(0,0)}var cr,dr,vu;if("onselectstart"in document)cr=function(){fe(window,"selectstart",gt)},dr=function(){Ae(window,"selectstart",gt)};else{var fr=Os(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);cr=function(){if(fr){var n=document.documentElement.style;vu=n[fr],n[fr]="none"}},dr=function(){fr&&(document.documentElement.style[fr]=vu,vu=void 0)}}function _u(){fe(window,"dragstart",gt)}function xu(){Ae(window,"dragstart",gt)}var zs,wu;function bu(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(As(),zs=n,wu=n.style.outlineStyle,n.style.outlineStyle="none",fe(window,"keydown",As))}function As(){zs&&(zs.style.outlineStyle=wu,zs=void 0,wu=void 0,Ae(window,"keydown",As))}function cp(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Eu(n){var r=n.getBoundingClientRect();return{x:r.width/n.offsetWidth||1,y:r.height/n.offsetHeight||1,boundingClientRect:r}}var qy={__proto__:null,TRANSFORM:mu,TRANSITION:lr,TRANSITION_END:lp,get:up,getStyle:ur,create:be,remove:He,empty:Rs,toFront:so,toBack:ao,hasClass:gu,addClass:he,removeClass:nt,setClass:yu,getClass:Is,setOpacity:on,testProp:Os,setTransform:Mi,setPosition:st,getPosition:Ri,get disableTextSelection(){return cr},get enableTextSelection(){return dr},disableImageDrag:_u,enableImageDrag:xu,preventOutline:bu,restoreOutline:As,getSizedParentNode:cp,getScale:Eu};function fe(n,r,l,c){if(r&&typeof r=="object")for(var p in r)Cu(n,p,r[p],l);else{r=S(r);for(var m=0,k=r.length;m<k;m++)Cu(n,r[m],l,c)}return this}var Mn="_leaflet_events";function Ae(n,r,l,c){if(arguments.length===1)dp(n),delete n[Mn];else if(r&&typeof r=="object")for(var p in r)Pu(n,p,r[p],l);else if(r=S(r),arguments.length===2)dp(n,function(O){return C(r,O)!==-1});else for(var m=0,k=r.length;m<k;m++)Pu(n,r[m],l,c);return this}function dp(n,r){for(var l in n[Mn]){var c=l.split(/\d/)[0];(!r||r(c))&&Pu(n,c,null,null,l)}}var Su={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Cu(n,r,l,c){var p=r+f(l)+(c?"_"+f(c):"");if(n[Mn]&&n[Mn][p])return this;var m=function(O){return l.call(c||n,O||window.event)},k=m;!re.touchNative&&re.pointer&&r.indexOf("touch")===0?m=Fy(n,r,m):re.touch&&r==="dblclick"?m=Vy(n,m):"addEventListener"in n?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?n.addEventListener(Su[r]||r,m,re.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(m=function(O){O=O||window.event,Tu(n,O)&&k(O)},n.addEventListener(Su[r],m,!1)):n.addEventListener(r,k,!1):n.attachEvent("on"+r,m),n[Mn]=n[Mn]||{},n[Mn][p]=m}function Pu(n,r,l,c,p){p=p||r+f(l)+(c?"_"+f(c):"");var m=n[Mn]&&n[Mn][p];if(!m)return this;!re.touchNative&&re.pointer&&r.indexOf("touch")===0?By(n,r,m):re.touch&&r==="dblclick"?Ky(n,m):"removeEventListener"in n?n.removeEventListener(Su[r]||r,m,!1):n.detachEvent("on"+r,m),n[Mn][p]=null}function Ii(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ku(n){return Cu(n,"wheel",Ii),this}function pr(n){return fe(n,"mousedown touchstart dblclick contextmenu",Ii),n._leaflet_disable_click=!0,this}function gt(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Oi(n){return gt(n),Ii(n),this}function fp(n){if(n.composedPath)return n.composedPath();for(var r=[],l=n.target;l;)r.push(l),l=l.parentNode;return r}function pp(n,r){if(!r)return new z(n.clientX,n.clientY);var l=Eu(r),c=l.boundingClientRect;return new z((n.clientX-c.left)/l.x-r.clientLeft,(n.clientY-c.top)/l.y-r.clientTop)}var Yy=re.linux&&re.chrome?window.devicePixelRatio:re.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function hp(n){return re.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Yy:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Tu(n,r){var l=r.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var Qy={__proto__:null,on:fe,off:Ae,stopPropagation:Ii,disableScrollPropagation:ku,disableClickPropagation:pr,preventDefault:gt,stop:Oi,getPropagationPath:fp,getMousePosition:pp,getWheelDelta:hp,isExternalTarget:Tu,addListener:fe,removeListener:Ae},mp=G.extend({run:function(n,r,l,c){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(c||.5,.2),this._startPos=Ri(n),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=H(this._animate,this),this._step()},_step:function(n){var r=+new Date-this._startTime,l=this._duration*1e3;r<l?this._runFrame(this._easeOut(r/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,r){var l=this._startPos.add(this._offset.multiplyBy(n));r&&l._round(),st(this._el,l),this.fire("step")},_complete:function(){ee(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),xe=G.extend({options:{crs:_e,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,r){r=b(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(Q(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=lr&&re.any3d&&!re.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),fe(this._proxy,lp,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,r,l){if(r=r===void 0?this._zoom:this._limitZoom(r),n=this._limitCenter(Q(n),r,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var c=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,r,l.zoom):this._tryAnimatedPan(n,l.pan);if(c)return clearTimeout(this._sizeTimer),this}return this._resetView(n,r,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,r){return this._loaded?this.setView(this.getCenter(),n,{zoom:r}):(this._zoom=n,this)},zoomIn:function(n,r){return n=n||(re.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,r)},zoomOut:function(n,r){return n=n||(re.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,r)},setZoomAround:function(n,r,l){var c=this.getZoomScale(r),p=this.getSize().divideBy(2),m=n instanceof z?n:this.latLngToContainerPoint(n),k=m.subtract(p).multiplyBy(1-1/c),O=this.containerPointToLatLng(p.add(k));return this.setView(O,r,{zoom:l})},_getBoundsCenterZoom:function(n,r){r=r||{},n=n.getBounds?n.getBounds():ne(n);var l=B(r.paddingTopLeft||r.padding||[0,0]),c=B(r.paddingBottomRight||r.padding||[0,0]),p=this.getBoundsZoom(n,!1,l.add(c));if(p=typeof r.maxZoom=="number"?Math.min(r.maxZoom,p):p,p===1/0)return{center:n.getCenter(),zoom:p};var m=c.subtract(l).divideBy(2),k=this.project(n.getSouthWest(),p),O=this.project(n.getNorthEast(),p),U=this.unproject(k.add(O).divideBy(2).add(m),p);return{center:U,zoom:p}},fitBounds:function(n,r){if(n=ne(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,r);return this.setView(l.center,l.zoom,r)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,r){return this.setView(n,this._zoom,{pan:r})},panBy:function(n,r){if(n=B(n).round(),r=r||{},!n.x&&!n.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new mp,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){he(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,r.duration||.25,r.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,r,l){if(l=l||{},l.animate===!1||!re.any3d)return this.setView(n,r,l);this._stop();var c=this.project(this.getCenter()),p=this.project(n),m=this.getSize(),k=this._zoom;n=Q(n),r=r===void 0?k:r;var O=Math.max(m.x,m.y),U=O*this.getZoomScale(k,r),D=p.distanceTo(c)||1,Y=1.42,le=Y*Y;function me(at){var Ks=at?-1:1,Bv=at?U:O,$v=U*U-O*O+Ks*le*le*D*D,Dv=2*Bv*le*D,Bu=$v/Dv,qp=Math.sqrt(Bu*Bu+1)-Bu,jv=qp<1e-9?-18:Math.log(qp);return jv}function Mt(at){return(Math.exp(at)-Math.exp(-at))/2}function ft(at){return(Math.exp(at)+Math.exp(-at))/2}function sn(at){return Mt(at)/ft(at)}var Ft=me(0);function ho(at){return O*(ft(Ft)/ft(Ft+Y*at))}function Av(at){return O*(ft(Ft)*sn(Ft+Y*at)-Mt(Ft))/le}function Uv(at){return 1-Math.pow(1-at,1.5)}var Nv=Date.now(),Kp=(me(1)-Ft)/Y,Fv=l.duration?1e3*l.duration:1e3*Kp*.8;function Gp(){var at=(Date.now()-Nv)/Fv,Ks=Uv(at)*Kp;at<=1?(this._flyToFrame=H(Gp,this),this._move(this.unproject(c.add(p.subtract(c).multiplyBy(Av(Ks)/D)),k),this.getScaleZoom(O/ho(Ks),k),{flyTo:!0})):this._move(n,r)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Gp.call(this),this},flyToBounds:function(n,r){var l=this._getBoundsCenterZoom(n,r);return this.flyTo(l.center,l.zoom,r)},setMaxBounds:function(n){return n=ne(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var r=this.options.minZoom;return this.options.minZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var r=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&r!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,r){this._enforcingBounds=!0;var l=this.getCenter(),c=this._limitCenter(l,this._zoom,ne(n));return l.equals(c)||this.panTo(c,r),this._enforcingBounds=!1,this},panInside:function(n,r){r=r||{};var l=B(r.paddingTopLeft||r.padding||[0,0]),c=B(r.paddingBottomRight||r.padding||[0,0]),p=this.project(this.getCenter()),m=this.project(n),k=this.getPixelBounds(),O=se([k.min.add(l),k.max.subtract(c)]),U=O.getSize();if(!O.contains(m)){this._enforcingBounds=!0;var D=m.subtract(O.getCenter()),Y=O.extend(m).getSize().subtract(U);p.x+=D.x<0?-Y.x:Y.x,p.y+=D.y<0?-Y.y:Y.y,this.panTo(this.unproject(p),r),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=s({animate:!1,pan:!0},n===!0?{animate:!0}:n);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),c=r.divideBy(2).round(),p=l.divideBy(2).round(),m=c.subtract(p);return!m.x&&!m.y?this:(n.animate&&n.pan?this.panBy(m):(n.pan&&this._rawPanBy(m),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=s({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,l,n):navigator.geolocation.getCurrentPosition(r,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var r=n.code,l=n.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var r=n.coords.latitude,l=n.coords.longitude,c=new ie(r,l),p=c.toBounds(n.coords.accuracy*2),m=this._locateOptions;if(m.setView){var k=this.getBoundsZoom(p);this.setView(c,m.maxZoom?Math.min(k,m.maxZoom):k)}var O={latlng:c,bounds:p,timestamp:n.timestamp};for(var U in n.coords)typeof n.coords[U]=="number"&&(O[U]=n.coords[U]);this.fire("locationfound",O)}},addHandler:function(n,r){if(!r)return this;var l=this[n]=new r(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),He(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ee(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)He(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,r){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),c=be("div",l,r||this._mapPane);return n&&(this._panes[n]=c),c},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),r=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new pe(r,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,r,l){n=ne(n),l=B(l||[0,0]);var c=this.getZoom()||0,p=this.getMinZoom(),m=this.getMaxZoom(),k=n.getNorthWest(),O=n.getSouthEast(),U=this.getSize().subtract(l),D=se(this.project(O,c),this.project(k,c)).getSize(),Y=re.any3d?this.options.zoomSnap:1,le=U.x/D.x,me=U.y/D.y,Mt=r?Math.max(le,me):Math.min(le,me);return c=this.getScaleZoom(Mt,c),Y&&(c=Math.round(c/(Y/100))*(Y/100),c=r?Math.ceil(c/Y)*Y:Math.floor(c/Y)*Y),Math.max(p,Math.min(m,c))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new z(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,r){var l=this._getTopLeftPoint(n,r);return new J(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,r){var l=this.options.crs;return r=r===void 0?this._zoom:r,l.scale(n)/l.scale(r)},getScaleZoom:function(n,r){var l=this.options.crs;r=r===void 0?this._zoom:r;var c=l.zoom(n*l.scale(r));return isNaN(c)?1/0:c},project:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(Q(n),r)},unproject:function(n,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(B(n),r)},layerPointToLatLng:function(n){var r=B(n).add(this.getPixelOrigin());return this.unproject(r)},latLngToLayerPoint:function(n){var r=this.project(Q(n))._round();return r._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(Q(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(ne(n))},distance:function(n,r){return this.options.crs.distance(Q(n),Q(r))},containerPointToLayerPoint:function(n){return B(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return B(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var r=this.containerPointToLayerPoint(B(n));return this.layerPointToLatLng(r)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(Q(n)))},mouseEventToContainerPoint:function(n){return pp(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var r=this._container=up(n);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");fe(r,"scroll",this._onScroll,this),this._containerId=f(r)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&re.any3d,he(n,"leaflet-container"+(re.touch?" leaflet-touch":"")+(re.retina?" leaflet-retina":"")+(re.ielt9?" leaflet-oldie":"")+(re.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=ur(n,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),st(this._mapPane,new z(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(he(n.markerPane,"leaflet-zoom-hide"),he(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,r,l){st(this._mapPane,new z(0,0));var c=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var p=this._zoom!==r;this._moveStart(p,l)._move(n,r)._moveEnd(p),this.fire("viewreset"),c&&this.fire("load")},_moveStart:function(n,r){return n&&this.fire("zoomstart"),r||this.fire("movestart"),this},_move:function(n,r,l,c){r===void 0&&(r=this._zoom);var p=this._zoom!==r;return this._zoom=r,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),c?l&&l.pinch&&this.fire("zoom",l):((p||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ee(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){st(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[f(this._container)]=this;var r=n?Ae:fe;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),re.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ee(this._resizeRequest),this._resizeRequest=H(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,r){for(var l=[],c,p=r==="mouseout"||r==="mouseover",m=n.target||n.srcElement,k=!1;m;){if(c=this._targets[f(m)],c&&(r==="click"||r==="preclick")&&this._draggableMoved(c)){k=!0;break}if(c&&c.listens(r,!0)&&(p&&!Tu(m,n)||(l.push(c),p))||m===this._container)break;m=m.parentNode}return!l.length&&!k&&!p&&this.listens(r,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var r=n.target||n.srcElement;if(!(!this._loaded||r._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(r))){var l=n.type;l==="mousedown"&&bu(r),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,r,l){if(n.type==="click"){var c=s({},n);c.type="preclick",this._fireDOMEvent(c,c.type,l)}var p=this._findEventTargets(n,r);if(l){for(var m=[],k=0;k<l.length;k++)l[k].listens(r,!0)&&m.push(l[k]);p=m.concat(p)}if(p.length){r==="contextmenu"&&gt(n);var O=p[0],U={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var D=O.getLatLng&&(!O._radius||O._radius<=10);U.containerPoint=D?this.latLngToContainerPoint(O.getLatLng()):this.mouseEventToContainerPoint(n),U.layerPoint=this.containerPointToLayerPoint(U.containerPoint),U.latlng=D?O.getLatLng():this.layerPointToLatLng(U.layerPoint)}for(k=0;k<p.length;k++)if(p[k].fire(r,U,!0),U.originalEvent._stopped||p[k].options.bubblingMouseEvents===!1&&C(this._mouseEvents,r)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,r=this._handlers.length;n<r;n++)this._handlers[n].disable()},whenReady:function(n,r){return this._loaded?n.call(r||this,{target:this}):this.on("load",n,r),this},_getMapPanePos:function(){return Ri(this._mapPane)||new z(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,r){var l=n&&r!==void 0?this._getNewPixelOrigin(n,r):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,r){var l=this.getSize()._divideBy(2);return this.project(n,r)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,r,l){var c=this._getNewPixelOrigin(l,r);return this.project(n,r)._subtract(c)},_latLngBoundsToNewLayerBounds:function(n,r,l){var c=this._getNewPixelOrigin(l,r);return se([this.project(n.getSouthWest(),r)._subtract(c),this.project(n.getNorthWest(),r)._subtract(c),this.project(n.getSouthEast(),r)._subtract(c),this.project(n.getNorthEast(),r)._subtract(c)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,r,l){if(!l)return n;var c=this.project(n,r),p=this.getSize().divideBy(2),m=new J(c.subtract(p),c.add(p)),k=this._getBoundsOffset(m,l,r);return Math.abs(k.x)<=1&&Math.abs(k.y)<=1?n:this.unproject(c.add(k),r)},_limitOffset:function(n,r){if(!r)return n;var l=this.getPixelBounds(),c=new J(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(c,r))},_getBoundsOffset:function(n,r,l){var c=se(this.project(r.getNorthEast(),l),this.project(r.getSouthWest(),l)),p=c.min.subtract(n.min),m=c.max.subtract(n.max),k=this._rebound(p.x,-m.x),O=this._rebound(p.y,-m.y);return new z(k,O)},_rebound:function(n,r){return n+r>0?Math.round(n-r)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(r))},_limitZoom:function(n){var r=this.getMinZoom(),l=this.getMaxZoom(),c=re.any3d?this.options.zoomSnap:1;return c&&(n=Math.round(n/c)*c),Math.max(r,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){nt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,r){var l=this._getCenterOffset(n)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,r),!0)},_createAnimProxy:function(){var n=this._proxy=be("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(r){var l=mu,c=this._proxy.style[l];Mi(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),c===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){He(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),r=this.getZoom();Mi(this._proxy,this.project(n,r),this.getZoomScale(r,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,r,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var c=this.getZoomScale(r),p=this._getCenterOffset(n)._divideBy(1-1/c);return l.animate!==!0&&!this.getSize().contains(p)?!1:(H(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,r,!0)},this),!0)},_animateZoom:function(n,r,l,c){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=r,he(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:r,noUpdate:c}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&nt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Xy(n,r){return new xe(n,r)}var vn=W.extend({options:{position:"topright"},initialize:function(n){b(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var r=this._map;return r&&r.removeControl(this),this.options.position=n,r&&r.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var r=this._container=this.onAdd(n),l=this.getPosition(),c=n._controlCorners[l];return he(r,"leaflet-control"),l.indexOf("bottom")!==-1?c.insertBefore(r,c.firstChild):c.appendChild(r),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(He(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),hr=function(n){return new vn(n)};xe.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},r="leaflet-",l=this._controlContainer=be("div",r+"control-container",this._container);function c(p,m){var k=r+p+" "+r+m;n[p+m]=be("div",k,l)}c("top","left"),c("top","right"),c("bottom","left"),c("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)He(this._controlCorners[n]);He(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var gp=vn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,r,l,c){return l<c?-1:c<l?1:0}},initialize:function(n,r,l){b(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var c in n)this._addLayer(n[c],c);for(c in r)this._addLayer(r[c],c,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return vn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,r){return this._addLayer(n,r),this._map?this._update():this},addOverlay:function(n,r){return this._addLayer(n,r,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var r=this._getLayer(f(n));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},expand:function(){he(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(he(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):nt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return nt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",r=this._container=be("div",n),l=this.options.collapsed;r.setAttribute("aria-haspopup",!0),pr(r),ku(r);var c=this._section=be("section",n+"-list");l&&(this._map.on("click",this.collapse,this),fe(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=be("a",n+"-toggle",r);p.href="#",p.title="Layers",p.setAttribute("role","button"),fe(p,{keydown:function(m){m.keyCode===13&&this._expandSafely()},click:function(m){gt(m),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=be("div",n+"-base",c),this._separator=be("div",n+"-separator",c),this._overlaysList=be("div",n+"-overlays",c),r.appendChild(c)},_getLayer:function(n){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&f(this._layers[r].layer)===n)return this._layers[r]},_addLayer:function(n,r,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:r,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(c,p){return this.options.sortFunction(c.layer,p.layer,c.name,p.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Rs(this._baseLayersList),Rs(this._overlaysList),this._layerControlInputs=[];var n,r,l,c,p=0;for(l=0;l<this._layers.length;l++)c=this._layers[l],this._addItem(c),r=r||c.overlay,n=n||!c.overlay,p+=c.overlay?0:1;return this.options.hideSingleBase&&(n=n&&p>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=r&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var r=this._getLayer(f(n.target)),l=r.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,r)},_createRadioElement:function(n,r){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(r?' checked="checked"':"")+"/>",c=document.createElement("div");return c.innerHTML=l,c.firstChild},_addItem:function(n){var r=document.createElement("label"),l=this._map.hasLayer(n.layer),c;n.overlay?(c=document.createElement("input"),c.type="checkbox",c.className="leaflet-control-layers-selector",c.defaultChecked=l):c=this._createRadioElement("leaflet-base-layers_"+f(this),l),this._layerControlInputs.push(c),c.layerId=f(n.layer),fe(c,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+n.name;var m=document.createElement("span");r.appendChild(m),m.appendChild(c),m.appendChild(p);var k=n.overlay?this._overlaysList:this._baseLayersList;return k.appendChild(r),this._checkDisabledLayers(),r},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,r,l,c=[],p=[];this._handlingClick=!0;for(var m=n.length-1;m>=0;m--)r=n[m],l=this._getLayer(r.layerId).layer,r.checked?c.push(l):r.checked||p.push(l);for(m=0;m<p.length;m++)this._map.hasLayer(p[m])&&this._map.removeLayer(p[m]);for(m=0;m<c.length;m++)this._map.hasLayer(c[m])||this._map.addLayer(c[m]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,r,l,c=this._map.getZoom(),p=n.length-1;p>=0;p--)r=n[p],l=this._getLayer(r.layerId).layer,r.disabled=l.options.minZoom!==void 0&&c<l.options.minZoom||l.options.maxZoom!==void 0&&c>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,fe(n,"click",gt),this.expand();var r=this;setTimeout(function(){Ae(n,"click",gt),r._preventClick=!1})}}),Jy=function(n,r,l){return new gp(n,r,l)},Lu=vn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var r="leaflet-control-zoom",l=be("div",r+" leaflet-bar"),c=this.options;return this._zoomInButton=this._createButton(c.zoomInText,c.zoomInTitle,r+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(c.zoomOutText,c.zoomOutTitle,r+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,r,l,c,p){var m=be("a",l,c);return m.innerHTML=n,m.href="#",m.title=r,m.setAttribute("role","button"),m.setAttribute("aria-label",r),pr(m),fe(m,"click",Oi),fe(m,"click",p,this),fe(m,"click",this._refocusOnMap,this),m},_updateDisabled:function(){var n=this._map,r="leaflet-disabled";nt(this._zoomInButton,r),nt(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(he(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(he(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))}});xe.mergeOptions({zoomControl:!0}),xe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Lu,this.addControl(this.zoomControl))});var ev=function(n){return new Lu(n)},yp=vn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var r="leaflet-control-scale",l=be("div",r),c=this.options;return this._addScales(c,r+"-line",l),n.on(c.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,r,l){n.metric&&(this._mScale=be("div",r,l)),n.imperial&&(this._iScale=be("div",r,l))},_update:function(){var n=this._map,r=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,r]),n.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var r=this._getRoundNum(n),l=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,l,r/n)},_updateImperial:function(n){var r=n*3.2808399,l,c,p;r>5280?(l=r/5280,c=this._getRoundNum(l),this._updateScale(this._iScale,c+" mi",c/l)):(p=this._getRoundNum(r),this._updateScale(this._iScale,p+" ft",p/r))},_updateScale:function(n,r,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=r},_getRoundNum:function(n){var r=Math.pow(10,(Math.floor(n)+"").length-1),l=n/r;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,r*l}}),tv=function(n){return new yp(n)},nv='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Mu=vn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(re.inlineSvg?nv+" ":"")+"Leaflet</a>"},initialize:function(n){b(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=be("div","leaflet-control-attribution"),pr(this._container);for(var r in n._layers)n._layers[r].getAttribution&&this.addAttribution(n._layers[r].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var r in this._attributions)this._attributions[r]&&n.push(r);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});xe.mergeOptions({attributionControl:!0}),xe.addInitHook(function(){this.options.attributionControl&&new Mu().addTo(this)});var iv=function(n){return new Mu(n)};vn.Layers=gp,vn.Zoom=Lu,vn.Scale=yp,vn.Attribution=Mu,hr.layers=Jy,hr.zoom=ev,hr.scale=tv,hr.attribution=iv;var Rn=W.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Rn.addTo=function(n,r){return n.addHandler(r,this),this};var ov={Events:Z},vp=re.touch?"touchstart mousedown":"mousedown",si=G.extend({options:{clickTolerance:3},initialize:function(n,r,l,c){b(this,c),this._element=n,this._dragStartTarget=r||n,this._preventOutline=l},enable:function(){this._enabled||(fe(this._dragStartTarget,vp,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(si._dragging===this&&this.finishDrag(!0),Ae(this._dragStartTarget,vp,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!gu(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){si._dragging===this&&this.finishDrag();return}if(!(si._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(si._dragging=this,this._preventOutline&&bu(this._element),_u(),cr(),!this._moving)){this.fire("down");var r=n.touches?n.touches[0]:n,l=cp(this._element);this._startPoint=new z(r.clientX,r.clientY),this._startPos=Ri(this._element),this._parentScale=Eu(l);var c=n.type==="mousedown";fe(document,c?"mousemove":"touchmove",this._onMove,this),fe(document,c?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var r=n.touches&&n.touches.length===1?n.touches[0]:n,l=new z(r.clientX,r.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,gt(n),this._moved||(this.fire("dragstart"),this._moved=!0,he(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),he(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),st(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){nt(document.body,"leaflet-dragging"),this._lastTarget&&(nt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ae(document,"mousemove touchmove",this._onMove,this),Ae(document,"mouseup touchend touchcancel",this._onUp,this),xu(),dr();var r=this._moved&&this._moving;this._moving=!1,si._dragging=!1,r&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function _p(n,r,l){var c,p=[1,4,2,8],m,k,O,U,D,Y,le,me;for(m=0,Y=n.length;m<Y;m++)n[m]._code=zi(n[m],r);for(O=0;O<4;O++){for(le=p[O],c=[],m=0,Y=n.length,k=Y-1;m<Y;k=m++)U=n[m],D=n[k],U._code&le?D._code&le||(me=Us(D,U,le,r,l),me._code=zi(me,r),c.push(me)):(D._code&le&&(me=Us(D,U,le,r,l),me._code=zi(me,r),c.push(me)),c.push(U));n=c}return n}function xp(n,r){var l,c,p,m,k,O,U,D,Y;if(!n||n.length===0)throw new Error("latlngs not passed");rn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var le=Q([0,0]),me=ne(n),Mt=me.getNorthWest().distanceTo(me.getSouthWest())*me.getNorthEast().distanceTo(me.getNorthWest());Mt<1700&&(le=Ru(n));var ft=n.length,sn=[];for(l=0;l<ft;l++){var Ft=Q(n[l]);sn.push(r.project(Q([Ft.lat-le.lat,Ft.lng-le.lng])))}for(O=U=D=0,l=0,c=ft-1;l<ft;c=l++)p=sn[l],m=sn[c],k=p.y*m.x-m.y*p.x,U+=(p.x+m.x)*k,D+=(p.y+m.y)*k,O+=k*3;O===0?Y=sn[0]:Y=[U/O,D/O];var ho=r.unproject(B(Y));return Q([ho.lat+le.lat,ho.lng+le.lng])}function Ru(n){for(var r=0,l=0,c=0,p=0;p<n.length;p++){var m=Q(n[p]);r+=m.lat,l+=m.lng,c++}return Q([r/c,l/c])}var rv={__proto__:null,clipPolygon:_p,polygonCenter:xp,centroid:Ru};function wp(n,r){if(!r||!n.length)return n.slice();var l=r*r;return n=lv(n,l),n=av(n,l),n}function bp(n,r,l){return Math.sqrt(mr(n,r,l,!0))}function sv(n,r,l){return mr(n,r,l)}function av(n,r){var l=n.length,c=typeof Uint8Array!=void 0+""?Uint8Array:Array,p=new c(l);p[0]=p[l-1]=1,Iu(n,p,r,0,l-1);var m,k=[];for(m=0;m<l;m++)p[m]&&k.push(n[m]);return k}function Iu(n,r,l,c,p){var m=0,k,O,U;for(O=c+1;O<=p-1;O++)U=mr(n[O],n[c],n[p],!0),U>m&&(k=O,m=U);m>l&&(r[k]=1,Iu(n,r,l,c,k),Iu(n,r,l,k,p))}function lv(n,r){for(var l=[n[0]],c=1,p=0,m=n.length;c<m;c++)uv(n[c],n[p])>r&&(l.push(n[c]),p=c);return p<m-1&&l.push(n[m-1]),l}var Ep;function Sp(n,r,l,c,p){var m=c?Ep:zi(n,l),k=zi(r,l),O,U,D;for(Ep=k;;){if(!(m|k))return[n,r];if(m&k)return!1;O=m||k,U=Us(n,r,O,l,p),D=zi(U,l),O===m?(n=U,m=D):(r=U,k=D)}}function Us(n,r,l,c,p){var m=r.x-n.x,k=r.y-n.y,O=c.min,U=c.max,D,Y;return l&8?(D=n.x+m*(U.y-n.y)/k,Y=U.y):l&4?(D=n.x+m*(O.y-n.y)/k,Y=O.y):l&2?(D=U.x,Y=n.y+k*(U.x-n.x)/m):l&1&&(D=O.x,Y=n.y+k*(O.x-n.x)/m),new z(D,Y,p)}function zi(n,r){var l=0;return n.x<r.min.x?l|=1:n.x>r.max.x&&(l|=2),n.y<r.min.y?l|=4:n.y>r.max.y&&(l|=8),l}function uv(n,r){var l=r.x-n.x,c=r.y-n.y;return l*l+c*c}function mr(n,r,l,c){var p=r.x,m=r.y,k=l.x-p,O=l.y-m,U=k*k+O*O,D;return U>0&&(D=((n.x-p)*k+(n.y-m)*O)/U,D>1?(p=l.x,m=l.y):D>0&&(p+=k*D,m+=O*D)),k=n.x-p,O=n.y-m,c?k*k+O*O:new z(p,m)}function rn(n){return!_(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Cp(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),rn(n)}function Pp(n,r){var l,c,p,m,k,O,U,D;if(!n||n.length===0)throw new Error("latlngs not passed");rn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Y=Q([0,0]),le=ne(n),me=le.getNorthWest().distanceTo(le.getSouthWest())*le.getNorthEast().distanceTo(le.getNorthWest());me<1700&&(Y=Ru(n));var Mt=n.length,ft=[];for(l=0;l<Mt;l++){var sn=Q(n[l]);ft.push(r.project(Q([sn.lat-Y.lat,sn.lng-Y.lng])))}for(l=0,c=0;l<Mt-1;l++)c+=ft[l].distanceTo(ft[l+1])/2;if(c===0)D=ft[0];else for(l=0,m=0;l<Mt-1;l++)if(k=ft[l],O=ft[l+1],p=k.distanceTo(O),m+=p,m>c){U=(m-c)/p,D=[O.x-U*(O.x-k.x),O.y-U*(O.y-k.y)];break}var Ft=r.unproject(B(D));return Q([Ft.lat+Y.lat,Ft.lng+Y.lng])}var cv={__proto__:null,simplify:wp,pointToSegmentDistance:bp,closestPointOnSegment:sv,clipSegment:Sp,_getEdgeIntersection:Us,_getBitCode:zi,_sqClosestPointOnSegment:mr,isFlat:rn,_flat:Cp,polylineCenter:Pp},Ou={project:function(n){return new z(n.lng,n.lat)},unproject:function(n){return new ie(n.y,n.x)},bounds:new J([-180,-90],[180,90])},zu={R:6378137,R_MINOR:6356752314245179e-9,bounds:new J([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var r=Math.PI/180,l=this.R,c=n.lat*r,p=this.R_MINOR/l,m=Math.sqrt(1-p*p),k=m*Math.sin(c),O=Math.tan(Math.PI/4-c/2)/Math.pow((1-k)/(1+k),m/2);return c=-l*Math.log(Math.max(O,1e-10)),new z(n.lng*r*l,c)},unproject:function(n){for(var r=180/Math.PI,l=this.R,c=this.R_MINOR/l,p=Math.sqrt(1-c*c),m=Math.exp(-n.y/l),k=Math.PI/2-2*Math.atan(m),O=0,U=.1,D;O<15&&Math.abs(U)>1e-7;O++)D=p*Math.sin(k),D=Math.pow((1-D)/(1+D),p/2),U=Math.PI/2-2*Math.atan(m*D)-k,k+=U;return new ie(k*r,n.x*r/l)}},dv={__proto__:null,LonLat:Ou,Mercator:zu,SphericalMercator:ot},fv=s({},qe,{code:"EPSG:3395",projection:zu,transformation:function(){var n=.5/(Math.PI*zu.R);return ce(n,.5,-n,.5)}()}),kp=s({},qe,{code:"EPSG:4326",projection:Ou,transformation:ce(1/180,1,-1/180,.5)}),pv=s({},Le,{projection:Ou,transformation:ce(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,r){var l=r.lng-n.lng,c=r.lat-n.lat;return Math.sqrt(l*l+c*c)},infinite:!0});Le.Earth=qe,Le.EPSG3395=fv,Le.EPSG3857=_e,Le.EPSG900913=Me,Le.EPSG4326=kp,Le.Simple=pv;var _n=G.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[f(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[f(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var r=n.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var l=this.getEvents();r.on(l,this),this.once("remove",function(){r.off(l,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}}});xe.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var r=f(n);return this._layers[r]?this:(this._layers[r]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var r=f(n);return this._layers[r]?(this._loaded&&n.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return f(n)in this._layers},eachLayer:function(n,r){for(var l in this._layers)n.call(r,this._layers[l]);return this},_addLayers:function(n){n=n?_(n)?n:[n]:[];for(var r=0,l=n.length;r<l;r++)this.addLayer(n[r])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[f(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var r=f(n);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,r=-1/0,l=this._getZoomSpan();for(var c in this._zoomBoundLayers){var p=this._zoomBoundLayers[c].options;n=p.minZoom===void 0?n:Math.min(n,p.minZoom),r=p.maxZoom===void 0?r:Math.max(r,p.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var lo=_n.extend({initialize:function(n,r){b(this,r),this._layers={};var l,c;if(n)for(l=0,c=n.length;l<c;l++)this.addLayer(n[l])},addLayer:function(n){var r=this.getLayerId(n);return this._layers[r]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var r=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},hasLayer:function(n){var r=typeof n=="number"?n:this.getLayerId(n);return r in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var r=Array.prototype.slice.call(arguments,1),l,c;for(l in this._layers)c=this._layers[l],c[n]&&c[n].apply(c,r);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,r){for(var l in this._layers)n.call(r,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return f(n)}}),hv=function(n,r){return new lo(n,r)},Hn=lo.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),lo.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),lo.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new pe;for(var r in this._layers){var l=this._layers[r];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),mv=function(n,r){return new Hn(n,r)},uo=W.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){b(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,r){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var c=this._createImg(l,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(c,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),c},_setIconStyles:function(n,r){var l=this.options,c=l[r+"Size"];typeof c=="number"&&(c=[c,c]);var p=B(c),m=B(r==="shadow"&&l.shadowAnchor||l.iconAnchor||p&&p.divideBy(2,!0));n.className="leaflet-marker-"+r+" "+(l.className||""),m&&(n.style.marginLeft=-m.x+"px",n.style.marginTop=-m.y+"px"),p&&(n.style.width=p.x+"px",n.style.height=p.y+"px")},_createImg:function(n,r){return r=r||document.createElement("img"),r.src=n,r},_getIconUrl:function(n){return re.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function gv(n){return new uo(n)}var gr=uo.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof gr.imagePath!="string"&&(gr.imagePath=this._detectIconPath()),(this.options.imagePath||gr.imagePath)+uo.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var r=function(l,c,p){var m=c.exec(l);return m&&m[p]};return n=r(n,/^url\((['"])?(.+)\1\)$/,2),n&&r(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=be("div","leaflet-default-icon-path",document.body),r=ur(n,"background-image")||ur(n,"backgroundImage");if(document.body.removeChild(n),r=this._stripUrl(r),r)return r;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Tp=Rn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new si(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),he(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&nt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var r=this._marker,l=r._map,c=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,m=Ri(r._icon),k=l.getPixelBounds(),O=l.getPixelOrigin(),U=se(k.min._subtract(O).add(p),k.max._subtract(O).subtract(p));if(!U.contains(m)){var D=B((Math.max(U.max.x,m.x)-U.max.x)/(k.max.x-U.max.x)-(Math.min(U.min.x,m.x)-U.min.x)/(k.min.x-U.min.x),(Math.max(U.max.y,m.y)-U.max.y)/(k.max.y-U.max.y)-(Math.min(U.min.y,m.y)-U.min.y)/(k.min.y-U.min.y)).multiplyBy(c);l.panBy(D,{animate:!1}),this._draggable._newPos._add(D),this._draggable._startPos._add(D),st(r._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=H(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(ee(this._panRequest),this._panRequest=H(this._adjustPan.bind(this,n)))},_onDrag:function(n){var r=this._marker,l=r._shadow,c=Ri(r._icon),p=r._map.layerPointToLatLng(c);l&&st(l,c),r._latlng=p,n.latlng=p,n.oldLatLng=this._oldLatLng,r.fire("move",n).fire("drag",n)},_onDragEnd:function(n){ee(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Ns=_n.extend({options:{icon:new gr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,r){b(this,r),this._latlng=Q(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var r=this._latlng;return this._latlng=Q(n),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),c=!1;l!==this._icon&&(this._icon&&this._removeIcon(),c=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),he(l,r),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&fe(l,"focus",this._panOnFocus,this);var p=n.icon.createShadow(this._shadow),m=!1;p!==this._shadow&&(this._removeShadow(),m=!0),p&&(he(p,r),p.alt=""),this._shadow=p,n.opacity<1&&this._updateOpacity(),c&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&m&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ae(this._icon,"focus",this._panOnFocus,this),He(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&He(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&st(this._icon,n),this._shadow&&st(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(r)},_initInteraction:function(){if(this.options.interactive&&(he(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Tp)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Tp(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&on(this._icon,n),this._shadow&&on(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var r=this.options.icon.options,l=r.iconSize?B(r.iconSize):B(0,0),c=r.iconAnchor?B(r.iconAnchor):B(0,0);n.panInside(this._latlng,{paddingTopLeft:c,paddingBottomRight:l.subtract(c)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function yv(n,r){return new Ns(n,r)}var ai=_n.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return b(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Fs=ai.extend({options:{fill:!0,radius:10},initialize:function(n,r){b(this,r),this._latlng=Q(n),this._radius=this.options.radius},setLatLng:function(n){var r=this._latlng;return this._latlng=Q(n),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var r=n&&n.radius||this._radius;return ai.prototype.setStyle.call(this,n),this.setRadius(r),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,r=this._radiusY||n,l=this._clickTolerance(),c=[n+l,r+l];this._pxBounds=new J(this._point.subtract(c),this._point.add(c))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function vv(n,r){return new Fs(n,r)}var Au=Fs.extend({initialize:function(n,r,l){if(typeof r=="number"&&(r=s({},l,{radius:r})),b(this,r),this._latlng=Q(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new pe(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:ai.prototype.setStyle,_project:function(){var n=this._latlng.lng,r=this._latlng.lat,l=this._map,c=l.options.crs;if(c.distance===qe.distance){var p=Math.PI/180,m=this._mRadius/qe.R/p,k=l.project([r+m,n]),O=l.project([r-m,n]),U=k.add(O).divideBy(2),D=l.unproject(U).lat,Y=Math.acos((Math.cos(m*p)-Math.sin(r*p)*Math.sin(D*p))/(Math.cos(r*p)*Math.cos(D*p)))/p;(isNaN(Y)||Y===0)&&(Y=m/Math.cos(Math.PI/180*r)),this._point=U.subtract(l.getPixelOrigin()),this._radius=isNaN(Y)?0:U.x-l.project([D,n-Y]).x,this._radiusY=U.y-k.y}else{var le=c.unproject(c.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(le).x}this._updateBounds()}});function _v(n,r,l){return new Au(n,r,l)}var Zn=ai.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,r){b(this,r),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var r=1/0,l=null,c=mr,p,m,k=0,O=this._parts.length;k<O;k++)for(var U=this._parts[k],D=1,Y=U.length;D<Y;D++){p=U[D-1],m=U[D];var le=c(n,p,m,!0);le<r&&(r=le,l=c(n,p,m))}return l&&(l.distance=Math.sqrt(r)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pp(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,r){return r=r||this._defaultShape(),n=Q(n),r.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new pe,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return rn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var r=[],l=rn(n),c=0,p=n.length;c<p;c++)l?(r[c]=Q(n[c]),this._bounds.extend(r[c])):r[c]=this._convertLatLngs(n[c]);return r},_project:function(){var n=new J;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),r=new z(n,n);this._rawPxBounds&&(this._pxBounds=new J([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},_projectLatlngs:function(n,r,l){var c=n[0]instanceof ie,p=n.length,m,k;if(c){for(k=[],m=0;m<p;m++)k[m]=this._map.latLngToLayerPoint(n[m]),l.extend(k[m]);r.push(k)}else for(m=0;m<p;m++)this._projectLatlngs(n[m],r,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,l,c,p,m,k,O,U;for(l=0,p=0,m=this._rings.length;l<m;l++)for(U=this._rings[l],c=0,k=U.length;c<k-1;c++)O=Sp(U[c],U[c+1],n,c,!0),O&&(r[p]=r[p]||[],r[p].push(O[0]),(O[1]!==U[c+1]||c===k-2)&&(r[p].push(O[1]),p++))}},_simplifyPoints:function(){for(var n=this._parts,r=this.options.smoothFactor,l=0,c=n.length;l<c;l++)n[l]=wp(n[l],r)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,r){var l,c,p,m,k,O,U=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,m=this._parts.length;l<m;l++)for(O=this._parts[l],c=0,k=O.length,p=k-1;c<k;p=c++)if(!(!r&&c===0)&&bp(n,O[p],O[c])<=U)return!0;return!1}});function xv(n,r){return new Zn(n,r)}Zn._flat=Cp;var co=Zn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return xp(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var r=Zn.prototype._convertLatLngs.call(this,n),l=r.length;return l>=2&&r[0]instanceof ie&&r[0].equals(r[l-1])&&r.pop(),r},_setLatLngs:function(n){Zn.prototype._setLatLngs.call(this,n),rn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return rn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,r=this.options.weight,l=new z(r,r);if(n=new J(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var c=0,p=this._rings.length,m;c<p;c++)m=_p(this._rings[c],n,!0),m.length&&this._parts.push(m)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var r=!1,l,c,p,m,k,O,U,D;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(m=0,U=this._parts.length;m<U;m++)for(l=this._parts[m],k=0,D=l.length,O=D-1;k<D;O=k++)c=l[k],p=l[O],c.y>n.y!=p.y>n.y&&n.x<(p.x-c.x)*(n.y-c.y)/(p.y-c.y)+c.x&&(r=!r);return r||Zn.prototype._containsPoint.call(this,n,!0)}});function wv(n,r){return new co(n,r)}var Vn=Hn.extend({initialize:function(n,r){b(this,r),this._layers={},n&&this.addData(n)},addData:function(n){var r=_(n)?n:n.features,l,c,p;if(r){for(l=0,c=r.length;l<c;l++)p=r[l],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var m=this.options;if(m.filter&&!m.filter(n))return this;var k=Bs(n,m);return k?(k.feature=js(n),k.defaultOptions=k.options,this.resetStyle(k),m.onEachFeature&&m.onEachFeature(n,k),this.addLayer(k)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=s({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(r){this._setLayerStyle(r,n)},this)},_setLayerStyle:function(n,r){n.setStyle&&(typeof r=="function"&&(r=r(n.feature)),n.setStyle(r))}});function Bs(n,r){var l=n.type==="Feature"?n.geometry:n,c=l?l.coordinates:null,p=[],m=r&&r.pointToLayer,k=r&&r.coordsToLatLng||Uu,O,U,D,Y;if(!c&&!l)return null;switch(l.type){case"Point":return O=k(c),Lp(m,n,O,r);case"MultiPoint":for(D=0,Y=c.length;D<Y;D++)O=k(c[D]),p.push(Lp(m,n,O,r));return new Hn(p);case"LineString":case"MultiLineString":return U=$s(c,l.type==="LineString"?0:1,k),new Zn(U,r);case"Polygon":case"MultiPolygon":return U=$s(c,l.type==="Polygon"?1:2,k),new co(U,r);case"GeometryCollection":for(D=0,Y=l.geometries.length;D<Y;D++){var le=Bs({geometry:l.geometries[D],type:"Feature",properties:n.properties},r);le&&p.push(le)}return new Hn(p);case"FeatureCollection":for(D=0,Y=l.features.length;D<Y;D++){var me=Bs(l.features[D],r);me&&p.push(me)}return new Hn(p);default:throw new Error("Invalid GeoJSON object.")}}function Lp(n,r,l,c){return n?n(r,l):new Ns(l,c&&c.markersInheritOptions&&c)}function Uu(n){return new ie(n[1],n[0],n[2])}function $s(n,r,l){for(var c=[],p=0,m=n.length,k;p<m;p++)k=r?$s(n[p],r-1,l):(l||Uu)(n[p]),c.push(k);return c}function Nu(n,r){return n=Q(n),n.alt!==void 0?[x(n.lng,r),x(n.lat,r),x(n.alt,r)]:[x(n.lng,r),x(n.lat,r)]}function Ds(n,r,l,c){for(var p=[],m=0,k=n.length;m<k;m++)p.push(r?Ds(n[m],rn(n[m])?0:r-1,l,c):Nu(n[m],c));return!r&&l&&p.length>0&&p.push(p[0].slice()),p}function fo(n,r){return n.feature?s({},n.feature,{geometry:r}):js(r)}function js(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Fu={toGeoJSON:function(n){return fo(this,{type:"Point",coordinates:Nu(this.getLatLng(),n)})}};Ns.include(Fu),Au.include(Fu),Fs.include(Fu),Zn.include({toGeoJSON:function(n){var r=!rn(this._latlngs),l=Ds(this._latlngs,r?1:0,!1,n);return fo(this,{type:(r?"Multi":"")+"LineString",coordinates:l})}}),co.include({toGeoJSON:function(n){var r=!rn(this._latlngs),l=r&&!rn(this._latlngs[0]),c=Ds(this._latlngs,l?2:r?1:0,!0,n);return r||(c=[c]),fo(this,{type:(l?"Multi":"")+"Polygon",coordinates:c})}}),lo.include({toMultiPoint:function(n){var r=[];return this.eachLayer(function(l){r.push(l.toGeoJSON(n).geometry.coordinates)}),fo(this,{type:"MultiPoint",coordinates:r})},toGeoJSON:function(n){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(n);var l=r==="GeometryCollection",c=[];return this.eachLayer(function(p){if(p.toGeoJSON){var m=p.toGeoJSON(n);if(l)c.push(m.geometry);else{var k=js(m);k.type==="FeatureCollection"?c.push.apply(c,k.features):c.push(k)}}}),l?fo(this,{geometries:c,type:"GeometryCollection"}):{type:"FeatureCollection",features:c}}});function Mp(n,r){return new Vn(n,r)}var bv=Mp,Ws=_n.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,r,l){this._url=n,this._bounds=ne(r),b(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(he(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){He(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&so(this._image),this},bringToBack:function(){return this._map&&ao(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=ne(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",r=this._image=n?this._url:be("img");if(he(r,"leaflet-image-layer"),this._zoomAnimated&&he(r,"leaflet-zoom-animated"),this.options.className&&he(r,this.options.className),r.onselectstart=g,r.onmousemove=g,r.onload=u(this.fire,this,"load"),r.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},_animateZoom:function(n){var r=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;Mi(this._image,l,r)},_reset:function(){var n=this._image,r=new J(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=r.getSize();st(n,r.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){on(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Ev=function(n,r,l){return new Ws(n,r,l)},Rp=Ws.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",r=this._image=n?this._url:be("video");if(he(r,"leaflet-image-layer"),this._zoomAnimated&&he(r,"leaflet-zoom-animated"),this.options.className&&he(r,this.options.className),r.onselectstart=g,r.onmousemove=g,r.onloadeddata=u(this.fire,this,"load"),n){for(var l=r.getElementsByTagName("source"),c=[],p=0;p<l.length;p++)c.push(l[p].src);this._url=l.length>0?c:[r.src];return}_(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var m=0;m<this._url.length;m++){var k=be("source");k.src=this._url[m],r.appendChild(k)}}});function Sv(n,r,l){return new Rp(n,r,l)}var Ip=Ws.extend({_initImage:function(){var n=this._image=this._url;he(n,"leaflet-image-layer"),this._zoomAnimated&&he(n,"leaflet-zoom-animated"),this.options.className&&he(n,this.options.className),n.onselectstart=g,n.onmousemove=g}});function Cv(n,r,l){return new Ip(n,r,l)}var In=_n.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,r){n&&(n instanceof ie||_(n))?(this._latlng=Q(n),b(this,r)):(b(this,n),this._source=r),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&on(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&on(this._container,1),this.bringToFront(),this.options.interactive&&(he(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(on(this._container,0),this._removeTimeout=setTimeout(u(He,void 0,this._container),200)):He(this._container),this.options.interactive&&(nt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=Q(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&so(this._container),this},bringToBack:function(){return this._map&&ao(this._container),this},_prepareOpen:function(n){var r=this._source;if(!r._map)return!1;if(r instanceof Hn){r=null;var l=this._source._layers;for(var c in l)if(l[c]._map){r=l[c];break}if(!r)return!1;this._source=r}if(!n)if(r.getCenter)n=r.getCenter();else if(r.getLatLng)n=r.getLatLng();else if(r.getBounds)n=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")n.innerHTML=r;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(r)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),r=B(this.options.offset),l=this._getAnchor();this._zoomAnimated?st(this._container,n.add(l)):r=r.add(n).add(l);var c=this._containerBottom=-r.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=c+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});xe.include({_initOverlay:function(n,r,l,c){var p=r;return p instanceof n||(p=new n(c).setContent(r)),l&&p.setLatLng(l),p}}),_n.include({_initOverlay:function(n,r,l,c){var p=l;return p instanceof n?(b(p,c),p._source=this):(p=r&&!c?r:new n(c,this),p.setContent(l)),p}});var Hs=In.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,In.prototype.openOn.call(this,n)},onAdd:function(n){In.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ai||this._source.on("preclick",Ii))},onRemove:function(n){In.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ai||this._source.off("preclick",Ii))},getEvents:function(){var n=In.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",r=this._container=be("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=be("div",n+"-content-wrapper",r);if(this._contentNode=be("div",n+"-content",l),pr(r),ku(this._contentNode),fe(r,"contextmenu",Ii),this._tipContainer=be("div",n+"-tip-container",r),this._tip=be("div",n+"-tip",this._tipContainer),this.options.closeButton){var c=this._closeButton=be("a",n+"-close-button",r);c.setAttribute("role","button"),c.setAttribute("aria-label","Close popup"),c.href="#close",c.innerHTML='<span aria-hidden="true">&#215;</span>',fe(c,"click",function(p){gt(p),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,r=n.style;r.width="",r.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),r.width=l+1+"px",r.whiteSpace="",r.height="";var c=n.offsetHeight,p=this.options.maxHeight,m="leaflet-popup-scrolled";p&&c>p?(r.height=p+"px",he(n,m)):nt(n,m),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();st(this._container,r.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,r=parseInt(ur(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+r,c=this._containerWidth,p=new z(this._containerLeft,-l-this._containerBottom);p._add(Ri(this._container));var m=n.layerPointToContainerPoint(p),k=B(this.options.autoPanPadding),O=B(this.options.autoPanPaddingTopLeft||k),U=B(this.options.autoPanPaddingBottomRight||k),D=n.getSize(),Y=0,le=0;m.x+c+U.x>D.x&&(Y=m.x+c-D.x+U.x),m.x-Y-O.x<0&&(Y=m.x-O.x),m.y+l+U.y>D.y&&(le=m.y+l-D.y+U.y),m.y-le-O.y<0&&(le=m.y-O.y),(Y||le)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Y,le]))}},_getAnchor:function(){return B(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Pv=function(n,r){return new Hs(n,r)};xe.mergeOptions({closePopupOnClick:!0}),xe.include({openPopup:function(n,r,l){return this._initOverlay(Hs,n,r,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),_n.include({bindPopup:function(n,r){return this._popup=this._initOverlay(Hs,this._popup,n,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Hn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Oi(n);var r=n.layer||n.target;if(this._popup._source===r&&!(r instanceof ai)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=r,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Zs=In.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){In.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){In.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=In.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",r=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=be("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var r,l,c=this._map,p=this._container,m=c.latLngToContainerPoint(c.getCenter()),k=c.layerPointToContainerPoint(n),O=this.options.direction,U=p.offsetWidth,D=p.offsetHeight,Y=B(this.options.offset),le=this._getAnchor();O==="top"?(r=U/2,l=D):O==="bottom"?(r=U/2,l=0):O==="center"?(r=U/2,l=D/2):O==="right"?(r=0,l=D/2):O==="left"?(r=U,l=D/2):k.x<m.x?(O="right",r=0,l=D/2):(O="left",r=U+(Y.x+le.x)*2,l=D/2),n=n.subtract(B(r,l,!0)).add(Y).add(le),nt(p,"leaflet-tooltip-right"),nt(p,"leaflet-tooltip-left"),nt(p,"leaflet-tooltip-top"),nt(p,"leaflet-tooltip-bottom"),he(p,"leaflet-tooltip-"+O),st(p,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&on(this._container,n)},_animateZoom:function(n){var r=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(r)},_getAnchor:function(){return B(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),kv=function(n,r){return new Zs(n,r)};xe.include({openTooltip:function(n,r,l){return this._initOverlay(Zs,n,r,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),_n.include({bindTooltip:function(n,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Zs,this._tooltip,n,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var r=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[r](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Hn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&(fe(r,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),fe(r,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var r=typeof n.getElement=="function"&&n.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var r=n.latlng,l,c;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),c=this._map.containerPointToLayerPoint(l),r=this._map.layerPointToLatLng(c)),this._tooltip.setLatLng(r)}});var Op=uo.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var r=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(Rs(r),r.appendChild(l.html)):r.innerHTML=l.html!==!1?l.html:"",l.bgPos){var c=B(l.bgPos);r.style.backgroundPosition=-c.x+"px "+-c.y+"px"}return this._setIconStyles(r,"icon"),r},createShadow:function(){return null}});function Tv(n){return new Op(n)}uo.Default=gr;var yr=_n.extend({options:{tileSize:256,opacity:1,updateWhenIdle:re.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){b(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),He(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(so(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ao(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof z?n:new z(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var r=this.getPane().children,l=-n(-1/0,1/0),c=0,p=r.length,m;c<p;c++)m=r[c].style.zIndex,r[c]!==this._container&&m&&(l=n(l,+m));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!re.ielt9){on(this._container,this.options.opacity);var n=+new Date,r=!1,l=!1;for(var c in this._tiles){var p=this._tiles[c];if(!(!p.current||!p.loaded)){var m=Math.min(1,(n-p.loaded)/200);on(p.el,m),m<1?r=!0:(p.active?l=!0:this._onOpaqueTile(p),p.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),r&&(ee(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=be("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,r=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=r-Math.abs(n-l),this._onUpdateLevel(l)):(He(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var c=this._levels[n],p=this._map;return c||(c=this._levels[n]={},c.el=be("div","leaflet-tile-container leaflet-zoom-animated",this._container),c.el.style.zIndex=r,c.origin=p.project(p.unproject(p.getPixelOrigin()),n).round(),c.zoom=n,this._setZoomTransform(c,p.getCenter(),p.getZoom()),g(c.el.offsetWidth),this._onCreateLevel(c)),this._level=c,c}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var n,r,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)r=this._tiles[n],r.retain=r.current;for(n in this._tiles)if(r=this._tiles[n],r.current&&!r.active){var c=r.coords;this._retainParent(c.x,c.y,c.z,c.z-5)||this._retainChildren(c.x,c.y,c.z,c.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var r in this._tiles)this._tiles[r].coords.z===n&&this._removeTile(r)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)He(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,r,l,c){var p=Math.floor(n/2),m=Math.floor(r/2),k=l-1,O=new z(+p,+m);O.z=+k;var U=this._tileCoordsToKey(O),D=this._tiles[U];return D&&D.active?(D.retain=!0,!0):(D&&D.loaded&&(D.retain=!0),k>c?this._retainParent(p,m,k,c):!1)},_retainChildren:function(n,r,l,c){for(var p=2*n;p<2*n+2;p++)for(var m=2*r;m<2*r+2;m++){var k=new z(p,m);k.z=l+1;var O=this._tileCoordsToKey(k),U=this._tiles[O];if(U&&U.active){U.retain=!0;continue}else U&&U.loaded&&(U.retain=!0);l+1<c&&this._retainChildren(p,m,l+1,c)}},_resetView:function(n){var r=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var r=this.options;return r.minNativeZoom!==void 0&&n<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<n?r.maxNativeZoom:n},_setView:function(n,r,l,c){var p=Math.round(r);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var m=this.options.updateWhenZooming&&p!==this._tileZoom;(!c||m)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,r)},_setZoomTransforms:function(n,r){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,r)},_setZoomTransform:function(n,r,l){var c=this._map.getZoomScale(l,n.zoom),p=n.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(r,l)).round();re.any3d?Mi(n.el,p,c):st(n.el,p)},_resetGrid:function(){var n=this._map,r=n.options.crs,l=this._tileSize=this.getTileSize(),c=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,r.wrapLng[0]],c).x/l.x),Math.ceil(n.project([0,r.wrapLng[1]],c).x/l.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([r.wrapLat[0],0],c).y/l.x),Math.ceil(n.project([r.wrapLat[1],0],c).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var r=this._map,l=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),c=r.getZoomScale(l,this._tileZoom),p=r.project(n,this._tileZoom).floor(),m=r.getSize().divideBy(c*2);return new J(p.subtract(m),p.add(m))},_update:function(n){var r=this._map;if(r){var l=this._clampZoom(r.getZoom());if(n===void 0&&(n=r.getCenter()),this._tileZoom!==void 0){var c=this._getTiledPixelBounds(n),p=this._pxBoundsToTileRange(c),m=p.getCenter(),k=[],O=this.options.keepBuffer,U=new J(p.getBottomLeft().subtract([O,-O]),p.getTopRight().add([O,-O]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var D in this._tiles){var Y=this._tiles[D].coords;(Y.z!==this._tileZoom||!U.contains(new z(Y.x,Y.y)))&&(this._tiles[D].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var le=p.min.y;le<=p.max.y;le++)for(var me=p.min.x;me<=p.max.x;me++){var Mt=new z(me,le);if(Mt.z=this._tileZoom,!!this._isValidTile(Mt)){var ft=this._tiles[this._tileCoordsToKey(Mt)];ft?ft.current=!0:k.push(Mt)}}if(k.sort(function(Ft,ho){return Ft.distanceTo(m)-ho.distanceTo(m)}),k.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var sn=document.createDocumentFragment();for(me=0;me<k.length;me++)this._addTile(k[me],sn);this._level.el.appendChild(sn)}}}},_isValidTile:function(n){var r=this._map.options.crs;if(!r.infinite){var l=this._globalTileRange;if(!r.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!r.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var c=this._tileCoordsToBounds(n);return ne(this.options.bounds).overlaps(c)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var r=this._map,l=this.getTileSize(),c=n.scaleBy(l),p=c.add(l),m=r.unproject(c,n.z),k=r.unproject(p,n.z);return[m,k]},_tileCoordsToBounds:function(n){var r=this._tileCoordsToNwSe(n),l=new pe(r[0],r[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var r=n.split(":"),l=new z(+r[0],+r[1]);return l.z=+r[2],l},_removeTile:function(n){var r=this._tiles[n];r&&(He(r.el),delete this._tiles[n],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){he(n,"leaflet-tile");var r=this.getTileSize();n.style.width=r.x+"px",n.style.height=r.y+"px",n.onselectstart=g,n.onmousemove=g,re.ielt9&&this.options.opacity<1&&on(n,this.options.opacity)},_addTile:function(n,r){var l=this._getTilePos(n),c=this._tileCoordsToKey(n),p=this.createTile(this._wrapCoords(n),u(this._tileReady,this,n));this._initTile(p),this.createTile.length<2&&H(u(this._tileReady,this,n,null,p)),st(p,l),this._tiles[c]={el:p,coords:n,current:!0},r.appendChild(p),this.fire("tileloadstart",{tile:p,coords:n})},_tileReady:function(n,r,l){r&&this.fire("tileerror",{error:r,tile:l,coords:n});var c=this._tileCoordsToKey(n);l=this._tiles[c],l&&(l.loaded=+new Date,this._map._fadeAnimated?(on(l.el,0),ee(this._fadeFrame),this._fadeFrame=H(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),r||(he(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),re.ielt9||!this._map._fadeAnimated?H(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var r=new z(this._wrapX?v(n.x,this._wrapX):n.x,this._wrapY?v(n.y,this._wrapY):n.y);return r.z=n.z,r},_pxBoundsToTileRange:function(n){var r=this.getTileSize();return new J(n.min.unscaleBy(r).floor(),n.max.unscaleBy(r).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Lv(n){return new yr(n)}var po=yr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,r){this._url=n,r=b(this,r),r.detectRetina&&re.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,r){return this._url===n&&r===void 0&&(r=!0),this._url=n,r||this.redraw(),this},createTile:function(n,r){var l=document.createElement("img");return fe(l,"load",u(this._tileOnLoad,this,r,l)),fe(l,"error",u(this._tileOnError,this,r,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var r={r:re.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(r.y=l),r["-y"]=l}return y(this._url,s(r,this.options))},_tileOnLoad:function(n,r){re.ielt9?setTimeout(u(n,this,null,r),0):n(null,r)},_tileOnError:function(n,r,l){var c=this.options.errorTileUrl;c&&r.getAttribute("src")!==c&&(r.src=c),n(l,r)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,r=this.options.maxZoom,l=this.options.zoomReverse,c=this.options.zoomOffset;return l&&(n=r-n),n+c},_getSubdomain:function(n){var r=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[r]},_abortLoading:function(){var n,r;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(r=this._tiles[n].el,r.onload=g,r.onerror=g,!r.complete)){r.src=M;var l=this._tiles[n].coords;He(r),delete this._tiles[n],this.fire("tileabort",{tile:r,coords:l})}},_removeTile:function(n){var r=this._tiles[n];if(r)return r.el.setAttribute("src",M),yr.prototype._removeTile.call(this,n)},_tileReady:function(n,r,l){if(!(!this._map||l&&l.getAttribute("src")===M))return yr.prototype._tileReady.call(this,n,r,l)}});function zp(n,r){return new po(n,r)}var Ap=po.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,r){this._url=n;var l=s({},this.defaultWmsParams);for(var c in r)c in this.options||(l[c]=r[c]);r=b(this,r);var p=r.detectRetina&&re.retina?2:1,m=this.getTileSize();l.width=m.x*p,l.height=m.y*p,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,po.prototype.onAdd.call(this,n)},getTileUrl:function(n){var r=this._tileCoordsToNwSe(n),l=this._crs,c=se(l.project(r[0]),l.project(r[1])),p=c.min,m=c.max,k=(this._wmsVersion>=1.3&&this._crs===kp?[p.y,p.x,m.y,m.x]:[p.x,p.y,m.x,m.y]).join(","),O=po.prototype.getTileUrl.call(this,n);return O+A(this.wmsParams,O,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+k},setParams:function(n,r){return s(this.wmsParams,n),r||this.redraw(),this}});function Mv(n,r){return new Ap(n,r)}po.WMS=Ap,zp.wms=Mv;var Kn=_n.extend({options:{padding:.1},initialize:function(n){b(this,n),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),he(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,r){var l=this._map.getZoomScale(r,this._zoom),c=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,r),m=c.multiplyBy(-l).add(p).subtract(this._map._getNewPixelOrigin(n,r));re.any3d?Mi(this._container,m,l):st(this._container,m)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,r=this._map.getSize(),l=this._map.containerPointToLayerPoint(r.multiplyBy(-n)).round();this._bounds=new J(l,l.add(r.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Up=Kn.extend({options:{tolerance:0},getEvents:function(){var n=Kn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Kn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");fe(n,"mousemove",this._onMouseMove,this),fe(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),fe(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){ee(this._redrawRequest),delete this._ctx,He(this._container),Ae(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var r in this._layers)n=this._layers[r],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kn.prototype._update.call(this);var n=this._bounds,r=this._container,l=n.getSize(),c=re.retina?2:1;st(r,n.min),r.width=c*l.x,r.height=c*l.y,r.style.width=l.x+"px",r.style.height=l.y+"px",re.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Kn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[f(n)]=n;var r=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var r=n._order,l=r.next,c=r.prev;l?l.prev=c:this._drawLast=c,c?c.next=l:this._drawFirst=l,delete n._order,delete this._layers[f(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var r=n.options.dashArray.split(/[, ]+/),l=[],c,p;for(p=0;p<r.length;p++){if(c=Number(r[p]),isNaN(c))return;l.push(c)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||H(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var r=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new J,this._redrawBounds.extend(n._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(n._pxBounds.max.add([r,r]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var r=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,r=this._redrawBounds;if(this._ctx.save(),r){var l=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var c=this._drawFirst;c;c=c.next)n=c.layer,(!r||n._pxBounds&&n._pxBounds.intersects(r))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,r){if(this._drawing){var l,c,p,m,k=n._parts,O=k.length,U=this._ctx;if(O){for(U.beginPath(),l=0;l<O;l++){for(c=0,p=k[l].length;c<p;c++)m=k[l][c],U[c?"lineTo":"moveTo"](m.x,m.y);r&&U.closePath()}this._fillStroke(U,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var r=n._point,l=this._ctx,c=Math.max(Math.round(n._radius),1),p=(Math.max(Math.round(n._radiusY),1)||c)/c;p!==1&&(l.save(),l.scale(1,p)),l.beginPath(),l.arc(r.x,r.y/p,c,0,Math.PI*2,!1),p!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,r){var l=r.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(r.options&&r.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var r=this._map.mouseEventToLayerPoint(n),l,c,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(r)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(c=l);this._fireEvent(c?[c]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,r)}},_handleMouseOut:function(n){var r=this._hoveredLayer;r&&(nt(this._container,"leaflet-interactive"),this._fireEvent([r],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,r){if(!this._mouseHoverThrottled){for(var l,c,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(r)&&(c=l);c!==this._hoveredLayer&&(this._handleMouseOut(n),c&&(he(this._container,"leaflet-interactive"),this._fireEvent([c],n,"mouseover"),this._hoveredLayer=c)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,r,l){this._map._fireDOMEvent(r,l||r.type,n)},_bringToFront:function(n){var r=n._order;if(r){var l=r.next,c=r.prev;if(l)l.prev=c;else return;c?c.next=l:l&&(this._drawFirst=l),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(n)}},_bringToBack:function(n){var r=n._order;if(r){var l=r.next,c=r.prev;if(c)c.next=l;else return;l?l.prev=c:c&&(this._drawLast=c),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(n)}}});function Np(n){return re.canvas?new Up(n):null}var vr=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Rv={_initContainer:function(){this._container=be("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Kn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var r=n._container=vr("shape");he(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",n._path=vr("path"),r.appendChild(n._path),this._updateStyle(n),this._layers[f(n)]=n},_addPath:function(n){var r=n._container;this._container.appendChild(r),n.options.interactive&&n.addInteractiveTarget(r)},_removePath:function(n){var r=n._container;He(r),n.removeInteractiveTarget(r),delete this._layers[f(n)]},_updateStyle:function(n){var r=n._stroke,l=n._fill,c=n.options,p=n._container;p.stroked=!!c.stroke,p.filled=!!c.fill,c.stroke?(r||(r=n._stroke=vr("stroke")),p.appendChild(r),r.weight=c.weight+"px",r.color=c.color,r.opacity=c.opacity,c.dashArray?r.dashStyle=_(c.dashArray)?c.dashArray.join(" "):c.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=c.lineCap.replace("butt","flat"),r.joinstyle=c.lineJoin):r&&(p.removeChild(r),n._stroke=null),c.fill?(l||(l=n._fill=vr("fill")),p.appendChild(l),l.color=c.fillColor||c.color,l.opacity=c.fillOpacity):l&&(p.removeChild(l),n._fill=null)},_updateCircle:function(n){var r=n._point.round(),l=Math.round(n._radius),c=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+r.x+","+r.y+" "+l+","+c+" 0,"+65535*360)},_setPath:function(n,r){n._path.v=r},_bringToFront:function(n){so(n._container)},_bringToBack:function(n){ao(n._container)}},Vs=re.vml?vr:Tt,_r=Kn.extend({_initContainer:function(){this._container=Vs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Vs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){He(this._container),Ae(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Kn.prototype._update.call(this);var n=this._bounds,r=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,l.setAttribute("width",r.x),l.setAttribute("height",r.y)),st(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,r.x,r.y].join(" ")),this.fire("update")}},_initPath:function(n){var r=n._path=Vs("path");n.options.className&&he(r,n.options.className),n.options.interactive&&he(r,"leaflet-interactive"),this._updateStyle(n),this._layers[f(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){He(n._path),n.removeInteractiveTarget(n._path),delete this._layers[f(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var r=n._path,l=n.options;r&&(l.stroke?(r.setAttribute("stroke",l.color),r.setAttribute("stroke-opacity",l.opacity),r.setAttribute("stroke-width",l.weight),r.setAttribute("stroke-linecap",l.lineCap),r.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?r.setAttribute("stroke-dasharray",l.dashArray):r.removeAttribute("stroke-dasharray"),l.dashOffset?r.setAttribute("stroke-dashoffset",l.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),l.fill?(r.setAttribute("fill",l.fillColor||l.color),r.setAttribute("fill-opacity",l.fillOpacity),r.setAttribute("fill-rule",l.fillRule||"evenodd")):r.setAttribute("fill","none"))},_updatePoly:function(n,r){this._setPath(n,Lt(n._parts,r))},_updateCircle:function(n){var r=n._point,l=Math.max(Math.round(n._radius),1),c=Math.max(Math.round(n._radiusY),1)||l,p="a"+l+","+c+" 0 1,0 ",m=n._empty()?"M0 0":"M"+(r.x-l)+","+r.y+p+l*2+",0 "+p+-l*2+",0 ";this._setPath(n,m)},_setPath:function(n,r){n._path.setAttribute("d",r)},_bringToFront:function(n){so(n._path)},_bringToBack:function(n){ao(n._path)}});re.vml&&_r.include(Rv);function Fp(n){return re.svg||re.vml?new _r(n):null}xe.include({getRenderer:function(n){var r=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var r=this._paneRenderers[n];return r===void 0&&(r=this._createRenderer({pane:n}),this._paneRenderers[n]=r),r},_createRenderer:function(n){return this.options.preferCanvas&&Np(n)||Fp(n)}});var Bp=co.extend({initialize:function(n,r){co.prototype.initialize.call(this,this._boundsToLatLngs(n),r)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=ne(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Iv(n,r){return new Bp(n,r)}_r.create=Vs,_r.pointsToPath=Lt,Vn.geometryToLayer=Bs,Vn.coordsToLatLng=Uu,Vn.coordsToLatLngs=$s,Vn.latLngToCoords=Nu,Vn.latLngsToCoords=Ds,Vn.getFeature=fo,Vn.asFeature=js,xe.mergeOptions({boxZoom:!0});var $p=Rn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){fe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ae(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){He(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),cr(),_u(),this._startPoint=this._map.mouseEventToContainerPoint(n),fe(document,{contextmenu:Oi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=be("div","leaflet-zoom-box",this._container),he(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var r=new J(this._point,this._startPoint),l=r.getSize();st(this._box,r.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(He(this._box),nt(this._container,"leaflet-crosshair")),dr(),xu(),Ae(document,{contextmenu:Oi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var r=new pe(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});xe.addInitHook("addHandler","boxZoom",$p),xe.mergeOptions({doubleClickZoom:!0});var Dp=Rn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var r=this._map,l=r.getZoom(),c=r.options.zoomDelta,p=n.originalEvent.shiftKey?l-c:l+c;r.options.doubleClickZoom==="center"?r.setZoom(p):r.setZoomAround(n.containerPoint,p)}});xe.addInitHook("addHandler","doubleClickZoom",Dp),xe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var jp=Rn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new si(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}he(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){nt(this._map._container,"leaflet-grab"),nt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=ne(this._map.options.maxBounds);this._offsetLimit=se(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var r=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(r),this._prunePositions(r)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,r){return n-(n-r)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;n.x<r.min.x&&(n.x=this._viscousLimit(n.x,r.min.x)),n.y<r.min.y&&(n.y=this._viscousLimit(n.y,r.min.y)),n.x>r.max.x&&(n.x=this._viscousLimit(n.x,r.max.x)),n.y>r.max.y&&(n.y=this._viscousLimit(n.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,r=Math.round(n/2),l=this._initialWorldOffset,c=this._draggable._newPos.x,p=(c-r+l)%n+r-l,m=(c+r+l)%n-r-l,k=Math.abs(p+l)<Math.abs(m+l)?p:m;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=k},_onDragEnd:function(n){var r=this._map,l=r.options,c=!l.inertia||n.noInertia||this._times.length<2;if(r.fire("dragend",n),c)r.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),m=(this._lastTime-this._times[0])/1e3,k=l.easeLinearity,O=p.multiplyBy(k/m),U=O.distanceTo([0,0]),D=Math.min(l.inertiaMaxSpeed,U),Y=O.multiplyBy(D/U),le=D/(l.inertiaDeceleration*k),me=Y.multiplyBy(-le/2).round();!me.x&&!me.y?r.fire("moveend"):(me=r._limitOffset(me,r.options.maxBounds),H(function(){r.panBy(me,{duration:le,easeLinearity:k,noMoveStart:!0,animate:!0})}))}}});xe.addInitHook("addHandler","dragging",jp),xe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Wp=Rn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),fe(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ae(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,r=document.documentElement,l=n.scrollTop||r.scrollTop,c=n.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(c,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var r=this._panKeys={},l=this.keyCodes,c,p;for(c=0,p=l.left.length;c<p;c++)r[l.left[c]]=[-1*n,0];for(c=0,p=l.right.length;c<p;c++)r[l.right[c]]=[n,0];for(c=0,p=l.down.length;c<p;c++)r[l.down[c]]=[0,n];for(c=0,p=l.up.length;c<p;c++)r[l.up[c]]=[0,-1*n]},_setZoomDelta:function(n){var r=this._zoomKeys={},l=this.keyCodes,c,p;for(c=0,p=l.zoomIn.length;c<p;c++)r[l.zoomIn[c]]=n;for(c=0,p=l.zoomOut.length;c<p;c++)r[l.zoomOut[c]]=-n},_addHooks:function(){fe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ae(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var r=n.keyCode,l=this._map,c;if(r in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(c=this._panKeys[r],n.shiftKey&&(c=B(c).multiplyBy(3)),l.options.maxBounds&&(c=l._limitOffset(B(c),l.options.maxBounds)),l.options.worldCopyJump){var p=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(c)));l.panTo(p)}else l.panBy(c)}else if(r in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Oi(n)}}});xe.addInitHook("addHandler","keyboard",Wp),xe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Hp=Rn.extend({addHooks:function(){fe(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ae(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var r=hp(n),l=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var c=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),c),Oi(n)},_performZoom:function(){var n=this._map,r=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var c=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(c))))/Math.LN2,m=l?Math.ceil(p/l)*l:p,k=n._limitZoom(r+(this._delta>0?m:-m))-r;this._delta=0,this._startTime=null,k&&(n.options.scrollWheelZoom==="center"?n.setZoom(r+k):n.setZoomAround(this._lastMousePos,r+k))}});xe.addInitHook("addHandler","scrollWheelZoom",Hp);var Ov=600;xe.mergeOptions({tapHold:re.touchNative&&re.safari&&re.mobile,tapTolerance:15});var Zp=Rn.extend({addHooks:function(){fe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ae(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var r=n.touches[0];this._startPos=this._newPos=new z(r.clientX,r.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(fe(document,"touchend",gt),fe(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),Ov),fe(document,"touchend touchcancel contextmenu",this._cancel,this),fe(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){Ae(document,"touchend",gt),Ae(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),Ae(document,"touchend touchcancel contextmenu",this._cancel,this),Ae(document,"touchmove",this._onMove,this)},_onMove:function(n){var r=n.touches[0];this._newPos=new z(r.clientX,r.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,r){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});l._simulated=!0,r.target.dispatchEvent(l)}});xe.addInitHook("addHandler","tapHold",Zp),xe.mergeOptions({touchZoom:re.touch,bounceAtZoomLimits:!0});var Vp=Rn.extend({addHooks:function(){he(this._map._container,"leaflet-touch-zoom"),fe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){nt(this._map._container,"leaflet-touch-zoom"),Ae(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var r=this._map;if(!(!n.touches||n.touches.length!==2||r._animatingZoom||this._zooming)){var l=r.mouseEventToContainerPoint(n.touches[0]),c=r.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(l.add(c)._divideBy(2))),this._startDist=l.distanceTo(c),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),fe(document,"touchmove",this._onTouchMove,this),fe(document,"touchend touchcancel",this._onTouchEnd,this),gt(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var r=this._map,l=r.mouseEventToContainerPoint(n.touches[0]),c=r.mouseEventToContainerPoint(n.touches[1]),p=l.distanceTo(c)/this._startDist;if(this._zoom=r.getScaleZoom(p,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&p<1||this._zoom>r.getMaxZoom()&&p>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var m=l._add(c)._divideBy(2)._subtract(this._centerPoint);if(p===1&&m.x===0&&m.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(m),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),ee(this._animRequest);var k=u(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=H(k,this,!0),gt(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ee(this._animRequest),Ae(document,"touchmove",this._onTouchMove,this),Ae(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});xe.addInitHook("addHandler","touchZoom",Vp),xe.BoxZoom=$p,xe.DoubleClickZoom=Dp,xe.Drag=jp,xe.Keyboard=Wp,xe.ScrollWheelZoom=Hp,xe.TapHold=Zp,xe.TouchZoom=Vp,i.Bounds=J,i.Browser=re,i.CRS=Le,i.Canvas=Up,i.Circle=Au,i.CircleMarker=Fs,i.Class=W,i.Control=vn,i.DivIcon=Op,i.DivOverlay=In,i.DomEvent=Qy,i.DomUtil=qy,i.Draggable=si,i.Evented=G,i.FeatureGroup=Hn,i.GeoJSON=Vn,i.GridLayer=yr,i.Handler=Rn,i.Icon=uo,i.ImageOverlay=Ws,i.LatLng=ie,i.LatLngBounds=pe,i.Layer=_n,i.LayerGroup=lo,i.LineUtil=cv,i.Map=xe,i.Marker=Ns,i.Mixin=ov,i.Path=ai,i.Point=z,i.PolyUtil=rv,i.Polygon=co,i.Polyline=Zn,i.Popup=Hs,i.PosAnimation=mp,i.Projection=dv,i.Rectangle=Bp,i.Renderer=Kn,i.SVG=_r,i.SVGOverlay=Ip,i.TileLayer=po,i.Tooltip=Zs,i.Transformation=ve,i.Util=te,i.VideoOverlay=Rp,i.bind=u,i.bounds=se,i.canvas=Np,i.circle=_v,i.circleMarker=vv,i.control=hr,i.divIcon=Tv,i.extend=s,i.featureGroup=mv,i.geoJSON=Mp,i.geoJson=bv,i.gridLayer=Lv,i.icon=gv,i.imageOverlay=Ev,i.latLng=Q,i.latLngBounds=ne,i.layerGroup=hv,i.map=Xy,i.marker=yv,i.point=B,i.polygon=wv,i.polyline=xv,i.popup=Pv,i.rectangle=Iv,i.setOptions=b,i.stamp=f,i.svg=Fp,i.svgOverlay=Cv,i.tileLayer=zp,i.tooltip=kv,i.transformation=ce,i.version=o,i.videoOverlay=Sv;var zv=window.L;i.noConflict=function(){return window.L=zv,this},window.L=i})})(Cd,Cd.exports);var sr=Cd.exports;const r3=sl(sr);function _y(e,t){const i=E.useRef(t);E.useEffect(function(){t!==i.current&&e.attributionControl!=null&&(i.current!=null&&e.attributionControl.removeAttribution(i.current),t!=null&&e.attributionControl.addAttribution(t)),i.current=t},[e,t])}const s3=1;function a3(e){return Object.freeze({__version:s3,map:e})}function l3(e,t){return Object.freeze({...e,...t})}const xy=E.createContext(null),wy=xy.Provider;function qf(){const e=E.useContext(xy);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function u3(e){function t(i,o){const{instance:s,context:a}=e(i).current;return E.useImperativeHandle(o,()=>s),i.children==null?null:It.createElement(wy,{value:a},i.children)}return E.forwardRef(t)}function c3(e){function t(i,o){const[s,a]=E.useState(!1),{instance:u}=e(i,a).current;E.useImperativeHandle(o,()=>u),E.useEffect(function(){s&&u.update()},[u,s,i.children]);const d=u._contentNode;return d?Ps.createPortal(i.children,d):null}return E.forwardRef(t)}function by(e){function t(i,o){const{instance:s}=e(i).current;return E.useImperativeHandle(o,()=>s),null}return E.forwardRef(t)}function d3(e){return function(i){const o=qf(),s=e(i,o),{instance:a}=s.current,u=E.useRef(i.position),{position:d}=i;return E.useEffect(function(){return a.addTo(o.map),function(){a.remove()}},[o.map,a]),E.useEffect(function(){d!=null&&d!==u.current&&(a.setPosition(d),u.current=d)},[a,d]),s}}function Ey(e,t){const i=E.useRef();E.useEffect(function(){return t!=null&&e.instance.on(t),i.current=t,function(){i.current!=null&&e.instance.off(i.current),i.current=null}},[e,t])}function Yf(e,t){const i=e.pane??t.pane;return i?{...e,pane:i}:e}function f3(e,t){return function(o,s){const a=qf(),u=e(Yf(o,a),a);return _y(a.map,o.attribution),Ey(u.current,o.eventHandlers),t(u.current,a,o,s),u}}function cu(e,t,i){return Object.freeze({instance:e,context:t,container:i})}function du(e,t){return t==null?function(o,s){const a=E.useRef();return a.current||(a.current=e(o,s)),a}:function(o,s){const a=E.useRef();a.current||(a.current=e(o,s));const u=E.useRef(o),{instance:d}=a.current;return E.useEffect(function(){u.current!==o&&(t(d,o,u.current),u.current=o)},[d,o,s]),a}}function p3(e,t){E.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var a;(a=t.layerContainer)==null||a.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function Sy(e){return function(i){const o=qf(),s=e(Yf(i,o),o);return _y(o.map,i.attribution),Ey(s.current,i.eventHandlers),p3(s.current,o),s}}function h3(e){function t(s,a){return cu(e(s),a)}const i=du(t),o=d3(i);return by(o)}function m3(e,t){const i=du(e,t),o=Sy(i);return u3(o)}function g3(e,t){const i=du(e),o=f3(i,t);return c3(o)}function y3(e,t){const i=du(e,t),o=Sy(i);return by(o)}function v3(e,t,i){const{opacity:o,zIndex:s}=t;o!=null&&o!==i.opacity&&e.setOpacity(o),s!=null&&s!==i.zIndex&&e.setZIndex(s)}function Pd(){return Pd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Pd.apply(this,arguments)}function _3({bounds:e,boundsOptions:t,center:i,children:o,className:s,id:a,placeholder:u,style:d,whenReady:f,zoom:h,...v},g){const[x]=E.useState({className:s,id:a,style:d}),[P,S]=E.useState(null);E.useImperativeHandle(g,()=>(P==null?void 0:P.map)??null,[P]);const b=E.useCallback(w=>{if(w!==null&&P===null){const y=new sr.Map(w,v);i!=null&&h!=null?y.setView(i,h):e!=null&&y.fitBounds(e,t),f!=null&&y.whenReady(f),S(a3(y))}},[]);E.useEffect(()=>()=>{P==null||P.map.remove()},[P]);const A=P?It.createElement(wy,{value:P},o):u??null;return It.createElement("div",Pd({},x,{ref:b}),A)}const x3=E.forwardRef(_3),w3=m3(function({position:t,...i},o){const s=new sr.Marker(t,i);return cu(s,l3(o,{overlayContainer:s}))},function(t,i,o){i.position!==o.position&&t.setLatLng(i.position),i.icon!=null&&i.icon!==o.icon&&t.setIcon(i.icon),i.zIndexOffset!=null&&i.zIndexOffset!==o.zIndexOffset&&t.setZIndexOffset(i.zIndexOffset),i.opacity!=null&&i.opacity!==o.opacity&&t.setOpacity(i.opacity),t.dragging!=null&&i.draggable!==o.draggable&&(i.draggable===!0?t.dragging.enable():t.dragging.disable())}),b3=g3(function(t,i){const o=new sr.Popup(t,i.overlayContainer);return cu(o,i)},function(t,i,{position:o},s){E.useEffect(function(){const{instance:u}=t;function d(h){h.popup===u&&(u.update(),s(!0))}function f(h){h.popup===u&&s(!1)}return i.map.on({popupopen:d,popupclose:f}),i.overlayContainer==null?(o!=null&&u.setLatLng(o),u.openOn(i.map)):i.overlayContainer.bindPopup(u),function(){var v;i.map.off({popupopen:d,popupclose:f}),(v=i.overlayContainer)==null||v.unbindPopup(),i.map.removeLayer(u)}},[t,i,s,o])}),E3=y3(function({url:t,...i},o){const s=new sr.TileLayer(t,Yf(i,o));return cu(s,o)},function(t,i,o){v3(t,i,o);const{url:s}=i;s!=null&&s!==o.url&&t.setUrl(s)}),S3=h3(function(t){return new sr.Control.Zoom(t)}),C3=[{type:"文藝刊物及組織",publication:"荷里活道——《循環日報》",description:"報社位於荷李活道，參《荷李活道》專書（明報刊，2013）",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2839973,lng:114.1504901}},{type:"文藝刊物及組織",publication:"荷李活道108號——《華僑日報》",description:"《華僑日報》1925年創刊之時遇到省港大罷工，報紙以石印方式維持出版，又1942年香港淪陷，仍委曲求全出版至戰後，是在二十年代至九十年代不間斷堅持出版的本土報紙。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2837831,lng:114.151074}},{type:"文藝刊物及組織",publication:"大埔墟(1)——《華僑日報》",description:"《華僑日報》編輯吳灞陵在1923年加入報界，收集各種報界資料，最為人樂道是創辦庸社，在《華僑日報》開創本地旅遊版，是香港旅遊文學的始祖。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.4452504,lng:114.1684947}},{type:"文藝刊物及組織",publication:"英華書院——《英華青年》",description:"香港現存歷史最悠久之學校",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.3298959,lng:114.152844}},{type:"文藝刊物及組織",publication:"新蒲崗——《中國學生周報》",description:"《中國學生周報》在1952年創辦，至1974年停刊，先後出版1128期，該刊承傳中國文化，風格務實多元，主要對象是當時海內外的中國學生與華僑生，先後有多個文藝版面如：「讀書研究」、「拓墾」、「種籽」、「新苗」、「穗華」、「譯林」、「電影」、「藝叢」、「詩之頁」。早期社長余德寬、奚會暲，編輯有余英時、姚拓、趙聰、黃思騁、黃崖、燕歸來等，後來的社長有古梅、胡菊人、陳特，編輯有陸離、羅卡、吳平等等。培育出多位文化人。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.3364426,lng:114.1989259}},{type:"文藝刊物及組織",publication:"威靈頓街——《晶報》",description:"'1956年5月5日創刊的左派報紙，1993年停刊，副刊有筆聊生（陳霞子）三及第小說，以及太史婆（容若）的太史婆講廿四史。據說晶報停刊後，舊報存於地庫，九十年代因一場大雨，保留在地庫的存報盡毀。（待考，資料來源葉翠華）",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2830956,lng:114.1544719}},{type:"文藝刊物及組織",publication:"梁國英藥局——《紅豆》",description:"1933年12月創刊的《紅豆》，由梁國英藥局少東梁之盤、梁之寬兄弟創辦及經營，梁之盤為前律政司司長梁愛詩之父親，畫家黃苗子是她的舅父。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.330329,lng:114.163192}},{type:"文藝刊物及組織",publication:"淺水灣(2)——《香港時報》副刊《淺水灣》",description:`「劉以鬯主編之《香港時報‧淺水灣》（1960.02.15-1962.06.30），是香港文學史上重要的報章文藝副刊之一。劉以鬯乃香港著名作家及資深文藝報刊編輯，他主編《香港時報．淺水灣》時期，將該版改為純文藝副刊，大量刊登外國文藝思潮的介紹、西方文學理論及翻譯作品，以及討論香港文化的文章。今天回顧，該副刊不但在西方現代文學思潮的譯介方面具重要的作用，而且為香港文壇培育了一批本地成長的年輕作者，如西西、崑南、李英豪等，其影響甚至及於當時的台灣文壇。」
(摘自香港中文大學香港文學資料庫)`,styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.238262,lng:114.1963504}},{type:"文藝刊物及組織",publication:"平安大樓——《文壇》會址",description:"",styleUrl:"#icon-1899-7CB342-nodesc",coordinate:{lat:22.3087914,lng:114.1710318}},{type:"文藝刊物及組織",publication:"榮華台——《詩朵》會址",description:"",styleUrl:"#icon-1899-7CB342-nodesc",coordinate:{lat:22.2841491,lng:114.1466019}},{type:"文藝刊物及組織",publication:"灣仔青文書屋舊址(1)",description:`「電車站好像移前了
電車也不是原來的樣子
鞋店沒有一隻鞋
跨出行人道的石壆
快餐店一直沒有翻新過
熱狗失去蕃茄和醬汁
光營養不良的腸仔夾在
以漢堡包權充的兩片
冷靜的圓包中
鐵閘是拒絕你上樓的臉
管理員半枚頭顱
釘在日光燈的牆上
窗格不框文字
再沒有書本跌下來
打中一個詩人
夜像油污滲落柏油路下
橫街颱出一聲厲叫
神經線沒有跳動
電線杆是一管針
甚麼？
沒有甚麼——
詩人們都好好
康復了」

——鍾國強〈昨夜，走過曾經是青文書屋的地方〉(2012年)，載《開在馬路上的雨傘》，頁2-3`,styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2775,lng:114.1764363}},{type:"文藝刊物及組織",publication:"《青年樂園》編輯部",description:"",styleUrl:"#icon-1899-7CB342-nodesc",coordinate:{lat:22.2801385,lng:114.1818111}},{type:"文藝刊物及組織",publication:"譚臣道——香港作家聯會創會會址",description:`「那個中午，沒到午飯時間，經過『泰國人海南雞飯』餐廳，裡面只有一個男客。其實，上班日子這裡的午餐生意鼎盛。倒是譚臣道的茶餐廳，下午茶時間也熱鬧，沙律咖喱角咖啡，普普通通但實際。我遊目四顧，一不小心，竟遭遇對面大廈，香港作家聯會1988年初創時租用的會所就設在那裡，有個偌大的水吧，還有沙發椅，可以讓人喝咖啡吃小點。離去後多年我沒有再回顧，當中的人事變遷，早已無法一一細究了！我只記得，有一晚，秦嶺雪在會前請韓國詩人許世旭在那附近的悅香酒樓晚飯，一晃眼，『高麗棒子』竟也已告別人間。那酒樓依在，在香港，可說是小小奇蹟，只是人事有沒有變遷，從表面我實在無法看得出來。就像走過軒尼詩道的集成中心，抬頭竟看見上方燈火輝煌，哦，是『麥當勞』呀。近三十年前，我在那裡吃過早餐，是為了去看攝影作品吧。沒想到那麼久了，在地產霸權當道的當下，肯定是頻頻加租，但它依然挺立在那裡，不能不令人驚異。莫非它本身是業主，不必有不斷被加租的困擾？」

——摘錄自陶然〈走在灣仔街巷〉，載《香港文學》 2013年6月號總第342期，頁54`,styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2772463,lng:114.1752175}},{type:"文藝刊物及組織",publication:"廈門街——香港上海書局",description:`「其實，灣仔有許多橫巷，有許多茶餐廳、水果檔、衣服檔等等，如春園街、太原街、汕頭街、石水渠街、船街等等。汕頭街全長約一百米，平坦直路，它是連結皇后大道東和莊士敦道的橫街，東面是廈門街，西面是大王東街，在1900年代初，莊士敦道建成電車路之前，汕頭街一帶是碼頭及倉庫，當年以貨物運往南中國口岸而出名。這條街上多為舊樓，不少已在二戰後重建。但如今走在那裡，依然感覺得到舊樓風貌。廈門街在莊士敦道建成電車路之前，是碼頭和倉庫所在。如今南端有兩間印刷公司，隱約記得，我的第一本長篇小說《追尋》，由香港上海書局出版，書剛印出，還沒有發行，但我要應花城出版社之邀，前往廣州參加文學座談會，老總趙克先生便請我到這裡先取出幾本應急。那情景依然歷歷在目，但那已是遙遠塵封的歲月了！」

——摘錄自陶然〈走在灣仔街巷〉，載《香港文學》 2013年6月號總第342期，頁55`,styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2754543,lng:114.171905}},{type:"文藝刊物及組織",publication:"跑馬地(4)——《中國學生周報》「快活谷」版",description:`「現在的『快活谷』大槪是較前更刻薄的（雖然路線沒有改變），廣東話尤多。當年張隨初用廣東話，是一種大膽的革命，而我之大用廣東話，則是承先的放肆。但我們都覺得這種嘗試是對的：有時『話裏有話』，用廣東話的確更傳神，更含蓄，更『衰鬼』，也更『抵死』。這裏本來就是香港，誰叫我們的報紙旣不能銷台灣，又不能銷大陸呢？而學生周報，有十二版之多，只在『快活谷』（全港獨一無二的瘋狂版）裏放進一點本地語言，當亦無傷大雅吧，只要讀者記住這一版是『快活谷』，就成了。」

——摘錄自陸離〈快活谷‧張隨‧我〉，載《中國學生周報》 第627期，第3版`,styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2722228,lng:114.1837604}},{type:"文藝刊物及組織",publication:"藍馬音樂書屋舊址",description:`「錯誤不在江南
在恆變中的銅鑼灣
差不多是三十年前的事
你想用音樂串起詩
但沒多久
文字卻踐踏在一個銅板的腳下

雨落的時候
那人就在簷前讀自己的寂寞
和冰冷的感覺
在浪漫與現實之間
最終還是選擇了放逐
沉思的那刻
沒有人看見他的悲傷

二十年後
闖盪江湖回來的人
在密室內展示他背上的刀疤
並將生命劃上長長的深痛
在回憶裏吿訴你
隔着一條馬路
隔着一個世界-
他派遣那個曾經同睡的女子
來到你的面前
用陌生的眼神
買了一本你的散文集

每一個段落
回憶時都有痛割的感覺
很多散失的印象
像一幅幅未及修補的舊照
擺放在博物館內任人
覽閲隨意的冷漠
和突發的熱熾
然後用慢鏡緩緩推出
一片遙遠無涯的荒涼
瞪着一個個夢醒的破滅
誰還依舊驚嘆？
誰又依依不捨？
城市經過多次變臉以後
再也沒有人可以找到認知的地方

關於時間
在流逝間已經不再重要

後記：三十年前於銅鑼灣開設藍馬音樂書屋，時有文友聚集流連。某日重遇故友，憶述當年。恰巧拙作剛出版，故友有感彼此途殊，遂囑其同居女友前來買書細閲，足證他仍未忘藍馬文社之情誼……」

——路雅〈藍馬店外〉，載《路雅詩選》，頁109-111`,styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2793693,lng:114.1889995}},{type:"地景書寫",publication:"宋皇臺(1)——蘇澤東《宋臺秋唱》",description:"",styleUrl:"#icon-1899-E65100-nodesc",coordinate:{lat:22.3250724,lng:114.1893304}},{type:"地景書寫",publication:"北角——〈維多利亞市北角〉",description:"〈維多利亞市北角〉（選自陳智德主編《香港文學大系1919-1949．新詩卷》（香港：商務印書館，2014）；原刊一九三四年十二月二十九日的《南華日報‧勁草》",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2884683,lng:114.192803}},{type:"地景書寫",publication:"蝴蝶谷——〈香港的蝴蝶〉",description:"〈香港的蝴蝶〉（選自樊善標主編《香港文學大系1950-1969．散文卷一》（香港：商務印書館，2021）；原載葉靈鳳（署名葉林豐）《香港方物志》，香港：中華書局，1958年11月）",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3435341,lng:114.1413656}},{type:"地景書寫",publication:"灣仔——兩部作品",description:"黃碧雲《烈佬傳》、謝晨光〈加藤洋食店〉（選自謝曉虹編《香港文學大系1919-1949．小說卷一》（香港：商務印書館，2015）；原載1927年5月1日上海《幻洲》第1卷第11期）",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.276022,lng:114.1751471}},{type:"地景書寫",publication:"大埔——Mr. Pizza《那夜凌晨，我坐上了旺角開往大埔的紅van》",description:"",styleUrl:"#icon-1899-E65100-nodesc",coordinate:{lat:22.4423282,lng:114.165521}},{type:"地景書寫",publication:"灣仔——馬家輝《龍頭鳳尾》",description:"",styleUrl:"#icon-1899-E65100-nodesc",coordinate:{lat:22.276022,lng:114.1751471}},{type:"地景書寫",publication:"九龍城寨舊址——多部作品",description:"馬家輝《鴛鴦六七四》、黃谷柳《蝦球傳》（第一部春風秋雨）（選自黃念欣主編《香港文學大系1919-1949．小說卷一》（香港：商務印書館，2015）、林蔭《九龍城寨煙雲》",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.331559,lng:114.1915623}},{type:"地景書寫",publication:"荃灣——馬國明〈荃灣的童年〉",description:"",styleUrl:"#icon-1899-E65100-nodesc",coordinate:{lat:22.3699122,lng:114.1144306}},{type:"地景書寫",publication:"土瓜灣——西西多部作品",description:"西西《美麗大廈》、〈土瓜灣敘事〉、〈土瓜灣〉、〈書寫的人〉、〈某名校小一收生面試現場〉、〈土瓜灣道〉",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3173373,lng:114.1879691}},{type:"地景書寫",publication:"北角——馬朗〈北角之夜〉",description:`「最後一列的電車落寞地駛過後 
遠遠交叉路口的小紅燈熄了 
但是一絮一絮濡濕了的凝固的霓虹 
沾染了眼和眼之間朦朧的視覺」

——摘錄自馬朗〈北角之夜〉，原載《文藝新潮》第四期`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2908508,lng:114.1949595}},{type:"地景書寫",publication:"土瓜灣海心島——謝晨光〈貞彌〉",description:"謝晨光〈貞彌〉，收錄於謝晨光：《貞彌》，香港：受匡出版部，1929",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3149168,lng:114.1916105}},{type:"地景書寫",publication:"調景嶺——多部作品",description:"林蔭《日落調景嶺》、趙滋蕃《半下流社會》、張一帆《春到調景嶺》、傑克《珊瑚島之夢》",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3039588,lng:114.2522482}},{type:"地景書寫",publication:"皇后像廣場(1)——鷗外鷗〈和平的礎石〉",description:"鷗外鷗〈和平的礎石〉（選自陳智德主編《香港文學大系1919-1949．新詩卷》（香港：商務印書館，2014）；原刊一九三九年二月香港《大地畫報》第三期。總題〈詩． 香港〉）",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2810802,lng:114.1598129}},{type:"地景書寫",publication:"淺水灣(1)——張愛玲〈傾城之戀〉",description:"影灣園",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2382804,lng:114.195663}},{type:"地景書寫",publication:"沙田(1)——上官寶倫《長夜難眠》",description:`「有一次，在禮拜天，他們一起到郊外去旅行，到得沙田經過一座農塲，農塲的主人正拿着勢子在整理一株木瓜樹，阮又文是一個學農科的人，他對這一切特別感到興趣，甚至於他還動手去帮農塲的主人工作，徐淡寧瞧了他這種專於所學的精神，極爲欽佩。」

——摘錄自上官寶倫《長夜難眠》，頁５`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3771304,lng:114.1974398}},{type:"地景書寫",publication:"皇后碼頭舊址(1)——羅秋蘋《情淚心聲》",description:`「「這時，我隔海遠眺，半山區高樓大厦。電燈已經吐放着光明，這燦爛奪目的燈光，織成了一幅夜空奇景，我踉蹌的向皇后碼頭方向跛着，一切的市聲已經遠遠的離開了我，使我有一點茫然的感受，好像摸進了夢的拱門似的，我感到自己的身軀輕得很，被晚風一吹，一點重量都沒有。
我茫然的走着，不覺就走近皇后碼頭了，陡然，我發現一個形容枯福衣衫褫褸的中年男子，躺在碼頭的石櫈上，他一動也不動的仰臥在那裡。他的存在，使我感到非常驚訝，我當時懷疑這人可能死了。
『老孟！是你嗎？』當我將要轉身離開皇后碼頭的時候，一個熟悉而微弱的聲音在我的耳邊响起來了。我馬上怔住了，本能的回過身去，看到那如同一具僵屍樣的漢子掙扎着坐起來了。我恍忽的向他走去，並且拼命的搜尋着自己的殘舊的記憶，最後我向他端詳了一會，却仍然想不出他是誰？
『我姓高……』他有氣無力的說。
『啊！是你……』他低啞的聲音喚起了我的記憶，這人叫高伯文，本來是上海一家銀行的董事長，當年在上海商塲中，是一個炙手可熱的人物，交際塲中，頗有名氣，爲了博得一個交際花的靑味，一擲數萬美金，毫無吝色。
『我已兩天沒吃飯了，你身邊方便嗎？』高伯文的話，打斷了我的思潮。
這些日子來的磨折，使我對窮苦的朋友特別同情，於是我拼命的搜索着自己的口袋，我的全部身家，一共是三元一角。
『很不凑巧，這裡只有三元一角，你都拿去吧？』我隨手遞給他說。他用顫抖的手，把這些紙幣接了過去，一句話也沒有說，就踉蹌的拖着瘦長的影子，像幽靈似的消失在黑暗中了。高伯文的遭遇，使我有很多的感觸，我面對浩瀚的大海，冥想着我所處的這個世界，無疑的我們這些人是迷失了的一代，高伯文就是我的一面鏡子，聽說：他剛來香港的時候，擁有現欵百餘萬，並且把銀行復業，可是不到兩年，竟面目全非了，淪落到這步田地。這活生生的現實，給我的刺激太大了！明天，我會不會和高伯文走上同一的道路呢？高伯文的陰影，使我底心頭濛上了一層暗影；生活、家庭、愛情——在我的腦海中變了一片空白。我覺得我眼前的景象越來越模糊，只覺得天旋地轉，週圍的事物，黑漆一片，連腦袋也黑甸甸的沉重起來了。」

——摘錄自羅秋蘋《情淚心聲》，頁16`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.282886,lng:114.162007}},{type:"地景書寫",publication:"必列者士街(1)——望雲《人海淚痕》",description:`「這小島每隔十年就來一次人口調查，那一條街住上幾多男女老少，年歲籍貫，操什麼行業，都有詳細的紀錄。如果你有個機會見到這些紀錄，把關於必列者士街的揭開看看。你自會驚異那兒住的人口眾多，住戶多是挑瓜賣菜的小販，木匠鐵工，大家日出而作，日入而息，睇手服足，過着清苦生活。要是沒有什麼變化還好，假如有個不測，如疾病失業之類，那裏有一條橋街，也就成了那些痛苦人家的奈何橋。」

——選自黃仲鳴主編《香港文學大系1919-1949．通俗文學卷》（香港：商務印書館，2014）`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2835875,lng:114.1500479}},{type:"地景書寫",publication:"鯉魚門——舒巷城〈鯉魚門的霧〉(1951年)",description:"（選自馮偉才主編《香港文學大系1950-1969．小說卷一》（香港：商務印書館，2021）；原刊1951年5月2日香港《天底下》第62期，署名「秦可」）",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2848099,lng:114.2377354}},{type:"地景書寫",publication:"天星碼頭(1)——張續良《蘇茜黃的世界》",description:`「羅勃是在往灣仔的佐頓道碼頭三等候船室內，因碰撞了她一下而和她認識的。現在，他和她正在小輪的欄杆邊站住，下層的風很大。她站在前面，他在後面，離得很近。迎面一陣風吹過，虹对頭馬尾裝的頭髪忽然飄到了他的面上和鼻上。他的鼻子一癢，禁不住張口打了個噴嚏。那女的回過頭來，想笑；但終於掏出小手帕，掩住了欲笑的小嘴。「你也是過海嗎？ 」羅勃伸手揑揑鼻子，吸了口氣。那女的望望他，想了想，終於說：「是的，你呢？ 」「我就住在灣仔。」他們倆的話盒子就這樣打開。小輪迅速地朝前駛去，越過了九龍倉，越過了天星碼頭，然後越過停在海面的幾艘美艦。她望望眼前的那些景物後，忽然回過頭來瞥了他一眼說：「你是不是一個美國水兵？ 」「美國水兵？哦！不是的。」她似乎有點不信，歇了一會，她接下去說： 「你眞的不是嗎？ 」「眞的不是。」他老老實實地回答。「好吧！我們就談談也沒關係。」「那正是我所希望的事，」他笑起來說： 「但是，爲什麼你剛才要問我是不是一個美國水兵？ 」他用手指了指剛過完的美艦，「難道你以爲是美國人都從那上面來的嗎？ 」「不，」她想了想說：「因爲，我爸爸不喜歡我跟水兵來往。」」

——摘錄自張續良《蘇茜黃的世界》`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.293902,lng:114.1686407}},{type:"地景書寫",publication:"修頓球場(1)——楊天成《自作多情》",description:`「接着又想到王玉那豐盈肉感的身體，甜蜜的小嘴，以後便可以爲自己所有，這點是天地間第一樂事！ 越想越高興，幾乎手舞足蹈，猛然聽到人聲歡呼，吃了一驚，他還以爲是別人在替他慶祝戀愛成功！抬頭看時，原來不知不覺已經由中環走到修頓球塲來了，那歡呼的是在替磁了一球的小型球隊喝釆。定一定神，肚子覺得有些，忽忽上了電車，趕回筲箕灣那家低級茶樓，江惇坐在那裡， 一盤牛脯飯已經吃完，他急忙也叫了一盤，便興高釆烈地說。「小江，我有好消息吿訴你。」「中了馬票？ 」江惇冷冷地問。「你這個財迷！ 」他罵了一句： 「我是說我有了正式女友了！ 」」

——摘錄自楊天成《自作多情》，頁４`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2768189,lng:114.1720945}},{type:"地景書寫",publication:"九龍城碼頭——鄭慧《織女痴情》",description:`「他想，完了，失去了小春，生命就等於虛無飄渺的一片，活着還有甚慶意義？倒不如死去了样些。死，唔，他一想到了這，思想就跟蔻活動起來，對的，要免除入世之間的痛苦，輦簡捷的辦法莫如是死，生命旣然只會給人煩惱，又何必戀戀於偸生呢？他這時是走到了土瓜灣譚公道的一帶，想起了再過幾條街之遙，便可以抵達近年來新建的九龍城碼頭，那裏白天的行人已不多，晚上更爲寂靜，假使在那裡找個地方悄悄地投下海水去，可能不會被人發覺。這眞是最簡單便捷的死法之一，自己向來不會游水，祇要下着决心朝下邊的海水一跳，那不是甚麽可以完了？想到這裏，心裡便打定了主意，加緊脚步向九龍城碼頭走過來。碼頭上果然悄靜無比，隔幾丈地方，也幾乎室不到一個入，祇有耀目的路燈，却在那裡發出了妻冷之光。亦澄慢慢地走到了碼頭的左翼，那裏經常空置着，並沒有船隻泊岸，夜色逐漸深沉，到這裡來乘凉的人都已逐漸散去，祇剩下一兩個流浪者在甬道的盡頭處臥地睡熟。亦澄想，這正好， 一切都符合他的理想中的環境尋死的環境。」

——摘錄自鄭慧《織女痴情》`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.317811,lng:114.194364}},{type:"地景書寫",publication:"太平山(1)——路易士《鄰家女孩》",description:`「我以爲這時候山頂上一定沒有人，黑・漆麻烏的，沒有什麼意思，不料這天例外；山頂餐室雖然已經打炜，環山的小路上和車站附近，盡是一對一對的情人，路邊那些長椅子也都給情人們佔滿了。-「香港這地方實在太小！ 」她說。「看起來，咱們只有在草地上坐會兒了。」「那還是過去幾步，找一處石階，坐着看底下的夜景好。」「對了，過去幾步。--於是我們在環山小路的一個念口附近找到一處石階，坐了下來，正好望得見整個九龍半島，以及青衣的一部分。九龍半島上萬家燈火，遠遠的看去，很像夏季裡天上的繁星，但是比繁星來得更親切；本島上銀行區的那兩幢大厦則不行，遠遠的看去像兩個小盒子豎在那裡。「你瞧，」她忽然指着一處地方說。「這兒是尖沙咀，那些密密層層的就是新建築的所謂住宅了。」「是啊'層樓上住着幾戶人家，有些一個窗口裡就是一個家庭— 」「而每個家庭裡都有快活和煩惱、喜慶和是非。可是從這兒望下去，只是那麼黑壓壓的一片。」「是啊，從飛機看下去，整個城市都只是黑壓壓的一片而已。」我說。」

——摘錄自路易士《鄰家女孩》，頁３`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.274295,lng:114.1446308}},{type:"地景書寫",publication:"中環美心餐廳——上官牧《二度蜜月》",description:`「你不知道，香港中環的中午市面是很繁榮的。寫字間的女職員全出來吃飯了，各處西餐館都可以看到漂亮的小姐，就像選美會-樣。你應該看看的。」邵潔芬聽他這麽說後，心想旣然中環有那麼多漂亮女人，自己怎能示弱，趕緊換耳環、皮鞋和皮包，這才出門。陳柏南在渡海輪上，對太太說：「你歡不歡喜香港。」太太抬頭看了看對面沐在陽光下的靑山，心裡想說，香港美極了，可是還有點氣陳柏南，僅道：「還好。」・「如果大廈建成，恐怕我會在這裡做事。」。。。上了碼頭。走上中環的街道時，邵潔芬深感陳柏南的話沒有錯，到了約會吃飯的「美心餐廳」，她更覺得來不及看那些打扮得花枝招展的寫字間小姐們的衣飾和髮式，她想，幸虧自己出門時換了樣子較新的耳環和皮鞋、手袋。不然就顯得太過時了。

——摘錄自上官牧《二度蜜月》，頁８`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.28237,lng:114.161759}},{type:"地景書寫",publication:"彌敦道(2)——依達《女歌手私記》",description:`「唱了茶舞偸閒在彌敦道逛逛順便買了兩對新鞋。我看中一對鞋，是剛從意大利運來的， 一看價錢嚇了一大跳，要三百六十幾元，祇能伸伸舌頭了。（依達《女歌手私記》２）
格魯利今晚叫我提前早走，陪他出去。後來他竟帶我逛彌敦道，遊公司。原來他說聖誕節來了，他問我要些什麽，他買給我。我以前一定會爲此高興，但是現在我把一切都看淡了，我說我不要。格魯利很詫異，結果還是買了四套很貴的料子送給我。我知道他眞心喜歡我，他留心我總是愛買料子。」（依達《女歌手私記》１０）`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3109155,lng:114.1710157}},{type:"地景書寫",publication:"中環(1)——周白蘋《牛精良大亂中環》",description:`周白蘋《牛精良大亂中環》「頭集」(節錄)，載（黃仲鳴主編《香港文學大系1919-1949．通俗文學卷》（香港：商務印書館，2014）
「戰後店戶，多不開門，皇后大道中，代興者乃為擺街之攤位，罐頭食品，應有盡有，整個香港，都在糧食恐慌中，人人爭購買食品，除果腹之物外，無一商品有市者，亦變亂後之常有現象，不過以香港為歷時最長耳。廖教頭與深清買得罐頭食品一箱，由廖教頭荷于肩上，由石板街上堅道，打算由此折而向西，送往醫院，不料攀登石級上堅道之際，忽有大漢四名，攔住去路，喝聲「行埋巷仔搜身！」」 (選自 周白蘋《牛精良大亂中環》「頭集」(節錄)，載（黃仲鳴主編《香港文學大系1919-1949．通俗文學卷》（香港：商務印書館，2014）`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2799907,lng:114.1587983}},{type:"地景書寫",publication:"跑馬地(2)——劉以鬯《藍色星期六》",description:`「回到家裡，我似乎遽爾失去了思想的方法，獨自一個人望着靜靜的馬塲。我的家座落在黃泥涌道畔，站立在騎樓上便可俯瞰整個馬塲。在不舉行賽馬的日子，如果是白晝，這馬塲的草地上總會有許多運動員，穿着紅紅綠綠的運動衣，奔來奔去踢足球。可是太陽落山後，這偌大的馬塲就頓時寂寥下來了。現在華燈初上，面對着這靜悄悄的馬塲，我的思慮機構遲鈍到極點。
...
出版社方面需要的是一本以馬塲爲背景的戀愛故事；而不是一本以馬塲爲背景的鬼故事。，因此我不得不另覓題材。老張一再打電話來，催我儘速殺靑這篇「藍色星期六」，我則每以苦無題材爲答。「相信馬塲裡有的是動人的故事。」他說。！ 「我同意你的看法，」我說，「然而道是可遇而不可求的。沒有誰可以在馬塲找到故事，祇可以在馬塲遇到故事。」「可是，你的小說已經排定了出版日期。」「這一次，恐怕不能如期繳卷了。」他頓一頓說：「這樣罷，你離開香港已四年，不妨到馬塲去看看，也許現塲的氣氛會引起你的烟士披里純。不過，千萬不要下注。」我接受了他的勸吿，决定到馬塲去作-個不下注的旁觀者。我希望因此而獲得一些啓示。」

——摘錄自劉以鬯《藍色星期六》`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.27227,lng:114.1807094}},{type:"地景書寫",publication:"維多利亞公園(1)——南宮秋《心願》",description:`「『我們可以返回市區，但並不一定我要回家，我可以和妳到好玩的地方去。』他説。『好玩的地方？ 』『比如看一塲電影，到夜總會去跳舞，或者到維多利亞公園去散步。』他此時並不覺得自己有什麼悲哀，反而要想辦法使劉婉娟快樂。「我們就去看電影吧，反正你就快要到澳門了。」劉婉娟點頭說。於是，兩人又從郊區返回市區。到一間上流的電影院去，購票入塲。看完了電影之後，挽着手出來，李文祺問道：「到夜總會去時間還早，我們應該到那裡去呢？ 」「你不是要返家的嗎？ 」劉婉娟有意這樣說。「我不許妳再說這些話。」李文祺在她的玉臂上輕輕的一揑：「妳說，到哪裡去？ 」「到維多利亞公園吧！ 」她嬌笑，笑得很美。維多利亞公園是新闢不久的新公園，有很多尙未長大的小樹，有疏落的燈，雙雙的情侶在燈走過，影子拖得很長。」

——摘錄自南宮秋《心願》，頁6`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2818502,lng:114.1877206}},{type:"地景書寫",publication:"九龍三角公園——王俊《再生緣》",description:`「九龍塘靠雅息士道附近，有一個三角公園，公園裡有亭子，週圍有坐椅，有麗暢架，跳板……雖沒有奇花異景，可是古木參天，濃蔭蔽日，雅靜極了。這地方白天可供人們休息， 一到晚上，就是戀愛的温床，多少情侶，都擠在小小的公園裡談倩說愛，縱所欲爲。多少恩愛夫妻都是在這裡孕育而成的。鳳仙有時候也帶起小孩子在這裡玩一玩。」

摘錄自王俊《再生緣》，頁5`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3284956,lng:114.1772884}},{type:"地景書寫",publication:"九龍城(2)——紫琴《何處不相逢》",description:`「九龍城是個龍蛇混雜的地方，那裡的居民，有的是過去王孫公子，有的是曾經走遍大江南北的義士，打手保鏢，三山五岳的人馬，式式俱全，算是一個十分複雜而環境特殊的地方。陳才記的主人陳才，是一個正式屠狗之輩，他靠着屠狗爲活，五六年來都是這一套。他所以能够在這個複雜的地方站得住脚，並非靠着什麼特殊勢力的黑社會，而是他自己的一套好人緣，仗義疏財，有求必應。」

——摘錄自紫琴《何處不相逢》，頁4`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3294991,lng:114.1902362}},{type:"地景書寫",publication:"九龍仔——素薇《恨海難填》",description:`「到九龍仔木屋區去蹓躂，她還是第一次到木屋區裡來，這時已經是下午，酷暑迫人，丁嘉蓮滿身是汗，她的服裝是這般名貴，粉紅色的尼龍旗袍，配上紅色的鞋，和紅色的手袋，似一個貴婦人般的丁嘉蓮，走進這木屋區裡去，就使住在木屋裡的人，都對她投以奇異的目光。」

——摘錄自素薇《恨海難填》，頁14`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3340846,lng:114.1814045}},{type:"地景書寫",publication:"薄扶林水塘——杜芝蘭《情枷》",description:`「不久，暮色四合，小鳥兒早就躱在窠裡，吱吱喳喳的叫着，期待牠們的娘回來。於是，離林的鳥都紛紛歸巢了。霧靄逐漸從遠處侵來，通到薄扶林水塘的山徑，直到看不到那裡是有一條路的存在。環繞四週的海水，也呈現一片迷茫。祇是太平山下的燈色，迅速地戰勝了黑夜，所有的霓虹光管，照耀得美麗輝煌，形成一顆東方之珠。」

——摘錄自杜芝蘭《情枷》，頁16`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2653775,lng:114.13745}},{type:"地景書寫",publication:"大欖涌水塘——楊天成《難兄難弟》",description:`「你看，我們可以坐在這裡慢慢喝茶，就是一直喝到打烊也不會有人趕我們。而且又有瓜子使胃不至太空閒， 一面想想心事，談談天，不必管西柏林如何緊張，大欖涌水塘爲何剛修好就壞，多麼自在！杜爾斯，赫魯曉夫也沒我們舒服，我敢說他們這一生就不曾吃過瓜子，你信不？ 」「他們也沒坐過這樣的茶館！ 」朱魯對那汚糟的週圍看看補充一句。

——摘錄自楊天成《難兄難弟》，頁8`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3842445,lng:114.0292614}},{type:"地景書寫",publication:"錦田——古卓侖《香江曲》",description:"「穿山忽鑿防空洞，列戍縱橫貫錦田。」",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.440058,lng:114.0650077}},{type:"地景書寫",publication:"廟街(1)——也斯《剪紙》",description:`「廟街也沒有過去那麼熱鬧了。一大幅黑暗中， 這裏那裏一盞燈， 照着一個個圍滿人的攤子。 有人表演神打；硬挺挺挨了十來刀， 插滿身上， 還沒有倒下， 像一頭刺蜩那樣站在那兒。 有人吞了 一把長劍， 從腳趾那兒把它拔出來。 有人讓毒蛇咬了 一口， 全身發黑，一敷過膏藥， 立即就跳起來， 倒咬蛇兒一口， 這可輪到牠全身發紅， 頭兒一擺， 暈死過去了。 圍觀的觀眾卻多半冷酷無情， 對人家冒性命危險的表演也不鼓掌， 反而冷冷地在那兒尋找破綻。」

——摘錄自也斯《剪紙》`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3079132,lng:114.1703763}},{type:"地景書寫",publication:"合和中心——陳寶珍《找房子》",description:`「合和中心——矗立在市中心的圓柱形建築物。在貝聿銘設計的中國銀行未出現之前，它就是一座明顯的里程碑，顯示這城市又向高空跨進了一大步。小甲蟲一般沿柱身往上爬的升降機內，幾個觀光客指點着落地窗外越縮越小的建築羣，讚嘆着。
從六十多層高往外望，密密匝匝的房子都小得彷彿可以一手握往。一方方紀念碑似的大厦之間散着小火柴匣般的四層舊樓是進化遺留下來的痕跡，給予想知道城市舊貌的人留下想象的綫索。」

——摘錄自陳寶珍《找房子》，頁122`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2746386,lng:114.1717253}},{type:"地景書寫",publication:"蘭桂坊(2)——西西《哀悼乳房》",description:`「把拱廊當作橋道的人走過去了，如果你是遊客，該上［摩羅］街去尋找骨董；如果你愛熱鬧愛獵奇，可以上蘭桂坊去。啊，蘭桂坊該在晚上去。吃午餐的人開始在盤子中切割，等朋友的人站在噴水池的旁邊。噴水池今天沒有開放，旣沒有水柱，也沒有燈盞。今天的廣場多麼靜寂，汽車展覽、午間音樂一樣也沒有，只有一些人，緩慢地繞過商店的窗櫥。玻璃眞是人類最偉大的發明，有了玻璃，人們可以和牆外的世界溝通，互相連貫，卻又保持恰當的距離。人們總是旣想接觸，又要自衞。有了玻璃，就有了玻璃窗櫥，有了玻璃窗櫥，拱廊街變得更富魅力。每一個窗櫥都是一盞阿拉丁神燈，不斷吐出令你驚訝、刺激你心的東西。」

——摘錄自西西《哀悼乳房》，頁159`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2807892,lng:114.1557002}},{type:"地景書寫",publication:"大會堂(1)——綠騎士〈禮物〉",description:`「那次一起去看一個小國家駐港領事館主辦的電影招待會。放映前人家播起了國歌，大家便站了起來。大會堂的電影院很小，場面也不熱鬧?那首國歌並不動聽的調子沙啞地播奏着。但卻是抹不去的倔强，自豪與莊嚴。
軒遠問：『我們有兩首國歌，你會唱哪一首？』他的唇角扭曲着，大概是想笑着説的。
出來的時候，踏着大堂軟厚的地氈。經過亨利•摩爾那三座雕像。軒遠猝然説：『他們立得很久很倦的了。但又不能發奮起來做甚麼，又不能索性放任倒下，也許安逸無奈地立着也是快樂的。』他總是那樣的，雙手插在袋中一直默默地走着，猛地揚起頭來，突然得嚇人一跳。他也不看人，望得遠遠的『唏，若瑩，你瞪着這串玉珠子發甚麼呆？來啊，你説這個胸針怎麼樣？』欣欣碰碰她説。若瑩茫然地望向這株笑依依的紫荆花。忽然，像無意中看到自己一張舊照片：多麼熟悉啊！自己也不是這樣的嗎？但卻總揮不去那首沙啞不動聽的國歌，那無名小國的尊嚴。」

——摘錄自綠騎士〈禮物〉，載《香港短篇小說選（六十年代）》，頁301`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2824449,lng:114.1608638}},{type:"地景書寫",publication:"尖沙咀站——秦西寧〈第一次〉",description:`「到了尖沙咀彌敦道的一個站上，我跟着他下車。那小伙子是在一家戲院附近一家百貨商店裏當賣貨員的。直到再也看不見他了，我才在馬路上兜了一會，然後坐渡船回香港那邊去。即使在渡船上，我腦子裏還是想着那姓張的和那宗買賣。人家稱讚香港的風景迷人，可我甚麼迷人的風景也看不見哩。船泊岸，我離開了碼頭，決不定到哪兒去。大康叫我下午兩點鐘打電話給他。但現在時間還早得很呢。我信步走到大會堂前面海濱的一張長椅上坐下。我忽然感到無聊。從口袋裏掏出包香煙來，看看只剩兩根，我便又把它塞回口袋裏去。我實在忍得好難受。——越無聊就越心煩，越心煩就越想抽煙。我從澳門到香港來，兩個多月了，工作還是没有着落。也許我來得不是時候，許多建築地盤停工了，我連一份雜工也找不到。我是没資格抽甚麼煙的。但末了，我還是點上火柴抽它一根。
我望着九龍那邊的重重疊疊的大廈噴了口煙，心想一連下了兩天雨，今天陽光露面了。——我好像這一下才看見今天的陽光似的。」

——摘錄自秦西寧（舒巷城）〈第一次〉，載《香港短篇小說選（六十年代）》，頁204`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2975719,lng:114.1722049}},{type:"地景書寫",publication:"紅磡——劉以鬯《對倒》",description:`「淳于白常常睜大眼睛做夢，見到的人和物與展現在眼前的完全不同。此刻，他的視線雖然落在隧道的黃色牆壁上，見到的卻是缺乏現代感的『思豪酒店』。站在『思豪酒店』的騎樓上，可以看見雪廠街與木造的渡海小輪碼頭。那木造的渡海小輪碼頭與『思豪酒店』一樣，都不存在了。淳于白記得清清楚楚：繁忙時間的人龍會從碼頭排到馬路上。此外，在『思豪酒店』的郵展上，他第一次見到『紅印花加蓋小字壹圓票』。
這些都是二十年前的事。二十年前的紅磡，像一個剛進城的鄉下大姑娘。現在，紅磡像一個新潮味十足的都市女性。現在，巴士已駛出隧道。駛出隧道後就是九龍。當巴士由紅磡朝佐頓道駛去時，淳于白忍不住笑了。他是沒有必要到九龍的；卻搭乘巴士到九龍來了。這是一件毫無意義的事情。他常常做一些連自己也得不到解釋的事情。當他對自己的行為得不到解釋時，總會牽牽嘴角展顏微笑。」

——摘錄自劉以鬯《對倒》，頁68`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3055658,lng:114.1887233}},{type:"地景書寫",publication:"七姊妹道(1)——古卓侖《香江曲》",description:`「相約公餘赴水鄕，北角泅棚連百座」(註：「泅棚」指的是1920及30年代之北角七姊妹道泳棚)

——摘錄自古卓侖《香江曲》`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2914499,lng:114.2061044}},{type:"地景書寫",publication:"望夫山——韋然〈夢到沙田〉",description:`「望夫山旁踏我的足印
千多行我心
問那一天再歸返重會舊友
我只想飛返故園
我只想重回到大圍
回望那昔日
似見到小山坡前
紅梅在笑
迷霧裡彷似是見到你
小山坡前紅梅在笑」

——摘錄自民歌〈夢到沙田〉（詞：韋然）`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3594607,lng:114.1798732}},{type:"地景書寫",publication:"南丫島(1)——韋然〈南丫島的故事〉",description:`「南丫島你怎知我心
無言的心有著萬重浪
潮水它也不知你心
如何曉得你是在期待 他的愛
海浪戀愛著 島上的你
他朝舊地 你我重逢
再不感到孤零」

——摘錄自民歌〈南丫島的故事〉（詞：韋然）`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.1992507,lng:114.1323565}},{type:"地景書寫",publication:"渡輪上(2)——馮德基〈昨夜的渡輪上〉",description:`「夜渡欄河再倚 北風我迎頭再遇
動盪如這海 城在兩岸凝神對視
霓虹伴著舞姿 當酒醉如同不知
日後望這方 醉中一切無從抓住

渡輪上 懷念你說生如戰士
披戰衣 滿載清醒再次開始」

——摘錄自民歌〈昨夜的渡輪上〉（詞：馮德基）`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3006723,lng:114.2052097}},{type:"地景書寫",publication:"屈地街——李碧華《胭脂扣》",description:`「小姐——」
 「叫我如花吧。對不起，剛才我走開了一陣。你不要生我的氣呀！」
 「沒關係啦，反正萍水相逢。難道要生氣傷身不成？」我是男人，毫無小氣之權利。
 「你要在哪兒下車？」
 「就在屈地街，填海區那邊。」
 「填海區？」
 「是——」她顧左右而言他，「附近不是有太平戲院嗎？」
 「哦，太平，早拆了。現在是個地盤。隔壁起了一個大大的商場。」
 見她迷惑，便問：
 「大概你很久沒到過那區了吧？」
 「很久了。」
 「在我小時候，太平戲院一天到晚放映陳寶珠的戲。我記得有一齣戲叫做《玉女心》，如果儲齊七張票尾字咭，可以換她一張巨型親筆簽名相的。我幫我姐姐換過。」
 「誰是陳寶珠？」
 「你未看過她的戲嗎？」
 「沒有。我在太平戲院看的不是這些。」
 哼，在扮年輕呢。難道我不洞悉？只要講出什麼明星的名字便可以推測對方是什麼年代的人。她分明在假裝：我看的不是這些……以示比我後期出生。我只覺好笑。

——摘錄自李碧華《胭脂扣》，頁17-18`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2867643,lng:114.1365094}},{type:"地景書寫",publication:"香港中文大學校園——余光中〈沙田山居〉",description:`「海圍着山，山圍着我。沙田山居，峯廻路轉，我的朝朝暮暮，日起日落，月望月朔，全在此中度過，我成了山人。問余何事棲碧山，笑而不答，山已經代我答了。其實山並未回答，是鳥代山答了，是蟲，是松風代山答了。山是禪機深藏的高僧，輕易不開口的。人在樓上倚欄干，山列坐在四面如十八尊羅漢叠羅漢，相看兩不厭。早晨，我攀上佛頭去看日出，黃昏，從聯合書院的文學院一路走回來，家，在半山腰上等我，那地勢，比佛肩要低，卻比佛肚子要高些。這時，山甚麼也不說，只是爭噪的鳥雀洩漏了他愉悅的心境。等到衆鳥棲定，山影茫然，天籟便低沉下去，若斷若續，樹間的歌手才歇下，草間的吟哦又四起。至於山场下面那小小的幽谷，形式和地位都相當於佛的肚臍，深凹之中別有一番諧趣。山谷是一個愛音樂的村女，最喜歡學舌擬聲，可惜太害羞，技巧不很高明。無論是鳥鳴犬吠，或是火車在谷口揚笛路過，她都要學叫一聲，落後半拍，應人的尾音。」

——摘錄自余光中〈沙田山居〉，載《文學的沙田》，頁10`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.419625,lng:114.2067606}},{type:"地景書寫",publication:"香港中文大學新亞書院——黃國彬〈中大六年〉",description:`「那時我還住在港島的西營盤，一星期上課四天。要是上午八時三十分有課，六時就要起牀，吃過早餐就匆匆趕回學校。可是，回校的一段路，到現在我仍十分懷念。那時候，尖沙咀火車站還未拆，香港的生活節奏還沒有現在那麼急，上班總可以坐天星小輪享受維多利亞港的海風。進了尖沙咀火車站，我會看見許多熟悉的面孔。三等車廂裏中大同學的談話聲、笑聲，此刻我還可以聽見。每天早上？我都知道，班上那些同學會在旺角車站上車。沙田車站揚聲器傳來的英語，雖然帶着頗重的廣東口音，但也是我中大經驗的一部分。那時候沙田車站還未改建，一號月臺有幾棵參天的老榕；火車在夏天的淸晨駛過，涼風就從樹隙吹進車窗。有時我坐的是最後一個車廂9到大學站下車後要踏着枕木和碎石走好幾丈路才到月臺。和幾百名同學一起走進車站，走落石階，崇基球場東邊的馬路早已停着八九輛校車等我們。同學們上了車，司機就把他們的笑聲、談話聲一起載到山上。校車駛過臨時宿舍的運動場，駛上寂靜的山坡，接近范克廉樓時轉右，爬上保健處那邊左轉，在宏偉的科學館門前停下讓理科的同學下車，然後直駛大學圖書館，停下，開出不久再轉右，駛過網球場在聯合行政樓前面的馬路停下，最後直駛新亞。同學們在新亞的停車場魚貫下車，登上誠明館寬濶涼洌的石階，輕快、雜沓的脚步就在圖書館門前的廣場響起，敲破山頂早晨的寂靜。」

——摘錄自黃國彬〈中大六年〉，載《文學的沙田》，頁148`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.420989,lng:114.2089572}},{type:"地景書寫",publication:"壹蘋果大樓——李碧華〈尋找十二少〉",description:`「如花，生於1910年（宣統二年庚戌），死於1932年（民國廿一年）。應有110歲了。
當年的荷里活道仍在，樓梯街、文武廟（可以進行莊嚴『斬雞頭、燒黃紙』宣誓儀式的公所）仍在，如花也曾在此為沒有前景的愛情求籤，求神庇祐……
但華僑日報不在了，1995年已停刊。
如花想登一段『尋人啟事』。來的時候，迷迷糊糊，毫無頭緒，只強烈感覺到，第一個遇上的人，可以幫她忙。
『先生，我想登個廣吿——』
她來到蘋果日報三樓，就遇上這個人。
『咦？你怎麼親自來此？可以電郵表格，到銀行入數的。』
他見她一身古老旗袍妝容與時代脱節，還以為是拍廣吿拍片或做訪問的。
『你上面落嚟？』
『不，我是「下面」上嚟的。』
——她的『下面』就是陰間；他卻道：『下面上嚟，你着戲服細細步，都幾攰，有𨋢㗎，使乜行樓梯？』
又問：『登什麼廣吿？』
『尋人：「十二少：老地方等你　如花」。我從小被賣予倚紅樓三家，是紅牌阿姑，十二少是我溫心老契。當年，我們一起吞鴉片殉情……』」

——摘錄自李碧華〈尋找十二少〉，載《尋找十二少》，頁80-82`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.284209,lng:114.274123}},{type:"地景書寫",publication:"筲箕灣(2)——王貽興《無城有愛》",description:`「那時候，每星期我都會期待某一天的來臨，理論上該是星期五，但很多時候我未到那天就已經忍不住了，最厲害一次是在星期一就已經做了。沒辦法，因為太餓了呀。我會在每星期選一天獎勵自己出外吃飯，吃的不外是其他同學吃到作悶的車仔麵或者茶餐廳快餐之類。但我把這當成儀式滿心期待着。中三那年習慣由筲箕灣走到西灣河一家叫海寧的老麵店吃車仔麵。那間店沒有門窗，像待人問津的吉舖，灰濛濛的，裏面矗立着幾條大樑，讓食客與捧着膠碗的夥計都得繞來繞去。樑下擺放幾張木圓桌，圍了幾張摺凳，煮食的灶櫥算是開放式的就在店的最角落。牆上的白瓷磚已經剝落不少了，外面的陽光時常偷偷躲到裏邊的摺凳上，一歇就好幾個小時。」

——摘錄自王貽興《無城有愛》，頁259`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.278746,lng:114.2286476}},{type:"地景書寫",publication:"東坪洲(1)——王良和〈東坪洲上〉",description:`「此刻站在全島的最高點，無定向的寒風吹得我差點立不住腳，像沒有根的植物，必被烈風吹走、迷失。對準這一個方位，把肉眼變成紅外線千里眼，究竟要看甚麼呢？要看清楚對岸那一片淒涼的燈火嗎？還是像警察那樣監視越境的偷渡船，搜索被鲨魚追擊的偷渡客？我茫然了。」

——摘錄自王良和〈東坪洲上〉，載《街市行者》，頁179`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5426604,lng:114.4328562}},{type:"地景書寫",publication:"道風山——王良和〈道風山上〉",description:`「空地上只有四個人坐着休息，還有兩張椅子空着，我將之搬到一棵老樹下，和少蘭坐着看沙田的全景。山頂的風很大，蕭蕭颯颯的吹得樹木不斷打哆嗦。我們把外衣的扣子全扣上，翻起了衣領。山下的世界變得渺小了，沙田中心、瀝源邨長方形的樓廈，像精緻的房屋模型，要不是人家露台晾着的衣服、床單在風中獵獵飄揚，我真以為俯瞰着模型邨。城門河像小渠靜靜地流動，隔着這樣的高度與距離，竟不覺其污染。河畔的沙角邨寧謐而安靜，從前跟少蘭在河邊散步後，總會走過槐花滿地的行人路，把她送回邨裏的家。現在，河邊散步的日子已經愈來愈難得了，我們都吿別了閒適而單純的大學歲月，營營役役於繁忙的工作中，抽不了身。一切都在改變，真有不變的人事嗎？香港也徐徐落入九七倒數的陰影裏。」

——摘錄自王良和〈道風山上〉，載《街市行者》，頁41-42`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3818933,lng:114.1837642}},{type:"地景書寫",publication:"舊北角汽車渡輪碼頭——梁秉鈞〈北角汽車渡海碼頭〉",description:`「他的眼睛黑如煤屑 
沉默在靜靜吐煙 
對岸輪胎廠的火災
冒出漫天裊裊
衆人的煩躁化爲黑雲 

情感節省電力 
我們歌唱的白日將一一熄去 
親近海的肌膚 
油汚上有彩虹 
高樓投影在上面 
總是幌盪不定」

——摘錄自梁秉鈞〈北角汽車渡海碼頭〉，載《雷聲與蟬鳴》，頁99-100`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2935942,lng:114.2033527}},{type:"地景書寫",publication:"羅素街——梁秉鈞〈羅素街〉",description:`「時日越久聲越是沉重 
破缸中的辣菜帶着紅色斑漬 
棕色身體上絲絲血液 
像屋宇一般陳舊下去 
冷風中沉沉幌動一個鐵爐的火
到了街尾
迎面是橫堵的天橋 
那里昔日原是一道水渠」

——摘錄自梁秉鈞〈羅素街〉，載《雷聲與蟬鳴》，頁110`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2788801,lng:114.1826665}},{type:"地景書寫",publication:"摩羅街——梁秉鈞〈拆建中的摩囉街〉",description:`「兩旁一些鋪子已拆去
富有的店家移上一條街道開設新店
另一些留下來在街頭擺賣
堆滿廢鐵和舊木板
街道顯得更狹窄 
也更多灰塵了 
那邊鐵器舖的鎚聲 
一聲緊似一聲」

——摘錄自梁秉鈞〈拆建中的摩囉街〉，載《雷聲與蟬鳴》，頁113`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2848892,lng:114.1496663}},{type:"地景書寫",publication:"新蒲崗——梁秉鈞〈新蒲崗的雨天〉",description:`「在新蒲崗，雨下過沒停 
工廠大廈的灰牆旁 
冒出一縷白煙 
雨不斷踐踏它 
我們在大廈夾縫的大排檔避雨 
吃一碗牛腩粉 
看雨從布蓬的邊緣滴下來 
濕漉漉的新蒲崗的雨天 
放工的時候工廠湧出人潮 
擠在太狹窄的簷下避雨 
總有點滴的寒冷 
滴入人的衣領去 
雨透過報攤蓋着的透明膠布
敲打書籍
穿花衣的少女
避雨時讀一本四毫子小說 
藍綠和黃色油漬的花紋
流下路邊的溝渠
這不是我們可以攔阻的 

我們在別人放工的時候回去
狹小的報社
背後的櫃上壓滿蒙塵的舊報
人們都離開了
我們還留下來拆信
希望拆出一首詩
　　　　一朵花
　　　　一聲招呼」

——摘錄自梁秉鈞〈新蒲崗的雨天〉，載《雷聲與蟬鳴》，頁121-122`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3364426,lng:114.1989259}},{type:"地景書寫",publication:"鰂魚涌——梁秉鈞〈中午在鰂魚涌〉",description:`「總有修了太久的路 
荒置的地盆 
有時生銹的鐵枝間有昆蟲爬行 
有時水潭裏有雲 
走過雜貨店買一枝畫圖筆 
顏料舖裏永遠有一千罐不同的顏色
密封或者等待打開 

有時我走到山邊看石 
學習像石一般堅硬 
生活是連綿的敲鑿 
太多阻擋太多粉碎 
而我總是一塊不稱職的石 
有時想軟化
有時奢想飛翔」

——摘錄自梁秉鈞〈中午在鰂魚涌〉，載《雷聲與蟬鳴》，頁118-119`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2827206,lng:114.2123009}},{type:"地景書寫",publication:"永安街——梁秉鈞〈花布街〉",description:`「                                 我們走過 
擺滿布料的老街道，一半是 
遊戲的心情，另一半説不清楚 
把玩紗的蟬薄與透明，棉布 
牽拉摸索的指頭，粗糙的 
絨布緊束着發育的身體 
挑釁的鞋尖，誘惑的衣領—— 
唉，盡是陳舊的意象 
層層疊印了別人圖案的花布 
那麼多酸饅的抒情性愛的 
暗示，你要不要披在身上？ 
可相信重新剪裁——眼前就只有 
這些東西——能做成一件 
新的衣裳，穿成合身？」

——摘錄自梁秉鈞〈花布街〉，載《游離的詩》，頁98`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2852542,lng:114.1548831}},{type:"地景書寫",publication:"鴨寮街(1)——梁秉鈞〈鴨寮街〉",description:`「城市過剩的影像如垃圾棄置 
重重疊疊發出酸餿的氣味 
要那麼多東西嗎其實我並不需要 
你買來名牌時裝挽救動搖的信心 
紙袋盛着跳動肺葉膠布蓋着肌膚
神龕和輪胎棄置在旋轉木馬旁邊

攝影師左顧右盼攝影機飽風景 
都説島上處處是買賣的生意
我付出感情每次得回無用的插蘇
生銹的氣鍋凹凸的平底鑊 
大減價吸引你又纏上一捲蒙塵的電線
我沿街尋找卻總無法找到公平的交易」

——摘錄自梁秉鈞〈鴨寮街〉，載《半途——梁秉鈞詩選》，頁293-294`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3297521,lng:114.1625702}},{type:"地景書寫",publication:"交易廣場——梁秉鈞〈交易廣場的夸父〉",description:`「我想我們都仍然喜歡那樣的故事 
站在電梯上我看見前面一個女子 
奔跑趕上快將開行的地下車 
我知道我倒下也不會發出矗然的雷響 
我可以把大家衣服上的油漬 
變成桃葉上的雨滴嗎？ 
偶然相見，説一個神話，吃一頓午飯罷 
人是用想像和泥土做成的 
在這個城市裏，你拖着河流奔向林莽 
跑過遍地粗礪的石礫 
肌膚起繭，逐漸遠離了 
(車輛匆忙地開走了) 
這星球所有的溫暖」

——摘錄自梁秉鈞〈交易廣場的夸父〉，載《半途——梁秉鈞詩選》，頁295`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.28375,lng:114.1579629}},{type:"地景書寫",publication:"翠屏道——辛其氏〈浮生〉",description:`「三姨在牛頭角住了半個世紀，蕭姑娘是第六位打理她個案的社會福利主任，辦事處在觀塘翠屏道。敏如經常會去牛頭角看望三姨，卻很少無事去逛觀塘市中心，只有兩三次為赴朋友約，去觀塘地鐵站的商場酒樓吃晚飯。五六十年代俗稱雞寮的翠屏道，位處觀塘區邊緣，自她辭掉第一份初級福利員的工作後，四十多年沒再來過。敏如離開碼頭，向翠屏道的方向慢走，沿路車多人多，裝卸貨物又佔去半條行人道，商場工廈林立，店舖食肆熱鬧非凡，高架天橋跨空交疊，地鐵無間斷地穿梭行駛，繁忙的社區面貌跟她回憶中的原始印記相比，簡直變了個樣，無法重疊。」

——摘錄自辛其氏〈浮生〉，載《香港文學》313期，頁24`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3154169,lng:114.2294306}},{type:"地景書寫",publication:"鑽石山——路易士〈這是生活！〉",description:`「鑽石山這地方算是城郊了，相當遠僻，景況很好的人當然不願意住在這裡，住在這裡的人多半不捨得，或者上不起館子的。我們只得靠附近一家電影製片廠中下級工作人員光顧。而這些人呢，說句得罪他們的話，實在不敢恭維。據我現在回想，可以大概分為兩種吧！一種是裝模作樣，希望人家誤會他了不起的；這種人花了幾塊錢吃東西，就賾指氣使，神氣得不得了。母親得陪著笑臉侍候他們故意的找小麻煩。還有一種比較和氣，不大挑剔這個那個的，但是有個毛病，光顧幾次之後，就要求掛賬了。聽說電影界的人由於生活放蕩，除非大導演大明星，十有八九是入不敷出，寅吃卯糧的。我們的主要顧客既然是他們，就得遷就他們。」

——摘錄自路易士〈這是生活！〉，載《海瀾》 第二期，1955年，頁20-21`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.35,lng:114.2}},{type:"地景書寫",publication:"城門河——鄧阿藍〈城門河的盼望〉",description:`「日子像河水流轉 
汚染的水從各處流來 
城市的傳說流傳下去 
河水流着 
一日比一日遲滯 
河見不到金光閃閃的花牌了 
泥塵又再飛揚 
分不淸樓影和樹影 
河水混濁濁的 
又流着沙啞的投訴聲 
聽着魚羣微弱的呼吸 
看着水草腐爛 
城門河想起潔白的禮服 
盼望女皇的重臨」

——摘錄自鄧阿藍〈城門河的盼望〉，載《香港文學》第25期，1987年出版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3894453,lng:114.2007327}},{type:"地景書寫",publication:"馬鞍山區——董啟章〈時光．聯想〉",description:`「這裡的環境無疑是陌生的。這幾年來我以教授寫作為職業，常常要坐長途車到不同地區的學校去，但卻從未來過馬鞍山開課。在這塊近十年才開發的填海土地上，盡是幾幢成一組的簇新私人或公共樓房，且清一色是二十多三十層的高密度住宅。處於高架橋道上的視覺，和列車滑行穿梭的移動方式，讓一路上並列無間的高廈群不斷地摺疊和展開，造成了一種輪流於壓迫和舒張的不穩定感覺。在其中一個路段上，列車左邊排列™Ó城堡般森嚴的樓宇裡，右邊卻是未開發的青蔥山嶺。可以想像，車廂兩面座位的背向可以造成截然相反的兩種景觀。除這段之外，馬鞍山已經不怎麼能看到山了。」

——摘錄自董啟章〈時光．聯想〉，載《香港文學》250期（2005年），頁12`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4276756,lng:114.2402751}},{type:"地景書寫",publication:"南丫島天后廟——辛其氏〈南丫戲語〉",description:`「踏上碼頭，問接船的媛戲台在哪，她往右方一指，靠海遠處果然端端正正紮了一所戲棚，據講是南丫島歷年最花錢最大的戲棚。鋅鐵皮人字頂，靠頂處一列氣窗，後來我近距離觀賞過，紮竹的技巧實在使人佩服，簡單原始的手藝隱藏深奧的力學原理，中間卻又沒有遮擋觀眾視線的大柱，傾斜的棚頂，下雨時起了雨簷的作用，雨水從兩旁瀉下，充滿民間的智慧。這戲台打從我踏足島上，便因我身處的方向和角度時隱時現，我在山道行走的時候，鼓樂歌聲清晰可聞，它成了我三天兩夜生活的重心。從碼頭遠遠望去，旗帶飄揚，彩紮的牌樓豎得挺高，想到『慶鳳鳴』今晚上演的『九天玄女』，將會在那天后古廟前新搭的戲台上響鑼，彷彿聽到鑼鼓聲已愈來愈近，好戲快要登場。」

——摘錄自辛其氏〈南丫戲語〉，載《素葉文學》53期（1994年），頁12`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2244567,lng:114.1112467}},{type:"地景書寫",publication:"永樂街——董啟章〈永盛街興衰史〉",description:`「我還記得回到香港那一天，從機場出來，向的士司機說明地址，他竟然堅持沒有聽過永盛街這個地方。在永樂街甫下車，我便明白一切。在附近的商廈包圍之中，三層高的舊居格外像一個腐朽的、不合時宜的老者。從前舊居側面永盛街跟永樂街交界的地方，只剩下一條深不過十尺的狹陋小巷。翻開一九九三年的香港街道圖，已經沒有永盛街這個名字，只剩下永樂、永興、永安、永隆、永勝這些。我驚訝地發現，永盛街已經消失了。」

——摘錄自董啟章〈永盛街興衰史〉，載《名字的玫瑰：董啟章中短篇小說集I》，頁263`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2862512,lng:114.1514773}},{type:"地景書寫",publication:"廟街(2)——也斯〈買賣的廟街〉",description:`「唱粤曲的人沒穿戲服，穿的是普通的西式裙子，唱唸做打都做到十足。前面有排椅子，不過大家還是站着聽。聽的人不多。有人問：『收錢的時候都跑掉怎麼辦？』另--個人説：『有甚麼怎麼辦？有甚麽辦法？』唱的曲詞，都給人聲車聲淹沒了。
『換一檔，那女的聲音響亮一點！』政府禁止用擴音器以後，.大家只能就這樣唱，好像比嗓子似的。一檔一檔走過去，不同的生旦、不同的悲歡，生意都好不到哪裏去。一個老人家，坐在兩檔之間拉二胡。綠楊移作兩家春。最後一檔生意最好。鐵欄裏好像坐了十來廿人，還有不少人圍觀。唱的也沒有甚麼特別，只是多了個衣着性感的在那兒招呼。」

——摘錄自也斯〈買賣的廟街〉，載《越界書簡》，頁113-114`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.307701,lng:114.1703008}},{type:"地景書寫",publication:"九龍城寨舊址(2)——也斯〈九龍城寨：我們的空間〉",description:`「這是怎樣的一個空間？老人街連着老人院，大井街真是有大井，一切都彷彿名實相符，明白不過。但那你又怎樣解釋光明街呢？燈火通明的店鋪，過去是白粉的主要供應地，黃賭毒在這兒有它們的地盤；不遠的地方，轉過幾個街角，就是我們的朋友童年嬉戲之地、快樂自由的空間。妓女在一邊出沒，另一邊有神父講道、給貧民派奶粉。社工正在進行輔導工作；吸毒的人蹲在梯間吞雲吐霧。放唤老幼咸宜電影的戲院，晚上變成表演脱衣舞的場所。這是一個混雜的空間、一個不容易一概而論的空間，一個看來可怕但又那麼多人嘗試正常地生活下去的一個空間。就像香港。
……
我在外面嘗試向人解釋香港並不是那麼可怕的一個地方，回來卻又事事批評，得罪了不少認識和不認識的朋友。我在外面説香港並不是沒有文化，回來又禁不住説為甚麼我們總是追逐外間的標準，為甚麼不能建立自己的標準，自己的文化空間？我胡亂説話，結果總令自己置身邊緣，在自己的家鄉有時也像個異鄉人。」

——摘錄自也斯〈九龍城寨：我們的空間〉，載《越界書簡》，頁116-117`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3316135,lng:114.1893024}},{type:"地景書寫",publication:"域多利監獄（今大館）(2)——廖偉棠〈域多利，獄中書——致戴望舒〉",description:`「鄰室的葡萄牙水手也在搖晃
他那張浸透海水的吊床，
他不知道還有無限的日子供他搖晃。
你就是我，誤讀了終生監獄的意義，
我抬頭看見的那一隻灰鴿是同一只灰鴿，
日日夜夜它啣去的影子已經填平了維多利亞港。」

——摘錄自廖偉棠〈域多利，獄中書——致戴望舒〉，載《和幽靈一起的香港漫遊》，頁18-19`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2813205,lng:114.1541284}},{type:"地景書寫",publication:"聖士提反女子中學——廖偉棠〈聖士提反女校花園：蕭紅藏骨灰地〉",description:`「鳳凰木、棕櫚木，群樹在晌午 
驟然靜了。你卻紛至沓來 
在銅鎖的中心、炮火燙透喉管 
的中心。

光束在最后一刻叫你抓緊， 
過路人鳴鐘。泥土在黑影中湧動， 
而夜復一夜，死神成為大師， 
花園葉腐葉生。」

——摘錄自廖偉棠〈聖士提反女校花園：蕭紅藏骨灰地〉，載《和幽靈一起的香港漫遊》，頁20`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2837201,lng:114.1446709}},{type:"地景書寫",publication:"石圍角邨——廖偉棠〈荃灣，石圍角村〉",description:`「石圍角村寂靜至極，老人們點頭説笑依舊， 
不存在的女人鼓起了空氣，空氣粗糲 
足以傷害一切——首先傷害自身。
現在是丈夫的幽靈仍然為她向空氣申請……
申請一把火、一片好柴、一張舊報上

滿載的升平。重型卡車一輛接一輛壓過
窗外高架橋，撞向大海；大海，浩浩蕩蕩——
當她行走，大海凝止在她的左腳，在右腳結晶。

她依舊每三個月回去一次四川辦理雙程證， 
證明不存在的雙城。中間一個她
雙手抱緊兒子，兒子的所有證明都背在身上： 
准生證、來港證、綜援證、求情信....如大海上浮冰。

魔鬼緊貼着海浪吞噬着飛沫，絡繹不絕。
社會福利處的魔鬼向她咆哮：你沒有權利跟我説話 ！ 
入境事務處的魔鬼向她咆哮：你還不帶上兒子滾回鄉下 ！ 
公安局的魔鬼哄哄她：交上十萬一切好辦啦。」

——摘錄自廖偉棠〈荃灣，石圍角村〉，載《和幽靈一起的香港漫遊》，頁43-44`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3745621,lng:114.1228036}},{type:"地景書寫",publication:"廟街(4)——廖偉棠〈耶穌在廟街（阿云的聖誕歌）〉",description:`「耶穌在廟街，阿云在耶路撒冷。
在耶路撒冷做什麼？』一坐下就哭。

哭什麼？今天被警察幹，
幹了我還要遞押我出境。

哭什麼？今天被“大佬”幹，
幹了我還搶去我一千塊錢。

今天那可以做我爺爺的老頭他壓在我身上，』
今天那記者、法官、署長他們壓在我身上。

阿云你撒謊，你不在耶路撒冷，你分明在香港。

耶穌也不在廟街，
他在九龍灣，做些地盤的黑工。」

——摘錄自廖偉棠〈耶穌在廟街（阿云的聖誕歌）〉，載《和幽靈一起的香港漫遊》，頁54`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3071987,lng:114.1701872}},{type:"地景書寫",publication:"鹿鳴街——廖偉棠〈鹿鳴街〉",description:`「用墨凍如鐵的毛筆，用南囚的鉛筆，用你今天 
陌生摸索的電腦輸入法，你們都固執地寫及 
東方既白。雖然鹿鳴街窗户對面仍是窗户， 
香港的樓阻擋着樓，中國的日出只照耀浦東的少數…… 

但1952年，冬至夜，你們唱起了違禁的《國際歌》， 
一直違禁，一直沉吟至今。鹿鳴街，月明星稀， 
鹿游蕩於天台樓熾熱未退的鐵皮屋頂上、魚骨天線間，
低頭嗅你慣於孤獨的青青衣衿。」

——摘錄自廖偉棠〈鹿鳴街〉，載《和幽靈一起的香港漫遊》，頁59-69`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3221576,lng:114.1918494}},{type:"地景書寫",publication:"會議展覽中心——廖偉棠〈灣仔情歌〉",description:`「會展中心裏富人們在討論愛情， 
他們在賣和買，他們割讓愛情， 
他們大打仇恨牌，威脅愛情， 
他們用愛情把我們和農民阻擋在門外。

在這之間是充滿了愛情的男警和女警， 
他們的愛情噴霧和水炮向我們襲來， 
他們敲打著巨大的愛情盾牌向我們襲來， 
他們在告士打道一連十三個小時扣留我們的愛。」

——摘錄自廖偉棠〈灣仔情歌〉，載《和幽靈一起的香港漫遊》，頁70`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2838613,lng:114.1734979}},{type:"地景書寫",publication:"中環天星碼頭舊址(1)——廖偉棠〈中環天星碼頭歌謠〉",description:`“黑夜里的謊言他們白天説，他們早上説
中午説在大氣電波里説在金色帷幕背后咬耳朵説 
他們說他們説。潔白的骨骼他們黑夜里拆， 
他們黃昏拆他們早上拆他們侮辱着晨光拆他們 
在黑犬的保護下拆在海風的沉默下拆他們拆他們拆。”

——摘錄自廖偉棠〈中環天星碼頭歌謠〉，載《和幽靈一起的香港漫遊》，頁73`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2840733,lng:114.163556}},{type:"地景書寫",publication:"利東街（喜帖街舊址）——廖偉棠〈利東街歌謠〉",description:`「灣仔死了，在這短短的小街中， 
陽光亦螟蚣蜿蜒，和我困獸鬥。 
燒去了，年前滿街窗户清拆標誌 
交叉如猶太衣領上的大衛星， 
燒去了，未來的新商場 
是又一座奧斯威辛焚化爐。

沒有什麼不能燒，
燒一個香港，如空心鬼王；
燒一街的人如無常，説"你也來了”：
燒一街的暮帖如陰司紙，
寫着“他朝君軀也相同”。

黃幡翻飛，撲面颯颯的風馬旗。 
焚化爐的影子彎曲、
我們的影子也彎曲，魅魅般 
跳避一條巨舌在辣火中扭動， 
彷彿在我們身上饕餐的毒蟲。」

——摘錄自廖偉棠〈利東街歌謠〉，載《和幽靈一起的香港漫遊》，頁78-80`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2757963,lng:114.1724453}},{type:"地景書寫",publication:"廟街(5)——丘世文〈在廟街找過去〉(1982)",description:`「最大煞風景的還是，當我們快要離開廟街、走出佐敦道口時，卻被兩名年紀與我們不相上下的飛型少年攔住了；不是暴力小刀子恫嚇，也不是甚麼洗劫毆打，他們只是佯作親熱地一手攬着Dennis和Johnny，很像多年老友的樣子似恐嚇又似開玩笑賴皮地說：
『你哋疊水之人啦！買唔少正嘢啦！難為我哋兩兄弟響度等你哋咁耐畀錢我哋開飯！嗱!畀吓面啦，整株旗嚟使吓呀啦！請我哋食番口煙呀嗱！』
當下我們五人既摸不着頭腦，不知他們說甚麼，嚇得環顧相望面如土色，只知他們來意不善，沒奈何乖乖大家從口袋中掏出錢來湊夠了二十元給他們，他們才讓路了。
五個人站在佐敦道碼頭總站等車，暗弱的燈火下彼此相看，大家的表情是挺怪難看的。算算得到的是不少，畢竟Johnny有他的小說、馬騷洪有他的天體雜誌、我有我的電蕊粉和小馬達，而彼此的眼界也大開了，但想想方才被敲詐，既心有不甘，又似若有所失。遙望廟街的方向，總覺得仍是那麼神秘莫測、詭譎深邃，暗裏各人都該想，但當時沒有坦白承認：是我們缺乏膽識經驗、沒有門路，完全看不見摸不着其中的重重機關，只僥倖窺見稍露的冰山小尖而已。
然而我們自此再也提不起勇氣再到廟街去探秘......」

——摘錄自丘世文〈在廟街找過去〉，載《在香港長大》，頁72-73`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3069917,lng:114.1701233}},{type:"地景書寫",publication:"宋皇臺(2)——丘世文〈宋皇臺〉",description:`「父親當年攜眷逃難而來，不久更落泊失業，大概感於一家人前途茫茫吧，面對宋皇臺的大石，有點兒觸景生情似的，老要說着文天祥、張世保和陸秀夫一干人等護皇南逃的故事：從我們故鄉的五坡嶺方飯亭，以至這裏的宋皇臺，不遠的零丁洋，以及悲劇以終的崖山等。這一切當然都要成為我們幼稚心靈的歷史負累——畢竟這故事不如其他虛擬無憑，聽後舉目環視仍有聳然屹立的巨石印證。
然而歷史的負累何其多呢！隨着年紀漸長，我們還要一再認識後來元清異族的統治、殖民的割讓、日軍的侵佔，以及其間千絲萬縷糾纏不清的歷史與論述。如今每一次路經宋皇臺公園，還見那似帶詛咒的巨石屹立如昔，側背着那通往國際的機場跑道，彷彿再也不能令我興起甚麼自憐的文化情懷了。  」

——摘錄自丘世文〈宋皇臺〉，載《在香港長大》，頁138`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3249051,lng:114.1893399}},{type:"地景書寫",publication:"太子酒店——丘世文〈太子酒店〉(1996)",description:`「亞皆老街與太子道於九龍城的交接處，啟德機場的鄰近，現時仍可以見到一幢矮小的平房。這平房歷年來也曾經幾番修葺的，五十年代中，當我還是四五歲的時候，原來是一間名為太子酒店的小賓館。記得這賓館裏設有我們本地人喜歡上的茶樓；格局非常高尚，點心也相當精美的。父親早上起來每當那天心情好，想想間也會對我們兄弟姊妹幾人說：
『言青食欠廿人木去吧！』
我們當然明白，那是『請飲茶』的拆字暗語，高興雀躍一頓，也就趕忙換上街的衣服去了。
朝太子酒店方向走着，父親例必要不時停下來買報、與相熟招呼；一家人的心情總是興奮非常的。
那時候的太子酒店新住進幾伙白俄人家，男女老幼身穿傳統的俄羅斯平民服裝，三五成羣那樣子喜歡在酒店門外一帶散步閒坐。我們每次走過，他們準會向人微笑招手；然而礙於彼此語言不通，大家表示友善的方式也僅此而已。
據父親說：他們是沙皇時代的貴族後裔，十月革命後逃亡到中國，原來住在租界裏，生活還算不錯的，料不到後來內地也經年戰亂頻生，輾轉流徙，終於淪落到這裏來，暫住在這小賓館裏，等候援助移民到外國去。」

——摘錄自丘世文〈太子酒店〉，載《在香港長大》，頁139-140`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.299211,lng:114.16843}},{type:"地景書寫",publication:"海運大廈(2)——丘世文〈海運大廈〉(1996)",description:`「我們今天慣遊太古廣場、時代廣場、太古城中心，乃至其他大大小小、星羅棋佈的購物商場，也許難以體會當年海運大廈對社會的衝擊和影響。但對於上一代香港人而言，首次踏足其中，幾乎就像廁身在一個夢寐難求的幻象世界那樣一走不盡的商店長廊、看不完的櫥窗展覽，到處都是五光十色、琳瑯滿目的高級和奢侈的商品和服務，只要能供得起價錢，不管是外國遊客或本地市民，名流顯貴及販夫走卒等，誰也可以即時投身於物質豐裕的環境中。這正好迎合了當年辛苦經營、斂財有方的一代的集體心態——他們從中漸漸領悟到金錢透過花費始見效用的原理，學曉了炫耀式消費的社會象徵意義，也同時得到了看與被看的滿足和自象。」

——摘錄自丘世文〈海運大廈〉，載《在香港長大》，頁142`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.295026,lng:114.1669864}},{type:"地景書寫",publication:"鳳凰山——馬若〈登鳳凰山觀日出〉",description:`「風吹過來像刀 
身旁的竹枝 
跟着便折斷了 
怎麼會這樣脆弱的呢？ 
我隨手抽起了一根 
握在掌心裏
感覺到流動着的汁液
冷冷地流動 
我呆了一呆 
已經被眾人拋離很遠 
很遠了
我祇得快快的趕上 
山愈爬愈高 
愈陡峭愈寒冷 
貼着銹黃色的石壁 
觸手的山巖層層剝落 
從頭上掉進深深的陰谷 
有人開始猶豫了 
想要回轉頭 
又不想回轉頭」

——摘錄自馬若〈登鳳凰山觀日出〉`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2449387,lng:113.9175335}},{type:"地景書寫",publication:"維多利亞港(2)——何福仁〈維多利亞港〉",description:`「許多年後，她一定會看到許多許多個
真正的海洋，那時的維多利亞港
原來只是小小的魚缸
小得連地圖也沒有記載
小得誰又曾理會我們的水溫
我們是否缺氧我們想過怎樣的一種
生活？但那有什麼相干
只要一家人同心協力
當風翻動，波濤再洶湧
我們總會安然渡過
而且總會有什麼吸引她的目光」

——摘錄自何福仁〈維多利亞港〉`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2893354,lng:114.1747309}},{type:"地景書寫",publication:"置地廣場——力匡〈香港重回〉(1985)",description:`「那是很長久的一段時間了
自從我離開
直到我回來
由一九五八到一九八五
我不認識我曾認識的人
他們已老
我不認識我生活七年的地方
香港已變

吿羅士打變成置地廣場
皇后和娛樂的進口移到側門
（我想起一元票坐飛機位的回憶） 
我沒見過麗晶和怡東
還有地鐵
過海隧道
還有
還有

一千元的鈔票
二十元的鈔票
五元的『大銀』
我全沒見過
十二角形的貳圓銀角最美
可見一份星島日報
和星島晚報」

——摘錄自力匡〈香港重回〉`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2806759,lng:114.1576919}},{type:"地景書寫",publication:"赤鱲角香港機場——廖偉棠〈夜降赤臘角機場俯瞰香港蜃境〉(2020)",description:`「一如二十一年之前
我所未見的香港在墨中顯影 
我所未忘的香港圖窮匕現 
一如今夜，流火大星。

無論這盤旋是致哀還是迫降 
我們沉入這漩渦
並非歸降。
青馬大橋攬轡躊躇，
伶仃洋在一旁
和我凝神一千年
黑白雙目，把燈火
變修羅。」

——摘錄自廖偉棠〈夜降赤臘角機場俯瞰香港蜃境〉，載《一切閃耀都不會熄滅》，頁21`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.308047,lng:113.9184808}},{type:"地景書寫",publication:"銅鑼灣——陳之藩〈香港觀感〉",description:`「我住在銅鑼灣的旅館，正是將要過舊曆新年的時候。在這麼西式的旅館中，幾乎每個講演廳的門口，都掛着兩串爆竹型的裝飾。這種裝飾，在台灣就不易見到。這種思古幽情很令人深思。
我常覺得香港是未革過命的地方，也是保持中國傳統最多的地方，我曾參加過好多我的香港學生的婚禮，沒有一位新娘不穿繡着鳳凰的大紅禮服的。這也是任何其他中國地區所不可能見到的了。我是個最討厭「革命」的人，像這種不革命的地方，不革命的風俗習慣，就使我嚮往，甚至愛慕與欽佩。
至於文學，香港還有不少會作律詩的人。比如余英時教授罷？就是香港出身的人；以他的年紀，居然會作律詩。中國有十一億人罷，我想能找出十一個人會做律詩就不容易了。而這十一個人中，大概有十個人在香港。」

——摘錄自陳之藩〈香港觀感〉，載《陳之藩散文》（卷二），頁294`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2802666,lng:114.1844228}},{type:"地景書寫",publication:"索罟灣——海辛〈在索罟灣寫劇本〉",description:`「當他們接到任務後，兩個人都想到自己的作品。但他們都不認爲自己的劇本很完美，可以拿出來拍戲，彼此推讓着。小霞知情識趣，她説：『我來做中間人，你們交換劇本，彼此閲讀研究，看誰的作品可用？或者合併。』這辦法，得到河山同意。
小霞又有提議：『你們最好利用索罟灣家清靜環境，交換劇本後分頭閲讀，再討論研究。』」

——摘錄自海辛〈在索罟灣寫劇本〉，載《廟街兩妙族》，頁344`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2053113,lng:114.131848}},{type:"地景書寫",publication:"港灣道——小思〈一九九六年十二月十一日紀事〉(1996)",description:`「上午十一時四十五分，在『中環廣場』通到『新世界酒店』的天橋上，正是對正港灣道的好位置。站滿了人，各類記者配備長鏡頭，還有一堆堆市民，以阿伯為多，組成一個小論壇。一個阿伯，拿着小型收音機貼在耳邊。忽然大聲報道：『董建華一百六十票嘞，吳光正十六票，楊鐵樑十四票咋！』好像講賽馬，很認真不斷報下去，旁人也很樂意有他的現場直播。
港灣道上，仍有人站在消防局前的示威區內。沒有甚麼行動，擴音器傳出不斷人聲，但站在天橋上，大概離得遠，聽不清在説的話，只聽得身旁阿伯説：『冇得爭啦！董建華已經夠二百票啦！』
《大公報》、《東方日報》出號外，一元一份，我買了一份。『董建華當選特區首長，得三二零票大勝。』」

——摘錄自小思〈一九九六年十二月十一日紀事〉，載《香港家書》，頁118`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2806336,lng:114.1737677}},{type:"地景書寫",publication:"太平山(2)——小思〈石龜故事〉",description:`「傳説是這樣的：千年萬代以前，有個不知道是道士還是仙人，對着南方海上小島，下了一道咒語：香爐峰海底，有一隻石龜，每年從海底沿着山腳向島上爬，像沒有速度似的慢慢爬，慢得沒有人察覺。等到它爬到山頂的時候，這個小島就會無聲地沉沒了。
世界上哪個地方沒有神話傳説？好像只是香港特別少——香港，是個拚命向前跑的大城市，棄掉歷史、打破神話、集體迅速失憶……你能講得出多少個屬於香港的神話傳説？我想，石龜爬山，該算一個。
我跟許多香港市民一樣，不知道香港有什麼神話傳説，但卻記住了石龜的故事，而且愈來愈記得清楚。」

——摘錄自小思〈石龜故事〉，載《香港家書》，頁165-166`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.274304,lng:114.1441051}},{type:"地景書寫",publication:"船街(1)——小思〈話說灣仔〉",description:`「那是十九世紀中葉，站在船街朝北街頭，就會面對維多利亞港的海傍。叫船街，就因為可以看見船。回過頭向南山邊望，洪聖廟裏，漁民上岸供奉的香火鼎盛。應該還有一座大王廟，如果不是，怎會有大王東街大王西街？靠近海，來自四海，的浪蕩兒，就會上岸腳踏實地，除了酬神感恩的心靈慰藉之外，還得證明肉體的果然存在。船街、石水渠街一帶，女人幹着最古老的行業，跟西環石塘咀的阿姑不一樣，他們享不了十二少的揮金與情義，貧窮的一宵交易，只有骯髒，沒有記憶。」

——摘錄自小思〈話說灣仔〉，載《香港家書》，頁168-169`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2761009,lng:114.1708693}},{type:"地景書寫",publication:"平田邨——韓麗珠〈舊時藍田〉(2018)",description:`「當要向你重述關於那些街道的事情時，我無法指出它們的名字，因為由官方居出的名字，不一定會種植在居民的心裡，直至現在，如果你翻看地圖，街道的名字並沒有改變，但我生活過的地方已經消失了，所以我要敘述的是那些已經永遠消失了的地方，它們只有它們活著的時候的名字。
但為了確立那個區域的消失，我仍然可以指出一個沒有意義的地名——藍田平田邨，它座落在安田街之旁，我生活過的地方是「第24座」，兩個不同的名字，重疊在相同的地方。更準確的說法，這個區域並非由幾條街道而是以座數來命名，一座四通八達，佈滿過多出口，因而令人容易失去方向的迷宮。」

——摘錄自韓麗珠〈舊時藍田〉，載《回家》，頁198`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.307309,lng:114.236148}},{type:"地景書寫",publication:"龍珠島——韓麗珠〈島中的島，或曼陀羅〉",description:`「知道這個地方的人很少，但曾經有人告訴我，多年之前，她曾經到島上去，那時，短堤仍未建起來，到了黃昏，高漲的潮水就會淹沒有了原本的路，於是島就會和另一片地分隔，再次孤立起來，回到它所需要的寂靜之中。
（那會不會像母體的子宮，一種尚未誕生的黑暗和可能）
生命裡總是有些段落需要絕對的空寂，像一個必要的休止符。」

——摘錄自韓麗珠〈島中的島，或曼陀羅〉，載《回家》，頁71`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.365222,lng:113.9895206}},{type:"地景書寫",publication:"菜園村舊址——韓麗珠〈菜園村〉",description:`「直至我到了菜園村。那條建在公路旁的寧靜的村子，每一戶都有一道閘門，閘門上細了綠絲帶。一個農夫蹲在田裡收集成熟了的白蘿蔔。有些閘門掛上了「拒絕登記不拆不遷」的牌子。我心裡那麼難過。自從知道裕民坊的街道即將消失，我便發現，原來自己(和大部份的人)雖然住在香港，但真正生活的地方，只是日常活動的幾個點，於是錯覺地認為，在那幾個點以外的地方，跟自己的關係並不那麼密切。直至收購的巨手開進了自己熟悉的點，開始破壞自己熟悉的世界，才驚覺事情一直以怎樣的方式進行。所以到了菜園村，我那麼難過。為了避免被誤解成這城市裡少數的、感情過份豐富的異類，我想解釋的是，這種難過／感情從何而來，而終會達至什麼。」

——摘錄自韓麗珠〈菜園村〉，載《回家》頁104-105`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4405766,lng:114.0857037}},{type:"地景書寫",publication:"九龍倉碼頭舊址——黃谷柳〈蝦頭傳〉",description:`「尖沙嘴的九龍倉碼頭，有一艘美國大輪船剛靠岸。接客的人們擠滿了碼頭鐵欄外邊一帶地方，蝦球也湊熱鬧擠進人堆中去。輪船的艙面上站着幾十個華僑乘客，他們有些用望遠鏡向接客的人堆中照望，接客的人有不少手上打開一張白紙，上面寫着冬瓜大的姓名，不住地向頭上搖晃。當那些遠別了故鄉幾十年的華僑，發覺有親人高舉着他自己的姓名就跳躍幾尺高，不住揮動手帕和帽子，跟岸上的親友招呼。蝦球覺得非常有趣。他想，如果船上有一個竟是我的爸爸，他怎能認出我來呢？我又怎能認出他來呢？他好奇地擠出到碼頭邊，對着海上的各種船艇發呆，有幾張小艇灣到大輪船的旁邊，船家們豎起高高的竹竿，竿上套着小網，向船上的人客討錢。」

——摘錄自黃谷柳〈蝦頭傳〉，載《黃谷柳卷》，頁24`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2972029,lng:114.1682639}},{type:"地景書寫",publication:"沙頭角(1)——董啟章〈天工開物之收音機〉(2002年)",description:`「上水和南面市區還有很遠距離，基本上是鄉郊地區。董富在上水石湖墟僱了輛牛車，把妻子和笨重的收音機安放在車架上，自己和車伕在旁邊徒步，足足走了三個鐘頭才到龍村。他們從上水往南走，到達粉嶺之後再往東行。循着這條路徑走到盡頭就是沙頭角，即是殖民地和內地的東北角邊界，龍村就在粉嶺和沙頭角之間的山上。其實當時在上水和沙頭角之間已經有每天三班的公共巴士行走，但董富情願信任自己的雙腿。董富是無線技術人員，又熱切學習新科技通曉汽車和各種機械原理，但卻偏偏抗拒坐汽車，這聴來確是有點奇怪。」

——摘錄自董啟章〈天工開物之收音機〉，載《香港文學》 第215期，第64頁`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.531577,lng:114.20324}},{type:"地景書寫",publication:"梅樹坑——樊善標〈重遊大埔梅樹坑公園〉(2015)",description:`「夾在三合土河堤之間狹窄的淺水
拘拘束束地前流竟也這麼多年了
再沒有波濤的本能只挾帶些枯葉
打着漩渦無聊而緩慢而不動聲息
其實，不是的
在這一岸
我踮着腳
湧動的浪谷裡
一閃
而逝
髮絲
雙眉
我跳起
再跳起
多給我
多給我
一點吧
瞳孔
鼻樑
嘴唇
曾過
甚麼
在濤聲
止息
的瞬間
不管是
戀慕
關懷
招呼
或者
詛咒
是的，其實
矮下去小下去只要坍陷
下去直至僅餘強烈的渴
望戀戀難捨滿天空曾有
過那麼芳菲粉紅的真相」

——樊善標〈重遊大埔梅樹坑公園〉，載《聲韻詩刊》 第二十四期，頁66-67`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4538976,lng:114.1525745}},{type:"地景書寫",publication:"大埔墟(2)——劉偉成〈大埔舊墟二景〉",description:`「左邊是忍讓的唐樓
右邊是炫耀的豪宅
都掛著一牆光的瀑布
不算揣急的噴論中
我看見自己挺著更大的肚臟
正在疊合清空了的蛋糕模于
把兩個以斜角疊入底座的一個
其餘的都以V影撩起
像一根葉脈徐徐張閑時間的葉面
因我的注視而微微顫動」

——摘錄自劉偉成〈大埔舊墟二景〉，載《字花》 第二十四期，頁64-65`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4452488,lng:114.1691208}},{type:"地景書寫",publication:"石澳(2)——陳實〈海上的島──香港　石澳〉(2013年)",description:`「然而最讓人懷念的是它的沙灘，那是全香港最好的沙灘，沙極細，極乾淨，除沙之外沒有任何別的可以刺傷你的雜物。黃昏時分，外面來游泳的人都走了，整個沙灘屬你所有，因為村民都睡得早，而且沙灘對於他們不是甚麼稀奇東西。從灘的一端走到另一端，慢慢走，大約要二十分鐘，一個人，脫去鞋子，在清涼的、柔軟的沙上印出一個個腳印，讓它們被潮水抹平，印出來，抹平⋯⋯周圍一片寧靜，海闊，天空，整個世界是你的，你還需要甚麼呢？」

——摘錄自陳實〈海上的島──香港　石澳〉，載《城市文藝》第八卷　第四期（總第六十六期），頁30-31`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2334016,lng:114.2420218}},{type:"地景書寫",publication:"尖沙咀鐘樓——黃谷柳〈蝦球傳〉",description:`「蝦球出來在半島酒店一帶打轉，時時留心車站鐘樓的大鐘，他一面遛躂，一面懷念王狗仔。在好幾個月以前，王狗仔是他的麵包攤三個收規人中的一個。每一個收規人都代表着看不見而感得到的一種可怕勢力。人們都情願每天讓這些收規人拿去三毫五毫，或一元八角，買來一天的平安。做買賣的人，沒有一個不是「有主歸主，無主歸廟」，各有依託的。你不出這些黑錢，警察和流氓就會打得你頭破血流，使你做不成買賣。在三個收規人當中，蝦球比較喜歡王狗仔，因為他多少還有一點情義，當生意冷淡的一天，他就特別寬容不收了。其他兩個可不行，只有多收，從不減少。自從王狗仔忽然到別地方發財以後，蝦球就時常想起他，因為新換的收規人比王狗仔壞得多了。他又想起「馬仔」這個怪稱呼，到底是甚麼東西呢？馬是給人騎的，難道他把我當馬騎嗎？但不管怎樣，吃飽飯再説。他打定主意，就跟王狗仔做一個時期馬仔吧，看他怎樣待我。」

——摘錄自黃谷柳〈蝦球傳〉，載《黃谷柳卷》，頁26`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2935624,lng:114.1695528}},{type:"地景書寫",publication:"獅子山(1)——黃谷柳〈蝦球傳〉",description:`「他們又往前走，走過土瓜灣，向九龍城方向走去。蝦球望着九龍城背後的那座獅子山，山頂的形狀好像一頭俯伏着的獅子，蝦球問牛仔道：『牛仔，你知道前面那座是甚麼山？』牛仔道：『不知道。』蝦球道：『是獅子山，我上去砍過柴。蘿蔔頭日本鬼在香港時，我爬山去過新界。再走不遠就是中國地了。』牛仔問：『你到過中國地界嗎？』蝦球道：『沒有，我到過沙田。再走不遠就是中國，我現在想回中國去。你看怎麼樣？』蝦球説時態度很認真，牛仔望着他，又望望那座獅子山，他也在心裏打他自己的主意。」

——摘錄自黃谷柳〈蝦球傳〉，載《黃谷柳卷》，頁91`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3589908,lng:114.1898403}},{type:"地景書寫",publication:"赤柱——東瑞〈一串焼烤的日子〉(1994年)",description:`「佳節前夕，原來赤柱海灘不是你的專利，已有不少城裏人捷足先登了。岸上的幾家店鋪燈火通明，夜生活正悄悄地開拓。遙望海灘，依稀傳來人聲，却瞧不淸有多少人那兒。當我們搬了東西下去，才知道人們或以三五成羣，或以舉家爲單位，圍着爐子自成了一國。時間漸漸推移，來的人愈來愈多。因爲很暗，當爐火升起，遠遠看去就像野地裏的篝火，十分好看。孩子們將『勢力範圍』以點燃的蠟燭圍起一個大圓圈。那一支支小蠟燭皆『栽』在凹下有半尺深的沙坑裏，當所有工序完成，那奇異的感覺便油然而生：我們仿彿變成了電影中的氣功大師，正欲練什麼功夫；更像坐在一張飛天的神氈上；當然，最奇異的感覺是，當我們朝那燃着蠟燭的窖窿往下望時，直覺地面好像要被我們鏤空了，地底就似火的煉獄！」

——摘錄自東瑞〈一串焼烤的日子〉，載《香港文學》 第116期，頁86`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.220422,lng:114.2126685}},{type:"地景書寫",publication:"紅棉路——葛亮〈拾夏記〉(2014年)",description:`「山是山，水是水。若在城中，中環的人是沒時間的，中午攜着漢堡，也夠去香港公園走上一遭。從紅棉道的後門進入，多半會遇到穿着婚衣的年輕人，左擁右護的是攝影師和助理，鎂光燈和遮光板。幸福間總有些倉促。在這裡選景，為了鬧市裡的一池水。偌大的池塘，是綠的。要起了詩意的聯想，便是『吹皺一池』之類。但因為是公園，便和冷寂的情調有些隔膜。特別是小孩子的叫鬧聲。因為池中有一些突起的岩石，上面竟趴滿了巴西龜。大的如盆狀，小的只如指甲。原本是城中人放生的，多年的繁衍，有了如族的規模。攜妻將雛，看起來，比人更怡然些。人看着牠們，倒是客，不免心生艷羨。池中還有一頭天鵝，翅膀做過手術，是破敗的，飛不起來了。原本有兩隻，雌的歿了，留下這雄的。形單影隻也很多年。毛色已有些晦暗。平日裡曲着頸子，鬱鬱地遊。這一日，卻破天荒地昂然叫了一聲。聲音有些憨，有些艱難，與體態的優雅不很相稱。卻讓聽到的人感動，大約也是因為一年的好風日。」

——摘錄自葛亮〈拾夏記〉，載《香港文學》 2014年10月號總第358期月刊，頁24`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2775932,lng:114.1597073}},{type:"地景書寫",publication:"天水圍(1)——黃國彬〈天水圍〉(2004年)",description:`「多美的名字！黃金海岸後
仍是我的至愛——一切
生命的起源，渾浩無涯，
淼然在周圍。由水而來，
再由水來圍繞——還有天。」

——摘錄自黃國彬〈天水圍〉，載《文學世紀》 第四卷第十二期（總45期） ，頁6`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4606419,lng:114.0041996}},{type:"地景書寫",publication:"米埔——黃靜〈赤麂〉(2014年)",description:`「米埔對着後海灣，沉積而來的濕地沼澤成了候鳥移徙路線上的中站。夏末的季節，鳥兒的種類不算多，停在樹上黑黑的都是鷺鷲。她們開車駛入。這片濕地成了保護區，要批准才能進入，所以裡面特別寧靜，清清爽爽，空氣裡有一種草木的香氣。遠處有深圳的高樓，也似乎像屏幕背景一樣安靜，跟眼前這片長滿蘆葦的濕地眈眈相望。『這麼靜，你覺得這是香港嗎？』阿圓問道。
『為甚麼不是？我小時候的這裡也很安靜的。』
『你家在這裡嗎？』阿圓問。
『在元朗八鄉。那時候市區來的人不多，真的是這樣安靜的，連花園的樹上也常停着不同的雀仔。』
『你是原居民？』
『是呀，我姓鄧嘛。』
『怪不得老闆讓你來負責這邊的路線，原來這是你的地頭。』」

——摘錄自黃靜〈赤麂〉，載《香港文學》 2014年7月號總第355期月刊，頁49`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4950569,lng:114.0339342}},{type:"地景書寫",publication:"灣仔峽道——鍾國強〈香港山行二題〉(2015年)",description:`「甘道旁有警隊博物館。闊別幾七年，重臨舊地，還有一種熟悉的感覺。但見入口轉角處的交通指揮亭還在，展售室的頭盔捲筆刀還在，擱在樓梯頂的越南船民所用之柳條船還在，但三合會展室的刀具利器似少了一些。據聞此館新近翻修，或有意將暴戾氣稍減亦未可料。而當年妻子在廊下稍息之長椅已不復在，遑論窗格之蛛網與乎女兒誤為蜻蜓之飛蟻。廊下的警務署長群像新添了XXX。鐵打的衙門，流水的官。玻璃反照了多少七年前的人面？」

——摘錄自鍾國強〈香港山行二題〉，載《香港文學》 總第三百六十九期，頁30`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2670997,lng:114.1691924}},{type:"地景書寫",publication:"東大街——舒巷城〈鯉魚門的霧〉(1951年)",description:`「十五年了，他並沒有大富大貴的回來，還是同樣的梁大貴。在外邊他常常給人看不起過；人笑他是『蛋家佬』（水上人）；連他自己也不知道爲什麼：他的「水上」音調到現在還是改不了。還是同樣的梁大貴，但老了，老得多了，那紫銅色的健康的臉，現在是那樣蒼白、瘦削。
才個把鐘頭前。一輛向東行的電車把他帶到那個像往常一樣的筲箕灣電車總站。他看也沒多看一眼總站旁邊的鋪戶,雖然它們有了很大的改變。他擦過還是老樣子的街市，直走進鄕鎭式的又狹又長又古老的東大街去。那街還不是他要停留的街。那街上的洋貨店、金鋪，後來不曾在他的記憶裏留下過什麼。甚至現在他對它們還是陌生的，正如它們十五年前就同他陌生一樣。他從來沒有進去過一次，雖然他從前也夢想過進去的。——現在他更不會進去了。」

——摘錄自舒巷城〈鯉魚門的霧〉`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2794959,lng:114.2301109}},{type:"地景書寫",publication:"麗池夜總會舊址(1)——劉以鬯〈北角的上海情景〉(2002年)",description:`「五、六十年代的北角，到處可以見到上海情與上海景。坐在北角麗池夜總會尋歡作樂的上海人，一定可以體會到坐在上海麗都夜總會的氣氛。四十年代後期，上海麗都夜總會每晚邀請著名歌星張露演唱時代曲，由唐喬司樂隊伴奏。五十年代，張露自滬來港，曾在天宮夜總會（即現在的皇都戲院）演唱。那時候，天宮夜總會的樂隊就是上海仙樂斯舞廳的洛平樂隊，祇要是『老上海』，在北角天宮夜總會尋求歡樂時，就會產生仍在上海生活的感覺，甚至忘記自己身居香港。」

——摘錄自劉以鬯〈北角的上海情景〉，載《香港作家》第5期，頁4`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2898132,lng:114.2096601}},{type:"地景書寫",publication:"淺水灣(3)——依達《蓓蓮姊》",description:`「可利把汽車渡過海，我忙問到哪兒？可利說目的地是淺水灣。眞是怕汽油多！九龍處處不去徧要到淺水灣！後來追問一下，原來是茱迪的主張，聽後眞想把那鬼靈精打一頓。
不過淺水灣今天却人頭湧湧熱鬧非常，原來是禮拜天。茱迪把沙律吃了個半飽，抹抹嘴跳下車說：『我先去租帳篷去！』說完邁步就走。」

——摘錄自依達《蓓蓮姊》，頁12`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2382422,lng:114.1969693}},{type:"地景書寫",publication:"淺水灣(4)——陳冠中〈太陽膏的夢〉",description:`「以前依達小説裏，淺水灣的晩風及背景裏的古堡可以使階級懸殊的少男少女一見鍾情。張愛玲的《傾城之戀》裏，一對成年男女也要在灣畔椰林間傾談才發現對方的性感本質。記得小學的社會課本，有一課『淺——水——灣』嗎？淺水灣，這個與我們一起長大的名字，現在已不是以情調吸引我們，而是以更實惠的、更多樣化的平民玩意拉攏我們。你除了可以在沙灘漫步外（如果不介意周圍喧鬧的人群的話），還可以BBQ、曬太陽、吃漢堡包、賭牌、聽收音機、拜神。你還可以游水。淺水灣的傳奇性漸漸褪色，它已經愈來愈真實；每年有二百五十萬人踐踏的地方，總談不上神秘吧。」

——摘錄自陳冠中〈太陽膏的夢〉，載《香港三部曲》，頁3`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2382323,lng:114.1975807}},{type:"地景書寫",publication:"香港仔(1)——楊天成《自作多情》",description:`「『香港仔！』她對司機說。『什麼？香港仔？』他的眼睛睜得眼珠幾乎爆出來。『是的！』她輕飄飄地：『我們吃海鮮去不好嗎？』『——』似乎雷在他耳旁一震，頭有些發暈。『香港仔吃海鮮』這句話，久已耳熟能詳，他知道那是一種貴族化的享受，不要說去，連想也不敢想，現在她居然要去，那還得了！」

——摘錄自楊天成《自作多情》，頁4`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2483001,lng:114.1532923}},{type:"地景書寫",publication:"香港仔(2)——上官牧《二度密月》",description:`「到了香港仔，邵潔芬發覺當地絕不像李琨所講那麼好，而那些海鮮，也沒有一樣配她的口味，她覺得十分失望，但其他的人，包括十足洋派的狄安妮・方在內，却吃得津津有味，她不禁想，他們是眞正歡喜這些海鮮呢，還是吃一個『名堂』。」

——摘錄自上官牧《二度密月》，頁9`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2483001,lng:114.1541891}},{type:"地景書寫",publication:"香港仔(3)——俊人《患難夫妻》",description:`「新家庭建立後，他倆常到戲院看戯；到夜總會消遣；到香港仔、赤柱吃海鮮；到淺水灣海灘游泳；新界幾個地方也玩過，每天都過得很快樂。」

——摘錄自俊人《患難夫妻》，頁3`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2482703,lng:114.155101}},{type:"地景書寫",publication:"尖沙咀(1)——陳冠中〈金都茶餐廳〉",description:`「金都茶餐廳，英文叫CANDO，正門向美麗都大廈橫門，後門傍仙樂都夜總會（最近一直內部裝修暫停營業），左邊維多利亞時鐘酒店（前伊頓英文補習夜校），右轉角馬會（前皇家賽馬會）場外投注站，拐個彎係重慶森林」，行兩步到匯豐銀行，交通四通八達，旺丁旺財，與時並進，大大話話好景幾十年，如無意外，樣樣順風順水，老板阿杜過幾年大可以返東莞鄉下買幢西班牙式洋樓，養隻番狗，（如果發展商唔爛尾），屋前小型人工湖，屋後迷你18洞高球場，左鄰勞工子弟出身香港現任高官個阿媽，右里來歷不明樟木頭新發財位阿二，行行企企嘆世界聽譚詠麟李克勤鋤大弟食野味睇無綫拍蚊過世。」

——摘錄自陳冠中〈金都茶餐廳〉，載《香港三部曲》，頁157`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2994842,lng:114.1733172}},{type:"地景書寫",publication:"太平山(4)——陳冠中〈什麼都沒有發生〉(1999年)",description:`「我本來沒想過回香港，但聽説七月一日後酒店很多空房，價錢特平，遂買了一個機票連酒店套餐往香港轉一圈。
我特意跑到山頂看風景。回歸已完成，冇事冇事。香港真是福地，我們一代人都沒有吃過大苦，過了快五十年的好日子。比較一些我去過的地方，奈及利亞、中東、東南亞、印度、大陸、台灣，香港簡直是風平浪靜，甚麼都沒有發生。如果把這些地方的歷史拍成故事性的電影，香港的劇情一定最淡。我們好像活在歷史的最後一章，意識型態競賽的終點，還可以發生些甚麼？
我想，如果我二十多年來一直在香港，不到處走，會怎樣？我可以想像自己好則住在港島南區淺水灣、舂坎角之類，每天早上由司機開着黑色町姆娜房車，送我到中環上班，沿途我看《南華早報》……不知為何，我想來想去只有這些分別而已，其他的生活我現在也不缺。」

——摘錄自陳冠中〈什麼都沒有發生〉，載《香港三部曲》，頁137-138`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2742691,lng:114.1455821}},{type:"地景書寫",publication:"石板街——蔡炎培〈石板街〉",description:`「你在陽台望著我 
滿有笑眉風在泣 
雲咸的門當與戶對 
不像字畫文玩嚤囉街 

你滿有會心望著我走下 
長街是塊會跣腳的石板 
一列書牆矗立街角 
扶我唐璜是隻魚眉的夜鶯

中環碼頭在望
午間出廠的貨物報了關
手中書湧的人潮
巻帙浩繁踏正了下班

你的陽台住過風華正茂的真光女 
今天我去探望徐娘半老的姨媽」

——蔡炎培〈石板街〉，載《我香港，我街道》，頁95-96`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.282367,lng:114.1549273}},{type:"地景書寫",publication:"渣華道——曹疏影〈渣華道〉",description:`「渣華道戒心重重
他買魚放生 
老闆娘周身白花 
魚皮煎了還倦 
捻花生茶走
他東瀛回來煮得
一手好人面

憨獸之心 
石階下潛帆
兩邊風都不撒手
掰一個狹縫
陰蒂上斷崖
相逢了忘卻
Party了忘卻 
風暴了忘卻 
廉潔了無恥忘卻 
隱匿了確幸不大了忘卻」

——摘錄自曹疏影〈渣華道〉，載《我香港，我街道》，頁146-147`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2925158,lng:114.2011455}},{type:"地景書寫",publication:"馬頭圍道——鄧小宇〈馬頭圍道——我童年世界的全部〉",description:`「一條馬頭圍道，單是我居住那一段，衣食住行，想得出的物品差不多都有售，連錶行都有幾間，裝上「雷達錶」、「依波路錶」、「得其利是錶」的大型霓虹光管廣吿牌，無需去到旺角彌敦道，我們馬頭圍道晚上整條街也是燈火通明挺熱鬧的。其他日常生活所需亦不假外求，在我家對面，榮光街口有一間金門麵包店，今天仍可買到的雞尾、菠蘿、椰絲
奶油包、紙包蛋糕、方包等等小時候已有供應，店內還有一部電動切麵包機，現時的方包都是預先切成一片片包裝好，小時候則是即買即切，類似這種切麵包機現時在些凍肉店仍見到，作切肉用，記憶中金門麵包一度在全港各區都開分店，不正是連鎖店概念的先驅？但不知為什麼慢慢被時代淘汰了。」

——摘錄自鄧小宇〈馬頭圍道——我童年世界的全部〉，載《我香港，我街道》，頁204-205`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3154554,lng:114.187525}},{type:"地景書寫",publication:"九龍城寨舊址(3)——潘國靈〈遊園驚夢〉(2001年)",description:`「我記得曾寫過一篇文章，向外邊的人說說城寨的變遷。城寨於外人來說儘管惡名昭彰，在我的記憶中，卻是美好的。的確，黃賭毒曾是城寨的標記，聽長輩說，五、六十年代，這裡曾經有脫衣舞看，查實是非法賭檔的幌子，光明街是販毒『追龍』之地，龍津道上有滿列的牌九檔、狗肉檔和煙館。不過，一個地方，每個時期有不同的歷史，在我的成長時期，城寨是一個正欲從良的娼婦。踏入六十年代末、七十年代起，脫衣舞幾近絕跡，賭檔、狗肉檔、毒品活動已大為歇息。我經驗中的光明街，不因『追龍』之火而『光明』，而真正是光明磊落的『光明』，街上經營的是正當行業，最多的是食品工場。我心目中的城寨是一個自行發展、自行規劃、不假外求的社區，在城寨福利會工作十多年，我曾經與城寨街坊群策群力，在區內鋪路、維修渠道、設置街燈、裝設路牌、宣傳防火、清潔環境、為坊眾排解糾紛，舉辦街坊康樂活動、籌募教學及福利服務經費。我接受教育的義學大樓，多年以來就是由城寨居民自資經費籌辦教學。既然是『三不管』，就自己來管理自己。但這一切努力，最終怎樣也沒法洗滌烙印了的刺青——『三不管』、『三教九流』、『三山五嶽』。」

——摘錄自潘國靈〈遊園驚夢〉，載《滄浪》第20期`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3316098,lng:114.1900641}},{type:"地景書寫",publication:"上海街(6)——潘國靈〈麥田捕手〉(2001年)",description:`「上海街一點也不像上海，怎麼會得來此名，一般人都沒有興趣深究。即使是像中了上海街邪的麥田，如果你告訴他：『上海街前身叫差館街，一九九年重整街道時，因避免與香港島的差館上街混淆，易名為上海街。二十年代起，曾是九龍最繁盛的商業中心，金舖、錢莊、酒樓茶室、涼茶舖、百貨店、鑼庄、當押店、故衣店等，各種商舖林立……』，麥田也準會聽得連隨打起呵欠來。
不要說過去，就算是現身的上海街，麥田也只是局部地區感興趣。上海街是九龍最長的街道之一，整整貫穿柯士甸道至荔枝角道。這條街道大致可分為三個部份：由山東街至亞皆老街地段被政府劃為大規模重建的『重建區』；集中於山東街至登打士街地段的『紅燈區』，這裡各種馬檻、指壓場、賓館林立；『重建區』以外的『老化區』，有不少老式商舖，亦有畫人像師、賣老花眼鏡小販、擦鞋匠在這裡擺路檔。麥田最感興趣兼連夜流連的，只侷限在『紅燈區』的地段。」

——摘錄自潘國靈〈麥田捕手〉，載《病忘書》，頁160`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.314992,lng:114.16897}},{type:"地景書寫",publication:"文明里——潘國靈〈麥田捕手〉(2001年)",description:`「油麻地與旺角毗連，但油麻地一帶明顯比旺角蒼老兩地彷彿隔著一道時光隧道。不知是自覺還是不自覺，他越來越離開了旺角色彩斑駁的霓虹，而往破落霉爛的盡處走。這個盡處便是廟街，一處與霓虹無關的地方，一處不是以霓虹作招徳，而以坐在樓梯口的老鴇作勾搭的地方。
麥田走到缽蘭街與文明里交界的十字路口，文明里直挺挺的將缽蘭街與廟街分隔。不過是一街之隔，兩處地方卻好像兩個絕緣世界，彷彿廟街街頭大刺刺的寫上『行人止步』四字一一遊走於霓虹架步的年輕娼妓，都不屑走進廟街為娼，這對她們來說是一種不能翻身的淪落。」

——摘錄自潘國靈〈麥田捕手〉，載《病忘書》，頁180`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.311792,lng:114.1702191}},{type:"地景書寫",publication:"彌敦道(3)——華蓋〈彌敦道抒情〉",description:`「彌敦道，你是耽於肉慾的。但我愛你，就像我愛希臘神話那放縱情欲，又充滿光、熱、力的戴奧尼西斯，何況你的面影是如此瑰麗，使我難以忘記。你可知道，每當我半夜從夢中驚醒，你的聲音笑貌就包圍着我，令我砰然心動，久久不能復眠。
彌敦道呵，你是神采飛揚的。我愛你。」

——摘錄自華蓋〈彌敦道抒情〉，載《中國學生周報》 第639期，第1版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3107219,lng:114.1710461}},{type:"地景書寫",publication:"尖沙咀(2)——東瑞《尖沙咀叢林》(1998年)",description:`「人們一聽到你的寫字樓或住宅在『尖沙咀』，通常不假思索的第一個反應是『好地方』。所謂『好地方』其實質的内涵其實是『租金那麼昂貴的地方，你能在那兒立足，了不起』！
是的，尖沙咀東部（新區）確是全港九除了半山之外，租金數一數二的地方；連帶這裡的舊區，餘勢猶存，雖差過新區一至二千元一尺，仍成地產代理商覬覦之地。一旦羅致一間空置的寫字樓，如獲至寶！他們每日向你的門縫塞入印刷得精美的代理樓宇的宣傳品，想為你精誠服務，讓你不失時機地有更大的大展拳腳的機會，將他們從中攫取巨利的居心細細密藏。連頭裹白色頭巾的、懂得占卜的巴基斯坦人，也會拎著一個小皮箱，不時站在你玻璃門口按鈴，用奇準的咬字（只是腔調怪怪的）對你說：『老闆，為你算命看相，不準不收錢！』發財良機分分鐘都有，只怕你不懂得抓！」

——摘錄自東瑞《尖沙咀叢林》，頁8`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2994719,lng:114.1740625}},{type:"地景書寫",publication:"九龍城寨舊址(4)——杜國威《城寨風情》(1998年)",description:`「金花：金花。呢個係我丈夫曾曙。我個孫仔曾醒目！
記者：點解你地仲仍然留低，唔肯走呢？
金花：我兩公婆都係原居民嚟！淸朝喺陣我地祖先已搬嚟落籍。
曾曙：（忍不住）伯爺婆呀，講正題啦！
金花：呢我老公個大太公喺城寨做官築城牆打海盜。
曾曙：伯爺婆你愈講愈離題噃。
金花：唏，咪岔亂歌柄啦！（推開曾曙）呢龍津義學係曾家後人建辦㗎！唉鬼仲記得咩！
記者：阿嬸，我諗冇乜時間……
金花：畀我講多句吖。一句咁多！吓？
記者：快啲吖！’
金花：我『賴』死唔走，唔係『喬』乜『喬』物呀！唉一句講晒！（對曾曙）伯爺公你講，嚟對正鏡頭！
曾曙：（對鏡頭）生於斯長於斯！我地對城寨有感情！
（音樂起，是第一幕的《城寨之歌》的樂章。）
（其他的居民也漸漸走近走近。一時間全部集中了很多人，望著前面的城寨高處。）
（蓬蓬蓬拆樓聲，景物起了濃煙、濃霧。一座座城寨背景移離，代表拆遷。）
（背景大廈移離了一些，停止不動。）
（Cindy與明仔出來，兩人均已三十多四十歲了）
（曾醒目見是父母，喜）
醒目：爺爺嫲嫲，爹哋同媽咪嚟啦！
（明仔與Cindy走過來，Cindy已作樸實少婦打扮，明仔仍穿勞動工人制服。明仔看見兒子掛上牌子，不悦，把它除下）
明仔：（對金花）媽呀！唔好成日想當年啦！阿仔係新一代嚟喋!
金花：有新就唔要舊啦噃？
明仔：做人要進步㗎。嗱，你舊時煮飯洗衫要擔水輪水，咁你想唔想個孫學你一樣，夏天熱到煎魚咁，冬天仲要沖凍水涼吖？！
金花：……？！
明仔：城寨要拆㗎嘞，係個新開始嚟㗎嘛！以前嘅嘢，就係歷史嚟啦嘛!
金花：唔捨得！……
明仔：記喺個心度咪得囉！」

——摘錄自杜國威《城寨風情》，頁128-129`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3315811,lng:114.1908713}},{type:"地景書寫",publication:"立法局大樓舊址——施叔青〈冤〉(1985年)",description:`「英國首相抵港訪問的那幾天，低氣壓籠罩着港、九上空，是九月間少有的陰鬱天氣。果眞戴卓爾夫人沒有辱沒鐵娘子的稱號，儘管她在人民大會堂，由於挨了鄧小平一記悶棍，使得她心煩意亂，脚下一個不留神，差點扭傷了脚踝，抵港之後，仍是照着緊密無歇的行程，馬不停蹄的進行旋風式的三天訪問。再怎麼說，此地總是早已日落的大英帝國在世上僅存唯一的殖民地，何况那些被共產黨嚇得六神無主的香港人，死死抱住鐵娘子的大腿不放，這就更使她忘記北京的脚傷，一心一意擺起殖民國主子的架勢來了。一九九七是個大限，事關整個香港人的命運，連街邊的小販都感到切身，難怪女首相訪港的第二天，立法局會議室擧行的記者招待會，香港六十幾家中文報紙、兩家英文報，都不敢掉以輕心，選派政治採訪組最幹練的記者全力以赴，務必使明天報紙的頭條令人側目，同時編輯部已經內定一九八二年的十大港聞，英國首相訪港勢必名列榜首，雖然距離年底還有三個多月。
記者招待會是在下午四點鐘，立法局近處周圍的保安措施，早已部署妥當。婦人吳雪三點鐘才過，就在近處徘徊，荷槍的衞兵，門神一樣面無表情，矗立不動，吳雪心存畏懼，不敢走近，只在廊蕪下亍彳。」

——摘錄自施叔青〈冤〉，載《一夜遊：香港的故事》，頁81`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.280941,lng:114.160389}},{type:"地景書寫",publication:"白蘭軒道——東瑞〈情繫尖沙咀〉(1993年)",description:`「上中間道的郵局寄東西時，總喜歡有意無意地在白蘭軒道和緬甸臺兩條極短的街道慢慢地走。緬甸臺那個半死角，如令幾乎成了巴基斯坦人和印度人的天下了。他們聚集在那兒，備有小型載貨車子、搬運工具，幹著體力活。可是白蘭軒那我做過苦力的公司，如今早已易主了。經過一番裝修，已難見昔日面目。雖是如此，我每次走過時，心中總泛起很深的感觸，也許任何地方任何人都一樣，只要曾經流過汗水的，都格外地有一種特別的感情吧！
其實喜歡尖沙嘴，原因還不止於此。早在『尖沙嘴東部』(簡稱『尖東』)這填海區發展成一個新區之後，尖沙嘴便是我經常來到的地方了，尤其是『尖東』。『尖東』和舊尖沙嘴中間以漆咸道相隔，可以說成了九龍繁華的象徵。最微妙的是那幢舊時代的鐘樓，至今依然屹立，與新建築同時並存。記得二十年前初踏香港的土地，火車就停泊在鐘樓附近的舊火車站，我們就是從這兒出站的。
幾度滄桑，幾許變遷，『尖東』已完全換了新貌。當尖東建設完成，以其超現代的建築群和觀夜景的最佳角度，造成了他區所不能超越的優勢之後，以往聖誕燈飾的中心也就從中環搬了過來，尖沙嘴東部夜晚的商業氣息漸退，使它不折不扣成了一個遊覽區和休憩區。」

——摘錄自東瑞〈情繫尖沙咀〉，載《都市的眼睛》，頁89-90`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2969266,lng:114.174573}},{type:"地景書寫",publication:"蘭桂芳(1)——舒巷地〈蘭桂芳〉(1995年)",description:`「從前這邊有樹，那邊有樹
你夏天經過時
會停下來聽一聽蟬鳴
或者在綠蔭下

也忘了哪年哪月起
一些來自他方的洋客 
把這裡當作樂土 周末的蘭桂坊，對了 
如今也成了一些新派男女 
流連的小天地了 
從黃昏到深宵
人來人往
怕的是寂寞吧？
聲浪湧呀湧的 
像喧鬧的海潮……」

——摘錄自舒巷地〈蘭桂芳〉，載《長街短笛》，頁271-272`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2809196,lng:114.1555975}},{type:"地景書寫",publication:"太寧街——舒巷城《太陽下山了》",description:`「泰南街的屋宇樓高三層，已經有三十多年的歷史了；三十年前泰南街是曾經以它的新式的建築物在西灣河區稱雄過一時的。但時間無情，那街上的建築物比起別的新的樓宇來，越來越顯得落後了；它的齊整變為呆板，它的乾淨變為邋遢，牆剝落了，窗破了，門上有了裂痕。二、三樓上一律不設騎樓，下起雨來，寬闊卻又顯得荒涼的街的兩邊行人道，就簡直是『沒瓦遮頭』了。從外面看，除了覺得那兩列屋宇四四方方像香港大多數人稱『白鴿籠』的那種屋子以外，你還不覺得甚麼，但到你進了裡面，聞到一股發霉的，打廚房，床底下，柴堆中，廢物堆裡，打常常晾著『油漆未脫』的返工衫、成人們的衣裳和孩子們的破尿布的冷巷上發出來的氣味了，你就認識到：這條窮街是的確住著一些生活在艱苦環境中的人。」

——摘錄自舒巷城《太陽下山了》`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.282107,lng:114.22098}},{type:"地景書寫",publication:"花園道——葉靈鳳〈日益消失的古老香港〉",description:`「這幾天，花園道口的瑪利兵房正在開始拆卸，有兩棵大榕樹已經被毫不留情地鋸倒了。我真替陸軍監獄前面的那幾棵紅棉擔憂，這幾天開得正是燦爛，看來不用多久，它們就要變成灶下薪了。這一帶不僅有許多紅棉，而且是市中樹木最茂盛的地方。因為自從香港成為英國殖民地以來，這裏就被劃為軍營地帶，樹木受摧殘的機會較少，所以顯得特別茂盛。可是在最近一兩年內，它們的命運就要不堪過問了。
在再上一點的地帶，麥當奴道和梅道一帶，本是半山區最幽靜的地帶。最初有一兩座大廈出現時，搬進去住的人十分高興，因為他們居高臨下，背山面海，佔盡了形勢之勝。可是曾幾何時，前後左右伸起了一座又一座的大廈，前面新起的更高，擋住了海；後面繼起的更高更大，擋住了山。現在住在那裏的人家，甚至住在十樓以上，往往仍是窗口對着人家的廚房，甚麼風景也看不到了。」

——摘錄自葉靈鳳〈日益消失的古老香港〉，載陳智德編《葉靈鳳卷》，頁204-205`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2776756,lng:114.1585557}},{type:"地景書寫",publication:"吉慶圍——葉靈鳳〈錦田吉慶圍抗英史蹟〉",description:`「這是一八九九年春天的事情，當時港英根據上一年（一八九八年）同滿清所訂立的所謂『展拓香港界址專條』。宣佈自深圳河以南至今日九龍界限街的廣大土地為『新界』，並且實行派兵來佔領時，世代在這裏安居樂業的錦田鄉民，眼看自己的廬舍產業就要被英國人所侵佔，而且伴隨英兵來接收的那些殖民地爪牙，又那麼窮兇極惡，他們就承繼了當年廣州三元里義民的光榮傳統，實行武裝自衛，抵抗港英的掠奪接收工作。
這時，吉慶圍的高大圍牆和那道堅固的鐵門，就發揮了抵抗外來侵略的功效。使得英軍無法攻入，一時束手無策。後來，港英要求兩廣總督派兵來協助接收，向錦田鄉民勸解，做好做歹，這才使得吉慶圍的鄉民停止對抗，開了鐵門。
港英控制了當地的局勢後，對於吉慶圍的鄉人和這一對鐵門恨得要死。他們誘捕了許多鄉民之後，就將吉慶圍的這一對鐵門拆毀，並且當作『戰利品』劫運回英。」

——摘錄自葉靈鳳〈錦田吉慶圍抗英史蹟〉，載陳智德編《葉靈鳳卷》，頁247`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4397082,lng:114.064388}},{type:"地景書寫",publication:"九龍城寨舊址(1)——葉靈鳳〈港英如芒在背的問題〉",description:`「更有，那一座九龍城的問題，也使港英一想起了就如芒在背，寢食難安。因為根據當年同滿清所訂的租借九龍新界的所謂『中英展拓香港界址專條』，其中也明白規定九龍城的治權是由滿清所保留。而且還附帶保留自城內通至出海碼頭的一條通路。這許多年來，九龍城內不再有中國官員在那裏設治，也不曾使用那條通路，這是中國方面不曾使用這種被保留的權利，並非這種權利已經不存在了。這種情形，港英是比任何人都知道得更清楚，也無法狡辯抵賴的。它們就一直在耽心，假如有一天，中國方面會通知它，説將派官員回到九龍城來設治，而且將使用目前已經成為啓德飛機場的舊通路。那時它們就簡直不知如何應付了。
這雖是筆者個人所想到的問題，已經足夠使得港英如芒在背，寢食難安。因此，『我自巍然不動』，不論是文鬥、武鬥、長鬥、齊鬥，都是港英必敗，我們必勝的。」

——摘錄自葉靈鳳〈港英如芒在背的問題〉，載陳智德編《葉靈鳳卷》，頁245`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3316433,lng:114.1885887}},{type:"地景書寫",publication:"沙田(2)——漢生《烽火姻緣》",description:`「沙田墟成了繁華的鎭市，尤其新春假期，到處都擠滿人羣。如果沒有那座紅磚的火車站做標誌，他幾乎認不出這裡就是沙田，他伸直了腰背，前後望了幾望，不由的順口問了一句：『這是沙田嗎？』
司機嚇了一跳，心裡暗想，難道聽差了，把客人送錯了地方？老遍跑到這裡，如果眞的聽錯了，那纔寃天下之大枉。
『沙田，港九只有這一個沙田！』司機傻着眼，苦着瞼，不敢大聲。
『沙田，……』他一面低聲的念道，一面掏出一張十元鈔票丢在椅子上。推開門，下了車，兩手叉着腰，脊背微駝着，臉對着一列整齊的店舖發怔。」

——摘錄自漢生《烽火姻緣》，頁3`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3770876,lng:114.1990493}},{type:"地景書寫",publication:"彌敦道(4)——潘柳黛《風塵尤物》",description:`「從九龍塘到九龍城很近，祇要幾分鐘時間就够了，車上葛一新問起瑞芬的近况，瑞芬說是明賢要換一個職業， 一問一答，在車上說話很不方便， 一新建議不如找一處地方談談，瑞芬替明賢求職心切，自然也不反對，於是一新將車子開向太子道，轉進了人潮如水的彌敦道上，然後熟練地，把車停在一家新建成的大厦門口。」

——摘錄自潘柳黛《風塵尤物》，頁4`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3105398,lng:114.1710783}},{type:"地景書寫",publication:"愛秩序街——董啟章〈愛秩序街〉",description:`「愛秩序少校的個人起居生活有條不紊，律己甚嚴，例如在前線戰鬥的槍林彈雨間,依然堅持在下午四時用下午茶。少校說話亦井然有序，層次分明，而且從不讓人打岔。所以少校亦可被視為一反戰分子，因為他對一切混亂深感厭惡，也不能容忍屍體橫七豎八隨處亂躺。愛秩序少校的神化，未知始自何時。可能由於早期本地村民飽受海盜的侵擾，而愛秩序少校派駐重兵布防的舉措維護了區內的安全，於是便有村民把他視為祈求布平安的對象。後代輾轉相傳，愛秩序便蒙上了神祕的色彩。後來有人於海灣旁蓋建一愛秩序廟，供奉一威儀媲美關帝的愛秩序公，與附近阿公岩的譚公廟遙相輝映。
據說在一九六六年因天星小輪加價而引發的暴動期間，愛秩序公曾多次顯靈，囑咐人們服從香港皇家警察隊。」

——摘錄自董啟章〈愛秩序街〉，載《地圖集》，頁113`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2778331,lng:114.2283912}},{type:"地景書寫",publication:"海洋公園——吳美筠〈海洋公園〉(1985年)",description:`「『放棄海洋 
强振重甸的身軀 
每回表演重覆幾許款挪 
就只爲回旋後迎接 
掉來的一尾鮮魚 
你算是什麼 
要不是我的耐心敎導和暗示手勢 
你別想擁抱合時候的喝采 
你算得是什麼？』
『放棄對人對事的抱負 
晨昏不定地面對死水 
每回表演機械地抛魚兒弄手姿 
就只爲每月的存摺 
跳出增長的數字 
你算是什麼 
要不是我驕人的身軀靈巧的動作 
怎喚來振撼的掌聲 
你算得是什麼?』」

——摘錄自吳美筠〈海洋公園〉，載《大拇指》 第207、208期， 第7版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2337348,lng:114.1705133}},{type:"地景書寫",publication:"文錦渡——《陳君葆日記》",description:`「［一九六七年］ 十月卅一日 星期二
今日比昨日暖。晨早散步，僅摘得三兩朵夜合回來，園中似因季旱而乏水也。不過有些樹，洋紫荊已着花了。昨摘回的一朵粉紅色玫瑰，今日仍開着，但已渐覺褪色了。
散步回來還未至八點，李太太已把老金的一封信送翅來，是「戢山愚叟」的兩首七律，不過有些字句更動了，所以他重寫連信送來；我覺得其第一首較好。「冷立青眉」改作「龐眉」。詩興一時煥發，酬他一首：
得蕺山愚叟賜書兼示和一峰寄慨兩律仍用前韻：
手中白筆匣中龍，已外形骸氣益充。
豈謂鉭麑非國士，只應朱亥是英雄！
敵來電露思胡馬，勢異蕭韓睨壤蟲。
九萬下荒殊向背，可能揚厲式餘風？」
昨日，灣仔有群眾大會舉行，反擊「香港週」！
文錦渡群眾昨在橋頭開抗訴會，要港英拆除鐵絲網，恢復交通。」

——摘錄自謝榮滾編：《陳君葆日記》卷六，頁115-116`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5346878,lng:114.1275855}},{type:"地景書寫",publication:"佐敦道碼頭舊址——《陳君葆日記》",description:`「［一九六七年］六月廿八日 星期五
晚飯後，聽電台播，參加時事述評的，有幾個是剛到北京訪問過的，名字記不得了，只所提的幾種論點，倒值得注意。有幾個指出，內地武鬥的殘酷，實不如此間所言之甚，廣州、上海均如是；所謂『鬥倒』、『批臭』、『拉下馬』等等字眼，聽來可怕，多半形象名詞而已！一位女性的旅客，講話中表示對文化革命甚為悲觀，她只看到可怕的方面，沒有看到好的一面，不相信『破立』的理論。一位較有見地和經驗的觀察家，則有條理地括為幾點説：一、中國目前不是在打內戰，沒有內戰這回事，這是肯定的；將來會不會演成內戰，那是將來的事！去年六、七月間武漢事件，那是可能演成內戰的，但那已成過去了。二、文化大革命，顯然主動權是操在毛澤東自己手裏；江青雖很能幹，有才，但事實上只是為毛主席命令行事而已。三、生產雖受到影響，未完全恢復正常，但產量已有了很大增加；交通運輸比去年好轉好多了。四、還有一點像是關於周恩來、陳毅與對外關係的；詳細記不得清楚了。參加談話的，有遠東經濟評論同事某君，似非戴維斯。

六月廿九日 星期六
曉行，大家都以為晴，然而回到家裏後，又下一場雨，雖不大。
滄海浮屍，發見於港島方面，具報道計共二十具，大約不會再多了，其中有兩具竟漂流至佐頓道碼頭附近，是帶潮衝入的了；這些我們的報紙也的確隻字沒有提到，而事實上也有異於『江河氾溢，人或為魚鳖』了！進行鬥爭，人頭落地，在所難免，亦意中事，幸而這還沒有發展成為『內戰』。
碧海浮屍，也的確是慘絕人寰，不聽卒聽不下去的事！究竟是甚麼原因呢？真相如何？也很難推測！今日《明報》刊登了一封據謂是《讀者來信》，指稱是由於海南島築飛彈基地，為要保密，基地完成後，竟圖滅口，把二三七名勞工於寶安縣海上屠殺，因而屍漂流海面。投函人自述是押送勞工的幹部；這故事聽來是很駭怕人的，但不知是否可靠，抑或基捏造出來的。不過這逃港的幹部，是否真的，且不説，但浮屍則竟是事實了。」

——摘錄自謝榮滾編：《陳君葆日記》卷六，頁198-199`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.305747,lng:114.1675798}},{type:"地景書寫",publication:"西邊街(1)——陳慧《拾香紀》",description:"陳慧《拾香紀》，頁168-169",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2864503,lng:114.140766}},{type:"地景書寫",publication:"彌敦道(5)——陳慧《拾香紀》",description:"177-178",styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3103612,lng:114.1711019}},{type:"地景書寫",publication:"彌敦道(1)——侶倫〈殘渣〉",description:`「大小姐和子明才走到半途就折回來了。她們沒有把握能夠順利地走到官涌。
彌敦道已經陷於混亂狀態；一連串一連串的軍車，炮車，和沒有隊形的英方士兵，由青山道沿着彌敦道奔向尖沙嘴，渡海撤退到香港去；樣子非常狼狽。車輛的交通停頓了。街道上除了軍隊的活動，沒有別的閒人；店舖都是關門閉戶的。窩打老道的火車橋附近，開始有歹徒搶劫了，並且殺死了人。有人謠傳着説：青山道已經出現了日本兵。……」

——摘錄自侶倫〈殘渣〉，載許定銘編：《侶倫卷》，頁212`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3111136,lng:114.171002}},{type:"地景書寫",publication:"獅子山(2)——侶倫〈夜岸〉",description:`「——阿姐，這件事我也想不到的。這完全是阿成自己闖的禍。你知道前些時有人收買電線嗎？聽説那是值錢的東西。阿成早就向我提起過了，他説只要有辦法弄到幾十碼電線，就比在垃圾堆裏挖十天八天好得多。當時我以為他只是這樣説説的。昨天早上，他來找我，説他要到沙田去，由獅子山爬過去就是，不用坐火車，邀我一同去走走。在路上，他滿有把握地吿訴我，他曉得怎樣剪電線，怎樣把它捲起好好的收藏。只要手頭有了電線，便不愁沒有主顧的。
——你為甚麼不阻止他呀，牛哥。
——我哪裏知道他的主意？同時我也不知道會危險得那麼厲害的。阿成在一處沒有人注意的山頭找到可以下手的地方，他叫我站在那裏作警戒，他悄悄的爬上去把電線剪斷，剛剛伸手去拉下那根電線，立刻大叫一聲，渾身在震動。我着了慌，急忙跑過去想扶起他來，可是手指才觸到他便覺得震動，只好縮手。阿成已經曲着身子不會動了。」

——侶倫〈夜岸〉，載許定銘編：《侶倫卷》，頁261-262`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3590008,lng:114.1892265}},{type:"地景書寫",publication:"葵涌貨櫃碼頭——陳浩基《網內人》",description:`「經過一九九七年的金融風暴，以及二OO三年的疫症爆發，香港經濟受到嚴重打擊，不少企業老闆為了省減營運成本，將業務外判，或以合約形式招聘員工，逃避資方應負的責任。大企業以低價聘用小公司負責某些工作流程，而小公司亦可能從中取利，將作業再分拆外判給更小型的公司，由於這種層壓式的僱傭關係，勞工的薪水被大幅削減，可是由於不景氣，工人們害怕飯碗不保，只能默默承受剝削。區輝輾轉在這些小型外判公司工作，跟其他工人搶奪有限的職位空缺，可幸他在貨倉就職多年，考取了俗稱『鏟車』的叉式起重車的駕駛執照，這正是他的求職利器。除了物流業要聘用懂駕駛和操作劑車的司機，貨櫃碼頭亦有同樣的需求，不過鏟車司機的工作不是搬運貨物，而是『拉纜』。在大型貨櫃碼頭，泊岸貨輪的纜繩既粗且重，無法用人手牽拉固定在繫纜墩上，必須使用鏟車代勞。為了增加收入，區輝身兼兩職，不但在九龍灣的貨倉負責搬運貨物，更在葵涌貨櫃碼頭當『拉纜員』。他想趁自己還有氣力時多賺點錢，畢竟年紀愈大身體便愈不中用，他日即使想多兼幾份差事也力有不逮。」

——節錄自陳浩基《網內人》，頁15`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.333019,lng:114.1287324}},{type:"地景書寫",publication:"大埔道——曹聚仁〈酒店〉",description:`「木屋區的世界是廣大的；只要大埔道尾上那麼一個小天地，有機會攤平來的話，就夠填補上太平山半山區的人口。我們從大埔道那廣場，拐一個彎，進入曲折蜿蜒夾道板房擠成的細長市場；電燈到市場口上就停了步，汽油燈、煤油燈和迎風搖曳綠蔭蔭的電石燈，代替另一世界的光明。穿過了柴米，油鹽，雜貨，肉攤，麵店，小茶館，小飯館，故衣攤，舊家具，這些家常日用必需品的市廛；隔上十家二十家，就有條小巷，通往住宅區。由羊腸小徑貫串起來的住宅區，説得具體一點，恰似螞蟻窠穴的放大。往來行人，摩肩接踵，恰似螞蟻那樣一個叮住一個。有時，一連串去的行人，要側轉身來在巷側避道，等那一連串來的行人過了，才可以向前行進。天一大雨，人行狹道也就氾濫成為溪澗，讓大家涉水而過，恰似荒山跋涉，那毗連鱗接的板屋，有如松顆杉叢，整個山頭，就給叮滿了黑點。」

——摘錄自曹聚仁〈酒店〉，載曹臻編：《曹聚仁卷》，頁447`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3439212,lng:114.1550428}},{type:"地景書寫",publication:"上海街(2)——陳國球〈憶昔買書在香港——中學篇〉(2012年)",description:`「高中買書時期遇上的另一個奇景在上海街。當中有一家上書「執笠（粵語倒閉結業的意思）書局」四個大字的舊店。店內書冊堆積如山，有不少是一細一細的連繩子都未曾解開；也有同書上中下冊東飛西蕩，難能湊泊。白髮白鬍子的老店主搖着扇悠閒地坐在店門外的帆布椅，笑看客人七手八腳的淘寶，有些還踩上梯樓以登高，檢得書來就與店主議價。我多是週末有空時來玩賞獵奇，應該買過幾冊趙家璧主編的《中國新文學大系》，或者林語堂、張秀亞之類。」

——摘錄自陳國球〈憶昔買書在香港——中學篇〉，載《香港文學》 2012年8月號總第332期，頁44-`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3151508,lng:114.1689362}},{type:"地景書寫",publication:"青松觀——洛楓〈新界一日遊〉(1984年)",description:`「吿別『雲游仙觀』後，『靑松觀』便以巍峨迎我，而婦女們依舊潮湧般急往廟堂進香求簽，也許，他們在這凡塵實在太多無法完成的心事吧！獨個兒我走到橋邊水亭之處，翠嫩的楊柳，低垂如簾，輕輕撥弄，暖風竟從隙縫間偷吻臉兒，害得我也羞澀地暗怨，怨楊柳多情，誤向俗人投懷。繞過彎彎曲曲的木橋，倚在欄邊，向橋下流水默許誓言，驟然瞥見亭柱的對聯，寫道是：
『翠蓋明珠萬象知機都是幻
水亭曲檻幾人鑑影可無慚』
看罷頓萌感觸，於是便抽身離去；心想那柳堤紅橋，倘終不能免於散滅，那麼廟內寺前的人間煙火，是否也如新界的蒼翠一般，隨時間的流轉而幻逝？此地我曾在橋上鑑影許願，他朝白髮蓬鬆，誰個會爲我而虔誠祝禱？況跪倒神前，口中呢喃，到底是冀求還是懺恨？悔這今生來世許許多多未完的孽債！」

——摘錄自洛楓〈新界一日遊〉，載《大拇指》 第199期， 第8版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4060347,lng:113.9731926}},{type:"地景書寫",publication:"長洲——東瑞〈懶洋洋的長洲〉(1996年)",description:`「的，在兩位為一個共同目的來到長洲的伴兒回到崗位時，我多次蹓了出來，在這兒偷得半日閒。做事要合伙，思考卻宜獨處。回想這大半年，熱情的朋友來來往往，多得有時就辦不了事，而時時卻又那麼珍貴。甚麼時候可以慢吞吞、懶洋洋地坐著、活著並整理一下思緒和思路呢？人生如一部大書，需要章節分明、目次清楚，小說高潮、情節都是人安排的呢。長洲的懶洋洋情調，正給似我講究高效率高節奏的人以一思索反省的最佳環境。」

——摘錄自東瑞〈懶洋洋的長洲〉，載《香港文學》 第135期，頁 64`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2096604,lng:114.0292615}},{type:"地景書寫",publication:"大澳(1)——鍾國強〈大澳的長堤〉(1987年)",description:`「過去鋪展在單車停止的輪前
那曾是昔日的堤路，你說
你就是昔日的孩子
像其他同伴一樣放下釣絲，紙鳶，母親的衫線
沿著唯一的出路
跑往繁華的鬧市
你指著眼前大大小小的缺口
談海潮說巨浪
老開不倦的玩笑
也無必要修復了，你說
你望著平靜的海
渡輪緩緩啟碇
巴士停了片刻
又開出了
那邊其實不遠，我想
如果還有時間
如果你有心情
我們或可繞道過去」

——摘錄自鍾國強〈大澳的長堤〉，載《香港文學》 第28期，頁50`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2523439,lng:113.8646555}},{type:"地景書寫",publication:"吉澳——也斯〈吉澳的雲〉",description:`「也許，吉澳的雲的秘密是它們不大動。一般的雲走來走去、結合、變幻。這裏的雲卻像這裏的人，懶洋洋坐在樹下、屋內、門邊，看着一星期才來一次把這兒弄得熱鬧起來也骯髒起來的遊客。他們是不動的，彷彿正在攝扇或聽收音機，回憶往昔或懷念離開了的人。」

——摘錄自也斯〈吉澳的雲〉，載《街巷人物》，頁42-43`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5393746,lng:114.2970597}},{type:"地景書寫",publication:"破邊洲(1)——也斯〈石的呼吸——記破邊洲〉",description:`「水怎麼這樣澄淨？你看小艇緩緩移過水底一塊巨大的白石，那麼白，在綠色的水中，陽光照下來，點點彩虹，緩緩地，緩緩地，艇移前去，移過了那水面上的陽光點點，那塊白石。再看，你可以看見水底一團團黑色的，那些海膽。水是那麼澄淨，海底看來也好像伸手可及。而在兩旁，石上有石化了的貝殼，有些像蓮花，有些好像張開嘴巴，當你的艇經過時你可以觸及它們。它們張開，它們吐納。不過，四周都這麼靜，就彷彿連它們也屏住了呼吸。」

——摘錄自也斯〈石的呼吸——記破邊洲〉，載《街巷人物》，頁21`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3587927,lng:114.3777955}},{type:"地景書寫",publication:"大澳(2)——也斯〈大澳的夜〉",description:`「我們都同意，大澳的夜晩比白天美麗。那種損爛與灰 塵，那種殘破的感覺，都消失在黑暗中了。新建的學校還 有燈光，燈光倒影在水上，好像暗示隱埋了不少影影綽 綽的風景，其實只遮掩了白天這兒狹窄的一泓淺水。」

——摘錄自也斯〈大澳的夜〉，載載《街巷人物》，頁39`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2523181,lng:113.8660658}},{type:"地景書寫",publication:"坪洲——劉偉成〈情詩兩首——坪洲南山小徑〉(2002年)",description:`「小徑的最後一段，很陡
左邊是石階右邊是斜道
你輕噓一口氣，稍定心柛
選擇拾級，一步一步上攀
我則喜歡偶然來個突圍的挺進
在頃刻間享受盡情爆發的快感
掩蓋自憐的蜜糖，惹來蟻噬的刺麻
儘管階梯規限步幅
你還是默默地追趕，我伸出手
輕托你的腰，想給
你一點點向上的推力你停步望我，滿有尷尬
低頭我瞥見路邊草葉上一隻蝸牛
背後一道黏液，在陽光中發亮
時間一閃一閃地，在笑」

——摘錄自劉偉成〈情詩兩首——坪洲南山小徑〉，載《文學世紀》總第15期，頁77`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2833441,lng:114.0430529}},{type:"地景書寫",publication:"廟街(6)——黃傲雲〈廟街的未央歌〉",description:`「但廟街的榕樹頭，仍然有新的賣唱者來代替，因為榕樹頭是最好的練習場地，聽說有不少日後歌星，是從榕樹頭出身的，又是最後的避難場所，人生有唱不完的歌，唱到最後時，總要找知音，榕樹頭的觀衆，才是不求選擇的觀衆，因為在人生的路上，他們已無可選擇，才來到榕樹頭，彼此都在避難嘛，彼此都有感應嘛！這便是香港的六十年代，我正在大學念書，把頭伸向榕樹頭，我才見到香港的社會。
後來我去了英國念書，又到過南洋幹活，活得過來，又回到香港來。廟街的榕樹頭，仍然一邊在唱粵曲，另一邊在唱國語時代曲，後來唱國語時代曲的，改成粵語流行曲，我知道香港在變了，在本土化了，聽衆有大部分不是本士出生，就是本土長大的人，他們需要發出的，只屬於自己的聲音。
後來粤語流行曲又糅雜了國語時代曲的調子、粵曲傳統性的句子，我知道香港又變了，保存了本身的，吸收了外來的，才變成時代的聲音、這是香港特有的聲音。」

——摘錄自黃傲雲〈廟街的未央歌〉，載《香港文學》 第139期，頁29`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.306758,lng:114.1700737}},{type:"地景書寫",publication:"上海街(4)——廖偉棠〈從得如酒樓到麗泉桑拿，我們望天打卦〉",description:`「五金如錦鯉，指壓如鑽石
招牌道出私隱
你就是你自己的廣告。
我們望天打卦
上海街沒有上海
有的只是草木鳥獸之名
可是金玫瑰卡拉OK
你唱得出來
驚濤和碧泉湧出桑拿
森林裡遊蕩著鹿角嗎？」

——摘錄自廖偉棠〈從得如酒樓到麗泉桑拿，我們望天打卦〉`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3154329,lng:114.168888}},{type:"地景書寫",publication:"天樂里——廖偉棠〈上海街與天樂里〉(2015年)",description:`「彷彿輪迴，今天我又回到了天樂里這個位置，在天樂里正對著的一座老樓房「富德樓」的二樓，我和香港一群年輕作家，建立起我們的香港文學生活館。是的，我們打消了等待政府、等待西九龍藝術發展機構伸出橄欖枝，最終用民間的辦法建立起香港有史以來第一間文學館。」

——摘錄自廖偉棠〈上海街與天樂里〉，載《香港文學》 總第三百六十三期，頁21`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.27846,lng:114.1796977}},{type:"地景書寫",publication:"上海街(1)——黃雨〈上海街〉(1949年)",description:`「上海街
骯髒的街
發散著人的惡臭的巷

它出售各種各樣的膺品
出售人類的奸險
和最卑劣的聰明」

——摘錄自黃雨〈上海街〉，載《文匯報．文藝周刋，第十九期》 第五版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3152973,lng:114.1689124}},{type:"地景書寫",publication:"上海街(3)——郭少棠〈上海街〉(1997年)",description:`「土地發展公司計劃重建旺角一段的上海街，《經濟日報》準備寫個上海街滄桑的專輯，原先希望發掘一些名人在上海街發跡的歷史，但竟然在我身上我到點滴般的街道的温情小品。
記者和攝影師坐在先父創辦五十多年的中藥局，聽着我細訴當年。
我家四代中醫，父親早年跟祖父學醫，後來因爲祖父多妻*家庭糾紛僱亂，父母親被迫離家，另謀發展。祖父的藥局在新塡地街、亞皆老街附近。外祖父母一方面在何文田旺角火車站附近開個花圃賣花，另方面又在亞皆老街、新塡地街交界辦間路邊熟食檔，那一帶正是土發公司將會重建的地區。
曹禺筆下的傳統家庭悲劇發生在祖父母家中，父母親含淚離家，抱着多少辛酸。幸好外祖父母的支持，父親找到血地新塡地街、著街交界的一間舖位，另創藥局。祖父的舊藥局名爲『杏林藥局』，父親的則改稱爲『新杏林藥局』。」

——摘錄自郭少棠〈上海街〉，載《信報》，1997年9月30日`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3148224,lng:114.1690007}},{type:"地景書寫",publication:"井財街——也斯〈愛美麗在屯門〉",description:`「好景不常，經濟逐漸不景，連茶餐廳也要裁員，愛美麗逼得另尋新就，終於還是回到新界西，在屯門井財街附近的茶餐廳找到新工作。愛時髦堅守中環，寧死不屈，她在南蠻亭小館為愛美麗餞別，可憐她從此西出陽關，離開中心的繁華。愛時髦近日也愛説新社區和邊緣，她和阿健拍拖也會去逛逛油街或是牛棚，只有已經在報上宣傳過大家認可的邊緣社區才是有趣的邊緣。元朗屯門是她出生之地，卻是她想忘記的荒漠地帶。」

——摘錄自也斯〈愛美麗在屯門〉，載《香港文學》 第205期，頁5`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4021393,lng:113.9775472}},{type:"地景書寫",publication:"梅窩(2)——阿里巴巴〈梅窩遊記〉(1971年)",description:`「祭完五臓廟，我地組去行山。首先去銀礦洞；洞裏面好黑，D空氣又唔流通，『設計』得好水皮，空氣調節重冇我地班房咁好。後來我地又跟住D山路行，行行吓前頭部隊亞『肥豬王』話見到D怪物阻住條路。好在我行包尾，擰轉頭走第一。途中我地又遇見D野狗，嚇到『大口魚』面無入色，行都行唔郁。我地『七大寇』又刻咗個名係山頂塊石度，好似武俠片咁。
後來返到碼頭，原來亞『披頭草』單車技術水皮，撞咗落田，成個咀邊損晒，『亞Q』又跌咗隻鞋落山，都可謂傷亡慘
重矣！回程個陣，亞蛇叫我地三二等，慳番幾皮。我地大家都冇意見，於是乎番尾企食晩飯可也！」

——摘錄自阿里巴巴〈梅窩遊記〉z2載《中國學生周報》 第1012期，第8版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2665128,lng:113.9962335}},{type:"地景書寫",publication:"東坪洲(2)——樊善標〈街鼓樓風〉(1988年)",description:`「說島居平淡是有根據的。抵達前朋友吿訴我，那裏沒有電話，電力也闕如，夜裡點汽燈沒要緊，糟的是攝氏三十幾度的下午，僅仗扇子驅暑，搖得汗出如漿才有那麼一絲風，無異飲鴆止渴，至於電視機和電冰箱，當然是苛求了。這環境對久享現代文明的城市人來說，已是原始世界。但我們心目中的離島就該這樣子。長洲、南丫島已給塵囂都市伸爪攫取，那若干浬的海程遂廢成一種累贅。不像東坪洲，踏上王爺角碼頭，香港的建築物都拋在島背後，視網膜暫時抹掉習見的立方體，於是大自然的雲天樹水樹擴展開來，薰薰然藍上眉頭綠下脣髭，不再侷促於橄欖形的小眶。到放恣的顏色漸理出輪廓，我們發現對岸星散的矮房子，有人說彼處就是寶安縣界。原來那片大陸連山迤邐到海隅，吃一刀截斷去路，隔葦杭的水程眈眈虎視，難怪翠色積疊得如許深沈。」

——摘錄自樊善標〈街鼓樓風〉，載《博益月刊》 第11期 ，頁42`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5384685,lng:114.4382034}},{type:"地景書寫",publication:"卑利街——秀實〈風貌與掌故——庇利街印象〉(1988年)",description:`「臨近士丹頓街處有一道陡直的石梯，梯旁建有一座廟宇，叫『伯公老爺廟』。那是一座袖珍的小廟，安放在鐵皮搭建的簡陋建築裏。柱上刻鑿着兩副聯子，外頭的是：『陶塘顯跡傳千古，石壁揚靈及四方』，內裏則寫道：「伯伯威無上，公公澤孔長」。油漆已不全，但仍可見其端正飽滿。廟雖小而簡，香火却甚鼎盛，廟前懸着數個香塔，煙瀰霧漫小小的廟中。伯公老爺深受坊衆的敬拜，而這個廟子，也必鈎沉着無數的靈蹟和掌故，相信就在那些出出入入的善信的口邊。
由廟再上，又是一道石梯，上接羅便臣道，這是庇利街的盡頭。這裏車馬喧喧，行人也多，又是另一番景象。人走到這裏，雙脚已倦，也不願折返原路了。
對庇利街，我是陌生的。但和其它街道一樣，走在其中，左顧右看，有着一份親切感。街的風貌日日依舊，街的掌故繼續流傳，未看過，不知道，這不打緊，只要你仍然愛這個城市！」

——摘錄自秀實〈風貌與掌故——庇利街印象〉，載《香港文學》 第43期，頁25`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.282327,lng:114.1524076}},{type:"地景書寫",publication:"何文田——柯振中〈何文田的前世今生〉(2003年)",description:`「五十年代末的那座忙鬧鐵皮混合石棉瓦頂的菜市場，就位處今日何文田公主道跟培正道高架公路行人天橋齊集的交界地，常興街早建為休憩小公園及香港房屋委員會展覽中心，小公園對過公主道另一邊半坡上則早坐落著余振強紀念中學了。那小橫街近山深處我常時上門的理髮店及林林種種遠近店戶今日已建成佛光街兩邊的何文田屋村和公開大學校址。公主道大馬路另一端斜向京士柏衛理道的斜坡路旁大麻石砌成的舊日古雅小天主教堂依舊聳立，卻已變成天主教香港教區傷殘人士牧民中心，不知星期天還照常舉行彌撒沒有？『樂道健康院』經年維修保養不俗只是給左右兩側新蓋摩天大廈御龍居和多層高樓醫療輔助隊總部鎮在中間，顯得有點透不過氣來；不過仍穩穩兀立原址持續服務造福社群。它是這一帶除培正中學外僅有的六十年代的何文田舊景貌。」

——柯振中〈何文田的前世今生〉，載《文學世紀》 第三卷第二期總第23期，頁63`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.318507,lng:114.1755339}},{type:"地景書寫",publication:"香港政府總部——潘國靈〈沙城前後〉(2015年)",description:`「從某時開始，你說起沙城所有地方都得加上一個『舊』字，或者『前』字。前星星碼頭我們曾經一起送別過仍記得它的機械銅鐘鐘聲伴蒼旁邊輕盈清脆的雪糕車聲音。前女皇碼頭我們倚著欄杆呼出煙圈女皇遠去了將來這裡將是與我們無相平的海潰長廊。遊行示威至前政府山有你我的足迦但已成為歷史這裡將變成保育、綠化和發展地帶。前添馬腫的環球嘉年華會中我們也坐過摩天輪但這只是暫時的過渡狀態最後一日歡樂已經派送完畢後來就成了儼如高牆的『門常開』。我們一起共看的風景全都成了廢墟。在沙城之中。你我都曾目擊，悄悄進行又驚心動魄的城市變臉。而我們的臉上也生出了皺紋，添了風霜。」

——摘錄自潘國靈〈沙城〉，載《香港文學》 總第三百六十九期，頁22`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2803133,lng:114.1659107}},{type:"地景書寫",publication:"西邊街(2)——王良和〈你為甚麼到這裡來剃鬚呢？〉(2007年)",description:`「離開了我的西邊街，遠離了黑暗的巷子。雞籠環像雞籠，我理髮的地方陽光普照，攤子處處，魚蝦蟹金錢葫蘆雞。簡陋的理髮木棚。中年男人。我同學的爸爸。他在學校『乖唔乖』？『乖。』收音機。講到兵困景陽家國破，歌殘玉樹後庭春，攜住二妃藏井底，死生難捨意中人。五號開始發力，從後面追上來，快馬加鞭，鞭鞭有力。陽光普照，攤子處處。攢錢的紙板。攢氣球的紙板。軟軟地垂著的印上波浪紋的黃色大氣球。還有兩塊錢。吹得比籃球還要大。眼球彈來彈去。最後一角給了弟弟。母親的衣架。陽光下的小路。怎麼辦？一起淒涼大哭。三個『飛仔』用刀指著我們，把錢搶去了！他的頭髮剪得短短的，後腦青青的，像個小和尚。小和尚真會說謊。哭得比我更淒涼“家門外的光頭胖子，提著老舊的皮箱喊剪髮。露台。刷刷，刷刷，刷刷刷。容易受傷的耳朵。後腦貼上膠布。血。我不喜歡。他現在還提著老舊的皮箱喊剪髮嗎？一塊錢，剪個靚髮！」

——摘錄自王良和〈你為甚麼到這裡來剃鬚呢？〉，載《香港文學》 2007年5月號總第269期，頁18`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2860166,lng:114.1407323}},{type:"地景書寫",publication:"元朗拗頭——MC仁〈新界朋友…〉",description:`「唔該呀司機朋友由界限街走
大埔道青山道美孚貨櫃碼頭
和宜合童子街冇童子
從此上大帽山落嘉道理減道理
老虎落平地打平手
杯渡口掉頭元朗坳頭
上上水吹吹水三個墟
沙頭角有隻狗 新界遊」

——摘錄自歌曲〈新界朋友…〉，載MC仁《自行判斷》專輯`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4440038,lng:114.0436412}},{type:"地景書寫",publication:"太平山(5)——AMK〈山頂•公仔•波板糖〉(1994年)",description:`「斷斷續續點點感覺
你的臉在我心裡打轉
日日夜夜都想跟你
到山頂遠看風景
我送你的公仔在你房中暗凝視著你
偶爾碰到的目光真的竟能弄碎了 波板糖」

——摘錄自歌曲〈山頂•公仔•波板糖〉，載AMK《請讓我回家》專輯`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2743001,lng:114.1436047}},{type:"地景書寫",publication:"荔園舊址(1)——李洛霞〈荔園·荔灣·九華徑〉(2014年)",description:`「荔園有走脫動物的記錄，但不會讓動物餓死，只是牠們要吃多少東西才能安靜地一覺到天明，又要有多少熱量才能抵受得住四面吹襲的寒風？回想一下天奴（這名字多悲慘！），這頭龐然大物我們說牠聽話，因為牠會得聽「拜拜」，一聽到這兩個字，牠就單膝下跪，然後用長鼻子捲起遊客給牠的香蕉，有時是一排香蕉，有時是一條，有時跪下站起，站起又跪下，得到的只是一張紙，或者甚麼都沒有，那就是小妹妹所說的捉弄了。
如果把動物園裡的呼叫形容為野獸合唱團的歌聲，那麼天奴就是這首歌的主音，因為其他動物如獅子老虎黑豹鱷魚駱駝等都不及牠長壽，不能像牠一樣把歌聲寄送得地久天長，如果天奴的靈性如人，則在深宵人靜時，回想自己叫化子一樣的生涯，豈能不狂歌當哭！」

——節錄自李洛霞〈荔園·荔灣·九華徑〉，載《香港文學》 2014年10月號總第358期月刊，頁39`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3425966,lng:114.136484}},{type:"地景書寫",publication:"破邊洲(2)——馬若〈破邊洲遊記——寫給也斯〉(1978年)",description:`「正午了
我們等待著
在灼熱
烤背的陽光下
等待著
船隻繞過
被削掉半邊的山
你說像果壳
我們就停止於兩山之間的水道
船家放下小艇
讓你划著
難忘的景緻
迅即展開
一切超乎理想
海水透明
碧綠
海胆純黑
石塊巨大
白色，閃閃發亮
上面滑游細小的魚
無數輕輕快快
我們仰望
天空鷹羣熱烈盤旋
好一片澄清
真的，一切不是超乎理想了嗎？」

——摘錄自馬若〈破邊洲遊記——寫給也斯〉，載《大拇指》 第85期， 第6-7版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3582271,lng:114.3784789}},{type:"地景書寫",publication:"皇后戲院舊址——潘國靈〈皇后戲院〉(2006年)",description:`「皇后碼頭沒有了，皇后戲院還會遠嗎？當然，碼頭和戲院是兩回事，但在發展的巨輪下，它們卻又殊途同歸，都讓位給商場、豪宅，更能生金蛋的東西。
一間一間戲院人間蒸發，皇后戲院前途未卜，但願它守得下去，黎明不要來。《玫瑰的故事》重映，大約在一九九九年，周潤發的家明和張曼玉的玫瑰，倒後鏡中看世界，看到如花美眷，似水流年。最美的彷彿已在上世紀。《玫瑰的故事》，英文名字原來叫Lost Romance，如果皇后戲院都變身商場，那倒真是失落的浪漫。」

——摘錄自潘國靈〈皇后戲院〉，載2006-11-28《明報》D04版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2813735,lng:114.1564377}},{type:"地景書寫",publication:"維多利亞公園(2)——潘國靈〈皇后之旅〉",description:`「飯店會搬家，女皇銅像也會。皇后像廣場那個，去了維多利亞公園，人們只管叫它維園。一群維園阿伯指着銅像駡： 『通通都是殖民餘孽。』你問阿伯來自何方，阿伯大聲說： 『北角英皇道！』」

——摘錄自潘國靈〈皇后之旅〉，載2007-04-03《明報》D04版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2818651,lng:114.1882973}},{type:"地景書寫",publication:"又一城——潘國靈〈Festival Walk〉(2004年)",description:`「逛過又一城商場的人，皆知道其升降機位置的刻意設計，強迫性導引遊人經過所有商店，所以它的中文『又』字設計成一雙腳走路的姿勢，英文 Festival Walk 就更直截了當。
這種商場行走的觀念，現在是落實於我們的街道設計了。行於街上（或下），就是一趟 Festival Walk。天天都是節慶，當今的市集都在商場了。
隨尖東行人隧道的落成，現在我到文化中心多了一個選擇，取道漆咸道南至麼地道，然後走入車站這個血盆大口，從地下隧道走到文化中心的出口。而這個出口，又是之前說過的啤啤熊王國，真是條條隧道通商場。
地下隧道十分舒適，少了撲面而來的塵埃，但同時，我知道多出來的選擇，其實是被規範化了的選擇，這是城市行人的宿命。」

——摘錄自潘國靈〈Festival Walk〉，載2004-11-10香港經濟日報 C14版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3374256,lng:114.174125}},{type:"地景書寫",publication:"油麻地果欄——潘國靈〈油麻地果欄〉(2007年)",description:`「因為「乾屍」已經太多了。好看的，怎會只是一石一瓦？搬運工人赤膊上陣，汗珠滾過大剌剌的紋身，木頭車、手推車互相穿插，檔主與顧客談笑議價，在城市人溜進夢鄉的時候，有一班人努力營生，政府常說香港人貴乎拼搏，這不就是拼搏精神於暗夜街頭的活活展現嗎？這種人氣，審計署如何量度？或者你會說，我是以遊人的眼睛看世界。我不否認，但如果它本有文化旅遊價值，又何需政府把它掏空心臟，發展文物旅遊用途？政府每次說文物旅遊，我就捏一把汗，文物變成文化的物化，屢試不爽呢。」

——摘錄自潘國靈〈油麻地果欄〉，載2007-05-01《明報》D04版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3122584,lng:114.1685525}},{type:"地景書寫",publication:"大澳(3)——潘國靈〈大澳棚屋〉(2007年)",description:`「說到住屋，什麼香港人不是活在地產商爪下的，大澳棚屋居民就是了。竹枝、木材、葵葉、麻石，後來又加用梓鐵、「坤甸木」等，以最原始的材料，一手一腳就在水鄉之上蓋起房子，很難想像，這門手藝是如何得來的。舊的棚屋是半圓頂的，像船篷，一艘棲身水上的「船隻」，便是漁民的土地概念。葵葉是最原始的隔熱板，葵棚這個名字，記着民間的傳統智慧。
圖中那間棚屋很架勢吧，起得特別高，還張貼紅錢、擺放鮮花，是有什麼喜慶事嗎？噢，是劫後重生。不太善忘的人，應還記得二千年回歸日之際，大澳棚屋慘遭猛火燒燬，幸好棚屋燒不盡，春風吹又生，老百姓就是有一種強韌，你說阿Q 也好：火燒旺地。特區回歸十年，人、事回顧不絕，在回歸事件簿上，是否也應記這一場大火？」

——摘錄自潘國靈〈大澳棚屋〉，載2007-05-14《明報》D04版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2523732,lng:113.8633213}},{type:"地景書寫",publication:"調景嶺——潘國靈〈調景嶺〉(2007年)",description:`「九七回歸，徐徐落下的不僅有米字旗，還有青天白日滿地紅旗。左、中、右已經大洗牌，國慶只能得一個。有兩個地方注定過渡不了九七的，一是九龍城寨，一是調景嶺，怪就怪這兩個地方，比特區一早還要「高度自治」。九龍城寨變了大公園，調景嶺變了地鐵站，紅色馬賽克的，你跟小學生說「吊頸嶺」，他們還以為你有鄉音呢。」

——摘錄自潘國靈〈調景嶺〉，載2007-05-16《明報》D04版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3039703,lng:114.2513783}},{type:"地景書寫",publication:"柏麗購物大道——潘國靈〈柏麗購物大道，一個拾荒者〉(2007年)",description:`「我們都把城巿浪遊人浪漫化了。在班雅明筆下，他們與拾荒者、政治密謀家、波希米亞人、流浪漢，及喬裝打扮的妓女混同。甚至還包括文人── 「詩人為尋覓詩韻的戰利品而漫遊城巿的步伐，也必然是拾荒者在他的小路上不時停下、撿起偶遇的破爛的步伐。」是以發達資本主義時代的浪漫詩人波特萊爾，才寫得出巴黎的憂鬱吧。香港不是巴黎，柏麗購物大道不是香榭麗舍大道，然而，香港自有香港的憂鬱。憂鬱撒滿一地，如被丟棄的紙皮、鞋盒，等待詩人撿拾認領，小心輕放。是的，小心輕放，請再細力一點，別讓快門驚動拾荒的老婆婆，也別讓途人驚動了你。」

——摘錄自潘國靈〈柏麗購物大道，一個拾荒者〉，載2007-01-10《明報》D04版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3021806,lng:114.1717251}},{type:"地景書寫",publication:"油麻地戲院——潘國靈〈油麻地戲院〉(2006年)",description:`「可真是捱過來的。認識它時，它已經是陰濕之地，為求生存，打從什麼時候，油麻地戲院成了日活院線三級電影的龍頭，有份帶動一票看足全日的黃色浪潮。有誰記得，油麻地戲院也曾顯赫一時，座位近千，開業時一度為香港五大戲院之一？
拉闊來看，兩所電影院，其實也標誌着港島與九龍半島根深蒂固的文化差異。利舞台有圓頂雕龍，油麻地戲院有道友追龍。利舞台選香港小姐，金毛強在旺角的戲院割櫈。電影與電影院，都是故事，我們是觀眾，也是看客。」

——摘錄自潘國靈〈油麻地戲院〉(2006年)，載2006-11-29《明報》D04版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.312422,lng:114.1692254}},{type:"地景書寫",publication:"大浪灣——游思行〈私家車〉(2003年)",description:`「未綠燈　到處等　等候通過
十六聲　和弦聲　想約會我
玩樂搬家　接送歸家　兜路太多
左轉右轉　出主意的應該是我

突念起　少女天　貪玩的我
大帽山　大浪灣　怎去踏破
撞入機舖放進幾蚊　速度切磋
假設有天這方向盤終於屬我」

——摘錄自歌曲〈私家車〉（詞：游思行），載嘉琳《Reach for Your Moon》專輯`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2467782,lng:114.2454245}},{type:"地景書寫",publication:"九華徑——The Lee's〈美孚新村上春樹〉(2012年)",description:`「和你分手的那一天
我獨個兒駕著轎車到
月半彎去看日落
淚水化成了放大鏡
把黃昏無限地擴大
滲滿了整個五月的海岸線
你說人生就像旋轉木馬
在冰冷的軸心中原地踏步的
一場玩笑
五月的某天
我從九華徑沿路
走到美孚的萬事達廣場
我開始寫詩」

——摘錄自歌曲〈美孚新村上春樹〉，載The Lee's《白色太陽槍》專輯`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.344093,lng:114.1381187}},{type:"地景書寫",publication:"詠藜園——梁秉鈞〈嗜同嚐異——從食物看香港文化〉(2004年)",description:`「香港的情況卻比較混雜，近年雖然也有據說是蔣家後人在香港經營的蔣家菜，也有謠傳說是鄧小平或甚麼領導人御廚來港獻藝，但從小習慣閱讀左右、中英各種不同報紙長大的香港人還是實事求是，以嘴巴檢驗真理，並不特別對政治權勢賣賬。各種中國美食隨著政治社會的變化傳入香港，形成了好似『大江南北菜』並存的局面。香港人並不見得會愛吃毛澤東喜歡的湖南紅燒肉，但卻會到左派的裕華國貨公司購買茅台或花雕美酒；未必認同蔣介石的口味，卻也不怕跑遠路去試在鑽石山詠藜園食攤著名的四川擔擔麵，鑽石山當年聚居了不少來自重慶國民黨的軍人軍眷和老百姓，後來也有電影片場，『詠藜園』的名字據說還是由導演張徹改的。」

——摘錄自梁秉鈞〈嗜同嚐異——從食物看香港文化〉，載《香港文學》 總第231期，頁17`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3434347,lng:114.1965178}},{type:"地景書寫",publication:"陸羽茶室——三蘇《經紀日記》",description:`「與白如煙在陸羽三樓飲茶，佢話因佢所識果班人甚少到廣東茶室，而佢又極中意廣東風味，話日夜都食上海菜，食到佢悶晒也。我問佢何事緊急？佢話因為甚不得閒，佢又想我同佢去睇屋，最好今日。我話冇辦法，今日攪唔掂，白如煙曰:『你做經紀做得咁水！』我話並非直接，白如煙問我幾時至去睇得？我約佢明早，白如煙約定中午。話上午十一時至起身也，我問莫伯之件如何？白如煙曰：『你話過佢知，一共還八萬銀，佢賣就來收錢，唔賣，過幾日俾番佢。』」

——摘錄自《經紀日記》，載熊志琴編：《經紀眼界：經紀拉系列選》，頁161`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2822145,lng:114.1555586}},{type:"地景書寫",publication:"荔園舊址(2)——李碧華〈荔園〉(1993年)",description:`「荔園是否可以『留下來』？
抑或，它得像大笪地、利舞台、花布街……，香港古舊血肉的一部份，終於消失。
我想，不單六十七歲的邱老闆，對荔園有濃厚感情，眷戀着大門口那永遠的旋轉木馬，一般小市民，誰不曾到過此處尋歡？簡直是童年的綺夢。等，等到假期，到荔園玩……。
木馬有點褪色，但它們繼續升降起落。那原本已很老的大象，有怎麼的下場？還有碰碰車、小輪船、鬼屋、劇場、蠟像館。孩提時代，當然玩一手抛磚引玉之類。要說也說不完。我記得過年時去玩，因是『暴發』，特別疏爽，得享『經濟獨立』之任性。（也許自此更明白，女人得有私己。）」

——摘錄自李碧華〈荔園〉，載《水袖》，頁61`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.342625,lng:114.1370103}},{type:"地景書寫",publication:"沙田馬場(2)——李英豪〈世界是一座馬場〉",description:`「煜煜：
許久沒有到馬場了。自從你離去之後，祇是偶然和女兒到沙田的彭福公園，在跑道圍住的圈子內嬉戲；和在跑道以外的看台上觀看，那種感覺迥然不同。以前還沒結婚，住近跑馬地，也就天天跑去看晨操。
其實，我愛馬之心，不下於簡而清。馬奔跑時的揮灑豪邁，氣勢非凡；線條構成的動感，予人縱橫馳騁的自由。可惜，現代城市文明，祇能容許這種自由有限度地困囚在特定的圈子之内；沒有空曠的草原，讓那天生的自由意志，得以充分發揮出來。」

——摘錄自李英豪〈世界是一座馬場〉，載《同心之言》，頁99`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4011111,lng:114.208196}},{type:"地景書寫",publication:"中環(2)——李碧華〈中環〉(1993年)",description:`「我住在中環，搬來搬去都在中環。這真是個奇怪的地方。每天都充塞着黑壓壓的人，令你連過馬路都感到困難。含辛茹苦咫尺天涯。你過到對面的馬路，不幾步，又要再過對面的馬路，好像一生便是竭盡所能過馬路。中環的人，打扮得艷如桃李，但又凜若冰霜，全都是不笑的。才子佳人馨馨膩膩泛起香塵，足不點地，擦肩而過。通旺興隆，承平盛世，忙碌招展又一天。但是，一到黃昏，甚至還未正式到了黃昏，中環總是突然的荒寂，一切都溜光了，那麼快。曾於此走動的人都離棄它如敝屣。像天際伸來一隻巨手，輕掩中環的眼睛，一下子放開，它便全盤落索四大皆空。每天我回家，心底不免有狼藉悽愴輾轉着。」

——摘錄自李碧華〈中環〉，載《青紅皂白》，頁1`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2799733,lng:114.1592448}},{type:"地景書寫",publication:"新娘潭——梁錫華〈且慰飄零共登山〉(1989年)",description:`「果然，大本營那邊顯然面有難色，因爲電話線內頗有難聲：『這個不簡單啊！好些人恐怕吃不消的。八仙嶺，差不多有六百公尺高，登山路徑又不熟.……』
但問題還是解決了。我們大夥兒往新娘潭。要舒服且『臨淸流而賦詩』的，下潭；要辛苦兼登臨『小天下』的，上山；怕受阿波羅熱吻的，帶帽、帶傘；要像尼采那樣『危險地生活』的，光頭赤足也可。結果，四部汽車把十多名男女滾到山脚，其中沒有一個服膺尼采，而又全部無愧爲禮義之邦的知識份子，頭上總或大或小蓋黙東西，立志不跟洋鬼子的阿波羅親熱。」

——摘錄自梁錫華〈且慰飄零共登山〉，載《我為山狂》，頁93-94`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5032806,lng:114.2391514}},{type:"地景書寫",publication:"八仙嶺——梁錫華〈且慰飄零共登山〉(1989年)",description:`「蘇東坡《登玲瓏山》詩有話說：『脚力盡時山更好，莫將有限趁無窮。』以有限的心力和有限的脚力去趁無窮的峯、峯、峯、峯，這件事，詩人都想通了，何况哲人？所以，再一次丘巒障目，劉先生不禁嗟發歸歟之嘆音。是的，丘復丘、巒又巒、峯外還是峯，這件苦事會伊於胡底呢？余先生似乎也躊躇。我恃一身蠻勇，不達目的不罷休；當下心裏火急，馬上指著前面高處一塊突出地面的石頭說：『看，再爬這一坡，一定是八仙嶺的頂峯了。不太高的。爬，爬啊！』余先生也接著說：『好吧，不要功虧一簣！再爬！』
於是，全軍又再度衝刺。我，一開步，却忽地心虛起來，因爲剛才『一定是』那句話，自己完全是信口開河壯軍心的。我那裏知道實情？萬一天地繼續其殘忍而『亂峯螺髻出』，我，唉，豈非害人？哎喲，陡得很啊！切莫多想了，萬一手軟、脚鬆，一個後滾，跌傷自己事少，把後面的人壓扁，那才事大呢！」

——摘錄自——摘錄自梁錫華〈且慰飄零共登山〉，載《我為山狂》，頁100-101`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4872413,lng:114.2231845}},{type:"地景書寫",publication:"寶雲徑——梁錫華〈寶雲幽徑〉(1989年)",description:`「唉，你想錯了！年輕人那裏需要搞這一套？每天牛喘咻咻，他們才不來呢！而且，臉不紋、皮不皺的小夥子，他們身上各個系統，都在熱血滿腔的心臟鼓舞下努力工作，疾病哪裏會犯境？
所以，你想錯了！在寶雲道上運動，多的是中年男女。沒志氣的不用說；有志氣的，就是說做人還帶點勁、毅、韌的，當白髮開始打游擊地冒頂要在黑叢中搶地盤，就會瞿然驚覺而實行抗老大計了。人，最肯咬緊牙關拚的，不是靑少年，是『知來者之可追』那一羣。他們，四十開外，是所謂『實迷途其未遠』，旣攀上半山的寶雲道，還不『載欣載奔』麼？此外，已經頭白而再不知黑的，也有。這少數的幾個，不用說，是『壯心未已』的『烈士』。旣然『老驪』邁步出廐，『瘦骨』尙帶『銅聲』的那一班，若不奮發騰躍，就有愧頂端閃著鴉色的靑絲了。」

——摘錄自梁錫華〈寶雲幽徑〉，載《我為山狂》，頁117`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2742582,lng:114.1663195}},{type:"地景書寫",publication:"寶雲道姻緣石——梁錫華〈寶雲幽徑〉(1989年)",description:`「你們還沒有廟。至少還沒有足夠的木石磚瓦和善長仁翁。但你們幹的，是一毫不假的廟祝工作：淸潔、打掃、添油、點燈-、上香，外加，最重要的，收錢——是賣香燭也好、解答疑難也好，總之，最重要的是，收錢。
姻緣石，嗯，姻緣石……所造就最了不起的，是吃飯之緣。石在，你們的飯碗也在，繞樹纏林的香、燭、紙灰，更在。」

——摘錄自梁錫華〈寶雲幽徑〉，載《我為山狂》，頁117`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2709139,lng:114.1764759}},{type:"地景書寫",publication:"馬鞍山(1)——梁錫華〈二人行——登馬鞍山記事並懷國彬〉(1989年)",description:`「排空構成一副靑靑馬鞍的兩座峯，低的叫牛押山，高六百米，高的稱馬鞍山，高七。二米。兩尖中間是山脊，寬不到一丈。走在上面環望，一邊是沙田地區和中文大學，另一邊是西貢和橋咀洲等島嶼。其餘或遠或近綿綿湧湧的，盡是峯巒。它們所頂着的藍天，在山上看，比之山下觀，顯然更深邃、更淸艷。」

——摘錄自梁錫華〈二人行——登馬鞍山記事並懷國彬〉，載《我為山狂》，頁158`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4046434,lng:114.2501048}},{type:"地景書寫",publication:"盧吉道——梁錫華〈一山復一山〉(1989年)",description:`「山頂區最値得一書的，似乎不是只有健者能攀的一兩個荒嶺，或那個設有禁區的頂之頂。當然也不是那些非富則貴人家的苑厦(裏面的究竟我們凡人怎知道)。是甚麼呢？是那條外地遊客少臨的環山幽徑。說它徑，也許有黙不敬，因爲它的聚滙黙，南稱夏力道，北名盧吉道，是堂堂皇皇的『道』。但，衆所周知，道不能幽，幽者惟徑；何况，不管夏力或盧吉，雖然對行人寬大，對汽車却是狹窄而不肯通融了。不通融汽車的佳勝處照例通情，這是世界公例，文明與野蠻地方，似乎都是一理的。所以，在那環繞山頂一圈之徑，是情侶樂土。事實上，一個單身者到那邊，除了李逵式地去氣衝鬥牛練跑或練武，不免散佈瘟氣。用余光中先生的嘉言，就是『莫名其妙』和『總是不對』。管你在夏力道還是盧吉道，要是踽踽獨行，當事者即使不自慚形穢，人家也會看你是外太空闖來的異物了。」

——摘錄自梁錫華〈一山復一山〉，載《我為山狂》，頁219`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2756596,lng:114.1417494}},{type:"地景書寫",publication:"維多利亞港(1)——趙滋蕃《半下流社會》(1953年)",description:`「黃薑扶著王亮，從筲箕灣到中環的電車下來，折往纜車站。當纜車在海拔一千多公尺的地方轟轟爬行時，鬱悶得喘不過氣來的王亮，覺得爽朗了許多。山上，新鮮的風帶著善意，撫弄遍正開得鮮艷的鳳凰花，年青的椰林，被捉弄得沙沙作響。
穿過那條枝葉扶疏的鴛鴛路，眼底靜躺著那半透明的藍色的維多利亞海灣。她是那麼羞怯安閑，睡在微風的音絃上。太陽在燃燒，山谷沉靜。白色的女裙花，淺藍的吊鐘花，絳紫的番紅花，還有茉莉花和洋芭蕉，開遍滿山滿谷，山嵐游泳在眾花的頭頂，使過往的客人，意會到這並不是炎炎的長夏，僅是廣闊的，百花齊放的艷陽天。」

——摘錄自趙滋蕃《半下流社會》(瀛舟出版社)，頁196`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2892829,lng:114.176221}},{type:"地景書寫",publication:"統一碼頭舊址——趙滋蕃《半下流社會》(1953年)",description:`「統一碼頭的標準鐘，正指向十一點正，距離落船的時間，僅差點多鐘了，蕭鐵軍、王亮與姚明軒的影子還沒有看見，大家都非常焦灼。站在統一碼頭那邊瞭望的張大愚、吳孝慈，廣崇碼頭那邊瞭望的秦村，眼睛都望流了，老望不到他們三個。
『王大哥他們眞不急，怎麼還不來？』蔣山青的胖臉，晒成了豬肝色，他用手指抹掉額角上涔涔的汗珠，在自言自語。
『聽吳孝慈說過，周恩賜住的醫院在九龍，隔山掉水，來回總需要點時間。我想，他們很快就要來的。』司馬明沉住氣說。
『人家都在上船了，我們也得搶先佔據點較好的位子。統艙的滋味，我們在長江裡是嘗夠了的。』同吳孝慈一道來的一位難友，焦灼地說出了他的感想。」

——摘錄自趙滋蕃《半下流社會》(瀛舟出版社)，頁204`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.285198,lng:114.1572423}},{type:"地景書寫",publication:"梅窩(1)——趙滋蕃《半下流社會》(1953年)",description:`「空氣沉重得像鉛塊一樣，黃昏，正披上修士的黑袍。
李曼在痛苦中。她的敏感，加深了她心靈的磨折；她的猶豫，擴大了她內心的矛盾；她的詩人氣質的熱情，使她深陷於戲劇化人生的最疑難的『糾葛』裡。她需要愛情來慰藉她的寂寞，正如同需要麵包來塡塞飢餓者的胃袋一樣。
梅窩的黃昏，天然就帶有荒漠的寂寥的傾向，何況在這十一月將盡的冬天從海濱浴場回望過去，那個漁村的小市集，像一隻打破了的發著酸臭的睡意的瓦罐，靜靜地蜷伏在西風的懷抱裡。更遠的地方，環伺的群峰，屛風般遮斷了李曼的視線。前面，殘餘的浴場更衣室的骨架，索索地在忽嘯的夜風裡哀鳴。它們在睡夢中被人遺忘，準備在來年春暖的時候再覺醒。大海，驕傲而堅强地向堤岸沖擊，生命之流無窮無盡…。」

——摘錄自趙滋蕃《半下流社會》(瀛舟出版社)，頁219`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2665426,lng:113.997289}},{type:"地景書寫",publication:"淺水灣(5)——趙滋蕃《半下流社會》(1953年)",description:`「淡淡的三月天，再度招展在山環水繞的淺水灣頭。東風漫輦幽徑，新綠平鋪原野。芳春替和暖的日子披上濃裝。映山紅滿山滿谷在燃燒，低矮的青松翠柏間，雜綴著高挺挺的傲慢的英雄樹，那鮮血一樣紅的花朵，醉迎著驕陽，越發顯得美麗。傍海的別墅，夾竹桃從鐵卄疾藜中伸出頭來，在曉霧裡還帶著盈盈的清新的微笑。薔薇叢沾滿了春夜的淚痕，寂寞地低垂著頭，像年輕的少女，做著禱告。那是個晴明的早晨，淺水灣頭，有清涼，有太陽和春天，更有永遠年青的生命。」

————摘錄自趙滋蕃《半下流社會》(瀛舟出版社)，頁261`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2382303,lng:114.1981655}},{type:"地景書寫",publication:"彌敦道(6)——陳慧《拾香紀》(2000年)",description:`「三多是在一九五三年的六月三日出生，之前一天是英女皇加冕的日子，到了六月三日，彌敦道上有會景巡遊，人山人海，所有交通都停頓，連城無法將宋雲送去留產院，三多唯有在宋雲的床上出世，這種狼狽的事情以後再也沒有發生過，所以宋雲最疼三多。三多剛滿月，就遇上水荒，天氣又熱，三多的皮膚就一直沒有好過，五美也有這個問題，因爲一九五四年的水荒比前一年更凶，甚至要暫停供水。連城心情矛盾，之前他買入大量的鋅鐵片，水荒出現之後，差不多家家戶戶都有連城製造的鐵皮水桶'連城後來想通了，他一心一意賺錢，讓三多五美買最好最貴的美容護膚品。」

——摘錄自陳慧《拾香紀》，頁11`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3101795,lng:114.171132}},{type:"地景書寫",publication:"匯豐銀行總行——陳慧《拾香紀》(2000年)",description:`「惠芳不知道新建成的滙豐銀行大廈，可以一件一件拆下來，搬到別的地方去，再重新搭建，像砌積木，效果就如原封未動……。惠芳不明白，爲甚麼要花這麼多錢，就爲了將來可以將它搬走？
我將惠芳的問題問連城，連城答非所問，連城吿訴我他十歲的時候第一次來香港，只記得剛落成的滙豐銀行大廈，十二層高，門口有一對石獅子，在維多利亞城，一九三五年，香港政府宣佈禁娼，叔公帶着他到最後的『金宵樓』，最好看的女人都在金宵樓，叔公帶走了好幾個，帶不走的，以後就再也見不到……。」

——摘錄自陳慧《拾香紀》，頁50`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2802222,lng:114.1593865}},{type:"地景書寫",publication:"廣播道(2)——陳慧《拾香紀》(2000年)",description:`「八寶十八歲生日之後的一個星期一，八寶逃學，要我陪她去一次廣播道。我們坐208號巴士，巴士剛駛上廣播道，我就看見林珊珊從商業電台走出來，她比我、三多、五美、七喜、八寶都更似是宋雲的女兒，我知道，宋雲年靑的時候，就是這個樣子。之後八寶領着我一直走到無線電視，取了表格，我都是糊糊塗塗，心裏只想着林珊珊。回到家裏，宋雲大發雷霆，我才知道原來我是陪着八寶去選香港小姐。」

——摘錄自陳慧《拾香紀》，頁52`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3410076,lng:114.1826856}},{type:"地景書寫",publication:"香港太空館(2)——陳慧《拾香紀》(2000年)",description:`「九健在一九八零年十月退學。外型像菠蘿包的太空館剛開幕，連城天天帶九健去，上學一樣，叫旁人難以發現九健的作息與常人有異。九健回到家裏，就在宋雲的彈弓床上模倣太空人漫步，我和惠芳都看得心往神馳。九健到太空館去的日子，比上學的時候快樂。可是，有一天，九健在館裏聽到這樣的一句話：
『呢度唔係你啲咁嘅白痴仔嚟㗎！邊個帶你嚟㗎？無腦！』」

——摘錄自陳慧《拾香紀》，頁68`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.294288,lng:114.171901}},{type:"地景書寫",publication:"香港體育館——陳慧《拾香紀》(2000年)",description:`「全靠九健沉迷譚詠麟，連城終於答應帶我、惠芳、八寶、九健去紅礦體育館，連城不明白爲甚麼會在體育館裏聽歌星唱歌罗我們是第一次去看演唱會，譚詠麟是第一次連開二十場，這是一項紀錄，當時是一九八五年。」

——摘錄自陳慧《拾香紀》，頁71`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3014054,lng:114.1820357}},{type:"地景書寫",publication:"中環天星碼頭舊址(3)——陳慧《拾香紀》(2000年)",description:`「十二月，在中環天星碼頭，六合在絕食，參加絕食的人很多，一個跟一個，接力，爲了反對一個叫做『主流方案』的事情。絕食行動進行了很多天，六合一直留在碼頭上，認識了很多新朋友。宋雲每日三次留心收看新聞報道，就爲了看六合一眼，六合回家的時候，身上都已經有一股酸餿味。」

—摘錄自陳慧《拾香紀》，頁119`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2837724,lng:114.164415}},{type:"地景書寫",publication:"天水圍(2)——廖偉棠〈在天水圍，在定福莊〉(2013年)",description:`「看罷敗荷、幽鳥和冷樹
從濕地公園出來，吿別幾個故人
雙腳蹦蹦如酷鶴伶仃

遭遇那些強悍女童黨
在同樣強悍的天空下焊接青吻
遭遇那些輕軌上慘綠的火星

遂想起十二年前另一強悍少女
定福莊的飢渴，半夜彼此撫摸
曾經的瘦和未來的鏽

殘忍如剛剛開刃的秋刀魚
殘忍得忘記了青春的熱汗
我們早上醒來從不和夢中人道別。」

——廖偉棠〈在天水圍，在定福莊〉，載《櫻桃與金剛：詩選2013-2016》，頁3`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4606235,lng:114.0059904}},{type:"地景書寫",publication:"大角咀——廖偉棠〈大角咀尋春田花花幼稚園不遇〉(2013年)",description:`「別來無恙嗎
這是另一個香港。
走在唐樓間漏下的陽光中
看紙紮店裏唱紅梅記。
那些透明的身體裏有心
那些燒鵝有靈魂
窗有撲翼聲。」

——摘錄自廖偉棠〈大角咀尋春田花花幼稚園不遇〉，載《櫻桃與金剛：詩選2013-2016》，頁40`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3198474,lng:114.1620857}},{type:"地景書寫",publication:"華豐國貨——廖偉棠〈華豐國貨的守候者〉(2015年)",description:`「就鞋子的尺碼，他給了我很多建議
我相信他對詩也如此熟悉

他最後推薦給我兩個潔白的意象
並保證如果不準確可以來換

讀者也許已經疑惑
為什麼他的經歷與我有許多相同

我完全可以坦承:他就是我
他身上有我差一點就背負了的一生

老左家庭、新移民，他的選擇實在太少
於是他代替了我，守候在這個角落

像一雙漸漸發黃的鞋子
那麼重要在香港其他地方買不着」

——摘錄自廖偉棠〈華豐國貨的守候者〉，載《櫻桃與金剛：詩選2013-2016》，頁133-134`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2911275,lng:114.1993234}},{type:"地景書寫",publication:"東澳古道——廖偉棠〈東澳古道，或東涌哀歌〉(2016年)",description:`「我們在山頂眺望
那些富貴且鹹濕的事物把我們陸沉
厓山之後，我們在此埋下中國
我們使用宋體和明體寫詩
在路側、石上
全然不顧路牌上的英文和拼音
它們繪製地圖而我們繪製道路本身
即使像一群無家的鷹

出發就不知歸路
最後我們來到大澳
想像伶仃洋，每一朵陳舊的浪、
新鮮的浪，是否也如我們
撷花而無處祭奠
那些海盜，那些酩酊於山腳秘道上的天使啊
都是她的情人，都是我們」

——摘錄自廖偉棠〈東澳古道，或東涌哀歌〉，載《櫻桃與金剛：詩選2013-2016》，頁154-155`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2924622,lng:113.9150869}},{type:"地景書寫",publication:"沙頭角(2)——陳浩基《13．67》(2014年)",description:`「工人和老闆之間的不和，在一個月之內，上升至中國和英國之間的國家級紛擾。獲北京支持的香港左派工人成立簡稱『鬥委會』的『港九各界同胞反對港英迫害鬥爭委員會』，發動群眾包圍港督府，指責政府是法西斯，殘害香港的民眾，以獨裁手段逼迫左派分子；香港政府卻擺出絲毫不讓的態度，派警員鎮壓示威騷亂，出動催淚彈驅散群眾，動用武力拘捕『刁民』。為了抗議，工人們發起罷工罷市，左派學校罷課，不少市民響應，而政府以宵禁還擊，港島自二十年前的二次大戰後再次實施宵禁。七月初，一群中國民眾越境進入香港邊境禁區沙頭角中英街『支援』香港工人，集會抗議，駐守的香港警察開槍驅趕，不料這引來中國民兵還擊，雙方爆發激烈槍戰。死守的警員彈盡被困，在英軍派兵增援時，已有五名警察殉職。
『大陸要提早收回香港嗎？』我記得，那天我在士多聽收音機新聞時，何先生這樣說過。
雖然我曾聽說，香港的『租約』在三十年後的一九九七年才到期，但天曉得毛主席會不會叫解放軍進攻香港，趕跑英國人。一九九七和一九六七，不過相差一個數字而已。」

——摘錄自陳浩基《13．67》`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5315766,lng:114.2036608}},{type:"地景書寫",publication:"維多利亞公園(3)——Aiya Nara〈維多利亞公園邊的安靜圖書館〉(2016年)",description:`「維多利亞公園。印尼移民工稱它為『Javanese village』（爪哇村）。每個禮拜，從香港各個角落湧出數以百計的印尼移民工在此聚集。我便是維多利亞公園的常客之一。
……
在移民工的世界裡，書籍具有十分重要的功能。我曾在兩個截然不同國家工作——台灣和香港。當地政府為境內工作人口免費提供載有勞工法例的出版品，但很遺憾的，這些可以免費拿取的重要資源通常淪為垃圾桶裡的棄物，這就顯示出移民工對閱讀的興趣仍舊偏低。
我開始試著從身邊友人間散播間讀病毒，將我的書開放借閱。起初，我只用一個背包裝了幾本書，但我想題材多元的書籍或許可以引起更多人的興趣，所以改用行李箱裝書。有時我稱它為『行動圖書館』，要和讀者碰面時都拉它隨行，而且一次不只停留在一處。會借書的朋友寥寥無幾，多數人只會隨意翻看行李箱裡的內容物，但不會真的借閱。維多利亞公園的安檢很嚴謹，這對圖書館的發展是一種挑戰。公園警衛不准我把行李箱打開，因為這會被視為一種企圖進行買賣的行為。沒錯，移民工是不准進行任何商業交易活動；這是違法的，依據工作合約規定，我們只准在此工作。倘若行李箱是不准打開的，那麼，經過的人要怎麼知道我開辦了一個圖書館呢？這個圖書館很安靜，但不是因為埋首在書籍裡的讀者是無聲的，而是因為根本沒有讀者。
……
我希望類似現象也會在移民工之間發酵，許多移民工在工作環境中受到身體和語言的凌虐，但多半只能消極的任由命運擺佈，因為恐懼早已麻痺了他們。 
這種恐懼必須終結。該怎麼做呢？閱讀就是方法之一。」

——摘錄自Aiya Nara〈維多利亞公園邊的安靜圖書館〉，載《工餘》，頁40-41`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2818651,lng:114.1888939}},{type:"地景書寫",publication:"鹿頸——葉輝〈出鹿頸記〉(1986年)",description:`「女人和孩子都疲累了，但除了走下去，再沒有別的辦法。我們走上一個小崗，在歧路上又點了一枝又一枝火柴，追踪着地圖上的虛線，我們感覺，距離鹿頸越來越近了。我們憑藉海水的微弱反光辨認前路，好心的行友說：『你們可眞膽大，沒帶地圖，還帶着孩子……』他說他們早上從新娘潭出發，登上了吊燈籠，然後在東北海岸大綑邊；他說按照目前的脚程，大槪走半小時就出到鹿頸了。行友很健談，但我們實在太累了，我們根本沒有綑邊的心理準備，我們累得幾乎不想說話，只是有一句沒一句的答腔，但我相信同行的友人和我一樣，心裏實在感激兩位好心的行友。我很想吿訴行友，我本來就不贊成那麼粗暴的旅行，但我連解釋的氣力都沒有了。我們在漆黑的沙頭角內海沿岸而行，經過一個又一個邊境邊區路牌，行友對孩子說：『鹿頸的魚蛋粉很好吃，一會兒我們就可以大吃一頓了。』可是，當我們到達鹿頸的時候，商店都關門了。我們都坐在巴士站前的馬路上，沉默地等待前方的車燈。」

——摘錄自葉輝〈出鹿頸記〉，載《甕中樹》，頁204`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5233944,lng:114.216592}},{type:"地景書寫",publication:"中環天星碼頭舊址(2)——梁文道《我執》(2010年)",description:`「十多年前，我訪問過許多人，只問一個問題：『你還記得沒有太古廣場那些現代大樓以前，金鐘是什麼模樣的嗎？』結果沒有一個人能夠準確描述那曾經存在的綠色小山丘，那條斜曲急彎的電車軌道。就算灣仔和中環的老居民也記不起這一小塊曾經切割兩地的無名區域；事實上，只有地鐵開通之後，這個地方才有了明顯的名字：金鐘。
你也可以選一個晚近點的例子，比如説九龍塘的又一城。在這麼年輕而又龐大的商場出現之前，九龍塘火車站旁的這片區域有些什麼呢？難道它就只是一塊空地嗎？
中環的天星碼頭亦將如是，與佐敦碼頭這些地名一起湮沒，成為紀錄。今天去搭最後一班船的人，今天去為那鐘樓拍照的人，不到十年就會忘記他們憐惜珍重的這個老碼頭的位置與模樣。」

——摘錄自梁文道《我執》，頁278`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2839214,lng:114.1639883}},{type:"地景書寫",publication:"雲咸街——南海十三郎〈花事闌珊今海角  賣花人説賣花難〉(1964年)",description:`「適又有一友人開設一食物店，余以其新張誌喜，亦送一生花籃致賀，至一花店訂購，聲明純用鮮花，不要紙花，生花店主，索價四十元，余照數給予，及余參加該店酒會，一看所送之花籃，則花籃柄上，只紮菊花十餘朵，而花籃則插薑花十餘枝，所謂鮮花，則已半殘，余心有不甘，再至生花店詢問，因何以殘花作鮮花，而索價又昂？賣花人説，今非春季，百花凋謝，目前售花，每枝亦價值一元餘，蓋非花季，物罕即昂，送一花籃而為全部生花，已屬難能可貴，區區數十元，不為昂也。余無奈悵然而返，因思童年時，香港為花埠，有『賣花街』稱之雲咸街口，不少鮮花檔，所有奇花異卉，均在此售買，若為插瓶而用，只費一元數角，即可得鮮花一紮，若定製花圈花牌，亦不過三數元，而德忌笠街、蘭桂坊口，亦多擺花檔口，索價尤廉。」

——摘錄自南海十三郎〈花事闌珊今海角 賣花人説賣花難〉，載載朱少璋編：《小蘭齋雜記：浮生浪墨》，頁84-85`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2806919,lng:114.156116}},{type:"地景書寫",publication:"元朗雞地——梁科慶《Q版特工：元朗故事》(2016年)",description:`「今天，他專程回元朗，就為在結業前光顧一趟祖凡尼餐廳。
祖凡尼餐廳位於元朗的雞地，顧名思義，雞地從前是個販賣雞隻的集散地。時代變遷，目下的雞地，雞毛也找不到一根。梁賢步上行人天橋，朝北望遠，昔日的雞舍、農田、魚塘，變成一幢幢高廈，已入伙的、正施工的屋苑，沿着西鐵路軌，一直延伸，似要跟更北更高的深圳樓房互相接軌。」

——摘錄自梁科慶《Q版特工：元朗故事》，頁12-13`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4427087,lng:114.0338436}},{type:"地景書寫",publication:"中環天星碼頭舊址(4)——李金鳳〈我們的故事天星碼頭1898-2006〉(2006年)",description:`「1.

再見這一幕
我己白髮斑斑
示威者在我面前呼喊
「我愛香港!」
我沒有任由枴扙為我說話
她和我
沒有離開
從1898-2006
請問
你們愛甚麼
香港人
你們愛過甚麼?
說: 我愛青山環水
海盜巡邏或者漁帆
我留戀末日滿清
愛吏治愛強豪
愛民無衣食目不識丁
是嗎?
你凝視我
以信徒之名
向歷史禱告
香港人
你們要甚麼?
說: 我要1898, 槍和炮火
界址條約和天星碼頭
推進新界和全港九
(要昔日的天星和維多利亞兩岸,
歐洲人的繁華和英國話
也要華人與狗和太平山
不准在此坐下)
是嗎?
當時, 這城巿風華正茂
我問: 哪一個城巿?
誰的時代?
(我的城巿,
沒有一個年代
沒有一代人
滿意自己的所在
除了我
雖然白髮斑斑)
因為迅速消粍的城
銀權和yes-man把精神壓扁的城
我們需要物為標記
(對, 因為這是我
吊詭的普通人)
為了可以說:
這是我的歲月!
我的時代
我的城
我們

2.
1841英國旗升起
我們趕不及去抗議
1898年天星碼頭開張
也沒有人上街
在如今2006半爛的天星碼頭
拍岸的浪花繼續
當示威和絕食結束
整整一個時代
馬上匿迹:
1898-2006。


3.
應該喜歡的時候
我們哭泣
應該不介懷的事
我們不能同意
為了一個斗零
為了搬走一個碼頭
唉,
還因為這還是我
一次, 再次, 又一次
活在歷史吊詭的香港人
因為歷史是大寫的
他們的歷史重重壓下來
His-story!
His-story他們的歷史:
搬走一個碼頭。
把正統定性為可耻的歷史搬走。
救活不了一個鐘樓。
商人治港無知/恥的
政府得勝。
那又怎樣?
那又怎樣!
甚至街道的名稱
也必須改朝換代
甚至維多利亞海港
是獻給黃髮碧眼的女皇
甚至這城昔日的名字
我們也集體遺忘
那又怎樣?
那又怎樣!
太空船看不見的小丁點
在那自由的地方
香港在南中國海岸
遠古以來就是多元的海港
容得下水陸兩路奔走來的人
亞細亞人或歐洲人
北大荒人或中原人
我們說南腔土話
也唱西文粵曲歌詞
所以繼續仍然絕食的唱:
多情應笑我
為了搶救一個殖民地時代
啃剩下來的光禿禿的鐘樓
有人願意檔在堆土機前做傻瓜
絕食49小時被人笑話
只因我們
時間凝視著她:
His-story 是僵死的石屎
她的——
我們的故事
熱情的動物
自由的心
有尊嚴的人
一代承一代
活在當前
穿越瓦礫的斷層」

(2006年12月16日初稿)

——原文發表於https://www.inmediahk.net/node/175081`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2836285,lng:114.1648303}},{type:"地景書寫",publication:"銅鑼灣圓形天橋——李金鳳〈六月三、四和QUART有關的日記〉(1991年)",description:`「最後我登上銅鑼灣的圓型天橋，準備歸家安靜地結束這一天。昨日，天橋旋旋轉全都貼滿白底黑字『毋忘六四』。現在六四還餘兩個小時，《花花公子》彩色海報急急登場；曾小燕全天候地衝着路人脱衣。我本着向來小心眼的精神，注意到，在彩色海報下，殘留着撕不淨的昨天標語的痕迹。此外還餘兩三張『毋忘六四』和《花花公子》毗鄰赤裸。」

——摘錄自李金鳳〈六月三、四和QUART有關的日記〉，載《天使與我同路》，頁48-49`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2796157,lng:114.1863318}},{type:"地景書寫",publication:"大會堂(2)——西西《織巢》(2018年)",description:`「每年三月，『第一影室』會收新的會員，不過，一年四季，任何人，過了十八歲，就可以入會，方法是在該會放映電影的日子，到大會堂劇院門口，取一張申請表格塡好，交入會費二十元，年費十元，或者，自己另外寫信討申請表。入會後，會收到一張會員證，以後，每個月有什麼電影上映，會收到一份精美的節目表，這份節目表所以精美，是由於印刷和設計美觀悅目，而內容也很豐富。凡是要上映的電影，節目表上會有詳細的專文介紹，包括電影內容、導演風格、藝術特色等等。此外，還列出重要工作人員名單，註明放映時間、黑白或彩色、製作年份、得獎項目。對喜歡電影的人來說，這份節目表有收藏的價値，即使當作設計畫保存也無不可。」

——摘錄自西西《織巢》，頁228-229`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2824424,lng:114.1612224}},{type:"地景書寫",publication:"南丫島(2)——李金鳳〈南丫六景〉(1991年)",description:`「通向北面的路上，要經過在路旁的竹林。竹林下有一間新*的石屋，近來換上新的石棉瓦頂，叫價連升兩倍。
這屋朝着向西的海灣；屋的對面，隔了路，是個不事修剪的果園。
果園前面又有幾聚石屋，遠眺是海灣的另一端。臨西又有一屏風竹樹，竟日悠悠揚揚，把落坡濱海的天色半掩半張。
站在山崗頂，榕樹灣迂迴跌宕的景色可以盡入眼簾。乍看去，大海和島上嫣艷的綠林統攝了焦點，逐漸才分辨岀聚合成村的鮮明白屋，低伏的菜園，及隱入氤氤的山巒；如果遊人只有這麼匆促一瞥，那麼高、矮、形、態、色各有異姿的樹木和雜草，也不外一片模糊顏色。」

——摘錄自李金鳳〈南丫六景〉，載《天使與我同路》，頁109`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.1991801,lng:114.1349895}},{type:"地景書寫",publication:"西九龍中心——李金鳳〈重回深水埗〉(1997年)",description:`「深水埗終於擁有了自己的西九龍中心，位在兵房舊址，傍着古色古香的警署。這個商場大廈，和其他稍有規模的商場一樣，都賣一樣牌子的衣服，都是一個款式。但它可是通樓只用鋼條骨架哩，都用透明玻璃外壁，街上樓內互相可以看透；這格局，在欽州街上，尤如在漆黑大海，浮出一矗水晶宮殿。登上頂層，整個深水埗區，一目了然。原來仍多的是五層、三層、七層的樓宇，可以讓眼界放得老遠。夜間還好，極目黑壓壓，甚麼都看不清楚。到日來，密集集的樓房裏，窗內有窗，間內有間，床上有床，天台上有天台。從這個高位去看，很難理解，這許多更迭事，為甚麼來來去一去，仍是一樣的倒退。」

——摘錄自李金鳳〈重回深水埗〉，載《天使與我同路》，頁101`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3310879,lng:114.1597868}},{type:"地景書寫",publication:"鴨寮街——李金鳳〈重回深水埗〉(1997年)",description:`「在鴨寮街電器小零件的攤檔之間，會忽然漏出處空隙，放一張茶褐色木几子，上面放有玲瓏的小玩意，不貴重，勝在不多見：焊上銅馬兒的打火機，鑲碎玉石的鏤金象，瑪瑙珠子仿盆景，磨沙水晶座燈罩，景泰藍鼻烟壺，或簡簡單單的牛骨梳，蓮花碗，懷錶，象牙籤，一件件，各自有緩衝空間，看起來就覺得精緻了，買的人，於是帶點兒傲氣，看誰問價，不一定理睬。這些小玩意兒，比起中環嚤囉街來，品質和身價，原本就沒得比，可比起向欽州街伸展、沿南昌街下行，落地生根的地攤，級數別是兩樣。單號數的南昌街，或許因貼着街市，最多是茶居、茶樓、茶餐廳，閑時有報檔、果檔、門匙檔、指甲鉗檔、金屬圈圈檔和廚用品檔等等，在行人道上兩側靠着，不礙車行馬路，年年如是，只有多，無減少。八十年代後，南昌街掃蕩暗渠上蓋，治街靠近溝渠的馬路邊，便陸續生出許多地攤來。這些地攤，和桂林街那邊的一樣，隨便一堆，都是破爛，卻倒是稀奇而不等用的東西。譬如螺殼串成的燈罩子，噴水池一般，儘管已藕斷絲連，畢竟仍惹人遐思，仍是一掛浪漫的燈罩子。不同桂林街那裏，講求實際，都賣破鞋、破服、髒碟子，所以看的多是主婦。這邊是獨身男人蹓躂的地界，有缺陷的水晶球，仍是水晶球。」

——摘錄自李金鳳〈重回深水埗〉，載《天使與我同路》，頁97-98`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3295986,lng:114.1627614}},{type:"地景書寫",publication:"深水埗碼頭舊址——李金鳳〈重回深水埗〉(1997年)",description:`「橫過海壇街，接着就是通州街。橫過通州街，除了跳海，若不浮桴，不能出海。這裏有碼頭，開去中環西環。往中環或西環，人的身價和目的，就不一樣。碼頭黑白素色為主，單層，錐型瓦蓋。坐頭等的，走居中闊道，上落船都如此湊巧也多是去中環。坐三等，即船下艙，走碼頭外壁的兩邊窄道。下層乘客，名副其實，多走夫販卒，挑的，擔的，推的，滿滿周身貨物，雜物。船未到，人沿牆蹲着等，海沒遮攔，風吹雨灑，且不能爭先恐後，否則人和貨物，都推擠了落海。頭等不同，碼頭內堂有長板椅，有遮蓋，好風涼優悠。我每常不明白，為甚麼沒有二等位呢？現在仍不明白。上下班時間，碼頭吞吐量極大。無知小孩，輕易不應站在碼頭前的空地，賊頭賊腦往裏瞻看。見得船到岸，務須兩邊閃開，扶緊沿岸鐵欄河。日間還好。入暮後，落船客無眼，都似洪水缺堤湧出，碰到甚麼，衝撞甚麼，沿北河街一路推進，過得醫局街，才見疏通。這落船的人，最先總是男人，七七八八人，走賊似的跳將上岸，那時船仍未泊定，頭纜未束哩。大膽的毛孩，才會在這時靠邊站。但靠邊的欄河，總擺得一排木頭車，有苦力如臨大敵，向毛孩狰眉突眼，然後趕緊招呼來客。誰七手八腳拖着大件貨物，就是生意上來。原先整齊排在大路兩邊的人力車，也忽爾像扇舞般散開，向若有所尋的慢步客人，招探。哪個車伕力壯些，綠布紅柄光鮮些，就先拔頭綵，無所謂循序漸進的。」

——摘錄自李金鳳〈重回深水埗〉，載《天使與我同路》，頁85-86`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3268864,lng:114.1595581}},{type:"地景書寫",publication:"北河街街市——李金鳳〈重回深水埗〉(1997年)",description:`「沒有了北河街渡輪碼頭，消失了許多的海，北河街市一樣生氣如昔。北河街市分兩部分。長沙灣道下行至荔枝角道，之間經過四條街，都是濕貨市場：菜魚肉。而從長沙灣道至元洲街之間，整三條街，都賣乾貨，尤以女性衣服為主。這裏更因有北河戲院，夜市鼎盛，媲美旺角。旺角多賣趨時港貨；這北河乾貨市場，賣平民土貨為主：土布，土鞋，土衣裳，土耳飾頭飾，土家用小雜物。街道兩旁，盡是固定棚檔，夜來就更塞滿活動推車攤子，陣勢凌亂。等戲院進場或剛散場時，路更是完全淤塞，扒手小偷，最是快樂。攤檔也向兩邊橫街擴散，人都在凌亂的貨品周圍，前圈撿貨，外圈撿財，我見過不知多少次，目瞪口呆。火水氣燈在攤檔上高高掛着，照程不遠。橫街的行人道，罕有人行。因地鋪多是民居，都上了門，而且樓底有柱，幽深漆黑，充滿罪惡感。柱廊下，總踞有一條條漢子，透過點點燭火，俯伏着頭，追龍。攤檔擺有多長，這追龍的行列便有多長。我特意穿過這些陰森的廊道，敎我震慄的，是燈柱上的老鼠箱，比起這些閃縮的人，更可挺直胸膛，不那樣孤單。至於黑不見指的樓梯口，有些婦人，散散漫漫的，或挨着牆，或挨着橈，完完全全沒在黑暗裏，目光呆滯，向過路的男人，提出無言的詢問。」

——摘錄自李金鳳〈重回深水埗〉，載《天使與我同路》，頁92`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3293251,lng:114.1609873}},{type:"地景書寫",publication:"沙螺洞(1)——陳德錦〈魔杖〉(1992年)",description:`「手握金黃的球棒
要把八仙嶺的落日
像哥爾夫球一樣
一棒打進小小的沙螺洞裡
笑說沙螺不是稀有的
生物，不外是
一小撮害蟲吧
老早應趕盡和殺絕
讓我們，用最豐富的想象
在這片不毛之地
開闢一個綠油油的球場
最低的消費，最高的享受
讓熱愛運動的小市民
人人夢想成真，手握一枝球棒
就像點鐵成金的魔杖
任意揮動
枯乾的紅樹林就可以重現生機
腐爛的鷺屍就會翩翩起舞
吐露港的海水就會由鉛灰色變成碧綠色
從來成功人士都打哥爾夫
來吧，要做成功人士
請緊握金黃的球棒
未來的香港在你們手上
請擁護把所有郊野都改建為球場
我們的目標只有一個： 一個洞
你的白球兒呢∣
哦，是落在
第九，還是第七個洞中？

後記：沙螺洞，新界大埔郊野地點，在八仙嶺南面，政府有意把它賣給私人發展商，開闢為哥爾夫球場。」

——陳德錦〈魔杖〉，載《詩雙月刊》 第三卷第四期，頁30`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4793526,lng:114.1814328}},{type:"地景書寫",publication:"沙螺洞(2)——蔡益懷〈探尋沙螺洞〉(2003年)",description:`「離開沙螺洞，再回望那被山巔環抱的村落，靜臥在層巒叠翠的草木中，像童話中的家園一般，令人迷醉不已，可當你一想到她是一個已遭廢棄的家園，又不能不黯然神傷。沙螺洞的景況，其實就是地球村的真實寫照，我們一方面在建造富麗堂皇的居庭，一方面又在糟塌、破壊我們居住的故園，讓她變成廢墟，任她荒蕪。同樣，我們一方面在追求科技的文明，享受舒適安逸的生活，另一方面又荒廢了我們的精神家風，以致於飽受焦慮的折磨、慾望的煎熬。回想那獨居於舊屋中過著深居簡出生活的阿婆，心想，她的生活雖是清苦的，而且面對強盜為患的險惡環境，但她甘於寂寞，心靈是平靜的、安寧的：她守住的是一座驟墟，然而，像村頭的那棵大樹，精神是常新的。沙羅洞是荒廢了，但這衰的草木是茂盛的，仿佛有一種旺盛的生命力在滋長蓍。但願有一天，這裏能重新煥發生機，成為香港人共有的美麗後花園。」

——摘錄自蔡益懷〈探尋沙螺洞〉，載《文匯報‧ 文學》 C2版，2003年2月22日`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4793443,lng:114.1831087}},{type:"地景書寫",publication:"華富邨(1)——海辛〈香港仔的魚蛋與街渡〉(2002年)",description:`「又是打鑼似哈哈聲，一雙有力的手掌拍打在我臂膀上。『想吃長糧只不過是打工仔幹得辛苦時，發發「牢騷」罷了！到頭來老闆一聲退休打工仔眼眉跳啦！所謂長糧，雖不是一把雞碎，也不過是枯井打水，下雨天，你有幸打到兩三桶天一旱，就天天等菜水了！』『你住在華富郵？』『我第三仔住華興樓，孫子老打電話叫爺爺去住聽講鬼古我去住了三天現在回鴨脷洲屋邨老家。』『你怎麼走落瀑布灣公園？』『老婆早上從鴨脷洲開機動艇來到公園海邊的淺水灘，我下去接班，開船回鴨脷洲，她上岸，去第三仔的家住兩三天！』『好呀！你擁有一隻船！』『一隻機動艇罷了！退休後，我死也要買一隻摩打艇。幾十年來，我開街渡，慣了在駕駛室聽機聲、聞機器燃電油氣味，也慣了看搭客上船落船，上岸落岸的情景。我常常發夢，見到這般情景，那該是我人牛中最得意的情景了！』『晚年擁有一艘機動艇。也不錯！』我說。他嘆口氣說， 『這叫做畫梅止渴！』」

——摘錄自海辛〈香港仔的魚蛋與街渡〉，載《文學世紀》 第二卷第二期總第11期，頁55`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2523528,lng:114.1372717}},{type:"地景書寫",publication:"模達灣——海辛〈離島荒村鬼屋情〉(2005年)",description:`「『妹珠，剛才你說到坡下鬼村？』
她移步走至我面前，在躺著許多荔枝殼與核的泥地站立，問：『你去過嗎？』
『我去過。我每次往索罟灣走過模達灣，過山崗走至這斜坡路口，再往下走，在將到達東澳海灣的坡谷裡，見偃臥一條村子，頂多七、八間房屋，都無人居住，顯得破爛。但坡谷裡，生長著柚子樹、番石榴樹、石榴樹。那年春三月，我經過坡谷，除見柚子樹開白花，也見兩棵桃花盛放，鳥聲吱喳，間也傳來淒涼的姑惡鳥叫聲：姑—惡—見此無人荒村，不禁生出一縷神秘與惋惜。』我說。」

——摘錄自海辛〈離島荒村鬼屋情〉，載《香港文學》 總第249期，頁41`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2075363,lng:114.1452938}},{type:"地景書寫",publication:"瀑布灣——落拓人〈瀑布灣〉(1983年)",description:`「沿着石級一步一步往下去，瀑布的激流聲在耳中一級一級提漲，我終於看見了它。瀑布流水冲擊而下，如脫籠的野獸，它好像對我訴說它已獲得了自由、獲得了快樂、獲得了新生。轉身兒回顧海上，通處的浪潮泛起銀白色的光輝，閃閃生光，蘊含着一鼓衝勁，向海岸的目標冲擊而來，如萬馬奔騰，氣勢愈來愈猛，終於撞擊在岩石上，排山倒海之勢化作了無盡的浪花，猶如千千萬萬粒的碎珠洒在空氣中；破碎了、破碎了，我的心就這樣破碎了！遙遠大海，給予我這個落拓者點點孤獨、點點寂寞。相隔一條大海，對岸便是人皆熟悉的南丫島了。這個島上，峰巒一起一伏，猶如一條巨龍在俯伏着。我每次來到這裏，都萌生同一的慾念，希望自己變成一隻飛鳥，自由自在來回兩岸，或盤旋在大海的中央。」

——摘錄自落拓人〈瀑布灣〉，《大拇指》 第170期， 第4版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2524834,lng:114.1332397}},{type:"地景書寫",publication:"鐘聲泳棚——黃國彬〈縮腳歲月〉(2009年)",description:`「在中央冰室，我喝的通常是阿華田或好立克，有時也喝奶茶。至於食物，則是牛奶麥片、油多、餐包或法國多士。當時的物價低廉，牛奶麥片每碟五角。所謂『碟』，是頗深的大碟；一碟牛奶麥片，加上油多、阿華田或好立克，就可以給我豐富的卡路里，夠我在西環鐘聲泳棚的大海中盡情燃燒。」

——摘錄自黃國彬〈縮腳歲月〉，載《香港文學》 2009年6月號總第294期，頁15`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2799056,lng:114.1174556}},{type:"地景書寫",publication:"柴灣華人永遠墳場——梁秉鈞〈五月廿八日　在柴灣墳塲〉(1973年)",description:`「同一大幅靑綠上 
不同年份的石碑 
還有我們走過 
感覺足下的柔軟
看齊排的植物不規則地生長 
一些早上盛開晚上零落的紅色花瓣 
你叫它『落地生根』
菲洲菊雜生的葉叢裏霞
忽然有枝梗的手舉起一朵花 
在這生亂與死寂間 
我們俯首向一叢綠色的長葉 
找一朵風雨蘭
那種感應風雨綻開的花朵」

——摘錄自梁秉鈞〈五月廿八日　在柴灣墳塲〉，載《中國學生周報》 第1114期，第7版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2602877,lng:114.2408374}},{type:"地景書寫",publication:"春秧街(1)——也斯〈從春秧街開始〉(1999年)",description:`「北角當年有小上海之稱，我記得傍晚時分走過上海館子的生煎包的香氣、還有南貨舖酸濕香甜的氣味。當年建有橱窗裏擺賣麵包和巧格力的白俄餐廳。張愛玲留影的爾心攝影室。我大槪知道張愛玲和五○年代南來文化人住在那裏。但如今，我的外國朋友指着電車站對面一幢電燈桿那麼瘦長的新大廈，好似問我那是眞是假？那丁方的小幅新空間，是上帝從天上插下來的針，裏面眞的可以住人？」

——摘錄自也斯〈從春秧街開始〉，載《明報》 P.E4版，1999.11.8`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2911185,lng:114.1971947}},{type:"地景書寫",publication:"銅鑼灣電車總站——也斯〈從春秧街開始〉(1999年)",description:`「在銅鑼灣，你看到拐彎處一個小小的空間，光容得下一棵樹的，不禁笑起來了，這就是我們的廣場？唔，不要笑，這兒曾是電車拐彎的地方、聖保祿女生吃零食的小店、鳳城茶樓、亞洲出版社書店。在這兒旁邊的豪華戲院，我看到路易馬盧的《馬莉亞萬歲》、在對面的樂聲看到積大地的《糊塗舅父》和髙達的《斷了氣》。如果知道多一點這地方的歷史，也未嘗不可說是個我們的廣場。」

——摘錄自也斯〈從春秧街開始〉，載《明報》 P.E4版，1999.11.8`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2792726,lng:114.1871837}},{type:"地景書寫",publication:"春秧街(3)——施偉諾〈北角的雨天——記馬寶道和春秧街〉(2016年)",description:`「褪色的招牌只剩兩橫
滑動的水珠退到道中
白布上的不是血書
偶然也要避雨
也會在角落糊作一團
待店主用衣文章新勾好
小販抬頭望天
有時只是敏感的目光」

——摘錄自施偉諾〈北角的雨天——記馬寶道和春秧街〉，載《聲韻詩刊》 第二十九期，第A27頁`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2912786,lng:114.1979957}},{type:"地景書寫",publication:"春秧街(2)——黃燦然〈家住春秧街〉(2000年)",description:`「從十二樓窗口往下望。春秧街
活像舊時代的一截尾巴，攤檔上蓋
鋪滿垃圾，人頭在垃圾下攢動，
在晴朗的日子，看了就想下樓逛逛，
在陰天的時候，看了就想關窗。

在我們福建人的生活中，春秧街
等於『菜市場和一切』，菜市場
搬走了，便一切都沒有了，現在
我們搬回這個改變意義的地方：
母親做清潔工，我準備考大學。」

——摘錄自黃燦然〈家住春秧街〉，載《素葉文學》 第67期，頁51`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2911992,lng:114.1976041}},{type:"地景書寫",publication:"摩星嶺——林蔭〈摩星嶺惡鬥——續《調景嶺傳奇》節錄〉(2006年)",description:`「有傳聞臺灣國民黨政府，曾經考慮派船到香港來，把逃到香港來的國民黨士兵，盡早接到海南島或台灣去。可是，一九五零年四月二十六日，共產黨的解放軍勢如破竹解放了海南島後，台灣國民黨政府就把接載滯留在香港的士兵到台灣的計劃擱置了。
在摩星嶺過著非人生活的難民，無一不齊聲譴責國民黨政府總統蔣介石背信棄義。
為了生活，一些沒有工作能力的殘廢軍人，每天都艱辛地步行到市區，沿門或蹲在街頭行乞；另外，身體沒有殘缺的，則每天到西環一帶的碼頭、海旁等地方當臨時苦力，搬運船上的白米、麵粉、雜糧等上岸，賺取幾角錢幫補生活費。」

——摘錄自林蔭〈摩星嶺惡鬥——續《調景嶺傳奇》節錄〉，載《作家》 總第47期，頁92`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2772566,lng:114.1227427}},{type:"地景書寫",publication:"薄扶林道——浩瀚〈薄扶林道上〉(1966年)",description:`「三月埋在露珠的簾裏
紅紅的圍牆架着綠綠的瓦
在腳跟
大理石平而白
紫荆——我底愛
分躺着幽　分躺着妍
五抹貧血的淡絳綻滿了叢綠
沙沙
　飄遠又飄遠
　摩星嶺的迂廻中
　隱傳哀哀的鳥鳴
　迷離喲迷離
　羅曼蒂克中霧如煙
　胡姬躱在雲靄裏
驀地
巴士慌忙煞掣
跑車接着啦叭越過
紅個子旁邊添上幾頭黑髮
尙有秃的白的棕的
一倂往外擠
吁」

——摘錄自浩瀚〈薄扶林道上〉，載《中國學生周報》 第715期，第7版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2617617,lng:114.1360351}},{type:"地景書寫",publication:"華富邨(2)——王良和〈存在與不存在：華富那石灘的記憶與想像〉(2016年)",description:`「我一個人重回華富邨， 帶着照相機，沿途拍照。華美樓地下， 昔日的幼稚園， 變成南區長者綜合服務處。一輛接載老人的十四座小巴停在門前，車身當眼處印著『用心關懷　以心連繫』。正對釣魚台，海景優美的華康樓，外牆新髹，但整幢大廈老得要用鋼架支撐。
瀑布灣公園比以前更加美麗，種了很多樹，洋紫荊盛放濃艷的紫花。我走下石階， 只見海邊圍著一列長長的綠色鐵欄，一直延伸到釣魚台。幾個工人正在修草斜坡。穿過鐵欄的空隙，只見左邊的山坡，密密麻麻擺滿了陶瓷神像，觀音、福祿壽、大肚佛、如來佛祖、關帝、鍾旭、八仙、濟公、財神，或站或坐，或盤腿修練，或舉臂向天，或輪轉千手，慈和微笑，怒目掙揮，回眸含悲，不憂不喜，成百上千的神佛，在山坡列出奇特的仙陣，千目凝對滄海。」

——摘錄自王良和〈存在與不存在：
華富那石灘的記憶與想像〉，載《香港文學》 總第三百七十九期，頁18`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2523478,lng:114.1377799}},{type:"地景書寫",publication:"西貢新公眾碼頭——陶然〈海風輕輕吹拂西貢〉(2015年)",description:`「到西貢，不能不去看看『西貢新公眾碼頭』了。其實，最吸引我的，還是那個『西貢公眾棧橋』。它伸出海面，很長，形成一條長長的走廊，四面來風。我走到尾端，那裡有扶欄，再走下去，便要掉進海裡去了。我見到有三兩個人坐在往海裡伸下去的一級一級台階上，聊天，橋端有一男一女，中年人，正在看着風勢，努力想把長尾巴風箏放上天空，非常用心，但都不成功。須知，難度極大呀，先要把極長的尾巴橫躺在地面上，整理好，看準風勢，還要依著欄杆，憑與海面的高低不同放飛。他們手忙腳亂，幾次都不成功，不是尾巴太長給絆住了，便是風向變了，飛不起來。這時才明白，我們平時看那風箏在空中逍遙自在，卻沒想到放飛者有多麼辛苦。只是辛苦之後的樂趣，又不是常人所能夠體會的了！」

——摘錄自陶然〈海風輕輕吹拂西貢〉，載《香港文學》 總第三百六十九期，頁46`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3814533,lng:114.2742092}},{type:"地景書寫",publication:"赤徑——盧展源〈破船——記西貢赤徑所見〉(1993年)",description:`「曾經搭渡的人要回家
留下孤舟在等待
隔着無邊的水域可能有人
設望冒險者在風浪中尋見
安全的漁港，每一天
揚起魚網投入海中
彷如心中久藏的願望
在漁港實現
尾尾都是豐甜的海鮮
富饒的生活日日
晚上盞盞漁燈亮起岑寂的港灣
整個地方屬於自己
有悅耳的歌聲伴夜」

——摘錄自盧展源〈破船——記西貢赤徑所見〉，載《詩雙月刊》 總第二十二、二十三期，第四卷第四、五期，頁68`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.420317,lng:114.351318}},{type:"地景書寫",publication:"西貢碼頭——劉岸〈西貢碼頭觀漁獲〉（2005年)",description:`「半世紀後，我們垂垂老矣
假日裡遊蕩
追隨着絡繹人流
駐足遠郊古老的碼頭    聽
駕快艇趕集的漁夫
吆喝着魚汛的收獲    看
岸上遊人驚喜地挑選
隨後將軟硬混雜的錢幣
擲進鈔網    交換
肥美的海鮮    帶回去
熬一碗絕味的魚粥
心想這才是佳妙的人生」

——摘錄自劉岸〈西貢碼頭觀漁獲〉，載《香港作家 》 二○○五年 第二期，封面裏`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3817929,lng:114.2746041}},{type:"地景書寫",publication:"大潭篤水塘——陳君葆《陳君葆日記》(1958年)",description:`「午飯後到赤柱海灘去曬了一陣太陽，還到過大潭篤水塘去散步了一個小時。在海邊石坐着看海浪湧岸邊的海草，一進一退，很有意思，極想把它畫出來。
晚七點三十分，到金陵酒家主持春節聯歡晚會的開會儀式，略講了幾句話，祝大家新春快樂。
八點，趕到中國銀行頂樓，客人都到齊了，鐵老正等我。他從北京回來已一週，在北京十七天。今天他請客，預備的是潮州菜，我最愛的是那魚翅和芋泥。席間談到Harry Ching的問題，我以為沈漢揚是愛中國的，我們有用着他的地方。前年我曾邀他到北京一行，他因有顧慮未肯去，現則退休了。
大潭篤水塘一首
似秋天氣助春晴，未透疏林落澗聲。
靜愛曲池風日好，滿山紅葉不知名！」

——摘錄自陳君葆《陳君葆日記》（卷四），頁154`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2430749,lng:114.2204744}},{type:"地景書寫",publication:"跑馬地(3)——陳君葆《陳君葆日記》(1942年)",description:`「連日以來路上每發見餓斃的市民，一個多禮拜前電車經過跑馬廳前，那裏卻躺着一個餓死已久的苦力，這種情形不圖竟出現於我眼前，不禁為之心酸一陣。孟子那時候還只説『野有餓莩』，現在都市卻普遍着這種情形。今晩渭舫來説，據澳門來的人講，那邊情形極惡劣，吃人肉的事情是有的，胖的每每失蹤，這種情況的確可怕。我聽了他的話，立刻為之悄然不歡，渭舫也察覺適點。其實心裏着實掛念着家人妻了，那自不必說，而且也有許多親戚朋友在那邊，教我如何不想念呢？然而年荒世亂，人力之所不及，那只有求上天默佑了。歷史上的宗敎，都是建於這種運會的，目前似乎有一個新宗敎起來的必要與可能了。」

——摘錄自陳君葆《陳君葆日記》（卷二），1942-08-08，頁109`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2722512,lng:114.182857}},{type:"地景書寫",publication:"信和中心(1)——崑南〈旺角不老〉(2002年)",description:`「每一次我進入『信和中心』，我還以為身在『中僑』，早期的一間專陳列國貨的公司俱往矣。類似『信和中心』的商場越來越多『旺角中心』、『潮流特區』、『瓊華中心』、『家樂』、『先達』等袖珍的店舖在青少年的心中，構成了五光十色的消費工國。如果嫌這個王國不夠大。還有西洋萊街的女人特區，一個下着大雨仍擠滿野獸的森林。突然想起麥花臣球場，花墟球場，然後花（市）、雀（仔）、（養）金魚……森林是森林，但它們是野獸嗎？」

——摘錄自崑南〈旺角不老〉，載《文學世紀》 第二卷第七期總第16期，頁96`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3160848,lng:114.1702614}},{type:"地景書寫",publication:"達德學院舊址(2)——陳德錦〈青山墟一間不存在的大學〉(2001年)",description:`「一九四八年冬：重建國家的秩序
先要砸碎自己的過去，徹底改造本質
成為新鮮的陶泥，塑造革命的典型
你看見沒落的西方藝術是寫實的反面
畢加索扭曲的灰線，摩爾臃腫的軀肢

這就是活教材了。記得去年聖誕節
天星小輪載我們到港島，在永安公司
我送給你那一條毛頸巾，溫暖好比
聖堂的管風琴和詩班的唱詠？
而《卡薩布蘭卡》是最後一齣在香港觀看的
電影——從那裡逃出來，我們必將回去
不要依戀這紅磚房，呆對青山喬木
芳園雖好，也不要誤作傷春的遊子」

——摘錄自陳德錦〈青山墟一間不存在的大學〉，載《香港文學》 總第201期，頁91`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.396084,lng:113.9781882}},{type:"地景書寫",publication:"信和中心(2)——洛楓〈旺角：信和中心(Take Two)〉(2002年)",description:`「走進日劇的光碟市場走進
戀愛世代的悠長假期
身體與身體擠壓的空間沒有
走火防火的通道上來來回回
尋找被時間遺棄於路旁 
一個掉在過去的笑容
轉角有羞赧的琴聲滑動械
猶豫的指頭青春原來是
獨自坐在虛空的房子內的意志
Would you still hang around」

——摘錄自洛楓〈旺角：信和中心(Take Two)〉，載《詩網絡》 第01期，頁106`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3160798,lng:114.1703272}},{type:"地景書寫",publication:"金馬倫道——洛楓〈尖沙咀：金馬倫道(NG)〉(2002年)",description:`「走出科學館的劇院你我身上 
仍殘留室內空調的氣味
銀幕上的黑白影像
在眼睛閃合的黑點裡抖落 
再複印滿街彩色的繁華 
兩旁的店鋪溢出日本拉麺的水氣 
你流動的身影浮出街的輪廓 
汽車在霓虹燈下馳過 
車窗內的音樂旋起了撲臉碎亂的塵埃」

——摘錄自洛楓〈尖沙咀：金馬倫道(NG)〉，載《詩網絡》 第01期，頁106-107`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2990602,lng:114.1740315}},{type:"地景書寫",publication:"盧押道——黃碧雲《烈佬傳》(2012年)",description:`「那天下午我在盧押道口開工，站了一陣，沒軍艦到，街上有點靜。見到有個𡃁仔望着我，𡃁仔着件天藍色棉布恤衫，恤衫好寬，一件灰色西褲，也好寬，着一對黑皮鞋，鞋帶已經斷了，再
縛一個結縛回，頭髮短短，胸前口袋袋着包良友。他向我打一個眼色，原來有個傻兵，一邊唱歌一邊往碼頭走去，個銀包快要跌出來，我走近去，那個𡃁仔問傻兵girl，you want girl，那個傻兵，原來不是在唱歌，而是在哭，還説好多話，我聽到個die字，傻兵要回越南，大概説他要去送死。既然都死，錢都用不着，我們還活着，還要錢，趁傻兵和𡃁仔講嘢，我抽出了他的銀包，立刻袋着。」

——摘錄自黃碧雲《烈佬傳》，頁34-35`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2779049,lng:114.1716494}},{type:"地景書寫",publication:"上海街(5)——黃碧雲《烈女圖》(1999年)",description:`「你婆婆宋香生於一九一九年。那時上海街没人，只有人力車。派洛賣七仙一包，王子賣兩仙，金錢賣七仙。你婆婆檔口旁邊，是張伯記雜貨，再旁邊是環球鐵鋼。過去是一定好茶樓。你婆婆賣煙，你婆婆媽媽賣煙，你婆婆婆婆都賣煙。
日本人來的那一年，你婆婆二十二歲。
上海街的苦力在打荷包。你婆婆宋香没作聲，瞪着眼看苦力打荷包。他們也瞪着她。嘿，最憎你個女對眼，望住人。那些苦力跟你婆婆阿母説。我偏要瞪着他們。瞪着他們探手入人家的口袋，打荷包。」

——摘錄自黃碧雲《烈女圖》，頁5`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3155925,lng:114.1688483}},{type:"地景書寫",publication:"告羅士打酒店舊址——黃碧雲《烈女圖》(1999年)",description:`「那個男人，老醫生，黑黑實實，糊仔臉。告羅士打大酒店，木樓梯，會轉彎，玻璃燈，天吊下來這般高，喝咖啡，苦茶一樣，老醫生説，可以加糖。老醫生還帶着大少爺，大奶奶，大姑娘，二姑娘，白月説他帶多幾個人來壯膽，林卿笑，他要他們來看我，准不准才真。不是他拿填房，是他們揀後媽。林卿從頭到尾都没看老醫生一眼，離開之前，老醫生塞一個紅布包給白月，林卿低頭見了，嚇得不敢看，抬起頭，看見老醫生，一臉老人斑。」

——摘錄自黃碧雲《烈女圖》，頁76-77`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2815228,lng:114.1578772}},{type:"地景書寫",publication:"大南街——黃碧雲《烈女圖》(1999年)",description:`「兩個人，手拖手，一齊返工，一齊放工，一齊上工會。工會在太南街，上去可以學唱歌，拉手風琴，學國語，有醫療所，認字班，不用錢。五一勞動節放假，跟工會可以去大嶼山旅行，船上有人扭秧歌，唱爹親娘親不如毛主席親。原來工人好賤，叫做剝削，老闆，叫做資産階級，這樣管工呢，工會的人説不上來，你母帶喜説，管工就是耶穌，她是上帝兒子，扮做人又不是人。工會那李存旻，説，耶穌賣鴉片，麻醉人。
階級意識就是要『團結、勇敢、奮不顧身』『打倒資産階級（即是老闆）』。你母帶喜問，這樣還要不要返工捣食，老闆要加班，加不加。你母銀枝説，加，爲甚麽不加，賺到錢就加。」

——摘錄自黃碧雲《烈女圖》，頁120`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3273724,lng:114.1630476}},{type:"地景書寫",publication:"大王東街——准遠〈大王小街〉(1984年)",description:`「好幾個星期前，我第二次重訪大王東街，也不知道它叫做大王東街。我要去蔡和許的辦公室，但巴士到站時，我並沒有下車，故意坐過頭，看看自己去得多遠才懸崖勒馬。我下車後轉進的一條橫街，剛好是十多年前常常搭乘的十號巴士的終站。我換車去到皇后大道東，再走進大王東街，走出莊士頓道。那一趟我以爲自己頭一趟重訪大王東街，卻仍然沒有看看街名牌，只是在一家服裝店和一家印刷店裏面呆了一會。
大王東街印刷店多的是。我們以前那份雜誌，頭幾期也許正是這條小街上的某一家印刷店印出來的，這我不大清楚，因爲第十期我才加入。我在計程車上說：『頭幾期都給警察沒收了。』凱說：『我表哥是個警察。』我說：『我討厭警察。』她說：『我爸爸和姊姊，都是當警察的。』我想這也十分自然。也許皇后大道東和大王東街一帶，以前適合激進派與幫會分子，現在合警察住。」

——摘錄自准遠〈大王小街〉，載《賭城買糖》，頁62`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.275967,lng:114.1713788}},{type:"地景書寫",publication:"灣仔渡輪碼頭舊址——准遠〈你那一區〉(1984年)",description:`「腸胃還不對勁，得趕回家吃爲我炮製的剁牛肉稀飯，這就步行去灣仔碼頭，打算坐渡船到佐敦道碼頭，再換巴士。七點五分，我到達灣仔碼頭，在候船間呆坐了約八分鐘後，一個穿藍色制服的中年大個子進來嚷着說：『船在那邊出了毛病，這邊起碼要到七點四十分才有船。要是方便的話，改乘去紅磡的船好了。』我在往紅磡的渡船上坐了約五分鐘，船紋絲不動，我坐到出口旁邊第二行長椅上，打算要是到了七點廿五分還不開船，就下去等往佐敦道的那一班，但沒多久船就動了。這就是我再次踏足你家住所的那一區的緣故。我從紅磡碼頭走去你父母和大姊仍然居住的小街末端的大街，打算搭十一路巴士去佐敦道碼頭。紅磡碼頭對面的巴士總站，多停了好幾路巴士，不知從甚麼時候開始的，但肯定是你去俄亥俄之後的事。」

——摘錄自准遠〈你那一區〉，載《賭城買糖》，頁71`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2822161,lng:114.1754913}},{type:"地景書寫",publication:"蘭桂芳——准遠〈再寄泣皮〉(1988年)",description:`「我不喜歡蘭桂坊，因爲我不喜歡那種老掉牙的所謂波希米亞情調，更不喜歡那些在那一區磨的、自命泣皮的驢頭。
太遲了。泣皮時代即使還沒結束，也該接近尾聲了。眞正的泣皮即使還沒掉光頭髮，也該拚着老命在保持身體的曲線了。
某人說：『我們的泣皮時代還沒開始昵？』祝他好運。要是在中國大陸，這話還有點道理。中國的泣皮時代，也許要等到鄧小平的曾孫長大成人才開始亦未可知。再說，甚麼事情也抄近路，甚麼本領也要沾邊，走路歪歪扭扭，說話亂拋書包，手戴三流古董腕表，足踏髒巴巴的名牌運動鞋，辦公室亂七八糟，滿嘴煙臭與黃牙，未紅先驕，欺善怕惡，穿得像個屁精，算甚麼泣皮？至少，泣皮該是性別分明的。在下忙得團團轉，不打算寫下去。但在收筆之前，簡短聲明如下：在下從來不是泣皮。
還有一句話。你要是還以泣皮自居也不打緊，因爲你早晩會明白，你充其量是一塊值得哭泣的、過長的包皮罷了。」

——准遠〈再寄泣皮〉，載《賭城買糖》，頁97-98`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2806833,lng:114.1555229}},{type:"地景書寫",publication:"維多利亞公園(5)——李金鳳〈園裡・園外〉(1989年)",description:`「走進維園，感覺進了丹麥。這份聯想不是毫無道理。
維園是港島平地上最大一個公園、市肺，綠野靑葱。它設想應該是一處鬆弛的仿田野，按摩被水泥、窄牆壓得快崩裂的神經，可是維園有許多鐵欄栅，大圈圍細圈，鐵栅圍着竹籬笆，竹籬圍着花圃，花圃圍着鐵馬，鐵馬圍着用太多鐵線編紮的仿象'仿馬、仿鱷魚，這些仿製動物又被幾株幼樹緊逼包圍，不能動彈。」

——摘錄自李金鳳〈園裡・園外〉，載《鐘樓記憶》，頁35`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2818077,lng:114.1900276}},{type:"地景書寫",publication:"青衣(1)——李金鳳〈隱伏的名聲〉(1989年)",description:`「現在再見這靑衣的島，婉惜多過讚嘆。現在，我還記得，有年到希臘漫遊，在闃無人煙的海島上，看湛藍淸澈的海水，載着純度九九的金光，深深受到感動，覺得不能長此生活在這種地方，畢竟遺憾。不久，我回香港，從啟德機場驅車直指屯門老家。沿路黑煙人塵，把我的思絮逼回歐陸。到汽車登上屯門公路，看到現在眼前的風景，希臘才幻覺一樣，消失無踪。我想，看美景不必捨近圖遠。」

——摘錄自李金鳳〈隱伏的名聲〉，載《鐘樓記憶》，頁62`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3474872,lng:114.1023164}},{type:"地景書寫",publication:"大澳——李金鳳〈大典〉(1989年)",description:`「聽說，大澳七月有大典。有打眞軍的搶元寶。
有人隨口邀我同行，看這一年一度愈趨式微的盛會。
我或許看，或許不看，仍在猶豫。說到打眞軍，這人說『個個打到豬頭咁樣』，就爲了這豬頭，不忍心看。血我最怕——切菜把手指肉切去一塊我不怕，交通意外撞甩手腳大概也不怕，捐血室內那一包包的血漿更加不用怕了（我擅長看血液從針頭流過膠管進入膠袋的場面）。我只怕爲了無謂理由蓄意流的血，想到浪擲生命，塗炭生靈的殘忍，我會悲慟。
而我猶豫，是因了聽說大澳從肉身到精神陸續淡岀，現代文明的爛磚爛瓦已經倒入漁村，很快大澳以至整個新界地區的文物風俗歷史會消失於無形，變成文件存放到英國駐港軍部的檔案室。生在市區的新一代，已經是斬斷了紐帶的歷史孤兒，新界的鄕土也快將隨風飄零。
然而，難道我又眞的要趕到九龍城寨拍張某日曾到人間略作流連的紀念照片嗎？
我想，矛盾便在這裡。如果我們有理性的計劃，古風故物自然善擇而珍留，那麼，人便有所選擇，是不是去撿拾破爛。」

——李金鳳〈大典〉，載《鐘樓記憶》，頁68`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2522515,lng:113.867454}},{type:"地景書寫",publication:"沙田大會堂——李金鳳〈走在不毛之間〉(1989年)",description:`「旣然前面有沙田大會堂，我也不好留在這片不毛空地上，偏受太陽的白眼。
會堂裡的冷氣很夠勁，少了體能輻射的干擾，剛才我步出新城市廣場，逕直經過不毛廣場，到稍爲遲疑等這會堂的自動玻璃門敞開招呼我的短短數十秒間，鼻樑、眼肚、上唇、手臂和眼鎮玻璃片長出的汗粒，在我還未站穩，已經矢走無終。沿邊走了一個四方圈——如果我在外邊，從城市廣場大門噴水池行起，現在約行到不毛廣場中間——我已經把會堂內所有壁板海報看完，而且把警衛旁邊放著的節目單都執了一套。我打了個呵欠，這裡空蕩蕩連烏蠅也沒有一隻，無怪乎人人都留在冷氣次一級的商場內尋找……，讓文化會堂長存空靈狀態下去吧。」

——摘錄自李金鳳〈走在不毛之間〉，載《鐘樓記憶》，頁84`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3813426,lng:114.1901019}},{type:"地景書寫",publication:"新城市廣場——李金鳳〈……，我遠去〉(1989年)",description:`「凍忌廉在口腔從涼滋滋至暖化，體外烘著別人體溫，這相濡以汗的摩挲，透過高場冷氣的牽繫，安然令人有四世同堂，合家歡樂的滿足感。
抵近噴水池，轟地響起了電子交響樂！平地突發拔起四層樓高的水柱，在這飛瞬一刻，擧世歡騰！神聖啊！神聖地完成了衆望所歸，電馳雲端的集體狂喜。」

——摘錄自李金鳳〈……，我遠去〉，載《鐘樓記憶》，頁83`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3817578,lng:114.1886372}},{type:"地景書寫",publication:"交易廣場(2)——李金鳳〈萬戶千家〉(1989年)",description:`「而星期一那天，大羣人大羣記者守待在交易所洞穴的出口，以爲貼近它便觸摸了股市心臟，刺入了經濟波動的奧秘。整天我們關心的是數字，數字似乎顯示了事情的眞相。其實，誰又知道什麼。交易廣場大廈俯視了萬戶千家，誰有敲過門，探頭往每一家裡看，看正在發生，將會發生——那千千萬萬的悲劇。」

——摘錄自李金鳳〈萬戶千家〉，載《鐘樓記憶》，頁116`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2837635,lng:114.1584903}},{type:"地景書寫",publication:"新華戲院舊址——李金鳳〈普通人的電影〉(1989年)",description:`「不知道應該欣慰還是後悔，總之是這樣：我叫了亞蘭去看侯孝賢執導的『戀戀風塵』。我看過，覺得好，覺得它只能夠排在新華戲院上映，是廣大觀衆的損失。我認爲普通人應該可以接受這齣戲——無疑，和絕大部分港產片和美國片比較，它的節奏是太慢了，兼且沒有懸疑，沒有靚衫。可是，它在新華上映，畢竟便損傷了讓普通人接觸的機會。新華首先是不就腳，住在香港區的人認爲要從軒尼詩道出海旁，登上天橋，才去到那個『什麼也沒有』的角落，是很艱難的事；住九龍或新界的，更加不能夠想像它到底在什麼方位。所以，除了經常去藝術中心，或有公事出入那一帶，或簡直是電影發燒友，否則乾脆會視這戲院不存在。」

——摘錄自李金鳳〈普通人的電影〉，載《鐘樓記憶》，頁117`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2808775,lng:114.1749657}},{type:"地景書寫",publication:"寶馬山——李金鳳〈新聞報紙說〉(1989年)",description:`「自寶馬山案後，我已經取消了往寶馬山行山的習慣。那裡沿途景色姣好，近在目前的半個港島鳥瞰景盡收眼簾，放棄是有點可惜。然而新聞紙上的黑色吿示，給我太大精神壓力，我不敢冒犯。現在，他們又把的士司機的身份突出，我是不是今後連坐的士、出夜街的習慣也應該放棄呢？我識得的許多女友確是已經沒了獨身回家的習慣。想想，我們良家婦女眞是退無立錐之地。
他們說：『林過雲再世』，其實他們口齒不淸楚。林過雲未死，從來就健在，何來番生之術？頂多，只能說林過雲有了兄弟。但即使新近這位司機，也遠遠沒有林君的脾性。他們於是改而爲那兩個少女造文章，說是弗得妹，有多次離家失踪紀錄。她們是不是死有餘辜？他們未有說明！」

——摘錄自李金鳳〈新聞報紙說〉，載《鐘樓記憶》，頁127`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.284378,lng:114.2007001}},{type:"地景書寫",publication:"啟德機場舊址——李金鳳〈後天免疫力缺乏〉(1989年)",description:`「又送走一個人。
燈火通明的送機室白得眼火灼熱。都說不送行了，偏偏到那預定的時聞人坐立不安。看掛鐘，她該提起行李，最後一次摸着那會經謂之爲『家』的大門門把。門應手開了，往昔種種旋即關在門後。家沒了。屋不是家。天涯所到之處，何處容身便成家。
她這時候揮起手，招來了一部計程車。司機下車，繞半圈來到車尾廂開尾蓋，接過來一件兩件三件行李。一切就緖，她拉開車門側身跨進車裡，這個城市離她再遠一點。
不能空着忍受忖測另一處地點，另一個人，發生另一些事的煎熬。到底我又來到送機室。聽照相機擦動聲。疲累的笑。不着邊際的叮。寧。人面。無奈。
好久以來便要習慣把到機場送行編入生活節目表內。行爲本身可以成爲機械紀律一部分。所以機場裡不再有濺淚場面。至少不會是我。
甚至習慣把每段戛然中斷的友誼濃縮成一片微型菲林，按情感深濃的次序編排在記憶的儲物室，每隔若干時日拿出來顯影放大一遍，好讓它不發霉。但是想念是遏止不住的癌細胞。在我們這裡，這種癌病繼續蔓延，是新種類的後天免疫力缺乏症候羣。」

——李金鳳〈後天免疫力缺乏〉，載《鐘樓記憶》，頁172`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3091896,lng:114.2113287}},{type:"地景書寫",publication:"康樂街——李英豪〈這一雙日本相思〉(1987年)",description:`「煜煜：
女兒要去旺角康樂街成行成列的雀鳥店看雀。我也想趁這個機會使她認識各種不同的雀鳥，比方雀鳥的名字、特性、形狀、顏色、飼料、習慣和來源地等等。旣然日常很少有機會和時間接觸觀看大自然的雀鳥，就祇能從雀鳥街透過雀籠看牠們的面目，也許在擠得透不過氣來的城市裏，人與人之間同樣是隔着栅子鐵枝你看我、我看你。不同的是鳥兒在小籠子中，我們不過是在小籠子之外給一個無形的大籠子罩着。所以，我們別笑鳥兒困在籠子裏，我們應該同時覺察自己的悲哀。鳥兒知道自己在有飼料、有食水的籠中；我們卻忘記自己是囚在人性的籠子裏、社會環境的籠子裏、名韁利鎖的籠子裏。往深一層想，還有種種觀念的籠子，我們到底不是一個絕對的自由人！」

——摘錄自李英豪〈這一雙日本相思〉，載《同心之言》，頁182`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3198642,lng:114.1682534}},{type:"地景書寫",publication:"大磡村舊址——潘國靈〈大磡村〉(2017年)",description:`「大磡村對着荷里活廣場，荷里活廣場對着星河明居。因為陳果，你記得星河明居整整齊齊有五幢，少一幢就不成，飛不出的『五指山』。《香港有個荷里活》開首那個燒豬、荔枝加香爐的鏡頭，分明是獻祭的。祭誰呢？祭一切已逝的城市亡靈。
二ＯＯ一年二月十四日，路人甲，即我，造訪大磡村，大肥豬沒有碰上，拍照、告別的人倒有很多。詠藜園仍在營業，我吃了一碗擔擔麵。我清楚記得，下元嶺村忽然天空冒煙，大磡村村民但笑不語，似早有所料，想起來，大磡村清拆前八天內三度離奇失火，彷彿內有故事。煙幕中我看到一點無聲抵抗。」

——摘錄自潘國靈〈大磡村〉，載《消失物誌》，頁100`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3409726,lng:114.2011551}},{type:"地景書寫",publication:"中興百貨舊址——潘國靈〈中興百貨〉(2017年)",description:`「雖說中興國貨於上海街與旺角道交界已佇立了半世紀有多，二Ｏ一一年二月它臨近結業之前，我才第一趟來到這裏。未入店內，那灰玫紅金字木質招牌已散發着舊時代氣息，印象中，這種色調搭配在舊式辦館中也見過，如今買少見少了。從玻璃窗貼着的文字標示所見，昔日閣樓賣童裝、女裝、皮鞋、布疋，二樓賣衣車、單車、皮箱、皮唸，淘汰不是一下子的，如風化之慢慢侵蝕，衣車、單車早沒售了，成藥部不知何時關掉了，雙喜牌棉胎也幾近作古吧，剩下最有韌力的，始終是衣服鞋襪。童裝、一件頭藍白技工服、裇衫、冷衫、扯布衣、校褸、校服裙、西褲、短西褲、黑色或白色的學生鞋，每經過一個角落都有人在閒話過去，價廉是肯定的，物美與否則因人而異，我卻想到不少國貨特色衣着，如果有時裝潮人看上，或有成為『潮服』的本錢（愈是『國產』，愈是『革命』，後來愈多成為『消費品』，說來這也是時間給世人的反諷，但這是別話）。」

——摘錄自潘國靈〈中興百貨〉，載《消失物誌》，頁110`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3205866,lng:114.1678212}},{type:"地景書寫",publication:"灣仔影藝戲院舊址——潘國靈〈影藝戲院〉(2017年)",description:`「二OO六年十一月三十日，影藝的最後一天，影藝戲院選映了五齣影片免費給觀眾欣賞，從中午至晚場先後為《開國大典》、《芙蓉鎮》、《那山那人那狗》、《我想有個家》、《朗朗星空》，我選看了黃昏六時放映的《那山那人那狗》，見證它最後的全院滿座。當然也不忘拍照留念，包括放在兩個影院入口走廊的籐椅、『影藝十大影片龍虎榜』，還有紅色簾幕的影院。『影藝濃情十八載』，最後一張告示說：『你我相逢光影裏／因有靈犀一點通／今宵惜別／有緣再會』。後來影藝戲院捲土重來在九龍灣淘大花園重開，名字依舊，但於我來說，卻很難說是『再會』了。」

——摘錄自潘國靈〈影藝戲院〉，載《消失物誌》，頁186`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.28021,lng:114.177126}},{type:"地景書寫",publication:"八鄉——鍾國強〈八鄉平原四望有感〉(1984年)",description:`「聽罷電臺的新聞報道
仍不知吉兆凶兆
到屋角踱步，暗暗煩惱
不如上天臺遠眺

山圍四面，一樹一蔭護
風為眠曲雲作枕 
今日櫛比的千家萬戶
原是昨天避秦人」

——摘錄自鍾國強〈八鄉平原四望有感〉，載《圈定》，頁19`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4465916,lng:114.0933976}},{type:"地景書寫",publication:"海怡半島商場——鍾國強〈海怡半島商場〉(2001年)",description:`「保險經紀喜歡派氣球
推銷子女的長遠敎育
我的子女還小哩
喜歡在美心快餐店門前
攪珠一樣攪出一顆香口珠
店舖試完了春裝
又換上室內裝修來測試命運
兒子今天想攪出超人
結果還是昨天的怪獸」

——摘錄自鍾國強〈海怡半島商場〉，載《城市浮游》，頁15`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2438844,lng:114.1470062}},{type:"地景書寫",publication:"利園商場——鍾國強〈利園商場〉(2001年)",description:`「玻璃，玻璃，玻璃 
廣吿公司的革履響過慾望的長廊 
清潔阿嬸們給潮濕的雨傘 
逐一套上塑料袋 
透明，透明，透明 
一個工人從百呎高的天花跌下 
雲石大堂有沒有好看的花紋 
誰也説不清…」

——摘錄自鍾國強〈利園商場〉，載《城市浮游》，頁19`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.278622,lng:114.185478}},{type:"地景書寫",publication:"298電腦特區——鍾國強〈298電腦特區〉(2001年)",description:`「主的板，奔騰處理
記憶體將腦袋丢在後樓梯
ICQ，用手，用口，用手田水口
而難，與女相近，更接近的是金

金毛飛在樓梯用眼睛吃飯盒
把風，吹到樓上，一百蚊三隻
蝴蝶壓縮在ＣＤ，在檔案，在四仔的紋身
Office2000有不倫之戀」

——摘錄自鍾國強〈298電腦特區〉，載《城市浮游》，頁22`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2779583,lng:114.177366}},{type:"地景書寫",publication:"信和中心——鍾國強〈信和商場〉(2001年)",description:`「星在膠袋裡看著路人
路人在看一個絕版的模型
盒還沒有打開，沒有被玩過
才值錢，如雞雛的聲音
禁閉於鐵皮匣內的發條」

——摘錄自鍾國強〈信和商場〉，載《城市浮游》，頁26`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3160708,lng:114.1703914}},{type:"地景書寫",publication:"崇光百貨——鍾國強〈崇光百貨〉(2001年)",description:`「電梯裡的她看著電梯門 
關上她放在門外的焦點 
她對門邊輪迴閃亮的按鈕説話 
『九樓特賣場』——聲音彷彿 
從微微沾上機油的白紗手套透出」

——摘錄自鍾國強〈崇光百貨〉，載《城市浮游》，頁28`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2804272,lng:114.1843032}},{type:"地景書寫",publication:"鵝頸橋——鍾國強〈鵝頸橋〉(2001年)",description:`「打不著流浪的狗 
打不著低頭走過的人 

沒有名字在它身上 
遇上了，誰也不會留意 

鞋跟各各，也不會留意 
打著一張飄起，又落下來的

紙，在路邊
等待竹帚，或另一次飛越」

——摘錄自鍾國強〈鵝頸橋〉，載《城市浮游》，頁39-40`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2790166,lng:114.1814301}},{type:"地景書寫",publication:"堅拿道——鍾國強〈睡在路邊的人〉(2001年)",description:`「已經是十一時許 
城市很多節目 
會不會開始呢 
在堅拿道天橋下 
巴士把幢幢人影 
都接載回去 
的士不斷繞過來
計程錶亮得扎眼 
你卻安然睡著 
在加油站不息的霓虹 
背後，在四周 
很多閉起又張開的 
燈窗下」

——摘錄自鍾國強〈睡在路邊的人〉，載《城市浮游》，頁54-55`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.278133,lng:114.1813831}},{type:"地景書寫",publication:"嘉道理農場——李英豪〈尋不着的紫薇〉(1986年)",description:`「有時覺得，小島上的生活，天天像衝鋒陷陣，深怕飢貧這些敵人打到眼前來。瞎忙一陣子，日子停下來就像跛了似的；略略回頭，忽然變成擧步維艱。但是到了觀音山上，晨早霧氣把自己包圍，倒不想再屈指細算未來命運，頓覺自由快樂就在目前。雖是濃霧，究竟現眼和親自體驗的東西才是眞確的。大自然裏無假象；縱有海市蜃樓的假象，也屬於難得美景。」

——摘錄自李英豪〈尋不着的紫薇〉，載《山外有山 》，頁73`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4333244,lng:114.1180359}},{type:"地景書寫",publication:"廣播道(2)——李英豪〈賣腸粉的矮老頭〉(1986年)",description:`「第一次看見矮叔，是在廣播道的斜路上，距今差不多十年了。他身裁又矮又小，推着比他大幾倍的賣腸粉車子，使勁地和三合土的傾斜度抗衡，跟地心吸力對抗。
矮叔的表情不似有什麼抱怨，微微低下頭，每天習慣地推車上小山。我遠遠望過去，看見的好像是一個縮了水的神話人物薛西佛斯，竭力推大石上山。矮叔不也是幹着徒勞無功的工作嗎？我明白，他不外爲了討活。
那時妻還在人世間，天沒破曉，淸晨五時許，便要我駕車送她回廣播道，監製晨早節目。所以，天如魚肚白色，必見這個老頭兒在凄凄霧靄中的側影，有如活在一幅放大了並無相片框的攝影作品裏。」

——摘錄自李英豪〈賣腸粉的矮老頭〉，載《山外有山 》，頁161`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3413053,lng:114.1828506}},{type:"地景書寫",publication:"馬鞍山——葉輝〈登馬鞍山〉(1989年)",description:`「我的朋友都喜歡馬鞍山。
一位寫詩的朋友，喜歡沿用土名企嶺，他年前在馬鞍山南腰尋覓祖墳，寫了一首長詩，題爲《崑崙》，其中一段引用了一方石碑上的一行小字：『本山坐乾向巽屯於南山大排之原』，跟着兩句說：『乾是西北／巽是東南』。
另一位繪畫的朋友，一再向我提及馬鞍山，說此山在不同方位遙看，有不同的風姿。他認定馬鞍山是全港最雄偉的一座高山，並且常常以沒法子繪好一幅馬鞍山爲平生憾事。我曾經從烏溪沙，從十四鄕登馬鞍山，這一次，從大環抝出發，越過黃竹洋山，迎着一幅峭直的崖壁和昂起的馬首'走上了馬鞍。這座山高不過七百公尺，然而橫亘前路，馬腹拔地而起，變成直角，馬首峥嶸，引頸長嘯，也實在極有氣勢，至此，才相信寫詩和繪畫的朋友所言不虛，並且覺得先前兩次登馬鞍山，還不曾眞正體會此山的恢宏和挺拔。」

——摘錄自葉輝〈登馬鞍山〉，載《甕中樹》，頁152`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4046089,lng:114.2515851}},{type:"地景書寫",publication:"馬鞍山昂平——葉輝〈寂寞昂平〉(1989年)",description:`「昂平不比嶂上難走，東南面是西貢公路，西北面是馬鞍山礦場，無論從那一面上去，山路明朗暢達，大槪走一小時斜坡，便可登上那片如今已夷爲平地的半山平原了。夏秋之交的假日，這片平原上就出現一番熱鬧的景象，天空上有彩色的風箏，草地上有條紋或方格子的野餐營地，遊人從四方八面湧到，遠遠從馬鞍山那邊的山徑望過去，綠色的草原上添上了鮮明的色彩圖案，擠滿了跑動和靜坐的旅人。」

——摘錄自葉輝〈寂寞昂平〉，載《甕中樹》，頁154`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.390988,lng:114.252881}},{type:"地景書寫",publication:"長洲九宮塘——葉輝〈九官塘的懷想〉(1989年)",description:`「不知爲甚麼的想起了九官塘。大抵是收拾舊書刊，當中有一些詩刊，是六、七年前和一班朋友辦的，刊物出版後，大夥兒曾經到九官塘過了一宵。
九官塘是長洲南端的一個小村落。朋友的朋友在那裏有一幢石屋，由於地點偏僻，交通不便，要走半個小時的山路才可到達，所以，房子已空置了一段日子，偶爾借給旅行的朋友歇宿。那個時候大家還很年輕，如今大多已成家立室，甚至是一、兩個孩子的父親了。」

——摘錄自葉輝〈九官塘的懷想〉，載《甕中樹》，頁158`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.1998739,lng:114.0253395}},{type:"地景書寫",publication:"果洲群島——葉輝〈東海獨秀岸峯〉(1989年)",description:`「果洲羣島孤懸東海，處港境東陲，十三年前曾在南果洲登岸，匆匆一遊，對東果洲則好像沒有甚麼印象。那天機緣巧合，隨船出發，船繞東果洲一圈，也不過是十分鐘不到的航程，然而，這個在一比八萬三千的地圖上，僅有一粒白米般大小、略呈狹長形狀的荒島，在短短幾分鐘的航程中，却敎我領悟了『橫看成嶺側成峯』的道理。」

——摘錄自葉輝〈東海獨秀岸峯〉，載甕中樹，頁171`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2618354,lng:114.3526904}},{type:"地景書寫",publication:"破邊洲——葉輝〈遙看破邊洲〉(1989年)",description:`「那本來是糧船灣洲東端的一個半島，在遠古的造地運動期間，鬼斧神功地給砍破出一小島，小島和半島之間的兩道崖壁彷彿是一條銀線，可以窺見海天交接的一線空濛；然後，我們在大壩上前行，半島緩緩的後移，那兩道崖壁構成的銀線却漸漸擴大，在眼前展開一條通向茫茫烟水的天涯路了。我們甚至聽見水道急波冲擊的聲音，彷彿是生命的吶喊，破邊洲，被刀斧砍破開來的一個小島，在那裏寂寞了千萬年，也吶喊了千萬年。」

——摘錄自葉輝〈遙看破邊洲〉(1989年)，載《甕中樹》，頁177`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3576859,lng:114.3791032}},{type:"地景書寫",publication:"皇后大道東——歌曲〈皇后大道東〉（1991年)",description:`「皇后大道西又皇后大道東
皇后大道東轉皇后大道中
皇后大道東上為何無皇宫
皇后大道中人民如潮湧

這個正義朋友面善又友善
因此批準馬匹一周跑兩天
百姓也自然要鬥快過終點
若做大國公民只須身有錢

知己一聲拜拜遠去這都市
要靠偉大同志搞搞新意思
冷暖氣候同樣影響這都市
但是換季可能靠特異人士

空即是色色即是空
空即是色色即是空」

——摘錄自歌曲〈皇后大道東〉（詞：林夕）`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2745315,lng:114.1729268}},{type:"地景書寫",publication:"青衣(2)——林志成〈青衣夕照〉(2014年)",description:`「階級登上小小的山崗，那裡有避雨亭供遊人歇息，橫越藍巴勒海峽的汀九大橋就在腳下。從避雨亭外望，葵涌、荃灣、汀九一帶的景色盡收眼底。輕風吹拂，不禁泛起絲絲的感慨。每天接觸的景物，很少有用心去體會，更不要說欣賞了。平日埋首工作，鮮有郊遊舒展心身的機會。蔚藍廣潤的天空，幾片閑雲在飄盪，遠處車水馬龍的車輛，在藍天碧海的自然景色中，都變得模糊、渺小、世俗了。偶有老鷹在空中盤旋，或寫意地遨翔，更感此刻的可貴。」

——摘錄自林志成〈青衣夕照〉，載《香港作家 (1998)》 第四期，頁33`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3474872,lng:114.1034966}},{type:"地景書寫",publication:"西貢大浪西灣(2)——馬若〈水靜河飛大浪西灣〉(2004年)",description:`「很奇怪，抵達大浪西灣時雖有浪聲，但更凸顯四周異常寧靜，待浪聲沉寂那一刻，連帶山也靜、天也靜、海也靜、水也靜。加上水清沙白上下一色，走著望著，望著走著，四顧忽然茫然，竟不知河流怎麼在眼前消失，彷彿無端飛去不知所終，定神細看才覺河流人海並與遠天連接，雲水相融而造成河飛的一種若是若不是的感覺。假若你想領會一下水靜河飛是怎的，不妨到香港最美麗的海灣西貢大浪西灣去，在這裡若你找一條船出海徜徉，你亦會感受到杜甫詩中：春水船如天上坐般不著邊際的逍遙。去！去大浪西灣看水靜河飛。去！明天就去，否則那兒建了別墅、鋪了私家路就去不到了！就看不到水靜河飛了」

——摘錄自馬若〈水靜河飛大浪西灣〉，載《香港作家 (1998)》 第四期，頁33`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3974933,lng:114.3706435}},{type:"地景書寫",publication:"咖啡灣——楊明〈陪你漫步咖啡灣〉(2017年)",description:`「年前臺灣有一支電視廣告曾虜獲許多觀眾的心，廣告中在外地當兵的年輕男孩好不容易盼得休假，趕到女友所在的城市，只能停留幾個小時就得再趕回營區，偏偏女友正在加班，失望的他站在女友公司樓下，突然女友出現在眼前，亮爾一笑，將手裡的咖啡遞給他，說:再忙也要陪你喝咖啡。這句話溫暖了許多人，咖啡灣，這裡是香港靜好的海灣，自在追求夢想不倉促，古老的民族說，人的腳步太急，靈魂便會跟不上。咖啡灣，不疾不徐，正適合說一句:再忙，也要陪你漫步咖啡灣。」

——摘錄自楊明〈陪你漫步咖啡灣〉，載《香港作家》 二零一七年一月號，頁10`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3754573,lng:113.9863946}},{type:"地景書寫",publication:"石澳(1)——王璞〈在香港看海〉(1997年)",description:`「我的朋友從內地到香港休假旅遊一個月，他有錢又有閑，再加上有興致，他天天去看海，深水灣淺水灣的海，赤柱的海，西貢的海，香港仔的海，青山公路上的路，青馬大橋上的海……他津津樂道於石澳海灘清晨時分的水浴，南丫島度假屋的夜半聽海濤，坪洲島挑燈吃海鮮，清水灣的海瀑燒烤……他說：『香港的海眞是千姿百態，我看了這麼多天，竟然沒有重復的海景。』
在他離開香港的前一天，一位住在夏萍灣一帶村屋的朋友邀我們去作客。他們夫婦開車沿石澳道把我們載到一處僻靜的海灣，這裏停泊着他們的私家快艇。我們換乘上這條快艇，朝着對岸隔海相望的一座單獨立在那裏的白色別墅開去。海水是碧綠的，天空是蔚藍的，一如旅遊雜誌上的美麗圖片。在那白色的小屋前三名菲傭帶着四條狗迎接我們。屋子有兩層，主人領我們走上二樓，推開陽台門，便有一個闊大的露台伸向大海，頓時，我想起了普希金致大海的詩句：『大海！你達自由的元素！……』」

——摘錄自王璞〈在香港看海〉，載《香港作家報》 擴版號第24期（總第107期），第9版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2333269,lng:114.243666}},{type:"地景書寫",publication:"西貢大浪西灣——方禮年〈西貢〉(1986年)",description:`「有一年秋天，專程去補拍一輯幻燈片，却在西灣意外的看到滾滾巨浪，翻騰上下，滾過一片碎石，直向黃沙撲去。那一天的風並不特别猛烈；或許大浪灣的名字是這樣得來的吧。之後就聽到一則很傷感的消息，有人在大浪西灣給波浪捲走了。其實西灣與鹹田灣之間的坡路，沿崖下望，每次都可以看到捲起千地雪的。大浪灣沒騙過人。」

——摘錄自方禮年〈西貢〉，載《香港文學》 第22期，頁99`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3974735,lng:114.3711822}},{type:"地景書寫",publication:"嶂上——聰〈嶂上〉(1971年)",description:`「我曾到過嶂上過中秋，在學校附近的空地露營。在高地賞月，似乎月份外明，晩上村中父老到來與我們共聚一下，閒話桑麻，眞疑身不在香港；懷疑這樣的山區竟然是繁華熱鬧香港的一部份。第二天早上把背囊等重物放在營地，身輕輕的跑上一五七五英尺高的石屋山上，在那裏向南看嶂上又是另外一種風貌。向北望吐露海峽和船灣淡水湖，意境亦很是飄逸。
我又曾在盛暑登嶂上，然後走到地勢低於嶂上而又離嶂上不很遠的猴塘浸淡水，其樂眞『不足爲外人道』。」

——摘錄自聰〈嶂上〉，載《中國學生周報》 第1009期，第11版`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4287509,lng:114.3099514}},{type:"地景書寫",publication:"維多利亞港——黃傲雲〈維多利亞海港〉(1986年)",description:`「一千多年以來，維多利亞港就是香港的靈魂。在漢代，海港東北的觀塘附近，便滿佈鹽田，鹽的出產便帶來財富，所以今日的李鄭屋村內才會發掘出一個古墓。在五代，海港往北遠望的大埔，便是採珠之地，珍珠的珍貴亦是香港的珍貴。
在唐代，與東南亞的交通都經過這裏，到了宋代，今日的尖沙咀就是運香出口的香垛頭，原來香港一帶，已遍植香樹了，而宋朝最後一個皇帝，亦在今日的九龍城，與入侵的異族作最後的民族戰爭。
而我們這個民族，是永遠低不下頭的，不少抬起頭來的同胞，就在可以耕種的荒土上耕種，耕種有成後，便在錦田、上水等地廣設書院。發揚我們的文化。淸代的遷界，並不遷去了他們的生命力，等到遷回原界後，更强的生命又再開始。
而一八四二年後的香港，又是另一個更富的生命的開始。到了今日，維多利亞港四周的高樓大厦就築成了一道鐵壁銅牆，鐵壁銅牆上面射出的烟囱就冒出生生不息的呼吸，銅牆鐵壁中間探出的燈色就閃出源源不絕的光芒。
這就是維多利亞港生命的呼吸、生命的光芒，從一千多年前開始，直至現在，奔向永恒，就像海港兩旁盛開的洋紫荊，生生不息、源源不絕地，吐出生命的永恒。」

——黃傲雲〈維多利亞海港〉，載《洋紫荊之歌》，頁15-16`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2893172,lng:114.173195}},{type:"地景書寫",publication:"旭龢道——黃傲雲〈洋紫荆的啟示〉(1986年)",description:`「隆冬的某個淸晨，氣溫驟降至攝氏八度，整個半山區都好像凝固起來，連樹a的一聲鳥啼，都好像冰塊震顫的破裂。但在旭和道口，我卻發現一棵洋紫荆樹，葉的澄碧，與花的淡紅，從冬的冷酷，透出春的生機。
我忍不住摘下一枝花莖，跑回家去，把它放在溫室的一個瓷瓶內。隆冬尙在，所以我要延長洋紫荆的澄碧與淡紅。
但當第二個淸晨，我卻發現瓷瓶內，已開的花抬不起頭來，未開的蕾探不出頭來，春的生機，是摧殘了。
我再跑出街外，依舊看見葉的澄碧，與花的淡紅，雖然週遭是滿樹秃枝，滿街黃葉，滿天蒼白。
我終於悟到洋紫荆的生命並不在溫室，洋紫荆的燦爛只呈現於冬的冷酷。霜露消散，風雨敗退，新的生命便開始！」

——摘錄自黃傲雲〈洋紫荆的啟示〉，載《洋紫荆之歌》，頁18`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2811591,lng:114.140651}},{type:"地景書寫",publication:"牛池灣文娛中心——阿濃〈社區文娛中心〉(1989年)",description:`「第一次到九龍牛池灣文娛中心去看話劇，發現交通很方便。地近彩虹地鐵站，又是好幾路巴士的總站和中途站。
這個文娛中心是市政局第一座落成的社區藝術中心，可作爲鄰近地區居民欣賞藝術的集中點，他們不用路遠迢迢的跑到港島的大會堂或藝術中心和演藝學院去。這裏也提供了理想的場地，包括劇院、演講室和展覽廳，給各社區文化團體和藝術新秀舉辦活動。
劇院的設備可稱完備，音響、燈光和全場座位的欣賞角度都令人滿意。只是座椅略嫌狹窄，體胖和腿長的人都坐得不舒服。我看兩個小時的話劇《蝦碌戲班》，三幕之間有兩次休息，但考慮到除去洗手間之外，並沒有足夠寬闊的空間供閒談、走動，便繼續留在椅上，因此全劇看完之後，頗覺坐得辛苦——類似飛機上的經濟客位。」

——摘錄自阿濃〈社區文娛中心〉，載《心有所見》，頁99`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3345745,lng:114.2088179}},{type:"地景書寫",publication:"紅磡渡輪碼頭——阿濃〈責書薫的警示〉(1989年)",description:`「先是在九龍紅磡渡輪碼頭和香港北角渡輪碼頭看到五元一份和十元一份的香蕉，我也時有光顧，如今這種整份賣的做法越來越多人仿效，兼及於其他賣蔬菜或水果的小販了。爲甚麼這種整份賣的做法受歡迎呢？我曾經以顧客的身分想過。
首先是價錢不貴，拿香蕉來說，五塊錢可以買到六至七條，比正式水果攤上便宜。
其次是沒有斤量不足的顧慮。許多人都有在街邊買東西上當的經驗，買兩斤提子回家一秤只有一斤。這種論堆的賣法，你可以選擇任何一堆，看準才買。
第三是交易簡單，顧客不用揀，小販不用秤，不用計算，找錢方便，不是五塊便是十塊錢的生意。因此即使在小輪泊岸後一羣人同時幫襯，也不會有等候的情況出現。而這類小販總是『獨沽一味』，更使生意簡化。」

——摘錄自阿濃〈責書薫的警示〉，載《心有所見》，頁148`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.30112,lng:114.1902}},{type:"地景書寫",publication:"獅子山(4)——穆時英〈英帝國的前哨：香港〉(1938年)",description:`「一九三五年冬天，香港的報紙在最觸目的地位詳細地記錄着九龍半島的獅子山的虎患。這消息是由香港警察局正式發給各報館的，而且連續登載了一星期。起先只是發現虎爪的痕跡，後來農家的猪在半晚上被吃掉了，樵人被咬傷了，最後連週末旅行者也失蹤在獅子山的森林裏邊了。做慣順民的，胆小的香港人，嚇得再也不敢到這一帶的風景區去野餐。香港政府派了許多警察去防守，禁止任何人接近這危險區域；可是英國陸軍部派來的工程師却每天一早便跑了去，到晚上才油汚滿面，精疲力盡地走下山來。山上還住着幾個工人。過了兩個月，老虎的傳說漸漸消隱了，誰也不知道這故事是眞的還是揑造的，然而有一件事却是眞確的，山上已經縱橫地舖滿了不准通行的軍用公路，山巔也圍了電網。據附近的居民說，工人們每天晚上都在往山上搬運十六寸口徑的要塞砲。」

——摘錄自穆時英〈英帝國的前哨：香港〉，載盧瑋鑾編：《香港的憂鬱——文人筆下的香港(1925-1941)》，頁92-93`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3589791,lng:114.190523}},{type:"地景書寫",publication:"深土埗——胡春冰〈深水埗之戀〉(1941年)",description:`「香港於我，是一個奇異的地方，我，對於香港，更是一個陌生者。而她，却是一個香港的姑娘：爲了這，我覺得和她之間，有不可逾越的鴻溝；但她，却因而越發要接近我。」

——摘錄自胡春冰〈深水埗之戀〉，載盧瑋鑾編：《香港的憂鬱——文人筆下的香港(1925-1941)》，頁213`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3285899,lng:114.1602846}},{type:"地景書寫",publication:"堅尼地城——柳存仁〈我從上海回來了 （續）〉(1940年)",description:`「晚間蔭普留飯，同坐並有恩輝諸人，遂暢談離滬詳情，及此間出版界的狀况。飯後，蔭普星嫂，我和蓉，及輝兄同乘『堅尼地城』電車去熱鬧市街一遊。原來這裏的電車一共只有兩三條路線，除了，筲箕灣到上環街市的一路是頭等一角，三等五分一外，餘都是頭等六分，三等三分，不論遠近。公共汽車也大體相像，不過路線和價目不同，最普通的是頭等一角，二等五分。公共汽車無樓座（聽說不久也要學上海行駛起雙層汽車來了），電車全有兩層，頭等由前面出入，直上樓梯。這裏的馬路交通，以汽車的多寡論之，誠不及上海的什一。但是，開車人的大膽（勇敢？），車輛駛行速率的迅快，却又使上海的車夫不能望其項背。就以『巴士』及電車而論，停站的時間極短，上下車非趕着跑不行，而車身又並不關門，乘客自由上落，很少節制。我來香港的第一個印象，不禁竊爲一般近視眼同志危惴。」

——摘錄自柳存仁〈我從上海回來了 （續）〉，載盧瑋鑾編：《香港的憂鬱——文人筆下的香港(1925-1941)》，頁201`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2822235,lng:114.1292619}},{type:"地景書寫",publication:"維多利亞公園(6)——小思〈大學精神〉(2011年)",description:`「一九七一年他參加維園七七保釣大示威前夕，『新亞校務一位姓聶的職員來找我，大意説，喂，雷競璇，你們明天去示威，這樣正義的事情我們不會反對，但不能公開支持，校方叫我明天帶備金錢，逗留在維園旁邊的柏寧酒店，如果你們被捕，派人來找我，我去保釋你們吧！』我又記得一九六二年崇基書院學生，利用鐵路沿線之便，拯救了許多大逃亡潮中的逃亡者，替他們化裝成香港人樣子，用各種方法帶他們岀市區，安全抵壘。據知當時容啟東院長也受了港英政治部查詢和壓力，他卻頂住了，完全沒讓學生行動受阻。
有教育理想的大學高層，在種種壓力下，仍然堅持培育青年獨立自由民主精神為主要任務，雖然走些曲線道路，我們還要肯定他們的貢獻。也許，當時的年輕人不容易冷靜理解高層的立場苦處，但事過境遷，就自然明白那時候他們如何保持大學精神。」

——摘錄自小思〈大學精神〉，載《縴夫的腳步》，頁20-21`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2818562,lng:114.1871916}},{type:"地景書寫",publication:"香港太空館(1)——小思〈為誰風露立中宵〉(2011年)",description:`「［廖慶齊老師］説今天對太空的熱情不亞於初中生，唉！老師真不知道如今的初中生根本無法觀天，更無觀天熱情。想當年，我去學習，最初也非懷着了解星空的念頭，而是為了文學。唸唐詩宋詞，發現文人筆下，天空另一種迷人境界。初讀杜甫《旅夜書懷》：『星垂平野闊，月湧大江流』，香港城市人就聯想不到星如何可垂，月怎樣湧？讀楊凝《夜泊渭津》：『遠處星垂岸，中流月滿船』，感覺美得很，但總以為虛擬之景罷了。還有『人生不相見，動如參與商』的蒼涼哲理，『氣沖斗牛』的描繪表示什麼？通通有隔極之感。在沒有光害的地方，仰望夜空，才恍然大悟。通過天文望遠鏡首次觀察月球表面，或忽然流星一閃，或認出最容易認的獵戶座，都心靈觸動。
廖老師為香港創設第一座太空館，遇上的困難，恐怕非一般人能想像。萬般困苦，沒文字記載，他也埋藏心底沒説。如果不是他愛得深切，願意抵受一切壓力，香港太空館不易設備周全。坐在太空館天象廳，我首次體認人的渺小，在浩瀚太空，我們還有何傲氣？只爭朝夕，未免可笑。
廖老師，謝謝您當年啟悟。遙祝珍攝。」

——摘錄自小思〈為誰風露立中宵〉，載載《縴夫的腳步》，頁56-57`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2942868,lng:114.172023}},{type:"地景書寫",publication:"麻雀嶺——小思〈憶行山前輩〉(2009年)",description:`「每次我們都由李君毅先生和一群熱心服務行友帶領，走遍山嶺石澗。李先生步履如風，總是最早到達高點。等我氣喘如牛走到他身邊，他就講好多新鮮當地歷史、故事，做人道理、教訓，説個不停。記憶最深是他有一次這樣説：『我和母親在太陽撫摩下，欣賞自然風景，很幸福。』我第一次聽到『撫摩』如此用法。而眾多旅程中，印象難忘是走麻雀嶺、登嶂上那兩程。」

——摘錄自小思〈憶行山前輩〉，載《縴夫的腳步》，頁84-85`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5353625,lng:114.2036894}},{type:"地景書寫",publication:"華富邨(3)——小思〈地標之旅〉(2007年)",description:`「每座建築物都有自己的故事，匆匆過客，大概也沒辦法一下子接受。車過中環鬧市，建築師説，我們像在峽谷中走過。我從未坐在開蓬車上在皇后大道中抬頭看天，夾縫中露出小條帶藍天，珍貴得很。
由貝沙灣轉上華富邨，建築師強調了兩地的建築個性、地價樓價、居民身份，然後問：看了這片風景，你們有什麼感覺？除了一位外來作家繼續追問貝沙灣賣多少錢一呎，什麼人有資格入住華富邨外，沒有人回答他的問題。恐怕只有我這個老香港，才明白其問題的用意。」

——摘錄自小思〈地標之旅〉，載《縴夫的腳步》，頁108-109`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2523503,lng:114.1382297}},{type:"地景書寫",publication:"中英街——小思〈微妙中英街〉(2011年)",description:`「沒去過回歸前的中英街，沒法想像兩種不同意識形態如何共存。在一九九九年五月一日開館的『中英街歷史博物館』中，強調了當年喪權辱國的經過，紀錄了一八九九年勘界簽約立界碑的事情。館內歷史記載很官方，是『深圳市黨員教育基地』，是『香港國民教育中心國情教育基地』，當然如此。我翻開留言冊，讀到無署名的參觀者寫下嵌字三句話：『中華百年魂，英烈千秋誌，街分兩邊事』，大概他一時想不岀第四句，跛了腳，不妨為他加一句：『史注一筆芳』。」

——摘錄自小思〈微妙中英街〉，《縴夫的腳步》，頁182`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5458477,lng:114.2249041}},{type:"地景書寫",publication:"石水渠街(1)——小思〈灣仔舊貌〉(2006年)",description:`「同一個地區，不同年代有不同樣貌，鑄就人們不同記憶。
同是灣仔，年齡各異的街坊，腦海中留下的痕跡，大有分別。
三四十年代出生的灣仔街坊，心中口中，都沒有『藍屋』的印記。我在石水渠街灣仔醫局出生，青少年代在那裏來回走動，那時只見顏色灰白的唐樓，變成藍屋，恐怕已是八十年代末的事了。」

——摘錄自小思〈灣仔舊貌〉，載《縴夫的腳步》，頁222`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2742915,lng:114.1739344}},{type:"地景書寫",publication:"必列者士街(2)——黃淑嫻〈宋金倩在樓梯街〉(1997年)",description:`「從必列者士街回家，環保袋內除了粉葛和鲫魚外，還有豬骨、蜜棗、陳皮、蕃茄、馬鈴薯、紅蘿蔔、青蘿蔔、白菜和半打雞蛋。沿路宋金倩看到很多衣衫檻褸的老人閒坐在路旁，有些架起雨傘在吃飯，有些簡簡單單躺在帆布床上，他們對面前正在興建的新大廈視若無睹，整條街仿佛就是他們的老家。她走到這裡，有擅闖私家重地的感覺。他們很沉默，宋金倩分不清楚他們是開心還是不開心。看著他們，她更想趕快回家煮湯，好像煮湯可以解決生老病死的問題。」

——摘錄自黃淑嫻〈宋金倩在樓梯街〉，載《中環人》，頁100`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2835571,lng:114.1502081}},{type:"地景書寫",publication:"車公廟——小思〈增值的遊蕩〉(2009年)",description:`「熟人如遇見我獨個兒遊蕩，在街頭莫名其妙地駐足，也不曉得我在觀看什麼，會看得那麼出神。這是我逛街的習慣。
近來天氣實在好，碧澄天空，好日當頭，最宜遊蕩。
沿車公廟道走，走進一九九四年重建的車公廟。廟堂規模比舊時大了，很規矩的樣子，不像民間一般所見。平日仍有善信進香，頭髮染黃的青年，正扯直嗓子為老人家代禱，與從前聽過的祝辭腔調不一樣，新一代廟祝，讓我開了眼界。
我要到香港文化博物館去，以往總由沙田新城市廣場那邊走，今回沿城門河邊；倒見另一番風景。白鷺在河岸間飛翔，一派悠然。偶棲息禿樹梢，又似寒枝獨守，我倚在無名小橋欄，看橋下流水，竟有游魚，渾忘鬧市在旁。」

——摘錄自小思〈增值的遊蕩〉，載《縴夫的腳步》，頁260`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.373419,lng:114.182831}},{type:"地景書寫",publication:"西貢社區中心——馬俐〈西貢〉(2008年)",description:`「西貢社區中心是一座白色平房。通往社區中心有兩條路。一條是在西貢警署下車，過橋，經過一個花圃，穿過西貢警署就可以看一塊平地。左邊有綠色鐵皮屋，圍有殘舊的木柵欄，上面爬滿紫色牽牛花和蔓藤。旁邊一棵巨大的洋紫荊，濃密的枝葉散下來，像一把大傘。在驕陽似火的夏天，只要走到那裸樹下就會感到沁人心脾的涼爽。繼續往前是一條鋪有碎石的小道。小道左方可以望見廢棄的耕地，上面長滿綠油油的野草·起風時，青草和泥土的氣息充滿空氣。現在，可以遠遠看見的是社區門口那棵高大的木棉樹。另一條路，是從299巴士總站下車，經過一排白千層樹，然後過馬路沿著一排硬枝黃蟬走一百米左轉再走一百米就可以看見在兩棵鳳凰木下那座社區中心白房子的背面。社區的左邊門口那稞木棉樹，很高，站在樹底下仰頭要看到樹頂你會覺得有點累。」

——摘錄自馬俐〈西貢〉，載《香港文學》 2008 年5 月號總第281 期，頁54`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3843113,lng:114.2738067}},{type:"地景書寫",publication:"榕樹澳——蔡益懷〈西貢郊遊記〉(2003年)",description:`「下到山腳便是榕樹澳一個背山面海、綠樹環抱的寧靜村落，建築是清一色的新淨村屋，獨立院落，村頭幾棵粗大的榕樹蔭庇着這一方水土，溪澗由村頭流過長年不息，村前路旁散亂地停泊着一輛輛私家車……真是一個殷實、富足、遠離凡囂的世外家園。我和吳君都是喜歡這種怡然鄉居生活的人，對這村落的環境不禁油然嘖嘆慨言如若不用在市區搵食，在這􏧘置上一個蝸居過上簡單樸素的生活，該是何等的享受。看那位在門前台階上的老婦，氣定神閒，一派安然自在神態。我想時光在她的手上，會流淌得很慢很慢。住在鬧市的人，每天搭車趕路，像老鼠賽跑，幾時能夠像這老婦一樣坐在自家的門前，細味樹蔭之下散淡的悠閒？」

——蔡益懷〈西貢郊遊記〉，載《文學世紀》第三卷第四期總第25 期，頁39`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.427904,lng:114.293303}},{type:"地景書寫",publication:"麗池夜總會舊址(3)——黃康顯《香港的最後探戈》(1997年)",description:`「說起麗池，就算連到小孩子，亦精神一爽，因為在北角的小上海內，這是一個最有來頭，亦最具派頭的地方，雖然後來聽老上海說，它仍然欠缺了上海和平飯店的彈簧舞池，百樂門舞廳的百媚千嬌，但那一個樂隊，那一種裝置，仍是香港有史以來，最第一流的。
後來又聽老香港說，麗池風光，遠勝過二三十年前的塘西風月，這裏有第一流的佳麗，第一流的富商，亦是第一流的享受，第一流的消費，坐在裏面，你會想起以前的上海，忘記今日的調景嶺、木屋區。上海聞人李裁法曾在這裏舉辦過選美會。今天的老婆婆，大概還記得這些盛事，雖然以前的俏佳人，到了今天，亦大概會變成老婆婆，摺起的皺紋，翻不出以前的光滑。」

——摘錄自黃康顯《香港的最後探戈》，頁19`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2898025,lng:114.209851}},{type:"地景書寫",publication:"李鄭屋邨——黃康顯《香港的最後探戈》(1997年)",description:`「一九五六年，有一個太長的夏天，太長的夏天使很多香港人煩悶，亦使李鄭屋邨煩躁。李文勇告訴我，李鄭屋邨空地聚集的人越來越多越密。
十月的涼風，似乎仍未吹醒李鄭屋邨人群的頭腦。但不久他們的頭腦終於被一些每年慣例的事情佔據了，那就是一年一度，在十月十日的掛旗。
掛旗使人群想起家鄉的過去，過去的家鄉，是缺乏這種熱心的，但如今在家鄉以外，倒使人想起家鄉以內的一切，就讓一支旗，把家鄉以內以外的一切，都掛起來吧，在這個，甚麼也掛不上去的香港。
不意在十月十日的那天，已經掛上去的，竟然給一些人扯下來了。於是連到一些莫不相干的人，亦聚集起來了，有人莫名其妙地喊出一聲，亦有人莫之所然地揮出一拳，於是許多人便打作一團，兩團，無數團。」

——摘錄自黃康顯《香港的最後探戈》，頁44`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3392712,lng:114.1594043}},{type:"地景書寫",publication:"沙頭角(3)——葉靈鳳《葉靈鳳日記》(1967年)",description:`「1967年7月9日
昨日從上午起，沙頭角村民因遊行與警察發生衝突。我方民兵武裝過界增援，發生槍戰，打死警察五人，打傷十餘人。港英出動駐軍，形勢劇變，邊境其他各處也有武裝響應行動。
今日全日港九各地已發生多次襲擊警察行動。看來『武鬥』已經展開，港英不低頭只好走頭。
全市多處出現象徵吊死港英的紙人和白皮豬。
羅湖英警因深圳民兵上橋頭示威，嚇得避走。關閘因此通宵未關閉，可笑又可憐。
天氣酷熱，九十多度。目前已每隔一日供水四小時，據傳再過數日就要升級為每隔四日始供水一次。」

——摘錄自葉靈鳳《葉靈鳳日記》(上冊)，頁409`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5315716,lng:114.2040739}},{type:"地景書寫",publication:"沙頭角(4)——黃康顯《香港的最後探戈》(1997年)",description:`「七月八日沙頭角邊境的衝突，把暴動提升至一個高峰，而港府的忍耐，與港人的忍受，已到了一個極限，以前港人對港府是反感，如今卻開始對港府有同情——亦是對自己的同情，他們退到香港，已退無可退，不能連最後站立的地方亦被摧毀，於是便聚集起來，站在港府的後面——是大多數的中國人，為了英國人，去對付少數的中國人。」

——摘錄自黃康顯《香港的最後探戈》，頁75`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5315617,lng:114.2044763}},{type:"地景書寫",publication:"維多利亞公園——黃康顯《香港的最後探戈》(1997年)",description:`「是同一種心情，在同一個地點，是九月十二日的維園，在維園中央的草坪，我們帶着洋燭，穿起素色的衣服，不一會，洋燭點起來了，我們才知道，維園以內，原來燃點着不知多少萬枝洋燭。洋燭燃燒起來了，火氣烘烘，人氣融融，只有在這裏，我們才不會聽到槍聲隆隆，血光紅紅。我們珍惜這裏，我們不想離開這裏，因為這裏是香港。
洋燭燃燒起來了，我們的心亦在燃燒，燃燒着未曾失去的希望，未曾熄去的期望，我們用歌聲來表達，表態，彼此感應、感染，我們可以用甚麼的形式，唱甚麼的歌，因為這是香港，我們的香港，我們要保護我們的香港。」

——摘錄自黃康顯《香港的最後探戈》，頁169`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2817804,lng:114.1905709}},{type:"地景書寫",publication:"維多利亞公園(8)——陳君葆《陳君葆日記》(1965年)",description:`「九月九日星期四
《文匯報》十七週年紀念，黃祖芬寫的題詞最佳：
『十七妙年華，海外紅霞，工人學子不離她，宣傳誇祖國，報導譽邦家。』
今日是中秋節前夜，中總在維多利亞公園放阈產煙花，真足以使那些『有眼而不是不識，卻是裝作不識泰山』的人們一開眼界不少。
寫給雲湘的信，結尾有這麼一段：
『一九六二年，印度仰承美帝的意旨，對中國進行侵略戰爭，而現在巴基斯坦抵受不住印度統治階級的蠻橫不講理，也已『揭竿而起，奮身而鬥』抵抗印度的侵略了。仗義執言，大聲疾呼的國家，以支持巴基斯坦的，東有印尼，西有伊朗、土耳其，北有中國，這是對要求民族解放獨立，反對帝國主義的戰爭，非常有利的形勢。試想：從東起，印尼、越南、緬甸、中國、巴基斯坦、伊朗、敘利亞、阿聯、阿爾及利亞，出地中海橫過大西洋而到西半球的古巴，這不是隱隱然形成一條新的人民陣線嶋?這是我們應該拭目以觀的新發展，應該認識的新形勢。現代的修正主義者，赫魯曉夫之流，對此應瞠目結舌，為之氣短了。』」

——摘錄自陳君葆《陳君葆日記》(卷五)，頁437-438`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2818599,lng:114.186692}},{type:"地景書寫",publication:"渡輪上(1)——傑克《曉渡春雲》(1958年)",description:`「匆匆到了春天──
四時的流轉非常奇妙，夏氣蒸發，秋氣肅殺，冬氣凝結，惟獨春氣，含有萬物昭蘇的新意。人到了春天，感受淑氣，精神容易興奮，也容易倦怠；容易生情思，也容易起傷感。羅廷近來的心情都寄託在書本子裏，減輕了許多中年哀樂之感，惟獨今天早上卻有些異樣。
羅廷幾乎每天清晨都是第一個到辦公室，如果舉行考勤他準獲首獎。這並不是工作興味引誘他早到，卻為了貪戀輪渡上清曉的海風，看書時記性特別強。可是昨夜攪到宵深纔睡，又因春眠不覺曉，今晨趕上輪渡將近八點半鐘了。這個時間，到寫字樓原很適合，他卻嫌船上人擠，雖然搭客們多數是紳士淑女之流，言語舉動，盡是斯斯文文，沒人侵擾他的寧靜，然而前後左右多了幾個人，心理上總覺得不大自然。他向不抽煙，聞到強烈的雪茄煙味，和濃郁的脂粉香氣，更分散他的注意力。
羅廷翻開書本子，為了思想不能集中，不久便攤放在膝蓋上。東風拂在臉上軟洋洋的，清早的太陽晒進船艙裏來，光線柔和地帶些懶意。羅廷不覺打了兩個呵欠，俯視悠悠東逝的綠波，暗自遣責道：『我怎的這般怠惰，跟春天同樣的懶，把時間白白曠廢了！』
輪渡上儘管人擠，卻各人幹各人的：有的看報紙雜誌；有的低聲談笑；有的獨坐沈思；女人們也有拿着一面小鏡子塗脣膏，理鬈髮的；也有帶着編織物，借工作做消遣的；總之，每人在做着自己愛做的事。
羅廷平時的習慣，是看書，正和那些人一樣，眼睛懶得看周遭的事物。然而今兒卻不然，他的思緒被春風吹散了，他的心醉醺醺的，像有一股春氣溫暖地沸騰着，他自己也感覺奇怪，人像是年青了，心頭輕飄飄的，似乎活潑起來，東張西望的，向前後左右不知想找尋些什麼？
他眼前突感眩耀，接觸到坐在他斜對面的一個美妙得天女般的女孩子！
說她像天女般美妙，只可說是羅廷的直覺，那女孩子在他眼中，是無可言喻的美！他自小到大，從沒見過這樣的美人。他活了幾十年。走過的地方幾萬里，碰到的人物百千萬人，但沒有一個像他今天所見的那樣美。
『美極了！』他心中暗自驚嘆。
『人間世竟會生出這樣一個人來，天地有了光輝！』他以宗教徒虔誠的心情，盛讚天主，便他看見這人，也算不曾枉生人世了。
第一眼！
英國人有句老話：『跌落情網就在第一眼。』中國人說『一見鍾情。』是同一意思。愛悅或憎惡，第一眼便有決定性。」

──摘錄自傑克《曉渡春雲》（自由出版社），頁13-15`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3006634,lng:114.2030914}},{type:"地景書寫",publication:"黃天石《紅心集：對門女兒》（1923）",description:`「他挽著我的手笑道。妹妹我怎忍騷擾你咧。我恐怕你睡出病來。狠想你出去吸受些空氣。你未嫁以前。不是朝朝壓線。做了許多嫁衣裳嗎。今天可檢出幾套來。試試身材。我拗不過。便依著他的話兒。開了衣箱。把新製的衣服翻了一會。他檢了一套電光紗的衣裳。授給我道。這套你還沒著過。且穿上一試。說罷。按鈴喚侍者道。快去呌一輛摩托車來。我們今天想遍遊香港呢。侍者應著自去。他便促我理妝。一壁調脂弄粉。瞎忙了一陣。
汽車風馳電掣的兜著圈子。我們倆駢肩而坐。近著涼風。說說笑笑。那裡還知道世界上有悲哀的事。沿途的樓臺花木。像排列著歡迎我們。海心的浪花。山腳的樹影。都似跳舞著表示他們的快意。迎面來的摩托車雖也許有闊人坐著。可是深信他們精神上。總沒有我倆的美滿。我詳細審察。有的一輛車中。坐著一羣妓女。陪著嫖客頑耍的。有的三四箇侍妾。擁著一箇腸肥腦滿的富翁乘涼的。他們雖也強作歡笑。但是心中的感想怎樣。也可想而知了。
摩托車繞遍香港。直到傍晚時候。纔停在維德利亞大餐館門前。食客多數是西人。見了我們一對新夫婦。都狠注意。露出一種羨慕的顏色。草草用完晚餐。便乘著來時那輛車。直至皇家大戲院。看了一齣戲。那劇本是易卜生所編的。呌做（新婚的一對兒）。觸景生情。不覺相對而笑。到半夜時分。曲終人散。我們也乘車回去。」

——摘錄自黃天石《紅心集：對門女兒》（大光報），頁59-61。`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2802945,lng:114.1598202}},{type:"地景書寫",publication:"崑南〈夜之夜〉(1957年)",description:`「走出車站，下斜坡，墟景沒有這樣荒涼了。幾間飯店和那一塊熟食檔的聚集地，都亮著，坐著不少談笑自若的人。巴士站站著四五個人，他們趕不及火車，從香港來的遊客。從他們的倦容給看出了這裡白天的熱鬧。」

——摘錄自崑南〈夜之夜〉，載《文藝新潮》 第一卷．第八期，頁9`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4479246,lng:114.1649123}},{type:"地景書寫",publication:"皇都戲院舊址——劉以鬯《香港居》(1960年)",description:`「這天晚上，因為想給莉莉好好吃一餐的飯，特地乘坐巴士到北角的『溫莎餐室』去吃俄國菜。莉莉特別嗜吃『鮑許』，所以吃得很飽。飯後，我們本想到『皇都』去看一塲電影的，但是因為是週末的關係，買不到票。沒有辦法，祇好到『人人百貨公司』去兜了一圈，莉莉看中一個日本公仔，定價相當貴，妻要我忍痛買一隻。」

——摘錄自劉以鬯《香港居》，頁36`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2903926,lng:114.1954428}},{type:"地景書寫",publication:"禮芳街——張婉雯〈禮芳街的月光〉(2017年)",description:`「嘉芙蓮的家在葵芳禮芳街。葵芳是我常到的地方，卻不包括禮芳街這一帶；我常到的，是那個華麗寬敞的新都會廣場，由新都會天橋穿過葵涌廣場，再由葵涌廣場的天橋回到街上，那恍如一個由仙界眨落凡塵的過程。在新都會，仙女們穿着高級時裝，高跟鞋的鞋跟彷彿無須着地；到了葵廣，仙女變了倒模美人，雖說沾了人工氣，到底還是年輕的，甚麼都願意試試的。然而一眨眼仙女就老了，經過一道天橋，便老成了禮芳街上的中年婦人，手裏挽着的不是星光而是塑膠背心袋，裏頭裝着食慾、物慾與歲月。那是一個住宅舊區，一幢唐樓外圍着四條小路，五金店的舖名被高高懸起的膠水桶、椰殼毛掃帚和廁所泵遮蔽；雲吞麵檔的蒸氣與門口不斷進出的食客擋着去路，沒有人帶路的話是不會曉得怎樣走的。於是我約她在天橋口前的卡拉OK招牌下等。晚上七時，她挽着一袋袋的蔬菜、凍肉，從遠處笑容可掬地向着我快步走來。」

——摘錄自張婉雯〈禮芳街的月光〉，載《微塵記》，頁100`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3595634,lng:114.1269933}},{type:"地景書寫",publication:"春園街(1)——陶然〈走在灣仔街巷〉(2013年)",description:`「當港督定居中環，英國人又紛紛搬到山頂居住，春園街便也逐漸淪落風塵，從清幽的英式高尚住宅區，變為偷歡的場所。與塘西的秦樓楚館不同，這裡不乏洋妓，嫖客也主要是外國水手、商人，為了便於他們分辨，房子門口都寫上特大的門牌號碼，故有『大冧巴』（Big Number）之稱。到了上世紀三十年代，港府禁娼，這種張揚的『紅燈區』才式微。二戰後，灣仔的風月場所北移至駱克道海旁一帶，以洋客生意為主，著名的有『蘇絲黃』，因好萊塢電影《蘇絲黃的世界》而揚名全球。如今在黃昏時分走過駱克道，即使是寒冬，也可見到一列酒吧前有三五個衣着頗暴露的妙齡女郎，坐在櫈子上，媚眼斜射，有一句沒一句地聊天。當有西方人路過，她們更是起身搭訕，拋出一兩句英語招徠。『癲馬夜總會』下，果然癲馬還在闖蕩江湖，但『波斯貓』已經走完它的路，遁入香港有形或無形的記憶空間了。」

——摘錄自陶然〈走在灣仔街巷〉，載《香港文學》 2013年6月號總第342期，頁55`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2752489,lng:114.1725731}},{type:"地景書寫",publication:"船街(2)——陶然〈走在灣仔街巷〉(2013年)",description:`「連接莊士敦道和堅尼地道的橫街『船街』，其中皇后大道東至堅尼地道一段為石板樓梯，一直留存至今，為香港其中一條保存完好的戰前樓梯街。建於1910年代的這條街，接近半山區，兩旁的房屋均為舊式設計。但後來新樓盤陸續建成，新建築物樓上是住宅，臨街地舖多是酒吧或食肆。那晚我們走過，但見酒吧門前站着三五成群的西方男女，一面喝着啤酒，一面談笑風生。走到接近『南固台』處，月光下見到1918年建成的糅合中西建築風格的大宅，外牆以紅色磚牆砌成，傳說當年是非分明日軍用來囚禁慰安婦的地方，曾經鬧鬼的傳言，讓這晚的夜色倍加陰森。坊眾稱它為『鬼屋』。」

——摘錄自陶然〈走在灣仔街巷〉，載《香港文學》 2013年6月號總第342期，頁56`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2760375,lng:114.1708248}},{type:"地景書寫",publication:"軒尼詩道(2)——陶然〈走在灣仔街巷〉(2013年)",description:`「如果說我多提及的，大多是橫街窄巷的話，那末，軒尼詩道和灣仔道便是灣仔的『大道』了。當年，我從軒尼詩道調到它後面一街之隔的灣仔道工作，只須從後巷穿過去便是。但在那裡的二樓辦公，並不久長，半年便走向他方。那晚走過天樂里，忽然感慨萬千，我明明看見那街角小公園，天有微雨，幾個外傭模樣的女人躲在簷篷下聊手機，那笑聲在潮濕的夜空中盪漾。轉過頭來，我又看見那棵老樹，不言不語，在雨中輕輕搖擺，夜色漸漸傾斜下去了。」

——摘錄自陶然〈走在灣仔街巷〉，載《香港文學》 2013年6月號總第342期，頁56`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2778065,lng:114.1743778}},{type:"地景書寫",publication:"天星碼頭(2)——秦嶺雲《紅繡鞋》",description:`「天星碼頭遙長的甬道，正湧出一大批最後的客人。模糊的夜色和沉重的燈光，反映着每一個客人酒闌人散後的迷惘與眷戀。
天星渡海小輪每天的尾班，似乎是專爲這些要享受最後一刻歡娛的男男女女而它做了普渡的慈航，也做了臨歧的野渡；茫茫烟水，正不祇載不了許多愁，也載不了許多愛和恨。何况，現在正是春天，而又是一個千金一刻的春宵呢！夜遊人，都匆匆走過那度長廊，他們和她們也許是再要追尋他們的新幻想，或者再要完成他們最後的好夢的。」

——摘錄自秦嶺雲《紅繡鞋》，頁2`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2938993,lng:114.1688812}},{type:"地景書寫",publication:"分域碼頭舊址——《黑裙》(1970年)",description:`「『啋！讀書有什麽用？我帶你到灣仔水兵碼頭去看看，就有留學生做帶街的！識幾個字就夠用的了。急什麽？這個世界，只要有錢就行！有錢天下去得，無錢寸步難行！你跟我走沒有錯，我吃的鹽，多過你吃的飯，怕什麽，……哦，老黃，你的『老黃伯』，哈，這個人沒有用，混一輩子，老老實實，只能乞食，別理他，瞞着他，你跟我闖江湖，走天下。你放心啦，過一個時候，我再給你另找工作，別當洗衣店的小伙記了，入息少，時間長，又沒什麽指望，……』」

——摘錄自阮朗《黑裙》，頁10`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2806642,lng:114.1681187}},{type:"地景書寫",publication:"波斯富街——阮朗《黑裙》(1970年)",description:`「阿祥感到血液奔波，恨不能馬上擁抱凱塞琳，訴說五天的分別，已經有五十年那麽長，訴說她只要和他在一起，無論什麽事，卽使是眞的販毒，他也甘願！
他一再鼓起勇氣，繼續尋找。憑他的估計，她在銅鑼灣的可能大些，於是以波斯富街爲中心，環繞着這個地區團團打轉。直到有個晚上，當末場電影散場的時候，他在人叢中一眼認出了她，瘋狂地奔了過去。
她還是那套『迷你裝』，在燈光掩映下，更使阿祥着迷，有如童話中一個牧羊童遇上了仙子，她可是十分驚訝，對身邊的一對中年男女和一個年靑人低聲說：
『你先回去吧！』然後劈頭就向阿祥：『爲什麽你這樣難看？』
阿祥當着人們沒法開口，悽然說，『我，我找得你好苦！』」

——摘錄自阮朗《黑裙》，頁111`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2796537,lng:114.1828051}},{type:"地景書寫",publication:"九龍城(1)——黃佩佳《香港新界風土名勝大全》(1935-36年)",description:`「香港維多利亞城一帶，為商務之重心，士商輻轅，人物文明，寸金尺土，大有長安不易居之感。年來雖受商務不振之影響，減低屋租，以利居者，仍有空樓日多之概。蓋屋租雖跌，猶在數十圓之間者，終不若九龍城之低廉也。故由香港遷居於此者漸多，新樓遂應此環境而增建。市區於以擴大，建設之速，勢將及於村野。若西瓦窰頭、龍舟井、學佬村、沙埔、猪屎寮、沙地園等處，難免為展拓所及矣。在此縱橫數英方里間，一旦拓為市區，其繁榮之象，可以想見。且在形勢、風景、交通、名勝、古蹟數點而論，該處具備。北有九龍嶺以為屏，南有九龍灣而作港，水流潔洞，村野如錦，數百年之古嘖，將及百年之舊城，鶴嶺留題，龍津話舊，指點遺蹟。偶言興廢，足使人生無限低徊嚮往之情，此今日之九龍城所以惹人留戀也。」

——摘錄自黃佩佳《香港新界風土名勝大全》，頁211-212`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3294789,lng:114.1909762}},{type:"地景書寫",publication:"銅鑼灣豪華戲院舊址——鍾玲玲〈記一九七二年大水〉(1981年)",description:`「來到豪華戲院的門前雨水經已退至我的小腿，但我環繞豪華戲院一周我仍然是看不見金鳳。我試圖尋找她曾經來過的痕跡，我檢查戲院的牆壁看看有沒有她遺留下來的字句，我向遠處張望幻想着她久候離去失望的情境，我獨個兒向着前方大聲地叫：『金鳳，金鳳。』聲音一直飄至老遠，但金鳳並沒有回答我。我親續站在戲院的門前等待着她突然的出現，許久以後我開始相信金鳳是不會來的了，我對自己說金鳳一定是有着更重要的事情要做。
我獨自橫過維多利亞公園沿着渣華道步行至北角碼頭，回到T的住處雨水經已完全退卻而T依舊賴在床上就像我不曾離開過一樣。我一邊在沐浴一邊在想着金回必然是有着更重要的事情要做。而我之所以念念不忘一九七二年的一次大水，我相信這完全是由於金鳳的緣故。」

——摘錄自鍾玲玲〈記一九七二年大水〉，載《素葉文學》 第4期，頁5`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2791924,lng:114.1865722}},{type:"地景書寫",publication:"維多利亞公園(9)——辛其氏〈我們到維園去〉(1992年)",description:`「維多利亞公園在銅鑼灣，再過一點就到炮台山了，離立梅鵝頸橋的家頂近，走路不過十來分鐘，跟到跑馬地的腳程差不多。公園裏有鞦韆、搖板、滑梯、旋轉輪，有整齊的灌木叢，有纏繞着鐵絲網的喇叭花，有色彩斑斕不知名的花圃，有足球場、溜冰場，將來還會有網球場和游泳池，沿着行人步道種植幼小的樹苗，在一定的距離安置休憩用的綠漆木條椅。靠近公園中心，有一個茶水亭，裏面擠滿歇息和下棋的人，茶水亭不遠處，當時還只是一塊青草地，可在立梅上中學的時候，便開鑿成了水池，用柴油發動的精緻電動小船，成天發出刺耳的摩托聲，在水池上高速滑行，偶爾碰到池邊，或者與別人的船相撞，隆然一響翻船了，圍觀的人哄動起來，劃破公園一角的寧靜。從茶水亭的位置幅射出去，有東南西北四個門口，東門正挨着興發街，那時候人烟稀少，都是些工場和廠廈，裏面有生產餅乾麵包的，出爐時間一到，老遠都聞到那股香氣，立梅曾經跟她一個家境寒傖的兒時遊伴到那裏買碎餅乾和麵包邊，一毛錢一大袋，她就幫同伴扛着抬着走回鵝頸橋去。南門面向高士威道，出口處有一個維多利亞女皇的銅鑄坐像，如果擦乾淨身上的綠［鏽］，可以清楚看到女皇的衣裙縐摺，以至首飾權杖上頭的花紋圖案，她面向高士威道神情肅穆，彷彿要坐它個日久天長，多年後立梅在銅鑼灣一座玻璃幕牆大廈的寫字間，遠遠看見久違的女皇坐像，她不禁想到一九九七之後，她是否還有自己的坐處。公園的北門朝着維園道，面對遊艇會和避風塘，因為朝北，風比較大，山坡上少人走動。有一年香港節大放烟花，立梅、文錦、麗霞姐、王耀楣、吳天恩、尹芷珊就圍坐在這山坡草地上，朝中環方向舉頭瞭望，在漆黑的夜空爆出五彩重叠的煙花，燦若星辰，連月亮也給比了下去。每爆響一枚，隨之而來的是山頭羣眾的歡呼，澎湃的熱情頃刻間驅走十二月的寒風，那是立梅第一次看烟花，印象難忘，後來她偶然到維園的山坡地去，依稀還聽到哄動的人聲，彷彿看見文錦站在樹底下向她招手呢。山坡背風處是綠油油的葵樹叢，夏天夜裏，這樹叢都靠着一對對男女，月色下個個笑面如花，對於踢來的皮球和孩童的騷擾視若無睹，都沉醉到他們那極為隱密的世界裏去，立梅姐姐和她後來的姐夫，就是用當年最不花費的方法，坐到公園午夜關門，才不捨地走路回家。西門出口連接糖街，沿途店舖相連，一片繁華景像，電車路就在不遠，附近的大丸百貨公司後來開幕，立梅家早早吃過晚飯，跟父親到這間號稱全港第一大百貨公司開眼界，人可多哪，都擠在門前，要分批放人，父親怕孩子吃不消，結果公司沒逛成，都轉到公園去。鵝頸橋在公園的西南頭，糖街是立梅去公園的必經之路，糖街口跨過怡和街，有一所怡和酒家，立梅姐姐在那兒擺的婚宴，許多年後，當立梅帶着小姨甥到公園，也是站在怡和酒家門前的報販處，看到報章上『毛澤東逝世』幾個黑色大字標題，爭買號外的人把攤販圍住，她也買一份就站在路邊讀起來。她還記得當天的心情很好，因為那是她的結婚周年紀念日，相約了丈夫晚上在一個西餐館見面。」

——摘錄自辛其氏〈我們到維園去〉，《素葉文學》 第40期（復刊15號），頁18-19`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2817807,lng:114.1910033}},{type:"地景書寫",publication:"大丸百貨舊址——鷗外鷗〈彈丸大大——咏香港地圖〉(1988年)",description:`「是彈丸之地
那個彈丸
貫着一把摺扇的扇頭的軸
丸形的一點點

展開那把摺着的扇扇形之陣
九龍、元朗、沙田、西貢（大浪灣）等等
一一納入其範圍之內
比彈丸的丸之大大年書
大了多少倍？
大了多少倍？大了多少倍？多少倍？多少倍？

有家日本人開設的百貨公司
叫做〈大丸〉
這彈丸之丸之大大
正好也含有此意

百年往事雖往矣
不可小覷
當日的彈丸之大
大丸大大」

——鷗外鷗〈彈丸大大——咏香港地圖〉，載《香港文學》 第39期，頁52`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2804901,lng:114.1857318}},{type:"地景書寫",publication:"香港仔(4)——力匡〈香港仔的那一夜〉(1987年)",description:`「還不到晚上十點鐘，然而大街已經非常冷落了。七號巴士總站沒有幾個等車的人。住在中環或灣仔的『遊客』自然都回家了。在大街上行走，在餐室喝咖啡，在『士多鋪_聊天的，都是香港仔人。香港仔人，這就是：漁民，店夥，船塢的看守人，教堂的管理員，這就是小黃，和那在中學敎國文住在圖書館的年輕敎員，這就是我。」

——摘錄自《香港文學》 第27期，頁47`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2482551,lng:114.1560517}},{type:"地景書寫",publication:"汝州街——力匡〈三個香港〉(1986年)",description:`「第一個香港，時間是在一九三七年，盧溝橋燃起了漫天烽火。七月裡的一個上午，有一架日本的偵察機由高空掠過白雲機場。廣州的市民慌了，說日本人要大舉轟炸廣州了。住在機場、火車站、碼頭和别的戰略重點附近的人，都認爲最好遷居爲良。但是，到哪裡去好呢？香港，是大多數人心目中的答案。香港只在廣九鐵路的另一端，朝發午至，不用護照，無需領事館簽證。還有，廣州人總有些親戚住在香港或九龍的，必要時，也可通有無，以解燃眉之急。
到香港『避難』的人，也包括我的一家，我家不富，住不起九龍塘或跑馬地。父親在深水埗汝州街和一個姓韓的朋友合租了一層樓。客廳公用，厨房亦然。韓家出三分之二的屋租，分得頭房和尾房。我家只廿三分之一，就只有一房了。」

——摘錄自力匡〈三個香港〉，載《香港文學》 第23期，頁72`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3283262,lng:114.1635344}},{type:"地景書寫",publication:"筲箕灣(1)——力匡〈電車叮鈴叮鈴地響〉(1991年)",description:`「離港二十七年後重回，住灣仔的酒店，在『食街』附近，走了一兩個街口，就到軒尼詩道了，就見到那兩行並列的光亮的鐵軌了。叮鈴，叮鈴，綠色方匣子川行如梭。我上了車，發現如今的電車已廢除了樓下樓上的分别，我花了六毫子，下中環。
如果沒有了電車，香港就不像香港了，電車很慢，但很穩，很安全，一條漫長的軌道，由堅尼地城，橫貫港島，直達筲箕灣。我在香港時，港人有兩句口頭禪：『英雄被困筲箕灣，不知何日到中環。』筲箕灣是平民區，中環，是東方之珠的城市心臟。電車，把這兩地結合爲一，沒有筲箕灣的市民大衆，絕不會有樓高七十的中環。」

——摘錄自力匡〈電車叮鈴叮鈴地響〉，《香港文學》 第76期，頁85`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2787345,lng:114.2289416}},{type:"地景書寫",publication:"淺水灣(7)——力匡〈淺水灣的冬天〉(1988年)",description:`「當我重回
已三十年
淺水灣風冷
也無船
許多尊塑像
為佛祖、彌勒、觀音、普賢
我如見、如聞
以前種種
鏡花水月
以後種種
生住異滅
（今天好冷
天文台報告攝氏九度呢）」

——摘錄自力匡〈淺水灣的冬天〉，載《香港文學》 第45期，頁38`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2381824,lng:114.1993633}},{type:"地景書寫",publication:"西洋菜南街(1)——陶然〈今夜，菜街歌舞沉寂〉(2018年)",description:`「還是繼續往前，見到一個檔口，裡三層外三層，擠滿觀眾，擠上前去，原來那主唱的，號稱『小龍女』，似乎是菜街『紅人』，她一出場，觀眾雷動歡呼。不由好奇，從人頭攢動的空隙中望去，以為可以一睹金庸筆下小龍女飄飄欲仙脫俗絕世的形象，不過美化的影子立刻墮回到凡間；惟那歌聲不俗，引得無數圍觀民眾紛紛解囊，二十元、五十元，甚至偶有一百元的紙幣，不斷湧出，投進緊隨其後的隨從帽子裡。當她高歌一曲《上海灘》完畢的時後，我走到鄰近攤子，有一群人群合唱《帝女花》，有點悲涼；接着唱《皇后大道東》，有點搞笑，帶着一點苦澀味道。再過去，呀，這男中音，帶着磁性，唱的是《卡薩布蘭卡》，『噢，卡薩布蘭卡的親吻依舊，但沒有了你的嘆息，那吻已不成吻……』我的腦海立時浮現出那黑白電影的鏡頭，以至男主角目送女主角及其丈夫所乘的飛機遠去的畫面。
那鏡頭漸漸隱去，眼下西洋菜南街的夜已經滑向十點，市政局外判工開始做事，行人專用區撤銷，這條街恢復車輛行駛。平民夜總會消失，西洋菜南街又恢復成十八年之前，車來車往，看上去好像甚麼都沒有發生過一樣。」

——摘錄自陶然〈今夜，菜街歌舞沉寂〉，載《今夜，菜街歌舞沉寂》，頁9`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3197503,lng:114.1699056}},{type:"地景書寫",publication:"西洋菜南街(2)——沈思〈斯基與四仔〉(2000年)",description:`「西洋菜街通街VCD舖，賣的都是正版，價錢還可以。通常在買完書之後，就沿嘉樂商場方向走，沿途走進那間舖頭—，所播的都是轟耳的歌曲，夾雜在瘋狂的人群出出入入，碰碰撞撞。
走進去時先看到牆上鋪滿卡拉OK碟，然後是日本電影、日劇、荷李活電影、港產片等。
我摘下《午夜凶鈴》，然後再走進店舖更深入的地方，我找到了奇甚麼夫斯基的《十誡》，看看盒面，原來他叫奇斯洛夫斯基，是法國的導演。那又如何？難道要背出他的生平，才能欣賞他的電影？想看，我走到收銀處，掏了錢，付了錢，就走了。
背包裏的書、貞子、斯基和四仔都跟上我的步伐互相碰撞。啪啪作響。要是讓人知道我的背包同時容納了斯基與四仔，一定會怪我褻瀆藝術。」

——摘錄自沈思〈斯基與四仔〉，載《素葉文學》 第67期，頁59`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3195469,lng:114.1699419}},{type:"地景書寫",publication:"富麗華酒店舊址——蔡炎培〈海市〉(2009年)",description:`「這裏是富麗華酒店 
時裝展準午間十三點 
再過去是拆卸不久的郵政大廈
曼陀羅
我們最好隨街親嘴 
書信可太費時失事了 
現代媒介要多方便有多方便 
置地廣場一帶龕式精品店 
久不久被劫一次的飾物 
目下重新鑄造另一種容顏」

——摘錄自蔡炎培〈海市〉，載《水調歌頭》，頁32`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2813301,lng:114.162008}},{type:"地景書寫",publication:"皇后碼頭舊址(2)——蔡炎培〈纜車徑〉(2009年)",description:`邊個話我傻
    這裏分明是大港
    搭巴士向上爬再向左轉
    扯旗山
    午夜搭渡再搭嘩呢嘩陰
    皇后碼頭
    可是玫瑰堂附近
    總有一梯長滑石
    再上一級
許是當年

——蔡炎培〈纜車徑〉，載《水調歌頭》，頁34`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2828761,lng:114.1621792}},{type:"地景書寫",publication:"修頓球場(3)——蔡炎培〈修頓球場的黃昏〉(2009年)",description:`「從東方戲院舊址走過來
沒有誰知道
我是二戰末期倖存者
盟軍炸鐸地
鳥蛋歪歪斜斜一盅兩件地
英京酒家右翼一堵牆
蓋住地痞茶居惠如
紅孩兒上身
風火輪及時踩入太和街

從此不離咳
貝夫人可憐我
每一回覆診，大夫說：
『修頓，快了。』
用時搖匀
葯水一直搖到了九七
現下好了
球場因我揚名
女友約我黃昏後
普渡衆生的波餅是圓的」

————蔡炎培〈修頓球場的黃昏〉，載《水調歌頭》，頁81-82`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2768015,lng:114.1724125}},{type:"地景書寫",publication:"旺角花墟——蔡炎培〈花墟明渠〉(2009年)",description:`「假菩提與細葉榕 
百年老店依次排出了牆樹 
鬚根下的幼年 
滿身玻璃彈子
溜入花墟球場的瞳孔裏
南巴大戰
半壁山河是你 

明渠出口是戰前 
大表哥帶我探親睇馬球 
穿過鐵籬笆
走過一條又一條山徑
林中有屋
四姨母細細鋪排雞蛋花
行過七十
明渠施工完竣
花墟明年會有玫瑰藍 
客家人語找地送」

——蔡炎培〈花墟明渠〉，載《水調歌頭》，頁112-113`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3256588,lng:114.1714326}},{type:"地景書寫",publication:"金紫荊廣場——蔡炎培〈香港書展〉(2009年)",description:`「金紫荊的五星旗
金紫荊的直文地
金紫荊書展鋪成的浮橋
金庸扮蟹倪匡扮蟹
才子們都扮了蟹

歌曰
ABCD
大頭綠衣
捉人唔到吹bb
這星期
第三美人見到了
『海呀！』

其聲雀雀餘音躍躍
我順着扮蟹的出口
望過去
衰過貼地的事情
莫如車了」

——蔡炎培〈香港書展〉，載《水調歌頭》，頁129-130`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.284425,lng:114.1739009}},{type:"地景書寫",publication:'上水——Louise Ho "Off the Train at Sheung Shui" (1977)',description:`The evening, mellowed
By pink skies, cooled
By early summer rain
Sighs and is still,
Dark wet trunks
Hush far flung canopies,
Young leaves lush in vibrant green.
No wonder the Chinese love jade."

--Louise Ho "Off the Train at Sheung Shui", in Incense Tree: Collected Poems of Louise Ho, p.3`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5112008,lng:114.1260991}},{type:"地景書寫",publication:'大埔墟港鐵站(1)——Louise Ho "Babies and Mothers (at Tai Po Train Station)" [2009]',description:`Young women
stare through space
as if counting time
like drops of rain.
Babies 
in their arms
lollop round
burdened breasts
sucking thumbs.
They bawl
as they hit
the ground,
having fallen
through opened knees."

--Louise Ho "Babies and Mothers (at Tai Po Train Station)", in Incense Tree: Collected Poems of Louise Ho, p.7`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4445559,lng:114.1704893}},{type:"地景書寫",publication:"荔園舊址(4)——陶然〈時光老去〉(2017年)",description:`「那時，Z帶我去荔園留連，我記得在遊樂場玩汽槍射擊，他贏得一隻玩具熊。之後我們排隊乘着天車轉動，然後一節一節把我們送上最高處，秋風從四方飄來，居高臨下，俯瞰周圍燈火夜景，初來乍到的感覺，但覺人間仙境，也莫過於此了！當時荔園還有座『宋城』，有身穿宋代將士衣裝的演員駐守，一派古風；還有門前飄着古裝酒旗的酒館，店小二出入招呼；令人聯想起《水滸》的『三碗不過崗』，以及武松打虎的故事了！當然這些都只是表面現像而已，更深層的內涵欠奉，後來宋城便隨着荔園偃旗息鼓了。回想起來，我又懷念那時的情懷，但我已經回不到青春的年代了，荔園如今也已經平地起成群高樓，再也不是當年的遊樂場了。香港地小人多，地產是最好賺錢的行業之一，地產霸權呀！人們絮絮地說。信焉？」

——摘錄自〈時光老去〉，載《旺角歲月》，頁26`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3426184,lng:114.137526}},{type:"地景書寫",publication:'香港中央圖書館——Gillian Bickley "Ambiguous Communication: Crossing the Road to the Library" (2006)',description:`“I stand on the pedestrian bridge, 
crossing over
between Victoria Park and the new library; 
considering the route home.

I look for the bus that I plan to catch,
to see where it stops;
I stand for a minute or two,
a small trolley-bag in my hand,
gazing out over the road and the pavement below.

‘Are you sure you want to go?’
a fellow pedestrian asks, in English;
not his mother tongue.

What did he mean? Did he fear
I might be thinking of suicide?

Or did he simply mean, ‘Don't you know
‘where to go?’, intending to offer help?

Or maybe again (thinking I would take a plane 
and fly away), he was asking me to reconsider, 
and stay?”

-Gillian Bickley "Ambiguous Communication: Crossing the Road to the Library", in China Suite and other Poems, p.26`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2801378,lng:114.1894987}},{type:"地景書寫",publication:'大埔墟港鐵站(2)——Gillian Bickley, "David at Tai Po market KCR station" (2006)',description:`“‘Hello’, we said to each other,
quite intimately, as equals.

‘Where are you going?’ he asked,
looking at my two black trolley bags, 
parked at my seat.

‘Nowhere’, I said. ‘I just always carry many things.’ 
‘Where've you come from?’ he tried again, 
aware of the obvious alternative.

‘Nowhere’, I answered again, ‘from home’.

But he was concerned and fingered 
my partly open zip, pulling it closed.
‘You be careful!
‘Someone may put their hand in
‘and take something out.’

‘Thank you’, I said.

But he was still concerned. He came back.
‘I've heard that, in China,
‘if you're on a bike, people will cut off 
‘your hand for the watch. You be careful!’

‘Thank you for your concern’, I said. ‘I will.’

He smiled with youthful benevolence and went back 
to his menial chores.

His physique, good English, and easy confidence 
with me, a non-Chinese, suggest he has lived in some kindly institution, 
run by altruistic English-speakers.

His intelligence suggests otherwise.

Perhaps a job in MacDonald's is so desirable here, 
that one feigns a modest simplicity, to get it?”

--Gillian Bickley, "David at Tai Po market KCR station", in China Suite and other Poems, p.27-28`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4445361,lng:114.1708877}},{type:"地景書寫",publication:'陰澳——Gillian Bickley, "A Relative Quiet at Yam O" (2007)',description:`Today 
a relative quiet strikes us 
at Yam O.

A single mynah bird 
calls out 
from the top of a lamp-post.

A single careful plane moans unseen 
behind the dreadful smog.

The buttercup trees glow 
wordlessly, 
with what we may suppose 
is welcome.

And the flame trees 
hold their fire.

The constant quiet lull of 
Disney musak 
transforms 
the dirty air 
to a screen 
for mystery."

--Gillian Bickley, "A Relative Quiet at Yam O", in China Suite and other Poems, p.36`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3263077,lng:114.0206087}},{type:"地景書寫",publication:'歌和老街公園——Gillian Bickley, "Cornwall Road Garden" (2007)',description:`“The profusion of fertility here 
is naked for who dares to see:— 
thrusting stamens and pistils of hibiscus, 
florets of bougainvillea, flowers of the palm.

And we can only suppose 
the obscene innocence 
of the children's playground toys 
a deliberate attempt 
to claim 
the sexuality is not here.

But two white butterflies 
dance above each other in turns; 
birds sing to attract 
and call to summon their mates;

and even I sit creating a kind of life 
in this unforgettable garden;
not so sidelined after all.”

--excerpt from Gillian Bickley, "Cornwall Road Garden", in China Suite and other Poems, p.48-49`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3387845,lng:114.1737015}},{type:"地景書寫",publication:'博愛醫院——Gillian Bickleym, "Five skulls at the window" (2007)',description:`“‘Pak Oi Hospital Tuen Mun 
Nursing Home’, 
I read from the bus, 
passing by. 

With a catch of the heart, 
I see five skulls, 
bleached white by the sun.
 
Five mops at the window."

--Gillian Bickleym, "Five skulls at the window", in China Suite and other Poems, p.61`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4453984,lng:114.0414368}},{type:"地景書寫",publication:'南丫島(3)——Edmund Blunden "On Lamma Island" (1962)',description:`“This quiet place is changing as all do.
Builders have new ideas, shoppers too.
Even pigsties somehow pass from old to new.

And still these fields with brightening seedlings lined
By kindly handiwork, of old designed,
Remain the same, wherethrough the footpaths wind

As yet, so I recall them for a brief
Passage of years, the same on my relief
Memory-map; and still we have our chief,

Not on a charger, but afoot ahead,
Greeting the well-pleased toilers round us spread,
And then at the foot of the hill, by the shrabs and the shed,

Delving once more, disclosing what has been, -
From us to them three thousand years between!
Simple survivors, what a world they mean.

A factory, he decides, here nigh the sea
Three thousand years ago sold pottery;
He hands drab shards in proof to you and me

Beneath the old calm sky. We cannot hold
In hands untrembling these skilled works of old
He takes them gently, richly, like red gold.

And change is working meanwhile round us, friends,
And him our merry wizard; here ascends
Ere long some such great factory . . . or, here ends?”

--Edmund Blunden "On Lamma Island", in City Voices: Hong Kong Writing in English, 1945 to the Present, p.241-242`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.1991536,lng:114.1373853}},{type:"地景書寫",publication:'跑馬地墳場——Dean Barrett "At the Cemetery Above Happy Valley Racetrack" (1977)',description:`We're neighbors now, who would have guessed?
I wonder how we would have got on had we met, had we known.

No matter. We'll get on fine now, won't we?
Although - my earth is a darker brown; might
I even say more fine?
Ah, well, it isn't mine
to say.
It's theirs.
And, before long, no one will notice the difference.

I say, they race horses down below. Although, I think
it's fixed. Would you care to wager? It passes the time.

Oh. You're not a betting man. A pity. But still,
I think it's trae. It must be fixed. Else why would
mine be a darker brown? And might I even say more fine?

But, no matter, we're neighbors now.”

--Dean Barrett "At the Cemetery Above Happy Valley Racetrack", in City Voices: Hong Kong Writing in English, 1945 to the Present, p.243`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2711182,lng:114.1795057}},{type:"地景書寫",publication:'落馬洲——Joyce Booth "Lok Ma Chau" (1977)',description:`“He looks the same today,
No older than the old man
He then was
No more fine wrinkles
Could trace themselves upon a face
Already lined to capacity
His shreds of clothing
Hang from angular shoulders
As they did years ago,
Faded as ever into nondescript rags

But now it's all a sham,
A monumental deception;
Tourism had discovered him,
Made him star attraction
Titled ‘Rural Peasant’.

Big squat coaches,
Air conditioned,
Straddling narrow roads,
Biting deep tracks on muddy lanes,
Whining, coughing noisily,
Polluting still, country air
With diesel fumes
At Lok Ma Chau they come to rest,
Tourists pouring from their bellies -
Ants from a mobile ant hill;
Past the stalls of carved curios,
Coca Cola, ice cream, chewing gum,
Straw hats, satin skull caps
With flat, scarlet buttons”

--excerpt from Joyce Booth "Lok Ma Chau", in City Voices: Hong Kong Writing in English, 1945 to the Present, p.245`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.5098835,lng:114.0815055}},{type:"地景書寫",publication:"維多利亞公園(10)——麥華嵩〈維園幽靈〉(2006年)",description:`「『就像我忘記了，當年避風塘給填平成維園時，那個被運泥車撞倒死亡的工人的樣子。我只記得，他不會說廣東話，死時有很多同樣不會說廣東話的工人擁聚過來，一起看著他在血泊中漸漸失去知覺，之後還商議籌錢給他買個靈位；但說不了幾句，工頭就走過來，粗聲呼喝他們繼績工作。那死去的人必然是從北方逃難來的；對，我記得了，他跟一個同鄉朋友在戰亂中跑過荒野，游過惡水，終於到達香港；朋友起先和他一起在填海區做苦工，後來發了跡，賺了很多很多錢，揮霍了十多年，再後來卻又破了產，終日穿著又髒又破的衣服，在維園流浪和怪叫—他卻一早就被運泥車撞死了。他的父母在哪裡？鄉間有沒有妻兒？可惜，他在死前一刻腦海裡浮現了什麼，我都忘記了“但他死處的泥土一定吸收了他的記憶，我也許回到維園時可以看看，說不定那裡已長了一棵茂盛、參天的大樹，一棵受保護的老樹⋯⋯』」

——摘錄自麥華嵩〈維園幽靈〉，載《城市文藝》 第十期（第一卷　第十期），頁48`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2813141,lng:114.1870202}},{type:"地景書寫",publication:"西洋菜南街——陳志華〈當時的月亮〉(2009年)",description:`「『那麼書店街呢？』你問。於是我掏出數碼相機，給你看書店街的照片。書店街的正名是西洋菜南街，儘管現在已不種植西洋菜。你把屏幕裡頭顯現的圖像放大再放大，終於在排山倒海的大廈外牆廣告牌之間，找到了書店的招牌。都是小書店，而且都在樓上，我們習慣稱之為『二樓書店』，雖然因為租金漲得實在厲害，它們已經愈搬愈高，有的開在三、四樓，有的搬到七、八樓。在大型連鎖書店難以找到的書，説不定都能在這些小書店裡發現。而且還有折扣。十年前，邱禮濤拍了—部名叫《愛情夢幻號》的電影，就把四個主要角色起名為學津、青文、樂文、紅葉（諧音：洪葉），其實是當時四家主要小書店的名字。後來有人拍了一齣《半支煙》，裡面的黑幫大家姐竟然也是開小書店的。我不肯定現實世界裡是否真有這樣的老闆娘，卻可以肯定這些書店都是臥虎藏龍之地，坐在收銀機後面的，很可能是個詩人、作家，或者藝術家。」

——摘錄自陳志華〈當時的月亮〉，載《字花》 第十九期，頁10、12`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3199437,lng:114.1698516}},{type:"地景書寫",publication:"維多利亞公園(11)——關麗珊〈炎夏之貓〉(2004年)",description:`「我想說雖然我只做了幾個月貓，但我知道被穿制服的人類捉去的貓，根本無可能逃走，灰灰和幾隻小貓早已死了。然而我知道的，阿虎不可能不知道，我看著他瘦瘦的臉，只好說：『你多點來探望我們吧。』
人類的腳步聲愈來愈多，許多許多人走在街上，嚇得我不敢走回小黑那兒，阿虎隨即說：『跟我到維園吧，我們可以躲在樹上的。』
我和阿虎沿橫街窄巷跑，很快走到公園，我從來沒有見過那麼多人聚在一起，他們都穿白色上衣，但我不敢細看，只管尾隨阿虎走小路，直至來到公園，跟阿虎爬上一棵大樹，有樹枝樹葉掩蓋我的身體，我才安心下來。
這兒的環境很美麗，在草地奔跑的感覺十分美妙，難怪阿虎要搬家。我們看著黑黑的人頭聚在球場，有些人打傘，有些人戴帽，我不知道他們為甚麼要這樣，問阿虎，阿虎不耐煩地說：『都話遊行。我現在很討厭人類，你不要再問我人類的事，人類捉去灰灰和五個孩子，人類兇殘自私，我最憎人。』
我被阿虎的表情嚇得不敢多說，只見阿虎躺在樹枝睡覺，不再理會我，但我好奇那麼多人做甚麼，突然聽到有聲音說：『這城的人就是喜歡遊行。』」

——摘錄自關麗珊〈炎夏之貓〉，載《文學世紀》 第四卷第十期（總43期） , 頁61-62`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2812942,lng:114.1875969}},{type:"地景書寫",publication:"春園街(2)——葉輝〈春園街滄桑〉(2017年)",description:`「其時灣仔一帶尚未填海，余震字編著的《香港海岸線》載有一幅約繪於十九世紀五十年代工筆畫，附有此說明：『春園』當時『位於灣仔海濱，這條沿海路段又稱「海旁東」。左方船隻是顛地洋行的商船，右方是歐式住宅，洋婦拖着寵物輕鬆散步』。
那就是當時外國人在『春園』的生活寫照了，香港夏天悶熱，故此雪廠所生產的雪成為多年來獨霸市場的美國天然冰勁敵，遂引起一場減價戰，〈冰與雪〉一文有此說法：『這時美國天然冰貶價四仙來競z爭，他們更改售每磅三仙來對付，於是美國天然冰的銷路漸狹』；『直到1880年，香港出產的機器冰已足夠供應全港居民的需要，美國的天然冰就停止輸入。』」

——摘錄自葉輝〈春園街滄桑〉，載《香港文學》 總第三百八十七期，頁15`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2754041,lng:114.1726534}},{type:"地景書寫",publication:"舊灣仔警署——陳寶珍〈獨白〉(2014年)",description:`「這一帶是車多人更多，空氣彷彿帶點灰黃。走了十來分鐘已經汗流浹背。那座依然屹立的灰白警署仿如時光隧道的入口處。母女倆於是站着看七歲的我迷了路，向員警求助。然後，遠遠望見警署便說知道怎麽走回家，但員警叔叔和藹而耐心的向我解釋程式，帶我回警署登記，然後送我回家。『這個『細路女』是不是住在這裡？以後不要讓她一個人落街……』磨粉廠擴散着甜得刺鼻的氣味，往中
環方向走，會經過一些門前站着濃妝女子的酒吧，還會不時遇到神高神大兼手臂有紋身的外國水兵；往銅鑼灣方向，過一條小馬路，又會看到一列冒着『偈油』味的車房。幸而小馬路旁有賣噴香熟食的大牌檔。大街對面則是人來人往的渡海小輪碼頭。短短的一段街道偏拼貼了截然不同的風景和人物，真不可思議。縈繞其間的還有各種我喜歡的聲音。沿上學必經的大街，電車沿路撒下清脆的鈐聲，賣晾衫竹的小販將『衣』字拉得很長，後面『裳竹』兩個字卻極為短促。我坐在課室裡跟小學同學一起朗讀古文。『孔子過泰山側，有婦人哭於墓者而哀……孔子曰：『小子識之，苛政猛於虎也！』曾子寢疾，病……夫天地者，萬物之逆旅……』那時對這些『古人的說話』肯定是一知半解，卻很喜歡聽集體朗誦的聲音。」

——摘錄自陳寶珍〈獨白〉，載《香港文學》 2014年1月號總第349期月刊，頁43`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2792059,lng:114.1753468}},{type:"地景書寫",publication:"維多利亞公園(12)——阿濃〈清風街．避風塘．維園〉(2002年)",description:`「『大笪地』很快被稱為『平民夜總會』，除了附近的街坊踢着拖鞋前來消遣，也有從其他地區前來趁熱鬧的市民。除了下雨的日子，從高處望下來，這裏總是星羅棋布的燈，黑壓壓的人。
同樣不知從哪天開始，不許在『大笪地』擺檔了，空地四周有了圍欄，開始了公園的建設，這就是今天的維多利亞公園。有街坊說，政府是想把這塊地在大眾踩『實』之後，賣給地產商起屋。到目前為止，這個猜測並沒有不幸言中。
維多利亞公園裏面新植的樹一天天長大，我也遷離了清風街（後來這條街可怕地建了一條大橋，煙塵和噪音淹沒了清風）。但我仍在園中約會女友，帶兒女玩耍拍照，看中秋提燈，逛年宵市場，又參加各式各樣的群眾集會。
維園在香港歷史上是一處活躍的地方，但我每次經過時，泛起的卻是那些少年時代的回憶。」

——摘錄自阿濃〈清風街．避風塘．維園〉，載《文學世紀》 第二卷第四期總第13期，頁52`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2812902,lng:114.1882377}},{type:"地景書寫",publication:"愉景灣——辛其氏〈來自遠方的躁動〉(1993年)",description:`「這個多月來，中國北方古城發生的事件，樁樁件件牽動著葉萍的情緒，高潔不時打電話來，談論她為支持北京學運而作的遊行聲援的部署，她沒有動員葉萍，但葉萍每次放下話筒，難免思潮起伏，無心工作，如果人生真有試探，為甚麼相同的試探，在相隔這許多年後再次降臨葉萍的身上？高潔出於好意，還是出於嘲弄，她並沒有像一個親密的戰友那樣呼召葉萍，她以為她如今居住在愉景灣一所面向海洋的房子裏，已經夠安樂，偶然推窗看一看眼前風景，便是生活的全部內容。朋友的生活方式，高潔也許並不認同，但她卻非常在意葉萍的感受，她們曾經一同被捕，互相扶持挨過一段艱難的時刻，她了解她，她雖然在多次談話裏，從沒有任何暗示，但她知道葉萍一定會來。」

——摘錄自辛其氏〈來自遠方的躁動〉，載《素葉文學》 第43期（復刊18號），頁12`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2921406,lng:114.0101467}},{type:"地景書寫",publication:"糖街——辛其氏〈糖街上的驚弓小鳥〉(1992年)",description:`「醒亞被困在銅像西邊足球場上，眼面前飛沙走石，喧聲震天，正思量着何去何從，忽聽得一聲叫喊：『醒亞快走，警察打人了。』她連忙遁聲望去，見聶小鳳·任清華正走在前頭，她只得隨着人潮四散奔逃，後面仍然傳來口號聲和斷續的歌聲：『滾滾狂濤，東海之遙，屹立着一羣美麗的小島，釣魚台，英勇地俯視大平洋，捍衞我們富饒的海疆⋯⋯』
醒亞沿着糖街，一口氣跑到豪華戲院附近，她喘定氣站在看熱鬧的人堆裏，呆呆地目送一隊頭戴銅盔、手持警棍盾牌，身繫老虎槍和催淚彈的防暴隊開進園去。天色已經灰暗下來，時間是
一九七一年七月七日晚上七時二十五分，她雙腳軟弱無力，一顆心突突地跳，她想起葉萍，想起胡德，她全身的力量經已耗盡，再無法賈其餘勇到園中一探究竟了。」

——摘錄自辛其氏〈糖街上的驚弓小鳥〉，載《素葉文學》 第37期（復刊12號），頁13`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.280019,lng:114.1870748}},{type:"地景書寫",publication:`皇后像廣場(2)——Jennifer Wong, "Statue's Square"(2006)`,description:`At Statue’s Square on a weekday afternoon
I sat and stared
At an embossed letter I had just received.
It carried the weight of an air ticket to Heathrow,
Seven thousand odd pounds each year,
And a school place at Oxford.

A fountain rose within me.
Could this be, at last, what I wanted,
What everyone else wanted?
My knees weakened at the beautiful visions.
Clouds overhead seemed to pace swifter than usual 
And in all directions."

--Jennifer Wong, "Statue's Square", in "Summer Cicadas", p.10`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2810757,lng:114.159919}},{type:"地景書寫",publication:'巴丙頓道——Jennifer Wong, "Babington Path" (2006)',description:`In that noon-time hour of birdsong
I had stood and waited
On Babington Path.

Few came by to this kind of low-density.
The verdure of the neighbourhood
Threw patterns of sunlight on the ground where I stood.

Occasionally a Filippino maid came by And entered the adjacent building, Carrying bags of groceries and fresh fruits.
I counted two taxis that climbed up the slope On their way to the other side of Robinson Road."

--excerpt from Jennifer Wong, "Babington Path", in Summer Cicadas, p.48`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2828649,lng:114.1413655}},{type:"地景書寫",publication:'皇后碼頭(3)——Jennifer Wong, "Ferrying Across" (2006)',description:`Slowly the ferry docks at Queen’s Pier.
Its staunch green-and-white body floats and sways
From side to side, leaving behind
A gleaming snail-track of foam
On the dark rippling surface.

The sailor heaves and throws the thick rope into mid-air
In the direction of the Pier, yawning.
The sailor at the other end catches it with a long fork.
The thick rope fits perfectly like a lock.
He never misses it.
For the tourist it is a moment for the camera.

Once the ferry stabilises on the waters
They will loosen the suspending chain that holds the gangplank.
For a minute or two more the ferry sways beside the shore.
The waves roll and froth.
The rope makes a tugging movement round the wrought iron stump. Passengers stand together, wait eagerly for the docking to complete.

Black smoke rises continuously from the ferry’s star-studded chimney-head as people walk across the creaking gangplank, then move down the flight of stairs.
There they disperse, and head off to different directions."

--Jennifer Wong, "Ferrying Across", in Summer Cicadas, p.52`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2828659,lng:114.1623367}},{type:"地景書寫",publication:"廟街(7)——羈魂〈廟街榕樹頭〉(1977年)",description:`「黃昏來時帶回的那一片黑 
突然擦亮
在遊人堆擁的腳跟下 
一個沒有霓虹的夜 
便如常醒在 
榕樹頭前叢叢喧鬧之間—— 
馬會診所的陰影外 
有專治雞眼痔瘡頑癬梅毒的醫 
天后觀音廟緊鎖的朱門旁 
有吹擂善觀氣色精推命理的卜 
多層停車場後 
也有兼擅國粵歐西名曲的 
昨日或明日之   星 
市政圖書館的階梯側更有 
長鬚長髮的少年喚賣 
舶來畫報那裸裡袒褐的   相
於是
即度即做的裁縫 
即叫即炒的廚師 
獨戰群雄的棋手   以及
賣武賣藥的江湖客 
把藍領白領唐裝西裝的餘暇 
輕鬆輕鬆成
目迷耳亂着的緊緊張張」

——羈魂〈廟街榕樹頭〉，載《羈魂詩選》，頁29-30`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3065464,lng:114.1700069}},{type:"地景書寫",publication:"旺角街市——羈魂〈旺角街市〉(1977年)",description:`「橫梗行人路那魚檔忽地躍出 
一尾半活的魚行人路橫梗 
已突的圓目茫然盯住 
慌忙側閃一位少婦底未洗凝妝
碰
燈柱下皮剝肉落那牛頭雙角淋淋插向
一籠田雞霍地驚撲 
各各他 各各他 
老嫗可解的鄉音混雜
討價還價與穢語粗言成交響啊 
滿盛屠宰得白淨豬隻的貨車
緩緩駛進
擠擠狹狹舊竹蘿爛菜筐在後移中 
咒咒駡罵
剛下班這男士定定緊提 
兩手不懂烹調的饌菜 
壁立
輪轍以後
濕漉漉依舊濕漉漉的塵地一灘鮮紅 
蕩漾
殷殷豔豔且雜踏 
不需裝裱好一幅
百戲圖」

——摘錄自羈魂〈旺角街市〉，載《羈魂詩選》，頁31-32`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3188,lng:114.16716}},{type:"地景書寫",publication:"蕪湖街——羈魂〈模糊街〉(1978年)",description:`「模模糊糊你我竄闖
竄闖一街暮色
模糊
逼面有蒼茫散碰千車燈影
塞
惶惶寸進很擠很擠道道盲腸 
盲腸以外是工專 
工專以外是殯儀 
館址冷幽
幽成一座見證
故壘西邊
縱海隧橫鐵軌如常吐納 
人道是
幾許當年公瑾 
雄姿英發古戰場，不
股票場
休賦赤壁賦紅磡 
不！還有黃埔還有青洲
疊彩無色 
渡頭餐餘的落日啊
談笑間猝然跌入 
模模糊糊你我竄闖 
一截
模糊街後」

——羈魂〈模糊街〉，載《羈魂詩選》，頁35-36`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3075443,lng:114.1855516}},{type:"地景書寫",publication:"荔枝莊——羈魂〈看山·雨中——荔枝莊之晨〉(1976年)",description:`「滿江的絲雨遍灑如經 
讓孤舟橫渡出長長白白的一緯
交織為群山拱奉着的 
這樣子如來天地 
山仍匍匐
一若神龜截割下來的腿 
半乾的血色在風中瘦成晨色 
是枯待億萬年後誰底叱喝 
    以再復沉潛？ 
浪花便激拍起千古雷同的單調
翻半頭白髮 
閃一額金光
然後徐徐捲入 
風之外雲之外的涯涘之間 
天仍俯首飲着一潭光影 
萬籟原自化於渡頭好一躺的悠然下
便極目水窮 
鳥聲幽幽地調出漫山柔和的綠 
忽地    急雨竟濺來一巖 
浪擲過的歌聲」

——羈魂〈看山·雨中——荔枝莊之晨〉，載《羈魂詩選》，頁21`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4513527,lng:114.3008624}},{type:"地景書寫",publication:"大澳(5)——韓牧〈香港大澳梅菜〉(2014年)",description:`「眼前一亮：
『香港大澳梅菜』 
我自豪    家鄉這一個小漁村 
竟然有土產行銷到美洲來 

主權上香港屬於中國 
但畢竟是個『特區』 
我放心又歡心   大量入貨 
家庭作業    全無包裝 

去年冬天回香港 
特地遠赴大澳    店鋪林立 
賣的是螺豉魚肚蝦乾鹹魚 
只見到『汕頭鹹菜』『揭東冬菜』 
包裝精美的中國製品 
找不到『大澳梅菜』」

——摘錄自韓牧〈香港大澳梅菜〉，載《韓牧詩選》，頁144`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2521191,lng:113.8688046}},{type:"地景書寫",publication:"南丫島(4)——胡燕青〈南丫島〉",description:`「老去的碼頭，那古舊的大木鎖
跳板，條子方柱，小格子閘門
粗粗的纜繩和光滑的銅樁
我們都輕輕翻過了
天空和大海才靜靜地攤開
冬天的陽光是透明金的禮物紙
還未完全拆下，就把我們也包了進去

釣魚大叔的鈎子給軟軟的小浪擁抱着
有些東西湧進鼻孔：咖哩魚蛋、沒有蝦的燒賣
汁液淋漓躺在小盒裏，尖矛的鈍尾向嘴巴翹起
鹹餅乾下麥芽糖漸漸凝固，牙齒用勁
給黏住時，金髮旅人快樂地叫起來
豆腐腦漂白的街道卻忽然消失了
放假的農田胡亂編織着麻衣

自行車都愛睡懶覺，只留下唬人的鈴響
誰家的貓弓弓長腰再躺下
羊齒葉芽喜歡嚼碎每條山路的邊邊兒
路癢得皺起來，折疊成青石小階
指向天空藍得最深的地方」

——胡燕青〈南丫島〉，載《胡燕青詩選》，頁97-98`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.1991536,lng:114.1398292}},{type:"地景書寫",publication:"砵甸咋街——羊城〈孩子，你必須用心去讀這段歷史！—— 為香港九七回歸而寫〉",description:`「當中環高樓大廈潔亮的牆幕
在你舉頭仰望中映照出繁華
你可別迷失
當你途經一條熟識的街道
它的名字叫缽甸乍。知否因他
我們的尊嚴受踐踏國魂遭深創！
孩子，你必須體會這裏面的意義
孩子

你也許知道也許不知道
道光年間的硝煙
穿鼻江寧的風雨
都是蘸滿血淚填寫的一頁！
當年遺留下來這恥辱的辮子
今天必須解結！必須解結！
孩子，這一切一切你得緊記
孩子，你必須用心去讀這段歷史！」

——摘錄自羊城〈孩子，你必須用心去讀這段歷史！—— 為香港九七回歸而寫〉，載《羊城詩選》，頁37`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2834478,lng:114.1561467}},{type:"地景書寫",publication:"香港中文大學獅子亭——羊城〈中大校園斷想三帖〉",description:`「把漣漪淺笑給水
把妙曼款擺贈與垂柳綠楊
讓白鷺伴冷雨離去又隨南風歸來
讓花葉的消長簡報日子的閒忙

儘管石栗不再結子，眉竹已老
可你亮麗的風采不減
團團穩坐湖邊如一頭沉默的獅子
靜觀變換的面影、日月的推移

你把豪雄和睿智暗遞給來客
他們回饋你的
除了黑袍的襟懷
還有白紗的情意」

——摘錄自羊城〈中大校園斷想三帖〉，載《羊城詩選》，頁39`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.4160301,lng:114.2093055}},{type:"地景書寫",publication:"青山禪院——盧文敏〈杯渡·渡杯〉",description:`「曾經有同名大師散石灣觀潮
夢想蓮生足下再世渡杯
竟有緣勸止巨魚殺生猶如見佛殺佛
終幻成龍骨供奉山門
誰料遇上葉公好龍難辨真假風雲
一度沉寂成空門
幸有杯渡化身不忍見鐘鼓相撞
白雲蒼狗互咬吠日如吠影
不如將恨火化成燭光
放下心魔口孽換成唸不完的阿彌陀佛
敢問那株斜楊敗柳看不破富貴浮雲
那一朵邪花妖樹捲入佛產戰雲
只盼你貪他嗔我癡都隨霧霾而散
為避免佛心空照汗青
且先留住那片與虹橋雙渡的青雲
再留住青山、青松與皈依杯渡的靈渡
一起會合金文泰回頭是岸
那管千秋後是非功過的三岸四岸
只求一起浮沉三世千生的渡杯不沉、杯渡不朽……
而駐驛屯門早變都會龍門
淘盡千古風流與紅樓的巨浪
始終淘不盡飛馳十五個世紀的杯渡與渡杯
而接連渡杯車廂的西鐵更會杯渡還陽
由杯渡路一路渡人極樂終極向西」

——摘錄自盧文敏〈杯渡·渡杯〉，載《盧文敏詩選》，頁4-5`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3916679,lng:113.9594268}},{type:"地景書寫",publication:"太平山(8)——盧文敏〈太平山神話——我回來了，但我仍看不懂！〉",description:`「太平山，我回來了！
向曾輕道再見的「爬山蠄蟝」揮手
向曾留下現代離騷的「香爐龍脈」揮手
而我不是過去的蠄蟝
更不是明日的珠龍
只是一個愛無聲無息跨海流浪
尋覓異鄉、他鄉、我鄉的歸人
推開一山皇冠的夜景
吿別維多利亞女皇無奈的苦笑」

——摘錄自盧文敏〈太平山神話——我回來了，但我仍看不懂！〉，載《盧文敏詩選》，頁7`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2743011,lng:114.1430498}},{type:"地景書寫",publication:"大圍——盧文敏〈大圍城〉",description:`「北角碼頭前見豆不見林
滿地人形咖啡豆、可可豆與七色豆
早晩會幻變成假日相思豆
想家想孩想伴想未來靠背的那顆朝陽樹
東南亞尋夢、追夢、圓夢的儀式很另類
一如採集金粉的蜂群圈地為城
有人夢見大圍名城有脚下西洋
擁抱重建北角新邨他鄉是我鄉的浪漫
且暫借天地為床帳
以林木與柱廊為衣褲
雖讀不懂錢鍾書與劉以鬯的圍城
却築起『獨樂樂不如與眾樂樂』的反獨城」

——摘錄自盧文敏〈大圍城〉，載《盧文敏詩選》，頁11`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3677113,lng:114.1743834}},{type:"地景書寫",publication:"文曲里公園——盧文敏〈文曲詩園〉",description:`「文曲星總愛收藏自己
在閃爍生光的小龜殻內尋夢吟詩
抽起曲水流觴的昨夜星辰
只因拒絕同俗世詩人相認
空留夢幻蘭亭的杯酒詩謎
乃再世李杜吟斷白髯的宿命
而滿池清水不動只有心動
情迷龜外有龜猶如詩外有詩
驚覺抓不住的大帝文昌橡筆會飛
只留下一道與夕陽有約的恆虹
傕喚尚未結蒂永不墜地的秀實
開出開不完的詩花」

——摘錄自盧文敏〈文曲詩園〉，載《盧文敏詩選》，頁19`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3130169,lng:114.2654419}},{type:"地景書寫",publication:"昂船洲——盧文敏〈消失的月光白骨〉",description:`「消失的昂船無洲
早已被高速的填海怪獸鯨吞
更咬碎擦肩而過的深水切渡輪小魚
消失的青春月光太白
留不住西營盤變身蘭桂坊的窮誕與奢夜
以及大角咀金龍廟會的盟約與分手
五十九年前消失的月光太白
通向老街的北河無河界限無界
也再無才子黄霑與大儒錢穆的桂林山水
只有幻覺的奈何橋與陰陽界月光更慘更白」

——摘錄自盧文敏〈消失的月光白骨〉，載《盧文敏詩選》，頁65`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3228725,lng:114.1369126}},{type:"地景書寫",publication:"白沙灣——盧文敏〈白沙灣之慾〉",description:`「渴望日光慾的裸靈
掩着阿當那塊黃葉的凋愁
向閃着金色乳液的海角奔潮
那飢渴的投井之戀——
那赤裸的蛙式之慾——
在深濶無邊的井口索覓海女的乳頭
自上而下，由下而上
自左至右，自右至左
潮水飄盪着太陽樹的投影
黃昏樹的投影
月光樹的投影
雲樹霧樹霞樹星樹的投影
一個浪花是一朵聖安東尼的誘惑
渴想搖落藍色禁園的蜜桃
卻只搖落了自己一顆金色的幻覺
浸透白沙海鹽於掌心虛空而來……
陷溺於大白鲨變身衝浪而去……」

——盧文敏〈白沙灣之慾〉，載《盧文敏詩選》，頁69`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.366785,lng:114.259238}},{type:"地景書寫",publication:"淺水灣(8)——盧文敏〈淺水灣〉(1960、2016)",description:`「不屬企鵝的異極
不屬烏賊的渾流
當最後一個低潮
擱淺在金沙灘
吉訶德先生幻覺內的巨人
頓生起被中國人唾沬浸死的憂愁
而驚夢的魚躍
特別喜歡遲來的大汐

而遲來五十五年的大汐
有心遠離『香港製造』的龍尾人工海嘯
灘頭小觀音也化身慈山巨像呼風喚雨

小銀魚們的泳姿仍美如或人
送走一灣思潮的乾涸
握來一海詩浪的濕度
不如划過海明威『危險的夏天』和一羣流浪的異鄉人
慢慢泅向東方……

——四十九年十一月二十六日《淺水灣》，重寫於一六年」

——盧文敏〈淺水灣〉，載《盧文敏詩選》，頁105`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.238159,lng:114.1999667}},{type:"地景書寫",publication:"尖沙咀鐘樓(3)——溫明〈香港一筆〉",description:`「天星碼頭的鐘樓
説：下班了
沙啞多咳的聲音
令人想起
酒吧內破爛不堪的舞姿
中環溫暖而帶母性的
夜色下，一隻彩蛋」

——摘錄自溫明〈香港一筆〉，載《溫明詩選》，頁54`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2935525,lng:114.1699058}},{type:"地景書寫",publication:"青山——溫明〈青山粉絲廠〉",description:`「走盡那段崎嘔的斜坡
破落的青山粉絲廠前面
剛巧遇上了黃昏
彼此沒有招呼半句
一種頭也不回的心事彼此都很了解
屬於雀籠的雀聲
這時候，乖乖，應該飛回雀籠裏
屬於家人的人
都應該回家裏去
天長地久的歸宿
當隱隱依稀還記起
母親節的時候
依然一個拾荒的客家老婆婆
依舊的老地方
一個風貌依舊的老人
一棚棚曬晾着粉絲的木架下
撿拾地上
斷斷落落的碎粉絲
混着泥土微黃的晚景
就活像拾到
真的金絲一樣
只要她肩上竹蘿能夠
滿滿的裝着
她知道，今天
回家的方向是獨行的方向
吹起滿掛粉絲的風也吹起
她的白髮
全動感的生活
母親節前的飄色
滾滾紅塵中彷如敦煌飛仙的境象
最後
留下遍地粉絲還是白髮？
在她飛仙之前
誰會真的明白？」

——溫明〈青山粉絲廠〉，載《溫明詩選》，頁69-70`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3889552,lng:113.9535622}},{type:"地景書寫",publication:'德己立街——Jennifer Wong, "Incidental',description:`Evening. Balcony saturated with nicotine.
Strong coffee. Wicker seats.
In a cafe above D’Aguilar Street
I watched the rugged concrete
Thicken with the butter of an evening crowd.

Casual banter billowed inside the cafe.
Discussions and people I knew nothing about. More than anything this satisfied.

From the overhanging balcony I watched and waited For nothing in particular to happen.
On the road to Mid-levels,
Fortunate kids were being carried home From tutorials, ballet classes, piano lessons In Lexus and Mercedes.
For the time being they could look on, unseeingly, At all this rowdiness, all this big party."

-Excerpt from Jennifer Wong, "Incidental", in Summer Cicadas, p.58`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2811056,lng:114.1555178}},{type:"地景書寫",publication:"染布房街——阮朗〈染〉",description:`「笑聲裏又增加了更多的歡樂，祖母和大伯、大嬸也來了。一定是媽通知他們的，要不沒那麼巧，估計就是坐剛才經過那班火車來的吧？不管怎麼說，大伯接下來說的故事很有意思，也正好補充了我們朱家為什麼捨不得搬離染布房街的第二個理由：布，是可以染色的，黑布街白布街什麼的都很易理解。人，是不是也可以染的呢？大伯說也可以的，而且這個「染缸」非常複雜，我們朱家來自鄉間，可不能扔掉了樸素的「本色」。如果給染成個光怪陸離、五顏六色的怪物，最終會變成廢料，他認為這不僅是一個見不得家人或者鄉親的問題。」

——摘錄自阮朗〈染〉，載《海水的腥味》，頁97`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.3183876,lng:114.1732709}},{type:"地景書寫",publication:"彌敦道(9)——阮朗〈黃天霸〉",description:`「在尖沙咀彌敦道那一段，是香港著名的『世界人種展覽會』舉辦地區，因此有着各式各樣的餐室和消閒去處，甚至馬路邊，也是遊手好閒或者失業漢的瀏覽之處。
當然，即使地方上在搏命爭取遊客，但是究竟不可能在路邊擺設沙發，然而天才的人們自會利用路邊的那一列粗矮的鐵欄，可以坐，顧盼生姿，可以靠，神氣十足，可以利用那此地方作為等候朋友什麼的。扒手小集團可以使用為緩衝的地方；捕捉單身漢或者洋水兵的妓女可以使用為『我在搭巴士』、『等的士』。……黃天霸，就喜歡利用它為四傑會議的最佳場所。」

——摘錄自阮朗〈黃天霸〉，載《海水的腥水》，頁118`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.309852,lng:114.1711673}},{type:"地景書寫",publication:"喜靈洲——俞風〈過喜靈洲〉(1990年)",description:`「如果你乘船經過
這一帶寧靜水域
在晴朗的夜晚
你會看見一條
懸在空中的燈船

你不知道為甚麼
船來自顛簸的歲月
竟自灣泊在這律
許多年了一動不動
不滅的燈空守長夜

你不識船上載有
甚麼殘損的夢想
禁錮著甚麼記憶
你來不及細想
四面又是茫茫的海」

——摘錄自俞風〈去開始一首關於船和城巿的詩〉，載《香港文學》 第61期 ，頁50`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2529314,lng:114.0403806}},{type:"地景書寫",publication:"銅鑼灣豪華戲院舊址(2)——辛其氏〈浮蹤泛記：曲話·戲影·紅樓〉(2014年)",description:`「渣甸坊走不遠是邊寧頓街，另有豪華戲院，豪華正對面，隔著一條電車路是樂聲戲院，兩所大戲院都在往返維園和我家的路上，專放首輪外語片。我和十哥兩個小毛頭要等五姐自工廠宿舍回家，或者假日拍拖，才有機會做電燈膽，去看外語電影。西片票價不便宜，小孩聽不懂外語，又跟不上字幕，看也是白看，所以，欣賞首輪的時候不多，常光顧的是五點半公餘場，看過的二輪西片約莫記得有《紅菱艷》、《出水芙蓉》、《人猿泰山》和《俠盜羅賓漢》。至於《綠野仙蹤》、《魂斷藍橋》、《劫後英雄傳》和《紅粉忠魂未了情》等等，倒是後來跟同學重看，銀幕影像似曾相識，不期然把兒時的觀影印記跟眼前的電影配對，一度虛浮的記憶馬上變得實在。《紅菱艷》電影，事隔五十多年，劇情忘得八八九九，但總忘不了女主角穿上舞衣舞鞋的美麗身姿，她是個芭蕾舞蹈員，後來跳火車自殺，腳上的紅舞鞋沾了泥巴血污。尾聲一場芭蕾舞，死了的女主角缺席，舞臺上交叉置放一雙紅舞鞋，圓圓的聚光燈把舞鞋圈住。散場後悶懨懨不想說話，那種情緒大抵就是所謂惆悵吧。」

——摘錄自辛其氏〈浮蹤泛記：曲話·戲影·紅樓〉，載《香港文學》 2014年7月號總第355期，頁73`,styleUrl:"#icon-1899-E65100",coordinate:{lat:22.2791924,lng:114.1867243}},{type:"作家及讀者足迹",publication:"大埔教育大學——《香港文學大系1919-1949》及《香港文學大系1950-1969》",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.4670285,lng:114.1936333}},{type:"作家及讀者足迹",publication:"聖士提反女子中學——蕭紅",description:"蕭紅1942在此病逝",styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2837201,lng:114.1446709}},{type:"作家及讀者足迹",publication:"北角雲峰大廈——高雄",description:"作家高雄晚年住處",styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.28727,lng:114.198867}},{type:"作家及讀者足迹",publication:"富隆茶樓——杜煥",description:"南音瞽師杜煥晚年受榮鴻曾先生邀請，於此定時作現場演出，錄音經整理後出版",styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2860307,lng:114.1487313}},{type:"作家及讀者足迹",publication:"香港仔華人永遠墳場——蔡元培之墓",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.2497552,lng:114.1518638}},{type:"作家及讀者足迹",publication:"香港華人基督教聯會薄扶林道墳場——許地山之墓",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.2725263,lng:114.1278229}},{type:"作家及讀者足迹",publication:"必列者士街基督教青年會小禮堂——魯迅訪港進行演講之地",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.2839298,lng:114.1495489}},{type:"作家及讀者足迹",publication:"六國飯店（今六國酒店）——二十世紀中文藝界活動場所",description:`「路過六國飯店門前的人，遇見郭沫若、柳亞子、茅盾、胡愈之、鄧初民、翦伯贊、夏衍、顧仲彝、宋雲彬、瞿白音……不必驚訝，因為他們正要出席中國戲劇大師歐陽予倩的六十大壽，——一九四八年五月十六日晚上七點卅分，六國飯店大禮堂的座位都坐滿了人，還得臨時加了幾圓桌新座。歐陽予倩從事戲劇工作四十年，文藝界藉這機會向他致敬，同時，向他們反對的執政者展示留港文化人的團結力量。」

——摘錄自小思〈文藝的步履——六國飯店懷舊〉，載《香港文學散步》`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.278865,lng:114.172354}},{type:"作家及讀者足迹",publication:"達德學院舊址（今中華基督教會何福堂書院）——二十世紀中文藝界成立之教育機構",description:`「四十多年前，一羣有政治理想的文化人，在青山腳下,蔡廷鐺將軍借出來的別墅裏，興辦了民主大學——“達德學院”，收容了幾百來自不同地區的年輕人，共同在生活條件極簡陋的環境下，追求知識和自我改造。學院人才濟濟，政治系主任鄧初民、經濟系主任沈志遠、中文系主任黃藥眠、教員千家駒、劉思慕、薩空了、鍾敬文、胡繩、司馬文森、林林、樓棲、瞿白音、周鋼鳴……。校長陳其環提出了“我們的民主教育一方面是反官僚，反獨裁的為人民服務的政治民主教育，另一方面是注重人民生活權利的經濟民主教育"作為教育方針。」

——摘錄自小思：〈達德學院〉，載《香港文學散步》`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3960814,lng:113.9780075}},{type:"作家及讀者足迹",publication:"學士臺——二戰前文藝界聚居之地",description:`「曾住在那兒的卜少夫回憶説：“在當時儼然成為香港的拉丁區。”你試想想，午夜的時候，洋場才子的穆時英還獨坐窗前，細聽海上傳來的汽笛聲，懷念着上海。又或者，你會在黃昏時刻，在薄扶林道上（施蟄存用了它的古名，叫“薄鳧林”），遇到戴巴黎軟帽的鷗外鷗在散步，或穿得體面的葉靈鳳和施蟄存，正在邊走邊談，緩步走向附近的林泉居去看望老朋友戴望舒。當然，郁風、葉淺予、張光宇、張正宇、任杜宇、曹涵美、丁聰、魯少飛可能聚在屋子裏正在談漫畫或木刻創作。徐遲和馮亦代可能在討論電影戲劇或翻譯。偶然，你還會碰到胡蘭成。」

——摘錄自小思：〈學士台風光〉，載《香港文學散步》`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2818977,lng:114.1318158}},{type:"作家及讀者足迹",publication:"利舞臺——唐滌生逝世前身處之地",description:"1959年，唐滌生作品《再世紅梅記》在利舞臺首演，席上的唐滌生在演出期間腦溢血，送院後不治。",styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2782879,lng:114.1831818}},{type:"作家及讀者足迹",publication:"商業電台舊址（今美孚新邨）——李我「天空小說」",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.3358773,lng:114.1411797}},{type:"作家及讀者足迹",publication:"沙宣道舊羅富國教育學院——李援華",description:"李援華為羅富國教育學院（90年代與其他幾所教育學院合併為香港教育學院）導師，著有不少劇作，為香港重要劇作家之一。",styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2667768,lng:114.1282788}},{type:"作家及讀者足迹",publication:"舊中國銀行大廈——心猿《狂城亂馬》",description:`「兩人在中國銀行舊廈坐電梯上去，互相問：「是十幾樓？」大家都沒來過，聽説是頂有排場的地方。
紐約水問：「今晩是甚麼事？」
聽説又是甚麼海峽兩岸三地的甚麼文化交流。哪有這麼多錢？
聽説是蔣經國文化基金會加上文建會加上光甚麼中心，反正台灣錢多。
大陸人多、香港人計多。一下子就交流起來，交流過沒完沒了。
踏出電梯，迎面是兩張巨大的毛像——把她們倆嚇了一跳。
粉藍的背景、版畫般的線條。但到底還是那個巨大的頭顱，怎麼總好似是無所不在的呢？
兜兜轉轉跟着人走，聽説這兒是富人的俱樂部，要不知怎樣怎樣才能入會。酒吧推門一看，原來叫「長征吧」，背後酒架上面，都是領袖的畫像，好像香港提前解放了。
狹隘的空間裡，酒吧旁邊的沙發坐着幾個胖子，就再沒有留下甚麼空位了。
沙發與沙發之間有痰盂，那幾個胖子也有幾分中南海的首長味道。」

——摘錄自心猿《狂城亂馬》，頁113`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2802075,lng:114.1601917}},{type:"作家及讀者足迹",publication:"時代廣場——心猿《狂城亂馬》",description:`「透過太陽眼鏡看岀去對面的新時代廣場，好像一頭新品種的恐龍豎立在這個他本來熟悉的區域。
過去他跟紐約水還比較是親密的關係的時候，這兒不是這樣的，這裡有許多宵夜的大牌檔、舊雜貨舖，燒臘舖的後面有修理自行車的地方，好像還有一片鳥雀舖頭，因為他記得有一次紐約水趕着去做白虎社的採訪時匆忙中一腳把一個擺在路旁的雀籠踢進旁邊的燒臘舖去，據説舖主人發現時那些小鳥已經變成了一串禾花雀，但燒臘舖的肥老闆拿着一柄大刀在那兒磨刀霍霍説沒有這樣的事。
拆樓的大鐵錐是另一種暴力、還有種種鑽地的機器、隆隆的打樁聲音，然後隔了一段時間發覺某處地方中間岀現了—個窟洞，然後，城中每個人又在説新去處了。」

——摘錄自心猿《狂城亂馬》，頁31`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.278151,lng:114.1821136}},{type:"作家及讀者足迹",publication:"域多利監獄（今大館）(1)——戴望舒〈獄中題壁〉(1942)",description:`「如果我死在這裏， 
朋友啊，不要悲傷， 
我會永遠地生存
在你們的心上。

你們之中的一個死了， 
在日本佔領地的牢裏， 
他懷着的深深仇恨， 
你們應該永遠地記憶。

當你們回來，從泥土
掘起他傷損的肢體， 
用你們勝利的歡呼
把他的靈魂高高揚起，

然後把他的白骨放在山峰， 
曝着太陽，沐着飄風： 
在那暗黑潮濕的土牢， 
這曾是他唯一的美夢。」

——戴望舒〈獄中題壁〉`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2813607,lng:114.1539768}},{type:"作家及讀者足迹",publication:"深井——也斯與君特·格拉斯同遊新界",description:`「吃飯的時候，我們坐在深井小店露天的枱旁，在工人們之間，格拉斯看來悠然自得。他成功地運用筷子，夾了一塊燒鴨。他認為它們十分美味。他說他可以煮美味的菜，他拿手的菜是蒜茸羊腿、牛肚、扁豆、馬鈴薯場、魚湯……。他說到近月與他的譯者開會，討論翻譯他新著的疑難，一連幾個星期，到了最後那一次，他自己下廚，煮了一頓美味的食物給譯者吃，因為他說開會那兒的伙食太糟。而且，他說，要他們譯這麼一本充滿食物的書，光是譯沒得吃，太不公平呀。他是一個會想到別人的腸胃的人。他對一些政治教條存疑是因為它們引不起他的胃口。他不想信口頭上的宣傳，要用自己的舌頭分辨味道。」

——摘錄自也斯〈與格拉斯遊新界〉，載《作家》 第五期，頁102`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.367102,lng:114.058809}},{type:"作家及讀者足迹",publication:"粉嶺——也斯與君特·格拉斯同遊新界",description:`「他喜歡生長的東西。在粉嶺的時候，我們站在一所學校外面，看孩子們嬉戲。那原是一所廟宇，現在改成學堂、裡面的教師善意地與我們招呼，我們便走進去看看了。在廟裡面，佛像仍在那裡 、但在祭壇的前面，現在放了張乒乓球桌，孩子們正在打球。兩翼的地方，闢為課室，傳來孩子們的聲音。在頭上，鳥兒飛來飛去，而在當中，昔日人們焚香拜佛的地方，現在兩個白衣的小孩，正在興高采烈的把球搓來搓去，暗金色的佛像在後面默默看著，有了這麼熱鬧的孩子們，祂一定不再寂寞了。我們站在那兒，看著這奇異的混合。格拉斯笑得很開心，他說：『菩薩一定從未試過像現在這樣有這麼多樂趣。』在外面，白衣藍褲的男孩在踢球，女孩在踢毽，滿地陽光，格拉斯開心地在他們之間緩緩走過。」

——摘錄自也斯〈與格拉斯遊新界〉，載《作家》 第五期，頁103-104`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.4916829,lng:114.1414685}},{type:"作家及讀者足迹",publication:"朱光潛小徑——《龍應台的香港筆記@沙灣徑25號》",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.2662818,lng:114.1272026}},{type:"作家及讀者足迹",publication:"跑馬地(1)——葉靈鳳〈黃遵憲的香港感懷詩〉",description:`「另一句『乘風百馬驍』，錢氏箋註引王韜的《香港略論》云：『跑馬場周約二十餘里，每歲賽馬，其間多在孟春和煦之時』。這座跑馬場，可説是本港最早的建設之一。因為跑馬場所在地的快活谷，原稱黃泥涌山谷，是一片小河縱橫的水稻田。」

——摘錄自葉靈鳳〈黃遵憲的香港感懷詩〉，載陳智德編《葉靈鳳卷》，頁214`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2722596,lng:114.1817541}},{type:"作家及讀者足迹",publication:"跑馬地——陳君葆住處",description:`「［一九六七年］九月十三日 星期三
昨日沒有出外散步，今晨補運動課了，七時就道，八時回來，還摘了幾朵夜合花和兩三小枝紫薇，已經是剩蕊餘芳了。詩人説：「夜合花開香滿庭」開時在傍晚時分，憶少年時居鄉，庭院間頗有此「香滿庭」的況味，如今已是六十年前事，豈特夜合花，那北窗外的一棵梅、一棵柚子、一棵扁柏和一棵橫梓，都蕩然無存了！半個世紀已如此，遑論五百年後！
今日跑馬地這一區，聽到過兩聲爆炸聲頗大，一在上午，一在下午，那時我剛去看過廖醫生打針回來不久。廖恩德已把醫務所中所懸掛的名人題詞拆除，不但王冷齋、柳亞子的，連何香凝九十高齡寫的一幅也去掉，其實這又何必呢！
昨天李太太攜了《新安縣誌》來還給我時，説起廣州事，據謂反革命派分子，他們大本營似在河南方面，大致情形這近幾日稍為好些。這和外文報寫的差不多。《南華早報》今日報道：
（以下是英文摘錄，略——編者註）
打着紅旗反紅旗，你怎樣去辨別誰是真誰是假！混亂實已極了！」

——摘錄自謝榮滾編：《陳君葆日記》卷六，頁102-103`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2685046,lng:114.1862357}},{type:"作家及讀者足迹",publication:"修頓球場(2)——陳君葆觀看中國乒乓球團表演",description:`「［一九六七年］五月四日 星期二
午間依約到積臣餐室去與蔡渭衡午膳後才轉往修頓球場看乒乓球團『向港澳同胞彙報表演』，遇王道安，他的坐位剛在我旁邊，因而談起五十二年前我們還打過乒乓球賽的經過。匯演完後，《大公報》萬民光要我講幾句發表感想。我説：我還玩過這一套，那剛在『五四』時候，當時總以小道視之，今來看過這表演，感覺到健兒們的表現，充分顯出團結合作的精神，尤其是雙打，更緊密配合，真為嘆觀止然，看來這是有一種思想，一種精神來作骨幹，這就不再能以『小道』視之了。
散場後，轉到一家餐廳去飲冰。大蔡買了一張《新晚》，刊載了潘甦於今晨逝世的消息，不禁為之一怔。一時悶悶不樂，索飲『可口可樂』一樽，念二十六年間事，不覺沉吟着：『不知算得銷魂未，銷骨携擁積毀同。』
夜深想起劍鍔的事，擬慰李崧以詩：

冷月無聲貝葉翻，眼前同志幾甦魂？
最憐蓬島歸來日，猶帶餘寒拭淚痕。

怎堪回望喚真真，碧海潮頭浪作塵。
應是少年仍慘綠，芸窗書憶更何人！」

——摘錄自謝榮滾編：《陳君葆日記》卷六，頁487`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2768115,lng:114.172256}},{type:"作家及讀者足迹",publication:"譚公道——侶倫〈生死線〉",description:`「在包圍着寫字枱的人堆中間，向救濟會主持人付過了錢，登記了名字，把購米證給他劃一格符號，這手續在費了相當時間以後終於辦妥了。把布袋給他們量進了米，我會齊了同來的朋友準備回去。我們一共是四個人。
橫在『救濟會』前面的是譚公道，日寇的『禁區』。救濟會背面的北帝街是通行的道路。『禁區』照例在街的兩頭攔着鐵絲網，豎起一塊小木牌：『通行禁止，違者槍殺』。然而這只有日本人自己明白，有好些所謂『禁區』的，在解禁以後木牌卻不跟着除去，跟鐵絲網一同躺在地面；不知道誰做了第一個冒險家以後，就有許多行人放心地在那上面踏來踏去。相反的情形，有些地方簡直沒有鐵絲網和木牌，也可能是『禁區』的了。這對於不知底細的人簡直是陷阱。
而譚公道還沒有鐵絲網的，小木牌也不知道豎在甚麼地方。
但是由於觀念和習慣，我們每次都是沿着北帝街走，照例是轉進一條屋背的小巷，由救濟會的後門進出的。」

——侶倫〈生死線〉，載許定銘編：《侶倫卷》，頁328-329`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3226588,lng:114.1885015}},{type:"作家及讀者足迹",publication:"桂林街——新亞書院舊址",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.3287595,lng:114.1598188}},{type:"作家及讀者足迹",publication:"一拳書館——作家陳浩基與數十名印傭共讀《13.67》(2020年10月24日)",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.3268657,lng:114.1634081}},{type:"作家及讀者足迹",publication:"新都城大廈——也斯〈東京和香港的書信〉",description:`「當我們走在今日擠迫的英皇道街頭，您一定奇怪我為甚麼停下來指著一所看來普通不過的酒樓跟您說這裡原是『都城戲院』的舊址。其實也許我用言語也無法說清楚我當年從這裡看到日本電影的興奮。當年黑澤明的《用心棒》、《穿心劍》、《七俠四義》都是在這裡首映的，那些身手敏捷的動作、利落的剪接，有情有義的故事，看來過癮極了！不光是我，而是一代人都著迷了。隨後勝新太郎的盲俠『座頭市』系列、稻恆浩的宮本武藏系列，都在香港很受歡迎，後來邵氏的武俠片熱潮也多少受到這些影響吧。」

——摘錄自也斯、四方田犬彥〈東京和香港的書信〉，載《香港文學》 總第229期，頁8`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2907933,lng:114.1996021}},{type:"作家及讀者足迹",publication:"大丸百貨舊址——也斯〈東京和香港的通信〉(2004年)",description:`「銅鑼灣六十年代開始有大丸，那是第一家日本百貨公司吧，到我女兒出生的八十年代中期，不僅大丸有了新大丸，銅鑼灣還有三越、崇光、松阪屋等等，簡直成了日本百貨公司的集中地了。比我們年輕的一代，都是看日本電視劇長大的，由《阿信的故事》、《飄零燕》、《足球小將》、《橙路》(Orange Road)、《小甜甜》、《IQ博士》、《伙頭智多星》，到近年的日劇《悠長假期》、《美味關係》大家都耳熟能詳。我兒子小時候看《叮噹》，女兒小時候看《美少女戰士》、《櫻桃小丸子》，要明白他們這一代的心理和感情，也不能不理解他們所接觸的東西。我有一年到加拿大約克大學客座，女兒那時年紀很小（大概是我從黃竹坑去到北角的年紀吧！），去到外國，堅持要買一個帳篷，在客廳裡紮營躲在裡面。後來發現了電視也有配英語的日本卡通片集，她才好似回到家裡一樣。她在外國讀書，幾年後回來，最傷心的還是大丸關門了！
後『大丸』時期的人類也有她們的感情和道理的，我們這些上了年紀的前衛分子也逐漸檢討自己的潔癖，調整立場。其實我母親一早就好像看透這一切。七、八十年代我在美國讀書，母親跟我們寫信，郵寄食物和書本。九十年代中，女兒去了加拿大讀書以後，母親自己照樣看日本動畫，然後每星期跟女兒通電話時，她們兩人討論劇情，交換心得，一點代溝也沒有。看來她老早看穿藝術無分高低〔high and low art），不過是溝通的材料而已。」

——摘錄自也斯、四方田犬彥〈東京和香港的通信〉，載《香港文學》 總第229期，頁9`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2804811,lng:114.1856463}},{type:"作家及讀者足迹",publication:"七姊妹道(2)——四方田犬彥〈東京和香港的通信〉",description:`「對了，前一段時間去香港，你領我去你自小長大的北角，行至七姊妹道時，偶然注意到一塊招牌上大大的英文字母寫著『DAIHATSU』，旁邊是中文『大發汽車服務部』。立時就看出那是我父親曾經服務過的汽車公司的香港營業所。雖然無從知道這裡是否從1950年代以來就一直是日本汽車公司的分店，但如果真是這樣，也就是說，當你還是小學生的時候，我父親曾經在同一個街角徘徊過。我覺得這個偶合很有意思！下次有機會，我打算確認一下手頭的伊麗莎白女王像的郵票，看看上面的郵戳是哪個郵政局的。說不定就是現在已成為灣仔環境資源中心的舊灣仔郵政局的郵戳呢。這樣的胡思亂想，對我來說是非常愉快的事情。」（韓燕麗譯）

——摘錄自也斯、四方田犬彥〈東京和香港的通信〉，載《香港文學》 總第229期，頁5`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2913804,lng:114.2066035}},{type:"作家及讀者足迹",publication:"維多利亞公園(4)——李金鳳〈六月三、四和QUART有關的日記〉(1991年)",description:`「下午。擾攘一番後，在香港大學飯堂終於安穩坐下來，攤開稿紙，開始動筆寫這篇稿。《越界》主編張輝幽靈般從窗邊來到。活該，這幾天早晩總碰到三三兩兩同幾張臉孔。他説來看莫昭如之《老虎的故事》木偶劇，我記得六月一日晚他到過大角嘴看同一齣劇，但或許我記錯。黃昏我回到QUART拍焚燒憲法時，見到郭達年。六月一日晚我去看他台上演出，兩小時後又在離島碼頭碰到他和黑鳥一眾。又如我離開QUART後到維園燭光晩會，剛好就聽到莫昭如在台上做話劇；此外，在入口看到學聯那幾個人，還有四五行動……支聯會。來來去去都是那些熟悉的臉孔，以至臨出維園前我又碰到一個昨晚前晚在新華社見過的人——簡直像撞鬼，令人心煩。」

——摘錄自李金鳳〈六月三、四和QUART有關的日記〉，載《天使與我同路》，頁48`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2818276,lng:114.1895148}},{type:"作家及讀者足迹",publication:"香港大學——張愛玲〈燼餘錄〉(1944年)",description:`「戰爭開始的時候，港大的學生大都樂得歡蹦亂跳，因為十二月八日正是大考的第一天，平白地免考是千載難逢的盛事。那一冬天，我們總算吃夠了苦，比較知道輕重了。可是“輕重”這兩個宇，也難講……去掉了一切的浮文，剩下的仿佛只有飲食男女這兩項。人類的文明努力要想跳出單純的獸性生活的圈子，幾千年來的努力竟是妊費精神麼？事實是如此。香港的外埠學生困在那裡沒事做，成天就只買菜，燒菜，調情——不是普通的學生式的調情，溫和而帶一點感傷氣息的。在戰後的宿舍裡，男學生躺在女朋友的床上玩紙牌一直到夜深。第二天一早，她還沒起床，他又來了，坐在床沿上。隔壁便聽見她嬌滴滴叫喊：『不行！不嗎！不，我不！』一直到她穿衣下床為止。這一類的現像給人不同的反應作用——會使人驚然回到孔子跟前去，也說不定。到底相當的束縛是少不得的。原始人天真雖天真，究竟不是一個充分的『人』。」

——摘錄自張愛玲〈燼餘錄〉`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2829989,lng:114.1370848}},{type:"作家及讀者足迹",publication:"香港善導會——黃碧雲《烈佬傳》(2012年)",description:`「謝謝香港善導會多年來給我的支持。謝謝灣仔善導會康樂中心的社工陳豪柱、劉家俊、同事維京、蔡先生、阿欣，善導會總幹事吳宏增。我是開始了探訪善導會的會友才發覺原來吳宏增是我的大學同學，當年我們參加學校的社工隊一起去木屋區探訪，想不到多年又再碰面。
謝謝灣仔善導會康樂中心的會友，他們令到這本小説，層面更加豐富。他們的每一個都是烈佬。」

——摘錄自黃碧雲《烈佬傳》致謝部分，頁198`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.27802,lng:114.169633}},{type:"作家及讀者足迹",publication:"九龍公園——李金鳳〈香港學〉(1989年)",description:`「『香港』頓然成一門『學問』，早已有許多人先行指出過了。能夠有系統地整理一地方的風俗歷史變化，總是好的，對民族文庫也是有所貢獻。時常說，香港的變化急劇，這種理解，假如一向只是留在印象裡屬回憶的一部分，怎麼也不會驚異，及至是時光能有點滴倒流顯現眼前，才眞正使人駭然。譬如我在假日到九龍公園那個博物館看『香港製造一九OO——一九六O』展覽，才眞是對事物逝去如斯急促、繁浩而深深詫訝，一如小思在他報寫她觀看舊時紀錄片，對軒尼詩道會經的闊敞，感覺是又驚又喜，糾葛而纏綿。」

——摘錄自李金鳳〈香港學〉，載《鐘樓記憶》，頁43`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3045183,lng:114.1684006}},{type:"作家及讀者足迹",publication:"浸會大學——陳映真訪港進行演講",description:`「星期日早上九點半跑上大專會堂聽陳映眞。演講會原定十點鐘開始，約了朋友九點半會堂外面樓梯等，怕到時爆滿，沒有座位。
跳下的士，早上難得的天，太陽照着沒有學生的浸會學院水靜河飛，心一急，跳上一級級長樓梯，見到會堂入口攔着一個白木牌『不准內進』。不管三七二十一，閃身入會場。千個座位空蕩蕩，像神主牌對着舞台聖殿宏偉的紫紅色糸糸絨垂幕。幕前一張小人國用的白枱和兩張鋼色椅，孤零零退縮到守勢的位置，不能再退，再退便返回後台。這一大段疏離，無盡無邊，揭發我一廂情愿的期待，無處着落。
差五分十點，朋友火急出現，未站穩，未回氣，已經說了幾聲抱歉。抱歉我要趕着打點，搬屋的家當裝了兩個大碼貨櫃箱還未裝完，抽不出時間聽演講了。
我身邊的人訝然。問，你眞要走了？她反問：你呢，你打算一直留到九七？人笑着搖頭，又問：還回不回來？不回來。我怕了九七才移民，旣然走，爲什麼要回來？
我知道。沒有詫異，一切都在計算之列。旣然不回來，便沒有非要抽空聽陳映眞不可的理由。
十點十分演講開始，座位大半空。」

——李金鳳〈演講會側寫〉，載《鐘樓記憶》，頁143`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3408088,lng:114.1798757}},{type:"作家及讀者足迹",publication:"灣仔道——小思〈讀《香港記》〉(1997年)",description:`「説來好笑，灣仔道上的街市，我幾乎每星期去一次，而又是童年生活場景之一，可是，原來我並沒好好了解過它。我説大橋健一很日本式研究，就是這樣：他從莊士敦道入口的灣仔道頭開始，以手繪地圖方式，記錄了整條街兩旁的店鋪名稱及所賣貨品名稱。同時連擴展在路邊的小販攤檔也不遺漏。通過如此記錄，整條灣仔道街市街道構造就突顯出來了，而由他再依此分析，此街市以魚肉為中心、蔬菜、雜貨為外緣的構成形態與公營市場如何不同。
此圖繪於一九九O年，我忽來興致，按圖沿灣仔道走一趟，記錄了到一九九七年那些店鋪有何改變，才算好好閲讀了一次灣仔道——一條與我曾經關係密切的舊街。當然我沒有學他，由早上九點四十五分至十一時之間，分別追蹤了三個女人在這街上買餸情況，也做了記錄，足反映普通主婦的經濟活動。」

——摘錄自小思〈讀《香港記》〉，載《夜讀閃念》，頁150`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2770532,lng:114.1769649}},{type:"作家及讀者足迹",publication:"香港大學(2)——陳君葆戰時救書",description:`「當時存於香港大學圖書館的中英文書總數約為二十四萬一千三百多冊。其中多是中外人士在戰亂期間托存的，也有上文所述各大圖書館所寄存的，日本人最重視文物文獻資料，只要看封查圖書館，是他們攻佔香港三四天後就趕着做的事便可知道。陳君葆不卸責，不逃避，孤身前往日憲兵部，面對審查，事後又答應日人繼續留任圖書館主任，與沒走散的館員一起埋首整理館藏圖書，可以説忍辱負重，與圖書館藏書共存亡。館員劉國葦於十多年後回憶該段日子，用了『茹苦含辛』四字來形容。」

——摘錄自小思〈一段護書往事——記陳君葆先生〉(1997年)，載《夜讀閃念》，頁164`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.282967,lng:114.1375406}},{type:"作家及讀者足迹",publication:"香港大學(3)——許地山獲委任為中文系教授(1936年)",description:"",styleUrl:"#icon-1899-FFEA00-nodesc",coordinate:{lat:22.2829369,lng:114.1379887}},{type:"作家及讀者足迹",publication:"灣仔青文書屋舊址(2)——阿濃〈實況雜誌〉(1989年)",description:`「台灣的《人間》雜誌是聞名已久了，前幾天才在灣仔的靑文書店買了一本，是一周年特刊。當時隨手翻翻，覺得比近期的一本內容更豐富，遂捨新而取舊。
這一期的主要內容是64頁的彩色大特輯:濁水溪。分上、中、下游報道了台灣這條河流的自然環境、兩岸人民生活和社會問題。編輯部動員了12人次，花了三個月的時間，縱走溯行了178公里，訪問了許多居民，用寫實的文字和圖片做了一個社會實況報道。另外一個主題是『核能曝害』，介紹了台灣和日本核電廠工人受核汚染的幾個病例，很使人警惕和不安。
這是一本絕不輕鬆的反映社會問題的雜誌，想不到竟在台灣大受歡迎。會經詢問靑文書店負責人這本雜誌在香港的銷路，他說銷得不錯。我又問如果香港也出一本這樣的雜誌將如何，負責人似乎不表樂觀。不過未做過的事誰又能夠肯定呢？說不定香港也會岀現小小的奇跡。
從實況戲劇的受歡迎，電視和報紙上資訊內容的受重視，社會性雜誌只要辦得好，銷路應該比文藝雜誌有把握。
有誰願意一試？」

——阿濃〈實況雜誌〉，載《心有所見》，頁81`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2775017,lng:114.1765056}},{type:"作家及讀者足迹",publication:"太平山——巴金遊太平山(1933年)",description:`「我們回轉身沿着上山頂的路走去。路很寬，走着並不吃力。我們愈走愈高。許多建築物和樹木都在我們的下面了。我時常掉頭往四面看，到處都是沐着陽光的綠樹，還有海水，還有各種顏色的洋房。我們離山頂不遠了，忽然從後面吹過來一陣風，幾片雲飛過我們的身邊，往對面的山頂飛去。有幾片雲很薄，淡白色的，就像幾縷絲，幾股煙。我們登上太平山山頂的時候，對面那座較低的山已經是煙霧瀰漫了。」

——摘錄自巴金〈香港〉，載盧瑋鑾編：《香港的憂鬱——文人筆下的香港(1925-1941)》，頁36`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2742567,lng:114.1460894}},{type:"作家及讀者足迹",publication:"太平山(7)——胡適遊香港(1935年)",description:`「船到香港時，天還未明，我在船面上眺望，看那輕霧中的滿山燈光，眞像一天繁星。韓校長的家在半山，港大也在半山，在山上望見海灣，望見遠近的島嶼，氣象比靑島大連更壯麗。香港的山雖不算很高，但幾面都靠海，山和海水的接近，是這裏風景的特色。有一天佛斯脫先生夫婦邀我去遊覽香港市的背面的山水，遍覽淺水灣，深水灣，香港仔，赤柱各地。陽曆的一月正是香港最好的天氣。滿山都是綠葉，到處可以看見很濃艷的鮮花；我們久居北方的人，到這裏眞有『趕上春了』的快樂。我們在山路上觀看海景，到聖士提反學校小坐喝茶，看海上的斜陽，風景特别淸麗。晚上到佛斯脫先生家去吃飯，坐電車上山，走上山頂，天已黑了，山頂上有輕霧，遠望下去，看那全市的燈火，氣象比紐約和舊金山的夜色還更壯麗。有個朋友走遍世界的，曾說，香港的夜景，只有南美洲巴西首都里阿德耶內羅(Rio de Janeiro)和澳洲的西德內(Sidney)兩處可以相比。過了一天，有朋友邀我去遊九龍，因時間太晚，走的不遠，但大埔和水塘一帶的風景的美麗已夠使我們驚異了。」

——摘錄自胡適〈南遊雜憶〉，載盧瑋鑾編：《香港的憂鬱——文人筆下的香港(1925-1941)》，頁56`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.274235,lng:114.1466371}},{type:"作家及讀者足迹",publication:"宋皇臺(3)——郭沫若遊香港賦詩五首(1937年)",description:`「(一)
十載一來復，兩番此地遊，興亡增感慨，有責在肩頭。
(二)
香海平如鏡，艟艨靜似山，劇憐熙攘者，不識步艱難。
(三)
敵人不足畏，可畏是悲觀，須當用全力，克服此兇頑。
(四)
寇焰愈猖狂，我情愈悲壯，縱使退蘭州，依然要抵抗。
(五)
遠望宋皇臺，烟雲了不開，亡秦賴三戶，何用遽心灰。」

——載盧瑋鑾編：《香港的憂鬱——文人筆下的香港(1925-1941)》，頁85`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3247371,lng:114.1893541}},{type:"作家及讀者足迹",publication:"曙光書店舊址——陳冠中〈啓蒙小書店、吊命小書店〉(2008年)",description:`「自從曙光和青文書店分用一個二樓單位，它就長期納入我的生活地圖裡，讓我知道鬱悶的時候有個地方再去，吊住我這樣在香港的英文讀書人的命。我長期觀察的結論是，曙光在哲學與社科英文書方面的質與量，猶勝於台北誠品書店的旗艦店，而近十年兩者的書種又皆勝過三藩市城市之光書店地下室提供的非小說選擇。這是了不起的成就，特別對小規模的曙光來說，點點滴滴都是心血工夫。」

——摘錄自陳冠中〈啓蒙小書店、吊命小書店〉，載《事後——香港文化誌》，頁19`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2774988,lng:114.1763652}},{type:"作家及讀者足迹",publication:"香港科技大學(1)——李歐梵〈清水灣畔的臆語 ——大學與書店〉(2004)",description:`「相形之下，香港的書店-別是在熱鬧區如旺角——往往座落於二樓斗室或陋巷之中，只供同好欣賞；或乾脆與商場和地鐵站掛靠，卻似乎與學校無緣，原因何在？為甚麼香港大學、科技大學或中文大學等校園沒有一家像樣的書店「進駐」?記得兩年前我因事去中大，突然在某幢大樓中發現一家「第二書店」，不禁大喜過望。據説是幾位中大校友和熱心人士合開的，但是依然門可羅雀，做的還是虧本生意。我為了表示支持，特別在該店象徵性地買了一本書，但於事無補。」

——摘錄自李歐梵〈清水灣畔的臆語 ——大學與書店〉，載《清水畔的臆語 》，頁88`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.33638,lng:114.26492}},{type:"作家及讀者足迹",publication:"海運大廈(1)——陳冠中〈巴西咖啡與海運大廈〉(2008年)",description:`「一九六六年新的海運大廈落成，是當時香港最大的商場，象徵著時尙、洋氣的新時代，內有一一二家商店，一二OO個停車位，另有中西餐館酒吧，包括在商場中庭，仿法式路邊咖啡座模樣的Maxim美心餐廳。
在另一個角落，有一個賣飲料的空間，叫巴西咖啡(café do Brazil)，顧名思義，賣的主要是咖啡，稱它爲空間，因爲它是在那個沒有星巴克年代的一個類似今天星巴克的場域，所謂家庭與職場以外的『第三空間』。在六O年代中，白天誰有閒去泡咖啡館？大概是有閒太太們、影人、偷閒跑街經紀，和自由職業的文化人，巴西咖啡大概比較吸引後兩種人，這造就了文化小圈子裡的巴西咖啡傳奇。」

——摘錄自陳冠中〈巴西咖啡與海運大廈〉，載《事後──香港文化誌》，頁91`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2950253,lng:114.1666668}},{type:"作家及讀者足迹",publication:"農圃道新亞書院舊址——小思〈圓亭內亮麗風景〉(2013年)",description:`「農圃道新亞書院的圓亭，是個新亞人心中地標。記憶中，孫國棟老師的歷史課在那兒上。而曾省、陳永明師兄辦的午間音樂欣賞，更是我們最佳聽覺享受。第一次聽俞麗拿奏《梁祝小提琴協奏曲》，得曾師兄導賞，懂了欣賞門路，俞麗拿首次來港演奏，我就排隊買票入場。」

——摘錄自小思〈圓亭內亮麗風景〉，載《縴夫的腳步》，頁6`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.320621,lng:114.186041}},{type:"作家及讀者足迹",publication:"金文泰中學——小思〈如此磨鍊〉(2009年)",description:`「金文泰中學同學為慶祝畢業四十年，籌備聚餐和出版紀念冊，負責的同學十分認真負責及尋找舊日資料，感動了我，從塵封中翻岀頁頁記憶，這一翻動，不得了，原來我們是經過老師如此磨鍊，帶着一身『武功』年復一年走過來的。
我保存了初中一到高中三年級六年來的作文，個別老師的批改，顯示了手把手教的心血痕迹。最令我回首看而驚訝不已的，是高中三那一年，用毛筆依老師講本抄下《中庸》（連朱注小字）。在堂上邊聽講邊用鉛筆把老師所作注釋寫下，並用紅筆圈點精要處，真是一字不苟。我完全不明白當年怎有這樣能耐，只記得還要背默，故印象深刻，事隔幾十年，到今天，有些句子如『天命之謂性，率性之謂道，修道之謂教』，『致中和天地位焉，萬物育焉』，『君子尊德性而道學問，致廣大而盡精微，極高明而道中庸，温故而知新，敦厚以崇禮』，仍歷歷在心。」

——摘錄自小思〈如此磨鍊〉，載《縴夫的腳步》，頁110`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2875667,lng:114.1947515}},{type:"作家及讀者足迹",publication:"青山酒店舊址——葉靈鳳偕友人遊新界(1949年)",description:`「1949年12月17日
應高雄之邀，偕君葆渡海赴新界作一日之遊，十一時去，晚七時返，經大埔元朗等地，在青山酒店喝茶，然後沿青山荃灣而返，沿途見駐軍極多，大部分别墅皆為駐軍徵用。」

——摘錄自《葉靈鳳日記》(上冊)，頁96

註：據facebook專頁「屯門舊照片」考，「青山酒店即今天近小欖青山別墅，是五六十年代高級消閒場所。」`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3648433,lng:114.0062112}},{type:"作家及讀者足迹",publication:"荔園舊址——葉靈鳳偕兒遊荔園(1951年)",description:`「1951年4月8日
下午偕兒輩赴荔園，中途大雨，幸在車中。然下車後亦鞋襪盡濕。易君左等在一屋中作詩鐘，余等則在另一茅棚中閒話。彼等自命風雅，在我看來則滿臉勢利，傖俗氣，連寒酸都說不上。」

——摘錄自《葉靈鳳日記》(上冊)，頁156`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3426083,lng:114.1359494}},{type:"作家及讀者足迹",publication:"長洲(2)——葉靈鳳遊長洲(1951年)",description:`「1951年4月20日
今日星期，天氣晴好，偕兒輩旅行長洲。上午時乘輪渡啟行，中途停坪洲及梅窩二處，至一時許始抵長洲。
長洲為港外小島，以漁業及造船業著名，西人傳教士在此處頗多建築，有電燈，但街道仍甚污穢湫狹，在市區遊行一周，又到海浴場小坐，在冠海酒家午餐，晚價魚蝦比香港略平，洋貨略高。又遊玉虛宮，為一古廟。乘四時半直航船返港，抵家已六時，一共去了七小時，費用連兒女三人共二十餘元。難得換一換環境，也不算貴。在船上二小時領略海行風味，甚值得。
長洲產鮮魚、鹹魚，以不諳價格未購歸。曬了一天太陽，皮膚微紅。」

——摘錄自《葉靈鳳日記》(上冊)，頁163`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2095871,lng:114.0302926}},{type:"作家及讀者足迹",publication:"荷里活道——葉靈鳳遊舊書攤(1951年)",description:`「1951年8月23日
上午偕兒輩理髮，又往荷理活道添購課本及文具，順道往遊各舊書攤。僅鴨巴甸街尚存兩檔，樓梯街之十餘家今僅存一家，亦無書可購，多數已改為一般舊貨攤或小熟食檔。舊時盛況恍如一夢矣。我已年餘未走這條路了，不料變化如此之巨。
寫〈香海拾零〉，係關於一九零六年舊曆八月初一之風災者曲。這是本港最慘的一次風災。
《大公報》〈大公園〉編者又來堅約寫稿，並提出範圍，要寫古今人物談。近來實在寫得不多，勉強應之，但不知能否如願耳。
與苗秀在美利堅晚餐。」

——摘錄自《葉靈鳳日記》(上冊)，頁198`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2839658,lng:114.1506614}},{type:"作家及讀者足迹",publication:"麗池夜總會舊址(2)——葉靈鳳到麗池夜總會有感",description:`「1951年9月21日
聽風已在港外掠過，天氣仍整日急雨不停。
上午出門，往書店一巡，無書可購，又往骨董展覽會一看，幾乎沒有一幅可看的畫，有些瓷器也是起碼的東西。
續譯〈香海拾零〉稿。
晚間赴麗池花園274老闆招待之宴，都是《星島》同事，席設在舞廳內，吃西菜，有兩名號稱來自好萊塢的男女跳舞家表演。不知如何，我向來對於跳舞沒有一絲好感。舞場的音樂和歌唱也令人討厭，全部模倣美國黑人或南美洲的那種作風，在我看來實在討厭。」

——摘錄自《葉靈鳳日記》(上冊)，頁206-207`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2898101,lng:114.2097558}},{type:"作家及讀者足迹",publication:"淺水灣(6)——葉靈鳳偕兒遊淺水灣",description:`「1951年10月7日
今日星期，天氣晴好，下午偕克臻及兒輩乘車赴淺水灣海濱遊散。兒輩在沙灘玩沙撿貝殼，後在牛奶公司進冷飲點心。八時始返。一個下午，領略不少山色水光。
晚間與苗秀在東江飯店晚餐。東江客家菜近在本港甚流行。最普遍者為鹽焗雞，釀豆腐。鹽焗雞頗鮮嫩，類似江浙之桶子油雞。但不用刀切，以手撕折，又似風雞。
讀厲顎《南宋院畫錄》。」

——摘錄自《葉靈鳳日記》(上冊)，頁212

註：盧瑋鑾女士在書中補充道，「牛奶公司是香港首家牧牛場，英文名為Dairy Farm，飼養乳牛生產牛奶，並從澳洲進口凍肉，供應牛奶、洋式凍肉。三十年代末在中環德輔道中皇室大廈附近設門市，類似今天高檔超級市場，更附設咖啡小座，為文化人下午茶好去處。此處乃指淺水灣分店。曾請教魯金先生何故香港市民在當年口頭稱牛奶公司為『大公司』，他說因牛奶公司店只標英文名Dairy Farm，市民為方便呼其名，以粵語讀首字得一Dai音，遂叫『大公司』。」`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2382023,lng:114.1987428}},{type:"作家及讀者足迹",publication:"彌敦道(8)——力匡1980年代重回香港",description:`「彌敦道比我的記憶中的彌敦道狹窄了很多，我想，這是因爲我已習慣了新加坡較寬闊的馬路的緣故。
我就像一個回到火災或地震後的故居的住客，我拚命想找回一些値錢的財物，却發現一切已成瓦礫，已成灰燼。但由灰燼中，却出現了另一個香港，新的香港，一如神話中五百年就要應劫一次，被烈火焚爲灰燼，爲輕烟的一隻鳳凰。
香港，如鳳凰一樣，歷劫重生。新的香港，比舊的香港更年輕，更有活力。新的香港人，是創造奇蹟的一羣人。」

——摘錄自力匡〈三個香港〉(1986年)，載《香港文學》 第23期，頁77`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.3113341,lng:114.1709647}},{type:"作家及讀者足迹",publication:"薄扶林道(2)——力匡第二次居港並執教於此地中學",description:`「我不是羅師（羅富國師範學院）或葛師（葛量洪師範學院）出身，不教敎『官校』，沒法拿高薪。但任何一間學校的待遇，都會比香港仔學校的薪水高的。教了一年多，我就和香港仔的水光山色吿别了。
我在薄扶林道一間中學教國文，不必教音樂了，不必在圖書館開帆布牀了。學校用的國文課本，是中華版，這原本就是我做高中生時讀的課本，翻開第一册的第一課，是詩經的『伐檀』。『坎坎伐檀兮……』我曼聲吟哦，模仿我讀龍川一中時那位老秀才教員的調子。不過，那時他用客家話讀，而我現在用廣州話讀，我的廣州話，有東山的口音，很標準。
『鄭生，你讀書的聲音好聽極了。』一個女學生說。
『鄭生』，是廣州話鄭先生的簡稱。
我很開心，我說：『我用客家話讀還要好聽呢。』」

——摘錄自力匡〈三個香港〉(1986年)，載《香港文學》 第23期，頁74`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2625056,lng:114.1354884}},{type:"作家及讀者足迹",publication:"尖沙咀鐘樓——陶然來港經歷",description:`「每當《獅子山下》的歌聲響起，香港是我家的感覺強烈。我常常想起尖沙咀的鐘樓，當年我從北京南下，當時還沒有穗港直通火車，在羅湖過關，踏上奔往九龍的火車，在隆隆聲中，一路好奇。終於到達當時的尖沙咀總站，九月的秋陽正好，斜照在我的身上。那時，鐘樓還倚在火車站邊。當我走到旁邊的尖沙咀碼頭，上船過香港島時，聽見噹噹鐘聲響起，回頭一望，但見鐘樓上的時針，正指向下午三點鐘。
雖然，後來，火車站因城市發展的需要，遷到紅磡去了，也已經習慣在那裡上下火車，但是在我的印象裡，還是時時記得那個當初我第一次踏上香港土地的尖沙咀火車總站。火車站遷走了，但鐘樓依然站在那裡，讓我可以找到一點當年的實物，追憶似水流年。」

——摘錄自陶然〈終於在香港落腳〉(2017年)，載《今夜，菜街歌舞沉寂》，頁12-13`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2935574,lng:114.169734}},{type:"作家及讀者足迹",publication:"培正道——蔡炎培與戴天共晉晚餐(1965年)",description:`「你是戴天嗎？我是蔡炎培。我剛從台灣讀完書回來，瘂弦叫我帶他和橋橋的結婚照給你。你在哪？啊梅道，我知道我知道，就在我們培正附近。好罷，你在培正隔籬美蓮餐室的巴士站等我。你好容易認得我。我又高又瘦又近視。
我沒有叫詩人在餐室等我，因我周身冇文，請不起詩人喝一杯，準備交了相片就走。誰知那天是我回港後吃得最豐盛的一頓晩飯，且有酒。
時維一九六五年。」

——摘錄自蔡炎培〈代後記．我們這一代〉，載《水調歌頭》，頁139`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.317913,lng:114.1772801}},{type:"作家及讀者足迹",publication:"石水渠街(2)——小思《思香·世代》編者序",description:`「之前我向小思簡述我帶灣仔文學散步時途經附近的『藍屋』，她說一聽到藍屋便知道我不是她那年代的灣仔人。在〈我們的石水渠街〉中，我們知道往日的石水渠街不是『浪得虛名』，是真有天然水源，小思的契娘還在那裡開設了洗衣店。她聽慣了潺潺水聲，即便現在水渠『被消失了』，但那裡還是水聲潺潺的『石水渠街』怎改得了？小思看到紅磚禮拜堂，便知道還有三個站便到家了；那麼我們讀到小思的灣仔，又會勾出對家的甚麼回憶？事實上甚麼也不重要，只要不是一片空白就可以了，因為每個人的回憶，都是拼湊時代的重要板塊。」

——摘錄自劉偉成〈紅磚逗號——《思香·世代》編者序〉(2014年)，載《城市文藝》 第七十一期，頁72`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2741654,lng:114.174006}},{type:"作家及讀者足迹",publication:"東興街——丘東明小時居住地",description:`「《一九二零年代長洲生活記趣》是否香港最早的社區書寫？這點可以在學術論文討論一下。作者是丘東明先生(1914-2014)，原來他就是《號外》創辦人丘世文的父親。丘東明並不是作家，他曾經在長沙灣電器鋪打工，又經營過雜貨鋪等等普通小市民的工作，但他喜歡寫作，觀察力強，文字細緻幽默，讓一百年後的我們看到當時長洲的文化，而不需要任何照片輔助。這本書的寫作動機不是為了出版，他花了二十年時間寫自己的回憶錄，只是希望複印幾十份給親人看！我很欣賞這種純粹的民間書寫態度，沒有出版的規範，更能真實地捕捉生活的面貌。
丘東明在1923年第一次到長洲，當時只有九歲，他從內地到長洲是因為父親把他『過繼』給親戚，即是把他送給別人收養，因為當時生活艱難。我想在寄人籬下的生活，丘東明培養出敏感的性格。在他回憶中的長洲是連結起人與人複雜的關係，不光是寫表面的景色。家在長洲的新興街，男主人松伯是行船的，有兩個老婆。丘束明寫大細伯母的房間都是很暗的：『這兩個房間，在白天也是一片黑黯的，可以說伸手不見五指！……由於室內的昏暗，其中的各種物事，沒有人去拂拭清潔，那些塵垢，究竟聚積到怎樣的程度，卻是難以看出的！』（頁26-27）丘東明用黑暗來帶出她們的迷信，因為房間只有在拜神的日子，才能滿室通明。黑暗又代表了人與人的距離，大細伯母雖然可親，但說到底不是他的母親。」

——摘錄自黃淑嫻〈2019年十八區的生活記趣〉，載《悲傷的日子如何過》，頁152-153`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.2094878,lng:114.0288773}},{type:"作家及讀者足迹",publication:"德輔道中——馮乃超兒時暫居之地",description:`「祖父是一個獨斷獨行的人，腦筋和手腳是密切合作著的。因為時局關係，他決定把家庭搬回日本去。他先把廣州的家疏散到香港，然後下鄉來命令母親做準備。家人從田野中把我找回來，他就把我一個人帶走。因為他處理事情的超出常情的速度，使我連告別朋友的時間也沒有。母親似乎是無可奈何的樣子，只好叮囑我在廣州等候她。我到了廣州的家裡，來不及等母親搬來，祖父又把我帶到了香港，這裡也有不少同我年紀相若的小孩，但我總覺得忽忽若有所失。這種寂寞之感，小半是因為離開母親，大半是因為離開了鄉村那個時期浪漫氣氛。夜間聽到輪船氣笛的舒迥的音響，曾經感到說不出的哀愁。
我們住在德輔道《商報》館的樓上，當時香港還沒有干諾道，對過就是省港輪船的碼頭，還記得當時走省港線有兩條最快的船，名字叫赫得安和貨寶。」

——摘錄自馮乃超，〈三十七年前的今天在香港：辛亥年回憶斷片〉，載《南海文史资料(第九辑)：冯乃超专辑》，頁103-104`,styleUrl:"#icon-1899-FFEA00",coordinate:{lat:22.283883,lng:114.156238}},{type:"疫病記憶與書寫",publication:"高街精神病院舊址(1)——柳木下《海天集》",description:"柳木下一九四○年秋因精神病被送入高街精神病院，同年返回內地，四一年夏再到香港。晚年以賣書維生。",styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2848726,lng:114.1438425}},{type:"疫病記憶與書寫",publication:"大埔——俊人《人心大變》",description:`「方芷英又回復了幾個月前的悲觀悒鬱的心情，覺得她所遭遇的一切都是不幸的，江醒東慰解她道； 「事旣至此，悲也無益，不若轉換一個環境、也許不致事事撩惹起你的心事。我曾對你說過，準備從上海回來，便在大埔墟置幢別墅，使你有靜養的地方。」（俊人《人心大變》４５）
...…
在車中默然過了一會，大埔墟已在望了，江醒東加開了速度，拐了兩個彎，便到了別墅。他倆下了車，貝寧在外邊瞻仰了一會道： 「這個地方環境很好，芷英在此靜養確是再好不過了。」」

——摘錄自俊人《人心大變》，頁56`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.4423282,lng:114.165521}},{type:"疫病記憶與書寫",publication:"沙田馬場(1)——也斯《剪紙》",description:`「後來就是趕入沙田那回。 我按照你壓在枱面一角字條上寫的唐的地址尋去。 那在以前華住的地方附近。 我去到那兒， 才發覺華的房子不在了。 因為建設新的馬場， 沿路翻起泥土， 黃塵夾着沙粒， 撲撲吹向人的臉孔。 我終於看到你， 坐在一道廢棄的石級上， 面對一個空蕪的地盤， 背後是一所舊屋，屋前貼着一對春聯。 在你旁邊， 有一個穿運動衫的青年， 正跟你搭訕，他的樣子看來有點繼遢。 你這様一個一塵不染的人， 就這樣坐在塵埃裏。 你一副柔弱的樣子， 我找到你自然就帶你回家。 當你站起來， 我留意你穿了寬身的衣服。 你在車上説想吐， 後來你更打開隨身帶着的袋子， 從裏面拿出一件未織好的淺黃色毛衣， 在車子的顛簸中， 你生澀地舞動織針低頭編織， 自然更易暈眩了。 我叫你不要做， 你不聽。 才不過是夏末秋初， 你摹仿一個在車上編織的平凡婦女， 卻在不適合的季節和時間。 後來我看見那是一件嬰兒衣服。 我想你是存心拿出來讓人看的。 因為你沒多久就吿訴我， 孩子要在冬天出世。 甚麼孩子？我糊塗了。 你有了孩子？很奇怪， 我突然憤怒起來。 對唐， 對剛才那篷遢的青年， 或是對那我未見過面的孩子父親。 我真生氣你這樣不懂照顧自己。 但你依舊低頭編織， 好像很滿足。 回到家裏， 你更是少有的安靜， 説：「 我要休息了。」便爬到床上去。 你母親俯過身去替你弄好枕頭， 從你的外衣下抽出一個布娃娃， 我這才發覺， 你的孩子， 只是一個用破布縫成的玩具娃娃。」

——摘錄自也斯《剪紙》`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.4011111,lng:114.2052778}},{type:"疫病記憶與書寫",publication:"舊啟德機場——李智良《房間》",description:`「不少人都有過出走的念頭。這個城市不是住人的，這個城市還是擠著這麼多人，想離去的沒能離去，來的人又比離開的多，行路不能慢、上廁所也得排隊。並且，我們年青時想做的事情，一件也做不到。
清早起來，又是擠在沒睡醒的人中間趕上班，電郵信箱擠滿不得不回應的答問和垃圾。
有誰不想岀走呢？離開這座城市，離開這份工作，離開那個時時嚷分手的人，離開父母的呵護或兄弟姊妹的陰影，離開週末總在酒館舞場碰著的納悶的失意人，離開「有線新聞直播」和「路訊通」，並且把電話關掉、把僅餘的錢從銀行全部提走，
再將信用咕剪爛、丟進垃圾筒。那個感覺一定好爽！
一走了之，人間蒸發。
1998年我第一次獨自旅行，從啟德機場出發往台北，心裡早有這個出走的暗示。只草草訂了機票，沒有計劃，連落腳的旅館也沒有找，其實是想離開想得要命，非常催迫，甚至有種莫明其妙：「要是不走，必會死在香港」的恐怖感覺壓著自己，沒敢吿訴人。不足一星期後循澳門返港，一樣的急切、凌晨時份走出信德中心，前面就是Taxi Stand，沒肯歸家，急著要見我戀著的人。」

——摘錄自李智良《房間》，頁174`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3078586,lng:114.2127362}},{type:"疫病記憶與書寫",publication:"獅子山(3)——劉以鬯《酒徒》",description:`「第一杯酒。
（有人說，曹雪芹是曹顒的遺腹子。有人說：曹雪芹是曹頫的兒子。有人說：曹頫是曹寅的義子。有人說曹雪芹原藉遼陽。有人說：曹雪芹原藉豐潤。有人說：曹雪芹卒於乾隆二十七年壬午除夕。有人說：曹雪芹卒於乾隆二十八年癸未除夕。有人說：脂硯齋是曹雪芹的舅舅。有人說：脂硯齋是曹雪芹的叔叔。有人說：脂硯齋是史湘雲。有人說：脂硯齋是曹雪芹自己……曹雪芹死去才兩百年，我們對這位偉大的小說家的生平竟知道得這麼少！）
第二杯酒。
（聽說電車公司當局正在考慮三層電車。聽說維多利亞海峽上邊將有一座鐵橋出現。聽說斑馬線有被「行人橋」淘汰的可能。聽說獅子山的山洞即將鑿通了。聽說政府要興建更多的廉價屋。聽說尖沙嘴要填海。聽說明年將有更多的遊客到香港來。聽說北角將有汽車渡海小輪。聽說……）
第三杯酒。」

——摘錄自劉以鬯《酒徒》，頁264`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3590107,lng:114.1885228}},{type:"疫病記憶與書寫",publication:"廟街(3)——潘國靈〈突然失明〉",description:`「這句「當心有眼光之災」，莫明聽了當然沒加理會，因為他根本就不相信甚麼占卜命理。他只當這又是以貌取人的例子，眼看他架在鼻樑上一副厚甸甸打圈圈的鏡片，就出此惡言。莫明心想，江湖術士，凡夫俗子，市井之徒，怎明白對知識份子來說，近視加深一度，就是智慧加添一分的道理。
資料搜集得七七八八，實地觀察也做得夠了，莫明便動手寫他〈廟街命理居士的互動策略〉那篇論文，計劃在兩週內完成。為著及早出版《社會學視角》一書，他一日連續工作十多小時。莫明不時感到眼睛不適，有時見到閃光，有時突然會有一排黑點的飛蚊迅速掠過眼睛，再凝神看清，閃光飛蚊又沒了蹤影，一切如常。照照鏡子，眼睛也的確紅絲滿佈。他沒加理會，只以為是趕寫論文疲勞所致，閉目養神一會又繼續工作。」

——摘錄自潘國靈〈突然失明〉，頁86-87`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.307467,lng:114.170251}},{type:"疫病記憶與書寫",publication:"沙田站——西西《哀悼乳房》",description:`「這朝東朝西的兩條長廊我都沒有走,今天歹我從九龍半島過來，乘搭輪渡，橫過維多利亞海峽。我要到哪裏去？我並不打算到哪裏去。如今成爲遊手好閒的人，我只遊蕩。一次，我在沙田乘搭地下鐵路，一位女士在關閘前匆匆閃進車廂：
——這是到九龍去的車麼？
——我也不淸楚哩。
——不淸楚？那你要到哪裏去？
——無所謂，到哪裏去都可以。
她當然不明白，我有的是時間，我是到外面來閒逛的，並沒有目的地，車子朝甚麼方向走對我毫無分別。我不能整天躺在家中床上說我生病。遊蕩散步使我的雙足移動,使我的肺增加呼吸的容量，使我可以看看四周的風景。我選擇輪渡，除了公園、郊野，海港中的空氣是較淸新的。我在渡輪上身心舒暢，我看見波浪的起伏韻律彷彿鋼琴奏鳴曲。」

——摘錄自西西《哀悼乳房》，頁154-155`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3818236,lng:114.1869874}},{type:"疫病記憶與書寫",publication:"鵝頸橋——梁秉鈞〈非典時期的情詩〉",description:`「在橋底才用木屐打過小人 
用白虎和豬肉安撫驚蟄的季節 
霉雨潮濕的牆壁守候了一個春天 
等的是要來的沒有臉孔的 
恐懼？多年潛伏在陋巷的轉角 
在門窗破舊的裂縫間的甚麼 
在一個沒有月亮的夜晚 
襲擊我們胸中最黑暗的角落 
呼吸變得急促的夕陽 
映照在金屬大廈的玻璃幕牆上 
一層病弱者迴光返照的紅暈

其實都在同一條船上，何必
盡在咒駡鄰座的人？ 
金屬喉管或已生銹，積滯的 
思維沒有好好疏通 
秘密沒法永遠隱藏在地下了 
你的非典型地擴張的熱情 
一下子公開在冷漠的眼前 
戴上口罩，不見羞愧或鄙夷 
自嘲的眼睛也自憫，隱藏了 
但也同時顯露了那麼多」

——摘錄自梁秉鈞〈非典時期的情詩〉，載《蔬菜的政治》，頁52-53`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2792013,lng:114.1814347}},{type:"疫病記憶與書寫",publication:"太平山街——也斯〈從西邊街走回去〉",description:`「在太平山街那邊，路旁的大牌檔那兒，人們正在吃早餐。大半邊街道圍起來，準備修路。路牌也跌落下來，擱在旁邊。這兒附近有不少傢俬鋪，專門做酸枝傢俬。這是一條住宅區的小路，誰想到當年的慘況呢？廟裏擺滿了各種各樣的神像：濟公、關公、黃大仙、綏靖伯。綏靖伯據説是驅疫的功神。百姓祠裏供着各姓的牌位，有些新添了紅紙和金箔，有些薰黑一片，已經沒法辨認上面的字體了。你沒法想像這廟裏停滿了屍體的日子；你後来才知道，原來這裏是東華醫院的舊址，因為應付不過來那麽多疫症，然後才在墳墓街那邊擴建新的醫院。現在街名己經改過來了。帶着仁心仁術的想望，醫院擴建和合併，已經有好一段日子，門前堆滿籌款的鐵箱，在對面又正在建築另一幢新廈。但走進醫院，在嵌滿善長姓名和照片、刻滿對聯和賀詞的大堂那兒，在當中的地方，你還會發現一幅神農氏的繪像。這兒原是中醫的醫院，後來為了適應社會的需要、疫症的複雜，才又增添了西醫。今日的照片和文字底下，隱約仍可見到昔日的面相。」

——摘錄自也斯〈從西邊街走回去〉，載《越界書簡》，頁110`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2848433,lng:114.1481805}},{type:"疫病記憶與書寫",publication:"京華酒店舊址——李歐梵〈從SARS看香港社會的文化意識〉",description:`「『非典型肺炎』的英文代號SARS剛好和香港的官方英文名稱SAR（Special Administrative Region）偶合，遂使人不知不覺之間把香港的疫情視為「典型」：從西方的「東方主義」立場看來，香港又成了東方的罪惡代表。雖然非典型肺炎的源頭是廣東（但廣東官方至今仍否認），但外國人當然一口咬定是從香港傳來的，因為香港一向是中西交通的樞紐，所以連傳染菌的流動性也是首屈一指。如果用《紐約客》（The New Yorker）雜誌的一貫筆法來描寫這次SAR事件，可能會這樣開頭：

在九龍鬧區的京華酒店九樓，一個發高燒的老教授——他來自廣州中山大學，也是一個醫生——走進電梯，不小心吐了一口痰，同在電梯中的還有數位房客，數天之後，就從這一個中心（epicenter）軒起另一場全球性的地震！那幾個同進電梯的旅客中，有人次日到了新加坡，也有一個本地年輕人，不久也發了高燒，經輾轉介紹到了沙田的威爾斯醫院應診，但醫院中的醫師忙碌萬分——這和香港任何機構的生活節奏一樣，甚至猶有過之——遂掉以輕心，把這個病例作普通感冒情況處理。不料數目後，幾位醫護人員連續中招……。於是一場災難悄悄地襲捲這個當年的東方明珠。
誠然，香港自從一九九七年回歸中國之後，各方面都在逐漸衰落，這一次的SARS襲擊，可謂對這個幾乎同名的SAR特區給予最後一擊……。」

——摘錄自李歐梵〈從SARS看香港社會的文化意識〉，載《清水灣畔的臆語》，頁6-7`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3194819,lng:114.1756676}},{type:"疫病記憶與書寫",publication:"太平山(3)——香港話劇團《太平山之疫》",description:"",styleUrl:"#icon-1899-1A237E-nodesc",coordinate:{lat:22.2742783,lng:114.1451325}},{type:"疫病記憶與書寫",publication:"京華酒店舊址——謝曉虹〈Contagious Cities: Hong Kong〉",description:`「你遇見的，是否一隻候鳥？是否一個旅人？根據統計，單單二00三年的二月，就有超過一百萬過境的旅客。那時，你沒有辨認出，人群中，那位從廣州來的L先生。你沒有認出他，因為那時，他還是一個秘密。二月二十一日，L先生和妻子住進了位處九龍的M酒店，房間的號碼是911。L先生也是他自己的秘密。躺在M酒店的牀上，發著高熱的他並不知道，自己將再也無法離開這個城市，並成為一個聞名於世的『超級帶菌者』。病毒秘密地傳播，就在二月二十一日那短短一天裡，M酒店的九樓，悄悄侵入了那些來自新加坡、美國及加拿大等地的旅客，並將隨著他們播散於世界其他地方。」

——摘錄自謝曉虹〈Contagious Cities: Hong Kong〉，載《無遮鬼》，頁146-147`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3194838,lng:114.1757834}},{type:"疫病記憶與書寫",publication:"淘大花園(2)——謝曉虹〈Contagious Cities: Hong Kong〉(2018年)",description:`「你環顧了一下課室。來上課的連同你，只有三個人。你知道，就在附近，一座百多人被感染的屋苑大廈，已被封鎖起來，住戶被送到郊外隔離。但你就像其他人一樣，還不知道，促成病毒播散的是未能有效運作的排污渠系統。狹窄的天井，以及只有3.5平方米的浴室，是使得帶病毒的水氣凝結及無法稀釋的原因。有些住戶已經決定拋售他們的單位，移居外地，他們無法預計，二O一八年，它們將升價近十倍；因為入境條例放寬而大量湧至的內地遊客，則把大廈當成了遊覽的景點之一。
你把臉轉向窗口，透過你自己的倒影，像鳥一樣的臉孔，你希望看清楚這座城市，好像，這是一個難得的機會，不久以後，人群便會開始蜂擁而來，比以往更加稠密。此時，他們看起來不像是鳥，而是像一群集體飛行的蝙蝠，一再發出你無法聽見的高頻聲音。」

——摘錄自謝曉虹〈Contagious Cities: Hong Kong〉，載《無遮鬼》，頁150-151`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3250271,lng:114.2157657}},{type:"疫病記憶與書寫",publication:"淘大花園(1)——林曼叔〈SARS驚魂〉(2003年)",description:`「孩子悶得慌，只能趴在窗口，和鄰居的孩子交談，談碧咸的精湛球技，談英超聯的賽事。我想帶他出去走走，又不知道到哪裡去好。淘大商場已經關閉，看電視新聞，隔一條馬路的牛頭角下村，又發現好幾宗沙士個案，董夫人還包頭包腳如臨大敵，來到牛頭角下村和居民一起清潔消毒。過了沒幾天，沙士再越過一條馬路直奔德福花園。我們所居住的地方可以說處在沙士的重重包圍之中。想帶孩子出去走一走，實在走投無路。
陪伴著孩子的，除了一部電腦，只有一個足球，他把小小的客廳當作私家球場，練習他的足球技術，用腳尖輕輕挑起足球，用足掌把它穩住，再輕輕向上一飛，接在手裡 ，練了一次又一次。到了悶得再無法忍受的時候，就把沙發當龍門，踢啊踢的，踢個不停，卻把我桌上的咖啡都打翻了。我想叱責他，看他悶在家裡那樣可憐，真不知如何責備他。」

——摘錄自林曼叔〈SARS驚魂〉，載《香港作家》第四期，頁21`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3259005,lng:114.215101}},{type:"疫病記憶與書寫",publication:"北區醫院——潘國靈〈病辭典〉",description:`「九月十一日，美國世貿中心與五角大廈國防部被騎劫的民航客機撞擊，隆隆火焰四起，世貿中心於半句鐘內倒塌，死傷無數。這個時候，我身在醫院，在新界N院E1 病房30號病床留醫。我被病得奄奄一息的老年人包圍，病房內只有我一個年輕人，其餘都是老病人，也有一個看來只是中年的。老病人躺在病床上，吸著氧氣，氧氣機發出軋軋的機械聲周圍傳來咳嗽聲頑固濃痰在肺內積聚翻滾的混濁聲、老人痛苦呻吟的怨聲、老人偶爾連珠爆發問候人娘親的罵聲。他們就這樣躺著，神志不清。與外間世界無干。甚麼二十一世紀第一場非國與國之間的戰爭，他們充耳不聞，事實上，也無能為力知道。疾病，將一個人理解世界的能力全然掠掉，最後只徒剩呼吸的力氣。
如果我是平常行走自如的我，我想，這個時候，我一定是牢牢地盯著電視機的。不過，這個時候我躺在病床上，而偏偏這個病室的電視機又壞掉了，因此我可能是少數香港人不是第一時間從電視直睹事發經過的。不過，我可以想像，這一定是非常震撼的。不少第一時間從電視觀看世貿倒塌的人都說看得目定口呆，但說時並不覺其哀傷或者震驚比哀傷多。到底是『事不關己』，死掉的儘管人命無數，但非至親至愛，也就不會有切膚之痛，即或哀傷，也是淡淡然的，或者是一種有距離的，一種表現出人之為人應有的道德關懷的哀傷。」

——摘錄自潘國靈〈病辭典〉，載《文學世紀》 第三卷第十二期總第33期，頁23-24`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.4968697,lng:114.1246908}},{type:"疫病記憶與書寫",publication:"軒尼詩道(1)——蔡益懷〈東行電車〉",description:`「坐在電車前排的楚戈回過神來，看到街頭的遊行隊伍，才意識到自己又走神了。電車被困在遊行的人潮中，動彈不得，長長的車龍像一堵牆矗立在軒尼詩道上。滿街都是穿黑衣或白衣的人，他們舉著各種各樣自製的標語牌，『老懵董下台』、『非典危、港人更危；生活難，自由更難；疫症多，狗官更多』、『無能管制，災難綿綿』⋯⋯」

——摘錄自蔡益懷〈東行電車〉，載《香港文學》 2009年10月號總第298期，頁29`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2778264,lng:114.1745977}},{type:"疫病記憶與書寫",publication:"淘大花園(3)——斯華〈口罩回憶錄〉(2004年)",description:`「進入車站大堂那一刻，我突然有如置身衛斯理的世界，因為，很多人都戴了口罩，各人皆幪了面，只露出雙眼。細看之下，口罩有多種顏色，有白色、淺綠、粉藍及灰黑色，真是蔚為奇觀。而款式多為平面長方的，但亦有是立體半蛋殼形的。據說，那是名牌N95型，不過，N95型真的好像豬嘴啊。（有云良藥苦口，好罩當然怪相啦！）哈哈！竟然連Hello Kitty口罩都有，小小的如一方手帕，真佩服Hello Kitty的無孔不入及產品的多元化。（後來回家告訴小女兒，她也說：「我都好想有Kitty口罩啊！」）再看各人佩戴口罩的方法，又是另一奇景，有的拉低口罩至下頷與脖子間，露出鼻子及嘴巴，好像告訴大家，他冇『帶』口罩，不過，是保護頸項而已。又見有些像是掛望遠鏡似的，掛在頸項上。忽然，見身旁的一位女士，一邊耳朵竟吊掛著口罩，飄飄盪盪，有如翡翠耳環，不過不是圓形而已。突然，見一豪氣少年，蒙上純白色口罩，卻有長長闊闊的口罩帶子紮於腦後，配合他的爽快步伐，神色飄逸。我忽然想起荊軻易水送別的一幕，繫於荊軻額上的白絹，飄盪於易水之濱⋯⋯如今回想，那少年可能是乘地鐵到九龍灣站的淘大花園啊！」

——摘錄自斯華〈口罩回憶錄〉，載《浪花》 第三期，頁46-47`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3242034,lng:114.2164511}},{type:"疫病記憶與書寫",publication:"瑪麗醫院——鍾國強〈他說不要怕是說人生再見的時刻〉",description:`「記得那天我帶著女兒到瑪麗
做完一個有關生長激素的測試
交費時卻誤闖癌症中心
看見一群戴著口罩的家屬
團團圍著一個欲言又止的醫生
那時無端便又想起他
他會在我不願多留一刻的走廊
盡頭一處已然謝絕探訪的所在嗎？
離去時看見家屬還不肯散開
像一朵到了某一時段
便會突然向內，逐瓣逐瓣
緊埋斂合的花」

——摘錄自鍾國強〈他說不要怕是說人生再見的時刻〉，載《香港文學》 2009年6月號總第294期，頁92`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2701849,lng:114.1311358}},{type:"疫病記憶與書寫",publication:"文華東方酒店——也斯〈戴上口罩的城市〉(2003年)",description:`「大半個四月在『風繼續吹，不忍遠離⋯』、『讓我做隻路過蜻艇，留下能被懷念過程，虛耗著我便宜生命』、『當年情，再度獻上心思』等傷感的歌聲中渡過，墮樓的文華酒店外擺滿了紀念的鮮花成了一片花海，出殯的日子殯儀館外的街道擠滿了拜祭的人，有從世界各地遠道而來的歌迷和影迷。四月是殘酷的，顯示人的生命是脆弱的，疫症不斷奪去人的生命，受隔離的居民埋怨待遇不佳，市民批評政府的反應不夠迅速，醫管局的官僚限制令保護的物資未能送到所需的人手上，醫護人員也開始受到感染。整個社會的怨氣集中地表達出來，議員又批評政府高層處理不當，主教批評政府趁著疫情嚴峻忙著將影響人權的『廿三條』議案通過⋯⋯社會上的怨聲，配合著一位逝去的歌手的傷感聲音。」

——摘錄自也斯〈戴上口罩的城市〉，載《香江文壇》 總第二十期，頁6-7`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2818572,lng:114.1593819}},{type:"疫病記憶與書寫",publication:"香港科技大學(2)——陳國球〈一個文學教授的獨白〉",description:`「十一年前的暮春，香港陡成鬼域，大學下令停課。我和願意回來的同學，藏身於已無喧鬧之聲的學生活動中心，繼續上下四方、古往今來的言文之旅。瘟疫正蔓延，死神就靠在身旁。文學的光影與線條，在生命中不會寂滅——這是文的德性與力量，我如是說，照著沈從文〈燭虛〉的話本。愛問的同學，有理有據地質疑：那老師把文學帶到淘大花園去吧，可以嗎？當城中只見口罩，不見面容的時候；當百貨商場渺無人蹤的時候，文學能成就些甚麼？記得我手劃口講，從立身到救世，經國不朽，如小乘如大乘的，訴說一通，想到的都搬出來了。事實上，說者之滔滔不竭，旨在消減自己內中的疑慮與不安而已。」

——摘錄自陳國球〈一個文學教授的獨白〉，載《香港文學》 2014年3月號總第351期月刊，頁10`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3363728,lng:114.2659618}},{type:"疫病記憶與書寫",publication:"青山醫院——南海十三郎曾留院於此",description:`「然精神分裂症，需經正式醫治，始可復原，余曾留醫於高街精神病醫院二次，旋醫院遷至青山，余又入青山醫院就醫，雖經過一短時期，即吿痊可，然亦經過電療及藥治，始克吿效。今則精神回復，記憶力依然，而病中景況，依稀可記。曾在筵席上因同席出言不遜，及語言相譏，拂袖而去，謂余故意可，狂放亦可。至四處客居，無一定所，誠有『客舍依稀閒病裏』之感；至故園本為余息影之所，二次大戰後，余即息影家園，閒奉父母，以為可度餘年，不幸而大陸變色，故園已為別人佔據，今且改為盲聾啞學校，眾母及兄弟，均已星散，雖兄弟姊妹及眾母，亦有避居香港過活，然皆處斗室蝸居，與故園之廣闊，一家暢聚之境況已殊，在夢魂中，不勝低徊也。」

——摘錄自南海十三郎，〈客舍依稀閒病裏 故園今在夢魂中〉，載朱少璋編：《小蘭齋雜記：小蘭齋王隨筆》，頁131-132`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.4099002,lng:113.9737648}},{type:"疫病記憶與書寫",publication:"高街精神病院舊址(2)——南海十三郎曾留院於此",description:`「吟嘯生涯與填詞撰曲，同樣遣興，文章怡情，詩懷益健，友人謂余精神仍未復原，囑余每日至高街精神病診療所，晝日療養院調養，日間無聊，撰稿自遣。余少年抱負，以文章問世，嘗寫作戲劇，大多側重詞藻，樂而不淫，哀而不傷，一貫初衷既不能立功立德，亦當立言誨世，或藉六朝金粉，或寫歷古江山，雄壯處動人神魄，感慨處可歌可泣，雖遊戲文章，亦覺吟嘯生涯，別有抱負。」

——摘錄自南海十三郎，〈吟嘯生涯舒抱負 繪描草木寄閒情〉，載朱少璋編：《小蘭齋雜記：小蘭齋王隨筆》，頁137`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2848825,lng:114.144312}},{type:"疫病記憶與書寫",publication:"畢打街——李金鳳〈路上札〉(1992年)",description:`「中環畢打街那有名的三岔口，不啻是個汪洋。在留強汰弱的設計理念中，路面那幅不准停留的黃色方格，對老弱傷殘者，就算是泥足深陷的法網。五時不過一刻，下班的人群像十號飓風的波浪，各往三岔口爭相推湧，我自從得了病，走路艱難，只能緩緩踏步。落在狂潮之中，我覺得像脆弱的舢舨。綠燈轉眼達達地閃耀起來，忽然，我發現人潮不知幾時已經各自登陸了，只剩下我一個在大張口的黃格上彳亍蠕行。幾個燈區的行人道上重新積聚萬頭鑽動，吐火的眼睛洶湧地瞅着對街的紅綠燈訊號——我倏地得了浮桴過海的樂趣，天大地大，與人無爭了。」

——摘錄自李金鳳〈路上札〉，載《天使與我同路》，頁41-42`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2816392,lng:114.1572238}},{type:"疫病記憶與書寫",publication:"柴灣道——黃秀蓮〈柴灣道上看花看樹憶沙士〉(2004年)",description:`「這渡假營，立於小山之巔，地勢優越，遼視野，海景入目，清波淼淼，而且嘉木成林，鳥語花香，建築寬敞，乃前殖民時代的軍營，後來殖民氣息淡出，而成後殖民時代的渡假勝地，再而一度為特區時代的隔離營，多少滄桑，幾許風雨，說不盡的歷史故憶，忘不了的沙士憂驚。而營地依舊一派英式典雅，淡黃外牆，天藍木窗，悠然立在柴灣道，立在城市邊緣，風雨之後，更見堅牢。」

——摘錄自黃秀蓮〈柴灣道上看花看樹憶沙士〉，載《明報》 D6版，2004-04-27`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.2698137,lng:114.2337894}},{type:"疫病記憶與書寫",publication:"彌敦道(7)——黃碧雲《烈女圖》(1999年)",description:`「你婆婆老母初來香港，上海街，廣東道，新填地街都是海，只得廟街一條街。彌敦道是山。那時候，下午不可以睡覺，鬼佬會來查屋。見你睡覺，以爲你病，就拉你去，打死人針，醫死你。洗太平地，怕有病，家家户户拿床去浸臭水。一個大鐵桶，床板木板，拿進去浸。鬼佬查屋會聞，如無臭水，就要拿床板去洗。你婆婆宋香用臭水抹落床板上，就不用洗。你婆婆宋香小時候都没有彌敦道。你婆婆老母話，佐敦道火船尾，以前是差館。那處有一個圓環，可以擺車仔。潮洲人在賣補保涼糖水，一個仙一碗。潮洲粉絲，潮洲餅仔，使錢仔買。八歲大，五個錢一大包，你婆婆最中意食山楂。
沖涼利民興阿姨打你婆婆宋香，要用藥水沖涼，三歲大，你婆婆宋香哭，用個好大木桶沖涼，有病老鼠，咬肢窩，死好多人。一個晚頭黑，可以死好多人。」

——摘錄自黃碧雲《烈女圖》，頁47-48`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3100145,lng:114.1711516}},{type:"疫病記憶與書寫",publication:"廣華醫院——黃碧雲《烈女圖》(1999年)",description:`「賤骨頭，你婆婆宋香叫老頭送她去醫院，他説，不出三天就要埋尾。廣華醫院，老虎口，有入的没出的。舊時廣華醫院，舊廣華在舊青年會，廣華醫院好邋遢，三元一天私家房。枕頭處抬屍抬到天亮，没得救的，你婆婆給兩元阿嬌，擔床板睡到你婆婆面前，你婆婆成晚見鬼。成姑娘，穿藍裙，會講鬼話，晚晚叫鬼，不要吵，病人要睡覺。你見醫生呀，陸姑娘説，你好見不見，見殺人王。他逢人宰，你看那人多大隻，牙痛，一宰就死了，嚇得你婆婆宋香立刻要出院，跟男人説，我要出院，他説，你再進來我就不理你。你婆婆宋香不要打針，打死人針，慢性針，好得人驚，你婆婆不打。給藥你婆婆吃，宋香不要吃。你婆婆不肯打針不肯吃藥，出院找數，三元一天，住在殮房門口，你婆婆穿着那些白衣，全脫了，你婆婆宋香穿自己的衣服。宋香去輪籌看醫生，姑娘説，你爲甚麽把衣服脱了，你穿好。」

——摘錄自黃碧雲《烈女圖》，頁69`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3151818,lng:114.1724134}},{type:"疫病記憶與書寫",publication:"九龍醫院——李英豪〈陡長的梯級〉(1986年)",description:`「昨天下午在九龍醫院的斜坡入口處，又看見那個摻扶柺杖的駝子，一步一步走近那道陡長的梯級。他，一個人，不知道從那個彎角拐過來，吃力地把右邊的柺杖，放到左手那邊挾着，右手緊緊握住扶手，蠻費勁地提起一條廢了的腿子，踏上第一級；然後，利用兩根柺杖把一邊身體撐起，使另一條腿子也踏上去，顫巍巍，搖搖欲墜；身體再俯前，才挪動兩根柺杖到第一級。
他沒有絲毫懊惱或頹喪，也沒有放棄的念頭，晃擺的殘缺矮曲身體顯得堅定。每一級石階，他以大同小異的動作攀援而上，異常艱苦吃力。我不敢想像，他怎樣可以靠自己攀上這麼多層梯級。我沒有細數，陡斜的梯級縱使不到一百之數，也有幾十。他何來這種堅毅？爲什麼他不乘坐的士，不是省時省力麼？沒有錢？爲了省車資？還是他在試煉着人生艱苦的『攀登』過程？
上週末我看見他掙扎了好幾級，忍不住跑過去，說願意用停在附近的車子送他上去。他笑笑，搖搖頭，表示感謝我的關心。我說幫幫他忙，扶助他上這些梯級，他同樣笑笑，搖搖頭，眼神中顯出必須要自己獨力應付這道陡長的梯級，不倚靠任何人。他不是怕人憐憫或不肯接受他人的好意，而是他要自己接受磨煉與挑戰，發出內心的力量。」

——摘錄自李英豪〈陡長的梯級〉，載《山外有山》，頁151`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3246172,lng:114.1814018}}],fu=It.createContext({}),P3=({children:e})=>{const[t,i]=E.useState(k3),o=E.useCallback(a=>{i(u=>({...u,availableTypes:{...u.availableTypes,[a]:!u.availableTypes[a]}}))},[i]),s=E.useCallback(a=>{i(u=>({...u,searchString:a}))},[i]);return F.jsx(fu.Provider,{value:{...t,entries:C3.filter(a=>t.availableTypes[a.type]).filter(a=>t.searchString===""||a.publication.includes(t.searchString)||a.description.includes(t.searchString)),toggleTypeAvailability:o,setSearchString:s},children:e})},k3={availableTypes:{文藝刊物及組織:!0,地景書寫:!0,作家及讀者足迹:!0,疫病記憶與書寫:!0},searchString:""},T3=()=>{const{entries:e}=E.useContext(fu),t=E.useRef({initialCenter:{lat:22.349983,lng:114.112759},center:{lat:22.349983,lng:114.112759}});return F.jsx(oy,{sx:L3,children:F.jsxs(x3,{center:t.current.initialCenter,zoom:11,scrollWheelZoom:!1,style:{height:"100vh"},zoomControl:!1,children:[F.jsx(E3,{crossOrigin:"anonymous",detectRetina:!0,maxZoom:r3.Browser.retina?20:19,maxNativeZoom:18,keepBuffer:10,updateWhenIdle:!0,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',url:"https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"}),F.jsx(S3,{position:"bottomleft"}),e.map(i=>F.jsx(w3,{position:i.coordinate,children:F.jsxs(b3,{children:[F.jsx(B1,{variant:"h6",children:i.publication}),F.jsx(B1,{variant:"body1",children:i.description})]})},i.publication))]})})},L3={overflow:"clip"},M3=jf(F.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlankOutlined"),im=jf(F.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"}),"CheckBoxOutlined"),R3=["文藝刊物及組織","地景書寫","作家及讀者足迹","疫病記憶與書寫"],I3=()=>{const{availableTypes:e,toggleTypeAvailability:t}=E.useContext(fu),[i,o]=E.useState(null),s=!!i,a=d=>{o(d.currentTarget)},u=()=>{o(null)};return F.jsxs(F.Fragment,{children:[F.jsx(D5,{variant:"contained",startIcon:F.jsx(im,{}),"aria-controls":s?"type-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:a,children:"類型"}),F.jsx(py,{id:"type-menu",anchorEl:i,open:s,onClose:()=>u(),children:R3.map(d=>F.jsxs(yE,{onClick:()=>t(d),children:[e[d]?F.jsx(im,{}):F.jsx(M3,{})," ",d]},d))})]})};var O3="Expected a function",om=0/0,z3="[object Symbol]",A3=/^\s+|\s+$/g,U3=/^[-+]0x[0-9a-f]+$/i,N3=/^0b[01]+$/i,F3=/^0o[0-7]+$/i,B3=parseInt,$3=typeof Ar=="object"&&Ar&&Ar.Object===Object&&Ar,D3=typeof self=="object"&&self&&self.Object===Object&&self,j3=$3||D3||Function("return this")(),W3=Object.prototype,H3=W3.toString,Z3=Math.max,V3=Math.min,xc=function(){return j3.Date.now()};function K3(e,t,i){var o,s,a,u,d,f,h=0,v=!1,g=!1,x=!0;if(typeof e!="function")throw new TypeError(O3);t=rm(t)||0,kd(i)&&(v=!!i.leading,g="maxWait"in i,a=g?Z3(rm(i.maxWait)||0,t):a,x="trailing"in i?!!i.trailing:x);function P(I){var R=o,N=s;return o=s=void 0,h=I,u=e.apply(N,R),u}function S(I){return h=I,d=setTimeout(w,t),v?P(I):u}function b(I){var R=I-f,N=I-h,K=t-R;return g?V3(K,a-N):K}function A(I){var R=I-f,N=I-h;return f===void 0||R>=t||R<0||g&&N>=a}function w(){var I=xc();if(A(I))return y(I);d=setTimeout(w,b(I))}function y(I){return d=void 0,x&&o?P(I):(o=s=void 0,u)}function _(){d!==void 0&&clearTimeout(d),h=0,o=f=s=d=void 0}function C(){return d===void 0?u:y(xc())}function M(){var I=xc(),R=A(I);if(o=arguments,s=this,f=I,R){if(d===void 0)return S(f);if(g)return d=setTimeout(w,t),P(f)}return d===void 0&&(d=setTimeout(w,t)),u}return M.cancel=_,M.flush=C,M}function kd(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function G3(e){return!!e&&typeof e=="object"}function q3(e){return typeof e=="symbol"||G3(e)&&H3.call(e)==z3}function rm(e){if(typeof e=="number")return e;if(q3(e))return om;if(kd(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=kd(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(A3,"");var i=N3.test(e);return i||F3.test(e)?B3(e.slice(2),i?2:8):U3.test(e)?om:+e}var Y3=K3;const Q3=sl(Y3),X3=()=>{const[e,t]=E.useState(""),{setSearchString:i}=E.useContext(fu),o=E.useCallback(Q3(s=>{i(s)},500),[i]);return E.useEffect(()=>{o(e)},[o,e]),F.jsx(o3,{variant:"standard",placeholder:"輪入關鍵字",onChange:({target:{value:s}})=>t(s),value:e})},J3=()=>F.jsxs(oy,{sx:eS,children:[F.jsx(I3,{}),F.jsx(X3,{})]}),eS={position:"fixed",display:"flex",m:1,overflowX:"scroll",gap:1,width:"100vw",whiteSpace:"nowrap",pointerEvents:"none","> *":{pointerEvents:"auto"},"& button":{mx:1},"&::-webkit-scrollbar":{display:"none"},msOverflowStyle:"none",scrollbarWidth:"none",zIndex:1e3};function tS(){const e=E.useMemo(()=>$f(),[]);return F.jsx(Db,{theme:e,children:F.jsxs(P3,{children:[F.jsx(J3,{}),F.jsx(T3,{})]})})}bc.createRoot(document.getElementById("root")).render(F.jsx(It.StrictMode,{children:F.jsx(tS,{})}));
