(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))g(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&g(u)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function g(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Q(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M={},J={get exports(){return M},set exports(t){M=t}},F={},X={get exports(){return F},set exports(t){F=t}};(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=g;function i(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(u){return typeof u}:i=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i(l)}function g(l){var f=typeof l=="string"||l instanceof String;if(!f){var u=i(l);throw l===null?u="null":u==="object"&&(u=l.constructor.name),new TypeError("Expected a string but received a ".concat(u))}}t.exports=a.default,t.exports.default=a.default})(X,F);var E={},Y={get exports(){return E},set exports(t){E=t}};(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=i;function i(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;for(var f in l)typeof g[f]>"u"&&(g[f]=l[f]);return g}t.exports=a.default,t.exports.default=a.default})(Y,E);var U={},k={get exports(){return U},set exports(t){U=t}};(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=f;var i=g(F);function g(u){return u&&u.__esModule?u:{default:u}}function l(u){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(s){return typeof s}:l=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},l(u)}function f(u,n){(0,i.default)(u);var s,p;l(n)==="object"?(s=n.min||0,p=n.max):(s=arguments[1],p=arguments[2]);var v=encodeURI(u).split(/%..|./).length-1;return v>=s&&(typeof p>"u"||v<=p)}t.exports=a.default,t.exports.default=a.default})(k,U);var R={},j={get exports(){return R},set exports(t){R=t}};(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=u;var i=l(F),g=l(E);function l(n){return n&&n.__esModule?n:{default:n}}var f={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function u(n,s){(0,i.default)(n),s=(0,g.default)(s,f),s.allow_trailing_dot&&n[n.length-1]==="."&&(n=n.substring(0,n.length-1)),s.allow_wildcard===!0&&n.indexOf("*.")===0&&(n=n.substring(2));var p=n.split("."),v=p[p.length-1];return s.require_tld&&(p.length<2||!s.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(v)||/\s/.test(v))||!s.allow_numeric_tld&&/^\d+$/.test(v)?!1:p.every(function(m){return!(m.length>63&&!s.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(m)||/[\uff01-\uff5e]/.test(m)||/^-|-$/.test(m)||!s.allow_underscores&&/_/.test(m))})}t.exports=a.default,t.exports.default=a.default})(j,R);var q={},ee={get exports(){return q},set exports(t){q=t}};(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=p;var i=g(F);function g(v){return v&&v.__esModule?v:{default:v}}var l="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",f="(".concat(l,"[.]){3}").concat(l),u=new RegExp("^".concat(f,"$")),n="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(n,":){7}(?:").concat(n,"|:)|")+"(?:".concat(n,":){6}(?:").concat(f,"|:").concat(n,"|:)|")+"(?:".concat(n,":){5}(?::").concat(f,"|(:").concat(n,"){1,2}|:)|")+"(?:".concat(n,":){4}(?:(:").concat(n,"){0,1}:").concat(f,"|(:").concat(n,"){1,3}|:)|")+"(?:".concat(n,":){3}(?:(:").concat(n,"){0,2}:").concat(f,"|(:").concat(n,"){1,4}|:)|")+"(?:".concat(n,":){2}(?:(:").concat(n,"){0,3}:").concat(f,"|(:").concat(n,"){1,5}|:)|")+"(?:".concat(n,":){1}(?:(:").concat(n,"){0,4}:").concat(f,"|(:").concat(n,"){1,6}|:)|")+"(?::((?::".concat(n,"){0,5}:").concat(f,"|(?::").concat(n,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function p(v){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,i.default)(v),m=String(m),m?m==="4"?u.test(v):m==="6"?s.test(v):!1:p(v,4)||p(v,6)}t.exports=a.default,t.exports.default=a.default})(ee,q);(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=H;var i=n(F),g=n(E),l=n(U),f=n(R),u=n(q);function n(e){return e&&e.__esModule?e:{default:e}}var s={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},p=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,m=/^[a-z\d]+$/,C=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,T=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,z=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,Z=254;function L(e){var r=e.replace(/^"(.+)"$/,"$1");if(!r.trim())return!1;var o=/[\.";<>]/.test(r);if(o){if(r===e)return!1;var d=r.split('"').length===r.split('\\"').length;if(!d)return!1}return!0}function H(e,r){if((0,i.default)(e),r=(0,g.default)(r,s),r.require_display_name||r.allow_display_name){var o=e.match(p);if(o){var d=o[1];if(e=e.replace(d,"").replace(/(^<|>$)/g,""),d.endsWith(" ")&&(d=d.slice(0,-1)),!L(d))return!1}else if(r.require_display_name)return!1}if(!r.ignore_max_length&&e.length>Z)return!1;var y=e.split("@"),x=y.pop(),w=x.toLowerCase();if(r.host_blacklist.includes(w)||r.host_whitelist.length>0&&!r.host_whitelist.includes(w))return!1;var _=y.join("@");if(r.domain_specific_validation&&(w==="gmail.com"||w==="googlemail.com")){_=_.toLowerCase();var c=_.split("+")[0];if(!(0,l.default)(c.replace(/\./g,""),{min:6,max:30}))return!1;for(var S=c.split("."),A=0;A<S.length;A++)if(!m.test(S[A]))return!1}if(r.ignore_max_length===!1&&(!(0,l.default)(_,{max:64})||!(0,l.default)(x,{max:254})))return!1;if(!(0,f.default)(x,{require_tld:r.require_tld,ignore_max_length:r.ignore_max_length})){if(!r.allow_ip_domain)return!1;if(!(0,u.default)(x)){if(!x.startsWith("[")||!x.endsWith("]"))return!1;var D=x.slice(1,-1);if(D.length===0||!(0,u.default)(D))return!1}}if(_[0]==='"')return _=_.slice(1,_.length-1),r.allow_utf8_local_part?z.test(_):C.test(_);for(var G=r.allow_utf8_local_part?T:v,I=_.split("."),b=0;b<I.length;b++)if(!G.test(I[b]))return!1;return!(r.blacklisted_chars&&_.search(new RegExp("[".concat(r.blacklisted_chars,"]+"),"g"))!==-1)}t.exports=a.default,t.exports.default=a.default})(J,M);const te=Q(M);var N={},re={get exports(){return N},set exports(t){N=t}};(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=H;var i=u(F),g=u(R),l=u(q),f=u(E);function u(e){return e&&e.__esModule?e:{default:e}}function n(e,r){return C(e)||m(e,r)||p(e,r)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(e,r){if(e){if(typeof e=="string")return v(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return v(e,r)}}function v(e,r){(r==null||r>e.length)&&(r=e.length);for(var o=0,d=new Array(r);o<r;o++)d[o]=e[o];return d}function m(e,r){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var o=[],d=!0,y=!1,x=void 0;try{for(var w=e[Symbol.iterator](),_;!(d=(_=w.next()).done)&&(o.push(_.value),!(r&&o.length===r));d=!0);}catch(c){y=!0,x=c}finally{try{!d&&w.return!=null&&w.return()}finally{if(y)throw x}}return o}}function C(e){if(Array.isArray(e))return e}var T={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0},z=/^\[([^\]]+)\](?::([0-9]+))?$/;function Z(e){return Object.prototype.toString.call(e)==="[object RegExp]"}function L(e,r){for(var o=0;o<r.length;o++){var d=r[o];if(e===d||Z(d)&&d.test(e))return!0}return!1}function H(e,r){if((0,i.default)(e),!e||/[\s<>]/.test(e)||e.indexOf("mailto:")===0||(r=(0,f.default)(r,T),r.validate_length&&e.length>=2083)||!r.allow_fragments&&e.includes("#")||!r.allow_query_components&&(e.includes("?")||e.includes("&")))return!1;var o,d,y,x,w,_,c,S;if(c=e.split("#"),e=c.shift(),c=e.split("?"),e=c.shift(),c=e.split("://"),c.length>1){if(o=c.shift().toLowerCase(),r.require_valid_protocol&&r.protocols.indexOf(o)===-1)return!1}else{if(r.require_protocol)return!1;if(e.slice(0,2)==="//"){if(!r.allow_protocol_relative_urls)return!1;c[0]=e.slice(2)}}if(e=c.join("://"),e==="")return!1;if(c=e.split("/"),e=c.shift(),e===""&&!r.require_host)return!0;if(c=e.split("@"),c.length>1){if(r.disallow_auth||c[0]===""||(d=c.shift(),d.indexOf(":")>=0&&d.split(":").length>2))return!1;var A=d.split(":"),D=n(A,2),G=D[0],I=D[1];if(G===""&&I==="")return!1}x=c.join("@"),_=null,S=null;var b=x.match(z);if(b?(y="",S=b[1],_=b[2]||null):(c=x.split(":"),y=c.shift(),c.length&&(_=c.join(":"))),_!==null&&_.length>0){if(w=parseInt(_,10),!/^[0-9]+$/.test(_)||w<=0||w>65535)return!1}else if(r.require_port)return!1;return r.host_whitelist?L(y,r.host_whitelist):y===""&&!r.require_host?!0:!(!(0,l.default)(y)&&!(0,g.default)(y,r)&&(!S||!(0,l.default)(S,6))||(y=y||S,r.host_blacklist&&L(y,r.host_blacklist)))}t.exports=a.default,t.exports.default=a.default})(re,N);const ae=Q(N);var B={},ne={get exports(){return B},set exports(t){B=t}};(function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=n;var i=g(F);function g(s){return s&&s.__esModule?s:{default:s}}var l={loose:!1},f=["true","false","1","0"],u=[].concat(f,["yes","no"]);function n(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:l;return(0,i.default)(s),p.loose?u.includes(s.toLowerCase()):f.includes(s)}t.exports=a.default,t.exports.default=a.default})(ne,B);const le=Q(B);function O(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(i){return typeof i}:O=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},O(t)}function W(t){var a=typeof t=="string"||t instanceof String;if(!a){var i=O(t);throw t===null?i="null":i==="object"&&(i=t.constructor.name),new TypeError("Expected a string but received a ".concat(i))}}var V=/^\d{3}$/,$=/^\d{4}$/,h=/^\d{5}$/,K=/^\d{6}$/,P={AD:/^AD\d{3}$/,AT:$,AU:$,AZ:/^AZ\d{4}$/,BA:/^([7-8]\d{4}$)/,BE:$,BG:$,BR:/^\d{5}-\d{3}$/,BY:/^2[1-4]\d{4}$/,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:$,CN:/^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,CZ:/^\d{3}\s?\d{2}$/,DE:h,DK:$,DO:h,DZ:h,EE:h,ES:/^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,FI:h,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HT:/^HT\d{4}$/,HU:$,ID:h,IE:/^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,IL:/^(\d{5}|\d{7})$/,IN:/^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,IR:/^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,IS:V,IT:h,JP:/^\d{3}\-\d{4}$/,KE:h,KR:/^(\d{5}|\d{6})$/,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:$,LV:/^LV\-\d{4}$/,LK:h,MG:V,MX:h,MT:/^[A-Za-z]{3}\s{0,1}\d{4}$/,MY:h,NL:/^\d{4}\s?[a-z]{2}$/i,NO:$,NP:/^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,NZ:$,PL:/^\d{2}\-\d{3}$/,PR:/^00[679]\d{2}([ -]\d{4})?$/,PT:/^\d{4}\-\d{3}?$/,RO:K,RU:K,SA:h,SE:/^[1-9]\d{2}\s?\d{2}$/,SG:K,SI:$,SK:/^\d{3}\s?\d{2}$/,TH:h,TN:$,TW:/^\d{3}(\d{2})?$/,UA:h,US:/^\d{5}(-\d{4})?$/,ZA:$,ZM:h};function fe(t,a){if(W(t),a in P)return P[a].test(t);if(a==="any"){for(var i in P)if(P.hasOwnProperty(i)){var g=P[i];if(g.test(t))return!0}return!1}throw new Error("Invalid locale '".concat(a,"'"))}function ue(t){return W(t),t===t.toUpperCase()}console.log(te("vinicius.virgilli3@gmail.com"));console.log(ae("trybe.com"));console.log(le("false"));console.log(fe("74395-038","BR"));console.log(ue("TEST"));
