import{_ as N}from"./Ad.vue_vue_type_script_setup_true_lang-C9TONwsK.js";import{a as A,b as P}from"./bilibili-BycNr57l.js";import{u as H}from"./favorites-_z_31Ozq.js";import{d as T,h,p as R,k as j,i as q,c as v,a as e,b as g,w as t,r as f,u as i,F as z,m as W,n as Y,e as G,f as d,t as c,o as y,_ as J}from"./index-D0VcYLgy.js";import{H as k}from"./hls-DL814E_v.js";import"./swiper-Bvt7pfDs.js";import"./Security-CC4RzzBi.js";const K={class:"video-content"},O=["poster","data-src","data-type"],Q={key:0},U=["onClick"],X=T({__name:"videodetails",setup(Z){const S=R(),n=A(),B=H(),w=P();h(""),n.item.length==0&&S.push({name:"bilibili"});const C=a=>{const s=Math.floor(a/1e3),_=Math.floor(s/3600),l=s%3600,o=Math.floor(l/60),m=l%60;return`${_.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}`},p=a=>a>1e4?(a/1e4).toFixed(1)+"w":a,$=a=>{const s=new Date(a),_=s.getFullYear(),l=s.getMonth()+1,o=s.getDate();return`${_}-${l}-${o}`},b=h(),D=a=>{n.setblibliItem(a),S.push({name:"videodetails"}),b.value.addEventListener("scroll",()=>{}),b.value.scrollTop=0,x()},x=()=>{const a=document.querySelector(".videoplayer");if(a)if(k.isSupported()&&a.dataset.type==="m3u8"){const s=new k;s.loadSource(a.dataset.src),s.attachMedia(a),s.on(k.Events.MANIFEST_PARSED,()=>{a.play()})}else a.src===""&&(a.src=a.dataset.src),a.play()};let M=h(null);return j(()=>{M.value=document.documentElement.clientHeight}),q(()=>{x(),w.getBilibiliData(n.item)}),(a,s)=>{const _=f("ArrowLeftBold"),l=f("el-icon"),o=f("el-col"),m=f("Star"),r=f("el-row"),E=f("el-affix"),F=f("VideoPlay"),I=f("Film"),V=f("Clock"),L=f("el-image");return y(),v("div",{class:"video-details",ref_key:"videoContent",ref:b,style:Y({height:i(M)-50+"px"})},[e(E,null,{default:t(()=>[e(r,{class:"video-header-row"},{default:t(()=>[e(o,{span:12,class:"video-back"},{default:t(()=>[e(l,{class:"video-back-icon",onClick:s[0]||(s[0]=u=>a.$router.back())},{default:t(()=>[e(_)]),_:1})]),_:1}),e(o,{span:12,class:"video-star"},{default:t(()=>[e(l,{class:"video-back-icon",onClick:s[1]||(s[1]=u=>i(B).addfavorites(i(n).item))},{default:t(()=>[e(m)]),_:1})]),_:1})]),_:1})]),_:1}),g("div",K,[g("video",{class:"videoplayer",ref:"videoplayer",width:"100%",preload:"auto",disablePictureInPicture:"true",controlslist:"nodownload noplaybackrate",poster:i(n).item.cover,"data-src":i(n).item.video_url,"data-type":i(n).item.video_url.endsWith(".js")?"m3u8":"mp4",muted:"",autoplay:"",loop:"",controls:""},null,8,O),e(r,null,{default:t(()=>[e(o,{span:24,class:"video-username"},{default:t(()=>[i(n).item.author!=""?(y(),v("span",Q,"@")):G("",!0),d(" "+c(i(n).item.author),1)]),_:1})]),_:1}),e(r,null,{default:t(()=>[e(o,{span:24,class:"video-title"},{default:t(()=>[d(c(i(n).item.caption),1)]),_:1})]),_:1}),e(r,{class:"video-item-row"},{default:t(()=>[e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(F)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:3},{default:t(()=>[d(c(p(i(n).item.play_count)),1)]),_:1}),e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(m)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:3},{default:t(()=>[d(c(p(i(n).item.collect_count)),1)]),_:1}),e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(I)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:4},{default:t(()=>[d(c(C(i(n).item.duration)),1)]),_:1}),e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(V)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:5},{default:t(()=>[d(c($(i(n).item.create_time)),1)]),_:1})]),_:1}),e(r,{class:"video-ad"},{default:t(()=>[e(o,{span:24},{default:t(()=>[e(N)]),_:1})]),_:1}),e(r,{class:"video-recommend-title"},{default:t(()=>[e(o,{span:24},{default:t(()=>s[2]||(s[2]=[g("span",null,"More Video Recommend",-1)])),_:1})]),_:1}),(y(!0),v(z,null,W(i(w).datas,u=>(y(),v("div",{class:"video-item",key:u.id,onClick:ee=>D(u)},[e(r,null,{default:t(()=>[e(o,{span:24},{default:t(()=>[e(L,{src:u.cover,style:{width:"100%"}},null,8,["src"])]),_:2},1024)]),_:2},1024),e(r,null,{default:t(()=>[e(o,{span:24},{default:t(()=>[d(c(u.caption),1)]),_:2},1024)]),_:2},1024),e(r,null,{default:t(()=>[e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(F)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:3},{default:t(()=>[d(c(p(u.play_count)),1)]),_:2},1024),e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(m)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:3},{default:t(()=>[d(c(p(u.collect_count)),1)]),_:2},1024),e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(I)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:4},{default:t(()=>[d(c(C(u.duration)),1)]),_:2},1024),e(o,{class:"video-item-info",span:1},{default:t(()=>[e(l,null,{default:t(()=>[e(V)]),_:1})]),_:1}),e(o,{class:"video-item-info",span:5},{default:t(()=>[d(c($(u.create_time)),1)]),_:2},1024)]),_:2},1024)],8,U))),128)),e(r,null,{default:t(()=>[e(o,{class:"video-footer",span:24},{default:t(()=>s[3]||(s[3]=[d("已经到底了")])),_:1})]),_:1})])],4)}}}),de=J(X,[["__scopeId","data-v-65ad3b38"]]);export{de as default};
