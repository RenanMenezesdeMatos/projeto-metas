/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calc.js":
/*!********************!*\
  !*** ./js/calc.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   textContent: () => (/* binding */ textContent)\n/* harmony export */ });\nconst dayjs = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\")\r\nvar duration = __webpack_require__ (/*! dayjs/plugin/duration */ \"./node_modules/dayjs/plugin/duration.js\")\r\nvar customParseFormat = __webpack_require__(/*! dayjs/plugin/customParseFormat */ \"./node_modules/dayjs/plugin/customParseFormat.js\")\r\n\r\n/*let convertDate = function (dataInput){\r\n    let dataInserida = new Date(dataInput)\r\n    let day = dataInserida.getDate()+1;\r\n    let month = dataInserida.getMonth()+1;\r\n    let year = dataInserida.getFullYear();\r\n\r\n    let fullDate = `${day}/${month}/${year}`\r\n\r\n    return fullDate\r\n}\r\n\r\nlet atualDay = function (){\r\n    let data = new Date();\r\n    let dia = String(data.getDate()).padStart(2, '0');\r\n    let mes = String(data.getMonth() + 1).padStart(2, '0');\r\n    let ano = data.getFullYear();\r\n    let dataAtual = `${ano}-${mes}-${dia}`\r\n    return dataAtual\r\n}\r\n\r\n\r\nlet diferencaEmDias = function (data2, data1) {\r\n\r\n    const diffInMs = new Date(data1) - new Date (data2) \r\n    const diffInDays = Math.trunc(diffInMs / (1000*60*60*24))\r\n\r\n    return diffInDays\r\n}\r\n  \r\n\r\nlet totalValue = function (valor, dataFutura){\r\n    //let dataInserida = new Date(dataFutura)\r\n    //convertDate(dataInserida)\r\n    let valorTotal = valor * Math.trunc((diferencaEmDias(new Date(Date.now()), (dataFutura)))/30)\r\n    return valorTotal\r\n}\r\n\r\n\r\nfunction adicionarDias(data, dias) {\r\n    var dataSum = new Date(data)\r\n    dataSum.setDate((dataSum.getDate() + dias +1));\r\n    return convertDate(dataSum);dif\r\n  }\r\n\r\n// captura de dados\r\n*/\r\n\r\nlet dataInput = document.getElementById('objective-time').value\r\nlet orcamento = document.getElementById('objective-cost').value\r\n\r\nlet atualDay = dayjs().format('YYYY-MM-DD')\r\n\r\nlet data1 = dayjs(atualDay);\r\nlet data2 = dayjs(dataInput);\r\n\r\nconst diferencaEmDias = data2.diff(data1, 'day');\r\n\r\n\r\n\r\n\r\nlet textContent = `Você atingirá o seu objetivo, em ${`<p>`}, seu objetivo custará xxxx, se for persistente seu objetivo te custará xxxx ao mês.`\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://projeto-metas/./js/calc.js?");

/***/ }),

