var e,t,n=globalThis;function r(e){return e&&e.__esModule?e.default:e}var i={},o={},a=n.parcelRequireffc5;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequireffc5=a),(0,a.register)("f1q41",function(e,t){(function(){/** Error message constants. */var r,i="Expected a function",o="__lodash_hash_undefined__",a="__lodash_placeholder__",s=1/0,u=0/0,l=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],c="[object Arguments]",f="[object Array]",p="[object Boolean]",d="[object Date]",h="[object Error]",v="[object Function]",g="[object GeneratorFunction]",y="[object Map]",m="[object Number]",x="[object Object]",b="[object Promise]",w="[object RegExp]",_="[object Set]",S="[object String]",A="[object Symbol]",C="[object WeakMap]",k="[object ArrayBuffer]",T="[object DataView]",E="[object Float32Array]",P="[object Float64Array]",j="[object Int8Array]",M="[object Int16Array]",R="[object Int32Array]",D="[object Uint8Array]",I="[object Uint8ClampedArray]",B="[object Uint16Array]",L="[object Uint32Array]",O=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,q=/(__e\(.*?\)|\b__t\)) \+\n'';/g,N=/&(?:amp|lt|gt|quot|#39);/g,F=/[&<>"']/g,W=RegExp(N.source),U=RegExp(F.source),V=/<%-([\s\S]+?)%>/g,$=/<%([\s\S]+?)%>/g,z=/<%=([\s\S]+?)%>/g,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,Y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,J=/[\\^$.*+?()[\]{}|]/g,Q=RegExp(J.source),Z=/^\s+/,K=/\s/,ee=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,et=/\{\n\/\* \[wrapped with (.+)\] \*/,en=/,? & /,er=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ei=/[()=,{}\[\]\/\s]/,eo=/\\(\\)?/g,ea=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,es=/\w*$/,eu=/^[-+]0x[0-9a-f]+$/i,el=/^0b[01]+$/i,ec=/^\[object .+?Constructor\]$/,ef=/^0o[0-7]+$/i,ep=/^(?:0|[1-9]\d*)$/,ed=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,eh=/($^)/,ev=/['\n\r\u2028\u2029\\]/g,eg="\ud800-\udfff",ey="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",em="\\u2700-\\u27bf",ex="a-z\\xdf-\\xf6\\xf8-\\xff",eb="A-Z\\xc0-\\xd6\\xd8-\\xde",ew="\\ufe0e\\ufe0f",e_="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",eS="['’]",eA="["+e_+"]",eC="["+ey+"]",ek="["+ex+"]",eT="[^"+eg+e_+"\\d+"+em+ex+eb+"]",eE="\ud83c[\udffb-\udfff]",eP="[^"+eg+"]",ej="(?:\ud83c[\udde6-\uddff]){2}",eM="[\ud800-\udbff][\udc00-\udfff]",eR="["+eb+"]",eD="\\u200d",eI="(?:"+ek+"|"+eT+")",eB="(?:"+eS+"(?:d|ll|m|re|s|t|ve))?",eL="(?:"+eS+"(?:D|LL|M|RE|S|T|VE))?",eO="(?:"+eC+"|"+eE+")?",eH="["+ew+"]?",eq="(?:"+eD+"(?:"+[eP,ej,eM].join("|")+")"+eH+eO+")*",eN=eH+eO+eq,eF="(?:"+["["+em+"]",ej,eM].join("|")+")"+eN,eW="(?:"+[eP+eC+"?",eC,ej,eM,"["+eg+"]"].join("|")+")",eU=RegExp(eS,"g"),eV=RegExp(eC,"g"),e$=RegExp(eE+"(?="+eE+")|"+eW+eN,"g"),ez=RegExp([eR+"?"+ek+"+"+eB+"(?="+[eA,eR,"$"].join("|")+")","(?:"+eR+"|"+eT+")+"+eL+"(?="+[eA,eR+eI,"$"].join("|")+")",eR+"?"+eI+"+"+eB,eR+"+"+eL,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",eF].join("|"),"g"),eG=RegExp("["+eD+eg+ey+ew+"]"),eX=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,eY=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],eJ=-1,eQ={};eQ[E]=eQ[P]=eQ[j]=eQ[M]=eQ[R]=eQ[D]=eQ[I]=eQ[B]=eQ[L]=!0,eQ[c]=eQ[f]=eQ[k]=eQ[p]=eQ[T]=eQ[d]=eQ[h]=eQ[v]=eQ[y]=eQ[m]=eQ[x]=eQ[w]=eQ[_]=eQ[S]=eQ[C]=!1;/** Used to identify `toStringTag` values supported by `_.clone`. */var eZ={};eZ[c]=eZ[f]=eZ[k]=eZ[T]=eZ[p]=eZ[d]=eZ[E]=eZ[P]=eZ[j]=eZ[M]=eZ[R]=eZ[y]=eZ[m]=eZ[x]=eZ[w]=eZ[_]=eZ[S]=eZ[A]=eZ[D]=eZ[I]=eZ[B]=eZ[L]=!0,eZ[h]=eZ[v]=eZ[C]=!1;/** Used to escape characters for inclusion in compiled string literals. */var eK={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},e0=parseFloat,e1=parseInt,e2="object"==typeof n&&n&&n.Object===Object&&n,e5="object"==typeof self&&self&&self.Object===Object&&self,e3=e2||e5||Function("return this")(),e4=t&&!t.nodeType&&t,e9=e4&&e&&!e.nodeType&&e,e6=e9&&e9.exports===e4,e8=e6&&e2.process,e7=function(){try{// Use `util.types` for Node.js 10+.
var e=e9&&e9.require&&e9.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
return e8&&e8.binding&&e8.binding("util")}catch(e){}}(),te=e7&&e7.isArrayBuffer,tt=e7&&e7.isDate,tn=e7&&e7.isMap,tr=e7&&e7.isRegExp,ti=e7&&e7.isSet,to=e7&&e7.isTypedArray;/*--------------------------------------------------------------------------*//**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */function ta(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */function ts(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function tu(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */function tl(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */function tc(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function tf(e,t){return!!(null==e?0:e.length)&&tw(e,t,0)>-1}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */function tp(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */function td(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */function th(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function tv(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */function tg(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */function ty(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}/**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */var tm=tC("length");/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */function tx(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function tb(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return -1}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function tw(e,t,n){return t==t?/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return -1}(e,t,n):tb(e,tS,n)}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function t_(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return -1}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */function tS(e){return e!=e}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */function tA(e,t){var n=null==e?0:e.length;return n?tE(e,t)/n:u}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function tC(e){return function(t){return null==t?r:t[e]}}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function tk(e){return function(t){return null==e?r:e[t]}}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */function tT(e,t,n,r,i){return i(e,function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)}),n}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function tE(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function tP(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}/**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */function tj(e){return e?e.slice(0,tz(e)+1).replace(Z,""):e}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function tM(e){return function(t){return e(t)}}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function tR(e,t){return td(t,function(t){return e[t]})}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function tD(e,t){return e.has(t)}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function tI(e,t){for(var n=-1,r=e.length;++n<r&&tw(t,e[n],0)>-1;);return n}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function tB(e,t){for(var n=e.length;n--&&tw(t,e[n],0)>-1;);return n}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var tL=tk({// Latin-1 Supplement block.
À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",// Latin Extended-A block.
Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),tO=tk({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function tH(e){return"\\"+eK[e]}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function tq(e){return eG.test(e)}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function tN(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */function tF(e,t){return function(n){return e(t(n))}}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */function tW(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function tU(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function tV(e){return tq(e)?/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */function(e){for(var t=e$.lastIndex=0;e$.test(e);)++t;return t}(e):tm(e)}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */function t$(e){return tq(e)?e.match(e$)||[]:e.split("")}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */function tz(e){for(var t=e.length;t--&&K.test(e.charAt(t)););return t}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var tG=tk({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),tX=function e(t){/** Built-in constructor references. */var n,K,eg,ey,em=(t=null==t?e3:tX.defaults(e3.Object(),t,tX.pick(e3,eY))).Array,ex=t.Date,eb=t.Error,ew=t.Function,e_=t.Math,eS=t.Object,eA=t.RegExp,eC=t.String,ek=t.TypeError,eT=em.prototype,eE=ew.prototype,eP=eS.prototype,ej=t["__core-js_shared__"],eM=eE.toString,eR=eP.hasOwnProperty,eD=0,eI=(n=/[^.]+$/.exec(ej&&ej.keys&&ej.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",eB=eP.toString,eL=eM.call(eS),eO=e3._,eH=eA("^"+eM.call(eR).replace(J,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),eq=e6?t.Buffer:r,eN=t.Symbol,Uint8Array=t.Uint8Array,eF=eq?eq.allocUnsafe:r,eW=tF(eS.getPrototypeOf,eS),e$=eS.create,eG=eP.propertyIsEnumerable,eK=eT.splice,e2=eN?eN.isConcatSpreadable:r,e5=eN?eN.iterator:r,e4=eN?eN.toStringTag:r,e9=function(){try{var e=is(eS,"defineProperty");return e({},"",{}),e}catch(e){}}(),e8=t.clearTimeout!==e3.clearTimeout&&t.clearTimeout,e7=ex&&ex.now!==e3.Date.now&&ex.now,tm=t.setTimeout!==e3.setTimeout&&t.setTimeout,tk=e_.ceil,tY=e_.floor,tJ=eS.getOwnPropertySymbols,tQ=eq?eq.isBuffer:r,tZ=t.isFinite,tK=eT.join,t0=tF(eS.keys,eS),t1=e_.max,t2=e_.min,t5=ex.now,t3=t.parseInt,t4=e_.random,t9=eT.reverse,DataView=is(t,"DataView"),Map=is(t,"Map"),Promise=is(t,"Promise"),Set=is(t,"Set"),WeakMap=is(t,"WeakMap"),t6=is(eS,"create"),t8=WeakMap&&new WeakMap,t7={},ne=iD(DataView),nt=iD(Map),nn=iD(Promise),nr=iD(Set),ni=iD(WeakMap),no=eN?eN.prototype:r,na=no?no.valueOf:r,ns=no?no.toString:r;/*------------------------------------------------------------------------*//**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */function nu(e){if(oN(e)&&!oP(e)&&!(e instanceof np)){if(e instanceof nf)return e;if(eR.call(e,"__wrapped__"))return iI(e)}return new nf(e)}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var nl=function(){function e(){}return function(t){if(!oq(t))return{};if(e$)return e$(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function nc(){// No operation performed.
}/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function nf(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}/*------------------------------------------------------------------------*//**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function np(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}/*------------------------------------------------------------------------*//**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function nd(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/*------------------------------------------------------------------------*//**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function nh(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/*------------------------------------------------------------------------*//**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function nv(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/*------------------------------------------------------------------------*//**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function ng(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new nv;++t<n;)this.add(e[t])}/*------------------------------------------------------------------------*//**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function ny(e){var t=this.__data__=new nh(e);this.size=t.size}/*------------------------------------------------------------------------*//**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function nm(e,t){var n=oP(e),r=!n&&oE(e),i=!n&&!r&&oD(e),o=!n&&!r&&!i&&oX(e),a=n||r||i||o,s=a?tP(e.length,eC):[],u=s.length;for(var l in e)(t||eR.call(e,l))&&!(a&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==l||// Node.js 0.10 has enumerable non-index properties on buffers.
i&&("offset"==l||"parent"==l)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||// Skip index properties.
iv(l,u)))&&s.push(l);return s}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function nx(e){var t=e.length;return t?e[rr(0,t-1)]:r}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function nb(e,t,n){(n===r||oC(e[t],n))&&(n!==r||t in e)||nC(e,t,n)}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function nw(e,t,n){var i=e[t];eR.call(e,t)&&oC(i,n)&&(n!==r||t in e)||nC(e,t,n)}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function n_(e,t){for(var n=e.length;n--;)if(oC(e[n][0],t))return n;return -1}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function nS(e,t,n,r){return nR(e,function(e,i,o){t(r,e,n(e),o)}),r}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function nA(e,t){return e&&rB(t,aa(t),e)}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function nC(e,t,n){"__proto__"==t&&e9?e9(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function nk(e,t){for(var n=-1,i=t.length,o=em(i),a=null==e;++n<i;)o[n]=a?r:at(e,t[n]);return o}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function nT(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */function nE(e,t,n,i,o,a){var s,u=1&t,l=2&t,f=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!oq(e))return e;var h=oP(e);if(h){if(b=e.length,C=new e.constructor(b),b&&"string"==typeof e[0]&&eR.call(e,"index")&&(C.index=e.index,C.input=e.input),s=C,!u)return rI(e,s)}else{var b,C,O,H,q,N=ic(e),F=N==v||N==g;if(oD(e))return rE(e,u);if(N==x||N==c||F&&!o){if(s=l||F?{}:id(e),!u)return l?(O=(q=s)&&rB(e,as(e),q),rB(e,il(e),O)):(H=nA(s,e),rB(e,iu(e),H))}else{if(!eZ[N])return o?e:{};s=/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */function(e,t,n){var r,i,o=e.constructor;switch(t){case k:return rP(e);case p:case d:return new o(+e);case T:return r=n?rP(e.buffer):e.buffer,new e.constructor(r,e.byteOffset,e.byteLength);case E:case P:case j:case M:case R:case D:case I:case B:case L:return rj(e,n);case y:return new o;case m:case S:return new o(e);case w:return(i=new e.constructor(e.source,es.exec(e))).lastIndex=e.lastIndex,i;case _:return new o;case A:return na?eS(na.call(e)):{}}}(e,N,u)}}// Check for circular references and return its corresponding clone.
a||(a=new ny);var W=a.get(e);if(W)return W;a.set(e,s),o$(e)?e.forEach(function(r){s.add(nE(r,t,n,r,e,a))}):oF(e)&&e.forEach(function(r,i){s.set(i,nE(r,t,n,i,e,a))});var U=f?l?r7:r8:l?as:aa,V=h?r:U(e);return tu(V||e,function(r,i){V&&(r=e[i=r]),// Recursively populate clone (susceptible to call stack limits).
nw(s,i,nE(r,t,n,i,e,a))}),s}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function nP(e,t,n){var i=n.length;if(null==e)return!i;for(e=eS(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function nj(e,t,n){if("function"!=typeof e)throw new ek(i);return ik(function(){e.apply(r,n)},t)}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function nM(e,t,n,r){var i=-1,o=tf,a=!0,s=e.length,u=[],l=t.length;if(!s)return u;n&&(t=td(t,tM(n))),r?(o=tp,a=!1):t.length>=200&&(o=tD,a=!1,t=new ng(t));e:for(;++i<s;){var c=e[i],f=null==n?c:n(c);if(c=r||0!==c?c:0,a&&f==f){for(var p=l;p--;)if(t[p]===f)continue e;u.push(c)}else o(t,f,r)||u.push(c)}return u}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */nu.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */escape:V,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */evaluate:$,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */interpolate:z,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */variable:"",/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */imports:{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */_:nu}},// Ensure wrappers are instances of `baseLodash`.
nu.prototype=nc.prototype,nu.prototype.constructor=nu,nf.prototype=nl(nc.prototype),nf.prototype.constructor=nf,// Ensure `LazyWrapper` is an instance of `baseLodash`.
np.prototype=nl(nc.prototype),np.prototype.constructor=np,// Add methods to `Hash`.
nd.prototype.clear=/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function(){this.__data__=t6?t6(null):{},this.size=0},nd.prototype.delete=/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},nd.prototype.get=/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){var t=this.__data__;if(t6){var n=t[e];return n===o?r:n}return eR.call(t,e)?t[e]:r},nd.prototype.has=/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){var t=this.__data__;return t6?t[e]!==r:eR.call(t,e)},nd.prototype.set=/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=t6&&t===r?o:t,this},// Add methods to `ListCache`.
nh.prototype.clear=/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function(){this.__data__=[],this.size=0},nh.prototype.delete=/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=this.__data__,n=n_(t,e);return!(n<0)&&(n==t.length-1?t.pop():eK.call(t,n,1),--this.size,!0)},nh.prototype.get=/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){var t=this.__data__,n=n_(t,e);return n<0?r:t[n][1]},nh.prototype.has=/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){return n_(this.__data__,e)>-1},nh.prototype.set=/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function(e,t){var n=this.__data__,r=n_(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},// Add methods to `MapCache`.
nv.prototype.clear=/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function(){this.size=0,this.__data__={hash:new nd,map:new(Map||nh),string:new nd}},nv.prototype.delete=/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=io(this,e).delete(e);return this.size-=t?1:0,t},nv.prototype.get=/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){return io(this,e).get(e)},nv.prototype.has=/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){return io(this,e).has(e)},nv.prototype.set=/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function(e,t){var n=io(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},// Add methods to `SetCache`.
ng.prototype.add=ng.prototype.push=/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function(e){return this.__data__.set(e,o),this},ng.prototype.has=/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function(e){return this.__data__.has(e)},// Add methods to `Stack`.
ny.prototype.clear=/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function(){this.__data__=new nh,this.size=0},ny.prototype.delete=/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ny.prototype.get=/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){return this.__data__.get(e)},ny.prototype.has=/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){return this.__data__.has(e)},ny.prototype.set=/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function(e,t){var n=this.__data__;if(n instanceof nh){var r=n.__data__;if(!Map||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new nv(r)}return n.set(e,t),this.size=n.size,this};/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var nR=rH(nN),nD=rH(nF,!0);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function nI(e,t){var n=!0;return nR(e,function(e,r,i){return n=!!t(e,r,i)}),n}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function nB(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(u===r?s==s&&!oG(s):n(s,u)))var u=s,l=a}return l}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function nL(e,t){var n=[];return nR(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function nO(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=ih),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?nO(s,t-1,n,r,i):th(i,s):r||(i[i.length]=s)}return i}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var nH=rq(),nq=rq(!0);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function nN(e,t){return e&&nH(e,t,aa)}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function nF(e,t){return e&&nq(e,t,aa)}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function nW(e,t){return tc(t,function(t){return oL(e[t])})}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function nU(e,t){t=rC(t,e);for(var n=0,i=t.length;null!=e&&n<i;)e=e[iR(t[n++])];return n&&n==i?e:r}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function nV(e,t,n){var r=t(e);return oP(e)?r:th(r,n(e))}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function n$(e){return null==e?e===r?"[object Undefined]":"[object Null]":e4&&e4 in eS(e)?/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function(e){var t=eR.call(e,e4),n=e[e4];try{e[e4]=r;var i=!0}catch(e){}var o=eB.call(e);return i&&(t?e[e4]=n:delete e[e4]),o}(e):eB.call(e)}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function nz(e,t){return e>t}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function nG(e,t){return null!=e&&eR.call(e,t)}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function nX(e,t){return null!=e&&t in eS(e)}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function nY(e,t,n){for(var i=n?tp:tf,o=e[0].length,a=e.length,s=a,u=em(a),l=1/0,c=[];s--;){var f=e[s];s&&t&&(f=td(f,tM(t))),l=t2(f.length,l),u[s]=!n&&(t||o>=120&&f.length>=120)?new ng(s&&f):r}f=e[0];var p=-1,d=u[0];e:for(;++p<o&&c.length<l;){var h=f[p],v=t?t(h):h;if(h=n||0!==h?h:0,!(d?tD(d,v):i(c,v,n))){for(s=a;--s;){var g=u[s];if(!(g?tD(g,v):i(e[s],v,n)))continue e}d&&d.push(v),c.push(h)}}return c}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function nJ(e,t,n){t=rC(t,e);var i=null==(e=iS(e,t))?e:e[iR(i$(t))];return null==i?r:ta(i,e,n)}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function nQ(e){return oN(e)&&n$(e)==c}/**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */function nZ(e,t,n,i,o){return e===t||(null!=e&&null!=t&&(oN(e)||oN(t))?/**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function(e,t,n,i,o,a){var s=oP(e),u=oP(t),l=s?f:ic(e),v=u?f:ic(t);l=l==c?x:l,v=v==c?x:v;var g=l==x,b=v==x,C=l==v;if(C&&oD(e)){if(!oD(t))return!1;s=!0,g=!1}if(C&&!g)return a||(a=new ny),s||oX(e)?r9(e,t,n,i,o,a):/**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function(e,t,n,r,i,o,a){switch(n){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case k:if(e.byteLength!=t.byteLength||!o(new Uint8Array(e),new Uint8Array(t)))break;return!0;case p:case d:case m:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return oC(+e,+t);case h:return e.name==t.name&&e.message==t.message;case w:case S:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case y:var s=tN;case _:var u=1&r;if(s||(s=tU),e.size!=t.size&&!u)break;// Assume cyclic values are equal.
var l=a.get(e);if(l)return l==t;r|=2,// Recursively compare objects (susceptible to call stack limits).
a.set(e,t);var c=r9(s(e),s(t),r,i,o,a);return a.delete(e),c;case A:if(na)return na.call(e)==na.call(t)}return!1}(e,t,l,n,i,o,a);if(!(1&n)){var E=g&&eR.call(e,"__wrapped__"),P=b&&eR.call(t,"__wrapped__");if(E||P){var j=E?e.value():e,M=P?t.value():t;return a||(a=new ny),o(j,M,n,i,a)}}return!!C&&(a||(a=new ny),/**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */function(e,t,n,i,o,a){var s=1&n,u=r8(e),l=u.length;if(l!=r8(t).length&&!s)return!1;for(var c=l;c--;){var f=u[c];if(!(s?f in t:eR.call(t,f)))return!1}// Check that cyclic values are equal.
var p=a.get(e),d=a.get(t);if(p&&d)return p==t&&d==e;var h=!0;a.set(e,t),a.set(t,e);for(var v=s;++c<l;){var g=e[f=u[c]],y=t[f];if(i)var m=s?i(y,g,f,t,e,a):i(g,y,f,e,t,a);// Recursively compare objects (susceptible to call stack limits).
if(!(m===r?g===y||o(g,y,n,i,a):m)){h=!1;break}v||(v="constructor"==f)}if(h&&!v){var x=e.constructor,b=t.constructor;// Non `Object` object instances with different constructors are not equal.
x!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof x&&x instanceof x&&"function"==typeof b&&b instanceof b)&&(h=!1)}return a.delete(e),a.delete(t),h}(e,t,n,i,o,a))}(e,t,n,i,nZ,o):e!=e&&t!=t)}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function nK(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=eS(e);o--;){var u=n[o];if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){var l=(u=n[o])[0],c=e[l],f=u[1];if(s&&u[2]){if(c===r&&!(l in e))return!1}else{var p=new ny;if(i)var d=i(c,f,l,e,t,p);if(!(d===r?nZ(f,c,3,i,p):d))return!1}}return!0}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function n0(e){return!(!oq(e)||eI&&eI in e)&&(oL(e)?eH:ec).test(iD(e))}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function n1(e){return(// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
"function"==typeof e?e:null==e?aR:"object"==typeof e?oP(e)?n9(e[0],e[1]):n4(e):aF(e))}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function n2(e){if(!ib(e))return t0(e);var t=[];for(var n in eS(e))eR.call(e,n)&&"constructor"!=n&&t.push(n);return t}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function n5(e,t){return e<t}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function n3(e,t){var n=-1,r=oM(e)?em(e.length):[];return nR(e,function(e,i,o){r[++n]=t(e,i,o)}),r}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function n4(e){var t=ia(e);return 1==t.length&&t[0][2]?iw(t[0][0],t[0][1]):function(n){return n===e||nK(n,e,t)}}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function n9(e,t){var n;return iy(e)&&(n=t)==n&&!oq(n)?iw(iR(e),t):function(n){var i=at(n,e);return i===r&&i===t?an(n,e):nZ(t,i,3)}}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function n6(e,t,n,i,o){e!==t&&nH(t,function(a,s){if(o||(o=new ny),oq(a))/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */(function(e,t,n,i,o,a,s){var u=iA(e,n),l=iA(t,n),c=s.get(l);if(c){nb(e,n,c);return}var f=a?a(u,l,n+"",e,t,s):r,p=f===r;if(p){var d=oP(l),h=!d&&oD(l),v=!d&&!h&&oX(l);f=l,d||h||v?oP(u)?f=u:oR(u)?f=rI(u):h?(p=!1,f=rE(l,!0)):v?(p=!1,f=rj(l,!0)):f=[]:oU(l)||oE(l)?(f=u,oE(u)?f=o2(u):(!oq(u)||oL(u))&&(f=id(l))):p=!1}p&&(// Recursively merge objects and arrays (susceptible to call stack limits).
s.set(l,f),o(f,l,i,a,s),s.delete(l)),nb(e,n,f)})(e,t,s,n,n6,i,o);else{var u=i?i(iA(e,s),a,s+"",e,t,o):r;u===r&&(u=a),nb(e,s,u)}},as)}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function n8(e,t){var n=e.length;if(n)return iv(t+=t<0?n:0,n)?e[t]:r}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function n7(e,t,n){t=t.length?td(t,function(e){return oP(e)?function(t){return nU(t,1===e.length?e[0]:e)}:e}):[aR];var r=-1;return t=td(t,tM(ii())),/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(n3(e,function(e,n,i){return{criteria:td(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return(/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;++r<a;){var u=rM(i[r],o[r]);if(u){if(r>=s)return u;return u*("desc"==n[r]?-1:1)}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return e.index-t.index}(e,t,n))})}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */function re(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=nU(e,a);n(s,a)&&ra(o,rC(a,e),s)}return o}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function rt(e,t,n,r){var i=r?t_:tw,o=-1,a=t.length,s=e;for(e===t&&(t=rI(t)),n&&(s=td(e,tM(n)));++o<a;)for(var u=0,l=t[o],c=n?n(l):l;(u=i(s,c,u,r))>-1;)s!==e&&eK.call(s,u,1),eK.call(e,u,1);return e}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function rn(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;iv(i)?eK.call(e,i,1):ry(e,i)}}return e}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function rr(e,t){return e+tY(t4()*(t-e+1))}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function ri(e,t){var n="";if(!e||t<1||t>9007199254740991)return n;// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do t%2&&(n+=e),(t=tY(t/2))&&(e+=e);while(t)return n}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function ro(e,t){return iT(i_(e,t,aR),e+"")}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function ra(e,t,n,i){if(!oq(e))return e;t=rC(t,e);for(var o=-1,a=t.length,s=a-1,u=e;null!=u&&++o<a;){var l=iR(t[o]),c=n;if("__proto__"===l||"constructor"===l||"prototype"===l)break;if(o!=s){var f=u[l];(c=i?i(f,l,u):r)===r&&(c=oq(f)?f:iv(t[o+1])?[]:{})}nw(u,l,c),u=u[l]}return e}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var rs=t8?function(e,t){return t8.set(e,t),e}:aR,ru=e9?function(e,t){return e9(e,"toString",{configurable:!0,enumerable:!1,value:aP(t),writable:!0})}:aR;/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function rl(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=em(i);++r<i;)o[r]=e[r+t];return o}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function rc(e,t){var n;return nR(e,function(e,r,i){return!(n=t(e,r,i))}),!!n}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function rf(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!oG(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return rp(e,t,aR,n)}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */function rp(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,u=null===t,l=oG(t),c=t===r;o<a;){var f=tY((o+a)/2),p=n(e[f]),d=p!==r,h=null===p,v=p==p,g=oG(p);if(s)var y=i||v;else y=c?v&&(i||d):u?v&&d&&(i||!h):l?v&&d&&!h&&(i||!g):!h&&!g&&(i?p<=t:p<t);y?o=f+1:a=f}return t2(a,4294967294)}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function rd(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!oC(s,u)){var u=s;o[i++]=0===a?0:a}}return o}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function rh(e){return"number"==typeof e?e:oG(e)?u:+e}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function rv(e){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(oP(e))return td(e,rv)+"";if(oG(e))return ns?ns.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function rg(e,t,n){var r=-1,i=tf,o=e.length,a=!0,s=[],u=s;if(n)a=!1,i=tp;else if(o>=200){var l=t?null:r0(e);if(l)return tU(l);a=!1,i=tD,u=new ng}else u=t?[]:s;e:for(;++r<o;){var c=e[r],f=t?t(c):c;if(c=n||0!==c?c:0,a&&f==f){for(var p=u.length;p--;)if(u[p]===f)continue e;t&&u.push(f),s.push(c)}else i(u,f,n)||(u!==s&&u.push(f),s.push(c))}return s}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function ry(e,t){return t=rC(t,e),null==(e=iS(e,t))||delete e[iR(i$(t))]}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function rm(e,t,n,r){return ra(e,t,n(nU(e,t)),r)}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function rx(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?rl(e,r?0:o,r?o+1:i):rl(e,r?o+1:0,r?i:o)}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function rb(e,t){var n=e;return n instanceof np&&(n=n.value()),tv(t,function(e,t){return t.func.apply(t.thisArg,th([e],t.args))},n)}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function rw(e,t,n){var r=e.length;if(r<2)return r?rg(e[0]):[];for(var i=-1,o=em(r);++i<r;)for(var a=e[i],s=-1;++s<r;)s!=i&&(o[i]=nM(o[i]||a,e[s],t,n));return rg(nO(o,1),t,n)}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function r_(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var u=i<a?t[i]:r;n(s,e[i],u)}return s}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function rS(e){return oR(e)?e:[]}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function rA(e){return"function"==typeof e?e:aR}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function rC(e,t){return oP(e)?e:iy(e,t)?[e]:iM(o5(e))}/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function rk(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:rl(e,t,n)}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var rT=e8||function(e){return e3.clearTimeout(e)};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function rE(e,t){if(t)return e.slice();var n=e.length,r=eF?eF(n):new e.constructor(n);return e.copy(r),r}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function rP(e){var t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function rj(e,t){var n=t?rP(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function rM(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=oG(e),s=t!==r,u=null===t,l=t==t,c=oG(t);if(!u&&!c&&!a&&e>t||a&&s&&l&&!u&&!c||i&&s&&l||!n&&l||!o)return 1;if(!i&&!a&&!c&&e<t||c&&n&&o&&!i&&!a||u&&n&&o||!s&&o||!l)return -1}return 0}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function rR(e,t,n,r){for(var i=-1,o=e.length,a=n.length,s=-1,u=t.length,l=t1(o-a,0),c=em(u+l),f=!r;++s<u;)c[s]=t[s];for(;++i<a;)(f||i<o)&&(c[n[i]]=e[i]);for(;l--;)c[s++]=e[i++];return c}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function rD(e,t,n,r){for(var i=-1,o=e.length,a=-1,s=n.length,u=-1,l=t.length,c=t1(o-s,0),f=em(c+l),p=!r;++i<c;)f[i]=e[i];for(var d=i;++u<l;)f[d+u]=t[u];for(;++a<s;)(p||i<o)&&(f[d+n[a]]=e[i++]);return f}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function rI(e,t){var n=-1,r=e.length;for(t||(t=em(r));++n<r;)t[n]=e[n];return t}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function rB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var u=t[a],l=i?i(n[u],e[u],u,n,e):r;l===r&&(l=e[u]),o?nC(n,u,l):nw(n,u,l)}return n}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function rL(e,t){return function(n,r){var i=oP(n)?ts:nS,o=t?t():{};return i(n,e,ii(r,2),o)}}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function rO(e){return ro(function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&ig(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=eS(t);++i<o;){var u=n[i];u&&e(t,u,i,a)}return t})}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function rH(e,t){return function(n,r){if(null==n)return n;if(!oM(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=eS(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function rq(e){return function(t,n,r){for(var i=-1,o=eS(t),a=r(t),s=a.length;s--;){var u=a[e?s:++i];if(!1===n(o[u],u,o))break}return t}}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function rN(e){return function(t){var n=tq(t=o5(t))?t$(t):r,i=n?n[0]:t.charAt(0),o=n?rk(n,1).join(""):t.slice(1);return i[e]()+o}}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function rF(e){return function(t){return tv(ak(am(t).replace(eU,"")),e,"")}}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function rW(e){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=nl(e.prototype),r=e.apply(n,t);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return oq(r)?r:n}}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function rU(e){return function(t,n,i){var o=eS(t);if(!oM(t)){var a=ii(n,3);t=aa(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function rV(e){return r6(function(t){var n=t.length,o=n,a=nf.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new ek(i);if(a&&!u&&"wrapper"==it(s))var u=new nf([],!0)}for(o=u?o:n;++o<n;){var l=it(s=t[o]),c="wrapper"==l?ie(s):r;u=c&&im(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?u[it(c[0])].apply(u,c[3]):1==s.length&&im(s)?u[l]():u.thru(s)}return function(){var e=arguments,r=e[0];if(u&&1==e.length&&oP(r))return u.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}})}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function r$(e,t,n,i,o,a,s,u,l,c){var f=128&t,p=1&t,d=2&t,h=24&t,v=512&t,g=d?r:rW(e);return function y(){for(var m=arguments.length,x=em(m),b=m;b--;)x[b]=arguments[b];if(h)var w=ir(y),_=/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(x,w);if(i&&(x=rR(x,i,o,h)),a&&(x=rD(x,a,s,h)),m-=_,h&&m<c){var S=tW(x,w);return rZ(e,t,r$,y.placeholder,n,x,S,u,l,c-m)}var A=p?n:this,C=d?A[e]:e;return m=x.length,u?x=/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function(e,t){for(var n=e.length,i=t2(t.length,n),o=rI(e);i--;){var a=t[i];e[i]=iv(a,n)?o[a]:r}return e}(x,u):v&&m>1&&x.reverse(),f&&l<m&&(x.length=l),this&&this!==e3&&this instanceof y&&(C=g||rW(C)),C.apply(A,x)}}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function rz(e,t){return function(n,r){var i,o;return i=t(r),o={},nN(n,function(t,n,r){e(o,i(t),n,r)}),o}}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function rG(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=rv(n),i=rv(i)):(n=rh(n),i=rh(i)),o=e(n,i)}return o}}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function rX(e){return r6(function(t){return t=td(t,tM(ii())),ro(function(n){var r=this;return e(t,function(e){return ta(e,r,n)})})})}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function rY(e,t){var n=(t=t===r?" ":rv(t)).length;if(n<2)return n?ri(t,e):t;var i=ri(t,tk(e/tV(t)));return tq(t)?rk(t$(i),0,e).join(""):i.slice(0,e)}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function rJ(e){return function(t,n,i){return i&&"number"!=typeof i&&ig(t,n,i)&&(n=i=r),// Ensure the sign of `-0` is preserved.
t=oZ(t),n===r?(n=t,t=0):n=oZ(n),i=i===r?t<n?1:-1:oZ(i),/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function(e,t,n,r){for(var i=-1,o=t1(tk((t-e)/(n||1)),0),a=em(o);o--;)a[r?o:++i]=e,e+=n;return a}(t,n,i,e)}}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function rQ(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=o1(t),n=o1(n)),e(t,n)}}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function rZ(e,t,n,i,o,a,s,u,l,c){var f=8&t,p=f?s:r,d=f?r:s,h=f?a:r,v=f?r:a;t|=f?32:64,4&(t&=~(f?64:32))||(t&=-4);var g=[e,t,o,h,p,v,d,u,l,c],y=n.apply(r,g);return im(e)&&iC(y,g),y.placeholder=i,iE(y,e,t)}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function rK(e){var t=e_[e];return function(e,n){if(e=o1(e),(n=null==n?0:t2(oK(n),292))&&tZ(e)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var r=(o5(e)+"e").split("e");return+((r=(o5(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var r0=Set&&1/tU(new Set([,-0]))[1]==s?function(e){return new Set(e)}:aO;/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function r1(e){return function(t){var n,r,i=ic(t);return i==y?tN(t):i==_?(n=-1,r=Array(t.size),t.forEach(function(e){r[++n]=[e,e]}),r):td(e(t),function(e){return[e,t[e]]})}}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */function r2(e,t,n,o,s,u,l,c){var f=2&t;if(!f&&"function"!=typeof e)throw new ek(i);var p=o?o.length:0;if(p||(t&=-97,o=s=r),l=l===r?l:t1(oK(l),0),c=c===r?c:oK(c),p-=s?s.length:0,64&t){var d=o,h=s;o=s=r}var v=f?r:ie(e),g=[e,t,n,o,s,d,h,u,l,c];if(v&&/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,s=128==r&&8==n||128==r&&256==n&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;// Exit early if metadata can't be merged.
if(o||s){1&r&&(e[2]=t[2],// Set when currying a bound function.
i|=1&n?0:4);// Compose partial arguments.
var u=t[3];if(u){var l=e[3];e[3]=l?rR(l,u,t[4]):u,e[4]=l?tW(e[3],a):t[4]}// Compose partial right arguments.
(u=t[5])&&(l=e[5],e[5]=l?rD(l,u,t[6]):u,e[6]=l?tW(e[5],a):t[6]),// Use source `argPos` if available.
(u=t[7])&&(e[7]=u),128&r&&(e[8]=null==e[8]?t[8]:t2(e[8],t[8])),null==e[9]&&(e[9]=t[9]),// Use source `func` and merge bitmasks.
e[0]=t[0],e[1]=i}}(g,v),e=g[0],t=g[1],n=g[2],o=g[3],s=g[4],(c=g[9]=g[9]===r?f?0:e.length:t1(g[9]-p,0))||!(24&t)||(t&=-25),t&&1!=t)8==t||16==t?(y=e,m=t,x=c,b=rW(y),R=function e(){for(var t=arguments.length,n=em(t),i=t,o=ir(e);i--;)n[i]=arguments[i];var a=t<3&&n[0]!==o&&n[t-1]!==o?[]:tW(n,o);return(t-=a.length)<x?rZ(y,m,r$,e.placeholder,r,n,a,r,r,x-t):ta(this&&this!==e3&&this instanceof e?b:y,this,n)}):32!=t&&33!=t||s.length?R=r$.apply(r,g):(w=e,_=t,S=n,A=o,C=1&_,k=rW(w),R=function e(){for(var t=-1,n=arguments.length,r=-1,i=A.length,o=em(i+n),a=this&&this!==e3&&this instanceof e?k:w;++r<i;)o[r]=A[r];for(;n--;)o[r++]=arguments[++t];return ta(a,C?S:this,o)});else var y,m,x,b,w,_,S,A,C,k,T,E,P,j,M,R=(T=e,E=t,P=n,j=1&E,M=rW(T),function e(){return(this&&this!==e3&&this instanceof e?M:T).apply(j?P:this,arguments)});return iE((v?rs:iC)(R,g),e,t)}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */function r5(e,t,n,i){return e===r||oC(e,eP[n])&&!eR.call(i,n)?t:e}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */function r3(e,t,n,i,o,a){return oq(e)&&oq(t)&&(// Recursively merge objects and arrays (susceptible to call stack limits).
a.set(t,e),n6(e,t,r,r3,a),a.delete(t)),e}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function r4(e){return oU(e)?r:e}/**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */function r9(e,t,n,i,o,a){var s=1&n,u=e.length,l=t.length;if(u!=l&&!(s&&l>u))return!1;// Check that cyclic values are equal.
var c=a.get(e),f=a.get(t);if(c&&f)return c==t&&f==e;var p=-1,d=!0,h=2&n?new ng:r;// Ignore non-index properties.
for(a.set(e,t),a.set(t,e);++p<u;){var v=e[p],g=t[p];if(i)var y=s?i(g,v,p,t,e,a):i(v,g,p,e,t,a);if(y!==r){if(y)continue;d=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(h){if(!ty(t,function(e,t){if(!tD(h,t)&&(v===e||o(v,e,n,i,a)))return h.push(t)})){d=!1;break}}else if(!(v===g||o(v,g,n,i,a))){d=!1;break}}return a.delete(e),a.delete(t),d}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function r6(e){return iT(i_(e,r,iN),e+"")}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function r8(e){return nV(e,aa,iu)}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function r7(e){return nV(e,as,il)}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var ie=t8?function(e){return t8.get(e)}:aO;/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function it(e){for(var t=e.name+"",n=t7[t],r=eR.call(t7,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function ir(e){return(eR.call(nu,"placeholder")?nu:e).placeholder}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function ii(){var e=nu.iteratee||aD;return e=e===aD?n1:e,arguments.length?e(arguments[0],arguments[1]):e}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function io(e,t){var n,r=e.__data__;return("string"==(n=typeof t)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t)?r["string"==typeof t?"string":"hash"]:r.map}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function ia(e){for(var t=aa(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,i==i&&!oq(i)]}return t}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function is(e,t){var n=null==e?r:e[t];return n0(n)?n:r}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var iu=tJ?function(e){return null==e?[]:tc(tJ(e=eS(e)),function(t){return eG.call(e,t)})}:aV,il=tJ?function(e){for(var t=[];e;)th(t,iu(e)),e=eW(e);return t}:aV,ic=n$;/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function ip(e,t,n){t=rC(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var a=iR(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&oH(i)&&iv(a,i)&&(oP(e)||oE(e))}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function id(e){return"function"!=typeof e.constructor||ib(e)?{}:nl(eW(e))}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function ih(e){return oP(e)||oE(e)||!!(e2&&e&&e[e2])}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function iv(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ep.test(e))&&e>-1&&e%1==0&&e<t}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function ig(e,t,n){if(!oq(n))return!1;var r=typeof t;return("number"==r?!!(oM(n)&&iv(t,n.length)):"string"==r&&t in n)&&oC(n[t],e)}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function iy(e,t){if(oP(e))return!1;var n=typeof e;return!!("number"==n||"symbol"==n||"boolean"==n||null==e||oG(e))||X.test(e)||!G.test(e)||null!=t&&e in eS(t)}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function im(e){var t=it(e),n=nu[t];if("function"!=typeof n||!(t in np.prototype))return!1;if(e===n)return!0;var r=ie(n);return!!r&&e===r[0]}(DataView&&ic(new DataView(new ArrayBuffer(1)))!=T||Map&&ic(new Map)!=y||Promise&&ic(Promise.resolve())!=b||Set&&ic(new Set)!=_||WeakMap&&ic(new WeakMap)!=C)&&(ic=function(e){var t=n$(e),n=t==x?e.constructor:r,i=n?iD(n):"";if(i)switch(i){case ne:return T;case nt:return y;case nn:return b;case nr:return _;case ni:return C}return t});/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var ix=ej?oL:a$;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function ib(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||eP)}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function iw(e,t){return function(n){return null!=n&&n[e]===t&&(t!==r||e in eS(n))}}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function i_(e,t,n){return t=t1(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=t1(r.length-t,0),a=em(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=em(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),ta(e,this,s)}}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function iS(e,t){return t.length<2?e:nU(e,rl(t,0,-1))}/**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */function iA(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}/**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var iC=iP(rs),ik=tm||function(e,t){return e3.setTimeout(e,t)},iT=iP(ru);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function iE(e,t,n){var r,i,o=t+"";return iT(e,/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ee,"{\n/* [wrapped with "+t+"] */\n")}(o,(r=(i=o.match(et))?i[1].split(en):[],tu(l,function(e){var t="_."+e[0];n&e[1]&&!tf(r,t)&&r.push(t)}),r.sort())))}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */function iP(e){var t=0,n=0;return function(){var i=t5(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function ij(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=rr(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var iM=(eg=(K=ox(function(e){var t=[];return 46/* . */===e.charCodeAt(0)&&t.push(""),e.replace(Y,function(e,n,r,i){t.push(r?i.replace(eo,"$1"):n||e)}),t},function(e){return 500===eg.size&&eg.clear(),e})).cache,K);/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function iR(e){if("string"==typeof e||oG(e))return e;var t=e+"";return"0"==t&&1/e==-s?"-0":t}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function iD(e){if(null!=e){try{return eM.call(e)}catch(e){}try{return e+""}catch(e){}}return""}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function iI(e){if(e instanceof np)return e.clone();var t=new nf(e.__wrapped__,e.__chain__);return t.__actions__=rI(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}/**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */var iB=ro(function(e,t){return oR(e)?nM(e,nO(t,1,oR,!0)):[]}),iL=ro(function(e,t){var n=i$(t);return oR(n)&&(n=r),oR(e)?nM(e,nO(t,1,oR,!0),ii(n,2)):[]}),iO=ro(function(e,t){var n=i$(t);return oR(n)&&(n=r),oR(e)?nM(e,nO(t,1,oR,!0),r,n):[]});/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */function iH(e,t,n){var r=null==e?0:e.length;if(!r)return -1;var i=null==n?0:oK(n);return i<0&&(i=t1(r+i,0)),tb(e,ii(t,3),i)}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */function iq(e,t,n){var i=null==e?0:e.length;if(!i)return -1;var o=i-1;return n!==r&&(o=oK(n),o=n<0?t1(i+o,0):t2(o,i-1)),tb(e,ii(t,3),o,!0)}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */function iN(e){return(null==e?0:e.length)?nO(e,1):[]}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */function iF(e){return e&&e.length?e[0]:r}/**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */var iW=ro(function(e){var t=td(e,rS);return t.length&&t[0]===e[0]?nY(t):[]}),iU=ro(function(e){var t=i$(e),n=td(e,rS);return t===i$(n)?t=r:n.pop(),n.length&&n[0]===e[0]?nY(n,ii(t,2)):[]}),iV=ro(function(e){var t=i$(e),n=td(e,rS);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?nY(n,r,t):[]});/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */function i$(e){var t=null==e?0:e.length;return t?e[t-1]:r}/**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */var iz=ro(iG);/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */function iG(e,t){return e&&e.length&&t&&t.length?rt(e,t):e}/**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */var iX=r6(function(e,t){var n=null==e?0:e.length,r=nk(e,t);return rn(e,td(t,function(e){return iv(e,n)?+e:e}).sort(rM)),r});/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function iY(e){return null==e?e:t9.call(e)}/**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */var iJ=ro(function(e){return rg(nO(e,1,oR,!0))}),iQ=ro(function(e){var t=i$(e);return oR(t)&&(t=r),rg(nO(e,1,oR,!0),ii(t,2))}),iZ=ro(function(e){var t=i$(e);return t="function"==typeof t?t:r,rg(nO(e,1,oR,!0),r,t)});/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */function iK(e){if(!(e&&e.length))return[];var t=0;return e=tc(e,function(e){if(oR(e))return t=t1(e.length,t),!0}),tP(t,function(t){return td(e,tC(t))})}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */function i0(e,t){if(!(e&&e.length))return[];var n=iK(e);return null==t?n:td(n,function(e){return ta(t,r,e)})}/**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */var i1=ro(function(e,t){return oR(e)?nM(e,t):[]}),i2=ro(function(e){return rw(tc(e,oR))}),i5=ro(function(e){var t=i$(e);return oR(t)&&(t=r),rw(tc(e,oR),ii(t,2))}),i3=ro(function(e){var t=i$(e);return t="function"==typeof t?t:r,rw(tc(e,oR),r,t)}),i4=ro(iK),i9=ro(function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,i0(e,n)});/*------------------------------------------------------------------------*//**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */function i6(e){var t=nu(e);return t.__chain__=!0,t}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */function i8(e,t){return t(e)}/**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */var i7=r6(function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return nk(t,e)};return!(t>1)&&!this.__actions__.length&&i instanceof np&&iv(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:i8,args:[o],thisArg:r}),new nf(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(r),e})):this.thru(o)}),oe=rL(function(e,t,n){eR.call(e,n)?++e[n]:nC(e,n,1)}),ot=rU(iH),on=rU(iq);/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function or(e,t){return(oP(e)?tu:nR)(e,ii(t,3))}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */function oi(e,t){return(oP(e)?/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}:nD)(e,ii(t,3))}/**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */var oo=rL(function(e,t,n){eR.call(e,n)?e[n].push(t):nC(e,n,[t])}),oa=ro(function(e,t,n){var r=-1,i="function"==typeof t,o=oM(e)?em(e.length):[];return nR(e,function(e){o[++r]=i?ta(t,e,n):nJ(e,t,n)}),o}),os=rL(function(e,t,n){nC(e,n,t)});/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */function ou(e,t){return(oP(e)?td:n3)(e,ii(t,3))}/**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */var ol=rL(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),oc=ro(function(e,t){if(null==e)return[];var n=t.length;return n>1&&ig(e,t[0],t[1])?t=[]:n>2&&ig(t[0],t[1],t[2])&&(t=[t[0]]),n7(e,nO(t,1),[])}),of=e7||function(){return e3.Date.now()};/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */function op(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,r2(e,128,r,r,r,r,t)}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */function od(e,t){var n;if("function"!=typeof t)throw new ek(i);return e=oK(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=r),n}}/**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */var oh=ro(function(e,t,n){var r=1;if(n.length){var i=tW(n,ir(oh));r|=32}return r2(e,r,t,n,i)}),ov=ro(function(e,t,n){var r=3;if(n.length){var i=tW(n,ir(ov));r|=32}return r2(t,r,e,n,i)});/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */function og(e,t,n){var o,a,s,u,l,c,f=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new ek(i);function v(t){var n=o,i=a;return o=a=r,f=t,u=e.apply(i,n)}function g(e){var n=e-c,i=e-f;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return c===r||n>=t||n<0||d&&i>=s}function y(){var e,n,r,i=of();if(g(i))return m(i);// Restart the timer.
l=ik(y,(e=i-c,n=i-f,r=t-e,d?t2(r,s-n):r))}function m(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(l=r,h&&o)?v(e):(o=a=r,u))}function x(){var e,n=of(),i=g(n);if(o=arguments,a=this,c=n,i){if(l===r)return(// Reset any `maxWait` timer.
f=e=c,// Start the timer for the trailing edge.
l=ik(y,t),p?v(e):u);if(d)return(// Handle invocations in a tight loop.
rT(l),l=ik(y,t),v(c))}return l===r&&(l=ik(y,t)),u}return t=o1(t)||0,oq(n)&&(p=!!n.leading,s=(d="maxWait"in n)?t1(o1(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),x.cancel=function(){l!==r&&rT(l),f=0,o=c=a=l=r},x.flush=function(){return l===r?u:m(of())},x}/**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */var oy=ro(function(e,t){return nj(e,1,t)}),om=ro(function(e,t,n){return nj(e,o1(t)||0,n)});/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */function ox(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new ek(i);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(ox.Cache||nv),n}/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */function ob(e){if("function"!=typeof e)throw new ek(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}// Expose `MapCache`.
ox.Cache=nv;/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */var ow=ro(function(e,t){var n=(t=1==t.length&&oP(t[0])?td(t[0],tM(ii())):td(nO(t,1),tM(ii()))).length;return ro(function(r){for(var i=-1,o=t2(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return ta(e,this,r)})}),o_=ro(function(e,t){var n=tW(t,ir(o_));return r2(e,32,r,t,n)}),oS=ro(function(e,t){var n=tW(t,ir(oS));return r2(e,64,r,t,n)}),oA=r6(function(e,t){return r2(e,256,r,r,r,t)});/**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */function oC(e,t){return e===t||e!=e&&t!=t}/**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */var ok=rQ(nz),oT=rQ(function(e,t){return e>=t}),oE=nQ(function(){return arguments}())?nQ:function(e){return oN(e)&&eR.call(e,"callee")&&!eG.call(e,"callee")},oP=em.isArray,oj=te?tM(te):/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function(e){return oN(e)&&n$(e)==k};/**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */function oM(e){return null!=e&&oH(e.length)&&!oL(e)}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */function oR(e){return oN(e)&&oM(e)}/**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */var oD=tQ||a$,oI=tt?tM(tt):/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function(e){return oN(e)&&n$(e)==d};/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */function oB(e){if(!oN(e))return!1;var t=n$(e);return t==h||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!oU(e)}/**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */function oL(e){if(!oq(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=n$(e);return t==v||t==g||"[object AsyncFunction]"==t||"[object Proxy]"==t}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */function oO(e){return"number"==typeof e&&e==oK(e)}/**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */function oH(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}/**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */function oq(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}/**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */function oN(e){return null!=e&&"object"==typeof e}/**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */var oF=tn?tM(tn):/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function(e){return oN(e)&&ic(e)==y};/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */function oW(e){return"number"==typeof e||oN(e)&&n$(e)==m}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */function oU(e){if(!oN(e)||n$(e)!=x)return!1;var t=eW(e);if(null===t)return!0;var n=eR.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&eM.call(n)==eL}/**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */var oV=tr?tM(tr):/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function(e){return oN(e)&&n$(e)==w},o$=ti?tM(ti):/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function(e){return oN(e)&&ic(e)==_};/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */function oz(e){return"string"==typeof e||!oP(e)&&oN(e)&&n$(e)==S}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */function oG(e){return"symbol"==typeof e||oN(e)&&n$(e)==A}/**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */var oX=to?tM(to):/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function(e){return oN(e)&&oH(e.length)&&!!eQ[n$(e)]},oY=rQ(n5),oJ=rQ(function(e,t){return e<=t});/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */function oQ(e){if(!e)return[];if(oM(e))return oz(e)?t$(e):rI(e);if(e5&&e[e5])return(/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[e5]()));var t=ic(e);return(t==y?tN:t==_?tU:av)(e)}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */function oZ(e){return e?(e=o1(e))===s||e===-s?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */function oK(e){var t=oZ(e),n=t%1;return t==t?n?t-n:t:0}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */function o0(e){return e?nT(oK(e),0,4294967295):0}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */function o1(e){if("number"==typeof e)return e;if(oG(e))return u;if(oq(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oq(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=tj(e);var n=el.test(e);return n||ef.test(e)?e1(e.slice(2),n?2:8):eu.test(e)?u:+e}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */function o2(e){return rB(e,as(e))}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */function o5(e){return null==e?"":rv(e)}/*------------------------------------------------------------------------*//**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */var o3=rO(function(e,t){if(ib(t)||oM(t)){rB(t,aa(t),e);return}for(var n in t)eR.call(t,n)&&nw(e,n,t[n])}),o4=rO(function(e,t){rB(t,as(t),e)}),o9=rO(function(e,t,n,r){rB(t,as(t),e,r)}),o6=rO(function(e,t,n,r){rB(t,aa(t),e,r)}),o8=r6(nk),o7=ro(function(e,t){e=eS(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&ig(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=as(a),u=-1,l=s.length;++u<l;){var c=s[u],f=e[c];(f===r||oC(f,eP[c])&&!eR.call(e,c))&&(e[c]=a[c])}return e}),ae=ro(function(e){return e.push(r,r3),ta(al,r,e)});/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */function at(e,t,n){var i=null==e?r:nU(e,t);return i===r?n:i}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */function an(e,t){return null!=e&&ip(e,t,nX)}/**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */var ar=rz(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=eB.call(t)),e[t]=n},aP(aR)),ai=rz(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=eB.call(t)),eR.call(e,t)?e[t].push(n):e[t]=[n]},ii),ao=ro(nJ);/**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */function aa(e){return oM(e)?nm(e):n2(e)}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */function as(e){return oM(e)?nm(e,!0):/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function(e){if(!oq(e))return(/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function(e){var t=[];if(null!=e)for(var n in eS(e))t.push(n);return t}(e));var t=ib(e),n=[];for(var r in e)"constructor"==r&&(t||!eR.call(e,r))||n.push(r);return n}(e)}/**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */var au=rO(function(e,t,n){n6(e,t,n)}),al=rO(function(e,t,n,r){n6(e,t,n,r)}),ac=r6(function(e,t){var n={};if(null==e)return n;var r=!1;t=td(t,function(t){return t=rC(t,e),r||(r=t.length>1),t}),rB(e,r7(e),n),r&&(n=nE(n,7,r4));for(var i=t.length;i--;)ry(n,t[i]);return n}),af=r6(function(e,t){return null==e?{}:re(e,t,function(t,n){return an(e,n)})});/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */function ap(e,t){if(null==e)return{};var n=td(r7(e),function(e){return[e]});return t=ii(t),re(e,n,function(e,n){return t(e,n[0])})}/**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */var ad=r1(aa),ah=r1(as);/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */function av(e){return null==e?[]:tR(e,aa(e))}/*------------------------------------------------------------------------*//**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */var ag=rF(function(e,t,n){return t=t.toLowerCase(),e+(n?ay(t):t)});/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */function ay(e){return aC(o5(e).toLowerCase())}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */function am(e){return(e=o5(e))&&e.replace(ed,tL).replace(eV,"")}/**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */var ax=rF(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),ab=rF(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),aw=rN("toLowerCase"),a_=rF(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),aS=rF(function(e,t,n){return e+(n?" ":"")+aC(t)}),aA=rF(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),aC=rN("toUpperCase");/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */function ak(e,t,n){if(e=o5(e),(t=n?r:t)===r){var i;return(i=e,eX.test(i))?e.match(ez)||[]:e.match(er)||[]}return e.match(t)||[]}/*------------------------------------------------------------------------*//**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */var aT=ro(function(e,t){try{return ta(e,r,t)}catch(e){return oB(e)?e:new eb(e)}}),aE=r6(function(e,t){return tu(t,function(t){nC(e,t=iR(t),oh(e[t],e))}),e});/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */function aP(e){return function(){return e}}/**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */var aj=rV(),aM=rV(!0);/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */function aR(e){return e}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */function aD(e){return n1("function"==typeof e?e:nE(e,1))}/**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */var aI=ro(function(e,t){return function(n){return nJ(n,e,t)}}),aB=ro(function(e,t){return function(n){return nJ(e,n,t)}});/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */function aL(e,t,n){var r=aa(t),i=nW(t,r);null!=n||oq(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=nW(t,aa(t)));var o=!(oq(n)&&"chain"in n)||!!n.chain,a=oL(e);return tu(i,function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=rI(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,th([this.value()],arguments))})}),e}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */function aO(){// No operation performed.
}/**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */var aH=rX(td),aq=rX(tl),aN=rX(ty);/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */function aF(e){return iy(e)?tC(iR(e)):function(t){return nU(t,e)}}/**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */var aW=rJ(),aU=rJ(!0);/**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */function aV(){return[]}/**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */function a$(){return!1}/*------------------------------------------------------------------------*//**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */var az=rG(function(e,t){return e+t},0),aG=rK("ceil"),aX=rG(function(e,t){return e/t},1),aY=rK("floor"),aJ=rG(function(e,t){return e*t},1),aQ=rK("round"),aZ=rG(function(e,t){return e-t},0);return(/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
nu.after=/*------------------------------------------------------------------------*//**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */function(e,t){if("function"!=typeof t)throw new ek(i);return e=oK(e),function(){if(--e<1)return t.apply(this,arguments)}},nu.ary=op,nu.assign=o3,nu.assignIn=o4,nu.assignInWith=o9,nu.assignWith=o6,nu.at=o8,nu.before=od,nu.bind=oh,nu.bindAll=aE,nu.bindKey=ov,nu.castArray=/*------------------------------------------------------------------------*//**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */function(){if(!arguments.length)return[];var e=arguments[0];return oP(e)?e:[e]},nu.chain=i6,nu.chunk=/*------------------------------------------------------------------------*//**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */function(e,t,n){t=(n?ig(e,t,n):t===r)?1:t1(oK(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=em(tk(i/t));o<i;)s[a++]=rl(e,o,o+=t);return s},nu.compact=/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},nu.concat=/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */function(){var e=arguments.length;if(!e)return[];for(var t=em(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return th(oP(n)?rI(n):[n],nO(t,1))},nu.cond=/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */function(e){var t=null==e?0:e.length,n=ii();return e=t?td(e,function(e){if("function"!=typeof e[1])throw new ek(i);return[n(e[0]),e[1]]}):[],ro(function(n){for(var r=-1;++r<t;){var i=e[r];if(ta(i[0],this,n))return ta(i[1],this,n)}})},nu.conforms=/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */function(e){var t,n;return n=aa(t=nE(e,1)),function(e){return nP(e,t,n)}},nu.constant=aP,nu.countBy=oe,nu.create=/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */function(e,t){var n=nl(e);return null==t?n:nA(n,t)},nu.curry=/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */function e(t,n,i){n=i?r:n;var o=r2(t,8,r,r,r,r,r,n);return o.placeholder=e.placeholder,o},nu.curryRight=/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */function e(t,n,i){n=i?r:n;var o=r2(t,16,r,r,r,r,r,n);return o.placeholder=e.placeholder,o},nu.debounce=og,nu.defaults=o7,nu.defaultsDeep=ae,nu.defer=oy,nu.delay=om,nu.difference=iB,nu.differenceBy=iL,nu.differenceWith=iO,nu.drop=/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function(e,t,n){var i=null==e?0:e.length;return i?rl(e,(t=n||t===r?1:oK(t))<0?0:t,i):[]},nu.dropRight=/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */function(e,t,n){var i=null==e?0:e.length;return i?rl(e,0,(t=i-(t=n||t===r?1:oK(t)))<0?0:t):[]},nu.dropRightWhile=/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function(e,t){return e&&e.length?rx(e,ii(t,3),!0,!0):[]},nu.dropWhile=/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */function(e,t){return e&&e.length?rx(e,ii(t,3),!0):[]},nu.fill=/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&ig(e,t,n)&&(n=0,i=o),/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function(e,t,n,i){var o=e.length;for((n=oK(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:oK(i))<0&&(i+=o),i=n>i?0:o0(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},nu.filter=/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */function(e,t){return(oP(e)?tc:nL)(e,ii(t,3))},nu.flatMap=/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function(e,t){return nO(ou(e,t),1)},nu.flatMapDeep=/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */function(e,t){return nO(ou(e,t),s)},nu.flatMapDepth=/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */function(e,t,n){return n=n===r?1:oK(n),nO(ou(e,t),n)},nu.flatten=iN,nu.flattenDeep=/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */function(e){return(null==e?0:e.length)?nO(e,s):[]},nu.flattenDepth=/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */function(e,t){return(null==e?0:e.length)?nO(e,t=t===r?1:oK(t)):[]},nu.flip=/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */function(e){return r2(e,512)},nu.flow=aj,nu.flowRight=aM,nu.fromPairs=/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},nu.functions=/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */function(e){return null==e?[]:nW(e,aa(e))},nu.functionsIn=/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */function(e){return null==e?[]:nW(e,as(e))},nu.groupBy=oo,nu.initial=/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */function(e){return(null==e?0:e.length)?rl(e,0,-1):[]},nu.intersection=iW,nu.intersectionBy=iU,nu.intersectionWith=iV,nu.invert=ar,nu.invertBy=ai,nu.invokeMap=oa,nu.iteratee=aD,nu.keyBy=os,nu.keys=aa,nu.keysIn=as,nu.map=ou,nu.mapKeys=/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */function(e,t){var n={};return t=ii(t,3),nN(e,function(e,r,i){nC(n,t(e,r,i),e)}),n},nu.mapValues=/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */function(e,t){var n={};return t=ii(t,3),nN(e,function(e,r,i){nC(n,r,t(e,r,i))}),n},nu.matches=/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */function(e){return n4(nE(e,1))},nu.matchesProperty=/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */function(e,t){return n9(e,nE(t,1))},nu.memoize=ox,nu.merge=au,nu.mergeWith=al,nu.method=aI,nu.methodOf=aB,nu.mixin=aL,nu.negate=ob,nu.nthArg=/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */function(e){return e=oK(e),ro(function(t){return n8(t,e)})},nu.omit=ac,nu.omitBy=/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */function(e,t){return ap(e,ob(ii(t)))},nu.once=/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */function(e){return od(2,e)},nu.orderBy=/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */function(e,t,n,i){return null==e?[]:(oP(t)||(t=null==t?[]:[t]),oP(n=i?r:n)||(n=null==n?[]:[n]),n7(e,t,n))},nu.over=aH,nu.overArgs=ow,nu.overEvery=aq,nu.overSome=aN,nu.partial=o_,nu.partialRight=oS,nu.partition=ol,nu.pick=af,nu.pickBy=ap,nu.property=aF,nu.propertyOf=/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */function(e){return function(t){return null==e?r:nU(e,t)}},nu.pull=iz,nu.pullAll=iG,nu.pullAllBy=/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */function(e,t,n){return e&&e.length&&t&&t.length?rt(e,t,ii(n,2)):e},nu.pullAllWith=/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */function(e,t,n){return e&&e.length&&t&&t.length?rt(e,t,r,n):e},nu.pullAt=iX,nu.range=aW,nu.rangeRight=aU,nu.rearg=oA,nu.reject=/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */function(e,t){return(oP(e)?tc:nL)(e,ob(ii(t,3)))},nu.remove=/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */function(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],o=e.length;for(t=ii(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return rn(e,i),n},nu.rest=/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */function(e,t){if("function"!=typeof e)throw new ek(i);return ro(e,t=t===r?t:oK(t))},nu.reverse=iY,nu.sampleSize=/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */function(e,t,n){return t=(n?ig(e,t,n):t===r)?1:oK(t),(oP(e)?/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function(e,t){return ij(rI(e),nT(t,0,e.length))}:/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function(e,t){var n=av(e);return ij(n,nT(t,0,n.length))})(e,t)},nu.set=/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */function(e,t,n){return null==e?e:ra(e,t,n)},nu.setWith=/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:ra(e,t,n,i)},nu.shuffle=/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */function(e){return(oP(e)?/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function(e){return ij(rI(e))}:/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function(e){return ij(av(e))})(e)},nu.slice=/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&ig(e,t,n)?(t=0,n=i):(t=null==t?0:oK(t),n=n===r?i:oK(n)),rl(e,t,n)):[]},nu.sortBy=oc,nu.sortedUniq=/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */function(e){return e&&e.length?rd(e):[]},nu.sortedUniqBy=/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */function(e,t){return e&&e.length?rd(e,ii(t,2)):[]},nu.split=/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */function(e,t,n){return(n&&"number"!=typeof n&&ig(e,t,n)&&(t=n=r),n=n===r?4294967295:n>>>0)?(e=o5(e))&&("string"==typeof t||null!=t&&!oV(t))&&!(t=rv(t))&&tq(e)?rk(t$(e),0,n):e.split(t,n):[]},nu.spread=/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */function(e,t){if("function"!=typeof e)throw new ek(i);return t=null==t?0:t1(oK(t),0),ro(function(n){var r=n[t],i=rk(n,0,t);return r&&th(i,r),ta(e,this,i)})},nu.tail=/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */function(e){var t=null==e?0:e.length;return t?rl(e,1,t):[]},nu.take=/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */function(e,t,n){return e&&e.length?rl(e,0,(t=n||t===r?1:oK(t))<0?0:t):[]},nu.takeRight=/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */function(e,t,n){var i=null==e?0:e.length;return i?rl(e,(t=i-(t=n||t===r?1:oK(t)))<0?0:t,i):[]},nu.takeRightWhile=/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */function(e,t){return e&&e.length?rx(e,ii(t,3),!1,!0):[]},nu.takeWhile=/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */function(e,t){return e&&e.length?rx(e,ii(t,3)):[]},nu.tap=/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */function(e,t){return t(e),e},nu.throttle=/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new ek(i);return oq(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),og(e,t,{leading:r,maxWait:t,trailing:o})},nu.thru=i8,nu.toArray=oQ,nu.toPairs=ad,nu.toPairsIn=ah,nu.toPath=/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */function(e){return oP(e)?td(e,iR):oG(e)?[e]:rI(iM(o5(e)))},nu.toPlainObject=o2,nu.transform=/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */function(e,t,n){var r=oP(e),i=r||oD(e)||oX(e);if(t=ii(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:oq(e)&&oL(o)?nl(eW(e)):{}}return(i?tu:nN)(e,function(e,r,i){return t(n,e,r,i)}),n},nu.unary=/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */function(e){return op(e,1)},nu.union=iJ,nu.unionBy=iQ,nu.unionWith=iZ,nu.uniq=/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */function(e){return e&&e.length?rg(e):[]},nu.uniqBy=/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */function(e,t){return e&&e.length?rg(e,ii(t,2)):[]},nu.uniqWith=/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */function(e,t){return t="function"==typeof t?t:r,e&&e.length?rg(e,r,t):[]},nu.unset=/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */function(e,t){return null==e||ry(e,t)},nu.unzip=iK,nu.unzipWith=i0,nu.update=/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */function(e,t,n){return null==e?e:rm(e,t,rA(n))},nu.updateWith=/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:rm(e,t,rA(n),i)},nu.values=av,nu.valuesIn=/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */function(e){return null==e?[]:tR(e,as(e))},nu.without=i1,nu.words=ak,nu.wrap=/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */function(e,t){return o_(rA(t),e)},nu.xor=i2,nu.xorBy=i5,nu.xorWith=i3,nu.zip=i4,nu.zipObject=/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */function(e,t){return r_(e||[],t||[],nw)},nu.zipObjectDeep=/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */function(e,t){return r_(e||[],t||[],ra)},nu.zipWith=i9,// Add aliases.
nu.entries=ad,nu.entriesIn=ah,nu.extend=o4,nu.extendWith=o9,// Add methods to `lodash.prototype`.
aL(nu,nu),/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
nu.add=az,nu.attempt=aT,nu.camelCase=ag,nu.capitalize=ay,nu.ceil=aG,nu.clamp=/*------------------------------------------------------------------------*//**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=o1(n))==n?n:0),t!==r&&(t=(t=o1(t))==t?t:0),nT(o1(e),t,n)},nu.clone=/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */function(e){return nE(e,4)},nu.cloneDeep=/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */function(e){return nE(e,5)},nu.cloneDeepWith=/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */function(e,t){return nE(e,5,t="function"==typeof t?t:r)},nu.cloneWith=/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */function(e,t){return nE(e,4,t="function"==typeof t?t:r)},nu.conformsTo=/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */function(e,t){return null==t||nP(e,t,aa(t))},nu.deburr=am,nu.defaultTo=/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */function(e,t){return null==e||e!=e?t:e},nu.divide=aX,nu.endsWith=/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */function(e,t,n){e=o5(e),t=rv(t);var i=e.length,o=n=n===r?i:nT(oK(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},nu.eq=oC,nu.escape=/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */function(e){return(e=o5(e))&&U.test(e)?e.replace(F,tO):e},nu.escapeRegExp=/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */function(e){return(e=o5(e))&&Q.test(e)?e.replace(J,"\\$&"):e},nu.every=/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */function(e,t,n){var i=oP(e)?tl:nI;return n&&ig(e,t,n)&&(t=r),i(e,ii(t,3))},nu.find=ot,nu.findIndex=iH,nu.findKey=/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */function(e,t){return tx(e,ii(t,3),nN)},nu.findLast=on,nu.findLastIndex=iq,nu.findLastKey=/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */function(e,t){return tx(e,ii(t,3),nF)},nu.floor=aY,nu.forEach=or,nu.forEachRight=oi,nu.forIn=/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */function(e,t){return null==e?e:nH(e,ii(t,3),as)},nu.forInRight=/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */function(e,t){return null==e?e:nq(e,ii(t,3),as)},nu.forOwn=/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */function(e,t){return e&&nN(e,ii(t,3))},nu.forOwnRight=/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */function(e,t){return e&&nF(e,ii(t,3))},nu.get=at,nu.gt=ok,nu.gte=oT,nu.has=/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */function(e,t){return null!=e&&ip(e,t,nG)},nu.hasIn=an,nu.head=iF,nu.identity=aR,nu.includes=/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */function(e,t,n,r){e=oM(e)?e:av(e),n=n&&!r?oK(n):0;var i=e.length;return n<0&&(n=t1(i+n,0)),oz(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&tw(e,t,n)>-1},nu.indexOf=/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */function(e,t,n){var r=null==e?0:e.length;if(!r)return -1;var i=null==n?0:oK(n);return i<0&&(i=t1(r+i,0)),tw(e,t,i)},nu.inRange=/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */function(e,t,n){var i,o,a;return t=oZ(t),n===r?(n=t,t=0):n=oZ(n),(i=e=o1(e))>=t2(o=t,a=n)&&i<t1(o,a)},nu.invoke=ao,nu.isArguments=oE,nu.isArray=oP,nu.isArrayBuffer=oj,nu.isArrayLike=oM,nu.isArrayLikeObject=oR,nu.isBoolean=/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */function(e){return!0===e||!1===e||oN(e)&&n$(e)==p},nu.isBuffer=oD,nu.isDate=oI,nu.isElement=/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */function(e){return oN(e)&&1===e.nodeType&&!oU(e)},nu.isEmpty=/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */function(e){if(null==e)return!0;if(oM(e)&&(oP(e)||"string"==typeof e||"function"==typeof e.splice||oD(e)||oX(e)||oE(e)))return!e.length;var t=ic(e);if(t==y||t==_)return!e.size;if(ib(e))return!n2(e).length;for(var n in e)if(eR.call(e,n))return!1;return!0},nu.isEqual=/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */function(e,t){return nZ(e,t)},nu.isEqualWith=/**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?nZ(e,t,r,n):!!i},nu.isError=oB,nu.isFinite=/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */function(e){return"number"==typeof e&&tZ(e)},nu.isFunction=oL,nu.isInteger=oO,nu.isLength=oH,nu.isMap=oF,nu.isMatch=/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */function(e,t){return e===t||nK(e,t,ia(t))},nu.isMatchWith=/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */function(e,t,n){return n="function"==typeof n?n:r,nK(e,t,ia(t),n)},nu.isNaN=/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */function(e){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return oW(e)&&e!=+e},nu.isNative=/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */function(e){if(ix(e))throw new eb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return n0(e)},nu.isNil=/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */function(e){return null==e},nu.isNull=/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */function(e){return null===e},nu.isNumber=oW,nu.isObject=oq,nu.isObjectLike=oN,nu.isPlainObject=oU,nu.isRegExp=oV,nu.isSafeInteger=/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */function(e){return oO(e)&&e>=-9007199254740991&&e<=9007199254740991},nu.isSet=o$,nu.isString=oz,nu.isSymbol=oG,nu.isTypedArray=oX,nu.isUndefined=/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */function(e){return e===r},nu.isWeakMap=/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */function(e){return oN(e)&&ic(e)==C},nu.isWeakSet=/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */function(e){return oN(e)&&"[object WeakSet]"==n$(e)},nu.join=/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */function(e,t){return null==e?"":tK.call(e,t)},nu.kebabCase=ax,nu.last=i$,nu.lastIndexOf=/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */function(e,t,n){var i=null==e?0:e.length;if(!i)return -1;var o=i;return n!==r&&(o=(o=oK(n))<0?t1(i+o,0):t2(o,i-1)),t==t?/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function(e,t,n){for(var r=n+1;r--&&e[r]!==t;);return r}(e,t,o):tb(e,tS,o,!0)},nu.lowerCase=ab,nu.lowerFirst=aw,nu.lt=oY,nu.lte=oJ,nu.max=/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */function(e){return e&&e.length?nB(e,aR,nz):r},nu.maxBy=/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */function(e,t){return e&&e.length?nB(e,ii(t,2),nz):r},nu.mean=/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */function(e){return tA(e,aR)},nu.meanBy=/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */function(e,t){return tA(e,ii(t,2))},nu.min=/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */function(e){return e&&e.length?nB(e,aR,n5):r},nu.minBy=/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */function(e,t){return e&&e.length?nB(e,ii(t,2),n5):r},nu.stubArray=aV,nu.stubFalse=a$,nu.stubObject=/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */function(){return{}},nu.stubString=/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */function(){return""},nu.stubTrue=/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */function(){return!0},nu.multiply=aJ,nu.nth=/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */function(e,t){return e&&e.length?n8(e,oK(t)):r},nu.noConflict=/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */function(){return e3._===this&&(e3._=eO),this},nu.noop=aO,nu.now=of,nu.pad=/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */function(e,t,n){e=o5(e);var r=(t=oK(t))?tV(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return rY(tY(i),n)+e+rY(tk(i),n)},nu.padEnd=/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */function(e,t,n){e=o5(e);var r=(t=oK(t))?tV(e):0;return t&&r<t?e+rY(t-r,n):e},nu.padStart=/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */function(e,t,n){e=o5(e);var r=(t=oK(t))?tV(e):0;return t&&r<t?rY(t-r,n)+e:e},nu.parseInt=/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */function(e,t,n){return n||null==t?t=0:t&&(t=+t),t3(o5(e).replace(Z,""),t||0)},nu.random=/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */function(e,t,n){if(n&&"boolean"!=typeof n&&ig(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=oZ(e),t===r?(t=e,e=0):t=oZ(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=t4();return t2(e+o*(t-e+e0("1e-"+((o+"").length-1))),t)}return rr(e,t)},nu.reduce=/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */function(e,t,n){var r=oP(e)?tv:tT,i=arguments.length<3;return r(e,ii(t,4),n,i,nR)},nu.reduceRight=/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */function(e,t,n){var r=oP(e)?tg:tT,i=arguments.length<3;return r(e,ii(t,4),n,i,nD)},nu.repeat=/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */function(e,t,n){return t=(n?ig(e,t,n):t===r)?1:oK(t),ri(o5(e),t)},nu.replace=/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */function(){var e=arguments,t=o5(e[0]);return e.length<3?t:t.replace(e[1],e[2])},nu.result=/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */function(e,t,n){t=rC(t,e);var i=-1,o=t.length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[iR(t[i])];a===r&&(i=o,a=n),e=oL(a)?a.call(e):a}return e},nu.round=aQ,nu.runInContext=e,nu.sample=/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */function(e){return(oP(e)?nx:/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function(e){return nx(av(e))})(e)},nu.size=/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */function(e){if(null==e)return 0;if(oM(e))return oz(e)?tV(e):e.length;var t=ic(e);return t==y||t==_?e.size:n2(e).length},nu.snakeCase=a_,nu.some=/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */function(e,t,n){var i=oP(e)?ty:rc;return n&&ig(e,t,n)&&(t=r),i(e,ii(t,3))},nu.sortedIndex=/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */function(e,t){return rf(e,t)},nu.sortedIndexBy=/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */function(e,t,n){return rp(e,t,ii(n,2))},nu.sortedIndexOf=/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */function(e,t){var n=null==e?0:e.length;if(n){var r=rf(e,t);if(r<n&&oC(e[r],t))return r}return -1},nu.sortedLastIndex=/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */function(e,t){return rf(e,t,!0)},nu.sortedLastIndexBy=/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */function(e,t,n){return rp(e,t,ii(n,2),!0)},nu.sortedLastIndexOf=/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */function(e,t){if(null==e?0:e.length){var n=rf(e,t,!0)-1;if(oC(e[n],t))return n}return -1},nu.startCase=aS,nu.startsWith=/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */function(e,t,n){return e=o5(e),n=null==n?0:nT(oK(n),0,e.length),t=rv(t),e.slice(n,n+t.length)==t},nu.subtract=aZ,nu.sum=/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */function(e){return e&&e.length?tE(e,aR):0},nu.sumBy=/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */function(e,t){return e&&e.length?tE(e,ii(t,2)):0},nu.template=/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */function(e,t,n){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var i=nu.templateSettings;n&&ig(e,t,n)&&(t=r),e=o5(e),t=o9({},t,i,r5);var o,a,s=o9({},t.imports,i.imports,r5),u=aa(s),l=tR(s,u),c=0,f=t.interpolate||eh,p="__p += '",d=eA((t.escape||eh).source+"|"+f.source+"|"+(f===z?ea:eh).source+"|"+(t.evaluate||eh).source+"|$","g"),h="//# sourceURL="+(eR.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++eJ+"]")+"\n";e.replace(d,function(t,n,r,i,s,u){// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return r||(r=i),// Escape characters that can't be included in string literals.
p+=e.slice(c,u).replace(ev,tH),n&&(o=!0,p+="' +\n__e("+n+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+t.length,t}),p+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var v=eR.call(t,"variable")&&t.variable;if(v){if(ei.test(v))throw new eb("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";// Cleanup code by stripping empty strings.
p=(a?p.replace(O,""):p).replace(H,"$1").replace(q,"$1;"),// Frame code as the function body.
p="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=aT(function(){return ew(u,h+"return "+p).apply(r,l)});if(// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
g.source=p,oB(g))throw g;return g},nu.times=/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */function(e,t){if((e=oK(e))<1||e>9007199254740991)return[];var n=4294967295,r=t2(e,4294967295);t=ii(t),e-=4294967295;for(var i=tP(r,t);++n<e;)t(n);return i},nu.toFinite=oZ,nu.toInteger=oK,nu.toLength=o0,nu.toLower=/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */function(e){return o5(e).toLowerCase()},nu.toNumber=o1,nu.toSafeInteger=/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */function(e){return e?nT(oK(e),-9007199254740991,9007199254740991):0===e?e:0},nu.toString=o5,nu.toUpper=/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */function(e){return o5(e).toUpperCase()},nu.trim=/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */function(e,t,n){if((e=o5(e))&&(n||t===r))return tj(e);if(!e||!(t=rv(t)))return e;var i=t$(e),o=t$(t),a=tI(i,o),s=tB(i,o)+1;return rk(i,a,s).join("")},nu.trimEnd=/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */function(e,t,n){if((e=o5(e))&&(n||t===r))return e.slice(0,tz(e)+1);if(!e||!(t=rv(t)))return e;var i=t$(e),o=tB(i,t$(t))+1;return rk(i,0,o).join("")},nu.trimStart=/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */function(e,t,n){if((e=o5(e))&&(n||t===r))return e.replace(Z,"");if(!e||!(t=rv(t)))return e;var i=t$(e),o=tI(i,t$(t));return rk(i,o).join("")},nu.truncate=/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */function(e,t){var n=30,i="...";if(oq(t)){var o="separator"in t?t.separator:o;n="length"in t?oK(t.length):n,i="omission"in t?rv(t.omission):i}var a=(e=o5(e)).length;if(tq(e)){var s=t$(e);a=s.length}if(n>=a)return e;var u=n-tV(i);if(u<1)return i;var l=s?rk(s,0,u).join(""):e.slice(0,u);if(o===r)return l+i;if(s&&(u+=l.length-u),oV(o)){if(e.slice(u).search(o)){var c,f=l;for(o.global||(o=eA(o.source,o5(es.exec(o))+"g")),o.lastIndex=0;c=o.exec(f);)var p=c.index;l=l.slice(0,p===r?u:p)}}else if(e.indexOf(rv(o),u)!=u){var d=l.lastIndexOf(o);d>-1&&(l=l.slice(0,d))}return l+i},nu.unescape=/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */function(e){return(e=o5(e))&&W.test(e)?e.replace(N,tG):e},nu.uniqueId=/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */function(e){var t=++eD;return o5(e)+t},nu.upperCase=aA,nu.upperFirst=aC,// Add aliases.
nu.each=or,nu.eachRight=oi,nu.first=iF,aL(nu,(ey={},nN(nu,function(e,t){eR.call(nu.prototype,t)||(ey[t]=e)}),ey),{chain:!1}),/*------------------------------------------------------------------------*//**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */nu.VERSION="4.17.21",// Assign default placeholders.
tu(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){nu[e].placeholder=nu}),// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
tu(["drop","take"],function(e,t){np.prototype[e]=function(n){n=n===r?1:t1(oK(n),0);var i=this.__filtered__&&!t?new np(this):this.clone();return i.__filtered__?i.__takeCount__=t2(n,i.__takeCount__):i.__views__.push({size:t2(n,4294967295),type:e+(i.__dir__<0?"Right":"")}),i},np.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),// Add `LazyWrapper` methods that accept an `iteratee` value.
tu(["filter","map","takeWhile"],function(e,t){var n=t+1,r=1==n||3==n;np.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ii(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),// Add `LazyWrapper` methods for `_.head` and `_.last`.
tu(["head","last"],function(e,t){var n="take"+(t?"Right":"");np.prototype[e]=function(){return this[n](1).value()[0]}}),// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
tu(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");np.prototype[e]=function(){return this.__filtered__?new np(this):this[n](1)}}),np.prototype.compact=function(){return this.filter(aR)},np.prototype.find=function(e){return this.filter(e).head()},np.prototype.findLast=function(e){return this.reverse().find(e)},np.prototype.invokeMap=ro(function(e,t){return"function"==typeof e?new np(this):this.map(function(n){return nJ(n,e,t)})}),np.prototype.reject=function(e){return this.filter(ob(ii(e)))},np.prototype.slice=function(e,t){e=oK(e);var n=this;return n.__filtered__&&(e>0||t<0)?new np(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=oK(t))<0?n.dropRight(-t):n.take(t-e)),n)},np.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},np.prototype.toArray=function(){return this.take(4294967295)},// Add `LazyWrapper` methods to `lodash.prototype`.
nN(np.prototype,function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=nu[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(nu.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,u=t instanceof np,l=s[0],c=u||oP(t),f=function(e){var t=o.apply(nu,th([e],s));return i&&p?t[0]:t};c&&n&&"function"==typeof l&&1!=l.length&&(u=c=!1);var p=this.__chain__,d=!!this.__actions__.length,h=a&&!p,v=u&&!d;if(!a&&c){t=v?t:new np(this);var g=e.apply(t,s);return g.__actions__.push({func:i8,args:[f],thisArg:r}),new nf(g,p)}return h&&v?e.apply(this,s):(g=this.thru(f),h?i?g.value()[0]:g.value():g)})}),// Add `Array` methods to `lodash.prototype`.
tu(["pop","push","shift","sort","splice","unshift"],function(e){var t=eT[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);nu.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(oP(i)?i:[],e)}return this[n](function(n){return t.apply(oP(n)?n:[],e)})}}),// Map minified method names to their real names.
nN(np.prototype,function(e,t){var n=nu[t];if(n){var r=n.name+"";eR.call(t7,r)||(t7[r]=[]),t7[r].push({name:t,func:n})}}),t7[r$(r,2).name]=[{name:"wrapper",func:r}],// Add methods to `LazyWrapper`.
np.prototype.clone=/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function(){var e=new np(this.__wrapped__);return e.__actions__=rI(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=rI(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=rI(this.__views__),e},np.prototype.reverse=/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function(){if(this.__filtered__){var e=new np(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e},np.prototype.value=/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function(){var e=this.__wrapped__.value(),t=this.__dir__,n=oP(e),r=t<0,i=n?e.length:0,o=/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=t2(t,e+a);break;case"takeRight":e=t1(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,l=r?s:a-1,c=this.__iteratees__,f=c.length,p=0,d=t2(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return rb(e,this.__actions__);var h=[];e:for(;u--&&p<d;){for(var v=-1,g=e[l+=t];++v<f;){var y=c[v],m=y.iteratee,x=y.type,b=m(g);if(2==x)g=b;else if(!b){if(1==x)continue e;break e}}h[p++]=g}return h},// Add chain sequence methods to the `lodash` wrapper.
nu.prototype.at=i7,nu.prototype.chain=/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */function(){return i6(this)},nu.prototype.commit=/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */function(){return new nf(this.value(),this.__chain__)},nu.prototype.next=/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */function(){this.__values__===r&&(this.__values__=oQ(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}},nu.prototype.plant=/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */function(e){for(var t,n=this;n instanceof nc;){var i=iI(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},nu.prototype.reverse=/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */function(){var e=this.__wrapped__;if(e instanceof np){var t=e;return this.__actions__.length&&(t=new np(this)),(t=t.reverse()).__actions__.push({func:i8,args:[iY],thisArg:r}),new nf(t,this.__chain__)}return this.thru(iY)},nu.prototype.toJSON=nu.prototype.valueOf=nu.prototype.value=/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */function(){return rb(this.__wrapped__,this.__actions__)},// Add lazy aliases.
nu.prototype.first=nu.prototype.head,e5&&(nu.prototype[e5]=/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */function(){return this}),nu)}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
e3._=tX,// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
define(function(){return tX})):e9?(// Export for Node.js.
(e9.exports=tX)._=tX,// Export for CommonJS support.
e4._=tX):e3._=tX}).call(this)});class s extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
     <svg width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="easy-in-out-fast">
       <g clip-path="url(#clip0_849_3099)">
         <path class="easy-in-out-fast"
               d="M5 14.9998L14.4626 5.53711"
               stroke="#2C2925"
               stroke-width="1.25"
               stroke-linecap="square"
               stroke-linejoin="round"/>
         <path class="easy-in-out-fast"
               d="M6.875 5H15V13.125"
               stroke="#2C2925"
               stroke-width="1.25"
               stroke-linecap="square"/>
       </g>
       <defs>
         <clipPath id="clip0_849_3099">
           <rect width="20" height="20" fill="white"/>
         </clipPath>
       </defs>
     </svg>
   `}}customElements.define("dark-arrow",s);var u={cv:"https://drive.google.com/file/d/1eR3HFNEtYtQK3cl2v5xcQKmjlMp_4FAs/view?usp=sharing",behance:"https://www.behance.net/mandxalinka",linkedin:"https://www.linkedin.com/in/alina-ermolaeva-/",telegram:"https://t.me/mandxalinka",mainTags:["JTBD","User & Market Research","Usability testing","Accessibility","CJM","Qualitative research","UX design","Wireframing","UX research","Quantitative research","Design systems","Problem solving","User centred design","User-Centered Design","Prototyping","Interaction design"],cases:[{title:"rTIM | AI Application for architects and urbanists",description:"rTIM is an application that empowers architects, urban planners and developers to plan and design areas for districts and cities using AI",imageName:"case-1.png",link:"https://www.figma.com/proto/4d5IYD5jVNmOqNwZLiYwWC/Alina-Ermolaeva-Portfolio?page-id=1489%3A11747&node-id=1489-20564&viewport=2%2C76%2C0.02&t=YttaTJyBqKK9uRtO-1&scaling=contain",tags:["Design system","UI design","B2B","Qualitative research","Usability testing","2023"]},{title:"Life in science | Educational platform",description:"Life in Science is an educational platform for ITMO University students studying soft skills. It was created as an alternative to offline courses for students who cannot attend in-person classes.",imageName:"case-2.png",link:"https://www.figma.com/proto/4d5IYD5jVNmOqNwZLiYwWC/Alina-Ermolaeva-Portfolio?page-id=1647%3A13692&node-id=1647-13780&viewport=696%2C31%2C0.03&t=ah7Egu2D5auqomlQ-1&scaling=contain",tags:["Design system","UI design","B2C","Qualitative research","Usability testing","Mentoring","2022"]}]},l={};e="undefined"!=typeof window?window:l,t=function(e,t){var n,r=[],i=Object.getPrototypeOf,o=r.slice,a=r.flat?function(e){return r.flat.call(e)}:function(e){return r.concat.apply([],e)},s=r.push,u=r.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},v=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},g=function(e){return null!=e&&e===e.window},y=e.document,m={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var r,i,o=(n=n||y).createElement("script");if(o.text=e,t)for(r in m)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var w="3.7.1",_=/HTML$/i,S=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new S.fn.init(e,t)};function A(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=b(e);return!(v(e)||g(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}S.fn=S.prototype={// The current version of jQuery being used
jquery:w,constructor:S,// The default length of a jQuery object is 0
length:0,toArray:function(){return o.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?o.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=S.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return S.each(this,e)},map:function(e){return this.pushStack(S.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:s,sort:r.sort,splice:r.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,// Skip the boolean and the target
a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,// Never move original objects, clone them
a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));// Return the modified object
return a},S.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===c.call(e)&&(!(t=i(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(A(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)for(;t=e[r++];)n+=S.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(A(Object(e))?S.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!_.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,s=[];// Go through the array, translating each of the items to their new values
if(A(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);// Flatten any nested arrays
return a(s)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:h}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=r[Symbol.iterator]),// Populate the class2type map
S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});var k=r.pop,T=r.sort,E=r.splice,P="[\\x20\\t\\r\\n\\f]",j=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g");// Note: an element does not contain itself
S.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var M=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function R(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}S.escapeSelector=function(e){return(e+"").replace(M,R)},function(){var t,n,i,a,l,c,p,d,v,g,m=s,x=S.expando,b=0,w=0,_=ee(),A=ee(),M=ee(),R=ee(),D=function(e,t){return e===t&&(l=!0),0},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
B="(?:\\\\[\\da-fA-F]{1,6}"+P+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",L="\\["+P+"*("+B+")(?:"+P+// Operator (capture 2)
"*([*^$|!~]?=)"+P+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+P+"*\\]",O=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+L+")*)|.*)\\)|)",H=RegExp(P+"+","g"),q=RegExp("^"+P+"*,"+P+"*"),N=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),F=RegExp(P+"|>"),W=new RegExp(O),U=RegExp("^"+B+"$"),V={ID:RegExp("^#("+B+")"),CLASS:RegExp("^\\.("+B+")"),TAG:RegExp("^("+B+"|[*])"),ATTR:RegExp("^"+L),PSEUDO:RegExp("^"+O),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+I+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},$=/^(?:input|select|textarea|button)$/i,z=/^h\d$/i,G=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,X=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
Y=RegExp("\\\\[\\da-fA-F]{1,6}"+P+"?|\\\\([^\\r\\n\\f])","g"),J=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Q=function(){ea()},Z=ec(function(e){return!0===e.disabled&&C(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{m.apply(r=o.call(y.childNodes),y.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
r[y.childNodes.length].nodeType}catch(e){m={apply:function(e,t){s.apply(e,o.call(t))},call:function(e){s.apply(e,o.call(arguments,1))}}}function K(e,t,n,r){var i,o,a,s,u,l,f,p=t&&t.ownerDocument,g=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&(ea(t),t=t||c,d)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==g&&(u=G.exec(e))){// ID selector
if(i=u[1]){// Document context
if(9===g){if(!(a=t.getElementById(i)))return n;if(a.id===i)return m.call(n,a),n;// Element context
}else // getElementById can match elements by name instead of ID
if(p&&(a=p.getElementById(i))&&K.contains(t,a)&&a.id===i)return m.call(n,a),n}else if(u[2])return m.apply(n,t.getElementsByTagName(e)),n;else if((i=u[3])&&t.getElementsByClassName)return m.apply(n,t.getElementsByClassName(i)),n}// Take advantage of querySelectorAll
if(!R[e+" "]&&(!v||!v.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(f=e,p=t,1===g&&(F.test(e)||N.test(e))){for(// Expand context for sibling selectors
(p=X.test(e)&&eo(t.parentNode)||t)==t&&h.scope||((s=t.getAttribute("id"))?s=S.escapeSelector(s):t.setAttribute("id",s=x)),o=// Prefix every selector in the list
(l=eu(e)).length;o--;)l[o]=(s?"#"+s:":scope")+" "+el(l[o]);f=l.join(",")}try{return m.apply(n,p.querySelectorAll(f)),n}catch(t){R(e,!0)}finally{s===x&&t.removeAttribute("id")}}}// All others
return eh(e.replace(j,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function ee(){var e=[];return function t(r,i){return e.push(r+" ")>n.cacheLength&&delete t[e.shift()],t[r+" "]=i}}/**
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
!e!==t.isDisabled&&Z(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function ei(e){return et(function(t){return t=+t,et(function(n,r){// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function eo(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function ea(e){var t,r=e?e.ownerDocument||e:y;return r!=c&&9===r.nodeType&&r.documentElement&&(p=// Update global variables
(c=r).documentElement,d=!S.isXMLDoc(c),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
g=p.matches||p.webkitMatchesSelector||p.msMatchesSelector,p.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
y!=c&&(t=c.defaultView)&&t.top!==t&&t.addEventListener("unload",Q),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
h.getById=en(function(e){return p.appendChild(e).id=S.expando,!c.getElementsByName||!c.getElementsByName(S.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
h.disconnectedMatch=en(function(e){return g.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
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
h.cssHas=en(function(){try{return c.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),h.getById?(n.filter.ID=function(e){var t=e.replace(Y,J);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(Y,J);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&d){var n,r,i,o=t.getElementById(e);if(o){if(// Verify the id attribute
(n=o.getAttributeNode("id"))&&n.value===e)return[o];for(// Fall back on getElementsByName
i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&d)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
v=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
en(function(e){var t;p.appendChild(e).innerHTML="<a id='"+x+"' href='' disabled='disabled'></a><select id='"+x+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||v.push("\\["+P+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+x+"-]").length||v.push("~="),e.querySelectorAll("a#"+x+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll(":checked").length||v.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=c.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=c.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+P+"*name"+P+"*="+P+"*(?:''|\"\")")}),h.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
v.push(":has"),v=v.length&&new RegExp(v.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
D=function(e,t){// Flag for duplicate removal
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
e===c||e.ownerDocument==y&&K.contains(y,e)?-1:t===c||t.ownerDocument==y&&K.contains(y,t)?1:a?u.call(a,e)-u.call(a,t):0:4&n?-1:1)}),c}// Add button/input type pseudos
for(t in K.matches=function(e,t){return K(e,null,null,t)},K.matchesSelector=function(e,t){if(ea(e),d&&!R[t+" "]&&(!v||!v.test(t)))try{var n=g.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||h.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){R(t,!0)}return K(t,c,null,[e]).length>0},K.contains=function(e,t){return(e.ownerDocument||e)!=c&&ea(e),S.contains(e,t)},K.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=c&&ea(e);var r=n.attrHandle[t.toLowerCase()],i=r&&f.call(n.attrHandle,t.toLowerCase())?r(e,t,!d):void 0;return void 0!==i?i:e.getAttribute(t)},K.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */S.uniqueSort=function(e){var t,n=[],r=0,i=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
l=!h.sortStable,a=!h.sortStable&&o.call(e,0),T.call(e,D),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)E.call(e,n[r],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
a=null,e)},S.fn.uniqueSort=function(){return this.pushStack(S.uniqueSort(o.apply(this)))},(n=S.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:et,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Y,J),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(Y,J),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||K.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&K.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&// Get excess from tokenize (recursively)
(t=eu(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Y,J).toLowerCase();return"*"===e?function(){return!0}:function(e){return C(e,t)}},CLASS:function(e){var t=_[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"),_(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=K.attr(r,e);return null==i?"!="===t:!t||((i+="","="===t)?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(H," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h=o!==a?"nextSibling":"previousSibling",v=t.parentNode,g=s&&t.nodeName.toLowerCase(),y=!u&&!s,m=!1;if(v){// :(first|last|only)-(child|of-type)
if(o){for(;h;){for(f=t;f=f[h];)if(s?C(f,g):1===f.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
d=h="only"===e&&!d&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(d=[a?v.firstChild:v.lastChild],a&&y){for(m=(p=(l=// Seek `elem` from a previously-cached index
(c=v[x]||(v[x]={}))[e]||[])[0]===b&&l[1])&&l[2],f=p&&v.childNodes[p];f=++p&&f&&f[h]||// Fallback to seeking `elem` from the start
(m=p=0)||d.pop();)if(1===f.nodeType&&++m&&f===t){c[e]=[b,p,m];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(y&&(m=p=(l=(c=t[x]||(t[x]={}))[e]||[])[0]===b&&l[1]),!1===m)// Use the same loop as above to seek `elem` from the start
for(;(f=++p&&f&&f[h]||(m=p=0)||d.pop())&&(!((s?C(f,g):1===f.nodeType)&&++m)||(y&&((c=f[x]||(f[x]={}))[e]=[b,m]),f!==t)););return(// Incorporate the offset, then check against cycle size
(m-=i)===r||m%r==0&&m/r>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var r,i=n.pseudos[e]||n.setFilters[e.toLowerCase()]||K.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
i[x]?i(t):i.length>1?(r=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?et(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)r=u.call(e,o[a]),e[r]=!(n[r]=o[a])}):function(e){return i(e,0,r)}):i)}},pseudos:{// Potentially complex pseudos
not:et(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=ed(e.replace(j,"$1"));return r[x]?et(function(e,t,n,i){// Match elements unmatched by `matcher`
for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:et(function(e){return function(t){return K(e,t).length>0}}),contains:et(function(e){return e=e.replace(Y,J),function(t){return(t.textContent||S.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:et(function(e){return U.test(e||"")||K.error("unsupported lang: "+e),e=e.replace(Y,J).toLowerCase(),function(t){var n;do if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return c.activeElement}catch(e){}}()&&c.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:er(!1),disabled:er(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return C(e,"input")&&!!e.checked||C(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return z.test(e.nodeName)},input:function(e){return $.test(e.nodeName)},button:function(e){return C(e,"input")&&"button"===e.type||C(e,"button")},text:function(e){var t;return C(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:ei(function(){return[0]}),last:ei(function(e,t){return[t-1]}),eq:ei(function(e,t,n){return[n<0?n+t:n]}),even:ei(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ei(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ei(function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:ei(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return C(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(C(t,"input")||C(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function es(){}function eu(e,t){var r,i,o,a,s,u,l,c=A[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=n.preFilter;s;){// Filters
for(a in(!r||(i=q.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=N.exec(s))&&(r=i.shift(),o.push({value:r,// Cast descendant combinators to space
type:i[0].replace(j," ")}),s=s.slice(r.length)),n.filter)(i=V[a].exec(s))&&(!l[a]||(i=l[a](i)))&&(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?s.length:s?K.error(e):A(e,u).slice(0))}function el(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ec(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=w++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f=[b,s];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a){if(c=t[x]||(t[x]={}),i&&C(t,i))t=t[r]||t;else{if((l=c[o])&&l[0]===b&&l[1]===s)return f[2]=l[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
c[o]=f,f[2]=e(t,n,u))return!0}}return!1}}function ef(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ep(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function ed(e,t/* Internal Use Only */){var r,o,a,s,l=[],f=[],p=M[e+" "];if(!p){for(t||(t=eu(e)),s=t.length;s--;)(p=function e(t){for(var r,o,a,s=t.length,l=n.relative[t[0].type],c=l||n.relative[" "],f=l?1:0,p=ec(function(e){return e===r},c,!0),d=ec(function(e){return u.call(r,e)>-1},c,!0),h=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var o=!l&&(n||t!=i)||((r=t).nodeType?p(e,t,n):d(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
r=null,o)}];f<s;f++)if(o=n.relative[t[f].type])h=[ec(ef(h),o)];else{// Return special upon seeing a positional matcher
if((o=n.filter[t[f].type].apply(null,t[f].matches))[x]){for(// Find the next relative operator (if any) for proper handling
a=++f;a<s&&!n.relative[t[a].type];a++);return function e(t,n,r,i,o,a){return i&&!i[x]&&(i=e(i)),o&&!o[x]&&(o=e(o,a)),et(function(e,a,s,l){var c,f,p,d,h=[],v=[],g=a.length,y=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)K(e,t[r],n);return n}(n||"*",s.nodeType?[s]:s,[]),x=t&&(e||!n)?ep(y,h,t,s,l):y;// Apply postFilter
if(r?// Find primary matches
r(x,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
d=o||(e?t:g||i)?[]:a,s,l):d=x,i)for(c=ep(d,v),i(c,[],s,l),// Un-match failing elements by moving them back to matcherIn
f=c.length;f--;)(p=c[f])&&(d[v[f]]=!(x[v[f]]=p));if(e){if(o||t){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],f=d.length;f--;)(p=d[f])&&c.push(x[f]=p);o(null,d=[],c,l)}for(// Move matched elements from seed to results to keep them synchronized
f=d.length;f--;)(p=d[f])&&(c=o?u.call(e,p):h[f])>-1&&(e[c]=!(a[c]=p))}}else d=ep(d===a?d.splice(g,d.length):d),o?o(null,a,d,l):m.apply(a,d)})}(f>1&&ef(h),f>1&&el(t.slice(0,f-1).concat({value:" "===t[f-2].type?"*":""})).replace(j,"$1"),o,f<a&&e(t.slice(f,a)),a<s&&e(t=t.slice(a)),a<s&&el(t))}h.push(o)}return ef(h)}(t[s]))[x]?l.push(p):f.push(p);// Save selector and tokenization
// Cache the compiled function
(p=M(e,(r=l.length>0,o=f.length>0,a=function(e,t,a,s,u){var p,h,v,g=0,y="0",x=e&&[],w=[],_=i,A=e||o&&n.find.TAG("*",u),C=b+=null==_?1:Math.random()||.1,T=A.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(u&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(i=t==c||t||u);y!==T&&null!=(p=A[y]);y++){if(o&&p){for(h=0,t||p.ownerDocument==c||(ea(p),a=!d);v=f[h++];)if(v(p,t||c,a)){m.call(s,p);break}u&&(b=C)}// Track unmatched elements for set filters
r&&((p=!v&&p)&&g--,e&&x.push(p))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
g+=y,r&&y!==g){for(h=0;v=l[h++];)v(x,w,t,a);if(e){// Reintegrate element matches to eliminate the need for sorting
if(g>0)for(;y--;)x[y]||w[y]||(w[y]=k.call(s));// Discard index placeholder values to get only actual matches
w=ep(w)}// Add matches to results
m.apply(s,w),u&&!e&&w.length>0&&g+l.length>1&&S.uniqueSort(s)}return u&&(b=C,i=_),x},r?et(a):a))).selector=e}return p}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eh(e,t,r,i){var o,a,s,u,l,c="function"==typeof e&&e,f=!i&&eu(e=c.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(r=r||[],1===f.length){if(// Reduce context if the leading compound selector is an ID
(a=f[0]=f[0].slice(0)).length>2&&"ID"===(s=a[0]).type&&9===t.nodeType&&d&&n.relative[a[1].type]){if(!(t=(n.find.ID(s.matches[0].replace(Y,J),t)||[])[0]))return r;c&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=V.needsContext.test(e)?0:a.length;// Abort if we hit a combinator
o--&&(s=a[o],!n.relative[u=s.type]);)if((l=n.find[u])&&(i=l(s.matches[0].replace(Y,J),X.test(a[0].type)&&eo(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
a.splice(o,1),!(e=i.length&&el(a)))return m.apply(r,i),r;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(c||ed(e,f))(i,t,!d,r,!t||X.test(e)&&eo(t.parentNode)||t),r)}es.prototype=n.filters=n.pseudos,n.setFilters=new es,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
h.sortStable=x.split("").sort(D).join("")===x,// Initialize against the default document
ea(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
h.sortDetached=en(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(c.createElement("fieldset"))}),S.find=K,// Deprecated
S.expr[":"]=S.expr.pseudos,S.unique=S.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
K.compile=ed,K.select=eh,K.setDocument=ea,K.tokenize=eu,K.escape=S.escapeSelector,K.getText=S.text,K.isXML=S.isXMLDoc,K.selectors=S.expr,K.support=S.support,K.uniqueSort=S.uniqueSort;/* eslint-enable */}();var D=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},I=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},B=S.expr.match.needsContext,L=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function O(e,t,n){return v(t)?S.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?S.grep(e,function(e){return e===t!==n}):"string"!=typeof t?S.grep(e,function(e){return u.call(t,e)>-1!==n}):S.filter(t,e,n)}S.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)S.find(e,i[t],n);return r>1?S.uniqueSort(n):n},filter:function(e){return this.pushStack(O(this,e||[],!1))},not:function(e){return this.pushStack(O(this,e||[],!0))},is:function(e){return!!O(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&B.test(e)?S(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var H,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(S.fn.init=function(e,t,n){var r,i;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||H,"string"==typeof e){// Match html or make sure no context is specified for #id
if((r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))&&(r[1]||!t)){// HANDLE: $(html) -> $(array)
if(!r[1])return(i=y.getElementById(r[2]))&&(// Inject the element directly into the jQuery object
this[0]=i,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof S?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),L.test(r[1])&&S.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,// Initialize central reference
H=S(y);var N=/^(?:parents|prev(?:Until|All))/,F={children:!0,contents:!0,next:!0,prev:!0};function W(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);// Positional selectors never match, since there's no _selection_ context
if(!B.test(e)){for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?S.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?u.call(S(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return D(e,"parentNode")},parentsUntil:function(e,t,n){return D(e,"parentNode",n)},next:function(e){return W(e,"nextSibling")},prev:function(e){return W(e,"previousSibling")},nextAll:function(e){return D(e,"nextSibling")},prevAll:function(e){return D(e,"previousSibling")},nextUntil:function(e,t,n){return D(e,"nextSibling",n)},prevUntil:function(e,t,n){return D(e,"previousSibling",n)},siblings:function(e){return I((e.parentNode||{}).firstChild,e)},children:function(e){return I(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
i(e.contentDocument)?e.contentDocument:(C(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(e,t){S.fn[e]=function(n,r){var i=S.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=S.filter(r,i)),this.length>1&&(F[e]||S.uniqueSort(i),N.test(e)&&i.reverse()),this.pushStack(i)}});var U=/[^\x20\t\r\n\f]+/g;function V(e){return e}function $(e){throw e}function z(e,t,n,r){var i;try{// Check for promise aspect first to privilege synchronous behavior
e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
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
 */S.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},S.each(t.match(U)||[],function(e,t){n[t]=!0}),n):S.extend({},e);var t,n,r,i,o,a,s=[],u=[],l=-1,c=function(){for(// Enforce single-firing
a=a||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=r=!0;u.length;l=-1)for(i=u.shift();++l<s.length;)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
l=s.length,i=!1);e.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){S.each(n,function(n,r){v(r)?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==b(r)&&t(r)})}(arguments),i&&!r&&c()),this},// Remove a callback from the list
remove:function(){return S.each(arguments,function(e,t){for(var n;(n=S.inArray(t,s,n))>-1;)s.splice(n,1),n<=l&&l--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?S.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},// Call all the callbacks with the given arguments
fire:function(){return f.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return f},S.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return S.Deferred(function(t){S.each(n,function(n,r){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=v(e[r[4]])&&e[r[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&v(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=r.apply(s,u))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
v(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?i?l.call(e,a(o,n,V,i),a(o,n,$,i)):(// ...and disregard older resolution values
o++,l.call(e,a(o,n,V,i),a(o,n,$,i),a(o,n,V,n.notifyWith))):(r!==V&&(s=void 0,u=[e]),// Process the value(s)
// Default process is resolve
(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,c.error),t+1>=o&&(r!==$&&(s=void 0,u=[e]),n.rejectWith(s,u))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?c():(S.Deferred.getErrorHook?c.error=S.Deferred.getErrorHook():S.Deferred.getStackHook&&(c.error=S.Deferred.getStackHook()),e.setTimeout(c))}}return S.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(a(0,e,v(i)?i:V,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(a(0,e,v(t)?t:V)),// rejected_handlers.add( ... )
n[2][3].add(a(0,e,v(r)?r:$))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?S.extend(e,i):i}},o={};// All done!
return(// Add list-specific methods
S.each(n,function(e,t){var a=t[2],s=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
i[t[1]]=a.add,s&&a.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=s},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[t[0]+"With"]=a.fireWith}),// Make the deferred a promise
i.promise(o),t&&t.call(o,o),o)},// Deferred helper
when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=S.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(z(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||v(i[n]&&i[n].then)))return a.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)z(i[n],s(n),a.reject);return a.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var G=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
S.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&G.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},S.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var X=S.Deferred();// The ready event handler and self cleanup method
function Y(){y.removeEventListener("DOMContentLoaded",Y),e.removeEventListener("load",Y),S.ready()}S.fn.ready=function(e){return X.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){S.readyException(e)}),this},S.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--S.readyWait:S.isReady)&&(// Remember that the DOM is ready
S.isReady=!0,!0!==e&&--S.readyWait>0||// If there are functions bound, to execute
X.resolveWith(y,[S]))}}),S.ready.then=X.then,"complete"!==y.readyState&&("loading"===y.readyState||y.documentElement.doScroll)?(// Use the handy event callback
y.addEventListener("DOMContentLoaded",Y),// A fallback to window.onload, that will always work
e.addEventListener("load",Y)):e.setTimeout(S.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var J=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;// Sets many values
if("object"===b(n))for(s in i=!0,n)J(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},Q=/^-ms-/,Z=/-([a-z])/g;// Used by camelCase as callback to replace()
function K(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function ee(e){return e.replace(Q,"ms-").replace(Z,K)}var et=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function en(){this.expando=S.expando+en.uid++}en.uid=1,en.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},et(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[ee(t)]=n;else for(r in t)i[ee(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ee(t)]},access:function(e,t,n){return(// In cases where either:
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
t=Array.isArray(t)?t.map(ee):((t=ee(t))in r)?[t]:t.match(U)||[]).length;n--;)delete r[t[n]];// Remove the expando if there's no more data
(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var er=new en,ei=new en,eo=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ea=/[A-Z]/g;function es(e,t,n){var r,i;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(ea,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{i=n,n="true"===i||"false"!==i&&("null"===i?null:i===+i+""?+i:eo.test(i)?JSON.parse(i):i)}catch(e){}// Make sure we set the data so it isn't changed later
ei.set(e,t,n)}else n=void 0}return n}S.extend({hasData:function(e){return ei.hasData(e)||er.hasData(e)},data:function(e,t,n){return ei.access(e,t,n)},removeData:function(e,t){ei.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return er.access(e,t,n)},_removeData:function(e,t){er.remove(e,t)}}),S.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(i=ei.get(o),1===o.nodeType&&!er.get(o,"hasDataAttrs"))){for(n=a.length;n--;)// The attrs elements can be null (trac-14894)
a[n]&&0===(r=a[n].name).indexOf("data-")&&es(o,r=ee(r.slice(5)),i[r]);er.set(o,"hasDataAttrs",!0)}return i}return(// Sets multiple values
"object"==typeof e?this.each(function(){ei.set(this,e)}):J(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=ei.get(o,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=es(o,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
ei.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){ei.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=er.get(e,t),n&&(!r||Array.isArray(n)?r=er.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return er.get(e,n)||er.access(e,n,{empty:S.Callbacks("once memory").add(function(){er.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?S.queue(this[0],e):void 0===t?this:this.each(function(){var n=S.queue(this,e,t);// Ensure a hooks for this queue
S._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&S.dequeue(this,e)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=er.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var eu=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,el=RegExp("^(?:([+-])=|)("+eu+")([a-z%]*)$","i"),ec=["Top","Right","Bottom","Left"],ef=y.documentElement,ep=function(e){return S.contains(e.ownerDocument,e)},ed={composed:!0};ef.getRootNode&&(ep=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(ed)===e.ownerDocument});var eh=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
ep(e)&&"none"===S.css(e,"display")};function ev(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&el.exec(S.css(e,t));if(c&&c[3]!==l){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
u/=2,// Trust units reported by jQuery.css
l=l||c[3],// Iteratively approximate from a nonzero starting point
c=+u||1;a--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+u||0,// Apply relative offset (+=/-=) if specified
i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var eg={};function ey(e,t){// Determine new display value for elements that need to change
for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"!==n||(i[o]=er.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&eh(r)&&(i[o]=function(e){var t,n=e.ownerDocument,r=e.nodeName,i=eg[r];return i||(t=n.body.appendChild(n.createElement(r)),i=S.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),eg[r]=i),i}(r))):"none"!==n&&(i[o]="none",// Remember what we're overwriting
er.set(r,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}S.fn.extend({show:function(){return ey(this,!0)},hide:function(){return ey(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eh(this)?S(this).show():S(this).hide()})}});var em=/^(?:checkbox|radio)$/i,ex=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,eb=/^$|^module$|\/(?:java|ecma)script/i;e3=y.createDocumentFragment().appendChild(y.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e4=y.createElement("input")).setAttribute("type","radio"),e4.setAttribute("checked","checked"),e4.setAttribute("name","t"),e3.appendChild(e4),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
h.checkClone=e3.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e3.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e3.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e3.innerHTML="<option></option>",h.option=!!e3.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ew={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function e_(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t))?S.merge([e],n):n}// Mark scripts as having already been evaluated
function eS(e,t){for(var n=0,r=e.length;n<r;n++)er.set(e[n],"globalEval",!t||er.get(t[n],"globalEval"))}ew.tbody=ew.tfoot=ew.colgroup=ew.caption=ew.thead,ew.th=ew.td,h.option||(ew.optgroup=ew.option=[1,"<select multiple='multiple'>","</select>"]);var eA=/<|&#?\w+;/;function eC(e,t,n,r,i){for(var o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if((o=e[p])||0===o){// Add nodes directly
if("object"===b(o))// push.apply(_, arraylike) throws on ancient WebKit
S.merge(f,o.nodeType?[o]:o);else if(eA.test(o)){for(a=a||c.appendChild(t.createElement("div")),s=ew[(ex.exec(o)||["",""])[1].toLowerCase()]||ew._default,a.innerHTML=s[1]+S.htmlPrefilter(o)+s[2],// Descend through wrappers to the right content
l=s[0];l--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
S.merge(f,a.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(a=c.firstChild).textContent=""}else f.push(t.createTextNode(o))}for(// Remove wrapper from fragment
c.textContent="",p=0;o=f[p++];){// Skip elements already in the context collection (trac-4087)
if(r&&S.inArray(o,r)>-1){i&&i.push(o);continue}// Capture executables
if(u=ep(o),// Append to fragment
a=e_(c.appendChild(o),"script"),u&&eS(a),n)for(l=0;o=a[l++];)eb.test(o.type||"")&&n.push(o)}return c}var ek=/^([^.]*)(?:\.(.+)|)/;function eT(){return!0}function eE(){return!1}function eP(e,t,n,r,i,o){var a,s;// Types can be a map of types/handlers
if("object"==typeof t){for(s in"string"!=typeof n&&(// ( types-Object, data )
r=r||n,n=void 0),t)eP(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(// ( types, selector, fn )
i=r,r=void 0):(// ( types, data, fn )
i=r,r=n,n=void 0)),!1===i)i=eE;else if(!i)return e;return 1===o&&(a=i,// Use same guid so caller can remove using origFn
(i=function(e){return(// Can use an empty set, since event contains the info
S().off(e),a.apply(this,arguments))}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function ej(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===er.get(e,t)&&S.event.add(e,t,eT);return}// Register the controller as a special universal handler for all event namespaces
er.set(e,t,!1),S.event.add(e,t,{namespace:!1,handler:function(e){var n,r=er.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(r)(S.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
r=o.call(arguments),er.set(this,t,r),// Trigger the native event and capture its result
this[t](),n=er.get(this,t),er.set(this,t,!1),r!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else r&&(// ...and capture the result
er.set(this,t,S.event.trigger(r[0],r.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=eT)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */S.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,v,g=er.get(e);// Only attach events to objects that accept data
if(et(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(ef,i),n.guid||(n.guid=S.guid++),(u=g.events)||(u=g.events=Object.create(null)),(a=g.handle)||(a=g.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return S.event.triggered!==t.type?S.event.dispatch.apply(e,arguments):void 0}),l=// Handle multiple events separated by a space
(t=(t||"").match(U)||[""]).length;l--;)// There *must* be a type, no attaching namespace-only handlers
d=v=(s=ek.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(// If event changes its type, use the special event handlers for the changed type
f=S.event.special[d]||{},// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,// Update special based on newly reset type
f=S.event.special[d]||{},// handleObj is passed to all event handlers
c=S.extend({type:d,origType:v,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),// Keep track of which events have ever been used, for event optimization
S.event.global[d]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,v,g=er.hasData(e)&&er.get(e);if(g&&(u=g.events)){for(l=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(U)||[""]).length;l--;){// Unbind all events (on this namespace, if provided) for the element
if(d=v=(s=ek.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d){for(d in u)S.event.remove(e,d+t[l],n,r,!0);continue}for(f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
a=o=p.length;o--;)c=p[o],(i||v===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,g.handle)||S.removeEvent(e,d,g.handle),delete u[d])}S.isEmptyObject(u)&&er.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=Array(arguments.length),u=S.event.fix(e),l=(er.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=u;t<arguments.length;t++)s[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(// Determine handlers
a=S.event.handlers.call(this,u,l),// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!u.rnamespace||!1===o.namespace||u.rnamespace.test(o.namespace))&&(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;// Find delegate handlers
if(u&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;l!==this;l=l.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===l.nodeType&&!("click"===e.type&&!0===l.disabled)){for(n=0,o=[],a={};n<u;n++)void 0===a[// Don't conflict with Object.prototype properties (trac-13203)
i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?S(i,this).index(l)>-1:S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}}return(// Add the remaining (directly-bound) handlers
l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s)},addProp:function(e,t){Object.defineProperty(S.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return em.test(t.type)&&t.click&&C(t,"input")&&ej(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return em.test(t.type)&&t.click&&C(t,"input")&&ej(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return em.test(t.type)&&t.click&&C(t,"input")&&er.get(t,"click")||C(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?eT:eE,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[S.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
S.Event.prototype={constructor:S.Event,isDefaultPrevented:eE,isPropagationStopped:eE,isImmediatePropagationStopped:eE,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=eT,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=eT,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=eT,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(y.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=er.get(this,"handle"),r=S.event.fix(e);r.type="focusin"===e.type?"focus":"blur",r.isSimulated=!0,// First, handle focusin/focusout
n(e),r.target===r.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(r)}else // while someone wants focusin/focusout.
S.event.simulate(t,e.target,S.event.fix(e))}S.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var r;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
ej(this,e,!0),!y.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(r=er.get(this,t))||this.addEventListener(t,n),er.set(this,t,(r||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
ej(this,e),!0)},teardown:function(){var e;if(!y.documentMode)return!1;(e=er.get(this,t)-1)?er.set(this,t,e):(this.removeEventListener(t,n),er.remove(this,t))},// Suppress native focus or blur if we're currently inside
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
S.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var r=this.ownerDocument||this.document||this,i=y.documentMode?this:r,o=er.get(i,t);o||(y.documentMode?this.addEventListener(t,n):r.addEventListener(e,n,!0)),er.set(i,t,(o||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=y.documentMode?this:r,o=er.get(i,t)-1;o?er.set(i,t,o):(y.documentMode?this.removeEventListener(t,n):r.removeEventListener(e,n,!0),er.remove(i,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){S.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||S.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),S.fn.extend({on:function(e,t,n,r){return eP(this,e,t,n,r)},one:function(e,t,n,r){return eP(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=eE),this.each(function(){S.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eM=/<script|<style|<link/i,eR=/checked\s*(?:[^=]|=\s*.checked.)/i,eD=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function eI(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eB(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eL(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eO(e,t){var n,r,i,o,a,s;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(er.hasData(e)&&(s=er.get(e).events))for(i in er.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);// 2. Copy user data
ei.hasData(e)&&(o=ei.access(e),a=S.extend({},o),ei.set(t,a))}}function eH(e,t,n,r){// Flatten any nested arrays
t=a(t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,g=t[0],y=v(g);// We can't cloneNode fragments that contain checked, in WebKit
if(y||p>1&&"string"==typeof g&&!h.checkClone&&eR.test(g))return e.each(function(i){var o=e.eq(i);y&&(t[0]=g.call(this,i,o.html())),eH(o,t,n,r)});if(p&&(o=(i=eC(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(u=(s=S.map(e_(i,"script"),eB)).length;f<p;f++)l=i,f!==d&&(l=S.clone(l,!0,!0),u&&// push.apply(_, arraylike) throws on ancient WebKit
S.merge(s,e_(l,"script"))),n.call(e[f],l,f);if(u)// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,// Re-enable scripts
S.map(s,eL),f=0;f<u;f++)l=s[f],eb.test(l.type||"")&&!er.access(l,"globalEval")&&S.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?S._evalUrl&&!l.noModule&&S._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
x(l.textContent.replace(eD,""),l,c))}return e}function eq(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(e_(r)),r.parentNode&&(n&&ep(r)&&eS(e_(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=ep(e);// Fix IE cloning issues
if(!h.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!S.isXMLDoc(e))for(r=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
a=e_(s),i=(o=e_(e)).length;r<i;r++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&em.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(o[r],a[r]);// Copy the events from the original to the clone
if(t){if(n)for(r=0,o=o||e_(e),a=a||e_(s),i=o.length;r<i;r++)eO(o[r],a[r]);else eO(e,s)}// Return the cloned set
return(// Preserve script evaluation history
(a=e_(s,"script")).length>0&&eS(a,!u&&e_(e,"script")),s)},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(et(n)){if(t=n[er.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[er.expando]=void 0}n[ei.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[ei.expando]=void 0)}}}),S.fn.extend({detach:function(e){return eq(this,e,!0)},remove:function(e){return eq(this,e)},text:function(e){return J(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eH(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&eI(this,e).appendChild(e)})},prepend:function(){return eH(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=eI(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eH(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eH(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
S.cleanData(e_(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return J(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eM.test(e)&&!ew[(ex.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(S.cleanData(e_(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eH(this,arguments,function(t){var n=this.parentNode;0>S.inArray(this,e)&&(S.cleanData(e_(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){S.fn[e]=function(e){for(var n,r=[],i=S(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),S(i[a])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
s.apply(r,n.get());return this.pushStack(r)}});var eN=RegExp("^("+eu+")(?!px)[a-z%]+$","i"),eF=/^--/,eW=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},eU=function(e,t,n){var r,i,o={};// Remember the old values, and insert the new ones
for(i in t)o[i]=e.style[i],e.style[i]=t[i];// Revert the old values
for(i in r=n.call(e),t)e.style[i]=o[i];return r},eV=RegExp(ec.join("|"),"i");function e$(e,t,n){var r,i,o,a,s=eF.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
u=e.style;return(n=n||eW(e))&&(// Support: IE <=9 - 11+
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
(a=a.replace(j,"$1")||void 0),""!==a||ep(e)||(a=S.style(e,t)),!h.pixelBoxStyles()&&eN.test(a)&&eV.test(t)&&(// Remember the original values
r=u.width,i=u.minWidth,o=u.maxWidth,// Put in the new values to get a computed value out
u.minWidth=u.maxWidth=u.width=a,a=n.width,// Revert the changed values
u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?// IE returns zIndex value as an integer.
a+"":a}function ez(e,t){// Define the hook, we'll check on the first run if it's really needed.
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
i=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
c.style.position="absolute",o=12===n(c.offsetWidth/3),ef.removeChild(l),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
c=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,u,l=y.createElement("div"),c=y.createElement("div");// Finish early in limited (non-browser) environments
c.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,S.extend(h,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),o},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,r,i;return null==s&&(t=y.createElement("table"),n=y.createElement("tr"),r=y.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",r.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
r.style.display="block",ef.appendChild(t).appendChild(n).appendChild(r),s=parseInt((i=e.getComputedStyle(n)).height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===n.offsetHeight,ef.removeChild(t)),s}}))}();var eG=["Webkit","Moz","ms"],eX=y.createElement("div").style,eY={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eJ(e){return S.cssProps[e]||eY[e]||(e in eX?e:eY[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eG.length;n--;)if((e=eG[n]+t)in eX)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eQ=/^(none|table(?!-c[ea]).+)/,eZ={position:"absolute",visibility:"hidden",display:"block"},eK={letterSpacing:"0",fontWeight:"400"};function e0(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var r=el.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function e1(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;// Adjustment may not be necessary
if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=S.css(e,n+ec[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ec[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ec[a]+"Width",!0,i))):(// Add padding
u+=S.css(e,"padding"+ec[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ec[a]+"Width",!0,i):s+=S.css(e,"border"+ec[a]+"Width",!0,i));return!r&&o>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function e2(e,t,n){// Start with computed style
var r=eW(e),i=(!h.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=e$(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(eN.test(a)){if(!n)return a;a="auto"}// Adjust for the element's box model
return(!h.boxSizingReliable()&&i||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!h.reliableTrDimensions()&&C(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===a||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&// Make sure the element is visible & connected
e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(o=s in e)&&(a=e[s])),// Normalize "" and auto
(a=parseFloat(a)||0)+e1(e,t,n||(i?"border":"content"),o,r,a)+"px"}function e5(e,t,n,r,i){return new e5.prototype.init(e,t,n,r,i)}S.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=e$(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,r){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var i,o,a,s=ee(t),u=eF.test(t),l=e.style;// Check if we're setting a value
if(u||(t=eJ(s)),// Gets hook for the prefixed version, then unprefixed version
a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(o=typeof n)&&(i=el.exec(n))&&i[1]&&(n=ev(e,t,i),// Fixes bug trac-9237
o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=ee(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eF.test(t)||(t=eJ(s)),// Try prefixed name followed by the unprefixed name
(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=e$(e,t,r)),"normal"===i&&t in eK&&(i=eK[t]),""===n||n)?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i)}}),S.each(["height","width"],function(e,t){S.cssHooks[t]={get:function(e,n,r){if(n)// but it must have a current display style that would benefit
return!eQ.test(S.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e2(e,t,r):eU(e,eZ,function(){return e2(e,t,r)})},set:function(e,n,r){var i,o=eW(e),// to avoid forcing a reflow.
a=!h.scrollboxSize()&&"absolute"===o.position,s=(a||r)&&"border-box"===S.css(e,"boxSizing",!1,o),u=r?e1(e,t,r,s,o):0;return s&&a&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-e1(e,t,"border",!1,o)-.5)),u&&(i=el.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=S.css(e,t)),e0(e,n,u)}}}),S.cssHooks.marginLeft=ez(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(e$(e,"marginLeft"))||e.getBoundingClientRect().left-eU(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
S.each({margin:"",padding:"",border:"Width"},function(e,t){S.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ec[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(S.cssHooks[e+t].set=e0)}),S.fn.extend({css:function(e,t){return J(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=eW(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,arguments.length>1)}}),S.Tween=e5,e5.prototype={constructor:e5,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=e5.propHooks[this.prop];return e&&e.get?e.get(this):e5.propHooks._default.get(this)},run:function(e){var t,n=e5.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e5.propHooks._default.set(this),this}},e5.prototype.init.prototype=e5.prototype,e5.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
S.fx.step[e.prop]?S.fx.step[e.prop](e):1===e.elem.nodeType&&(S.cssHooks[e.prop]||null!=e.elem.style[eJ(e.prop)])?S.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e5.propHooks.scrollTop=e5.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=e5.prototype.init,// Back compat <1.8 extension point
S.fx.step={};var e3,e4,e9,e6,e8=/^(?:toggle|show|hide)$/,e7=/queueHooks$/;// Animations created synchronously will run synchronously
function te(){return e.setTimeout(function(){e9=void 0}),e9=Date.now()}// Generate parameters to create a standard animation
function tt(e,t){var n,r=0,i={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)i["margin"+(n=ec[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function tn(e,t,n){for(var r,i=(Animation.tweeners[t]||[]).concat(Animation.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function Animation(e,t,n){var r,i,o=0,a=Animation.prefilters.length,s=S.Deferred().always(function(){// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(i)return!1;for(var t=e9||te(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return(// If there's more to do, yield
(s.notifyWith(e,[l,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[l,1,0]),// Resolve the animation and report its conclusion
s.resolveWith(e,[l]),!1))},l=s.promise({elem:e,props:S.extend({},t),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},n),originalProperties:t,originalOptions:n,startTime:e9||te(),duration:n.duration,tweens:[],createTween:function(t,n){var r=S.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(i=t[r=ee(n)],Array.isArray(o=e[n])&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&("expand"in a))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=a.expand(o),delete e[r],o)(n in e)||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=Animation.prefilters[o].call(l,e,c,l.opts))return v(r.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return S.map(c,tn,l),v(l.opts.start)&&l.opts.start.call(e,l),// Attach callbacks from options
l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(Animation,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ev(n.elem,e,el.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(U);for(var n,r=0,i=e.length;r<i;r++)n=e[r],Animation.tweeners[n]=Animation.tweeners[n]||[],Animation.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,v=e.nodeType&&eh(e),g=er.get(e,"fxshow");// Detect show/hide animations
for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],e8.test(i)){if(delete t[r],o=o||"toggle"===i,i===(v?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!g||void 0===g[r])continue;v=!0}d[r]=g&&g[r]||S.style(e,r)}if(!(!// Bail out if this is a no-op like .hide().hide()
(u=!S.isEmptyObject(t))&&S.isEmptyObject(d)))for(r in f&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(l=g&&g.display)&&(l=er.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(// Get nonempty value(s) by temporarily forcing visibility
ey([e],!0),l=e.style.display||l,c=S.css(e,"display"),ey([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null!=l||(l="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
u=!1,d)u||(g?"hidden"in g&&(v=g.hidden):g=er.access(e,"fxshow",{display:l}),o&&(g.hidden=!v),v&&ey([e],!0),/* eslint-disable no-loop-func */p.done(function(){for(r in v||ey([e]),er.remove(e,"fxshow"),d)S.style(e,r,d[r])})),// Per-property setup
u=tn(v?g[r]:0,r,p),r in g||(g[r]=u.start,v&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?Animation.prefilters.unshift(e):Animation.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),// Queueing
r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){// Show any hidden elements after setting opacity to 0
return this.filter(eh).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=S.isEmptyObject(e),o=S.speed(t,n,r),a=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=Animation(this,S.extend({},e),o);// Empty animations, or finishing resolves immediately
(i||er.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=S.timers,a=er.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&e7.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem===this&&(null==e||o[i].queue===e)&&(o[i].anim.stop(n),t=!1,o.splice(i,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&S.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=er.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=S.timers,a=r?r.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
S.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),S.each(["toggle","show","hide"],function(e,t){var n=S.fn[t];S.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tt(t,!0),e,r,i)}}),// Generate shortcuts for custom animations
S.each({slideDown:tt("show"),slideUp:tt("hide"),slideToggle:tt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){S.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(e9=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),e9=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){e6||(e6=!0,function t(){e6&&(!1===y.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,S.fx.interval),S.fx.tick())}())},S.fx.stop=function(){e6=null},S.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
S.fn.delay=function(t,n){return t=S.fx&&S.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},tr=y.createElement("input"),ti=y.createElement("select").appendChild(y.createElement("option")),tr.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
h.checkOn=""!==tr.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
h.optSelected=ti.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(tr=y.createElement("input")).value="t",tr.type="radio",h.radioValue="t"===tr.value;var tr,ti,to,ta=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return J(this,S.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return S.prop(e,t,n);if(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?to:void 0)),void 0!==n){if(null===n){S.removeAttr(e,t);return}return i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n)}return i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r}},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(U);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
to={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ta[t]||S.find.attr;ta[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(// Avoid an infinite loop by temporarily removing this function from the getter
o=ta[a],ta[a]=i,i=null!=n(e,t,r)?a:null,ta[a]=o),i}});var ts=/^(?:input|select|textarea|button)$/i,tu=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function tl(e){return(e.match(U)||[]).join(" ")}function tc(e){return e.getAttribute&&e.getAttribute("class")||""}function tf(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(U)||[]}S.fn.extend({prop:function(e,t){return J(this,S.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&S.isXMLDoc(e)||(// Fix name and attach hooks
t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n)?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ts.test(e.nodeName)||tu.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),h.optSelected||(S.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(e){var t,n,r,i,o,a;return v(e)?this.each(function(t){S(this).addClass(e.call(this,t,tc(this)))}):(t=tf(e)).length?this.each(function(){if(r=tc(this),n=1===this.nodeType&&" "+tl(r)+" "){for(o=0;o<t.length;o++)i=t[o],0>n.indexOf(" "+i+" ")&&(n+=i+" ");r!==// Only assign if different to avoid unneeded rendering.
(a=tl(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,r,i,o,a;return v(e)?this.each(function(t){S(this).removeClass(e.call(this,t,tc(this)))}):arguments.length?(t=tf(e)).length?this.each(function(){if(r=tc(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+tl(r)+" "){for(o=0;o<t.length;o++)// Remove *all* instances
for(i=t[o];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ");r!==// Only assign if different to avoid unneeded rendering.
(a=tl(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o,a=typeof e,s="string"===a||Array.isArray(e);return v(e)?this.each(function(n){S(this).toggleClass(e.call(this,n,tc(this),t),t)}):"boolean"==typeof t&&s?t?this.addClass(e):this.removeClass(e):(n=tf(e),this.each(function(){if(s)for(i=0,// Toggle individual class names
o=S(this);i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else(void 0===e||"boolean"===a)&&((r=tc(this))&&er.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":er.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+tl(tc(n))+" ").indexOf(t)>-1)return!0;return!1}});var tp=/\r/g;S.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=v(e),this.each(function(n){var i;1!==this.nodeType||(null==(i=r?e.call(this,n,S(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=S.map(i,function(e){return null==e?"":e+""})),(t=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=S.valHooks[i.type]||S.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(tp,""):null==n?"":n:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
tl(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;// Loop through all the selected options
for(r=o<0?u:a?o:0;r<u;r++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=i[r]).selected||r===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=S(n).val(),a)return t;// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=S.makeArray(t),a=i.length;a--;)/* eslint-disable no-cond-assign */((r=i[a]).selected=S.inArray(S.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=S.inArray(S(e).val(),t)>-1}},h.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var td=e.location,th={guid:Date.now()},tv=/\?/;// Cross-browser xml parsing
S.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],(!n||r)&&S.error("Invalid XML: "+(r?S.map(r.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var tg=/^(?:focusinfocus|focusoutblur)$/,ty=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,p,d,h=[r||y],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(a=d=s=r=r||y,!(3===r.nodeType||8===r.nodeType||tg.test(m+S.event.triggered))&&(m.indexOf(".")>-1&&(m=// Namespaced trigger; create a regexp to match event type in handle()
(x=m.split(".")).shift(),x.sort()),l=0>m.indexOf(":")&&"on"+m,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[S.expando]?t:new S.Event(m,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=r),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:S.makeArray(n,[t]),// Allow special events to draw outside the lines
p=S.event.special[m]||{},i||!p.trigger||!1!==p.trigger.apply(r,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!i&&!p.noBubble&&!g(r)){for(u=p.delegateType||m,tg.test(u+m)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||y)&&h.push(s.defaultView||s.parentWindow||e)}for(// Fire handlers on the event path
o=0;(a=h[o++])&&!t.isPropagationStopped();)d=a,t.type=o>1?u:p.bindType||m,// jQuery handler
(c=(er.get(a,"events")||Object.create(null))[t.type]&&er.get(a,"handle"))&&c.apply(a,n),// Native handler
(c=l&&a[l])&&c.apply&&et(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=m,!i&&!t.isDefaultPrevented()&&(!p._default||!1===p._default.apply(h.pop(),n))&&et(r)&&l&&v(r[m])&&!g(r)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(s=r[l])&&(r[l]=null),// Prevent re-triggering of the same event, since we already bubbled it above
S.event.triggered=m,t.isPropagationStopped()&&d.addEventListener(m,ty),r[m](),t.isPropagationStopped()&&d.removeEventListener(m,ty),S.event.triggered=void 0,s&&(r[l]=s)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}});var tm=/\[\]$/,tx=/\r?\n/g,tb=/^(?:submit|button|image|reset|file)$/i,tw=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
S.param=function(e,t){var n,r=[],i=function(e,t){// If value is a function, invoke it and use its return value
var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,r,i){var o;if(Array.isArray(n))S.each(n,function(n,o){r||tm.test(t)?i(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,r,i)});else if(r||"object"!==b(n))i(t,n);else for(o in n)e(t+"["+o+"]",n[o],r,i)}(n,e[n],t,i);// Return the resulting serialization
return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!S(this).is(":disabled")&&tw.test(this.nodeName)&&!tb.test(e)&&(this.checked||!em.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(tx,"\r\n")}}):{name:t.name,value:n.replace(tx,"\r\n")}}).get()}});var t_=/%20/g,tS=/#.*$/,tA=/([?&])_=[^&]*/,tC=/^(.*?):[ \t]*([^\r\n]*)$/mg,tk=/^(?:GET|HEAD)$/,tT=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tE={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tP={},tj="*/".concat("*"),tM=y.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tR(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(U)||[];if(v(n))// For each dataType in the dataTypeExpression
for(;r=o[i++];)"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}// Base inspection function for prefilters and transports
function tD(e,t,n,r){var i={},o=e===tP;function a(s){var u;return i[s]=!0,S.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tI(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}tM.href=td.href,S.extend({// Counter for holding the number of active queries
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
		*/accepts:{"*":tj,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":S.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tI(tI(e,S.ajaxSettings),t):tI(S.ajaxSettings,e)},ajaxPrefilter:tR(tE),ajaxTransport:tR(tP),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var r,i,o,a,s,u,l,c,f,p,d=S.ajaxSetup({},n),h=d.context||d,v=d.context&&(h.nodeType||h.jquery)?S(h):S.event,g=S.Deferred(),m=S.Callbacks("once memory"),x=d.statusCode||{},b={},w={},_="canceled",A={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(l){if(!a)for(a={};t=tC.exec(o);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return l?o:null},// Caches the header
setRequestHeader:function(e,t){return null==l&&(b[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(l)A.always(e[A.status]);else for(t in e)x[t]=[x[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||_;return r&&r.abort(t),C(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
g.promise(A),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
d.url=((t||d.url||td.href)+"").replace(tT,td.protocol+"//"),// Alias method option to type as per ticket trac-12004
d.type=n.method||n.type||d.method||d.type,// Extract dataTypes list
d.dataTypes=(d.dataType||"*").toLowerCase().match(U)||[""],null==d.crossDomain){u=y.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{u.href=d.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
u.href=u.href,d.crossDomain=tM.protocol+"//"+tM.host!=u.protocol+"//"+u.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
d.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=S.param(d.data,d.traditional)),// Apply prefilters
tD(tE,d,n,A),l)return A;// Check for headers option
for(f in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(c=S.event&&d.global)&&0==S.active++&&S.event.trigger("ajaxStart"),// Uppercase the type
d.type=d.type.toUpperCase(),// Determine if request has content
d.hasContent=!tk.test(d.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
i=d.url.replace(tS,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(t_,"+")):(// Remember the hash so we can put it back
p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(tv.test(i)?"&":"?")+d.data,// trac-9682: remove data so that it's not used in an eventual retry
delete d.data),!1===d.cache&&(i=i.replace(tA,"$1"),p=(tv.test(i)?"&":"?")+"_="+th.guid+++p),// Put hash and anti-cache on the URL that will be requested (gh-1732)
d.url=i+p),d.ifModified&&(S.lastModified[i]&&A.setRequestHeader("If-Modified-Since",S.lastModified[i]),S.etag[i]&&A.setRequestHeader("If-None-Match",S.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&A.setRequestHeader("Content-Type",d.contentType),// Set the Accepts header for the server, depending on the dataType
A.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+tj+"; q=0.01":""):d.accepts["*"]),d.headers)A.setRequestHeader(f,d.headers[f]);// Allow custom headers/mimetypes and early abort
if(d.beforeSend&&(!1===d.beforeSend.call(h,A,d)||l))return A.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
_="abort",// Install callbacks on deferreds
m.add(d.complete),A.done(d.success),A.fail(d.error),// Get transport
r=tD(tP,d,n,A)){// If request was aborted inside ajaxSend, stop there
if(A.readyState=1,c&&v.trigger("ajaxSend",[A,d]),l)return A;d.async&&d.timeout>0&&(s=e.setTimeout(function(){A.abort("timeout")},d.timeout));try{l=!1,r.send(b,C)}catch(e){// Rethrow post-completion exceptions
if(l)throw e;// Propagate others as results
C(-1,e)}}else C(-1,"No Transport");// Callback for when everything is done
function C(t,n,a,u){var f,p,y,b,w,_=n;// Ignore repeat invocations
l||(l=!0,s&&e.clearTimeout(s),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
o=u||"",// Set readyState
A.readyState=t>0?4:0,// Determine if successful
f=t>=200&&t<300||304===t,a&&(b=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r){for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}}// Check to see if we have a response for the expected dataType
if(u[0]in n)o=u[0];else{// Try convertible dataTypes
for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}// Or just use first one
o=o||a}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,A,a)),!f&&S.inArray("script",d.dataTypes)>-1&&0>S.inArray("json",d.dataTypes)&&(d.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
b=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift()){// There's only work to do if current dataType is non-auto
if("*"===o)o=u;else if("*"!==u&&u!==o){// If none found, seek a pair
if(!// Seek a direct converter
(a=l[u+" "+o]||l["* "+o])){for(i in l)if(// If conv2 outputs current
(s=i.split(" "))[1]===o&&// If prev can be converted to accepted input
(a=l[u+" "+s[0]]||l["* "+s[0]])){// Condense equivalence converters
!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}}// Apply converter (if not an equivalence)
if(!0!==a){// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}}}return{state:"success",data:t}}(d,b,A,f),f?(d.ifModified&&((w=A.getResponseHeader("Last-Modified"))&&(S.lastModified[i]=w),(w=A.getResponseHeader("etag"))&&(S.etag[i]=w)),204===t||"HEAD"===d.type?_="nocontent":304===t?_="notmodified":(_=b.state,p=b.data,f=!(y=b.error))):(// Extract error from statusText and normalize for non-aborts
y=_,(t||!_)&&(_="error",t<0&&(t=0))),// Set data for the fake xhr object
A.status=t,A.statusText=(n||_)+"",f?g.resolveWith(h,[p,_,A]):g.rejectWith(h,[A,_,y]),// Status-dependent callbacks
A.statusCode(x),x=void 0,c&&v.trigger(f?"ajaxSuccess":"ajaxError",[A,d,f?p:y]),// Complete
m.fireWith(h,[A,_]),!c||(v.trigger("ajaxComplete",[A,d]),--S.active||S.event.trigger("ajaxStop")))}return A},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,t){S[t]=function(e,n,r,i){// The url can be an options object (which then must have .url)
return v(n)&&(i=i||r,r=n,n=void 0),S.ajax(S.extend({url:e,type:t,dataType:i,data:n,success:r},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return v(e)?this.each(function(t){S(this).wrapInner(e.call(this,t))}):this.each(function(){var t=S(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v(e);return this.each(function(n){S(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tB={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tL=S.ajaxSettings.xhr();h.cors=!!tL&&"withCredentials"in tL,h.ajax=tL=!!tL,S.ajaxTransport(function(t){var n,r;// Cross domain only allowed if supported through XMLHttpRequest
if(h.cors||tL&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();// Apply custom fields if provided
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];// Set headers
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);// Callback
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(tB[s.status]||s.status,s.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
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
S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),// Handle cache's special case and crossDomain
S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
S.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(r,i){t=S("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tO=[],tH=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tO.pop()||S.expando+"_"+th.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
S.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(tH.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tH.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
i=t.jsonpCallback=v(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tH,"$1"+i):!1!==t.jsonp&&(t.url+=(tv.test(t.url)?"&":"?")+t.jsonp+"="+i),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return a||S.error(i+" was not called"),a[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
o=e[i],e[i]=function(){a=arguments},// Clean-up function (fires after converters)
r.always(function(){void 0===o?S(e).removeProp(i):e[i]=o,t[i]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tO.push(i)),a&&v(o)&&o(a[0]),a=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
h.createHTMLDocument=((n=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
S.parseHTML=function(e,t,n){var r,i,o;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(h.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(r=(t=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,t.head.appendChild(r)):t=y),i=L.exec(e),o=!n&&[],i)?[t.createElement(i[1])]:(i=eC([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes))},/**
 * Load a url into a page
 */S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=tl(e.slice(s)),e=e.slice(0,s)),v(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&S.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,a.html(r?// Exclude scripts to avoid IE 'Permission Denied' errors
S("<div>").append(S.parseHTML(e)).find(r):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(e){return S.grep(S.timers,function(t){return e===t.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){S.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
r.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
i=S(e).offset(),i.top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||ef})}}),// Create scrollLeft and scrollTop methods
S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;S.fn[e]=function(r){return J(this,function(e,r,i){// Coalesce documents and windows
var o;if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
S.each(["top","left"],function(e,t){S.cssHooks[t]=ez(h.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=e$(e,t),eN.test(n)?S(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
S.each({Height:"height",Width:"width"},function(e,t){S.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){// Margin is only for outerHeight, outerWidth
S.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return J(this,function(t,n,i){var o;return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?S.css(t,n,s):S.style(t,n,i,s)},t,a?i:void 0,a)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
S.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tq=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
S.proxy=function(e,t){var n,r,i;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return(// Simulated bind
r=o.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(i=function(){return e.apply(t||this,r.concat(o.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i)},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=C,S.isFunction=v,S.isWindow=g,S.camelCase=ee,S.type=b,S.now=Date.now,S.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=S.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(tq,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var tN=e.jQuery,tF=e.$;return S.noConflict=function(t){return e.$===S&&(e.$=tF),t&&e.jQuery===S&&(e.jQuery=tN),S},void 0===t&&(e.jQuery=e.$=S),S},"object"==typeof l?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
l=e.document?t(e,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return t(e)}:t(e);var c={},f={};f=new URL("arrow-dark.c266c189.svg",import.meta.url).toString();var p={};p=new URL("arrow-down.81662970.svg",import.meta.url).toString();var d={};d=new URL("arrow-right.c7563f9a.svg",import.meta.url).toString();var h={};h=new URL("arrow-up.ac354ea9.svg",import.meta.url).toString();var v={};v=new URL("arrow.8397d492.svg",import.meta.url).toString();var g={};g=new URL("avatar.2c8b6978.png",import.meta.url).toString();var y={};y=new URL("case-1.d3499120.png",import.meta.url).toString();var m={};m=new URL("case-2.5e9c6cf4.png",import.meta.url).toString();var x={};x=new URL("case-studies-vector.4e4fe3e1.svg",import.meta.url).toString();var b={};b=new URL("check.b9e1fb0c.svg",import.meta.url).toString();var w={};w=new URL("copy.30df4a9b.svg",import.meta.url).toString();var _={};_=new URL("emotional-vector.52981a5a.svg",import.meta.url).toString();var S={};S=new URL("flag.c9cddf54.png",import.meta.url).toString();var A={};A=new URL("footer-orange-vector.1193adbe.svg",import.meta.url).toString();var C={};C=new URL("footer-purple-vector.ac11826b.svg",import.meta.url).toString();var k={};k=new URL("hand.519e237c.svg",import.meta.url).toString();var T={};T=new URL("heart.a80f852b.svg",import.meta.url).toString();var E={};E=new URL("human-friendly-vector.25a740a4.svg",import.meta.url).toString();var P={};P=new URL("new.04fc448e.svg",import.meta.url).toString();var j={};j=new URL("plane.332ad5c1.svg",import.meta.url).toString();var M={};M=new URL("ui.dd428ae2.svg",import.meta.url).toString();c={"arrow-dark.svg":f,"arrow-down.svg":p,"arrow-right.svg":d,"arrow-up.svg":h,"arrow.svg":v,"avatar.png":g,"case-1.png":y,"case-2.png":m,"case-studies-vector.svg":x,"check.svg":b,"copy.svg":w,"emotional-vector.svg":_,"flag.png":S,"footer-orange-vector.svg":A,"footer-purple-vector.svg":C,"hand.svg":k,"heart.svg":T,"human-friendly-vector.svg":E,"new.svg":P,"plane.svg":j,"ui.svg":M,"ux.svg":new URL("ux.1c719840.svg",import.meta.url).toString()};const R=new URL(d),D=(e,t)=>{let n=new URL(/*@__PURE__*/r(c)[t.imageName],"file:///src/js/cases.js");return`
    <section>
      <div class="case-container case-${e}-container">
        <div class="left-block-container">
          <div class="case-img-container">
            <img src="${n}" alt="">
          </div>
          <div class="header-and-description">
            <h2 class="light">${t.title}</h2>
            <div class="text-2 light">
              ${t.description}
            </div>
          </div>
          <div class="interactive-tags-block">
            <div class="matter-js-container"></div>
          </div>
          <div class="full-case-link-container">
            <div class="full-case-link-button easy-in-out-slow" id="full-case-button-${e}">
              <div class="tag-24 light">View full case study</div>
              <div class="arrow-button">
                <img class="easy-in-out-slow" src="${R}" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="right-block-container">
          <img src="${n}" alt="">
        </div>
      </div>
    </section>
  `},I=/*@__PURE__*/r(l)("#cases-section");u.cases.forEach((e,t)=>{I.append(D(t,e)),/*@__PURE__*/r(l)(`#full-case-button-${t}`).on("click",()=>window.open(e.link))});const B=/*@__PURE__*/r(l)(".copied-popup-flying-container");let L=!1;async function O(){if(await navigator.clipboard.writeText("alinaermolaeva044@gmail.com"),L)return;L=!0;let e=H();B.css("display","block").addClass(e.show).removeClass(e.hide),setTimeout(()=>{B.addClass(e.hide).removeClass(e.show)},3e3),B.on("animationend",()=>{B.hasClass(e.hide)&&(B.css("display","none"),L=!1),B.removeClass(e.hide)})}const H=()=>window.matchMedia("(max-width: 600px)").matches?{show:"animate__fadeInDown",hide:"animate__fadeOutUp"}:{show:"animate__fadeInUp",hide:"animate__fadeOutDown"},q=()=>{if(0===window.scrollY&&!window.matchMedia("(max-width: 600px)").matches){let e=/*@__PURE__*/r(l)(".floating-footer-container").height(),t=Number.parseInt(/*@__PURE__*/r(l)(".main-footer-section").css("margin-top").replace("px",""));return e-t}return 0},N=()=>{let e=/*@__PURE__*/r(l)("#description-section");return e.position().top+e.outerHeight()},F=()=>{let e=/*@__PURE__*/r(l)(".floating-header-container > *").not((e,t)=>"none"===/*@__PURE__*/r(l)(t).css("display"));return Number.parseInt(e.css("padding-bottom").replace("px",""))},W=()=>{let e=q(),t=N(),n=F(),i=/*@__PURE__*/r(l)(".floating-header-container").height();return t-e-(i-n)},U=()=>/*@__PURE__*/r(l)(".footer-links").position().top,V=()=>/*@__PURE__*/r(l)("footer").position().top,$=/*@__PURE__*/r(l)(".floating-footer-container"),z=/*@__PURE__*/r(l)(".description-container");let G=window.scrollY;const X=()=>{if(window.matchMedia("(max-width: 600px)").matches)return;let e=0===window.scrollY;e?z.addClass("description-container-margin").removeClass("description-container-margin-scrolled"):z.addClass("description-container-margin-scrolled").removeClass("description-container-margin");let t=window.scrollY<G,n=window.scrollY+window.innerHeight<U();e||t&&n?$.addClass("animate__slideInUp").removeClass("animate__slideOutDown"):$.addClass("animate__slideOutDown").removeClass("animate__slideInUp"),G=window.scrollY},Y=()=>{let e=/*@__PURE__*/r(l)(".floating-header-container > *").not((e,t)=>"none"===/*@__PURE__*/r(l)(t).css("display")).find(".menu-buttons").first(),t=e.children(".home").first(),n=e.children(".work").first(),i=e.children(".contacts").first();window.scrollY<W()-5?(t.addClass("selected-menu-button"),n.removeClass("selected-menu-button"),i.removeClass("selected-menu-button")):window.innerHeight+window.scrollY<V()?(t.removeClass("selected-menu-button"),n.addClass("selected-menu-button"),i.removeClass("selected-menu-button")):(t.removeClass("selected-menu-button"),n.removeClass("selected-menu-button"),i.addClass("selected-menu-button"))};/*@__PURE__*/r(l)(".email-container").on("click",async()=>O()),/*@__PURE__*/r(l)("#up-button").on("click",()=>window.scrollTo({top:0,behavior:"smooth"})),/*@__PURE__*/r(l)("#explore-cases-button").on("click",()=>window.scrollTo({top:W(),behavior:"smooth"})),/*@__PURE__*/r(l)(".menu-buttons > .home").on("click",()=>window.scrollTo({top:0,behavior:"smooth"})),/*@__PURE__*/r(l)(".menu-buttons > .work").on("click",()=>window.scrollTo({top:W(),behavior:"smooth"})),/*@__PURE__*/r(l)(".menu-buttons > .contacts").on("click",()=>window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})),/*@__PURE__*/r(l)(window).scroll(()=>{X(),Y()}),/*@__PURE__*/r(l)(window).on("resize",()=>X()),/*@__PURE__*/r(l)(".cv-block").on("click",()=>window.open(u.cv)),/*@__PURE__*/r(l)(".cv-button").on("click",()=>window.open(u.cv)),/*@__PURE__*/r(l)(".behance").on("click",()=>window.open(u.behance)),/*@__PURE__*/r(l)(".linkedin").on("click",()=>window.open(u.linkedin)),/*@__PURE__*/r(l)(".telegram").on("click",()=>window.open(u.telegram));var J={};J=/******/function(e){/******/// The module cache
/******/var t={};/******//******/// The require function
/******/function n(r){/******//******/// Check if module is in cache
/******/if(t[r])/******/return t[r].exports;/******/// Create a new module (and put it into the cache)
/******/var i=t[r]={/******/i:r,/******/l:!1,/******/exports:{}};/******//******/// Return the exports of the module
/******/return(/******//******/// Execute the module function
/******/e[r].call(i.exports,i,i.exports,n),/******//******/// Flag the module as loaded
/******/i.l=!0,i.exports);/******/}/******//******//******/// Load entry module and return exports
/******/return(/******//******//******/// expose the modules object (__webpack_modules__)
/******/n.m=e,/******//******/// expose the module cache
/******/n.c=t,/******//******/// define getter function for harmony exports
/******/n.d=function(e,t,r){/******/n.o(e,t)||/******/Object.defineProperty(e,t,{enumerable:!0,get:r});/******/},/******//******/// define __esModule on exports
/******/n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),/******/Object.defineProperty(e,"__esModule",{value:!0});/******/},/******//******/// create a fake namespace object
/******/// mode & 1: value is a module id, require it
/******/// mode & 2: merge all properties of value into the ns
/******/// mode & 4: return value when already ns object
/******/// mode & 8|1: behave like require
/******/n.t=function(e,t){/******/if(1&t&&(e=n(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;/******/var r=Object.create(null);/******/if(/******/n.r(r),/******/Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,(function(t){return e[t]}).bind(null,i));/******/return r;/******/},/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(e){/******/var t=e&&e.__esModule?/******/function(){return e.default}:/******/function(){return e};/******/return /******/n.d(t,"a",t),t;/******/},/******//******/// Object.prototype.hasOwnProperty.call
/******/n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******//******/// __webpack_public_path__
/******/n.p="",n(n.s=20));/******/}([/* 0 *//***/function(e,t){/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/var r,i={};e.exports=i,i._baseDelta=1e3/60,i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i._warnedOnce={},i._decomp=null,/**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */i.extend=function(e,t){var n,r;"boolean"==typeof t?(n=2,r=t):(n=1,r=!0);for(var o=n;o<arguments.length;o++){var a=arguments[o];if(a)for(var s in a)r&&a[s]&&a[s].constructor===Object?e[s]&&e[s].constructor!==Object?e[s]=a[s]:(e[s]=e[s]||{},i.extend(e[s],r,a[s])):e[s]=a[s]}return e},/**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */i.clone=function(e,t){return i.extend({},t,e)},/**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */i.keys=function(e){if(Object.keys)return Object.keys(e);// avoid hasOwnProperty for performance
var t=[];for(var n in e)t.push(n);return t},/**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */i.values=function(e){var t=[];if(Object.keys){for(var n=Object.keys(e),r=0;r<n.length;r++)t.push(e[n[r]]);return t}// avoid hasOwnProperty for performance
for(var i in e)t.push(e[i]);return t},/**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */i.get=function(e,t,n,r){t=t.split(".").slice(n,r);for(var i=0;i<t.length;i+=1)e=e[t[i]];return e},/**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */i.set=function(e,t,n,r,o){var a=t.split(".").slice(r,o);return i.get(e,t,0,-1)[a[a.length-1]]=n,n},/**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */i.shuffle=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(i.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e},/**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */i.choose=function(e){return e[Math.floor(i.random()*e.length)]},/**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */i.isElement=function(e){return"undefined"!=typeof HTMLElement?e instanceof HTMLElement:!!(e&&e.nodeType&&e.nodeName)},/**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */i.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},/**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */i.isFunction=function(e){return"function"==typeof e},/**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */i.isPlainObject=function(e){return"object"==typeof e&&e.constructor===Object},/**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */i.isString=function(e){return"[object String]"===toString.call(e)},/**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */i.clamp=function(e,t,n){return e<t?t:e>n?n:e},/**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */i.sign=function(e){return e<0?-1:1},/**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */i.now=function(){if("undefined"!=typeof window&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-i._nowStartTime},/**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */i.random=function(e,t){return t=void 0!==t?t:1,(e=void 0!==e?e:0)+r()*(t-e)},r=function(){return(// https://en.wikipedia.org/wiki/Linear_congruential_generator
i._seed=(9301*i._seed+49297)%233280,i._seed/233280)},/**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */i.colorToNumber=function(e){return 3==(e=e.replace("#","")).length&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)},/**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @static
     * @property logLevel
     * @type {Number}
     * @default 1
     */i.logLevel=1,/**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */i.log=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},/**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */i.info=function(){console&&i.logLevel>0&&i.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},/**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */i.warn=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},/**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */i.warnOnce=function(){var e=Array.prototype.slice.call(arguments).join(" ");i._warnedOnce[e]||(i.warn(e),i._warnedOnce[e]=!0)},/**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */i.deprecated=function(e,t,n){e[t]=i.chain(function(){i.warnOnce("\uD83D\uDD05 deprecated \uD83D\uDD05",n)},e[t])},/**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */i.nextId=function(){return i._nextId++},/**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */i.indexOf=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return -1},/**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */i.map=function(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n},/**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */i.topologicalSort=function(e){// https://github.com/mgechev/javascript-algorithms
// Copyright (c) Minko Gechev (MIT license)
// Modifications: tidy formatting and naming
var t=[],n=[],r=[];for(var o in e)n[o]||r[o]||i._topologicalSort(o,n,r,e,t);return t},i._topologicalSort=function(e,t,n,r,o){var a=r[e]||[];n[e]=!0;for(var s=0;s<a.length;s+=1){var u=a[s];n[u]||t[u]||i._topologicalSort(u,t,n,r,o)}n[e]=!1,t[e]=!0,o.push(e)},/**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */i.chain=function(){for(var e=[],t=0;t<arguments.length;t+=1){var n=arguments[t];n._chained?e.push.apply(e,n._chained):e.push(n)}var r=function(){for(var t,n=Array(arguments.length),r=0,i=arguments.length;r<i;r++)n[r]=arguments[r];for(r=0;r<e.length;r+=1){var o=e[r].apply(t,n);void 0!==o&&(t=o)}return t};return r._chained=e,r},/**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */i.chainPathBefore=function(e,t,n){return i.set(e,t,i.chain(n,i.get(e,t)))},/**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */i.chainPathAfter=function(e,t,n){return i.set(e,t,i.chain(i.get(e,t),n))},/**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */i.setDecomp=function(e){i._decomp=e},/**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */i.getDecomp=function(){// get user provided decomp if set
var e=i._decomp;try{e||"undefined"==typeof window||(e=window.decomp),e||void 0===n||(e=n.decomp)}catch(t){// decomp not available
e=null}return e};/***/},/* 1 *//***/function(e,t){/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/var n={};e.exports=n,/**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */n.create=function(e){var t={min:{x:0,y:0},max:{x:0,y:0}};return e&&n.update(t,e),t},/**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */n.update=function(e,t,n){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var r=0;r<t.length;r++){var i=t[r];i.x>e.max.x&&(e.max.x=i.x),i.x<e.min.x&&(e.min.x=i.x),i.y>e.max.y&&(e.max.y=i.y),i.y<e.min.y&&(e.min.y=i.y)}n&&(n.x>0?e.max.x+=n.x:e.min.x+=n.x,n.y>0?e.max.y+=n.y:e.min.y+=n.y)},/**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */n.contains=function(e,t){return t.x>=e.min.x&&t.x<=e.max.x&&t.y>=e.min.y&&t.y<=e.max.y},/**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */n.overlaps=function(e,t){return e.min.x<=t.max.x&&e.max.x>=t.min.x&&e.max.y>=t.min.y&&e.min.y<=t.max.y},/**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */n.translate=function(e,t){e.min.x+=t.x,e.max.x+=t.x,e.min.y+=t.y,e.max.y+=t.y},/**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */n.shift=function(e,t){var n=e.max.x-e.min.x,r=e.max.y-e.min.y;e.min.x=t.x,e.max.x=t.x+n,e.min.y=t.y,e.max.y=t.y+r};/***/},/* 2 *//***/function(e,t){/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/// TODO: consider params for reusing vector objects
var n={};e.exports=n,/**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */n.create=function(e,t){return{x:e||0,y:t||0}},/**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */n.clone=function(e){return{x:e.x,y:e.y}},/**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */n.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},/**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */n.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},/**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */n.rotate=function(e,t,n){var r=Math.cos(t),i=Math.sin(t);n||(n={});var o=e.x*r-e.y*i;return n.y=e.x*i+e.y*r,n.x=o,n},/**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */n.rotateAbout=function(e,t,n,r){var i=Math.cos(t),o=Math.sin(t);r||(r={});var a=n.x+((e.x-n.x)*i-(e.y-n.y)*o);return r.y=n.y+((e.x-n.x)*o+(e.y-n.y)*i),r.x=a,r},/**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */n.normalise=function(e){var t=n.magnitude(e);return 0===t?{x:0,y:0}:{x:e.x/t,y:e.y/t}},/**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */n.dot=function(e,t){return e.x*t.x+e.y*t.y},/**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */n.cross=function(e,t){return e.x*t.y-e.y*t.x},/**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */n.cross3=function(e,t,n){return(t.x-e.x)*(n.y-e.y)-(t.y-e.y)*(n.x-e.x)},/**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */n.add=function(e,t,n){return n||(n={}),n.x=e.x+t.x,n.y=e.y+t.y,n},/**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */n.sub=function(e,t,n){return n||(n={}),n.x=e.x-t.x,n.y=e.y-t.y,n},/**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */n.mult=function(e,t){return{x:e.x*t,y:e.y*t}},/**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */n.div=function(e,t){return{x:e.x/t,y:e.y/t}},/**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */n.perp=function(e,t){return{x:-((t=!0===t?-1:1)*e.y),y:t*e.x}},/**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */n.neg=function(e){return{x:-e.x,y:-e.y}},/**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */n.angle=function(e,t){return Math.atan2(t.y-e.y,t.x-e.x)},/**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */n._temp=[n.create(),n.create(),n.create(),n.create(),n.create(),n.create()];/***/},/* 3 *//***/function(e,t,n){/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/var r={};e.exports=r;var i=n(2),o=n(0);/**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */r.create=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],o={x:i.x,y:i.y,index:r,body:t,isInternal:!1};n.push(o)}return n},/**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */r.fromPath=function(e,t){var n=[];return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,function(e,t,r){n.push({x:parseFloat(t),y:parseFloat(r)})}),r.create(n,t)},/**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */r.centre=function(e){for(var t,n,o,a=r.area(e,!0),s={x:0,y:0},u=0;u<e.length;u++)o=(u+1)%e.length,t=i.cross(e[u],e[o]),n=i.mult(i.add(e[u],e[o]),t),s=i.add(s,n);return i.div(s,6*a)},/**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */r.mean=function(e){for(var t={x:0,y:0},n=0;n<e.length;n++)t.x+=e[n].x,t.y+=e[n].y;return i.div(t,e.length)},/**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */r.area=function(e,t){for(var n=0,r=e.length-1,i=0;i<e.length;i++)n+=(e[r].x-e[i].x)*(e[r].y+e[i].y),r=i;return t?n/2:Math.abs(n)/2},/**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */r.inertia=function(e,t){// find the polygon's moment of inertia, using second moment of area
// from equations at http://www.physicsforums.com/showthread.php?t=25293
for(var n,r,o=0,a=0,s=0;s<e.length;s++)r=(s+1)%e.length,o+=(n=Math.abs(i.cross(e[r],e[s])))*(i.dot(e[r],e[r])+i.dot(e[r],e[s])+i.dot(e[s],e[s])),a+=n;return t/6*(o/a)},/**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */r.translate=function(e,t,n){n=void 0!==n?n:1;var r,i=e.length,o=t.x*n,a=t.y*n;for(r=0;r<i;r++)e[r].x+=o,e[r].y+=a;return e},/**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */r.rotate=function(e,t,n){if(0!==t){var r,i,o,a,s=Math.cos(t),u=Math.sin(t),l=n.x,c=n.y,f=e.length;for(a=0;a<f;a++)i=(r=e[a]).x-l,o=r.y-c,r.x=l+(i*s-o*u),r.y=c+(i*u+o*s);return e}},/**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */r.contains=function(e,t){for(var n,r=t.x,i=t.y,o=e.length,a=e[o-1],s=0;s<o;s++){if(n=e[s],(r-a.x)*(n.y-a.y)+(i-a.y)*(a.x-n.x)>0)return!1;a=n}return!0},/**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */r.scale=function(e,t,n,o){if(1===t&&1===n)return e;o=o||r.centre(e);for(var a,s,u=0;u<e.length;u++)a=e[u],s=i.sub(a,o),e[u].x=o.x+s.x*t,e[u].y=o.y+s.y*n;return e},/**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */r.chamfer=function(e,t,n,r,a){t="number"==typeof t?[t]:t||[8],// quality defaults to -1, which is auto
n=void 0!==n?n:-1,r=r||2,a=a||14;for(var s=[],u=0;u<e.length;u++){var l=e[u-1>=0?u-1:e.length-1],c=e[u],f=e[(u+1)%e.length],p=t[u<t.length?u:t.length-1];if(0===p){s.push(c);continue}var d=i.normalise({x:c.y-l.y,y:l.x-c.x}),h=i.normalise({x:f.y-c.y,y:c.x-f.x}),v=Math.sqrt(2*Math.pow(p,2)),g=i.mult(o.clone(d),p),y=i.normalise(i.mult(i.add(d,h),.5)),m=i.sub(c,i.mult(y,v)),x=n;-1===n&&(x=1.75*Math.pow(p,.32)),(x=o.clamp(x,r,a))%2==1&&(x+=1);for(var b=Math.acos(i.dot(d,h))/x,w=0;w<x;w++)s.push(i.add(i.rotate(g,b*w),m))}return s},/**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */r.clockwiseSort=function(e){var t=r.mean(e);return e.sort(function(e,n){return i.angle(t,e)-i.angle(t,n)}),e},/**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */r.isConvex=function(e){// http://paulbourke.net/geometry/polygonmesh/
// Copyright (c) Paul Bourke (use permitted)
var t,n,r,i,o=0,a=e.length;if(a<3)return null;for(t=0;t<a;t++)if(n=(t+1)%a,r=(t+2)%a,(i=(e[n].x-e[t].x)*(e[r].y-e[n].y)-(e[n].y-e[t].y)*(e[r].x-e[n].x))<0?o|=1:i>0&&(o|=2),3===o)return!1;return 0!==o||null},/**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */r.hull=function(e){// http://geomalgorithms.com/a10-_hull-1.html
var t,n,r=[],o=[];// build lower hull
for(// sort vertices on x-axis (y-axis for ties)
(e=e.slice(0)).sort(function(e,t){var n=e.x-t.x;return 0!==n?n:e.y-t.y}),n=0;n<e.length;n+=1){for(t=e[n];o.length>=2&&0>=i.cross3(o[o.length-2],o[o.length-1],t);)o.pop();o.push(t)}// build upper hull
for(n=e.length-1;n>=0;n-=1){for(t=e[n];r.length>=2&&0>=i.cross3(r[r.length-2],r[r.length-1],t);)r.pop();r.push(t)}return(// concatenation of the lower and upper hulls gives the convex hull
// omit last points because they are repeated at the beginning of the other list
r.pop(),o.pop(),r.concat(o))};/***/},/* 4 *//***/function(e,t,n){/**
* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/var r,i={};e.exports=i;var o=n(3),a=n(2),s=n(7),u=n(0),l=n(1),c=n(11);i._timeCorrection=!0,i._inertiaScale=4,i._nextCollidingGroupId=1,i._nextNonCollidingGroupId=-1,i._nextCategory=1,i._baseDelta=1e3/60,/**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */i.create=function(e){var t={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:1e3/60,_original:null},n=u.extend(t,e);return r(n,e),n},/**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */i.nextGroup=function(e){return e?i._nextNonCollidingGroupId--:i._nextCollidingGroupId++},/**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */i.nextCategory=function(){return i._nextCategory=i._nextCategory<<1,i._nextCategory},r=function(e,t){t=t||{},// init required properties (order is important)
i.set(e,{bounds:e.bounds||l.create(e.vertices),positionPrev:e.positionPrev||a.clone(e.position),anglePrev:e.anglePrev||e.angle,vertices:e.vertices,parts:e.parts||[e],isStatic:e.isStatic,isSleeping:e.isSleeping,parent:e.parent||e}),o.rotate(e.vertices,e.angle,e.position),c.rotate(e.axes,e.angle),l.update(e.bounds,e.vertices,e.velocity),// allow options to override the automatically calculated properties
i.set(e,{axes:t.axes||e.axes,area:t.area||e.area,mass:t.mass||e.mass,inertia:t.inertia||e.inertia});// render properties
var n=e.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),r=e.isStatic?"#555":"#ccc",s=e.isStatic&&null===e.render.fillStyle?1:0;e.render.fillStyle=e.render.fillStyle||n,e.render.strokeStyle=e.render.strokeStyle||r,e.render.lineWidth=e.render.lineWidth||s,e.render.sprite.xOffset+=-(e.bounds.min.x-e.position.x)/(e.bounds.max.x-e.bounds.min.x),e.render.sprite.yOffset+=-(e.bounds.min.y-e.position.y)/(e.bounds.max.y-e.bounds.min.y)},/**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */i.set=function(e,t,n){var r;for(r in"string"==typeof t&&(r=t,(t={})[r]=n),t)if(Object.prototype.hasOwnProperty.call(t,r))switch(n=t[r],r){case"isStatic":i.setStatic(e,n);break;case"isSleeping":s.set(e,n);break;case"mass":i.setMass(e,n);break;case"density":i.setDensity(e,n);break;case"inertia":i.setInertia(e,n);break;case"vertices":i.setVertices(e,n);break;case"position":i.setPosition(e,n);break;case"angle":i.setAngle(e,n);break;case"velocity":i.setVelocity(e,n);break;case"angularVelocity":i.setAngularVelocity(e,n);break;case"speed":i.setSpeed(e,n);break;case"angularSpeed":i.setAngularSpeed(e,n);break;case"parts":i.setParts(e,n);break;case"centre":i.setCentre(e,n);break;default:e[r]=n}},/**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */i.setStatic=function(e,t){for(var n=0;n<e.parts.length;n++){var r=e.parts[n];r.isStatic=t,t?(r._original={restitution:r.restitution,friction:r.friction,mass:r.mass,inertia:r.inertia,density:r.density,inverseMass:r.inverseMass,inverseInertia:r.inverseInertia},r.restitution=0,r.friction=1,r.mass=r.inertia=r.density=1/0,r.inverseMass=r.inverseInertia=0,r.positionPrev.x=r.position.x,r.positionPrev.y=r.position.y,r.anglePrev=r.angle,r.angularVelocity=0,r.speed=0,r.angularSpeed=0,r.motion=0):r._original&&(r.restitution=r._original.restitution,r.friction=r._original.friction,r.mass=r._original.mass,r.inertia=r._original.inertia,r.density=r._original.density,r.inverseMass=r._original.inverseMass,r.inverseInertia=r._original.inverseInertia,r._original=null)}},/**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */i.setMass=function(e,t){var n=e.inertia/(e.mass/6);e.inertia=n*(t/6),e.inverseInertia=1/e.inertia,e.mass=t,e.inverseMass=1/e.mass,e.density=e.mass/e.area},/**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */i.setDensity=function(e,t){i.setMass(e,t*e.area),e.density=t},/**
     * Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */i.setInertia=function(e,t){e.inertia=t,e.inverseInertia=1/e.inertia},/**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
     * 
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */i.setVertices=function(e,t){t[0].body===e?e.vertices=t:e.vertices=o.create(t,e),// update properties
e.axes=c.fromVertices(e.vertices),e.area=o.area(e.vertices),i.setMass(e,e.density*e.area);// orient vertices around the centre of mass at origin (0, 0)
var n=o.centre(e.vertices);o.translate(e.vertices,n,-1),// update inertia while vertices are at origin (0, 0)
i.setInertia(e,i._inertiaScale*o.inertia(e.vertices,e.mass)),// update geometry
o.translate(e.vertices,e.position),l.update(e.bounds,e.vertices,e.velocity)},/**
     * Sets the parts of the `body` and updates mass, inertia and centroid.
     * Each part will have its parent set to `body`.
     * By default the convex hull will be automatically computed and set on `body`, unless `autoHull` is set to `false.`
     * Note that this method will ensure that the first part in `body.parts` will always be the `body`.
     * @method setParts
     * @param {body} body
     * @param {body[]} parts
     * @param {bool} [autoHull=true]
     */i.setParts=function(e,t,n){for(// add all the parts, ensuring that the first part is always the parent body
t=t.slice(0),e.parts.length=0,e.parts.push(e),e.parent=e,r=0;r<t.length;r++){var r,a=t[r];a!==e&&(a.parent=e,e.parts.push(a))}if(1!==e.parts.length){// find the convex hull of all parts to set on the parent body
if(n=void 0===n||n){var s=[];for(r=0;r<t.length;r++)s=s.concat(t[r].vertices);o.clockwiseSort(s);var u=o.hull(s),l=o.centre(u);i.setVertices(e,u),o.translate(e.vertices,l)}// sum the properties of all compound parts of the parent body
var c=i._totalProperties(e);e.area=c.area,e.parent=e,e.position.x=c.centre.x,e.position.y=c.centre.y,e.positionPrev.x=c.centre.x,e.positionPrev.y=c.centre.y,i.setMass(e,c.mass),i.setInertia(e,c.inertia),i.setPosition(e,c.centre)}},/**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */i.setCentre=function(e,t,n){n?(e.positionPrev.x+=t.x,e.positionPrev.y+=t.y,e.position.x+=t.x,e.position.y+=t.y):(e.positionPrev.x=t.x-(e.position.x-e.positionPrev.x),e.positionPrev.y=t.y-(e.position.y-e.positionPrev.y),e.position.x=t.x,e.position.y=t.y)},/**
     * Sets the position of the body. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     * @param {boolean} [updateVelocity=false]
     */i.setPosition=function(e,t,n){var r=a.sub(t,e.position);n?(e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.velocity.x=r.x,e.velocity.y=r.y,e.speed=a.magnitude(r)):(e.positionPrev.x+=r.x,e.positionPrev.y+=r.y);for(var i=0;i<e.parts.length;i++){var s=e.parts[i];s.position.x+=r.x,s.position.y+=r.y,o.translate(s.vertices,r),l.update(s.bounds,s.vertices,e.velocity)}},/**
     * Sets the angle of the body. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     * @param {boolean} [updateVelocity=false]
     */i.setAngle=function(e,t,n){var r=t-e.angle;n?(e.anglePrev=e.angle,e.angularVelocity=r,e.angularSpeed=Math.abs(r)):e.anglePrev+=r;for(var i=0;i<e.parts.length;i++){var s=e.parts[i];s.angle+=r,o.rotate(s.vertices,r,e.position),c.rotate(s.axes,r),l.update(s.bounds,s.vertices,e.velocity),i>0&&a.rotateAbout(s.position,r,e.position,s.position)}},/**
     * Sets the current linear velocity of the body.  
     * Affects body speed.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */i.setVelocity=function(e,t){var n=e.deltaTime/i._baseDelta;e.positionPrev.x=e.position.x-t.x*n,e.positionPrev.y=e.position.y-t.y*n,e.velocity.x=(e.position.x-e.positionPrev.x)/n,e.velocity.y=(e.position.y-e.positionPrev.y)/n,e.speed=a.magnitude(e.velocity)},/**
     * Gets the current linear velocity of the body.
     * @method getVelocity
     * @param {body} body
     * @return {vector} velocity
     */i.getVelocity=function(e){var t=i._baseDelta/e.deltaTime;return{x:(e.position.x-e.positionPrev.x)*t,y:(e.position.y-e.positionPrev.y)*t}},/**
     * Gets the current linear speed of the body.  
     * Equivalent to the magnitude of its velocity.
     * @method getSpeed
     * @param {body} body
     * @return {number} speed
     */i.getSpeed=function(e){return a.magnitude(i.getVelocity(e))},/**
     * Sets the current linear speed of the body.  
     * Direction is maintained. Affects body velocity.
     * @method setSpeed
     * @param {body} body
     * @param {number} speed
     */i.setSpeed=function(e,t){i.setVelocity(e,a.mult(a.normalise(i.getVelocity(e)),t))},/**
     * Sets the current rotational velocity of the body.  
     * Affects body angular speed.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */i.setAngularVelocity=function(e,t){var n=e.deltaTime/i._baseDelta;e.anglePrev=e.angle-t*n,e.angularVelocity=(e.angle-e.anglePrev)/n,e.angularSpeed=Math.abs(e.angularVelocity)},/**
     * Gets the current rotational velocity of the body.
     * @method getAngularVelocity
     * @param {body} body
     * @return {number} angular velocity
     */i.getAngularVelocity=function(e){return(e.angle-e.anglePrev)*i._baseDelta/e.deltaTime},/**
     * Gets the current rotational speed of the body.  
     * Equivalent to the magnitude of its angular velocity.
     * @method getAngularSpeed
     * @param {body} body
     * @return {number} angular speed
     */i.getAngularSpeed=function(e){return Math.abs(i.getAngularVelocity(e))},/**
     * Sets the current rotational speed of the body.  
     * Direction is maintained. Affects body angular velocity.
     * @method setAngularSpeed
     * @param {body} body
     * @param {number} speed
     */i.setAngularSpeed=function(e,t){i.setAngularVelocity(e,u.sign(i.getAngularVelocity(e))*t)},/**
     * Moves a body by a given vector relative to its current position. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     * @param {boolean} [updateVelocity=false]
     */i.translate=function(e,t,n){i.setPosition(e,a.add(e.position,t),n)},/**
     * Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     * @param {boolean} [updateVelocity=false]
     */i.rotate=function(e,t,n,r){if(n){var o=Math.cos(t),a=Math.sin(t),s=e.position.x-n.x,u=e.position.y-n.y;i.setPosition(e,{x:n.x+(s*o-u*a),y:n.y+(s*a+u*o)},r),i.setAngle(e,e.angle+t,r)}else i.setAngle(e,e.angle+t,r)},/**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */i.scale=function(e,t,n,r){var a=0,s=0;r=r||e.position;for(var u=0;u<e.parts.length;u++){var f=e.parts[u];// scale vertices
o.scale(f.vertices,t,n,r),// update properties
f.axes=c.fromVertices(f.vertices),f.area=o.area(f.vertices),i.setMass(f,e.density*f.area),// update inertia (requires vertices to be at origin)
o.translate(f.vertices,{x:-f.position.x,y:-f.position.y}),i.setInertia(f,i._inertiaScale*o.inertia(f.vertices,f.mass)),o.translate(f.vertices,{x:f.position.x,y:f.position.y}),u>0&&(a+=f.area,s+=f.inertia),// scale position
f.position.x=r.x+(f.position.x-r.x)*t,f.position.y=r.y+(f.position.y-r.y)*n,// update bounds
l.update(f.bounds,f.vertices,e.velocity)}e.parts.length>1&&(e.area=a,e.isStatic||(i.setMass(e,e.density*a),i.setInertia(e,s))),e.circleRadius&&(t===n?e.circleRadius*=t:e.circleRadius=null)},/**
     * Performs an update by integrating the equations of motion on the `body`.
     * This is applied every update by `Matter.Engine` automatically.
     * @method update
     * @param {body} body
     * @param {number} [deltaTime=16.666]
     */i.update=function(e,t){var n=(t=(void 0!==t?t:1e3/60)*e.timeScale)*t,r=i._timeCorrection?t/(e.deltaTime||t):1,s=1-e.frictionAir*(t/u._baseDelta),f=(e.position.x-e.positionPrev.x)*r,p=(e.position.y-e.positionPrev.y)*r;// update velocity with Verlet integration
e.velocity.x=f*s+e.force.x/e.mass*n,e.velocity.y=p*s+e.force.y/e.mass*n,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.position.x+=e.velocity.x,e.position.y+=e.velocity.y,e.deltaTime=t,// update angular velocity with Verlet integration
e.angularVelocity=(e.angle-e.anglePrev)*s*r+e.torque/e.inertia*n,e.anglePrev=e.angle,e.angle+=e.angularVelocity;// transform the body geometry
for(var d=0;d<e.parts.length;d++){var h=e.parts[d];o.translate(h.vertices,e.velocity),d>0&&(h.position.x+=e.velocity.x,h.position.y+=e.velocity.y),0!==e.angularVelocity&&(o.rotate(h.vertices,e.angularVelocity,e.position),c.rotate(h.axes,e.angularVelocity),d>0&&a.rotateAbout(h.position,e.angularVelocity,e.position,h.position)),l.update(h.bounds,h.vertices,e.velocity)}},/**
     * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
     * @method updateVelocities
     * @param {body} body
     */i.updateVelocities=function(e){var t=i._baseDelta/e.deltaTime,n=e.velocity;n.x=(e.position.x-e.positionPrev.x)*t,n.y=(e.position.y-e.positionPrev.y)*t,e.speed=Math.sqrt(n.x*n.x+n.y*n.y),e.angularVelocity=(e.angle-e.anglePrev)*t,e.angularSpeed=Math.abs(e.angularVelocity)},/**
     * Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
     * 
     * Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
     * 
     * The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
     * 
     * Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
     * 
     * If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
     * 
     * The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
     * 
     * The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
     * @method applyForce
     * @param {body} body
     * @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
     * @param {vector} force
     */i.applyForce=function(e,t,n){var r={x:t.x-e.position.x,y:t.y-e.position.y};e.force.x+=n.x,e.force.y+=n.y,e.torque+=r.x*n.y-r.y*n.x},/**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */i._totalProperties=function(e){// sum the properties of all compound parts of the parent body
for(var t={mass:0,area:0,inertia:0,centre:{x:0,y:0}},n=1===e.parts.length?0:1;n<e.parts.length;n++){var r=e.parts[n],i=r.mass!==1/0?r.mass:1;t.mass+=i,t.area+=r.area,t.inertia+=r.inertia,t.centre=a.add(t.centre,a.mult(r.position,i))}return t.centre=a.div(t.centre,t.mass),t};/***/},/* 5 *//***/function(e,t,n){/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/var r={};e.exports=r;var i=n(0);/**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */r.on=function(e,t,n){for(var r,i=t.split(" "),o=0;o<i.length;o++)r=i[o],e.events=e.events||{},e.events[r]=e.events[r]||[],e.events[r].push(n);return n},/**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */r.off=function(e,t,n){if(!t){e.events={};return}// handle Events.off(object, callback)
"function"==typeof t&&(n=t,t=i.keys(e.events).join(" "));for(var r=t.split(" "),o=0;o<r.length;o++){var a=e.events[r[o]],s=[];if(n&&a)for(var u=0;u<a.length;u++)a[u]!==n&&s.push(a[u]);e.events[r[o]]=s}},/**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */r.trigger=function(e,t,n){var r,o,a,s,u=e.events;if(u&&i.keys(u).length>0){n||(n={}),r=t.split(" ");for(var l=0;l<r.length;l++)if(a=u[o=r[l]]){(s=i.clone(n,!1)).name=o,s.source=e;for(var c=0;c<a.length;c++)a[c].apply(e,[s])}}};/***/},/* 6 *//***/function(e,t,n){/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/var r={};e.exports=r;var i=n(5),o=n(0),a=n(1),s=n(4);/**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */r.create=function(e){return o.extend({id:o.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},e)},/**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */r.setModified=function(e,t,n,i){if(e.isModified=t,t&&e.cache&&(e.cache.allBodies=null,e.cache.allConstraints=null,e.cache.allComposites=null),n&&e.parent&&r.setModified(e.parent,t,n,i),i)for(var o=0;o<e.composites.length;o++){var a=e.composites[o];r.setModified(a,t,n,i)}},/**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */r.add=function(e,t){var n=[].concat(t);i.trigger(e,"beforeAdd",{object:t});for(var a=0;a<n.length;a++){var s=n[a];switch(s.type){case"body":// skip adding compound parts
if(s.parent!==s){o.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}r.addBody(e,s);break;case"constraint":r.addConstraint(e,s);break;case"composite":r.addComposite(e,s);break;case"mouseConstraint":r.addConstraint(e,s.constraint)}}return i.trigger(e,"afterAdd",{object:t}),e},/**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */r.remove=function(e,t,n){var o=[].concat(t);i.trigger(e,"beforeRemove",{object:t});for(var a=0;a<o.length;a++){var s=o[a];switch(s.type){case"body":r.removeBody(e,s,n);break;case"constraint":r.removeConstraint(e,s,n);break;case"composite":r.removeComposite(e,s,n);break;case"mouseConstraint":r.removeConstraint(e,s.constraint)}}return i.trigger(e,"afterRemove",{object:t}),e},/**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */r.addComposite=function(e,t){return e.composites.push(t),t.parent=e,r.setModified(e,!0,!0,!1),e},/**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */r.removeComposite=function(e,t,n){var i=o.indexOf(e.composites,t);if(-1!==i&&r.removeCompositeAt(e,i),n)for(var a=0;a<e.composites.length;a++)r.removeComposite(e.composites[a],t,!0);return e},/**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */r.removeCompositeAt=function(e,t){return e.composites.splice(t,1),r.setModified(e,!0,!0,!1),e},/**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */r.addBody=function(e,t){return e.bodies.push(t),r.setModified(e,!0,!0,!1),e},/**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */r.removeBody=function(e,t,n){var i=o.indexOf(e.bodies,t);if(-1!==i&&r.removeBodyAt(e,i),n)for(var a=0;a<e.composites.length;a++)r.removeBody(e.composites[a],t,!0);return e},/**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */r.removeBodyAt=function(e,t){return e.bodies.splice(t,1),r.setModified(e,!0,!0,!1),e},/**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */r.addConstraint=function(e,t){return e.constraints.push(t),r.setModified(e,!0,!0,!1),e},/**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */r.removeConstraint=function(e,t,n){var i=o.indexOf(e.constraints,t);if(-1!==i&&r.removeConstraintAt(e,i),n)for(var a=0;a<e.composites.length;a++)r.removeConstraint(e.composites[a],t,!0);return e},/**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */r.removeConstraintAt=function(e,t){return e.constraints.splice(t,1),r.setModified(e,!0,!0,!1),e},/**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */r.clear=function(e,t,n){if(n)for(var i=0;i<e.composites.length;i++)r.clear(e.composites[i],t,!0);return t?e.bodies=e.bodies.filter(function(e){return e.isStatic}):e.bodies.length=0,e.constraints.length=0,e.composites.length=0,r.setModified(e,!0,!0,!1),e},/**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */r.allBodies=function(e){if(e.cache&&e.cache.allBodies)return e.cache.allBodies;for(var t=[].concat(e.bodies),n=0;n<e.composites.length;n++)t=t.concat(r.allBodies(e.composites[n]));return e.cache&&(e.cache.allBodies=t),t},/**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */r.allConstraints=function(e){if(e.cache&&e.cache.allConstraints)return e.cache.allConstraints;for(var t=[].concat(e.constraints),n=0;n<e.composites.length;n++)t=t.concat(r.allConstraints(e.composites[n]));return e.cache&&(e.cache.allConstraints=t),t},/**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */r.allComposites=function(e){if(e.cache&&e.cache.allComposites)return e.cache.allComposites;for(var t=[].concat(e.composites),n=0;n<e.composites.length;n++)t=t.concat(r.allComposites(e.composites[n]));return e.cache&&(e.cache.allComposites=t),t},/**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */r.get=function(e,t,n){var i,o;switch(n){case"body":i=r.allBodies(e);break;case"constraint":i=r.allConstraints(e);break;case"composite":i=r.allComposites(e).concat(e)}return i?0===(o=i.filter(function(e){return e.id.toString()===t.toString()})).length?null:o[0]:null},/**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */r.move=function(e,t,n){return r.remove(e,t),r.add(n,t),e},/**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */r.rebase=function(e){for(var t=r.allBodies(e).concat(r.allConstraints(e)).concat(r.allComposites(e)),n=0;n<t.length;n++)t[n].id=o.nextId();return e},/**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */r.translate=function(e,t,n){for(var i=n?r.allBodies(e):e.bodies,o=0;o<i.length;o++)s.translate(i[o],t);return e},/**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */r.rotate=function(e,t,n,i){for(var o=Math.cos(t),a=Math.sin(t),u=i?r.allBodies(e):e.bodies,l=0;l<u.length;l++){var c=u[l],f=c.position.x-n.x,p=c.position.y-n.y;s.setPosition(c,{x:n.x+(f*o-p*a),y:n.y+(f*a+p*o)}),s.rotate(c,t)}return e},/**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */r.scale=function(e,t,n,i,o){for(var a=o?r.allBodies(e):e.bodies,u=0;u<a.length;u++){var l=a[u],c=l.position.x-i.x,f=l.position.y-i.y;s.setPosition(l,{x:i.x+c*t,y:i.y+f*n}),s.scale(l,t,n)}return e},/**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */r.bounds=function(e){for(var t=r.allBodies(e),n=[],i=0;i<t.length;i+=1){var o=t[i];n.push(o.bounds.min,o.bounds.max)}return a.create(n)};/***/},/* 7 *//***/function(e,t,n){/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/var r={};e.exports=r;var i=n(4),o=n(5),a=n(0);r._motionWakeThreshold=.18,r._motionSleepThreshold=.08,r._minBias=.9,/**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} delta
     */r.update=function(e,t){// update bodies sleeping status
for(var n=t/a._baseDelta,o=r._motionSleepThreshold,s=0;s<e.length;s++){var u=e[s],l=i.getSpeed(u),c=i.getAngularSpeed(u),f=l*l+c*c;// wake up bodies if they have a force applied
if(0!==u.force.x||0!==u.force.y){r.set(u,!1);continue}var p=Math.min(u.motion,f),d=Math.max(u.motion,f);// biased average motion estimation between frames
u.motion=r._minBias*p+(1-r._minBias)*d,u.sleepThreshold>0&&u.motion<o?(u.sleepCounter+=1,u.sleepCounter>=u.sleepThreshold/n&&r.set(u,!0)):u.sleepCounter>0&&(u.sleepCounter-=1)}},/**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     */r.afterCollisions=function(e){// wake up bodies involved in collisions
for(var t=r._motionSleepThreshold,n=0;n<e.length;n++){var i=e[n];// don't wake inactive pairs
if(i.isActive){var o=i.collision,a=o.bodyA.parent,s=o.bodyB.parent;// don't wake if at least one body is static
if((!a.isSleeping||!s.isSleeping)&&!a.isStatic&&!s.isStatic&&(a.isSleeping||s.isSleeping)){var u=a.isSleeping&&!a.isStatic?a:s,l=u===a?s:a;!u.isStatic&&l.motion>t&&r.set(u,!1)}}}},/**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */r.set=function(e,t){var n=e.isSleeping;t?(e.isSleeping=!0,e.sleepCounter=e.sleepThreshold,e.positionImpulse.x=0,e.positionImpulse.y=0,e.positionPrev.x=e.position.x,e.positionPrev.y=e.position.y,e.anglePrev=e.angle,e.speed=0,e.angularSpeed=0,e.motion=0,n||o.trigger(e,"sleepStart")):(e.isSleeping=!1,e.sleepCounter=0,n&&o.trigger(e,"sleepEnd"))};/***/},/* 8 *//***/function(e,t,n){/**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/var r,i,o,a={};e.exports=a;var s=n(3),u=n(9);r=[],i={overlap:0,axis:null},o={overlap:0,axis:null},/**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */a.create=function(e,t){return{pair:null,collided:!1,bodyA:e,bodyB:t,parentA:e.parent,parentB:t.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},/**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */a.collides=function(e,t,n){if(a._overlapAxes(i,e.vertices,t.vertices,e.axes),i.overlap<=0||(a._overlapAxes(o,t.vertices,e.vertices,t.axes),o.overlap<=0))return null;// reuse collision records for gc efficiency
var r,l,c=n&&n.table[u.id(e,t)];c?l=c.collision:((l=a.create(e,t)).collided=!0,l.bodyA=e.id<t.id?e:t,l.bodyB=e.id<t.id?t:e,l.parentA=l.bodyA.parent,l.parentB=l.bodyB.parent),e=l.bodyA,t=l.bodyB,r=i.overlap<o.overlap?i:o;var f=l.normal,p=l.supports,d=r.axis,h=d.x,v=d.y;h*(t.position.x-e.position.x)+v*(t.position.y-e.position.y)<0?(f.x=h,f.y=v):(f.x=-h,f.y=-v),l.tangent.x=-f.y,l.tangent.y=f.x,l.depth=r.overlap,l.penetration.x=f.x*l.depth,l.penetration.y=f.y*l.depth;// find support points, there is always either exactly one or two
var g=a._findSupports(e,t,f,1),y=0;// find the supports from bodyA that are inside bodyB
if(s.contains(e.vertices,g[0])&&(p[y++]=g[0]),s.contains(e.vertices,g[1])&&(p[y++]=g[1]),y<2){var m=a._findSupports(t,e,f,-1);s.contains(t.vertices,m[0])&&(p[y++]=m[0]),y<2&&s.contains(t.vertices,m[1])&&(p[y++]=m[1])}return 0===y&&(p[y++]=g[0]),// update supports array size
p.length=y,l},/**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */a._overlapAxes=function(e,t,n,r){var i,o,a,s,u,l,c=t.length,f=n.length,p=t[0].x,d=t[0].y,h=n[0].x,v=n[0].y,g=r.length,y=Number.MAX_VALUE,m=0;for(u=0;u<g;u++){var x=r[u],b=x.x,w=x.y,_=p*b+d*w,S=h*b+v*w,A=_,C=S;for(l=1;l<c;l+=1)(s=t[l].x*b+t[l].y*w)>A?A=s:s<_&&(_=s);for(l=1;l<f;l+=1)(s=n[l].x*b+n[l].y*w)>C?C=s:s<S&&(S=s);if((i=(o=A-S)<(a=C-_)?o:a)<y&&(y=i,m=u,i<=0))break}e.axis=r[m],e.overlap=y},/**
     * Projects vertices on an axis and returns an interval.
     * @method _projectToAxis
     * @private
     * @param {} projection
     * @param {} vertices
     * @param {} axis
     */a._projectToAxis=function(e,t,n){for(var r=t[0].x*n.x+t[0].y*n.y,i=r,o=1;o<t.length;o+=1){var a=t[o].x*n.x+t[o].y*n.y;a>i?i=a:a<r&&(r=a)}e.min=r,e.max=i},/**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */a._findSupports=function(e,t,n,i){var o,a,s,u,l,c=t.vertices,f=c.length,p=e.position.x,d=e.position.y,h=n.x*i,v=n.y*i,g=Number.MAX_VALUE;// find deepest vertex relative to the axis
for(l=0;l<f;l+=1)// convex hill-climbing
(u=h*(p-(a=c[l]).x)+v*(d-a.y))<g&&(g=u,o=a);return(g=h*(p-// measure next vertex
(s=c[(f+o.index-1)%f]).x)+v*(d-s.y),h*(p-// compare with previous vertex
(a=c[(o.index+1)%f]).x)+v*(d-a.y)<g)?(r[0]=o,r[1]=a):(r[0]=o,r[1]=s),r};/***/},/* 9 *//***/function(e,t,n){/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/var r={};e.exports=r;var i=n(16);/**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */r.create=function(e,t){var n=e.bodyA,i=e.bodyB,o={id:r.id(n,i),bodyA:n,bodyB:i,collision:e,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:n.isSensor||i.isSensor,timeCreated:t,timeUpdated:t,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return r.update(o,e,t),o},/**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */r.update=function(e,t,n){var r=e.contacts,o=t.supports,a=e.activeContacts,s=t.parentA,u=t.parentB,l=s.vertices.length;e.isActive=!0,e.timeUpdated=n,e.collision=t,e.separation=t.depth,e.inverseMass=s.inverseMass+u.inverseMass,e.friction=s.friction<u.friction?s.friction:u.friction,e.frictionStatic=s.frictionStatic>u.frictionStatic?s.frictionStatic:u.frictionStatic,e.restitution=s.restitution>u.restitution?s.restitution:u.restitution,e.slop=s.slop>u.slop?s.slop:u.slop,t.pair=e,a.length=0;for(var c=0;c<o.length;c++){var f=o[c],p=f.body===s?f.index:l+f.index,d=r[p];d?a.push(d):a.push(r[p]=i.create(f))}},/**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */r.setActive=function(e,t,n){t?(e.isActive=!0,e.timeUpdated=n):(e.isActive=!1,e.activeContacts.length=0)},/**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */r.id=function(e,t){return e.id<t.id?"A"+e.id+"B"+t.id:"A"+t.id+"B"+e.id};/***/},/* 10 *//***/function(e,t,n){/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/var r={};e.exports=r;var i=n(3),o=n(2),a=n(7),s=n(1),u=n(11),l=n(0);r._warming=.4,r._torqueDampen=1,r._minLength=1e-6,/**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */r.create=function(e){e.bodyA&&!e.pointA&&(e.pointA={x:0,y:0}),e.bodyB&&!e.pointB&&(e.pointB={x:0,y:0});// calculate static length using initial world space points
var t=e.bodyA?o.add(e.bodyA.position,e.pointA):e.pointA,n=e.bodyB?o.add(e.bodyB.position,e.pointB):e.pointB,r=o.magnitude(o.sub(t,n));e.length=void 0!==e.length?e.length:r,// option defaults
e.id=e.id||l.nextId(),e.label=e.label||"Constraint",e.type="constraint",e.stiffness=e.stiffness||(e.length>0?1:.7),e.damping=e.damping||0,e.angularStiffness=e.angularStiffness||0,e.angleA=e.bodyA?e.bodyA.angle:e.angleA,e.angleB=e.bodyB?e.bodyB.angle:e.angleB,e.plugin={};// render
var i={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return 0===e.length&&e.stiffness>.1?(i.type="pin",i.anchors=!1):e.stiffness<.9&&(i.type="spring"),e.render=l.extend(i,e.render),e},/**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */r.preSolveAll=function(e){for(var t=0;t<e.length;t+=1){var n=e[t],r=n.constraintImpulse;n.isStatic||0===r.x&&0===r.y&&0===r.angle||(n.position.x+=r.x,n.position.y+=r.y,n.angle+=r.angle)}},/**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} delta
     */r.solveAll=function(e,t){// Solve fixed constraints first.
for(var n=l.clamp(t/l._baseDelta,0,1),i=0;i<e.length;i+=1){var o=e[i],a=!o.bodyA||o.bodyA&&o.bodyA.isStatic,s=!o.bodyB||o.bodyB&&o.bodyB.isStatic;(a||s)&&r.solve(e[i],n)}// Solve free constraints last.
for(i=0;i<e.length;i+=1)a=!(o=e[i]).bodyA||o.bodyA&&o.bodyA.isStatic,s=!o.bodyB||o.bodyB&&o.bodyB.isStatic,a||s||r.solve(e[i],n)},/**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */r.solve=function(e,t){var n=e.bodyA,i=e.bodyB,a=e.pointA,s=e.pointB;if(n||i){n&&!n.isStatic&&(o.rotate(a,n.angle-e.angleA,a),e.angleA=n.angle),i&&!i.isStatic&&(o.rotate(s,i.angle-e.angleB,s),e.angleB=i.angle);var u=a,l=s;if(n&&(u=o.add(n.position,a)),i&&(l=o.add(i.position,s)),u&&l){var c=o.sub(u,l),f=o.magnitude(c);f<r._minLength&&(f=r._minLength);// solve distance constraint with Gauss-Siedel method
var p,d,h,v,g,y=(f-e.length)/f,m=e.stiffness>=1||0===e.length?e.stiffness*t:e.stiffness*t*t,x=e.damping*t,b=o.mult(c,y*m),w=(n?n.inverseMass:0)+(i?i.inverseMass:0),_=w+((n?n.inverseInertia:0)+(i?i.inverseInertia:0));if(x>0){var S=o.create();h=o.div(c,f),g=o.sub(i&&o.sub(i.position,i.positionPrev)||S,n&&o.sub(n.position,n.positionPrev)||S),v=o.dot(h,g)}n&&!n.isStatic&&(d=n.inverseMass/w,// keep track of applied impulses for post solving
n.constraintImpulse.x-=b.x*d,n.constraintImpulse.y-=b.y*d,// apply forces
n.position.x-=b.x*d,n.position.y-=b.y*d,x>0&&(n.positionPrev.x-=x*h.x*v*d,n.positionPrev.y-=x*h.y*v*d),// apply torque
p=o.cross(a,b)/_*r._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=p,n.angle-=p),i&&!i.isStatic&&(d=i.inverseMass/w,// keep track of applied impulses for post solving
i.constraintImpulse.x+=b.x*d,i.constraintImpulse.y+=b.y*d,// apply forces
i.position.x+=b.x*d,i.position.y+=b.y*d,x>0&&(i.positionPrev.x+=x*h.x*v*d,i.positionPrev.y+=x*h.y*v*d),// apply torque
p=o.cross(s,b)/_*r._torqueDampen*i.inverseInertia*(1-e.angularStiffness),i.constraintImpulse.angle+=p,i.angle+=p)}}},/**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */r.postSolveAll=function(e){for(var t=0;t<e.length;t++){var n=e[t],l=n.constraintImpulse;if(!n.isStatic&&(0!==l.x||0!==l.y||0!==l.angle)){a.set(n,!1);// update geometry and reset
for(var c=0;c<n.parts.length;c++){var f=n.parts[c];i.translate(f.vertices,l),c>0&&(f.position.x+=l.x,f.position.y+=l.y),0!==l.angle&&(i.rotate(f.vertices,l.angle,n.position),u.rotate(f.axes,l.angle),c>0&&o.rotateAbout(f.position,l.angle,n.position,f.position)),s.update(f.bounds,f.vertices,n.velocity)}// dampen the cached impulse for warming next step
l.angle*=r._warming,l.x*=r._warming,l.y*=r._warming}}},/**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */r.pointAWorld=function(e){return{x:(e.bodyA?e.bodyA.position.x:0)+(e.pointA?e.pointA.x:0),y:(e.bodyA?e.bodyA.position.y:0)+(e.pointA?e.pointA.y:0)}},/**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */r.pointBWorld=function(e){return{x:(e.bodyB?e.bodyB.position.x:0)+(e.pointB?e.pointB.x:0),y:(e.bodyB?e.bodyB.position.y:0)+(e.pointB?e.pointB.y:0)}};/***/},/* 11 *//***/function(e,t,n){/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/var r={};e.exports=r;var i=n(2),o=n(0);/**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */r.fromVertices=function(e){// find the unique axes, using edge normal gradients
for(var t={},n=0;n<e.length;n++){var r=(n+1)%e.length,a=i.normalise({x:e[r].y-e[n].y,y:e[n].x-e[r].x}),s=0===a.y?1/0:a.x/a.y;t[// limit precision
s=s.toFixed(3).toString()]=a}return o.values(t)},/**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */r.rotate=function(e,t){if(0!==t)for(var n=Math.cos(t),r=Math.sin(t),i=0;i<e.length;i++){var o,a=e[i];o=a.x*n-a.y*r,a.y=a.x*r+a.y*n,a.x=o}};/***/},/* 12 *//***/function(e,t,n){/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/// TODO: true circle bodies
var r={};e.exports=r;var i=n(3),o=n(0),a=n(4),s=n(1),u=n(2);/**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */r.rectangle=function(e,t,n,r,s){s=s||{};var u={label:"Rectangle Body",position:{x:e,y:t},vertices:i.fromPath("L 0 0 L "+n+" 0 L "+n+" "+r+" L 0 "+r)};if(s.chamfer){var l=s.chamfer;u.vertices=i.chamfer(u.vertices,l.radius,l.quality,l.qualityMin,l.qualityMax),delete s.chamfer}return a.create(o.extend({},u,s))},/**
     * Creates a new rigid body model with a trapezoid hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */r.trapezoid=function(e,t,n,r,s,u){u=u||{};var l,c=(1-2*(s*=.5))*n,f=n*s,p=f+c,d=p+f;l=s<.5?"L 0 0 L "+f+" "+-r+" L "+p+" "+-r+" L "+d+" 0":"L 0 0 L "+p+" "+-r+" L "+d+" 0";var h={label:"Trapezoid Body",position:{x:e,y:t},vertices:i.fromPath(l)};if(u.chamfer){var v=u.chamfer;h.vertices=i.chamfer(h.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete u.chamfer}return a.create(o.extend({},h,u))},/**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */r.circle=function(e,t,n,i,a){i=i||{};var s=Math.ceil(Math.max(10,Math.min(// approximate circles with polygons until true circles implemented in SAT
a=a||25,n)));return s%2==1&&(s+=1),r.polygon(e,t,s,n,o.extend({},{label:"Circle Body",circleRadius:n},i))},/**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */r.polygon=function(e,t,n,s,u){if(u=u||{},n<3)return r.circle(e,t,s,u);for(var l=2*Math.PI/n,c="",f=.5*l,p=0;p<n;p+=1){var d=f+p*l,h=Math.cos(d)*s,v=Math.sin(d)*s;c+="L "+h.toFixed(3)+" "+v.toFixed(3)+" "}var g={label:"Polygon Body",position:{x:e,y:t},vertices:i.fromPath(c)};if(u.chamfer){var y=u.chamfer;g.vertices=i.chamfer(g.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete u.chamfer}return a.create(o.extend({},g,u))},/**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */r.fromVertices=function(e,t,n,r,l,c,f,p){var d,h,v,g,y,m,x,b,w,_,S=o.getDecomp();for(// check decomp is as expected
d=!!(S&&S.quickDecomp),r=r||{},v=[],l=void 0!==l&&l,c=void 0!==c?c:.01,f=void 0!==f?f:10,p=void 0!==p?p:.01,o.isArray(n[0])||(n=[n]),w=0;w<n.length;w+=1)if(y=n[w],(g=i.isConvex(y))||d||o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),g||!d)y=g?i.clockwiseSort(y):i.hull(y),v.push({position:{x:e,y:t},vertices:y});else{// initialise a decomposition
var A=y.map(function(e){return[e.x,e.y]});// vertices are concave and simple, we can decompose into parts
S.makeCCW(A),!1!==c&&S.removeCollinearPoints(A,c),!1!==p&&S.removeDuplicatePoints&&S.removeDuplicatePoints(A,p);// use the quick decomposition algorithm (Bayazit)
var C=S.quickDecomp(A);// for each decomposed chunk
for(m=0;m<C.length;m++){// convert vertices into the correct structure
var k=C[m].map(function(e){return{x:e[0],y:e[1]}});// skip small chunks
f>0&&i.area(k)<f||// create a compound part
v.push({position:i.centre(k),vertices:k})}}// create body parts
for(m=0;m<v.length;m++)v[m]=a.create(o.extend(v[m],r));// flag internal edges (coincident part edges)
if(l)for(m=0;m<v.length;m++){var T=v[m];for(x=m+1;x<v.length;x++){var E=v[x];if(s.overlaps(T.bounds,E.bounds)){var P=T.vertices,j=E.vertices;// iterate vertices of both parts
for(b=0;b<T.vertices.length;b++)for(_=0;_<E.vertices.length;_++){// find distances between the vertices
var M=u.magnitudeSquared(u.sub(P[(b+1)%P.length],j[_])),R=u.magnitudeSquared(u.sub(P[b],j[(_+1)%j.length]));// if both vertices are very close, consider the edge concident (internal)
M<5&&R<5&&(P[b].isInternal=!0,j[_].isInternal=!0)}}}}return v.length>1?(// create the parent body to be returned, that contains generated compound parts
h=a.create(o.extend({parts:v.slice(0)},r)),// offset such that body.position is at the centre off mass
a.setPosition(h,{x:e,y:t}),h):v[0]};/***/},/* 13 *//***/function(e,t,n){/**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/var r={};e.exports=r;var i=n(0),o=n(8);/**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */r.create=function(e){return i.extend({bodies:[],pairs:null},e)},/**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */r.setBodies=function(e,t){e.bodies=t.slice(0)},/**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */r.clear=function(e){e.bodies=[]},/**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */r.collisions=function(e){var t,n,i=[],a=e.pairs,s=e.bodies,u=s.length,l=r.canCollide,c=o.collides;for(s.sort(r._compareBoundsX),t=0;t<u;t++){var f=s[t],p=f.bounds,d=f.bounds.max.x,h=f.bounds.max.y,v=f.bounds.min.y,g=f.isStatic||f.isSleeping,y=f.parts.length,m=1===y;for(n=t+1;n<u;n++){var x=s[n],b=x.bounds;if(b.min.x>d)break;if(!(h<b.min.y)&&!(v>b.max.y)&&(!g||!x.isStatic&&!x.isSleeping)&&l(f.collisionFilter,x.collisionFilter)){var w=x.parts.length;if(m&&1===w){var _=c(f,x,a);_&&i.push(_)}else for(var S=y>1?1:0,A=w>1?1:0,C=S;C<y;C++)for(var k=f.parts[C],p=k.bounds,T=A;T<w;T++){var E=x.parts[T],b=E.bounds;if(!(p.min.x>b.max.x)&&!(p.max.x<b.min.x)&&!(p.max.y<b.min.y)&&!(p.min.y>b.max.y)){var _=c(k,E,a);_&&i.push(_)}}}}}return i},/**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */r.canCollide=function(e,t){return e.group===t.group&&0!==e.group?e.group>0:(e.mask&t.category)!=0&&(t.mask&e.category)!=0},/**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */r._compareBoundsX=function(e,t){return e.bounds.min.x-t.bounds.min.x};/***/},/* 14 *//***/function(e,t,n){/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/var r={};e.exports=r;var i=n(0);/**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */r.create=function(e){var t={};return e||i.log("Mouse.create: element was undefined, defaulting to document.body","warn"),t.element=e||document.body,t.absolute={x:0,y:0},t.position={x:0,y:0},t.mousedownPosition={x:0,y:0},t.mouseupPosition={x:0,y:0},t.offset={x:0,y:0},t.scale={x:1,y:1},t.wheelDelta=0,t.button=-1,t.pixelRatio=parseInt(t.element.getAttribute("data-pixel-ratio"),10)||1,t.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},t.mousemove=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&(t.button=0,e.preventDefault()),t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.sourceEvents.mousemove=e},t.mousedown=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches?(t.button=0,e.preventDefault()):t.button=e.button,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mousedownPosition.x=t.position.x,t.mousedownPosition.y=t.position.y,t.sourceEvents.mousedown=e},t.mouseup=function(e){var n=r._getRelativeMousePosition(e,t.element,t.pixelRatio);e.changedTouches&&e.preventDefault(),t.button=-1,t.absolute.x=n.x,t.absolute.y=n.y,t.position.x=t.absolute.x*t.scale.x+t.offset.x,t.position.y=t.absolute.y*t.scale.y+t.offset.y,t.mouseupPosition.x=t.position.x,t.mouseupPosition.y=t.position.y,t.sourceEvents.mouseup=e},t.mousewheel=function(e){t.wheelDelta=Math.max(-1,Math.min(1,e.wheelDelta||-e.detail)),e.preventDefault()},r.setElement(t,t.element),t},/**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */r.setElement=function(e,t){e.element=t,t.addEventListener("mousemove",e.mousemove),t.addEventListener("mousedown",e.mousedown),t.addEventListener("mouseup",e.mouseup),t.addEventListener("mousewheel",e.mousewheel),t.addEventListener("DOMMouseScroll",e.mousewheel),t.addEventListener("touchmove",e.mousemove),t.addEventListener("touchstart",e.mousedown),t.addEventListener("touchend",e.mouseup)},/**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */r.clearSourceEvents=function(e){e.sourceEvents.mousemove=null,e.sourceEvents.mousedown=null,e.sourceEvents.mouseup=null,e.sourceEvents.mousewheel=null,e.wheelDelta=0},/**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */r.setOffset=function(e,t){e.offset.x=t.x,e.offset.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},/**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */r.setScale=function(e,t){e.scale.x=t.x,e.scale.y=t.y,e.position.x=e.absolute.x*e.scale.x+e.offset.x,e.position.y=e.absolute.y*e.scale.y+e.offset.y},/**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */r._getRelativeMousePosition=function(e,t,n){var r,i,o=t.getBoundingClientRect(),a=document.documentElement||document.body.parentNode||document.body,s=void 0!==window.pageXOffset?window.pageXOffset:a.scrollLeft,u=void 0!==window.pageYOffset?window.pageYOffset:a.scrollTop,l=e.changedTouches;return l?(r=l[0].pageX-o.left-s,i=l[0].pageY-o.top-u):(r=e.pageX-o.left-s,i=e.pageY-o.top-u),{x:r/(t.clientWidth/(t.width||t.clientWidth)*n),y:i/(t.clientHeight/(t.height||t.clientHeight)*n)}};/***/},/* 15 *//***/function(e,t,n){/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/var Plugin={};e.exports=Plugin;var r=n(0);Plugin._registry={},/**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */Plugin.register=function(e){if(Plugin.isPlugin(e)||r.warn("Plugin.register:",Plugin.toString(e),"does not implement all required fields."),e.name in Plugin._registry){var t=Plugin._registry[e.name],n=Plugin.versionParse(e.version).number,i=Plugin.versionParse(t.version).number;n>i?(r.warn("Plugin.register:",Plugin.toString(t),"was upgraded to",Plugin.toString(e)),Plugin._registry[e.name]=e):n<i?r.warn("Plugin.register:",Plugin.toString(t),"can not be downgraded to",Plugin.toString(e)):e!==t&&r.warn("Plugin.register:",Plugin.toString(e),"is already registered to different plugin object")}else Plugin._registry[e.name]=e;return e},/**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */Plugin.resolve=function(e){return Plugin._registry[Plugin.dependencyParse(e).name]},/**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */Plugin.toString=function(e){return"string"==typeof e?e:(e.name||"anonymous")+"@"+(e.version||e.range||"0.0.0")},/**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */Plugin.isPlugin=function(e){return e&&e.name&&e.version&&e.install},/**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */Plugin.isUsed=function(e,t){return e.used.indexOf(t)>-1},/**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */Plugin.isFor=function(e,t){var n=e.for&&Plugin.dependencyParse(e.for);return!e.for||t.name===n.name&&Plugin.versionSatisfies(t.version,n.range)},/**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */Plugin.use=function(e,t){if(e.uses=(e.uses||[]).concat(t||[]),0===e.uses.length){r.warn("Plugin.use:",Plugin.toString(e),"does not specify any dependencies to install.");return}for(var n=Plugin.dependencies(e),i=r.topologicalSort(n),o=[],a=0;a<i.length;a+=1)if(i[a]!==e.name){var s=Plugin.resolve(i[a]);if(!s){o.push("❌ "+i[a]);continue}Plugin.isUsed(e,s.name)||(Plugin.isFor(s,e)||(r.warn("Plugin.use:",Plugin.toString(s),"is for",s.for,"but installed on",Plugin.toString(e)+"."),s._warned=!0),s.install?s.install(e):(r.warn("Plugin.use:",Plugin.toString(s),"does not specify an install function."),s._warned=!0),s._warned?(o.push("\uD83D\uDD36 "+Plugin.toString(s)),delete s._warned):o.push("✅ "+Plugin.toString(s)),e.used.push(s.name))}o.length>0&&r.info(o.join("  "))},/**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */Plugin.dependencies=function(e,t){var n=Plugin.dependencyParse(e),i=n.name;if(!(i in(t=t||{}))){e=Plugin.resolve(e)||e,t[i]=r.map(e.uses||[],function(t){Plugin.isPlugin(t)&&Plugin.register(t);var i=Plugin.dependencyParse(t),o=Plugin.resolve(t);return o&&!Plugin.versionSatisfies(o.version,i.range)?(r.warn("Plugin.dependencies:",Plugin.toString(o),"does not satisfy",Plugin.toString(i),"used by",Plugin.toString(n)+"."),o._warned=!0,e._warned=!0):o||(r.warn("Plugin.dependencies:",Plugin.toString(t),"used by",Plugin.toString(n),"could not be resolved."),e._warned=!0),i.name});for(var o=0;o<t[i].length;o+=1)Plugin.dependencies(t[i][o],t);return t}},/**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */Plugin.dependencyParse=function(e){return r.isString(e)?(/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e)||r.warn("Plugin.dependencyParse:",e,"is not a valid dependency string."),{name:e.split("@")[0],range:e.split("@")[1]||"*"}):{name:e.name,range:e.range||e.version}},/**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */Plugin.versionParse=function(e){var t=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;t.test(e)||r.warn("Plugin.versionParse:",e,"is not a valid version or range.");var n=t.exec(e),i=Number(n[4]),o=Number(n[5]),a=Number(n[6]);return{isRange:!!(n[1]||n[2]),version:n[3],range:e,operator:n[1]||n[2]||"",major:i,minor:o,patch:a,parts:[i,o,a],prerelease:n[7],number:1e8*i+1e4*o+a}},/**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */Plugin.versionSatisfies=function(e,t){t=t||"*";var n=Plugin.versionParse(t),r=Plugin.versionParse(e);if(n.isRange){if("*"===n.operator||"*"===e)return!0;if(">"===n.operator)return r.number>n.number;if(">="===n.operator)return r.number>=n.number;if("~"===n.operator)return r.major===n.major&&r.minor===n.minor&&r.patch>=n.patch;if("^"===n.operator)return n.major>0?r.major===n.major&&r.number>=n.number:n.minor>0?r.minor===n.minor&&r.patch>=n.patch:r.patch===n.patch}return e===t||"*"===e};/***/},/* 16 *//***/function(e,t){/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/var n={};e.exports=n,/**
     * Creates a new contact.
     * @method create
     * @param {vertex} vertex
     * @return {contact} A new contact
     */n.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}};/***/},/* 17 *//***/function(e,t,n){/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/var r={};e.exports=r;var i=n(7),o=n(18),a=n(13),s=n(19),u=n(5),l=n(6),c=n(10),f=n(0),p=n(4);/**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */r.create=function(e){e=e||{};var t=f.extend({positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},e);return t.world=e.world||l.create({label:"World"}),t.pairs=e.pairs||s.create(),t.detector=e.detector||a.create(),// for temporary back compatibility only
t.grid={buckets:[]},t.world.gravity=t.gravity,t.broadphase=t.grid,t.metrics={},t},/**
     * Moves the simulation forward in time by `delta` milliseconds.
     * Triggers `beforeUpdate` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     */r.update=function(e,t){var n,p=f.now(),d=e.world,h=e.detector,v=e.pairs,g=e.timing,y=g.timestamp;t=(void 0!==t?t:f._baseDelta)*g.timeScale,// increment timestamp
g.timestamp+=t,g.lastDelta=t;// create an event object
var m={timestamp:g.timestamp,delta:t};u.trigger(e,"beforeUpdate",m);// get all bodies and all constraints in the world
var x=l.allBodies(d),b=l.allConstraints(d);for(d.isModified&&(// update the detector bodies
a.setBodies(h,x),// reset all composite modified flags
l.setModified(d,!1,!1,!0)),e.enableSleeping&&i.update(x,t),// apply gravity to all bodies
r._bodiesApplyGravity(x,e.gravity),t>0&&r._bodiesUpdate(x,t),// update all constraints (first pass)
c.preSolveAll(x),n=0;n<e.constraintIterations;n++)c.solveAll(b,t);c.postSolveAll(x),// find all collisions
h.pairs=e.pairs;var w=a.collisions(h);// update collision pairs
s.update(v,w,y),e.enableSleeping&&i.afterCollisions(v.list),v.collisionStart.length>0&&u.trigger(e,"collisionStart",{pairs:v.collisionStart});// iteratively resolve position between collisions
var _=f.clamp(20/e.positionIterations,0,1);for(o.preSolvePosition(v.list),n=0;n<e.positionIterations;n++)o.solvePosition(v.list,t,_);for(o.postSolvePosition(x),// update all constraints (second pass)
c.preSolveAll(x),n=0;n<e.constraintIterations;n++)c.solveAll(b,t);for(c.postSolveAll(x),// iteratively resolve velocity between collisions
o.preSolveVelocity(v.list),n=0;n<e.velocityIterations;n++)o.solveVelocity(v.list,t);return(// update body speed and velocity properties
r._bodiesUpdateVelocities(x),v.collisionActive.length>0&&u.trigger(e,"collisionActive",{pairs:v.collisionActive}),v.collisionEnd.length>0&&u.trigger(e,"collisionEnd",{pairs:v.collisionEnd}),// clear force buffers
r._bodiesClearForces(x),u.trigger(e,"afterUpdate",m),// log the time elapsed computing this update
e.timing.lastElapsed=f.now()-p,e)},/**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */r.merge=function(e,t){if(f.extend(e,t),t.world){e.world=t.world,r.clear(e);for(var n=l.allBodies(e.world),o=0;o<n.length;o++){var a=n[o];i.set(a,!1),a.id=f.nextId()}}},/**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */r.clear=function(e){s.clear(e.pairs),a.clear(e.detector)},/**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */r._bodiesClearForces=function(e){for(var t=e.length,n=0;n<t;n++){var r=e[n];// reset force buffers
r.force.x=0,r.force.y=0,r.torque=0}},/**
     * Applies gravitational acceleration to all `bodies`.
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
     * 
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */r._bodiesApplyGravity=function(e,t){var n=void 0!==t.scale?t.scale:.001,r=e.length;if((0!==t.x||0!==t.y)&&0!==n)for(var i=0;i<r;i++){var o=e[i];o.isStatic||o.isSleeping||(// add the resultant force of gravity
o.force.y+=o.mass*t.y*n,o.force.x+=o.mass*t.x*n)}},/**
     * Applies `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} delta The amount of time elapsed between updates
     */r._bodiesUpdate=function(e,t){for(var n=e.length,r=0;r<n;r++){var i=e[r];i.isStatic||i.isSleeping||p.update(i,t)}},/**
     * Applies `Body.updateVelocities` to all given `bodies`.
     * @method _bodiesUpdateVelocities
     * @private
     * @param {body[]} bodies
     */r._bodiesUpdateVelocities=function(e){for(var t=e.length,n=0;n<t;n++)p.updateVelocities(e[n])};/***/},/* 18 *//***/function(e,t,n){/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/var r={};e.exports=r;var i=n(3),o=n(0),a=n(1);r._restingThresh=2,r._restingThreshTangent=Math.sqrt(6),r._positionDampen=.9,r._positionWarming=.8,r._frictionNormalMultiplier=5,r._frictionMaxStatic=Number.MAX_VALUE,/**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */r.preSolvePosition=function(e){var t,n,r,i=e.length;// find total contacts on each body
for(t=0;t<i;t++)(n=e[t]).isActive&&(r=n.activeContacts.length,n.collision.parentA.totalContacts+=r,n.collision.parentB.totalContacts+=r)},/**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} delta
     * @param {number} [damping=1]
     */r.solvePosition=function(e,t,n){var i,a,s,u,l,c,f,p,d=r._positionDampen*(n||1),h=o.clamp(t/o._baseDelta,0,1),v=e.length;// find impulses required to resolve penetration
for(i=0;i<v;i++)(a=e[i]).isActive&&!a.isSensor&&(u=(s=a.collision).parentA,l=s.parentB,c=s.normal,// get current separation between body edges involved in collision
a.separation=c.x*(l.positionImpulse.x+s.penetration.x-u.positionImpulse.x)+c.y*(l.positionImpulse.y+s.penetration.y-u.positionImpulse.y));for(i=0;i<v;i++)!(a=e[i]).isActive||a.isSensor||(u=(s=a.collision).parentA,l=s.parentB,c=s.normal,p=a.separation-a.slop*h,(u.isStatic||l.isStatic)&&(p*=2),u.isStatic||u.isSleeping||(f=d/u.totalContacts,u.positionImpulse.x+=c.x*p*f,u.positionImpulse.y+=c.y*p*f),l.isStatic||l.isSleeping||(f=d/l.totalContacts,l.positionImpulse.x-=c.x*p*f,l.positionImpulse.y-=c.y*p*f))},/**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */r.postSolvePosition=function(e){for(var t=r._positionWarming,n=e.length,o=i.translate,s=a.update,u=0;u<n;u++){var l=e[u],c=l.positionImpulse,f=c.x,p=c.y,d=l.velocity;if(// reset contact count
l.totalContacts=0,0!==f||0!==p){// update body geometry
for(var h=0;h<l.parts.length;h++){var v=l.parts[h];o(v.vertices,c),s(v.bounds,v.vertices,d),v.position.x+=f,v.position.y+=p}// move the body without changing velocity
l.positionPrev.x+=f,l.positionPrev.y+=p,f*d.x+p*d.y<0?(// reset cached impulse if the body has velocity along it
c.x=0,c.y=0):(// warm the next iteration
c.x*=t,c.y*=t)}}},/**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */r.preSolveVelocity=function(e){var t,n,r=e.length;for(t=0;t<r;t++){var i=e[t];if(i.isActive&&!i.isSensor){var o=i.activeContacts,a=o.length,s=i.collision,u=s.parentA,l=s.parentB,c=s.normal,f=s.tangent;// resolve each contact
for(n=0;n<a;n++){var p=o[n],d=p.vertex,h=p.normalImpulse,v=p.tangentImpulse;if(0!==h||0!==v){// total impulse from contact
var g=c.x*h+f.x*v,y=c.y*h+f.y*v;u.isStatic||u.isSleeping||(u.positionPrev.x+=g*u.inverseMass,u.positionPrev.y+=y*u.inverseMass,u.anglePrev+=u.inverseInertia*((d.x-u.position.x)*y-(d.y-u.position.y)*g)),l.isStatic||l.isSleeping||(l.positionPrev.x-=g*l.inverseMass,l.positionPrev.y-=y*l.inverseMass,l.anglePrev-=l.inverseInertia*((d.x-l.position.x)*y-(d.y-l.position.y)*g))}}}}},/**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} delta
     */r.solveVelocity=function(e,t){var n,i,a,s,u=t/o._baseDelta,l=u*u*u,c=-r._restingThresh*u,f=r._restingThreshTangent,p=r._frictionNormalMultiplier*u,d=r._frictionMaxStatic,h=e.length;for(a=0;a<h;a++){var v=e[a];if(v.isActive&&!v.isSensor){var g=v.collision,y=g.parentA,m=g.parentB,x=y.velocity,b=m.velocity,w=g.normal.x,_=g.normal.y,S=g.tangent.x,A=g.tangent.y,C=v.activeContacts,k=C.length,T=1/k,E=y.inverseMass+m.inverseMass,P=v.friction*v.frictionStatic*p;// resolve each contact
for(s=0,// update body velocities
x.x=y.position.x-y.positionPrev.x,x.y=y.position.y-y.positionPrev.y,b.x=m.position.x-m.positionPrev.x,b.y=m.position.y-m.positionPrev.y,y.angularVelocity=y.angle-y.anglePrev,m.angularVelocity=m.angle-m.anglePrev;s<k;s++){var j=C[s],M=j.vertex,R=M.x-y.position.x,D=M.y-y.position.y,I=M.x-m.position.x,B=M.y-m.position.y,L=x.x-D*y.angularVelocity,O=x.y+R*y.angularVelocity,H=b.x-B*m.angularVelocity,q=b.y+I*m.angularVelocity,N=L-H,F=O-q,W=w*N+_*F,U=S*N+A*F,V=v.separation+W,$=Math.min(V,1),z=($=V<0?0:$)*P;U<-z||U>z?(i=U>0?U:-U,(n=v.friction*(U>0?1:-1)*l)<-i?n=-i:n>i&&(n=i)):(n=U,i=d);// account for mass, inertia and contact offset
var G=R*_-D*w,X=I*_-B*w,Y=T/(E+y.inverseInertia*G*G+m.inverseInertia*X*X),J=(1+v.restitution)*W*Y;// handle high velocity and resting collisions separately
if(n*=Y,W<c)j.normalImpulse=0;else{// solve resting collision constraints using Erin Catto's method (GDC08)
// impulse constraint tends to 0
var Q=j.normalImpulse;j.normalImpulse+=J,j.normalImpulse>0&&(j.normalImpulse=0),J=j.normalImpulse-Q}// handle high velocity and resting collisions separately
if(U<-f||U>f)j.tangentImpulse=0;else{// solve resting collision constraints using Erin Catto's method (GDC08)
// tangent impulse tends to -tangentSpeed or +tangentSpeed
var Z=j.tangentImpulse;j.tangentImpulse+=n,j.tangentImpulse<-i&&(j.tangentImpulse=-i),j.tangentImpulse>i&&(j.tangentImpulse=i),n=j.tangentImpulse-Z}// total impulse from contact
var K=w*J+S*n,ee=_*J+A*n;y.isStatic||y.isSleeping||(y.positionPrev.x+=K*y.inverseMass,y.positionPrev.y+=ee*y.inverseMass,y.anglePrev+=(R*ee-D*K)*y.inverseInertia),m.isStatic||m.isSleeping||(m.positionPrev.x-=K*m.inverseMass,m.positionPrev.y-=ee*m.inverseMass,m.anglePrev-=(I*ee-B*K)*m.inverseInertia)}}}};/***/},/* 19 *//***/function(e,t,n){/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/var r={};e.exports=r;var i=n(9),o=n(0);/**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */r.create=function(e){return o.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},e)},/**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */r.update=function(e,t,n){var r,o,a,s,u=e.list,l=u.length,c=e.table,f=t.length,p=e.collisionStart,d=e.collisionEnd,h=e.collisionActive;for(s=0,// clear collision state arrays, but maintain old reference
p.length=0,d.length=0,h.length=0;s<l;s++)u[s].confirmedActive=!1;for(s=0;s<f;s++)(a=(r=t[s]).pair)?(a.isActive?h.push(a):p.push(a),// update the pair
i.update(a,r,n),a.confirmedActive=!0):(c[// pair did not exist, create a new pair
(a=i.create(r,n)).id]=a,// push the new pair
p.push(a),u.push(a));// find pairs that are no longer active
var v=[];for(s=0,l=u.length;s<l;s++)(a=u[s]).confirmedActive||(i.setActive(a,!1,n),d.push(a),a.collision.bodyA.isSleeping||a.collision.bodyB.isSleeping||v.push(s));// remove inactive pairs
for(s=0;s<v.length;s++)a=u[o=v[s]-s],u.splice(o,1),delete c[a.id]},/**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */r.clear=function(e){return e.table={},e.list.length=0,e.collisionStart.length=0,e.collisionActive.length=0,e.collisionEnd.length=0,e};/***/},/* 20 *//***/function(e,t,n){var r=e.exports=n(21);r.Axes=n(11),r.Bodies=n(12),r.Body=n(4),r.Bounds=n(1),r.Collision=n(8),r.Common=n(0),r.Composite=n(6),r.Composites=n(22),r.Constraint=n(10),r.Contact=n(16),r.Detector=n(13),r.Engine=n(17),r.Events=n(5),r.Grid=n(23),r.Mouse=n(14),r.MouseConstraint=n(24),r.Pair=n(9),r.Pairs=n(19),r.Plugin=n(15),r.Query=n(25),r.Render=n(26),r.Resolver=n(18),r.Runner=n(27),r.SAT=n(28),r.Sleeping=n(7),r.Svg=n(29),r.Vector=n(2),r.Vertices=n(3),r.World=n(30),// temporary back compatibility
r.Engine.run=r.Runner.run,r.Common.deprecated(r.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead");/***/},/* 21 *//***/function(e,t,n){/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/var r={};e.exports=r;var Plugin=n(15),i=n(0);/**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */r.name="matter-js",/**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */r.version="0.19.0",/**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */r.uses=[],/**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */r.used=[],/**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */r.use=function(){Plugin.use(r,Array.prototype.slice.call(arguments))},/**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */r.before=function(e,t){return e=e.replace(/^Matter./,""),i.chainPathBefore(r,e,t)},/**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */r.after=function(e,t){return e=e.replace(/^Matter./,""),i.chainPathAfter(r,e,t)};/***/},/* 22 *//***/function(e,t,n){/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/var r={};e.exports=r;var i=n(6),o=n(10),a=n(0),s=n(4),u=n(12),l=a.deprecated;/**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */r.stack=function(e,t,n,r,o,a,u){for(var l,c=i.create({label:"Stack"}),f=e,p=t,d=0,h=0;h<r;h++){for(var v=0,g=0;g<n;g++){var y=u(f,p,g,h,l,d);if(y){var m=y.bounds.max.y-y.bounds.min.y,x=y.bounds.max.x-y.bounds.min.x;m>v&&(v=m),s.translate(y,{x:.5*x,y:.5*m}),f=y.bounds.max.x+o,i.addBody(c,y),l=y,d+=1}else f+=o}p+=v+a,f=e}return c},/**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */r.chain=function(e,t,n,r,s,u){for(var l=e.bodies,c=1;c<l.length;c++){var f=l[c-1],p=l[c],d=f.bounds.max.y-f.bounds.min.y,h=f.bounds.max.x-f.bounds.min.x,v=p.bounds.max.y-p.bounds.min.y,g=p.bounds.max.x-p.bounds.min.x,y={bodyA:f,pointA:{x:h*t,y:d*n},bodyB:p,pointB:{x:g*r,y:v*s}},m=a.extend(y,u);i.addConstraint(e,o.create(m))}return e.label+=" Chain",e},/**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */r.mesh=function(e,t,n,r,s){var u,l,c,f,p,d=e.bodies;for(u=0;u<n;u++){for(l=1;l<t;l++)c=d[l-1+u*t],f=d[l+u*t],i.addConstraint(e,o.create(a.extend({bodyA:c,bodyB:f},s)));if(u>0)for(l=0;l<t;l++)c=d[l+(u-1)*t],f=d[l+u*t],i.addConstraint(e,o.create(a.extend({bodyA:c,bodyB:f},s))),r&&l>0&&(p=d[l-1+(u-1)*t],i.addConstraint(e,o.create(a.extend({bodyA:p,bodyB:f},s)))),r&&l<t-1&&(p=d[l+1+(u-1)*t],i.addConstraint(e,o.create(a.extend({bodyA:p,bodyB:f},s))))}return e.label+=" Mesh",e},/**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */r.pyramid=function(e,t,n,i,o,a,u){return r.stack(e,t,n,i,o,a,function(t,r,a,l,c,f){var p=Math.min(i,Math.ceil(n/2)),d=c?c.bounds.max.x-c.bounds.min.x:0;if(!(l>p)){var h=// reverse row order
l=p-l,v=n-1-l;if(!(a<h)&&!(a>v))return 1===f&&s.translate(c,{x:(a+(n%2==1?1:-1))*d,y:0}),u(e+(c?a*d:0)+a*o,r,a,l,c,f)}})},/**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} xx
     * @param {number} yy
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */r.newtonsCradle=function(e,t,n,r,a){for(var s=i.create({label:"Newtons Cradle"}),l=0;l<n;l++){var c=u.circle(e+l*(1.9*r),t+a,r,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),f=o.create({pointA:{x:e+l*(1.9*r),y:t},bodyB:c});i.addBody(s,c),i.addConstraint(s,f)}return s},l(r,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),/**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} xx
     * @param {number} yy
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */r.car=function(e,t,n,r,a){var l=s.nextGroup(!0),c=-(.5*n)+20,f=.5*n-20,p=i.create({label:"Car"}),d=u.rectangle(e,t,n,r,{collisionFilter:{group:l},chamfer:{radius:.5*r},density:2e-4}),h=u.circle(e+c,t+0,a,{collisionFilter:{group:l},friction:.8}),v=u.circle(e+f,t+0,a,{collisionFilter:{group:l},friction:.8}),g=o.create({bodyB:d,pointB:{x:c,y:0},bodyA:h,stiffness:1,length:0}),y=o.create({bodyB:d,pointB:{x:f,y:0},bodyA:v,stiffness:1,length:0});return i.addBody(p,d),i.addBody(p,h),i.addBody(p,v),i.addConstraint(p,g),i.addConstraint(p,y),p},l(r,"car","Composites.car ➤ moved to car example"),/**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} xx
     * @param {number} yy
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */r.softBody=function(e,t,n,i,o,s,l,c,f,p){f=a.extend({inertia:1/0},f),p=a.extend({stiffness:.2,render:{type:"line",anchors:!1}},p);var d=r.stack(e,t,n,i,o,s,function(e,t){return u.circle(e,t,c,f)});return r.mesh(d,n,i,l,p),d.label="Soft Body",d},l(r,"softBody","Composites.softBody ➤ moved to softBody and cloth examples");/***/},/* 23 *//***/function(e,t,n){/**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/var r={};e.exports=r;var i=n(9),o=n(0),a=o.deprecated;/**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */r.create=function(e){return o.extend({buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48},e)},/**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     *//**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     *//**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */r.update=function(e,t,n,i){var o,a,s,u,l,c=n.world,f=e.buckets,p=!1;for(o=0;o<t.length;o++){var d=t[o];if((!d.isSleeping||i)&&(!c.bounds||!(d.bounds.max.x<c.bounds.min.x)&&!(d.bounds.min.x>c.bounds.max.x)&&!(d.bounds.max.y<c.bounds.min.y)&&!(d.bounds.min.y>c.bounds.max.y))){var h=r._getRegion(e,d);// if the body has changed grid region
if(!d.region||h.id!==d.region.id||i){(!d.region||i)&&(d.region=h);var v=r._regionUnion(h,d.region);// update grid buckets affected by region change
// iterate over the union of both regions
for(a=v.startCol;a<=v.endCol;a++)for(s=v.startRow;s<=v.endRow;s++){u=f[l=r._getBucketId(a,s)];var g=a>=h.startCol&&a<=h.endCol&&s>=h.startRow&&s<=h.endRow,y=a>=d.region.startCol&&a<=d.region.endCol&&s>=d.region.startRow&&s<=d.region.endRow;!g&&y&&y&&u&&r._bucketRemoveBody(e,u,d),(d.region===h||g&&!y||i)&&(u||(u=r._createBucket(f,l)),r._bucketAddBody(e,u,d))}// set the new region
d.region=h,// flag changes so we can update pairs
p=!0}}}// update pairs list only if pairs changed (i.e. a body changed region)
p&&(e.pairsList=r._createActivePairsList(e))},a(r,"update","Grid.update ➤ replaced by Matter.Detector"),/**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */r.clear=function(e){e.buckets={},e.pairs={},e.pairsList=[]},a(r,"clear","Grid.clear ➤ replaced by Matter.Detector"),/**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */r._regionUnion=function(e,t){var n=Math.min(e.startCol,t.startCol),i=Math.max(e.endCol,t.endCol),o=Math.min(e.startRow,t.startRow),a=Math.max(e.endRow,t.endRow);return r._createRegion(n,i,o,a)},/**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */r._getRegion=function(e,t){var n=t.bounds,i=Math.floor(n.min.x/e.bucketWidth),o=Math.floor(n.max.x/e.bucketWidth),a=Math.floor(n.min.y/e.bucketHeight),s=Math.floor(n.max.y/e.bucketHeight);return r._createRegion(i,o,a,s)},/**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */r._createRegion=function(e,t,n,r){return{id:e+","+t+","+n+","+r,startCol:e,endCol:t,startRow:n,endRow:r}},/**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */r._getBucketId=function(e,t){return"C"+e+"R"+t},/**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */r._createBucket=function(e,t){return e[t]=[]},/**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */r._bucketAddBody=function(e,t,n){var r,o=e.pairs,a=i.id,s=t.length;// add new pairs
for(r=0;r<s;r++){var u=t[r];if(n.id!==u.id&&(!n.isStatic||!u.isStatic)){// keep track of the number of buckets the pair exists in
// important for Grid.update to work
var l=a(n,u),c=o[l];c?c[2]+=1:o[l]=[n,u,1]}}// add to bodies (after pairs, otherwise pairs with self)
t.push(n)},/**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */r._bucketRemoveBody=function(e,t,n){var r,a=e.pairs,s=i.id;// remove from bucket
t.splice(o.indexOf(t,n),1);var u=t.length;// update pair counts
for(r=0;r<u;r++){// keep track of the number of buckets the pair exists in
// important for _createActivePairsList to work
var l=a[s(n,t[r])];l&&(l[2]-=1)}},/**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */r._createActivePairsList=function(e){var t,n,r=e.pairs,i=o.keys(r),a=i.length,s=[];// iterate over grid.pairs
for(n=0;n<a;n++)// if pair exists in at least one bucket
// it is a pair that needs further collision testing so push it
(t=r[i[n]])[2]>0?s.push(t):delete r[i[n]];return s};/***/},/* 24 *//***/function(e,t,n){/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/var r={};e.exports=r;var i=n(3),o=n(7),a=n(14),s=n(5),u=n(13),l=n(10),c=n(6),f=n(0),p=n(1);/**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */r.create=function(e,t){var n=(e?e.mouse:null)||(t?t.mouse:null);n||(e&&e.render&&e.render.canvas?n=a.create(e.render.canvas):t&&t.element?n=a.create(t.element):(n=a.create(),f.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var i=l.create({label:"Mouse Constraint",pointA:n.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),o={type:"mouseConstraint",mouse:n,element:null,body:null,constraint:i,collisionFilter:{category:1,mask:4294967295,group:0}},u=f.extend(o,t);return s.on(e,"beforeUpdate",function(){var t=c.allBodies(e.world);r.update(u,t),r._triggerEvents(u)}),u},/**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */r.update=function(e,t){var n=e.mouse,r=e.constraint,a=e.body;if(0===n.button){if(r.bodyB)o.set(r.bodyB,!1),r.pointA=n.position;else for(var l=0;l<t.length;l++)if(a=t[l],p.contains(a.bounds,n.position)&&u.canCollide(a.collisionFilter,e.collisionFilter))for(var c=a.parts.length>1?1:0;c<a.parts.length;c++){var f=a.parts[c];if(i.contains(f.vertices,n.position)){r.pointA=n.position,r.bodyB=e.body=a,r.pointB={x:n.position.x-a.position.x,y:n.position.y-a.position.y},r.angleB=a.angle,o.set(a,!1),s.trigger(e,"startdrag",{mouse:n,body:a});break}}}else r.bodyB=e.body=null,r.pointB=null,a&&s.trigger(e,"enddrag",{mouse:n,body:a})},/**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */r._triggerEvents=function(e){var t=e.mouse,n=t.sourceEvents;n.mousemove&&s.trigger(e,"mousemove",{mouse:t}),n.mousedown&&s.trigger(e,"mousedown",{mouse:t}),n.mouseup&&s.trigger(e,"mouseup",{mouse:t}),// reset the mouse state ready for the next step
a.clearSourceEvents(t)};/***/},/* 25 *//***/function(e,t,n){/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/var r={};e.exports=r;var i=n(2),o=n(8),a=n(1),s=n(12),u=n(3);/**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */r.collides=function(e,t){for(var n=[],r=t.length,i=e.bounds,s=o.collides,u=a.overlaps,l=0;l<r;l++){var c=t[l],f=c.parts.length,p=1===f?0:1;if(u(c.bounds,i))for(var d=p;d<f;d++){var h=c.parts[d];if(u(h.bounds,i)){var v=s(h,e);if(v){n.push(v);break}}}}return n},/**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */r.ray=function(e,t,n,o){o=o||1e-100;for(var a=i.angle(t,n),u=i.magnitude(i.sub(t,n)),l=(n.x+t.x)*.5,c=(n.y+t.y)*.5,f=s.rectangle(l,c,u,o,{angle:a}),p=r.collides(f,e),d=0;d<p.length;d+=1){var h=p[d];h.body=h.bodyB=h.bodyA}return p},/**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */r.region=function(e,t,n){for(var r=[],i=0;i<e.length;i++){var o=e[i],s=a.overlaps(o.bounds,t);(s&&!n||!s&&n)&&r.push(o)}return r},/**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */r.point=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r];if(a.contains(i.bounds,t))for(var o=1===i.parts.length?0:1;o<i.parts.length;o++){var s=i.parts[o];if(a.contains(s.bounds,t)&&u.contains(s.vertices,t)){n.push(i);break}}}return n};/***/},/* 26 *//***/function(e,t,n){/**
* The `Matter.Render` module is a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/var r,i,o,a,s,u,l,c,f={};e.exports=f;var p=n(4),d=n(0),h=n(6),v=n(1),g=n(5),y=n(2),m=n(14);"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(d.now())},1e3/60)},i=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),f._goodFps=30,f._goodDelta=1e3/60,/**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */f.create=function(e){var t={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!e.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},n=d.extend(t,e);return n.canvas&&(n.canvas.width=n.options.width||n.canvas.width,n.canvas.height=n.options.height||n.canvas.height),n.mouse=e.mouse,n.engine=e.engine,n.canvas=n.canvas||s(n.options.width,n.options.height),n.context=n.canvas.getContext("2d"),n.textures={},n.bounds=n.bounds||{min:{x:0,y:0},max:{x:n.canvas.width,y:n.canvas.height}},// for temporary back compatibility only
n.controller=f,n.options.showBroadphase=!1,1!==n.options.pixelRatio&&f.setPixelRatio(n,n.options.pixelRatio),d.isElement(n.element)&&n.element.appendChild(n.canvas),n},/**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */f.run=function(e){!function t(n){e.frameRequestId=r(t),o(e,n),f.world(e,n),(e.options.showStats||e.options.showDebug)&&f.stats(e,e.context,n),(e.options.showPerformance||e.options.showDebug)&&f.performance(e,e.context,n)}()},/**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */f.stop=function(e){i(e.frameRequestId)},/**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */f.setPixelRatio=function(e,t){var n=e.options,r=e.canvas;"auto"===t&&(t=u(r)),n.pixelRatio=t,r.setAttribute("data-pixel-ratio",t),r.width=n.width*t,r.height=n.height*t,r.style.width=n.width+"px",r.style.height=n.height+"px"},/**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */f.lookAt=function(e,t,n,r){r=void 0===r||r,t=d.isArray(t)?t:[t],n=n||{x:0,y:0};for(var i={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},o=0;o<t.length;o+=1){var a=t[o],s=a.bounds?a.bounds.min:a.min||a.position||a,u=a.bounds?a.bounds.max:a.max||a.position||a;s&&u&&(s.x<i.min.x&&(i.min.x=s.x),u.x>i.max.x&&(i.max.x=u.x),s.y<i.min.y&&(i.min.y=s.y),u.y>i.max.y&&(i.max.y=u.y))}// find bounds of all objects
var l=i.max.x-i.min.x+2*n.x,c=i.max.y-i.min.y+2*n.y,f=e.canvas.height,p=e.canvas.width/f,h=l/c,v=1,g=1;h>p?g=h/p:v=p/h,// enable bounds
e.options.hasBounds=!0,// position and size
e.bounds.min.x=i.min.x,e.bounds.max.x=i.min.x+l*v,e.bounds.min.y=i.min.y,e.bounds.max.y=i.min.y+c*g,r&&(e.bounds.min.x+=.5*l-l*v*.5,e.bounds.max.x+=.5*l-l*v*.5,e.bounds.min.y+=.5*c-c*g*.5,e.bounds.max.y+=.5*c-c*g*.5),// padding
e.bounds.min.x-=n.x,e.bounds.max.x-=n.x,e.bounds.min.y-=n.y,e.bounds.max.y-=n.y,e.mouse&&(m.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.canvas.width,y:(e.bounds.max.y-e.bounds.min.y)/e.canvas.height}),m.setOffset(e.mouse,e.bounds.min))},/**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */f.startViewTransform=function(e){var t=e.bounds.max.x-e.bounds.min.x,n=e.bounds.max.y-e.bounds.min.y,r=t/e.options.width,i=n/e.options.height;e.context.setTransform(e.options.pixelRatio/r,0,0,e.options.pixelRatio/i,0,0),e.context.translate(-e.bounds.min.x,-e.bounds.min.y)},/**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */f.endViewTransform=function(e){e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0)},/**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */f.world=function(e,t){var n,r=d.now(),i=e.engine,o=i.world,a=e.canvas,s=e.context,u=e.options,l=e.timing,p=h.allBodies(o),x=h.allConstraints(o),b=u.wireframes?u.wireframeBackground:u.background,w=[],_=[],S={timestamp:i.timing.timestamp};// handle bounds
if(g.trigger(e,"beforeRender",S),e.currentBackground!==b&&c(e,b),// clear the canvas with a transparent fill, to allow the canvas background to show
s.globalCompositeOperation="source-in",s.fillStyle="transparent",s.fillRect(0,0,a.width,a.height),s.globalCompositeOperation="source-over",u.hasBounds){// filter out bodies that are not in view
for(n=0;n<p.length;n++){var A=p[n];v.overlaps(A.bounds,e.bounds)&&w.push(A)}// filter out constraints that are not in view
for(n=0;n<x.length;n++){var C=x[n],k=C.bodyA,T=C.bodyB,E=C.pointA,P=C.pointB;k&&(E=y.add(k.position,C.pointA)),T&&(P=y.add(T.position,C.pointB)),E&&P&&(v.contains(e.bounds,E)||v.contains(e.bounds,P))&&_.push(C)}// transform the view
f.startViewTransform(e),e.mouse&&(m.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),m.setOffset(e.mouse,e.bounds.min))}else _=x,w=p,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!u.wireframes||i.enableSleeping&&u.showSleeping?f.bodies(e,w,s):(u.showConvexHulls&&f.bodyConvexHulls(e,w,s),// optimised method for wireframes only
f.bodyWireframes(e,w,s)),u.showBounds&&f.bodyBounds(e,w,s),(u.showAxes||u.showAngleIndicator)&&f.bodyAxes(e,w,s),u.showPositions&&f.bodyPositions(e,w,s),u.showVelocity&&f.bodyVelocity(e,w,s),u.showIds&&f.bodyIds(e,w,s),u.showSeparations&&f.separations(e,i.pairs.list,s),u.showCollisions&&f.collisions(e,i.pairs.list,s),u.showVertexNumbers&&f.vertexNumbers(e,w,s),u.showMousePosition&&f.mousePosition(e,e.mouse,s),f.constraints(_,s),u.hasBounds&&f.endViewTransform(e),g.trigger(e,"afterRender",S),// log the time elapsed computing this update
l.lastElapsed=d.now()-r},/**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */f.stats=function(e,t,n){// count parts
for(var r=e.engine,i=r.world,o=h.allBodies(i),a=0,s=0,u=0;u<o.length;u+=1)a+=o[u].parts.length;var l={Part:a,Body:o.length,Cons:h.allConstraints(i).length,Comp:h.allComposites(i).length,Pair:r.pairs.list.length};// sections
for(var c in // background
t.fillStyle="#0e0f19",t.fillRect(s,0,302.5,44),t.font="12px Arial",t.textBaseline="top",t.textAlign="right",l){var f=l[c];// label
t.fillStyle="#aaa",t.fillText(c,s+55,8),// value
t.fillStyle="#eee",t.fillText(f,s+55,26),s+=55}},/**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */f.performance=function(e,t){var n=e.engine,r=e.timing,i=r.deltaHistory,o=r.elapsedHistory,s=r.timestampElapsedHistory,u=r.engineDeltaHistory,l=r.engineElapsedHistory,c=n.timing.lastDelta,p=a(i),d=a(o),h=a(u),v=a(l),g=a(s)/p||0,y=1e3/p||0;// background
t.fillStyle="#0e0f19",t.fillRect(0,50,370,34),// show FPS
f.status(t,10,69,60,4,i.length,Math.round(y)+" fps",y/f._goodFps,function(e){return i[e]/p-1}),// show engine delta
f.status(t,82,69,60,4,u.length,c.toFixed(2)+" dt",f._goodDelta/c,function(e){return u[e]/h-1}),// show engine update time
f.status(t,154,69,60,4,l.length,v.toFixed(2)+" ut",1-v/f._goodFps,function(e){return l[e]/v-1}),// show render time
f.status(t,226,69,60,4,o.length,d.toFixed(2)+" rt",1-d/f._goodFps,function(e){return o[e]/d-1}),// show effective speed
f.status(t,298,69,60,4,s.length,g.toFixed(2)+" x",g*g*g,function(e){return(s[e]/i[e]/g||0)-1})},/**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */f.status=function(e,t,n,r,i,o,a,s,u){// background
e.strokeStyle="#888",e.fillStyle="#444",e.lineWidth=1,e.fillRect(t,n+7,r,1),// chart
e.beginPath(),e.moveTo(t,n+7-i*d.clamp(.4*u(0),-2,2));for(var l=0;l<r;l+=1)e.lineTo(t+l,n+7-(l<o?i*d.clamp(.4*u(l),-2,2):0));e.stroke(),// indicator
e.fillStyle="hsl("+d.clamp(25+95*s,0,120)+",100%,60%)",e.fillRect(t,n-7,4,4),// label
e.font="12px Arial",e.textBaseline="middle",e.textAlign="right",e.fillStyle="#eee",e.fillText(a,t+r,n-5)},/**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */f.constraints=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.render.visible&&r.pointA&&r.pointB){var i,o,a=r.bodyA,s=r.bodyB;if(i=a?y.add(a.position,r.pointA):r.pointA,"pin"===r.render.type)t.beginPath(),t.arc(i.x,i.y,3,0,2*Math.PI),t.closePath();else{if(o=s?y.add(s.position,r.pointB):r.pointB,t.beginPath(),t.moveTo(i.x,i.y),"spring"===r.render.type)for(var u,l=y.sub(o,i),c=y.perp(y.normalise(l)),f=Math.ceil(d.clamp(r.length/5,12,20)),p=1;p<f;p+=1)u=p%2==0?1:-1,t.lineTo(i.x+l.x*(p/f)+c.x*u*4,i.y+l.y*(p/f)+c.y*u*4);t.lineTo(o.x,o.y)}r.render.lineWidth&&(t.lineWidth=r.render.lineWidth,t.strokeStyle=r.render.strokeStyle,t.stroke()),r.render.anchors&&(t.fillStyle=r.render.strokeStyle,t.beginPath(),t.arc(i.x,i.y,3,0,2*Math.PI),t.arc(o.x,o.y,3,0,2*Math.PI),t.closePath(),t.fill())}}},/**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodies=function(e,t,n){e.engine;var r,i,o,a,s=e.options,u=s.showInternalEdges||!s.wireframes;for(o=0;o<t.length;o++)if((r=t[o]).render.visible)// handle compound parts
{for(a=r.parts.length>1?1:0;a<r.parts.length;a++)if((i=r.parts[a]).render.visible){if(s.showSleeping&&r.isSleeping?n.globalAlpha=.5*i.render.opacity:1!==i.render.opacity&&(n.globalAlpha=i.render.opacity),i.render.sprite&&i.render.sprite.texture&&!s.wireframes){// part sprite
var c=i.render.sprite,f=l(e,c.texture);n.translate(i.position.x,i.position.y),n.rotate(i.angle),n.drawImage(f,-(f.width*c.xOffset)*c.xScale,-(f.height*c.yOffset)*c.yScale,f.width*c.xScale,f.height*c.yScale),// revert translation, hopefully faster than save / restore
n.rotate(-i.angle),n.translate(-i.position.x,-i.position.y)}else{// part polygon
if(i.circleRadius)n.beginPath(),n.arc(i.position.x,i.position.y,i.circleRadius,0,2*Math.PI);else{n.beginPath(),n.moveTo(i.vertices[0].x,i.vertices[0].y);for(var p=1;p<i.vertices.length;p++)!i.vertices[p-1].isInternal||u?n.lineTo(i.vertices[p].x,i.vertices[p].y):n.moveTo(i.vertices[p].x,i.vertices[p].y),i.vertices[p].isInternal&&!u&&n.moveTo(i.vertices[(p+1)%i.vertices.length].x,i.vertices[(p+1)%i.vertices.length].y);n.lineTo(i.vertices[0].x,i.vertices[0].y),n.closePath()}s.wireframes?(n.lineWidth=1,n.strokeStyle="#bbb",n.stroke()):(n.fillStyle=i.render.fillStyle,i.render.lineWidth&&(n.lineWidth=i.render.lineWidth,n.strokeStyle=i.render.strokeStyle,n.stroke()),n.fill())}n.globalAlpha=1}}},/**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodyWireframes=function(e,t,n){var r,i,o,a,s,u=e.options.showInternalEdges;// render all bodies
for(n.beginPath(),o=0;o<t.length;o++)if((r=t[o]).render.visible)// handle compound parts
for(s=r.parts.length>1?1:0;s<r.parts.length;s++){for(i=r.parts[s],n.moveTo(i.vertices[0].x,i.vertices[0].y),a=1;a<i.vertices.length;a++)!i.vertices[a-1].isInternal||u?n.lineTo(i.vertices[a].x,i.vertices[a].y):n.moveTo(i.vertices[a].x,i.vertices[a].y),i.vertices[a].isInternal&&!u&&n.moveTo(i.vertices[(a+1)%i.vertices.length].x,i.vertices[(a+1)%i.vertices.length].y);n.lineTo(i.vertices[0].x,i.vertices[0].y)}n.lineWidth=1,n.strokeStyle="#bbb",n.stroke()},/**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodyConvexHulls=function(e,t,n){var r,i,o;// render convex hulls
for(n.beginPath(),i=0;i<t.length;i++)if((r=t[i]).render.visible&&1!==r.parts.length){for(n.moveTo(r.vertices[0].x,r.vertices[0].y),o=1;o<r.vertices.length;o++)n.lineTo(r.vertices[o].x,r.vertices[o].y);n.lineTo(r.vertices[0].x,r.vertices[0].y)}n.lineWidth=1,n.strokeStyle="rgba(255,255,255,0.2)",n.stroke()},/**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.vertexNumbers=function(e,t,n){var r,i,o;for(r=0;r<t.length;r++){var a=t[r].parts;for(o=a.length>1?1:0;o<a.length;o++){var s=a[o];for(i=0;i<s.vertices.length;i++)n.fillStyle="rgba(255,255,255,0.2)",n.fillText(r+"_"+i,s.position.x+(s.vertices[i].x-s.position.x)*.8,s.position.y+(s.vertices[i].y-s.position.y)*.8)}}},/**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */f.mousePosition=function(e,t,n){n.fillStyle="rgba(255,255,255,0.8)",n.fillText(t.position.x+"  "+t.position.y,t.position.x+5,t.position.y-5)},/**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodyBounds=function(e,t,n){e.engine;var r=e.options;n.beginPath();for(var i=0;i<t.length;i++)if(t[i].render.visible)for(var o=t[i].parts,a=o.length>1?1:0;a<o.length;a++){var s=o[a];n.rect(s.bounds.min.x,s.bounds.min.y,s.bounds.max.x-s.bounds.min.x,s.bounds.max.y-s.bounds.min.y)}r.wireframes?n.strokeStyle="rgba(255,255,255,0.08)":n.strokeStyle="rgba(0,0,0,0.1)",n.lineWidth=1,n.stroke()},/**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodyAxes=function(e,t,n){e.engine;var r,i,o,a,s=e.options;for(n.beginPath(),i=0;i<t.length;i++){var u=t[i],l=u.parts;if(u.render.visible){if(s.showAxes)for(o=l.length>1?1:0;o<l.length;o++)for(a=0,r=l[o];a<r.axes.length;a++){var c=r.axes[a];n.moveTo(r.position.x,r.position.y),n.lineTo(r.position.x+20*c.x,r.position.y+20*c.y)}else for(o=l.length>1?1:0;o<l.length;o++)for(a=0,r=l[o];a<r.axes.length;a++)// render a single axis indicator
n.moveTo(r.position.x,r.position.y),n.lineTo((r.vertices[0].x+r.vertices[r.vertices.length-1].x)/2,(r.vertices[0].y+r.vertices[r.vertices.length-1].y)/2)}}s.wireframes?(n.strokeStyle="indianred",n.lineWidth=1):(n.strokeStyle="rgba(255, 255, 255, 0.4)",n.globalCompositeOperation="overlay",n.lineWidth=2),n.stroke(),n.globalCompositeOperation="source-over"},/**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodyPositions=function(e,t,n){e.engine;var r,i,o,a,s=e.options;// render current positions
for(n.beginPath(),o=0;o<t.length;o++)if((r=t[o]).render.visible)// handle compound parts
for(a=0;a<r.parts.length;a++)i=r.parts[a],n.arc(i.position.x,i.position.y,3,0,2*Math.PI,!1),n.closePath();// render previous positions
for(s.wireframes?n.fillStyle="indianred":n.fillStyle="rgba(0,0,0,0.5)",n.fill(),n.beginPath(),o=0;o<t.length;o++)(r=t[o]).render.visible&&(n.arc(r.positionPrev.x,r.positionPrev.y,2,0,2*Math.PI,!1),n.closePath());n.fillStyle="rgba(255,165,0,0.8)",n.fill()},/**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodyVelocity=function(e,t,n){n.beginPath();for(var r=0;r<t.length;r++){var i=t[r];if(i.render.visible){var o=p.getVelocity(i);n.moveTo(i.position.x,i.position.y),n.lineTo(i.position.x+o.x,i.position.y+o.y)}}n.lineWidth=3,n.strokeStyle="cornflowerblue",n.stroke()},/**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */f.bodyIds=function(e,t,n){var r,i;for(r=0;r<t.length;r++)if(t[r].render.visible){var o=t[r].parts;for(i=o.length>1?1:0;i<o.length;i++){var a=o[i];n.font="12px Arial",n.fillStyle="rgba(255,255,255,0.5)",n.fillText(a.id,a.position.x+10,a.position.y-10)}}},/**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */f.collisions=function(e,t,n){var r,i,o,a,s=e.options;// render collision positions
for(n.beginPath(),o=0;o<t.length;o++)if((r=t[o]).isActive)for(a=0,i=r.collision;a<r.activeContacts.length;a++){var u=r.activeContacts[a].vertex;n.rect(u.x-1.5,u.y-1.5,3.5,3.5)}// render collision normals
for(s.wireframes?n.fillStyle="rgba(255,255,255,0.7)":n.fillStyle="orange",n.fill(),n.beginPath(),o=0;o<t.length;o++)if((r=t[o]).isActive&&(i=r.collision,r.activeContacts.length>0)){var l=r.activeContacts[0].vertex.x,c=r.activeContacts[0].vertex.y;2===r.activeContacts.length&&(l=(r.activeContacts[0].vertex.x+r.activeContacts[1].vertex.x)/2,c=(r.activeContacts[0].vertex.y+r.activeContacts[1].vertex.y)/2),i.bodyB===i.supports[0].body||!0===i.bodyA.isStatic?n.moveTo(l-8*i.normal.x,c-8*i.normal.y):n.moveTo(l+8*i.normal.x,c+8*i.normal.y),n.lineTo(l,c)}s.wireframes?n.strokeStyle="rgba(255,165,0,0.7)":n.strokeStyle="orange",n.lineWidth=1,n.stroke()},/**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */f.separations=function(e,t,n){var r,i,o,a,s,u=e.options;// render separations
for(n.beginPath(),s=0;s<t.length;s++)if((r=t[s]).isActive){o=(i=r.collision).bodyA;var l=1;(a=i.bodyB).isStatic||o.isStatic||(l=.5),a.isStatic&&(l=0),n.moveTo(a.position.x,a.position.y),n.lineTo(a.position.x-i.penetration.x*l,a.position.y-i.penetration.y*l),l=1,a.isStatic||o.isStatic||(l=.5),o.isStatic&&(l=0),n.moveTo(o.position.x,o.position.y),n.lineTo(o.position.x+i.penetration.x*l,o.position.y+i.penetration.y*l)}u.wireframes?n.strokeStyle="rgba(255,165,0,0.5)":n.strokeStyle="orange",n.stroke()},/**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */f.inspector=function(e,t){e.engine;var n,r=e.selected,i=e.render,o=i.options;if(o.hasBounds){var a=i.bounds.max.x-i.bounds.min.x,s=i.bounds.max.y-i.bounds.min.y,u=a/i.options.width,l=s/i.options.height;t.scale(1/u,1/l),t.translate(-i.bounds.min.x,-i.bounds.min.y)}for(var c=0;c<r.length;c++){var f=r[c].data;switch(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.9)",t.setLineDash([1,2]),f.type){case"body":// render body selections
n=f.bounds,t.beginPath(),t.rect(Math.floor(n.min.x-3),Math.floor(n.min.y-3),Math.floor(n.max.x-n.min.x+6),Math.floor(n.max.y-n.min.y+6)),t.closePath(),t.stroke();break;case"constraint":// render constraint selections
var p=f.pointA;f.bodyA&&(p=f.pointB),t.beginPath(),t.arc(p.x,p.y,10,0,2*Math.PI),t.closePath(),t.stroke()}t.setLineDash([]),t.translate(-.5,-.5)}null!==e.selectStart&&(t.translate(.5,.5),t.lineWidth=1,t.strokeStyle="rgba(255,165,0,0.6)",t.fillStyle="rgba(255,165,0,0.1)",n=e.selectBounds,t.beginPath(),t.rect(Math.floor(n.min.x),Math.floor(n.min.y),Math.floor(n.max.x-n.min.x),Math.floor(n.max.y-n.min.y)),t.closePath(),t.stroke(),t.fill(),t.translate(-.5,-.5)),o.hasBounds&&t.setTransform(1,0,0,1,0,0)},o=function(e,t){var n=e.engine,r=e.timing,i=r.historySize,o=n.timing.timestamp;r.delta=t-r.lastTime||f._goodDelta,r.lastTime=t,r.timestampElapsed=o-r.lastTimestamp||0,r.lastTimestamp=o,r.deltaHistory.unshift(r.delta),r.deltaHistory.length=Math.min(r.deltaHistory.length,i),r.engineDeltaHistory.unshift(n.timing.lastDelta),r.engineDeltaHistory.length=Math.min(r.engineDeltaHistory.length,i),r.timestampElapsedHistory.unshift(r.timestampElapsed),r.timestampElapsedHistory.length=Math.min(r.timestampElapsedHistory.length,i),r.engineElapsedHistory.unshift(n.timing.lastElapsed),r.engineElapsedHistory.length=Math.min(r.engineElapsedHistory.length,i),r.elapsedHistory.unshift(r.lastElapsed),r.elapsedHistory.length=Math.min(r.elapsedHistory.length,i)},a=function(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length||0},s=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n.oncontextmenu=function(){return!1},n.onselectstart=function(){return!1},n},u=function(e){var t=e.getContext("2d");return(window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)},l=function(e,t){var n=e.textures[t];return n||((n=e.textures[t]=new Image).src=t),n},c=function(e,t){var n=t;/(jpg|gif|png)$/.test(t)&&(n="url("+t+")"),e.canvas.style.background=n,e.canvas.style.backgroundSize="contain",e.currentBackground=t};/***/},/* 27 *//***/function(e,t,n){/**
* The `Matter.Runner` module is an optional utility which provides a game loop, 
* that handles continuously updating a `Matter.Engine` for you within a browser.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
* Instead just call `Engine.update(engine, delta)` in your own loop.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/var r,i,o,a={};e.exports=a;var s=n(5),u=n(17),l=n(0);"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,i=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),r||(r=function(e){o=setTimeout(function(){e(l.now())},1e3/60)},i=function(){clearTimeout(o)}),/**
     * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
     * @method create
     * @param {} options
     */a.create=function(e){var t=l.extend({fps:60,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,frameRequestId:null,isFixed:!1,enabled:!0},e);return t.delta=t.delta||1e3/t.fps,t.deltaMin=t.deltaMin||1e3/t.fps,t.deltaMax=t.deltaMax||1e3/(.5*t.fps),t.fps=1e3/t.delta,t},/**
     * Continuously ticks a `Matter.Engine` by calling `Runner.tick` on the `requestAnimationFrame` event.
     * @method run
     * @param {engine} engine
     */a.run=function(e,t){return void 0!==e.positionIterations&&(t=e,e=a.create()),function n(i){e.frameRequestId=r(n),i&&e.enabled&&a.tick(e,t,i)}(),e},/**
     * A game loop utility that updates the engine and renderer by one step (a 'tick').
     * Features delta smoothing, time correction and fixed or dynamic timing.
     * Consider just `Engine.update(engine, delta)` if you're using your own loop.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */a.tick=function(e,t,n){var r,i=t.timing;e.isFixed?r=e.delta:(// dynamic timestep based on wall clock between calls
r=n-e.timePrev||e.delta,e.timePrev=n,// optimistically filter delta over a few frames, to improve stability
e.deltaHistory.push(r),e.deltaHistory=e.deltaHistory.slice(-e.deltaSampleSize),r=// limit delta
(r=(r=Math.min.apply(null,e.deltaHistory))<e.deltaMin?e.deltaMin:r)>e.deltaMax?e.deltaMax:r,// update engine timing object
e.delta=r);// create an event object
var o={timestamp:i.timestamp};s.trigger(e,"beforeTick",o),// fps counter
e.frameCounter+=1,n-e.counterTimestamp>=1e3&&(e.fps=e.frameCounter*((n-e.counterTimestamp)/1e3),e.counterTimestamp=n,e.frameCounter=0),s.trigger(e,"tick",o),// update
s.trigger(e,"beforeUpdate",o),u.update(t,r),s.trigger(e,"afterUpdate",o),s.trigger(e,"afterTick",o)},/**
     * Ends execution of `Runner.run` on the given `runner`, by canceling the animation frame request event loop.
     * If you wish to only temporarily pause the engine, see `engine.enabled` instead.
     * @method stop
     * @param {runner} runner
     */a.stop=function(e){i(e.frameRequestId)},/**
     * Alias for `Runner.run`.
     * @method start
     * @param {runner} runner
     * @param {engine} engine
     */a.start=function(e,t){a.run(e,t)};/***/},/* 28 *//***/function(e,t,n){/**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/var r={};e.exports=r;var i=n(8),o=n(0).deprecated;/**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */r.collides=function(e,t){return i.collides(e,t)},o(r,"collides","SAT.collides ➤ replaced by Collision.collides");/***/},/* 29 *//***/function(e,t,n){/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/var r={};e.exports=r,n(1);var i=n(0);/**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */r.pathToVertices=function(e,t){"undefined"==typeof window||"SVGPathSeg"in window||i.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");// https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
var n,o,a,s,u,l,c,f,p,d,h,v=[],g=0,y=0,m=0;t=t||15;var x=function(e,t,n){// all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
var r=n%2==1&&n>1;// when the last point doesn't equal the current point add the current point
if(!p||e!=p.x||t!=p.y){p&&r?(d=p.x,h=p.y):(d=0,h=0);var i={x:d+e,y:h+t};(r||!p)&&(p=i),v.push(i),y=d+e,m=h+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();// skip path ends
if("Z"!==t){// map segment to x and y
switch(t){case"M":case"L":case"T":case"C":case"S":case"Q":y=e.x,m=e.y;break;case"H":y=e.x;break;case"V":m=e.y}x(y,m,e.pathSegType)}};for(// ensure path is absolute
r._svgPathToAbsolute(e),// get total length
a=e.getTotalLength(),// queue segments
l=[],n=0;n<e.pathSegList.numberOfItems;n+=1)l.push(e.pathSegList.getItem(n));// sample through path
for(c=l.concat();g<a;){// new segment
if((u=l[e.getPathSegAtLength(g)])!=f){for(;c.length&&c[0]!=u;)b(c.shift());f=u}// add points in between when curving
// TODO: adaptive sampling
switch(u.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":x((s=e.getPointAtLength(g)).x,s.y,0)}// increment by sample value
g+=t}// add remaining segments not passed by sampling
for(n=0,o=c.length;n<o;++n)b(c[n]);return v},r._svgPathToAbsolute=function(e){for(var t,n,r,i,o,a,s=e.pathSegList,u=0,l=0,c=s.numberOfItems,f=0;f<c;++f){var p=s.getItem(f),d=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(d))"x"in p&&(u=p.x),"y"in p&&(l=p.y);else switch("x1"in p&&(r=u+p.x1),"x2"in p&&(o=u+p.x2),"y1"in p&&(i=l+p.y1),"y2"in p&&(a=l+p.y2),"x"in p&&(u+=p.x),"y"in p&&(l+=p.y),d){case"m":s.replaceItem(e.createSVGPathSegMovetoAbs(u,l),f);break;case"l":s.replaceItem(e.createSVGPathSegLinetoAbs(u,l),f);break;case"h":s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(u),f);break;case"v":s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(l),f);break;case"c":s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(u,l,r,i,o,a),f);break;case"s":s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(u,l,o,a),f);break;case"q":s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(u,l,r,i),f);break;case"t":s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(u,l),f);break;case"a":s.replaceItem(e.createSVGPathSegArcAbs(u,l,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),f);break;case"z":case"Z":u=t,l=n}("M"==d||"m"==d)&&(t=u,n=l)}};/***/},/* 30 *//***/function(e,t,n){/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/var r={};e.exports=r;var i=n(6);n(0),/**
     * See above, aliases for back compatibility only
     */r.create=i.create,r.add=i.add,r.remove=i.remove,r.clear=i.clear,r.addComposite=i.addComposite,r.addBody=i.addBody,r.addConstraint=i.addConstraint;/***/}]);const Q=e=>Math.round(100*e)/100,Z=(e,t)=>(e=Math.ceil(e),Math.floor(Math.random()*((t=Math.floor(t))-e+1))+e);var K=a("f1q41");const ee=/*@__PURE__*/r(J).Engine,et=/*@__PURE__*/r(J).Bodies,en=/*@__PURE__*/r(J).Composite;class er{#e=500;constructor(e,t,n,i=!1,o=!1){this.containerSelector=e,this.$matterJsContainer=/*@__PURE__*/r(l)(e),this.tagTexts=t,this.tagColors=n,this.engine=null,this.tags=[],this.debugPhysics=o,this.mouseDragging=i}init(){this.engine=ee.create({positionIterations:10,velocityIterations:10,constraintIterations:10,timing:{timeScale:.8}});let{containerWidth:e,containerHeight:t}=this.#t();this.debugPhysics&&(this.matterRender=/*@__PURE__*/r(J).Render.create({element:this.$matterJsContainer.get(0),engine:this.engine,options:{width:e,height:t,wireframes:!0}}),/*@__PURE__*/r(J).Render.run(this.matterRender))}#t(){let e=this.$matterJsContainer.width(),t=this.$matterJsContainer.height(),n=t+this.#e;return this.tags=this.tagTexts.map((n,r)=>{let i=Z(.2*e,.8*e),o=Z(.2*t-this.#e,.8*t),a=this.tagColors[r%this.tagColors.length],s=eo(i,o,n,a,this.$matterJsContainer,this.mouseDragging);return en.add(this.engine.world,s.body),s}),this.mouseDragging&&ea(this.engine,this.$matterJsContainer),en.add(this.engine.world,ei(e,t,n,this.#e)),{containerWidth:e,containerHeight:t}}removeObjects(){en.clear(this.engine.world,!1),this.tags.forEach(e=>e.elem.remove()),this.tags=[]}render(){this.tags.forEach(e=>e.render()),ee.update(this.engine,12),requestAnimationFrame(this.render.bind(this))}#n=/*@__PURE__*/r(K).throttle(()=>{this.removeObjects(),this.$matterJsContainer=/*@__PURE__*/r(l)(this.containerSelector),this.#t(),this.debugPhysics&&(this.matterRender.canvas.height=this.$matterJsContainer.height(),this.matterRender.canvas.width=this.$matterJsContainer.width())},1e3);onWindowResizing(){this.#n()}}const ei=(e,t,n,r)=>[et.rectangle(e/2,-r,e,1,{isStatic:!0}),et.rectangle(e/2,t,e,1,{isStatic:!0}),et.rectangle(0,(t-r)/2,1,n,{isStatic:!0}),et.rectangle(e,(t-r)/2,1,n,{isStatic:!0})// right
    ],eo=(e,t,n,i,o,a)=>{let s=Z(0,1e5);o.append(`<div id="tag${s}" class="interactive-tag tag-24">${n}</div>`);let u=/*@__PURE__*/r(l)("#tag"+s),c=u.height(),f=u.outerWidth();u.css({width:f+"px",padding:0,"background-color":i,cursor:a?"pointer":"default"});let p=Number.parseInt(u.css("border-radius").replace("px","")),d=2*Number.parseInt(u.css("border").replace(/px.*/,""));return{w:f+d,h:c+d,body:et.rectangle(e,t,f+d,c+d,{chamfer:{radius:p}}),elem:document.querySelector("#tag"+s),render(){let{x:e,y:t}=this.body.position,n=Q(e),r=Q(t),i=r-this.h/2;this.elem.style.top=`${i}px`;let o=n-this.w/2;this.elem.style.left=`${o}px`,this.elem.style.transform=`rotate(${this.body.angle}rad)`}}},ea=(e,t)=>{let n=/*@__PURE__*/r(J).MouseConstraint.create(e,{element:t.get(0)}),i=n.mouse;i.element.removeEventListener("mousewheel",i.mousewheel),i.element.removeEventListener("DOMMouseScroll",i.mousewheel),// mouse.element.removeEventListener('touchstart', mouse.mousedown);
// mouse.element.removeEventListener('touchmove', mouse.mousemove);
// mouse.element.removeEventListener('touchend', mouse.mouseup);
//
// mouse.element.addEventListener('touchstart', mouse.mousedown, {passive: true});
// mouse.element.addEventListener('touchmove', (e) => {
//   if (mouseConstraint.body) {
//     mouse.mousemove(e);
//   }
// });
// mouse.element.addEventListener('touchend', (e) => {
//   if (mouseConstraint.body) {
//     mouse.mouseup(e);
//   }
// });
en.add(e.world,[n])},es=["#B3DDC7","#F9E398","#EB7A53","#C1D8FE"],eu=["#D5B8F0","#C1D8FE","#F9E398","#EB7A53","#B3DDC7"],el=(()=>{let e=new er(".main-container-content .matter-js-container:visible",u.mainTags,es,!0,!1);return e.init(),e.render(),e})(),ec=u.cases.map((e,t)=>{let n=`.case-${t}-container .matter-js-container`,r=new er(n,e.tags,eu);return r.init(),r.render(),r});let ef=/*@__PURE__*/r(l)(window).width(),ep=/*@__PURE__*/r(l)(window).height();/*@__PURE__*/r(l)(window).resize(()=>{(ef!==/*@__PURE__*/r(l)(window).width()||ep!==/*@__PURE__*/r(l)(window).height())&&(ef=/*@__PURE__*/r(l)(window).width(),ep=/*@__PURE__*/r(l)(window).height(),el.onWindowResizing(),ec.forEach(e=>e.render()))}),window.matchMedia("(max-width: 600px)").matches||(0===window.scrollY?z.addClass("description-container-margin").removeClass("description-container-margin-scrolled"):z.addClass("description-container-margin-scrolled").removeClass("description-container-margin"));//# sourceMappingURL=index.7590c600.js.map

//# sourceMappingURL=index.7590c600.js.map
