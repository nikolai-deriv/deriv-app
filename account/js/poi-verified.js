/*! For license information please see poi-verified.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,n,r){return(()=>{var o={"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var r=n("react"),o=n.n(r),s=n("../../../node_modules/classnames/index.js"),a=n.n(s),i=n("@deriv/components"),c=n("@deriv/shared");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=function(e){var t=e.className,n=e.children,r=e.icon,s=e.icon_row,u=e.message,l=e.text;return o().createElement(i.Div100vhContainer,{className:"account-management__message-wrapper",is_disabled:(0,c.isDesktop)(),height_offset:"110px"},o().createElement("div",{className:a()("account-management__message-content",d({},"".concat(t,"__message-content"),t))},r&&o().createElement("div",{className:a()("account-management__message-icon",d({},"".concat(t,"__message-icon"),t))},r),s&&o().createElement("div",null,s),o().createElement("div",{className:a()("account-management__message",d({},"".concat(t,"__message"),t))},u),l&&o().createElement("div",{className:"account-management__text-container"},o().createElement(i.Text,{className:a()(d({},"".concat(t,"__text"),t)),as:"p",size:"xs",align:"center"},l)),n))}},"./Components/poa-button/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n("@deriv/components"),o=n("@deriv/translations"),s=n("react"),a=n.n(s);const i=function(){return a().createElement(r.ButtonLink,{to:"/account/proof-of-address"},a().createElement(r.Text,{className:"dc-btn__text",as:"p",weight:"bold"},(0,o.localize)("Submit proof of address")))}},"./Components/poa-continue-trading-button/continue-trading-button.jsx":(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var r=n("@deriv/components"),o=n("@deriv/translations"),s=n("react"),a=n.n(s),i=function(){return a().createElement(r.ButtonLink,{to:"/"},a().createElement(r.Text,{className:"dc-btn__text",as:"p",weight:"bold"},(0,o.localize)("Continue trading")))}},"./Components/poa-continue-trading-button/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n("./Components/poa-continue-trading-button/continue-trading-button.jsx").M},"./Components/poi-verified/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var r=n("react"),o=n.n(r),s=n("@deriv/components"),a=n("@deriv/translations"),i=n("./Components/poa-continue-trading-button/index.js"),c=n("./Components/poa-button/index.js"),d=n("./Components/icon-message-content/index.js");const u=function(e){var t=e.has_poa,n=e.is_description_enabled,r=e.redirect_button,u=(0,a.localize)("Your proof of identity is verified");return t?o().createElement(d.default,{message:u,icon:o().createElement(s.Icon,{icon:"IcPoiVerified",size:128})},n&&o().createElement(i.Z,null)):o().createElement(d.default,{message:u,icon:o().createElement(s.Icon,{icon:"IcPoiVerified",size:128}),text:(0,a.localize)("To continue trading, you must also submit a proof of address.")},n&&o().createElement(c.Z,null),r)}},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===s)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=r}},s={};function a(e){if(s[e])return s[e].exports;var t=s[e]={exports:{}};return o[e](t,t.exports,a),t.exports}return a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a("./Components/poi-verified/index.js")})().default}));