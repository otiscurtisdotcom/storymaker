(this.webpackJsonpstorymaker=this.webpackJsonpstorymaker||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),a=n.n(o),i=(n(9),n(10),n(2)),s=n(0),u=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:e.text}),function(){if(e.isLastRow)return Object(s.jsx)("button",{onClick:e.nextRow,children:"Next"})}()]})},j={leadA:{name:"Tom",gender:{pronoun1:"he",pronoun2:"his"}},leadB:{name:"Sue",gender:{pronoun1:"she",pronoun2:"her"}},city:"London",town:"Haywards Heath"},d=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(0),a=Object(i.a)(o,2),d=a[0],b=a[1],f=Object(c.useState)(),h=Object(i.a)(f,2),O=h[0],l=h[1],p=function(){b(d+1)};return Object(c.useEffect)((function(){l(j)}),[]),Object(c.useEffect)((function(){O&&r(function(e){return["Meet ".concat(e.leadA.name,". The city slicker from ").concat(e.city,"."),"".concat((t=e.leadA.gender.pronoun1,t.replace(/^\w/,(function(e){return e.toUpperCase()})))," works in a bank."),"test 3"];var t}(O))}),[O]),Object(s.jsx)("div",{children:n.map((function(e,t){if(t<=d)return Object(s.jsx)(u,{text:e,nextRow:p,isLastRow:t===d},t)}))})},b=function(){return Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"Story Maker"})}),Object(s.jsx)("main",{children:Object(s.jsx)(d,{})})]})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.d35a44a7.chunk.js.map