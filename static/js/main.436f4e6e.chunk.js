(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),a=n.n(r),s=(n(9),n(10),n(4)),u=(n(11),n(0)),i=function(e){var t="";switch(e.value){case"=":t="ans";break;case"Clear":t="clear";break;case"\u2190":t="back"}return Object(u.jsx)("div",{className:"btnSection ".concat(t),children:Object(u.jsx)("button",{className:"btn",onClick:function(){e.passValue(e.value)},children:e.value})})},l=function(e){for(var t=function(e){var t=["*","+","-","/"],n=a[a.length-1];"="!=e&&"Clear"!=e&&"\u2190"!=e?0!==a.length&&t.includes(n)&&t.includes(e)||l(a+e):"Clear"===e?l(""):"\u2190"===e?l(a.slice(0,a.length-1)):"="!==e||t.includes(n)||l(function(){for(var e=a.split(/([*\/+-])/),t=0;t<e.length;t++)if("*"===e[t]||"/"===e[t]){var n=void 0;n=(n="*"===e[t]?Number(e[t-1])*Number(e[t+1]):Number(e[t-1])/Number(e[t+1])).toString(),e.splice(t-1,3,n),t--}for(var c=0;c<e.length;c++)if("+"===e[c]||"-"===e[c]){var r=void 0;r=(r="+"===e[c]?Number(e[c-1])+Number(e[c+1]):Number(e[c-1])-Number(e[c+1])).toString(),e.splice(c-1,3,r),c--}return e[0]}())},n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],l=r[1],o=["Clear","\u2190","."],b=1;b<=9;b++)o.push(b.toString());var v=(o=o.concat(["0","*","+","-","/","="])).map((function(e){return Object(u.jsx)(i,{passValue:t,value:e})}));return Object(u.jsxs)("div",{className:"calcBox",children:[Object(u.jsx)("div",{className:"output",children:a}),v]})};var o=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l,{})})};a.a.render(Object(u.jsx)(o,{}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.436f4e6e.chunk.js.map