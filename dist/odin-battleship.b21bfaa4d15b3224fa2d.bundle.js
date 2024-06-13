!function(){"use strict";var e={};function r(r){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if("string"!=typeof r||!n.every((function(e){return"function"==typeof e}))){var a="".concat(r).concat(n.length>0?", "+n.toString().replace(/(?:\[|\])/,""):"");throw TypeError("Expect event name of type 'string' and at least 1 callback! Given: '".concat(a,"'"))}var i;e[r]?(i=e[r]).push.apply(i,n):e[r]=n}function t(r,t){if("string"!=typeof r||"function"!=typeof t)throw TypeError("Expect (eventName: string) & (callback: function)! Given: '".concat(r,", ").concat(t,"'"));e[r]&&(e[r]=e[r].filter((function(e){return e!==t})))}function n(r){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if("string"!=typeof r)throw TypeError("Expect at least 1 argument of type 'string'! Given: '".concat(r,"'"));e[r]&&e[r].forEach((function(e){e.apply(void 0,n)}))}Object.freeze(r),Object.freeze(r.prototype),Object.freeze(t),Object.freeze(t.prototype),Object.freeze(n),Object.freeze(n.prototype);var o={HIT:"Boom",MISS:"Oops",LOSS:"Meh",add:r,remove:t,emit:n};function a(e,r,t){for(var n=arguments.length,o=new Array(n>3?n-3:0),a=3;a<n;a++)o[a-3]=arguments[a];if("string"!=typeof e)throw TypeError("Missing 'tagName' of type 'string'!");var i=document.createElement(e);if(r&&(i.className=r),t&&(i.textContent=t),1===o.length&&Array.isArray(o[0])&&Array.isArray(o[0][0])&&(o=o.flat(1)),o.length>0)for(var c=0;c<o.length;c++){if(!Array.isArray(o[c])||2!==o[c].length||!o[c][0]||"string"!=typeof o[c][0])throw TypeError("A given attribute in '...attrs' must be in the form of [string, string]");(o[c][1]||0===o[c][1]||""===o[c][1])&&i.setAttribute(o[c][0],o[c][1])}return i}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){var n,o,a,c;n=e,o=r,a=t[r],c=function(e,r){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(c)?c:String(c))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e){if(!Number.isInteger(e)||e<2||e>5)throw TypeError("Expect 1 argument (length) of type 'number'; 1 < length < 6! given '".concat(e,"'"));var r=0,t=!1,n=function(){t||(r++,t=r>=e)},o=function(){return t},a={length:e,hits:r,hit:n,isSunk:o};Object.setPrototypeOf(a,u.prototype);var i={configurable:!1,enumerable:!0},c=l(l({},i),{},{writable:!1});return Object.defineProperties(a,{constructor:l(l({},c),{},{enumerable:!1,value:u}),length:l(l({},i),{},{get:function(){return e}}),hits:l(l({},i),{},{get:function(){return r}}),hit:l(l({},c),{},{value:n}),isSunk:l(l({},c),{},{value:o})}),a}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=a.call(t)).done)&&(c.push(n.value),c.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(e,r){if(e){if("string"==typeof e)return p(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?p(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function y(){var e=function(){for(var e=[],r=0;r<10;r++){e[r]=[];for(var t=0;t<10;t++)e[r][t]={}}return e}();e.forEach((function(e){return e.forEach((function(e){e.ship=null,e.attacked=!1,e.missed=!1}))}));var r=function(e){return Math.floor(Math.random()*e)},t=function(r){var t=f(r,2),n=t[0],o=t[1];return null===e[n][o].ship},n=[u(2),u(3),u(3),u(4),u(5)];n.forEach((function(n){for(var o=r(2),a=[];0===a.length;)for(var i=[r(e[0].length-n.length),r(e.length-n.length)],c=0;c<n.length;c++){if(!t(i)){a.splice(0);break}a.push([].concat(i)),i[o]++}a.forEach((function(r){var t=f(r,2),o=t[0],a=t[1];e[o][a].ship=n}))}));var a={ships:n,board:e,receiveAttack:function(r){var t=f(r,2),a=t[0],i=t[1],c=e.length-1,l=e[0].length-1;if(a<0||i<0||a>c||i>l)throw TypeError("Invalid coordinates! It should be in the range from '[0, 0]' to '[".concat(c,", ").concat(l,"]', the given is '[").concat(i,", ").concat(i,"]'."));var u=e[a][i];u.ship&&!u.attacked?(u.ship.hit(),u.attacked=!0,o.emit(o.HIT,[a,i])):u.ship||u.missed||(u.missed=!0,o.emit(o.MISS,[a,i])),n.every((function(e){return e.isSunk()}))&&o.emit(o.LOSS)}};return Object.setPrototypeOf(a,y.prototype),Object.defineProperty(a,"constructor",{value:y,writable:!1,configurable:!1,enumerable:!1}),Object.freeze(a),a}function s(e){var r=["computer","human"];if(void 0===e)e=r[0];else if(e=String(e.toLowerCase()),!r.includes(e))throw TypeError("Invalid type! Only '".concat(r[0],"' & '").concat(r[1],"' are the valid types. Given: '").concat(e,"'"));s.TYPES=r;var t={type:e,gameBoard:y()};return Object.setPrototypeOf(t,s.prototype),Object.defineProperty(t,"constructor",{value:s,writable:!1,enumerable:!1,configurable:!1}),Object.freeze(t),t}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}Object.freeze(o);var h={playersData:[{name:"first-player",player:s("human"),playerUI:a("div","first-player")},{name:"second-player",player:s("computer"),playerUI:a("div","second-player")}],allPlayersDisabled:!1,currentPlayerIndex:0,switchCurrentPlayer:function(){this.currentPlayerIndex=(this.currentPlayerIndex+1)%2},renderPlayerUI:function(e,r){var t,n=this.playersData[e];(t=n.playerUI.children,function(e){if(Array.isArray(e))return d(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return e.remove()})),n.playerUI.append(function(e,r){if("string"!=typeof e||"string"!=typeof r)throw TypeError("Invalid 'name' type; expected: 'string', given: '".concat(e,"'"));var t,n,o,i=a("div","".concat(e,"-info")),c=(t=e.replace("-"," "),o=(n=String(t)).length>1?n.slice(1):"",n.charAt(0).toLocaleUpperCase()+o),l="computer"===r?"COMPUTER":"YOU",u=a("h3","player-name","".concat(c," (").concat(l,")"));return i.append(u),i}(n.name,n.player.type),function(e,r,t){if([e,r,t].forEach((function(e){if(void 0===e)throw TypeError("'Board' is called with an invalid number of arguments!")})),!(e instanceof y))throw TypeError("'Board' is called with invalid 'playerGameBoard'! Given '".concat(e,"'."));if("boolean"!=typeof r||"boolean"!=typeof t)throw TypeError("'Board' expects 'hidden' & 'disabled' of type 'boolean'! Given '".concat(r," & ").concat(t,"'."));var n=a("div","board-container"+(t?" disabled":"")),o=0;return e.board.forEach((function(i,c){o=i.length,i.forEach((function(o,i){var l="board-cell";l+=o.ship&&!r?" ship":"",l+=o.attacked?" attacked":"";var u=a("div",l+=o.missed?" missed":"");t||u.addEventListener("click",(function(){e.receiveAttack([c,i]),console.log("ATTACK!")})),n.appendChild(u)}))})),n.style.display="grid",n.style.gridTemplateColumns="repeat(".concat(o,", 1fr)"),n.style.gridTemplateRows="repeat(".concat(o,", auto)"),n}(n.player.gameBoard,"computer"===n.player.type,this.allPlayersDisabled||e===this.currentPlayerIndex)),r&&r.append(n.playerUI)},renderAllPlayersUI:function(e){for(var r=0;r<h.playersData.length;r++)h.renderPlayerUI(r,e)}};o.add(o.HIT,(function(){h.renderPlayerUI(0===h.currentPlayerIndex?1:0)})),o.add(o.MISS,(function(){h.switchCurrentPlayer(),h.renderAllPlayersUI()})),o.add(o.LOSS,(function(){h.allPlayersDisabled=!0,h.renderAllPlayersUI()}));var b=a("h1","head","Odin BattleShip"),v=a("div","game-container");h.renderAllPlayersUI(v),document.body.append(b,v)}();
//# sourceMappingURL=odin-battleship.b21bfaa4d15b3224fa2d.bundle.js.map