// Forms: Production version from LoveYou theme
//!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(4)},function(e,t,o){var n=o(2),r=o(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(n(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function c(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],s=o[l]||0,u="".concat(l," ").concat(s);o[l]=s+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:y(f,t),references:1}),n.push(u)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var $=null,m=0;function y(e,t){var o,n,r;if(t.singleton){var a=m++;o=$||($=s(t)),n=f.bind(null,o,a,!1),r=f.bind(null,o,a,!0)}else o=s(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=c(o[n]);i[r].references--}for(var a=l(e,t),s=0;s<o.length;s++){var u=c(o[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}o=a}}}},function(e,t,o){},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,r=function(e,t,o,n){var r=e.parentNode.querySelectorAll('[love-message="form-message"]');r.forEach((function(e){e.innerHTML=n})),setTimeout((function(){r.forEach((function(e){e.style.display=t}))}),o)};document.onload=void("undefined"!=typeof window&&window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)})),document.onload=function(e){document.querySelectorAll("form").forEach((function(t){t.addEventListener("submit",e,!1)}))}((function(e){e.preventDefault();var t=e.target,n=t.querySelector("[name=urlAction]").value,a=function(e){for(var t={},o=0;o<e.elements.length;o++){var n=e.elements[o];n.name&&!n.disabled&&"file"!==n.type&&"reset"!==n.type&&"submit"!==n.type&&"button"!==n.type&&(("checkbox"!==n.type&&"radio"!==n.type||n.checked)&&(t[n.name]={type:n.type,value:n.value}))}return t=JSON.stringify(t)}(t),i=new XMLHttpRequest;i.onloadstart=function(){r(t,"block",0,"Processing...")},i.onerror=function(){r(t,"block",0,"Error: Sorry, please try again or contact us by phone?"),console.error("message 2: ",r(t,"block",0,"Error: Sorry, please try again or contact us by phone?"))},i.onload=function(e){var n,a,i=JSON.parse('{"result":true, "count":42}');console.log(i.count),console.log(i.result);var c=e.target.response;console.log("res 1: ",c),console.log("typeof res: ",o(c));var l=JSON.parse(c);console.log("resObj 2: ",l),console.log("typeof resObj: ",o(l)),console.log("JSON.stringify(resObj, null, 2): ",JSON.stringify(l,null,2)),(null==c?void 0:null===(n=c.error)||void 0===n?void 0:n.message)?(r(t,"block",c.error.message.timeout,c.error.message.text),console.error("message 3: ",r(t,"block",c.error.message.timeout,c.error.message.text))):(null==c?void 0:null===(a=c.data)||void 0===a?void 0:a.redirect)&&"false"!==c.data.redirect?(!function(e){var t=e.parentNode;t.querySelectorAll('input:not([type="hidden"]):not([type="radio"]), select, textarea').forEach((function(e){e.value=""}));var o=t.querySelectorAll('[love-wrapper="radio"] [type=radio]'),n="";o.forEach((function(e){e.removeAttribute("checked"),n!==e.name&&(e.setAttribute("checked","true"),e.click()),n=e.name}))}(t),window.location.href=c.data.redirect):(console.log("res 2: ",c),console.log("typeof res: ",o(c)),console.log("res.data $$$$$$$$$$$$$$$$$ ",c.data),console.log("typeof res.data $$$$$$$$$$$$$$$$$ ",o(c.data)),console.log("res.data.message $$$$$$$$$$$$$$$$$ ",c.data.message),console.log("res.data.message.timeout $$$$$$$$$$$$$$$$$ ",c.data.message.timeout),console.log("res.data.message.text $$$$$$$$$$$$$$$$$ ",c.data.message.text),console.log("form here!!!!!!!!!!!!!!!!! ",t,"none",c.data.message.timeout,c.data.message.text))},i.open("POST",n),i.setRequestHeader("Content-Type","text/plain"),i.responseType="json",i.send(a)})),document.onload=(n=function(e){e.target.parentNode.parentNode.querySelectorAll('[type="radio"]').forEach((function(e){e.removeAttribute("checked")})),e.target.setAttribute("checked","true")},void document.querySelectorAll('[type="radio"]').forEach((function(e){e.addEventListener("click",n)})))}]);
//!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(4)},function(e,t,o){var n=o(2),r=o(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(n(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function c(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],s=o[l]||0,u="".concat(l," ").concat(s);o[l]=s+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:y(f,t),references:1}),n.push(u)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var $=null,m=0;function y(e,t){var o,n,r;if(t.singleton){var a=m++;o=$||($=s(t)),n=f.bind(null,o,a,!1),r=f.bind(null,o,a,!0)}else o=s(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=c(o[n]);i[r].references--}for(var a=l(e,t),s=0;s<o.length;s++){var u=c(o[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}o=a}}}},function(e,t,o){},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,r=function(e,t,o,n){var r=e.parentNode.querySelectorAll('[love-message="form-message"]');r.forEach((function(e){e.innerHTML=n})),setTimeout((function(){r.forEach((function(e){e.style.display=t}))}),o)};document.onload=void("undefined"!=typeof window&&window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)})),document.onload=function(e){document.querySelectorAll("form").forEach((function(t){t.addEventListener("submit",e,!1)}))}((function(e){e.preventDefault();var t=e.target,n=t.querySelector("[name=urlAction]").value,a=function(e){for(var t={},o=0;o<e.elements.length;o++){var n=e.elements[o];n.name&&!n.disabled&&"file"!==n.type&&"reset"!==n.type&&"submit"!==n.type&&"button"!==n.type&&(("checkbox"!==n.type&&"radio"!==n.type||n.checked)&&(t[n.name]={type:n.type,value:n.value}))}return t=JSON.stringify(t)}(t),i=new XMLHttpRequest;i.onloadstart=function(){r(t,"block",0,"Processing...")},i.onerror=function(){r(t,"block",0,"Error: Sorry, please try again or contact us by phone?"),console.error("message 2: ",r(t,"block",0,"Error: Sorry, please try again or contact us by phone?"))},i.onload=function(e){var n,a,i,c,l=JSON.parse('{"result":true, "count":42}');console.log(l.count),console.log(l.result);var s=e.target.response;console.log("res 1: ",s),console.log("typeof res: ",o(s)),s=JSON.parse(s),console.log("resObj 2: ",s),console.log("typeof resObj: ",o(s)),console.log("JSON.stringify(resObj, null, 2): ",JSON.stringify(s,null,2)),(null===(n=s)||void 0===n?void 0:null===(a=n.error)||void 0===a?void 0:a.message)?(r(t,"block",s.error.message.timeout,s.error.message.text),console.error("message 3: ",r(t,"block",s.error.message.timeout,s.error.message.text))):(null===(i=s)||void 0===i?void 0:null===(c=i.data)||void 0===c?void 0:c.redirect)&&"false"!==s.data.redirect?(!function(e){var t=e.parentNode;t.querySelectorAll('input:not([type="hidden"]):not([type="radio"]), select, textarea').forEach((function(e){e.value=""}));var o=t.querySelectorAll('[love-wrapper="radio"] [type=radio]'),n="";o.forEach((function(e){e.removeAttribute("checked"),n!==e.name&&(e.setAttribute("checked","true"),e.click()),n=e.name}))}(t),window.location.href=s.data.redirect):(console.log("res 2: ",s),console.log("typeof res: ",o(s)),console.log("res.data $$$$$$$$$$$$$$$$$ ",s.data),console.log("typeof res.data $$$$$$$$$$$$$$$$$ ",o(s.data)),console.log("res.data.message $$$$$$$$$$$$$$$$$ ",s.data.message),console.log("res.data.message.timeout $$$$$$$$$$$$$$$$$ ",s.data.message.timeout),console.log("res.data.message.text $$$$$$$$$$$$$$$$$ ",s.data.message.text),console.log("form here!!!!!!!!!!!!!!!!! ",t,"none",s.data.message.timeout,s.data.message.text))},i.open("POST",n),i.setRequestHeader("Content-Type","text/plain"),i.responseType="json",i.send(a)})),document.onload=(n=function(e){e.target.parentNode.parentNode.querySelectorAll('[type="radio"]').forEach((function(e){e.removeAttribute("checked")})),e.target.setAttribute("checked","true")},void document.querySelectorAll('[type="radio"]').forEach((function(e){e.addEventListener("click",n)})))}]);
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1),o(4)},function(e,t,o){var n=o(2),r=o(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(n(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),i=[];function s(e){for(var t=-1,o=0;o<i.length;o++)if(i[o].identifier===e){t=o;break}return t}function c(e,t){for(var o={},n=[],r=0;r<e.length;r++){var a=e[r],c=t.base?a[0]+t.base:a[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var d=s(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:y(f,t),references:1}),n.push(u)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,o){var n=o.css,r=o.media,a=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,$=0;function y(e,t){var o,n,r;if(t.singleton){var a=$++;o=m||(m=l(t)),n=f.bind(null,o,a,!1),r=f.bind(null,o,a,!0)}else o=l(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=s(o[n]);i[r].references--}for(var a=c(e,t),l=0;l<o.length;l++){var u=s(o[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}o=a}}}},function(e,t,o){},function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,r=function(e,t,o,n){var r=e.parentNode.querySelectorAll('[love-message="form-message"]');r.forEach((function(e){e.innerHTML=n})),setTimeout((function(){r.forEach((function(e){e.style.display=t}))}),o)};document.onload=void("undefined"!=typeof window&&window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)})),document.onload=function(e){document.querySelectorAll("form").forEach((function(t){t.addEventListener("submit",e,!1)}))}((function(e){e.preventDefault();var t=e.target,n=t.querySelector("[name=urlAction]").value,a=function(e){for(var t={},o=0;o<e.elements.length;o++){var n=e.elements[o];n.name&&!n.disabled&&"file"!==n.type&&"reset"!==n.type&&"submit"!==n.type&&"button"!==n.type&&(("checkbox"!==n.type&&"radio"!==n.type||n.checked)&&(t[n.name]={type:n.type,value:n.value}))}return t=JSON.stringify(t)}(t),i=new XMLHttpRequest;i.onloadstart=function(){r(t,"block",0,"Processing...")},i.onerror=function(){r(t,"block",0,"Error: Sorry, please try again or contact us by phone?"),console.error("message 2: ",r(t,"block",0,"Error: Sorry, please try again or contact us by phone?"))},i.onload=function(e){var n,a,i,s,c=JSON.parse('{"result":true, "count":42}');console.log(c.count),console.log(c.result);var l=e.target.response;console.log("res 1: ",l),console.log("typeof res: ",o(l)),l=JSON.parse(l),console.log("resObj 2: ",l),console.log("typeof resObj: ",o(l)),console.log("JSON.stringify(resObj, null, 2): ",JSON.stringify(l,null,2)),(null===(n=l)||void 0===n?void 0:null===(a=n.error)||void 0===a?void 0:a.message)?(r(t,"block",l.error.message.timeout,l.error.message.text),console.error("message 3: ",r(t,"block",l.error.message.timeout,l.error.message.text))):(null===(i=l)||void 0===i?void 0:null===(s=i.data)||void 0===s?void 0:s.redirect)&&"false"!==l.data.redirect?(!function(e){var t=e.parentNode;t.querySelectorAll('input:not([type="hidden"]):not([type="radio"]), select, textarea').forEach((function(e){e.value=""}));var o=t.querySelectorAll('[love-wrapper="radio"] [type=radio]'),n="";o.forEach((function(e){e.removeAttribute("checked"),n!==e.name&&(e.setAttribute("checked","true"),e.click()),n=e.name}))}(t),window.location.href=l.data.redirect):(console.log("res 2: ",l),console.log("typeof res: ",o(l)),console.log("res.data $$$$$$$$$$$$$$$$$ ",l.data),console.log("typeof res.data $$$$$$$$$$$$$$$$$ ",o(l.data)),console.log("res.data.message $$$$$$$$$$$$$$$$$ ",l.data.message),console.log("res.data.message.timeout $$$$$$$$$$$$$$$$$ ",l.data.message.timeout),console.log("res.data.message.text $$$$$$$$$$$$$$$$$ ",l.data.message.text),console.log("form here!!!!!!!!!!!!!!!!! ",t,"none",l.data.message.timeout,l.data.message.text),r(t,"none",l.data.message.timeout,l.data.message.text))},i.open("POST",n),i.setRequestHeader("Content-Type","text/plain"),i.responseType="json",i.send(a)})),document.onload=(n=function(e){e.target.parentNode.parentNode.querySelectorAll('[type="radio"]').forEach((function(e){e.removeAttribute("checked")})),e.target.setAttribute("checked","true")},void document.querySelectorAll('[type="radio"]').forEach((function(e){e.addEventListener("click",n)})))}]);


