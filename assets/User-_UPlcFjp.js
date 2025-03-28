import{s as x,p as T,h as n,E as t,z as y}from"./index-D0VcYLgy.js";import{u as C,a as s}from"./Security-CC4RzzBi.js";import{u as U}from"./douyin-CaIbGkUm.js";import{u as R}from"./bilibili-BycNr57l.js";const S=U(),v=R(),a=C(),A=x("user",()=>{const i=T(),u=n(!0),m=n(""),g=n(""),f=n(""),c=n({}),h=n([]),I=n([]),o=n(""),p=n("");function w(){c.value=JSON.parse(localStorage.getItem("u")||"{}")}function O(){localStorage.removeItem("u"),localStorage.removeItem("t"),c.value={},S.datas=[],v.datas=[],w(),S.getDouyinData(),v.getBilibiliData()}function J(){if(m.value==""||g.value==""){t.error("用户名或密码不能为空");return}s({method:"post",url:"/api/login.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({username:m.value,password:g.value}).toString())}}).then(r=>{let e=JSON.parse(a.decrypt(r.data));e.code==1&&(t.success(e.msg),localStorage.setItem("u",JSON.stringify(e.data)),localStorage.setItem("t",e.data.token),S.datas=[],v.datas=[],w(),S.getDouyinData(),v.getBilibiliData()),e.code==2&&t.error(e.msg)}).catch(r=>{t.error("网络错误")})}function N(){if(m.value==""&&g.value==""&&f.value==""){t.error("用户名、密码、注册码不能为空");return}if(m.value.length<8||m.value.length>16){t.error("用户名的长度需要大于等于8小于等于16");return}if(g.value.length<8||g.value.length>16){t.error("密码的长度需要大于等于8小于等于16");return}s({method:"post",url:"/api/register.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({username:m.value,password:g.value,code:f.value}).toString())}}).then(r=>{let e=JSON.parse(a.decrypt(r.data));e.code==1&&(t.success(e.msg),u.value=!u.value),e.code==2&&t.error(e.msg)}).catch(r=>{t.error("网络错误")})}return{islogin:u,username:m,password:g,code:f,userinfo:c,orderlist:h,codelist:I,quit:O,login:J,register:N,getUser:w,getUserInfo:()=>{if(o.value=localStorage.getItem("t"),localStorage.getItem("t")==null){localStorage.removeItem("u"),c.value={},u.value=!0;return}s({method:"post",url:"/api/userinfo.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({t:o.value}).toString())}}).then(r=>{let e=JSON.parse(a.decrypt(r.data));e.code==1&&(localStorage.setItem("u",JSON.stringify(e.data)),localStorage.setItem("t",e.data.token),c.value=JSON.parse(localStorage.getItem("u")||"{}")),e.code==2&&t.error(e.msg),e.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),t.error(e.msg),i.replace({name:"Me"}))}).catch(r=>{t.error("网络错误")})},Sign:()=>{if(o.value=localStorage.getItem("t"),p.value=(new Date().getTime()/1e3).toString(),localStorage.getItem("t")==null){localStorage.removeItem("u"),c.value={},u.value=!0;return}s({method:"post",url:"/api/sign.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({t:o.value,sign:p.value}).toString())}}).then(r=>{let e=JSON.parse(a.decrypt(r.data));e.code==1&&(localStorage.setItem("u",JSON.stringify(e.data)),localStorage.setItem("t",e.data.token),c.value=JSON.parse(localStorage.getItem("u")||"{}"),t.success(e.msg)),e.code==2&&t.error(e.msg),e.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),t.error(e.msg),i.replace({name:"Me"})),e.code==4&&t.error(e.msg)}).catch(r=>{t.error("网络错误")})},redeemCard:r=>{if(o.value=localStorage.getItem("t"),localStorage.getItem("t")==null){localStorage.removeItem("u"),c.value={},u.value=!0;return}y.confirm("是否确认兑换等级卡，兑换后不可撤销。","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"info"}).then(()=>{s({method:"post",url:"/api/redeemcard.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({t:o.value,level:r}).toString())}}).then(e=>{let l=JSON.parse(a.decrypt(e.data));l.code==1&&(localStorage.setItem("u",JSON.stringify(l.data)),localStorage.setItem("t",l.data.token),c.value=JSON.parse(localStorage.getItem("u")||"{}")),l.code==2&&t.error(l.msg),l.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),t.error(l.msg),i.replace({name:"Me"})),l.code==4&&t.error(l.msg)}).catch(e=>{t.error("网络错误")})})},getOrder:()=>{o.value=localStorage.getItem("t"),p.value=(new Date().getTime()/1e3).toString(),s({method:"post",url:"/api/order.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({t:o.value,query:p.value}).toString())}}).then(r=>{let e=JSON.parse(a.decrypt(r.data));e.code==1&&(h.value=e.data),e.code==2&&t.error(e.msg),e.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),t.error(e.msg),i.replace({name:"Me"})),e.code==4&&t.error(e.msg)}).catch(r=>{t.error("网络错误")})},postOrder:(r,e)=>{if(o.value=localStorage.getItem("t"),localStorage.getItem("t")==null){localStorage.removeItem("u"),c.value={},u.value=!0;return}if(r==""||r==null){t.error("订单编号或口令不能为空");return}if(e==""||e==null){t.error("平台不能为空");return}if(e=="淘宝"&&r.length!=19){t.error("淘宝订单号错误");return}if(e=="京东"&&r.length!=12){t.error("京东订单号错误");return}if(e=="口令红包"&&r.length<5){t.error("口令红包错误");return}s({method:"post",url:"/api/order.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({t:o.value,order:r,platform:e}).toString())}}).then(l=>{let d=JSON.parse(a.decrypt(l.data));d.code==1&&(h.value.push({platform:e,order:r,status:"待审核",dot:null,datetime:""}),t.success(d.msg)),d.code==2&&t.error(d.msg),d.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),t.error(d.msg),i.replace({name:"Me"})),d.code==4&&t.error(d.msg)}).catch(l=>{t.error("网络错误")})},getCode:()=>{o.value=localStorage.getItem("t"),p.value=(new Date().getTime()/1e3).toString(),s({method:"post",url:"/api/code.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({t:o.value,getcode:p.value}).toString())}}).then(r=>{let e=JSON.parse(a.decrypt(r.data));e.code==1&&(I.value=e.data),e.code==2&&t.error(e.msg),e.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),t.error(e.msg),i.replace({name:"Me"})),e.code==4&&t.error(e.msg)}).catch(r=>{t.error("网络错误")})},postCode:()=>{if(o.value=localStorage.getItem("t"),localStorage.getItem("t")==null){localStorage.removeItem("u"),c.value={},u.value=!0;return}y.confirm("是否兑换注册码，兑换后不可撤销。","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"info"}).then(()=>{s({method:"post",url:"/api/code.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:a.encrypt(new URLSearchParams({t:o.value,postcode:p.value}).toString())}}).then(r=>{let e=JSON.parse(a.decrypt(r.data));e.code==1&&I.value.push(e.data),e.code==2&&t.error(e.msg),e.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),t.error(e.msg),i.replace({name:"Me"})),e.code==4&&t.error(e.msg)}).catch(r=>{t.error("网络错误")})})}}});export{A as u};
