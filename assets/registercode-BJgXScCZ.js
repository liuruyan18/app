import{C as x}from"./CommonUser-CnPn9axk.js";import{d as y,h as C,k as h,i as w,l as k,w as o,b as l,a as e,r as a,u as n,f as v,y as B,n as E,E as _,o as N,_ as V}from"./index-CXCzEs_M.js";import{u as z}from"./User-Bu8gh54H.js";import{u as H}from"./index-CBkJ2ggU.js";import"./Security-J1jS0fmJ.js";import"./douyin-OUNkm3AY.js";import"./bilibili-DFke89aa.js";const M={class:"registration-code-exchange-content"},S={class:"alipay-password-exchange-table"},T=y({__name:"registercode",setup(U){const r=z(),{toClipboard:f}=H(),m=(g,t)=>{try{f(t.code),_({message:"已复制",grouping:!0,type:"success",duration:800})}catch{_({message:"复制失败",grouping:!0,type:"error",duration:800})}};let i=C(null);return h(()=>{i.value=document.documentElement.clientHeight}),w(()=>{r.getCode()}),(g,t)=>{const c=a("el-button"),d=a("el-col"),p=a("el-row"),s=a("el-table-column"),b=a("el-table");return N(),k(x,{title:"注册码兑换"},{content:o(()=>[l("div",{class:"registration-code-exchange",style:E({height:n(i)-100+"px"})},[l("div",M,[e(p,{class:"alipay-password-exchange-row"},{default:o(()=>[e(d,{span:24},{default:o(()=>[e(c,{type:"primary",onClick:n(r).postCode},{default:o(()=>t[0]||(t[0]=[v("使用100点兑换")])),_:1},8,["onClick"])]),_:1})]),_:1}),e(p,{class:"alipay-password-exchange-row"},{default:o(()=>[e(d,{span:24},{default:o(()=>t[1]||(t[1]=[l("span",null,"Tips: 注册码用于注册账号，每个注册码只可以注册一次。",-1)])),_:1})]),_:1}),l("div",S,[e(b,{data:n(r).codelist,"header-cell-style":{"text-align":"center","background-color":"#1f1f1f",color:"#f0f0f0","border-bottom":"1px #2f2f2f solid"},"cell-style":{"text-align":"center","background-color":"#1f1f1f",color:"#f0f0f0","border-bottom":"1px #2f2f2f solid"}},{default:o(()=>[e(s,{prop:"code",label:"注册码"}),e(s,{prop:"use_username",label:"注册用户"}),e(s,{prop:"status",label:"状态"}),e(s,{label:"操作"},{default:o(u=>[e(c,{type:"primary",size:"small",icon:n(B),onClick:$=>m(u.$index,u.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data"])])])],4)]),_:1})}}}),J=V(T,[["__scopeId","data-v-f58179ac"]]);export{J as default};