///**
 //* AJAX Form Submissions (Vanilla JS)
 //*/


//// Form listeners 'submit'
//const listenFormSubmit = ajaxRequest => {
  //document.querySelectorAll('form').forEach(form => {
    //form.addEventListener('submit', ajaxRequest, false);
  //});
//}

//// Messages (client-side)
//const message = (form, action, delay, message) => {
  //let parent = form.parentNode; // get form parent element
  //let elements =  parent.querySelectorAll('[love-message="form-message"]'); // select child elements
  //// set elements innerHTML
  //elements.forEach(e => {
    //e.innerHTML = message;
  //});
  //// show/hide elements
  //setTimeout(function(){
    //elements.forEach(e => {
      //e.style.display = action;
    //});
  //}, delay); 
//}

//// Radio listeners and check/uncheck
//const radiosChecked = () => {
  //// check/uncheck
  //let radioCheck = event => {
    //// uncheck all
    //let grandParent = event.target.parentNode.parentNode; // get form parent element
    //grandParent.querySelectorAll('[type="radio"]').forEach(e => {
      //e.removeAttribute('checked');
    //});
    //// check selected
    //event.target.setAttribute('checked', "true");
  //};
  //// Listeners (after above since need access to radioCheck)
  //document.querySelectorAll('[type="radio"]').forEach(e => {
    //e.addEventListener('click', radioCheck);
  //});
