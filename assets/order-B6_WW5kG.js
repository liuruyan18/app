import{C}from"./CommonUser-BzdQJugD.js";import{u as k}from"./User-_UPlcFjp.js";import{d as y,h as i,i as U,k as B,l as N,w as l,b as r,a as e,r as t,f,u as v,n as T,o as H,_ as O}from"./index-D0VcYLgy.js";import"./Security-CC4RzzBi.js";import"./douyin-CaIbGkUm.js";import"./index-B_78wbIu.js";import"./bilibili-BycNr57l.js";const S={class:"order-exchange-content"},z={class:"order-exchange-table"},A=y({__name:"order",setup(E){const c=k(),a=i("京东"),_=i(""),n=i("请输入京东平台订单号"),g=()=>{a.value=="京东"&&(n.value="请输入京东平台订单号"),a.value=="淘宝"&&(n.value="请输入淘宝平台订单号"),a.value=="口令红包"&&(n.value="请输入支付宝口令红包")};U(()=>{c.getOrder()});let b=i(null);return B(()=>{b.value=document.documentElement.clientHeight}),(I,o)=>{const m=t("el-radio"),x=t("el-radio-group"),s=t("el-col"),d=t("el-row"),w=t("el-input"),h=t("el-button"),u=t("el-table-column"),V=t("el-table");return H(),N(C,{title:"订单兑换"},{content:l(()=>[r("div",{class:"order-exchange",style:T({height:v(b)-100+"px"})},[r("div",S,[e(d,{class:"order-exchange-row"},{default:l(()=>[e(s,{span:24},{default:l(()=>[r("div",null,[e(x,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=p=>a.value=p),onChange:g},{default:l(()=>[e(m,{value:"京东"},{default:l(()=>o[3]||(o[3]=[f("京东")])),_:1}),e(m,{value:"淘宝"},{default:l(()=>o[4]||(o[4]=[f("淘宝")])),_:1}),e(m,{value:"口令红包"},{default:l(()=>o[5]||(o[5]=[f("口令红包")])),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1}),e(d,{class:"order-exchange-row"},{default:l(()=>[e(s,{span:24},{default:l(()=>[e(w,{modelValue:_.value,"onUpdate:modelValue":o[1]||(o[1]=p=>_.value=p),placeholder:n.value,clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),e(d,{class:"order-exchange-row"},{default:l(()=>[e(s,{span:24,class:"order-exchange-button"},{default:l(()=>[e(h,{type:"primary",onClick:o[2]||(o[2]=p=>v(c).postOrder(_.value,a.value))},{default:l(()=>o[6]||(o[6]=[f("提 交")])),_:1})]),_:1})]),_:1}),e(d,{class:"order-exchange-row"},{default:l(()=>[e(s,{span:24},{default:l(()=>o[7]||(o[7]=[r("span",null,"Tips: 通过商城购物后，提交购物订单号，审核通过即可获得兑换点，兑换点可用于兑换等级卡",-1)])),_:1})]),_:1}),r("div",z,[e(V,{data:v(c).orderlist,"header-cell-style":{"text-align":"center","background-color":"#1f1f1f",color:"#f0f0f0","border-bottom":"1px #2f2f2f solid"},"cell-style":{"text-align":"center","background-color":"#1f1f1f",color:"#f0f0f0","border-bottom":"1px #2f2f2f solid"}},{default:l(()=>[e(u,{prop:"platform",label:"平台",width:"80"}),e(u,{prop:"order",label:"订单"}),e(u,{prop:"status",label:"状态",width:"80"}),e(u,{prop:"dot",label:"点数",width:"50"})]),_:1},8,["data"])])])],4)]),_:1})}}}),J=O(A,[["__scopeId","data-v-84018bd2"]]);export{J as default};
