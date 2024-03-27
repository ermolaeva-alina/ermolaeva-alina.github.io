var e=globalThis;function t(e){return e&&e.__esModule?e.default:e}var n={},r={},i=e.parcelRequireffc5;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequireffc5=i),(0,i.register)("f1q41",function(t,n){(function(){/** Error message constants. */var r,i="Expected a function",o="__lodash_hash_undefined__",a="__lodash_placeholder__",s=1/0,u=0/0,l=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],c="[object Arguments]",f="[object Array]",p="[object Boolean]",d="[object Date]",v="[object Error]",h="[object Function]",g="[object GeneratorFunction]",y="[object Map]",m="[object Number]",x="[object Object]",b="[object Promise]",_="[object RegExp]",w="[object Set]",S="[object String]",A="[object Symbol]",P="[object WeakMap]",C="[object ArrayBuffer]",k="[object DataView]",B="[object Float32Array]",M="[object Float64Array]",I="[object Int8Array]",R="[object Int16Array]",T="[object Int32Array]",E="[object Uint8Array]",j="[object Uint8ClampedArray]",O="[object Uint16Array]",D="[object Uint32Array]",L=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,z=/&(?:amp|lt|gt|quot|#39);/g,F=/[&<>"']/g,U=RegExp(z.source),q=RegExp(F.source),H=/<%-([\s\S]+?)%>/g,$=/<%([\s\S]+?)%>/g,N=/<%=([\s\S]+?)%>/g,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,Z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,Y=RegExp(Q.source),K=/^\s+/,J=/\s/,ee=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,et=/\{\n\/\* \[wrapped with (.+)\] \*/,en=/,? & /,er=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ei=/[()=,{}\[\]\/\s]/,eo=/\\(\\)?/g,ea=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,es=/\w*$/,eu=/^[-+]0x[0-9a-f]+$/i,el=/^0b[01]+$/i,ec=/^\[object .+?Constructor\]$/,ef=/^0o[0-7]+$/i,ep=/^(?:0|[1-9]\d*)$/,ed=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ev=/($^)/,eh=/['\n\r\u2028\u2029\\]/g,eg="\ud800-\udfff",ey="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",em="\\u2700-\\u27bf",ex="a-z\\xdf-\\xf6\\xf8-\\xff",eb="A-Z\\xc0-\\xd6\\xd8-\\xde",e_="\\ufe0e\\ufe0f",ew="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",eS="['’]",eA="["+ew+"]",eP="["+ey+"]",eC="["+ex+"]",ek="[^"+eg+ew+"\\d+"+em+ex+eb+"]",eB="\ud83c[\udffb-\udfff]",eM="[^"+eg+"]",eI="(?:\ud83c[\udde6-\uddff]){2}",eR="[\ud800-\udbff][\udc00-\udfff]",eT="["+eb+"]",eE="\\u200d",ej="(?:"+eC+"|"+ek+")",eO="(?:"+eS+"(?:d|ll|m|re|s|t|ve))?",eD="(?:"+eS+"(?:D|LL|M|RE|S|T|VE))?",eL="(?:"+eP+"|"+eB+")?",eV="["+e_+"]?",eW="(?:"+eE+"(?:"+[eM,eI,eR].join("|")+")"+eV+eL+")*",ez=eV+eL+eW,eF="(?:"+["["+em+"]",eI,eR].join("|")+")"+ez,eU="(?:"+[eM+eP+"?",eP,eI,eR,"["+eg+"]"].join("|")+")",eq=RegExp(eS,"g"),eH=RegExp(eP,"g"),e$=RegExp(eB+"(?="+eB+")|"+eU+ez,"g"),eN=RegExp([eT+"?"+eC+"+"+eO+"(?="+[eA,eT,"$"].join("|")+")","(?:"+eT+"|"+ek+")+"+eD+"(?="+[eA,eT+ej,"$"].join("|")+")",eT+"?"+ej+"+"+eO,eT+"+"+eD,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",eF].join("|"),"g"),eG=RegExp("["+eE+eg+ey+e_+"]"),eX=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,eZ=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],eQ=-1,eY={};eY[B]=eY[M]=eY[I]=eY[R]=eY[T]=eY[E]=eY[j]=eY[O]=eY[D]=!0,eY[c]=eY[f]=eY[C]=eY[p]=eY[k]=eY[d]=eY[v]=eY[h]=eY[y]=eY[m]=eY[x]=eY[_]=eY[w]=eY[S]=eY[P]=!1;/** Used to identify `toStringTag` values supported by `_.clone`. */var eK={};eK[c]=eK[f]=eK[C]=eK[k]=eK[p]=eK[d]=eK[B]=eK[M]=eK[I]=eK[R]=eK[T]=eK[y]=eK[m]=eK[x]=eK[_]=eK[w]=eK[S]=eK[A]=eK[E]=eK[j]=eK[O]=eK[D]=!0,eK[v]=eK[h]=eK[P]=!1;/** Used to escape characters for inclusion in compiled string literals. */var eJ={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},e0=parseFloat,e1=parseInt,e2="object"==typeof e&&e&&e.Object===Object&&e,e5="object"==typeof self&&self&&self.Object===Object&&self,e3=e2||e5||Function("return this")(),e9=n&&!n.nodeType&&n,e4=e9&&t&&!t.nodeType&&t,e6=e4&&e4.exports===e9,e8=e6&&e2.process,e7=function(){try{// Use `util.types` for Node.js 10+.
var e=e4&&e4.require&&e4.require("util").types;if(e)return e;// Legacy `process.binding('util')` for Node.js < 10.
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
   */function tf(e,t){return!!(null==e?0:e.length)&&t_(e,t,0)>-1}/**
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
   */function tv(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}/**
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
   */function th(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}/**
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
   */var tm=tP("length");/**
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
   */function t_(e,t,n){return t==t?/**
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
   */function tw(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return -1}/**
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
   */function tA(e,t){var n=null==e?0:e.length;return n?tB(e,t)/n:u}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */function tP(e){return function(t){return null==t?r:t[e]}}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */function tC(e){return function(t){return null==e?r:e[t]}}/**
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
   */function tk(e,t,n,r,i){return i(e,function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)}),n}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */function tB(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */function tM(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}/**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */function tI(e){return e?e.slice(0,tN(e)+1).replace(K,""):e}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */function tR(e){return function(t){return e(t)}}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */function tT(e,t){return td(t,function(t){return e[t]})}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */function tE(e,t){return e.has(t)}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */function tj(e,t){for(var n=-1,r=e.length;++n<r&&t_(t,e[n],0)>-1;);return n}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */function tO(e,t){for(var n=e.length;n--&&t_(t,e[n],0)>-1;);return n}/**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */var tD=tC({// Latin-1 Supplement block.
À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",// Latin Extended-A block.
Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),tL=tC({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */function tV(e){return"\\"+eJ[e]}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */function tW(e){return eG.test(e)}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */function tz(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}/**
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
   */function tU(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */function tq(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */function tH(e){return tW(e)?/**
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
   */function t$(e){return tW(e)?e.match(e$)||[]:e.split("")}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */function tN(e){for(var t=e.length;t--&&J.test(e.charAt(t)););return t}/**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */var tG=tC({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),tX=function e(t){/** Built-in constructor references. */var n,J,eg,ey,em=(t=null==t?e3:tX.defaults(e3.Object(),t,tX.pick(e3,eZ))).Array,ex=t.Date,eb=t.Error,e_=t.Function,ew=t.Math,eS=t.Object,eA=t.RegExp,String=t.String,TypeError=t.TypeError,eP=em.prototype,eC=e_.prototype,ek=eS.prototype,eB=t["__core-js_shared__"],eM=eC.toString,eI=ek.hasOwnProperty,eR=0,eT=(n=/[^.]+$/.exec(eB&&eB.keys&&eB.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",eE=ek.toString,ej=eM.call(eS),eO=e3._,eD=eA("^"+eM.call(eI).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),eL=e6?t.Buffer:r,eV=t.Symbol,Uint8Array=t.Uint8Array,eW=eL?eL.allocUnsafe:r,ez=tF(eS.getPrototypeOf,eS),eF=eS.create,eU=ek.propertyIsEnumerable,e$=eP.splice,eG=eV?eV.isConcatSpreadable:r,eJ=eV?eV.iterator:r,e2=eV?eV.toStringTag:r,e5=function(){try{var e=io(eS,"defineProperty");return e({},"",{}),e}catch(e){}}(),e9=t.clearTimeout!==e3.clearTimeout&&t.clearTimeout,e4=ex&&ex.now!==e3.Date.now&&ex.now,e8=t.setTimeout!==e3.setTimeout&&t.setTimeout,e7=ew.ceil,tm=ew.floor,tC=eS.getOwnPropertySymbols,tZ=eL?eL.isBuffer:r,tQ=t.isFinite,tY=eP.join,tK=tF(eS.keys,eS),tJ=ew.max,t0=ew.min,t1=ex.now,t2=t.parseInt,t5=ew.random,t3=eP.reverse,DataView=io(t,"DataView"),Map=io(t,"Map"),Promise=io(t,"Promise"),Set=io(t,"Set"),WeakMap=io(t,"WeakMap"),t9=io(eS,"create"),t4=WeakMap&&new WeakMap,t6={},t8=iR(DataView),t7=iR(Map),ne=iR(Promise),nt=iR(Set),nn=iR(WeakMap),nr=eV?eV.prototype:r,ni=nr?nr.valueOf:r,no=nr?nr.toString:r;/*------------------------------------------------------------------------*//**
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
     */function na(e){if(oV(e)&&!ok(e)&&!(e instanceof nc)){if(e instanceof nl)return e;if(eI.call(e,"__wrapped__"))return iT(e)}return new nl(e)}/**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */var ns=function(){function e(){}return function(t){if(!oL(t))return{};if(eF)return eF(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */function nu(){// No operation performed.
}/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */function nl(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}/*------------------------------------------------------------------------*//**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */function nc(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}/*------------------------------------------------------------------------*//**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function nf(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/*------------------------------------------------------------------------*//**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function np(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/*------------------------------------------------------------------------*//**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function nd(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/*------------------------------------------------------------------------*//**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */function nv(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new nd;++t<n;)this.add(e[t])}/*------------------------------------------------------------------------*//**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */function nh(e){var t=this.__data__=new np(e);this.size=t.size}/*------------------------------------------------------------------------*//**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */function ng(e,t){var n=ok(e),r=!n&&oC(e),i=!n&&!r&&oR(e),o=!n&&!r&&!i&&oN(e),a=n||r||i||o,s=a?tM(e.length,String):[],u=s.length;for(var l in e)(t||eI.call(e,l))&&!(a&&// Safari 9 has enumerable `arguments.length` in strict mode.
("length"==l||// Node.js 0.10 has enumerable non-index properties on buffers.
i&&("offset"==l||"parent"==l)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||// Skip index properties.
id(l,u)))&&s.push(l);return s}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */function ny(e){var t=e.length;return t?e[rt(0,t-1)]:r}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function nm(e,t,n){(n===r||oS(e[t],n))&&(n!==r||t in e)||nS(e,t,n)}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function nx(e,t,n){var i=e[t];eI.call(e,t)&&oS(i,n)&&(n!==r||t in e)||nS(e,t,n)}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */function nb(e,t){for(var n=e.length;n--;)if(oS(e[n][0],t))return n;return -1}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */function n_(e,t,n,r){return nI(e,function(e,i,o){t(r,e,n(e),o)}),r}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */function nw(e,t){return e&&rE(t,ai(t),e)}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */function nS(e,t,n){"__proto__"==t&&e5?e5(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */function nA(e,t){for(var n=-1,i=t.length,o=em(i),a=null==e;++n<i;)o[n]=a?r:o7(e,t[n]);return o}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */function nP(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}/**
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
     */function nC(e,t,n,i,o,a){var s,u=1&t,l=2&t,f=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!oL(e))return e;var v=ok(e);if(v){if(b=e.length,P=new e.constructor(b),b&&"string"==typeof e[0]&&eI.call(e,"index")&&(P.index=e.index,P.input=e.input),s=P,!u)return rT(e,s)}else{var b,P,L,V,W,z=iu(e),F=z==h||z==g;if(oR(e))return rC(e,u);if(z==x||z==c||F&&!o){if(s=l||F?{}:ic(e),!u)return l?(L=(W=s)&&rE(e,ao(e),W),rE(e,is(e),L)):(V=nw(s,e),rE(e,ia(e),V))}else{if(!eK[z])return o?e:{};s=/**
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
     */function(e,t,n){var r,i,o=e.constructor;switch(t){case C:return rk(e);case p:case d:return new o(+e);case k:return r=n?rk(e.buffer):e.buffer,new e.constructor(r,e.byteOffset,e.byteLength);case B:case M:case I:case R:case T:case E:case j:case O:case D:return rB(e,n);case y:return new o;case m:case S:return new o(e);case _:return(i=new e.constructor(e.source,es.exec(e))).lastIndex=e.lastIndex,i;case w:return new o;case A:return ni?eS(ni.call(e)):{}}}(e,z,u)}}// Check for circular references and return its corresponding clone.
a||(a=new nh);var U=a.get(e);if(U)return U;a.set(e,s),oq(e)?e.forEach(function(r){s.add(nC(r,t,n,r,e,a))}):oW(e)&&e.forEach(function(r,i){s.set(i,nC(r,t,n,i,e,a))});var q=f?l?r6:r4:l?ao:ai,H=v?r:q(e);return tu(H||e,function(r,i){H&&(r=e[i=r]),// Recursively populate clone (susceptible to call stack limits).
nx(s,i,nC(r,t,n,i,e,a))}),s}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */function nk(e,t,n){var i=n.length;if(null==e)return!i;for(e=eS(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */function nB(e,t,n){if("function"!=typeof e)throw new TypeError(i);return iA(function(){e.apply(r,n)},t)}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */function nM(e,t,n,r){var i=-1,o=tf,a=!0,s=e.length,u=[],l=t.length;if(!s)return u;n&&(t=td(t,tR(n))),r?(o=tp,a=!1):t.length>=200&&(o=tE,a=!1,t=new nv(t));e:for(;++i<s;){var c=e[i],f=null==n?c:n(c);if(c=r||0!==c?c:0,a&&f==f){for(var p=l;p--;)if(t[p]===f)continue e;u.push(c)}else o(t,f,r)||u.push(c)}return u}/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */na.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */escape:H,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */evaluate:$,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */interpolate:N,/**
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
         */_:na}},// Ensure wrappers are instances of `baseLodash`.
na.prototype=nu.prototype,na.prototype.constructor=na,nl.prototype=ns(nu.prototype),nl.prototype.constructor=nl,// Ensure `LazyWrapper` is an instance of `baseLodash`.
nc.prototype=ns(nu.prototype),nc.prototype.constructor=nc,// Add methods to `Hash`.
nf.prototype.clear=/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */function(){this.__data__=t9?t9(null):{},this.size=0},nf.prototype.delete=/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},nf.prototype.get=/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){var t=this.__data__;if(t9){var n=t[e];return n===o?r:n}return eI.call(t,e)?t[e]:r},nf.prototype.has=/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){var t=this.__data__;return t9?t[e]!==r:eI.call(t,e)},nf.prototype.set=/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=t9&&t===r?o:t,this},// Add methods to `ListCache`.
np.prototype.clear=/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */function(){this.__data__=[],this.size=0},np.prototype.delete=/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=this.__data__,n=nb(t,e);return!(n<0)&&(n==t.length-1?t.pop():e$.call(t,n,1),--this.size,!0)},np.prototype.get=/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){var t=this.__data__,n=nb(t,e);return n<0?r:t[n][1]},np.prototype.has=/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){return nb(this.__data__,e)>-1},np.prototype.set=/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */function(e,t){var n=this.__data__,r=nb(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},// Add methods to `MapCache`.
nd.prototype.clear=/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */function(){this.size=0,this.__data__={hash:new nf,map:new(Map||np),string:new nf}},nd.prototype.delete=/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=ir(this,e).delete(e);return this.size-=t?1:0,t},nd.prototype.get=/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){return ir(this,e).get(e)},nd.prototype.has=/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){return ir(this,e).has(e)},nd.prototype.set=/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */function(e,t){var n=ir(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},// Add methods to `SetCache`.
nv.prototype.add=nv.prototype.push=/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */function(e){return this.__data__.set(e,o),this},nv.prototype.has=/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */function(e){return this.__data__.has(e)},// Add methods to `Stack`.
nh.prototype.clear=/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */function(){this.__data__=new np,this.size=0},nh.prototype.delete=/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},nh.prototype.get=/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */function(e){return this.__data__.get(e)},nh.prototype.has=/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */function(e){return this.__data__.has(e)},nh.prototype.set=/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */function(e,t){var n=this.__data__;if(n instanceof np){var r=n.__data__;if(!Map||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new nd(r)}return n.set(e,t),this.size=n.size,this};/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */var nI=rD(nV),nR=rD(nW,!0);/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */function nT(e,t){var n=!0;return nI(e,function(e,r,i){return n=!!t(e,r,i)}),n}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */function nE(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(u===r?s==s&&!o$(s):n(s,u)))var u=s,l=a}return l}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */function nj(e,t){var n=[];return nI(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */function nO(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=ip),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?nO(s,t-1,n,r,i):tv(i,s):r||(i[i.length]=s)}return i}/**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */var nD=rL(),nL=rL(!0);/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function nV(e,t){return e&&nD(e,t,ai)}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */function nW(e,t){return e&&nL(e,t,ai)}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */function nz(e,t){return tc(t,function(t){return oj(e[t])})}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */function nF(e,t){t=rS(t,e);for(var n=0,i=t.length;null!=e&&n<i;)e=e[iI(t[n++])];return n&&n==i?e:r}/**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */function nU(e,t,n){var r=t(e);return ok(e)?r:tv(r,n(e))}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */function nq(e){return null==e?e===r?"[object Undefined]":"[object Null]":e2&&e2 in eS(e)?/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */function(e){var t=eI.call(e,e2),n=e[e2];try{e[e2]=r;var i=!0}catch(e){}var o=eE.call(e);return i&&(t?e[e2]=n:delete e[e2]),o}(e):eE.call(e)}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */function nH(e,t){return e>t}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function n$(e,t){return null!=e&&eI.call(e,t)}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */function nN(e,t){return null!=e&&t in eS(e)}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */function nG(e,t,n){for(var i=n?tp:tf,o=e[0].length,a=e.length,s=a,u=em(a),l=1/0,c=[];s--;){var f=e[s];s&&t&&(f=td(f,tR(t))),l=t0(f.length,l),u[s]=!n&&(t||o>=120&&f.length>=120)?new nv(s&&f):r}f=e[0];var p=-1,d=u[0];e:for(;++p<o&&c.length<l;){var v=f[p],h=t?t(v):v;if(v=n||0!==v?v:0,!(d?tE(d,h):i(c,h,n))){for(s=a;--s;){var g=u[s];if(!(g?tE(g,h):i(e[s],h,n)))continue e}d&&d.push(h),c.push(v)}}return c}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */function nX(e,t,n){t=rS(t,e);var i=null==(e=i_(e,t))?e:e[iI(iq(t))];return null==i?r:ta(i,e,n)}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */function nZ(e){return oV(e)&&nq(e)==c}/**
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
     */function nQ(e,t,n,i,o){return e===t||(null!=e&&null!=t&&(oV(e)||oV(t))?/**
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
     */function(e,t,n,i,o,a){var s=ok(e),u=ok(t),l=s?f:iu(e),h=u?f:iu(t);l=l==c?x:l,h=h==c?x:h;var g=l==x,b=h==x,P=l==h;if(P&&oR(e)){if(!oR(t))return!1;s=!0,g=!1}if(P&&!g)return a||(a=new nh),s||oN(e)?r3(e,t,n,i,o,a):/**
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
     */function(e,t,n,r,i,o,a){switch(n){case k:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case C:if(e.byteLength!=t.byteLength||!o(new Uint8Array(e),new Uint8Array(t)))break;return!0;case p:case d:case m:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return oS(+e,+t);case v:return e.name==t.name&&e.message==t.message;case _:case S:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case y:var s=tz;case w:var u=1&r;if(s||(s=tq),e.size!=t.size&&!u)break;// Assume cyclic values are equal.
var l=a.get(e);if(l)return l==t;r|=2,// Recursively compare objects (susceptible to call stack limits).
a.set(e,t);var c=r3(s(e),s(t),r,i,o,a);return a.delete(e),c;case A:if(ni)return ni.call(e)==ni.call(t)}return!1}(e,t,l,n,i,o,a);if(!(1&n)){var B=g&&eI.call(e,"__wrapped__"),M=b&&eI.call(t,"__wrapped__");if(B||M){var I=B?e.value():e,R=M?t.value():t;return a||(a=new nh),o(I,R,n,i,a)}}return!!P&&(a||(a=new nh),/**
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
     */function(e,t,n,i,o,a){var s=1&n,u=r4(e),l=u.length;if(l!=r4(t).length&&!s)return!1;for(var c=l;c--;){var f=u[c];if(!(s?f in t:eI.call(t,f)))return!1}// Check that cyclic values are equal.
var p=a.get(e),d=a.get(t);if(p&&d)return p==t&&d==e;var v=!0;a.set(e,t),a.set(t,e);for(var h=s;++c<l;){var g=e[f=u[c]],y=t[f];if(i)var m=s?i(y,g,f,t,e,a):i(g,y,f,e,t,a);// Recursively compare objects (susceptible to call stack limits).
if(!(m===r?g===y||o(g,y,n,i,a):m)){v=!1;break}h||(h="constructor"==f)}if(v&&!h){var x=e.constructor,b=t.constructor;// Non `Object` object instances with different constructors are not equal.
x!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof x&&x instanceof x&&"function"==typeof b&&b instanceof b)&&(v=!1)}return a.delete(e),a.delete(t),v}(e,t,n,i,o,a))}(e,t,n,i,nQ,o):e!=e&&t!=t)}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */function nY(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=eS(e);o--;){var u=n[o];if(s&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){var l=(u=n[o])[0],c=e[l],f=u[1];if(s&&u[2]){if(c===r&&!(l in e))return!1}else{var p=new nh;if(i)var d=i(c,f,l,e,t,p);if(!(d===r?nQ(f,c,3,i,p):d))return!1}}return!0}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */function nK(e){return!(!oL(e)||eT&&eT in e)&&(oj(e)?eD:ec).test(iR(e))}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */function nJ(e){return(// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
"function"==typeof e?e:null==e?aI:"object"==typeof e?ok(e)?n3(e[0],e[1]):n5(e):aW(e))}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function n0(e){if(!im(e))return tK(e);var t=[];for(var n in eS(e))eI.call(e,n)&&"constructor"!=n&&t.push(n);return t}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */function n1(e,t){return e<t}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */function n2(e,t){var n=-1,r=oM(e)?em(e.length):[];return nI(e,function(e,i,o){r[++n]=t(e,i,o)}),r}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */function n5(e){var t=ii(e);return 1==t.length&&t[0][2]?ix(t[0][0],t[0][1]):function(n){return n===e||nY(n,e,t)}}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function n3(e,t){var n;return ih(e)&&(n=t)==n&&!oL(n)?ix(iI(e),t):function(n){var i=o7(n,e);return i===r&&i===t?ae(n,e):nQ(t,i,3)}}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */function n9(e,t,n,i,o){e!==t&&nD(t,function(a,s){if(o||(o=new nh),oL(a))/**
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
     */(function(e,t,n,i,o,a,s){var u=iw(e,n),l=iw(t,n),c=s.get(l);if(c){nm(e,n,c);return}var f=a?a(u,l,n+"",e,t,s):r,p=f===r;if(p){var d=ok(l),v=!d&&oR(l),h=!d&&!v&&oN(l);f=l,d||v||h?ok(u)?f=u:oI(u)?f=rT(u):v?(p=!1,f=rC(l,!0)):h?(p=!1,f=rB(l,!0)):f=[]:oF(l)||oC(l)?(f=u,oC(u)?f=o0(u):(!oL(u)||oj(u))&&(f=ic(l))):p=!1}p&&(// Recursively merge objects and arrays (susceptible to call stack limits).
s.set(l,f),o(f,l,i,a,s),s.delete(l)),nm(e,n,f)})(e,t,s,n,n9,i,o);else{var u=i?i(iw(e,s),a,s+"",e,t,o):r;u===r&&(u=a),nm(e,s,u)}},ao)}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */function n4(e,t){var n=e.length;if(n)return id(t+=t<0?n:0,n)?e[t]:r}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */function n6(e,t,n){t=t.length?td(t,function(e){return ok(e)?function(t){return nF(t,1===e.length?e[0]:e)}:e}):[aI];var r=-1;return t=td(t,tR(it())),/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(n2(e,function(e,n,i){return{criteria:td(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return(/**
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
     */function n8(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=nF(e,a);n(s,a)&&ri(o,rS(a,e),s)}return o}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */function n7(e,t,n,r){var i=r?tw:t_,o=-1,a=t.length,s=e;for(e===t&&(t=rT(t)),n&&(s=td(e,tR(n)));++o<a;)for(var u=0,l=t[o],c=n?n(l):l;(u=i(s,c,u,r))>-1;)s!==e&&e$.call(s,u,1),e$.call(e,u,1);return e}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */function re(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;id(i)?e$.call(e,i,1):rh(e,i)}}return e}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */function rt(e,t){return e+tm(t5()*(t-e+1))}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */function rn(e,t){var n="";if(!e||t<1||t>9007199254740991)return n;// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do t%2&&(n+=e),(t=tm(t/2))&&(e+=e);while(t)return n}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */function rr(e,t){return iP(ib(e,t,aI),e+"")}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function ri(e,t,n,i){if(!oL(e))return e;t=rS(t,e);for(var o=-1,a=t.length,s=a-1,u=e;null!=u&&++o<a;){var l=iI(t[o]),c=n;if("__proto__"===l||"constructor"===l||"prototype"===l)break;if(o!=s){var f=u[l];(c=i?i(f,l,u):r)===r&&(c=oL(f)?f:id(t[o+1])?[]:{})}nx(u,l,c),u=u[l]}return e}/**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */var ro=t4?function(e,t){return t4.set(e,t),e}:aI,ra=e5?function(e,t){return e5(e,"toString",{configurable:!0,enumerable:!1,value:ak(t),writable:!0})}:aI;/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */function rs(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=em(i);++r<i;)o[r]=e[r+t];return o}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */function ru(e,t){var n;return nI(e,function(e,r,i){return!(n=t(e,r,i))}),!!n}/**
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
     */function rl(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!o$(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return rc(e,t,aI,n)}/**
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
     */function rc(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,u=null===t,l=o$(t),c=t===r;o<a;){var f=tm((o+a)/2),p=n(e[f]),d=p!==r,v=null===p,h=p==p,g=o$(p);if(s)var y=i||h;else y=c?h&&(i||d):u?h&&d&&(i||!v):l?h&&d&&!v&&(i||!g):!v&&!g&&(i?p<=t:p<t);y?o=f+1:a=f}return t0(a,4294967294)}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function rf(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!oS(s,u)){var u=s;o[i++]=0===a?0:a}}return o}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */function rp(e){return"number"==typeof e?e:o$(e)?u:+e}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */function rd(e){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(ok(e))return td(e,rd)+"";if(o$(e))return no?no.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */function rv(e,t,n){var r=-1,i=tf,o=e.length,a=!0,s=[],u=s;if(n)a=!1,i=tp;else if(o>=200){var l=t?null:rK(e);if(l)return tq(l);a=!1,i=tE,u=new nv}else u=t?[]:s;e:for(;++r<o;){var c=e[r],f=t?t(c):c;if(c=n||0!==c?c:0,a&&f==f){for(var p=u.length;p--;)if(u[p]===f)continue e;t&&u.push(f),s.push(c)}else i(u,f,n)||(u!==s&&u.push(f),s.push(c))}return s}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */function rh(e,t){return t=rS(t,e),null==(e=i_(e,t))||delete e[iI(iq(t))]}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */function rg(e,t,n,r){return ri(e,t,n(nF(e,t)),r)}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */function ry(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?rs(e,r?0:o,r?o+1:i):rs(e,r?o+1:0,r?i:o)}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */function rm(e,t){var n=e;return n instanceof nc&&(n=n.value()),th(t,function(e,t){return t.func.apply(t.thisArg,tv([e],t.args))},n)}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */function rx(e,t,n){var r=e.length;if(r<2)return r?rv(e[0]):[];for(var i=-1,o=em(r);++i<r;)for(var a=e[i],s=-1;++s<r;)s!=i&&(o[i]=nM(o[i]||a,e[s],t,n));return rv(nO(o,1),t,n)}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */function rb(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var u=i<a?t[i]:r;n(s,e[i],u)}return s}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */function r_(e){return oI(e)?e:[]}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */function rw(e){return"function"==typeof e?e:aI}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */function rS(e,t){return ok(e)?e:ih(e,t)?[e]:iM(o1(e))}/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */function rA(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:rs(e,t,n)}/**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */var rP=e9||function(e){return e3.clearTimeout(e)};/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */function rC(e,t){if(t)return e.slice();var n=e.length,r=eW?eW(n):new e.constructor(n);return e.copy(r),r}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */function rk(e){var t=new e.constructor(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */function rB(e,t){var n=t?rk(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */function rM(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=o$(e),s=t!==r,u=null===t,l=t==t,c=o$(t);if(!u&&!c&&!a&&e>t||a&&s&&l&&!u&&!c||i&&s&&l||!n&&l||!o)return 1;if(!i&&!a&&!c&&e<t||c&&n&&o&&!i&&!a||u&&n&&o||!s&&o||!l)return -1}return 0}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function rI(e,t,n,r){for(var i=-1,o=e.length,a=n.length,s=-1,u=t.length,l=tJ(o-a,0),c=em(u+l),f=!r;++s<u;)c[s]=t[s];for(;++i<a;)(f||i<o)&&(c[n[i]]=e[i]);for(;l--;)c[s++]=e[i++];return c}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */function rR(e,t,n,r){for(var i=-1,o=e.length,a=-1,s=n.length,u=-1,l=t.length,c=tJ(o-s,0),f=em(c+l),p=!r;++i<c;)f[i]=e[i];for(var d=i;++u<l;)f[d+u]=t[u];for(;++a<s;)(p||i<o)&&(f[d+n[a]]=e[i++]);return f}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */function rT(e,t){var n=-1,r=e.length;for(t||(t=em(r));++n<r;)t[n]=e[n];return t}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */function rE(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var u=t[a],l=i?i(n[u],e[u],u,n,e):r;l===r&&(l=e[u]),o?nS(n,u,l):nx(n,u,l)}return n}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */function rj(e,t){return function(n,r){var i=ok(n)?ts:n_,o=t?t():{};return i(n,e,it(r,2),o)}}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */function rO(e){return rr(function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&iv(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=eS(t);++i<o;){var u=n[i];u&&e(t,u,i,a)}return t})}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function rD(e,t){return function(n,r){if(null==n)return n;if(!oM(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=eS(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */function rL(e){return function(t,n,r){for(var i=-1,o=eS(t),a=r(t),s=a.length;s--;){var u=a[e?s:++i];if(!1===n(o[u],u,o))break}return t}}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */function rV(e){return function(t){var n=tW(t=o1(t))?t$(t):r,i=n?n[0]:t.charAt(0),o=n?rA(n,1).join(""):t.slice(1);return i[e]()+o}}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */function rW(e){return function(t){return th(aA(ag(t).replace(eq,"")),e,"")}}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */function rz(e){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=ns(e.prototype),r=e.apply(n,t);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return oL(r)?r:n}}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */function rF(e){return function(t,n,i){var o=eS(t);if(!oM(t)){var a=it(n,3);t=ai(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */function rU(e){return r9(function(t){var n=t.length,o=n,a=nl.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new TypeError(i);if(a&&!u&&"wrapper"==r7(s))var u=new nl([],!0)}for(o=u?o:n;++o<n;){var l=r7(s=t[o]),c="wrapper"==l?r8(s):r;u=c&&ig(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?u[r7(c[0])].apply(u,c[3]):1==s.length&&ig(s)?u[l]():u.thru(s)}return function(){var e=arguments,r=e[0];if(u&&1==e.length&&ok(r))return u.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}})}/**
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
     */function rq(e,t,n,i,o,a,s,u,l,c){var f=128&t,p=1&t,d=2&t,v=24&t,h=512&t,g=d?r:rz(e);return function y(){for(var m=arguments.length,x=em(m),b=m;b--;)x[b]=arguments[b];if(v)var _=ie(y),w=/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(x,_);if(i&&(x=rI(x,i,o,v)),a&&(x=rR(x,a,s,v)),m-=w,v&&m<c){var S=tU(x,_);return rQ(e,t,rq,y.placeholder,n,x,S,u,l,c-m)}var A=p?n:this,P=d?A[e]:e;return m=x.length,u?x=/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */function(e,t){for(var n=e.length,i=t0(t.length,n),o=rT(e);i--;){var a=t[i];e[i]=id(a,n)?o[a]:r}return e}(x,u):h&&m>1&&x.reverse(),f&&l<m&&(x.length=l),this&&this!==e3&&this instanceof y&&(P=g||rz(P)),P.apply(A,x)}}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */function rH(e,t){return function(n,r){var i,o;return i=t(r),o={},nV(n,function(t,n,r){e(o,i(t),n,r)}),o}}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */function r$(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=rd(n),i=rd(i)):(n=rp(n),i=rp(i)),o=e(n,i)}return o}}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */function rN(e){return r9(function(t){return t=td(t,tR(it())),rr(function(n){var r=this;return e(t,function(e){return ta(e,r,n)})})})}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */function rG(e,t){var n=(t=t===r?" ":rd(t)).length;if(n<2)return n?rn(t,e):t;var i=rn(t,e7(e/tH(t)));return tW(t)?rA(t$(i),0,e).join(""):i.slice(0,e)}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */function rX(e){return function(t,n,i){return i&&"number"!=typeof i&&iv(t,n,i)&&(n=i=r),// Ensure the sign of `-0` is preserved.
t=oQ(t),n===r?(n=t,t=0):n=oQ(n),i=i===r?t<n?1:-1:oQ(i),/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */function(e,t,n,r){for(var i=-1,o=tJ(e7((t-e)/(n||1)),0),a=em(o);o--;)a[r?o:++i]=e,e+=n;return a}(t,n,i,e)}}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */function rZ(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=oJ(t),n=oJ(n)),e(t,n)}}/**
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
     */function rQ(e,t,n,i,o,a,s,u,l,c){var f=8&t,p=f?s:r,d=f?r:s,v=f?a:r,h=f?r:a;t|=f?32:64,4&(t&=~(f?64:32))||(t&=-4);var g=[e,t,o,v,p,h,d,u,l,c],y=n.apply(r,g);return ig(e)&&iS(y,g),y.placeholder=i,iC(y,e,t)}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */function rY(e){var t=ew[e];return function(e,n){if(e=oJ(e),(n=null==n?0:t0(oY(n),292))&&tQ(e)){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var r=(o1(e)+"e").split("e");return+((r=(o1(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}/**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */var rK=Set&&1/tq(new Set([,-0]))[1]==s?function(e){return new Set(e)}:aO;/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */function rJ(e){return function(t){var n,r,i=iu(t);return i==y?tz(t):i==w?(n=-1,r=Array(t.size),t.forEach(function(e){r[++n]=[e,e]}),r):td(e(t),function(e){return[e,t[e]]})}}/**
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
     */function r0(e,t,n,o,s,u,l,c){var f=2&t;if(!f&&"function"!=typeof e)throw new TypeError(i);var p=o?o.length:0;if(p||(t&=-97,o=s=r),l=l===r?l:tJ(oY(l),0),c=c===r?c:oY(c),p-=s?s.length:0,64&t){var d=o,v=s;o=s=r}var h=f?r:r8(e),g=[e,t,n,o,s,d,v,u,l,c];if(h&&/**
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
var u=t[3];if(u){var l=e[3];e[3]=l?rI(l,u,t[4]):u,e[4]=l?tU(e[3],a):t[4]}// Compose partial right arguments.
(u=t[5])&&(l=e[5],e[5]=l?rR(l,u,t[6]):u,e[6]=l?tU(e[5],a):t[6]),// Use source `argPos` if available.
(u=t[7])&&(e[7]=u),128&r&&(e[8]=null==e[8]?t[8]:t0(e[8],t[8])),null==e[9]&&(e[9]=t[9]),// Use source `func` and merge bitmasks.
e[0]=t[0],e[1]=i}}(g,h),e=g[0],t=g[1],n=g[2],o=g[3],s=g[4],(c=g[9]=g[9]===r?f?0:e.length:tJ(g[9]-p,0))||!(24&t)||(t&=-25),t&&1!=t)8==t||16==t?(y=e,m=t,x=c,b=rz(y),T=function e(){for(var t=arguments.length,n=em(t),i=t,o=ie(e);i--;)n[i]=arguments[i];var a=t<3&&n[0]!==o&&n[t-1]!==o?[]:tU(n,o);return(t-=a.length)<x?rQ(y,m,rq,e.placeholder,r,n,a,r,r,x-t):ta(this&&this!==e3&&this instanceof e?b:y,this,n)}):32!=t&&33!=t||s.length?T=rq.apply(r,g):(_=e,w=t,S=n,A=o,P=1&w,C=rz(_),T=function e(){for(var t=-1,n=arguments.length,r=-1,i=A.length,o=em(i+n),a=this&&this!==e3&&this instanceof e?C:_;++r<i;)o[r]=A[r];for(;n--;)o[r++]=arguments[++t];return ta(a,P?S:this,o)});else var y,m,x,b,_,w,S,A,P,C,k,B,M,I,R,T=(k=e,B=t,M=n,I=1&B,R=rz(k),function e(){return(this&&this!==e3&&this instanceof e?R:k).apply(I?M:this,arguments)});return iC((h?ro:iS)(T,g),e,t)}/**
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
     */function r1(e,t,n,i){return e===r||oS(e,ek[n])&&!eI.call(i,n)?t:e}/**
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
     */function r2(e,t,n,i,o,a){return oL(e)&&oL(t)&&(// Recursively merge objects and arrays (susceptible to call stack limits).
a.set(t,e),n9(e,t,r,r2,a),a.delete(t)),e}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */function r5(e){return oF(e)?r:e}/**
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
     */function r3(e,t,n,i,o,a){var s=1&n,u=e.length,l=t.length;if(u!=l&&!(s&&l>u))return!1;// Check that cyclic values are equal.
var c=a.get(e),f=a.get(t);if(c&&f)return c==t&&f==e;var p=-1,d=!0,v=2&n?new nv:r;// Ignore non-index properties.
for(a.set(e,t),a.set(t,e);++p<u;){var h=e[p],g=t[p];if(i)var y=s?i(g,h,p,t,e,a):i(h,g,p,e,t,a);if(y!==r){if(y)continue;d=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(v){if(!ty(t,function(e,t){if(!tE(v,t)&&(h===e||o(h,e,n,i,a)))return v.push(t)})){d=!1;break}}else if(!(h===g||o(h,g,n,i,a))){d=!1;break}}return a.delete(e),a.delete(t),d}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */function r9(e){return iP(ib(e,r,iV),e+"")}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function r4(e){return nU(e,ai,ia)}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */function r6(e){return nU(e,ao,is)}/**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */var r8=t4?function(e){return t4.get(e)}:aO;/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */function r7(e){for(var t=e.name+"",n=t6[t],r=eI.call(t6,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */function ie(e){return(eI.call(na,"placeholder")?na:e).placeholder}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */function it(){var e=na.iteratee||aR;return e=e===aR?nJ:e,arguments.length?e(arguments[0],arguments[1]):e}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */function ir(e,t){var n,r=e.__data__;return("string"==(n=typeof t)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t)?r["string"==typeof t?"string":"hash"]:r.map}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */function ii(e){for(var t=ai(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,i==i&&!oL(i)]}return t}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */function io(e,t){var n=null==e?r:e[t];return nK(n)?n:r}/**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */var ia=tC?function(e){return null==e?[]:tc(tC(e=eS(e)),function(t){return eU.call(e,t)})}:aU,is=tC?function(e){for(var t=[];e;)tv(t,ia(e)),e=ez(e);return t}:aU,iu=nq;/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */function il(e,t,n){t=rS(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var a=iI(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&oD(i)&&id(a,i)&&(ok(e)||oC(e))}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */function ic(e){return"function"!=typeof e.constructor||im(e)?{}:ns(ez(e))}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */function ip(e){return ok(e)||oC(e)||!!(eG&&e&&e[eG])}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */function id(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&ep.test(e))&&e>-1&&e%1==0&&e<t}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */function iv(e,t,n){if(!oL(n))return!1;var r=typeof t;return("number"==r?!!(oM(n)&&id(t,n.length)):"string"==r&&t in n)&&oS(n[t],e)}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */function ih(e,t){if(ok(e))return!1;var n=typeof e;return!!("number"==n||"symbol"==n||"boolean"==n||null==e||o$(e))||X.test(e)||!G.test(e)||null!=t&&e in eS(t)}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */function ig(e){var t=r7(e),n=na[t];if("function"!=typeof n||!(t in nc.prototype))return!1;if(e===n)return!0;var r=r8(n);return!!r&&e===r[0]}(DataView&&iu(new DataView(new ArrayBuffer(1)))!=k||Map&&iu(new Map)!=y||Promise&&iu(Promise.resolve())!=b||Set&&iu(new Set)!=w||WeakMap&&iu(new WeakMap)!=P)&&(iu=function(e){var t=nq(e),n=t==x?e.constructor:r,i=n?iR(n):"";if(i)switch(i){case t8:return k;case t7:return y;case ne:return b;case nt:return w;case nn:return P}return t});/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */var iy=eB?oj:aq;/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */function im(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ek)}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */function ix(e,t){return function(n){return null!=n&&n[e]===t&&(t!==r||e in eS(n))}}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */function ib(e,t,n){return t=tJ(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=tJ(r.length-t,0),a=em(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=em(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),ta(e,this,s)}}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */function i_(e,t){return t.length<2?e:nF(e,rs(t,0,-1))}/**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */function iw(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}/**
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
     */var iS=ik(ro),iA=e8||function(e,t){return e3.setTimeout(e,t)},iP=ik(ra);/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */function iC(e,t,n){var r,i,o=t+"";return iP(e,/**
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
     */function ik(e){var t=0,n=0;return function(){var i=t1(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */function iB(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=rt(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}/**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */var iM=(eg=(J=oy(function(e){var t=[];return 46/* . */===e.charCodeAt(0)&&t.push(""),e.replace(Z,function(e,n,r,i){t.push(r?i.replace(eo,"$1"):n||e)}),t},function(e){return 500===eg.size&&eg.clear(),e})).cache,J);/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */function iI(e){if("string"==typeof e||o$(e))return e;var t=e+"";return"0"==t&&1/e==-s?"-0":t}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */function iR(e){if(null!=e){try{return eM.call(e)}catch(e){}try{return e+""}catch(e){}}return""}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */function iT(e){if(e instanceof nc)return e.clone();var t=new nl(e.__wrapped__,e.__chain__);return t.__actions__=rT(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}/**
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
     */var iE=rr(function(e,t){return oI(e)?nM(e,nO(t,1,oI,!0)):[]}),ij=rr(function(e,t){var n=iq(t);return oI(n)&&(n=r),oI(e)?nM(e,nO(t,1,oI,!0),it(n,2)):[]}),iO=rr(function(e,t){var n=iq(t);return oI(n)&&(n=r),oI(e)?nM(e,nO(t,1,oI,!0),r,n):[]});/**
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
     */function iD(e,t,n){var r=null==e?0:e.length;if(!r)return -1;var i=null==n?0:oY(n);return i<0&&(i=tJ(r+i,0)),tb(e,it(t,3),i)}/**
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
     */function iL(e,t,n){var i=null==e?0:e.length;if(!i)return -1;var o=i-1;return n!==r&&(o=oY(n),o=n<0?tJ(i+o,0):t0(o,i-1)),tb(e,it(t,3),o,!0)}/**
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
     */function iV(e){return(null==e?0:e.length)?nO(e,1):[]}/**
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
     */function iW(e){return e&&e.length?e[0]:r}/**
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
     */var iz=rr(function(e){var t=td(e,r_);return t.length&&t[0]===e[0]?nG(t):[]}),iF=rr(function(e){var t=iq(e),n=td(e,r_);return t===iq(n)?t=r:n.pop(),n.length&&n[0]===e[0]?nG(n,it(t,2)):[]}),iU=rr(function(e){var t=iq(e),n=td(e,r_);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?nG(n,r,t):[]});/**
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
     */function iq(e){var t=null==e?0:e.length;return t?e[t-1]:r}/**
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
     */var iH=rr(i$);/**
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
     */function i$(e,t){return e&&e.length&&t&&t.length?n7(e,t):e}/**
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
     */var iN=r9(function(e,t){var n=null==e?0:e.length,r=nA(e,t);return re(e,td(t,function(e){return id(e,n)?+e:e}).sort(rM)),r});/**
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
     */function iG(e){return null==e?e:t3.call(e)}/**
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
     */var iX=rr(function(e){return rv(nO(e,1,oI,!0))}),iZ=rr(function(e){var t=iq(e);return oI(t)&&(t=r),rv(nO(e,1,oI,!0),it(t,2))}),iQ=rr(function(e){var t=iq(e);return t="function"==typeof t?t:r,rv(nO(e,1,oI,!0),r,t)});/**
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
     */function iY(e){if(!(e&&e.length))return[];var t=0;return e=tc(e,function(e){if(oI(e))return t=tJ(e.length,t),!0}),tM(t,function(t){return td(e,tP(t))})}/**
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
     */function iK(e,t){if(!(e&&e.length))return[];var n=iY(e);return null==t?n:td(n,function(e){return ta(t,r,e)})}/**
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
     */var iJ=rr(function(e,t){return oI(e)?nM(e,t):[]}),i0=rr(function(e){return rx(tc(e,oI))}),i1=rr(function(e){var t=iq(e);return oI(t)&&(t=r),rx(tc(e,oI),it(t,2))}),i2=rr(function(e){var t=iq(e);return t="function"==typeof t?t:r,rx(tc(e,oI),r,t)}),i5=rr(iY),i3=rr(function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,iK(e,n)});/*------------------------------------------------------------------------*//**
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
     */function i9(e){var t=na(e);return t.__chain__=!0,t}/**
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
     */function i4(e,t){return t(e)}/**
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
     */var i6=r9(function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return nA(t,e)};return!(t>1)&&!this.__actions__.length&&i instanceof nc&&id(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:i4,args:[o],thisArg:r}),new nl(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(r),e})):this.thru(o)}),i8=rj(function(e,t,n){eI.call(e,n)?++e[n]:nS(e,n,1)}),i7=rF(iD),oe=rF(iL);/**
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
     */function ot(e,t){return(ok(e)?tu:nI)(e,it(t,3))}/**
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
     */function on(e,t){return(ok(e)?/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */function(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}:nR)(e,it(t,3))}/**
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
     */var or=rj(function(e,t,n){eI.call(e,n)?e[n].push(t):nS(e,n,[t])}),oi=rr(function(e,t,n){var r=-1,i="function"==typeof t,o=oM(e)?em(e.length):[];return nI(e,function(e){o[++r]=i?ta(t,e,n):nX(e,t,n)}),o}),oo=rj(function(e,t,n){nS(e,n,t)});/**
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
     */function oa(e,t){return(ok(e)?td:n2)(e,it(t,3))}/**
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
     */var os=rj(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),ou=rr(function(e,t){if(null==e)return[];var n=t.length;return n>1&&iv(e,t[0],t[1])?t=[]:n>2&&iv(t[0],t[1],t[2])&&(t=[t[0]]),n6(e,nO(t,1),[])}),ol=e4||function(){return e3.Date.now()};/**
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
     */function oc(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,r0(e,128,r,r,r,r,t)}/**
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
     */function of(e,t){var n;if("function"!=typeof t)throw new TypeError(i);return e=oY(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=r),n}}/**
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
     */var op=rr(function(e,t,n){var r=1;if(n.length){var i=tU(n,ie(op));r|=32}return r0(e,r,t,n,i)}),od=rr(function(e,t,n){var r=3;if(n.length){var i=tU(n,ie(od));r|=32}return r0(t,r,e,n,i)});/**
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
     */function ov(e,t,n){var o,a,s,u,l,c,f=0,p=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function h(t){var n=o,i=a;return o=a=r,f=t,u=e.apply(i,n)}function g(e){var n=e-c,i=e-f;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return c===r||n>=t||n<0||d&&i>=s}function y(){var e,n,r,i=ol();if(g(i))return m(i);// Restart the timer.
l=iA(y,(e=i-c,n=i-f,r=t-e,d?t0(r,s-n):r))}function m(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(l=r,v&&o)?h(e):(o=a=r,u))}function x(){var e,n=ol(),i=g(n);if(o=arguments,a=this,c=n,i){if(l===r)return(// Reset any `maxWait` timer.
f=e=c,// Start the timer for the trailing edge.
l=iA(y,t),p?h(e):u);if(d)return(// Handle invocations in a tight loop.
rP(l),l=iA(y,t),h(c))}return l===r&&(l=iA(y,t)),u}return t=oJ(t)||0,oL(n)&&(p=!!n.leading,s=(d="maxWait"in n)?tJ(oJ(n.maxWait)||0,t):s,v="trailing"in n?!!n.trailing:v),x.cancel=function(){l!==r&&rP(l),f=0,o=c=a=l=r},x.flush=function(){return l===r?u:m(ol())},x}/**
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
     */var oh=rr(function(e,t){return nB(e,1,t)}),og=rr(function(e,t,n){return nB(e,oJ(t)||0,n)});/**
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
     */function oy(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(oy.Cache||nd),n}/**
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
     */function om(e){if("function"!=typeof e)throw new TypeError(i);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}// Expose `MapCache`.
oy.Cache=nd;/**
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
     */var ox=rr(function(e,t){var n=(t=1==t.length&&ok(t[0])?td(t[0],tR(it())):td(nO(t,1),tR(it()))).length;return rr(function(r){for(var i=-1,o=t0(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return ta(e,this,r)})}),ob=rr(function(e,t){var n=tU(t,ie(ob));return r0(e,32,r,t,n)}),o_=rr(function(e,t){var n=tU(t,ie(o_));return r0(e,64,r,t,n)}),ow=r9(function(e,t){return r0(e,256,r,r,r,t)});/**
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
     */function oS(e,t){return e===t||e!=e&&t!=t}/**
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
     */var oA=rZ(nH),oP=rZ(function(e,t){return e>=t}),oC=nZ(function(){return arguments}())?nZ:function(e){return oV(e)&&eI.call(e,"callee")&&!eU.call(e,"callee")},ok=em.isArray,oB=te?tR(te):/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */function(e){return oV(e)&&nq(e)==C};/**
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
     */function oM(e){return null!=e&&oD(e.length)&&!oj(e)}/**
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
     */function oI(e){return oV(e)&&oM(e)}/**
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
     */var oR=tZ||aq,oT=tt?tR(tt):/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */function(e){return oV(e)&&nq(e)==d};/**
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
     */function oE(e){if(!oV(e))return!1;var t=nq(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!oF(e)}/**
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
     */function oj(e){if(!oL(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=nq(e);return t==h||t==g||"[object AsyncFunction]"==t||"[object Proxy]"==t}/**
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
     */function oO(e){return"number"==typeof e&&e==oY(e)}/**
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
     */function oD(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}/**
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
     */function oL(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}/**
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
     */function oV(e){return null!=e&&"object"==typeof e}/**
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
     */var oW=tn?tR(tn):/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */function(e){return oV(e)&&iu(e)==y};/**
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
     */function oz(e){return"number"==typeof e||oV(e)&&nq(e)==m}/**
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
     */function oF(e){if(!oV(e)||nq(e)!=x)return!1;var t=ez(e);if(null===t)return!0;var n=eI.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&eM.call(n)==ej}/**
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
     */var oU=tr?tR(tr):/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */function(e){return oV(e)&&nq(e)==_},oq=ti?tR(ti):/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */function(e){return oV(e)&&iu(e)==w};/**
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
     */function oH(e){return"string"==typeof e||!ok(e)&&oV(e)&&nq(e)==S}/**
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
     */function o$(e){return"symbol"==typeof e||oV(e)&&nq(e)==A}/**
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
     */var oN=to?tR(to):/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */function(e){return oV(e)&&oD(e.length)&&!!eY[nq(e)]},oG=rZ(n1),oX=rZ(function(e,t){return e<=t});/**
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
     */function oZ(e){if(!e)return[];if(oM(e))return oH(e)?t$(e):rT(e);if(eJ&&e[eJ])return(/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[eJ]()));var t=iu(e);return(t==y?tz:t==w?tq:ad)(e)}/**
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
     */function oQ(e){return e?(e=oJ(e))===s||e===-s?(e<0?-1:1)*17976931348623157e292:e==e?e:0:0===e?e:0}/**
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
     */function oY(e){var t=oQ(e),n=t%1;return t==t?n?t-n:t:0}/**
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
     */function oK(e){return e?nP(oY(e),0,4294967295):0}/**
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
     */function oJ(e){if("number"==typeof e)return e;if(o$(e))return u;if(oL(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oL(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=tI(e);var n=el.test(e);return n||ef.test(e)?e1(e.slice(2),n?2:8):eu.test(e)?u:+e}/**
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
     */function o0(e){return rE(e,ao(e))}/**
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
     */function o1(e){return null==e?"":rd(e)}/*------------------------------------------------------------------------*//**
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
     */var o2=rO(function(e,t){if(im(t)||oM(t)){rE(t,ai(t),e);return}for(var n in t)eI.call(t,n)&&nx(e,n,t[n])}),o5=rO(function(e,t){rE(t,ao(t),e)}),o3=rO(function(e,t,n,r){rE(t,ao(t),e,r)}),o9=rO(function(e,t,n,r){rE(t,ai(t),e,r)}),o4=r9(nA),o6=rr(function(e,t){e=eS(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&iv(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=ao(a),u=-1,l=s.length;++u<l;){var c=s[u],f=e[c];(f===r||oS(f,ek[c])&&!eI.call(e,c))&&(e[c]=a[c])}return e}),o8=rr(function(e){return e.push(r,r2),ta(as,r,e)});/**
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
     */function o7(e,t,n){var i=null==e?r:nF(e,t);return i===r?n:i}/**
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
     */function ae(e,t){return null!=e&&il(e,t,nN)}/**
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
     */var at=rH(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=eE.call(t)),e[t]=n},ak(aI)),an=rH(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=eE.call(t)),eI.call(e,t)?e[t].push(n):e[t]=[n]},it),ar=rr(nX);/**
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
     */function ai(e){return oM(e)?ng(e):n0(e)}/**
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
     */function ao(e){return oM(e)?ng(e,!0):/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function(e){if(!oL(e))return(/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */function(e){var t=[];if(null!=e)for(var n in eS(e))t.push(n);return t}(e));var t=im(e),n=[];for(var r in e)"constructor"==r&&(t||!eI.call(e,r))||n.push(r);return n}(e)}/**
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
     */var aa=rO(function(e,t,n){n9(e,t,n)}),as=rO(function(e,t,n,r){n9(e,t,n,r)}),au=r9(function(e,t){var n={};if(null==e)return n;var r=!1;t=td(t,function(t){return t=rS(t,e),r||(r=t.length>1),t}),rE(e,r6(e),n),r&&(n=nC(n,7,r5));for(var i=t.length;i--;)rh(n,t[i]);return n}),al=r9(function(e,t){return null==e?{}:n8(e,t,function(t,n){return ae(e,n)})});/**
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
     */function ac(e,t){if(null==e)return{};var n=td(r6(e),function(e){return[e]});return t=it(t),n8(e,n,function(e,n){return t(e,n[0])})}/**
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
     */var af=rJ(ai),ap=rJ(ao);/**
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
     */function ad(e){return null==e?[]:tT(e,ai(e))}/*------------------------------------------------------------------------*//**
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
     */var av=rW(function(e,t,n){return t=t.toLowerCase(),e+(n?ah(t):t)});/**
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
     */function ah(e){return aS(o1(e).toLowerCase())}/**
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
     */function ag(e){return(e=o1(e))&&e.replace(ed,tD).replace(eH,"")}/**
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
     */var ay=rW(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),am=rW(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),ax=rV("toLowerCase"),ab=rW(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),a_=rW(function(e,t,n){return e+(n?" ":"")+aS(t)}),aw=rW(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),aS=rV("toUpperCase");/**
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
     */function aA(e,t,n){if(e=o1(e),(t=n?r:t)===r){var i;return(i=e,eX.test(i))?e.match(eN)||[]:e.match(er)||[]}return e.match(t)||[]}/*------------------------------------------------------------------------*//**
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
     */var aP=rr(function(e,t){try{return ta(e,r,t)}catch(e){return oE(e)?e:new eb(e)}}),aC=r9(function(e,t){return tu(t,function(t){nS(e,t=iI(t),op(e[t],e))}),e});/**
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
     */function ak(e){return function(){return e}}/**
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
     */var aB=rU(),aM=rU(!0);/**
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
     */function aI(e){return e}/**
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
     */function aR(e){return nJ("function"==typeof e?e:nC(e,1))}/**
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
     */var aT=rr(function(e,t){return function(n){return nX(n,e,t)}}),aE=rr(function(e,t){return function(n){return nX(e,n,t)}});/**
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
     */function aj(e,t,n){var r=ai(t),i=nz(t,r);null!=n||oL(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=nz(t,ai(t)));var o=!(oL(n)&&"chain"in n)||!!n.chain,a=oj(e);return tu(i,function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=rT(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,tv([this.value()],arguments))})}),e}/**
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
     */var aD=rN(td),aL=rN(tl),aV=rN(ty);/**
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
     */function aW(e){return ih(e)?tP(iI(e)):function(t){return nF(t,e)}}/**
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
     */var az=rX(),aF=rX(!0);/**
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
     */function aU(){return[]}/**
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
     */function aq(){return!1}/*------------------------------------------------------------------------*//**
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
     */var aH=r$(function(e,t){return e+t},0),a$=rY("ceil"),aN=r$(function(e,t){return e/t},1),aG=rY("floor"),aX=r$(function(e,t){return e*t},1),aZ=rY("round"),aQ=r$(function(e,t){return e-t},0);return(/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
na.after=/*------------------------------------------------------------------------*//**
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
     */function(e,t){if("function"!=typeof t)throw new TypeError(i);return e=oY(e),function(){if(--e<1)return t.apply(this,arguments)}},na.ary=oc,na.assign=o2,na.assignIn=o5,na.assignInWith=o3,na.assignWith=o9,na.at=o4,na.before=of,na.bind=op,na.bindAll=aC,na.bindKey=od,na.castArray=/*------------------------------------------------------------------------*//**
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
     */function(){if(!arguments.length)return[];var e=arguments[0];return ok(e)?e:[e]},na.chain=i9,na.chunk=/*------------------------------------------------------------------------*//**
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
     */function(e,t,n){t=(n?iv(e,t,n):t===r)?1:tJ(oY(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=em(e7(i/t));o<i;)s[a++]=rs(e,o,o+=t);return s},na.compact=/**
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
     */function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},na.concat=/**
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
     */function(){var e=arguments.length;if(!e)return[];for(var t=em(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return tv(ok(n)?rT(n):[n],nO(t,1))},na.cond=/**
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
     */function(e){var t=null==e?0:e.length,n=it();return e=t?td(e,function(e){if("function"!=typeof e[1])throw new TypeError(i);return[n(e[0]),e[1]]}):[],rr(function(n){for(var r=-1;++r<t;){var i=e[r];if(ta(i[0],this,n))return ta(i[1],this,n)}})},na.conforms=/**
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
     */function(e){var t,n;return n=ai(t=nC(e,1)),function(e){return nk(e,t,n)}},na.constant=ak,na.countBy=i8,na.create=/**
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
     */function(e,t){var n=ns(e);return null==t?n:nw(n,t)},na.curry=/**
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
     */function e(t,n,i){n=i?r:n;var o=r0(t,8,r,r,r,r,r,n);return o.placeholder=e.placeholder,o},na.curryRight=/**
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
     */function e(t,n,i){n=i?r:n;var o=r0(t,16,r,r,r,r,r,n);return o.placeholder=e.placeholder,o},na.debounce=ov,na.defaults=o6,na.defaultsDeep=o8,na.defer=oh,na.delay=og,na.difference=iE,na.differenceBy=ij,na.differenceWith=iO,na.drop=/**
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
     */function(e,t,n){var i=null==e?0:e.length;return i?rs(e,(t=n||t===r?1:oY(t))<0?0:t,i):[]},na.dropRight=/**
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
     */function(e,t,n){var i=null==e?0:e.length;return i?rs(e,0,(t=i-(t=n||t===r?1:oY(t)))<0?0:t):[]},na.dropRightWhile=/**
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
     */function(e,t){return e&&e.length?ry(e,it(t,3),!0,!0):[]},na.dropWhile=/**
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
     */function(e,t){return e&&e.length?ry(e,it(t,3),!0):[]},na.fill=/**
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
     */function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&iv(e,t,n)&&(n=0,i=o),/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */function(e,t,n,i){var o=e.length;for((n=oY(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:oY(i))<0&&(i+=o),i=n>i?0:oK(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},na.filter=/**
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
     */function(e,t){return(ok(e)?tc:nj)(e,it(t,3))},na.flatMap=/**
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
     */function(e,t){return nO(oa(e,t),1)},na.flatMapDeep=/**
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
     */function(e,t){return nO(oa(e,t),s)},na.flatMapDepth=/**
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
     */function(e,t,n){return n=n===r?1:oY(n),nO(oa(e,t),n)},na.flatten=iV,na.flattenDeep=/**
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
     */function(e){return(null==e?0:e.length)?nO(e,s):[]},na.flattenDepth=/**
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
     */function(e,t){return(null==e?0:e.length)?nO(e,t=t===r?1:oY(t)):[]},na.flip=/**
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
     */function(e){return r0(e,512)},na.flow=aB,na.flowRight=aM,na.fromPairs=/**
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
     */function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},na.functions=/**
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
     */function(e){return null==e?[]:nz(e,ai(e))},na.functionsIn=/**
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
     */function(e){return null==e?[]:nz(e,ao(e))},na.groupBy=or,na.initial=/**
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
     */function(e){return(null==e?0:e.length)?rs(e,0,-1):[]},na.intersection=iz,na.intersectionBy=iF,na.intersectionWith=iU,na.invert=at,na.invertBy=an,na.invokeMap=oi,na.iteratee=aR,na.keyBy=oo,na.keys=ai,na.keysIn=ao,na.map=oa,na.mapKeys=/**
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
     */function(e,t){var n={};return t=it(t,3),nV(e,function(e,r,i){nS(n,t(e,r,i),e)}),n},na.mapValues=/**
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
     */function(e,t){var n={};return t=it(t,3),nV(e,function(e,r,i){nS(n,r,t(e,r,i))}),n},na.matches=/**
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
     */function(e){return n5(nC(e,1))},na.matchesProperty=/**
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
     */function(e,t){return n3(e,nC(t,1))},na.memoize=oy,na.merge=aa,na.mergeWith=as,na.method=aT,na.methodOf=aE,na.mixin=aj,na.negate=om,na.nthArg=/**
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
     */function(e){return e=oY(e),rr(function(t){return n4(t,e)})},na.omit=au,na.omitBy=/**
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
     */function(e,t){return ac(e,om(it(t)))},na.once=/**
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
     */function(e){return of(2,e)},na.orderBy=/**
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
     */function(e,t,n,i){return null==e?[]:(ok(t)||(t=null==t?[]:[t]),ok(n=i?r:n)||(n=null==n?[]:[n]),n6(e,t,n))},na.over=aD,na.overArgs=ox,na.overEvery=aL,na.overSome=aV,na.partial=ob,na.partialRight=o_,na.partition=os,na.pick=al,na.pickBy=ac,na.property=aW,na.propertyOf=/**
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
     */function(e){return function(t){return null==e?r:nF(e,t)}},na.pull=iH,na.pullAll=i$,na.pullAllBy=/**
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
     */function(e,t,n){return e&&e.length&&t&&t.length?n7(e,t,it(n,2)):e},na.pullAllWith=/**
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
     */function(e,t,n){return e&&e.length&&t&&t.length?n7(e,t,r,n):e},na.pullAt=iN,na.range=az,na.rangeRight=aF,na.rearg=ow,na.reject=/**
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
     */function(e,t){return(ok(e)?tc:nj)(e,om(it(t,3)))},na.remove=/**
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
     */function(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],o=e.length;for(t=it(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return re(e,i),n},na.rest=/**
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
     */function(e,t){if("function"!=typeof e)throw new TypeError(i);return rr(e,t=t===r?t:oY(t))},na.reverse=iG,na.sampleSize=/**
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
     */function(e,t,n){return t=(n?iv(e,t,n):t===r)?1:oY(t),(ok(e)?/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function(e,t){return iB(rT(e),nP(t,0,e.length))}:/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */function(e,t){var n=ad(e);return iB(n,nP(t,0,n.length))})(e,t)},na.set=/**
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
     */function(e,t,n){return null==e?e:ri(e,t,n)},na.setWith=/**
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
     */function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:ri(e,t,n,i)},na.shuffle=/**
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
     */function(e){return(ok(e)?/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function(e){return iB(rT(e))}:/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */function(e){return iB(ad(e))})(e)},na.slice=/**
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
     */function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&iv(e,t,n)?(t=0,n=i):(t=null==t?0:oY(t),n=n===r?i:oY(n)),rs(e,t,n)):[]},na.sortBy=ou,na.sortedUniq=/**
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
     */function(e){return e&&e.length?rf(e):[]},na.sortedUniqBy=/**
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
     */function(e,t){return e&&e.length?rf(e,it(t,2)):[]},na.split=/**
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
     */function(e,t,n){return(n&&"number"!=typeof n&&iv(e,t,n)&&(t=n=r),n=n===r?4294967295:n>>>0)?(e=o1(e))&&("string"==typeof t||null!=t&&!oU(t))&&!(t=rd(t))&&tW(e)?rA(t$(e),0,n):e.split(t,n):[]},na.spread=/**
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
     */function(e,t){if("function"!=typeof e)throw new TypeError(i);return t=null==t?0:tJ(oY(t),0),rr(function(n){var r=n[t],i=rA(n,0,t);return r&&tv(i,r),ta(e,this,i)})},na.tail=/**
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
     */function(e){var t=null==e?0:e.length;return t?rs(e,1,t):[]},na.take=/**
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
     */function(e,t,n){return e&&e.length?rs(e,0,(t=n||t===r?1:oY(t))<0?0:t):[]},na.takeRight=/**
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
     */function(e,t,n){var i=null==e?0:e.length;return i?rs(e,(t=i-(t=n||t===r?1:oY(t)))<0?0:t,i):[]},na.takeRightWhile=/**
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
     */function(e,t){return e&&e.length?ry(e,it(t,3),!1,!0):[]},na.takeWhile=/**
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
     */function(e,t){return e&&e.length?ry(e,it(t,3)):[]},na.tap=/**
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
     */function(e,t){return t(e),e},na.throttle=/**
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
     */function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return oL(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ov(e,t,{leading:r,maxWait:t,trailing:o})},na.thru=i4,na.toArray=oZ,na.toPairs=af,na.toPairsIn=ap,na.toPath=/**
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
     */function(e){return ok(e)?td(e,iI):o$(e)?[e]:rT(iM(o1(e)))},na.toPlainObject=o0,na.transform=/**
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
     */function(e,t,n){var r=ok(e),i=r||oR(e)||oN(e);if(t=it(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:oL(e)&&oj(o)?ns(ez(e)):{}}return(i?tu:nV)(e,function(e,r,i){return t(n,e,r,i)}),n},na.unary=/**
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
     */function(e){return oc(e,1)},na.union=iX,na.unionBy=iZ,na.unionWith=iQ,na.uniq=/**
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
     */function(e){return e&&e.length?rv(e):[]},na.uniqBy=/**
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
     */function(e,t){return e&&e.length?rv(e,it(t,2)):[]},na.uniqWith=/**
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
     */function(e,t){return t="function"==typeof t?t:r,e&&e.length?rv(e,r,t):[]},na.unset=/**
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
     */function(e,t){return null==e||rh(e,t)},na.unzip=iY,na.unzipWith=iK,na.update=/**
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
     */function(e,t,n){return null==e?e:rg(e,t,rw(n))},na.updateWith=/**
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
     */function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:rg(e,t,rw(n),i)},na.values=ad,na.valuesIn=/**
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
     */function(e){return null==e?[]:tT(e,ao(e))},na.without=iJ,na.words=aA,na.wrap=/**
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
     */function(e,t){return ob(rw(t),e)},na.xor=i0,na.xorBy=i1,na.xorWith=i2,na.zip=i5,na.zipObject=/**
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
     */function(e,t){return rb(e||[],t||[],nx)},na.zipObjectDeep=/**
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
     */function(e,t){return rb(e||[],t||[],ri)},na.zipWith=i3,// Add aliases.
na.entries=af,na.entriesIn=ap,na.extend=o5,na.extendWith=o3,// Add methods to `lodash.prototype`.
aj(na,na),/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
na.add=aH,na.attempt=aP,na.camelCase=av,na.capitalize=ah,na.ceil=a$,na.clamp=/*------------------------------------------------------------------------*//**
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
     */function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=oJ(n))==n?n:0),t!==r&&(t=(t=oJ(t))==t?t:0),nP(oJ(e),t,n)},na.clone=/**
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
     */function(e){return nC(e,4)},na.cloneDeep=/**
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
     */function(e){return nC(e,5)},na.cloneDeepWith=/**
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
     */function(e,t){return nC(e,5,t="function"==typeof t?t:r)},na.cloneWith=/**
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
     */function(e,t){return nC(e,4,t="function"==typeof t?t:r)},na.conformsTo=/**
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
     */function(e,t){return null==t||nk(e,t,ai(t))},na.deburr=ag,na.defaultTo=/**
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
     */function(e,t){return null==e||e!=e?t:e},na.divide=aN,na.endsWith=/**
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
     */function(e,t,n){e=o1(e),t=rd(t);var i=e.length,o=n=n===r?i:nP(oY(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},na.eq=oS,na.escape=/**
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
     */function(e){return(e=o1(e))&&q.test(e)?e.replace(F,tL):e},na.escapeRegExp=/**
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
     */function(e){return(e=o1(e))&&Y.test(e)?e.replace(Q,"\\$&"):e},na.every=/**
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
     */function(e,t,n){var i=ok(e)?tl:nT;return n&&iv(e,t,n)&&(t=r),i(e,it(t,3))},na.find=i7,na.findIndex=iD,na.findKey=/**
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
     */function(e,t){return tx(e,it(t,3),nV)},na.findLast=oe,na.findLastIndex=iL,na.findLastKey=/**
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
     */function(e,t){return tx(e,it(t,3),nW)},na.floor=aG,na.forEach=ot,na.forEachRight=on,na.forIn=/**
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
     */function(e,t){return null==e?e:nD(e,it(t,3),ao)},na.forInRight=/**
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
     */function(e,t){return null==e?e:nL(e,it(t,3),ao)},na.forOwn=/**
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
     */function(e,t){return e&&nV(e,it(t,3))},na.forOwnRight=/**
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
     */function(e,t){return e&&nW(e,it(t,3))},na.get=o7,na.gt=oA,na.gte=oP,na.has=/**
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
     */function(e,t){return null!=e&&il(e,t,n$)},na.hasIn=ae,na.head=iW,na.identity=aI,na.includes=/**
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
     */function(e,t,n,r){e=oM(e)?e:ad(e),n=n&&!r?oY(n):0;var i=e.length;return n<0&&(n=tJ(i+n,0)),oH(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&t_(e,t,n)>-1},na.indexOf=/**
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
     */function(e,t,n){var r=null==e?0:e.length;if(!r)return -1;var i=null==n?0:oY(n);return i<0&&(i=tJ(r+i,0)),t_(e,t,i)},na.inRange=/**
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
     */function(e,t,n){var i,o,a;return t=oQ(t),n===r?(n=t,t=0):n=oQ(n),(i=e=oJ(e))>=t0(o=t,a=n)&&i<tJ(o,a)},na.invoke=ar,na.isArguments=oC,na.isArray=ok,na.isArrayBuffer=oB,na.isArrayLike=oM,na.isArrayLikeObject=oI,na.isBoolean=/**
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
     */function(e){return!0===e||!1===e||oV(e)&&nq(e)==p},na.isBuffer=oR,na.isDate=oT,na.isElement=/**
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
     */function(e){return oV(e)&&1===e.nodeType&&!oF(e)},na.isEmpty=/**
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
     */function(e){if(null==e)return!0;if(oM(e)&&(ok(e)||"string"==typeof e||"function"==typeof e.splice||oR(e)||oN(e)||oC(e)))return!e.length;var t=iu(e);if(t==y||t==w)return!e.size;if(im(e))return!n0(e).length;for(var n in e)if(eI.call(e,n))return!1;return!0},na.isEqual=/**
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
     */function(e,t){return nQ(e,t)},na.isEqualWith=/**
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
     */function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?nQ(e,t,r,n):!!i},na.isError=oE,na.isFinite=/**
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
     */function(e){return"number"==typeof e&&tQ(e)},na.isFunction=oj,na.isInteger=oO,na.isLength=oD,na.isMap=oW,na.isMatch=/**
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
     */function(e,t){return e===t||nY(e,t,ii(t))},na.isMatchWith=/**
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
     */function(e,t,n){return n="function"==typeof n?n:r,nY(e,t,ii(t),n)},na.isNaN=/**
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
return oz(e)&&e!=+e},na.isNative=/**
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
     */function(e){if(iy(e))throw new eb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return nK(e)},na.isNil=/**
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
     */function(e){return null==e},na.isNull=/**
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
     */function(e){return null===e},na.isNumber=oz,na.isObject=oL,na.isObjectLike=oV,na.isPlainObject=oF,na.isRegExp=oU,na.isSafeInteger=/**
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
     */function(e){return oO(e)&&e>=-9007199254740991&&e<=9007199254740991},na.isSet=oq,na.isString=oH,na.isSymbol=o$,na.isTypedArray=oN,na.isUndefined=/**
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
     */function(e){return e===r},na.isWeakMap=/**
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
     */function(e){return oV(e)&&iu(e)==P},na.isWeakSet=/**
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
     */function(e){return oV(e)&&"[object WeakSet]"==nq(e)},na.join=/**
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
     */function(e,t){return null==e?"":tY.call(e,t)},na.kebabCase=ay,na.last=iq,na.lastIndexOf=/**
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
     */function(e,t,n){var i=null==e?0:e.length;if(!i)return -1;var o=i;return n!==r&&(o=(o=oY(n))<0?tJ(i+o,0):t0(o,i-1)),t==t?/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */function(e,t,n){for(var r=n+1;r--&&e[r]!==t;);return r}(e,t,o):tb(e,tS,o,!0)},na.lowerCase=am,na.lowerFirst=ax,na.lt=oG,na.lte=oX,na.max=/**
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
     */function(e){return e&&e.length?nE(e,aI,nH):r},na.maxBy=/**
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
     */function(e,t){return e&&e.length?nE(e,it(t,2),nH):r},na.mean=/**
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
     */function(e){return tA(e,aI)},na.meanBy=/**
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
     */function(e,t){return tA(e,it(t,2))},na.min=/**
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
     */function(e){return e&&e.length?nE(e,aI,n1):r},na.minBy=/**
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
     */function(e,t){return e&&e.length?nE(e,it(t,2),n1):r},na.stubArray=aU,na.stubFalse=aq,na.stubObject=/**
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
     */function(){return{}},na.stubString=/**
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
     */function(){return""},na.stubTrue=/**
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
     */function(){return!0},na.multiply=aX,na.nth=/**
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
     */function(e,t){return e&&e.length?n4(e,oY(t)):r},na.noConflict=/**
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
     */function(){return e3._===this&&(e3._=eO),this},na.noop=aO,na.now=ol,na.pad=/**
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
     */function(e,t,n){e=o1(e);var r=(t=oY(t))?tH(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return rG(tm(i),n)+e+rG(e7(i),n)},na.padEnd=/**
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
     */function(e,t,n){e=o1(e);var r=(t=oY(t))?tH(e):0;return t&&r<t?e+rG(t-r,n):e},na.padStart=/**
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
     */function(e,t,n){e=o1(e);var r=(t=oY(t))?tH(e):0;return t&&r<t?rG(t-r,n)+e:e},na.parseInt=/**
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
     */function(e,t,n){return n||null==t?t=0:t&&(t=+t),t2(o1(e).replace(K,""),t||0)},na.random=/**
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
     */function(e,t,n){if(n&&"boolean"!=typeof n&&iv(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=oQ(e),t===r?(t=e,e=0):t=oQ(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=t5();return t0(e+o*(t-e+e0("1e-"+((o+"").length-1))),t)}return rt(e,t)},na.reduce=/**
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
     */function(e,t,n){var r=ok(e)?th:tk,i=arguments.length<3;return r(e,it(t,4),n,i,nI)},na.reduceRight=/**
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
     */function(e,t,n){var r=ok(e)?tg:tk,i=arguments.length<3;return r(e,it(t,4),n,i,nR)},na.repeat=/**
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
     */function(e,t,n){return t=(n?iv(e,t,n):t===r)?1:oY(t),rn(o1(e),t)},na.replace=/**
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
     */function(){var e=arguments,t=o1(e[0]);return e.length<3?t:t.replace(e[1],e[2])},na.result=/**
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
     */function(e,t,n){t=rS(t,e);var i=-1,o=t.length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[iI(t[i])];a===r&&(i=o,a=n),e=oj(a)?a.call(e):a}return e},na.round=aZ,na.runInContext=e,na.sample=/**
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
     */function(e){return(ok(e)?ny:/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */function(e){return ny(ad(e))})(e)},na.size=/**
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
     */function(e){if(null==e)return 0;if(oM(e))return oH(e)?tH(e):e.length;var t=iu(e);return t==y||t==w?e.size:n0(e).length},na.snakeCase=ab,na.some=/**
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
     */function(e,t,n){var i=ok(e)?ty:ru;return n&&iv(e,t,n)&&(t=r),i(e,it(t,3))},na.sortedIndex=/**
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
     */function(e,t){return rl(e,t)},na.sortedIndexBy=/**
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
     */function(e,t,n){return rc(e,t,it(n,2))},na.sortedIndexOf=/**
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
     */function(e,t){var n=null==e?0:e.length;if(n){var r=rl(e,t);if(r<n&&oS(e[r],t))return r}return -1},na.sortedLastIndex=/**
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
     */function(e,t){return rl(e,t,!0)},na.sortedLastIndexBy=/**
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
     */function(e,t,n){return rc(e,t,it(n,2),!0)},na.sortedLastIndexOf=/**
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
     */function(e,t){if(null==e?0:e.length){var n=rl(e,t,!0)-1;if(oS(e[n],t))return n}return -1},na.startCase=a_,na.startsWith=/**
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
     */function(e,t,n){return e=o1(e),n=null==n?0:nP(oY(n),0,e.length),t=rd(t),e.slice(n,n+t.length)==t},na.subtract=aQ,na.sum=/**
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
     */function(e){return e&&e.length?tB(e,aI):0},na.sumBy=/**
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
     */function(e,t){return e&&e.length?tB(e,it(t,2)):0},na.template=/**
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
var i=na.templateSettings;n&&iv(e,t,n)&&(t=r),e=o1(e),t=o3({},t,i,r1);var o,a,s=o3({},t.imports,i.imports,r1),u=ai(s),l=tT(s,u),c=0,f=t.interpolate||ev,p="__p += '",d=eA((t.escape||ev).source+"|"+f.source+"|"+(f===N?ea:ev).source+"|"+(t.evaluate||ev).source+"|$","g"),v="//# sourceURL="+(eI.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++eQ+"]")+"\n";e.replace(d,function(t,n,r,i,s,u){// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return r||(r=i),// Escape characters that can't be included in string literals.
p+=e.slice(c,u).replace(eh,tV),n&&(o=!0,p+="' +\n__e("+n+") +\n'"),s&&(a=!0,p+="';\n"+s+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+t.length,t}),p+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var h=eI.call(t,"variable")&&t.variable;if(h){if(ei.test(h))throw new eb("Invalid `variable` option passed into `_.template`")}else p="with (obj) {\n"+p+"\n}\n";// Cleanup code by stripping empty strings.
p=(a?p.replace(L,""):p).replace(V,"$1").replace(W,"$1;"),// Frame code as the function body.
p="function("+(h||"obj")+") {\n"+(h?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var g=aP(function(){return e_(u,v+"return "+p).apply(r,l)});if(// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
g.source=p,oE(g))throw g;return g},na.times=/**
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
     */function(e,t){if((e=oY(e))<1||e>9007199254740991)return[];var n=4294967295,r=t0(e,4294967295);t=it(t),e-=4294967295;for(var i=tM(r,t);++n<e;)t(n);return i},na.toFinite=oQ,na.toInteger=oY,na.toLength=oK,na.toLower=/**
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
     */function(e){return o1(e).toLowerCase()},na.toNumber=oJ,na.toSafeInteger=/**
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
     */function(e){return e?nP(oY(e),-9007199254740991,9007199254740991):0===e?e:0},na.toString=o1,na.toUpper=/**
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
     */function(e){return o1(e).toUpperCase()},na.trim=/**
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
     */function(e,t,n){if((e=o1(e))&&(n||t===r))return tI(e);if(!e||!(t=rd(t)))return e;var i=t$(e),o=t$(t),a=tj(i,o),s=tO(i,o)+1;return rA(i,a,s).join("")},na.trimEnd=/**
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
     */function(e,t,n){if((e=o1(e))&&(n||t===r))return e.slice(0,tN(e)+1);if(!e||!(t=rd(t)))return e;var i=t$(e),o=tO(i,t$(t))+1;return rA(i,0,o).join("")},na.trimStart=/**
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
     */function(e,t,n){if((e=o1(e))&&(n||t===r))return e.replace(K,"");if(!e||!(t=rd(t)))return e;var i=t$(e),o=tj(i,t$(t));return rA(i,o).join("")},na.truncate=/**
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
     */function(e,t){var n=30,i="...";if(oL(t)){var o="separator"in t?t.separator:o;n="length"in t?oY(t.length):n,i="omission"in t?rd(t.omission):i}var a=(e=o1(e)).length;if(tW(e)){var s=t$(e);a=s.length}if(n>=a)return e;var u=n-tH(i);if(u<1)return i;var l=s?rA(s,0,u).join(""):e.slice(0,u);if(o===r)return l+i;if(s&&(u+=l.length-u),oU(o)){if(e.slice(u).search(o)){var c,f=l;for(o.global||(o=eA(o.source,o1(es.exec(o))+"g")),o.lastIndex=0;c=o.exec(f);)var p=c.index;l=l.slice(0,p===r?u:p)}}else if(e.indexOf(rd(o),u)!=u){var d=l.lastIndexOf(o);d>-1&&(l=l.slice(0,d))}return l+i},na.unescape=/**
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
     */function(e){return(e=o1(e))&&U.test(e)?e.replace(z,tG):e},na.uniqueId=/**
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
     */function(e){var t=++eR;return o1(e)+t},na.upperCase=aw,na.upperFirst=aS,// Add aliases.
na.each=ot,na.eachRight=on,na.first=iW,aj(na,(ey={},nV(na,function(e,t){eI.call(na.prototype,t)||(ey[t]=e)}),ey),{chain:!1}),/*------------------------------------------------------------------------*//**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */na.VERSION="4.17.21",// Assign default placeholders.
tu(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){na[e].placeholder=na}),// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
tu(["drop","take"],function(e,t){nc.prototype[e]=function(n){n=n===r?1:tJ(oY(n),0);var i=this.__filtered__&&!t?new nc(this):this.clone();return i.__filtered__?i.__takeCount__=t0(n,i.__takeCount__):i.__views__.push({size:t0(n,4294967295),type:e+(i.__dir__<0?"Right":"")}),i},nc.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),// Add `LazyWrapper` methods that accept an `iteratee` value.
tu(["filter","map","takeWhile"],function(e,t){var n=t+1,r=1==n||3==n;nc.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:it(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),// Add `LazyWrapper` methods for `_.head` and `_.last`.
tu(["head","last"],function(e,t){var n="take"+(t?"Right":"");nc.prototype[e]=function(){return this[n](1).value()[0]}}),// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
tu(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");nc.prototype[e]=function(){return this.__filtered__?new nc(this):this[n](1)}}),nc.prototype.compact=function(){return this.filter(aI)},nc.prototype.find=function(e){return this.filter(e).head()},nc.prototype.findLast=function(e){return this.reverse().find(e)},nc.prototype.invokeMap=rr(function(e,t){return"function"==typeof e?new nc(this):this.map(function(n){return nX(n,e,t)})}),nc.prototype.reject=function(e){return this.filter(om(it(e)))},nc.prototype.slice=function(e,t){e=oY(e);var n=this;return n.__filtered__&&(e>0||t<0)?new nc(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=oY(t))<0?n.dropRight(-t):n.take(t-e)),n)},nc.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},nc.prototype.toArray=function(){return this.take(4294967295)},// Add `LazyWrapper` methods to `lodash.prototype`.
nV(nc.prototype,function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=na[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(na.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,u=t instanceof nc,l=s[0],c=u||ok(t),f=function(e){var t=o.apply(na,tv([e],s));return i&&p?t[0]:t};c&&n&&"function"==typeof l&&1!=l.length&&(u=c=!1);var p=this.__chain__,d=!!this.__actions__.length,v=a&&!p,h=u&&!d;if(!a&&c){t=h?t:new nc(this);var g=e.apply(t,s);return g.__actions__.push({func:i4,args:[f],thisArg:r}),new nl(g,p)}return v&&h?e.apply(this,s):(g=this.thru(f),v?i?g.value()[0]:g.value():g)})}),// Add `Array` methods to `lodash.prototype`.
tu(["pop","push","shift","sort","splice","unshift"],function(e){var t=eP[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);na.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(ok(i)?i:[],e)}return this[n](function(n){return t.apply(ok(n)?n:[],e)})}}),// Map minified method names to their real names.
nV(nc.prototype,function(e,t){var n=na[t];if(n){var r=n.name+"";eI.call(t6,r)||(t6[r]=[]),t6[r].push({name:t,func:n})}}),t6[rq(r,2).name]=[{name:"wrapper",func:r}],// Add methods to `LazyWrapper`.
nc.prototype.clone=/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */function(){var e=new nc(this.__wrapped__);return e.__actions__=rT(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=rT(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=rT(this.__views__),e},nc.prototype.reverse=/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */function(){if(this.__filtered__){var e=new nc(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e},nc.prototype.value=/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */function(){var e=this.__wrapped__.value(),t=this.__dir__,n=ok(e),r=t<0,i=n?e.length:0,o=/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=t0(t,e+a);break;case"takeRight":e=tJ(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,u=s-a,l=r?s:a-1,c=this.__iteratees__,f=c.length,p=0,d=t0(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return rm(e,this.__actions__);var v=[];e:for(;u--&&p<d;){for(var h=-1,g=e[l+=t];++h<f;){var y=c[h],m=y.iteratee,x=y.type,b=m(g);if(2==x)g=b;else if(!b){if(1==x)continue e;break e}}v[p++]=g}return v},// Add chain sequence methods to the `lodash` wrapper.
na.prototype.at=i6,na.prototype.chain=/**
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
     */function(){return i9(this)},na.prototype.commit=/**
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
     */function(){return new nl(this.value(),this.__chain__)},na.prototype.next=/**
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
     */function(){this.__values__===r&&(this.__values__=oZ(this.value()));var e=this.__index__>=this.__values__.length,t=e?r:this.__values__[this.__index__++];return{done:e,value:t}},na.prototype.plant=/**
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
     */function(e){for(var t,n=this;n instanceof nu;){var i=iT(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},na.prototype.reverse=/**
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
     */function(){var e=this.__wrapped__;if(e instanceof nc){var t=e;return this.__actions__.length&&(t=new nc(this)),(t=t.reverse()).__actions__.push({func:i4,args:[iG],thisArg:r}),new nl(t,this.__chain__)}return this.thru(iG)},na.prototype.toJSON=na.prototype.valueOf=na.prototype.value=/**
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
     */function(){return rm(this.__wrapped__,this.__actions__)},// Add lazy aliases.
na.prototype.first=na.prototype.head,eJ&&(na.prototype[eJ]=/**
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
     */function(){return this}),na)}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
e3._=tX,// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
define(function(){return tX})):e4?(// Export for Node.js.
(e4.exports=tX)._=tX,// Export for CommonJS support.
e9._=tX):e3._=tX}).call(this)});var o={};o=/******/function(e){/******/// The module cache
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
/******/n.p="",n(n.s=20));/******/}([/* 0 *//***/function(t,n){/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/var r,i={};t.exports=i,i._baseDelta=1e3/60,i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i._warnedOnce={},i._decomp=null,/**
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
var t=i._decomp;try{t||"undefined"==typeof window||(t=window.decomp),t||void 0===e||(t=e.decomp)}catch(e){// decomp not available
t=null}return t};/***/},/* 1 *//***/function(e,t){/**
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
n=void 0!==n?n:-1,r=r||2,a=a||14;for(var s=[],u=0;u<e.length;u++){var l=e[u-1>=0?u-1:e.length-1],c=e[u],f=e[(u+1)%e.length],p=t[u<t.length?u:t.length-1];if(0===p){s.push(c);continue}var d=i.normalise({x:c.y-l.y,y:l.x-c.x}),v=i.normalise({x:f.y-c.y,y:c.x-f.x}),h=Math.sqrt(2*Math.pow(p,2)),g=i.mult(o.clone(d),p),y=i.normalise(i.mult(i.add(d,v),.5)),m=i.sub(c,i.mult(y,h)),x=n;-1===n&&(x=1.75*Math.pow(p,.32)),(x=o.clamp(x,r,a))%2==1&&(x+=1);for(var b=Math.acos(i.dot(d,v))/x,_=0;_<x;_++)s.push(i.add(i.rotate(g,b*_),m))}return s},/**
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
for(var d=0;d<e.parts.length;d++){var v=e.parts[d];o.translate(v.vertices,e.velocity),d>0&&(v.position.x+=e.velocity.x,v.position.y+=e.velocity.y),0!==e.angularVelocity&&(o.rotate(v.vertices,e.angularVelocity,e.position),c.rotate(v.axes,e.angularVelocity),d>0&&a.rotateAbout(v.position,e.angularVelocity,e.position,v.position)),l.update(v.bounds,v.vertices,e.velocity)}},/**
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
var r,l,c=n&&n.table[u.id(e,t)];c?l=c.collision:((l=a.create(e,t)).collided=!0,l.bodyA=e.id<t.id?e:t,l.bodyB=e.id<t.id?t:e,l.parentA=l.bodyA.parent,l.parentB=l.bodyB.parent),e=l.bodyA,t=l.bodyB,r=i.overlap<o.overlap?i:o;var f=l.normal,p=l.supports,d=r.axis,v=d.x,h=d.y;v*(t.position.x-e.position.x)+h*(t.position.y-e.position.y)<0?(f.x=v,f.y=h):(f.x=-v,f.y=-h),l.tangent.x=-f.y,l.tangent.y=f.x,l.depth=r.overlap,l.penetration.x=f.x*l.depth,l.penetration.y=f.y*l.depth;// find support points, there is always either exactly one or two
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
     */a._overlapAxes=function(e,t,n,r){var i,o,a,s,u,l,c=t.length,f=n.length,p=t[0].x,d=t[0].y,v=n[0].x,h=n[0].y,g=r.length,y=Number.MAX_VALUE,m=0;for(u=0;u<g;u++){var x=r[u],b=x.x,_=x.y,w=p*b+d*_,S=v*b+h*_,A=w,P=S;for(l=1;l<c;l+=1)(s=t[l].x*b+t[l].y*_)>A?A=s:s<w&&(w=s);for(l=1;l<f;l+=1)(s=n[l].x*b+n[l].y*_)>P?P=s:s<S&&(S=s);if((i=(o=A-S)<(a=P-w)?o:a)<y&&(y=i,m=u,i<=0))break}e.axis=r[m],e.overlap=y},/**
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
     */a._findSupports=function(e,t,n,i){var o,a,s,u,l,c=t.vertices,f=c.length,p=e.position.x,d=e.position.y,v=n.x*i,h=n.y*i,g=Number.MAX_VALUE;// find deepest vertex relative to the axis
for(l=0;l<f;l+=1)// convex hill-climbing
(u=v*(p-(a=c[l]).x)+h*(d-a.y))<g&&(g=u,o=a);return(g=v*(p-// measure next vertex
(s=c[(f+o.index-1)%f]).x)+h*(d-s.y),v*(p-// compare with previous vertex
(a=c[(o.index+1)%f]).x)+h*(d-a.y)<g)?(r[0]=o,r[1]=a):(r[0]=o,r[1]=s),r};/***/},/* 9 *//***/function(e,t,n){/**
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
var p,d,v,h,g,y=(f-e.length)/f,m=e.stiffness>=1||0===e.length?e.stiffness*t:e.stiffness*t*t,x=e.damping*t,b=o.mult(c,y*m),_=(n?n.inverseMass:0)+(i?i.inverseMass:0),w=_+((n?n.inverseInertia:0)+(i?i.inverseInertia:0));if(x>0){var S=o.create();v=o.div(c,f),g=o.sub(i&&o.sub(i.position,i.positionPrev)||S,n&&o.sub(n.position,n.positionPrev)||S),h=o.dot(v,g)}n&&!n.isStatic&&(d=n.inverseMass/_,// keep track of applied impulses for post solving
n.constraintImpulse.x-=b.x*d,n.constraintImpulse.y-=b.y*d,// apply forces
n.position.x-=b.x*d,n.position.y-=b.y*d,x>0&&(n.positionPrev.x-=x*v.x*h*d,n.positionPrev.y-=x*v.y*h*d),// apply torque
p=o.cross(a,b)/w*r._torqueDampen*n.inverseInertia*(1-e.angularStiffness),n.constraintImpulse.angle-=p,n.angle-=p),i&&!i.isStatic&&(d=i.inverseMass/_,// keep track of applied impulses for post solving
i.constraintImpulse.x+=b.x*d,i.constraintImpulse.y+=b.y*d,// apply forces
i.position.x+=b.x*d,i.position.y+=b.y*d,x>0&&(i.positionPrev.x+=x*v.x*h*d,i.positionPrev.y+=x*v.y*h*d),// apply torque
p=o.cross(s,b)/w*r._torqueDampen*i.inverseInertia*(1-e.angularStiffness),i.constraintImpulse.angle+=p,i.angle+=p)}}},/**
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
     */r.trapezoid=function(e,t,n,r,s,u){u=u||{};var l,c=(1-2*(s*=.5))*n,f=n*s,p=f+c,d=p+f;l=s<.5?"L 0 0 L "+f+" "+-r+" L "+p+" "+-r+" L "+d+" 0":"L 0 0 L "+p+" "+-r+" L "+d+" 0";var v={label:"Trapezoid Body",position:{x:e,y:t},vertices:i.fromPath(l)};if(u.chamfer){var h=u.chamfer;v.vertices=i.chamfer(v.vertices,h.radius,h.quality,h.qualityMin,h.qualityMax),delete u.chamfer}return a.create(o.extend({},v,u))},/**
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
     */r.polygon=function(e,t,n,s,u){if(u=u||{},n<3)return r.circle(e,t,s,u);for(var l=2*Math.PI/n,c="",f=.5*l,p=0;p<n;p+=1){var d=f+p*l,v=Math.cos(d)*s,h=Math.sin(d)*s;c+="L "+v.toFixed(3)+" "+h.toFixed(3)+" "}var g={label:"Polygon Body",position:{x:e,y:t},vertices:i.fromPath(c)};if(u.chamfer){var y=u.chamfer;g.vertices=i.chamfer(g.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete u.chamfer}return a.create(o.extend({},g,u))},/**
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
     */r.fromVertices=function(e,t,n,r,l,c,f,p){var d,v,h,g,y,m,x,b,_,w,S=o.getDecomp();for(// check decomp is as expected
d=!!(S&&S.quickDecomp),r=r||{},h=[],l=void 0!==l&&l,c=void 0!==c?c:.01,f=void 0!==f?f:10,p=void 0!==p?p:.01,o.isArray(n[0])||(n=[n]),_=0;_<n.length;_+=1)if(y=n[_],(g=i.isConvex(y))||d||o.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),g||!d)y=g?i.clockwiseSort(y):i.hull(y),h.push({position:{x:e,y:t},vertices:y});else{// initialise a decomposition
var A=y.map(function(e){return[e.x,e.y]});// vertices are concave and simple, we can decompose into parts
S.makeCCW(A),!1!==c&&S.removeCollinearPoints(A,c),!1!==p&&S.removeDuplicatePoints&&S.removeDuplicatePoints(A,p);// use the quick decomposition algorithm (Bayazit)
var P=S.quickDecomp(A);// for each decomposed chunk
for(m=0;m<P.length;m++){// convert vertices into the correct structure
var C=P[m].map(function(e){return{x:e[0],y:e[1]}});// skip small chunks
f>0&&i.area(C)<f||// create a compound part
h.push({position:i.centre(C),vertices:C})}}// create body parts
for(m=0;m<h.length;m++)h[m]=a.create(o.extend(h[m],r));// flag internal edges (coincident part edges)
if(l)for(m=0;m<h.length;m++){var k=h[m];for(x=m+1;x<h.length;x++){var B=h[x];if(s.overlaps(k.bounds,B.bounds)){var M=k.vertices,I=B.vertices;// iterate vertices of both parts
for(b=0;b<k.vertices.length;b++)for(w=0;w<B.vertices.length;w++){// find distances between the vertices
var R=u.magnitudeSquared(u.sub(M[(b+1)%M.length],I[w])),T=u.magnitudeSquared(u.sub(M[b],I[(w+1)%I.length]));// if both vertices are very close, consider the edge concident (internal)
R<5&&T<5&&(M[b].isInternal=!0,I[w].isInternal=!0)}}}}return h.length>1?(// create the parent body to be returned, that contains generated compound parts
v=a.create(o.extend({parts:h.slice(0)},r)),// offset such that body.position is at the centre off mass
a.setPosition(v,{x:e,y:t}),v):h[0]};/***/},/* 13 *//***/function(e,t,n){/**
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
     */r.collisions=function(e){var t,n,i=[],a=e.pairs,s=e.bodies,u=s.length,l=r.canCollide,c=o.collides;for(s.sort(r._compareBoundsX),t=0;t<u;t++){var f=s[t],p=f.bounds,d=f.bounds.max.x,v=f.bounds.max.y,h=f.bounds.min.y,g=f.isStatic||f.isSleeping,y=f.parts.length,m=1===y;for(n=t+1;n<u;n++){var x=s[n],b=x.bounds;if(b.min.x>d)break;if(!(v<b.min.y)&&!(h>b.max.y)&&(!g||!x.isStatic&&!x.isSleeping)&&l(f.collisionFilter,x.collisionFilter)){var _=x.parts.length;if(m&&1===_){var w=c(f,x,a);w&&i.push(w)}else for(var S=y>1?1:0,A=_>1?1:0,P=S;P<y;P++)for(var C=f.parts[P],p=C.bounds,k=A;k<_;k++){var B=x.parts[k],b=B.bounds;if(!(p.min.x>b.max.x)&&!(p.max.x<b.min.x)&&!(p.max.y<b.min.y)&&!(p.min.y>b.max.y)){var w=c(C,B,a);w&&i.push(w)}}}}}return i},/**
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
     */r.update=function(e,t){var n,p=f.now(),d=e.world,v=e.detector,h=e.pairs,g=e.timing,y=g.timestamp;t=(void 0!==t?t:f._baseDelta)*g.timeScale,// increment timestamp
g.timestamp+=t,g.lastDelta=t;// create an event object
var m={timestamp:g.timestamp,delta:t};u.trigger(e,"beforeUpdate",m);// get all bodies and all constraints in the world
var x=l.allBodies(d),b=l.allConstraints(d);for(d.isModified&&(// update the detector bodies
a.setBodies(v,x),// reset all composite modified flags
l.setModified(d,!1,!1,!0)),e.enableSleeping&&i.update(x,t),// apply gravity to all bodies
r._bodiesApplyGravity(x,e.gravity),t>0&&r._bodiesUpdate(x,t),// update all constraints (first pass)
c.preSolveAll(x),n=0;n<e.constraintIterations;n++)c.solveAll(b,t);c.postSolveAll(x),// find all collisions
v.pairs=e.pairs;var _=a.collisions(v);// update collision pairs
s.update(h,_,y),e.enableSleeping&&i.afterCollisions(h.list),h.collisionStart.length>0&&u.trigger(e,"collisionStart",{pairs:h.collisionStart});// iteratively resolve position between collisions
var w=f.clamp(20/e.positionIterations,0,1);for(o.preSolvePosition(h.list),n=0;n<e.positionIterations;n++)o.solvePosition(h.list,t,w);for(o.postSolvePosition(x),// update all constraints (second pass)
c.preSolveAll(x),n=0;n<e.constraintIterations;n++)c.solveAll(b,t);for(c.postSolveAll(x),// iteratively resolve velocity between collisions
o.preSolveVelocity(h.list),n=0;n<e.velocityIterations;n++)o.solveVelocity(h.list,t);return(// update body speed and velocity properties
r._bodiesUpdateVelocities(x),h.collisionActive.length>0&&u.trigger(e,"collisionActive",{pairs:h.collisionActive}),h.collisionEnd.length>0&&u.trigger(e,"collisionEnd",{pairs:h.collisionEnd}),// clear force buffers
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
     */r.solvePosition=function(e,t,n){var i,a,s,u,l,c,f,p,d=r._positionDampen*(n||1),v=o.clamp(t/o._baseDelta,0,1),h=e.length;// find impulses required to resolve penetration
for(i=0;i<h;i++)(a=e[i]).isActive&&!a.isSensor&&(u=(s=a.collision).parentA,l=s.parentB,c=s.normal,// get current separation between body edges involved in collision
a.separation=c.x*(l.positionImpulse.x+s.penetration.x-u.positionImpulse.x)+c.y*(l.positionImpulse.y+s.penetration.y-u.positionImpulse.y));for(i=0;i<h;i++)!(a=e[i]).isActive||a.isSensor||(u=(s=a.collision).parentA,l=s.parentB,c=s.normal,p=a.separation-a.slop*v,(u.isStatic||l.isStatic)&&(p*=2),u.isStatic||u.isSleeping||(f=d/u.totalContacts,u.positionImpulse.x+=c.x*p*f,u.positionImpulse.y+=c.y*p*f),l.isStatic||l.isSleeping||(f=d/l.totalContacts,l.positionImpulse.x-=c.x*p*f,l.positionImpulse.y-=c.y*p*f))},/**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */r.postSolvePosition=function(e){for(var t=r._positionWarming,n=e.length,o=i.translate,s=a.update,u=0;u<n;u++){var l=e[u],c=l.positionImpulse,f=c.x,p=c.y,d=l.velocity;if(// reset contact count
l.totalContacts=0,0!==f||0!==p){// update body geometry
for(var v=0;v<l.parts.length;v++){var h=l.parts[v];o(h.vertices,c),s(h.bounds,h.vertices,d),h.position.x+=f,h.position.y+=p}// move the body without changing velocity
l.positionPrev.x+=f,l.positionPrev.y+=p,f*d.x+p*d.y<0?(// reset cached impulse if the body has velocity along it
c.x=0,c.y=0):(// warm the next iteration
c.x*=t,c.y*=t)}}},/**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */r.preSolveVelocity=function(e){var t,n,r=e.length;for(t=0;t<r;t++){var i=e[t];if(i.isActive&&!i.isSensor){var o=i.activeContacts,a=o.length,s=i.collision,u=s.parentA,l=s.parentB,c=s.normal,f=s.tangent;// resolve each contact
for(n=0;n<a;n++){var p=o[n],d=p.vertex,v=p.normalImpulse,h=p.tangentImpulse;if(0!==v||0!==h){// total impulse from contact
var g=c.x*v+f.x*h,y=c.y*v+f.y*h;u.isStatic||u.isSleeping||(u.positionPrev.x+=g*u.inverseMass,u.positionPrev.y+=y*u.inverseMass,u.anglePrev+=u.inverseInertia*((d.x-u.position.x)*y-(d.y-u.position.y)*g)),l.isStatic||l.isSleeping||(l.positionPrev.x-=g*l.inverseMass,l.positionPrev.y-=y*l.inverseMass,l.anglePrev-=l.inverseInertia*((d.x-l.position.x)*y-(d.y-l.position.y)*g))}}}}},/**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} delta
     */r.solveVelocity=function(e,t){var n,i,a,s,u=t/o._baseDelta,l=u*u*u,c=-r._restingThresh*u,f=r._restingThreshTangent,p=r._frictionNormalMultiplier*u,d=r._frictionMaxStatic,v=e.length;for(a=0;a<v;a++){var h=e[a];if(h.isActive&&!h.isSensor){var g=h.collision,y=g.parentA,m=g.parentB,x=y.velocity,b=m.velocity,_=g.normal.x,w=g.normal.y,S=g.tangent.x,A=g.tangent.y,P=h.activeContacts,C=P.length,k=1/C,B=y.inverseMass+m.inverseMass,M=h.friction*h.frictionStatic*p;// resolve each contact
for(s=0,// update body velocities
x.x=y.position.x-y.positionPrev.x,x.y=y.position.y-y.positionPrev.y,b.x=m.position.x-m.positionPrev.x,b.y=m.position.y-m.positionPrev.y,y.angularVelocity=y.angle-y.anglePrev,m.angularVelocity=m.angle-m.anglePrev;s<C;s++){var I=P[s],R=I.vertex,T=R.x-y.position.x,E=R.y-y.position.y,j=R.x-m.position.x,O=R.y-m.position.y,D=x.x-E*y.angularVelocity,L=x.y+T*y.angularVelocity,V=b.x-O*m.angularVelocity,W=b.y+j*m.angularVelocity,z=D-V,F=L-W,U=_*z+w*F,q=S*z+A*F,H=h.separation+U,$=Math.min(H,1),N=($=H<0?0:$)*M;q<-N||q>N?(i=q>0?q:-q,(n=h.friction*(q>0?1:-1)*l)<-i?n=-i:n>i&&(n=i)):(n=q,i=d);// account for mass, inertia and contact offset
var G=T*w-E*_,X=j*w-O*_,Z=k/(B+y.inverseInertia*G*G+m.inverseInertia*X*X),Q=(1+h.restitution)*U*Z;// handle high velocity and resting collisions separately
if(n*=Z,U<c)I.normalImpulse=0;else{// solve resting collision constraints using Erin Catto's method (GDC08)
// impulse constraint tends to 0
var Y=I.normalImpulse;I.normalImpulse+=Q,I.normalImpulse>0&&(I.normalImpulse=0),Q=I.normalImpulse-Y}// handle high velocity and resting collisions separately
if(q<-f||q>f)I.tangentImpulse=0;else{// solve resting collision constraints using Erin Catto's method (GDC08)
// tangent impulse tends to -tangentSpeed or +tangentSpeed
var K=I.tangentImpulse;I.tangentImpulse+=n,I.tangentImpulse<-i&&(I.tangentImpulse=-i),I.tangentImpulse>i&&(I.tangentImpulse=i),n=I.tangentImpulse-K}// total impulse from contact
var J=_*Q+S*n,ee=w*Q+A*n;y.isStatic||y.isSleeping||(y.positionPrev.x+=J*y.inverseMass,y.positionPrev.y+=ee*y.inverseMass,y.anglePrev+=(T*ee-E*J)*y.inverseInertia),m.isStatic||m.isSleeping||(m.positionPrev.x-=J*m.inverseMass,m.positionPrev.y-=ee*m.inverseMass,m.anglePrev-=(j*ee-O*J)*m.inverseInertia)}}}};/***/},/* 19 *//***/function(e,t,n){/**
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
     */r.update=function(e,t,n){var r,o,a,s,u=e.list,l=u.length,c=e.table,f=t.length,p=e.collisionStart,d=e.collisionEnd,v=e.collisionActive;for(s=0,// clear collision state arrays, but maintain old reference
p.length=0,d.length=0,v.length=0;s<l;s++)u[s].confirmedActive=!1;for(s=0;s<f;s++)(a=(r=t[s]).pair)?(a.isActive?v.push(a):p.push(a),// update the pair
i.update(a,r,n),a.confirmedActive=!0):(c[// pair did not exist, create a new pair
(a=i.create(r,n)).id]=a,// push the new pair
p.push(a),u.push(a));// find pairs that are no longer active
var h=[];for(s=0,l=u.length;s<l;s++)(a=u[s]).confirmedActive||(i.setActive(a,!1,n),d.push(a),a.collision.bodyA.isSleeping||a.collision.bodyB.isSleeping||h.push(s));// remove inactive pairs
for(s=0;s<h.length;s++)a=u[o=h[s]-s],u.splice(o,1),delete c[a.id]},/**
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
     */r.stack=function(e,t,n,r,o,a,u){for(var l,c=i.create({label:"Stack"}),f=e,p=t,d=0,v=0;v<r;v++){for(var h=0,g=0;g<n;g++){var y=u(f,p,g,v,l,d);if(y){var m=y.bounds.max.y-y.bounds.min.y,x=y.bounds.max.x-y.bounds.min.x;m>h&&(h=m),s.translate(y,{x:.5*x,y:.5*m}),f=y.bounds.max.x+o,i.addBody(c,y),l=y,d+=1}else f+=o}p+=h+a,f=e}return c},/**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */r.chain=function(e,t,n,r,s,u){for(var l=e.bodies,c=1;c<l.length;c++){var f=l[c-1],p=l[c],d=f.bounds.max.y-f.bounds.min.y,v=f.bounds.max.x-f.bounds.min.x,h=p.bounds.max.y-p.bounds.min.y,g=p.bounds.max.x-p.bounds.min.x,y={bodyA:f,pointA:{x:v*t,y:d*n},bodyB:p,pointB:{x:g*r,y:h*s}},m=a.extend(y,u);i.addConstraint(e,o.create(m))}return e.label+=" Chain",e},/**
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
     */r.pyramid=function(e,t,n,i,o,a,u){return r.stack(e,t,n,i,o,a,function(t,r,a,l,c,f){var p=Math.min(i,Math.ceil(n/2)),d=c?c.bounds.max.x-c.bounds.min.x:0;if(!(l>p)){var v=// reverse row order
l=p-l,h=n-1-l;if(!(a<v)&&!(a>h))return 1===f&&s.translate(c,{x:(a+(n%2==1?1:-1))*d,y:0}),u(e+(c?a*d:0)+a*o,r,a,l,c,f)}})},/**
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
     */r.car=function(e,t,n,r,a){var l=s.nextGroup(!0),c=-(.5*n)+20,f=.5*n-20,p=i.create({label:"Car"}),d=u.rectangle(e,t,n,r,{collisionFilter:{group:l},chamfer:{radius:.5*r},density:2e-4}),v=u.circle(e+c,t+0,a,{collisionFilter:{group:l},friction:.8}),h=u.circle(e+f,t+0,a,{collisionFilter:{group:l},friction:.8}),g=o.create({bodyB:d,pointB:{x:c,y:0},bodyA:v,stiffness:1,length:0}),y=o.create({bodyB:d,pointB:{x:f,y:0},bodyA:h,stiffness:1,length:0});return i.addBody(p,d),i.addBody(p,v),i.addBody(p,h),i.addConstraint(p,g),i.addConstraint(p,y),p},l(r,"car","Composites.car ➤ moved to car example"),/**
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
     */r.update=function(e,t,n,i){var o,a,s,u,l,c=n.world,f=e.buckets,p=!1;for(o=0;o<t.length;o++){var d=t[o];if((!d.isSleeping||i)&&(!c.bounds||!(d.bounds.max.x<c.bounds.min.x)&&!(d.bounds.min.x>c.bounds.max.x)&&!(d.bounds.max.y<c.bounds.min.y)&&!(d.bounds.min.y>c.bounds.max.y))){var v=r._getRegion(e,d);// if the body has changed grid region
if(!d.region||v.id!==d.region.id||i){(!d.region||i)&&(d.region=v);var h=r._regionUnion(v,d.region);// update grid buckets affected by region change
// iterate over the union of both regions
for(a=h.startCol;a<=h.endCol;a++)for(s=h.startRow;s<=h.endRow;s++){u=f[l=r._getBucketId(a,s)];var g=a>=v.startCol&&a<=v.endCol&&s>=v.startRow&&s<=v.endRow,y=a>=d.region.startCol&&a<=d.region.endCol&&s>=d.region.startRow&&s<=d.region.endRow;!g&&y&&y&&u&&r._bucketRemoveBody(e,u,d),(d.region===v||g&&!y||i)&&(u||(u=r._createBucket(f,l)),r._bucketAddBody(e,u,d))}// set the new region
d.region=v,// flag changes so we can update pairs
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
     */r.collides=function(e,t){for(var n=[],r=t.length,i=e.bounds,s=o.collides,u=a.overlaps,l=0;l<r;l++){var c=t[l],f=c.parts.length,p=1===f?0:1;if(u(c.bounds,i))for(var d=p;d<f;d++){var v=c.parts[d];if(u(v.bounds,i)){var h=s(v,e);if(h){n.push(h);break}}}}return n},/**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */r.ray=function(e,t,n,o){o=o||1e-100;for(var a=i.angle(t,n),u=i.magnitude(i.sub(t,n)),l=(n.x+t.x)*.5,c=(n.y+t.y)*.5,f=s.rectangle(l,c,u,o,{angle:a}),p=r.collides(f,e),d=0;d<p.length;d+=1){var v=p[d];v.body=v.bodyB=v.bodyA}return p},/**
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
*/var r,i,o,a,s,u,l,c,f={};e.exports=f;var p=n(4),d=n(0),v=n(6),h=n(1),g=n(5),y=n(2),m=n(14);"undefined"!=typeof window&&(r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(function(){e(d.now())},1e3/60)},i=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),f._goodFps=30,f._goodDelta=1e3/60,/**
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
var l=i.max.x-i.min.x+2*n.x,c=i.max.y-i.min.y+2*n.y,f=e.canvas.height,p=e.canvas.width/f,v=l/c,h=1,g=1;v>p?g=v/p:h=p/v,// enable bounds
e.options.hasBounds=!0,// position and size
e.bounds.min.x=i.min.x,e.bounds.max.x=i.min.x+l*h,e.bounds.min.y=i.min.y,e.bounds.max.y=i.min.y+c*g,r&&(e.bounds.min.x+=.5*l-l*h*.5,e.bounds.max.x+=.5*l-l*h*.5,e.bounds.min.y+=.5*c-c*g*.5,e.bounds.max.y+=.5*c-c*g*.5),// padding
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
     */f.world=function(e,t){var n,r=d.now(),i=e.engine,o=i.world,a=e.canvas,s=e.context,u=e.options,l=e.timing,p=v.allBodies(o),x=v.allConstraints(o),b=u.wireframes?u.wireframeBackground:u.background,_=[],w=[],S={timestamp:i.timing.timestamp};// handle bounds
if(g.trigger(e,"beforeRender",S),e.currentBackground!==b&&c(e,b),// clear the canvas with a transparent fill, to allow the canvas background to show
s.globalCompositeOperation="source-in",s.fillStyle="transparent",s.fillRect(0,0,a.width,a.height),s.globalCompositeOperation="source-over",u.hasBounds){// filter out bodies that are not in view
for(n=0;n<p.length;n++){var A=p[n];h.overlaps(A.bounds,e.bounds)&&_.push(A)}// filter out constraints that are not in view
for(n=0;n<x.length;n++){var P=x[n],C=P.bodyA,k=P.bodyB,B=P.pointA,M=P.pointB;C&&(B=y.add(C.position,P.pointA)),k&&(M=y.add(k.position,P.pointB)),B&&M&&(h.contains(e.bounds,B)||h.contains(e.bounds,M))&&w.push(P)}// transform the view
f.startViewTransform(e),e.mouse&&(m.setScale(e.mouse,{x:(e.bounds.max.x-e.bounds.min.x)/e.options.width,y:(e.bounds.max.y-e.bounds.min.y)/e.options.height}),m.setOffset(e.mouse,e.bounds.min))}else w=x,_=p,1!==e.options.pixelRatio&&e.context.setTransform(e.options.pixelRatio,0,0,e.options.pixelRatio,0,0);!u.wireframes||i.enableSleeping&&u.showSleeping?f.bodies(e,_,s):(u.showConvexHulls&&f.bodyConvexHulls(e,_,s),// optimised method for wireframes only
f.bodyWireframes(e,_,s)),u.showBounds&&f.bodyBounds(e,_,s),(u.showAxes||u.showAngleIndicator)&&f.bodyAxes(e,_,s),u.showPositions&&f.bodyPositions(e,_,s),u.showVelocity&&f.bodyVelocity(e,_,s),u.showIds&&f.bodyIds(e,_,s),u.showSeparations&&f.separations(e,i.pairs.list,s),u.showCollisions&&f.collisions(e,i.pairs.list,s),u.showVertexNumbers&&f.vertexNumbers(e,_,s),u.showMousePosition&&f.mousePosition(e,e.mouse,s),f.constraints(w,s),u.hasBounds&&f.endViewTransform(e),g.trigger(e,"afterRender",S),// log the time elapsed computing this update
l.lastElapsed=d.now()-r},/**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */f.stats=function(e,t,n){// count parts
for(var r=e.engine,i=r.world,o=v.allBodies(i),a=0,s=0,u=0;u<o.length;u+=1)a+=o[u].parts.length;var l={Part:a,Body:o.length,Cons:v.allConstraints(i).length,Comp:v.allComposites(i).length,Pair:r.pairs.list.length};// sections
for(var c in // background
t.fillStyle="#0e0f19",t.fillRect(s,0,302.5,44),t.font="12px Arial",t.textBaseline="top",t.textAlign="right",l){var f=l[c];// label
t.fillStyle="#aaa",t.fillText(c,s+55,8),// value
t.fillStyle="#eee",t.fillText(f,s+55,26),s+=55}},/**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */f.performance=function(e,t){var n=e.engine,r=e.timing,i=r.deltaHistory,o=r.elapsedHistory,s=r.timestampElapsedHistory,u=r.engineDeltaHistory,l=r.engineElapsedHistory,c=n.timing.lastDelta,p=a(i),d=a(o),v=a(u),h=a(l),g=a(s)/p||0,y=1e3/p||0;// background
t.fillStyle="#0e0f19",t.fillRect(0,50,370,34),// show FPS
f.status(t,10,69,60,4,i.length,Math.round(y)+" fps",y/f._goodFps,function(e){return i[e]/p-1}),// show engine delta
f.status(t,82,69,60,4,u.length,c.toFixed(2)+" dt",f._goodDelta/c,function(e){return u[e]/v-1}),// show engine update time
f.status(t,154,69,60,4,l.length,h.toFixed(2)+" ut",1-h/f._goodFps,function(e){return l[e]/h-1}),// show render time
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
var n,o,a,s,u,l,c,f,p,d,v,h=[],g=0,y=0,m=0;t=t||15;var x=function(e,t,n){// all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
var r=n%2==1&&n>1;// when the last point doesn't equal the current point add the current point
if(!p||e!=p.x||t!=p.y){p&&r?(d=p.x,v=p.y):(d=0,v=0);var i={x:d+e,y:v+t};(r||!p)&&(p=i),h.push(i),y=d+e,m=v+t}},b=function(e){var t=e.pathSegTypeAsLetter.toUpperCase();// skip path ends
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
for(n=0,o=c.length;n<o;++n)b(c[n]);return h},r._svgPathToAbsolute=function(e){for(var t,n,r,i,o,a,s=e.pathSegList,u=0,l=0,c=s.numberOfItems,f=0;f<c;++f){var p=s.getItem(f),d=p.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(d))"x"in p&&(u=p.x),"y"in p&&(l=p.y);else switch("x1"in p&&(r=u+p.x1),"x2"in p&&(o=u+p.x2),"y1"in p&&(i=l+p.y1),"y2"in p&&(a=l+p.y2),"x"in p&&(u+=p.x),"y"in p&&(l+=p.y),d){case"m":s.replaceItem(e.createSVGPathSegMovetoAbs(u,l),f);break;case"l":s.replaceItem(e.createSVGPathSegLinetoAbs(u,l),f);break;case"h":s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(u),f);break;case"v":s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(l),f);break;case"c":s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(u,l,r,i,o,a),f);break;case"s":s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(u,l,o,a),f);break;case"q":s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(u,l,r,i),f);break;case"t":s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(u,l),f);break;case"a":s.replaceItem(e.createSVGPathSegArcAbs(u,l,p.r1,p.r2,p.angle,p.largeArcFlag,p.sweepFlag),f);break;case"z":case"Z":u=t,l=n}("M"==d||"m"==d)&&(t=u,n=l)}};/***/},/* 30 *//***/function(e,t,n){/**
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
     */r.create=i.create,r.add=i.add,r.remove=i.remove,r.clear=i.clear,r.addComposite=i.addComposite,r.addBody=i.addBody,r.addConstraint=i.addConstraint;/***/}]);var a=i("6KOho");const s=e=>Math.round(100*e)/100,u=(e,t)=>(e=Math.ceil(e),Math.floor(Math.random()*((t=Math.floor(t))-e+1))+e);var l=i("f1q41");const c=/*@__PURE__*/t(o).Engine,f=/*@__PURE__*/t(o).Bodies,p=/*@__PURE__*/t(o).Composite;class d{#e=500;constructor(e,n,r,i=!1){this.containerSelector=e,this.$canvasContainer=/*@__PURE__*/t(a)(e),this.tagTexts=n,this.tagColors=r,this.engine=null,this.initialized=!1,this.tags=[],this.debugPhysics=i}init(){this.engine=c.create({positionIterations:10,velocityIterations:10,timing:{timeScale:.8}});let{containerWidth:e,containerHeight:n}=this.#t();this.debugPhysics&&(this.render=/*@__PURE__*/t(o).Render.create({element:this.$canvasContainer.get(0),engine:this.engine,options:{width:e,height:n,wireframes:!0}}),/*@__PURE__*/t(o).Render.run(render)),this.initialized=!0}#t(){let e=this.$canvasContainer.width(),n=this.$canvasContainer.height(),r=n+this.#e;this.tags=this.tagTexts.map((t,r)=>{let i=u(.2*e,.8*e),o=u(.2*n-this.#e,.8*n),a=h(i,o,t,this.tagColors[r%this.tagColors.length],this.$canvasContainer);return p.add(this.engine.world,a.body),a});let i=/*@__PURE__*/t(o).MouseConstraint.create(this.engine,{element:this.$canvasContainer.get(0)});return p.add(this.engine.world,[i]),p.add(this.engine.world,v(e,n,r,this.#e)),{containerWidth:e,containerHeight:n}}removeObjects(){p.clear(this.engine.world),this.tags.forEach(e=>{e.elem.remove()}),this.tags=[]}render(){this.initialized||this.init(),this.tags.forEach(e=>e.render()),c.update(this.engine),requestAnimationFrame(this.render.bind(this))}#n=/*@__PURE__*/t(l).throttle(()=>{this.removeObjects(),this.$canvasContainer=/*@__PURE__*/t(a)(this.containerSelector),this.#t(),this.debugPhysics&&(this.render.canvas.height=this.$canvasContainer.height(),this.render.canvas.width=this.$canvasContainer.width())},1e3);onWindowResizing(){this.#n()}}const v=(e,t,n,r)=>[f.rectangle(e/2,-r,e,1,{isStatic:!0}),f.rectangle(e/2,t,e,1,{isStatic:!0}),f.rectangle(0,(t-r)/2,1,n,{isStatic:!0}),f.rectangle(e,(t-r)/2,1,n,{isStatic:!0})// right
    ],h=(e,n,r,i,o)=>{let l=u(0,1e5);o.append(`<div id="tag${l}" class="interactive-tag tag-24">${r}</div>`);let c=/*@__PURE__*/t(a)("#tag"+l),p=c.height(),d=c.outerWidth();c.css({width:d+"px",padding:0,"background-color":i});let v=Number.parseInt(c.css("border-radius").replace("px","")),h=2*Number.parseInt(c.css("border").replace(/px.*/,""));return{w:d+h,h:p+h,body:f.rectangle(e,n,d+h,p+h,{chamfer:{radius:v}}),elem:document.querySelector("#tag"+l),prevX:s(e),prevY:s(n),render(){let{x:e,y:t}=this.body.position,n=s(e),r=s(t);if(this.prevX===n&&this.prevY===r)return;let i=r-this.h/2;this.elem.style.top=`${i}px`;let o=n-this.w/2;this.elem.style.left=`${o}px`,this.elem.style.transform=`rotate(${this.body.angle}rad)`,this.prevX=n,this.prevY=r}}};!function(){let e=new d(".main-container-content .canvas-container:visible",["JTBD","User & Market Research","Usability testing","Accessibility","CJM","Qualitative research","UX design","Wireframing","UX research","Quantitative research","Design systems","Problem solving","User centred design","User-Centered Design","Prototyping","Interaction design"],["#B3DDC7","#F9E398","#EB7A53","#C1D8FE"]);e.render(),window.addEventListener("resize",()=>{e.onWindowResizing()})}();const g=["#D5B8F0","#C1D8FE","#F9E398","#EB7A53","#B3DDC7"];!function(){let e=new d(".case-1-container .canvas-container",["Design system","UI design","B2B","Qualitative research","Usability testing","2022"],g);e.render(),window.addEventListener("resize",()=>{e.onWindowResizing()})}(),function(){let e=new d(".case-2-container .canvas-container",["Design system","UI design","B2B","Qualitative research","Usability testing","2022"],g);e.render(),window.addEventListener("resize",()=>{e.onWindowResizing()})}(),function(){let e=new d(".case-3-container .canvas-container",["Design system","UI design","B2B","Qualitative research","Usability testing","2022"],g);e.render(),window.addEventListener("resize",()=>{e.onWindowResizing()})}();//# sourceMappingURL=index.05a9f5c4.js.map

//# sourceMappingURL=index.05a9f5c4.js.map
