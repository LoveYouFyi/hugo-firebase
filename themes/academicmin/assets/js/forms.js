// Forms: Production version from LoveYou theme
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(4)},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});e.exports=a},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],u=t.base?i[0]+t.base:i[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var d=c(s),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:s,updater:y(f,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function y(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);a[o].references--}for(var i=u(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){},function(e,t){var n,r=function(e,t,n,r){var o=e.parentNode.querySelectorAll('[love-message="form-message"]');o.forEach((function(e){e.innerHTML=r})),setTimeout((function(){o.forEach((function(e){e.style.display=t}))}),n)},o=function(e){var t=e.parentNode;t.querySelectorAll('input:not([type="hidden"]):not([type="radio"]), select, textarea').forEach((function(e){e.value=""}));var n=t.querySelectorAll('[love-wrapper="radio"] [type=radio]'),r="";n.forEach((function(e){e.removeAttribute("checked"),r!==e.name&&(e.setAttribute("checked","true"),e.click()),r=e.name}))};document.onload=void("undefined"!=typeof window&&window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)})),document.onload=function(e){document.querySelectorAll("form").forEach((function(t){t.addEventListener("submit",e,!1)}))}((function(e){e.preventDefault();var t=e.target,n=t.querySelector("[name=urlAction]").value,i=function(e){for(var t={},n=0;n<e.elements.length;n++){var r=e.elements[n];r.name&&!r.disabled&&"file"!==r.type&&"reset"!==r.type&&"submit"!==r.type&&"button"!==r.type&&(("checkbox"!==r.type&&"radio"!==r.type||r.checked)&&(t[r.name]={type:r.type,value:r.value}))}return t=JSON.stringify(t)}(t),a=new XMLHttpRequest;a.onloadstart=function(){r(t,"block",0,"Processing...")},a.onerror=function(){r(t,"block",0,"Error: Sorry, please try again or contact us by phone?")},a.onload=function(e){var n,i,a,c,u=e.target.response;"string"==typeof u&&(u=JSON.parse(u)),(null===(n=u)||void 0===n?void 0:null===(i=n.error)||void 0===i?void 0:i.message)?(r(t,"block",u.error.message.timeout,u.error.message.text),console.error(u.error.message.text)):(null===(a=u)||void 0===a?void 0:null===(c=a.data)||void 0===c?void 0:c.redirect)&&"false"!==u.data.redirect?(o(t),window.location.href=u.data.redirect):(o(t),r(t,"none",u.data.message.timeout,u.data.message.text))},a.open("POST",n),a.setRequestHeader("Content-Type","text/plain"),a.responseType="json",a.send(i)})),document.onload=(n=function(e){e.target.parentNode.parentNode.querySelectorAll('[type="radio"]').forEach((function(e){e.removeAttribute("checked")})),e.target.setAttribute("checked","true")},void document.querySelectorAll('[type="radio"]').forEach((function(e){e.addEventListener("click",n)})))}]);

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