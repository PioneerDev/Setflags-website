(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"BNX+":function(e,a,l){},I50c:function(e,a,l){"use strict";l.r(a);var t=l("qIgq"),n=l.n(t),o=l("q1tI"),r=l.n(o),c=(l("BNX+"),l("bXiM")),s=l("5CWz"),u=l("lO0E"),i=l("ofer"),m=l("dfam"),d=l("JrkS"),g=l("x1ji"),v=l.n(g),E=l("Pj7P"),b=l.n(E),f=l("w9Yu"),w=l.n(f),p=l("3a4m"),I=l.n(p),h=l("/MKj"),C=l("k9Yu"),S=e=>{return new Promise((a,l)=>{var t=localStorage.getItem("userCode");t&&e==t||(localStorage.setItem("userCode",e),Object(C["a"])(e).then(e=>{"200"==e.code&&(localStorage.setItem("userToken",e.data.token),localStorage.setItem("userId",e.data.user_id))}))})},k=S;function x(e){var a=r.a.useState("/"),l=n()(a,2),t=l[0],o=l[1];console.log("layout props---\x3e",e);var g=e.location.query.code;console.log("code----\x3e",g),g&&k(g);var E=(e,a)=>{console.log("newValue----\x3e",a),o(a),I.a.push(a)};return r.a.createElement("div",{className:"normal"},r.a.createElement(s["a"],null),r.a.createElement(c["a"],null,r.a.createElement(u["a"],null,r.a.createElement(i["a"],{variant:"h6"},"\u7acb\u5fd7-Setflags"))),e.children,r.a.createElement(m["a"],{value:t,onChange:E,variant:"fullWidth",indicatorColor:"secondary",textColor:"secondary",className:"tabs-container","aria-label":"icon label tabs example"},r.a.createElement(d["a"],{icon:r.a.createElement(b.a,null),label:"\u7acb\u5fd7\u5217\u8868",value:"/"}),r.a.createElement(d["a"],{icon:r.a.createElement(w.a,null),label:"\u65b0\u5efa\u7acb\u5fd7",value:"/newflags"}),r.a.createElement(d["a"],{icon:r.a.createElement(v.a,null),label:"\u6211\u7684",value:"/myflags"})))}console.log("saveUserCode",k);a["default"]=Object(h["c"])(e=>{var a=e.flag;return{flag:a}})(x)}}]);