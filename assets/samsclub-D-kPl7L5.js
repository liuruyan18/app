import{d as h,c as y,a as c,b as p,r as d,w as n,f as i,t as x,l as f,u as g,q as v,E as _,o as l,_ as C,s as B,h as b,k as S,i as L,F as T,m as $}from"./index-CXCzEs_M.js";import{u as j}from"./index-CBkJ2ggU.js";import{u as E,a as M}from"./Security-J1jS0fmJ.js";const N={class:"item-box"},V={class:"item-button"},F=h({__name:"goods",props:["item"],setup(s){const{toClipboard:a}=j(),o=e=>{if(!e.collectLoading){e.collectLoading=!0,setTimeout(()=>{e.collectLoading=!1},1e3);try{a(e.content).then(()=>{_({message:"内容已复制",grouping:!0,type:"success",duration:800}),e.platform=="tb"?window.open("taobao://"+e.url):e.platform=="jd"?window.open('openApp.jdMobile://virtual?params={"category":"jump","des":"m","sourceValue":"babel-act","sourceType":"babel","url":"'+e.url+'","M_sourceFrom":"h5auto","msf_type":"auto"}'):window.open("pinduoduo://"+e.url)})}catch{_({message:"复制失败",grouping:!0,type:"error",duration:800})}}};return(e,t)=>{const w=d("el-image"),u=d("el-text"),r=d("el-button");return l(),y("div",N,[c(w,{src:s.item.img,fit:"fill",lazy:""},null,8,["src"]),p("div",null,[c(u,{class:"item-title"},{default:n(()=>[i(x(s.item.title),1)]),_:1})]),p("div",null,[c(u,{class:"item-price"},{default:n(()=>[i("¥"+x(s.item.price),1)]),_:1})]),p("div",V,[s.item.platform=="tb"?(l(),f(r,{key:0,type:"primary",plain:"",onClick:t[0]||(t[0]=m=>o(s.item)),icon:g(v)},{default:n(()=>t[3]||(t[3]=[i("淘宝")])),_:1},8,["icon"])):s.item.platform=="jd"?(l(),f(r,{key:1,type:"primary",plain:"",onClick:t[1]||(t[1]=m=>o(s.item)),icon:g(v)},{default:n(()=>t[4]||(t[4]=[i("京东")])),_:1},8,["icon"])):(l(),f(r,{key:2,type:"primary",plain:"",onClick:t[2]||(t[2]=m=>o(s.item)),icon:g(v)},{default:n(()=>t[5]||(t[5]=[i("拼多多")])),_:1},8,["icon"]))])])}}}),A=C(F,[["__scopeId","data-v-cc1edb2c"]]),k=E(),H=B("sams",()=>{const s=b([]);function a(){M({method:"post",url:"/api/shop.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:k.encrypt(new URLSearchParams({commodity:"20"}).toString())}}).then(o=>{let e=JSON.parse(k.decrypt(o.data));e.code==1&&s.value.push(...e.data),e.code==3&&_.error(e.msg)}).catch(o=>{_.error("网络错误")})}return{datas:s,getgoods:a}}),I={class:"goods"},P=h({__name:"samsclub",setup(s){const a=H();a.getgoods();const o=b(),e=b(0);return S(()=>{o.value.addEventListener("scroll",()=>{e.value=o.value.scrollTop,o.value.scrollHeight-e.value-o.value.clientHeight<1e3&&a.getgoods()})}),L(()=>{o.value.scrollTop=e.value}),(t,w)=>{const u=d("el-col"),r=d("el-row");return l(),y("div",I,[p("div",{class:"goods-box",ref_key:"goodsBox",ref:o},[c(r,null,{default:n(()=>[(l(!0),y(T,null,$(g(a).datas,m=>(l(),f(u,{class:"item",span:12},{default:n(()=>[c(A,{item:m},null,8,["item"])]),_:2},1024))),256))]),_:1})],512)])}}}),J=C(P,[["__scopeId","data-v-fd8072ec"]]);export{J as default};
