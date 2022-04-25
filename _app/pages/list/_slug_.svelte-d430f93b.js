import{S as y,i as j,s as w,Q as p,l as _,g as u,R as P,q as g,o as b,d as r,e as m,t as k,c as f,a as h,h as v,f as D,G as $,j as C,K as d,w as N,x as E,b as L,y as S,B as q}from"../../chunks/vendor-a6a35261.js";import{b as i}from"../../chunks/paths-4b3c6e7e.js";import{D as x}from"../../chunks/Datatable-703ffbf2.js";import{r as B}from"../../chunks/singletons-4a680913.js";const G=B,I=J;async function J(l,a){return G.goto(l,a,[])}function K(l){let a,e=l[4].message+"",n;return{c(){a=m("p"),n=k(e),this.h()},l(t){a=f(t,"P",{style:!0});var s=h(a);n=v(s,e),s.forEach(r),this.h()},h(){D(a,"color","red")},m(t,s){u(t,a,s),$(a,n)},p(t,s){s&1&&e!==(e=t[4].message+"")&&C(n,e)},i:d,o:d,d(t){t&&r(a)}}}function M(l){let a,e,n;return e=new x({props:{options:l[1],data:l[3],rowLink:l[2]}}),{c(){a=m("div"),N(e.$$.fragment),this.h()},l(t){a=f(t,"DIV",{class:!0});var s=h(a);E(e.$$.fragment,s),s.forEach(r),this.h()},h(){L(a,"class","list svelte-96eam3")},m(t,s){u(t,a,s),S(e,a,null),n=!0},p(t,s){const o={};s&1&&(o.data=t[3]),e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){t&&r(a),q(e)}}}function O(l){let a,e;return{c(){a=m("p"),e=k("Loading...")},l(n){a=f(n,"P",{});var t=h(a);e=v(t,"Loading..."),t.forEach(r)},m(n,t){u(n,a,t),$(a,e)},p:d,i:d,o:d,d(n){n&&r(a)}}}function Q(l){let a,e,n,t={ctx:l,current:null,token:null,hasCatch:!0,pending:O,then:M,catch:K,value:3,error:4,blocks:[,,,]};return p(e=l[0],t),{c(){a=_(),t.block.c()},l(s){a=_(),t.block.l(s)},m(s,o){u(s,a,o),t.block.m(s,t.anchor=o),t.mount=()=>a.parentNode,t.anchor=a,n=!0},p(s,[o]){l=s,t.ctx=l,o&1&&e!==(e=l[0])&&p(e,t)||P(t,l,o)},i(s){n||(g(t.block),n=!0)},o(s){for(let o=0;o<3;o+=1){const c=t.blocks[o];b(c)}n=!1},d(s){s&&r(a),t.block.d(s),t.token=null,t=null}}}async function A({params:l}){let a=fetch(`${i}/data/summary.json`).then(e=>e.json()).then(e=>e.sort((n,t)=>n.title.localeCompare(t.title)));if(["variable","property","entity","constraint","method","unit"].includes(l.slug)){const e=l.slug;a=a.then(n=>n.filter(t=>t.has[e]))}return{props:{dataPromise:a}}}function R(l,a,e){let{dataPromise:n}=a;const t={columns:[{data:"title",title:"Name"},{data:"domain",title:"Domain(s)",render:o=>o?o.map(c=>c.label).join():""},{data:"type",title:"Type"},{data:"id",title:"&nbsp;",sortable:!1,render:o=>`
          <div class="download">
            <a href="${i}/data/${o}.ttl" target="_blank"><img src="${i}/gfx/rdf.svg" alt="dcat"/></a>
            <a href="${i}/data/${o}.json" target="_blank"><img src="${i}/gfx/json.svg" alt="JSON"/></a>
          </div>
        `}],rowCallback:(o,c)=>o.dataset.id=c.id};function s(o){o.target.tagName!=="IMG"&&I(`${i}/data/${this.parentNode.dataset.id}`)}return l.$$set=o=>{"dataPromise"in o&&e(0,n=o.dataPromise)},[n,t,s]}class F extends y{constructor(a){super();j(this,a,R,Q,w,{dataPromise:0})}}export{F as default,A as load};
