import{S as et,i as at,s as lt,P as W,e as T,t as w,k as z,j as V,l as X,c as y,a as P,g as D,d as c,n as H,m as M,b as k,f as L,E as v,o as O,Q as st,x as I,u as U,v as R,R as nt,T as rt,L as ot,h as B,I as q,U as it,V as ct,W as N,X as G,Y as ut}from"../../chunks/vendor-f2e7168c.js";import{b as J,a as ft}from"../../chunks/paths-6758d194.js";import{M as ht}from"../../chunks/MarkDown-ec45dfa7.js";import{g as _t}from"../../chunks/navigation-51f4a605.js";import"../../chunks/singletons-12a22614.js";function K(r,t,e){const l=r.slice();return l[7]=t[e],l}function Z(r,t,e){const l=r.slice();return l[10]=t[e],l}function dt(r){let t,e=r[13].message+"",l;return{c(){t=T("p"),l=w(e),this.h()},l(s){t=y(s,"P",{style:!0});var n=P(t);l=D(n,e),n.forEach(c),this.h()},h(){ot(t,"color","red")},m(s,n){L(s,t,n),v(t,l)},p(s,n){n&1&&e!==(e=s[13].message+"")&&B(l,e)},i:q,o:q,d(s){s&&c(t)}}}function mt(r){let t,e,l,s,n,u;return e=new it({}),n=new ct({props:{settings:r[2],data:r[6],$$slots:{default:[pt]},$$scope:{ctx:r}}}),{c(){t=T("div"),V(e.$$.fragment),l=z(),s=T("div"),V(n.$$.fragment),this.h()},l(a){t=y(a,"DIV",{class:!0});var i=P(t);M(e.$$.fragment,i),i.forEach(c),l=H(a),s=y(a,"DIV",{class:!0});var d=P(s);M(n.$$.fragment,d),d.forEach(c),this.h()},h(){k(t,"class","search svelte-zmn7ag"),k(s,"class","list svelte-zmn7ag")},m(a,i){L(a,t,i),O(e,t,null),L(a,l,i),L(a,s,i),O(n,s,null),u=!0},p(a,i){const d={};i&1&&(d.data=a[6]),i&16386&&(d.$$scope={dirty:i,ctx:a}),n.$set(d)},i(a){u||(I(e.$$.fragment,a),I(n.$$.fragment,a),u=!0)},o(a){U(e.$$.fragment,a),U(n.$$.fragment,a),u=!1},d(a){a&&c(t),R(e),a&&c(l),a&&c(s),R(n)}}}function x(r){let t,e,l=r[10].quantLabel+"",s,n;return{c(){t=T("li"),e=T("a"),s=w(l),this.h()},l(u){t=y(u,"LI",{});var a=P(t);e=y(a,"A",{href:!0,target:!0});var i=P(e);s=D(i,l),i.forEach(c),a.forEach(c),this.h()},h(){k(e,"href",n=r[10].quant),k(e,"target","_blank")},m(u,a){L(u,t,a),v(t,e),v(e,s)},p(u,a){a&2&&l!==(l=u[10].quantLabel+"")&&B(s,l),a&2&&n!==(n=u[10].quant)&&k(e,"href",n)},d(u){u&&c(t)}}}function tt(r){let t,e,l=r[7].source+"",s,n,u,a,i=r[7].unitLabel+"",d,m,o,f,h,_,A,g,S=r[7].quant,b=[];for(let p=0;p<S.length;p+=1)b[p]=x(Z(r,S,p));return{c(){t=T("tr"),e=T("td"),s=w(l),n=z(),u=T("td"),a=T("a"),d=w(i),o=z(),f=T("td"),h=T("ul");for(let p=0;p<b.length;p+=1)b[p].c();_=z(),this.h()},l(p){t=y(p,"TR",{class:!0});var $=P(t);e=y($,"TD",{class:!0});var E=P(e);s=D(E,l),E.forEach(c),n=H($),u=y($,"TD",{class:!0});var j=P(u);a=y(j,"A",{href:!0,target:!0});var Y=P(a);d=D(Y,i),Y.forEach(c),j.forEach(c),o=H($),f=y($,"TD",{class:!0});var F=P(f);h=y(F,"UL",{class:!0});var Q=P(h);for(let C=0;C<b.length;C+=1)b[C].l(Q);Q.forEach(c),F.forEach(c),_=H($),$.forEach(c),this.h()},h(){k(e,"class","svelte-zmn7ag"),k(a,"href",m=r[7].unit),k(a,"target","_blank"),k(u,"class","svelte-zmn7ag"),k(h,"class","svelte-zmn7ag"),k(f,"class","svelte-zmn7ag"),k(t,"class","svelte-zmn7ag")},m(p,$){L(p,t,$),v(t,e),v(e,s),v(t,n),v(t,u),v(u,a),v(a,d),v(t,o),v(t,f),v(f,h);for(let E=0;E<b.length;E+=1)b[E].m(h,null);v(t,_),A||(g=[N(e,"click",r[3]),N(u,"click",r[3]),N(f,"click",r[3])],A=!0)},p(p,$){if($&2&&l!==(l=p[7].source+"")&&B(s,l),$&2&&i!==(i=p[7].unitLabel+"")&&B(d,i),$&2&&m!==(m=p[7].unit)&&k(a,"href",m),$&2){S=p[7].quant;let E;for(E=0;E<S.length;E+=1){const j=Z(p,S,E);b[E]?b[E].p(j,$):(b[E]=x(j),b[E].c(),b[E].m(h,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=S.length}},d(p){p&&c(t),G(b,p),A=!1,ut(g)}}}function pt(r){let t,e,l,s,n,u,a,i,d,m,o,f=r[1],h=[];for(let _=0;_<f.length;_+=1)h[_]=tt(K(r,f,_));return{c(){t=T("thead"),e=T("th"),l=w("Ontology"),s=z(),n=T("th"),u=w("Unit"),a=z(),i=T("th"),d=w("Property"),m=z(),o=T("tbody");for(let _=0;_<h.length;_+=1)h[_].c();this.h()},l(_){t=y(_,"THEAD",{});var A=P(t);e=y(A,"TH",{"data-key":!0,class:!0});var g=P(e);l=D(g,"Ontology"),g.forEach(c),s=H(A),n=y(A,"TH",{"data-key":!0,class:!0});var S=P(n);u=D(S,"Unit"),S.forEach(c),a=H(A),i=y(A,"TH",{"data-key":!0,class:!0});var b=P(i);d=D(b,"Property"),b.forEach(c),A.forEach(c),m=H(_),o=y(_,"TBODY",{});var p=P(o);for(let $=0;$<h.length;$+=1)h[$].l(p);p.forEach(c),this.h()},h(){k(e,"data-key","source"),k(e,"class","svelte-zmn7ag"),k(n,"data-key","unitLabel"),k(n,"class","svelte-zmn7ag"),k(i,"data-key","quantLabel"),k(i,"class","svelte-zmn7ag")},m(_,A){L(_,t,A),v(t,e),v(e,l),v(t,s),v(t,n),v(n,u),v(t,a),v(t,i),v(i,d),L(_,m,A),L(_,o,A);for(let g=0;g<h.length;g+=1)h[g].m(o,null)},p(_,A){if(A&10){f=_[1];let g;for(g=0;g<f.length;g+=1){const S=K(_,f,g);h[g]?h[g].p(S,A):(h[g]=tt(S),h[g].c(),h[g].m(o,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=f.length}},d(_){_&&c(t),_&&c(m),_&&c(o),G(h,_)}}}function vt(r){let t,e;return{c(){t=T("p"),e=w("Loading...")},l(l){t=y(l,"P",{});var s=P(t);e=D(s,"Loading..."),s.forEach(c)},m(l,s){L(l,t,s),v(t,e)},p:q,i:q,o:q,d(l){l&&c(t)}}}function gt(r){let t,e,l,s,n,u,a,i,d;n=new ht({props:{source:"unit2prop"}});let m={ctx:r,current:null,token:null,hasCatch:!0,pending:vt,then:mt,catch:dt,value:6,error:13,blocks:[,,,]};return W(i=r[0],m),{c(){t=T("h1"),e=w("Unit to Property Lookup"),l=z(),s=T("div"),V(n.$$.fragment),u=z(),a=X(),m.block.c(),this.h()},l(o){t=y(o,"H1",{});var f=P(t);e=D(f,"Unit to Property Lookup"),f.forEach(c),l=H(o),s=y(o,"DIV",{class:!0});var h=P(s);M(n.$$.fragment,h),h.forEach(c),u=H(o),a=X(),m.block.l(o),this.h()},h(){k(s,"class","text svelte-zmn7ag")},m(o,f){L(o,t,f),v(t,e),L(o,l,f),L(o,s,f),O(n,s,null),L(o,u,f),L(o,a,f),m.block.m(o,m.anchor=f),m.mount=()=>a.parentNode,m.anchor=a,d=!0},p(o,[f]){r=o,m.ctx=r,f&1&&i!==(i=r[0])&&W(i,m)||st(m,r,f)},i(o){d||(I(n.$$.fragment,o),I(m.block),d=!0)},o(o){U(n.$$.fragment,o);for(let f=0;f<3;f+=1){const h=m.blocks[f];U(h)}d=!1},d(o){o&&c(t),o&&c(l),o&&c(s),R(n),o&&c(u),o&&c(a),m.block.d(o),m.token=null,m=null}}}async function Pt(){return{props:{dataPromise:fetch(`${J}/data/unit2property.json`).then(t=>t.json()).then(t=>t.sort((e,l)=>e.unitLabel.localeCompare(l.unitLabel)))}}}function kt(r,t,e){let l;nt(r,rt,d=>e(1,l=d));let{dataPromise:s}=t;const n=J,u=ft,a={sortable:!0,pagination:!1,columnFilter:!1,blocks:{searchInput:!1,paginationButtons:!1,paginationRowCount:!1}};function i(){_t(`../data/${this.parentNode.dataset.id}`)}return r.$$set=d=>{"dataPromise"in d&&e(0,s=d.dataPromise)},[s,l,a,i,n,u]}class At extends et{constructor(t){super();at(this,t,kt,gt,lt,{dataPromise:0,BASE_PATH:4,ASSET_PATH:5})}get BASE_PATH(){return this.$$.ctx[4]}get ASSET_PATH(){return this.$$.ctx[5]}}export{At as default,Pt as load};