//}

//// Reset form values
//const formReset = form => {
  //let parent = form.parentNode; // get form parent element
  ///**
   //* Inputs (except specified), selects, and textareas: set innerHTML to empty string
   //*/
  //let elements =  parent.querySelectorAll('input:not([type="hidden"]):not([type="radio"]), select, textarea'); 
  //elements.forEach(e => {
    //e.value = '';
  //});
  ///**
   //* Radios reset: select first radio of group
   //*/
  //let radios =  parent.querySelectorAll('[love-wrapper="radio"] [type=radio]'); 
  //let elementName = "";
  //radios.forEach(e => {
    //e.removeAttribute('checked');
    //if (elementName !== e.name) {
      //e.setAttribute('checked', "true");
      //e.click(); // Only way to visually show the first item as clicked;
    //}
    //elementName = e.name;
  //});
//}

//// Serialize form for submit (longform because babel does not convert Object.values w/ 'reduce' for ie11)
//const serializeForm = form => {
	//// Setup our serialized data
	//let serialized = {};
	//// Loop through each field in the form
	//for (let i = 0; i < form.elements.length; i++) {
		//let field = form.elements[i];
    //// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    //if (!field.name 
      //|| field.disabled 
      //|| field.type === 'file' 
      //|| field.type === 'reset' 
      //|| field.type === 'submit' 
      //|| field.type === 'button'
    //) continue; // 'continue 'jumps over' one iteration in the loop, here, it skips the element if not of this type
		//// Convert field data to a query string
		//if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
      //serialized[field.name] = { type: field.type, value: field.value };
    //}
  //}
  //serialized = JSON.stringify(serialized);
  //return serialized;
