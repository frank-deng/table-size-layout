!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).Layout=r()}(this,(function(){"use strict";function e(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function r(r){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){t(r,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))}))}return r}function n(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,f=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return f=e.done,e},e:function(e){c=!0,a=e},f:function(){try{f||null==n.return||n.return()}finally{if(c)throw a}}}}return function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),t(this,"__confBackup",[]),t(this,"__conf",[]),t(this,"__fractionSum",0),r&&this.set(r)}var i,a,f;return i=e,(a=[{key:"toJSON",value:function(){return this.__confBackup.map((function(e){return r({},e)}))}},{key:"__checkNum",value:function(e,r,n){if(!e.hasOwnProperty(n))return!1;var t=e[n],i="Error at element ".concat(r,": ");if(isNaN(t)||null===t)throw TypeError(i+"".concat(n," should be a number."));if(t<=0)throw RangeError(i+"".concat(n," should be greater than 0."));return!0}},{key:"set",value:function(e){var n=this;if(!Array.isArray(e)||!e.length)throw new TypeError("Configuration must be a non-empty array.");var t=0,i=0,a=0,f=0;this.__confOrig=[],this.__conf=e.map((function(e,o){var c=n.__checkNum(e,o,"size"),u=n.__checkNum(e,o,"minSize"),l=n.__checkNum(e,o,"maxSize"),s={};c&&(s.size=e.size),u&&(s.minSize=e.minSize),l&&(s.maxSize=e.maxSize),n.__confBackup.push(s);var h=r({},e);return u&&l&&e.minSize==e.maxSize?h.finalSize=e.minSize:c?(i+=e.size,t++):u&&(f+=e.minSize,a++),h}));var c=1;t&&a?c=2/(t+a):t?c=1/t:a&&(c=1/a),this.__fractionSum=0;var u,l=o(this.__conf);try{for(l.s();!(u=l.n()).done;){var s=u.value;s.hasOwnProperty("finalSize")||(s.hasOwnProperty("size")?s.fraction=s.size/i:s.hasOwnProperty("minSize")?s.fraction=s.minSize/f:s.fraction=c,this.__fractionSum+=s.fraction)}}catch(e){l.e(e)}finally{l.f()}return this}},{key:"layout",value:function(e){if(isNaN(e))throw new TypeError("Size must be a number");if(e<0)throw new RangeError("Size must be greater than 0");for(var n=this.__conf,t=n.length,i=this.__conf.map((function(e){return e.hasOwnProperty("finalSize")?e.finalSize:null})),a=2*this.__conf.length;a--;){for(var f=e,c=0,u=[],l=0;l<t;l++){var s=i[l];if(null==s){var h=n[l];u.push(r(r({},h),{},{idx:l})),c+=h.fraction}else f-=s}if(!u.length||c<=0||f<=0)break;for(var y=!0,m=0,p=u;m<p.length;m++){var b=p[m],v=b.idx,S=f*b.fraction/c;b.hasOwnProperty("maxSize")&&S>b.maxSize?(y=!1,i[v]=b.maxSize):b.hasOwnProperty("minSize")&&S<b.minSize?(y=!1,i[v]=b.minSize):b.tempSize=S}if(y){var d,_=o(u);try{for(_.s();!(d=_.n()).done;){var z=d.value;i[z.idx]=z.tempSize}}catch(e){_.e(e)}finally{_.f()}break}}a<=0&&console.error("Dead loop detected");for(var g=i.length,w=0;w<g;w++){var O=i[w];null==O&&(i[w]=0)}return i}}])&&n(i.prototype,a),f&&n(i,f),e}()}));