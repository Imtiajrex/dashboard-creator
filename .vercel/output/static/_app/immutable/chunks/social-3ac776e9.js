import{S as x,i as E,s as I,k as m,q as p,a as v,l as b,m as w,r as y,h as o,c as B,n as r,b as h,E as g,u as L,B as _,M as G}from"./index-5a48f7c1.js";function T(n){let t,i,u,s;return{c(){t=m("label"),i=p(n[2]),u=v(),s=m("input"),this.h()},l(l){t=b(l,"LABEL",{for:!0,class:!0});var e=w(t);i=y(e,n[2]),e.forEach(o),u=B(l),s=b(l,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),this.h()},h(){r(t,"for",n[4]),r(t,"class","label label-text text-slate-200"),r(s,"type",n[0]),s.required=n[1],r(s,"id",n[4]),r(s,"placeholder",n[3]),r(s,"class","input w-full input-bordered ")},m(l,e){h(l,t,e),g(t,i),h(l,u,e),h(l,s,e)},p(l,[e]){e&4&&L(i,l[2]),e&1&&r(s,"type",l[0]),e&2&&(s.required=l[1]),e&8&&r(s,"placeholder",l[3])},i:_,o:_,d(l){l&&o(t),l&&o(u),l&&o(s)}}}function M(n,t,i){let{type:u="text"}=t,{required:s=!1}=t,{label:l="Input"}=t,{placeholder:e="Enter "+l}=t;const a=l.toLowerCase().replace(" ","-");return n.$$set=c=>{"type"in c&&i(0,u=c.type),"required"in c&&i(1,s=c.required),"label"in c&&i(2,l=c.label),"placeholder"in c&&i(3,e=c.placeholder)},[u,s,l,e,a]}class U extends x{constructor(t){super(),E(this,t,M,T,I,{type:0,required:1,label:2,placeholder:3})}}function k(n){let t,i,u,s,l;return{c(){t=m("img"),u=v(),s=m("h2"),l=p("Sign in to your account"),this.h()},l(e){t=b(e,"IMG",{class:!0,src:!0,alt:!0}),u=B(e),s=b(e,"H2",{class:!0});var a=w(s);l=y(a,"Sign in to your account"),a.forEach(o),this.h()},h(){r(t,"class","mx-auto h-12 w-auto"),G(t.src,i="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600")||r(t,"src",i),r(t,"alt","Your Company"),r(s,"class","mt-6 text-center text-3xl font-bold tracking-tight text-white")},m(e,a){h(e,t,a),h(e,u,a),h(e,s,a),g(s,l)},p:_,i:_,o:_,d(e){e&&o(t),e&&o(u),e&&o(s)}}}class O extends x{constructor(t){super(),E(this,t,null,k,I,{})}}function C(n){let t,i,u,s,l,e,a,c,S;return{c(){t=m("button"),i=m("img"),s=p(`\r
	Sign in with Google`),l=v(),e=m("button"),a=m("img"),S=p(`\r
	Sign in with Github`),this.h()},l(f){t=b(f,"BUTTON",{class:!0});var d=w(t);i=b(d,"IMG",{src:!0,alt:!0,class:!0}),s=y(d,`\r
	Sign in with Google`),d.forEach(o),l=B(f),e=b(f,"BUTTON",{class:!0});var q=w(e);a=b(q,"IMG",{src:!0,alt:!0,class:!0}),S=y(q,`\r
	Sign in with Github`),q.forEach(o),this.h()},h(){G(i.src,u="/brand/google.png")||r(i,"src",u),r(i,"alt","Google Logo"),r(i,"class","w-6 mr-3"),r(t,"class","btn btn-outline w-full my-2"),G(a.src,c="/brand/github.png")||r(a,"src",c),r(a,"alt","Google Logo"),r(a,"class","w-6 mr-3"),r(e,"class","btn btn-outline w-full my-2")},m(f,d){h(f,t,d),g(t,i),g(t,s),h(f,l,d),h(f,e,d),g(e,a),g(e,S)},p:_,i:_,o:_,d(f){f&&o(t),f&&o(l),f&&o(e)}}}class A extends x{constructor(t){super(),E(this,t,null,C,I,{})}}export{O as B,U as I,A as S};