function p_(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(o,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function o(){return this instanceof o?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(o){var a=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:function(){return e[o]}})}),n}var _1={exports:{}},pl={},x1={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),h_=Symbol.for("react.portal"),m_=Symbol.for("react.fragment"),g_=Symbol.for("react.strict_mode"),y_=Symbol.for("react.profiler"),v_=Symbol.for("react.provider"),__=Symbol.for("react.context"),x_=Symbol.for("react.forward_ref"),b_=Symbol.for("react.suspense"),w_=Symbol.for("react.memo"),E_=Symbol.for("react.lazy"),lh=Symbol.iterator;function C_(e){return e===null||typeof e!="object"?null:(e=lh&&e[lh]||e["@@iterator"],typeof e=="function"?e:null)}var b1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w1=Object.assign,E1={};function ir(e,t,n){this.props=e,this.context=t,this.refs=E1,this.updater=n||b1}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function C1(){}C1.prototype=ir.prototype;function Ad(e,t,n){this.props=e,this.context=t,this.refs=E1,this.updater=n||b1}var zd=Ad.prototype=new C1;zd.constructor=Ad;w1(zd,ir.prototype);zd.isPureReactComponent=!0;var uh=Array.isArray,S1=Object.prototype.hasOwnProperty,Ud={current:null},k1={key:!0,ref:!0,__self:!0,__source:!0};function P1(e,t,n){var o,a={},r=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(r=""+t.key),t)S1.call(t,o)&&!k1.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(c===1)a.children=n;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];a.children=d}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)a[o]===void 0&&(a[o]=c[o]);return{$$typeof:Es,type:e,key:r,ref:l,props:a,_owner:Ud.current}}function S_(e,t){return{$$typeof:Es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nd(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function k_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ch=/\/+/g;function Wu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?k_(""+e.key):t.toString(36)}function xa(e,t,n,o,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Es:case h_:l=!0}}if(l)return l=e,a=a(l),e=o===""?"."+Wu(l,0):o,uh(a)?(n="",e!=null&&(n=e.replace(ch,"$&/")+"/"),xa(a,t,n,"",function(p){return p})):a!=null&&(Nd(a)&&(a=S_(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(ch,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=o===""?".":o+":",uh(e))for(var c=0;c<e.length;c++){r=e[c];var d=o+Wu(r,c);l+=xa(r,t,n,d,a)}else if(d=C_(e),typeof d=="function")for(e=d.call(e),c=0;!(r=e.next()).done;)r=r.value,d=o+Wu(r,c++),l+=xa(r,t,n,d,a);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Js(e,t,n){if(e==null)return e;var o=[],a=0;return xa(e,o,"","",function(r){return t.call(n,r,a++)}),o}function P_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var zt={current:null},ba={transition:null},L_={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:ba,ReactCurrentOwner:Ud};ye.Children={map:Js,forEach:function(e,t,n){Js(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Js(e,function(){t++}),t},toArray:function(e){return Js(e,function(t){return t})||[]},only:function(e){if(!Nd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=ir;ye.Fragment=m_;ye.Profiler=y_;ye.PureComponent=Ad;ye.StrictMode=g_;ye.Suspense=b_;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_;ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=w1({},e.props),a=e.key,r=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,l=Ud.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)S1.call(t,d)&&!k1.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=n;else if(1<d){c=Array(d);for(var p=0;p<d;p++)c[p]=arguments[p+2];o.children=c}return{$$typeof:Es,type:e.type,key:a,ref:r,props:o,_owner:l}};ye.createContext=function(e){return e={$$typeof:__,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:v_,_context:e},e.Consumer=e};ye.createElement=P1;ye.createFactory=function(e){var t=P1.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:x_,render:e}};ye.isValidElement=Nd;ye.lazy=function(e){return{$$typeof:E_,_payload:{_status:-1,_result:e},_init:P_}};ye.memo=function(e,t){return{$$typeof:w_,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=ba.transition;ba.transition={};try{e()}finally{ba.transition=t}};ye.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ye.useCallback=function(e,t){return zt.current.useCallback(e,t)};ye.useContext=function(e){return zt.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return zt.current.useDeferredValue(e)};ye.useEffect=function(e,t){return zt.current.useEffect(e,t)};ye.useId=function(){return zt.current.useId()};ye.useImperativeHandle=function(e,t,n){return zt.current.useImperativeHandle(e,t,n)};ye.useInsertionEffect=function(e,t){return zt.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return zt.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return zt.current.useMemo(e,t)};ye.useReducer=function(e,t,n){return zt.current.useReducer(e,t,n)};ye.useRef=function(e){return zt.current.useRef(e)};ye.useState=function(e){return zt.current.useState(e)};ye.useSyncExternalStore=function(e,t,n){return zt.current.useSyncExternalStore(e,t,n)};ye.useTransition=function(){return zt.current.useTransition()};ye.version="18.2.0";x1.exports=ye;var S=x1.exports;const It=dl(S),kc=p_({__proto__:null,default:It},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_=S,M_=Symbol.for("react.element"),O_=Symbol.for("react.fragment"),I_=Object.prototype.hasOwnProperty,R_=T_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A_={key:!0,ref:!0,__self:!0,__source:!0};function L1(e,t,n){var o,a={},r=null,l=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)I_.call(t,o)&&!A_.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:M_,type:e,key:r,ref:l,props:a,_owner:R_.current}}pl.Fragment=O_;pl.jsx=L1;pl.jsxs=L1;_1.exports=pl;var B=_1.exports,Pc={},T1={exports:{}},en={},M1={exports:{}},O1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var F=z.length;z.push(V);e:for(;0<F;){var J=F-1>>>1,se=z[J];if(0<a(se,V))z[J]=V,z[F]=se,F=J;else break e}}function n(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var V=z[0],F=z.pop();if(F!==V){z[0]=F;e:for(var J=0,se=z.length,pe=se>>>1;J<pe;){var ne=2*(J+1)-1,ie=z[ne],Q=ne+1,Te=z[Q];if(0>a(ie,F))Q<se&&0>a(Te,ie)?(z[J]=Te,z[Q]=F,J=Q):(z[J]=ie,z[ne]=F,J=ne);else if(Q<se&&0>a(Te,F))z[J]=Te,z[Q]=F,J=Q;else break e}}return V}function a(z,V){var F=z.sortIndex-V.sortIndex;return F!==0?F:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],p=[],g=1,m=null,y=3,_=!1,C=!1,E=!1,R=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(z){for(var V=n(p);V!==null;){if(V.callback===null)o(p);else if(V.startTime<=z)o(p),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(p)}}function k(z){if(E=!1,w(z),!C)if(n(d)!==null)C=!0,W(T);else{var V=n(p);V!==null&&K(k,V.startTime-z)}}function T(z,V){C=!1,E&&(E=!1,x(N),N=-1),_=!0;var F=y;try{for(w(V),m=n(d);m!==null&&(!(m.expirationTime>V)||z&&!Z());){var J=m.callback;if(typeof J=="function"){m.callback=null,y=m.priorityLevel;var se=J(m.expirationTime<=V);V=e.unstable_now(),typeof se=="function"?m.callback=se:m===n(d)&&o(d),w(V)}else o(d);m=n(d)}if(m!==null)var pe=!0;else{var ne=n(p);ne!==null&&K(k,ne.startTime-V),pe=!1}return pe}finally{m=null,y=F,_=!1}}var I=!1,O=null,N=-1,G=5,$=-1;function Z(){return!(e.unstable_now()-$<G)}function ee(){if(O!==null){var z=e.unstable_now();$=z;var V=!0;try{V=O(!0,z)}finally{V?te():(I=!1,O=null)}}else I=!1}var te;if(typeof b=="function")te=function(){b(ee)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,q=H.port2;H.port1.onmessage=ee,te=function(){q.postMessage(null)}}else te=function(){R(ee,0)};function W(z){O=z,I||(I=!0,te())}function K(z,V){N=R(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){C||_||(C=!0,W(T))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(z){switch(y){case 1:case 2:case 3:var V=3;break;default:V=y}var F=y;y=V;try{return z()}finally{y=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=y;y=z;try{return V()}finally{y=F}},e.unstable_scheduleCallback=function(z,V,F){var J=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?J+F:J):F=J,z){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=F+se,z={id:g++,callback:V,priorityLevel:z,startTime:F,expirationTime:se,sortIndex:-1},F>J?(z.sortIndex=F,t(p,z),n(d)===null&&z===n(p)&&(E?(x(N),N=-1):E=!0,K(k,F-J))):(z.sortIndex=se,t(d,z),C||_||(C=!0,W(T))),z},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(z){var V=y;return function(){var F=y;y=V;try{return z.apply(this,arguments)}finally{y=F}}}})(O1);M1.exports=O1;var z_=M1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1=S,Jt=z_;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R1=new Set,ns={};function oo(e,t){Go(e,t),Go(e+"Capture",t)}function Go(e,t){for(ns[e]=t,e=0;e<t.length;e++)R1.add(t[e])}var ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=Object.prototype.hasOwnProperty,U_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dh={},fh={};function N_(e){return Lc.call(fh,e)?!0:Lc.call(dh,e)?!1:U_.test(e)?fh[e]=!0:(dh[e]=!0,!1)}function B_(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function F_(e,t,n,o){if(t===null||typeof t>"u"||B_(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ut(e,t,n,o,a,r,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=l}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xt[e]=new Ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xt[t]=new Ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xt[e]=new Ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xt[e]=new Ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xt[e]=new Ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xt[e]=new Ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xt[e]=new Ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xt[e]=new Ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xt[e]=new Ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function Fd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bd,Fd);xt[t]=new Ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bd,Fd);xt[t]=new Ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bd,Fd);xt[t]=new Ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xt[e]=new Ut(e,1,!1,e.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xt[e]=new Ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function $d(e,t,n,o){var a=xt.hasOwnProperty(t)?xt[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(F_(t,n,a,o)&&(n=null),o||a===null?N_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var si=I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ea=Symbol.for("react.element"),So=Symbol.for("react.portal"),ko=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),A1=Symbol.for("react.provider"),z1=Symbol.for("react.context"),jd=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),fi=Symbol.for("react.lazy"),U1=Symbol.for("react.offscreen"),ph=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=ph&&e[ph]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Vu;function Br(e){if(Vu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vu=t&&t[1]||""}return`
`+Vu+e}var Gu=!1;function Ku(e,t){if(!e||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var o=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){o=p}e.call(t.prototype)}else{try{throw Error()}catch(p){o=p}e()}}catch(p){if(p&&o&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),r=o.stack.split(`
`),l=a.length-1,c=r.length-1;1<=l&&0<=c&&a[l]!==r[c];)c--;for(;1<=l&&0<=c;l--,c--)if(a[l]!==r[c]){if(l!==1||c!==1)do if(l--,c--,0>c||a[l]!==r[c]){var d=`
`+a[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function $_(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=Ku(e.type,!1),e;case 11:return e=Ku(e.type.render,!1),e;case 1:return e=Ku(e.type,!0),e;default:return""}}function Ic(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ko:return"Fragment";case So:return"Portal";case Tc:return"Profiler";case Dd:return"StrictMode";case Mc:return"Suspense";case Oc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case z1:return(e.displayName||"Context")+".Consumer";case A1:return(e._context.displayName||"Context")+".Provider";case jd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hd:return t=e.displayName||null,t!==null?t:Ic(e.type)||"Memo";case fi:t=e._payload,e=e._init;try{return Ic(e(t))}catch{}}return null}function D_(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(t);case 8:return t===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ki(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function N1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j_(e){var t=N1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){o=""+l,r.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ta(e){e._valueTracker||(e._valueTracker=j_(e))}function B1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=N1(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rc(e,t){var n=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hh(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ki(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function F1(e,t){t=t.checked,t!=null&&$d(e,"checked",t,!1)}function Ac(e,t){F1(e,t);var n=ki(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?zc(e,t.type,n):t.hasOwnProperty("defaultValue")&&zc(e,t.type,ki(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function zc(e,t,n){(t!=="number"||za(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function Fo(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ki(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Uc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Fr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ki(n)}}function $1(e,t){var n=ki(t.value),o=ki(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function yh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function D1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?D1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var na,j1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(na=na||document.createElement("div"),na.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=na.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function is(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H_=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){H_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function H1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function Z1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=H1(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Z_=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bc(e,t){if(t){if(Z_[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Fc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function Zd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dc=null,$o=null,Do=null;function vh(e){if(e=ks(e)){if(typeof Dc!="function")throw Error(j(280));var t=e.stateNode;t&&(t=vl(t),Dc(e.stateNode,e.type,t))}}function W1(e){$o?Do?Do.push(e):Do=[e]:$o=e}function V1(){if($o){var e=$o,t=Do;if(Do=$o=null,vh(e),t)for(e=0;e<t.length;e++)vh(t[e])}}function G1(e,t){return e(t)}function K1(){}var qu=!1;function q1(e,t,n){if(qu)return e(t,n);qu=!0;try{return G1(e,t,n)}finally{qu=!1,($o!==null||Do!==null)&&(K1(),V1())}}function os(e,t){var n=e.stateNode;if(n===null)return null;var o=vl(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var jc=!1;if(ti)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){jc=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{jc=!1}function W_(e,t,n,o,a,r,l,c,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(g){this.onError(g)}}var Zr=!1,Ua=null,Na=!1,Hc=null,V_={onError:function(e){Zr=!0,Ua=e}};function G_(e,t,n,o,a,r,l,c,d){Zr=!1,Ua=null,W_.apply(V_,arguments)}function K_(e,t,n,o,a,r,l,c,d){if(G_.apply(this,arguments),Zr){if(Zr){var p=Ua;Zr=!1,Ua=null}else throw Error(j(198));Na||(Na=!0,Hc=p)}}function ro(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Y1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _h(e){if(ro(e)!==e)throw Error(j(188))}function q_(e){var t=e.alternate;if(!t){if(t=ro(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return _h(a),e;if(r===o)return _h(a),t;r=r.sibling}throw Error(j(188))}if(n.return!==o.return)n=a,o=r;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,o=r;break}if(c===o){l=!0,o=a,n=r;break}c=c.sibling}if(!l){for(c=r.child;c;){if(c===n){l=!0,n=r,o=a;break}if(c===o){l=!0,o=r,n=a;break}c=c.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==o)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Q1(e){return e=q_(e),e!==null?X1(e):null}function X1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=X1(e);if(t!==null)return t;e=e.sibling}return null}var J1=Jt.unstable_scheduleCallback,xh=Jt.unstable_cancelCallback,Y_=Jt.unstable_shouldYield,Q_=Jt.unstable_requestPaint,it=Jt.unstable_now,X_=Jt.unstable_getCurrentPriorityLevel,Wd=Jt.unstable_ImmediatePriority,eg=Jt.unstable_UserBlockingPriority,Ba=Jt.unstable_NormalPriority,J_=Jt.unstable_LowPriority,tg=Jt.unstable_IdlePriority,hl=null,Dn=null;function e2(e){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:i2,t2=Math.log,n2=Math.LN2;function i2(e){return e>>>=0,e===0?32:31-(t2(e)/n2|0)|0}var ia=64,oa=4194304;function $r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fa(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,r=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~a;c!==0?o=$r(c):(r&=l,r!==0&&(o=$r(r)))}else l=n&~a,l!==0?o=$r(l):r!==0&&(o=$r(r));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,r=t&-t,a>=r||a===16&&(r&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Sn(t),a=1<<n,o|=e[n],t&=~a;return o}function o2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r2(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes;0<r;){var l=31-Sn(r),c=1<<l,d=a[l];d===-1?(!(c&n)||c&o)&&(a[l]=o2(c,t)):d<=t&&(e.expiredLanes|=c),r&=~c}}function Zc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ng(){var e=ia;return ia<<=1,!(ia&4194240)&&(ia=64),e}function Yu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Cs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Sn(t),e[t]=n}function s2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Sn(n),r=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~r}}function Vd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Sn(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var Oe=0;function ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var og,Gd,rg,sg,ag,Wc=!1,ra=[],vi=null,_i=null,xi=null,rs=new Map,ss=new Map,hi=[],a2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(e,t){switch(e){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(t.pointerId)}}function Sr(e,t,n,o,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:r,targetContainers:[a]},t!==null&&(t=ks(t),t!==null&&Gd(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function l2(e,t,n,o,a){switch(t){case"focusin":return vi=Sr(vi,e,t,n,o,a),!0;case"dragenter":return _i=Sr(_i,e,t,n,o,a),!0;case"mouseover":return xi=Sr(xi,e,t,n,o,a),!0;case"pointerover":var r=a.pointerId;return rs.set(r,Sr(rs.get(r)||null,e,t,n,o,a)),!0;case"gotpointercapture":return r=a.pointerId,ss.set(r,Sr(ss.get(r)||null,e,t,n,o,a)),!0}return!1}function lg(e){var t=Hi(e.target);if(t!==null){var n=ro(t);if(n!==null){if(t=n.tag,t===13){if(t=Y1(n),t!==null){e.blockedOn=t,ag(e.priority,function(){rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);$c=o,n.target.dispatchEvent(o),$c=null}else return t=ks(n),t!==null&&Gd(t),e.blockedOn=n,!1;t.shift()}return!0}function wh(e,t,n){wa(e)&&n.delete(t)}function u2(){Wc=!1,vi!==null&&wa(vi)&&(vi=null),_i!==null&&wa(_i)&&(_i=null),xi!==null&&wa(xi)&&(xi=null),rs.forEach(wh),ss.forEach(wh)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wc||(Wc=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,u2)))}function as(e){function t(a){return kr(a,e)}if(0<ra.length){kr(ra[0],e);for(var n=1;n<ra.length;n++){var o=ra[n];o.blockedOn===e&&(o.blockedOn=null)}}for(vi!==null&&kr(vi,e),_i!==null&&kr(_i,e),xi!==null&&kr(xi,e),rs.forEach(t),ss.forEach(t),n=0;n<hi.length;n++)o=hi[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<hi.length&&(n=hi[0],n.blockedOn===null);)lg(n),n.blockedOn===null&&hi.shift()}var jo=si.ReactCurrentBatchConfig,$a=!0;function c2(e,t,n,o){var a=Oe,r=jo.transition;jo.transition=null;try{Oe=1,Kd(e,t,n,o)}finally{Oe=a,jo.transition=r}}function d2(e,t,n,o){var a=Oe,r=jo.transition;jo.transition=null;try{Oe=4,Kd(e,t,n,o)}finally{Oe=a,jo.transition=r}}function Kd(e,t,n,o){if($a){var a=Vc(e,t,n,o);if(a===null)sc(e,t,o,Da,n),bh(e,o);else if(l2(a,e,t,n,o))o.stopPropagation();else if(bh(e,o),t&4&&-1<a2.indexOf(e)){for(;a!==null;){var r=ks(a);if(r!==null&&og(r),r=Vc(e,t,n,o),r===null&&sc(e,t,o,Da,n),r===a)break;a=r}a!==null&&o.stopPropagation()}else sc(e,t,o,null,n)}}var Da=null;function Vc(e,t,n,o){if(Da=null,e=Zd(o),e=Hi(e),e!==null)if(t=ro(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Y1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Da=e,null}function ug(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X_()){case Wd:return 1;case eg:return 4;case Ba:case J_:return 16;case tg:return 536870912;default:return 16}default:return 16}}var gi=null,qd=null,Ea=null;function cg(){if(Ea)return Ea;var e,t=qd,n=t.length,o,a="value"in gi?gi.value:gi.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(o=1;o<=l&&t[n-o]===a[r-o];o++);return Ea=a.slice(e,1<o?1-o:void 0)}function Ca(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sa(){return!0}function Eh(){return!1}function tn(e){function t(n,o,a,r,l){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=r,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?sa:Eh,this.isPropagationStopped=Eh,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=tn(or),Ss=Ge({},or,{view:0,detail:0}),f2=tn(Ss),Qu,Xu,Pr,ml=Ge({},Ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Qu=e.screenX-Pr.screenX,Xu=e.screenY-Pr.screenY):Xu=Qu=0,Pr=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Xu}}),Ch=tn(ml),p2=Ge({},ml,{dataTransfer:0}),h2=tn(p2),m2=Ge({},Ss,{relatedTarget:0}),Ju=tn(m2),g2=Ge({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),y2=tn(g2),v2=Ge({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_2=tn(v2),x2=Ge({},or,{data:0}),Sh=tn(x2),b2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E2[e])?!!t[e]:!1}function Qd(){return C2}var S2=Ge({},Ss,{key:function(e){if(e.key){var t=b2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ca(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?w2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(e){return e.type==="keypress"?Ca(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ca(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),k2=tn(S2),P2=Ge({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kh=tn(P2),L2=Ge({},Ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),T2=tn(L2),M2=Ge({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),O2=tn(M2),I2=Ge({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R2=tn(I2),A2=[9,13,27,32],Xd=ti&&"CompositionEvent"in window,Wr=null;ti&&"documentMode"in document&&(Wr=document.documentMode);var z2=ti&&"TextEvent"in window&&!Wr,dg=ti&&(!Xd||Wr&&8<Wr&&11>=Wr),Ph=String.fromCharCode(32),Lh=!1;function fg(e,t){switch(e){case"keyup":return A2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Po=!1;function U2(e,t){switch(e){case"compositionend":return pg(t);case"keypress":return t.which!==32?null:(Lh=!0,Ph);case"textInput":return e=t.data,e===Ph&&Lh?null:e;default:return null}}function N2(e,t){if(Po)return e==="compositionend"||!Xd&&fg(e,t)?(e=cg(),Ea=qd=gi=null,Po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dg&&t.locale!=="ko"?null:t.data;default:return null}}var B2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B2[e.type]:t==="textarea"}function hg(e,t,n,o){W1(o),t=ja(t,"onChange"),0<t.length&&(n=new Yd("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Vr=null,ls=null;function F2(e){Sg(e,0)}function gl(e){var t=Mo(e);if(B1(t))return e}function $2(e,t){if(e==="change")return t}var mg=!1;if(ti){var ec;if(ti){var tc="oninput"in document;if(!tc){var Mh=document.createElement("div");Mh.setAttribute("oninput","return;"),tc=typeof Mh.oninput=="function"}ec=tc}else ec=!1;mg=ec&&(!document.documentMode||9<document.documentMode)}function Oh(){Vr&&(Vr.detachEvent("onpropertychange",gg),ls=Vr=null)}function gg(e){if(e.propertyName==="value"&&gl(ls)){var t=[];hg(t,ls,e,Zd(e)),q1(F2,t)}}function D2(e,t,n){e==="focusin"?(Oh(),Vr=t,ls=n,Vr.attachEvent("onpropertychange",gg)):e==="focusout"&&Oh()}function j2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(ls)}function H2(e,t){if(e==="click")return gl(t)}function Z2(e,t){if(e==="input"||e==="change")return gl(t)}function W2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pn=typeof Object.is=="function"?Object.is:W2;function us(e,t){if(Pn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Lc.call(t,a)||!Pn(e[a],t[a]))return!1}return!0}function Ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rh(e,t){var n=Ih(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function yg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vg(){for(var e=window,t=za();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=za(e.document)}return t}function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function V2(e){var t=vg(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yg(n.ownerDocument.documentElement,n)){if(o!==null&&Jd(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,r=Math.min(o.start,a);o=o.end===void 0?r:Math.min(o.end,a),!e.extend&&r>o&&(a=o,o=r,r=a),a=Rh(n,r);var l=Rh(n,o);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),r>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G2=ti&&"documentMode"in document&&11>=document.documentMode,Lo=null,Gc=null,Gr=null,Kc=!1;function Ah(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kc||Lo==null||Lo!==za(o)||(o=Lo,"selectionStart"in o&&Jd(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Gr&&us(Gr,o)||(Gr=o,o=ja(Gc,"onSelect"),0<o.length&&(t=new Yd("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Lo)))}function aa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var To={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},nc={},_g={};ti&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function yl(e){if(nc[e])return nc[e];if(!To[e])return e;var t=To[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _g)return nc[e]=t[n];return e}var xg=yl("animationend"),bg=yl("animationiteration"),wg=yl("animationstart"),Eg=yl("transitionend"),Cg=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(e,t){Cg.set(e,t),oo(t,[e])}for(var ic=0;ic<zh.length;ic++){var oc=zh[ic],K2=oc.toLowerCase(),q2=oc[0].toUpperCase()+oc.slice(1);Ti(K2,"on"+q2)}Ti(xg,"onAnimationEnd");Ti(bg,"onAnimationIteration");Ti(wg,"onAnimationStart");Ti("dblclick","onDoubleClick");Ti("focusin","onFocus");Ti("focusout","onBlur");Ti(Eg,"onTransitionEnd");Go("onMouseEnter",["mouseout","mouseover"]);Go("onMouseLeave",["mouseout","mouseover"]);Go("onPointerEnter",["pointerout","pointerover"]);Go("onPointerLeave",["pointerout","pointerover"]);oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Uh(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,K_(o,t,void 0,e),e.currentTarget=null}function Sg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var r=void 0;if(t)for(var l=o.length-1;0<=l;l--){var c=o[l],d=c.instance,p=c.currentTarget;if(c=c.listener,d!==r&&a.isPropagationStopped())break e;Uh(a,c,p),r=d}else for(l=0;l<o.length;l++){if(c=o[l],d=c.instance,p=c.currentTarget,c=c.listener,d!==r&&a.isPropagationStopped())break e;Uh(a,c,p),r=d}}}if(Na)throw e=Hc,Na=!1,Hc=null,e}function Fe(e,t){var n=t[Jc];n===void 0&&(n=t[Jc]=new Set);var o=e+"__bubble";n.has(o)||(kg(t,e,2,!1),n.add(o))}function rc(e,t,n){var o=0;t&&(o|=4),kg(n,e,o,t)}var la="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[la]){e[la]=!0,R1.forEach(function(n){n!=="selectionchange"&&(Y2.has(n)||rc(n,!1,e),rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[la]||(t[la]=!0,rc("selectionchange",!1,t))}}function kg(e,t,n,o){switch(ug(t)){case 1:var a=c2;break;case 4:a=d2;break;default:a=Kd}n=a.bind(null,t,n,e),a=void 0,!jc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function sc(e,t,n,o,a){var r=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var c=o.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;l=l.return}for(;c!==null;){if(l=Hi(c),l===null)return;if(d=l.tag,d===5||d===6){o=r=l;continue e}c=c.parentNode}}o=o.return}q1(function(){var p=r,g=Zd(n),m=[];e:{var y=Cg.get(e);if(y!==void 0){var _=Yd,C=e;switch(e){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":_=k2;break;case"focusin":C="focus",_=Ju;break;case"focusout":C="blur",_=Ju;break;case"beforeblur":case"afterblur":_=Ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=h2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=T2;break;case xg:case bg:case wg:_=y2;break;case Eg:_=O2;break;case"scroll":_=f2;break;case"wheel":_=R2;break;case"copy":case"cut":case"paste":_=_2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=kh}var E=(t&4)!==0,R=!E&&e==="scroll",x=E?y!==null?y+"Capture":null:y;E=[];for(var b=p,w;b!==null;){w=b;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,x!==null&&(k=os(b,x),k!=null&&E.push(ds(b,k,w)))),R)break;b=b.return}0<E.length&&(y=new _(y,C,null,n,g),m.push({event:y,listeners:E}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",y&&n!==$c&&(C=n.relatedTarget||n.fromElement)&&(Hi(C)||C[ni]))break e;if((_||y)&&(y=g.window===g?g:(y=g.ownerDocument)?y.defaultView||y.parentWindow:window,_?(C=n.relatedTarget||n.toElement,_=p,C=C?Hi(C):null,C!==null&&(R=ro(C),C!==R||C.tag!==5&&C.tag!==6)&&(C=null)):(_=null,C=p),_!==C)){if(E=Ch,k="onMouseLeave",x="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(E=kh,k="onPointerLeave",x="onPointerEnter",b="pointer"),R=_==null?y:Mo(_),w=C==null?y:Mo(C),y=new E(k,b+"leave",_,n,g),y.target=R,y.relatedTarget=w,k=null,Hi(g)===p&&(E=new E(x,b+"enter",C,n,g),E.target=w,E.relatedTarget=R,k=E),R=k,_&&C)t:{for(E=_,x=C,b=0,w=E;w;w=yo(w))b++;for(w=0,k=x;k;k=yo(k))w++;for(;0<b-w;)E=yo(E),b--;for(;0<w-b;)x=yo(x),w--;for(;b--;){if(E===x||x!==null&&E===x.alternate)break t;E=yo(E),x=yo(x)}E=null}else E=null;_!==null&&Nh(m,y,_,E,!1),C!==null&&R!==null&&Nh(m,R,C,E,!0)}}e:{if(y=p?Mo(p):window,_=y.nodeName&&y.nodeName.toLowerCase(),_==="select"||_==="input"&&y.type==="file")var T=$2;else if(Th(y))if(mg)T=Z2;else{T=j2;var I=D2}else(_=y.nodeName)&&_.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(T=H2);if(T&&(T=T(e,p))){hg(m,T,n,g);break e}I&&I(e,y,p),e==="focusout"&&(I=y._wrapperState)&&I.controlled&&y.type==="number"&&zc(y,"number",y.value)}switch(I=p?Mo(p):window,e){case"focusin":(Th(I)||I.contentEditable==="true")&&(Lo=I,Gc=p,Gr=null);break;case"focusout":Gr=Gc=Lo=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Ah(m,n,g);break;case"selectionchange":if(G2)break;case"keydown":case"keyup":Ah(m,n,g)}var O;if(Xd)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Po?fg(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(dg&&n.locale!=="ko"&&(Po||N!=="onCompositionStart"?N==="onCompositionEnd"&&Po&&(O=cg()):(gi=g,qd="value"in gi?gi.value:gi.textContent,Po=!0)),I=ja(p,N),0<I.length&&(N=new Sh(N,e,null,n,g),m.push({event:N,listeners:I}),O?N.data=O:(O=pg(n),O!==null&&(N.data=O)))),(O=z2?U2(e,n):N2(e,n))&&(p=ja(p,"onBeforeInput"),0<p.length&&(g=new Sh("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:p}),g.data=O))}Sg(m,t)})}function ds(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ja(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,r=a.stateNode;a.tag===5&&r!==null&&(a=r,r=os(e,n),r!=null&&o.unshift(ds(e,r,a)),r=os(e,t),r!=null&&o.push(ds(e,r,a))),e=e.return}return o}function yo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nh(e,t,n,o,a){for(var r=t._reactName,l=[];n!==null&&n!==o;){var c=n,d=c.alternate,p=c.stateNode;if(d!==null&&d===o)break;c.tag===5&&p!==null&&(c=p,a?(d=os(n,r),d!=null&&l.unshift(ds(n,d,c))):a||(d=os(n,r),d!=null&&l.push(ds(n,d,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Q2=/\r\n?/g,X2=/\u0000|\uFFFD/g;function Bh(e){return(typeof e=="string"?e:""+e).replace(Q2,`
`).replace(X2,"")}function ua(e,t,n){if(t=Bh(t),Bh(e)!==t&&n)throw Error(j(425))}function Ha(){}var qc=null,Yc=null;function Qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,J2=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,e9=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(e){return Fh.resolve(null).then(e).catch(t9)}:Xc;function t9(e){setTimeout(function(){throw e})}function ac(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),as(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);as(t)}function bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $h(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rr=Math.random().toString(36).slice(2),Bn="__reactFiber$"+rr,fs="__reactProps$"+rr,ni="__reactContainer$"+rr,Jc="__reactEvents$"+rr,n9="__reactListeners$"+rr,i9="__reactHandles$"+rr;function Hi(e){var t=e[Bn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ni]||n[Bn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$h(e);e!==null;){if(n=e[Bn])return n;e=$h(e)}return t}e=n,n=e.parentNode}return null}function ks(e){return e=e[Bn]||e[ni],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function vl(e){return e[fs]||null}var ed=[],Oo=-1;function Mi(e){return{current:e}}function $e(e){0>Oo||(e.current=ed[Oo],ed[Oo]=null,Oo--)}function Ue(e,t){Oo++,ed[Oo]=e.current,e.current=t}var Pi={},Pt=Mi(Pi),Dt=Mi(!1),qi=Pi;function Ko(e,t){var n=e.type.contextTypes;if(!n)return Pi;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},r;for(r in n)a[r]=t[r];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function jt(e){return e=e.childContextTypes,e!=null}function Za(){$e(Dt),$e(Pt)}function Dh(e,t,n){if(Pt.current!==Pi)throw Error(j(168));Ue(Pt,t),Ue(Dt,n)}function Pg(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(j(108,D_(e)||"Unknown",a));return Ge({},n,o)}function Wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,qi=Pt.current,Ue(Pt,e),Ue(Dt,Dt.current),!0}function jh(e,t,n){var o=e.stateNode;if(!o)throw Error(j(169));n?(e=Pg(e,t,qi),o.__reactInternalMemoizedMergedChildContext=e,$e(Dt),$e(Pt),Ue(Pt,e)):$e(Dt),Ue(Dt,n)}var Qn=null,_l=!1,lc=!1;function Lg(e){Qn===null?Qn=[e]:Qn.push(e)}function o9(e){_l=!0,Lg(e)}function Oi(){if(!lc&&Qn!==null){lc=!0;var e=0,t=Oe;try{var n=Qn;for(Oe=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Qn=null,_l=!1}catch(a){throw Qn!==null&&(Qn=Qn.slice(e+1)),J1(Wd,Oi),a}finally{Oe=t,lc=!1}}return null}var Io=[],Ro=0,Va=null,Ga=0,ln=[],un=0,Yi=null,Xn=1,Jn="";function Bi(e,t){Io[Ro++]=Ga,Io[Ro++]=Va,Va=e,Ga=t}function Tg(e,t,n){ln[un++]=Xn,ln[un++]=Jn,ln[un++]=Yi,Yi=e;var o=Xn;e=Jn;var a=32-Sn(o)-1;o&=~(1<<a),n+=1;var r=32-Sn(t)+a;if(30<r){var l=a-a%5;r=(o&(1<<l)-1).toString(32),o>>=l,a-=l,Xn=1<<32-Sn(t)+a|n<<a|o,Jn=r+e}else Xn=1<<r|n<<a|o,Jn=e}function ef(e){e.return!==null&&(Bi(e,1),Tg(e,1,0))}function tf(e){for(;e===Va;)Va=Io[--Ro],Io[Ro]=null,Ga=Io[--Ro],Io[Ro]=null;for(;e===Yi;)Yi=ln[--un],ln[un]=null,Jn=ln[--un],ln[un]=null,Xn=ln[--un],ln[un]=null}var Yt=null,qt=null,je=!1,Cn=null;function Mg(e,t){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Yt=e,qt=bi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Yt=e,qt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yi!==null?{id:Xn,overflow:Jn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Yt=e,qt=null,!0):!1;default:return!1}}function td(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nd(e){if(je){var t=qt;if(t){var n=t;if(!Hh(e,t)){if(td(e))throw Error(j(418));t=bi(n.nextSibling);var o=Yt;t&&Hh(e,t)?Mg(o,n):(e.flags=e.flags&-4097|2,je=!1,Yt=e)}}else{if(td(e))throw Error(j(418));e.flags=e.flags&-4097|2,je=!1,Yt=e}}}function Zh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function ca(e){if(e!==Yt)return!1;if(!je)return Zh(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qc(e.type,e.memoizedProps)),t&&(t=qt)){if(td(e))throw Og(),Error(j(418));for(;t;)Mg(e,t),t=bi(t.nextSibling)}if(Zh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qt=bi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qt=null}}else qt=Yt?bi(e.stateNode.nextSibling):null;return!0}function Og(){for(var e=qt;e;)e=bi(e.nextSibling)}function qo(){qt=Yt=null,je=!1}function nf(e){Cn===null?Cn=[e]:Cn.push(e)}var r9=si.ReactCurrentBatchConfig;function wn(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ka=Mi(null),qa=null,Ao=null,of=null;function rf(){of=Ao=qa=null}function sf(e){var t=Ka.current;$e(Ka),e._currentValue=t}function id(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ho(e,t){qa=e,of=Ao=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function hn(e){var t=e._currentValue;if(of!==e)if(e={context:e,memoizedValue:t,next:null},Ao===null){if(qa===null)throw Error(j(308));Ao=e,qa.dependencies={lanes:0,firstContext:e}}else Ao=Ao.next=e;return t}var Zi=null;function af(e){Zi===null?Zi=[e]:Zi.push(e)}function Ig(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,af(t)):(n.next=a.next,a.next=n),t.interleaved=n,ii(e,o)}function ii(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pi=!1;function lf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ei(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wi(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,be&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,ii(e,n)}return a=o.interleaved,a===null?(t.next=t,af(o)):(t.next=a.next,a.next=t),o.interleaved=t,ii(e,n)}function Sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Vd(e,n)}}function Wh(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?a=r=l:r=r.next=l,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ya(e,t,n,o){var a=e.updateQueue;pi=!1;var r=a.firstBaseUpdate,l=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,p=d.next;d.next=null,l===null?r=p:l.next=p,l=d;var g=e.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==l&&(c===null?g.firstBaseUpdate=p:c.next=p,g.lastBaseUpdate=d))}if(r!==null){var m=a.baseState;l=0,g=p=d=null,c=r;do{var y=c.lane,_=c.eventTime;if((o&y)===y){g!==null&&(g=g.next={eventTime:_,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var C=e,E=c;switch(y=t,_=n,E.tag){case 1:if(C=E.payload,typeof C=="function"){m=C.call(_,m,y);break e}m=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=E.payload,y=typeof C=="function"?C.call(_,m,y):C,y==null)break e;m=Ge({},m,y);break e;case 2:pi=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,y=a.effects,y===null?a.effects=[c]:y.push(c))}else _={eventTime:_,lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(p=g=_,d=m):g=g.next=_,l|=y;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;y=c,c=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(1);if(g===null&&(d=m),a.baseState=d,a.firstBaseUpdate=p,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else r===null&&(a.shared.lanes=0);Xi|=l,e.lanes=l,e.memoizedState=m}}function Vh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(j(191,a));a.call(o)}}}var Ag=new I1.Component().refs;function od(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:Ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xl={isMounted:function(e){return(e=e._reactInternals)?ro(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Rt(),a=Ci(e),r=ei(o,a);r.payload=t,n!=null&&(r.callback=n),t=wi(e,r,a),t!==null&&(kn(t,e,a,o),Sa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Rt(),a=Ci(e),r=ei(o,a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=wi(e,r,a),t!==null&&(kn(t,e,a,o),Sa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),o=Ci(e),a=ei(n,o);a.tag=2,t!=null&&(a.callback=t),t=wi(e,a,o),t!==null&&(kn(t,e,o,n),Sa(t,e,o))}};function Gh(e,t,n,o,a,r,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,r,l):t.prototype&&t.prototype.isPureReactComponent?!us(n,o)||!us(a,r):!0}function zg(e,t,n){var o=!1,a=Pi,r=t.contextType;return typeof r=="object"&&r!==null?r=hn(r):(a=jt(t)?qi:Pt.current,o=t.contextTypes,r=(o=o!=null)?Ko(e,a):Pi),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xl,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=r),t}function Kh(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&xl.enqueueReplaceState(t,t.state,null)}function rd(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Ag,lf(e);var r=t.contextType;typeof r=="object"&&r!==null?a.context=hn(r):(r=jt(t)?qi:Pt.current,a.context=Ko(e,r)),a.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(od(e,t,r,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&xl.enqueueReplaceState(a,a.state,null),Ya(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var o=n.stateNode}if(!o)throw Error(j(147,e));var a=o,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(l){var c=a.refs;c===Ag&&(c=a.refs={}),l===null?delete c[r]:c[r]=l},t._stringRef=r,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function da(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qh(e){var t=e._init;return t(e._payload)}function Ug(e){function t(x,b){if(e){var w=x.deletions;w===null?(x.deletions=[b],x.flags|=16):w.push(b)}}function n(x,b){if(!e)return null;for(;b!==null;)t(x,b),b=b.sibling;return null}function o(x,b){for(x=new Map;b!==null;)b.key!==null?x.set(b.key,b):x.set(b.index,b),b=b.sibling;return x}function a(x,b){return x=Si(x,b),x.index=0,x.sibling=null,x}function r(x,b,w){return x.index=w,e?(w=x.alternate,w!==null?(w=w.index,w<b?(x.flags|=2,b):w):(x.flags|=2,b)):(x.flags|=1048576,b)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function c(x,b,w,k){return b===null||b.tag!==6?(b=mc(w,x.mode,k),b.return=x,b):(b=a(b,w),b.return=x,b)}function d(x,b,w,k){var T=w.type;return T===ko?g(x,b,w.props.children,k,w.key):b!==null&&(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fi&&qh(T)===b.type)?(k=a(b,w.props),k.ref=Lr(x,b,w),k.return=x,k):(k=Oa(w.type,w.key,w.props,null,x.mode,k),k.ref=Lr(x,b,w),k.return=x,k)}function p(x,b,w,k){return b===null||b.tag!==4||b.stateNode.containerInfo!==w.containerInfo||b.stateNode.implementation!==w.implementation?(b=gc(w,x.mode,k),b.return=x,b):(b=a(b,w.children||[]),b.return=x,b)}function g(x,b,w,k,T){return b===null||b.tag!==7?(b=Ki(w,x.mode,k,T),b.return=x,b):(b=a(b,w),b.return=x,b)}function m(x,b,w){if(typeof b=="string"&&b!==""||typeof b=="number")return b=mc(""+b,x.mode,w),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ea:return w=Oa(b.type,b.key,b.props,null,x.mode,w),w.ref=Lr(x,null,b),w.return=x,w;case So:return b=gc(b,x.mode,w),b.return=x,b;case fi:var k=b._init;return m(x,k(b._payload),w)}if(Fr(b)||Er(b))return b=Ki(b,x.mode,w,null),b.return=x,b;da(x,b)}return null}function y(x,b,w,k){var T=b!==null?b.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return T!==null?null:c(x,b,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ea:return w.key===T?d(x,b,w,k):null;case So:return w.key===T?p(x,b,w,k):null;case fi:return T=w._init,y(x,b,T(w._payload),k)}if(Fr(w)||Er(w))return T!==null?null:g(x,b,w,k,null);da(x,w)}return null}function _(x,b,w,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return x=x.get(w)||null,c(b,x,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ea:return x=x.get(k.key===null?w:k.key)||null,d(b,x,k,T);case So:return x=x.get(k.key===null?w:k.key)||null,p(b,x,k,T);case fi:var I=k._init;return _(x,b,w,I(k._payload),T)}if(Fr(k)||Er(k))return x=x.get(w)||null,g(b,x,k,T,null);da(b,k)}return null}function C(x,b,w,k){for(var T=null,I=null,O=b,N=b=0,G=null;O!==null&&N<w.length;N++){O.index>N?(G=O,O=null):G=O.sibling;var $=y(x,O,w[N],k);if($===null){O===null&&(O=G);break}e&&O&&$.alternate===null&&t(x,O),b=r($,b,N),I===null?T=$:I.sibling=$,I=$,O=G}if(N===w.length)return n(x,O),je&&Bi(x,N),T;if(O===null){for(;N<w.length;N++)O=m(x,w[N],k),O!==null&&(b=r(O,b,N),I===null?T=O:I.sibling=O,I=O);return je&&Bi(x,N),T}for(O=o(x,O);N<w.length;N++)G=_(O,x,N,w[N],k),G!==null&&(e&&G.alternate!==null&&O.delete(G.key===null?N:G.key),b=r(G,b,N),I===null?T=G:I.sibling=G,I=G);return e&&O.forEach(function(Z){return t(x,Z)}),je&&Bi(x,N),T}function E(x,b,w,k){var T=Er(w);if(typeof T!="function")throw Error(j(150));if(w=T.call(w),w==null)throw Error(j(151));for(var I=T=null,O=b,N=b=0,G=null,$=w.next();O!==null&&!$.done;N++,$=w.next()){O.index>N?(G=O,O=null):G=O.sibling;var Z=y(x,O,$.value,k);if(Z===null){O===null&&(O=G);break}e&&O&&Z.alternate===null&&t(x,O),b=r(Z,b,N),I===null?T=Z:I.sibling=Z,I=Z,O=G}if($.done)return n(x,O),je&&Bi(x,N),T;if(O===null){for(;!$.done;N++,$=w.next())$=m(x,$.value,k),$!==null&&(b=r($,b,N),I===null?T=$:I.sibling=$,I=$);return je&&Bi(x,N),T}for(O=o(x,O);!$.done;N++,$=w.next())$=_(O,x,N,$.value,k),$!==null&&(e&&$.alternate!==null&&O.delete($.key===null?N:$.key),b=r($,b,N),I===null?T=$:I.sibling=$,I=$);return e&&O.forEach(function(ee){return t(x,ee)}),je&&Bi(x,N),T}function R(x,b,w,k){if(typeof w=="object"&&w!==null&&w.type===ko&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ea:e:{for(var T=w.key,I=b;I!==null;){if(I.key===T){if(T=w.type,T===ko){if(I.tag===7){n(x,I.sibling),b=a(I,w.props.children),b.return=x,x=b;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fi&&qh(T)===I.type){n(x,I.sibling),b=a(I,w.props),b.ref=Lr(x,I,w),b.return=x,x=b;break e}n(x,I);break}else t(x,I);I=I.sibling}w.type===ko?(b=Ki(w.props.children,x.mode,k,w.key),b.return=x,x=b):(k=Oa(w.type,w.key,w.props,null,x.mode,k),k.ref=Lr(x,b,w),k.return=x,x=k)}return l(x);case So:e:{for(I=w.key;b!==null;){if(b.key===I)if(b.tag===4&&b.stateNode.containerInfo===w.containerInfo&&b.stateNode.implementation===w.implementation){n(x,b.sibling),b=a(b,w.children||[]),b.return=x,x=b;break e}else{n(x,b);break}else t(x,b);b=b.sibling}b=gc(w,x.mode,k),b.return=x,x=b}return l(x);case fi:return I=w._init,R(x,b,I(w._payload),k)}if(Fr(w))return C(x,b,w,k);if(Er(w))return E(x,b,w,k);da(x,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,b!==null&&b.tag===6?(n(x,b.sibling),b=a(b,w),b.return=x,x=b):(n(x,b),b=mc(w,x.mode,k),b.return=x,x=b),l(x)):n(x,b)}return R}var Yo=Ug(!0),Ng=Ug(!1),Ps={},jn=Mi(Ps),ps=Mi(Ps),hs=Mi(Ps);function Wi(e){if(e===Ps)throw Error(j(174));return e}function uf(e,t){switch(Ue(hs,t),Ue(ps,e),Ue(jn,Ps),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nc(t,e)}$e(jn),Ue(jn,t)}function Qo(){$e(jn),$e(ps),$e(hs)}function Bg(e){Wi(hs.current);var t=Wi(jn.current),n=Nc(t,e.type);t!==n&&(Ue(ps,e),Ue(jn,n))}function cf(e){ps.current===e&&($e(jn),$e(ps))}var We=Mi(0);function Qa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uc=[];function df(){for(var e=0;e<uc.length;e++)uc[e]._workInProgressVersionPrimary=null;uc.length=0}var ka=si.ReactCurrentDispatcher,cc=si.ReactCurrentBatchConfig,Qi=0,Ve=null,ct=null,pt=null,Xa=!1,Kr=!1,ms=0,s9=0;function Et(){throw Error(j(321))}function ff(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pn(e[n],t[n]))return!1;return!0}function pf(e,t,n,o,a,r){if(Qi=r,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ka.current=e===null||e.memoizedState===null?c9:d9,e=n(o,a),Kr){r=0;do{if(Kr=!1,ms=0,25<=r)throw Error(j(301));r+=1,pt=ct=null,t.updateQueue=null,ka.current=f9,e=n(o,a)}while(Kr)}if(ka.current=Ja,t=ct!==null&&ct.next!==null,Qi=0,pt=ct=Ve=null,Xa=!1,t)throw Error(j(300));return e}function hf(){var e=ms!==0;return ms=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ve.memoizedState=pt=e:pt=pt.next=e,pt}function mn(){if(ct===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=pt===null?Ve.memoizedState:pt.next;if(t!==null)pt=t,ct=e;else{if(e===null)throw Error(j(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},pt===null?Ve.memoizedState=pt=e:pt=pt.next=e}return pt}function gs(e,t){return typeof t=="function"?t(e):t}function dc(e){var t=mn(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var o=ct,a=o.baseQueue,r=n.pending;if(r!==null){if(a!==null){var l=a.next;a.next=r.next,r.next=l}o.baseQueue=a=r,n.pending=null}if(a!==null){r=a.next,o=o.baseState;var c=l=null,d=null,p=r;do{var g=p.lane;if((Qi&g)===g)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),o=p.hasEagerState?p.eagerState:e(o,p.action);else{var m={lane:g,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(c=d=m,l=o):d=d.next=m,Ve.lanes|=g,Xi|=g}p=p.next}while(p!==null&&p!==r);d===null?l=o:d.next=c,Pn(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=d,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do r=a.lane,Ve.lanes|=r,Xi|=r,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fc(e){var t=mn(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do r=e(r,l.action),l=l.next;while(l!==a);Pn(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,o]}function Fg(){}function $g(e,t){var n=Ve,o=mn(),a=t(),r=!Pn(o.memoizedState,a);if(r&&(o.memoizedState=a,$t=!0),o=o.queue,mf(Hg.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,ys(9,jg.bind(null,n,o,a,t),void 0,null),ht===null)throw Error(j(349));Qi&30||Dg(n,t,a)}return a}function Dg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jg(e,t,n,o){t.value=n,t.getSnapshot=o,Zg(t)&&Wg(e)}function Hg(e,t,n){return n(function(){Zg(t)&&Wg(e)})}function Zg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pn(e,n)}catch{return!0}}function Wg(e){var t=ii(e,1);t!==null&&kn(t,e,1,-1)}function Yh(e){var t=zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:e},t.queue=e,e=e.dispatch=u9.bind(null,Ve,e),[t.memoizedState,e]}function ys(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function Vg(){return mn().memoizedState}function Pa(e,t,n,o){var a=zn();Ve.flags|=e,a.memoizedState=ys(1|t,n,void 0,o===void 0?null:o)}function bl(e,t,n,o){var a=mn();o=o===void 0?null:o;var r=void 0;if(ct!==null){var l=ct.memoizedState;if(r=l.destroy,o!==null&&ff(o,l.deps)){a.memoizedState=ys(t,n,r,o);return}}Ve.flags|=e,a.memoizedState=ys(1|t,n,r,o)}function Qh(e,t){return Pa(8390656,8,e,t)}function mf(e,t){return bl(2048,8,e,t)}function Gg(e,t){return bl(4,2,e,t)}function Kg(e,t){return bl(4,4,e,t)}function qg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yg(e,t,n){return n=n!=null?n.concat([e]):null,bl(4,4,qg.bind(null,t,e),n)}function gf(){}function Qg(e,t){var n=mn();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ff(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Xg(e,t){var n=mn();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&ff(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Jg(e,t,n){return Qi&21?(Pn(n,t)||(n=ng(),Ve.lanes|=n,Xi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function a9(e,t){var n=Oe;Oe=n!==0&&4>n?n:4,e(!0);var o=cc.transition;cc.transition={};try{e(!1),t()}finally{Oe=n,cc.transition=o}}function e0(){return mn().memoizedState}function l9(e,t,n){var o=Ci(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},t0(e))n0(t,n);else if(n=Ig(e,t,n,o),n!==null){var a=Rt();kn(n,e,o,a),i0(n,t,o)}}function u9(e,t,n){var o=Ci(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(t0(e))n0(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var l=t.lastRenderedState,c=r(l,n);if(a.hasEagerState=!0,a.eagerState=c,Pn(c,l)){var d=t.interleaved;d===null?(a.next=a,af(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}n=Ig(e,t,a,o),n!==null&&(a=Rt(),kn(n,e,o,a),i0(n,t,o))}}function t0(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function n0(e,t){Kr=Xa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function i0(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Vd(e,n)}}var Ja={readContext:hn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},c9={readContext:hn,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:Qh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4194308,4,qg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pa(4,2,e,t)},useMemo:function(e,t){var n=zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=zn();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=l9.bind(null,Ve,e),[o.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:Yh,useDebugValue:gf,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=Yh(!1),t=e[0];return e=a9.bind(null,e[1]),zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=Ve,a=zn();if(je){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ht===null)throw Error(j(349));Qi&30||Dg(o,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,Qh(Hg.bind(null,o,r,e),[e]),o.flags|=2048,ys(9,jg.bind(null,o,r,n,t),void 0,null),n},useId:function(){var e=zn(),t=ht.identifierPrefix;if(je){var n=Jn,o=Xn;n=(o&~(1<<32-Sn(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=ms++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=s9++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d9={readContext:hn,useCallback:Qg,useContext:hn,useEffect:mf,useImperativeHandle:Yg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Xg,useReducer:dc,useRef:Vg,useState:function(){return dc(gs)},useDebugValue:gf,useDeferredValue:function(e){var t=mn();return Jg(t,ct.memoizedState,e)},useTransition:function(){var e=dc(gs)[0],t=mn().memoizedState;return[e,t]},useMutableSource:Fg,useSyncExternalStore:$g,useId:e0,unstable_isNewReconciler:!1},f9={readContext:hn,useCallback:Qg,useContext:hn,useEffect:mf,useImperativeHandle:Yg,useInsertionEffect:Gg,useLayoutEffect:Kg,useMemo:Xg,useReducer:fc,useRef:Vg,useState:function(){return fc(gs)},useDebugValue:gf,useDeferredValue:function(e){var t=mn();return ct===null?t.memoizedState=e:Jg(t,ct.memoizedState,e)},useTransition:function(){var e=fc(gs)[0],t=mn().memoizedState;return[e,t]},useMutableSource:Fg,useSyncExternalStore:$g,useId:e0,unstable_isNewReconciler:!1};function Xo(e,t){try{var n="",o=t;do n+=$_(o),o=o.return;while(o);var a=n}catch(r){a=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:a,digest:null}}function pc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p9=typeof WeakMap=="function"?WeakMap:Map;function o0(e,t,n){n=ei(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){tl||(tl=!0,gd=o),sd(e,t)},n}function r0(e,t,n){n=ei(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){sd(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){sd(e,t),typeof o!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Xh(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new p9;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=P9.bind(null,e,t,n),t.then(e,e))}function Jh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function em(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ei(-1,1),t.tag=2,wi(n,t,1))),n.lanes|=1),e)}var h9=si.ReactCurrentOwner,$t=!1;function Ot(e,t,n,o){t.child=e===null?Ng(t,null,n,o):Yo(t,e.child,n,o)}function tm(e,t,n,o,a){n=n.render;var r=t.ref;return Ho(t,a),o=pf(e,t,n,o,r,a),n=hf(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,oi(e,t,a)):(je&&n&&ef(t),t.flags|=1,Ot(e,t,o,a),t.child)}function nm(e,t,n,o,a){if(e===null){var r=n.type;return typeof r=="function"&&!Cf(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,s0(e,t,r,o,a)):(e=Oa(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&a)){var l=r.memoizedProps;if(n=n.compare,n=n!==null?n:us,n(l,o)&&e.ref===t.ref)return oi(e,t,a)}return t.flags|=1,e=Si(r,o),e.ref=t.ref,e.return=t,t.child=e}function s0(e,t,n,o,a){if(e!==null){var r=e.memoizedProps;if(us(r,o)&&e.ref===t.ref)if($t=!1,t.pendingProps=o=r,(e.lanes&a)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,oi(e,t,a)}return ad(e,t,n,o,a)}function a0(e,t,n){var o=t.pendingProps,a=o.children,r=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(Uo,Gt),Gt|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(Uo,Gt),Gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=r!==null?r.baseLanes:n,Ue(Uo,Gt),Gt|=o}else r!==null?(o=r.baseLanes|n,t.memoizedState=null):o=n,Ue(Uo,Gt),Gt|=o;return Ot(e,t,a,n),t.child}function l0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ad(e,t,n,o,a){var r=jt(n)?qi:Pt.current;return r=Ko(t,r),Ho(t,a),n=pf(e,t,n,o,r,a),o=hf(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,oi(e,t,a)):(je&&o&&ef(t),t.flags|=1,Ot(e,t,n,a),t.child)}function im(e,t,n,o,a){if(jt(n)){var r=!0;Wa(t)}else r=!1;if(Ho(t,a),t.stateNode===null)La(e,t),zg(t,n,o),rd(t,n,o,a),o=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=hn(p):(p=jt(n)?qi:Pt.current,p=Ko(t,p));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==o||d!==p)&&Kh(t,l,o,p),pi=!1;var y=t.memoizedState;l.state=y,Ya(t,o,l,a),d=t.memoizedState,c!==o||y!==d||Dt.current||pi?(typeof g=="function"&&(od(t,n,g,o),d=t.memoizedState),(c=pi||Gh(t,n,c,o,y,d,p))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),l.props=o,l.state=d,l.context=p,o=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,Rg(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:wn(t.type,c),l.props=p,m=t.pendingProps,y=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=hn(d):(d=jt(n)?qi:Pt.current,d=Ko(t,d));var _=n.getDerivedStateFromProps;(g=typeof _=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||y!==d)&&Kh(t,l,o,d),pi=!1,y=t.memoizedState,l.state=y,Ya(t,o,l,a);var C=t.memoizedState;c!==m||y!==C||Dt.current||pi?(typeof _=="function"&&(od(t,n,_,o),C=t.memoizedState),(p=pi||Gh(t,n,p,o,y,C,d)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,C,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,C,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=C),l.props=o,l.state=C,l.context=d,o=p):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),o=!1)}return ld(e,t,n,o,r,a)}function ld(e,t,n,o,a,r){l0(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return a&&jh(t,n,!1),oi(e,t,r);o=t.stateNode,h9.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=Yo(t,e.child,null,r),t.child=Yo(t,null,c,r)):Ot(e,t,c,r),t.memoizedState=o.state,a&&jh(t,n,!0),t.child}function u0(e){var t=e.stateNode;t.pendingContext?Dh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dh(e,t.context,!1),uf(e,t.containerInfo)}function om(e,t,n,o,a){return qo(),nf(a),t.flags|=256,Ot(e,t,n,o),t.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function cd(e){return{baseLanes:e,cachePool:null,transitions:null}}function c0(e,t,n){var o=t.pendingProps,a=We.current,r=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Ue(We,a&1),e===null)return nd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,r?(o=t.mode,r=t.child,l={mode:"hidden",children:l},!(o&1)&&r!==null?(r.childLanes=0,r.pendingProps=l):r=Cl(l,o,0,null),e=Ki(e,o,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=cd(n),t.memoizedState=ud,e):yf(t,l));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return m9(e,t,l,o,c,a,n);if(r){r=o.fallback,l=t.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=Si(a,d),o.subtreeFlags=a.subtreeFlags&14680064),c!==null?r=Si(c,r):(r=Ki(r,l,n,null),r.flags|=2),r.return=t,o.return=t,o.sibling=r,t.child=o,o=r,r=t.child,l=e.child.memoizedState,l=l===null?cd(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},r.memoizedState=l,r.childLanes=e.childLanes&~n,t.memoizedState=ud,o}return r=e.child,e=r.sibling,o=Si(r,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function yf(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fa(e,t,n,o){return o!==null&&nf(o),Yo(t,e.child,null,n),e=yf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m9(e,t,n,o,a,r,l){if(n)return t.flags&256?(t.flags&=-257,o=pc(Error(j(422))),fa(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=o.fallback,a=t.mode,o=Cl({mode:"visible",children:o.children},a,0,null),r=Ki(r,a,l,null),r.flags|=2,o.return=t,r.return=t,o.sibling=r,t.child=o,t.mode&1&&Yo(t,e.child,null,l),t.child.memoizedState=cd(l),t.memoizedState=ud,r);if(!(t.mode&1))return fa(e,t,l,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var c=o.dgst;return o=c,r=Error(j(419)),o=pc(r,o,void 0),fa(e,t,l,o)}if(c=(l&e.childLanes)!==0,$t||c){if(o=ht,o!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|l)?0:a,a!==0&&a!==r.retryLane&&(r.retryLane=a,ii(e,a),kn(o,e,a,-1))}return Ef(),o=pc(Error(j(421))),fa(e,t,l,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=L9.bind(null,e),a._reactRetry=t,null):(e=r.treeContext,qt=bi(a.nextSibling),Yt=t,je=!0,Cn=null,e!==null&&(ln[un++]=Xn,ln[un++]=Jn,ln[un++]=Yi,Xn=e.id,Jn=e.overflow,Yi=t),t=yf(t,o.children),t.flags|=4096,t)}function rm(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),id(e.return,t,n)}function hc(e,t,n,o,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=o,r.tail=n,r.tailMode=a)}function d0(e,t,n){var o=t.pendingProps,a=o.revealOrder,r=o.tail;if(Ot(e,t,o.children,n),o=We.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,n,t);else if(e.tag===19)rm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ue(We,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Qa(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),hc(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Qa(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}hc(t,!0,n,null,r);break;case"together":hc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function La(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function oi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Si(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Si(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function g9(e,t,n){switch(t.tag){case 3:u0(t),qo();break;case 5:Bg(t);break;case 1:jt(t.type)&&Wa(t);break;case 4:uf(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;Ue(Ka,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ue(We,We.current&1),t.flags|=128,null):n&t.child.childLanes?c0(e,t,n):(Ue(We,We.current&1),e=oi(e,t,n),e!==null?e.sibling:null);Ue(We,We.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return d0(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ue(We,We.current),o)break;return null;case 22:case 23:return t.lanes=0,a0(e,t,n)}return oi(e,t,n)}var f0,dd,p0,h0;f0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};p0=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,Wi(jn.current);var r=null;switch(n){case"input":a=Rc(e,a),o=Rc(e,o),r=[];break;case"select":a=Ge({},a,{value:void 0}),o=Ge({},o,{value:void 0}),r=[];break;case"textarea":a=Uc(e,a),o=Uc(e,o),r=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ha)}Bc(n,o);var l;n=null;for(p in a)if(!o.hasOwnProperty(p)&&a.hasOwnProperty(p)&&a[p]!=null)if(p==="style"){var c=a[p];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(ns.hasOwnProperty(p)?r||(r=[]):(r=r||[]).push(p,null));for(p in o){var d=o[p];if(c=a!=null?a[p]:void 0,o.hasOwnProperty(p)&&d!==c&&(d!=null||c!=null))if(p==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(r||(r=[]),r.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(r=r||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(r=r||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(ns.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&Fe("scroll",e),r||c===d||(r=[])):(r=r||[]).push(p,d))}n&&(r=r||[]).push("style",n);var p=r;(t.updateQueue=p)&&(t.flags|=4)}};h0=function(e,t,n,o){n!==o&&(t.flags|=4)};function Tr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function y9(e,t,n){var o=t.pendingProps;switch(tf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(t),null;case 1:return jt(t.type)&&Za(),Ct(t),null;case 3:return o=t.stateNode,Qo(),$e(Dt),$e(Pt),df(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ca(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Cn!==null&&(_d(Cn),Cn=null))),dd(e,t),Ct(t),null;case 5:cf(t);var a=Wi(hs.current);if(n=t.type,e!==null&&t.stateNode!=null)p0(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(j(166));return Ct(t),null}if(e=Wi(jn.current),ca(t)){o=t.stateNode,n=t.type;var r=t.memoizedProps;switch(o[Bn]=t,o[fs]=r,e=(t.mode&1)!==0,n){case"dialog":Fe("cancel",o),Fe("close",o);break;case"iframe":case"object":case"embed":Fe("load",o);break;case"video":case"audio":for(a=0;a<Dr.length;a++)Fe(Dr[a],o);break;case"source":Fe("error",o);break;case"img":case"image":case"link":Fe("error",o),Fe("load",o);break;case"details":Fe("toggle",o);break;case"input":hh(o,r),Fe("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!r.multiple},Fe("invalid",o);break;case"textarea":gh(o,r),Fe("invalid",o)}Bc(n,r),a=null;for(var l in r)if(r.hasOwnProperty(l)){var c=r[l];l==="children"?typeof c=="string"?o.textContent!==c&&(r.suppressHydrationWarning!==!0&&ua(o.textContent,c,e),a=["children",c]):typeof c=="number"&&o.textContent!==""+c&&(r.suppressHydrationWarning!==!0&&ua(o.textContent,c,e),a=["children",""+c]):ns.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&Fe("scroll",o)}switch(n){case"input":ta(o),mh(o,r,!0);break;case"textarea":ta(o),yh(o);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(o.onclick=Ha)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=D1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(n,{is:o.is}):(e=l.createElement(n),n==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,n),e[Bn]=t,e[fs]=o,f0(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fc(n,o),n){case"dialog":Fe("cancel",e),Fe("close",e),a=o;break;case"iframe":case"object":case"embed":Fe("load",e),a=o;break;case"video":case"audio":for(a=0;a<Dr.length;a++)Fe(Dr[a],e);a=o;break;case"source":Fe("error",e),a=o;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),a=o;break;case"details":Fe("toggle",e),a=o;break;case"input":hh(e,o),a=Rc(e,o),Fe("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=Ge({},o,{value:void 0}),Fe("invalid",e);break;case"textarea":gh(e,o),a=Uc(e,o),Fe("invalid",e);break;default:a=o}Bc(n,a),c=a;for(r in c)if(c.hasOwnProperty(r)){var d=c[r];r==="style"?Z1(e,d):r==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&j1(e,d)):r==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&is(e,d):typeof d=="number"&&is(e,""+d):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(ns.hasOwnProperty(r)?d!=null&&r==="onScroll"&&Fe("scroll",e):d!=null&&$d(e,r,d,l))}switch(n){case"input":ta(e),mh(e,o,!1);break;case"textarea":ta(e),yh(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ki(o.value));break;case"select":e.multiple=!!o.multiple,r=o.value,r!=null?Fo(e,!!o.multiple,r,!1):o.defaultValue!=null&&Fo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ct(t),null;case 6:if(e&&t.stateNode!=null)h0(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(j(166));if(n=Wi(hs.current),Wi(jn.current),ca(t)){if(o=t.stateNode,n=t.memoizedProps,o[Bn]=t,(r=o.nodeValue!==n)&&(e=Yt,e!==null))switch(e.tag){case 3:ua(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ua(o.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Bn]=t,t.stateNode=o}return Ct(t),null;case 13:if($e(We),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&qt!==null&&t.mode&1&&!(t.flags&128))Og(),qo(),t.flags|=98560,r=!1;else if(r=ca(t),o!==null&&o.dehydrated!==null){if(e===null){if(!r)throw Error(j(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(j(317));r[Bn]=t}else qo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ct(t),r=!1}else Cn!==null&&(_d(Cn),Cn=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||We.current&1?dt===0&&(dt=3):Ef())),t.updateQueue!==null&&(t.flags|=4),Ct(t),null);case 4:return Qo(),dd(e,t),e===null&&cs(t.stateNode.containerInfo),Ct(t),null;case 10:return sf(t.type._context),Ct(t),null;case 17:return jt(t.type)&&Za(),Ct(t),null;case 19:if($e(We),r=t.memoizedState,r===null)return Ct(t),null;if(o=(t.flags&128)!==0,l=r.rendering,l===null)if(o)Tr(r,!1);else{if(dt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Qa(e),l!==null){for(t.flags|=128,Tr(r,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)r=n,e=o,r.flags&=14680066,l=r.alternate,l===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,e=l.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ue(We,We.current&1|2),t.child}e=e.sibling}r.tail!==null&&it()>Jo&&(t.flags|=128,o=!0,Tr(r,!1),t.lanes=4194304)}else{if(!o)if(e=Qa(l),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!l.alternate&&!je)return Ct(t),null}else 2*it()-r.renderingStartTime>Jo&&n!==1073741824&&(t.flags|=128,o=!0,Tr(r,!1),t.lanes=4194304);r.isBackwards?(l.sibling=t.child,t.child=l):(n=r.last,n!==null?n.sibling=l:t.child=l,r.last=l)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=it(),t.sibling=null,n=We.current,Ue(We,o?n&1|2:n&1),t):(Ct(t),null);case 22:case 23:return wf(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?Gt&1073741824&&(Ct(t),t.subtreeFlags&6&&(t.flags|=8192)):Ct(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function v9(e,t){switch(tf(t),t.tag){case 1:return jt(t.type)&&Za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qo(),$e(Dt),$e(Pt),df(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cf(t),null;case 13:if($e(We),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));qo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(We),null;case 4:return Qo(),null;case 10:return sf(t.type._context),null;case 22:case 23:return wf(),null;case 24:return null;default:return null}}var pa=!1,kt=!1,_9=typeof WeakSet=="function"?WeakSet:Set,X=null;function zo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Je(e,t,o)}else n.current=null}function fd(e,t,n){try{n()}catch(o){Je(e,t,o)}}var sm=!1;function x9(e,t){if(qc=$a,e=vg(),Jd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,r=o.focusNode;o=o.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var l=0,c=-1,d=-1,p=0,g=0,m=e,y=null;t:for(;;){for(var _;m!==n||a!==0&&m.nodeType!==3||(c=l+a),m!==r||o!==0&&m.nodeType!==3||(d=l+o),m.nodeType===3&&(l+=m.nodeValue.length),(_=m.firstChild)!==null;)y=m,m=_;for(;;){if(m===e)break t;if(y===n&&++p===a&&(c=l),y===r&&++g===o&&(d=l),(_=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=_}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:e,selectionRange:n},$a=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var E=C.memoizedProps,R=C.memoizedState,x=t.stateNode,b=x.getSnapshotBeforeUpdate(t.elementType===t.type?E:wn(t.type,E),R);x.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){Je(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return C=sm,sm=!1,C}function qr(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var r=a.destroy;a.destroy=void 0,r!==void 0&&fd(t,n,r)}a=a.next}while(a!==o)}}function wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function pd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function m0(e){var t=e.alternate;t!==null&&(e.alternate=null,m0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bn],delete t[fs],delete t[Jc],delete t[n9],delete t[i9])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function g0(e){return e.tag===5||e.tag===3||e.tag===4}function am(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||g0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ha));else if(o!==4&&(e=e.child,e!==null))for(hd(e,t,n),e=e.sibling;e!==null;)hd(e,t,n),e=e.sibling}function md(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(md(e,t,n),e=e.sibling;e!==null;)md(e,t,n),e=e.sibling}var yt=null,En=!1;function ci(e,t,n){for(n=n.child;n!==null;)y0(e,t,n),n=n.sibling}function y0(e,t,n){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:kt||zo(n,t);case 6:var o=yt,a=En;yt=null,ci(e,t,n),yt=o,En=a,yt!==null&&(En?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(En?(e=yt,n=n.stateNode,e.nodeType===8?ac(e.parentNode,n):e.nodeType===1&&ac(e,n),as(e)):ac(yt,n.stateNode));break;case 4:o=yt,a=En,yt=n.stateNode.containerInfo,En=!0,ci(e,t,n),yt=o,En=a;break;case 0:case 11:case 14:case 15:if(!kt&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var r=a,l=r.destroy;r=r.tag,l!==void 0&&(r&2||r&4)&&fd(n,t,l),a=a.next}while(a!==o)}ci(e,t,n);break;case 1:if(!kt&&(zo(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(c){Je(n,t,c)}ci(e,t,n);break;case 21:ci(e,t,n);break;case 22:n.mode&1?(kt=(o=kt)||n.memoizedState!==null,ci(e,t,n),kt=o):ci(e,t,n);break;default:ci(e,t,n)}}function lm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _9),t.forEach(function(o){var a=T9.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function bn(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var r=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:yt=c.stateNode,En=!1;break e;case 3:yt=c.stateNode.containerInfo,En=!0;break e;case 4:yt=c.stateNode.containerInfo,En=!0;break e}c=c.return}if(yt===null)throw Error(j(160));y0(r,l,a),yt=null,En=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(p){Je(a,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)v0(t,e),t=t.sibling}function v0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bn(t,e),An(e),o&4){try{qr(3,e,e.return),wl(3,e)}catch(E){Je(e,e.return,E)}try{qr(5,e,e.return)}catch(E){Je(e,e.return,E)}}break;case 1:bn(t,e),An(e),o&512&&n!==null&&zo(n,n.return);break;case 5:if(bn(t,e),An(e),o&512&&n!==null&&zo(n,n.return),e.flags&32){var a=e.stateNode;try{is(a,"")}catch(E){Je(e,e.return,E)}}if(o&4&&(a=e.stateNode,a!=null)){var r=e.memoizedProps,l=n!==null?n.memoizedProps:r,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&r.type==="radio"&&r.name!=null&&F1(a,r),Fc(c,l);var p=Fc(c,r);for(l=0;l<d.length;l+=2){var g=d[l],m=d[l+1];g==="style"?Z1(a,m):g==="dangerouslySetInnerHTML"?j1(a,m):g==="children"?is(a,m):$d(a,g,m,p)}switch(c){case"input":Ac(a,r);break;case"textarea":$1(a,r);break;case"select":var y=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!r.multiple;var _=r.value;_!=null?Fo(a,!!r.multiple,_,!1):y!==!!r.multiple&&(r.defaultValue!=null?Fo(a,!!r.multiple,r.defaultValue,!0):Fo(a,!!r.multiple,r.multiple?[]:"",!1))}a[fs]=r}catch(E){Je(e,e.return,E)}}break;case 6:if(bn(t,e),An(e),o&4){if(e.stateNode===null)throw Error(j(162));a=e.stateNode,r=e.memoizedProps;try{a.nodeValue=r}catch(E){Je(e,e.return,E)}}break;case 3:if(bn(t,e),An(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{as(t.containerInfo)}catch(E){Je(e,e.return,E)}break;case 4:bn(t,e),An(e);break;case 13:bn(t,e),An(e),a=e.child,a.flags&8192&&(r=a.memoizedState!==null,a.stateNode.isHidden=r,!r||a.alternate!==null&&a.alternate.memoizedState!==null||(xf=it())),o&4&&lm(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(kt=(p=kt)||g,bn(t,e),kt=p):bn(t,e),An(e),o&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!g&&e.mode&1)for(X=e,g=e.child;g!==null;){for(m=X=g;X!==null;){switch(y=X,_=y.child,y.tag){case 0:case 11:case 14:case 15:qr(4,y,y.return);break;case 1:zo(y,y.return);var C=y.stateNode;if(typeof C.componentWillUnmount=="function"){o=y,n=y.return;try{t=o,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(E){Je(o,n,E)}}break;case 5:zo(y,y.return);break;case 22:if(y.memoizedState!==null){cm(m);continue}}_!==null?(_.return=y,X=_):cm(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{a=m.stateNode,p?(r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(c=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=H1("display",l))}catch(E){Je(e,e.return,E)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=p?"":m.memoizedProps}catch(E){Je(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:bn(t,e),An(e),o&4&&lm(e);break;case 21:break;default:bn(t,e),An(e)}}function An(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(g0(n)){var o=n;break e}n=n.return}throw Error(j(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(is(a,""),o.flags&=-33);var r=am(e);md(e,r,a);break;case 3:case 4:var l=o.stateNode.containerInfo,c=am(e);hd(e,c,l);break;default:throw Error(j(161))}}catch(d){Je(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b9(e,t,n){X=e,_0(e)}function _0(e,t,n){for(var o=(e.mode&1)!==0;X!==null;){var a=X,r=a.child;if(a.tag===22&&o){var l=a.memoizedState!==null||pa;if(!l){var c=a.alternate,d=c!==null&&c.memoizedState!==null||kt;c=pa;var p=kt;if(pa=l,(kt=d)&&!p)for(X=a;X!==null;)l=X,d=l.child,l.tag===22&&l.memoizedState!==null?dm(a):d!==null?(d.return=l,X=d):dm(a);for(;r!==null;)X=r,_0(r),r=r.sibling;X=a,pa=c,kt=p}um(e)}else a.subtreeFlags&8772&&r!==null?(r.return=a,X=r):um(e)}}function um(e){for(;X!==null;){var t=X;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:kt||wl(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!kt)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:wn(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Vh(t,r,o);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vh(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var g=p.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&as(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}kt||t.flags&512&&pd(t)}catch(y){Je(t,t.return,y)}}if(t===e){X=null;break}if(n=t.sibling,n!==null){n.return=t.return,X=n;break}X=t.return}}function cm(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var n=t.sibling;if(n!==null){n.return=t.return,X=n;break}X=t.return}}function dm(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wl(4,t)}catch(d){Je(t,n,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(d){Je(t,a,d)}}var r=t.return;try{pd(t)}catch(d){Je(t,r,d)}break;case 5:var l=t.return;try{pd(t)}catch(d){Je(t,l,d)}}}catch(d){Je(t,t.return,d)}if(t===e){X=null;break}var c=t.sibling;if(c!==null){c.return=t.return,X=c;break}X=t.return}}var w9=Math.ceil,el=si.ReactCurrentDispatcher,vf=si.ReactCurrentOwner,fn=si.ReactCurrentBatchConfig,be=0,ht=null,ut=null,_t=0,Gt=0,Uo=Mi(0),dt=0,vs=null,Xi=0,El=0,_f=0,Yr=null,Ft=null,xf=0,Jo=1/0,Yn=null,tl=!1,gd=null,Ei=null,ha=!1,yi=null,nl=0,Qr=0,yd=null,Ta=-1,Ma=0;function Rt(){return be&6?it():Ta!==-1?Ta:Ta=it()}function Ci(e){return e.mode&1?be&2&&_t!==0?_t&-_t:r9.transition!==null?(Ma===0&&(Ma=ng()),Ma):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:ug(e.type)),e):1}function kn(e,t,n,o){if(50<Qr)throw Qr=0,yd=null,Error(j(185));Cs(e,n,o),(!(be&2)||e!==ht)&&(e===ht&&(!(be&2)&&(El|=n),dt===4&&mi(e,_t)),Ht(e,o),n===1&&be===0&&!(t.mode&1)&&(Jo=it()+500,_l&&Oi()))}function Ht(e,t){var n=e.callbackNode;r2(e,t);var o=Fa(e,e===ht?_t:0);if(o===0)n!==null&&xh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&xh(n),t===1)e.tag===0?o9(fm.bind(null,e)):Lg(fm.bind(null,e)),e9(function(){!(be&6)&&Oi()}),n=null;else{switch(ig(o)){case 1:n=Wd;break;case 4:n=eg;break;case 16:n=Ba;break;case 536870912:n=tg;break;default:n=Ba}n=P0(n,x0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function x0(e,t){if(Ta=-1,Ma=0,be&6)throw Error(j(327));var n=e.callbackNode;if(Zo()&&e.callbackNode!==n)return null;var o=Fa(e,e===ht?_t:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=il(e,o);else{t=o;var a=be;be|=2;var r=w0();(ht!==e||_t!==t)&&(Yn=null,Jo=it()+500,Gi(e,t));do try{S9();break}catch(c){b0(e,c)}while(1);rf(),el.current=r,be=a,ut!==null?t=0:(ht=null,_t=0,t=dt)}if(t!==0){if(t===2&&(a=Zc(e),a!==0&&(o=a,t=vd(e,a))),t===1)throw n=vs,Gi(e,0),mi(e,o),Ht(e,it()),n;if(t===6)mi(e,o);else{if(a=e.current.alternate,!(o&30)&&!E9(a)&&(t=il(e,o),t===2&&(r=Zc(e),r!==0&&(o=r,t=vd(e,r))),t===1))throw n=vs,Gi(e,0),mi(e,o),Ht(e,it()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(j(345));case 2:Fi(e,Ft,Yn);break;case 3:if(mi(e,o),(o&130023424)===o&&(t=xf+500-it(),10<t)){if(Fa(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Rt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Xc(Fi.bind(null,e,Ft,Yn),t);break}Fi(e,Ft,Yn);break;case 4:if(mi(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var l=31-Sn(o);r=1<<l,l=t[l],l>a&&(a=l),o&=~r}if(o=a,o=it()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*w9(o/1960))-o,10<o){e.timeoutHandle=Xc(Fi.bind(null,e,Ft,Yn),o);break}Fi(e,Ft,Yn);break;case 5:Fi(e,Ft,Yn);break;default:throw Error(j(329))}}}return Ht(e,it()),e.callbackNode===n?x0.bind(null,e):null}function vd(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(Gi(e,t).flags|=256),e=il(e,t),e!==2&&(t=Ft,Ft=n,t!==null&&_d(t)),e}function _d(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function E9(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],r=a.getSnapshot;a=a.value;try{if(!Pn(r(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mi(e,t){for(t&=~_f,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Sn(t),o=1<<n;e[n]=-1,t&=~o}}function fm(e){if(be&6)throw Error(j(327));Zo();var t=Fa(e,0);if(!(t&1))return Ht(e,it()),null;var n=il(e,t);if(e.tag!==0&&n===2){var o=Zc(e);o!==0&&(t=o,n=vd(e,o))}if(n===1)throw n=vs,Gi(e,0),mi(e,t),Ht(e,it()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fi(e,Ft,Yn),Ht(e,it()),null}function bf(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(Jo=it()+500,_l&&Oi())}}function Ji(e){yi!==null&&yi.tag===0&&!(be&6)&&Zo();var t=be;be|=1;var n=fn.transition,o=Oe;try{if(fn.transition=null,Oe=1,e)return e()}finally{Oe=o,fn.transition=n,be=t,!(be&6)&&Oi()}}function wf(){Gt=Uo.current,$e(Uo)}function Gi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,J2(n)),ut!==null)for(n=ut.return;n!==null;){var o=n;switch(tf(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Za();break;case 3:Qo(),$e(Dt),$e(Pt),df();break;case 5:cf(o);break;case 4:Qo();break;case 13:$e(We);break;case 19:$e(We);break;case 10:sf(o.type._context);break;case 22:case 23:wf()}n=n.return}if(ht=e,ut=e=Si(e.current,null),_t=Gt=t,dt=0,vs=null,_f=El=Xi=0,Ft=Yr=null,Zi!==null){for(t=0;t<Zi.length;t++)if(n=Zi[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,r=n.pending;if(r!==null){var l=r.next;r.next=a,o.next=l}n.pending=o}Zi=null}return e}function b0(e,t){do{var n=ut;try{if(rf(),ka.current=Ja,Xa){for(var o=Ve.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Xa=!1}if(Qi=0,pt=ct=Ve=null,Kr=!1,ms=0,vf.current=null,n===null||n.return===null){dt=1,vs=t,ut=null;break}e:{var r=e,l=n.return,c=n,d=t;if(t=_t,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,g=c,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var y=g.alternate;y?(g.updateQueue=y.updateQueue,g.memoizedState=y.memoizedState,g.lanes=y.lanes):(g.updateQueue=null,g.memoizedState=null)}var _=Jh(l);if(_!==null){_.flags&=-257,em(_,l,c,r,t),_.mode&1&&Xh(r,p,t),t=_,d=p;var C=t.updateQueue;if(C===null){var E=new Set;E.add(d),t.updateQueue=E}else C.add(d);break e}else{if(!(t&1)){Xh(r,p,t),Ef();break e}d=Error(j(426))}}else if(je&&c.mode&1){var R=Jh(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),em(R,l,c,r,t),nf(Xo(d,c));break e}}r=d=Xo(d,c),dt!==4&&(dt=2),Yr===null?Yr=[r]:Yr.push(r),r=l;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var x=o0(r,d,t);Wh(r,x);break e;case 1:c=d;var b=r.type,w=r.stateNode;if(!(r.flags&128)&&(typeof b.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ei===null||!Ei.has(w)))){r.flags|=65536,t&=-t,r.lanes|=t;var k=r0(r,c,t);Wh(r,k);break e}}r=r.return}while(r!==null)}C0(n)}catch(T){t=T,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function w0(){var e=el.current;return el.current=Ja,e===null?Ja:e}function Ef(){(dt===0||dt===3||dt===2)&&(dt=4),ht===null||!(Xi&268435455)&&!(El&268435455)||mi(ht,_t)}function il(e,t){var n=be;be|=2;var o=w0();(ht!==e||_t!==t)&&(Yn=null,Gi(e,t));do try{C9();break}catch(a){b0(e,a)}while(1);if(rf(),be=n,el.current=o,ut!==null)throw Error(j(261));return ht=null,_t=0,dt}function C9(){for(;ut!==null;)E0(ut)}function S9(){for(;ut!==null&&!Y_();)E0(ut)}function E0(e){var t=k0(e.alternate,e,Gt);e.memoizedProps=e.pendingProps,t===null?C0(e):ut=t,vf.current=null}function C0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=v9(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,ut=null;return}}else if(n=y9(n,t,Gt),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);dt===0&&(dt=5)}function Fi(e,t,n){var o=Oe,a=fn.transition;try{fn.transition=null,Oe=1,k9(e,t,n,o)}finally{fn.transition=a,Oe=o}return null}function k9(e,t,n,o){do Zo();while(yi!==null);if(be&6)throw Error(j(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(s2(e,r),e===ht&&(ut=ht=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,P0(Ba,function(){return Zo(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=fn.transition,fn.transition=null;var l=Oe;Oe=1;var c=be;be|=4,vf.current=null,x9(e,n),v0(n,e),V2(Yc),$a=!!qc,Yc=qc=null,e.current=n,b9(n),Q_(),be=c,Oe=l,fn.transition=r}else e.current=n;if(ha&&(ha=!1,yi=e,nl=a),r=e.pendingLanes,r===0&&(Ei=null),e2(n.stateNode),Ht(e,it()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(tl)throw tl=!1,e=gd,gd=null,e;return nl&1&&e.tag!==0&&Zo(),r=e.pendingLanes,r&1?e===yd?Qr++:(Qr=0,yd=e):Qr=0,Oi(),null}function Zo(){if(yi!==null){var e=ig(nl),t=fn.transition,n=Oe;try{if(fn.transition=null,Oe=16>e?16:e,yi===null)var o=!1;else{if(e=yi,yi=null,nl=0,be&6)throw Error(j(331));var a=be;for(be|=4,X=e.current;X!==null;){var r=X,l=r.child;if(X.flags&16){var c=r.deletions;if(c!==null){for(var d=0;d<c.length;d++){var p=c[d];for(X=p;X!==null;){var g=X;switch(g.tag){case 0:case 11:case 15:qr(8,g,r)}var m=g.child;if(m!==null)m.return=g,X=m;else for(;X!==null;){g=X;var y=g.sibling,_=g.return;if(m0(g),g===p){X=null;break}if(y!==null){y.return=_,X=y;break}X=_}}}var C=r.alternate;if(C!==null){var E=C.child;if(E!==null){C.child=null;do{var R=E.sibling;E.sibling=null,E=R}while(E!==null)}}X=r}}if(r.subtreeFlags&2064&&l!==null)l.return=r,X=l;else e:for(;X!==null;){if(r=X,r.flags&2048)switch(r.tag){case 0:case 11:case 15:qr(9,r,r.return)}var x=r.sibling;if(x!==null){x.return=r.return,X=x;break e}X=r.return}}var b=e.current;for(X=b;X!==null;){l=X;var w=l.child;if(l.subtreeFlags&2064&&w!==null)w.return=l,X=w;else e:for(l=b;X!==null;){if(c=X,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:wl(9,c)}}catch(T){Je(c,c.return,T)}if(c===l){X=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,X=k;break e}X=c.return}}if(be=a,Oi(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(hl,e)}catch{}o=!0}return o}finally{Oe=n,fn.transition=t}}return!1}function pm(e,t,n){t=Xo(n,t),t=o0(e,t,1),e=wi(e,t,1),t=Rt(),e!==null&&(Cs(e,1,t),Ht(e,t))}function Je(e,t,n){if(e.tag===3)pm(e,e,n);else for(;t!==null;){if(t.tag===3){pm(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ei===null||!Ei.has(o))){e=Xo(n,e),e=r0(t,e,1),t=wi(t,e,1),e=Rt(),t!==null&&(Cs(t,1,e),Ht(t,e));break}}t=t.return}}function P9(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=Rt(),e.pingedLanes|=e.suspendedLanes&n,ht===e&&(_t&n)===n&&(dt===4||dt===3&&(_t&130023424)===_t&&500>it()-xf?Gi(e,0):_f|=n),Ht(e,t)}function S0(e,t){t===0&&(e.mode&1?(t=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):t=1);var n=Rt();e=ii(e,t),e!==null&&(Cs(e,t,n),Ht(e,n))}function L9(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S0(e,n)}function T9(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(j(314))}o!==null&&o.delete(t),S0(e,n)}var k0;k0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,g9(e,t,n);$t=!!(e.flags&131072)}else $t=!1,je&&t.flags&1048576&&Tg(t,Ga,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;La(e,t),e=t.pendingProps;var a=Ko(t,Pt.current);Ho(t,n),a=pf(null,t,o,e,a,n);var r=hf();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,jt(o)?(r=!0,Wa(t)):r=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,lf(t),a.updater=xl,t.stateNode=a,a._reactInternals=t,rd(t,o,e,n),t=ld(null,t,o,!0,r,n)):(t.tag=0,je&&r&&ef(t),Ot(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(La(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=O9(o),e=wn(o,e),a){case 0:t=ad(null,t,o,e,n);break e;case 1:t=im(null,t,o,e,n);break e;case 11:t=tm(null,t,o,e,n);break e;case 14:t=nm(null,t,o,wn(o.type,e),n);break e}throw Error(j(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wn(o,a),ad(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wn(o,a),im(e,t,o,a,n);case 3:e:{if(u0(t),e===null)throw Error(j(387));o=t.pendingProps,r=t.memoizedState,a=r.element,Rg(e,t),Ya(t,o,null,n);var l=t.memoizedState;if(o=l.element,r.isDehydrated)if(r={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){a=Xo(Error(j(423)),t),t=om(e,t,o,n,a);break e}else if(o!==a){a=Xo(Error(j(424)),t),t=om(e,t,o,n,a);break e}else for(qt=bi(t.stateNode.containerInfo.firstChild),Yt=t,je=!0,Cn=null,n=Ng(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qo(),o===a){t=oi(e,t,n);break e}Ot(e,t,o,n)}t=t.child}return t;case 5:return Bg(t),e===null&&nd(t),o=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,l=a.children,Qc(o,a)?l=null:r!==null&&Qc(o,r)&&(t.flags|=32),l0(e,t),Ot(e,t,l,n),t.child;case 6:return e===null&&nd(t),null;case 13:return c0(e,t,n);case 4:return uf(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Yo(t,null,o,n):Ot(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wn(o,a),tm(e,t,o,a,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,r=t.memoizedProps,l=a.value,Ue(Ka,o._currentValue),o._currentValue=l,r!==null)if(Pn(r.value,l)){if(r.children===a.children&&!Dt.current){t=oi(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var c=r.dependencies;if(c!==null){l=r.child;for(var d=c.firstContext;d!==null;){if(d.context===o){if(r.tag===1){d=ei(-1,n&-n),d.tag=2;var p=r.updateQueue;if(p!==null){p=p.shared;var g=p.pending;g===null?d.next=d:(d.next=g.next,g.next=d),p.pending=d}}r.lanes|=n,d=r.alternate,d!==null&&(d.lanes|=n),id(r.return,n,t),c.lanes|=n;break}d=d.next}}else if(r.tag===10)l=r.type===t.type?null:r.child;else if(r.tag===18){if(l=r.return,l===null)throw Error(j(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),id(l,n,t),l=r.sibling}else l=r.child;if(l!==null)l.return=r;else for(l=r;l!==null;){if(l===t){l=null;break}if(r=l.sibling,r!==null){r.return=l.return,l=r;break}l=l.return}r=l}Ot(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Ho(t,n),a=hn(a),o=o(a),t.flags|=1,Ot(e,t,o,n),t.child;case 14:return o=t.type,a=wn(o,t.pendingProps),a=wn(o.type,a),nm(e,t,o,a,n);case 15:return s0(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:wn(o,a),La(e,t),t.tag=1,jt(o)?(e=!0,Wa(t)):e=!1,Ho(t,n),zg(t,o,a),rd(t,o,a,n),ld(null,t,o,!0,e,n);case 19:return d0(e,t,n);case 22:return a0(e,t,n)}throw Error(j(156,t.tag))};function P0(e,t){return J1(e,t)}function M9(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,t,n,o){return new M9(e,t,n,o)}function Cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O9(e){if(typeof e=="function")return Cf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jd)return 11;if(e===Hd)return 14}return 2}function Si(e,t){var n=e.alternate;return n===null?(n=dn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oa(e,t,n,o,a,r){var l=2;if(o=e,typeof e=="function")Cf(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ko:return Ki(n.children,a,r,t);case Dd:l=8,a|=8;break;case Tc:return e=dn(12,n,t,a|2),e.elementType=Tc,e.lanes=r,e;case Mc:return e=dn(13,n,t,a),e.elementType=Mc,e.lanes=r,e;case Oc:return e=dn(19,n,t,a),e.elementType=Oc,e.lanes=r,e;case U1:return Cl(n,a,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A1:l=10;break e;case z1:l=9;break e;case jd:l=11;break e;case Hd:l=14;break e;case fi:l=16,o=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=dn(l,n,t,a),t.elementType=e,t.type=o,t.lanes=r,t}function Ki(e,t,n,o){return e=dn(7,e,o,t),e.lanes=n,e}function Cl(e,t,n,o){return e=dn(22,e,o,t),e.elementType=U1,e.lanes=n,e.stateNode={isHidden:!1},e}function mc(e,t,n){return e=dn(6,e,null,t),e.lanes=n,e}function gc(e,t,n){return t=dn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I9(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Sf(e,t,n,o,a,r,l,c,d){return e=new I9(e,t,n,c,d),t===1?(t=1,r===!0&&(t|=8)):t=0,r=dn(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lf(r),e}function R9(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:So,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function L0(e){if(!e)return Pi;e=e._reactInternals;e:{if(ro(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(jt(n))return Pg(e,n,t)}return t}function T0(e,t,n,o,a,r,l,c,d){return e=Sf(n,o,!0,e,a,r,l,c,d),e.context=L0(null),n=e.current,o=Rt(),a=Ci(n),r=ei(o,a),r.callback=t??null,wi(n,r,a),e.current.lanes=a,Cs(e,a,o),Ht(e,o),e}function Sl(e,t,n,o){var a=t.current,r=Rt(),l=Ci(a);return n=L0(n),t.context===null?t.context=n:t.pendingContext=n,t=ei(r,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=wi(a,t,l),e!==null&&(kn(e,a,l,r),Sa(e,a,l)),l}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kf(e,t){hm(e,t),(e=e.alternate)&&hm(e,t)}function A9(){return null}var M0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pf(e){this._internalRoot=e}kl.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Sl(e,t,null,null)};kl.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ji(function(){Sl(null,e,null,null)}),t[ni]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hi.length&&t!==0&&t<hi[n].priority;n++);hi.splice(n,0,e),n===0&&lg(e)}};function Lf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mm(){}function z9(e,t,n,o,a){if(a){if(typeof o=="function"){var r=o;o=function(){var p=ol(l);r.call(p)}}var l=T0(t,o,e,0,null,!1,!1,"",mm);return e._reactRootContainer=l,e[ni]=l.current,cs(e.nodeType===8?e.parentNode:e),Ji(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var c=o;o=function(){var p=ol(d);c.call(p)}}var d=Sf(e,0,!1,null,null,!1,!1,"",mm);return e._reactRootContainer=d,e[ni]=d.current,cs(e.nodeType===8?e.parentNode:e),Ji(function(){Sl(t,d,n,o)}),d}function Ll(e,t,n,o,a){var r=n._reactRootContainer;if(r){var l=r;if(typeof a=="function"){var c=a;a=function(){var d=ol(l);c.call(d)}}Sl(t,l,e,a)}else l=z9(n,t,e,a,o);return ol(l)}og=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$r(t.pendingLanes);n!==0&&(Vd(t,n|1),Ht(t,it()),!(be&6)&&(Jo=it()+500,Oi()))}break;case 13:Ji(function(){var o=ii(e,1);if(o!==null){var a=Rt();kn(o,e,1,a)}}),kf(e,1)}};Gd=function(e){if(e.tag===13){var t=ii(e,134217728);if(t!==null){var n=Rt();kn(t,e,134217728,n)}kf(e,134217728)}};rg=function(e){if(e.tag===13){var t=Ci(e),n=ii(e,t);if(n!==null){var o=Rt();kn(n,e,t,o)}kf(e,t)}};sg=function(){return Oe};ag=function(e,t){var n=Oe;try{return Oe=e,t()}finally{Oe=n}};Dc=function(e,t,n){switch(t){case"input":if(Ac(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=vl(o);if(!a)throw Error(j(90));B1(o),Ac(o,a)}}}break;case"textarea":$1(e,n);break;case"select":t=n.value,t!=null&&Fo(e,!!n.multiple,t,!1)}};G1=bf;K1=Ji;var U9={usingClientEntryPoint:!1,Events:[ks,Mo,vl,W1,V1,bf]},Mr={findFiberByHostInstance:Hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},N9={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:si.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Q1(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||A9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ma=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ma.isDisabled&&ma.supportsFiber)try{hl=ma.inject(N9),Dn=ma}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U9;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(t))throw Error(j(200));return R9(e,t,null,n)};en.createRoot=function(e,t){if(!Lf(e))throw Error(j(299));var n=!1,o="",a=M0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Sf(e,1,!1,null,null,n,!1,o,a),e[ni]=t.current,cs(e.nodeType===8?e.parentNode:e),new Pf(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Q1(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return Ji(e)};en.hydrate=function(e,t,n){if(!Pl(t))throw Error(j(200));return Ll(null,e,t,!0,n)};en.hydrateRoot=function(e,t,n){if(!Lf(e))throw Error(j(405));var o=n!=null&&n.hydratedSources||null,a=!1,r="",l=M0;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=T0(t,null,e,1,n??null,a,!1,r,l),e[ni]=t.current,cs(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new kl(t)};en.render=function(e,t,n){if(!Pl(t))throw Error(j(200));return Ll(null,e,t,!1,n)};en.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(j(40));return e._reactRootContainer?(Ji(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[ni]=null})}),!0):!1};en.unstable_batchedUpdates=bf;en.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!Pl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Ll(e,t,n,!1,o)};en.version="18.2.0-next-9e3b772b8-20220608";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(e){console.error(e)}}O0(),T1.exports=en;var Ls=T1.exports;const ga=dl(Ls);var gm=Ls;Pc.createRoot=gm.createRoot,Pc.hydrateRoot=gm.hydrateRoot;const B9={black:"#000",white:"#fff"},_s=B9,F9={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},vo=F9,$9={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},_o=$9,D9={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},xo=D9,j9={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},bo=j9,H9={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},wo=H9,Z9={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Or=Z9,W9={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},V9=W9;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},M.apply(this,arguments)}function ji(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function I0(e){if(!ji(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=I0(e[n])}),t}function pn(e,t,n={clone:!0}){const o=n.clone?M({},e):e;return ji(e)&&ji(t)&&Object.keys(t).forEach(a=>{a!=="__proto__"&&(ji(t[a])&&a in e&&ji(e[a])?o[a]=pn(e[a],t[a],n):n.clone?o[a]=ji(t[a])?I0(t[a]):t[a]:o[a]=t[a])}),o}function Li(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}var Re={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=Symbol.for("react.element"),Mf=Symbol.for("react.portal"),Tl=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),Ol=Symbol.for("react.profiler"),Il=Symbol.for("react.provider"),Rl=Symbol.for("react.context"),G9=Symbol.for("react.server_context"),Al=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),Nl=Symbol.for("react.memo"),Bl=Symbol.for("react.lazy"),K9=Symbol.for("react.offscreen"),R0;R0=Symbol.for("react.module.reference");function gn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tf:switch(e=e.type,e){case Tl:case Ol:case Ml:case zl:case Ul:return e;default:switch(e=e&&e.$$typeof,e){case G9:case Rl:case Al:case Bl:case Nl:case Il:return e;default:return t}}case Mf:return t}}}Re.ContextConsumer=Rl;Re.ContextProvider=Il;Re.Element=Tf;Re.ForwardRef=Al;Re.Fragment=Tl;Re.Lazy=Bl;Re.Memo=Nl;Re.Portal=Mf;Re.Profiler=Ol;Re.StrictMode=Ml;Re.Suspense=zl;Re.SuspenseList=Ul;Re.isAsyncMode=function(){return!1};Re.isConcurrentMode=function(){return!1};Re.isContextConsumer=function(e){return gn(e)===Rl};Re.isContextProvider=function(e){return gn(e)===Il};Re.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tf};Re.isForwardRef=function(e){return gn(e)===Al};Re.isFragment=function(e){return gn(e)===Tl};Re.isLazy=function(e){return gn(e)===Bl};Re.isMemo=function(e){return gn(e)===Nl};Re.isPortal=function(e){return gn(e)===Mf};Re.isProfiler=function(e){return gn(e)===Ol};Re.isStrictMode=function(e){return gn(e)===Ml};Re.isSuspense=function(e){return gn(e)===zl};Re.isSuspenseList=function(e){return gn(e)===Ul};Re.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Tl||e===Ol||e===Ml||e===zl||e===Ul||e===K9||typeof e=="object"&&e!==null&&(e.$$typeof===Bl||e.$$typeof===Nl||e.$$typeof===Il||e.$$typeof===Rl||e.$$typeof===Al||e.$$typeof===R0||e.getModuleId!==void 0)};Re.typeOf=gn;function Ee(e){if(typeof e!="string")throw new Error(Li(7));return e.charAt(0).toUpperCase()+e.slice(1)}function ym(...e){return e.reduce((t,n)=>n==null?t:function(...a){t.apply(this,a),n.apply(this,a)},()=>{})}function A0(e,t=166){let n;function o(...a){const r=()=>{e.apply(this,a)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function yc(e,t){return S.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}function Qt(e){return e&&e.ownerDocument||document}function eo(e){return Qt(e).defaultView||window}function xd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const q9=typeof window<"u"?S.useLayoutEffect:S.useEffect,to=q9;let vm=0;function Y9(e){const[t,n]=S.useState(e),o=e||t;return S.useEffect(()=>{t==null&&(vm+=1,n(`mui-${vm}`))},[t]),o}const _m=kc["useId".toString()];function Q9(e){if(_m!==void 0){const t=_m();return e??t}return Y9(e)}function xm({controlled:e,default:t,name:n,state:o="value"}){const{current:a}=S.useRef(e!==void 0),[r,l]=S.useState(t),c=a?e:r,d=S.useCallback(p=>{a||l(p)},[]);return[c,d]}function No(e){const t=S.useRef(e);return to(()=>{t.current=e}),S.useCallback((...n)=>(0,t.current)(...n),[])}function At(...e){return S.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{xd(n,t)})},e)}let Fl=!0,bd=!1,bm;const X9={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function J9(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&X9[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function ex(e){e.metaKey||e.altKey||e.ctrlKey||(Fl=!0)}function vc(){Fl=!1}function tx(){this.visibilityState==="hidden"&&bd&&(Fl=!0)}function nx(e){e.addEventListener("keydown",ex,!0),e.addEventListener("mousedown",vc,!0),e.addEventListener("pointerdown",vc,!0),e.addEventListener("touchstart",vc,!0),e.addEventListener("visibilitychange",tx,!0)}function ix(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return Fl||J9(t)}function ox(){const e=S.useCallback(a=>{a!=null&&nx(a.ownerDocument)},[]),t=S.useRef(!1);function n(){return t.current?(bd=!0,window.clearTimeout(bm),bm=window.setTimeout(()=>{bd=!1},100),t.current=!1,!0):!1}function o(a){return ix(a)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:o,onBlur:n,ref:e}}function z0(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Of(e,t){const n=M({},t);return Object.keys(e).forEach(o=>{if(o.toString().match(/^(components|slots)$/))n[o]=M({},e[o],n[o]);else if(o.toString().match(/^(componentsProps|slotProps)$/)){const a=e[o]||{},r=t[o];n[o]={},!r||!Object.keys(r)?n[o]=a:!a||!Object.keys(a)?n[o]=r:(n[o]=M({},r),Object.keys(a).forEach(l=>{n[o][l]=Of(a[l],r[l])}))}else n[o]===void 0&&(n[o]=e[o])}),n}function et(e,t,n=void 0){const o={};return Object.keys(e).forEach(a=>{o[a]=e[a].reduce((r,l)=>{if(l){const c=t(l);c!==""&&r.push(c),n&&n[l]&&r.push(n[l])}return r},[]).join(" ")}),o}const wm=e=>e,rx=()=>{let e=wm;return{configure(t){e=t},generate(t){return e(t)},reset(){e=wm}}},sx=rx(),U0=sx,ax={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Ke(e,t,n="Mui"){const o=ax[t];return o?`${n}-${o}`:`${U0.generate(e)}-${t}`}function Ne(e,t,n="Mui"){const o={};return t.forEach(a=>{o[a]=Ke(e,a,n)}),o}const no="$$material";function ue(e,t){if(e==null)return{};var n={},o=Object.keys(e),a,r;for(r=0;r<o.length;r++)a=o[r],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function N0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var lx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ux=N0(function(e){return lx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function cx(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function dx(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var fx=function(){function e(n){var o=this;this._insertTag=function(a){var r;o.tags.length===0?o.insertionPoint?r=o.insertionPoint.nextSibling:o.prepend?r=o.container.firstChild:r=o.before:r=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(a,r),o.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(o){o.forEach(this._insertTag)},t.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dx(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var r=cx(a);try{r.insertRule(o,r.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(o));this.ctr++},t.flush=function(){this.tags.forEach(function(o){return o.parentNode&&o.parentNode.removeChild(o)}),this.tags=[],this.ctr=0},e}(),St="-ms-",rl="-moz-",Se="-webkit-",B0="comm",If="rule",Rf="decl",px="@import",F0="@keyframes",hx="@layer",mx=Math.abs,$l=String.fromCharCode,gx=Object.assign;function yx(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function $0(e){return e.trim()}function vx(e,t){return(e=t.exec(e))?e[0]:e}function ke(e,t,n){return e.replace(t,n)}function wd(e,t){return e.indexOf(t)}function vt(e,t){return e.charCodeAt(t)|0}function xs(e,t,n){return e.slice(t,n)}function Un(e){return e.length}function Af(e){return e.length}function ya(e,t){return t.push(e),e}function _x(e,t){return e.map(t).join("")}var Dl=1,er=1,D0=0,Zt=0,lt=0,sr="";function jl(e,t,n,o,a,r,l){return{value:e,root:t,parent:n,type:o,props:a,children:r,line:Dl,column:er,length:l,return:""}}function Ir(e,t){return gx(jl("",null,null,"",null,null,0),e,{length:-e.length},t)}function xx(){return lt}function bx(){return lt=Zt>0?vt(sr,--Zt):0,er--,lt===10&&(er=1,Dl--),lt}function Xt(){return lt=Zt<D0?vt(sr,Zt++):0,er++,lt===10&&(er=1,Dl++),lt}function Hn(){return vt(sr,Zt)}function Ia(){return Zt}function Ts(e,t){return xs(sr,e,t)}function bs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j0(e){return Dl=er=1,D0=Un(sr=e),Zt=0,[]}function H0(e){return sr="",e}function Ra(e){return $0(Ts(Zt-1,Ed(e===91?e+2:e===40?e+1:e)))}function wx(e){for(;(lt=Hn())&&lt<33;)Xt();return bs(e)>2||bs(lt)>3?"":" "}function Ex(e,t){for(;--t&&Xt()&&!(lt<48||lt>102||lt>57&&lt<65||lt>70&&lt<97););return Ts(e,Ia()+(t<6&&Hn()==32&&Xt()==32))}function Ed(e){for(;Xt();)switch(lt){case e:return Zt;case 34:case 39:e!==34&&e!==39&&Ed(lt);break;case 40:e===41&&Ed(e);break;case 92:Xt();break}return Zt}function Cx(e,t){for(;Xt()&&e+lt!==47+10;)if(e+lt===42+42&&Hn()===47)break;return"/*"+Ts(t,Zt-1)+"*"+$l(e===47?e:Xt())}function Sx(e){for(;!bs(Hn());)Xt();return Ts(e,Zt)}function kx(e){return H0(Aa("",null,null,null,[""],e=j0(e),0,[0],e))}function Aa(e,t,n,o,a,r,l,c,d){for(var p=0,g=0,m=l,y=0,_=0,C=0,E=1,R=1,x=1,b=0,w="",k=a,T=r,I=o,O=w;R;)switch(C=b,b=Xt()){case 40:if(C!=108&&vt(O,m-1)==58){wd(O+=ke(Ra(b),"&","&\f"),"&\f")!=-1&&(x=-1);break}case 34:case 39:case 91:O+=Ra(b);break;case 9:case 10:case 13:case 32:O+=wx(C);break;case 92:O+=Ex(Ia()-1,7);continue;case 47:switch(Hn()){case 42:case 47:ya(Px(Cx(Xt(),Ia()),t,n),d);break;default:O+="/"}break;case 123*E:c[p++]=Un(O)*x;case 125*E:case 59:case 0:switch(b){case 0:case 125:R=0;case 59+g:x==-1&&(O=ke(O,/\f/g,"")),_>0&&Un(O)-m&&ya(_>32?Cm(O+";",o,n,m-1):Cm(ke(O," ","")+";",o,n,m-2),d);break;case 59:O+=";";default:if(ya(I=Em(O,t,n,p,g,a,c,w,k=[],T=[],m),r),b===123)if(g===0)Aa(O,t,I,I,k,r,m,c,T);else switch(y===99&&vt(O,3)===110?100:y){case 100:case 108:case 109:case 115:Aa(e,I,I,o&&ya(Em(e,I,I,0,0,a,c,w,a,k=[],m),T),a,T,m,c,o?k:T);break;default:Aa(O,I,I,I,[""],T,0,c,T)}}p=g=_=0,E=x=1,w=O="",m=l;break;case 58:m=1+Un(O),_=C;default:if(E<1){if(b==123)--E;else if(b==125&&E++==0&&bx()==125)continue}switch(O+=$l(b),b*E){case 38:x=g>0?1:(O+="\f",-1);break;case 44:c[p++]=(Un(O)-1)*x,x=1;break;case 64:Hn()===45&&(O+=Ra(Xt())),y=Hn(),g=m=Un(w=O+=Sx(Ia())),b++;break;case 45:C===45&&Un(O)==2&&(E=0)}}return r}function Em(e,t,n,o,a,r,l,c,d,p,g){for(var m=a-1,y=a===0?r:[""],_=Af(y),C=0,E=0,R=0;C<o;++C)for(var x=0,b=xs(e,m+1,m=mx(E=l[C])),w=e;x<_;++x)(w=$0(E>0?y[x]+" "+b:ke(b,/&\f/g,y[x])))&&(d[R++]=w);return jl(e,t,n,a===0?If:c,d,p,g)}function Px(e,t,n){return jl(e,t,n,B0,$l(xx()),xs(e,2,-2),0)}function Cm(e,t,n,o){return jl(e,t,n,Rf,xs(e,0,o),xs(e,o+1,-1),o)}function Wo(e,t){for(var n="",o=Af(e),a=0;a<o;a++)n+=t(e[a],a,e,t)||"";return n}function Lx(e,t,n,o){switch(e.type){case hx:if(e.children.length)break;case px:case Rf:return e.return=e.return||e.value;case B0:return"";case F0:return e.return=e.value+"{"+Wo(e.children,o)+"}";case If:e.value=e.props.join(",")}return Un(n=Wo(e.children,o))?e.return=e.value+"{"+n+"}":""}function Tx(e){var t=Af(e);return function(n,o,a,r){for(var l="",c=0;c<t;c++)l+=e[c](n,o,a,r)||"";return l}}function Mx(e){return function(t){t.root||(t=t.return)&&e(t)}}var Ox=function(t,n,o){for(var a=0,r=0;a=r,r=Hn(),a===38&&r===12&&(n[o]=1),!bs(r);)Xt();return Ts(t,Zt)},Ix=function(t,n){var o=-1,a=44;do switch(bs(a)){case 0:a===38&&Hn()===12&&(n[o]=1),t[o]+=Ox(Zt-1,n,o);break;case 2:t[o]+=Ra(a);break;case 4:if(a===44){t[++o]=Hn()===58?"&\f":"",n[o]=t[o].length;break}default:t[o]+=$l(a)}while(a=Xt());return t},Rx=function(t,n){return H0(Ix(j0(t),n))},Sm=new WeakMap,Ax=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,o=t.parent,a=t.column===o.column&&t.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Sm.get(o))&&!a){Sm.set(t,!0);for(var r=[],l=Rx(n,r),c=o.props,d=0,p=0;d<l.length;d++)for(var g=0;g<c.length;g++,p++)t.props[p]=r[d]?l[d].replace(/&\f/g,c[g]):c[g]+" "+l[d]}}},zx=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Z0(e,t){switch(yx(e,t)){case 5103:return Se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+e+rl+e+St+e+e;case 6828:case 4268:return Se+e+St+e+e;case 6165:return Se+e+St+"flex-"+e+e;case 5187:return Se+e+ke(e,/(\w+).+(:[^]+)/,Se+"box-$1$2"+St+"flex-$1$2")+e;case 5443:return Se+e+St+"flex-item-"+ke(e,/flex-|-self/,"")+e;case 4675:return Se+e+St+"flex-line-pack"+ke(e,/align-content|flex-|-self/,"")+e;case 5548:return Se+e+St+ke(e,"shrink","negative")+e;case 5292:return Se+e+St+ke(e,"basis","preferred-size")+e;case 6060:return Se+"box-"+ke(e,"-grow","")+Se+e+St+ke(e,"grow","positive")+e;case 4554:return Se+ke(e,/([^-])(transform)/g,"$1"+Se+"$2")+e;case 6187:return ke(ke(ke(e,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),e,"")+e;case 5495:case 3959:return ke(e,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return ke(ke(e,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+St+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+e+e;case 4095:case 3583:case 4068:case 2532:return ke(e,/(.+)-inline(.+)/,Se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Un(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return ke(e,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+rl+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wd(e,"stretch")?Z0(ke(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(vt(e,t+1)!==115)break;case 6444:switch(vt(e,Un(e)-3-(~wd(e,"!important")&&10))){case 107:return ke(e,":",":"+Se)+e;case 101:return ke(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Se+(vt(e,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+St+"$2box$3")+e}break;case 5936:switch(vt(e,t+11)){case 114:return Se+e+St+ke(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Se+e+St+ke(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Se+e+St+ke(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Se+e+St+e+e}return e}var Ux=function(t,n,o,a){if(t.length>-1&&!t.return)switch(t.type){case Rf:t.return=Z0(t.value,t.length);break;case F0:return Wo([Ir(t,{value:ke(t.value,"@","@"+Se)})],a);case If:if(t.length)return _x(t.props,function(r){switch(vx(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Wo([Ir(t,{props:[ke(r,/:(read-\w+)/,":"+rl+"$1")]})],a);case"::placeholder":return Wo([Ir(t,{props:[ke(r,/:(plac\w+)/,":"+Se+"input-$1")]}),Ir(t,{props:[ke(r,/:(plac\w+)/,":"+rl+"$1")]}),Ir(t,{props:[ke(r,/:(plac\w+)/,St+"input-$1")]})],a)}return""})}},Nx=[Ux],Bx=function(t){var n=t.key;if(n==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(E){var R=E.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var a=t.stylisPlugins||Nx,r={},l,c=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(E){for(var R=E.getAttribute("data-emotion").split(" "),x=1;x<R.length;x++)r[R[x]]=!0;c.push(E)});var d,p=[Ax,zx];{var g,m=[Lx,Mx(function(E){g.insert(E)})],y=Tx(p.concat(a,m)),_=function(R){return Wo(kx(R),y)};d=function(R,x,b,w){g=b,_(R?R+"{"+x.styles+"}":x.styles),w&&(C.inserted[x.name]=!0)}}var C={key:n,sheet:new fx({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:r,registered:{},insert:d};return C.sheet.hydrate(c),C},W0={exports:{}},Ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mt=typeof Symbol=="function"&&Symbol.for,zf=mt?Symbol.for("react.element"):60103,Uf=mt?Symbol.for("react.portal"):60106,Hl=mt?Symbol.for("react.fragment"):60107,Zl=mt?Symbol.for("react.strict_mode"):60108,Wl=mt?Symbol.for("react.profiler"):60114,Vl=mt?Symbol.for("react.provider"):60109,Gl=mt?Symbol.for("react.context"):60110,Nf=mt?Symbol.for("react.async_mode"):60111,Kl=mt?Symbol.for("react.concurrent_mode"):60111,ql=mt?Symbol.for("react.forward_ref"):60112,Yl=mt?Symbol.for("react.suspense"):60113,Fx=mt?Symbol.for("react.suspense_list"):60120,Ql=mt?Symbol.for("react.memo"):60115,Xl=mt?Symbol.for("react.lazy"):60116,$x=mt?Symbol.for("react.block"):60121,Dx=mt?Symbol.for("react.fundamental"):60117,jx=mt?Symbol.for("react.responder"):60118,Hx=mt?Symbol.for("react.scope"):60119;function nn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zf:switch(e=e.type,e){case Nf:case Kl:case Hl:case Wl:case Zl:case Yl:return e;default:switch(e=e&&e.$$typeof,e){case Gl:case ql:case Xl:case Ql:case Vl:return e;default:return t}}case Uf:return t}}}function V0(e){return nn(e)===Kl}Ie.AsyncMode=Nf;Ie.ConcurrentMode=Kl;Ie.ContextConsumer=Gl;Ie.ContextProvider=Vl;Ie.Element=zf;Ie.ForwardRef=ql;Ie.Fragment=Hl;Ie.Lazy=Xl;Ie.Memo=Ql;Ie.Portal=Uf;Ie.Profiler=Wl;Ie.StrictMode=Zl;Ie.Suspense=Yl;Ie.isAsyncMode=function(e){return V0(e)||nn(e)===Nf};Ie.isConcurrentMode=V0;Ie.isContextConsumer=function(e){return nn(e)===Gl};Ie.isContextProvider=function(e){return nn(e)===Vl};Ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zf};Ie.isForwardRef=function(e){return nn(e)===ql};Ie.isFragment=function(e){return nn(e)===Hl};Ie.isLazy=function(e){return nn(e)===Xl};Ie.isMemo=function(e){return nn(e)===Ql};Ie.isPortal=function(e){return nn(e)===Uf};Ie.isProfiler=function(e){return nn(e)===Wl};Ie.isStrictMode=function(e){return nn(e)===Zl};Ie.isSuspense=function(e){return nn(e)===Yl};Ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hl||e===Kl||e===Wl||e===Zl||e===Yl||e===Fx||typeof e=="object"&&e!==null&&(e.$$typeof===Xl||e.$$typeof===Ql||e.$$typeof===Vl||e.$$typeof===Gl||e.$$typeof===ql||e.$$typeof===Dx||e.$$typeof===jx||e.$$typeof===Hx||e.$$typeof===$x)};Ie.typeOf=nn;W0.exports=Ie;var Zx=W0.exports,G0=Zx,Wx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Vx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K0={};K0[G0.ForwardRef]=Wx;K0[G0.Memo]=Vx;var Gx=!0;function Kx(e,t,n){var o="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):o+=a+" "}),o}var q0=function(t,n,o){var a=t.key+"-"+n.name;(o===!1||Gx===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Y0=function(t,n,o){q0(t,n,o);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var r=n;do t.insert(n===r?"."+a:"",r,t.sheet,!0),r=r.next;while(r!==void 0)}};function qx(e){for(var t=0,n,o=0,a=e.length;a>=4;++o,a-=4)n=e.charCodeAt(o)&255|(e.charCodeAt(++o)&255)<<8|(e.charCodeAt(++o)&255)<<16|(e.charCodeAt(++o)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(o+2)&255)<<16;case 2:t^=(e.charCodeAt(o+1)&255)<<8;case 1:t^=e.charCodeAt(o)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Yx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qx=/[A-Z]|^ms/g,Xx=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Q0=function(t){return t.charCodeAt(1)===45},km=function(t){return t!=null&&typeof t!="boolean"},_c=N0(function(e){return Q0(e)?e:e.replace(Qx,"-$&").toLowerCase()}),Pm=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Xx,function(o,a,r){return Nn={name:a,styles:r,next:Nn},a})}return Yx[t]!==1&&!Q0(t)&&typeof n=="number"&&n!==0?n+"px":n};function ws(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Nn={name:n.name,styles:n.styles,next:Nn},n.name;if(n.styles!==void 0){var o=n.next;if(o!==void 0)for(;o!==void 0;)Nn={name:o.name,styles:o.styles,next:Nn},o=o.next;var a=n.styles+";";return a}return Jx(e,t,n)}case"function":{if(e!==void 0){var r=Nn,l=n(e);return Nn=r,ws(e,t,l)}break}}if(t==null)return n;var c=t[n];return c!==void 0?c:n}function Jx(e,t,n){var o="";if(Array.isArray(n))for(var a=0;a<n.length;a++)o+=ws(e,t,n[a])+";";else for(var r in n){var l=n[r];if(typeof l!="object")t!=null&&t[l]!==void 0?o+=r+"{"+t[l]+"}":km(l)&&(o+=_c(r)+":"+Pm(r,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var c=0;c<l.length;c++)km(l[c])&&(o+=_c(r)+":"+Pm(r,l[c])+";");else{var d=ws(e,t,l);switch(r){case"animation":case"animationName":{o+=_c(r)+":"+d+";";break}default:o+=r+"{"+d+"}"}}}return o}var Lm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Nn,Bf=function(t,n,o){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,r="";Nn=void 0;var l=t[0];l==null||l.raw===void 0?(a=!1,r+=ws(o,n,l)):r+=l[0];for(var c=1;c<t.length;c++)r+=ws(o,n,t[c]),a&&(r+=l[c]);Lm.lastIndex=0;for(var d="",p;(p=Lm.exec(r))!==null;)d+="-"+p[1];var g=qx(r)+d;return{name:g,styles:r,next:Nn}},eb=function(t){return t()},X0=kc["useInsertionEffect"]?kc["useInsertionEffect"]:!1,tb=X0||eb,Tm=X0||S.useLayoutEffect,J0=S.createContext(typeof HTMLElement<"u"?Bx({key:"css"}):null);J0.Provider;var ey=function(t){return S.forwardRef(function(n,o){var a=S.useContext(J0);return t(n,a,o)})},Jl=S.createContext({}),nb=ey(function(e,t){var n=e.styles,o=Bf([n],void 0,S.useContext(Jl)),a=S.useRef();return Tm(function(){var r=t.key+"-global",l=new t.sheet.constructor({key:r,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),c=!1,d=document.querySelector('style[data-emotion="'+r+" "+o.name+'"]');return t.sheet.tags.length&&(l.before=t.sheet.tags[0]),d!==null&&(c=!0,d.setAttribute("data-emotion",r),l.hydrate([d])),a.current=[l,c],function(){l.flush()}},[t]),Tm(function(){var r=a.current,l=r[0],c=r[1];if(c){r[1]=!1;return}if(o.next!==void 0&&Y0(t,o.next,!0),l.tags.length){var d=l.tags[l.tags.length-1].nextElementSibling;l.before=d,l.flush()}t.insert("",o,l,!1)},[t,o.name]),null});function ib(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Bf(t)}var Ff=function(){var t=ib.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},ob=ux,rb=function(t){return t!=="theme"},Mm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?ob:rb},Om=function(t,n,o){var a;if(n){var r=n.shouldForwardProp;a=t.__emotion_forwardProp&&r?function(l){return t.__emotion_forwardProp(l)&&r(l)}:r}return typeof a!="function"&&o&&(a=t.__emotion_forwardProp),a},sb=function(t){var n=t.cache,o=t.serialized,a=t.isStringTag;return q0(n,o,a),tb(function(){return Y0(n,o,a)}),null},ab=function e(t,n){var o=t.__emotion_real===t,a=o&&t.__emotion_base||t,r,l;n!==void 0&&(r=n.label,l=n.target);var c=Om(t,n,o),d=c||Mm(a),p=!d("as");return function(){var g=arguments,m=o&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(r!==void 0&&m.push("label:"+r+";"),g[0]==null||g[0].raw===void 0)m.push.apply(m,g);else{m.push(g[0][0]);for(var y=g.length,_=1;_<y;_++)m.push(g[_],g[0][_])}var C=ey(function(E,R,x){var b=p&&E.as||a,w="",k=[],T=E;if(E.theme==null){T={};for(var I in E)T[I]=E[I];T.theme=S.useContext(Jl)}typeof E.className=="string"?w=Kx(R.registered,k,E.className):E.className!=null&&(w=E.className+" ");var O=Bf(m.concat(k),R.registered,T);w+=R.key+"-"+O.name,l!==void 0&&(w+=" "+l);var N=p&&c===void 0?Mm(b):d,G={};for(var $ in E)p&&$==="as"||N($)&&(G[$]=E[$]);return G.className=w,G.ref=x,S.createElement(S.Fragment,null,S.createElement(sb,{cache:R,serialized:O,isStringTag:typeof b=="string"}),S.createElement(b,G))});return C.displayName=r!==void 0?r:"Styled("+(typeof a=="string"?a:a.displayName||a.name||"Component")+")",C.defaultProps=t.defaultProps,C.__emotion_real=C,C.__emotion_base=a,C.__emotion_styles=m,C.__emotion_forwardProp=c,Object.defineProperty(C,"toString",{value:function(){return"."+l}}),C.withComponent=function(E,R){return e(E,M({},n,R,{shouldForwardProp:Om(C,R,!0)})).apply(void 0,m)},C}},lb=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Cd=ab.bind();lb.forEach(function(e){Cd[e]=Cd(e)});function ub(e){return e==null||Object.keys(e).length===0}function cb(e){const{styles:t,defaultTheme:n={}}=e,o=typeof t=="function"?a=>t(ub(a)?n:a):t;return B.jsx(nb,{styles:o})}/**
 * @mui/styled-engine v5.14.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function ty(e,t){return Cd(e,t)}const db=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},fb=["values","unit","step"],pb=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,o)=>n.val-o.val),t.reduce((n,o)=>M({},n,{[o.key]:o.val}),{})};function hb(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:o=5}=e,a=ue(e,fb),r=pb(t),l=Object.keys(r);function c(y){return`@media (min-width:${typeof t[y]=="number"?t[y]:y}${n})`}function d(y){return`@media (max-width:${(typeof t[y]=="number"?t[y]:y)-o/100}${n})`}function p(y,_){const C=l.indexOf(_);return`@media (min-width:${typeof t[y]=="number"?t[y]:y}${n}) and (max-width:${(C!==-1&&typeof t[l[C]]=="number"?t[l[C]]:_)-o/100}${n})`}function g(y){return l.indexOf(y)+1<l.length?p(y,l[l.indexOf(y)+1]):c(y)}function m(y){const _=l.indexOf(y);return _===0?c(l[1]):_===l.length-1?d(l[_]):p(y,l[l.indexOf(y)+1]).replace("@media","@media not all and")}return M({keys:l,values:r,up:c,down:d,between:p,only:g,not:m,unit:n},a)}const mb={borderRadius:4},gb=mb;function Xr(e,t){return t?pn(e,t,{clone:!1}):e}const $f={xs:0,sm:600,md:900,lg:1200,xl:1536},Im={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${$f[e]}px)`};function ri(e,t,n){const o=e.theme||{};if(Array.isArray(t)){const r=o.breakpoints||Im;return t.reduce((l,c,d)=>(l[r.up(r.keys[d])]=n(t[d]),l),{})}if(typeof t=="object"){const r=o.breakpoints||Im;return Object.keys(t).reduce((l,c)=>{if(Object.keys(r.values||$f).indexOf(c)!==-1){const d=r.up(c);l[d]=n(t[c],c)}else{const d=c;l[d]=t[d]}return l},{})}return n(t)}function yb(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((o,a)=>{const r=e.up(a);return o[r]={},o},{}))||{}}function vb(e,t){return e.reduce((n,o)=>{const a=n[o];return(!a||Object.keys(a).length===0)&&delete n[o],n},t)}function eu(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const o=`vars.${t}`.split(".").reduce((a,r)=>a&&a[r]?a[r]:null,e);if(o!=null)return o}return t.split(".").reduce((o,a)=>o&&o[a]!=null?o[a]:null,e)}function sl(e,t,n,o=n){let a;return typeof e=="function"?a=e(n):Array.isArray(e)?a=e[n]||o:a=eu(e,n)||o,t&&(a=t(a,o,e)),a}function Le(e){const{prop:t,cssProperty:n=e.prop,themeKey:o,transform:a}=e,r=l=>{if(l[t]==null)return null;const c=l[t],d=l.theme,p=eu(d,o)||{};return ri(l,c,m=>{let y=sl(p,a,m);return m===y&&typeof m=="string"&&(y=sl(p,a,`${t}${m==="default"?"":Ee(m)}`,m)),n===!1?y:{[n]:y}})};return r.propTypes={},r.filterProps=[t],r}function _b(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const xb={m:"margin",p:"padding"},bb={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Rm={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},wb=_b(e=>{if(e.length>2)if(Rm[e])e=Rm[e];else return[e];const[t,n]=e.split(""),o=xb[t],a=bb[n]||"";return Array.isArray(a)?a.map(r=>o+r):[o+a]}),Df=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],jf=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Df,...jf];function Ms(e,t,n,o){var a;const r=(a=eu(e,t,!1))!=null?a:n;return typeof r=="number"?l=>typeof l=="string"?l:r*l:Array.isArray(r)?l=>typeof l=="string"?l:r[l]:typeof r=="function"?r:()=>{}}function ny(e){return Ms(e,"spacing",8)}function Os(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),o=e(n);return t>=0?o:typeof o=="number"?-o:`-${o}`}function Eb(e,t){return n=>e.reduce((o,a)=>(o[a]=Os(t,n),o),{})}function Cb(e,t,n,o){if(t.indexOf(n)===-1)return null;const a=wb(n),r=Eb(a,o),l=e[n];return ri(e,l,r)}function iy(e,t){const n=ny(e.theme);return Object.keys(e).map(o=>Cb(e,t,o,n)).reduce(Xr,{})}function Qe(e){return iy(e,Df)}Qe.propTypes={};Qe.filterProps=Df;function Xe(e){return iy(e,jf)}Xe.propTypes={};Xe.filterProps=jf;function Sb(e=8){if(e.mui)return e;const t=ny({spacing:e}),n=(...o)=>(o.length===0?[1]:o).map(r=>{const l=t(r);return typeof l=="number"?`${l}px`:l}).join(" ");return n.mui=!0,n}function tu(...e){const t=e.reduce((o,a)=>(a.filterProps.forEach(r=>{o[r]=a}),o),{}),n=o=>Object.keys(o).reduce((a,r)=>t[r]?Xr(a,t[r](o)):a,{});return n.propTypes={},n.filterProps=e.reduce((o,a)=>o.concat(a.filterProps),[]),n}function Fn(e){return typeof e!="number"?e:`${e}px solid`}const kb=Le({prop:"border",themeKey:"borders",transform:Fn}),Pb=Le({prop:"borderTop",themeKey:"borders",transform:Fn}),Lb=Le({prop:"borderRight",themeKey:"borders",transform:Fn}),Tb=Le({prop:"borderBottom",themeKey:"borders",transform:Fn}),Mb=Le({prop:"borderLeft",themeKey:"borders",transform:Fn}),Ob=Le({prop:"borderColor",themeKey:"palette"}),Ib=Le({prop:"borderTopColor",themeKey:"palette"}),Rb=Le({prop:"borderRightColor",themeKey:"palette"}),Ab=Le({prop:"borderBottomColor",themeKey:"palette"}),zb=Le({prop:"borderLeftColor",themeKey:"palette"}),nu=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Ms(e.theme,"shape.borderRadius",4),n=o=>({borderRadius:Os(t,o)});return ri(e,e.borderRadius,n)}return null};nu.propTypes={};nu.filterProps=["borderRadius"];tu(kb,Pb,Lb,Tb,Mb,Ob,Ib,Rb,Ab,zb,nu);const iu=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Ms(e.theme,"spacing",8),n=o=>({gap:Os(t,o)});return ri(e,e.gap,n)}return null};iu.propTypes={};iu.filterProps=["gap"];const ou=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Ms(e.theme,"spacing",8),n=o=>({columnGap:Os(t,o)});return ri(e,e.columnGap,n)}return null};ou.propTypes={};ou.filterProps=["columnGap"];const ru=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Ms(e.theme,"spacing",8),n=o=>({rowGap:Os(t,o)});return ri(e,e.rowGap,n)}return null};ru.propTypes={};ru.filterProps=["rowGap"];const Ub=Le({prop:"gridColumn"}),Nb=Le({prop:"gridRow"}),Bb=Le({prop:"gridAutoFlow"}),Fb=Le({prop:"gridAutoColumns"}),$b=Le({prop:"gridAutoRows"}),Db=Le({prop:"gridTemplateColumns"}),jb=Le({prop:"gridTemplateRows"}),Hb=Le({prop:"gridTemplateAreas"}),Zb=Le({prop:"gridArea"});tu(iu,ou,ru,Ub,Nb,Bb,Fb,$b,Db,jb,Hb,Zb);function Vo(e,t){return t==="grey"?t:e}const Wb=Le({prop:"color",themeKey:"palette",transform:Vo}),Vb=Le({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Vo}),Gb=Le({prop:"backgroundColor",themeKey:"palette",transform:Vo});tu(Wb,Vb,Gb);function Kt(e){return e<=1&&e!==0?`${e*100}%`:e}const Kb=Le({prop:"width",transform:Kt}),Hf=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var o;return{maxWidth:((o=e.theme)==null||(o=o.breakpoints)==null||(o=o.values)==null?void 0:o[n])||$f[n]||Kt(n)}};return ri(e,e.maxWidth,t)}return null};Hf.filterProps=["maxWidth"];const qb=Le({prop:"minWidth",transform:Kt}),Yb=Le({prop:"height",transform:Kt}),Qb=Le({prop:"maxHeight",transform:Kt}),Xb=Le({prop:"minHeight",transform:Kt});Le({prop:"size",cssProperty:"width",transform:Kt});Le({prop:"size",cssProperty:"height",transform:Kt});const Jb=Le({prop:"boxSizing"});tu(Kb,Hf,qb,Yb,Qb,Xb,Jb);const ew={border:{themeKey:"borders",transform:Fn},borderTop:{themeKey:"borders",transform:Fn},borderRight:{themeKey:"borders",transform:Fn},borderBottom:{themeKey:"borders",transform:Fn},borderLeft:{themeKey:"borders",transform:Fn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:nu},color:{themeKey:"palette",transform:Vo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Vo},backgroundColor:{themeKey:"palette",transform:Vo},p:{style:Xe},pt:{style:Xe},pr:{style:Xe},pb:{style:Xe},pl:{style:Xe},px:{style:Xe},py:{style:Xe},padding:{style:Xe},paddingTop:{style:Xe},paddingRight:{style:Xe},paddingBottom:{style:Xe},paddingLeft:{style:Xe},paddingX:{style:Xe},paddingY:{style:Xe},paddingInline:{style:Xe},paddingInlineStart:{style:Xe},paddingInlineEnd:{style:Xe},paddingBlock:{style:Xe},paddingBlockStart:{style:Xe},paddingBlockEnd:{style:Xe},m:{style:Qe},mt:{style:Qe},mr:{style:Qe},mb:{style:Qe},ml:{style:Qe},mx:{style:Qe},my:{style:Qe},margin:{style:Qe},marginTop:{style:Qe},marginRight:{style:Qe},marginBottom:{style:Qe},marginLeft:{style:Qe},marginX:{style:Qe},marginY:{style:Qe},marginInline:{style:Qe},marginInlineStart:{style:Qe},marginInlineEnd:{style:Qe},marginBlock:{style:Qe},marginBlockStart:{style:Qe},marginBlockEnd:{style:Qe},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:iu},rowGap:{style:ru},columnGap:{style:ou},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Kt},maxWidth:{style:Hf},minWidth:{transform:Kt},height:{transform:Kt},maxHeight:{transform:Kt},minHeight:{transform:Kt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},su=ew;function tw(...e){const t=e.reduce((o,a)=>o.concat(Object.keys(a)),[]),n=new Set(t);return e.every(o=>n.size===Object.keys(o).length)}function nw(e,t){return typeof e=="function"?e(t):e}function iw(){function e(n,o,a,r){const l={[n]:o,theme:a},c=r[n];if(!c)return{[n]:o};const{cssProperty:d=n,themeKey:p,transform:g,style:m}=c;if(o==null)return null;if(p==="typography"&&o==="inherit")return{[n]:o};const y=eu(a,p)||{};return m?m(l):ri(l,o,C=>{let E=sl(y,g,C);return C===E&&typeof C=="string"&&(E=sl(y,g,`${n}${C==="default"?"":Ee(C)}`,C)),d===!1?E:{[d]:E}})}function t(n){var o;const{sx:a,theme:r={}}=n||{};if(!a)return null;const l=(o=r.unstable_sxConfig)!=null?o:su;function c(d){let p=d;if(typeof d=="function")p=d(r);else if(typeof d!="object")return d;if(!p)return null;const g=yb(r.breakpoints),m=Object.keys(g);let y=g;return Object.keys(p).forEach(_=>{const C=nw(p[_],r);if(C!=null)if(typeof C=="object")if(l[_])y=Xr(y,e(_,C,r,l));else{const E=ri({theme:r},C,R=>({[_]:R}));tw(E,C)?y[_]=t({sx:C,theme:r}):y=Xr(y,E)}else y=Xr(y,e(_,C,r,l))}),vb(m,y)}return Array.isArray(a)?a.map(c):c(a)}return t}const oy=iw();oy.filterProps=["sx"];const au=oy,ow=["breakpoints","palette","spacing","shape"];function Zf(e={},...t){const{breakpoints:n={},palette:o={},spacing:a,shape:r={}}=e,l=ue(e,ow),c=hb(n),d=Sb(a);let p=pn({breakpoints:c,direction:"ltr",components:{},palette:M({mode:"light"},o),spacing:d,shape:M({},gb,r)},l);return p=t.reduce((g,m)=>pn(g,m),p),p.unstable_sxConfig=M({},su,l==null?void 0:l.unstable_sxConfig),p.unstable_sx=function(m){return au({sx:m,theme:this})},p}function rw(e){return Object.keys(e).length===0}function ry(e=null){const t=S.useContext(Jl);return!t||rw(t)?e:t}const sw=Zf();function lu(e=sw){return ry(e)}function aw({styles:e,themeId:t,defaultTheme:n={}}){const o=lu(n),a=typeof e=="function"?e(t&&o[t]||o):e;return B.jsx(cb,{styles:a})}const lw=["sx"],uw=e=>{var t,n;const o={systemProps:{},otherProps:{}},a=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:su;return Object.keys(e).forEach(r=>{a[r]?o.systemProps[r]=e[r]:o.otherProps[r]=e[r]}),o};function sy(e){const{sx:t}=e,n=ue(e,lw),{systemProps:o,otherProps:a}=uw(n);let r;return Array.isArray(t)?r=[o,...t]:typeof t=="function"?r=(...l)=>{const c=t(...l);return ji(c)?M({},o,c):o}:r=M({},o,t),M({},a,{sx:r})}function ay(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ay(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function ge(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=ay(e))&&(o&&(o+=" "),o+=t);return o}const cw=["className","component"];function dw(e={}){const{themeId:t,defaultTheme:n,defaultClassName:o="MuiBox-root",generateClassName:a}=e,r=ty("div",{shouldForwardProp:c=>c!=="theme"&&c!=="sx"&&c!=="as"})(au);return S.forwardRef(function(d,p){const g=lu(n),m=sy(d),{className:y,component:_="div"}=m,C=ue(m,cw);return B.jsx(r,M({as:_,ref:p,className:ge(y,a?a(o):o),theme:t&&g[t]||g},C))})}const fw=["variant"];function Am(e){return e.length===0}function ly(e){const{variant:t}=e,n=ue(e,fw);let o=t||"";return Object.keys(n).sort().forEach(a=>{a==="color"?o+=Am(o)?e[a]:Ee(e[a]):o+=`${Am(o)?a:Ee(a)}${Ee(e[a].toString())}`}),o}const pw=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function hw(e){return Object.keys(e).length===0}function mw(e){return typeof e=="string"&&e.charCodeAt(0)>96}const gw=(e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null,yw=(e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const o={};return n.forEach(a=>{const r=ly(a.props);o[r]=a.style}),o},vw=(e,t,n,o)=>{var a;const{ownerState:r={}}=e,l=[],c=n==null||(a=n.components)==null||(a=a[o])==null?void 0:a.variants;return c&&c.forEach(d=>{let p=!0;Object.keys(d.props).forEach(g=>{r[g]!==d.props[g]&&e[g]!==d.props[g]&&(p=!1)}),p&&l.push(t[ly(d.props)])}),l};function Jr(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const _w=Zf(),xw=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function Rr({defaultTheme:e,theme:t,themeId:n}){return hw(t)?e:t[n]||t}function bw(e){return e?(t,n)=>n[e]:null}function ww(e={}){const{themeId:t,defaultTheme:n=_w,rootShouldForwardProp:o=Jr,slotShouldForwardProp:a=Jr}=e,r=l=>au(M({},l,{theme:Rr(M({},l,{defaultTheme:n,themeId:t}))}));return r.__mui_systemSx=!0,(l,c={})=>{db(l,k=>k.filter(T=>!(T!=null&&T.__mui_systemSx)));const{name:d,slot:p,skipVariantsResolver:g,skipSx:m,overridesResolver:y=bw(xw(p))}=c,_=ue(c,pw),C=g!==void 0?g:p&&p!=="Root"&&p!=="root"||!1,E=m||!1;let R,x=Jr;p==="Root"||p==="root"?x=o:p?x=a:mw(l)&&(x=void 0);const b=ty(l,M({shouldForwardProp:x,label:R},_)),w=(k,...T)=>{const I=T?T.map($=>typeof $=="function"&&$.__emotion_real!==$?Z=>$(M({},Z,{theme:Rr(M({},Z,{defaultTheme:n,themeId:t}))})):$):[];let O=k;d&&y&&I.push($=>{const Z=Rr(M({},$,{defaultTheme:n,themeId:t})),ee=gw(d,Z);if(ee){const te={};return Object.entries(ee).forEach(([H,q])=>{te[H]=typeof q=="function"?q(M({},$,{theme:Z})):q}),y($,te)}return null}),d&&!C&&I.push($=>{const Z=Rr(M({},$,{defaultTheme:n,themeId:t}));return vw($,yw(d,Z),Z,d)}),E||I.push(r);const N=I.length-T.length;if(Array.isArray(k)&&N>0){const $=new Array(N).fill("");O=[...k,...$],O.raw=[...k.raw,...$]}else typeof k=="function"&&k.__emotion_real!==k&&(O=$=>k(M({},$,{theme:Rr(M({},$,{defaultTheme:n,themeId:t}))})));const G=b(O,...I);return l.muiName&&(G.muiName=l.muiName),G};return b.withConfig&&(w.withConfig=b.withConfig),w}}function Ew(e){const{theme:t,name:n,props:o}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?o:Of(t.components[n].defaultProps,o)}function Cw({props:e,name:t,defaultTheme:n,themeId:o}){let a=lu(n);return o&&(a=a[o]||a),Ew({theme:a,name:t,props:e})}function Wf(e,t=0,n=1){return Math.min(Math.max(t,e),n)}function Sw(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(o=>o+o)),n?`rgb${n.length===4?"a":""}(${n.map((o,a)=>a<3?parseInt(o,16):Math.round(parseInt(o,16)/255*1e3)/1e3).join(", ")})`:""}function io(e){if(e.type)return e;if(e.charAt(0)==="#")return io(Sw(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(Li(9,e));let o=e.substring(t+1,e.length-1),a;if(n==="color"){if(o=o.split(" "),a=o.shift(),o.length===4&&o[3].charAt(0)==="/"&&(o[3]=o[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(a)===-1)throw new Error(Li(10,a))}else o=o.split(",");return o=o.map(r=>parseFloat(r)),{type:n,values:o,colorSpace:a}}function uu(e){const{type:t,colorSpace:n}=e;let{values:o}=e;return t.indexOf("rgb")!==-1?o=o.map((a,r)=>r<3?parseInt(a,10):a):t.indexOf("hsl")!==-1&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),t.indexOf("color")!==-1?o=`${n} ${o.join(" ")}`:o=`${o.join(", ")}`,`${t}(${o})`}function kw(e){e=io(e);const{values:t}=e,n=t[0],o=t[1]/100,a=t[2]/100,r=o*Math.min(a,1-a),l=(p,g=(p+n/30)%12)=>a-r*Math.max(Math.min(g-3,9-g,1),-1);let c="rgb";const d=[Math.round(l(0)*255),Math.round(l(8)*255),Math.round(l(4)*255)];return e.type==="hsla"&&(c+="a",d.push(t[3])),uu({type:c,values:d})}function zm(e){e=io(e);let t=e.type==="hsl"||e.type==="hsla"?io(kw(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Pw(e,t){const n=zm(e),o=zm(t);return(Math.max(n,o)+.05)/(Math.min(n,o)+.05)}function $n(e,t){return e=io(e),t=Wf(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,uu(e)}function Lw(e,t){if(e=io(e),t=Wf(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return uu(e)}function Tw(e,t){if(e=io(e),t=Wf(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return uu(e)}const Mw=S.createContext(null),uy=Mw;function cy(){return S.useContext(uy)}const Ow=typeof Symbol=="function"&&Symbol.for,Iw=Ow?Symbol.for("mui.nested"):"__THEME_NESTED__";function Rw(e,t){return typeof t=="function"?t(e):M({},e,t)}function Aw(e){const{children:t,theme:n}=e,o=cy(),a=S.useMemo(()=>{const r=o===null?n:Rw(o,n);return r!=null&&(r[Iw]=o!==null),r},[n,o]);return B.jsx(uy.Provider,{value:a,children:t})}const Um={};function Nm(e,t,n,o=!1){return S.useMemo(()=>{const a=e&&t[e]||t;if(typeof n=="function"){const r=n(a),l=e?M({},t,{[e]:r}):r;return o?()=>l:l}return e?M({},t,{[e]:n}):M({},t,n)},[e,t,n,o])}function zw(e){const{children:t,theme:n,themeId:o}=e,a=ry(Um),r=cy()||Um,l=Nm(o,a,n),c=Nm(o,r,n,!0);return B.jsx(Aw,{theme:c,children:B.jsx(Jl.Provider,{value:l,children:t})})}function Uw(e,t){return M({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}const Nw=["mode","contrastThreshold","tonalOffset"],Bm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:_s.white,default:_s.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},xc={text:{primary:_s.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:_s.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Fm(e,t,n,o){const a=o.light||o,r=o.dark||o*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=Tw(e.main,a):t==="dark"&&(e.dark=Lw(e.main,r)))}function Bw(e="light"){return e==="dark"?{main:xo[200],light:xo[50],dark:xo[400]}:{main:xo[700],light:xo[400],dark:xo[800]}}function Fw(e="light"){return e==="dark"?{main:_o[200],light:_o[50],dark:_o[400]}:{main:_o[500],light:_o[300],dark:_o[700]}}function $w(e="light"){return e==="dark"?{main:vo[500],light:vo[300],dark:vo[700]}:{main:vo[700],light:vo[400],dark:vo[800]}}function Dw(e="light"){return e==="dark"?{main:bo[400],light:bo[300],dark:bo[700]}:{main:bo[700],light:bo[500],dark:bo[900]}}function jw(e="light"){return e==="dark"?{main:wo[400],light:wo[300],dark:wo[700]}:{main:wo[800],light:wo[500],dark:wo[900]}}function Hw(e="light"){return e==="dark"?{main:Or[400],light:Or[300],dark:Or[700]}:{main:"#ed6c02",light:Or[500],dark:Or[900]}}function Zw(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:o=.2}=e,a=ue(e,Nw),r=e.primary||Bw(t),l=e.secondary||Fw(t),c=e.error||$w(t),d=e.info||Dw(t),p=e.success||jw(t),g=e.warning||Hw(t);function m(E){return Pw(E,xc.text.primary)>=n?xc.text.primary:Bm.text.primary}const y=({color:E,name:R,mainShade:x=500,lightShade:b=300,darkShade:w=700})=>{if(E=M({},E),!E.main&&E[x]&&(E.main=E[x]),!E.hasOwnProperty("main"))throw new Error(Li(11,R?` (${R})`:"",x));if(typeof E.main!="string")throw new Error(Li(12,R?` (${R})`:"",JSON.stringify(E.main)));return Fm(E,"light",b,o),Fm(E,"dark",w,o),E.contrastText||(E.contrastText=m(E.main)),E},_={dark:xc,light:Bm};return pn(M({common:M({},_s),mode:t,primary:y({color:r,name:"primary"}),secondary:y({color:l,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:y({color:c,name:"error"}),warning:y({color:g,name:"warning"}),info:y({color:d,name:"info"}),success:y({color:p,name:"success"}),grey:V9,contrastThreshold:n,getContrastText:m,augmentColor:y,tonalOffset:o},_[t]),a)}const Ww=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Vw(e){return Math.round(e*1e5)/1e5}const $m={textTransform:"uppercase"},Dm='"Roboto", "Helvetica", "Arial", sans-serif';function Gw(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:o=Dm,fontSize:a=14,fontWeightLight:r=300,fontWeightRegular:l=400,fontWeightMedium:c=500,fontWeightBold:d=700,htmlFontSize:p=16,allVariants:g,pxToRem:m}=n,y=ue(n,Ww),_=a/14,C=m||(x=>`${x/p*_}rem`),E=(x,b,w,k,T)=>M({fontFamily:o,fontWeight:x,fontSize:C(b),lineHeight:w},o===Dm?{letterSpacing:`${Vw(k/b)}em`}:{},T,g),R={h1:E(r,96,1.167,-1.5),h2:E(r,60,1.2,-.5),h3:E(l,48,1.167,0),h4:E(l,34,1.235,.25),h5:E(l,24,1.334,0),h6:E(c,20,1.6,.15),subtitle1:E(l,16,1.75,.15),subtitle2:E(c,14,1.57,.1),body1:E(l,16,1.5,.15),body2:E(l,14,1.43,.15),button:E(c,14,1.75,.4,$m),caption:E(l,12,1.66,.4),overline:E(l,12,2.66,1,$m),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return pn(M({htmlFontSize:p,pxToRem:C,fontFamily:o,fontSize:a,fontWeightLight:r,fontWeightRegular:l,fontWeightMedium:c,fontWeightBold:d},R),y,{clone:!1})}const Kw=.2,qw=.14,Yw=.12;function De(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Kw})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${qw})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Yw})`].join(",")}const Qw=["none",De(0,2,1,-1,0,1,1,0,0,1,3,0),De(0,3,1,-2,0,2,2,0,0,1,5,0),De(0,3,3,-2,0,3,4,0,0,1,8,0),De(0,2,4,-1,0,4,5,0,0,1,10,0),De(0,3,5,-1,0,5,8,0,0,1,14,0),De(0,3,5,-1,0,6,10,0,0,1,18,0),De(0,4,5,-2,0,7,10,1,0,2,16,1),De(0,5,5,-3,0,8,10,1,0,3,14,2),De(0,5,6,-3,0,9,12,1,0,3,16,2),De(0,6,6,-3,0,10,14,1,0,4,18,3),De(0,6,7,-4,0,11,15,1,0,4,20,3),De(0,7,8,-4,0,12,17,2,0,5,22,4),De(0,7,8,-4,0,13,19,2,0,5,24,4),De(0,7,9,-4,0,14,21,2,0,5,26,4),De(0,8,9,-5,0,15,22,2,0,6,28,5),De(0,8,10,-5,0,16,24,2,0,6,30,5),De(0,8,11,-5,0,17,26,2,0,6,32,5),De(0,9,11,-5,0,18,28,2,0,7,34,6),De(0,9,12,-6,0,19,29,2,0,7,36,6),De(0,10,13,-6,0,20,31,3,0,8,38,7),De(0,10,13,-6,0,21,33,3,0,8,40,7),De(0,10,14,-6,0,22,35,3,0,8,42,7),De(0,11,14,-7,0,23,36,3,0,9,44,8),De(0,11,15,-7,0,24,38,3,0,9,46,8)],Xw=Qw,Jw=["duration","easing","delay"],e4={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},t4={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function jm(e){return`${Math.round(e)}ms`}function n4(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function i4(e){const t=M({},e4,e.easing),n=M({},t4,e.duration);return M({getAutoHeightDuration:n4,create:(a=["all"],r={})=>{const{duration:l=n.standard,easing:c=t.easeInOut,delay:d=0}=r;return ue(r,Jw),(Array.isArray(a)?a:[a]).map(p=>`${p} ${typeof l=="string"?l:jm(l)} ${c} ${typeof d=="string"?d:jm(d)}`).join(",")}},e,{easing:t,duration:n})}const o4={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},r4=o4,s4=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Vf(e={},...t){const{mixins:n={},palette:o={},transitions:a={},typography:r={}}=e,l=ue(e,s4);if(e.vars)throw new Error(Li(18));const c=Zw(o),d=Zf(e);let p=pn(d,{mixins:Uw(d.breakpoints,n),palette:c,shadows:Xw.slice(),typography:Gw(c,r),transitions:i4(a),zIndex:M({},r4)});return p=pn(p,l),p=t.reduce((g,m)=>pn(g,m),p),p.unstable_sxConfig=M({},su,l==null?void 0:l.unstable_sxConfig),p.unstable_sx=function(m){return au({sx:m,theme:this})},p}const a4=Vf(),cu=a4;function Gf(){const e=lu(cu);return e[no]||e}function tt({props:e,name:t}){return Cw({props:e,name:t,defaultTheme:cu,themeId:no})}const Zn=e=>Jr(e)&&e!=="classes",l4=Jr,u4=ww({themeId:no,defaultTheme:cu,rootShouldForwardProp:Zn}),de=u4,c4=["theme"];function d4(e){let{theme:t}=e,n=ue(e,c4);const o=t[no];return B.jsx(zw,M({},n,{themeId:o?no:void 0,theme:o||t}))}const f4=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Hm=f4;function p4(e){return Ke("MuiSvgIcon",e)}Ne("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const h4=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],m4=e=>{const{color:t,fontSize:n,classes:o}=e,a={root:["root",t!=="inherit"&&`color${Ee(t)}`,`fontSize${Ee(n)}`]};return et(a,p4,o)},g4=de("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Ee(n.color)}`],t[`fontSize${Ee(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,o,a,r,l,c,d,p,g,m,y,_,C;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(o=n.create)==null?void 0:o.call(n,"fill",{duration:(a=e.transitions)==null||(a=a.duration)==null?void 0:a.shorter}),fontSize:{inherit:"inherit",small:((r=e.typography)==null||(l=r.pxToRem)==null?void 0:l.call(r,20))||"1.25rem",medium:((c=e.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,24))||"1.5rem",large:((p=e.typography)==null||(g=p.pxToRem)==null?void 0:g.call(p,35))||"2.1875rem"}[t.fontSize],color:(m=(y=(e.vars||e).palette)==null||(y=y[t.color])==null?void 0:y.main)!=null?m:{action:(_=(e.vars||e).palette)==null||(_=_.action)==null?void 0:_.active,disabled:(C=(e.vars||e).palette)==null||(C=C.action)==null?void 0:C.disabled,inherit:void 0}[t.color]}}),dy=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiSvgIcon"}),{children:a,className:r,color:l="inherit",component:c="svg",fontSize:d="medium",htmlColor:p,inheritViewBox:g=!1,titleAccess:m,viewBox:y="0 0 24 24"}=o,_=ue(o,h4),C=S.isValidElement(a)&&a.type==="svg",E=M({},o,{color:l,component:c,fontSize:d,instanceFontSize:t.fontSize,inheritViewBox:g,viewBox:y,hasSvgAsChild:C}),R={};g||(R.viewBox=y);const x=m4(E);return B.jsxs(g4,M({as:c,className:ge(x.root,r),focusable:"false",color:p,"aria-hidden":m?void 0:!0,role:m?"img":void 0,ref:n},R,_,C&&a.props,{ownerState:E,children:[C?a.props.children:a,m?B.jsx("title",{children:m}):null]}))});dy.muiName="SvgIcon";const Zm=dy;function Kf(e,t){function n(o,a){return B.jsx(Zm,M({"data-testid":`${t}Icon`,ref:a},o,{children:e}))}return n.muiName=Zm.muiName,S.memo(S.forwardRef(n))}function Sd(e,t){return Sd=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){return o.__proto__=a,o},Sd(e,t)}function fy(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Sd(e,t)}const Wm={disabled:!1},al=It.createContext(null);var y4=function(t){return t.scrollTop},jr="unmounted",$i="exited",Di="entering",Co="entered",kd="exiting",ai=function(e){fy(t,e);function t(o,a){var r;r=e.call(this,o,a)||this;var l=a,c=l&&!l.isMounting?o.enter:o.appear,d;return r.appearStatus=null,o.in?c?(d=$i,r.appearStatus=Di):d=Co:o.unmountOnExit||o.mountOnEnter?d=jr:d=$i,r.state={status:d},r.nextCallback=null,r}t.getDerivedStateFromProps=function(a,r){var l=a.in;return l&&r.status===jr?{status:$i}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(a){var r=null;if(a!==this.props){var l=this.state.status;this.props.in?l!==Di&&l!==Co&&(r=Di):(l===Di||l===Co)&&(r=kd)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var a=this.props.timeout,r,l,c;return r=l=c=a,a!=null&&typeof a!="number"&&(r=a.exit,l=a.enter,c=a.appear!==void 0?a.appear:l),{exit:r,enter:l,appear:c}},n.updateStatus=function(a,r){if(a===void 0&&(a=!1),r!==null)if(this.cancelNextCallback(),r===Di){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:ga.findDOMNode(this);l&&y4(l)}this.performEnter(a)}else this.performExit();else this.props.unmountOnExit&&this.state.status===$i&&this.setState({status:jr})},n.performEnter=function(a){var r=this,l=this.props.enter,c=this.context?this.context.isMounting:a,d=this.props.nodeRef?[c]:[ga.findDOMNode(this),c],p=d[0],g=d[1],m=this.getTimeouts(),y=c?m.appear:m.enter;if(!a&&!l||Wm.disabled){this.safeSetState({status:Co},function(){r.props.onEntered(p)});return}this.props.onEnter(p,g),this.safeSetState({status:Di},function(){r.props.onEntering(p,g),r.onTransitionEnd(y,function(){r.safeSetState({status:Co},function(){r.props.onEntered(p,g)})})})},n.performExit=function(){var a=this,r=this.props.exit,l=this.getTimeouts(),c=this.props.nodeRef?void 0:ga.findDOMNode(this);if(!r||Wm.disabled){this.safeSetState({status:$i},function(){a.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:kd},function(){a.props.onExiting(c),a.onTransitionEnd(l.exit,function(){a.safeSetState({status:$i},function(){a.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(a,r){r=this.setNextCallback(r),this.setState(a,r)},n.setNextCallback=function(a){var r=this,l=!0;return this.nextCallback=function(c){l&&(l=!1,r.nextCallback=null,a(c))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},n.onTransitionEnd=function(a,r){this.setNextCallback(r);var l=this.props.nodeRef?this.props.nodeRef.current:ga.findDOMNode(this),c=a==null&&!this.props.addEndListener;if(!l||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],p=d[0],g=d[1];this.props.addEndListener(p,g)}a!=null&&setTimeout(this.nextCallback,a)},n.render=function(){var a=this.state.status;if(a===jr)return null;var r=this.props,l=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var c=ue(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return It.createElement(al.Provider,{value:null},typeof l=="function"?l(a,c):It.cloneElement(It.Children.only(l),c))},t}(It.Component);ai.contextType=al;ai.propTypes={};function Eo(){}ai.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Eo,onEntering:Eo,onEntered:Eo,onExit:Eo,onExiting:Eo,onExited:Eo};ai.UNMOUNTED=jr;ai.EXITED=$i;ai.ENTERING=Di;ai.ENTERED=Co;ai.EXITING=kd;const py=ai;function v4(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qf(e,t){var n=function(r){return t&&S.isValidElement(r)?t(r):r},o=Object.create(null);return e&&S.Children.map(e,function(a){return a}).forEach(function(a){o[a.key]=n(a)}),o}function _4(e,t){e=e||{},t=t||{};function n(g){return g in t?t[g]:e[g]}var o=Object.create(null),a=[];for(var r in e)r in t?a.length&&(o[r]=a,a=[]):a.push(r);var l,c={};for(var d in t){if(o[d])for(l=0;l<o[d].length;l++){var p=o[d][l];c[o[d][l]]=n(p)}c[d]=n(d)}for(l=0;l<a.length;l++)c[a[l]]=n(a[l]);return c}function Vi(e,t,n){return n[t]!=null?n[t]:e.props[t]}function x4(e,t){return qf(e.children,function(n){return S.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:Vi(n,"appear",e),enter:Vi(n,"enter",e),exit:Vi(n,"exit",e)})})}function b4(e,t,n){var o=qf(e.children),a=_4(t,o);return Object.keys(a).forEach(function(r){var l=a[r];if(S.isValidElement(l)){var c=r in t,d=r in o,p=t[r],g=S.isValidElement(p)&&!p.props.in;d&&(!c||g)?a[r]=S.cloneElement(l,{onExited:n.bind(null,l),in:!0,exit:Vi(l,"exit",e),enter:Vi(l,"enter",e)}):!d&&c&&!g?a[r]=S.cloneElement(l,{in:!1}):d&&c&&S.isValidElement(p)&&(a[r]=S.cloneElement(l,{onExited:n.bind(null,l),in:p.props.in,exit:Vi(l,"exit",e),enter:Vi(l,"enter",e)}))}}),a}var w4=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},E4={component:"div",childFactory:function(t){return t}},Yf=function(e){fy(t,e);function t(o,a){var r;r=e.call(this,o,a)||this;var l=r.handleExited.bind(v4(r));return r.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(a,r){var l=r.children,c=r.handleExited,d=r.firstRender;return{children:d?x4(a,c):b4(a,l,c),firstRender:!1}},n.handleExited=function(a,r){var l=qf(this.props.children);a.key in l||(a.props.onExited&&a.props.onExited(r),this.mounted&&this.setState(function(c){var d=M({},c.children);return delete d[a.key],{children:d}}))},n.render=function(){var a=this.props,r=a.component,l=a.childFactory,c=ue(a,["component","childFactory"]),d=this.state.contextValue,p=w4(this.state.children).map(l);return delete c.appear,delete c.enter,delete c.exit,r===null?It.createElement(al.Provider,{value:d},p):It.createElement(al.Provider,{value:d},It.createElement(r,c,p))},t}(It.Component);Yf.propTypes={};Yf.defaultProps=E4;const C4=Yf,hy=e=>e.scrollTop;function ll(e,t){var n,o;const{timeout:a,easing:r,style:l={}}=e;return{duration:(n=l.transitionDuration)!=null?n:typeof a=="number"?a:a[t.mode]||0,easing:(o=l.transitionTimingFunction)!=null?o:typeof r=="object"?r[t.mode]:r,delay:l.transitionDelay}}function S4(e){return Ke("MuiPaper",e)}Ne("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const k4=["className","component","elevation","square","variant"],P4=e=>{const{square:t,elevation:n,variant:o,classes:a}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return et(r,S4,a)},L4=de("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return M({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&M({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${$n("#fff",Hm(t.elevation))}, ${$n("#fff",Hm(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),T4=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiPaper"}),{className:a,component:r="div",elevation:l=1,square:c=!1,variant:d="elevation"}=o,p=ue(o,k4),g=M({},o,{component:r,elevation:l,square:c,variant:d}),m=P4(g);return B.jsx(L4,M({as:r,ownerState:g,className:ge(m.root,a),ref:n},p))}),M4=T4;function O4(e){const{className:t,classes:n,pulsate:o=!1,rippleX:a,rippleY:r,rippleSize:l,in:c,onExited:d,timeout:p}=e,[g,m]=S.useState(!1),y=ge(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),_={width:l,height:l,top:-(l/2)+r,left:-(l/2)+a},C=ge(n.child,g&&n.childLeaving,o&&n.childPulsate);return!c&&!g&&m(!0),S.useEffect(()=>{if(!c&&d!=null){const E=setTimeout(d,p);return()=>{clearTimeout(E)}}},[d,c,p]),B.jsx("span",{className:y,style:_,children:B.jsx("span",{className:C})})}const I4=Ne("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),an=I4,R4=["center","classes","className"];let du=e=>e,Vm,Gm,Km,qm;const Pd=550,A4=80,z4=Ff(Vm||(Vm=du`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),U4=Ff(Gm||(Gm=du`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),N4=Ff(Km||(Km=du`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),B4=de("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),F4=de(O4,{name:"MuiTouchRipple",slot:"Ripple"})(qm||(qm=du`
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
`),an.rippleVisible,z4,Pd,({theme:e})=>e.transitions.easing.easeInOut,an.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,an.child,an.childLeaving,U4,Pd,({theme:e})=>e.transitions.easing.easeInOut,an.childPulsate,N4,({theme:e})=>e.transitions.easing.easeInOut),$4=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiTouchRipple"}),{center:a=!1,classes:r={},className:l}=o,c=ue(o,R4),[d,p]=S.useState([]),g=S.useRef(0),m=S.useRef(null);S.useEffect(()=>{m.current&&(m.current(),m.current=null)},[d]);const y=S.useRef(!1),_=S.useRef(0),C=S.useRef(null),E=S.useRef(null);S.useEffect(()=>()=>{_.current&&clearTimeout(_.current)},[]);const R=S.useCallback(k=>{const{pulsate:T,rippleX:I,rippleY:O,rippleSize:N,cb:G}=k;p($=>[...$,B.jsx(F4,{classes:{ripple:ge(r.ripple,an.ripple),rippleVisible:ge(r.rippleVisible,an.rippleVisible),ripplePulsate:ge(r.ripplePulsate,an.ripplePulsate),child:ge(r.child,an.child),childLeaving:ge(r.childLeaving,an.childLeaving),childPulsate:ge(r.childPulsate,an.childPulsate)},timeout:Pd,pulsate:T,rippleX:I,rippleY:O,rippleSize:N},g.current)]),g.current+=1,m.current=G},[r]),x=S.useCallback((k={},T={},I=()=>{})=>{const{pulsate:O=!1,center:N=a||T.pulsate,fakeElement:G=!1}=T;if((k==null?void 0:k.type)==="mousedown"&&y.current){y.current=!1;return}(k==null?void 0:k.type)==="touchstart"&&(y.current=!0);const $=G?null:E.current,Z=$?$.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ee,te,H;if(N||k===void 0||k.clientX===0&&k.clientY===0||!k.clientX&&!k.touches)ee=Math.round(Z.width/2),te=Math.round(Z.height/2);else{const{clientX:q,clientY:W}=k.touches&&k.touches.length>0?k.touches[0]:k;ee=Math.round(q-Z.left),te=Math.round(W-Z.top)}if(N)H=Math.sqrt((2*Z.width**2+Z.height**2)/3),H%2===0&&(H+=1);else{const q=Math.max(Math.abs(($?$.clientWidth:0)-ee),ee)*2+2,W=Math.max(Math.abs(($?$.clientHeight:0)-te),te)*2+2;H=Math.sqrt(q**2+W**2)}k!=null&&k.touches?C.current===null&&(C.current=()=>{R({pulsate:O,rippleX:ee,rippleY:te,rippleSize:H,cb:I})},_.current=setTimeout(()=>{C.current&&(C.current(),C.current=null)},A4)):R({pulsate:O,rippleX:ee,rippleY:te,rippleSize:H,cb:I})},[a,R]),b=S.useCallback(()=>{x({},{pulsate:!0})},[x]),w=S.useCallback((k,T)=>{if(clearTimeout(_.current),(k==null?void 0:k.type)==="touchend"&&C.current){C.current(),C.current=null,_.current=setTimeout(()=>{w(k,T)});return}C.current=null,p(I=>I.length>0?I.slice(1):I),m.current=T},[]);return S.useImperativeHandle(n,()=>({pulsate:b,start:x,stop:w}),[b,x,w]),B.jsx(B4,M({className:ge(an.root,r.root,l),ref:E},c,{children:B.jsx(C4,{component:null,exit:!0,children:d})}))}),D4=$4;function j4(e){return Ke("MuiButtonBase",e)}const H4=Ne("MuiButtonBase",["root","disabled","focusVisible"]),Z4=H4,W4=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],V4=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:a}=e,l=et({root:["root",t&&"disabled",n&&"focusVisible"]},j4,a);return n&&o&&(l.root+=` ${o}`),l},G4=de("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Z4.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),K4=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiButtonBase"}),{action:a,centerRipple:r=!1,children:l,className:c,component:d="button",disabled:p=!1,disableRipple:g=!1,disableTouchRipple:m=!1,focusRipple:y=!1,LinkComponent:_="a",onBlur:C,onClick:E,onContextMenu:R,onDragLeave:x,onFocus:b,onFocusVisible:w,onKeyDown:k,onKeyUp:T,onMouseDown:I,onMouseLeave:O,onMouseUp:N,onTouchEnd:G,onTouchMove:$,onTouchStart:Z,tabIndex:ee=0,TouchRippleProps:te,touchRippleRef:H,type:q}=o,W=ue(o,W4),K=S.useRef(null),z=S.useRef(null),V=At(z,H),{isFocusVisibleRef:F,onFocus:J,onBlur:se,ref:pe}=ox(),[ne,ie]=S.useState(!1);p&&ne&&ie(!1),S.useImperativeHandle(a,()=>({focusVisible:()=>{ie(!0),K.current.focus()}}),[]);const[Q,Te]=S.useState(!1);S.useEffect(()=>{Te(!0)},[]);const qe=Q&&!g&&!p;S.useEffect(()=>{ne&&y&&!g&&Q&&z.current.pulsate()},[g,y,ne,Q]);function Be(ae,oe,Pe=m){return No(Ye=>(oe&&oe(Ye),!Pe&&z.current&&z.current[ae](Ye),!0))}const ot=Be("start",I),ve=Be("stop",R),ce=Be("stop",x),_e=Be("stop",N),Me=Be("stop",ae=>{ne&&ae.preventDefault(),O&&O(ae)}),Lt=Be("start",Z),Tt=Be("stop",G),bt=Be("stop",$),wt=Be("stop",ae=>{se(ae),F.current===!1&&ie(!1),C&&C(ae)},!1),Ln=No(ae=>{K.current||(K.current=ae.currentTarget),J(ae),F.current===!0&&(ie(!0),w&&w(ae)),b&&b(ae)}),rt=()=>{const ae=K.current;return d&&d!=="button"&&!(ae.tagName==="A"&&ae.href)},He=S.useRef(!1),Nt=No(ae=>{y&&!He.current&&ne&&z.current&&ae.key===" "&&(He.current=!0,z.current.stop(ae,()=>{z.current.start(ae)})),ae.target===ae.currentTarget&&rt()&&ae.key===" "&&ae.preventDefault(),k&&k(ae),ae.target===ae.currentTarget&&rt()&&ae.key==="Enter"&&!p&&(ae.preventDefault(),E&&E(ae))}),Ae=No(ae=>{y&&ae.key===" "&&z.current&&ne&&!ae.defaultPrevented&&(He.current=!1,z.current.stop(ae,()=>{z.current.pulsate(ae)})),T&&T(ae),E&&ae.target===ae.currentTarget&&rt()&&ae.key===" "&&!ae.defaultPrevented&&E(ae)});let yn=d;yn==="button"&&(W.href||W.to)&&(yn=_);const Wt={};yn==="button"?(Wt.type=q===void 0?"button":q,Wt.disabled=p):(!W.href&&!W.to&&(Wt.role="button"),p&&(Wt["aria-disabled"]=p));const Vt=At(n,pe,K),vn=M({},o,{centerRipple:r,component:d,disabled:p,disableRipple:g,disableTouchRipple:m,focusRipple:y,tabIndex:ee,focusVisible:ne}),Ce=V4(vn);return B.jsxs(G4,M({as:yn,className:ge(Ce.root,c),ownerState:vn,onBlur:wt,onClick:E,onContextMenu:ve,onFocus:Ln,onKeyDown:Nt,onKeyUp:Ae,onMouseDown:ot,onMouseLeave:Me,onMouseUp:_e,onDragLeave:ce,onTouchEnd:Tt,onTouchMove:bt,onTouchStart:Lt,ref:Vt,tabIndex:p?-1:ee,type:q},Wt,W,{children:[l,qe?B.jsx(D4,M({ref:V,center:r},te)):null]}))}),my=K4;function q4(e){return Ke("MuiTypography",e)}Ne("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Y4=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Q4=e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:a,variant:r,classes:l}=e,c={root:["root",r,e.align!=="inherit"&&`align${Ee(t)}`,n&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return et(c,q4,l)},X4=de("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${Ee(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>M({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Ym={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},J4={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},e5=e=>J4[e]||e,t5=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiTypography"}),a=e5(o.color),r=sy(M({},o,{color:a})),{align:l="inherit",className:c,component:d,gutterBottom:p=!1,noWrap:g=!1,paragraph:m=!1,variant:y="body1",variantMapping:_=Ym}=r,C=ue(r,Y4),E=M({},r,{align:l,color:a,className:c,component:d,gutterBottom:p,noWrap:g,paragraph:m,variant:y,variantMapping:_}),R=d||(m?"p":_[y]||Ym[y])||"span",x=Q4(E);return B.jsx(X4,M({as:R,ref:n,ownerState:E,className:ge(x.root,c)},C))}),Qm=t5;function ul(e){return typeof e=="string"}function n5(e,t,n){return e===void 0||ul(e)?t:M({},t,{ownerState:M({},t.ownerState,n)})}function gy(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function i5(e,t,n){return typeof e=="function"?e(t,n):e}function Xm(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function o5(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:a,className:r}=e;if(!t){const _=ge(a==null?void 0:a.className,o==null?void 0:o.className,r,n==null?void 0:n.className),C=M({},n==null?void 0:n.style,a==null?void 0:a.style,o==null?void 0:o.style),E=M({},n,a,o);return _.length>0&&(E.className=_),Object.keys(C).length>0&&(E.style=C),{props:E,internalRef:void 0}}const l=gy(M({},a,o)),c=Xm(o),d=Xm(a),p=t(l),g=ge(p==null?void 0:p.className,n==null?void 0:n.className,r,a==null?void 0:a.className,o==null?void 0:o.className),m=M({},p==null?void 0:p.style,n==null?void 0:n.style,a==null?void 0:a.style,o==null?void 0:o.style),y=M({},p,n,d,c);return g.length>0&&(y.className=g),Object.keys(m).length>0&&(y.style=m),{props:y,internalRef:p.ref}}const r5=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function tr(e){var t;const{elementType:n,externalSlotProps:o,ownerState:a,skipResolvingSlotProps:r=!1}=e,l=ue(e,r5),c=r?{}:i5(o,a),{props:d,internalRef:p}=o5(M({},l,{externalSlotProps:c})),g=At(p,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return n5(n,M({},d,{ref:g}),a)}const s5=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function a5(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function l5(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function u5(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||l5(e))}function c5(e){const t=[],n=[];return Array.from(e.querySelectorAll(s5)).forEach((o,a)=>{const r=a5(o);r===-1||!u5(o)||(r===0?t.push(o):n.push({documentOrder:a,tabIndex:r,node:o}))}),n.sort((o,a)=>o.tabIndex===a.tabIndex?o.documentOrder-a.documentOrder:o.tabIndex-a.tabIndex).map(o=>o.node).concat(t)}function d5(){return!0}function f5(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:a=!1,getTabbable:r=c5,isEnabled:l=d5,open:c}=e,d=S.useRef(!1),p=S.useRef(null),g=S.useRef(null),m=S.useRef(null),y=S.useRef(null),_=S.useRef(!1),C=S.useRef(null),E=At(t.ref,C),R=S.useRef(null);S.useEffect(()=>{!c||!C.current||(_.current=!n)},[n,c]),S.useEffect(()=>{if(!c||!C.current)return;const w=Qt(C.current);return C.current.contains(w.activeElement)||(C.current.hasAttribute("tabIndex")||C.current.setAttribute("tabIndex","-1"),_.current&&C.current.focus()),()=>{a||(m.current&&m.current.focus&&(d.current=!0,m.current.focus()),m.current=null)}},[c]),S.useEffect(()=>{if(!c||!C.current)return;const w=Qt(C.current),k=O=>{const{current:N}=C;if(N!==null){if(!w.hasFocus()||o||!l()||d.current){d.current=!1;return}if(!N.contains(w.activeElement)){if(O&&y.current!==O.target||w.activeElement!==y.current)y.current=null;else if(y.current!==null)return;if(!_.current)return;let Z=[];if((w.activeElement===p.current||w.activeElement===g.current)&&(Z=r(C.current)),Z.length>0){var G,$;const ee=!!((G=R.current)!=null&&G.shiftKey&&(($=R.current)==null?void 0:$.key)==="Tab"),te=Z[0],H=Z[Z.length-1];typeof te!="string"&&typeof H!="string"&&(ee?H.focus():te.focus())}else N.focus()}}},T=O=>{R.current=O,!(o||!l()||O.key!=="Tab")&&w.activeElement===C.current&&O.shiftKey&&(d.current=!0,g.current&&g.current.focus())};w.addEventListener("focusin",k),w.addEventListener("keydown",T,!0);const I=setInterval(()=>{w.activeElement&&w.activeElement.tagName==="BODY"&&k(null)},50);return()=>{clearInterval(I),w.removeEventListener("focusin",k),w.removeEventListener("keydown",T,!0)}},[n,o,a,l,c,r]);const x=w=>{m.current===null&&(m.current=w.relatedTarget),_.current=!0,y.current=w.target;const k=t.props.onFocus;k&&k(w)},b=w=>{m.current===null&&(m.current=w.relatedTarget),_.current=!0};return B.jsxs(S.Fragment,{children:[B.jsx("div",{tabIndex:c?0:-1,onFocus:b,ref:p,"data-testid":"sentinelStart"}),S.cloneElement(t,{ref:E,onFocus:x}),B.jsx("div",{tabIndex:c?0:-1,onFocus:b,ref:g,"data-testid":"sentinelEnd"})]})}function p5(e){return typeof e=="function"?e():e}const h5=S.forwardRef(function(t,n){const{children:o,container:a,disablePortal:r=!1}=t,[l,c]=S.useState(null),d=At(S.isValidElement(o)?o.ref:null,n);if(to(()=>{r||c(p5(a)||document.body)},[a,r]),to(()=>{if(l&&!r)return xd(n,l),()=>{xd(n,null)}},[n,l,r]),r){if(S.isValidElement(o)){const p={ref:d};return S.cloneElement(o,p)}return B.jsx(S.Fragment,{children:o})}return B.jsx(S.Fragment,{children:l&&Ls.createPortal(o,l)})});function m5(e){const t=Qt(e);return t.body===e?eo(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function es(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Jm(e){return parseInt(eo(e).getComputedStyle(e).paddingRight,10)||0}function g5(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function e1(e,t,n,o,a){const r=[t,n,...o];[].forEach.call(e.children,l=>{const c=r.indexOf(l)===-1,d=!g5(l);c&&d&&es(l,a)})}function bc(e,t){let n=-1;return e.some((o,a)=>t(o)?(n=a,!0):!1),n}function y5(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(m5(o)){const l=z0(Qt(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Jm(o)+l}px`;const c=Qt(o).querySelectorAll(".mui-fixed");[].forEach.call(c,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${Jm(d)+l}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=Qt(o).body;else{const l=o.parentElement,c=eo(o);r=(l==null?void 0:l.nodeName)==="HTML"&&c.getComputedStyle(l).overflowY==="scroll"?l:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:l,property:c})=>{r?l.style.setProperty(c,r):l.style.removeProperty(c)})}}function v5(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class _5{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&es(t.modalRef,!1);const a=v5(n);e1(n,t.mount,t.modalRef,a,!0);const r=bc(this.containers,l=>l.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:a}),o)}mount(t,n){const o=bc(this.containers,r=>r.modals.indexOf(t)!==-1),a=this.containers[o];a.restore||(a.restore=y5(a,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const a=bc(this.containers,l=>l.modals.indexOf(t)!==-1),r=this.containers[a];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&es(t.modalRef,n),e1(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(a,1);else{const l=r.modals[r.modals.length-1];l.modalRef&&es(l.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function x5(e){return typeof e=="function"?e():e}function b5(e){return e?e.props.hasOwnProperty("in"):!1}const w5=new _5;function E5(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:a=w5,closeAfterTransition:r=!1,onTransitionEnter:l,onTransitionExited:c,children:d,onClose:p,open:g,rootRef:m}=e,y=S.useRef({}),_=S.useRef(null),C=S.useRef(null),E=At(C,m),[R,x]=S.useState(!g),b=b5(d);let w=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(w=!1);const k=()=>Qt(_.current),T=()=>(y.current.modalRef=C.current,y.current.mount=_.current,y.current),I=()=>{a.mount(T(),{disableScrollLock:o}),C.current&&(C.current.scrollTop=0)},O=No(()=>{const W=x5(t)||k().body;a.add(T(),W),C.current&&I()}),N=S.useCallback(()=>a.isTopModal(T()),[a]),G=No(W=>{_.current=W,W&&(g&&N()?I():C.current&&es(C.current,w))}),$=S.useCallback(()=>{a.remove(T(),w)},[w,a]);S.useEffect(()=>()=>{$()},[$]),S.useEffect(()=>{g?O():(!b||!r)&&$()},[g,$,b,r,O]);const Z=W=>K=>{var z;(z=W.onKeyDown)==null||z.call(W,K),!(K.key!=="Escape"||!N())&&(n||(K.stopPropagation(),p&&p(K,"escapeKeyDown")))},ee=W=>K=>{var z;(z=W.onClick)==null||z.call(W,K),K.target===K.currentTarget&&p&&p(K,"backdropClick")};return{getRootProps:(W={})=>{const K=gy(e);delete K.onTransitionEnter,delete K.onTransitionExited;const z=M({},K,W);return M({role:"presentation"},z,{onKeyDown:Z(z),ref:E})},getBackdropProps:(W={})=>{const K=W;return M({"aria-hidden":!0},K,{onClick:ee(K),open:g})},getTransitionProps:()=>{const W=()=>{x(!1),l&&l()},K=()=>{x(!0),c&&c(),r&&$()};return{onEnter:ym(W,d.props.onEnter),onExited:ym(K,d.props.onExited)}},rootRef:E,portalRef:G,isTopModal:N,exited:R,hasTransition:b}}const C5=["onChange","maxRows","minRows","style","value"];function va(e){return parseInt(e,10)||0}const S5={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function t1(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const k5=S.forwardRef(function(t,n){const{onChange:o,maxRows:a,minRows:r=1,style:l,value:c}=t,d=ue(t,C5),{current:p}=S.useRef(c!=null),g=S.useRef(null),m=At(n,g),y=S.useRef(null),_=S.useRef(0),[C,E]=S.useState({outerHeightStyle:0}),R=S.useCallback(()=>{const T=g.current,O=eo(T).getComputedStyle(T);if(O.width==="0px")return{outerHeightStyle:0};const N=y.current;N.style.width=O.width,N.value=T.value||t.placeholder||"x",N.value.slice(-1)===`
`&&(N.value+=" ");const G=O.boxSizing,$=va(O.paddingBottom)+va(O.paddingTop),Z=va(O.borderBottomWidth)+va(O.borderTopWidth),ee=N.scrollHeight;N.value="x";const te=N.scrollHeight;let H=ee;r&&(H=Math.max(Number(r)*te,H)),a&&(H=Math.min(Number(a)*te,H)),H=Math.max(H,te);const q=H+(G==="border-box"?$+Z:0),W=Math.abs(H-ee)<=1;return{outerHeightStyle:q,overflow:W}},[a,r,t.placeholder]),x=(T,I)=>{const{outerHeightStyle:O,overflow:N}=I;return _.current<20&&(O>0&&Math.abs((T.outerHeightStyle||0)-O)>1||T.overflow!==N)?(_.current+=1,{overflow:N,outerHeightStyle:O}):T},b=S.useCallback(()=>{const T=R();t1(T)||E(I=>x(I,T))},[R]),w=()=>{const T=R();t1(T)||Ls.flushSync(()=>{E(I=>x(I,T))})};S.useEffect(()=>{const T=A0(()=>{_.current=0,g.current&&w()});let I;const O=g.current,N=eo(O);return N.addEventListener("resize",T),typeof ResizeObserver<"u"&&(I=new ResizeObserver(T),I.observe(O)),()=>{T.clear(),N.removeEventListener("resize",T),I&&I.disconnect()}}),to(()=>{b()}),S.useEffect(()=>{_.current=0},[c]);const k=T=>{_.current=0,p||b(),o&&o(T)};return B.jsxs(S.Fragment,{children:[B.jsx("textarea",M({value:c,onChange:k,ref:m,rows:r,style:M({height:C.outerHeightStyle,overflow:C.overflow?"hidden":void 0},l)},d)),B.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:y,tabIndex:-1,style:M({},S5.shadow,l,{paddingTop:0,paddingBottom:0})})]})});function ar({props:e,states:t,muiFormControl:n}){return t.reduce((o,a)=>(o[a]=e[a],n&&typeof e[a]>"u"&&(o[a]=n[a]),o),{})}const P5=S.createContext(void 0),Qf=P5;function lr(){return S.useContext(Qf)}function L5(e){return B.jsx(aw,M({},e,{defaultTheme:cu,themeId:no}))}function n1(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function cl(e,t=!1){return e&&(n1(e.value)&&e.value!==""||t&&n1(e.defaultValue)&&e.defaultValue!=="")}function T5(e){return e.startAdornment}function M5(e){return Ke("MuiInputBase",e)}const O5=Ne("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),nr=O5,I5=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],fu=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${Ee(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},pu=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},R5=e=>{const{classes:t,color:n,disabled:o,error:a,endAdornment:r,focused:l,formControl:c,fullWidth:d,hiddenLabel:p,multiline:g,readOnly:m,size:y,startAdornment:_,type:C}=e,E={root:["root",`color${Ee(n)}`,o&&"disabled",a&&"error",d&&"fullWidth",l&&"focused",c&&"formControl",y==="small"&&"sizeSmall",g&&"multiline",_&&"adornedStart",r&&"adornedEnd",p&&"hiddenLabel",m&&"readOnly"],input:["input",o&&"disabled",C==="search"&&"inputTypeSearch",g&&"inputMultiline",y==="small"&&"inputSizeSmall",p&&"inputHiddenLabel",_&&"inputAdornedStart",r&&"inputAdornedEnd",m&&"readOnly"]};return et(E,M5,t)},hu=de("div",{name:"MuiInputBase",slot:"Root",overridesResolver:fu})(({theme:e,ownerState:t})=>M({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${nr.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&M({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),mu=de("input",{name:"MuiInputBase",slot:"Input",overridesResolver:pu})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light",o=M({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),a={opacity:"0 !important"},r=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return M({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":o,"&::-moz-placeholder":o,"&:-ms-input-placeholder":o,"&::-ms-input-placeholder":o,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${nr.formControl} &`]:{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":r,"&:focus::-moz-placeholder":r,"&:focus:-ms-input-placeholder":r,"&:focus::-ms-input-placeholder":r},[`&.${nr.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),A5=B.jsx(L5,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),z5=S.forwardRef(function(t,n){var o;const a=tt({props:t,name:"MuiInputBase"}),{"aria-describedby":r,autoComplete:l,autoFocus:c,className:d,components:p={},componentsProps:g={},defaultValue:m,disabled:y,disableInjectingGlobalStyles:_,endAdornment:C,fullWidth:E=!1,id:R,inputComponent:x="input",inputProps:b={},inputRef:w,maxRows:k,minRows:T,multiline:I=!1,name:O,onBlur:N,onChange:G,onClick:$,onFocus:Z,onKeyDown:ee,onKeyUp:te,placeholder:H,readOnly:q,renderSuffix:W,rows:K,slotProps:z={},slots:V={},startAdornment:F,type:J="text",value:se}=a,pe=ue(a,I5),ne=b.value!=null?b.value:se,{current:ie}=S.useRef(ne!=null),Q=S.useRef(),Te=S.useCallback(Ce=>{},[]),qe=At(Q,w,b.ref,Te),[Be,ot]=S.useState(!1),ve=lr(),ce=ar({props:a,muiFormControl:ve,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ce.focused=ve?ve.focused:Be,S.useEffect(()=>{!ve&&y&&Be&&(ot(!1),N&&N())},[ve,y,Be,N]);const _e=ve&&ve.onFilled,Me=ve&&ve.onEmpty,Lt=S.useCallback(Ce=>{cl(Ce)?_e&&_e():Me&&Me()},[_e,Me]);to(()=>{ie&&Lt({value:ne})},[ne,Lt,ie]);const Tt=Ce=>{if(ce.disabled){Ce.stopPropagation();return}Z&&Z(Ce),b.onFocus&&b.onFocus(Ce),ve&&ve.onFocus?ve.onFocus(Ce):ot(!0)},bt=Ce=>{N&&N(Ce),b.onBlur&&b.onBlur(Ce),ve&&ve.onBlur?ve.onBlur(Ce):ot(!1)},wt=(Ce,...ae)=>{if(!ie){const oe=Ce.target||Q.current;if(oe==null)throw new Error(Li(1));Lt({value:oe.value})}b.onChange&&b.onChange(Ce,...ae),G&&G(Ce,...ae)};S.useEffect(()=>{Lt(Q.current)},[]);const Ln=Ce=>{Q.current&&Ce.currentTarget===Ce.target&&Q.current.focus(),$&&$(Ce)};let rt=x,He=b;I&&rt==="input"&&(K?He=M({type:void 0,minRows:K,maxRows:K},He):He=M({type:void 0,maxRows:k,minRows:T},He),rt=k5);const Nt=Ce=>{Lt(Ce.animationName==="mui-auto-fill-cancel"?Q.current:{value:"x"})};S.useEffect(()=>{ve&&ve.setAdornedStart(!!F)},[ve,F]);const Ae=M({},a,{color:ce.color||"primary",disabled:ce.disabled,endAdornment:C,error:ce.error,focused:ce.focused,formControl:ve,fullWidth:E,hiddenLabel:ce.hiddenLabel,multiline:I,size:ce.size,startAdornment:F,type:J}),yn=R5(Ae),Wt=V.root||p.Root||hu,Vt=z.root||g.root||{},vn=V.input||p.Input||mu;return He=M({},He,(o=z.input)!=null?o:g.input),B.jsxs(S.Fragment,{children:[!_&&A5,B.jsxs(Wt,M({},Vt,!ul(Wt)&&{ownerState:M({},Ae,Vt.ownerState)},{ref:n,onClick:Ln},pe,{className:ge(yn.root,Vt.className,d,q&&"MuiInputBase-readOnly"),children:[F,B.jsx(Qf.Provider,{value:null,children:B.jsx(vn,M({ownerState:Ae,"aria-invalid":ce.error,"aria-describedby":r,autoComplete:l,autoFocus:c,defaultValue:m,disabled:ce.disabled,id:R,onAnimationStart:Nt,name:O,placeholder:H,readOnly:q,required:ce.required,rows:K,value:ne,onKeyDown:ee,onKeyUp:te,type:J},He,!ul(vn)&&{as:rt,ownerState:M({},Ae,He.ownerState)},{ref:qe,className:ge(yn.input,He.className,q&&"MuiInputBase-readOnly"),onBlur:bt,onChange:wt,onFocus:Tt}))}),C,W?W(M({},ce,{startAdornment:F})):null]}))]})}),Xf=z5;function U5(e){return Ke("MuiInput",e)}const N5=M({},nr,Ne("MuiInput",["root","underline","input"])),Ar=N5;function B5(e){return Ke("MuiOutlinedInput",e)}const F5=M({},nr,Ne("MuiOutlinedInput",["root","notchedOutline","input"])),di=F5;function $5(e){return Ke("MuiFilledInput",e)}const D5=M({},nr,Ne("MuiFilledInput",["root","underline","input"])),Ni=D5,j5=Kf(B.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),H5=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Z5={entering:{opacity:1},entered:{opacity:1}},W5=S.forwardRef(function(t,n){const o=Gf(),a={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:l=!0,children:c,easing:d,in:p,onEnter:g,onEntered:m,onEntering:y,onExit:_,onExited:C,onExiting:E,style:R,timeout:x=a,TransitionComponent:b=py}=t,w=ue(t,H5),k=S.useRef(null),T=At(k,c.ref,n),I=H=>q=>{if(H){const W=k.current;q===void 0?H(W):H(W,q)}},O=I(y),N=I((H,q)=>{hy(H);const W=ll({style:R,timeout:x,easing:d},{mode:"enter"});H.style.webkitTransition=o.transitions.create("opacity",W),H.style.transition=o.transitions.create("opacity",W),g&&g(H,q)}),G=I(m),$=I(E),Z=I(H=>{const q=ll({style:R,timeout:x,easing:d},{mode:"exit"});H.style.webkitTransition=o.transitions.create("opacity",q),H.style.transition=o.transitions.create("opacity",q),_&&_(H)}),ee=I(C),te=H=>{r&&r(k.current,H)};return B.jsx(b,M({appear:l,in:p,nodeRef:k,onEnter:N,onEntered:G,onEntering:O,onExit:Z,onExited:ee,onExiting:$,addEndListener:te,timeout:x},w,{children:(H,q)=>S.cloneElement(c,M({style:M({opacity:0,visibility:H==="exited"&&!p?"hidden":void 0},Z5[H],R,c.props.style),ref:T},q))}))}),V5=W5;function G5(e){return Ke("MuiBackdrop",e)}Ne("MuiBackdrop",["root","invisible"]);const K5=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],q5=e=>{const{classes:t,invisible:n}=e;return et({root:["root",n&&"invisible"]},G5,t)},Y5=de("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>M({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Q5=S.forwardRef(function(t,n){var o,a,r;const l=tt({props:t,name:"MuiBackdrop"}),{children:c,className:d,component:p="div",components:g={},componentsProps:m={},invisible:y=!1,open:_,slotProps:C={},slots:E={},TransitionComponent:R=V5,transitionDuration:x}=l,b=ue(l,K5),w=M({},l,{component:p,invisible:y}),k=q5(w),T=(o=C.root)!=null?o:m.root;return B.jsx(R,M({in:_,timeout:x},b,{children:B.jsx(Y5,M({"aria-hidden":!0},T,{as:(a=(r=E.root)!=null?r:g.Root)!=null?a:p,className:ge(k.root,d,T==null?void 0:T.className),ownerState:M({},w,T==null?void 0:T.ownerState),classes:k,ref:n,children:c}))}))}),X5=Q5,J5=Vf(),e8=dw({themeId:no,defaultTheme:J5,defaultClassName:"MuiBox-root",generateClassName:U0.generate}),yy=e8;function t8(e){return Ke("MuiButton",e)}const n8=Ne("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),_a=n8,i8=S.createContext({}),o8=i8,r8=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],s8=e=>{const{color:t,disableElevation:n,fullWidth:o,size:a,variant:r,classes:l}=e,c={root:["root",r,`${r}${Ee(t)}`,`size${Ee(a)}`,`${r}Size${Ee(a)}`,t==="inherit"&&"colorInherit",n&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${Ee(a)}`],endIcon:["endIcon",`iconSize${Ee(a)}`]},d=et(c,t8,l);return M({},l,d)},vy=e=>M({},e.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},e.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},e.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),a8=de(my,{shouldForwardProp:e=>Zn(e)||e==="classes",name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${Ee(n.color)}`],t[`size${Ee(n.size)}`],t[`${n.variant}Size${Ee(n.size)}`],n.color==="inherit"&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var n,o;const a=e.palette.mode==="light"?e.palette.grey[300]:e.palette.grey[800],r=e.palette.mode==="light"?e.palette.grey.A100:e.palette.grey[700];return M({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":M({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:$n(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="text"&&t.color!=="inherit"&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:$n(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="outlined"&&t.color!=="inherit"&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:$n(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},t.variant==="contained"&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},t.variant==="contained"&&t.color!=="inherit"&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":M({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${_a.focusVisible}`]:M({},t.variant==="contained"&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${_a.disabled}`]:M({color:(e.vars||e).palette.action.disabled},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},t.variant==="contained"&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},t.variant==="text"&&{padding:"6px 8px"},t.variant==="text"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main},t.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},t.variant==="outlined"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${$n(e.palette[t.color].main,.5)}`},t.variant==="contained"&&{color:e.vars?e.vars.palette.text.primary:(n=(o=e.palette).getContrastText)==null?void 0:n.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},t.variant==="contained"&&t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},t.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},t.size==="small"&&t.variant==="text"&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="text"&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="outlined"&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="outlined"&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},t.size==="small"&&t.variant==="contained"&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},t.size==="large"&&t.variant==="contained"&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${_a.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${_a.disabled}`]:{boxShadow:"none"}}),l8=de("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${Ee(n.size)}`]]}})(({ownerState:e})=>M({display:"inherit",marginRight:8,marginLeft:-4},e.size==="small"&&{marginLeft:-2},vy(e))),u8=de("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${Ee(n.size)}`]]}})(({ownerState:e})=>M({display:"inherit",marginRight:-4,marginLeft:8},e.size==="small"&&{marginRight:-2},vy(e))),c8=S.forwardRef(function(t,n){const o=S.useContext(o8),a=Of(o,t),r=tt({props:a,name:"MuiButton"}),{children:l,color:c="primary",component:d="button",className:p,disabled:g=!1,disableElevation:m=!1,disableFocusRipple:y=!1,endIcon:_,focusVisibleClassName:C,fullWidth:E=!1,size:R="medium",startIcon:x,type:b,variant:w="text"}=r,k=ue(r,r8),T=M({},r,{color:c,component:d,disabled:g,disableElevation:m,disableFocusRipple:y,fullWidth:E,size:R,type:b,variant:w}),I=s8(T),O=x&&B.jsx(l8,{className:I.startIcon,ownerState:T,children:x}),N=_&&B.jsx(u8,{className:I.endIcon,ownerState:T,children:_});return B.jsxs(a8,M({ownerState:T,className:ge(o.className,I.root,p),component:d,disabled:g,focusRipple:!y,focusVisibleClassName:ge(I.focusVisible,C),ref:n,type:b},k,{classes:I,children:[O,l,N]}))}),d8=c8;function f8(e){return Ke("MuiModal",e)}Ne("MuiModal",["root","hidden","backdrop"]);const p8=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],h8=e=>{const{open:t,exited:n,classes:o}=e;return et({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},f8,o)},m8=de("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>M({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),g8=de(X5,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),y8=S.forwardRef(function(t,n){var o,a,r,l,c,d;const p=tt({name:"MuiModal",props:t}),{BackdropComponent:g=g8,BackdropProps:m,className:y,closeAfterTransition:_=!1,children:C,container:E,component:R,components:x={},componentsProps:b={},disableAutoFocus:w=!1,disableEnforceFocus:k=!1,disableEscapeKeyDown:T=!1,disablePortal:I=!1,disableRestoreFocus:O=!1,disableScrollLock:N=!1,hideBackdrop:G=!1,keepMounted:$=!1,onBackdropClick:Z,open:ee,slotProps:te,slots:H}=p,q=ue(p,p8),W=M({},p,{closeAfterTransition:_,disableAutoFocus:w,disableEnforceFocus:k,disableEscapeKeyDown:T,disablePortal:I,disableRestoreFocus:O,disableScrollLock:N,hideBackdrop:G,keepMounted:$}),{getRootProps:K,getBackdropProps:z,getTransitionProps:V,portalRef:F,isTopModal:J,exited:se,hasTransition:pe}=E5(M({},W,{rootRef:n})),ne=M({},W,{exited:se}),ie=h8(ne),Q={};if(C.props.tabIndex===void 0&&(Q.tabIndex="-1"),pe){const{onEnter:_e,onExited:Me}=V();Q.onEnter=_e,Q.onExited=Me}const Te=(o=(a=H==null?void 0:H.root)!=null?a:x.Root)!=null?o:m8,qe=(r=(l=H==null?void 0:H.backdrop)!=null?l:x.Backdrop)!=null?r:g,Be=(c=te==null?void 0:te.root)!=null?c:b.root,ot=(d=te==null?void 0:te.backdrop)!=null?d:b.backdrop,ve=tr({elementType:Te,externalSlotProps:Be,externalForwardedProps:q,getSlotProps:K,additionalProps:{ref:n,as:R},ownerState:ne,className:ge(y,Be==null?void 0:Be.className,ie==null?void 0:ie.root,!ne.open&&ne.exited&&(ie==null?void 0:ie.hidden))}),ce=tr({elementType:qe,externalSlotProps:ot,additionalProps:m,getSlotProps:_e=>z(M({},_e,{onClick:Me=>{Z&&Z(Me),_e!=null&&_e.onClick&&_e.onClick(Me)}})),className:ge(ot==null?void 0:ot.className,m==null?void 0:m.className,ie==null?void 0:ie.backdrop),ownerState:ne});return!$&&!ee&&(!pe||se)?null:B.jsx(h5,{ref:F,container:E,disablePortal:I,children:B.jsxs(Te,M({},ve,{children:[!G&&g?B.jsx(qe,M({},ce)):null,B.jsx(f5,{disableEnforceFocus:k,disableAutoFocus:w,disableRestoreFocus:O,isEnabled:J,open:ee,children:S.cloneElement(C,Q)})]}))})}),v8=y8,_8=Ne("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),i1=_8,x8=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],b8=e=>{const{classes:t,disableUnderline:n}=e,a=et({root:["root",!n&&"underline"],input:["input"]},$5,t);return M({},t,a)},w8=de(hu,{shouldForwardProp:e=>Zn(e)||e==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...fu(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{var n;const o=e.palette.mode==="light",a=o?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",r=o?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",l=o?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",c=o?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return M({position:"relative",backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r,borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),"&:hover":{backgroundColor:e.vars?e.vars.palette.FilledInput.hoverBg:l,"@media (hover: none)":{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r}},[`&.${Ni.focused}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.bg:r},[`&.${Ni.disabled}`]:{backgroundColor:e.vars?e.vars.palette.FilledInput.disabledBg:c}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(n=(e.vars||e).palette[t.color||"primary"])==null?void 0:n.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ni.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ni.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`:a}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ni.disabled}, .${Ni.error}):before`]:{borderBottom:`1px solid ${(e.vars||e).palette.text.primary}`},[`&.${Ni.disabled}:before`]:{borderBottomStyle:"dotted"}},t.startAdornment&&{paddingLeft:12},t.endAdornment&&{paddingRight:12},t.multiline&&M({padding:"25px 12px 8px"},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17}))}),E8=de(mu,{name:"MuiFilledInput",slot:"Input",overridesResolver:pu})(({theme:e,ownerState:t})=>M({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{paddingTop:21,paddingBottom:4},t.hiddenLabel&&{paddingTop:16,paddingBottom:17},t.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0},t.hiddenLabel&&t.size==="small"&&{paddingTop:8,paddingBottom:9})),_y=S.forwardRef(function(t,n){var o,a,r,l;const c=tt({props:t,name:"MuiFilledInput"}),{components:d={},componentsProps:p,fullWidth:g=!1,inputComponent:m="input",multiline:y=!1,slotProps:_,slots:C={},type:E="text"}=c,R=ue(c,x8),x=M({},c,{fullWidth:g,inputComponent:m,multiline:y,type:E}),b=b8(c),w={root:{ownerState:x},input:{ownerState:x}},k=_??p?pn(_??p,w):w,T=(o=(a=C.root)!=null?a:d.Root)!=null?o:w8,I=(r=(l=C.input)!=null?l:d.Input)!=null?r:E8;return B.jsx(Xf,M({slots:{root:T,input:I},componentsProps:k,fullWidth:g,inputComponent:m,multiline:y,ref:n,type:E},R,{classes:b}))});_y.muiName="Input";const xy=_y;function C8(e){return Ke("MuiFormControl",e)}Ne("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const S8=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],k8=e=>{const{classes:t,margin:n,fullWidth:o}=e,a={root:["root",n!=="none"&&`margin${Ee(n)}`,o&&"fullWidth"]};return et(a,C8,t)},P8=de("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>M({},t.root,t[`margin${Ee(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>M({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),L8=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiFormControl"}),{children:a,className:r,color:l="primary",component:c="div",disabled:d=!1,error:p=!1,focused:g,fullWidth:m=!1,hiddenLabel:y=!1,margin:_="none",required:C=!1,size:E="medium",variant:R="outlined"}=o,x=ue(o,S8),b=M({},o,{color:l,component:c,disabled:d,error:p,fullWidth:m,hiddenLabel:y,margin:_,required:C,size:E,variant:R}),w=k8(b),[k,T]=S.useState(()=>{let te=!1;return a&&S.Children.forEach(a,H=>{if(!yc(H,["Input","Select"]))return;const q=yc(H,["Select"])?H.props.input:H;q&&T5(q.props)&&(te=!0)}),te}),[I,O]=S.useState(()=>{let te=!1;return a&&S.Children.forEach(a,H=>{yc(H,["Input","Select"])&&(cl(H.props,!0)||cl(H.props.inputProps,!0))&&(te=!0)}),te}),[N,G]=S.useState(!1);d&&N&&G(!1);const $=g!==void 0&&!d?g:N;let Z;const ee=S.useMemo(()=>({adornedStart:k,setAdornedStart:T,color:l,disabled:d,error:p,filled:I,focused:$,fullWidth:m,hiddenLabel:y,size:E,onBlur:()=>{G(!1)},onEmpty:()=>{O(!1)},onFilled:()=>{O(!0)},onFocus:()=>{G(!0)},registerEffect:Z,required:C,variant:R}),[k,l,d,p,I,$,m,y,Z,C,E,R]);return B.jsx(Qf.Provider,{value:ee,children:B.jsx(P8,M({as:c,ownerState:b,className:ge(w.root,r),ref:n},x,{children:a}))})}),T8=L8;function M8(e){return Ke("MuiFormHelperText",e)}const O8=Ne("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),o1=O8;var r1;const I8=["children","className","component","disabled","error","filled","focused","margin","required","variant"],R8=e=>{const{classes:t,contained:n,size:o,disabled:a,error:r,filled:l,focused:c,required:d}=e,p={root:["root",a&&"disabled",r&&"error",o&&`size${Ee(o)}`,n&&"contained",c&&"focused",l&&"filled",d&&"required"]};return et(p,M8,t)},A8=de("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t[`size${Ee(n.size)}`],n.contained&&t.contained,n.filled&&t.filled]}})(({theme:e,ownerState:t})=>M({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${o1.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${o1.error}`]:{color:(e.vars||e).palette.error.main}},t.size==="small"&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})),z8=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiFormHelperText"}),{children:a,className:r,component:l="p"}=o,c=ue(o,I8),d=lr(),p=ar({props:o,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),g=M({},o,{component:l,contained:p.variant==="filled"||p.variant==="outlined",variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),m=R8(g);return B.jsx(A8,M({as:l,ownerState:g,className:ge(m.root,r),ref:n},c,{children:a===" "?r1||(r1=B.jsx("span",{className:"notranslate",children:"​"})):a}))}),U8=z8;function N8(e){return Ke("MuiFormLabel",e)}const B8=Ne("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),ts=B8,F8=["children","className","color","component","disabled","error","filled","focused","required"],$8=e=>{const{classes:t,color:n,focused:o,disabled:a,error:r,filled:l,required:c}=e,d={root:["root",`color${Ee(n)}`,a&&"disabled",r&&"error",l&&"filled",o&&"focused",c&&"required"],asterisk:["asterisk",r&&"error"]};return et(d,N8,t)},D8=de("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:e},t)=>M({},t.root,e.color==="secondary"&&t.colorSecondary,e.filled&&t.filled)})(({theme:e,ownerState:t})=>M({color:(e.vars||e).palette.text.secondary},e.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${ts.focused}`]:{color:(e.vars||e).palette[t.color].main},[`&.${ts.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${ts.error}`]:{color:(e.vars||e).palette.error.main}})),j8=de("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${ts.error}`]:{color:(e.vars||e).palette.error.main}})),H8=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiFormLabel"}),{children:a,className:r,component:l="label"}=o,c=ue(o,F8),d=lr(),p=ar({props:o,muiFormControl:d,states:["color","required","focused","disabled","error","filled"]}),g=M({},o,{color:p.color||"primary",component:l,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),m=$8(g);return B.jsxs(D8,M({as:l,ownerState:g,className:ge(m.root,r),ref:n},c,{children:[a,p.required&&B.jsxs(j8,{ownerState:g,"aria-hidden":!0,className:m.asterisk,children:[" ","*"]})]}))}),Z8=H8,W8=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Ld(e){return`scale(${e}, ${e**2})`}const V8={entering:{opacity:1,transform:Ld(1)},entered:{opacity:1,transform:"none"}},wc=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),by=S.forwardRef(function(t,n){const{addEndListener:o,appear:a=!0,children:r,easing:l,in:c,onEnter:d,onEntered:p,onEntering:g,onExit:m,onExited:y,onExiting:_,style:C,timeout:E="auto",TransitionComponent:R=py}=t,x=ue(t,W8),b=S.useRef(),w=S.useRef(),k=Gf(),T=S.useRef(null),I=At(T,r.ref,n),O=q=>W=>{if(q){const K=T.current;W===void 0?q(K):q(K,W)}},N=O(g),G=O((q,W)=>{hy(q);const{duration:K,delay:z,easing:V}=ll({style:C,timeout:E,easing:l},{mode:"enter"});let F;E==="auto"?(F=k.transitions.getAutoHeightDuration(q.clientHeight),w.current=F):F=K,q.style.transition=[k.transitions.create("opacity",{duration:F,delay:z}),k.transitions.create("transform",{duration:wc?F:F*.666,delay:z,easing:V})].join(","),d&&d(q,W)}),$=O(p),Z=O(_),ee=O(q=>{const{duration:W,delay:K,easing:z}=ll({style:C,timeout:E,easing:l},{mode:"exit"});let V;E==="auto"?(V=k.transitions.getAutoHeightDuration(q.clientHeight),w.current=V):V=W,q.style.transition=[k.transitions.create("opacity",{duration:V,delay:K}),k.transitions.create("transform",{duration:wc?V:V*.666,delay:wc?K:K||V*.333,easing:z})].join(","),q.style.opacity=0,q.style.transform=Ld(.75),m&&m(q)}),te=O(y),H=q=>{E==="auto"&&(b.current=setTimeout(q,w.current||0)),o&&o(T.current,q)};return S.useEffect(()=>()=>{clearTimeout(b.current)},[]),B.jsx(R,M({appear:a,in:c,nodeRef:T,onEnter:G,onEntered:$,onEntering:N,onExit:ee,onExited:te,onExiting:Z,addEndListener:H,timeout:E==="auto"?null:E},x,{children:(q,W)=>S.cloneElement(r,M({style:M({opacity:0,transform:Ld(.75),visibility:q==="exited"&&!c?"hidden":void 0},V8[q],C,r.props.style),ref:I},W))}))});by.muiSupportAuto=!0;const G8=by,K8=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],q8=e=>{const{classes:t,disableUnderline:n}=e,a=et({root:["root",!n&&"underline"],input:["input"]},U5,t);return M({},t,a)},Y8=de(hu,{shouldForwardProp:e=>Zn(e)||e==="classes",name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[...fu(e,t),!n.disableUnderline&&t.underline]}})(({theme:e,ownerState:t})=>{let o=e.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(o=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),M({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${Ar.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${Ar.error}`]:{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}},"&:before":{borderBottom:`1px solid ${o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${Ar.disabled}, .${Ar.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${o}`}},[`&.${Ar.disabled}:before`]:{borderBottomStyle:"dotted"}})}),Q8=de(mu,{name:"MuiInput",slot:"Input",overridesResolver:pu})({}),wy=S.forwardRef(function(t,n){var o,a,r,l;const c=tt({props:t,name:"MuiInput"}),{disableUnderline:d,components:p={},componentsProps:g,fullWidth:m=!1,inputComponent:y="input",multiline:_=!1,slotProps:C,slots:E={},type:R="text"}=c,x=ue(c,K8),b=q8(c),k={root:{ownerState:{disableUnderline:d}}},T=C??g?pn(C??g,k):k,I=(o=(a=E.root)!=null?a:p.Root)!=null?o:Y8,O=(r=(l=E.input)!=null?l:p.Input)!=null?r:Q8;return B.jsx(Xf,M({slots:{root:I,input:O},slotProps:T,fullWidth:m,inputComponent:y,multiline:_,ref:n,type:R},x,{classes:b}))});wy.muiName="Input";const Ey=wy;function X8(e){return Ke("MuiInputLabel",e)}Ne("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const J8=["disableAnimation","margin","shrink","variant","className"],eE=e=>{const{classes:t,formControl:n,size:o,shrink:a,disableAnimation:r,variant:l,required:c}=e,p=et({root:["root",n&&"formControl",!r&&"animated",a&&"shrink",o==="small"&&"sizeSmall",l],asterisk:[c&&"asterisk"]},X8,t);return M({},t,p)},tE=de(Z8,{shouldForwardProp:e=>Zn(e)||e==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${ts.asterisk}`]:t.asterisk},t.root,n.formControl&&t.formControl,n.size==="small"&&t.sizeSmall,n.shrink&&t.shrink,!n.disableAnimation&&t.animated,t[n.variant]]}})(({theme:e,ownerState:t})=>M({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},t.size==="small"&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},t.variant==="filled"&&M({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&M({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},t.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),t.variant==="outlined"&&M({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},t.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),nE=S.forwardRef(function(t,n){const o=tt({name:"MuiInputLabel",props:t}),{disableAnimation:a=!1,shrink:r,className:l}=o,c=ue(o,J8),d=lr();let p=r;typeof p>"u"&&d&&(p=d.filled||d.focused||d.adornedStart);const g=ar({props:o,muiFormControl:d,states:["size","variant","required"]}),m=M({},o,{disableAnimation:a,formControl:d,shrink:p,size:g.size,variant:g.variant,required:g.required}),y=eE(m);return B.jsx(tE,M({"data-shrink":p,ownerState:m,ref:n,className:ge(y.root,l)},c,{classes:y}))}),iE=nE,oE=S.createContext({}),Td=oE;function rE(e){return Ke("MuiList",e)}Ne("MuiList",["root","padding","dense","subheader"]);const sE=["children","className","component","dense","disablePadding","subheader"],aE=e=>{const{classes:t,disablePadding:n,dense:o,subheader:a}=e;return et({root:["root",!n&&"padding",o&&"dense",a&&"subheader"]},rE,t)},lE=de("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>M({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),uE=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiList"}),{children:a,className:r,component:l="ul",dense:c=!1,disablePadding:d=!1,subheader:p}=o,g=ue(o,sE),m=S.useMemo(()=>({dense:c}),[c]),y=M({},o,{component:l,dense:c,disablePadding:d}),_=aE(y);return B.jsx(Td.Provider,{value:m,children:B.jsxs(lE,M({as:l,className:ge(_.root,r),ref:n,ownerState:y},g,{children:[p,a]}))})}),cE=uE,dE=Ne("MuiListItemIcon",["root","alignItemsFlexStart"]),s1=dE,fE=Ne("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),a1=fE,pE=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Ec(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function l1(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function Cy(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function zr(e,t,n,o,a,r){let l=!1,c=a(e,t,t?n:!1);for(;c;){if(c===e.firstChild){if(l)return!1;l=!0}const d=o?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!Cy(c,r)||d)c=a(e,c,n);else return c.focus(),!0}return!1}const hE=S.forwardRef(function(t,n){const{actions:o,autoFocus:a=!1,autoFocusItem:r=!1,children:l,className:c,disabledItemsFocusable:d=!1,disableListWrap:p=!1,onKeyDown:g,variant:m="selectedMenu"}=t,y=ue(t,pE),_=S.useRef(null),C=S.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});to(()=>{a&&_.current.focus()},[a]),S.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(w,k)=>{const T=!_.current.style.width;if(w.clientHeight<_.current.clientHeight&&T){const I=`${z0(Qt(w))}px`;_.current.style[k.direction==="rtl"?"paddingLeft":"paddingRight"]=I,_.current.style.width=`calc(100% + ${I})`}return _.current}}),[]);const E=w=>{const k=_.current,T=w.key,I=Qt(k).activeElement;if(T==="ArrowDown")w.preventDefault(),zr(k,I,p,d,Ec);else if(T==="ArrowUp")w.preventDefault(),zr(k,I,p,d,l1);else if(T==="Home")w.preventDefault(),zr(k,null,p,d,Ec);else if(T==="End")w.preventDefault(),zr(k,null,p,d,l1);else if(T.length===1){const O=C.current,N=T.toLowerCase(),G=performance.now();O.keys.length>0&&(G-O.lastTime>500?(O.keys=[],O.repeating=!0,O.previousKeyMatched=!0):O.repeating&&N!==O.keys[0]&&(O.repeating=!1)),O.lastTime=G,O.keys.push(N);const $=I&&!O.repeating&&Cy(I,O);O.previousKeyMatched&&($||zr(k,I,!1,d,Ec,O))?w.preventDefault():O.previousKeyMatched=!1}g&&g(w)},R=At(_,n);let x=-1;S.Children.forEach(l,(w,k)=>{if(!S.isValidElement(w)){x===k&&(x+=1,x>=l.length&&(x=-1));return}w.props.disabled||(m==="selectedMenu"&&w.props.selected||x===-1)&&(x=k),x===k&&(w.props.disabled||w.props.muiSkipListHighlight||w.type.muiSkipListHighlight)&&(x+=1,x>=l.length&&(x=-1))});const b=S.Children.map(l,(w,k)=>{if(k===x){const T={};return r&&(T.autoFocus=!0),w.props.tabIndex===void 0&&m==="selectedMenu"&&(T.tabIndex=0),S.cloneElement(w,T)}return w});return B.jsx(cE,M({role:"menu",ref:R,className:c,onKeyDown:E,tabIndex:a?0:-1},y,{children:b}))}),mE=hE;function gE(e){return Ke("MuiPopover",e)}Ne("MuiPopover",["root","paper"]);const yE=["onEntering"],vE=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"],_E=["slotProps"];function u1(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function c1(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function d1(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Cc(e){return typeof e=="function"?e():e}const xE=e=>{const{classes:t}=e;return et({root:["root"],paper:["paper"]},gE,t)},bE=de(v8,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Sy=de(M4,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),wE=S.forwardRef(function(t,n){var o,a,r;const l=tt({props:t,name:"MuiPopover"}),{action:c,anchorEl:d,anchorOrigin:p={vertical:"top",horizontal:"left"},anchorPosition:g,anchorReference:m="anchorEl",children:y,className:_,container:C,elevation:E=8,marginThreshold:R=16,open:x,PaperProps:b={},slots:w,slotProps:k,transformOrigin:T={vertical:"top",horizontal:"left"},TransitionComponent:I=G8,transitionDuration:O="auto",TransitionProps:{onEntering:N}={}}=l,G=ue(l.TransitionProps,yE),$=ue(l,vE),Z=(o=k==null?void 0:k.paper)!=null?o:b,ee=S.useRef(),te=At(ee,Z.ref),H=M({},l,{anchorOrigin:p,anchorReference:m,elevation:E,marginThreshold:R,externalPaperSlotProps:Z,transformOrigin:T,TransitionComponent:I,transitionDuration:O,TransitionProps:G}),q=xE(H),W=S.useCallback(()=>{if(m==="anchorPosition")return g;const ce=Cc(d),Me=(ce&&ce.nodeType===1?ce:Qt(ee.current).body).getBoundingClientRect();return{top:Me.top+u1(Me,p.vertical),left:Me.left+c1(Me,p.horizontal)}},[d,p.horizontal,p.vertical,g,m]),K=S.useCallback(ce=>({vertical:u1(ce,T.vertical),horizontal:c1(ce,T.horizontal)}),[T.horizontal,T.vertical]),z=S.useCallback(ce=>{const _e={width:ce.offsetWidth,height:ce.offsetHeight},Me=K(_e);if(m==="none")return{top:null,left:null,transformOrigin:d1(Me)};const Lt=W();let Tt=Lt.top-Me.vertical,bt=Lt.left-Me.horizontal;const wt=Tt+_e.height,Ln=bt+_e.width,rt=eo(Cc(d)),He=rt.innerHeight-R,Nt=rt.innerWidth-R;if(Tt<R){const Ae=Tt-R;Tt-=Ae,Me.vertical+=Ae}else if(wt>He){const Ae=wt-He;Tt-=Ae,Me.vertical+=Ae}if(bt<R){const Ae=bt-R;bt-=Ae,Me.horizontal+=Ae}else if(Ln>Nt){const Ae=Ln-Nt;bt-=Ae,Me.horizontal+=Ae}return{top:`${Math.round(Tt)}px`,left:`${Math.round(bt)}px`,transformOrigin:d1(Me)}},[d,m,W,K,R]),[V,F]=S.useState(x),J=S.useCallback(()=>{const ce=ee.current;if(!ce)return;const _e=z(ce);_e.top!==null&&(ce.style.top=_e.top),_e.left!==null&&(ce.style.left=_e.left),ce.style.transformOrigin=_e.transformOrigin,F(!0)},[z]),se=(ce,_e)=>{N&&N(ce,_e),J()},pe=()=>{F(!1)};S.useEffect(()=>{x&&J()}),S.useImperativeHandle(c,()=>x?{updatePosition:()=>{J()}}:null,[x,J]),S.useEffect(()=>{if(!x)return;const ce=A0(()=>{J()}),_e=eo(d);return _e.addEventListener("resize",ce),()=>{ce.clear(),_e.removeEventListener("resize",ce)}},[d,x,J]);let ne=O;O==="auto"&&!I.muiSupportAuto&&(ne=void 0);const ie=C||(d?Qt(Cc(d)).body:void 0),Q=(a=w==null?void 0:w.root)!=null?a:bE,Te=(r=w==null?void 0:w.paper)!=null?r:Sy,qe=tr({elementType:Te,externalSlotProps:M({},Z,{style:V?Z.style:M({},Z.style,{opacity:0})}),additionalProps:{elevation:E,ref:te},ownerState:H,className:ge(q.paper,Z==null?void 0:Z.className)}),Be=tr({elementType:Q,externalSlotProps:(k==null?void 0:k.root)||{},externalForwardedProps:$,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ie,open:x},ownerState:H,className:ge(q.root,_)}),{slotProps:ot}=Be,ve=ue(Be,_E);return B.jsx(Q,M({},ve,!ul(Q)&&{slotProps:ot},{children:B.jsx(I,M({appear:!0,in:x,onEntering:se,onExited:pe,timeout:ne},G,{children:B.jsx(Te,M({},qe,{children:y}))}))}))}),EE=wE;function CE(e){return Ke("MuiMenu",e)}Ne("MuiMenu",["root","paper","list"]);const SE=["onEntering"],kE=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],PE={vertical:"top",horizontal:"right"},LE={vertical:"top",horizontal:"left"},TE=e=>{const{classes:t}=e;return et({root:["root"],paper:["paper"],list:["list"]},CE,t)},ME=de(EE,{shouldForwardProp:e=>Zn(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),OE=de(Sy,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),IE=de(mE,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),RE=S.forwardRef(function(t,n){var o,a;const r=tt({props:t,name:"MuiMenu"}),{autoFocus:l=!0,children:c,className:d,disableAutoFocusItem:p=!1,MenuListProps:g={},onClose:m,open:y,PaperProps:_={},PopoverClasses:C,transitionDuration:E="auto",TransitionProps:{onEntering:R}={},variant:x="selectedMenu",slots:b={},slotProps:w={}}=r,k=ue(r.TransitionProps,SE),T=ue(r,kE),I=Gf(),O=I.direction==="rtl",N=M({},r,{autoFocus:l,disableAutoFocusItem:p,MenuListProps:g,onEntering:R,PaperProps:_,transitionDuration:E,TransitionProps:k,variant:x}),G=TE(N),$=l&&!p&&y,Z=S.useRef(null),ee=(V,F)=>{Z.current&&Z.current.adjustStyleForScrollbar(V,I),R&&R(V,F)},te=V=>{V.key==="Tab"&&(V.preventDefault(),m&&m(V,"tabKeyDown"))};let H=-1;S.Children.map(c,(V,F)=>{S.isValidElement(V)&&(V.props.disabled||(x==="selectedMenu"&&V.props.selected||H===-1)&&(H=F))});const q=(o=b.paper)!=null?o:OE,W=(a=w.paper)!=null?a:_,K=tr({elementType:b.root,externalSlotProps:w.root,ownerState:N,className:[G.root,d]}),z=tr({elementType:q,externalSlotProps:W,ownerState:N,className:G.paper});return B.jsx(ME,M({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:O?"right":"left"},transformOrigin:O?PE:LE,slots:{paper:q,root:b.root},slotProps:{root:K,paper:z},open:y,ref:n,transitionDuration:E,TransitionProps:M({onEntering:ee},k),ownerState:N},T,{classes:C,children:B.jsx(IE,M({onKeyDown:te,actions:Z,autoFocus:l&&(H===-1||p),autoFocusItem:$,variant:x},g,{className:ge(G.list,g.className),children:c}))}))}),ky=RE;function AE(e){return Ke("MuiMenuItem",e)}const zE=Ne("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),Ur=zE,UE=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],NE=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},BE=e=>{const{disabled:t,dense:n,divider:o,disableGutters:a,selected:r,classes:l}=e,d=et({root:["root",n&&"dense",t&&"disabled",!a&&"gutters",o&&"divider",r&&"selected"]},AE,l);return M({},l,d)},FE=de(my,{shouldForwardProp:e=>Zn(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:NE})(({theme:e,ownerState:t})=>M({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Ur.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$n(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${Ur.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$n(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${Ur.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$n(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$n(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${Ur.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Ur.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${i1.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${i1.inset}`]:{marginLeft:52},[`& .${a1.root}`]:{marginTop:0,marginBottom:0},[`& .${a1.inset}`]:{paddingLeft:36},[`& .${s1.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&M({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${s1.root} svg`]:{fontSize:"1.25rem"}}))),$E=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiMenuItem"}),{autoFocus:a=!1,component:r="li",dense:l=!1,divider:c=!1,disableGutters:d=!1,focusVisibleClassName:p,role:g="menuitem",tabIndex:m,className:y}=o,_=ue(o,UE),C=S.useContext(Td),E=S.useMemo(()=>({dense:l||C.dense||!1,disableGutters:d}),[C.dense,l,d]),R=S.useRef(null);to(()=>{a&&R.current&&R.current.focus()},[a]);const x=M({},o,{dense:E.dense,divider:c,disableGutters:d}),b=BE(o),w=At(R,n);let k;return o.disabled||(k=m!==void 0?m:-1),B.jsx(Td.Provider,{value:E,children:B.jsx(FE,M({ref:w,role:g,tabIndex:k,component:r,focusVisibleClassName:ge(b.focusVisible,p),className:ge(b.root,y)},_,{ownerState:x,classes:b}))})}),DE=$E;function jE(e){return Ke("MuiNativeSelect",e)}const HE=Ne("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Jf=HE,ZE=["className","disabled","error","IconComponent","inputRef","variant"],WE=e=>{const{classes:t,variant:n,disabled:o,multiple:a,open:r,error:l}=e,c={select:["select",n,o&&"disabled",a&&"multiple",l&&"error"],icon:["icon",`icon${Ee(n)}`,r&&"iconOpen",o&&"disabled"]};return et(c,jE,t)},Py=({ownerState:e,theme:t})=>M({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":M({},t.vars?{backgroundColor:`rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:t.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Jf.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(t.vars||t).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},e.variant==="filled"&&{"&&&":{paddingRight:32}},e.variant==="outlined"&&{borderRadius:(t.vars||t).shape.borderRadius,"&:focus":{borderRadius:(t.vars||t).shape.borderRadius},"&&&":{paddingRight:32}}),VE=de("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:Zn,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.select,t[n.variant],n.error&&t.error,{[`&.${Jf.multiple}`]:t.multiple}]}})(Py),Ly=({ownerState:e,theme:t})=>M({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(t.vars||t).palette.action.active,[`&.${Jf.disabled}`]:{color:(t.vars||t).palette.action.disabled}},e.open&&{transform:"rotate(180deg)"},e.variant==="filled"&&{right:7},e.variant==="outlined"&&{right:7}),GE=de("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${Ee(n.variant)}`],n.open&&t.iconOpen]}})(Ly),KE=S.forwardRef(function(t,n){const{className:o,disabled:a,error:r,IconComponent:l,inputRef:c,variant:d="standard"}=t,p=ue(t,ZE),g=M({},t,{disabled:a,variant:d,error:r}),m=WE(g);return B.jsxs(S.Fragment,{children:[B.jsx(VE,M({ownerState:g,className:ge(m.select,o),disabled:a,ref:c||n},p)),t.multiple?null:B.jsx(GE,{as:l,ownerState:g,className:m.icon})]})}),qE=KE;var f1;const YE=["children","classes","className","label","notched"],QE=de("fieldset")({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),XE=de("legend")(({ownerState:e,theme:t})=>M({float:"unset",width:"auto",overflow:"hidden"},!e.withLabel&&{padding:0,lineHeight:"11px",transition:t.transitions.create("width",{duration:150,easing:t.transitions.easing.easeOut})},e.withLabel&&M({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:t.transitions.create("max-width",{duration:50,easing:t.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},e.notched&&{maxWidth:"100%",transition:t.transitions.create("max-width",{duration:100,easing:t.transitions.easing.easeOut,delay:50})})));function JE(e){const{className:t,label:n,notched:o}=e,a=ue(e,YE),r=n!=null&&n!=="",l=M({},e,{notched:o,withLabel:r});return B.jsx(QE,M({"aria-hidden":!0,className:t,ownerState:l},a,{children:B.jsx(XE,{ownerState:l,children:r?B.jsx("span",{children:n}):f1||(f1=B.jsx("span",{className:"notranslate",children:"​"}))})}))}const eC=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],tC=e=>{const{classes:t}=e,o=et({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},B5,t);return M({},t,o)},nC=de(hu,{shouldForwardProp:e=>Zn(e)||e==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:fu})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return M({position:"relative",borderRadius:(e.vars||e).shape.borderRadius,[`&:hover .${di.notchedOutline}`]:{borderColor:(e.vars||e).palette.text.primary},"@media (hover: none)":{[`&:hover .${di.notchedOutline}`]:{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:n}},[`&.${di.focused} .${di.notchedOutline}`]:{borderColor:(e.vars||e).palette[t.color].main,borderWidth:2},[`&.${di.error} .${di.notchedOutline}`]:{borderColor:(e.vars||e).palette.error.main},[`&.${di.disabled} .${di.notchedOutline}`]:{borderColor:(e.vars||e).palette.action.disabled}},t.startAdornment&&{paddingLeft:14},t.endAdornment&&{paddingRight:14},t.multiline&&M({padding:"16.5px 14px"},t.size==="small"&&{padding:"8.5px 14px"}))}),iC=de(JE,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(e,t)=>t.notchedOutline})(({theme:e})=>{const t=e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:e.vars?`rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:t}}),oC=de(mu,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:pu})(({theme:e,ownerState:t})=>M({padding:"16.5px 14px"},!e.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:e.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:e.palette.mode==="light"?null:"#fff",caretColor:e.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},e.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[e.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},t.size==="small"&&{padding:"8.5px 14px"},t.multiline&&{padding:0},t.startAdornment&&{paddingLeft:0},t.endAdornment&&{paddingRight:0})),Ty=S.forwardRef(function(t,n){var o,a,r,l,c;const d=tt({props:t,name:"MuiOutlinedInput"}),{components:p={},fullWidth:g=!1,inputComponent:m="input",label:y,multiline:_=!1,notched:C,slots:E={},type:R="text"}=d,x=ue(d,eC),b=tC(d),w=lr(),k=ar({props:d,muiFormControl:w,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),T=M({},d,{color:k.color||"primary",disabled:k.disabled,error:k.error,focused:k.focused,formControl:w,fullWidth:g,hiddenLabel:k.hiddenLabel,multiline:_,size:k.size,type:R}),I=(o=(a=E.root)!=null?a:p.Root)!=null?o:nC,O=(r=(l=E.input)!=null?l:p.Input)!=null?r:oC;return B.jsx(Xf,M({slots:{root:I,input:O},renderSuffix:N=>B.jsx(iC,{ownerState:T,className:b.notchedOutline,label:y!=null&&y!==""&&k.required?c||(c=B.jsxs(S.Fragment,{children:[y," ","*"]})):y,notched:typeof C<"u"?C:!!(N.startAdornment||N.filled||N.focused)}),fullWidth:g,inputComponent:m,multiline:_,ref:n,type:R},x,{classes:M({},b,{notchedOutline:null})}))});Ty.muiName="Input";const My=Ty;function rC(e){return Ke("MuiSelect",e)}const sC=Ne("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Nr=sC;var p1;const aC=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],lC=de("div",{name:"MuiSelect",slot:"Select",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`&.${Nr.select}`]:t.select},{[`&.${Nr.select}`]:t[n.variant]},{[`&.${Nr.error}`]:t.error},{[`&.${Nr.multiple}`]:t.multiple}]}})(Py,{[`&.${Nr.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),uC=de("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.icon,n.variant&&t[`icon${Ee(n.variant)}`],n.open&&t.iconOpen]}})(Ly),cC=de("input",{shouldForwardProp:e=>l4(e)&&e!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(e,t)=>t.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function h1(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}function dC(e){return e==null||typeof e=="string"&&!e.trim()}const fC=e=>{const{classes:t,variant:n,disabled:o,multiple:a,open:r,error:l}=e,c={select:["select",n,o&&"disabled",a&&"multiple",l&&"error"],icon:["icon",`icon${Ee(n)}`,r&&"iconOpen",o&&"disabled"],nativeInput:["nativeInput"]};return et(c,rC,t)},pC=S.forwardRef(function(t,n){const{"aria-describedby":o,"aria-label":a,autoFocus:r,autoWidth:l,children:c,className:d,defaultOpen:p,defaultValue:g,disabled:m,displayEmpty:y,error:_=!1,IconComponent:C,inputRef:E,labelId:R,MenuProps:x={},multiple:b,name:w,onBlur:k,onChange:T,onClose:I,onFocus:O,onOpen:N,open:G,readOnly:$,renderValue:Z,SelectDisplayProps:ee={},tabIndex:te,value:H,variant:q="standard"}=t,W=ue(t,aC),[K,z]=xm({controlled:H,default:g,name:"Select"}),[V,F]=xm({controlled:G,default:p,name:"Select"}),J=S.useRef(null),se=S.useRef(null),[pe,ne]=S.useState(null),{current:ie}=S.useRef(G!=null),[Q,Te]=S.useState(),qe=At(n,E),Be=S.useCallback(oe=>{se.current=oe,oe&&ne(oe)},[]),ot=pe==null?void 0:pe.parentNode;S.useImperativeHandle(qe,()=>({focus:()=>{se.current.focus()},node:J.current,value:K}),[K]),S.useEffect(()=>{p&&V&&pe&&!ie&&(Te(l?null:ot.clientWidth),se.current.focus())},[pe,l]),S.useEffect(()=>{r&&se.current.focus()},[r]),S.useEffect(()=>{if(!R)return;const oe=Qt(se.current).getElementById(R);if(oe){const Pe=()=>{getSelection().isCollapsed&&se.current.focus()};return oe.addEventListener("click",Pe),()=>{oe.removeEventListener("click",Pe)}}},[R]);const ve=(oe,Pe)=>{oe?N&&N(Pe):I&&I(Pe),ie||(Te(l?null:ot.clientWidth),F(oe))},ce=oe=>{oe.button===0&&(oe.preventDefault(),se.current.focus(),ve(!0,oe))},_e=oe=>{ve(!1,oe)},Me=S.Children.toArray(c),Lt=oe=>{const Pe=Me.find(Ye=>Ye.props.value===oe.target.value);Pe!==void 0&&(z(Pe.props.value),T&&T(oe,Pe))},Tt=oe=>Pe=>{let Ye;if(Pe.currentTarget.hasAttribute("tabindex")){if(b){Ye=Array.isArray(K)?K.slice():[];const Tn=K.indexOf(oe.props.value);Tn===-1?Ye.push(oe.props.value):Ye.splice(Tn,1)}else Ye=oe.props.value;if(oe.props.onClick&&oe.props.onClick(Pe),K!==Ye&&(z(Ye),T)){const Tn=Pe.nativeEvent||Pe,so=new Tn.constructor(Tn.type,Tn);Object.defineProperty(so,"target",{writable:!0,value:{value:Ye,name:w}}),T(so,oe)}b||ve(!1,Pe)}},bt=oe=>{$||[" ","ArrowUp","ArrowDown","Enter"].indexOf(oe.key)!==-1&&(oe.preventDefault(),ve(!0,oe))},wt=pe!==null&&V,Ln=oe=>{!wt&&k&&(Object.defineProperty(oe,"target",{writable:!0,value:{value:K,name:w}}),k(oe))};delete W["aria-invalid"];let rt,He;const Nt=[];let Ae=!1;(cl({value:K})||y)&&(Z?rt=Z(K):Ae=!0);const yn=Me.map(oe=>{if(!S.isValidElement(oe))return null;let Pe;if(b){if(!Array.isArray(K))throw new Error(Li(2));Pe=K.some(Ye=>h1(Ye,oe.props.value)),Pe&&Ae&&Nt.push(oe.props.children)}else Pe=h1(K,oe.props.value),Pe&&Ae&&(He=oe.props.children);return S.cloneElement(oe,{"aria-selected":Pe?"true":"false",onClick:Tt(oe),onKeyUp:Ye=>{Ye.key===" "&&Ye.preventDefault(),oe.props.onKeyUp&&oe.props.onKeyUp(Ye)},role:"option",selected:Pe,value:void 0,"data-value":oe.props.value})});Ae&&(b?Nt.length===0?rt=null:rt=Nt.reduce((oe,Pe,Ye)=>(oe.push(Pe),Ye<Nt.length-1&&oe.push(", "),oe),[]):rt=He);let Wt=Q;!l&&ie&&pe&&(Wt=ot.clientWidth);let Vt;typeof te<"u"?Vt=te:Vt=m?null:0;const vn=ee.id||(w?`mui-component-select-${w}`:void 0),Ce=M({},t,{variant:q,value:K,open:wt,error:_}),ae=fC(Ce);return B.jsxs(S.Fragment,{children:[B.jsx(lC,M({ref:Be,tabIndex:Vt,role:"button","aria-disabled":m?"true":void 0,"aria-expanded":wt?"true":"false","aria-haspopup":"listbox","aria-label":a,"aria-labelledby":[R,vn].filter(Boolean).join(" ")||void 0,"aria-describedby":o,onKeyDown:bt,onMouseDown:m||$?null:ce,onBlur:Ln,onFocus:O},ee,{ownerState:Ce,className:ge(ee.className,ae.select,d),id:vn,children:dC(rt)?p1||(p1=B.jsx("span",{className:"notranslate",children:"​"})):rt})),B.jsx(cC,M({"aria-invalid":_,value:Array.isArray(K)?K.join(","):K,name:w,ref:J,"aria-hidden":!0,onChange:Lt,tabIndex:-1,disabled:m,className:ae.nativeInput,autoFocus:r,ownerState:Ce},W)),B.jsx(uC,{as:C,className:ae.icon,ownerState:Ce}),B.jsx(ky,M({id:`menu-${w||""}`,anchorEl:ot,open:wt,onClose:_e,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},x,{MenuListProps:M({"aria-labelledby":R,role:"listbox",disableListWrap:!0},x.MenuListProps),PaperProps:M({},x.PaperProps,{style:M({minWidth:Wt},x.PaperProps!=null?x.PaperProps.style:null)}),children:yn}))]})}),hC=pC,mC=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],gC=["root"],yC=e=>{const{classes:t}=e;return t},ep={name:"MuiSelect",overridesResolver:(e,t)=>t.root,shouldForwardProp:e=>Zn(e)&&e!=="variant",slot:"Root"},vC=de(Ey,ep)(""),_C=de(My,ep)(""),xC=de(xy,ep)(""),Oy=S.forwardRef(function(t,n){const o=tt({name:"MuiSelect",props:t}),{autoWidth:a=!1,children:r,classes:l={},className:c,defaultOpen:d=!1,displayEmpty:p=!1,IconComponent:g=j5,id:m,input:y,inputProps:_,label:C,labelId:E,MenuProps:R,multiple:x=!1,native:b=!1,onClose:w,onOpen:k,open:T,renderValue:I,SelectDisplayProps:O,variant:N="outlined"}=o,G=ue(o,mC),$=b?qE:hC,Z=lr(),ee=ar({props:o,muiFormControl:Z,states:["variant","error"]}),te=ee.variant||N,H=M({},o,{variant:te,classes:l}),q=yC(H),W=ue(q,gC),K=y||{standard:B.jsx(vC,{ownerState:H}),outlined:B.jsx(_C,{label:C,ownerState:H}),filled:B.jsx(xC,{ownerState:H})}[te],z=At(n,K.ref);return B.jsx(S.Fragment,{children:S.cloneElement(K,M({inputComponent:$,inputProps:M({children:r,error:ee.error,IconComponent:g,variant:te,type:void 0,multiple:x},b?{id:m}:{autoWidth:a,defaultOpen:d,displayEmpty:p,labelId:E,MenuProps:R,onClose:w,onOpen:k,open:T,renderValue:I,SelectDisplayProps:M({id:m},O)},_,{classes:_?pn(W,_.classes):W},y?y.props.inputProps:{})},x&&b&&te==="outlined"?{notched:!0}:{},{ref:z,className:ge(K.props.className,c,q.root)},!y&&{variant:te},G))})});Oy.muiName="Select";const bC=Oy;function wC(e){return Ke("MuiTextField",e)}Ne("MuiTextField",["root"]);const EC=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],CC={standard:Ey,filled:xy,outlined:My},SC=e=>{const{classes:t}=e;return et({root:["root"]},wC,t)},kC=de(T8,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),PC=S.forwardRef(function(t,n){const o=tt({props:t,name:"MuiTextField"}),{autoComplete:a,autoFocus:r=!1,children:l,className:c,color:d="primary",defaultValue:p,disabled:g=!1,error:m=!1,FormHelperTextProps:y,fullWidth:_=!1,helperText:C,id:E,InputLabelProps:R,inputProps:x,InputProps:b,inputRef:w,label:k,maxRows:T,minRows:I,multiline:O=!1,name:N,onBlur:G,onChange:$,onFocus:Z,placeholder:ee,required:te=!1,rows:H,select:q=!1,SelectProps:W,type:K,value:z,variant:V="outlined"}=o,F=ue(o,EC),J=M({},o,{autoFocus:r,color:d,disabled:g,error:m,fullWidth:_,multiline:O,required:te,select:q,variant:V}),se=SC(J),pe={};V==="outlined"&&(R&&typeof R.shrink<"u"&&(pe.notched=R.shrink),pe.label=k),q&&((!W||!W.native)&&(pe.id=void 0),pe["aria-describedby"]=void 0);const ne=Q9(E),ie=C&&ne?`${ne}-helper-text`:void 0,Q=k&&ne?`${ne}-label`:void 0,Te=CC[V],qe=B.jsx(Te,M({"aria-describedby":ie,autoComplete:a,autoFocus:r,defaultValue:p,fullWidth:_,multiline:O,name:N,rows:H,maxRows:T,minRows:I,type:K,value:z,id:ne,inputRef:w,onBlur:G,onChange:$,onFocus:Z,placeholder:ee,inputProps:x},pe,b));return B.jsxs(kC,M({className:ge(se.root,c),disabled:g,error:m,fullWidth:_,ref:n,required:te,color:d,variant:V,ownerState:J},F,{children:[k!=null&&k!==""&&B.jsx(iE,M({htmlFor:ne,id:Q},R,{children:k})),q?B.jsx(bC,M({"aria-describedby":ie,id:ne,labelId:Q,value:z,input:qe},W,{children:l})):qe,C&&B.jsx(U8,M({id:ie},y,{children:C}))]}))}),LC=PC;var Md={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,o){o(t)})(cn,function(n){var o="1.9.4";function a(i){var s,u,f,h;for(u=1,f=arguments.length;u<f;u++){h=arguments[u];for(s in h)i[s]=h[s]}return i}var r=Object.create||function(){function i(){}return function(s){return i.prototype=s,new i}}();function l(i,s){var u=Array.prototype.slice;if(i.bind)return i.bind.apply(i,u.call(arguments,1));var f=u.call(arguments,2);return function(){return i.apply(s,f.length?f.concat(u.call(arguments)):arguments)}}var c=0;function d(i){return"_leaflet_id"in i||(i._leaflet_id=++c),i._leaflet_id}function p(i,s,u){var f,h,v,P;return P=function(){f=!1,h&&(v.apply(u,h),h=!1)},v=function(){f?h=arguments:(i.apply(u,arguments),setTimeout(P,s),f=!0)},v}function g(i,s,u){var f=s[1],h=s[0],v=f-h;return i===f&&u?i:((i-h)%v+v)%v+h}function m(){return!1}function y(i,s){if(s===!1)return i;var u=Math.pow(10,s===void 0?6:s);return Math.round(i*u)/u}function _(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function C(i){return _(i).split(/\s+/)}function E(i,s){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?r(i.options):{});for(var u in s)i.options[u]=s[u];return i.options}function R(i,s,u){var f=[];for(var h in i)f.push(encodeURIComponent(u?h.toUpperCase():h)+"="+encodeURIComponent(i[h]));return(!s||s.indexOf("?")===-1?"?":"&")+f.join("&")}var x=/\{ *([\w_ -]+) *\}/g;function b(i,s){return i.replace(x,function(u,f){var h=s[f];if(h===void 0)throw new Error("No value provided for variable "+u);return typeof h=="function"&&(h=h(s)),h})}var w=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function k(i,s){for(var u=0;u<i.length;u++)if(i[u]===s)return u;return-1}var T="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function I(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var O=0;function N(i){var s=+new Date,u=Math.max(0,16-(s-O));return O=s+u,window.setTimeout(i,u)}var G=window.requestAnimationFrame||I("RequestAnimationFrame")||N,$=window.cancelAnimationFrame||I("CancelAnimationFrame")||I("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function Z(i,s,u){if(u&&G===N)i.call(s);else return G.call(window,l(i,s))}function ee(i){i&&$.call(window,i)}var te={__proto__:null,extend:a,create:r,bind:l,get lastId(){return c},stamp:d,throttle:p,wrapNum:g,falseFn:m,formatNum:y,trim:_,splitWords:C,setOptions:E,getParamString:R,template:b,isArray:w,indexOf:k,emptyImageUrl:T,requestFn:G,cancelFn:$,requestAnimFrame:Z,cancelAnimFrame:ee};function H(){}H.extend=function(i){var s=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=s.__super__=this.prototype,f=r(u);f.constructor=s,s.prototype=f;for(var h in this)Object.prototype.hasOwnProperty.call(this,h)&&h!=="prototype"&&h!=="__super__"&&(s[h]=this[h]);return i.statics&&a(s,i.statics),i.includes&&(q(i.includes),a.apply(null,[f].concat(i.includes))),a(f,i),delete f.statics,delete f.includes,f.options&&(f.options=u.options?r(u.options):{},a(f.options,i.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,P=f._initHooks.length;v<P;v++)f._initHooks[v].call(this)}},s},H.include=function(i){var s=this.prototype.options;return a(this.prototype,i),i.options&&(this.prototype.options=s,this.mergeOptions(i.options)),this},H.mergeOptions=function(i){return a(this.prototype.options,i),this},H.addInitHook=function(i){var s=Array.prototype.slice.call(arguments,1),u=typeof i=="function"?i:function(){this[i].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function q(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=w(i)?i:[i];for(var s=0;s<i.length;s++)i[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var W={on:function(i,s,u){if(typeof i=="object")for(var f in i)this._on(f,i[f],s);else{i=C(i);for(var h=0,v=i.length;h<v;h++)this._on(i[h],s,u)}return this},off:function(i,s,u){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var f in i)this._off(f,i[f],s);else{i=C(i);for(var h=arguments.length===1,v=0,P=i.length;v<P;v++)h?this._off(i[v]):this._off(i[v],s,u)}return this},_on:function(i,s,u,f){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(i,s,u)===!1){u===this&&(u=void 0);var h={fn:s,ctx:u};f&&(h.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(h)}},_off:function(i,s,u){var f,h,v;if(this._events&&(f=this._events[i],!!f)){if(arguments.length===1){if(this._firingCount)for(h=0,v=f.length;h<v;h++)f[h].fn=m;delete this._events[i];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var P=this._listens(i,s,u);if(P!==!1){var A=f[P];this._firingCount&&(A.fn=m,this._events[i]=f=f.slice()),f.splice(P,1)}}},fire:function(i,s,u){if(!this.listens(i,u))return this;var f=a({},s,{type:i,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var h=this._events[i];if(h){this._firingCount=this._firingCount+1||1;for(var v=0,P=h.length;v<P;v++){var A=h[v],U=A.fn;A.once&&this.off(i,U,A.ctx),U.call(A.ctx||this,f)}this._firingCount--}}return u&&this._propagateEvent(f),this},listens:function(i,s,u,f){typeof i!="string"&&console.warn('"string" type argument expected');var h=s;typeof s!="function"&&(f=!!s,h=void 0,u=void 0);var v=this._events&&this._events[i];if(v&&v.length&&this._listens(i,h,u)!==!1)return!0;if(f){for(var P in this._eventParents)if(this._eventParents[P].listens(i,s,u,f))return!0}return!1},_listens:function(i,s,u){if(!this._events)return!1;var f=this._events[i]||[];if(!s)return!!f.length;u===this&&(u=void 0);for(var h=0,v=f.length;h<v;h++)if(f[h].fn===s&&f[h].ctx===u)return h;return!1},once:function(i,s,u){if(typeof i=="object")for(var f in i)this._on(f,i[f],s,!0);else{i=C(i);for(var h=0,v=i.length;h<v;h++)this._on(i[h],s,u,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[d(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[d(i)],this},_propagateEvent:function(i){for(var s in this._eventParents)this._eventParents[s].fire(i.type,a({layer:i.target,propagatedFrom:i.target},i),!0)}};W.addEventListener=W.on,W.removeEventListener=W.clearAllEventListeners=W.off,W.addOneTimeEventListener=W.once,W.fireEvent=W.fire,W.hasEventListeners=W.listens;var K=H.extend(W);function z(i,s,u){this.x=u?Math.round(i):i,this.y=u?Math.round(s):s}var V=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};z.prototype={clone:function(){return new z(this.x,this.y)},add:function(i){return this.clone()._add(F(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(F(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new z(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new z(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=V(this.x),this.y=V(this.y),this},distanceTo:function(i){i=F(i);var s=i.x-this.x,u=i.y-this.y;return Math.sqrt(s*s+u*u)},equals:function(i){return i=F(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=F(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+y(this.x)+", "+y(this.y)+")"}};function F(i,s,u){return i instanceof z?i:w(i)?new z(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new z(i.x,i.y):new z(i,s,u)}function J(i,s){if(i)for(var u=s?[i,s]:i,f=0,h=u.length;f<h;f++)this.extend(u[f])}J.prototype={extend:function(i){var s,u;if(!i)return this;if(i instanceof z||typeof i[0]=="number"||"x"in i)s=u=F(i);else if(i=se(i),s=i.min,u=i.max,!s||!u)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=u.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(i){return F((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return F(this.min.x,this.max.y)},getTopRight:function(){return F(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var s,u;return typeof i[0]=="number"||i instanceof z?i=F(i):i=se(i),i instanceof J?(s=i.min,u=i.max):s=u=i,s.x>=this.min.x&&u.x<=this.max.x&&s.y>=this.min.y&&u.y<=this.max.y},intersects:function(i){i=se(i);var s=this.min,u=this.max,f=i.min,h=i.max,v=h.x>=s.x&&f.x<=u.x,P=h.y>=s.y&&f.y<=u.y;return v&&P},overlaps:function(i){i=se(i);var s=this.min,u=this.max,f=i.min,h=i.max,v=h.x>s.x&&f.x<u.x,P=h.y>s.y&&f.y<u.y;return v&&P},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var s=this.min,u=this.max,f=Math.abs(s.x-u.x)*i,h=Math.abs(s.y-u.y)*i;return se(F(s.x-f,s.y-h),F(u.x+f,u.y+h))},equals:function(i){return i?(i=se(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function se(i,s){return!i||i instanceof J?i:new J(i,s)}function pe(i,s){if(i)for(var u=s?[i,s]:i,f=0,h=u.length;f<h;f++)this.extend(u[f])}pe.prototype={extend:function(i){var s=this._southWest,u=this._northEast,f,h;if(i instanceof ie)f=i,h=i;else if(i instanceof pe){if(f=i._southWest,h=i._northEast,!f||!h)return this}else return i?this.extend(Q(i)||ne(i)):this;return!s&&!u?(this._southWest=new ie(f.lat,f.lng),this._northEast=new ie(h.lat,h.lng)):(s.lat=Math.min(f.lat,s.lat),s.lng=Math.min(f.lng,s.lng),u.lat=Math.max(h.lat,u.lat),u.lng=Math.max(h.lng,u.lng)),this},pad:function(i){var s=this._southWest,u=this._northEast,f=Math.abs(s.lat-u.lat)*i,h=Math.abs(s.lng-u.lng)*i;return new pe(new ie(s.lat-f,s.lng-h),new ie(u.lat+f,u.lng+h))},getCenter:function(){return new ie((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ie(this.getNorth(),this.getWest())},getSouthEast:function(){return new ie(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof ie||"lat"in i?i=Q(i):i=ne(i);var s=this._southWest,u=this._northEast,f,h;return i instanceof pe?(f=i.getSouthWest(),h=i.getNorthEast()):f=h=i,f.lat>=s.lat&&h.lat<=u.lat&&f.lng>=s.lng&&h.lng<=u.lng},intersects:function(i){i=ne(i);var s=this._southWest,u=this._northEast,f=i.getSouthWest(),h=i.getNorthEast(),v=h.lat>=s.lat&&f.lat<=u.lat,P=h.lng>=s.lng&&f.lng<=u.lng;return v&&P},overlaps:function(i){i=ne(i);var s=this._southWest,u=this._northEast,f=i.getSouthWest(),h=i.getNorthEast(),v=h.lat>s.lat&&f.lat<u.lat,P=h.lng>s.lng&&f.lng<u.lng;return v&&P},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,s){return i?(i=ne(i),this._southWest.equals(i.getSouthWest(),s)&&this._northEast.equals(i.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ne(i,s){return i instanceof pe?i:new pe(i,s)}function ie(i,s,u){if(isNaN(i)||isNaN(s))throw new Error("Invalid LatLng object: ("+i+", "+s+")");this.lat=+i,this.lng=+s,u!==void 0&&(this.alt=+u)}ie.prototype={equals:function(i,s){if(!i)return!1;i=Q(i);var u=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return u<=(s===void 0?1e-9:s)},toString:function(i){return"LatLng("+y(this.lat,i)+", "+y(this.lng,i)+")"},distanceTo:function(i){return qe.distance(this,Q(i))},wrap:function(){return qe.wrapLatLng(this)},toBounds:function(i){var s=180*i/40075017,u=s/Math.cos(Math.PI/180*this.lat);return ne([this.lat-s,this.lng-u],[this.lat+s,this.lng+u])},clone:function(){return new ie(this.lat,this.lng,this.alt)}};function Q(i,s,u){return i instanceof ie?i:w(i)&&typeof i[0]!="object"?i.length===3?new ie(i[0],i[1],i[2]):i.length===2?new ie(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new ie(i.lat,"lng"in i?i.lng:i.lon,i.alt):s===void 0?null:new ie(i,s,u)}var Te={latLngToPoint:function(i,s){var u=this.projection.project(i),f=this.scale(s);return this.transformation._transform(u,f)},pointToLatLng:function(i,s){var u=this.scale(s),f=this.transformation.untransform(i,u);return this.projection.unproject(f)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var s=this.projection.bounds,u=this.scale(i),f=this.transformation.transform(s.min,u),h=this.transformation.transform(s.max,u);return new J(f,h)},infinite:!1,wrapLatLng:function(i){var s=this.wrapLng?g(i.lng,this.wrapLng,!0):i.lng,u=this.wrapLat?g(i.lat,this.wrapLat,!0):i.lat,f=i.alt;return new ie(u,s,f)},wrapLatLngBounds:function(i){var s=i.getCenter(),u=this.wrapLatLng(s),f=s.lat-u.lat,h=s.lng-u.lng;if(f===0&&h===0)return i;var v=i.getSouthWest(),P=i.getNorthEast(),A=new ie(v.lat-f,v.lng-h),U=new ie(P.lat-f,P.lng-h);return new pe(A,U)}},qe=a({},Te,{wrapLng:[-180,180],R:6371e3,distance:function(i,s){var u=Math.PI/180,f=i.lat*u,h=s.lat*u,v=Math.sin((s.lat-i.lat)*u/2),P=Math.sin((s.lng-i.lng)*u/2),A=v*v+Math.cos(f)*Math.cos(h)*P*P,U=2*Math.atan2(Math.sqrt(A),Math.sqrt(1-A));return this.R*U}}),Be=6378137,ot={R:Be,MAX_LATITUDE:85.0511287798,project:function(i){var s=Math.PI/180,u=this.MAX_LATITUDE,f=Math.max(Math.min(u,i.lat),-u),h=Math.sin(f*s);return new z(this.R*i.lng*s,this.R*Math.log((1+h)/(1-h))/2)},unproject:function(i){var s=180/Math.PI;return new ie((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*s,i.x*s/this.R)},bounds:function(){var i=Be*Math.PI;return new J([-i,-i],[i,i])}()};function ve(i,s,u,f){if(w(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=s,this._c=u,this._d=f}ve.prototype={transform:function(i,s){return this._transform(i.clone(),s)},_transform:function(i,s){return s=s||1,i.x=s*(this._a*i.x+this._b),i.y=s*(this._c*i.y+this._d),i},untransform:function(i,s){return s=s||1,new z((i.x/s-this._b)/this._a,(i.y/s-this._d)/this._c)}};function ce(i,s,u,f){return new ve(i,s,u,f)}var _e=a({},qe,{code:"EPSG:3857",projection:ot,transformation:function(){var i=.5/(Math.PI*ot.R);return ce(i,.5,-i,.5)}()}),Me=a({},_e,{code:"EPSG:900913"});function Lt(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Tt(i,s){var u="",f,h,v,P,A,U;for(f=0,v=i.length;f<v;f++){for(A=i[f],h=0,P=A.length;h<P;h++)U=A[h],u+=(h?"L":"M")+U.x+" "+U.y;u+=s?re.svg?"z":"x":""}return u||"M0 0"}var bt=document.documentElement.style,wt="ActiveXObject"in window,Ln=wt&&!document.addEventListener,rt="msLaunchUri"in navigator&&!("documentMode"in document),He=Mn("webkit"),Nt=Mn("android"),Ae=Mn("android 2")||Mn("android 3"),yn=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Wt=Nt&&Mn("Google")&&yn<537&&!("AudioNode"in window),Vt=!!window.opera,vn=!rt&&Mn("chrome"),Ce=Mn("gecko")&&!He&&!Vt&&!wt,ae=!vn&&Mn("safari"),oe=Mn("phantom"),Pe="OTransition"in bt,Ye=navigator.platform.indexOf("Win")===0,Tn=wt&&"transition"in bt,so="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Ae,up="MozPerspective"in bt,qy=!window.L_DISABLE_3D&&(Tn||so||up)&&!Pe&&!oe,cr=typeof orientation<"u"||Mn("mobile"),Yy=cr&&He,Qy=cr&&so,cp=!window.PointerEvent&&window.MSPointerEvent,dp=!!(window.PointerEvent||cp),fp="ontouchstart"in window||!!window.TouchEvent,Xy=!window.L_NO_TOUCH&&(fp||dp),Jy=cr&&Vt,ev=cr&&Ce,tv=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,nv=function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",m,s),window.removeEventListener("testPassiveEventSupport",m,s)}catch{}return i}(),iv=function(){return!!document.createElement("canvas").getContext}(),vu=!!(document.createElementNS&&Lt("svg").createSVGRect),ov=!!vu&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),rv=!vu&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var s=i.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),sv=navigator.platform.indexOf("Mac")===0,av=navigator.platform.indexOf("Linux")===0;function Mn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var re={ie:wt,ielt9:Ln,edge:rt,webkit:He,android:Nt,android23:Ae,androidStock:Wt,opera:Vt,chrome:vn,gecko:Ce,safari:ae,phantom:oe,opera12:Pe,win:Ye,ie3d:Tn,webkit3d:so,gecko3d:up,any3d:qy,mobile:cr,mobileWebkit:Yy,mobileWebkit3d:Qy,msPointer:cp,pointer:dp,touch:Xy,touchNative:fp,mobileOpera:Jy,mobileGecko:ev,retina:tv,passiveEvents:nv,canvas:iv,svg:vu,vml:rv,inlineSvg:ov,mac:sv,linux:av},pp=re.msPointer?"MSPointerDown":"pointerdown",hp=re.msPointer?"MSPointerMove":"pointermove",mp=re.msPointer?"MSPointerUp":"pointerup",gp=re.msPointer?"MSPointerCancel":"pointercancel",_u={touchstart:pp,touchmove:hp,touchend:mp,touchcancel:gp},yp={touchstart:pv,touchmove:zs,touchend:zs,touchcancel:zs},ao={},vp=!1;function lv(i,s,u){return s==="touchstart"&&fv(),yp[s]?(u=yp[s].bind(this,u),i.addEventListener(_u[s],u,!1),u):(console.warn("wrong event specified:",s),m)}function uv(i,s,u){if(!_u[s]){console.warn("wrong event specified:",s);return}i.removeEventListener(_u[s],u,!1)}function cv(i){ao[i.pointerId]=i}function dv(i){ao[i.pointerId]&&(ao[i.pointerId]=i)}function _p(i){delete ao[i.pointerId]}function fv(){vp||(document.addEventListener(pp,cv,!0),document.addEventListener(hp,dv,!0),document.addEventListener(mp,_p,!0),document.addEventListener(gp,_p,!0),vp=!0)}function zs(i,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var u in ao)s.touches.push(ao[u]);s.changedTouches=[s],i(s)}}function pv(i,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&gt(s),zs(i,s)}function hv(i){var s={},u,f;for(f in i)u=i[f],s[f]=u&&u.bind?u.bind(i):u;return i=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var mv=200;function gv(i,s){i.addEventListener("dblclick",s);var u=0,f;function h(v){if(v.detail!==1){f=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var P=Cp(v);if(!(P.some(function(U){return U instanceof HTMLLabelElement&&U.attributes.for})&&!P.some(function(U){return U instanceof HTMLInputElement||U instanceof HTMLSelectElement}))){var A=Date.now();A-u<=mv?(f++,f===2&&s(hv(v))):f=1,u=A}}}return i.addEventListener("click",h),{dblclick:s,simDblclick:h}}function yv(i,s){i.removeEventListener("dblclick",s.dblclick),i.removeEventListener("click",s.simDblclick)}var xu=Bs(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),dr=Bs(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),xp=dr==="webkitTransition"||dr==="OTransition"?dr+"End":"transitionend";function bp(i){return typeof i=="string"?document.getElementById(i):i}function fr(i,s){var u=i.style[s]||i.currentStyle&&i.currentStyle[s];if((!u||u==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(i,null);u=f?f[s]:null}return u==="auto"?null:u}function we(i,s,u){var f=document.createElement(i);return f.className=s||"",u&&u.appendChild(f),f}function Ze(i){var s=i.parentNode;s&&s.removeChild(i)}function Us(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function lo(i){var s=i.parentNode;s&&s.lastChild!==i&&s.appendChild(i)}function uo(i){var s=i.parentNode;s&&s.firstChild!==i&&s.insertBefore(i,s.firstChild)}function bu(i,s){if(i.classList!==void 0)return i.classList.contains(s);var u=Ns(i);return u.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(u)}function he(i,s){if(i.classList!==void 0)for(var u=C(s),f=0,h=u.length;f<h;f++)i.classList.add(u[f]);else if(!bu(i,s)){var v=Ns(i);wu(i,(v?v+" ":"")+s)}}function nt(i,s){i.classList!==void 0?i.classList.remove(s):wu(i,_((" "+Ns(i)+" ").replace(" "+s+" "," ")))}function wu(i,s){i.className.baseVal===void 0?i.className=s:i.className.baseVal=s}function Ns(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function on(i,s){"opacity"in i.style?i.style.opacity=s:"filter"in i.style&&vv(i,s)}function vv(i,s){var u=!1,f="DXImageTransform.Microsoft.Alpha";try{u=i.filters.item(f)}catch{if(s===1)return}s=Math.round(s*100),u?(u.Enabled=s!==100,u.Opacity=s):i.style.filter+=" progid:"+f+"(opacity="+s+")"}function Bs(i){for(var s=document.documentElement.style,u=0;u<i.length;u++)if(i[u]in s)return i[u];return!1}function Ii(i,s,u){var f=s||new z(0,0);i.style[xu]=(re.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(u?" scale("+u+")":"")}function st(i,s){i._leaflet_pos=s,re.any3d?Ii(i,s):(i.style.left=s.x+"px",i.style.top=s.y+"px")}function Ri(i){return i._leaflet_pos||new z(0,0)}var pr,hr,Eu;if("onselectstart"in document)pr=function(){fe(window,"selectstart",gt)},hr=function(){ze(window,"selectstart",gt)};else{var mr=Bs(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);pr=function(){if(mr){var i=document.documentElement.style;Eu=i[mr],i[mr]="none"}},hr=function(){mr&&(document.documentElement.style[mr]=Eu,Eu=void 0)}}function Cu(){fe(window,"dragstart",gt)}function Su(){ze(window,"dragstart",gt)}var Fs,ku;function Pu(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&($s(),Fs=i,ku=i.style.outlineStyle,i.style.outlineStyle="none",fe(window,"keydown",$s))}function $s(){Fs&&(Fs.style.outlineStyle=ku,Fs=void 0,ku=void 0,ze(window,"keydown",$s))}function wp(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function Lu(i){var s=i.getBoundingClientRect();return{x:s.width/i.offsetWidth||1,y:s.height/i.offsetHeight||1,boundingClientRect:s}}var _v={__proto__:null,TRANSFORM:xu,TRANSITION:dr,TRANSITION_END:xp,get:bp,getStyle:fr,create:we,remove:Ze,empty:Us,toFront:lo,toBack:uo,hasClass:bu,addClass:he,removeClass:nt,setClass:wu,getClass:Ns,setOpacity:on,testProp:Bs,setTransform:Ii,setPosition:st,getPosition:Ri,get disableTextSelection(){return pr},get enableTextSelection(){return hr},disableImageDrag:Cu,enableImageDrag:Su,preventOutline:Pu,restoreOutline:$s,getSizedParentNode:wp,getScale:Lu};function fe(i,s,u,f){if(s&&typeof s=="object")for(var h in s)Mu(i,h,s[h],u);else{s=C(s);for(var v=0,P=s.length;v<P;v++)Mu(i,s[v],u,f)}return this}var On="_leaflet_events";function ze(i,s,u,f){if(arguments.length===1)Ep(i),delete i[On];else if(s&&typeof s=="object")for(var h in s)Ou(i,h,s[h],u);else if(s=C(s),arguments.length===2)Ep(i,function(A){return k(s,A)!==-1});else for(var v=0,P=s.length;v<P;v++)Ou(i,s[v],u,f);return this}function Ep(i,s){for(var u in i[On]){var f=u.split(/\d/)[0];(!s||s(f))&&Ou(i,f,null,null,u)}}var Tu={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Mu(i,s,u,f){var h=s+d(u)+(f?"_"+d(f):"");if(i[On]&&i[On][h])return this;var v=function(A){return u.call(f||i,A||window.event)},P=v;!re.touchNative&&re.pointer&&s.indexOf("touch")===0?v=lv(i,s,v):re.touch&&s==="dblclick"?v=gv(i,v):"addEventListener"in i?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?i.addEventListener(Tu[s]||s,v,re.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(v=function(A){A=A||window.event,Ru(i,A)&&P(A)},i.addEventListener(Tu[s],v,!1)):i.addEventListener(s,P,!1):i.attachEvent("on"+s,v),i[On]=i[On]||{},i[On][h]=v}function Ou(i,s,u,f,h){h=h||s+d(u)+(f?"_"+d(f):"");var v=i[On]&&i[On][h];if(!v)return this;!re.touchNative&&re.pointer&&s.indexOf("touch")===0?uv(i,s,v):re.touch&&s==="dblclick"?yv(i,v):"removeEventListener"in i?i.removeEventListener(Tu[s]||s,v,!1):i.detachEvent("on"+s,v),i[On][h]=null}function Ai(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function Iu(i){return Mu(i,"wheel",Ai),this}function gr(i){return fe(i,"mousedown touchstart dblclick contextmenu",Ai),i._leaflet_disable_click=!0,this}function gt(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function zi(i){return gt(i),Ai(i),this}function Cp(i){if(i.composedPath)return i.composedPath();for(var s=[],u=i.target;u;)s.push(u),u=u.parentNode;return s}function Sp(i,s){if(!s)return new z(i.clientX,i.clientY);var u=Lu(s),f=u.boundingClientRect;return new z((i.clientX-f.left)/u.x-s.clientLeft,(i.clientY-f.top)/u.y-s.clientTop)}var xv=re.linux&&re.chrome?window.devicePixelRatio:re.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function kp(i){return re.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/xv:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function Ru(i,s){var u=s.relatedTarget;if(!u)return!0;try{for(;u&&u!==i;)u=u.parentNode}catch{return!1}return u!==i}var bv={__proto__:null,on:fe,off:ze,stopPropagation:Ai,disableScrollPropagation:Iu,disableClickPropagation:gr,preventDefault:gt,stop:zi,getPropagationPath:Cp,getMousePosition:Sp,getWheelDelta:kp,isExternalTarget:Ru,addListener:fe,removeListener:ze},Pp=K.extend({run:function(i,s,u,f){this.stop(),this._el=i,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=Ri(i),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=Z(this._animate,this),this._step()},_step:function(i){var s=+new Date-this._startTime,u=this._duration*1e3;s<u?this._runFrame(this._easeOut(s/u),i):(this._runFrame(1),this._complete())},_runFrame:function(i,s){var u=this._startPos.add(this._offset.multiplyBy(i));s&&u._round(),st(this._el,u),this.fire("step")},_complete:function(){ee(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),xe=K.extend({options:{crs:_e,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,s){s=E(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(Q(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=dr&&re.any3d&&!re.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),fe(this._proxy,xp,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,s,u){if(s=s===void 0?this._zoom:this._limitZoom(s),i=this._limitCenter(Q(i),s,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=a({animate:u.animate},u.zoom),u.pan=a({animate:u.animate,duration:u.duration},u.pan));var f=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,s,u.zoom):this._tryAnimatedPan(i,u.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(i,s,u.pan&&u.pan.noMoveStart),this},setZoom:function(i,s){return this._loaded?this.setView(this.getCenter(),i,{zoom:s}):(this._zoom=i,this)},zoomIn:function(i,s){return i=i||(re.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,s)},zoomOut:function(i,s){return i=i||(re.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,s)},setZoomAround:function(i,s,u){var f=this.getZoomScale(s),h=this.getSize().divideBy(2),v=i instanceof z?i:this.latLngToContainerPoint(i),P=v.subtract(h).multiplyBy(1-1/f),A=this.containerPointToLatLng(h.add(P));return this.setView(A,s,{zoom:u})},_getBoundsCenterZoom:function(i,s){s=s||{},i=i.getBounds?i.getBounds():ne(i);var u=F(s.paddingTopLeft||s.padding||[0,0]),f=F(s.paddingBottomRight||s.padding||[0,0]),h=this.getBoundsZoom(i,!1,u.add(f));if(h=typeof s.maxZoom=="number"?Math.min(s.maxZoom,h):h,h===1/0)return{center:i.getCenter(),zoom:h};var v=f.subtract(u).divideBy(2),P=this.project(i.getSouthWest(),h),A=this.project(i.getNorthEast(),h),U=this.unproject(P.add(A).divideBy(2).add(v),h);return{center:U,zoom:h}},fitBounds:function(i,s){if(i=ne(i),!i.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(i,s);return this.setView(u.center,u.zoom,s)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,s){return this.setView(i,this._zoom,{pan:s})},panBy:function(i,s){if(i=F(i).round(),s=s||{},!i.x&&!i.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Pp,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){he(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,u,s.duration||.25,s.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,s,u){if(u=u||{},u.animate===!1||!re.any3d)return this.setView(i,s,u);this._stop();var f=this.project(this.getCenter()),h=this.project(i),v=this.getSize(),P=this._zoom;i=Q(i),s=s===void 0?P:s;var A=Math.max(v.x,v.y),U=A*this.getZoomScale(P,s),D=h.distanceTo(f)||1,Y=1.42,le=Y*Y;function me(at){var Xs=at?-1:1,u_=at?U:A,c_=U*U-A*A+Xs*le*le*D*D,d_=2*u_*le*D,Zu=c_/d_,ah=Math.sqrt(Zu*Zu+1)-Zu,f_=ah<1e-9?-18:Math.log(ah);return f_}function Mt(at){return(Math.exp(at)-Math.exp(-at))/2}function ft(at){return(Math.exp(at)+Math.exp(-at))/2}function sn(at){return Mt(at)/ft(at)}var Bt=me(0);function go(at){return A*(ft(Bt)/ft(Bt+Y*at))}function r_(at){return A*(ft(Bt)*sn(Bt+Y*at)-Mt(Bt))/le}function s_(at){return 1-Math.pow(1-at,1.5)}var a_=Date.now(),rh=(me(1)-Bt)/Y,l_=u.duration?1e3*u.duration:1e3*rh*.8;function sh(){var at=(Date.now()-a_)/l_,Xs=s_(at)*rh;at<=1?(this._flyToFrame=Z(sh,this),this._move(this.unproject(f.add(h.subtract(f).multiplyBy(r_(Xs)/D)),P),this.getScaleZoom(A/go(Xs),P),{flyTo:!0})):this._move(i,s)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),sh.call(this),this},flyToBounds:function(i,s){var u=this._getBoundsCenterZoom(i,s);return this.flyTo(u.center,u.zoom,s)},setMaxBounds:function(i){return i=ne(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var s=this.options.minZoom;return this.options.minZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var s=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&s!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,s){this._enforcingBounds=!0;var u=this.getCenter(),f=this._limitCenter(u,this._zoom,ne(i));return u.equals(f)||this.panTo(f,s),this._enforcingBounds=!1,this},panInside:function(i,s){s=s||{};var u=F(s.paddingTopLeft||s.padding||[0,0]),f=F(s.paddingBottomRight||s.padding||[0,0]),h=this.project(this.getCenter()),v=this.project(i),P=this.getPixelBounds(),A=se([P.min.add(u),P.max.subtract(f)]),U=A.getSize();if(!A.contains(v)){this._enforcingBounds=!0;var D=v.subtract(A.getCenter()),Y=A.extend(v).getSize().subtract(U);h.x+=D.x<0?-Y.x:Y.x,h.y+=D.y<0?-Y.y:Y.y,this.panTo(this.unproject(h),s),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=a({animate:!1,pan:!0},i===!0?{animate:!0}:i);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),f=s.divideBy(2).round(),h=u.divideBy(2).round(),v=f.subtract(h);return!v.x&&!v.y?this:(i.animate&&i.pan?this.panBy(v):(i.pan&&this._rawPanBy(v),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=a({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,u,i):navigator.geolocation.getCurrentPosition(s,u,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var s=i.code,u=i.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var s=i.coords.latitude,u=i.coords.longitude,f=new ie(s,u),h=f.toBounds(i.coords.accuracy*2),v=this._locateOptions;if(v.setView){var P=this.getBoundsZoom(h);this.setView(f,v.maxZoom?Math.min(P,v.maxZoom):P)}var A={latlng:f,bounds:h,timestamp:i.timestamp};for(var U in i.coords)typeof i.coords[U]=="number"&&(A[U]=i.coords[U]);this.fire("locationfound",A)}},addHandler:function(i,s){if(!s)return this;var u=this[i]=new s(this);return this._handlers.push(u),this.options[i]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ze(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(ee(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)Ze(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,s){var u="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),f=we("div",u,s||this._mapPane);return i&&(this._panes[i]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),s=this.unproject(i.getBottomLeft()),u=this.unproject(i.getTopRight());return new pe(s,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,s,u){i=ne(i),u=F(u||[0,0]);var f=this.getZoom()||0,h=this.getMinZoom(),v=this.getMaxZoom(),P=i.getNorthWest(),A=i.getSouthEast(),U=this.getSize().subtract(u),D=se(this.project(A,f),this.project(P,f)).getSize(),Y=re.any3d?this.options.zoomSnap:1,le=U.x/D.x,me=U.y/D.y,Mt=s?Math.max(le,me):Math.min(le,me);return f=this.getScaleZoom(Mt,f),Y&&(f=Math.round(f/(Y/100))*(Y/100),f=s?Math.ceil(f/Y)*Y:Math.floor(f/Y)*Y),Math.max(h,Math.min(v,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new z(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,s){var u=this._getTopLeftPoint(i,s);return new J(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,s){var u=this.options.crs;return s=s===void 0?this._zoom:s,u.scale(i)/u.scale(s)},getScaleZoom:function(i,s){var u=this.options.crs;s=s===void 0?this._zoom:s;var f=u.zoom(i*u.scale(s));return isNaN(f)?1/0:f},project:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(Q(i),s)},unproject:function(i,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(F(i),s)},layerPointToLatLng:function(i){var s=F(i).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(i){var s=this.project(Q(i))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(Q(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(ne(i))},distance:function(i,s){return this.options.crs.distance(Q(i),Q(s))},containerPointToLayerPoint:function(i){return F(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return F(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var s=this.containerPointToLayerPoint(F(i));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(Q(i)))},mouseEventToContainerPoint:function(i){return Sp(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var s=this._container=bp(i);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");fe(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&re.any3d,he(i,"leaflet-container"+(re.touch?" leaflet-touch":"")+(re.retina?" leaflet-retina":"")+(re.ielt9?" leaflet-oldie":"")+(re.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=fr(i,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),st(this._mapPane,new z(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(he(i.markerPane,"leaflet-zoom-hide"),he(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,s,u){st(this._mapPane,new z(0,0));var f=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var h=this._zoom!==s;this._moveStart(h,u)._move(i,s)._moveEnd(h),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(i,s){return i&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(i,s,u,f){s===void 0&&(s=this._zoom);var h=this._zoom!==s;return this._zoom=s,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),f?u&&u.pinch&&this.fire("zoom",u):((h||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return ee(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){st(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[d(this._container)]=this;var s=i?ze:fe;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),re.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){ee(this._resizeRequest),this._resizeRequest=Z(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,s){for(var u=[],f,h=s==="mouseout"||s==="mouseover",v=i.target||i.srcElement,P=!1;v;){if(f=this._targets[d(v)],f&&(s==="click"||s==="preclick")&&this._draggableMoved(f)){P=!0;break}if(f&&f.listens(s,!0)&&(h&&!Ru(v,i)||(u.push(f),h))||v===this._container)break;v=v.parentNode}return!u.length&&!P&&!h&&this.listens(s,!0)&&(u=[this]),u},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var s=i.target||i.srcElement;if(!(!this._loaded||s._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(s))){var u=i.type;u==="mousedown"&&Pu(s),this._fireDOMEvent(i,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,s,u){if(i.type==="click"){var f=a({},i);f.type="preclick",this._fireDOMEvent(f,f.type,u)}var h=this._findEventTargets(i,s);if(u){for(var v=[],P=0;P<u.length;P++)u[P].listens(s,!0)&&v.push(u[P]);h=v.concat(h)}if(h.length){s==="contextmenu"&&gt(i);var A=h[0],U={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var D=A.getLatLng&&(!A._radius||A._radius<=10);U.containerPoint=D?this.latLngToContainerPoint(A.getLatLng()):this.mouseEventToContainerPoint(i),U.layerPoint=this.containerPointToLayerPoint(U.containerPoint),U.latlng=D?A.getLatLng():this.layerPointToLatLng(U.layerPoint)}for(P=0;P<h.length;P++)if(h[P].fire(s,U,!0),U.originalEvent._stopped||h[P].options.bubblingMouseEvents===!1&&k(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,s=this._handlers.length;i<s;i++)this._handlers[i].disable()},whenReady:function(i,s){return this._loaded?i.call(s||this,{target:this}):this.on("load",i,s),this},_getMapPanePos:function(){return Ri(this._mapPane)||new z(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,s){var u=i&&s!==void 0?this._getNewPixelOrigin(i,s):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,s){var u=this.getSize()._divideBy(2);return this.project(i,s)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,s,u){var f=this._getNewPixelOrigin(u,s);return this.project(i,s)._subtract(f)},_latLngBoundsToNewLayerBounds:function(i,s,u){var f=this._getNewPixelOrigin(u,s);return se([this.project(i.getSouthWest(),s)._subtract(f),this.project(i.getNorthWest(),s)._subtract(f),this.project(i.getSouthEast(),s)._subtract(f),this.project(i.getNorthEast(),s)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,s,u){if(!u)return i;var f=this.project(i,s),h=this.getSize().divideBy(2),v=new J(f.subtract(h),f.add(h)),P=this._getBoundsOffset(v,u,s);return Math.abs(P.x)<=1&&Math.abs(P.y)<=1?i:this.unproject(f.add(P),s)},_limitOffset:function(i,s){if(!s)return i;var u=this.getPixelBounds(),f=new J(u.min.add(i),u.max.add(i));return i.add(this._getBoundsOffset(f,s))},_getBoundsOffset:function(i,s,u){var f=se(this.project(s.getNorthEast(),u),this.project(s.getSouthWest(),u)),h=f.min.subtract(i.min),v=f.max.subtract(i.max),P=this._rebound(h.x,-v.x),A=this._rebound(h.y,-v.y);return new z(P,A)},_rebound:function(i,s){return i+s>0?Math.round(i-s)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(s))},_limitZoom:function(i){var s=this.getMinZoom(),u=this.getMaxZoom(),f=re.any3d?this.options.zoomSnap:1;return f&&(i=Math.round(i/f)*f),Math.max(s,Math.min(u,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){nt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,s){var u=this._getCenterOffset(i)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,s),!0)},_createAnimProxy:function(){var i=this._proxy=we("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(s){var u=xu,f=this._proxy.style[u];Ii(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),f===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ze(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),s=this.getZoom();Ii(this._proxy,this.project(i,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,s,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(s),h=this._getCenterOffset(i)._divideBy(1-1/f);return u.animate!==!0&&!this.getSize().contains(h)?!1:(Z(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(i,s,!0)},this),!0)},_animateZoom:function(i,s,u,f){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=s,he(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:s,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&nt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function wv(i,s){return new xe(i,s)}var _n=H.extend({options:{position:"topright"},initialize:function(i){E(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var s=this._map;return s&&s.removeControl(this),this.options.position=i,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var s=this._container=this.onAdd(i),u=this.getPosition(),f=i._controlCorners[u];return he(s,"leaflet-control"),u.indexOf("bottom")!==-1?f.insertBefore(s,f.firstChild):f.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ze(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),yr=function(i){return new _n(i)};xe.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},s="leaflet-",u=this._controlContainer=we("div",s+"control-container",this._container);function f(h,v){var P=s+h+" "+s+v;i[h+v]=we("div",P,u)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)Ze(this._controlCorners[i]);Ze(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Lp=_n.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,s,u,f){return u<f?-1:f<u?1:0}},initialize:function(i,s,u){E(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in i)this._addLayer(i[f],f);for(f in s)this._addLayer(s[f],f,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return _n.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,s){return this._addLayer(i,s),this._map?this._update():this},addOverlay:function(i,s){return this._addLayer(i,s,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(i));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){he(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(he(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):nt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return nt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",s=this._container=we("div",i),u=this.options.collapsed;s.setAttribute("aria-haspopup",!0),gr(s),Iu(s);var f=this._section=we("section",i+"-list");u&&(this._map.on("click",this.collapse,this),fe(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var h=this._layersLink=we("a",i+"-toggle",s);h.href="#",h.title="Layers",h.setAttribute("role","button"),fe(h,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){gt(v),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=we("div",i+"-base",f),this._separator=we("div",i+"-separator",f),this._overlaysList=we("div",i+"-overlays",f),s.appendChild(f)},_getLayer:function(i){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===i)return this._layers[s]},_addLayer:function(i,s,u){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:s,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(f,h){return this.options.sortFunction(f.layer,h.layer,f.name,h.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Us(this._baseLayersList),Us(this._overlaysList),this._layerControlInputs=[];var i,s,u,f,h=0;for(u=0;u<this._layers.length;u++)f=this._layers[u],this._addItem(f),s=s||f.overlay,i=i||!f.overlay,h+=f.overlay?0:1;return this.options.hideSingleBase&&(i=i&&h>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=s&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var s=this._getLayer(d(i.target)),u=s.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;u&&this._map.fire(u,s)},_createRadioElement:function(i,s){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(s?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=u,f.firstChild},_addItem:function(i){var s=document.createElement("label"),u=this._map.hasLayer(i.layer),f;i.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=u):f=this._createRadioElement("leaflet-base-layers_"+d(this),u),this._layerControlInputs.push(f),f.layerId=d(i.layer),fe(f,"click",this._onInputClick,this);var h=document.createElement("span");h.innerHTML=" "+i.name;var v=document.createElement("span");s.appendChild(v),v.appendChild(f),v.appendChild(h);var P=i.overlay?this._overlaysList:this._baseLayersList;return P.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,s,u,f=[],h=[];this._handlingClick=!0;for(var v=i.length-1;v>=0;v--)s=i[v],u=this._getLayer(s.layerId).layer,s.checked?f.push(u):s.checked||h.push(u);for(v=0;v<h.length;v++)this._map.hasLayer(h[v])&&this._map.removeLayer(h[v]);for(v=0;v<f.length;v++)this._map.hasLayer(f[v])||this._map.addLayer(f[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,s,u,f=this._map.getZoom(),h=i.length-1;h>=0;h--)s=i[h],u=this._getLayer(s.layerId).layer,s.disabled=u.options.minZoom!==void 0&&f<u.options.minZoom||u.options.maxZoom!==void 0&&f>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,fe(i,"click",gt),this.expand();var s=this;setTimeout(function(){ze(i,"click",gt),s._preventClick=!1})}}),Ev=function(i,s,u){return new Lp(i,s,u)},Au=_n.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var s="leaflet-control-zoom",u=we("div",s+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,s+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,s+"-out",u,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,s,u,f,h){var v=we("a",u,f);return v.innerHTML=i,v.href="#",v.title=s,v.setAttribute("role","button"),v.setAttribute("aria-label",s),gr(v),fe(v,"click",zi),fe(v,"click",h,this),fe(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var i=this._map,s="leaflet-disabled";nt(this._zoomInButton,s),nt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(he(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(he(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});xe.mergeOptions({zoomControl:!0}),xe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Au,this.addControl(this.zoomControl))});var Cv=function(i){return new Au(i)},Tp=_n.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var s="leaflet-control-scale",u=we("div",s),f=this.options;return this._addScales(f,s+"-line",u),i.on(f.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),u},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,s,u){i.metric&&(this._mScale=we("div",s,u)),i.imperial&&(this._iScale=we("div",s,u))},_update:function(){var i=this._map,s=i.getSize().y/2,u=i.distance(i.containerPointToLatLng([0,s]),i.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(u)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var s=this._getRoundNum(i),u=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,u,s/i)},_updateImperial:function(i){var s=i*3.2808399,u,f,h;s>5280?(u=s/5280,f=this._getRoundNum(u),this._updateScale(this._iScale,f+" mi",f/u)):(h=this._getRoundNum(s),this._updateScale(this._iScale,h+" ft",h/s))},_updateScale:function(i,s,u){i.style.width=Math.round(this.options.maxWidth*u)+"px",i.innerHTML=s},_getRoundNum:function(i){var s=Math.pow(10,(Math.floor(i)+"").length-1),u=i/s;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,s*u}}),Sv=function(i){return new Tp(i)},kv='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',zu=_n.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(re.inlineSvg?kv+" ":"")+"Leaflet</a>"},initialize:function(i){E(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=we("div","leaflet-control-attribution"),gr(this._container);for(var s in i._layers)i._layers[s].getAttribution&&this.addAttribution(i._layers[s].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var s in this._attributions)this._attributions[s]&&i.push(s);var u=[];this.options.prefix&&u.push(this.options.prefix),i.length&&u.push(i.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});xe.mergeOptions({attributionControl:!0}),xe.addInitHook(function(){this.options.attributionControl&&new zu().addTo(this)});var Pv=function(i){return new zu(i)};_n.Layers=Lp,_n.Zoom=Au,_n.Scale=Tp,_n.Attribution=zu,yr.layers=Ev,yr.zoom=Cv,yr.scale=Sv,yr.attribution=Pv;var In=H.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});In.addTo=function(i,s){return i.addHandler(s,this),this};var Lv={Events:W},Mp=re.touch?"touchstart mousedown":"mousedown",li=K.extend({options:{clickTolerance:3},initialize:function(i,s,u,f){E(this,f),this._element=i,this._dragStartTarget=s||i,this._preventOutline=u},enable:function(){this._enabled||(fe(this._dragStartTarget,Mp,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(li._dragging===this&&this.finishDrag(!0),ze(this._dragStartTarget,Mp,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!bu(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){li._dragging===this&&this.finishDrag();return}if(!(li._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(li._dragging=this,this._preventOutline&&Pu(this._element),Cu(),pr(),!this._moving)){this.fire("down");var s=i.touches?i.touches[0]:i,u=wp(this._element);this._startPoint=new z(s.clientX,s.clientY),this._startPos=Ri(this._element),this._parentScale=Lu(u);var f=i.type==="mousedown";fe(document,f?"mousemove":"touchmove",this._onMove,this),fe(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var s=i.touches&&i.touches.length===1?i.touches[0]:i,u=new z(s.clientX,s.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,gt(i),this._moved||(this.fire("dragstart"),this._moved=!0,he(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),he(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),st(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){nt(document.body,"leaflet-dragging"),this._lastTarget&&(nt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ze(document,"mousemove touchmove",this._onMove,this),ze(document,"mouseup touchend touchcancel",this._onUp,this),Su(),hr();var s=this._moved&&this._moving;this._moving=!1,li._dragging=!1,s&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function Op(i,s,u){var f,h=[1,4,2,8],v,P,A,U,D,Y,le,me;for(v=0,Y=i.length;v<Y;v++)i[v]._code=Ui(i[v],s);for(A=0;A<4;A++){for(le=h[A],f=[],v=0,Y=i.length,P=Y-1;v<Y;P=v++)U=i[v],D=i[P],U._code&le?D._code&le||(me=Ds(D,U,le,s,u),me._code=Ui(me,s),f.push(me)):(D._code&le&&(me=Ds(D,U,le,s,u),me._code=Ui(me,s),f.push(me)),f.push(U));i=f}return i}function Ip(i,s){var u,f,h,v,P,A,U,D,Y;if(!i||i.length===0)throw new Error("latlngs not passed");rn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var le=Q([0,0]),me=ne(i),Mt=me.getNorthWest().distanceTo(me.getSouthWest())*me.getNorthEast().distanceTo(me.getNorthWest());Mt<1700&&(le=Uu(i));var ft=i.length,sn=[];for(u=0;u<ft;u++){var Bt=Q(i[u]);sn.push(s.project(Q([Bt.lat-le.lat,Bt.lng-le.lng])))}for(A=U=D=0,u=0,f=ft-1;u<ft;f=u++)h=sn[u],v=sn[f],P=h.y*v.x-v.y*h.x,U+=(h.x+v.x)*P,D+=(h.y+v.y)*P,A+=P*3;A===0?Y=sn[0]:Y=[U/A,D/A];var go=s.unproject(F(Y));return Q([go.lat+le.lat,go.lng+le.lng])}function Uu(i){for(var s=0,u=0,f=0,h=0;h<i.length;h++){var v=Q(i[h]);s+=v.lat,u+=v.lng,f++}return Q([s/f,u/f])}var Tv={__proto__:null,clipPolygon:Op,polygonCenter:Ip,centroid:Uu};function Rp(i,s){if(!s||!i.length)return i.slice();var u=s*s;return i=Iv(i,u),i=Ov(i,u),i}function Ap(i,s,u){return Math.sqrt(vr(i,s,u,!0))}function Mv(i,s,u){return vr(i,s,u)}function Ov(i,s){var u=i.length,f=typeof Uint8Array!=void 0+""?Uint8Array:Array,h=new f(u);h[0]=h[u-1]=1,Nu(i,h,s,0,u-1);var v,P=[];for(v=0;v<u;v++)h[v]&&P.push(i[v]);return P}function Nu(i,s,u,f,h){var v=0,P,A,U;for(A=f+1;A<=h-1;A++)U=vr(i[A],i[f],i[h],!0),U>v&&(P=A,v=U);v>u&&(s[P]=1,Nu(i,s,u,f,P),Nu(i,s,u,P,h))}function Iv(i,s){for(var u=[i[0]],f=1,h=0,v=i.length;f<v;f++)Rv(i[f],i[h])>s&&(u.push(i[f]),h=f);return h<v-1&&u.push(i[v-1]),u}var zp;function Up(i,s,u,f,h){var v=f?zp:Ui(i,u),P=Ui(s,u),A,U,D;for(zp=P;;){if(!(v|P))return[i,s];if(v&P)return!1;A=v||P,U=Ds(i,s,A,u,h),D=Ui(U,u),A===v?(i=U,v=D):(s=U,P=D)}}function Ds(i,s,u,f,h){var v=s.x-i.x,P=s.y-i.y,A=f.min,U=f.max,D,Y;return u&8?(D=i.x+v*(U.y-i.y)/P,Y=U.y):u&4?(D=i.x+v*(A.y-i.y)/P,Y=A.y):u&2?(D=U.x,Y=i.y+P*(U.x-i.x)/v):u&1&&(D=A.x,Y=i.y+P*(A.x-i.x)/v),new z(D,Y,h)}function Ui(i,s){var u=0;return i.x<s.min.x?u|=1:i.x>s.max.x&&(u|=2),i.y<s.min.y?u|=4:i.y>s.max.y&&(u|=8),u}function Rv(i,s){var u=s.x-i.x,f=s.y-i.y;return u*u+f*f}function vr(i,s,u,f){var h=s.x,v=s.y,P=u.x-h,A=u.y-v,U=P*P+A*A,D;return U>0&&(D=((i.x-h)*P+(i.y-v)*A)/U,D>1?(h=u.x,v=u.y):D>0&&(h+=P*D,v+=A*D)),P=i.x-h,A=i.y-v,f?P*P+A*A:new z(h,v)}function rn(i){return!w(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Np(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),rn(i)}function Bp(i,s){var u,f,h,v,P,A,U,D;if(!i||i.length===0)throw new Error("latlngs not passed");rn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Y=Q([0,0]),le=ne(i),me=le.getNorthWest().distanceTo(le.getSouthWest())*le.getNorthEast().distanceTo(le.getNorthWest());me<1700&&(Y=Uu(i));var Mt=i.length,ft=[];for(u=0;u<Mt;u++){var sn=Q(i[u]);ft.push(s.project(Q([sn.lat-Y.lat,sn.lng-Y.lng])))}for(u=0,f=0;u<Mt-1;u++)f+=ft[u].distanceTo(ft[u+1])/2;if(f===0)D=ft[0];else for(u=0,v=0;u<Mt-1;u++)if(P=ft[u],A=ft[u+1],h=P.distanceTo(A),v+=h,v>f){U=(v-f)/h,D=[A.x-U*(A.x-P.x),A.y-U*(A.y-P.y)];break}var Bt=s.unproject(F(D));return Q([Bt.lat+Y.lat,Bt.lng+Y.lng])}var Av={__proto__:null,simplify:Rp,pointToSegmentDistance:Ap,closestPointOnSegment:Mv,clipSegment:Up,_getEdgeIntersection:Ds,_getBitCode:Ui,_sqClosestPointOnSegment:vr,isFlat:rn,_flat:Np,polylineCenter:Bp},Bu={project:function(i){return new z(i.lng,i.lat)},unproject:function(i){return new ie(i.y,i.x)},bounds:new J([-180,-90],[180,90])},Fu={R:6378137,R_MINOR:6356752314245179e-9,bounds:new J([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var s=Math.PI/180,u=this.R,f=i.lat*s,h=this.R_MINOR/u,v=Math.sqrt(1-h*h),P=v*Math.sin(f),A=Math.tan(Math.PI/4-f/2)/Math.pow((1-P)/(1+P),v/2);return f=-u*Math.log(Math.max(A,1e-10)),new z(i.lng*s*u,f)},unproject:function(i){for(var s=180/Math.PI,u=this.R,f=this.R_MINOR/u,h=Math.sqrt(1-f*f),v=Math.exp(-i.y/u),P=Math.PI/2-2*Math.atan(v),A=0,U=.1,D;A<15&&Math.abs(U)>1e-7;A++)D=h*Math.sin(P),D=Math.pow((1-D)/(1+D),h/2),U=Math.PI/2-2*Math.atan(v*D)-P,P+=U;return new ie(P*s,i.x*s/u)}},zv={__proto__:null,LonLat:Bu,Mercator:Fu,SphericalMercator:ot},Uv=a({},qe,{code:"EPSG:3395",projection:Fu,transformation:function(){var i=.5/(Math.PI*Fu.R);return ce(i,.5,-i,.5)}()}),Fp=a({},qe,{code:"EPSG:4326",projection:Bu,transformation:ce(1/180,1,-1/180,.5)}),Nv=a({},Te,{projection:Bu,transformation:ce(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,s){var u=s.lng-i.lng,f=s.lat-i.lat;return Math.sqrt(u*u+f*f)},infinite:!0});Te.Earth=qe,Te.EPSG3395=Uv,Te.EPSG3857=_e,Te.EPSG900913=Me,Te.EPSG4326=Fp,Te.Simple=Nv;var xn=K.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[d(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[d(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var s=i.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var u=this.getEvents();s.on(u,this),this.once("remove",function(){s.off(u,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});xe.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(i);return this._layers[s]?this:(this._layers[s]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var s=d(i);return this._layers[s]?(this._loaded&&i.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return d(i)in this._layers},eachLayer:function(i,s){for(var u in this._layers)i.call(s,this._layers[u]);return this},_addLayers:function(i){i=i?w(i)?i:[i]:[];for(var s=0,u=i.length;s<u;s++)this.addLayer(i[s])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[d(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var s=d(i);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,s=-1/0,u=this._getZoomSpan();for(var f in this._zoomBoundLayers){var h=this._zoomBoundLayers[f].options;i=h.minZoom===void 0?i:Math.min(i,h.minZoom),s=h.maxZoom===void 0?s:Math.max(s,h.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=i===1/0?void 0:i,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var co=xn.extend({initialize:function(i,s){E(this,s),this._layers={};var u,f;if(i)for(u=0,f=i.length;u<f;u++)this.addLayer(i[u])},addLayer:function(i){var s=this.getLayerId(i);return this._layers[s]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var s=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(i){var s=typeof i=="number"?i:this.getLayerId(i);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var s=Array.prototype.slice.call(arguments,1),u,f;for(u in this._layers)f=this._layers[u],f[i]&&f[i].apply(f,s);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,s){for(var u in this._layers)i.call(s,this._layers[u]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return d(i)}}),Bv=function(i,s){return new co(i,s)},Vn=co.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),co.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),co.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new pe;for(var s in this._layers){var u=this._layers[s];i.extend(u.getBounds?u.getBounds():u.getLatLng())}return i}}),Fv=function(i,s){return new Vn(i,s)},fo=H.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){E(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,s){var u=this._getIconUrl(i);if(!u){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(u,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(f,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(i,s){var u=this.options,f=u[s+"Size"];typeof f=="number"&&(f=[f,f]);var h=F(f),v=F(s==="shadow"&&u.shadowAnchor||u.iconAnchor||h&&h.divideBy(2,!0));i.className="leaflet-marker-"+s+" "+(u.className||""),v&&(i.style.marginLeft=-v.x+"px",i.style.marginTop=-v.y+"px"),h&&(i.style.width=h.x+"px",i.style.height=h.y+"px")},_createImg:function(i,s){return s=s||document.createElement("img"),s.src=i,s},_getIconUrl:function(i){return re.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function $v(i){return new fo(i)}var _r=fo.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof _r.imagePath!="string"&&(_r.imagePath=this._detectIconPath()),(this.options.imagePath||_r.imagePath)+fo.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var s=function(u,f,h){var v=f.exec(u);return v&&v[h]};return i=s(i,/^url\((['"])?(.+)\1\)$/,2),i&&s(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=we("div","leaflet-default-icon-path",document.body),s=fr(i,"background-image")||fr(i,"backgroundImage");if(document.body.removeChild(i),s=this._stripUrl(s),s)return s;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),$p=In.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new li(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),he(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&nt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var s=this._marker,u=s._map,f=this._marker.options.autoPanSpeed,h=this._marker.options.autoPanPadding,v=Ri(s._icon),P=u.getPixelBounds(),A=u.getPixelOrigin(),U=se(P.min._subtract(A).add(h),P.max._subtract(A).subtract(h));if(!U.contains(v)){var D=F((Math.max(U.max.x,v.x)-U.max.x)/(P.max.x-U.max.x)-(Math.min(U.min.x,v.x)-U.min.x)/(P.min.x-U.min.x),(Math.max(U.max.y,v.y)-U.max.y)/(P.max.y-U.max.y)-(Math.min(U.min.y,v.y)-U.min.y)/(P.min.y-U.min.y)).multiplyBy(f);u.panBy(D,{animate:!1}),this._draggable._newPos._add(D),this._draggable._startPos._add(D),st(s._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=Z(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(ee(this._panRequest),this._panRequest=Z(this._adjustPan.bind(this,i)))},_onDrag:function(i){var s=this._marker,u=s._shadow,f=Ri(s._icon),h=s._map.layerPointToLatLng(f);u&&st(u,f),s._latlng=h,i.latlng=h,i.oldLatLng=this._oldLatLng,s.fire("move",i).fire("drag",i)},_onDragEnd:function(i){ee(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),js=xn.extend({options:{icon:new _r,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,s){E(this,s),this._latlng=Q(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var s=this._latlng;return this._latlng=Q(i),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=i.icon.createIcon(this._icon),f=!1;u!==this._icon&&(this._icon&&this._removeIcon(),f=!0,i.title&&(u.title=i.title),u.tagName==="IMG"&&(u.alt=i.alt||"")),he(u,s),i.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&fe(u,"focus",this._panOnFocus,this);var h=i.icon.createShadow(this._shadow),v=!1;h!==this._shadow&&(this._removeShadow(),v=!0),h&&(he(h,s),h.alt=""),this._shadow=h,i.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),h&&v&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ze(this._icon,"focus",this._panOnFocus,this),Ze(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ze(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&st(this._icon,i),this._shadow&&st(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(he(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),$p)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new $p(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&on(this._icon,i),this._shadow&&on(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var s=this.options.icon.options,u=s.iconSize?F(s.iconSize):F(0,0),f=s.iconAnchor?F(s.iconAnchor):F(0,0);i.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:u.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Dv(i,s){return new js(i,s)}var ui=xn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return E(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Hs=ui.extend({options:{fill:!0,radius:10},initialize:function(i,s){E(this,s),this._latlng=Q(i),this._radius=this.options.radius},setLatLng:function(i){var s=this._latlng;return this._latlng=Q(i),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var s=i&&i.radius||this._radius;return ui.prototype.setStyle.call(this,i),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,s=this._radiusY||i,u=this._clickTolerance(),f=[i+u,s+u];this._pxBounds=new J(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function jv(i,s){return new Hs(i,s)}var $u=Hs.extend({initialize:function(i,s,u){if(typeof s=="number"&&(s=a({},u,{radius:s})),E(this,s),this._latlng=Q(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new pe(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:ui.prototype.setStyle,_project:function(){var i=this._latlng.lng,s=this._latlng.lat,u=this._map,f=u.options.crs;if(f.distance===qe.distance){var h=Math.PI/180,v=this._mRadius/qe.R/h,P=u.project([s+v,i]),A=u.project([s-v,i]),U=P.add(A).divideBy(2),D=u.unproject(U).lat,Y=Math.acos((Math.cos(v*h)-Math.sin(s*h)*Math.sin(D*h))/(Math.cos(s*h)*Math.cos(D*h)))/h;(isNaN(Y)||Y===0)&&(Y=v/Math.cos(Math.PI/180*s)),this._point=U.subtract(u.getPixelOrigin()),this._radius=isNaN(Y)?0:U.x-u.project([D,i-Y]).x,this._radiusY=U.y-P.y}else{var le=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(le).x}this._updateBounds()}});function Hv(i,s,u){return new $u(i,s,u)}var Gn=ui.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,s){E(this,s),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var s=1/0,u=null,f=vr,h,v,P=0,A=this._parts.length;P<A;P++)for(var U=this._parts[P],D=1,Y=U.length;D<Y;D++){h=U[D-1],v=U[D];var le=f(i,h,v,!0);le<s&&(s=le,u=f(i,h,v))}return u&&(u.distance=Math.sqrt(s)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Bp(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,s){return s=s||this._defaultShape(),i=Q(i),s.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new pe,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return rn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var s=[],u=rn(i),f=0,h=i.length;f<h;f++)u?(s[f]=Q(i[f]),this._bounds.extend(s[f])):s[f]=this._convertLatLngs(i[f]);return s},_project:function(){var i=new J;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),s=new z(i,i);this._rawPxBounds&&(this._pxBounds=new J([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(i,s,u){var f=i[0]instanceof ie,h=i.length,v,P;if(f){for(P=[],v=0;v<h;v++)P[v]=this._map.latLngToLayerPoint(i[v]),u.extend(P[v]);s.push(P)}else for(v=0;v<h;v++)this._projectLatlngs(i[v],s,u)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,u,f,h,v,P,A,U;for(u=0,h=0,v=this._rings.length;u<v;u++)for(U=this._rings[u],f=0,P=U.length;f<P-1;f++)A=Up(U[f],U[f+1],i,f,!0),A&&(s[h]=s[h]||[],s[h].push(A[0]),(A[1]!==U[f+1]||f===P-2)&&(s[h].push(A[1]),h++))}},_simplifyPoints:function(){for(var i=this._parts,s=this.options.smoothFactor,u=0,f=i.length;u<f;u++)i[u]=Rp(i[u],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,s){var u,f,h,v,P,A,U=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(u=0,v=this._parts.length;u<v;u++)for(A=this._parts[u],f=0,P=A.length,h=P-1;f<P;h=f++)if(!(!s&&f===0)&&Ap(i,A[h],A[f])<=U)return!0;return!1}});function Zv(i,s){return new Gn(i,s)}Gn._flat=Np;var po=Gn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ip(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var s=Gn.prototype._convertLatLngs.call(this,i),u=s.length;return u>=2&&s[0]instanceof ie&&s[0].equals(s[u-1])&&s.pop(),s},_setLatLngs:function(i){Gn.prototype._setLatLngs.call(this,i),rn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return rn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,s=this.options.weight,u=new z(s,s);if(i=new J(i.min.subtract(u),i.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,h=this._rings.length,v;f<h;f++)v=Op(this._rings[f],i,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var s=!1,u,f,h,v,P,A,U,D;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(v=0,U=this._parts.length;v<U;v++)for(u=this._parts[v],P=0,D=u.length,A=D-1;P<D;A=P++)f=u[P],h=u[A],f.y>i.y!=h.y>i.y&&i.x<(h.x-f.x)*(i.y-f.y)/(h.y-f.y)+f.x&&(s=!s);return s||Gn.prototype._containsPoint.call(this,i,!0)}});function Wv(i,s){return new po(i,s)}var Kn=Vn.extend({initialize:function(i,s){E(this,s),this._layers={},i&&this.addData(i)},addData:function(i){var s=w(i)?i:i.features,u,f,h;if(s){for(u=0,f=s.length;u<f;u++)h=s[u],(h.geometries||h.geometry||h.features||h.coordinates)&&this.addData(h);return this}var v=this.options;if(v.filter&&!v.filter(i))return this;var P=Zs(i,v);return P?(P.feature=Gs(i),P.defaultOptions=P.options,this.resetStyle(P),v.onEachFeature&&v.onEachFeature(i,P),this.addLayer(P)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=a({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(s){this._setLayerStyle(s,i)},this)},_setLayerStyle:function(i,s){i.setStyle&&(typeof s=="function"&&(s=s(i.feature)),i.setStyle(s))}});function Zs(i,s){var u=i.type==="Feature"?i.geometry:i,f=u?u.coordinates:null,h=[],v=s&&s.pointToLayer,P=s&&s.coordsToLatLng||Du,A,U,D,Y;if(!f&&!u)return null;switch(u.type){case"Point":return A=P(f),Dp(v,i,A,s);case"MultiPoint":for(D=0,Y=f.length;D<Y;D++)A=P(f[D]),h.push(Dp(v,i,A,s));return new Vn(h);case"LineString":case"MultiLineString":return U=Ws(f,u.type==="LineString"?0:1,P),new Gn(U,s);case"Polygon":case"MultiPolygon":return U=Ws(f,u.type==="Polygon"?1:2,P),new po(U,s);case"GeometryCollection":for(D=0,Y=u.geometries.length;D<Y;D++){var le=Zs({geometry:u.geometries[D],type:"Feature",properties:i.properties},s);le&&h.push(le)}return new Vn(h);case"FeatureCollection":for(D=0,Y=u.features.length;D<Y;D++){var me=Zs(u.features[D],s);me&&h.push(me)}return new Vn(h);default:throw new Error("Invalid GeoJSON object.")}}function Dp(i,s,u,f){return i?i(s,u):new js(u,f&&f.markersInheritOptions&&f)}function Du(i){return new ie(i[1],i[0],i[2])}function Ws(i,s,u){for(var f=[],h=0,v=i.length,P;h<v;h++)P=s?Ws(i[h],s-1,u):(u||Du)(i[h]),f.push(P);return f}function ju(i,s){return i=Q(i),i.alt!==void 0?[y(i.lng,s),y(i.lat,s),y(i.alt,s)]:[y(i.lng,s),y(i.lat,s)]}function Vs(i,s,u,f){for(var h=[],v=0,P=i.length;v<P;v++)h.push(s?Vs(i[v],rn(i[v])?0:s-1,u,f):ju(i[v],f));return!s&&u&&h.length>0&&h.push(h[0].slice()),h}function ho(i,s){return i.feature?a({},i.feature,{geometry:s}):Gs(s)}function Gs(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Hu={toGeoJSON:function(i){return ho(this,{type:"Point",coordinates:ju(this.getLatLng(),i)})}};js.include(Hu),$u.include(Hu),Hs.include(Hu),Gn.include({toGeoJSON:function(i){var s=!rn(this._latlngs),u=Vs(this._latlngs,s?1:0,!1,i);return ho(this,{type:(s?"Multi":"")+"LineString",coordinates:u})}}),po.include({toGeoJSON:function(i){var s=!rn(this._latlngs),u=s&&!rn(this._latlngs[0]),f=Vs(this._latlngs,u?2:s?1:0,!0,i);return s||(f=[f]),ho(this,{type:(u?"Multi":"")+"Polygon",coordinates:f})}}),co.include({toMultiPoint:function(i){var s=[];return this.eachLayer(function(u){s.push(u.toGeoJSON(i).geometry.coordinates)}),ho(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(i){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(i);var u=s==="GeometryCollection",f=[];return this.eachLayer(function(h){if(h.toGeoJSON){var v=h.toGeoJSON(i);if(u)f.push(v.geometry);else{var P=Gs(v);P.type==="FeatureCollection"?f.push.apply(f,P.features):f.push(P)}}}),u?ho(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function jp(i,s){return new Kn(i,s)}var Vv=jp,Ks=xn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,s,u){this._url=i,this._bounds=ne(s),E(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(he(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ze(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&lo(this._image),this},bringToBack:function(){return this._map&&uo(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=ne(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",s=this._image=i?this._url:we("img");if(he(s,"leaflet-image-layer"),this._zoomAnimated&&he(s,"leaflet-zoom-animated"),this.options.className&&he(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(i){var s=this._map.getZoomScale(i.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Ii(this._image,u,s)},_reset:function(){var i=this._image,s=new J(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=s.getSize();st(i,s.min),i.style.width=u.x+"px",i.style.height=u.y+"px"},_updateOpacity:function(){on(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Gv=function(i,s,u){return new Ks(i,s,u)},Hp=Ks.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",s=this._image=i?this._url:we("video");if(he(s,"leaflet-image-layer"),this._zoomAnimated&&he(s,"leaflet-zoom-animated"),this.options.className&&he(s,this.options.className),s.onselectstart=m,s.onmousemove=m,s.onloadeddata=l(this.fire,this,"load"),i){for(var u=s.getElementsByTagName("source"),f=[],h=0;h<u.length;h++)f.push(u[h].src);this._url=u.length>0?f:[s.src];return}w(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var P=we("source");P.src=this._url[v],s.appendChild(P)}}});function Kv(i,s,u){return new Hp(i,s,u)}var Zp=Ks.extend({_initImage:function(){var i=this._image=this._url;he(i,"leaflet-image-layer"),this._zoomAnimated&&he(i,"leaflet-zoom-animated"),this.options.className&&he(i,this.options.className),i.onselectstart=m,i.onmousemove=m}});function qv(i,s,u){return new Zp(i,s,u)}var Rn=xn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,s){i&&(i instanceof ie||w(i))?(this._latlng=Q(i),E(this,s)):(E(this,i),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&on(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&on(this._container,1),this.bringToFront(),this.options.interactive&&(he(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(on(this._container,0),this._removeTimeout=setTimeout(l(Ze,void 0,this._container),200)):Ze(this._container),this.options.interactive&&(nt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=Q(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&lo(this._container),this},bringToBack:function(){return this._map&&uo(this._container),this},_prepareOpen:function(i){var s=this._source;if(!s._map)return!1;if(s instanceof Vn){s=null;var u=this._source._layers;for(var f in u)if(u[f]._map){s=u[f];break}if(!s)return!1;this._source=s}if(!i)if(s.getCenter)i=s.getCenter();else if(s.getLatLng)i=s.getLatLng();else if(s.getBounds)i=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")i.innerHTML=s;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),s=F(this.options.offset),u=this._getAnchor();this._zoomAnimated?st(this._container,i.add(u)):s=s.add(i).add(u);var f=this._containerBottom=-s.y,h=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=f+"px",this._container.style.left=h+"px"}},_getAnchor:function(){return[0,0]}});xe.include({_initOverlay:function(i,s,u,f){var h=s;return h instanceof i||(h=new i(f).setContent(s)),u&&h.setLatLng(u),h}}),xn.include({_initOverlay:function(i,s,u,f){var h=u;return h instanceof i?(E(h,f),h._source=this):(h=s&&!f?s:new i(f,this),h.setContent(u)),h}});var qs=Rn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Rn.prototype.openOn.call(this,i)},onAdd:function(i){Rn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ui||this._source.on("preclick",Ai))},onRemove:function(i){Rn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ui||this._source.off("preclick",Ai))},getEvents:function(){var i=Rn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",s=this._container=we("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=we("div",i+"-content-wrapper",s);if(this._contentNode=we("div",i+"-content",u),gr(s),Iu(this._contentNode),fe(s,"contextmenu",Ai),this._tipContainer=we("div",i+"-tip-container",s),this._tip=we("div",i+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=we("a",i+"-close-button",s);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',fe(f,"click",function(h){gt(h),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,s=i.style;s.width="",s.whiteSpace="nowrap";var u=i.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),s.width=u+1+"px",s.whiteSpace="",s.height="";var f=i.offsetHeight,h=this.options.maxHeight,v="leaflet-popup-scrolled";h&&f>h?(s.height=h+"px",he(i,v)):nt(i,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),u=this._getAnchor();st(this._container,s.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,s=parseInt(fr(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+s,f=this._containerWidth,h=new z(this._containerLeft,-u-this._containerBottom);h._add(Ri(this._container));var v=i.layerPointToContainerPoint(h),P=F(this.options.autoPanPadding),A=F(this.options.autoPanPaddingTopLeft||P),U=F(this.options.autoPanPaddingBottomRight||P),D=i.getSize(),Y=0,le=0;v.x+f+U.x>D.x&&(Y=v.x+f-D.x+U.x),v.x-Y-A.x<0&&(Y=v.x-A.x),v.y+u+U.y>D.y&&(le=v.y+u-D.y+U.y),v.y-le-A.y<0&&(le=v.y-A.y),(Y||le)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Y,le]))}},_getAnchor:function(){return F(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Yv=function(i,s){return new qs(i,s)};xe.mergeOptions({closePopupOnClick:!0}),xe.include({openPopup:function(i,s,u){return this._initOverlay(qs,i,s,u).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),xn.include({bindPopup:function(i,s){return this._popup=this._initOverlay(qs,this._popup,i,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof Vn||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){zi(i);var s=i.layer||i.target;if(this._popup._source===s&&!(s instanceof ui)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=s,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Ys=Rn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Rn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Rn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Rn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",s=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=we("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var s,u,f=this._map,h=this._container,v=f.latLngToContainerPoint(f.getCenter()),P=f.layerPointToContainerPoint(i),A=this.options.direction,U=h.offsetWidth,D=h.offsetHeight,Y=F(this.options.offset),le=this._getAnchor();A==="top"?(s=U/2,u=D):A==="bottom"?(s=U/2,u=0):A==="center"?(s=U/2,u=D/2):A==="right"?(s=0,u=D/2):A==="left"?(s=U,u=D/2):P.x<v.x?(A="right",s=0,u=D/2):(A="left",s=U+(Y.x+le.x)*2,u=D/2),i=i.subtract(F(s,u,!0)).add(Y).add(le),nt(h,"leaflet-tooltip-right"),nt(h,"leaflet-tooltip-left"),nt(h,"leaflet-tooltip-top"),nt(h,"leaflet-tooltip-bottom"),he(h,"leaflet-tooltip-"+A),st(h,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&on(this._container,i)},_animateZoom:function(i){var s=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(s)},_getAnchor:function(){return F(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Qv=function(i,s){return new Ys(i,s)};xe.include({openTooltip:function(i,s,u){return this._initOverlay(Ys,i,s,u).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),xn.include({bindTooltip:function(i,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ys,this._tooltip,i,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var s=i?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[s](u),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof Vn||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&(fe(s,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),fe(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var s=typeof i.getElement=="function"&&i.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var s=i.latlng,u,f;this._tooltip.options.sticky&&i.originalEvent&&(u=this._map.mouseEventToContainerPoint(i.originalEvent),f=this._map.containerPointToLayerPoint(u),s=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(s)}});var Wp=fo.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var s=i&&i.tagName==="DIV"?i:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Us(s),s.appendChild(u.html)):s.innerHTML=u.html!==!1?u.html:"",u.bgPos){var f=F(u.bgPos);s.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Xv(i){return new Wp(i)}fo.Default=_r;var xr=xn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:re.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){E(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),Ze(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(lo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(uo(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=p(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof z?i:new z(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var s=this.getPane().children,u=-i(-1/0,1/0),f=0,h=s.length,v;f<h;f++)v=s[f].style.zIndex,s[f]!==this._container&&v&&(u=i(u,+v));isFinite(u)&&(this.options.zIndex=u+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!re.ielt9){on(this._container,this.options.opacity);var i=+new Date,s=!1,u=!1;for(var f in this._tiles){var h=this._tiles[f];if(!(!h.current||!h.loaded)){var v=Math.min(1,(i-h.loaded)/200);on(h.el,v),v<1?s=!0:(h.active?u=!0:this._onOpaqueTile(h),h.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),s&&(ee(this._fadeFrame),this._fadeFrame=Z(this._updateOpacity,this))}},_onOpaqueTile:m,_initContainer:function(){this._container||(this._container=we("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,s=this.options.maxZoom;if(i!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===i?(this._levels[u].el.style.zIndex=s-Math.abs(i-u),this._onUpdateLevel(u)):(Ze(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var f=this._levels[i],h=this._map;return f||(f=this._levels[i]={},f.el=we("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=s,f.origin=h.project(h.unproject(h.getPixelOrigin()),i).round(),f.zoom=i,this._setZoomTransform(f,h.getCenter(),h.getZoom()),m(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:function(){if(this._map){var i,s,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)s=this._tiles[i],s.retain=s.current;for(i in this._tiles)if(s=this._tiles[i],s.current&&!s.active){var f=s.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var s in this._tiles)this._tiles[s].coords.z===i&&this._removeTile(s)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)Ze(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,s,u,f){var h=Math.floor(i/2),v=Math.floor(s/2),P=u-1,A=new z(+h,+v);A.z=+P;var U=this._tileCoordsToKey(A),D=this._tiles[U];return D&&D.active?(D.retain=!0,!0):(D&&D.loaded&&(D.retain=!0),P>f?this._retainParent(h,v,P,f):!1)},_retainChildren:function(i,s,u,f){for(var h=2*i;h<2*i+2;h++)for(var v=2*s;v<2*s+2;v++){var P=new z(h,v);P.z=u+1;var A=this._tileCoordsToKey(P),U=this._tiles[A];if(U&&U.active){U.retain=!0;continue}else U&&U.loaded&&(U.retain=!0);u+1<f&&this._retainChildren(h,v,u+1,f)}},_resetView:function(i){var s=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var s=this.options;return s.minNativeZoom!==void 0&&i<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<i?s.maxNativeZoom:i},_setView:function(i,s,u,f){var h=Math.round(s);this.options.maxZoom!==void 0&&h>this.options.maxZoom||this.options.minZoom!==void 0&&h<this.options.minZoom?h=void 0:h=this._clampZoom(h);var v=this.options.updateWhenZooming&&h!==this._tileZoom;(!f||v)&&(this._tileZoom=h,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),h!==void 0&&this._update(i),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(i,s)},_setZoomTransforms:function(i,s){for(var u in this._levels)this._setZoomTransform(this._levels[u],i,s)},_setZoomTransform:function(i,s,u){var f=this._map.getZoomScale(u,i.zoom),h=i.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(s,u)).round();re.any3d?Ii(i.el,h,f):st(i.el,h)},_resetGrid:function(){var i=this._map,s=i.options.crs,u=this._tileSize=this.getTileSize(),f=this._tileZoom,h=this._map.getPixelWorldBounds(this._tileZoom);h&&(this._globalTileRange=this._pxBoundsToTileRange(h)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,s.wrapLng[0]],f).x/u.x),Math.ceil(i.project([0,s.wrapLng[1]],f).x/u.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([s.wrapLat[0],0],f).y/u.x),Math.ceil(i.project([s.wrapLat[1],0],f).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var s=this._map,u=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),f=s.getZoomScale(u,this._tileZoom),h=s.project(i,this._tileZoom).floor(),v=s.getSize().divideBy(f*2);return new J(h.subtract(v),h.add(v))},_update:function(i){var s=this._map;if(s){var u=this._clampZoom(s.getZoom());if(i===void 0&&(i=s.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(i),h=this._pxBoundsToTileRange(f),v=h.getCenter(),P=[],A=this.options.keepBuffer,U=new J(h.getBottomLeft().subtract([A,-A]),h.getTopRight().add([A,-A]));if(!(isFinite(h.min.x)&&isFinite(h.min.y)&&isFinite(h.max.x)&&isFinite(h.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var D in this._tiles){var Y=this._tiles[D].coords;(Y.z!==this._tileZoom||!U.contains(new z(Y.x,Y.y)))&&(this._tiles[D].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(i,u);return}for(var le=h.min.y;le<=h.max.y;le++)for(var me=h.min.x;me<=h.max.x;me++){var Mt=new z(me,le);if(Mt.z=this._tileZoom,!!this._isValidTile(Mt)){var ft=this._tiles[this._tileCoordsToKey(Mt)];ft?ft.current=!0:P.push(Mt)}}if(P.sort(function(Bt,go){return Bt.distanceTo(v)-go.distanceTo(v)}),P.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var sn=document.createDocumentFragment();for(me=0;me<P.length;me++)this._addTile(P[me],sn);this._level.el.appendChild(sn)}}}},_isValidTile:function(i){var s=this._map.options.crs;if(!s.infinite){var u=this._globalTileRange;if(!s.wrapLng&&(i.x<u.min.x||i.x>u.max.x)||!s.wrapLat&&(i.y<u.min.y||i.y>u.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(i);return ne(this.options.bounds).overlaps(f)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var s=this._map,u=this.getTileSize(),f=i.scaleBy(u),h=f.add(u),v=s.unproject(f,i.z),P=s.unproject(h,i.z);return[v,P]},_tileCoordsToBounds:function(i){var s=this._tileCoordsToNwSe(i),u=new pe(s[0],s[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var s=i.split(":"),u=new z(+s[0],+s[1]);return u.z=+s[2],u},_removeTile:function(i){var s=this._tiles[i];s&&(Ze(s.el),delete this._tiles[i],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){he(i,"leaflet-tile");var s=this.getTileSize();i.style.width=s.x+"px",i.style.height=s.y+"px",i.onselectstart=m,i.onmousemove=m,re.ielt9&&this.options.opacity<1&&on(i,this.options.opacity)},_addTile:function(i,s){var u=this._getTilePos(i),f=this._tileCoordsToKey(i),h=this.createTile(this._wrapCoords(i),l(this._tileReady,this,i));this._initTile(h),this.createTile.length<2&&Z(l(this._tileReady,this,i,null,h)),st(h,u),this._tiles[f]={el:h,coords:i,current:!0},s.appendChild(h),this.fire("tileloadstart",{tile:h,coords:i})},_tileReady:function(i,s,u){s&&this.fire("tileerror",{error:s,tile:u,coords:i});var f=this._tileCoordsToKey(i);u=this._tiles[f],u&&(u.loaded=+new Date,this._map._fadeAnimated?(on(u.el,0),ee(this._fadeFrame),this._fadeFrame=Z(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),s||(he(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),re.ielt9||!this._map._fadeAnimated?Z(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var s=new z(this._wrapX?g(i.x,this._wrapX):i.x,this._wrapY?g(i.y,this._wrapY):i.y);return s.z=i.z,s},_pxBoundsToTileRange:function(i){var s=this.getTileSize();return new J(i.min.unscaleBy(s).floor(),i.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Jv(i){return new xr(i)}var mo=xr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,s){this._url=i,s=E(this,s),s.detectRetina&&re.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,s){return this._url===i&&s===void 0&&(s=!0),this._url=i,s||this.redraw(),this},createTile:function(i,s){var u=document.createElement("img");return fe(u,"load",l(this._tileOnLoad,this,s,u)),fe(u,"error",l(this._tileOnError,this,s,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(i),u},getTileUrl:function(i){var s={r:re.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-i.y;this.options.tms&&(s.y=u),s["-y"]=u}return b(this._url,a(s,this.options))},_tileOnLoad:function(i,s){re.ielt9?setTimeout(l(i,this,null,s),0):i(null,s)},_tileOnError:function(i,s,u){var f=this.options.errorTileUrl;f&&s.getAttribute("src")!==f&&(s.src=f),i(u,s)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,s=this.options.maxZoom,u=this.options.zoomReverse,f=this.options.zoomOffset;return u&&(i=s-i),i+f},_getSubdomain:function(i){var s=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var i,s;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(s=this._tiles[i].el,s.onload=m,s.onerror=m,!s.complete)){s.src=T;var u=this._tiles[i].coords;Ze(s),delete this._tiles[i],this.fire("tileabort",{tile:s,coords:u})}},_removeTile:function(i){var s=this._tiles[i];if(s)return s.el.setAttribute("src",T),xr.prototype._removeTile.call(this,i)},_tileReady:function(i,s,u){if(!(!this._map||u&&u.getAttribute("src")===T))return xr.prototype._tileReady.call(this,i,s,u)}});function Vp(i,s){return new mo(i,s)}var Gp=mo.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,s){this._url=i;var u=a({},this.defaultWmsParams);for(var f in s)f in this.options||(u[f]=s[f]);s=E(this,s);var h=s.detectRetina&&re.retina?2:1,v=this.getTileSize();u.width=v.x*h,u.height=v.y*h,this.wmsParams=u},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,mo.prototype.onAdd.call(this,i)},getTileUrl:function(i){var s=this._tileCoordsToNwSe(i),u=this._crs,f=se(u.project(s[0]),u.project(s[1])),h=f.min,v=f.max,P=(this._wmsVersion>=1.3&&this._crs===Fp?[h.y,h.x,v.y,v.x]:[h.x,h.y,v.x,v.y]).join(","),A=mo.prototype.getTileUrl.call(this,i);return A+R(this.wmsParams,A,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+P},setParams:function(i,s){return a(this.wmsParams,i),s||this.redraw(),this}});function e_(i,s){return new Gp(i,s)}mo.WMS=Gp,Vp.wms=e_;var qn=xn.extend({options:{padding:.1},initialize:function(i){E(this,i),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),he(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,s){var u=this._map.getZoomScale(s,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),h=this._map.project(this._center,s),v=f.multiplyBy(-u).add(h).subtract(this._map._getNewPixelOrigin(i,s));re.any3d?Ii(this._container,v,u):st(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,s=this._map.getSize(),u=this._map.containerPointToLayerPoint(s.multiplyBy(-i)).round();this._bounds=new J(u,u.add(s.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Kp=qn.extend({options:{tolerance:0},getEvents:function(){var i=qn.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){qn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");fe(i,"mousemove",this._onMouseMove,this),fe(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),fe(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){ee(this._redrawRequest),delete this._ctx,Ze(this._container),ze(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var s in this._layers)i=this._layers[s],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qn.prototype._update.call(this);var i=this._bounds,s=this._container,u=i.getSize(),f=re.retina?2:1;st(s,i.min),s.width=f*u.x,s.height=f*u.y,s.style.width=u.x+"px",s.style.height=u.y+"px",re.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){qn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[d(i)]=i;var s=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var s=i._order,u=s.next,f=s.prev;u?u.prev=f:this._drawLast=f,f?f.next=u:this._drawFirst=u,delete i._order,delete this._layers[d(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var s=i.options.dashArray.split(/[, ]+/),u=[],f,h;for(h=0;h<s.length;h++){if(f=Number(s[h]),isNaN(f))return;u.push(f)}i.options._dashArray=u}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||Z(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var s=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new J,this._redrawBounds.extend(i._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(i._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var s=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,s=this._redrawBounds;if(this._ctx.save(),s){var u=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)i=f.layer,(!s||i._pxBounds&&i._pxBounds.intersects(s))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,s){if(this._drawing){var u,f,h,v,P=i._parts,A=P.length,U=this._ctx;if(A){for(U.beginPath(),u=0;u<A;u++){for(f=0,h=P[u].length;f<h;f++)v=P[u][f],U[f?"lineTo":"moveTo"](v.x,v.y);s&&U.closePath()}this._fillStroke(U,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var s=i._point,u=this._ctx,f=Math.max(Math.round(i._radius),1),h=(Math.max(Math.round(i._radiusY),1)||f)/f;h!==1&&(u.save(),u.scale(1,h)),u.beginPath(),u.arc(s.x,s.y/h,f,0,Math.PI*2,!1),h!==1&&u.restore(),this._fillStroke(u,i)}},_fillStroke:function(i,s){var u=s.options;u.fill&&(i.globalAlpha=u.fillOpacity,i.fillStyle=u.fillColor||u.color,i.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(i.setLineDash&&i.setLineDash(s.options&&s.options._dashArray||[]),i.globalAlpha=u.opacity,i.lineWidth=u.weight,i.strokeStyle=u.color,i.lineCap=u.lineCap,i.lineJoin=u.lineJoin,i.stroke())},_onClick:function(i){for(var s=this._map.mouseEventToLayerPoint(i),u,f,h=this._drawFirst;h;h=h.next)u=h.layer,u.options.interactive&&u._containsPoint(s)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(u))&&(f=u);this._fireEvent(f?[f]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,s)}},_handleMouseOut:function(i){var s=this._hoveredLayer;s&&(nt(this._container,"leaflet-interactive"),this._fireEvent([s],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,s){if(!this._mouseHoverThrottled){for(var u,f,h=this._drawFirst;h;h=h.next)u=h.layer,u.options.interactive&&u._containsPoint(s)&&(f=u);f!==this._hoveredLayer&&(this._handleMouseOut(i),f&&(he(this._container,"leaflet-interactive"),this._fireEvent([f],i,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,s,u){this._map._fireDOMEvent(s,u||s.type,i)},_bringToFront:function(i){var s=i._order;if(s){var u=s.next,f=s.prev;if(u)u.prev=f;else return;f?f.next=u:u&&(this._drawFirst=u),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(i)}},_bringToBack:function(i){var s=i._order;if(s){var u=s.next,f=s.prev;if(f)f.next=u;else return;u?u.prev=f:f&&(this._drawLast=f),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(i)}}});function qp(i){return re.canvas?new Kp(i):null}var br=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),t_={_initContainer:function(){this._container=we("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(qn.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var s=i._container=br("shape");he(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",i._path=br("path"),s.appendChild(i._path),this._updateStyle(i),this._layers[d(i)]=i},_addPath:function(i){var s=i._container;this._container.appendChild(s),i.options.interactive&&i.addInteractiveTarget(s)},_removePath:function(i){var s=i._container;Ze(s),i.removeInteractiveTarget(s),delete this._layers[d(i)]},_updateStyle:function(i){var s=i._stroke,u=i._fill,f=i.options,h=i._container;h.stroked=!!f.stroke,h.filled=!!f.fill,f.stroke?(s||(s=i._stroke=br("stroke")),h.appendChild(s),s.weight=f.weight+"px",s.color=f.color,s.opacity=f.opacity,f.dashArray?s.dashStyle=w(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=f.lineCap.replace("butt","flat"),s.joinstyle=f.lineJoin):s&&(h.removeChild(s),i._stroke=null),f.fill?(u||(u=i._fill=br("fill")),h.appendChild(u),u.color=f.fillColor||f.color,u.opacity=f.fillOpacity):u&&(h.removeChild(u),i._fill=null)},_updateCircle:function(i){var s=i._point.round(),u=Math.round(i._radius),f=Math.round(i._radiusY||u);this._setPath(i,i._empty()?"M0 0":"AL "+s.x+","+s.y+" "+u+","+f+" 0,"+65535*360)},_setPath:function(i,s){i._path.v=s},_bringToFront:function(i){lo(i._container)},_bringToBack:function(i){uo(i._container)}},Qs=re.vml?br:Lt,wr=qn.extend({_initContainer:function(){this._container=Qs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Qs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ze(this._container),ze(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){qn.prototype._update.call(this);var i=this._bounds,s=i.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,u.setAttribute("width",s.x),u.setAttribute("height",s.y)),st(u,i.min),u.setAttribute("viewBox",[i.min.x,i.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(i){var s=i._path=Qs("path");i.options.className&&he(s,i.options.className),i.options.interactive&&he(s,"leaflet-interactive"),this._updateStyle(i),this._layers[d(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){Ze(i._path),i.removeInteractiveTarget(i._path),delete this._layers[d(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var s=i._path,u=i.options;s&&(u.stroke?(s.setAttribute("stroke",u.color),s.setAttribute("stroke-opacity",u.opacity),s.setAttribute("stroke-width",u.weight),s.setAttribute("stroke-linecap",u.lineCap),s.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?s.setAttribute("stroke-dasharray",u.dashArray):s.removeAttribute("stroke-dasharray"),u.dashOffset?s.setAttribute("stroke-dashoffset",u.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),u.fill?(s.setAttribute("fill",u.fillColor||u.color),s.setAttribute("fill-opacity",u.fillOpacity),s.setAttribute("fill-rule",u.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(i,s){this._setPath(i,Tt(i._parts,s))},_updateCircle:function(i){var s=i._point,u=Math.max(Math.round(i._radius),1),f=Math.max(Math.round(i._radiusY),1)||u,h="a"+u+","+f+" 0 1,0 ",v=i._empty()?"M0 0":"M"+(s.x-u)+","+s.y+h+u*2+",0 "+h+-u*2+",0 ";this._setPath(i,v)},_setPath:function(i,s){i._path.setAttribute("d",s)},_bringToFront:function(i){lo(i._path)},_bringToBack:function(i){uo(i._path)}});re.vml&&wr.include(t_);function Yp(i){return re.svg||re.vml?new wr(i):null}xe.include({getRenderer:function(i){var s=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var s=this._paneRenderers[i];return s===void 0&&(s=this._createRenderer({pane:i}),this._paneRenderers[i]=s),s},_createRenderer:function(i){return this.options.preferCanvas&&qp(i)||Yp(i)}});var Qp=po.extend({initialize:function(i,s){po.prototype.initialize.call(this,this._boundsToLatLngs(i),s)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=ne(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function n_(i,s){return new Qp(i,s)}wr.create=Qs,wr.pointsToPath=Tt,Kn.geometryToLayer=Zs,Kn.coordsToLatLng=Du,Kn.coordsToLatLngs=Ws,Kn.latLngToCoords=ju,Kn.latLngsToCoords=Vs,Kn.getFeature=ho,Kn.asFeature=Gs,xe.mergeOptions({boxZoom:!0});var Xp=In.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){fe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ze(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ze(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),pr(),Cu(),this._startPoint=this._map.mouseEventToContainerPoint(i),fe(document,{contextmenu:zi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=we("div","leaflet-zoom-box",this._container),he(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var s=new J(this._point,this._startPoint),u=s.getSize();st(this._box,s.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(Ze(this._box),nt(this._container,"leaflet-crosshair")),hr(),Su(),ze(document,{contextmenu:zi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new pe(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});xe.addInitHook("addHandler","boxZoom",Xp),xe.mergeOptions({doubleClickZoom:!0});var Jp=In.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var s=this._map,u=s.getZoom(),f=s.options.zoomDelta,h=i.originalEvent.shiftKey?u-f:u+f;s.options.doubleClickZoom==="center"?s.setZoom(h):s.setZoomAround(i.containerPoint,h)}});xe.addInitHook("addHandler","doubleClickZoom",Jp),xe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var eh=In.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new li(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}he(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){nt(this._map._container,"leaflet-grab"),nt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=ne(this._map.options.maxBounds);this._offsetLimit=se(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var s=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(s),this._prunePositions(s)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,s){return i-(i-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;i.x<s.min.x&&(i.x=this._viscousLimit(i.x,s.min.x)),i.y<s.min.y&&(i.y=this._viscousLimit(i.y,s.min.y)),i.x>s.max.x&&(i.x=this._viscousLimit(i.x,s.max.x)),i.y>s.max.y&&(i.y=this._viscousLimit(i.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,s=Math.round(i/2),u=this._initialWorldOffset,f=this._draggable._newPos.x,h=(f-s+u)%i+s-u,v=(f+s+u)%i-s-u,P=Math.abs(h+u)<Math.abs(v+u)?h:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=P},_onDragEnd:function(i){var s=this._map,u=s.options,f=!u.inertia||i.noInertia||this._times.length<2;if(s.fire("dragend",i),f)s.fire("moveend");else{this._prunePositions(+new Date);var h=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,P=u.easeLinearity,A=h.multiplyBy(P/v),U=A.distanceTo([0,0]),D=Math.min(u.inertiaMaxSpeed,U),Y=A.multiplyBy(D/U),le=D/(u.inertiaDeceleration*P),me=Y.multiplyBy(-le/2).round();!me.x&&!me.y?s.fire("moveend"):(me=s._limitOffset(me,s.options.maxBounds),Z(function(){s.panBy(me,{duration:le,easeLinearity:P,noMoveStart:!0,animate:!0})}))}}});xe.addInitHook("addHandler","dragging",eh),xe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var th=In.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),fe(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ze(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,s=document.documentElement,u=i.scrollTop||s.scrollTop,f=i.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(f,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var s=this._panKeys={},u=this.keyCodes,f,h;for(f=0,h=u.left.length;f<h;f++)s[u.left[f]]=[-1*i,0];for(f=0,h=u.right.length;f<h;f++)s[u.right[f]]=[i,0];for(f=0,h=u.down.length;f<h;f++)s[u.down[f]]=[0,i];for(f=0,h=u.up.length;f<h;f++)s[u.up[f]]=[0,-1*i]},_setZoomDelta:function(i){var s=this._zoomKeys={},u=this.keyCodes,f,h;for(f=0,h=u.zoomIn.length;f<h;f++)s[u.zoomIn[f]]=i;for(f=0,h=u.zoomOut.length;f<h;f++)s[u.zoomOut[f]]=-i},_addHooks:function(){fe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ze(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var s=i.keyCode,u=this._map,f;if(s in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(f=this._panKeys[s],i.shiftKey&&(f=F(f).multiplyBy(3)),u.options.maxBounds&&(f=u._limitOffset(F(f),u.options.maxBounds)),u.options.worldCopyJump){var h=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(f)));u.panTo(h)}else u.panBy(f)}else if(s in this._zoomKeys)u.setZoom(u.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;zi(i)}}});xe.addInitHook("addHandler","keyboard",th),xe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var nh=In.extend({addHooks:function(){fe(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ze(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var s=kp(i),u=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var f=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),f),zi(i)},_performZoom:function(){var i=this._map,s=i.getZoom(),u=this._map.options.zoomSnap||0;i._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),h=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,v=u?Math.ceil(h/u)*u:h,P=i._limitZoom(s+(this._delta>0?v:-v))-s;this._delta=0,this._startTime=null,P&&(i.options.scrollWheelZoom==="center"?i.setZoom(s+P):i.setZoomAround(this._lastMousePos,s+P))}});xe.addInitHook("addHandler","scrollWheelZoom",nh);var i_=600;xe.mergeOptions({tapHold:re.touchNative&&re.safari&&re.mobile,tapTolerance:15});var ih=In.extend({addHooks:function(){fe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ze(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var s=i.touches[0];this._startPos=this._newPos=new z(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(fe(document,"touchend",gt),fe(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),i_),fe(document,"touchend touchcancel contextmenu",this._cancel,this),fe(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){ze(document,"touchend",gt),ze(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),ze(document,"touchend touchcancel contextmenu",this._cancel,this),ze(document,"touchmove",this._onMove,this)},_onMove:function(i){var s=i.touches[0];this._newPos=new z(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,s){var u=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});u._simulated=!0,s.target.dispatchEvent(u)}});xe.addInitHook("addHandler","tapHold",ih),xe.mergeOptions({touchZoom:re.touch,bounceAtZoomLimits:!0});var oh=In.extend({addHooks:function(){he(this._map._container,"leaflet-touch-zoom"),fe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){nt(this._map._container,"leaflet-touch-zoom"),ze(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var s=this._map;if(!(!i.touches||i.touches.length!==2||s._animatingZoom||this._zooming)){var u=s.mouseEventToContainerPoint(i.touches[0]),f=s.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(u.add(f)._divideBy(2))),this._startDist=u.distanceTo(f),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),fe(document,"touchmove",this._onTouchMove,this),fe(document,"touchend touchcancel",this._onTouchEnd,this),gt(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var s=this._map,u=s.mouseEventToContainerPoint(i.touches[0]),f=s.mouseEventToContainerPoint(i.touches[1]),h=u.distanceTo(f)/this._startDist;if(this._zoom=s.getScaleZoom(h,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&h<1||this._zoom>s.getMaxZoom()&&h>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,h===1)return}else{var v=u._add(f)._divideBy(2)._subtract(this._centerPoint);if(h===1&&v.x===0&&v.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),ee(this._animRequest);var P=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=Z(P,this,!0),gt(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,ee(this._animRequest),ze(document,"touchmove",this._onTouchMove,this),ze(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});xe.addInitHook("addHandler","touchZoom",oh),xe.BoxZoom=Xp,xe.DoubleClickZoom=Jp,xe.Drag=eh,xe.Keyboard=th,xe.ScrollWheelZoom=nh,xe.TapHold=ih,xe.TouchZoom=oh,n.Bounds=J,n.Browser=re,n.CRS=Te,n.Canvas=Kp,n.Circle=$u,n.CircleMarker=Hs,n.Class=H,n.Control=_n,n.DivIcon=Wp,n.DivOverlay=Rn,n.DomEvent=bv,n.DomUtil=_v,n.Draggable=li,n.Evented=K,n.FeatureGroup=Vn,n.GeoJSON=Kn,n.GridLayer=xr,n.Handler=In,n.Icon=fo,n.ImageOverlay=Ks,n.LatLng=ie,n.LatLngBounds=pe,n.Layer=xn,n.LayerGroup=co,n.LineUtil=Av,n.Map=xe,n.Marker=js,n.Mixin=Lv,n.Path=ui,n.Point=z,n.PolyUtil=Tv,n.Polygon=po,n.Polyline=Gn,n.Popup=qs,n.PosAnimation=Pp,n.Projection=zv,n.Rectangle=Qp,n.Renderer=qn,n.SVG=wr,n.SVGOverlay=Zp,n.TileLayer=mo,n.Tooltip=Ys,n.Transformation=ve,n.Util=te,n.VideoOverlay=Hp,n.bind=l,n.bounds=se,n.canvas=qp,n.circle=Hv,n.circleMarker=jv,n.control=yr,n.divIcon=Xv,n.extend=a,n.featureGroup=Fv,n.geoJSON=jp,n.geoJson=Vv,n.gridLayer=Jv,n.icon=$v,n.imageOverlay=Gv,n.latLng=Q,n.latLngBounds=ne,n.layerGroup=Bv,n.map=wv,n.marker=Dv,n.point=F,n.polygon=Wv,n.polyline=Zv,n.popup=Yv,n.rectangle=n_,n.setOptions=E,n.stamp=d,n.svg=Yp,n.svgOverlay=qv,n.tileLayer=Vp,n.tooltip=Qv,n.transformation=ce,n.version=o,n.videoOverlay=Kv;var o_=window.L;n.noConflict=function(){return window.L=o_,this},window.L=n})})(Md,Md.exports);var Wn=Md.exports;const TC=dl(Wn);function tp(e,t){const n=S.useRef(t);S.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}function MC(e,t,n){t.center!==n.center&&e.setLatLng(t.center),t.radius!=null&&t.radius!==n.radius&&e.setRadius(t.radius)}const Iy=1;function Ry(e){return Object.freeze({__version:Iy,map:e})}function Ay(e,t){return Object.freeze({...e,...t})}const np=S.createContext(null),ip=np.Provider;function Is(){const e=S.useContext(np);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function op(e){function t(n,o){const{instance:a,context:r}=e(n).current;return S.useImperativeHandle(o,()=>a),n.children==null?null:It.createElement(ip,{value:r},n.children)}return S.forwardRef(t)}function zy(e){function t(n,o){const[a,r]=S.useState(!1),{instance:l}=e(n,r).current;S.useImperativeHandle(o,()=>l),S.useEffect(function(){a&&l.update()},[l,a,n.children]);const c=l._contentNode;return c?Ls.createPortal(n.children,c):null}return S.forwardRef(t)}function rp(e){function t(n,o){const{instance:a}=e(n).current;return S.useImperativeHandle(o,()=>a),null}return S.forwardRef(t)}function Uy(e){return function(n){const o=Is(),a=e(n,o),{instance:r}=a.current,l=S.useRef(n.position),{position:c}=n;return S.useEffect(function(){return r.addTo(o.map),function(){r.remove()}},[o.map,r]),S.useEffect(function(){c!=null&&c!==l.current&&(r.setPosition(c),l.current=c)},[r,c]),a}}function gu(e,t){const n=S.useRef();S.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function Rs(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}function Ny(e,t){return function(o,a){const r=Is(),l=e(Rs(o,r),r);return tp(r.map,o.attribution),gu(l.current,o.eventHandlers),t(l.current,r,o,a),l}}function By(e){return e.split(" ").filter(Boolean)}function Fy(e,t){By(t).forEach(n=>{Wn.DomUtil.addClass(e,n)})}function $y(e,t){By(t).forEach(n=>{Wn.DomUtil.removeClass(e,n)})}function OC(e,t,n){e!=null&&n!==t&&(t!=null&&t.length>0&&$y(e,t),n!=null&&n.length>0&&Fy(e,n))}function As(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function ur(e,t){return t==null?function(o,a){const r=S.useRef();return r.current||(r.current=e(o,a)),r}:function(o,a){const r=S.useRef();r.current||(r.current=e(o,a));const l=S.useRef(o),{instance:c}=r.current;return S.useEffect(function(){l.current!==o&&(t(c,o,l.current),l.current=o)},[c,o,a]),r}}function sp(e,t){S.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var r;(r=t.layerContainer)==null||r.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function ap(e){return function(n){const o=Is(),a=e(Rs(n,o),o);return tp(o.map,n.attribution),gu(a.current,n.eventHandlers),sp(a.current,o),a}}function Dy(e,t){const n=S.useRef();S.useEffect(function(){if(t.pathOptions!==n.current){const a=t.pathOptions??{};e.instance.setStyle(a),n.current=a}},[e,t])}function jy(e){return function(n){const o=Is(),a=e(Rs(n,o),o);return gu(a.current,n.eventHandlers),sp(a.current,o),Dy(a.current,n),a}}function Hy(e){function t(a,r){return As(e(a),r)}const n=ur(t),o=Uy(n);return rp(o)}function Zy(e,t){const n=ur(e,t),o=ap(n);return op(o)}function Wy(e,t){const n=ur(e),o=Ny(n,t);return zy(o)}function IC(e,t){const n=ur(e,t),o=jy(n);return op(o)}function Vy(e,t){const n=ur(e,t),o=ap(n);return rp(o)}function Gy(e,t,n){const{opacity:o,zIndex:a}=t;o!=null&&o!==n.opacity&&e.setOpacity(o),a!=null&&a!==n.zIndex&&e.setZIndex(a)}function RC(e,t,n){t.bounds instanceof Wn.LatLngBounds&&t.bounds!==n.bounds&&e.setBounds(t.bounds),t.opacity!=null&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),t.zIndex!=null&&t.zIndex!==n.zIndex&&e.setZIndex(t.zIndex)}const AC=Object.freeze(Object.defineProperty({__proto__:null,CONTEXT_VERSION:Iy,LeafletContext:np,LeafletProvider:ip,addClassName:Fy,createContainerComponent:op,createControlComponent:Hy,createControlHook:Uy,createDivOverlayComponent:zy,createDivOverlayHook:Ny,createElementHook:ur,createElementObject:As,createLayerComponent:Zy,createLayerHook:ap,createLeafComponent:rp,createLeafletContext:Ry,createOverlayComponent:Wy,createPathComponent:IC,createPathHook:jy,createTileLayerComponent:Vy,extendContext:Ay,removeClassName:$y,updateCircle:MC,updateClassName:OC,updateGridLayer:Gy,updateMediaOverlay:RC,useAttribution:tp,useEventHandlers:gu,useLayerLifecycle:sp,useLeafletContext:Is,usePathOptions:Dy,withPane:Rs},Symbol.toStringTag,{value:"Module"}));function Od(){return Od=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Od.apply(this,arguments)}function zC({bounds:e,boundsOptions:t,center:n,children:o,className:a,id:r,placeholder:l,style:c,whenReady:d,zoom:p,...g},m){const[y]=S.useState({className:a,id:r,style:c}),[_,C]=S.useState(null);S.useImperativeHandle(m,()=>(_==null?void 0:_.map)??null,[_]);const E=S.useCallback(x=>{if(x!==null&&_===null){const b=new Wn.Map(x,g);n!=null&&p!=null?b.setView(n,p):e!=null&&b.fitBounds(e,t),d!=null&&b.whenReady(d),C(Ry(b))}},[]);S.useEffect(()=>()=>{_==null||_.map.remove()},[_]);const R=_?It.createElement(ip,{value:_},o):l??null;return It.createElement("div",Od({},y,{ref:E}),R)}const UC=S.forwardRef(zC),NC=Zy(function({position:t,...n},o){const a=new Wn.Marker(t,n);return As(a,Ay(o,{overlayContainer:a}))},function(t,n,o){n.position!==o.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==o.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==o.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==o.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==o.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),BC=Wy(function(t,n){const o=new Wn.Popup(t,n.overlayContainer);return As(o,n)},function(t,n,{position:o},a){S.useEffect(function(){const{instance:l}=t;function c(p){p.popup===l&&(l.update(),a(!0))}function d(p){p.popup===l&&a(!1)}return n.map.on({popupopen:c,popupclose:d}),n.overlayContainer==null?(o!=null&&l.setLatLng(o),l.openOn(n.map)):n.overlayContainer.bindPopup(l),function(){var g;n.map.off({popupopen:c,popupclose:d}),(g=n.overlayContainer)==null||g.unbindPopup(),n.map.removeLayer(l)}},[t,n,a,o])}),FC=Vy(function({url:t,...n},o){const a=new Wn.TileLayer(t,Rs(n,o));return As(a,o)},function(t,n,o){Gy(t,n,o);const{url:a}=n;a!=null&&a!==o.url&&t.setUrl(a)}),$C=Hy(function(t){return new Wn.Control.Zoom(t)}),DC=[{type:"文藝刊物及組織",publication:"荷里活道——《循環日報》",description:"報社位於荷李活道，參《荷李活道》專書（明報刊，2013）",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2839973,lng:114.1504901}},{type:"文藝刊物及組織",publication:"荷李活道108號——《華僑日報》",description:"《華僑日報》1925年創刊之時遇到省港大罷工，報紙以石印方式維持出版，又1942年香港淪陷，仍委曲求全出版至戰後，是在二十年代至九十年代不間斷堅持出版的本土報紙。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2837831,lng:114.151074}},{type:"文藝刊物及組織",publication:"大埔墟(1)——《華僑日報》",description:"《華僑日報》編輯吳灞陵在1923年加入報界，收集各種報界資料，最為人樂道是創辦庸社，在《華僑日報》開創本地旅遊版，是香港旅遊文學的始祖。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.4452504,lng:114.1684947}},{type:"文藝刊物及組織",publication:"英華書院——《英華青年》",description:"香港現存歷史最悠久之學校",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.3298959,lng:114.152844}},{type:"文藝刊物及組織",publication:"新蒲崗——《中國學生周報》",description:"《中國學生周報》在1952年創辦，至1974年停刊，先後出版1128期，該刊承傳中國文化，風格務實多元，主要對象是當時海內外的中國學生與華僑生，先後有多個文藝版面如：「讀書研究」、「拓墾」、「種籽」、「新苗」、「穗華」、「譯林」、「電影」、「藝叢」、「詩之頁」。早期社長余德寬、奚會暲，編輯有余英時、姚拓、趙聰、黃思騁、黃崖、燕歸來等，後來的社長有古梅、胡菊人、陳特，編輯有陸離、羅卡、吳平等等。培育出多位文化人。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.3364426,lng:114.1989259}},{type:"文藝刊物及組織",publication:"威靈頓街——《晶報》",description:"'1956年5月5日創刊的左派報紙，1993年停刊，副刊有筆聊生（陳霞子）三及第小說，以及太史婆（容若）的太史婆講廿四史。據說晶報停刊後，舊報存於地庫，九十年代因一場大雨，保留在地庫的存報盡毀。（待考，資料來源葉翠華）",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.2830956,lng:114.1544719}},{type:"文藝刊物及組織",publication:"梁國英藥局——《紅豆》",description:"1933年12月創刊的《紅豆》，由梁國英藥局少東梁之盤、梁之寬兄弟創辦及經營，梁之盤為前律政司司長梁愛詩之父親，畫家黃苗子是她的舅父。",styleUrl:"#icon-1899-7CB342",coordinate:{lat:22.330329,lng:114.163192}},{type:"文藝刊物及組織",publication:"淺水灣(2)——《香港時報》副刊《淺水灣》",description:`「劉以鬯主編之《香港時報‧淺水灣》（1960.02.15-1962.06.30），是香港文學史上重要的報章文藝副刊之一。劉以鬯乃香港著名作家及資深文藝報刊編輯，他主編《香港時報．淺水灣》時期，將該版改為純文藝副刊，大量刊登外國文藝思潮的介紹、西方文學理論及翻譯作品，以及討論香港文化的文章。今天回顧，該副刊不但在西方現代文學思潮的譯介方面具重要的作用，而且為香港文壇培育了一批本地成長的年輕作者，如西西、崑南、李英豪等，其影響甚至及於當時的台灣文壇。」
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

——摘錄自李英豪〈陡長的梯級〉，載《山外有山》，頁151`,styleUrl:"#icon-1899-1A237E",coordinate:{lat:22.3246172,lng:114.1814018}}],yu=It.createContext({}),jC=({children:e})=>{const[t,n]=S.useState(HC),o=S.useCallback(r=>{n(l=>({...l,availableTypes:{...l.availableTypes,[r]:!l.availableTypes[r]}}))},[n]),a=S.useCallback(r=>{n(l=>({...l,searchString:r}))},[n]);return B.jsx(yu.Provider,{value:{...t,entries:DC.filter(r=>t.availableTypes[r.type]).filter(r=>t.searchString===""||r.publication.includes(t.searchString)||r.description.includes(t.searchString)),toggleTypeAvailability:o,setSearchString:a},children:e})},HC={availableTypes:{文藝刊物及組織:!0,地景書寫:!0,作家及讀者足迹:!0,疫病記憶與書寫:!0},searchString:""};var Ky={};const ZC=fl(AC);var m1={exports:{}};(function(e,t){(function(n,o){o(t)})(cn,function(n){var o=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnEveryZoom:!1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(r){L.Util.setOptions(this,r),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var l=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,l?this._withAnimation:this._noAnimation),this._markerCluster=l?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(r){if(r instanceof L.LayerGroup)return this.addLayers([r]);if(!r.getLatLng)return this._nonPointGroup.addLayer(r),this.fire("layeradd",{layer:r}),this;if(!this._map)return this._needsClustering.push(r),this.fire("layeradd",{layer:r}),this;if(this.hasLayer(r))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(r,this._maxZoom),this.fire("layeradd",{layer:r}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var l=r,c=this._zoom;if(r.__parent)for(;l.__parent._zoom>=c;)l=l.__parent;return this._currentShownBounds.contains(l.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(r,l):this._animationAddLayerNonAnimated(r,l)),this},removeLayer:function(r){return r instanceof L.LayerGroup?this.removeLayers([r]):r.getLatLng?this._map?r.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(r)),this._removeLayer(r,!0),this.fire("layerremove",{layer:r}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),r.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(r)&&(this._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,r)&&this.hasLayer(r)&&this._needsRemoving.push({layer:r,latlng:r._latlng}),this.fire("layerremove",{layer:r}),this):(this._nonPointGroup.removeLayer(r),this.fire("layerremove",{layer:r}),this)},addLayers:function(r,l){if(!L.Util.isArray(r))return this.addLayer(r);var c=this._featureGroup,d=this._nonPointGroup,p=this.options.chunkedLoading,g=this.options.chunkInterval,m=this.options.chunkProgress,y=r.length,_=0,C=!0,E;if(this._map){var R=new Date().getTime(),x=L.bind(function(){var w=new Date().getTime();for(this._map&&this._unspiderfy&&this._unspiderfy();_<y;_++){if(p&&_%200===0){var k=new Date().getTime()-w;if(k>g)break}if(E=r[_],E instanceof L.LayerGroup){C&&(r=r.slice(),C=!1),this._extractNonGroupLayers(E,r),y=r.length;continue}if(!E.getLatLng){d.addLayer(E),l||this.fire("layeradd",{layer:E});continue}if(!this.hasLayer(E)&&(this._addLayer(E,this._maxZoom),l||this.fire("layeradd",{layer:E}),E.__parent&&E.__parent.getChildCount()===2)){var T=E.__parent.getAllChildMarkers(),I=T[0]===E?T[1]:T[0];c.removeLayer(I)}}m&&m(_,y,new Date().getTime()-R),_===y?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(x,this.options.chunkDelay)},this);x()}else for(var b=this._needsClustering;_<y;_++){if(E=r[_],E instanceof L.LayerGroup){C&&(r=r.slice(),C=!1),this._extractNonGroupLayers(E,r),y=r.length;continue}if(!E.getLatLng){d.addLayer(E);continue}this.hasLayer(E)||b.push(E)}return this},removeLayers:function(r){var l,c,d=r.length,p=this._featureGroup,g=this._nonPointGroup,m=!0;if(!this._map){for(l=0;l<d;l++){if(c=r[l],c instanceof L.LayerGroup){m&&(r=r.slice(),m=!1),this._extractNonGroupLayers(c,r),d=r.length;continue}this._arraySplice(this._needsClustering,c),g.removeLayer(c),this.hasLayer(c)&&this._needsRemoving.push({layer:c,latlng:c._latlng}),this.fire("layerremove",{layer:c})}return this}if(this._unspiderfy){this._unspiderfy();var y=r.slice(),_=d;for(l=0;l<_;l++){if(c=y[l],c instanceof L.LayerGroup){this._extractNonGroupLayers(c,y),_=y.length;continue}this._unspiderfyLayer(c)}}for(l=0;l<d;l++){if(c=r[l],c instanceof L.LayerGroup){m&&(r=r.slice(),m=!1),this._extractNonGroupLayers(c,r),d=r.length;continue}if(!c.__parent){g.removeLayer(c),this.fire("layerremove",{layer:c});continue}this._removeLayer(c,!0,!0),this.fire("layerremove",{layer:c}),p.hasLayer(c)&&(p.removeLayer(c),c.clusterShow&&c.clusterShow())}return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(r){r.off(this._childMarkerEventHandlers,this),delete r.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var r=new L.LatLngBounds;this._topClusterLevel&&r.extend(this._topClusterLevel._bounds);for(var l=this._needsClustering.length-1;l>=0;l--)r.extend(this._needsClustering[l].getLatLng());return r.extend(this._nonPointGroup.getBounds()),r},eachLayer:function(r,l){var c=this._needsClustering.slice(),d=this._needsRemoving,p,g,m;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(c),g=c.length-1;g>=0;g--){for(p=!0,m=d.length-1;m>=0;m--)if(d[m].layer===c[g]){p=!1;break}p&&r.call(l,c[g])}this._nonPointGroup.eachLayer(r,l)},getLayers:function(){var r=[];return this.eachLayer(function(l){r.push(l)}),r},getLayer:function(r){var l=null;return r=parseInt(r,10),this.eachLayer(function(c){L.stamp(c)===r&&(l=c)}),l},hasLayer:function(r){if(!r)return!1;var l,c=this._needsClustering;for(l=c.length-1;l>=0;l--)if(c[l]===r)return!0;for(c=this._needsRemoving,l=c.length-1;l>=0;l--)if(c[l].layer===r)return!1;return!!(r.__parent&&r.__parent._group===this)||this._nonPointGroup.hasLayer(r)},zoomToShowLayer:function(r,l){var c=this._map;typeof l!="function"&&(l=function(){});var d=function(){(c.hasLayer(r)||c.hasLayer(r.__parent))&&!this._inZoomAnimation&&(this._map.off("moveend",d,this),this.off("animationend",d,this),c.hasLayer(r)?l():r.__parent._icon&&(this.once("spiderfied",l,this),r.__parent.spiderfy()))};r._icon&&this._map.getBounds().contains(r.getLatLng())?l():r.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",d,this),this._map.panTo(r.getLatLng())):(this._map.on("moveend",d,this),this.on("animationend",d,this),r.__parent.zoomToBounds())},onAdd:function(r){this._map=r;var l,c,d;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(r),this._nonPointGroup.addTo(r),this._gridClusters||this._generateInitialClusters(),this._maxLat=r.options.crs.projection.MAX_LATITUDE,l=0,c=this._needsRemoving.length;l<c;l++)d=this._needsRemoving[l],d.newlatlng=d.layer._latlng,d.layer._latlng=d.latlng;for(l=0,c=this._needsRemoving.length;l<c;l++)d=this._needsRemoving[l],this._removeLayer(d.layer,!0),d.layer._latlng=d.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),c=this._needsClustering,this._needsClustering=[],this.addLayers(c,!0)},onRemove:function(r){r.off("zoomend",this._zoomEnd,this),r.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(r){for(var l=r;l&&!l._icon;)l=l.__parent;return l||null},_arraySplice:function(r,l){for(var c=r.length-1;c>=0;c--)if(r[c]===l)return r.splice(c,1),!0},_removeFromGridUnclustered:function(r,l){for(var c=this._map,d=this._gridUnclustered,p=Math.floor(this._map.getMinZoom());l>=p&&d[l].removeObject(r,c.project(r.getLatLng(),l));l--);},_childMarkerDragStart:function(r){r.target.__dragStart=r.target._latlng},_childMarkerMoved:function(r){if(!this._ignoreMove&&!r.target.__dragStart){var l=r.target._popup&&r.target._popup.isOpen();this._moveChild(r.target,r.oldLatLng,r.latlng),l&&r.target.openPopup()}},_moveChild:function(r,l,c){r._latlng=l,this.removeLayer(r),r._latlng=c,this.addLayer(r)},_childMarkerDragEnd:function(r){var l=r.target.__dragStart;delete r.target.__dragStart,l&&this._moveChild(r.target,l,r.target._latlng)},_removeLayer:function(r,l,c){var d=this._gridClusters,p=this._gridUnclustered,g=this._featureGroup,m=this._map,y=Math.floor(this._map.getMinZoom());l&&this._removeFromGridUnclustered(r,this._maxZoom);var _=r.__parent,C=_._markers,E;for(this._arraySplice(C,r);_&&(_._childCount--,_._boundsNeedUpdate=!0,!(_._zoom<y));)l&&_._childCount<=1?(E=_._markers[0]===r?_._markers[1]:_._markers[0],d[_._zoom].removeObject(_,m.project(_._cLatLng,_._zoom)),p[_._zoom].addObject(E,m.project(E.getLatLng(),_._zoom)),this._arraySplice(_.__parent._childClusters,_),_.__parent._markers.push(E),E.__parent=_.__parent,_._icon&&(g.removeLayer(_),c||g.addLayer(E))):_._iconNeedsUpdate=!0,_=_.__parent;delete r.__parent},_isOrIsParent:function(r,l){for(;l;){if(r===l)return!0;l=l.parentNode}return!1},fire:function(r,l,c){if(l&&l.layer instanceof L.MarkerCluster){if(l.originalEvent&&this._isOrIsParent(l.layer._icon,l.originalEvent.relatedTarget))return;r="cluster"+r}L.FeatureGroup.prototype.fire.call(this,r,l,c)},listens:function(r,l){return L.FeatureGroup.prototype.listens.call(this,r,l)||L.FeatureGroup.prototype.listens.call(this,"cluster"+r,l)},_defaultIconCreateFunction:function(r){var l=r.getChildCount(),c=" marker-cluster-";return l<10?c+="small":l<100?c+="medium":c+="large",new L.DivIcon({html:"<div><span>"+l+"</span></div>",className:"marker-cluster"+c,iconSize:new L.Point(40,40)})},_bindEvents:function(){var r=this._map,l=this.options.spiderfyOnMaxZoom,c=this.options.showCoverageOnHover,d=this.options.zoomToBoundsOnClick,p=this.options.spiderfyOnEveryZoom;(l||d||p)&&this.on("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),c&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),r.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(r){var l=r.layer,c=l;if(!(r.type==="clusterkeypress"&&r.originalEvent&&r.originalEvent.keyCode!==13)){for(;c._childClusters.length===1;)c=c._childClusters[0];c._zoom===this._maxZoom&&c._childCount===l._childCount&&this.options.spiderfyOnMaxZoom?l.spiderfy():this.options.zoomToBoundsOnClick&&l.zoomToBounds(),this.options.spiderfyOnEveryZoom&&l.spiderfy(),r.originalEvent&&r.originalEvent.keyCode===13&&this._map._container.focus()}},_showCoverage:function(r){var l=this._map;this._inZoomAnimation||(this._shownPolygon&&l.removeLayer(this._shownPolygon),r.layer.getChildCount()>2&&r.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(r.layer.getConvexHull(),this.options.polygonOptions),l.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var r=this.options.spiderfyOnMaxZoom,l=this.options.showCoverageOnHover,c=this.options.zoomToBoundsOnClick,d=this.options.spiderfyOnEveryZoom,p=this._map;(r||c||d)&&this.off("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),l&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),p.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var r=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,r),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),r),this._currentShownBounds=r}},_generateInitialClusters:function(){var r=Math.ceil(this._map.getMaxZoom()),l=Math.floor(this._map.getMinZoom()),c=this.options.maxClusterRadius,d=c;typeof c!="function"&&(d=function(){return c}),this.options.disableClusteringAtZoom!==null&&(r=this.options.disableClusteringAtZoom-1),this._maxZoom=r,this._gridClusters={},this._gridUnclustered={};for(var p=r;p>=l;p--)this._gridClusters[p]=new L.DistanceGrid(d(p)),this._gridUnclustered[p]=new L.DistanceGrid(d(p));this._topClusterLevel=new this._markerCluster(this,l-1)},_addLayer:function(r,l){var c=this._gridClusters,d=this._gridUnclustered,p=Math.floor(this._map.getMinZoom()),g,m;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(r),r.on(this._childMarkerEventHandlers,this);l>=p;l--){g=this._map.project(r.getLatLng(),l);var y=c[l].getNearObject(g);if(y){y._addChild(r),r.__parent=y;return}if(y=d[l].getNearObject(g),y){var _=y.__parent;_&&this._removeLayer(y,!1);var C=new this._markerCluster(this,l,y,r);c[l].addObject(C,this._map.project(C._cLatLng,l)),y.__parent=C,r.__parent=C;var E=C;for(m=l-1;m>_._zoom;m--)E=new this._markerCluster(this,m,E),c[m].addObject(E,this._map.project(y.getLatLng(),m));_._addChild(E),this._removeFromGridUnclustered(y,l);return}d[l].addObject(r,g)}this._topClusterLevel._addChild(r),r.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(r){r instanceof L.MarkerCluster&&r._iconNeedsUpdate&&r._updateIcon()})},_enqueue:function(r){this._queue.push(r),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var r=0;r<this._queue.length;r++)this._queue[r].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var r=Math.round(this._map._zoom);this._processQueue(),this._zoom<r&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,r)):this._zoom>r?(this._animationStart(),this._animationZoomOut(this._zoom,r)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(this.options.removeOutsideVisibleBounds){if(L.Browser.mobile)return this._checkBoundsMaxLat(this._map.getBounds())}else return this._mapBoundsInfinite;return this._checkBoundsMaxLat(this._map.getBounds().pad(1))},_checkBoundsMaxLat:function(r){var l=this._maxLat;return l!==void 0&&(r.getNorth()>=l&&(r._northEast.lat=1/0),r.getSouth()<=-l&&(r._southWest.lat=-1/0)),r},_animationAddLayerNonAnimated:function(r,l){if(l===r)this._featureGroup.addLayer(r);else if(l._childCount===2){l._addToMap();var c=l.getAllChildMarkers();this._featureGroup.removeLayer(c[0]),this._featureGroup.removeLayer(c[1])}else l._updateIcon()},_extractNonGroupLayers:function(r,l){var c=r.getLayers(),d=0,p;for(l=l||[];d<c.length;d++){if(p=c[d],p instanceof L.LayerGroup){this._extractNonGroupLayers(p,l);continue}l.push(p)}return l},_overrideMarkerIcon:function(r){var l=r.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[r]}});return l}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(r,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),r),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(r,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),r),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(r,l){this._animationAddLayerNonAnimated(r,l)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(r,l){var c=this._getExpandedVisibleBounds(),d=this._featureGroup,p=Math.floor(this._map.getMinZoom()),g;this._ignoreMove=!0,this._topClusterLevel._recursively(c,r,p,function(m){var y=m._latlng,_=m._markers,C;for(c.contains(y)||(y=null),m._isSingleParent()&&r+1===l?(d.removeLayer(m),m._recursivelyAddChildrenToMap(null,l,c)):(m.clusterHide(),m._recursivelyAddChildrenToMap(y,l,c)),g=_.length-1;g>=0;g--)C=_[g],c.contains(C._latlng)||d.removeLayer(C)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(c,l),d.eachLayer(function(m){!(m instanceof L.MarkerCluster)&&m._icon&&m.clusterShow()}),this._topClusterLevel._recursively(c,r,l,function(m){m._recursivelyRestoreChildPositions(l)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(c,r,p,function(m){d.removeLayer(m),m.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(r,l){this._animationZoomOutSingle(this._topClusterLevel,r-1,l),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),r,this._getExpandedVisibleBounds())},_animationAddLayer:function(r,l){var c=this,d=this._featureGroup;d.addLayer(r),l!==r&&(l._childCount>2?(l._updateIcon(),this._forceLayout(),this._animationStart(),r._setPos(this._map.latLngToLayerPoint(l.getLatLng())),r.clusterHide(),this._enqueue(function(){d.removeLayer(r),r.clusterShow(),c._animationEnd()})):(this._forceLayout(),c._animationStart(),c._animationZoomOutSingle(l,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(r,l,c){var d=this._getExpandedVisibleBounds(),p=Math.floor(this._map.getMinZoom());r._recursivelyAnimateChildrenInAndAddSelfToMap(d,p,l+1,c);var g=this;this._forceLayout(),r._recursivelyBecomeVisible(d,c),this._enqueue(function(){if(r._childCount===1){var m=r._markers[0];this._ignoreMove=!0,m.setLatLng(m.getLatLng()),this._ignoreMove=!1,m.clusterShow&&m.clusterShow()}else r._recursively(d,c,p,function(y){y._recursivelyRemoveChildrenFromMap(d,p,l+1)});g._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(r){return new L.MarkerClusterGroup(r)};var a=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(r,l,c,d){L.Marker.prototype.initialize.call(this,c?c._cLatLng||c.getLatLng():new L.LatLng(0,0),{icon:this,pane:r.options.clusterPane}),this._group=r,this._zoom=l,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,c&&this._addChild(c),d&&this._addChild(d)},getAllChildMarkers:function(r,l){r=r||[];for(var c=this._childClusters.length-1;c>=0;c--)this._childClusters[c].getAllChildMarkers(r,l);for(var d=this._markers.length-1;d>=0;d--)l&&this._markers[d].__dragStart||r.push(this._markers[d]);return r},getChildCount:function(){return this._childCount},zoomToBounds:function(r){for(var l=this._childClusters.slice(),c=this._group._map,d=c.getBoundsZoom(this._bounds),p=this._zoom+1,g=c.getZoom(),m;l.length>0&&d>p;){p++;var y=[];for(m=0;m<l.length;m++)y=y.concat(l[m]._childClusters);l=y}d>p?this._group._map.setView(this._latlng,p):d<=g?this._group._map.setView(this._latlng,g+1):this._group._map.fitBounds(this._bounds,r)},getBounds:function(){var r=new L.LatLngBounds;return r.extend(this._bounds),r},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(r,l){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(r),r instanceof L.MarkerCluster?(l||(this._childClusters.push(r),r.__parent=this),this._childCount+=r._childCount):(l||this._markers.push(r),this._childCount++),this.__parent&&this.__parent._addChild(r,!0)},_setClusterCenter:function(r){this._cLatLng||(this._cLatLng=r._cLatLng||r._latlng)},_resetBounds:function(){var r=this._bounds;r._southWest&&(r._southWest.lat=1/0,r._southWest.lng=1/0),r._northEast&&(r._northEast.lat=-1/0,r._northEast.lng=-1/0)},_recalculateBounds:function(){var r=this._markers,l=this._childClusters,c=0,d=0,p=this._childCount,g,m,y,_;if(p!==0){for(this._resetBounds(),g=0;g<r.length;g++)y=r[g]._latlng,this._bounds.extend(y),c+=y.lat,d+=y.lng;for(g=0;g<l.length;g++)m=l[g],m._boundsNeedUpdate&&m._recalculateBounds(),this._bounds.extend(m._bounds),y=m._wLatLng,_=m._childCount,c+=y.lat*_,d+=y.lng*_;this._latlng=this._wLatLng=new L.LatLng(c/p,d/p),this._boundsNeedUpdate=!1}},_addToMap:function(r){r&&(this._backupLatlng=this._latlng,this.setLatLng(r)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(r,l,c){this._recursively(r,this._group._map.getMinZoom(),c-1,function(d){var p=d._markers,g,m;for(g=p.length-1;g>=0;g--)m=p[g],m._icon&&(m._setPos(l),m.clusterHide())},function(d){var p=d._childClusters,g,m;for(g=p.length-1;g>=0;g--)m=p[g],m._icon&&(m._setPos(l),m.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(r,l,c,d){this._recursively(r,d,l,function(p){p._recursivelyAnimateChildrenIn(r,p._group._map.latLngToLayerPoint(p.getLatLng()).round(),c),p._isSingleParent()&&c-1===d?(p.clusterShow(),p._recursivelyRemoveChildrenFromMap(r,l,c)):p.clusterHide(),p._addToMap()})},_recursivelyBecomeVisible:function(r,l){this._recursively(r,this._group._map.getMinZoom(),l,null,function(c){c.clusterShow()})},_recursivelyAddChildrenToMap:function(r,l,c){this._recursively(c,this._group._map.getMinZoom()-1,l,function(d){if(l!==d._zoom)for(var p=d._markers.length-1;p>=0;p--){var g=d._markers[p];c.contains(g._latlng)&&(r&&(g._backupLatlng=g.getLatLng(),g.setLatLng(r),g.clusterHide&&g.clusterHide()),d._group._featureGroup.addLayer(g))}},function(d){d._addToMap(r)})},_recursivelyRestoreChildPositions:function(r){for(var l=this._markers.length-1;l>=0;l--){var c=this._markers[l];c._backupLatlng&&(c.setLatLng(c._backupLatlng),delete c._backupLatlng)}if(r-1===this._zoom)for(var d=this._childClusters.length-1;d>=0;d--)this._childClusters[d]._restorePosition();else for(var p=this._childClusters.length-1;p>=0;p--)this._childClusters[p]._recursivelyRestoreChildPositions(r)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(r,l,c,d){var p,g;this._recursively(r,l-1,c-1,function(m){for(g=m._markers.length-1;g>=0;g--)p=m._markers[g],(!d||!d.contains(p._latlng))&&(m._group._featureGroup.removeLayer(p),p.clusterShow&&p.clusterShow())},function(m){for(g=m._childClusters.length-1;g>=0;g--)p=m._childClusters[g],(!d||!d.contains(p._latlng))&&(m._group._featureGroup.removeLayer(p),p.clusterShow&&p.clusterShow())})},_recursively:function(r,l,c,d,p){var g=this._childClusters,m=this._zoom,y,_;if(l<=m&&(d&&d(this),p&&m===c&&p(this)),m<l||m<c)for(y=g.length-1;y>=0;y--)_=g[y],_._boundsNeedUpdate&&_._recalculateBounds(),r.intersects(_._bounds)&&_._recursively(r,l,c,d,p)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var r=this.options.opacity;return this.setOpacity(0),this.options.opacity=r,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(r){this._cellSize=r,this._sqCellSize=r*r,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(r,l){var c=this._getCoord(l.x),d=this._getCoord(l.y),p=this._grid,g=p[d]=p[d]||{},m=g[c]=g[c]||[],y=L.Util.stamp(r);this._objectPoint[y]=l,m.push(r)},updateObject:function(r,l){this.removeObject(r),this.addObject(r,l)},removeObject:function(r,l){var c=this._getCoord(l.x),d=this._getCoord(l.y),p=this._grid,g=p[d]=p[d]||{},m=g[c]=g[c]||[],y,_;for(delete this._objectPoint[L.Util.stamp(r)],y=0,_=m.length;y<_;y++)if(m[y]===r)return m.splice(y,1),_===1&&delete g[c],!0},eachObject:function(r,l){var c,d,p,g,m,y,_,C=this._grid;for(c in C){m=C[c];for(d in m)for(y=m[d],p=0,g=y.length;p<g;p++)_=r.call(l,y[p]),_&&(p--,g--)}},getNearObject:function(r){var l=this._getCoord(r.x),c=this._getCoord(r.y),d,p,g,m,y,_,C,E,R=this._objectPoint,x=this._sqCellSize,b=null;for(d=c-1;d<=c+1;d++)if(m=this._grid[d],m){for(p=l-1;p<=l+1;p++)if(y=m[p],y)for(g=0,_=y.length;g<_;g++)C=y[g],E=this._sqDist(R[L.Util.stamp(C)],r),(E<x||E<=x&&b===null)&&(x=E,b=C)}return b},_getCoord:function(r){var l=Math.floor(r/this._cellSize);return isFinite(l)?l:r},_sqDist:function(r,l){var c=l.x-r.x,d=l.y-r.y;return c*c+d*d}},function(){L.QuickHull={getDistant:function(r,l){var c=l[1].lat-l[0].lat,d=l[0].lng-l[1].lng;return d*(r.lat-l[0].lat)+c*(r.lng-l[0].lng)},findMostDistantPointFromBaseLine:function(r,l){var c=0,d=null,p=[],g,m,y;for(g=l.length-1;g>=0;g--){if(m=l[g],y=this.getDistant(m,r),y>0)p.push(m);else continue;y>c&&(c=y,d=m)}return{maxPoint:d,newPoints:p}},buildConvexHull:function(r,l){var c=[],d=this.findMostDistantPointFromBaseLine(r,l);return d.maxPoint?(c=c.concat(this.buildConvexHull([r[0],d.maxPoint],d.newPoints)),c=c.concat(this.buildConvexHull([d.maxPoint,r[1]],d.newPoints)),c):[r[0]]},getConvexHull:function(r){var l=!1,c=!1,d=!1,p=!1,g=null,m=null,y=null,_=null,C=null,E=null,R;for(R=r.length-1;R>=0;R--){var x=r[R];(l===!1||x.lat>l)&&(g=x,l=x.lat),(c===!1||x.lat<c)&&(m=x,c=x.lat),(d===!1||x.lng>d)&&(y=x,d=x.lng),(p===!1||x.lng<p)&&(_=x,p=x.lng)}c!==l?(E=m,C=g):(E=_,C=y);var b=[].concat(this.buildConvexHull([E,C],r),this.buildConvexHull([C,E],r));return b}}}(),L.MarkerCluster.include({getConvexHull:function(){var r=this.getAllChildMarkers(),l=[],c,d;for(d=r.length-1;d>=0;d--)c=r[d].getLatLng(),l.push(c);return L.QuickHull.getConvexHull(l)}}),L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(!(this._group._spiderfied===this||this._group._inZoomAnimation)){var r=this.getAllChildMarkers(null,!0),l=this._group,c=l._map,d=c.latLngToLayerPoint(this._latlng),p;this._group._unspiderfy(),this._group._spiderfied=this,this._group.options.spiderfyShapePositions?p=this._group.options.spiderfyShapePositions(r.length,d):r.length>=this._circleSpiralSwitchover?p=this._generatePointsSpiral(r.length,d):(d.y+=10,p=this._generatePointsCircle(r.length,d)),this._animationSpiderfy(r,p)}},unspiderfy:function(r){this._group._inZoomAnimation||(this._animationUnspiderfy(r),this._group._spiderfied=null)},_generatePointsCircle:function(r,l){var c=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+r),d=c/this._2PI,p=this._2PI/r,g=[],m,y;for(d=Math.max(d,35),g.length=r,m=0;m<r;m++)y=this._circleStartAngle+m*p,g[m]=new L.Point(l.x+d*Math.cos(y),l.y+d*Math.sin(y))._round();return g},_generatePointsSpiral:function(r,l){var c=this._group.options.spiderfyDistanceMultiplier,d=c*this._spiralLengthStart,p=c*this._spiralFootSeparation,g=c*this._spiralLengthFactor*this._2PI,m=0,y=[],_;for(y.length=r,_=r;_>=0;_--)_<r&&(y[_]=new L.Point(l.x+d*Math.cos(m),l.y+d*Math.sin(m))._round()),m+=p/d+_*5e-4,d+=g/m;return y},_noanimationUnspiderfy:function(){var r=this._group,l=r._map,c=r._featureGroup,d=this.getAllChildMarkers(null,!0),p,g;for(r._ignoreMove=!0,this.setOpacity(1),g=d.length-1;g>=0;g--)p=d[g],c.removeLayer(p),p._preSpiderfyLatlng&&(p.setLatLng(p._preSpiderfyLatlng),delete p._preSpiderfyLatlng),p.setZIndexOffset&&p.setZIndexOffset(0),p._spiderLeg&&(l.removeLayer(p._spiderLeg),delete p._spiderLeg);r.fire("unspiderfied",{cluster:this,markers:d}),r._ignoreMove=!1,r._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(r,l){var c=this._group,d=c._map,p=c._featureGroup,g=this._group.options.spiderLegPolylineOptions,m,y,_,C;for(c._ignoreMove=!0,m=0;m<r.length;m++)C=d.layerPointToLatLng(l[m]),y=r[m],_=new L.Polyline([this._latlng,C],g),d.addLayer(_),y._spiderLeg=_,y._preSpiderfyLatlng=y._latlng,y.setLatLng(C),y.setZIndexOffset&&y.setZIndexOffset(1e6),p.addLayer(y);this.setOpacity(.3),c._ignoreMove=!1,c.fire("spiderfied",{cluster:this,markers:r})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(r,l){var c=this,d=this._group,p=d._map,g=d._featureGroup,m=this._latlng,y=p.latLngToLayerPoint(m),_=L.Path.SVG,C=L.extend({},this._group.options.spiderLegPolylineOptions),E=C.opacity,R,x,b,w,k,T;for(E===void 0&&(E=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),_?(C.opacity=0,C.className=(C.className||"")+" leaflet-cluster-spider-leg"):C.opacity=E,d._ignoreMove=!0,R=0;R<r.length;R++)x=r[R],T=p.layerPointToLatLng(l[R]),b=new L.Polyline([m,T],C),p.addLayer(b),x._spiderLeg=b,_&&(w=b._path,k=w.getTotalLength()+.1,w.style.strokeDasharray=k,w.style.strokeDashoffset=k),x.setZIndexOffset&&x.setZIndexOffset(1e6),x.clusterHide&&x.clusterHide(),g.addLayer(x),x._setPos&&x._setPos(y);for(d._forceLayout(),d._animationStart(),R=r.length-1;R>=0;R--)T=p.layerPointToLatLng(l[R]),x=r[R],x._preSpiderfyLatlng=x._latlng,x.setLatLng(T),x.clusterShow&&x.clusterShow(),_&&(b=x._spiderLeg,w=b._path,w.style.strokeDashoffset=0,b.setStyle({opacity:E}));this.setOpacity(.3),d._ignoreMove=!1,setTimeout(function(){d._animationEnd(),d.fire("spiderfied",{cluster:c,markers:r})},200)},_animationUnspiderfy:function(r){var l=this,c=this._group,d=c._map,p=c._featureGroup,g=r?d._latLngToNewLayerPoint(this._latlng,r.zoom,r.center):d.latLngToLayerPoint(this._latlng),m=this.getAllChildMarkers(null,!0),y=L.Path.SVG,_,C,E,R,x,b;for(c._ignoreMove=!0,c._animationStart(),this.setOpacity(1),C=m.length-1;C>=0;C--)_=m[C],_._preSpiderfyLatlng&&(_.closePopup(),_.setLatLng(_._preSpiderfyLatlng),delete _._preSpiderfyLatlng,b=!0,_._setPos&&(_._setPos(g),b=!1),_.clusterHide&&(_.clusterHide(),b=!1),b&&p.removeLayer(_),y&&(E=_._spiderLeg,R=E._path,x=R.getTotalLength()+.1,R.style.strokeDashoffset=x,E.setStyle({opacity:0})));c._ignoreMove=!1,setTimeout(function(){var w=0;for(C=m.length-1;C>=0;C--)_=m[C],_._spiderLeg&&w++;for(C=m.length-1;C>=0;C--)_=m[C],_._spiderLeg&&(_.clusterShow&&_.clusterShow(),_.setZIndexOffset&&_.setZIndexOffset(0),w>1&&p.removeLayer(_),d.removeLayer(_._spiderLeg),delete _._spiderLeg);c._animationEnd(),c.fire("unspiderfied",{cluster:l,markers:m})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(r){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(r))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(r){this._spiderfied&&this._spiderfied.unspiderfy(r)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(r){r._spiderLeg&&(this._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow(),r.setZIndexOffset&&r.setZIndexOffset(0),this._map.removeLayer(r._spiderLeg),delete r._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(r){return r?r instanceof L.MarkerClusterGroup?r=r._topClusterLevel.getAllChildMarkers():r instanceof L.LayerGroup?r=r._layers:r instanceof L.MarkerCluster?r=r.getAllChildMarkers():r instanceof L.Marker&&(r=[r]):r=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(r),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(r),this},_flagParentsIconsNeedUpdate:function(r){var l,c;for(l in r)for(c=r[l].__parent;c;)c._iconNeedsUpdate=!0,c=c.__parent},_refreshSingleMarkerModeMarkers:function(r){var l,c;for(l in r)c=r[l],this.hasLayer(c)&&c.setIcon(this._overrideMarkerIcon(c))}}),L.Marker.include({refreshIconOptions:function(r,l){var c=this.options.icon;return L.setOptions(c,r),this.setIcon(c),l&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),n.MarkerClusterGroup=o,n.MarkerCluster=a,Object.defineProperty(n,"__esModule",{value:!0})})})(m1,m1.exports);const WC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==",VC=Object.freeze(Object.defineProperty({__proto__:null,default:WC},Symbol.toStringTag,{value:"Module"})),GC=fl(VC),KC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",qC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),YC=fl(qC),QC="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC",XC=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),JC=fl(XC);var Bo=cn&&cn.__assign||function(){return Bo=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Bo.apply(this,arguments)},eS=cn&&cn.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]]);return n},tS=cn&&cn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ky,"__esModule",{value:!0});var Id=ZC,lp=tS(Wn);delete lp.default.Icon.Default.prototype._getIconUrl;lp.default.Icon.Default.mergeOptions({iconRetinaUrl:GC.default,iconUrl:YC.default,shadowUrl:JC.default});function nS(e){var t={},n={};e.children;var o=eS(e,["children"]);return Object.entries(o).forEach(function(a){var r,l,c=a[0],d=a[1];c.startsWith("on")?n=Bo(Bo({},n),(r={},r[c]=d,r)):t=Bo(Bo({},t),(l={},l[c]=d,l))}),{clusterProps:t,clusterEvents:n}}function iS(e,t){var n=nS(e),o=n.clusterProps,a=n.clusterEvents,r=new lp.default.MarkerClusterGroup(o);return Object.entries(a).forEach(function(l){var c=l[0],d=l[1],p="cluster".concat(c.substring(2).toLowerCase());r.on(p,d)}),(0,Id.createElementObject)(r,(0,Id.extendContext)(t,{layerContainer:r}))}var oS=function(e,t,n){},rS=(0,Id.createPathComponent)(iS,oS),sS=Ky.default=rS;const aS=()=>{const{entries:e}=S.useContext(yu),t=S.useRef({initialCenter:{lat:22.349983,lng:114.112759},center:{lat:22.349983,lng:114.112759}});return B.jsx(yy,{sx:lS,children:B.jsxs(UC,{center:t.current.initialCenter,zoom:11,scrollWheelZoom:!1,style:{height:"100vh"},zoomControl:!1,children:[B.jsx(FC,{crossOrigin:"anonymous",detectRetina:!0,maxZoom:TC.Browser.retina?20:19,maxNativeZoom:18,keepBuffer:10,updateWhenIdle:!0,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',url:"https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png"}),B.jsx($C,{position:"bottomleft"}),B.jsx(sS,{chunkedLoading:!0,children:e.map(n=>B.jsx(NC,{position:n.coordinate,children:B.jsxs(BC,{children:[B.jsx(Qm,{variant:"h6",children:n.publication}),B.jsx(Qm,{variant:"body1",children:n.description})]})},n.publication))})]})})},lS={overflow:"clip"},uS=Kf(B.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlankOutlined"),g1=Kf(B.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"}),"CheckBoxOutlined"),cS=["文藝刊物及組織","地景書寫","作家及讀者足迹","疫病記憶與書寫"],dS=()=>{const{availableTypes:e,toggleTypeAvailability:t}=S.useContext(yu),[n,o]=S.useState(null),a=!!n,r=c=>{o(c.currentTarget)},l=()=>{o(null)};return B.jsxs(B.Fragment,{children:[B.jsx(d8,{variant:"contained",startIcon:B.jsx(g1,{}),"aria-controls":a?"type-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:r,children:"類型"}),B.jsx(ky,{id:"type-menu",anchorEl:n,open:a,onClose:()=>l(),children:cS.map(c=>B.jsxs(DE,{onClick:()=>t(c),children:[e[c]?B.jsx(g1,{}):B.jsx(uS,{})," ",c]},c))})]})};var fS="Expected a function",y1=0/0,pS="[object Symbol]",hS=/^\s+|\s+$/g,mS=/^[-+]0x[0-9a-f]+$/i,gS=/^0b[01]+$/i,yS=/^0o[0-7]+$/i,vS=parseInt,_S=typeof cn=="object"&&cn&&cn.Object===Object&&cn,xS=typeof self=="object"&&self&&self.Object===Object&&self,bS=_S||xS||Function("return this")(),wS=Object.prototype,ES=wS.toString,CS=Math.max,SS=Math.min,Sc=function(){return bS.Date.now()};function kS(e,t,n){var o,a,r,l,c,d,p=0,g=!1,m=!1,y=!0;if(typeof e!="function")throw new TypeError(fS);t=v1(t)||0,Rd(n)&&(g=!!n.leading,m="maxWait"in n,r=m?CS(v1(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y);function _(I){var O=o,N=a;return o=a=void 0,p=I,l=e.apply(N,O),l}function C(I){return p=I,c=setTimeout(x,t),g?_(I):l}function E(I){var O=I-d,N=I-p,G=t-O;return m?SS(G,r-N):G}function R(I){var O=I-d,N=I-p;return d===void 0||O>=t||O<0||m&&N>=r}function x(){var I=Sc();if(R(I))return b(I);c=setTimeout(x,E(I))}function b(I){return c=void 0,y&&o?_(I):(o=a=void 0,l)}function w(){c!==void 0&&clearTimeout(c),p=0,o=d=a=c=void 0}function k(){return c===void 0?l:b(Sc())}function T(){var I=Sc(),O=R(I);if(o=arguments,a=this,d=I,O){if(c===void 0)return C(d);if(m)return c=setTimeout(x,t),_(d)}return c===void 0&&(c=setTimeout(x,t)),l}return T.cancel=w,T.flush=k,T}function Rd(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function PS(e){return!!e&&typeof e=="object"}function LS(e){return typeof e=="symbol"||PS(e)&&ES.call(e)==pS}function v1(e){if(typeof e=="number")return e;if(LS(e))return y1;if(Rd(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Rd(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(hS,"");var n=gS.test(e);return n||yS.test(e)?vS(e.slice(2),n?2:8):mS.test(e)?y1:+e}var TS=kS;const MS=dl(TS),OS=()=>{const[e,t]=S.useState(""),{setSearchString:n}=S.useContext(yu),o=S.useCallback(MS(a=>{n(a)},500),[n]);return S.useEffect(()=>{o(e)},[o,e]),B.jsx(LC,{variant:"standard",placeholder:"輪入關鍵字",onChange:({target:{value:a}})=>t(a),value:e})},IS=()=>B.jsxs(yy,{sx:RS,children:[B.jsx(dS,{}),B.jsx(OS,{})]}),RS={position:"fixed",display:"flex",m:1,overflowX:"scroll",gap:1,width:"100vw",whiteSpace:"nowrap",pointerEvents:"none","> *":{pointerEvents:"auto"},"& button":{mx:1},"&::-webkit-scrollbar":{display:"none"},msOverflowStyle:"none",scrollbarWidth:"none",zIndex:1e3};function AS(){const e=S.useMemo(()=>Vf(),[]);return B.jsx(d4,{theme:e,children:B.jsxs(jC,{children:[B.jsx(IS,{}),B.jsx(aS,{})]})})}Pc.createRoot(document.getElementById("root")).render(B.jsx(It.StrictMode,{children:B.jsx(AS,{})}));
