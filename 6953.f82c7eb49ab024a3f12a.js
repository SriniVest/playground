(self.webpackChunksign_language_playground=self.webpackChunksign_language_playground||[]).push([[6953],{6953:(e,t,o)=>{"use strict";o.r(t),o.d(t,{iosTransitionAnimation:()=>f,shadow:()=>l}),o(8005);var n=o(7513),r=o(2598);const a=e=>document.querySelector(`${e}.ion-cloned-element`),l=e=>e.shadowRoot||e,s=e=>{const t="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs"),o="ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=t){const e=t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=e?e.querySelector(o):null}return e.querySelector(o)},i=(e,t)=>{const o="ION-TABS"===e.tagName?e:e.querySelector("ion-tabs");let n=[];if(null!=o){const e=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=e&&(n=e.querySelectorAll("ion-buttons"))}else n=e.querySelectorAll("ion-buttons");for(const r of n){const e=r.closest("ion-header"),o=e&&!e.classList.contains("header-collapse-condense-inactive"),n=r.querySelector("ion-back-button"),a=r.classList.contains("buttons-collapse"),l="start"===r.slot||""===r.slot;if(null!==n&&l&&(a&&o&&t||!a))return n}return null},c=(e,t,o,r,s,i)=>{const c=t?`calc(100% - ${i.right+4}px)`:i.left-4+"px",d=t?"7px":"-7px",f=t?"-4px":"4px",m=t?"-4px":"4px",p=t?"right":"left",y=t?"left":"right",u=o?[{offset:0,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${d}, ${s.top-40}px, 0) scale(2.1)`}]:[{offset:0,opacity:0,transform:`translate3d(${d}, ${s.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${i.top-46}px, 0) scale(1)`}],b=o?[{offset:0,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`}]:[{offset:0,opacity:0,transform:`translate3d(${m}, ${i.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${m}, ${i.top-46}px, 0) scale(1)`}],S=(0,n.c)(),g=(0,n.c)(),$=a("ion-back-button"),T=l($).querySelector(".button-text"),h=l($).querySelector("ion-icon");$.text=r.text,$.mode=r.mode,$.icon=r.icon,$.color=r.color,$.disabled=r.disabled,$.style.setProperty("display","block"),$.style.setProperty("position","fixed"),g.addElement(h),S.addElement(T),S.beforeStyles({"transform-origin":`${p} center`}).beforeAddWrite(()=>{r.style.setProperty("display","none"),$.style.setProperty(p,c)}).afterAddWrite(()=>{r.style.setProperty("display",""),$.style.setProperty("display","none"),$.style.removeProperty(p)}).keyframes(u),g.beforeStyles({"transform-origin":`${y} center`}).keyframes(b),e.addAnimation([S,g])},d=(e,t,o,r,l,s)=>{const i=t?`calc(100% - ${l.right}px)`:`${l.left}px`,c=t?"-18px":"18px",d=t?"right":"left",f=o?[{offset:0,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${l.top-2}px, 0) scale(1)`}]:[{offset:0,opacity:.99,transform:`translate3d(0, ${l.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${c}, ${s.top-4}px, 0) scale(0.5)`}],m=a("ion-title"),p=(0,n.c)();m.innerText=r.innerText,m.size=r.size,m.color=r.color,p.addElement(m),p.beforeStyles({"transform-origin":`${d} center`,height:"46px",display:"",position:"relative",[d]:i}).beforeAddWrite(()=>{r.style.setProperty("display","none")}).afterAddWrite(()=>{r.style.setProperty("display",""),m.style.setProperty("display","none")}).keyframes(f),e.addAnimation(p)},f=(e,t)=>{try{const o="cubic-bezier(0.32,0.72,0,1)",a="opacity",f="transform",m="0%",p=.8,y="rtl"===e.ownerDocument.dir,u=y?"-99.5%":"99.5%",b=y?"33%":"-33%",S=t.enteringEl,g=t.leavingEl,$="back"===t.direction,T=S.querySelector(":scope > ion-content"),h=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),x=S.querySelectorAll(":scope > ion-header > ion-toolbar"),q=(0,n.c)(),X=(0,n.c)();if(q.addElement(S).duration(t.duration||540).easing(t.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),g&&e){const t=(0,n.c)();t.addElement(e),q.addAnimation(t)}if(T||0!==x.length||0!==h.length?(X.addElement(T),X.addElement(h)):X.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(X),$?X.beforeClearStyles([a]).fromTo("transform",`translateX(${b})`,`translateX(${m})`).fromTo(a,p,1):X.beforeClearStyles([a]).fromTo("transform",`translateX(${u})`,`translateX(${m})`),T){const e=l(T).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),r=(0,n.c)(),l=(0,n.c)(),s=(0,n.c)();r.addElement(e).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(t).beforeClearStyles([a]).fromTo(a,0,.1),s.addElement(o).beforeClearStyles([a]).fromTo(a,.03,.7),r.addAnimation([l,s]),X.addAnimation([r])}}const A=S.querySelector("ion-header.header-collapse-condense"),{forward:E,backward:C}=((e,t,o,n,r)=>{const a=i(n,o),l=s(r),f=s(n),m=i(r,o),p=null!==a&&null!==l&&!o,y=null!==f&&null!==m&&o;if(p){const n=l.getBoundingClientRect(),r=a.getBoundingClientRect();d(e,t,o,l,n,r),c(e,t,o,a,n,r)}else if(y){const n=f.getBoundingClientRect(),r=m.getBoundingClientRect();d(e,t,o,f,n,r),c(e,t,o,m,n,r)}return{forward:p,backward:y}})(q,y,$,S,g);if(x.forEach(e=>{const t=(0,n.c)();t.addElement(e),q.addAnimation(t);const o=(0,n.c)();o.addElement(e.querySelector("ion-title"));const r=(0,n.c)(),s=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),i=e.closest("ion-header"),c=i&&i.classList.contains("header-collapse-condense-inactive");let d;d=s.filter($?e=>{const t=e.classList.contains("buttons-collapse");return t&&!c||!t}:e=>!e.classList.contains("buttons-collapse")),r.addElement(d);const f=(0,n.c)();f.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const p=(0,n.c)();p.addElement(l(e).querySelector(".toolbar-background"));const S=(0,n.c)(),g=e.querySelector("ion-back-button");if(g&&S.addElement(g),t.addAnimation([o,r,f,p,S]),r.fromTo(a,.01,1),f.fromTo(a,.01,1),$)c||o.fromTo("transform",`translateX(${b})`,`translateX(${m})`).fromTo(a,.01,1),f.fromTo("transform",`translateX(${b})`,`translateX(${m})`),S.fromTo(a,.01,1);else if(A||o.fromTo("transform",`translateX(${u})`,`translateX(${m})`).fromTo(a,.01,1),f.fromTo("transform",`translateX(${u})`,`translateX(${m})`),p.beforeClearStyles([a,"transform"]),(null==i?void 0:i.translucent)?p.fromTo("transform",y?"translateX(-100%)":"translateX(100%)","translateX(0px)"):p.fromTo(a,.01,"var(--opacity)"),E||S.fromTo(a,.01,1),g&&!E){const e=(0,n.c)();e.addElement(l(g).querySelector(".button-text")).fromTo("transform",y?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}),g){const e=(0,n.c)(),t=g.querySelector(":scope > ion-content"),o=g.querySelectorAll(":scope > ion-header > ion-toolbar"),s=g.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(t||0!==o.length||0!==s.length?(e.addElement(t),e.addElement(s)):e.addElement(g.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),q.addAnimation(e),$){e.beforeClearStyles([a]).fromTo("transform",`translateX(${m})`,y?"translateX(-100%)":"translateX(100%)");const t=(0,r.g)(g);q.afterAddWrite(()=>{"normal"===q.getDirection()&&t.style.setProperty("display","none")})}else e.fromTo("transform",`translateX(${m})`,`translateX(${b})`).fromTo(a,1,p);if(t){const o=l(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),l=(0,n.c)(),s=(0,n.c)(),i=(0,n.c)();l.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),s.addElement(t).beforeClearStyles([a]).fromTo(a,.1,0),i.addElement(r).beforeClearStyles([a]).fromTo(a,.7,.03),l.addAnimation([s,i]),e.addAnimation([l])}}o.forEach(e=>{const t=(0,n.c)();t.addElement(e);const o=(0,n.c)();o.addElement(e.querySelector("ion-title"));const r=(0,n.c)(),s=e.querySelectorAll("ion-buttons,[menuToggle]"),i=e.closest("ion-header"),c=i&&i.classList.contains("header-collapse-condense-inactive"),d=Array.from(s).filter(e=>{const t=e.classList.contains("buttons-collapse");return t&&!c||!t});r.addElement(d);const p=(0,n.c)(),u=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");u.length>0&&p.addElement(u);const S=(0,n.c)();S.addElement(l(e).querySelector(".toolbar-background"));const g=(0,n.c)(),T=e.querySelector("ion-back-button");if(T&&g.addElement(T),t.addAnimation([o,r,p,g,S]),q.addAnimation(t),g.fromTo(a,.99,0),r.fromTo(a,.99,0),p.fromTo(a,.99,0),$){if(c||o.fromTo("transform",`translateX(${m})`,y?"translateX(-100%)":"translateX(100%)").fromTo(a,.99,0),p.fromTo("transform",`translateX(${m})`,y?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([a,"transform"]),(null==i?void 0:i.translucent)?S.fromTo("transform","translateX(0px)",y?"translateX(-100%)":"translateX(100%)"):S.fromTo(a,"var(--opacity)",0),T&&!C){const e=(0,n.c)();e.addElement(l(T).querySelector(".button-text")).fromTo("transform",`translateX(${m})`,`translateX(${(y?-124:124)+"px"})`),t.addAnimation(e)}}else c||o.fromTo("transform",`translateX(${m})`,`translateX(${b})`).fromTo(a,.99,0).afterClearStyles([f,a]),p.fromTo("transform",`translateX(${m})`,`translateX(${b})`).afterClearStyles([f,a]),g.afterClearStyles([a]),o.afterClearStyles([a]),r.afterClearStyles([a])})}return q}catch(o){throw o}}}}]);