import{s as g,h as n,p as m,E as a}from"./index-CXCzEs_M.js";import{u as h,a as d}from"./Security-J1jS0fmJ.js";import{u as S}from"./index-CBkJ2ggU.js";const{toClipboard:f}=S(),s=h(),L=g("douyin",()=>{const l=n([]),r=n(""),u=n(""),c=m();function i(){r.value=localStorage.getItem("t"),u.value=1,d({method:"post",url:"/api/videos.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:s.encrypt(new URLSearchParams({t:r.value,v:u.value}).toString())}}).then(e=>{let t=JSON.parse(s.decrypt(e.data));t.code==1&&l.value.push(...t.data),t.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),a.error(t.msg),c.replace({name:"user"}))}).catch(e=>{a.error("网络错误")})}function p(e){if(e.share_count+=1,!e.collectLoading){if(e.collectLoading=!0,setTimeout(()=>{e.collectLoading=!1},1e3),r.value=localStorage.getItem("t"),localStorage.getItem("t")==null||localStorage.getItem("u")==null){a.error("请先登录"),c.replace({name:"user"});return}d({method:"post",url:"/api/share.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{data:s.encrypt(new URLSearchParams({t:r.value,category:e.category,video_id:e.id}).toString())}}).then(t=>{let o=JSON.parse(s.decrypt(t.data));if(o.code==1)try{f("将此链接复制到Edge浏览器中打开："+window.location.origin+"/Share/"+o.data.share_id).then(()=>{a({message:"分享内容已复制",grouping:!0,type:"success",duration:800})})}catch{a({message:"复制失败",grouping:!0,type:"error",duration:800})}o.code==3&&(localStorage.removeItem("u"),localStorage.removeItem("t"),a.error(o.msg),c.replace({name:"user"}))}).catch(t=>{a.error("网络错误")})}}return{datas:l,getDouyinData:i,sharevideourl:p}});export{L as u};