//};

//// Ajax request
//const ajaxRequest = event => {
  //event.preventDefault(); // stop submit so input values do not get cleared before being able to act on them
  ///**
   //* Form data
   //*/
  //let form = event.target;
  //let formUrlAction = form.querySelector('[name=urlAction]').value;
  //let formData = serializeForm(form);

  ///**
   //* Ajax Request Object
   //*/
  //let xhr = new XMLHttpRequest();
  //// initiate request = onloadstart
  //xhr.onloadstart = function() {
    //message(form, 'block', 0, 'Processing...'); 
  //}
  //// error sending request (not error returned with response)
  //xhr.onerror = function () {
    //message(form, 'block', 0, 'Error: Sorry, please try again or contact us by phone?'); 
  //}
  //// successful response = onload (any response from application including error)
  //xhr.onload = function(event) {
    //let res = event.target.response; // responseType set to json
    //// error handling
    //// ECMAScript 2020 check if property defined with '?' res?.message?.error because if undefined will error
    //if (res?.error?.message) { 
      //message(form, 'block', res.error.message.timeout, res.error.message.text);
      //console.error(res.error.message.text);
    //}
    //// if urlRedirect
    //else if (res?.data?.redirect && res.data.redirect !== 'false') { // compare 'false' as string b/c not proper boolean
      //formReset(form);
      //window.location.href = res.data.redirect;
    //} 
    //// if no urlRedirect
    //else {
      //formReset(form);
      //message(form, 'none', res.data.message.timeout, res.data.message.text);
    //} 
  //}
  //// Send Request
  //xhr.open('POST', formUrlAction);
  //xhr.setRequestHeader('Content-Type', 'text/plain');
  //xhr.responseType = 'json';
  //xhr.send(formData);
//}

//let forEachPolyfill = () => {
  //if (typeof window !== 'undefined' &&  window.NodeList && !NodeList.prototype.forEach) {
    //NodeList.prototype.forEach = function (callback, thisArg) {
        //thisArg = thisArg || window;
        //for (var i = 0; i < this.length; i++) {
            //callback.call(thisArg, this[i], i, this);
        //}
    //};
  //}
//}

//document.onload = forEachPolyfill();
//document.onload = listenFormSubmit(ajaxRequest);
//document.onload = radiosChecked();