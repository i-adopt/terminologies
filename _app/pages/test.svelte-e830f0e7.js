import{S as y,i as j,s as P,Q as f,l as h,g as d,R as w,q as _,o as b,d as r,e as m,t as g,c as u,a as p,h as k,f as D,G as v,j as C,K as i,w as x,x as E,b as N,y as S,B as q}from"../chunks/vendor-a6a35261.js";import{b as c}from"../chunks/paths-4b3c6e7e.js";import{D as L}from"../chunks/Datatable-1640b98c.js";function T(o){let a,s=o[4].message+"",n;return{c(){a=m("p"),n=g(s),this.h()},l(t){a=u(t,"P",{style:!0});var e=p(a);n=k(e,s),e.forEach(r),this.h()},h(){D(a,"color","red")},m(t,e){d(t,a,e),v(a,n)},p(t,e){e&1&&s!==(s=t[4].message+"")&&C(n,s)},i,o:i,d(t){t&&r(a)}}}function B(o){let a,s,n;return s=new L({props:{options:o[1],data:o[3]}}),{c(){a=m("div"),x(s.$$.fragment),this.h()},l(t){a=u(t,"DIV",{class:!0});var e=p(a);E(s.$$.fragment,e),e.forEach(r),this.h()},h(){N(a,"class","list svelte-96eam3")},m(t,e){d(t,a,e),S(s,a,null),n=!0},p(t,e){const l={};e&1&&(l.data=t[3]),s.$set(l)},i(t){n||(_(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){t&&r(a),q(s)}}}function G(o){let a,s;return{c(){a=m("p"),s=g("Loading...")},l(n){a=u(n,"P",{});var t=p(a);s=k(t,"Loading..."),t.forEach(r)},m(n,t){d(n,a,t),v(a,s)},p:i,i,o:i,d(n){n&&r(a)}}}function I(o){let a,s,n,t={ctx:o,current:null,token:null,hasCatch:!0,pending:G,then:B,catch:T,value:3,error:4,blocks:[,,,]};return f(s=o[0],t),{c(){a=h(),t.block.c()},l(e){a=h(),t.block.l(e)},m(e,l){d(e,a,l),t.block.m(e,t.anchor=l),t.mount=()=>a.parentNode,t.anchor=a,n=!0},p(e,[l]){o=e,t.ctx=o,l&1&&s!==(s=o[0])&&f(s,t)||w(t,o,l)},i(e){n||(_(t.block),n=!0)},o(e){for(let l=0;l<3;l+=1){const $=t.blocks[l];b($)}n=!1},d(e){e&&r(a),t.block.d(e),t.token=null,t=null}}}async function R({page:o}){let a=fetch(`${c}/data/summary.json`).then(s=>s.json()).then(s=>s.sort((n,t)=>n.title.localeCompare(t.title)));if(["variable","property","entity","constraint","method","unit"].includes(o.params.slug)){const s=o.params.slug;a=a.then(n=>n.filter(t=>t.has[s]))}return{props:{dataPromise:a}}}function J(o,a,s){let{dataPromise:n}=a;const t={columns:[{data:"title",title:"Name"},{data:"domain",title:"Domain(s)",render:e=>e?e.map(l=>l.label).join():""},{data:"type",title:"Type"},{data:"id",title:"&nbsp;",sortable:!1,render:e=>`
          <div class="download">
            <a href="${c}/data/${e}.ttl" target="_blank"><img src="${c}/gfx/rdf.svg" alt="dcat"/></a>
            <a href="${c}/data/${e}.json" target="_blank"><img src="${c}/gfx/json.svg" alt="JSON"/></a>
          </div>
        `}],rowCallback:(e,l)=>e.dataset.id=l.id};return o.$$set=e=>{"dataPromise"in e&&s(0,n=e.dataPromise)},[n,t]}class V extends y{constructor(a){super();j(this,a,J,I,P,{dataPromise:0})}}export{V as default,R as load};