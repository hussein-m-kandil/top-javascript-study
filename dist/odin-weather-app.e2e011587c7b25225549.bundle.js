!function(){"use strict";var t={};function e(t,e,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];if("string"!=typeof t)throw TypeError("Missing 'tagName' of type 'string'!");const i=document.createElement(t);if(e&&(i.className=e),n&&(i.textContent=n),1===a.length&&Array.isArray(a[0])&&Array.isArray(a[0][0])&&(a=a.flat(1)),a.length>0)for(let t=0;t<a.length;t++){if(!Array.isArray(a[t])||2!==a[t].length||!a[t][0]||"string"!=typeof a[t][0])throw TypeError("A given attribute in '...attrs' must be in the form of [string, string]");(a[t][1]||0===a[t][1]||""===a[t][1])&&i.setAttribute(a[t][0],a[t][1])}return i}t.p="./";function n(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function r(t,e){const r=n(t),a=n(e);return r.getTime()>a.getTime()}const a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function o(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const i={date:o({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:o({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:o({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function c(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var d;const l={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=a[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:i,formatRelative:(t,e,n,r)=>s[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(d.matchPattern);if(!n)return null;const r=n[0],a=t.match(d.parsePattern);if(!a)return null;let o=d.valueCallback?d.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:c({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:c({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:c({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:c({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:c({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let h={};function m(){return h}Math.pow(10,8);const f=6048e5,g=864e5;function w(t){const e=n(t);return e.setHours(0,0,0,0),e}function p(t){const e=n(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function b(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function y(t){const e=n(t);return function(t,e){const n=w(t),r=w(e),a=+n-p(n),o=+r-p(r);return Math.round((a-o)/g)}(e,function(t){const e=n(t),r=b(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}(e))+1}function v(t,e){const r=m(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,o=n(t),i=o.getDay(),s=(i<a?7:0)+i-a;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function M(t){return v(t,{weekStartsOn:1})}function k(t){const e=n(t),r=e.getFullYear(),a=b(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=M(a),i=b(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=M(i);return e.getTime()>=o.getTime()?r+1:e.getTime()>=s.getTime()?r:r-1}function x(t){const e=n(t),r=+M(e)-+function(t){const e=k(t),n=b(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),M(n)}(e);return Math.round(r/f)+1}function P(t,e){const r=n(t),a=r.getFullYear(),o=m(),i=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=b(t,0);s.setFullYear(a+1,0,i),s.setHours(0,0,0,0);const u=v(s,e),c=b(t,0);c.setFullYear(a,0,i),c.setHours(0,0,0,0);const d=v(c,e);return r.getTime()>=u.getTime()?a+1:r.getTime()>=d.getTime()?a:a-1}function S(t,e){const r=n(t),a=+v(r,e)-+function(t,e){const n=m(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=P(t,e),o=b(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),v(o,e)}(r,e);return Math.round(a/f)+1}function W(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const T={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return W("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):W(n+1,2)},d(t,e){return W(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h(t,e){return W(t.getHours()%12||12,e.length)},H(t,e){return W(t.getHours(),e.length)},m(t,e){return W(t.getMinutes(),e.length)},s(t,e){return W(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds();return W(Math.trunc(r*Math.pow(10,n-3)),e.length)}},D={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return T.y(t,e)},Y:function(t,e,n,r){const a=P(t,r),o=a>0?a:1-a;return"YY"===e?W(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):W(o,e.length)},R:function(t,e){return W(k(t),e.length)},u:function(t,e){return W(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return T.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=S(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):W(a,e.length)},I:function(t,e,n){const r=x(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):W(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):T.d(t,e)},D:function(t,e,n){const r=y(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return W(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return W(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return W(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return T.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):T.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):T.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):T.s(t,e)},S:function(t,e){return T.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return E(r);case"XXXX":case"XX":return N(r);default:return N(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return E(r);case"xxxx":case"xx":return N(r);default:return N(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(r,":");default:return"GMT"+N(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(r,":");default:return"GMT"+N(r,":")}},t:function(t,e,n){return W(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return W(t.getTime(),e.length)}};function C(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+W(o,2)}function E(t,e){return t%60==0?(t>0?"-":"+")+W(Math.abs(t)/60,2):N(t,e)}function N(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+W(Math.trunc(r/60),2)+e+W(r%60,2)}const Y=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},q=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},O={p:q,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Y(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",Y(r,e)).replace("{{time}}",q(a,e))}},A=/^D+$/,F=/^Y+$/,L=["D","DD","YY","YYYY"];function H(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const r=n(t);return!isNaN(Number(r))}const j=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,$=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z=/^'([^]*?)'?$/,Q=/''/g,_=/[a-zA-Z]/;function G(t,e,r){const a=m(),o=r?.locale??a.locale??l,i=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,u=n(t);if(!H(u))throw new RangeError("Invalid time value");let c=e.match($).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,O[e])(t,o.formatLong):t})).join("").match(j).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:B(t)};if(D[e])return{isToken:!0,value:t};if(e.match(_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(c=o.localize.preprocessor(u,c));const d={firstWeekContainsDate:i,weekStartsOn:s,locale:o};return c.map((n=>{if(!n.isToken)return n.value;const a=n.value;return(!r?.useAdditionalWeekYearTokens&&function(t){return F.test(t)}(a)||!r?.useAdditionalDayOfYearTokens&&function(t){return A.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),L.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,D[a[0]])(u,a,o.localize,d)})).join("")}function B(t){const e=t.match(z);return e?e[1].replace(Q,"'"):t}function X(t,n,r){const a=e("div",`card ${r}`);return a.append(e("div","title",t),e("div","content",n)),a}function I(t,n,a){const o=document.querySelector("input.location");o&&(o.value=n.location.name);const i=document.querySelector(`.${t}`);i&&([...i.children].forEach((t=>t.remove())),i.append(function(t,n){const a=t.current,o=t.forecast.forecastday[0].day,i=t.forecast.forecastday[0].hour,s=n.toLowerCase();let u,c,d,l;"celsius"===s?(c=a.feelslike_c,u=a.temp_c,d=o.maxtemp_c,l=o.mintemp_c):(u=a.temp_f,c=a.feelslike_f,d=o.maxtemp_f,l=o.mintemp_f);const h=e("div","current-weather"),m=e("div","weather-hero"),f=e("div","weather-extras");m.append(e("div","current-temp",`${u}°`),e("div","condition",`${a.condition.text}`),e("span","feels-like",` Feels like ${c}°`)),f.append(X("High",`${d}°`,"high-temp"),X("Low",`${l}°`,"low-temp"),X("Humidity",`${a.humidity}%`,"humidity"));const g=e("div","hours-weather");for(let t=0;t<i.length;t++){const e=i[t];r(e.time,new Date)&&g.append(X(G(e.time,"hh:mm a"),"celsius"===s?`${e.temp_c}°`:`${e.temp_f}°`,"hour-temp"))}return h.append(m,f,g),h}(n,a)))}var J=t.p+"asset/images/952a8b90328e46f562ee.gif";const U="weather-content",R=["Celsius","Fahrenheit"];let V=R[0],K=null;const Z=e("h1","app-title","Odin Weather App"),tt=function(t){const n=e("form","weather-location"),r=e("input","location","",["type","text"],["name","location"],["placeholder",'Location (e.g. "Cairo")'],["autocomplete","off"],["autofocus",""]),a=e("button","location","",["type","submit"],["aria-label","Get weather"]),o=e("span","ui-only","🔍",["aria-hidden","true"]),i=e("div","error");return a.appendChild(o),n.append(i,r,a),n.addEventListener("submit",(t=>{t.preventDefault(),n.classList.add("invalid");const r=n.location,a=r.value;a?/^[\w-\s'"]+$/.test(a)?(i.textContent="",n.classList.remove("invalid"),(t=>{!function(t){const n=document.querySelector(`.${t}`);n&&([...n.children].forEach((t=>t.remove())),n.append(e("img","loading-gif",null,["src",J],["alt","Loading..."],["width","50"])))}(U),function(t){return new Promise(((e,n)=>{(async function(t){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=646f26dea5ab4974bc3120515240604&q=${t}`,{mode:"cors"});if(e.ok)return await e.json();throw Error("Fetched response in not ok!")}catch(t){console.log(`${t.name} in 'getWeatherData': \n\t${t.message}`)}return null})(t).then((t=>{t?e(t):n(Error("There is no weather data!"))}))}))}(t).then((t=>{K=t,I(U,K,V)})).catch((()=>{const t=document.querySelector(`.${U}`);t&&([...t.children].forEach((t=>t.remove())),t.append(e("div","weather-info-error","No weather data! check the location's name and try again.")))}))})(a),r.blur()):i.textContent="* Invalid location name!":i.textContent="* Location is required!"})),n}(),et=function(t,n){if(!n)throw Error("Missing argument: 'toggleCallback' type 'function'");if(!t)throw Error("Missing argument: 'values' type 'string[]'");if(!Array.isArray(t)||t.length<1)throw TypeError("Invalid argument: 'values' must be non-empty array of strings");const r=e("div","toggler",null,["aria-label","Unit Toggler"]);for(let a=0;a<t.length;a++){const o=e("button","toggler-choice"+(0===a?" toggler-choice-selected":""),t[a],["type","button"]);o.addEventListener("click",(()=>{n({index:a,value:t[a]}),[...r.children].forEach((t=>t.classList.remove("toggler-choice-selected"))),o.classList.add("toggler-choice-selected")})),r.append(o)}return r}(R,(t=>{let{value:e}=t;V=e,K&&I(U,K,V)})),nt=e("div",U);nt.append(e("div","initial-message","Weather data will be shown here..."));const rt=e("footer","link-back"),at=e("div","bg-credits"),ot=e("div","weather-api-credits");at.append(document.createTextNode("Background image by "),e("a","bg-image-owner"," 12019",["href","https://pixabay.com/users/12019-12019/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1985027"]),document.createTextNode(" from "),e("a","bg-image-site"," Pixabay",["href","https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1985027"])),ot.append(document.createTextNode("Powered by "),e("a","weather-api"," WeatherAPI.com",["href","https://www.weatherapi.com/"],["title","Weather API"])),rt.append(at,ot),document.body.append(Z,tt,et,nt,rt)}();
//# sourceMappingURL=odin-weather-app.e2e011587c7b25225549.bundle.js.map