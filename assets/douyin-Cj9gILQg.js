import{d as C,r as s,c as f,o as v,a as e,w as o,b as l,e as E,f as P,t as S,_ as V,g,v as w,h as k,i as M,j as W,k as j,l as T,n as q,u as h,m as A,F as G,E as F}from"./index-CXCzEs_M.js";import{S as R,a as L}from"./swiper-BcqIYeZH.js";import{u as J}from"./douyin-OUNkm3AY.js";import{u as K}from"./favorites-CzErikZZ.js";import"./Security-J1jS0fmJ.js";import"./index-CBkJ2ggU.js";const O={class:"video-content"},Q={class:"author"},U={key:0},X=C({__name:"content",props:["author","caption","create_time"],setup(n){return(c,u)=>{const t=s("el-col"),d=s("el-row");return v(),f("div",O,[e(d,null,{default:o(()=>[e(t,{class:"user"},{default:o(()=>[l("span",Q,[n.author?(v(),f("span",U,"@")):E("",!0),P(" "+S(n.author),1)])]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(t,{class:"caption"},{default:o(()=>[P(S(n.caption),1)]),_:1})]),_:1})])}}}),Y=V(X,[["__scopeId","data-v-0f003773"]]),Z={class:"video-items"},ee={class:"item"},te={class:"item"},oe={class:"item"},ne=C({__name:"icon",props:["playcount","addfavorites","sharevideourl","item","changemuted","muted","playicon","clearscreen"],setup(n){const c=u=>u>1e4?(u/1e4).toFixed(1)+"w":u;return(u,t)=>{const d=s("VideoPlay"),m=s("el-icon"),r=s("el-col"),p=s("el-row"),H=s("Star"),y=s("Share"),I=s("WarningFilled"),b=s("Hide"),$=s("View");return v(),f("div",Z,[g(l("div",null,[e(p,null,{default:o(()=>[e(r,{onClick:t[0]||(t[0]=x=>n.playcount(n.item))},{default:o(()=>[e(m,null,{default:o(()=>[e(d)]),_:1}),l("div",ee,S(c(n.item.play_count)),1)]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(r,{onClick:t[1]||(t[1]=x=>n.addfavorites(n.item))},{default:o(()=>[e(m,null,{default:o(()=>[e(H)]),_:1}),l("div",te,S(c(n.item.collect_count)),1)]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(r,{onClick:t[2]||(t[2]=x=>n.sharevideourl(n.item))},{default:o(()=>[e(m,null,{default:o(()=>[e(y)]),_:1}),l("div",oe,S(c(n.item.share_count)),1)]),_:1})]),_:1})],512),[[w,n.playicon]]),e(p,null,{default:o(()=>[g(e(r,{onClick:n.changemuted},{default:o(()=>[e(m,null,{default:o(()=>[e(I)]),_:1}),t[3]||(t[3]=l("div",{class:"item"},[l("div",null,"静音")],-1))]),_:1},8,["onClick"]),[[w,n.muted]]),g(e(r,{onClick:n.clearscreen},{default:o(()=>[g(l("div",null,[e(m,null,{default:o(()=>[e(b)]),_:1}),t[4]||(t[4]=l("div",{class:"item"},[l("div",null,"清屏")],-1))],512),[[w,n.playicon]]),g(l("div",null,[e(m,null,{default:o(()=>[e($)]),_:1}),t[5]||(t[5]=l("div",{class:"item"},[l("div",null,"显示")],-1))],512),[[w,!n.playicon]])]),_:1},8,["onClick"]),[[w,!n.muted]])]),_:1})])}}}),ae=V(ne,[["__scopeId","data-v-a6ae3a7a"]]),le={key:0,class:"gesture-animation"},ie=["height","poster","src"],se={key:0,class:"video-play"},ue=C({__name:"item",setup(n){const c=k(!0),u=k(!0),t=k(!1),d=J(),m=K(),r=k(!0);d.getDouyinData();const p=()=>{c.value=!1,y(!0),F({message:"静音已取消",type:"success",duration:1500})},H=()=>{u.value=!u.value},y=i=>{const a=document.querySelector(".swiper-slide-active video");a&&(a.muted=c.value,i?(a.play(),t.value=!1):a.pause())},I=()=>{setTimeout(()=>{y(!0)},500)},b=i=>{i.activeIndex===0?r.value=!0:r.value=!1,setTimeout(()=>{const a=document.querySelector(".swiper-slide-active video");a&&(a.muted=c.value,a.play(),t.value=!1)},50),setTimeout(()=>{const a=document.querySelector(".swiper-slide-prev video");a&&a.pause()},60),setTimeout(()=>{const a=document.querySelector(".swiper-slide-next video");a&&a.pause()},60),d.datas.length-i.activeIndex<4&&d.getDouyinData()},$=()=>{const i=document.querySelector(".swiper-slide-active video");i&&(i.paused?(i.play(),t.value=!1):(i.pause(),t.value=!0))},x=i=>{i.collectLoading||(i.collectLoading=!0,setTimeout(()=>{i.collectLoading=!1},300),i.play_count+=1,F({message:"爱看 + 1",grouping:!0,type:"success",duration:800}))};M(()=>{y(!0),t.value=!1}),W(()=>{y(!1),t.value=!0});const D=k((window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-50);return j(()=>{window.addEventListener("resize",()=>{D.value=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)-50})}),(i,a)=>{const N=s("VideoPlay"),B=s("el-icon");return v(),T(h(R),{style:q({height:D.value+"px"}),"slides-per-view":1,direction:"vertical",onSwiper:I,onSlideChange:b},{default:o(()=>[e(h(L),null,{default:o(()=>[r.value?(v(),f("div",le,a[2]||(a[2]=[l("div",null,null,-1),l("span",null,"上滑更精彩",-1)]))):E("",!0)]),_:1}),(v(!0),f(G,null,A(h(d).datas,_=>(v(),T(h(L),{key:_.id,style:q({backgroundImage:`url(${_.gaussian_cover})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"})},{default:o(()=>[l("video",{width:"100%",height:D.value,preload:"auto",poster:_.cover,src:_.video_url,muted:"",autoplay:"",loop:"",onClick:a[0]||(a[0]=z=>$())},null,8,ie),g(e(Y,{author:_.author,caption:_.caption,create_time:_.create_time},null,8,["author","caption","create_time"]),[[w,u.value]]),e(ae,{playcount:x,addfavorites:h(m).addfavorites,sharevideourl:h(d).sharevideourl,item:_,changemuted:p,muted:c.value,clearscreen:H,playicon:u.value},null,8,["addfavorites","sharevideourl","item","muted","playicon"]),t.value?(v(),f("div",se,[e(B,null,{default:o(()=>[e(N,{onClick:a[1]||(a[1]=z=>$())})]),_:1})])):E("",!0)]),_:2},1032,["style"]))),128))]),_:1},8,["style"])}}}),ce=V(ue,[["__scopeId","data-v-3407066e"]]),de={class:"video-box"},re=C({__name:"douyin",setup(n){return(c,u)=>(v(),f("div",de,[e(ce)]))}}),he=V(re,[["__scopeId","data-v-8cca61f0"]]);export{he as default};
