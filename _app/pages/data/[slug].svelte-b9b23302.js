import{S as me,i as ge,s as ve,e as d,k as S,c as p,a as m,n as U,d as h,b as g,f as v,E as _,I as N,t as D,g as w,h as V,P as ke,Q as He,x as G,u as Q,L as Be,R as ie,T as be,l as re,j as Y,m as Z,o as x,v as ee}from"../../chunks/vendor-56a8bde1.js";import{b as $e}from"../../chunks/paths-6758d194.js";function Re(i){let e,s;return{c(){e=d("span"),s=D("\u2717"),this.h()},l(t){e=p(t,"SPAN",{class:!0});var n=m(e);s=w(n,"\u2717"),n.forEach(h),this.h()},h(){g(e,"class","cross svelte-8pojjy")},m(t,n){v(t,e,n),_(e,s)},d(t){t&&h(e)}}}function qe(i){let e,s;return{c(){e=d("span"),s=D("\u2713"),this.h()},l(t){e=p(t,"SPAN",{class:!0});var n=m(e);s=w(n,"\u2713"),n.forEach(h),this.h()},h(){g(e,"class","check svelte-8pojjy")},m(t,n){v(t,e,n),_(e,s)},d(t){t&&h(e)}}}function Ke(i){let e;return{c(){e=D(i[1])},l(s){e=w(s,i[1])},m(s,t){v(s,e,t)},p(s,t){t&2&&V(e,s[1])},d(s){s&&h(e)}}}function Me(i){let e,s;return{c(){e=d("a"),s=D(i[1]),this.h()},l(t){e=p(t,"A",{href:!0});var n=m(e);s=w(n,i[1]),n.forEach(h),this.h()},h(){g(e,"href",i[2])},m(t,n){v(t,e,n),_(e,s)},p(t,n){n&2&&V(s,t[1]),n&4&&g(e,"href",t[2])},d(t){t&&h(e)}}}function Ne(i){let e,s;function t(c,f){return c[0]?qe:Re}let n=t(i),a=n(i);function o(c,f){return c[2]?Me:Ke}let l=o(i),r=l(i);return{c(){e=d("div"),a.c(),s=S(),r.c(),this.h()},l(c){e=p(c,"DIV",{class:!0});var f=m(e);a.l(f),s=U(f),r.l(f),f.forEach(h),this.h()},h(){g(e,"class","container svelte-8pojjy")},m(c,f){v(c,e,f),a.m(e,null),_(e,s),r.m(e,null)},p(c,[f]){n!==(n=t(c))&&(a.d(1),a=n(c),a&&(a.c(),a.m(e,s))),l===(l=o(c))&&r?r.p(c,f):(r.d(1),r=l(c),r&&(r.c(),r.m(e,null)))},i:N,o:N,d(c){c&&h(e),a.d(),r.d()}}}function Ge(i,e,s){let{status:t=!1}=e,{text:n=""}=e,{link:a=""}=e;return i.$$set=o=>{"status"in o&&s(0,t=o.status),"text"in o&&s(1,n=o.text),"link"in o&&s(2,a=o.link)},[t,n,a]}class te extends me{constructor(e){super();ge(this,e,Ge,Ne,ve,{status:0,text:1,link:2})}}function Ee(i,e,s){const t=i.slice();return t[3]=e[s],t}function De(i,e,s){const t=i.slice();return t[6]=e[s],t}function we(i,e,s){const t=i.slice();return t[9]=e[s],t}function ye(i,e,s){const t=i.slice();return t[12]=e[s],t}function Le(i,e,s){const t=i.slice();return t[15]=e[s],t}function Qe(i){let e,s=i[18].message+"",t;return{c(){e=d("p"),t=D(s),this.h()},l(n){e=p(n,"P",{style:!0});var a=m(e);t=w(a,s),a.forEach(h),this.h()},h(){Be(e,"color","red")},m(n,a){v(n,e,a),_(e,t)},p(n,a){a&1&&s!==(s=n[18].message+"")&&V(t,s)},i:N,o:N,d(n){n&&h(e)}}}function ze(i){let e,s=i[2].title+"",t,n,a,o,l,r,c,f,k,E,M,oe,z,fe,F,y,C,ce,H,ue,B,he,R,_e,q,de,K,pe,le,L=i[2].keywords&&i[2].keywords.length>0&&Ae(i),A=i[2].domain&&i[2].domain.length>0&&Ie(i),j=i[2].keywords&&i[2].keywords.length>0&&Pe(i),J=i[2].language,I=[];for(let u=0;u<J.length;u+=1)I[u]=Ue(De(i,J,u));C=new te({props:{status:i[2].has.variable,link:`${i[1]}/list/variable`,text:"Variable"}}),H=new te({props:{status:i[2].has.property,link:`${i[1]}/list/property`,text:"Property"}}),B=new te({props:{status:i[2].has.entity,link:`${i[1]}/list/entity`,text:"Entity"}}),R=new te({props:{status:i[2].has.constraint,link:`${i[1]}/list/constraint`,text:"Constraint"}}),q=new te({props:{status:i[2].has.method,link:`${i[1]}/list/method`,text:"Method"}}),K=new te({props:{status:i[2].has.unit,link:`${i[1]}/list/unit`,text:"Unit"}});let T=i[2].topic&&i[2].topic.length>0&&Ve(i);return{c(){e=d("h1"),t=D(s),n=S(),a=d("hr"),o=S(),l=d("dl"),L&&L.c(),r=re(),A&&A.c(),c=re(),j&&j.c(),f=d("dt"),k=D("Language(s)"),E=d("dd"),M=d("div");for(let u=0;u<I.length;u+=1)I[u].c();oe=S(),z=d("dt"),fe=D("Concepts contained"),F=d("dd"),y=d("div"),Y(C.$$.fragment),ce=S(),Y(H.$$.fragment),ue=S(),Y(B.$$.fragment),he=S(),Y(R.$$.fragment),_e=S(),Y(q.$$.fragment),de=S(),Y(K.$$.fragment),pe=S(),T&&T.c(),this.h()},l(u){e=p(u,"H1",{});var $=m(e);t=w($,s),$.forEach(h),n=U(u),a=p(u,"HR",{}),o=U(u),l=p(u,"DL",{});var P=m(l);L&&L.l(P),r=re(),A&&A.l(P),c=re(),j&&j.l(P),f=p(P,"DT",{class:!0});var se=m(f);k=w(se,"Language(s)"),se.forEach(h),E=p(P,"DD",{});var O=m(E);M=p(O,"DIV",{class:!0});var ne=m(M);for(let X=0;X<I.length;X+=1)I[X].l(ne);ne.forEach(h),oe=U(O),O.forEach(h),z=p(P,"DT",{class:!0});var ae=m(z);fe=w(ae,"Concepts contained"),ae.forEach(h),F=p(P,"DD",{});var W=m(F);y=p(W,"DIV",{class:!0});var b=m(y);Z(C.$$.fragment,b),ce=U(b),Z(H.$$.fragment,b),ue=U(b),Z(B.$$.fragment,b),he=U(b),Z(R.$$.fragment,b),_e=U(b),Z(q.$$.fragment,b),de=U(b),Z(K.$$.fragment,b),b.forEach(h),pe=U(W),W.forEach(h),T&&T.l(P),P.forEach(h),this.h()},h(){g(f,"class","svelte-up5lp7"),g(M,"class","lang svelte-up5lp7"),g(z,"class","svelte-up5lp7"),g(y,"class","stretched svelte-up5lp7")},m(u,$){v(u,e,$),_(e,t),v(u,n,$),v(u,a,$),v(u,o,$),v(u,l,$),L&&L.m(l,null),_(l,r),A&&A.m(l,null),_(l,c),j&&j.m(l,null),_(l,f),_(f,k),_(l,E),_(E,M);for(let P=0;P<I.length;P+=1)I[P].m(M,null);_(E,oe),_(l,z),_(z,fe),_(l,F),_(F,y),x(C,y,null),_(y,ce),x(H,y,null),_(y,ue),x(B,y,null),_(y,he),x(R,y,null),_(y,_e),x(q,y,null),_(y,de),x(K,y,null),_(F,pe),T&&T.m(l,null),le=!0},p(u,$){if((!le||$&1)&&s!==(s=u[2].title+"")&&V(t,s),u[2].keywords&&u[2].keywords.length>0?L?L.p(u,$):(L=Ae(u),L.c(),L.m(l,r)):L&&(L.d(1),L=null),u[2].domain&&u[2].domain.length>0?A?A.p(u,$):(A=Ie(u),A.c(),A.m(l,c)):A&&(A.d(1),A=null),u[2].keywords&&u[2].keywords.length>0?j?j.p(u,$):(j=Pe(u),j.c(),j.m(l,f)):j&&(j.d(1),j=null),$&1){J=u[2].language;let b;for(b=0;b<J.length;b+=1){const X=De(u,J,b);I[b]?I[b].p(X,$):(I[b]=Ue(X),I[b].c(),I[b].m(M,null))}for(;b<I.length;b+=1)I[b].d(1);I.length=J.length}const P={};$&1&&(P.status=u[2].has.variable),C.$set(P);const se={};$&1&&(se.status=u[2].has.property),H.$set(se);const O={};$&1&&(O.status=u[2].has.entity),B.$set(O);const ne={};$&1&&(ne.status=u[2].has.constraint),R.$set(ne);const ae={};$&1&&(ae.status=u[2].has.method),q.$set(ae);const W={};$&1&&(W.status=u[2].has.unit),K.$set(W),u[2].topic&&u[2].topic.length>0?T?T.p(u,$):(T=Ve(u),T.c(),T.m(l,null)):T&&(T.d(1),T=null)},i(u){le||(G(C.$$.fragment,u),G(H.$$.fragment,u),G(B.$$.fragment,u),G(R.$$.fragment,u),G(q.$$.fragment,u),G(K.$$.fragment,u),le=!0)},o(u){Q(C.$$.fragment,u),Q(H.$$.fragment,u),Q(B.$$.fragment,u),Q(R.$$.fragment,u),Q(q.$$.fragment,u),Q(K.$$.fragment,u),le=!1},d(u){u&&h(e),u&&h(n),u&&h(a),u&&h(o),u&&h(l),L&&L.d(),A&&A.d(),j&&j.d(),ie(I,u),ee(C),ee(H),ee(B),ee(R),ee(q),ee(K),T&&T.d()}}}function Ae(i){let e,s,t,n,a,o=i[2].url,l=[];for(let r=0;r<o.length;r+=1)l[r]=je(Le(i,o,r));return{c(){e=d("dt"),s=D("URL(s)"),t=d("dd"),n=d("ul");for(let r=0;r<l.length;r+=1)l[r].c();a=S(),this.h()},l(r){e=p(r,"DT",{class:!0});var c=m(e);s=w(c,"URL(s)"),c.forEach(h),t=p(r,"DD",{});var f=m(t);n=p(f,"UL",{class:!0});var k=m(n);for(let E=0;E<l.length;E+=1)l[E].l(k);k.forEach(h),a=U(f),f.forEach(h),this.h()},h(){g(e,"class","svelte-up5lp7"),g(n,"class","svelte-up5lp7")},m(r,c){v(r,e,c),_(e,s),v(r,t,c),_(t,n);for(let f=0;f<l.length;f+=1)l[f].m(n,null);_(t,a)},p(r,c){if(c&1){o=r[2].url;let f;for(f=0;f<o.length;f+=1){const k=Le(r,o,f);l[f]?l[f].p(k,c):(l[f]=je(k),l[f].c(),l[f].m(n,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=o.length}},d(r){r&&h(e),r&&h(t),ie(l,r)}}}function je(i){let e,s,t=i[15]+"",n,a;return{c(){e=d("li"),s=d("a"),n=D(t),this.h()},l(o){e=p(o,"LI",{});var l=m(e);s=p(l,"A",{href:!0,target:!0});var r=m(s);n=w(r,t),r.forEach(h),l.forEach(h),this.h()},h(){g(s,"href",a=i[15]),g(s,"target","_blank")},m(o,l){v(o,e,l),_(e,s),_(s,n)},p(o,l){l&1&&t!==(t=o[15]+"")&&V(n,t),l&1&&a!==(a=o[15])&&g(s,"href",a)},d(o){o&&h(e)}}}function Ie(i){let e,s,t,n,a,o=i[2].domain,l=[];for(let r=0;r<o.length;r+=1)l[r]=Te(ye(i,o,r));return{c(){e=d("dt"),s=D("Domain(s)"),t=d("dd"),n=d("ul");for(let r=0;r<l.length;r+=1)l[r].c();a=S(),this.h()},l(r){e=p(r,"DT",{class:!0});var c=m(e);s=w(c,"Domain(s)"),c.forEach(h),t=p(r,"DD",{});var f=m(t);n=p(f,"UL",{class:!0});var k=m(n);for(let E=0;E<l.length;E+=1)l[E].l(k);k.forEach(h),a=U(f),f.forEach(h),this.h()},h(){g(e,"class","svelte-up5lp7"),g(n,"class","svelte-up5lp7")},m(r,c){v(r,e,c),_(e,s),v(r,t,c),_(t,n);for(let f=0;f<l.length;f+=1)l[f].m(n,null);_(t,a)},p(r,c){if(c&1){o=r[2].domain;let f;for(f=0;f<o.length;f+=1){const k=ye(r,o,f);l[f]?l[f].p(k,c):(l[f]=Te(k),l[f].c(),l[f].m(n,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=o.length}},d(r){r&&h(e),r&&h(t),ie(l,r)}}}function Fe(i){let e=i[12].label+"",s;return{c(){s=D(e)},l(t){s=w(t,e)},m(t,n){v(t,s,n)},p(t,n){n&1&&e!==(e=t[12].label+"")&&V(s,e)},d(t){t&&h(s)}}}function Je(i){let e,s=i[12].label+"",t,n;return{c(){e=d("a"),t=D(s),this.h()},l(a){e=p(a,"A",{href:!0,target:!0});var o=m(e);t=w(o,s),o.forEach(h),this.h()},h(){g(e,"href",n=i[12].iri),g(e,"target","_blank")},m(a,o){v(a,e,o),_(e,t)},p(a,o){o&1&&s!==(s=a[12].label+"")&&V(t,s),o&1&&n!==(n=a[12].iri)&&g(e,"href",n)},d(a){a&&h(e)}}}function Te(i){let e,s;function t(o,l){return o[12].iri?Je:Fe}let n=t(i),a=n(i);return{c(){e=d("li"),a.c(),s=S()},l(o){e=p(o,"LI",{});var l=m(e);a.l(l),s=U(l),l.forEach(h)},m(o,l){v(o,e,l),a.m(e,null),_(e,s)},p(o,l){n===(n=t(o))&&a?a.p(o,l):(a.d(1),a=n(o),a&&(a.c(),a.m(e,s)))},d(o){o&&h(e),a.d()}}}function Pe(i){let e,s,t,n,a,o=i[2].keywords,l=[];for(let r=0;r<o.length;r+=1)l[r]=Se(we(i,o,r));return{c(){e=d("dt"),s=D("Keyword(s)"),t=d("dd"),n=d("ul");for(let r=0;r<l.length;r+=1)l[r].c();a=S(),this.h()},l(r){e=p(r,"DT",{class:!0});var c=m(e);s=w(c,"Keyword(s)"),c.forEach(h),t=p(r,"DD",{});var f=m(t);n=p(f,"UL",{class:!0});var k=m(n);for(let E=0;E<l.length;E+=1)l[E].l(k);k.forEach(h),a=U(f),f.forEach(h),this.h()},h(){g(e,"class","svelte-up5lp7"),g(n,"class","svelte-up5lp7")},m(r,c){v(r,e,c),_(e,s),v(r,t,c),_(t,n);for(let f=0;f<l.length;f+=1)l[f].m(n,null);_(t,a)},p(r,c){if(c&1){o=r[2].keywords;let f;for(f=0;f<o.length;f+=1){const k=we(r,o,f);l[f]?l[f].p(k,c):(l[f]=Se(k),l[f].c(),l[f].m(n,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=o.length}},d(r){r&&h(e),r&&h(t),ie(l,r)}}}function Se(i){let e,s=i[9]+"",t;return{c(){e=d("li"),t=D(s)},l(n){e=p(n,"LI",{});var a=m(e);t=w(a,s),a.forEach(h)},m(n,a){v(n,e,a),_(e,t)},p(n,a){a&1&&s!==(s=n[9]+"")&&V(t,s)},d(n){n&&h(e)}}}function Ue(i){let e,s,t,n;return{c(){e=d("img"),this.h()},l(a){e=p(a,"IMG",{src:!0,width:!0,alt:!0,title:!0,class:!0}),this.h()},h(){be(e.src,s="https://unpkg.com/language-icons/icons/"+i[6]+".svg")||g(e,"src",s),g(e,"width","30"),g(e,"alt",t=i[6]),g(e,"title",n=i[6]),g(e,"class","svelte-up5lp7")},m(a,o){v(a,e,o)},p(a,o){o&1&&!be(e.src,s="https://unpkg.com/language-icons/icons/"+a[6]+".svg")&&g(e,"src",s),o&1&&t!==(t=a[6])&&g(e,"alt",t),o&1&&n!==(n=a[6])&&g(e,"title",n)},d(a){a&&h(e)}}}function Ve(i){let e,s,t,n,a=i[2].alignments,o=[];for(let l=0;l<a.length;l+=1)o[l]=Ce(Ee(i,a,l));return{c(){e=d("dt"),s=D("Alignment(s)"),t=d("dd"),n=d("ul");for(let l=0;l<o.length;l+=1)o[l].c();this.h()},l(l){e=p(l,"DT",{class:!0});var r=m(e);s=w(r,"Alignment(s)"),r.forEach(h),t=p(l,"DD",{});var c=m(t);n=p(c,"UL",{class:!0});var f=m(n);for(let k=0;k<o.length;k+=1)o[k].l(f);f.forEach(h),c.forEach(h),this.h()},h(){g(e,"class","svelte-up5lp7"),g(n,"class","svelte-up5lp7")},m(l,r){v(l,e,r),_(e,s),v(l,t,r),_(t,n);for(let c=0;c<o.length;c+=1)o[c].m(n,null)},p(l,r){if(r&1){a=l[2].alignments;let c;for(c=0;c<a.length;c+=1){const f=Ee(l,a,c);o[c]?o[c].p(f,r):(o[c]=Ce(f),o[c].c(),o[c].m(n,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=a.length}},d(l){l&&h(e),l&&h(t),ie(o,l)}}}function Ce(i){let e,s=i[3]+"",t;return{c(){e=d("li"),t=D(s)},l(n){e=p(n,"LI",{});var a=m(e);t=w(a,s),a.forEach(h)},m(n,a){v(n,e,a),_(e,t)},p(n,a){a&1&&s!==(s=n[3]+"")&&V(t,s)},d(n){n&&h(e)}}}function Oe(i){let e,s;return{c(){e=d("p"),s=D("Loading...")},l(t){e=p(t,"P",{});var n=m(e);s=w(n,"Loading..."),n.forEach(h)},m(t,n){v(t,e,n),_(e,s)},p:N,i:N,o:N,d(t){t&&h(e)}}}function We(i){let e,s,t,n,a={ctx:i,current:null,token:null,hasCatch:!0,pending:Oe,then:ze,catch:Qe,value:2,error:18,blocks:[,,,]};return ke(t=i[0],a),{c(){e=d("div"),s=d("div"),a.block.c(),this.h()},l(o){e=p(o,"DIV",{class:!0});var l=m(e);s=p(l,"DIV",{});var r=m(s);a.block.l(r),r.forEach(h),l.forEach(h),this.h()},h(){g(e,"class","container svelte-up5lp7")},m(o,l){v(o,e,l),_(e,s),a.block.m(s,a.anchor=null),a.mount=()=>s,a.anchor=null,n=!0},p(o,[l]){i=o,a.ctx=i,l&1&&t!==(t=i[0])&&ke(t,a)||He(a,i,l)},i(o){n||(G(a.block),n=!0)},o(o){for(let l=0;l<3;l+=1){const r=a.blocks[l];Q(r)}n=!1},d(o){o&&h(e),a.block.d(),a.token=null,a=null}}}function xe({page:i}){return{props:{promise:fetch(`${$e}/data/${i.params.slug}.json`).then(e=>e.json())}}}function Xe(i,e,s){let{promise:t}=e;const n=$e;return i.$$set=a=>{"promise"in a&&s(0,t=a.promise)},[t,n]}class et extends me{constructor(e){super();ge(this,e,Xe,We,ve,{promise:0,BASE_PATH:1})}get BASE_PATH(){return this.$$.ctx[1]}}export{et as default,xe as load};
