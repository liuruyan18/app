import{C}from"./CommonUser-BzdQJugD.js";import{u as y,a as B}from"./favorites-_z_31Ozq.js";import{d as I,h as r,k as w,i as H,l as b,w as n,b as t,n as i,u as c,a as f,c as m,m as E,F as N,r as _,f as T,p as V,o as v,_ as D}from"./index-D0VcYLgy.js";import"./Security-CC4RzzBi.js";const F={class:"flex-container"},L=["onClick"],z=I({__name:"favorites",setup(A){const p=V();let o=r(null);const s=y(),h=B(),e=r(),a=r(0);w(()=>{s.getfavoritesData(),o.value=document.documentElement.clientHeight,e.value.addEventListener("scroll",()=>{a.value=e.value.scrollTop,e.value.scrollHeight-a.value-e.value.clientHeight<20&&s.getfavoritesData()})}),H(()=>{e.value.scrollTop=a.value});const x=d=>{h.setfavoritesItem(d),p.push({name:"favoritesvideodetails"})};return(d,u)=>{const g=_("el-col"),k=_("el-row");return v(),b(C,{title:"收藏列表"},{content:n(()=>[t("div",{class:"favorites-list",style:i({height:c(o)-100+"px"})},[t("div",{class:"video",style:i({height:c(o)-100+"px"})},[t("div",{class:"video-box",ref_key:"videoBox",ref:e},[t("div",F,[(v(!0),m(N,null,E(c(s).lists,l=>(v(),m("div",{class:"flex-item",key:l.id,onClick:M=>x(l)},[t("div",{class:"video-item",style:i({background:"url("+l.cover+") no-repeat center / cover"})},null,4)],8,L))),128))]),f(k,null,{default:n(()=>[f(g,{class:"video-footer",span:24},{default:n(()=>u[0]||(u[0]=[T("已经到底了")])),_:1})]),_:1})],512)],4)],4)]),_:1})}}}),$=D(z,[["__scopeId","data-v-d3531360"]]);export{$ as default};