/***/ "./js/creat-goals.js":
/*!***************************!*\
  !*** ./js/creat-goals.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   containerMainContent: () => (/* binding */ containerMainContent),\n/* harmony export */   creatAllElementsGoals: () => (/* binding */ creatAllElementsGoals),\n/* harmony export */   creatBin: () => (/* binding */ creatBin),\n/* harmony export */   creatGoalsContent: () => (/* binding */ creatGoalsContent),\n/* harmony export */   creatGoalsGeneral: () => (/* binding */ creatGoalsGeneral),\n/* harmony export */   objectiveName: () => (/* binding */ objectiveName),\n/* harmony export */   row: () => (/* binding */ row),\n/* harmony export */   textContent: () => (/* reexport safe */ _js_calc_js__WEBPACK_IMPORTED_MODULE_0__.textContent)\n/* harmony export */ });\n/* harmony import */ var _js_calc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../js/calc.js */ \"./js/calc.js\");\n\r\n\r\n\r\nlet containerMainContent = document.getElementById('container-main-content')\r\nlet row = 0\r\n\r\n// Capturando os valores dos Inputs//\r\n\r\nlet objectiveName = document.getElementById('objective-name')\r\nlet objectiveCost = document.getElementById('objective-cost')\r\nlet objectiveTime = document.getElementById('objective-time')\r\nlet objectiveSavings = document.getElementById('objective-savings')\r\n\r\n\r\n\r\n\r\n\r\n// Fim da captura dos valores dos Inputs//\r\n\r\n    let creatGoalsGeneral = function (id, className = 'goals'){\r\n        let contentGoals = document.createElement('div')\r\n        contentGoals.className = className\r\n        contentGoals.id = id\r\n        return contentGoals\r\n    }\r\n\r\n    let creatGoalsContent = function (id, classe =''){\r\n        let creatDivForContent = document.createElement('div')\r\n        creatDivForContent.id = id\r\n        creatDivForContent.classList = classe\r\n        return creatDivForContent\r\n    }\r\n\r\n    let creatH2 = function(classe='title-plan'){\r\n        let creatH2Tag = document.createElement('h2')\r\n        creatH2Tag.className = classe\r\n        creatH2Tag.innerText = objectiveName.value\r\n        return creatH2Tag\r\n\r\n    }\r\n\r\n    let creatTextArea = function(){\r\n        //let textArea = document.createElement('p')\r\n        //textArea.innerText = `Você atingiu o seu objetivo, em (inserir variável de data futura) seu objetivo custará (inserir variável de valor total), se for persistente seu objetivo te custará (Inserir variável do valor mensal) ao mês`\r\n\r\n\r\n\r\n        return _js_calc_js__WEBPACK_IMPORTED_MODULE_0__.textContent\r\n    }\r\n\r\n    let creatBin = function (){\r\n        let creatImageBin = document.createElement('img')\r\n        creatImageBin.src = \"/image/Bin.png\"\r\n        creatImageBin.alt = \"Lixeira\"\r\n\r\n        creatImageBin.addEventListener('click', function(e){\r\n            let image = e.currentTarget\r\n            let bin1 = image.parentNode\r\n            let goal = bin1.parentNode\r\n\r\n            goal.remove()\r\n\r\n            let divCriada = document.getElementById(`goal-${row}`)\r\n            \r\n            let inicializacao = document.getElementById('initialing-program')\r\n\r\n            if(divCriada === null ){\r\n                inicializacao.classList.remove('initialing-program-none')\r\n                inicializacao.classList.add('initialing-program')\r\n            }\r\n\r\n        })\r\n\r\n        return creatImageBin\r\n\r\n    }\r\n\r\n\r\n\r\n    let creatAllElementsGoals = function (ev){\r\n        ev.preventDefault()\r\n        row++\r\n        containerMainContent.append(\r\n            creatGoalsGeneral('goal-'+row)\r\n        )\r\n\r\n        let divCriada = document.getElementById(`goal-${row}`)\r\n\r\n        let inicializacao = document.getElementById('initialing-program')\r\n\r\n        divCriada.append(\r\n            creatGoalsContent(`bin-${row}`, 'bin'),\r\n            creatH2(),\r\n            creatTextArea(),\r\n        )\r\n\r\n        let lixeira = document.getElementById(`bin-${row}`)\r\n\r\n        lixeira.append(\r\n            creatBin()\r\n        )\r\n\r\n        if(divCriada !== ''){\r\n        inicializacao.classList.remove('initialing-program')\r\n        inicializacao.classList.add('initialing-program-none')\r\n\r\n        document.getElementById('content-forms-none').classList.add('content-forms-none')\r\n        document.getElementById('content-forms-none').classList.remove('content-forms')\r\n\r\n        } \r\n           \r\n        objectiveName.value=''\r\n        objectiveCost.value=''\r\n        objectiveSavings.value=''\r\n\r\n    }\r\n\r\n        \r\n\r\n    \r\n\r\n\n\n//# sourceURL=webpack://projeto-metas/./js/creat-goals.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_management_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../js/management-popup.js */ \"./js/management-popup.js\");\n/* harmony import */ var _js_creat_goals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../js/creat-goals.js */ \"./js/creat-goals.js\");\n\r\n\r\n\r\n\r\nlet registerGoal = document.getElementById('container-register-goals')\r\nlet closePopUp = document.getElementById('closed-btn')\r\nlet creatGoal = document.getElementById('create-goal-btn')\r\nlet row = 0\r\n\r\nregisterGoal.addEventListener('click', _js_management_popup_js__WEBPACK_IMPORTED_MODULE_0__.callPopUp)\r\nclosePopUp.addEventListener('click', _js_management_popup_js__WEBPACK_IMPORTED_MODULE_0__.exitPopUp)\r\ncreatGoal.addEventListener('click', _js_creat_goals_js__WEBPACK_IMPORTED_MODULE_1__.creatAllElementsGoals)\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://projeto-metas/./js/index.js?");

