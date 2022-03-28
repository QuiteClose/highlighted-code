var e={exports:{}};
/*!
  Highlight.js v11.5.0 (git: 7a62552656)
  (c) 2006-2022 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */!function(e,t){var n,r=function(){var e={exports:{}};function t(e){return e instanceof Map?e.clear=e.delete=e.set=()=>{throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{throw Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}e.exports=t,e.exports.default=t;var n=e.exports;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const a=e=>!!e.kind;class o{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!a(e))return;let t=e.kind;t=e.sublanguage?"language-"+t:((e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new o(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}function u(e){return p("(?=",e,")")}function d(e){return p("(?:",e,")*")}function h(e){return p("(?:",e,")?")}function p(...e){return e.map((e=>g(e))).join("")}function b(...e){const t=(e=>{const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}})(e);return"("+(t.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}function f(e){return RegExp(e.toString()+"|").exec("").length-1}const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function _(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n;let r=g(e),i="";for(;r.length>0;){const e=m.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(t)}const y="[a-zA-Z]\\w*",x="[a-zA-Z_]\\w*",v="\\b\\d+(\\.\\d+)?",w="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",E="\\b(0b[01]+)",k={begin:"\\\\[\\s\\S]",relevance:0},S={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[k]},j={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[k]},M=(e,t,n={})=>{const r=s({scope:"comment",begin:e,end:t,contains:[]},n);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:p(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},N=M("//","$"),O=M("/\\*","\\*/"),A=M("#","$");var T=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:y,UNDERSCORE_IDENT_RE:x,NUMBER_RE:v,C_NUMBER_RE:w,BINARY_NUMBER_RE:E,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=p(t,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:k,APOS_STRING_MODE:S,QUOTE_STRING_MODE:j,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:M,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:O,HASH_COMMENT_MODE:A,NUMBER_MODE:{scope:"number",begin:v,relevance:0},C_NUMBER_MODE:{scope:"number",begin:w,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:E,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[k,{begin:/\[/,end:/\]/,relevance:0,contains:[k]}]}]},TITLE_MODE:{scope:"title",begin:y,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:x,relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function R(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function L(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function I(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=R,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function C(e,t){Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function B(e,t){if(e.match){if(e.begin||e.end)throw Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function $(e,t){void 0===e.relevance&&(e.relevance=1)}const z=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=n.keywords,e.begin=p(n.beforeMatch,u(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},H=["of","and","for","in","not","or","if","then","parent","list","value"];function D(e,t,n="keyword"){const r=Object.create(null);return"string"==typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((n=>{Object.assign(r,D(e[n],t,n))})),r;function i(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|");r[n[0]]=[e,P(n[0],n[1])]}))}}function P(e,t){return t?Number(t):(e=>H.includes(e.toLowerCase()))(e)?0:1}const U={},q=e=>{console.error(e)},K=(e,...t)=>{console.log("WARN: "+e,...t)},W=(e,t)=>{U[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),U[`${e}/${t}`]=!0)},F=Error();function X(e,t,{key:n}){let r=0;const i=e[n],s={},a={};for(let e=1;e<=t.length;e++)a[e+r]=i[e],s[e+r]=!0,r+=f(t[e-1]);e[n]=a,e[n]._emit=s,e[n]._multi=!0}function G(e){(e=>{e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),(e=>{if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),F;if("object"!=typeof e.beginScope||null===e.beginScope)throw q("beginScope must be object"),F;X(e,e.begin,{key:"beginScope"}),e.begin=_(e.begin,{joinWith:""})}})(e),(e=>{if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"),F;if("object"!=typeof e.endScope||null===e.endScope)throw q("endScope must be object"),F;X(e,e.end,{key:"endScope"}),e.end=_(e.end,{joinWith:""})}})(e)}function Z(e){function t(t,n){return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=f(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(_(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function n(i,a){const o=i;if(i.isCompiled)return o;[L,B,G,z].forEach((e=>e(i,a))),e.compilerExtensions.forEach((e=>e(i,a))),i.__beforeBegin=null,[I,C,$].forEach((e=>e(i,a))),i.isCompiled=!0;let l=null;return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),l=i.keywords.$pattern,delete i.keywords.$pattern),l=l||/\w+/,i.keywords&&(i.keywords=D(i.keywords,e.case_insensitive)),o.keywordPatternRe=t(l,!0),a&&(i.begin||(i.begin=/\B|\b/),o.beginRe=t(o.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(o.endRe=t(o.end)),o.terminatorEnd=g(o.end)||"",i.endsWithParent&&a.terminatorEnd&&(o.terminatorEnd+=(i.end?"|":"")+a.terminatorEnd)),i.illegal&&(o.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{variants:null},t)))),e.cachedVariants?e.cachedVariants:V(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e))("self"===e?i:e)))),i.contains.forEach((e=>{n(e,o)})),i.starts&&n(i.starts,a),o.matcher=(e=>{const t=new r;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(o),o}(e)}function V(e){return!!e&&(e.endsWithParent||V(e.starts))}class J extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const Q=i,Y=s,ee=Symbol("nomatch");var te=(e=>{const t=Object.create(null),i=Object.create(null),s=[];let a=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let g={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c};function f(e){return g.noHighlightRe.test(e)}function m(e,t,n){let r="",i="";"object"==typeof t?(r=e,n=t.ignoreIllegals,i=t.language):(W("10.7.0","highlight(lang, code, ...args) has been deprecated."),W("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,r=t),void 0===n&&(n=!0);const s={code:r,language:i};j("before:highlight",s);const a=s.result?s.result:_(s.language,s.code,n);return a.code=s.code,j("after:highlight",a),a}function _(e,n,i,s){const l=Object.create(null);function c(){if(!k.keywords)return void j.addText(M);let e=0;k.keywordPatternRe.lastIndex=0;let t=k.keywordPatternRe.exec(M),n="";for(;t;){n+=M.substring(e,t.index);const i=x.case_insensitive?t[0].toLowerCase():t[0],s=(r=i,k.keywords[r]);if(s){const[e,r]=s;if(j.addText(n),n="",l[i]=(l[i]||0)+1,l[i]<=7&&(N+=r),e.startsWith("_"))n+=t[0];else{const n=x.classNameAliases[e]||e;j.addKeyword(t[0],n)}}else n+=t[0];e=k.keywordPatternRe.lastIndex,t=k.keywordPatternRe.exec(M)}var r;n+=M.substr(e),j.addText(n)}function u(){null!=k.subLanguage?(()=>{if(""===M)return;let e=null;if("string"==typeof k.subLanguage){if(!t[k.subLanguage])return void j.addText(M);e=_(k.subLanguage,M,!0,S[k.subLanguage]),S[k.subLanguage]=e._top}else e=y(M,k.subLanguage.length?k.subLanguage:null);k.relevance>0&&(N+=e.relevance),j.addSublanguage(e._emitter,e.language)})():c(),M=""}function d(e,t){let n=1;const r=t.length-1;for(;n<=r;){if(!e._emit[n]){n++;continue}const r=x.classNameAliases[e[n]]||e[n],i=t[n];r?j.addKeyword(i,r):(M=i,c(),M=""),n++}}function h(e,t){return e.scope&&"string"==typeof e.scope&&j.openNode(x.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(j.addKeyword(M,x.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),M=""):e.beginScope._multi&&(d(e.beginScope,t),M="")),k=Object.create(e,{parent:{value:k}}),k}function p(e,t,n){let i=((e,t)=>{const n=e&&e.exec(t);return n&&0===n.index})(e.endRe,n);if(i){if(e["on:end"]){const n=new r(e);e["on:end"](t,n),n.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,t,n)}function b(e){return 0===k.matcher.regexIndex?(M+=e[0],1):(T=!0,0)}let f={};function m(t,s){const o=s&&s[0];if(M+=t,null==o)return u(),0;if("begin"===f.type&&"end"===s.type&&f.index===s.index&&""===o){if(M+=n.slice(s.index,s.index+1),!a){const t=Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=f.rule,t}return 1}if(f=s,"begin"===s.type)return(e=>{const t=e[0],n=e.rule,i=new r(n),s=[n.__beforeBegin,n["on:begin"]];for(const n of s)if(n&&(n(e,i),i.isMatchIgnored))return b(t);return n.skip?M+=t:(n.excludeBegin&&(M+=t),u(),n.returnBegin||n.excludeBegin||(M=t)),h(n,e),n.returnBegin?0:t.length})(s);if("illegal"===s.type&&!i){const e=Error('Illegal lexeme "'+o+'" for mode "'+(k.scope||"<unnamed>")+'"');throw e.mode=k,e}if("end"===s.type){const e=function(e){const t=e[0],r=n.substr(e.index),i=p(k,e,r);if(!i)return ee;const s=k;k.endScope&&k.endScope._wrap?(u(),j.addKeyword(t,k.endScope._wrap)):k.endScope&&k.endScope._multi?(u(),d(k.endScope,e)):s.skip?M+=t:(s.returnEnd||s.excludeEnd||(M+=t),u(),s.excludeEnd&&(M=t));do{k.scope&&j.closeNode(),k.skip||k.subLanguage||(N+=k.relevance),k=k.parent}while(k!==i.parent);return i.starts&&h(i.starts,e),s.returnEnd?0:t.length}(s);if(e!==ee)return e}if("illegal"===s.type&&""===o)return 1;if(A>1e5&&A>3*s.index)throw Error("potential infinite loop, way more iterations than matches");return M+=o,o.length}const x=E(e);if(!x)throw q(o.replace("{}",e)),Error('Unknown language: "'+e+'"');const v=Z(x);let w="",k=s||v;const S={},j=new g.__emitter(g);(()=>{const e=[];for(let t=k;t!==x;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach((e=>j.openNode(e)))})();let M="",N=0,O=0,A=0,T=!1;try{for(k.matcher.considerAll();;){A++,T?T=!1:k.matcher.considerAll(),k.matcher.lastIndex=O;const e=k.matcher.exec(n);if(!e)break;const t=m(n.substring(O,e.index),e);O=e.index+t}return m(n.substr(O)),j.closeAllNodes(),j.finalize(),w=j.toHTML(),{language:e,value:w,relevance:N,illegal:!1,_emitter:j,_top:k}}catch(t){if(t.message&&t.message.includes("Illegal"))return{language:e,value:Q(n),illegal:!0,relevance:0,_illegalBy:{message:t.message,index:O,context:n.slice(O-100,O+100),mode:t.mode,resultSoFar:w},_emitter:j};if(a)return{language:e,value:Q(n),illegal:!1,relevance:0,errorRaised:t,_emitter:j,_top:k};throw t}}function y(e,n){n=n||g.languages||Object.keys(t);const r=(e=>{const t={value:Q(e),illegal:!1,relevance:0,_top:l,_emitter:new g.__emitter(g)};return t._emitter.addText(e),t})(e),i=n.filter(E).filter(S).map((t=>_(t,e,!1)));i.unshift(r);const s=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(E(e.language).supersetOf===t.language)return 1;if(E(t.language).supersetOf===e.language)return-1}return 0})),[a,o]=s,c=a;return c.secondBest=o,c}function x(e){let t=null;const n=(e=>{let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const t=E(n[1]);return t||(K(o.replace("{}",n[1])),K("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>f(e)||E(e)))})(e);if(f(n))return;if(j("before:highlightElement",{el:e,language:n}),e.children.length>0&&(g.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),g.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML);t=e;const r=t.textContent,s=n?m(r,{language:n,ignoreIllegals:!0}):y(r);e.innerHTML=s.value,((e,t,n)=>{const r=t&&i[t]||n;e.classList.add("hljs"),e.classList.add("language-"+r)})(e,n,s.language),e.result={language:s.language,re:s.relevance,relevance:s.relevance},s.secondBest&&(e.secondBest={language:s.secondBest.language,relevance:s.secondBest.relevance}),j("after:highlightElement",{el:e,result:s,text:r})}let v=!1;function w(){"loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(x):v=!0}function E(e){return e=(e||"").toLowerCase(),t[e]||t[i[e]]}function k(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e.toLowerCase()]=t}))}function S(e){const t=E(e);return t&&!t.disableAutodetect}function j(e,t){const n=e;s.forEach((e=>{e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{v&&w()}),!1),Object.assign(e,{highlight:m,highlightAuto:y,highlightAll:w,highlightElement:x,highlightBlock:e=>(W("10.7.0","highlightBlock will be removed entirely in v12.0"),W("10.7.0","Please use highlightElement now."),x(e)),configure:e=>{g=Y(g,e)},initHighlighting:()=>{w(),W("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:()=>{w(),W("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:(n,r)=>{let i=null;try{i=r(e)}catch(e){if(q("Language definition for '{}' could not be registered.".replace("{}",n)),!a)throw e;q(e),i=l}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&k(i.aliases,{languageName:n})},unregisterLanguage:e=>{delete t[e];for(const t of Object.keys(i))i[t]===e&&delete i[t]},listLanguages:()=>Object.keys(t),getLanguage:E,registerAliases:k,autoDetection:S,inherit:Y,addPlugin:e=>{(e=>{e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)}}),e.debugMode=()=>{a=!1},e.safeMode=()=>{a=!0},e.versionString="11.5.0",e.regex={concat:p,lookahead:u,either:b,optional:h,anyNumberOfTimes:d};for(const e in T)"object"==typeof T[e]&&n(T[e]);return Object.assign(e,T),e})({});return te}();e.exports=r,/*! `sql` grammar compiled for Highlight.js 11.5.0 */
n=e=>{const t=e.regex,n=e.COMMENT("--","$"),r=["true","false","unknown"],i=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],s=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],a=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],o=s,l=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!s.includes(e))),c={begin:t.concat(/\b/,t.either(...o),/\s*\(/),relevance:0,keywords:{built_in:o}};return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:((e,{exceptions:t,when:n}={})=>{const r=n;return t=t||[],e.map((e=>e.match(/\|\d+$/)||t.includes(e)?e:r(e)?e+"|0":e))})(l,{when:e=>e.length<3}),literal:r,type:i,built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]},contains:[{begin:t.either(...a),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:l.concat(a),literal:r,type:i}},{className:"type",begin:t.either("double precision","large object","with timezone","without timezone")},c,{className:"variable",begin:/@[a-z0-9]+/},{className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}},r.registerLanguage("sql",n)}(e);var t=e.exports;
/*! (c) Andrea Giammarchi - ISC */const n="highlighted-code",r=new WeakMap,i={timeout:300,box:"border-box"},s="function"!=typeof cancelIdleCallback,a=s?setTimeout:requestIdleCallback,o=s?clearTimeout:cancelIdleCallback,l="object"==typeof netscape;let c,g;class u extends HTMLTextAreaElement{static get library(){return t}static get observedAttributes(){return["auto-height","disabled","language","tab-size"]}static insertText(e){const{activeElement:t}=document;try{if(!(e?document.execCommand("insertText",!1,e):document.execCommand("delete")))throw event}catch(n){const{selectionStart:r}=t;t.setRangeText(e),t.selectionStart=t.selectionEnd=r+e.length}t.oninput()}static useTheme(e){c||(c=document.head.appendChild(document.createElement("link")),c.rel="stylesheet",c.addEventListener("load",(()=>{for(const e of document.querySelectorAll(`textarea[is="${n}"]`))p.call(e)}))),c.href=e.includes(".")?e:`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/${e}.min.css`}constructor(){super(),this.idle=0;const e=this.ownerDocument.createElement("pre");e.className=n,e.innerHTML="<code></code>",r.set(this,e),this.style.cssText+="\n      tab-size: 2;\n      white-space: pre;\n      font-family: monospace;\n      color: transparent;\n      background-color: transparent;\n    ";const{autoHeight:t,language:i,tabSize:s}=this;t&&(delete this.autoHeight,this.autoHeight=t),i&&(delete this.language,this.language=i),s&&(delete this.tabSize,this.tabSize=s)}get autoHeight(){return this.hasAttribute("auto-height")}set autoHeight(e){e?this.setAttribute("auto-height",""):this.removeAttribute("auto-height")}get language(){return this.getAttribute("language")}set language(e){this.setAttribute("language",e)}get tabSize(){return this.getAttribute("tab-size")}set tabSize(e){this.setAttribute("tab-size",e)}get value(){return super.value}set value(e){super.value=e,this.oninput()}attributeChangedCallback(e,t,n){switch(e){case"auto-height":this.style.height=null,null!=n&&(this.value=this.value.trimEnd(),h.call(this));break;case"disabled":l&&(r.get(this).style.pointerEvents=this.disabled?"all":"none");break;case"language":let e="hljs";n&&(e+=" language-"+n),r.get(this).querySelector("code").className=e;break;case"tab-size":this.style.tabSize=n,r.get(this).style.tabSize=n}}connectedCallback(){this.parentElement.insertBefore(r.get(this),this.nextSibling),this.oninput(),p.call(this),g.observe(this,i),this.addEventListener("keydown",this),this.addEventListener("scroll",this),this.addEventListener("input",this)}disconnectedCallback(){r.get(this).remove(),g.unobserve(this),this.removeEventListener("keydown",this),this.removeEventListener("scroll",this),this.removeEventListener("input",this)}handleEvent(e){this["on"+e.type](e)}onkeydown(e){"Tab"===e.key&&(u.insertText("\t"),e.preventDefault())}oninput(){o(this.idle);const e=this.idle=a((()=>{const{language:n,value:i}=this,s=r.get(this).querySelector("code");n||(s.className="hljs"),s.innerHTML=(n?t.highlight(i,{language:n}):t.highlightAuto(i)).value+"<br>",this.onscroll(),e===this.idle&&this.autoHeight&&h.call(this)}),i)}onscroll(){const{scrollTop:e,scrollLeft:t}=this,n=r.get(this);n.scrollTop=e,n.scrollLeft=t,l&&"scrollLeftMax"in n&&(this.scrollLeft=Math.min(t,n.scrollLeftMax))}}customElements.get(n)||(g=new ResizeObserver((e=>{for(const{target:t}of e){const e=r.get(t),{border:n,font:i,letterSpacing:s,lineHeight:a,padding:o,wordSpacing:c}=getComputedStyle(t),{top:g,left:u,width:d,height:h}=t.getBoundingClientRect();e.style.cssText=`\n        position: absolute;\n        overflow: auto;\n        box-sizing: border-box;\n        pointer-events: ${l&&t.disabled?"all":"none"};\n        tab-size: ${t.tabSize||2};\n        top: ${g}px;\n        left: ${u}px;\n        width: ${d}px;\n        height: ${h}px;\n        font: ${i};\n        letter-spacing: ${s};\n        word-spacing: ${c};\n        line-height: ${a};\n        padding: ${o};\n        border: ${n};\n        margin: 0;\n        background: initial;\n        border-color: transparent;\n      `}})),customElements.define(n,u,{extends:"textarea"}));var d=customElements.get(n);function h(){const{boxSizing:e,borderTop:t,borderBottom:n,paddingTop:r,paddingBottom:i}=getComputedStyle(this),s=(parseFloat(r)||0)+(parseFloat(i)||0),a=(parseFloat(t)||0)+(parseFloat(n)||0),o="border-box"===e?-a:s;this.style.height=this.scrollHeight-o+"px"}function p(){const e=r.get(this).querySelector("code");e.style.backgroundColor=null;const{color:t,backgroundColor:n}=getComputedStyle(e);this.style.caretColor=t,this.style.backgroundColor=n,e.style.cssText="\n    background-color: transparent;\n    overflow: unset;\n    margin: 0;\n    padding: 0;\n  "}export{d as default};
