var A=Object.defineProperty,C=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var g=(a,e,t)=>e in a?A(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,L=(a,e)=>{for(var t in e||(e={}))S.call(e,t)&&g(a,t,e[t]);if(D)for(var t of D(e))x.call(e,t)&&g(a,t,e[t]);return a},j=(a,e)=>C(a,Q(e));import{S as B,i as Y,s as q,e as i,k as I,c as d,a as h,d as s,n as M,b as H,f as O,E as f,R as P,I as R,A as U}from"./vendor-52d01184.js";function z(a){let e,t,r,o,u,n,_,l,y,m,E;return{c(){e=i("table"),t=i("thead"),r=i("tr"),o=i("th"),u=I(),n=i("tbody"),_=i("tr"),l=i("td"),y=i("ul"),this.h()},l(b){e=d(b,"TABLE",{class:!0});var c=h(e);t=d(c,"THEAD",{});var w=h(t);r=d(w,"TR",{});var k=h(r);o=d(k,"TH",{}),h(o).forEach(s),k.forEach(s),w.forEach(s),u=M(c),n=d(c,"TBODY",{});var p=h(n);_=d(p,"TR",{});var T=h(_);l=d(T,"TD",{});var v=h(l);y=d(v,"UL",{}),h(y).forEach(s),v.forEach(s),T.forEach(s),p.forEach(s),c.forEach(s),this.h()},h(){H(e,"class",a[0])},m(b,c){O(b,e,c),f(e,t),f(t,r),f(r,o),f(e,u),f(e,n),f(n,_),f(_,l),f(l,y),m||(E=P(e,"click",a[1]),m=!0)},p(b,[c]){c&1&&H(e,"class",b[0])},i:R,o:R,d(b){b&&s(e),m=!1,E()}}}function F(a,e,t){let r,{options:o}=e,{data:u}=e,{rowLink:n}=e;U(async()=>{window.jQuery("table").empty(),window.jQuery("table").DataTable(j(L({},o),{data:u,scrollY:`calc( ${window.jQuery(".list").height()}px - 3em )`,deferRender:!0,scrollCollapse:!1,scroller:!0,language:{search:"",searchPlaceholder:"Search ..."}}))});const _=n?function(y){n.apply(y.target,y)}:void 0;return a.$$set=l=>{"options"in l&&t(2,o=l.options),"data"in l&&t(3,u=l.data),"rowLink"in l&&t(4,n=l.rowLink)},a.$$.update=()=>{a.$$.dirty&16&&t(0,r=n?"linked":"")},[r,_,o,u,n]}class K extends B{constructor(e){super();Y(this,e,F,z,q,{options:2,data:3,rowLink:4})}}export{K as D};