/***/ }),

/***/ "./js/management-popup.js":
/*!********************************!*\
  !*** ./js/management-popup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   callPopUp: () => (/* binding */ callPopUp),\n/* harmony export */   exitPopUp: () => (/* binding */ exitPopUp),\n/* harmony export */   openPopUp: () => (/* binding */ openPopUp)\n/* harmony export */ });\n\r\nlet openPopUp = document.getElementById('content-forms-none')\r\n\r\nlet callPopUp = function (){\r\n    openPopUp.classList.remove('content-forms-none')\r\n    openPopUp.classList.add('content-forms')\r\n}\r\n\r\nlet exitPopUp = function(){\r\n    openPopUp.classList.remove('content-forms')\r\n    openPopUp.classList.add('content-forms-none')\r\n}\r\n\r\n\n\n//# sourceURL=webpack://projeto-metas/./js/management-popup.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",f=\"month\",h=\"quarter\",c=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=h+\"Date\",n[d]=h+\"Date\",n[f]=h+\"Month\",n[c]=h+\"FullYear\",n[u]=h+\"Hours\",n[s]=h+\"Minutes\",n[i]=h+\"Seconds\",n[r]=h+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,\"0\")},d=n.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,\"0\"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,\"0\"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,\"0\"),s:String(this.$s),ss:O.s(this.$s,2,\"0\"),SSS:O.s(this.$ms,3,\"0\"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",f],[\"$y\",c],[\"$D\",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));\n\n//# sourceURL=webpack://projeto-metas/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./node_modules/dayjs/plugin/customParseFormat.js":
/*!********************************************************!*\
  !*** ./node_modules/dayjs/plugin/customParseFormat.js ***!
  \********************************************************/
