function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,n={},r={},o=t.parcelRequireffc5;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequireffc5=o),(0,o.register)("6KOho",function(e,t){var n,r;n="undefined"!=typeof window?window:e.exports,r=function(e,t){var n,r=[],o=Object.getPrototypeOf,i=r.slice,a=r.flat?function(e){return r.flat.call(e)}:function(e){return r.concat.apply([],e)},s=r.push,u=r.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},m=function(e){return null!=e&&e===e.window},v=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var r,o,i=(n=n||v).createElement("script");if(i.text=e,t)for(r in y)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(o=t[r]||t.getAttribute&&t.getAttribute(r))&&i.setAttribute(r,o);n.head.appendChild(i).parentNode.removeChild(i)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var w="3.7.1",T=/HTML$/i,C=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new C.fn.init(e,t)};function k(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=b(e);return!(g(e)||m(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function E(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}C.fn=C.prototype={// The current version of jQuery being used
jquery:w,constructor:C,// The default length of a jQuery object is 0
length:0,toArray:function(){return i.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?i.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=C.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return C.each(this,e)},map:function(e){return this.pushStack(C.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(C.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:s,sort:r.sort,splice:r.splice},C.extend=C.fn.extend=function(){var e,t,n,r,o,i,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,// Skip the boolean and the target
a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(C.isPlainObject(r)||(o=Array.isArray(r)))?(n=a[t],i=o&&!Array.isArray(n)?[]:o||C.isPlainObject(n)?n:{},o=!1,// Never move original objects, clone them
a[t]=C.extend(l,i,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},C.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===c.call(e)&&(!(t=o(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(k(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",r=0,o=e.nodeType;if(!o)for(;t=e[r++];)n+=C.text(t);return 1===o||11===o?e.textContent:9===o?e.documentElement.textContent:3===o||4===o?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(k(Object(e))?C.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!T.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,o=e.length;r<n;r++)e[o++]=t[r];return e.length=o,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r=[],o=0,i=e.length,a=!n;o<i;o++)!t(e[o],o)!==a&&r.push(e[o]);return r},// arg is for internal usage only
map:function(e,t,n){var r,o,i=0,s=[];// Go through the array, translating each of the items to their new values
if(k(e))for(r=e.length;i<r;i++)null!=(o=t(e[i],i,n))&&s.push(o);else for(i in e)null!=(o=t(e[i],i,n))&&s.push(o);// Flatten any nested arrays
return a(s)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:h}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=r[Symbol.iterator]),// Populate the class2type map
C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});var S=r.pop,D=r.sort,j=r.splice,A="[\\x20\\t\\r\\n\\f]",N=RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g");// Note: an element does not contain itself
C.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var q=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function L(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}C.escapeSelector=function(e){return(e+"").replace(q,L)},function(){var t,n,o,a,l,c,p,d,g,m,y=s,x=C.expando,b=0,w=0,T=ee(),k=ee(),q=ee(),L=ee(),H=function(e,t){return e===t&&(l=!0),0},O="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
M="(?:\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",P="\\["+A+"*("+M+")(?:"+A+// Operator (capture 2)
"*([*^$|!~]?=)"+A+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+A+"*\\]",R=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",I=RegExp(A+"+","g"),_=RegExp("^"+A+"*,"+A+"*"),W=RegExp("^"+A+"*([>+~]|"+A+")"+A+"*"),F=RegExp(A+"|>"),$=new RegExp(R),B=RegExp("^"+M+"$"),U={ID:RegExp("^#("+M+")"),CLASS:RegExp("^\\.("+M+")"),TAG:RegExp("^("+M+"|[*])"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),bool:RegExp("^(?:"+O+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+A+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)","i")},z=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,V=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
G=RegExp("\\\\[\\da-fA-F]{1,6}"+A+"?|\\\\([^\\r\\n\\f])","g"),Q=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
J=function(){ea()},K=ec(function(e){return!0===e.disabled&&E(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{y.apply(r=i.call(v.childNodes),v.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
r[v.childNodes.length].nodeType}catch(e){y={apply:function(e,t){s.apply(e,i.call(t))},call:function(e){s.apply(e,i.call(arguments,1))}}}function Z(e,t,n,r){var o,i,a,s,u,l,f,p=t&&t.ownerDocument,m=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==m&&9!==m&&11!==m)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&(ea(t),t=t||c,d)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==m&&(u=Y.exec(e))){// ID selector
if(o=u[1]){// Document context
if(9===m){if(!(a=t.getElementById(o)))return n;if(a.id===o)return y.call(n,a),n;// Element context
}else // getElementById can match elements by name instead of ID
if(p&&(a=p.getElementById(o))&&Z.contains(t,a)&&a.id===o)return y.call(n,a),n}else if(u[2])return y.apply(n,t.getElementsByTagName(e)),n;else if((o=u[3])&&t.getElementsByClassName)return y.apply(n,t.getElementsByClassName(o)),n}// Take advantage of querySelectorAll
if(!L[e+" "]&&(!g||!g.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(f=e,p=t,1===m&&(F.test(e)||W.test(e))){for(// Expand context for sibling selectors
(p=V.test(e)&&ei(t.parentNode)||t)==t&&h.scope||((s=t.getAttribute("id"))?s=C.escapeSelector(s):t.setAttribute("id",s=x)),i=// Prefix every selector in the list
(l=eu(e)).length;i--;)l[i]=(s?"#"+s:":scope")+" "+el(l[i]);f=l.join(",")}try{return y.apply(n,p.querySelectorAll(f)),n}catch(t){L(e,!0)}finally{s===x&&t.removeAttribute("id")}}}// All others
return eh(e.replace(N,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];return function t(r,o){return e.push(r+" ")>n.cacheLength&&delete t[e.shift()],t[r+" "]=o}}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function et(e){return e[x]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function en(e){var t=c.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function er(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in t)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
!e!==t.isDisabled&&K(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function eo(e){return et(function(t){return t=+t,et(function(n,r){// Match elements found at the specified indexes
for(var o,i=e([],n.length,t),a=i.length;a--;)n[o=i[a]]&&(n[o]=!(r[o]=n[o]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function ei(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function ea(e){var t,r=e?e.ownerDocument||e:v;return r!=c&&9===r.nodeType&&r.documentElement&&(p=// Update global variables
(c=r).documentElement,d=!C.isXMLDoc(c),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
m=p.matches||p.webkitMatchesSelector||p.msMatchesSelector,p.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
v!=c&&(t=c.defaultView)&&t.top!==t&&t.addEventListener("unload",J),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
h.getById=en(function(e){return p.appendChild(e).id=C.expando,!c.getElementsByName||!c.getElementsByName(C.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
h.disconnectedMatch=en(function(e){return m.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
h.scope=en(function(){return c.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
h.cssHas=en(function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),h.getById?(n.filter.ID=function(e){var t=e.replace(G,Q);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(G,Q);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n,r,o,i=t.getElementById(e);if(i){if(// Verify the id attribute
(n=i.getAttributeNode("id"))&&n.value===e)return[i];for(// Fall back on getElementsByName
o=t.getElementsByName(e),r=0;i=o[r++];)if((n=i.getAttributeNode("id"))&&n.value===e)return[i]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&d)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
g=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;p.appendChild(e).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+A+"*(?:value|"+O+")"),e.querySelectorAll("[id~="+x+"-]").length||g.push("~="),e.querySelectorAll("a#"+x+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll(":checked").length||g.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\["+A+"*name"+A+"*="+A+"*(?:''|\"\")")}),h.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
g.push(":has"),g=g.length&&new RegExp(g.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
H=function(e,t){// Flag for duplicate removal
if(e===t)return l=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!h.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===c||e.ownerDocument==v&&Z.contains(v,e)?-1:t===c||t.ownerDocument==v&&Z.contains(v,t)?1:a?u.call(a,e)-u.call(a,t):0:4&n?-1:1)}),c}// Add button/input type pseudos
for(t in Z.matches=function(e,t){return Z(e,null,null,t)},Z.matchesSelector=function(e,t){if(ea(e),d&&!L[t+" "]&&(!g||!g.test(t)))try{var n=m.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||h.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){L(t,!0)}return Z(t,c,null,[e]).length>0},Z.contains=function(e,t){return(e.ownerDocument||e)!=c&&ea(e),C.contains(e,t)},Z.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=c&&ea(e);var r=n.attrHandle[t.toLowerCase()],o=r&&f.call(n.attrHandle,t.toLowerCase())?r(e,t,!d):void 0;return void 0!==o?o:e.getAttribute(t)},Z.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */C.uniqueSort=function(e){var t,n=[],r=0,o=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
l=!h.sortStable,a=!h.sortStable&&i.call(e,0),D.call(e,H),l){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)j.call(e,n[r],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
a=null,e)},C.fn.uniqueSort=function(){return this.pushStack(C.uniqueSort(i.apply(this)))},(n=C.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:U,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(G,Q),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(G,Q),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||Z.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&Z.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return U.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&$.test(n)&&// Get excess from tokenize (recursively)
(t=eu(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(G,Q).toLowerCase();return"*"===e?function(){return!0}:function(e){return E(e,t)}},CLASS:function(e){var t=T[e+" "];return t||(t=RegExp("(^|"+A+")"+e+"("+A+"|$)"),T(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var o=Z.attr(r,e);return null==o?"!="===t:!t||((o+="","="===t)?o===n:"!="===t?o!==n:"^="===t?n&&0===o.indexOf(n):"*="===t?n&&o.indexOf(n)>-1:"$="===t?n&&o.slice(-n.length)===n:"~="===t?(" "+o.replace(I," ")+" ").indexOf(n)>-1:"|="===t&&(o===n||o.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h=i!==a?"nextSibling":"previousSibling",g=t.parentNode,m=s&&t.nodeName.toLowerCase(),v=!u&&!s,y=!1;if(g){// :(first|last|only)-(child|of-type)
if(i){for(;h;){for(f=t;f=f[h];)if(s?E(f,m):1===f.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
d=h="only"===e&&!d&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(d=[a?g.firstChild:g.lastChild],a&&v){for(y=(p=(l=// Seek `elem` from a previously-cached index
(c=g[x]||(g[x]={}))[e]||[])[0]===b&&l[1])&&l[2],f=p&&g.childNodes[p];f=++p&&f&&f[h]||// Fallback to seeking `elem` from the start
(y=p=0)||d.pop();)if(1===f.nodeType&&++y&&f===t){c[e]=[b,p,y];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(v&&(y=p=(l=(c=t[x]||(t[x]={}))[e]||[])[0]===b&&l[1]),!1===y)// Use the same loop as above to seek `elem` from the start
for(;(f=++p&&f&&f[h]||(y=p=0)||d.pop())&&(!((s?E(f,m):1===f.nodeType)&&++y)||(v&&((c=f[x]||(f[x]={}))[e]=[b,y]),f!==t)););return(// Incorporate the offset, then check against cycle size
(y-=o)===r||y%r==0&&y/r>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var r,o=n.pseudos[e]||n.setFilters[e.toLowerCase()]||Z.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
o[x]?o(t):o.length>1?(r=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var r,i=o(e,t),a=i.length;a--;)r=u.call(e,i[a]),e[r]=!(n[r]=i[a])}):function(e){return o(e,0,r)}):o)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=ed(e.replace(N,"$1"));return r[x]?et(function(e,t,n,o){// Match elements unmatched by `matcher`
for(var i,a=r(e,null,o,[]),s=e.length;s--;)(i=a[s])&&(e[s]=!(t[s]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return Z(e,t).length>0}}),contains:et(function(e){return e=e.replace(G,Q),function(t){return(t.textContent||C.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return B.test(e||"")||Z.error("unsupported lang: "+e),e=e.replace(G,Q).toLowerCase(),function(t){var n;do if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return c.activeElement}catch(e){}}()&&c.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:er(!1),disabled:er(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return E(e,"input")&&!!e.checked||E(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return X.test(e.nodeName)},input:function(e){return z.test(e.nodeName)},button:function(e){return E(e,"input")&&"button"===e.type||E(e,"button")},text:function(e){var t;return E(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:eo(function(){return[0]}),last:eo(function(e,t){return[t-1]}),eq:eo(function(e,t,n){return[n<0?n+t:n]}),even:eo(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:eo(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:eo(function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:eo(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return E(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(E(t,"input")||E(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function es(){}function eu(e,t){var r,o,i,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=n.preFilter;s;){// Filters
for(a in(!r||(o=_.exec(s)))&&(o&&(s=s.slice(o[0].length)||s),u.push(i=[])),r=!1,(o=W.exec(s))&&(r=o.shift(),i.push({value:r,// Cast descendant combinators to space
type:o[0].replace(N," ")}),s=s.slice(r.length)),n.filter)(o=U[a].exec(s))&&(!l[a]||(o=l[a](o)))&&(r=o.shift(),i.push({value:r,type:a,matches:o}),s=s.slice(r.length));if(!r)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?s.length:s?Z.error(e):k(e,u).slice(0))}function el(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ec(e,t,n){var r=t.dir,o=t.next,i=o||r,a=n&&"parentNode"===i,s=w++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,o);return!1}:function(t,n,u){var l,c,f=[b,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a){if(c=t[x]||(t[x]={}),o&&E(t,o))t=t[r]||t;else{if((l=c[i])&&l[0]===b&&l[1]===s)return f[2]=l[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
c[i]=f,f[2]=e(t,n,u))return!0}}return!1}}function ef(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function ep(e,t,n,r,o){for(var i,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(i=e[s])&&(!n||n(i,r,o))&&(a.push(i),l&&t.push(s));return a}function ed(e,t/* Internal Use Only */){var r,i,a,s,l=[],f=[],p=q[e+" "];if(!p){for(t||(t=eu(e)),s=t.length;s--;)(p=function e(t){for(var r,i,a,s=t.length,l=n.relative[t[0].type],c=l||n.relative[" "],f=l?1:0,p=ec(function(e){return e===r},c,!0),d=ec(function(e){return u.call(r,e)>-1},c,!0),h=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var i=!l&&(n||t!=o)||((r=t).nodeType?p(e,t,n):d(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
r=null,i)}];f<s;f++)if(i=n.relative[t[f].type])h=[ec(ef(h),i)];else{// Return special upon seeing a positional matcher
if((i=n.filter[t[f].type].apply(null,t[f].matches))[x]){for(// Find the next relative operator (if any) for proper handling
a=++f;a<s&&!n.relative[t[a].type];a++);return function e(t,n,r,o,i,a){return o&&!o[x]&&(o=e(o)),i&&!i[x]&&(i=e(i,a)),et(function(e,a,s,l){var c,f,p,d,h=[],g=[],m=a.length,v=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)Z(e,t[r],n);return n}(n||"*",s.nodeType?[s]:s,[]),x=t&&(e||!n)?ep(v,h,t,s,l):v;// Apply postFilter
if(r?// Find primary matches
r(x,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
d=i||(e?t:m||o)?[]:a,s,l):d=x,o)for(c=ep(d,g),o(c,[],s,l),// Un-match failing elements by moving them back to matcherIn
f=c.length;f--;)(p=c[f])&&(d[g[f]]=!(x[g[f]]=p));if(e){if(i||t){if(i){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],f=d.length;f--;)(p=d[f])&&c.push(x[f]=p);i(null,d=[],c,l)}for(// Move matched elements from seed to results to keep them synchronized
f=d.length;f--;)(p=d[f])&&(c=i?u.call(e,p):h[f])>-1&&(e[c]=!(a[c]=p))}}else d=ep(d===a?d.splice(m,d.length):d),i?i(null,a,d,l):y.apply(a,d)})}(f>1&&ef(h),f>1&&el(t.slice(0,f-1).concat({value:" "===t[f-2].type?"*":""})).replace(N,"$1"),i,f<a&&e(t.slice(f,a)),a<s&&e(t=t.slice(a)),a<s&&el(t))}h.push(i)}return ef(h)}(t[s]))[x]?l.push(p):f.push(p);// Save selector and tokenization
// Cache the compiled function
(p=q(e,(r=l.length>0,i=f.length>0,a=function(e,t,a,s,u){var p,h,g,m=0,v="0",x=e&&[],w=[],T=o,k=e||i&&n.find.TAG("*",u),E=b+=null==T?1:Math.random()||.1,D=k.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(u&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(o=t==c||t||u);v!==D&&null!=(p=k[v]);v++){if(i&&p){for(h=0,t||p.ownerDocument==c||(ea(p),a=!d);g=f[h++];)if(g(p,t||c,a)){y.call(s,p);break}u&&(b=E)}// Track unmatched elements for set filters
r&&((p=!g&&p)&&m--,e&&x.push(p))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
m+=v,r&&v!==m){for(h=0;g=l[h++];)g(x,w,t,a);if(e){// Reintegrate element matches to eliminate the need for sorting
if(m>0)for(;v--;)x[v]||w[v]||(w[v]=S.call(s));// Discard index placeholder values to get only actual matches
w=ep(w)}// Add matches to results
y.apply(s,w),u&&!e&&w.length>0&&m+l.length>1&&C.uniqueSort(s)}return u&&(b=E,o=T),x},r?et(a):a))).selector=e}return p}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eh(e,t,r,o){var i,a,s,u,l,c="function"==typeof e&&e,f=!o&&eu(e=c.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(r=r||[],1===f.length){if(// Reduce context if the leading compound selector is an ID
(a=f[0]=f[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===t.nodeType&&d&&n.relative[a[1].type]){if(!(t=(n.find.ID(s.matches[0].replace(G,Q),t)||[])[0]))return r;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(// Fetch a seed set for right-to-left matching
i=U.needsContext.test(e)?0:a.length;// Abort if we hit a combinator
i--&&(s=a[i],!n.relative[u=s.type]);)if((l=n.find[u])&&(o=l(s.matches[0].replace(G,Q),V.test(a[0].type)&&ei(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
a.splice(i,1),!(e=o.length&&el(a)))return y.apply(r,o),r;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(c||ed(e,f))(o,t,!d,r,!t||V.test(e)&&ei(t.parentNode)||t),r)}es.prototype=n.filters=n.pseudos,n.setFilters=new es,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
h.sortStable=x.split("").sort(H).join("")===x,// Initialize against the default document
ea(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
h.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(c.createElement("fieldset"))}),C.find=Z,// Deprecated
C.expr[":"]=C.expr.pseudos,C.unique=C.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
Z.compile=ed,Z.select=eh,Z.setDocument=ea,Z.tokenize=eu,Z.escape=C.escapeSelector,Z.getText=C.text,Z.isXML=C.isXMLDoc,Z.selectors=C.expr,Z.support=C.support,Z.uniqueSort=C.uniqueSort;/* eslint-enable */}();var H=function(e,t,n){for(var r=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&C(e).is(n))break;r.push(e)}return r},O=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},M=C.expr.match.needsContext,P=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function R(e,t,n){return g(t)?C.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?C.grep(e,function(e){return e===t!==n}):"string"!=typeof t?C.grep(e,function(e){return u.call(t,e)>-1!==n}):C.filter(t,e,n)}C.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?C.find.matchesSelector(r,e)?[r]:[]:C.find.matches(e,C.grep(t,function(e){return 1===e.nodeType}))},C.fn.extend({find:function(e){var t,n,r=this.length,o=this;if("string"!=typeof e)return this.pushStack(C(e).filter(function(){for(t=0;t<r;t++)if(C.contains(o[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)C.find(e,o[t],n);return r>1?C.uniqueSort(n):n},filter:function(e){return this.pushStack(R(this,e||[],!1))},not:function(e){return this.pushStack(R(this,e||[],!0))},is:function(e){return!!R(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&M.test(e)?C(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var I,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
_=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(C.fn.init=function(e,t,n){var r,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||I,"string"==typeof e){// Match html or make sure no context is specified for #id
if((r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:_.exec(e))&&(r[1]||!t)){// HANDLE: $(html) -> $(array)
if(!r[1])return(o=v.getElementById(r[2]))&&(// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof C?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
C.merge(this,C.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),P.test(r[1])&&C.isPlainObject(t))for(r in t)g(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(C):C.makeArray(e,this)}).prototype=C.fn,// Initialize central reference
I=C(v);var W=/^(?:parents|prev(?:Until|All))/,F={children:!0,contents:!0,next:!0,prev:!0};function $(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}C.fn.extend({has:function(e){var t=C(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(C.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,o=this.length,i=[],a="string"!=typeof e&&C(e);// Positional selectors never match, since there's no _selection_ context
if(!M.test(e)){for(;r<o;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&C.find.matchesSelector(n,e))){i.push(n);break}}return this.pushStack(i.length>1?C.uniqueSort(i):i)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?u.call(C(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),C.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return H(e,"parentNode")},parentsUntil:function(e,t,n){return H(e,"parentNode",n)},next:function(e){return $(e,"nextSibling")},prev:function(e){return $(e,"previousSibling")},nextAll:function(e){return H(e,"nextSibling")},prevAll:function(e){return H(e,"previousSibling")},nextUntil:function(e,t,n){return H(e,"nextSibling",n)},prevUntil:function(e,t,n){return H(e,"previousSibling",n)},siblings:function(e){return O((e.parentNode||{}).firstChild,e)},children:function(e){return O(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
o(e.contentDocument)?e.contentDocument:(E(e,"template")&&(e=e.content||e),C.merge([],e.childNodes))}},function(e,t){C.fn[e]=function(n,r){var o=C.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(o=C.filter(r,o)),this.length>1&&(F[e]||C.uniqueSort(o),W.test(e)&&o.reverse()),this.pushStack(o)}});var B=/[^\x20\t\r\n\f]+/g;function U(e){return e}function z(e){throw e}function X(e,t,n,r){var o;try{// Check for promise aspect first to privilege synchronous behavior
e&&g(o=e.promise)?o.call(e).done(t).fail(n):e&&g(o=e.then)?o.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(r));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */C.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},C.each(t.match(B)||[],function(e,t){n[t]=!0}),n):C.extend({},e);var t,n,r,o,i,a,s=[],u=[],l=-1,c=function(){for(// Enforce single-firing
a=a||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
i=r=!0;u.length;l=-1)for(o=u.shift();++l<s.length;)!1===s[l].apply(o[0],o[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
l=s.length,o=!1);e.memory||(o=!1),r=!1,a&&(s=o?[]:"")},f={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(o&&!r&&(l=s.length-1,u.push(o)),function t(n){C.each(n,function(n,r){g(r)?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==b(r)&&t(r)})}(arguments),o&&!r&&c()),this},// Remove a callback from the list
remove:function(){return C.each(arguments,function(e,t){for(var n;(n=C.inArray(t,s,n))>-1;)s.splice(n,1),n<=l&&l--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?C.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=u=[],s=o="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=u=[],o||r||(s=o=""),this},locked:function(){return!!a},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return f},C.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],r="pending",o={state:function(){return r},always:function(){return i.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return C.Deferred(function(t){C.each(n,function(n,r){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=g(e[r[4]])&&e[r[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
i[r[1]](function(){var e=o&&o.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,r,o){var i=0;function a(t,n,r,o){return function(){var s=this,u=arguments,l=function(){var e,l;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<i)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=r.apply(s,u))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
g(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?o?l.call(e,a(i,n,U,o),a(i,n,z,o)):(// ...and disregard older resolution values
i++,l.call(e,a(i,n,U,o),a(i,n,z,o),a(i,n,U,n.notifyWith))):(r!==U&&(s=void 0,u=[e]),// Process the value(s)
// Default process is resolve
(o||n.resolveWith)(s,u))}},c=o?l:function(){try{l()}catch(e){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(e,c.error),t+1>=i&&(r!==z&&(s=void 0,u=[e]),n.rejectWith(s,u))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?c():(C.Deferred.getErrorHook?c.error=C.Deferred.getErrorHook():C.Deferred.getStackHook&&(c.error=C.Deferred.getStackHook()),e.setTimeout(c))}}return C.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(a(0,e,g(o)?o:U,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(a(0,e,g(t)?t:U)),// rejected_handlers.add( ... )
n[2][3].add(a(0,e,g(r)?r:z))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?C.extend(e,o):o}},i={};// All done!
return(// Add list-specific methods
C.each(n,function(e,t){var a=t[2],s=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
o[t[1]]=a.add,s&&a.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=s},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
i[t[0]]=function(){return i[t[0]+"With"](this===i?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
i[t[0]+"With"]=a.fireWith}),// Make the deferred a promise
o.promise(i),t&&t.call(i,i),i)},// Deferred helper
when:function(e){var t=arguments.length,n=t,r=Array(n),o=i.call(arguments),a=C.Deferred(),s=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?i.call(arguments):n,--t||a.resolveWith(r,o)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(X(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(o[n]&&o[n].then)))return a.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)X(o[n],s(n),a.reject);return a.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Y=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
C.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&Y.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},C.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var V=C.Deferred();// The ready event handler and self cleanup method
function G(){v.removeEventListener("DOMContentLoaded",G),e.removeEventListener("load",G),C.ready()}C.fn.ready=function(e){return V.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){C.readyException(e)}),this},C.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--C.readyWait:C.isReady)&&(// Remember that the DOM is ready
C.isReady=!0,!0!==e&&--C.readyWait>0||// If there are functions bound, to execute
V.resolveWith(v,[C]))}}),C.ready.then=V.then,"complete"!==v.readyState&&("loading"===v.readyState||v.documentElement.doScroll)?(// Use the handy event callback
v.addEventListener("DOMContentLoaded",G),// A fallback to window.onload, that will always work
e.addEventListener("load",G)):e.setTimeout(C.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Q=function(e,t,n,r,o,i,a){var s=0,u=e.length,l=null==n;// Sets many values
if("object"===b(n))for(s in o=!0,n)Q(e,t,s,n[s],!0,i,a);else if(void 0!==r&&(o=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(C(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return o?e:l?t.call(e):u?t(e[0],n):i},J=/^-ms-/,K=/-([a-z])/g;// Used by camelCase as callback to replace()
function Z(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ee(e){return e.replace(J,"ms-").replace(K,Z)}var et=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function en(){this.expando=C.expando+en.uid++}en.uid=1,en.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},et(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,o=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)o[ee(t)]=n;else for(r in t)o[ee(r)]=t[r];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ee(t)]},access:function(e,t,n){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t))},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t)for(n=(// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(ee):((t=ee(t))in r)?[t]:t.match(B)||[]).length;n--;)delete r[t[n]];// Remove the expando if there's no more data
(void 0===t||C.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!C.isEmptyObject(t)}};var er=new en,eo=new en,ei=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ea=/[A-Z]/g;function es(e,t,n){var r,o;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(ea,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{o=n,n="true"===o||"false"!==o&&("null"===o?null:o===+o+""?+o:ei.test(o)?JSON.parse(o):o)}catch(e){}// Make sure we set the data so it isn't changed later
eo.set(e,t,n)}else n=void 0}return n}C.extend({hasData:function(e){return eo.hasData(e)||er.hasData(e)},data:function(e,t,n){return eo.access(e,t,n)},removeData:function(e,t){eo.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return er.access(e,t,n)},_removeData:function(e,t){er.remove(e,t)}}),C.fn.extend({data:function(e,t){var n,r,o,i=this[0],a=i&&i.attributes;// Gets all values
if(void 0===e){if(this.length&&(o=eo.get(i),1===i.nodeType&&!er.get(i,"hasDataAttrs"))){for(n=a.length;n--;)// The attrs elements can be null (trac-14894)
a[n]&&0===(r=a[n].name).indexOf("data-")&&es(i,r=ee(r.slice(5)),o[r]);er.set(i,"hasDataAttrs",!0)}return o}return(// Sets multiple values
"object"==typeof e?this.each(function(){eo.set(this,e)}):Q(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(i&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=eo.get(i,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=es(i,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
eo.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){eo.remove(this,e)})}}),C.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=er.get(e,t),n&&(!r||Array.isArray(n)?r=er.access(e,t,C.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=C.queue(e,t),r=n.length,o=n.shift(),i=C._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),r--),o&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete i.stop,o.call(e,function(){C.dequeue(e,t)},i)),!r&&i&&i.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return er.get(e,n)||er.access(e,n,{empty:C.Callbacks("once memory").add(function(){er.remove(e,[t+"queue",n])})})}}),C.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?C.queue(this[0],e):void 0===t?this:this.each(function(){var n=C.queue(this,e,t);// Ensure a hooks for this queue
C._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&C.dequeue(this,e)})},dequeue:function(e){return this.each(function(){C.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,o=C.Deferred(),i=this,a=this.length,s=function(){--r||o.resolveWith(i,[i])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=er.get(i[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),o.promise(t)}});var eu=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,el=RegExp("^(?:([+-])=|)("+eu+")([a-z%]*)$","i"),ec=["Top","Right","Bottom","Left"],ef=v.documentElement,ep=function(e){return C.contains(e.ownerDocument,e)},ed={composed:!0};ef.getRootNode&&(ep=function(e){return C.contains(e.ownerDocument,e)||e.getRootNode(ed)===e.ownerDocument});var eh=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ep(e)&&"none"===C.css(e,"display")};function eg(e,t,n,r){var o,i,a=20,s=r?function(){return r.cur()}:function(){return C.css(e,t,"")},u=s(),l=n&&n[3]||(C.cssNumber[t]?"":"px"),c=e.nodeType&&(C.cssNumber[t]||"px"!==l&&+u)&&el.exec(C.css(e,t));if(c&&c[3]!==l){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
u/=2,// Trust units reported by jQuery.css
l=l||c[3],// Iteratively approximate from a nonzero starting point
c=+u||1;a--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
C.style(e,t,c+l),(1-i)*(1-(i=s()/u||.5))<=0&&(a=0),c/=i;c*=2,C.style(e,t,c+l),// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+u||0,// Apply relative offset (+=/-=) if specified
o=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=o)),o}var em={};function ev(e,t){// Determine new display value for elements that need to change
for(var n,r,o=[],i=0,a=e.length;i<a;i++)(r=e[i]).style&&(n=r.style.display,t?("none"!==n||(o[i]=er.get(r,"display")||null,o[i]||(r.style.display="")),""===r.style.display&&eh(r)&&(o[i]=function(e){var t,n=e.ownerDocument,r=e.nodeName,o=em[r];return o||(t=n.body.appendChild(n.createElement(r)),o=C.css(t,"display"),t.parentNode.removeChild(t),"none"===o&&(o="block"),em[r]=o),o}(r))):"none"!==n&&(o[i]="none",// Remember what we're overwriting
er.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(i=0;i<a;i++)null!=o[i]&&(e[i].style.display=o[i]);return e}C.fn.extend({show:function(){return ev(this,!0)},hide:function(){return ev(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eh(this)?C(this).show():C(this).hide()})}});var ey=/^(?:checkbox|radio)$/i,ex=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,eb=/^$|^module$|\/(?:java|ecma)script/i;e4=v.createDocumentFragment().appendChild(v.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e5=v.createElement("input")).setAttribute("type","radio"),e5.setAttribute("checked","checked"),e5.setAttribute("name","t"),e4.appendChild(e5),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
h.checkClone=e4.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e4.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e4.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e4.innerHTML="<option></option>",h.option=!!e4.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ew={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function eT(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&E(e,t))?C.merge([e],n):n}// Mark scripts as having already been evaluated
function eC(e,t){for(var n=0,r=e.length;n<r;n++)er.set(e[n],"globalEval",!t||er.get(t[n],"globalEval"))}ew.tbody=ew.tfoot=ew.colgroup=ew.caption=ew.thead,ew.th=ew.td,h.option||(ew.optgroup=ew.option=[1,"<select multiple='multiple'>","</select>"]);var ek=/<|&#?\w+;/;function eE(e,t,n,r,o){for(var i,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if((i=e[p])||0===i){// Add nodes directly
if("object"===b(i))// push.apply(_, arraylike) throws on ancient WebKit
C.merge(f,i.nodeType?[i]:i);else if(ek.test(i)){for(a=a||c.appendChild(t.createElement("div")),s=ew[(ex.exec(i)||["",""])[1].toLowerCase()]||ew._default,a.innerHTML=s[1]+C.htmlPrefilter(i)+s[2],// Descend through wrappers to the right content
l=s[0];l--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
C.merge(f,a.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(a=c.firstChild).textContent=""}else f.push(t.createTextNode(i))}for(// Remove wrapper from fragment
c.textContent="",p=0;i=f[p++];){// Skip elements already in the context collection (trac-4087)
if(r&&C.inArray(i,r)>-1){o&&o.push(i);continue}// Capture executables
if(u=ep(i),// Append to fragment
a=eT(c.appendChild(i),"script"),u&&eC(a),n)for(l=0;i=a[l++];)eb.test(i.type||"")&&n.push(i)}return c}var eS=/^([^.]*)(?:\.(.+)|)/;function eD(){return!0}function ej(){return!1}function eA(e,t,n,r,o,i){var a,s;// Types can be a map of types/handlers
if("object"==typeof t){for(s in"string"!=typeof n&&(// ( types-Object, data )
r=r||n,n=void 0),t)eA(e,s,n,r,t[s],i);return e}if(null==r&&null==o?(// ( types, fn )
o=n,r=n=void 0):null==o&&("string"==typeof n?(// ( types, selector, fn )
o=r,r=void 0):(// ( types, data, fn )
o=r,r=n,n=void 0)),!1===o)o=ej;else if(!o)return e;return 1===i&&(a=o,// Use same guid so caller can remove using origFn
(o=function(e){return(// Can use an empty set, since event contains the info
C().off(e),a.apply(this,arguments))}).guid=a.guid||(a.guid=C.guid++)),e.each(function(){C.event.add(this,t,o,r,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eN(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===er.get(e,t)&&C.event.add(e,t,eD);return}// Register the controller as a special universal handler for all event namespaces
er.set(e,t,!1),C.event.add(e,t,{namespace:!1,handler:function(e){var n,r=er.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(r)(C.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
r=i.call(arguments),er.set(this,t,r),// Trigger the native event and capture its result
this[t](),n=er.get(this,t),er.set(this,t,!1),r!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else r&&(// ...and capture the result
er.set(this,t,C.event.trigger(r[0],r.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=eD)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */C.event={global:{},add:function(e,t,n,r,o){var i,a,s,u,l,c,f,p,d,h,g,m=er.get(e);// Only attach events to objects that accept data
if(et(e))for(n.handler&&(n=(i=n).handler,o=i.selector),o&&C.find.matchesSelector(ef,o),n.guid||(n.guid=C.guid++),(u=m.events)||(u=m.events=Object.create(null)),(a=m.handle)||(a=m.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return C.event.triggered!==t.type?C.event.dispatch.apply(e,arguments):void 0}),l=// Handle multiple events separated by a space
(t=(t||"").match(B)||[""]).length;l--;)// There *must* be a type, no attaching namespace-only handlers
d=g=(s=eS.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(// If event changes its type, use the special event handlers for the changed type
f=C.event.special[d]||{},// If selector defined, determine special event api type, otherwise given type
d=(o?f.delegateType:f.bindType)||d,// Update special based on newly reset type
f=C.event.special[d]||{},// handleObj is passed to all event handlers
c=C.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:o,needsContext:o&&C.expr.match.needsContext.test(o),namespace:h.join(".")},i),(p=u[d])||((p=u[d]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,c):p.push(c),// Keep track of which events have ever been used, for event optimization
C.event.global[d]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,r,o){var i,a,s,u,l,c,f,p,d,h,g,m=er.hasData(e)&&er.get(e);if(m&&(u=m.events)){for(l=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(B)||[""]).length;l--;){// Unbind all events (on this namespace, if provided) for the element
if(d=g=(s=eS.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d){for(d in u)C.event.remove(e,d+t[l],n,r,!0);continue}for(f=C.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=i=p.length;i--;)c=p[i],(o||g===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(p.splice(i,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,m.handle)||C.removeEvent(e,d,m.handle),delete u[d])}C.isEmptyObject(u)&&er.remove(e,"handle events")}},dispatch:function(e){var t,n,r,o,i,a,s=Array(arguments.length),u=C.event.fix(e),l=(er.get(this,"events")||Object.create(null))[u.type]||[],c=C.event.special[u.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=u;t<arguments.length;t++)s[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(// Determine handlers
a=C.event.handlers.call(this,u,l),// Run delegates first; they may want to stop propagation beneath us
t=0;(o=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=o.elem,n=0;(i=o.handlers[n++])&&!u.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!u.rnamespace||!1===i.namespace||u.rnamespace.test(i.namespace))&&(u.handleObj=i,u.data=i.data,void 0!==(r=((C.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,o,i,a,s=[],u=t.delegateCount,l=e.target;// Find delegate handlers
if(u&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;l!==this;l=l.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===l.nodeType&&!("click"===e.type&&!0===l.disabled)){for(n=0,i=[],a={};n<u;n++)void 0===a[// Don't conflict with Object.prototype properties (trac-13203)
o=(r=t[n]).selector+" "]&&(a[o]=r.needsContext?C(o,this).index(l)>-1:C.find(o,this,null,[l]).length),a[o]&&i.push(r);i.length&&s.push({elem:l,handlers:i})}}return(// Add the remaining (directly-bound) handlers
l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s)},addProp:function(e,t){Object.defineProperty(C.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[C.expando]?e:new C.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return ey.test(t.type)&&t.click&&E(t,"input")&&eN(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return ey.test(t.type)&&t.click&&E(t,"input")&&eN(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return ey.test(t.type)&&t.click&&E(t,"input")&&er.get(t,"click")||E(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},C.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},C.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof C.Event))return new C.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?eD:ej,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&C.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[C.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
C.Event.prototype={constructor:C.Event,isDefaultPrevented:ej,isPropagationStopped:ej,isImmediatePropagationStopped:ej,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=eD,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=eD,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=eD,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(v.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=er.get(this,"handle"),r=C.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,// First, handle focusin/focusout
n(e),r.target===r.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(r)}else // while someone wants focusin/focusout.
C.event.simulate(t,e.target,C.event.fix(e))}C.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var r;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eN(this,e,!0),!v.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(r=er.get(this,t))||this.addEventListener(t,n),er.set(this,t,(r||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eN(this,e),!0)},teardown:function(){var e;if(!v.documentMode)return!1;(e=er.get(this,t)-1)?er.set(this,t,e):(this.removeEventListener(t,n),er.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return er.get(t.target,e)},delegateType:t},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
C.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var r=this.ownerDocument||this.document||this,o=v.documentMode?this:r,i=er.get(o,t);i||(v.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),er.set(o,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,o=v.documentMode?this:r,i=er.get(o,t)-1;i?er.set(o,t,i):(v.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),er.remove(o,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){C.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,o=e.handleObj;return r&&(r===this||C.contains(this,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),C.fn.extend({on:function(e,t,n,r){return eA(this,e,t,n,r)},one:function(e,t,n,r){return eA(this,e,t,n,r,1)},off:function(e,t,n){var r,o;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
r=e.handleObj,C(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=ej),this.each(function(){C.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eq=/<script|<style|<link/i,eL=/checked\s*(?:[^=]|=\s*.checked.)/i,eH=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eO(e,t){return E(e,"table")&&E(11!==t.nodeType?t:t.firstChild,"tr")&&C(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eM(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eP(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eR(e,t){var n,r,o,i,a,s;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(er.hasData(e)&&(s=er.get(e).events))for(o in er.remove(t,"handle events"),s)for(n=0,r=s[o].length;n<r;n++)C.event.add(t,o,s[o][n]);// 2. Copy user data
eo.hasData(e)&&(i=eo.access(e),a=C.extend({},i),eo.set(t,a))}}function eI(e,t,n,r){// Flatten any nested arrays
t=a(t);var o,i,s,u,l,c,f=0,p=e.length,d=p-1,m=t[0],v=g(m);// We can't cloneNode fragments that contain checked, in WebKit
if(v||p>1&&"string"==typeof m&&!h.checkClone&&eL.test(m))return e.each(function(o){var i=e.eq(o);v&&(t[0]=m.call(this,o,i.html())),eI(i,t,n,r)});if(p&&(i=(o=eE(t,e[0].ownerDocument,!1,e,r)).firstChild,1===o.childNodes.length&&(o=i),i||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(u=(s=C.map(eT(o,"script"),eM)).length;f<p;f++)l=o,f!==d&&(l=C.clone(l,!0,!0),u&&// push.apply(_, arraylike) throws on ancient WebKit
C.merge(s,eT(l,"script"))),n.call(e[f],l,f);if(u)// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,// Re-enable scripts
C.map(s,eP),f=0;f<u;f++)l=s[f],eb.test(l.type||"")&&!er.access(l,"globalEval")&&C.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?C._evalUrl&&!l.noModule&&C._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
x(l.textContent.replace(eH,""),l,c))}return e}function e_(e,t,n){for(var r,o=t?C.filter(t,e):e,i=0;null!=(r=o[i]);i++)n||1!==r.nodeType||C.cleanData(eT(r)),r.parentNode&&(n&&ep(r)&&eC(eT(r,"script")),r.parentNode.removeChild(r));return e}C.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,o,i,a,s=e.cloneNode(!0),u=ep(e);// Fix IE cloning issues
if(!h.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!C.isXMLDoc(e))for(r=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
a=eT(s),o=(i=eT(e)).length;r<o;r++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&ey.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(i[r],a[r]);// Copy the events from the original to the clone
if(t){if(n)for(r=0,i=i||eT(e),a=a||eT(s),o=i.length;r<o;r++)eR(i[r],a[r]);else eR(e,s)}// Return the cloned set
return(// Preserve script evaluation history
(a=eT(s,"script")).length>0&&eC(a,!u&&eT(e,"script")),s)},cleanData:function(e){for(var t,n,r,o=C.event.special,i=0;void 0!==(n=e[i]);i++)if(et(n)){if(t=n[er.expando]){if(t.events)for(r in t.events)o[r]?C.event.remove(n,r):C.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[er.expando]=void 0}n[eo.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[eo.expando]=void 0)}}}),C.fn.extend({detach:function(e){return e_(this,e,!0)},remove:function(e){return e_(this,e)},text:function(e){return Q(this,function(e){return void 0===e?C.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eI(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eO(this,e).appendChild(e)})},prepend:function(){return eI(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eO(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eI(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eI(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
C.cleanData(eT(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return C.clone(this,e,t)})},html:function(e){return Q(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eq.test(e)&&!ew[(ex.exec(e)||["",""])[1].toLowerCase()]){e=C.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(C.cleanData(eT(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eI(this,arguments,function(t){var n=this.parentNode;0>C.inArray(this,e)&&(C.cleanData(eT(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){C.fn[e]=function(e){for(var n,r=[],o=C(e),i=o.length-1,a=0;a<=i;a++)n=a===i?this:this.clone(!0),C(o[a])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
s.apply(r,n.get());return this.pushStack(r)}});var eW=RegExp("^("+eu+")(?!px)[a-z%]+$","i"),eF=/^--/,e$=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},eB=function(e,t,n){var r,o,i={};// Remember the old values, and insert the new ones
for(o in t)i[o]=e.style[o],e.style[o]=t[o];// Revert the old values
for(o in r=n.call(e),t)e.style[o]=i[o];return r},eU=RegExp(ec.join("|"),"i");function ez(e,t,n){var r,o,i,a,s=eF.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
u=e.style;return(n=n||e$(e))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
a=n.getPropertyValue(t)||n[t],s&&a&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(a=a.replace(N,"$1")||void 0),""!==a||ep(e)||(a=C.style(e,t)),!h.pixelBoxStyles()&&eW.test(a)&&eU.test(t)&&(// Remember the original values
r=u.width,o=u.minWidth,i=u.maxWidth,// Put in the new values to get a computed value out
u.minWidth=u.maxWidth=u.width=a,a=n.width,// Revert the changed values
u.width=r,u.minWidth=o,u.maxWidth=i)),void 0!==a?// IE returns zIndex value as an integer.
a+"":a}function eX(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ef.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
u=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
c.style.right="60%",a=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
o=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
c.style.position="absolute",i=12===n(c.offsetWidth/3),ef.removeChild(l),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
c=null}}function n(e){return Math.round(parseFloat(e))}var r,o,i,a,s,u,l=v.createElement("div"),c=v.createElement("div");// Finish early in limited (non-browser) environments
c.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,C.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),i},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,r,o;return null==s&&(t=v.createElement("table"),n=v.createElement("tr"),r=v.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",r.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
r.style.display="block",ef.appendChild(t).appendChild(n).appendChild(r),s=parseInt((o=e.getComputedStyle(n)).height,10)+parseInt(o.borderTopWidth,10)+parseInt(o.borderBottomWidth,10)===n.offsetHeight,ef.removeChild(t)),s}}))}();var eY=["Webkit","Moz","ms"],eV=v.createElement("div").style,eG={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eQ(e){return C.cssProps[e]||eG[e]||(e in eV?e:eG[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eY.length;n--;)if((e=eY[n]+t)in eV)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eJ=/^(none|table(?!-c[ea]).+)/,eK={position:"absolute",visibility:"hidden",display:"block"},eZ={letterSpacing:"0",fontWeight:"400"};function e0(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var r=el.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function e1(e,t,n,r,o,i){var a="width"===t?1:0,s=0,u=0,l=0;// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=C.css(e,n+ec[a],!0,o)),r?("content"===n&&(u-=C.css(e,"padding"+ec[a],!0,o)),"margin"!==n&&(u-=C.css(e,"border"+ec[a]+"Width",!0,o))):(// Add padding
u+=C.css(e,"padding"+ec[a],!0,o),"padding"!==n?u+=C.css(e,"border"+ec[a]+"Width",!0,o):s+=C.css(e,"border"+ec[a]+"Width",!0,o));return!r&&i>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-i-u-s-.5))||0),u+l}function e2(e,t,n){// Start with computed style
var r=e$(e),o=(!h.boxSizingReliable()||n)&&"border-box"===C.css(e,"boxSizing",!1,r),i=o,a=ez(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eW.test(a)){if(!n)return a;a="auto"}// Adjust for the element's box model
return(!h.boxSizingReliable()&&o||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!h.reliableTrDimensions()&&E(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===a||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(a)&&"inline"===C.css(e,"display",!1,r))&&// Make sure the element is visible & connected
e.getClientRects().length&&(o="border-box"===C.css(e,"boxSizing",!1,r),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(i=s in e)&&(a=e[s])),// Normalize "" and auto
(a=parseFloat(a)||0)+e1(e,t,n||(o?"border":"content"),i,r,a)+"px"}function e3(e,t,n,r,o){return new e3.prototype.init(e,t,n,r,o)}C.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=ez(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,r){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var o,i,a,s=ee(t),u=eF.test(t),l=e.style;// Check if we're setting a value
if(u||(t=eQ(s)),// Gets hook for the prefixed version, then unprefixed version
a=C.cssHooks[t]||C.cssHooks[s],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(o=a.get(e,!1,r))?o:l[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(i=typeof n)&&(o=el.exec(n))&&o[1]&&(n=eg(e,t,o),// Fixes bug trac-9237
i="number"),null!=n&&n==n&&("number"!==i||u||(n+=o&&o[3]||(C.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var o,i,a,s=ee(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eF.test(t)||(t=eQ(s)),// Try prefixed name followed by the unprefixed name
(a=C.cssHooks[t]||C.cssHooks[s])&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=ez(e,t,r)),"normal"===o&&t in eZ&&(o=eZ[t]),""===n||n)?(i=parseFloat(o),!0===n||isFinite(i)?i||0:o):o)}}),C.each(["height","width"],function(e,t){C.cssHooks[t]={get:function(e,n,r){if(n)// but it must have a current display style that would benefit
return!eJ.test(C.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e2(e,t,r):eB(e,eK,function(){return e2(e,t,r)})},set:function(e,n,r){var o,i=e$(e),// to avoid forcing a reflow.
a=!h.scrollboxSize()&&"absolute"===i.position,s=(a||r)&&"border-box"===C.css(e,"boxSizing",!1,i),u=r?e1(e,t,r,s,i):0;return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(i[t])-e1(e,t,"border",!1,i)-.5)),u&&(o=el.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=C.css(e,t)),e0(e,n,u)}}}),C.cssHooks.marginLeft=eX(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(ez(e,"marginLeft"))||e.getBoundingClientRect().left-eB(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
C.each({margin:"",padding:"",border:"Width"},function(e,t){C.cssHooks[e+t]={expand:function(n){for(var r=0,o={},i="string"==typeof n?n.split(" "):[n];r<4;r++)o[e+ec[r]+t]=i[r]||i[r-2]||i[0];return o}},"margin"!==e&&(C.cssHooks[e+t].set=e0)}),C.fn.extend({css:function(e,t){return Q(this,function(e,t,n){var r,o,i={},a=0;if(Array.isArray(t)){for(r=e$(e),o=t.length;a<o;a++)i[t[a]]=C.css(e,t[a],!1,r);return i}return void 0!==n?C.style(e,t,n):C.css(e,t)},e,t,arguments.length>1)}}),C.Tween=e3,e3.prototype={constructor:e3,init:function(e,t,n,r,o,i){this.elem=e,this.prop=n,this.easing=o||C.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=i||(C.cssNumber[n]?"":"px")},cur:function(){var e=e3.propHooks[this.prop];return e&&e.get?e.get(this):e3.propHooks._default.get(this)},run:function(e){var t,n=e3.propHooks[this.prop];return this.options.duration?this.pos=t=C.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e3.propHooks._default.set(this),this}},e3.prototype.init.prototype=e3.prototype,e3.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=C.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
C.fx.step[e.prop]?C.fx.step[e.prop](e):1===e.elem.nodeType&&(C.cssHooks[e.prop]||null!=e.elem.style[eQ(e.prop)])?C.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e3.propHooks.scrollTop=e3.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},C.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},C.fx=e3.prototype.init,// Back compat <1.8 extension point
C.fx.step={};var e4,e5,e6,e9,e8=/^(?:toggle|show|hide)$/,e7=/queueHooks$/;// Animations created synchronously will run synchronously
function te(){return e.setTimeout(function(){e6=void 0}),e6=Date.now()}// Generate parameters to create a standard animation
function tt(e,t){var n,r=0,o={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)o["margin"+(n=ec[r])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function tn(e,t,n){for(var r,o=(Animation.tweeners[t]||[]).concat(Animation.tweeners["*"]),i=0,a=o.length;i<a;i++)if(r=o[i].call(n,t,e))return r}function Animation(e,t,n){var r,o,i=0,a=Animation.prefilters.length,s=C.Deferred().always(function(){// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(o)return!1;for(var t=e6||te(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),i=0,a=l.tweens.length;i<a;i++)l.tweens[i].run(r);return(// If there's more to do, yield
(s.notifyWith(e,[l,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[l,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(e,[l]),!1))},l=s.promise({elem:e,props:C.extend({},t),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},n),originalProperties:t,originalOptions:n,startTime:e6||te(),duration:n.duration,tweens:[],createTween:function(t,n){var r=C.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,// otherwise we skip this part
r=t?l.tweens.length:0;if(o)return this;for(o=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,o,i,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(o=t[r=ee(n)],Array.isArray(i=e[n])&&(o=i[1],i=e[n]=i[0]),n!==r&&(e[r]=i,delete e[n]),(a=C.cssHooks[r])&&("expand"in a))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in i=a.expand(i),delete e[r],i)(n in e)||(e[n]=i[n],t[n]=o);else t[r]=o}(c,l.opts.specialEasing);i<a;i++)if(r=Animation.prefilters[i].call(l,e,c,l.opts))return g(r.stop)&&(C._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return C.map(c,tn,l),g(l.opts.start)&&l.opts.start.call(e,l),// Attach callbacks from options
l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),C.fx.timer(C.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}C.Animation=C.extend(Animation,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return eg(n.elem,e,el.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(B);for(var n,r=0,o=e.length;r<o;r++)n=e[r],Animation.tweeners[n]=Animation.tweeners[n]||[],Animation.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,o,i,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&eh(e),m=er.get(e,"fxshow");// Detect show/hide animations
for(r in n.queue||(null==(a=C._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,C.queue(e,"fx").length||a.empty.fire()})})),t)if(o=t[r],e8.test(o)){if(delete t[r],i=i||"toggle"===o,o===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!m||void 0===m[r])continue;g=!0}d[r]=m&&m[r]||C.style(e,r)}if(!(!// Bail out if this is a no-op like .hide().hide()
(u=!C.isEmptyObject(t))&&C.isEmptyObject(d)))for(r in f&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(l=m&&m.display)&&(l=er.get(e,"display")),"none"===(c=C.css(e,"display"))&&(l?c=l:(// Get nonempty value(s) by temporarily forcing visibility
ev([e],!0),l=e.style.display||l,c=C.css(e,"display"),ev([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===C.css(e,"float")&&(u||(p.done(function(){h.display=l}),null!=l||(l="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
u=!1,d)u||(m?"hidden"in m&&(g=m.hidden):m=er.access(e,"fxshow",{display:l}),i&&(m.hidden=!g),g&&ev([e],!0),/* eslint-disable no-loop-func */p.done(function(){for(r in g||ev([e]),er.remove(e,"fxshow"),d)C.style(e,r,d[r])})),// Per-property setup
u=tn(g?m[r]:0,r,p),r in m||(m[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?Animation.prefilters.unshift(e):Animation.prefilters.push(e)}}),C.speed=function(e,t,n){var r=e&&"object"==typeof e?C.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return C.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in C.fx.speeds?r.duration=C.fx.speeds[r.duration]:r.duration=C.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&C.dequeue(this,r.queue)},r},C.fn.extend({fadeTo:function(e,t,n,r){// Show any hidden elements after setting opacity to 0
return this.filter(eh).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var o=C.isEmptyObject(e),i=C.speed(t,n,r),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=Animation(this,C.extend({},e),i);// Empty animations, or finishing resolves immediately
(o||er.get(this,"finish"))&&t.stop(!0)};return a.finish=a,o||!1===i.queue?this.each(a):this.queue(i.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",i=C.timers,a=er.get(this);if(o)a[o]&&a[o].stop&&r(a[o]);else for(o in a)a[o]&&a[o].stop&&e7.test(o)&&r(a[o]);for(o=i.length;o--;)i[o].elem===this&&(null==e||i[o].queue===e)&&(i[o].anim.stop(n),t=!1,i.splice(o,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&C.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=er.get(this),r=n[e+"queue"],o=n[e+"queueHooks"],i=C.timers,a=r?r.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
C.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=i.length;t--;)i[t].elem===this&&i[t].queue===e&&(i[t].anim.stop(!0),i.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),C.each(["toggle","show","hide"],function(e,t){var n=C.fn[t];C.fn[t]=function(e,r,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tt(t,!0),e,r,o)}}),// Generate shortcuts for custom animations
C.each({slideDown:tt("show"),slideUp:tt("hide"),slideToggle:tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){C.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),C.timers=[],C.fx.tick=function(){var e,t=0,n=C.timers;for(e6=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||C.fx.stop(),e6=void 0},C.fx.timer=function(e){C.timers.push(e),C.fx.start()},C.fx.interval=13,C.fx.start=function(){e9||(e9=!0,function t(){e9&&(!1===v.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,C.fx.interval),C.fx.tick())}())},C.fx.stop=function(){e9=null},C.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
C.fn.delay=function(t,n){return t=C.fx&&C.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var o=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(o)}})},tr=v.createElement("input"),to=v.createElement("select").appendChild(v.createElement("option")),tr.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
h.checkOn=""!==tr.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
h.optSelected=to.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(tr=v.createElement("input")).value="t",tr.type="radio",h.radioValue="t"===tr.value;var tr,to,ti,ta=C.expr.attrHandle;C.fn.extend({attr:function(e,t){return Q(this,C.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){C.removeAttr(this,e)})}}),C.extend({attr:function(e,t,n){var r,o,i=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return C.prop(e,t,n);if(1===i&&C.isXMLDoc(e)||(o=C.attrHooks[t.toLowerCase()]||(C.expr.match.bool.test(t)?ti:void 0)),void 0!==n){if(null===n){C.removeAttr(e,t);return}return o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:(e.setAttribute(t,n+""),n)}return o&&"get"in o&&null!==(r=o.get(e,t))?r:null==(r=C.find.attr(e,t))?void 0:r}},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&E(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=t&&t.match(B);if(o&&1===e.nodeType)for(;n=o[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ti={set:function(e,t,n){return!1===t?C.removeAttr(e,n):e.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ta[t]||C.find.attr;ta[t]=function(e,t,r){var o,i,a=t.toLowerCase();return r||(// Avoid an infinite loop by temporarily removing this function from the getter
i=ta[a],ta[a]=o,o=null!=n(e,t,r)?a:null,ta[a]=i),o}});var ts=/^(?:input|select|textarea|button)$/i,tu=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function tl(e){return(e.match(B)||[]).join(" ")}function tc(e){return e.getAttribute&&e.getAttribute("class")||""}function tf(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(B)||[]}C.fn.extend({prop:function(e,t){return Q(this,C.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[C.propFix[e]||e]})}}),C.extend({prop:function(e,t,n){var r,o,i=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==i&&8!==i&&2!==i)return(1===i&&C.isXMLDoc(e)||(// Fix name and attach hooks
t=C.propFix[t]||t,o=C.propHooks[t]),void 0!==n)?o&&"set"in o&&void 0!==(r=o.set(e,n,t))?r:e[t]=n:o&&"get"in o&&null!==(r=o.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=C.find.attr(e,"tabindex");return t?parseInt(t,10):ts.test(e.nodeName)||tu.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(C.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){C.propFix[this.toLowerCase()]=this}),C.fn.extend({addClass:function(e){var t,n,r,o,i,a;return g(e)?this.each(function(t){C(this).addClass(e.call(this,t,tc(this)))}):(t=tf(e)).length?this.each(function(){if(r=tc(this),n=1===this.nodeType&&" "+tl(r)+" "){for(i=0;i<t.length;i++)o=t[i],0>n.indexOf(" "+o+" ")&&(n+=o+" ");r!==// Only assign if different to avoid unneeded rendering.
(a=tl(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,r,o,i,a;return g(e)?this.each(function(t){C(this).removeClass(e.call(this,t,tc(this)))}):arguments.length?(t=tf(e)).length?this.each(function(){if(r=tc(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+tl(r)+" "){for(i=0;i<t.length;i++)// Remove *all* instances
for(o=t[i];n.indexOf(" "+o+" ")>-1;)n=n.replace(" "+o+" "," ");r!==// Only assign if different to avoid unneeded rendering.
(a=tl(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,r,o,i,a=typeof e,s="string"===a||Array.isArray(e);return g(e)?this.each(function(n){C(this).toggleClass(e.call(this,n,tc(this),t),t)}):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=tf(e),this.each(function(){if(s)for(o=0,// Toggle individual class names
i=C(this);o<n.length;o++)r=n[o],i.hasClass(r)?i.removeClass(r):i.addClass(r);else(void 0===e||"boolean"===a)&&((r=tc(this))&&er.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":er.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+tl(tc(n))+" ").indexOf(t)>-1)return!0;return!1}});var tp=/\r/g;C.fn.extend({val:function(e){var t,n,r,o=this[0];return arguments.length?(r=g(e),this.each(function(n){var o;1!==this.nodeType||(null==(o=r?e.call(this,n,C(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=C.map(o,function(e){return null==e?"":e+""})),(t=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=C.valHooks[o.type]||C.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(tp,""):null==n?"":n:void 0}}),C.extend({valHooks:{option:{get:function(e){var t=C.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tl(C.text(e))}},select:{get:function(e){var t,n,r,o=e.options,i=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?i+1:o.length;// Loop through all the selected options
for(r=i<0?u:a?i:0;r<u;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=o[r]).selected||r===i)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!E(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=C(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,o=e.options,i=C.makeArray(t),a=o.length;a--;)/* eslint-disable no-cond-assign */((r=o[a]).selected=C.inArray(C.valHooks.option.get(r),i)>-1)&&(n=!0);return n||(e.selectedIndex=-1),i}}}}),// Radios and checkboxes getter/setter
C.each(["radio","checkbox"],function(){C.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=C.inArray(C(e).val(),t)>-1}},h.checkOn||(C.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var td=e.location,th={guid:Date.now()},tg=/\?/;// Cross-browser xml parsing
C.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],(!n||r)&&C.error("Invalid XML: "+(r?C.map(r.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var tm=/^(?:focusinfocus|focusoutblur)$/,tv=function(e){e.stopPropagation()};C.extend(C.event,{trigger:function(t,n,r,o){var i,a,s,u,l,c,p,d,h=[r||v],y=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(a=d=s=r=r||v,!(3===r.nodeType||8===r.nodeType||tm.test(y+C.event.triggered))&&(y.indexOf(".")>-1&&(y=// Namespaced trigger; create a regexp to match event type in handle()
(x=y.split(".")).shift(),x.sort()),l=0>y.indexOf(":")&&"on"+y,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[C.expando]?t:new C.Event(y,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=r),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:C.makeArray(n,[t]),// Allow special events to draw outside the lines
p=C.event.special[y]||{},o||!p.trigger||!1!==p.trigger.apply(r,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!o&&!p.noBubble&&!m(r)){for(u=p.delegateType||y,tm.test(u+y)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||v)&&h.push(s.defaultView||s.parentWindow||e)}for(// Fire handlers on the event path
i=0;(a=h[i++])&&!t.isPropagationStopped();)d=a,t.type=i>1?u:p.bindType||y,// jQuery handler
(c=(er.get(a,"events")||Object.create(null))[t.type]&&er.get(a,"handle"))&&c.apply(a,n),// Native handler
(c=l&&a[l])&&c.apply&&et(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=y,!o&&!t.isDefaultPrevented()&&(!p._default||!1===p._default.apply(h.pop(),n))&&et(r)&&l&&g(r[y])&&!m(r)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(s=r[l])&&(r[l]=null),// Prevent re-triggering of the same event, since we already bubbled it above
C.event.triggered=y,t.isPropagationStopped()&&d.addEventListener(y,tv),r[y](),t.isPropagationStopped()&&d.removeEventListener(y,tv),C.event.triggered=void 0,s&&(r[l]=s)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=C.extend(new C.Event,n,{type:e,isSimulated:!0});C.event.trigger(r,null,t)}}),C.fn.extend({trigger:function(e,t){return this.each(function(){C.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return C.event.trigger(e,t,n,!0)}});var ty=/\[\]$/,tx=/\r?\n/g,tb=/^(?:submit|button|image|reset|file)$/i,tw=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
C.param=function(e,t){var n,r=[],o=function(e,t){// If value is a function, invoke it and use its return value
var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!C.isPlainObject(e))C.each(e,function(){o(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,r,o){var i;if(Array.isArray(n))C.each(n,function(n,i){r||ty.test(t)?o(t,i):e(t+"["+("object"==typeof i&&null!=i?n:"")+"]",i,r,o)});else if(r||"object"!==b(n))o(t,n);else for(i in n)e(t+"["+i+"]",n[i],r,o)}(n,e[n],t,o);// Return the resulting serialization
return r.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=C.prop(this,"elements");return e?C.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!C(this).is(":disabled")&&tw.test(this.nodeName)&&!tb.test(e)&&(this.checked||!ey.test(e))}).map(function(e,t){var n=C(this).val();return null==n?null:Array.isArray(n)?C.map(n,function(e){return{name:t.name,value:e.replace(tx,"\r\n")}}):{name:t.name,value:n.replace(tx,"\r\n")}}).get()}});var tT=/%20/g,tC=/#.*$/,tk=/([?&])_=[^&]*/,tE=/^(.*?):[ \t]*([^\r\n]*)$/mg,tS=/^(?:GET|HEAD)$/,tD=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tj={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tA={},tN="*/".concat("*"),tq=v.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tL(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,o=0,i=t.toLowerCase().match(B)||[];if(g(n))// For each dataType in the dataTypeExpression
for(;r=i[o++];)"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}// Base inspection function for prefilters and transports
function tH(e,t,n,r){var o={},i=e===tA;function a(s){var u;return o[s]=!0,C.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||i||o[l]?i?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!o["*"]&&a("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tO(e,t){var n,r,o=C.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:r||(r={}))[n]=t[n]);return r&&C.extend(!0,e,r),e}tq.href=td.href,C.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:td.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(td.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tN,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":C.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tO(tO(e,C.ajaxSettings),t):tO(C.ajaxSettings,e)},ajaxPrefilter:tL(tj),ajaxTransport:tL(tA),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var r,o,i,a,s,u,l,c,f,p,d=C.ajaxSetup({},n),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?C(h):C.event,m=C.Deferred(),y=C.Callbacks("once memory"),x=d.statusCode||{},b={},w={},T="canceled",k={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(l){if(!a)for(a={};t=tE.exec(i);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return l?i:null},// Caches the header
setRequestHeader:function(e,t){return null==l&&(b[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(l)k.always(e[k.status]);else for(t in e)x[t]=[x[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||T;return r&&r.abort(t),E(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
m.promise(k),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
d.url=((t||d.url||td.href)+"").replace(tD,td.protocol+"//"),// Alias method option to type as per ticket trac-12004
d.type=n.method||n.type||d.method||d.type,// Extract dataTypes list
d.dataTypes=(d.dataType||"*").toLowerCase().match(B)||[""],null==d.crossDomain){u=v.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{u.href=d.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
u.href=u.href,d.crossDomain=tq.protocol+"//"+tq.host!=u.protocol+"//"+u.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
d.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=C.param(d.data,d.traditional)),// Apply prefilters
tH(tj,d,n,k),l)return k;// Check for headers option
for(f in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(c=C.event&&d.global)&&0==C.active++&&C.event.trigger("ajaxStart"),// Uppercase the type
d.type=d.type.toUpperCase(),// Determine if request has content
d.hasContent=!tS.test(d.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=d.url.replace(tC,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(tT,"+")):(// Remember the hash so we can put it back
p=d.url.slice(o.length),d.data&&(d.processData||"string"==typeof d.data)&&(o+=(tg.test(o)?"&":"?")+d.data,// trac-9682: remove data so that it's not used in an eventual retry
delete d.data),!1===d.cache&&(o=o.replace(tk,"$1"),p=(tg.test(o)?"&":"?")+"_="+th.guid+++p),// Put hash and anti-cache on the URL that will be requested (gh-1732)
d.url=o+p),d.ifModified&&(C.lastModified[o]&&k.setRequestHeader("If-Modified-Since",C.lastModified[o]),C.etag[o]&&k.setRequestHeader("If-None-Match",C.etag[o])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&k.setRequestHeader("Content-Type",d.contentType),// Set the Accepts header for the server, depending on the dataType
k.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+tN+"; q=0.01":""):d.accepts["*"]),d.headers)k.setRequestHeader(f,d.headers[f]);// Allow custom headers/mimetypes and early abort
if(d.beforeSend&&(!1===d.beforeSend.call(h,k,d)||l))return k.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
T="abort",// Install callbacks on deferreds
y.add(d.complete),k.done(d.success),k.fail(d.error),// Get transport
r=tH(tA,d,n,k)){// If request was aborted inside ajaxSend, stop there
if(k.readyState=1,c&&g.trigger("ajaxSend",[k,d]),l)return k;d.async&&d.timeout>0&&(s=e.setTimeout(function(){k.abort("timeout")},d.timeout));try{l=!1,r.send(b,E)}catch(e){// Rethrow post-completion exceptions
if(l)throw e;// Propagate others as results
E(-1,e)}}else E(-1,"No Transport");// Callback for when everything is done
function E(t,n,a,u){var f,p,v,b,w,T=n;// Ignore repeat invocations
l||(l=!0,s&&e.clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
i=u||"",// Set readyState
k.readyState=t>0?4:0,// Determine if successful
f=t>=200&&t<300||304===t,a&&(b=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,o,i,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r){for(o in s)if(s[o]&&s[o].test(r)){u.unshift(o);break}}// Check to see if we have a response for the expected dataType
if(u[0]in n)i=u[0];else{// Try convertible dataTypes
for(o in n){if(!u[0]||e.converters[o+" "+u[0]]){i=o;break}a||(a=o)}// Or just use first one
i=i||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(i)return i!==u[0]&&u.unshift(i),n[i]}(d,k,a)),!f&&C.inArray("script",d.dataTypes)>-1&&0>C.inArray("json",d.dataTypes)&&(d.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
b=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,r){var o,i,a,s,u,l={},c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(i=c.shift();i;)if(e.responseFields[i]&&(n[e.responseFields[i]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=i,i=c.shift()){// There's only work to do if current dataType is non-auto
if("*"===i)i=u;else if("*"!==u&&u!==i){// If none found, seek a pair
if(!// Seek a direct converter
(a=l[u+" "+i]||l["* "+i])){for(o in l)if(// If conv2 outputs current
(s=o.split(" "))[1]===i&&// If prev can be converted to accepted input
(a=l[u+" "+s[0]]||l["* "+s[0]])){// Condense equivalence converters
!0===a?a=l[o]:!0!==l[o]&&(i=s[0],c.unshift(s[1]));break}}// Apply converter (if not an equivalence)
if(!0!==a){// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+i}}}}}return{state:"success",data:t}}(d,b,k,f),f?(d.ifModified&&((w=k.getResponseHeader("Last-Modified"))&&(C.lastModified[o]=w),(w=k.getResponseHeader("etag"))&&(C.etag[o]=w)),204===t||"HEAD"===d.type?T="nocontent":304===t?T="notmodified":(T=b.state,p=b.data,f=!(v=b.error))):(// Extract error from statusText and normalize for non-aborts
v=T,(t||!T)&&(T="error",t<0&&(t=0))),// Set data for the fake xhr object
k.status=t,k.statusText=(n||T)+"",f?m.resolveWith(h,[p,T,k]):m.rejectWith(h,[k,T,v]),// Status-dependent callbacks
k.statusCode(x),x=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[k,d,f?p:v]),// Complete
y.fireWith(h,[k,T]),!c||(g.trigger("ajaxComplete",[k,d]),--C.active||C.event.trigger("ajaxStop")))}return k},getJSON:function(e,t,n){return C.get(e,t,n,"json")},getScript:function(e,t){return C.get(e,void 0,t,"script")}}),C.each(["get","post"],function(e,t){C[t]=function(e,n,r,o){// The url can be an options object (which then must have .url)
return g(n)&&(o=o||r,r=n,n=void 0),C.ajax(C.extend({url:e,type:t,dataType:o,data:n,success:r},C.isPlainObject(e)&&e))}}),C.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),C._evalUrl=function(e,t,n){return C.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){C.globalEval(e,t,n)}})},C.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=C(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){C(this).wrapInner(e.call(this,t))}):this.each(function(){var t=C(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){C(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){C(this).replaceWith(this.childNodes)}),this}}),C.expr.pseudos.hidden=function(e){return!C.expr.pseudos.visible(e)},C.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tM={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tP=C.ajaxSettings.xhr();h.cors=!!tP&&"withCredentials"in tP,h.ajax=tP=!!tP,C.ajaxTransport(function(t){var n,r;// Cross domain only allowed if supported through XMLHttpRequest
if(h.cors||tP&&!t.crossDomain)return{send:function(o,i){var a,s=t.xhr();// Apply custom fields if provided
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];// Set headers
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)s.setRequestHeader(a,o[a]);// Callback
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?i(0,"error"):i(s.status,s.statusText):i(tM[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},// Listen to events
s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){// Check readyState before timeout as it changes
4===s.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&r()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
s.send(t.hasContent&&t.data||null)}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
C.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return C.globalEval(e),e}}}),// Handle cache's special case and crossDomain
C.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
C.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(r,o){t=C("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
v.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tR=[],tI=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tR.pop()||C.expando+"_"+th.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
C.ajaxPrefilter("json jsonp",function(t,n,r){var o,i,a,s=!1!==t.jsonp&&(tI.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tI.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
o=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tI,"$1"+o):!1!==t.jsonp&&(t.url+=(tg.test(t.url)?"&":"?")+t.jsonp+"="+o),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return a||C.error(o+" was not called"),a[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
i=e[o],e[o]=function(){a=arguments},// Clean-up function (fires after converters)
r.always(function(){void 0===i?C(e).removeProp(o):e[o]=i,t[o]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tR.push(o)),a&&g(i)&&i(a[0]),a=i=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
h.createHTMLDocument=((n=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
C.parseHTML=function(e,t,n){var r,o,i;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(r=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(r)):t=v),o=P.exec(e),i=!n&&[],o)?[t.createElement(o[1])]:(o=eE([e],t,i),i&&i.length&&C(i).remove(),C.merge([],o.childNodes))},/**
 * Load a url into a page
 */C.fn.load=function(e,t,n){var r,o,i,a=this,s=e.indexOf(" ");return s>-1&&(r=tl(e.slice(s)),e=e.slice(0,s)),g(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&C.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
i=arguments,a.html(r?// Exclude scripts to avoid IE 'Permission Denied' errors
C("<div>").append(C.parseHTML(e)).find(r):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){a.each(function(){n.apply(this,i||[e.responseText,t,e])})}),this},C.expr.pseudos.animated=function(e){return C.grep(C.timers,function(t){return e===t.elem}).length},C.offset={setOffset:function(e,t,n){var r,o,i,a,s,u,l=C.css(e,"position"),c=C(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),i=C.css(e,"top"),u=C.css(e,"left"),("absolute"===l||"fixed"===l)&&(i+u).indexOf("auto")>-1?(a=(r=c.position()).top,o=r.left):(a=parseFloat(i)||0,o=parseFloat(u)||0),g(t)&&(t=t.call(e,n,C.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):c.css(f)}},C.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){C.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],o={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===C.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===C.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
o=C(e).offset(),o.top+=C.css(e,"borderTopWidth",!0),o.left+=C.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-o.top-C.css(r,"marginTop",!0),left:t.left-o.left-C.css(r,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===C.css(e,"position");)e=e.offsetParent;return e||ef})}}),// Create scrollLeft and scrollTop methods
C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;C.fn[e]=function(r){return Q(this,function(e,r,o){// Coalesce documents and windows
var i;if(m(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===o)return i?i[t]:e[r];i?i.scrollTo(n?i.pageXOffset:o,n?o:i.pageYOffset):e[r]=o},e,r,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
C.each(["top","left"],function(e,t){C.cssHooks[t]=eX(h.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=ez(e,t),eW.test(n)?C(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
C.each({Height:"height",Width:"width"},function(e,t){C.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){// Margin is only for outerHeight, outerWidth
C.fn[r]=function(o,i){var a=arguments.length&&(n||"boolean"!=typeof o),s=n||(!0===o||!0===i?"margin":"border");return Q(this,function(t,n,o){var i;return m(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===o?C.css(t,n,s):C.style(t,n,o,s)},t,a?o:void 0,a)}})}),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){C.fn[t]=function(e){return this.on(t,e)}}),C.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
C.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var t_=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
C.proxy=function(e,t){var n,r,o;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return(// Simulated bind
r=i.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}).guid=e.guid=e.guid||C.guid++,o)},C.holdReady=function(e){e?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=E,C.isFunction=g,C.isWindow=m,C.camelCase=ee,C.type=b,C.now=Date.now,C.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=C.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},C.trim=function(e){return null==e?"":(e+"").replace(t_,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return C});var tW=e.jQuery,tF=e.$;return C.noConflict=function(t){return e.$===C&&(e.$=tF),t&&e.jQuery===C&&(e.jQuery=tW),C},void 0===t&&(e.jQuery=e.$=C),C},"object"==typeof e.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
e.exports=n.document?r(n,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return r(e)}:r(n)});var i=o("6KOho");//todo refactor it somehow
const a=/*@__PURE__*/e(i)(".copied-popup-flying-container");let s=!1;/*@__PURE__*/e(i)(".email-container").on("click",async()=>{await navigator.clipboard.writeText("alinaermolaeva044@gmail.com"),s||(s=!0,a.css("display","block").addClass("animate__fadeInUp").removeClass("animate__fadeOutDown"),setTimeout(()=>{a.addClass("animate__fadeOutDown").removeClass("animate__fadeInUp")},3e3),a.on("animationend",()=>{a.hasClass("animate__fadeOutDown")&&(a.css("display","none"),s=!1)}))}),/*@__PURE__*/e(i)("#up-button").on("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const u=()=>{if(0===window.scrollY&&!window.matchMedia("(max-width: 600px)").matches){let t=/*@__PURE__*/e(i)(".floating-footer-container").height(),n=Number.parseInt(/*@__PURE__*/e(i)(".main-footer-section").css("margin-top").replace("px",""));return t-n}return 0},l=()=>{let t=/*@__PURE__*/e(i)("#description-section");return t.position().top+t.outerHeight()},c=()=>{let t=/*@__PURE__*/e(i)(".floating-header-container > *").not((t,n)=>"none"===/*@__PURE__*/e(i)(n).css("display"));return Number.parseInt(t.css("padding-bottom").replace("px",""))};function f(){let t=u(),n=l(),r=c(),o=/*@__PURE__*/e(i)(".floating-header-container").height();return n-t-(o-r)}/*@__PURE__*/e(i)("#explore-cases-button").on("click",()=>window.scrollTo({top:f(),behavior:"smooth"}));const p=/*@__PURE__*/e(i)(window),d=/*@__PURE__*/e(i)(".floating-footer-container"),h=/*@__PURE__*/e(i)(".description-container");let g=window.scrollY;p.scroll(()=>{window.matchMedia("(max-width: 600px)").matches||(0===window.scrollY?h.addClass("description-container-margin").removeClass("description-container-margin-scrolled"):h.addClass("description-container-margin-scrolled").removeClass("description-container-margin"),0===window.scrollY||window.scrollY<g?d.addClass("animate__slideInUp").removeClass("animate__slideOutDown"):d.addClass("animate__slideOutDown").removeClass("animate__slideInUp"),g=window.scrollY);let t=/*@__PURE__*/e(i)(".floating-header-container > *").not((t,n)=>"none"===/*@__PURE__*/e(i)(n).css("display")).find(".menu-buttons").first(),n=t.children(".home").first(),r=t.children(".work").first(),o=t.children(".contacts").first();window.scrollY<f()?(n.addClass("selected-menu-button"),r.removeClass("selected-menu-button"),o.removeClass("selected-menu-button")):window.innerHeight+Math.round(window.scrollY)<document.body.offsetHeight?(n.removeClass("selected-menu-button"),r.addClass("selected-menu-button"),o.removeClass("selected-menu-button")):(n.removeClass("selected-menu-button"),r.removeClass("selected-menu-button"),o.addClass("selected-menu-button"))}),/*@__PURE__*/e(i)(".menu-buttons > .home").on("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),/*@__PURE__*/e(i)(".menu-buttons > .work").on("click",()=>{window.scrollTo({top:f(),behavior:"smooth"})}),/*@__PURE__*/e(i)(".menu-buttons > .contacts").on("click",()=>{window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})});//# sourceMappingURL=index.c509b33a.js.map

//# sourceMappingURL=index.c509b33a.js.map