/***/ (function(module) {

eval("!function(e,t){ true?module.exports=t():0}(this,(function(){\"use strict\";var e={LTS:\"h:mm:ss A\",LT:\"h:mm A\",L:\"MM/DD/YYYY\",LL:\"MMMM D, YYYY\",LLL:\"MMMM D, YYYY h:mm A\",LLLL:\"dddd, MMMM D, YYYY h:mm A\"},t=/(\\[[^[]*\\])|([-_:/.,()\\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\\d\\d/,r=/\\d\\d?/,i=/\\d*[^-_:/,()\\s\\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t}},f=[/[+-]\\d\\d:?(\\d\\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if(\"Z\"===e)return 0;var t=e.match(/([+-]|\\d\\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:\"+\"===t[0]?-n:n}(e)}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?\"pm\":\"PM\");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\\d{3}/,function(e){this.milliseconds=+e}],s:[r,a(\"seconds\")],ss:[r,a(\"seconds\")],m:[r,a(\"minutes\")],mm:[r,a(\"minutes\")],H:[r,a(\"hours\")],h:[r,a(\"hours\")],HH:[r,a(\"hours\")],hh:[r,a(\"hours\")],D:[r,a(\"day\")],DD:[n,a(\"day\")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\\[|\\]/g,\"\")===e&&(this.day=r)}],M:[r,a(\"month\")],MM:[n,a(\"month\")],MMM:[i,function(e){var t=h(\"months\"),n=(h(\"monthsShort\")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=h(\"months\").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\\d+/,a(\"year\")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\\d{4}/,a(\"year\")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\\[[^\\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\\[[^\\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\\[|\\]$/g,\"\")}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if(\"string\"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,\"\")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if(\"string\"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if([\"x\",\"X\"].indexOf(t)>-1)return new Date((\"X\"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date(\"\")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date(\"\")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(\"\"))}else i.call(this,e)}}}));\n\n//# sourceURL=webpack://projeto-metas/./node_modules/dayjs/plugin/customParseFormat.js?");

/***/ }),

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/***/ (function(module) {

eval("!function(t,s){ true?module.exports=s():0}(this,(function(){\"use strict\";var t,s,n=1e3,i=6e4,e=36e5,r=864e5,o=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,h=2592e6,a=/^(-|\\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:u,months:h,days:r,hours:e,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof p},f=function(t,s,n){return new p(t,n,s.$l)},m=function(t){return s.p(t)+\"s\"},l=function(t){return t<0},$=function(t){return l(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},g=function(t,s){return t?l(t)?{negative:!0,format:\"\"+y(t)+s}:{negative:!1,format:\"\"+t+s}:{negative:!1,format:\"\"}},p=function(){function l(t,s,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*d[m(s)],this);if(\"number\"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if(\"object\"==typeof t)return Object.keys(t).forEach((function(s){i.$d[m(s)]=t[s]})),this.calMilliseconds(),this;if(\"string\"==typeof t){var e=t.match(a);if(e){var r=e.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var y=l.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,n){return s+(t.$d[n]||0)*d[n]}),0)},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/h),t%=h,this.$d.days=$(t/r),t%=r,this.$d.hours=$(t/e),t%=e,this.$d.minutes=$(t/i),t%=i,this.$d.seconds=$(t/n),t%=n,this.$d.milliseconds=t},y.toISOString=function(){var t=g(this.$d.years,\"Y\"),s=g(this.$d.months,\"M\"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=g(n,\"D\"),e=g(this.$d.hours,\"H\"),r=g(this.$d.minutes,\"M\"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=g(o,\"S\"),h=t.negative||s.negative||i.negative||e.negative||r.negative||u.negative,a=e.format||r.format||u.format?\"T\":\"\",d=(h?\"-\":\"\")+\"P\"+t.format+s.format+i.format+a+e.format+r.format+u.format;return\"P\"===d||\"-P\"===d?\"P0D\":d},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||\"YYYY-MM-DDTHH:mm:ss\",i={Y:this.$d.years,YY:s.s(this.$d.years,2,\"0\"),YYYY:s.s(this.$d.years,4,\"0\"),M:this.$d.months,MM:s.s(this.$d.months,2,\"0\"),D:this.$d.days,DD:s.s(this.$d.days,2,\"0\"),H:this.$d.hours,HH:s.s(this.$d.hours,2,\"0\"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,\"0\"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,\"0\"),SSS:s.s(this.$d.milliseconds,3,\"0\")};return n.replace(o,(function(t,s){return s||String(i[t])}))},y.as=function(t){return this.$ms/d[m(t)]},y.get=function(t){var s=this.$ms,n=m(t);return\"milliseconds\"===n?s%=1e3:s=\"weeks\"===n?$(s/d[n]):this.$d[n],0===s?0:s},y.add=function(t,s,n){var i;return i=s?t*d[m(s)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},y.subtract=function(t,s){return this.add(t,s,!0)},y.locale=function(t){var s=this.clone();return s.$l=t,s},y.clone=function(){return f(this.$ms,this)},y.humanize=function(s){return t().add(this.$ms,\"ms\").locale(this.$l).fromNow(!s)},y.milliseconds=function(){return this.get(\"milliseconds\")},y.asMilliseconds=function(){return this.as(\"milliseconds\")},y.seconds=function(){return this.get(\"seconds\")},y.asSeconds=function(){return this.as(\"seconds\")},y.minutes=function(){return this.get(\"minutes\")},y.asMinutes=function(){return this.as(\"minutes\")},y.hours=function(){return this.get(\"hours\")},y.asHours=function(){return this.as(\"hours\")},y.days=function(){return this.get(\"days\")},y.asDays=function(){return this.as(\"days\")},y.weeks=function(){return this.get(\"weeks\")},y.asWeeks=function(){return this.as(\"weeks\")},y.months=function(){return this.get(\"months\")},y.asMonths=function(){return this.as(\"months\")},y.years=function(){return this.get(\"years\")},y.asYears=function(){return this.as(\"years\")},l}();return function(n,i,e){t=e,s=e().$utils(),e.duration=function(t,s){var n=e.locale();return f(t,{$l:n},s)},e.isDuration=c;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return c(t)&&(t=t.asMilliseconds()),o.bind(this)(t,s)}}}));\n\n//# sourceURL=webpack://projeto-metas/./node_modules/dayjs/plugin/duration.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;