(self.webpackChunksign_language_playground=self.webpackChunksign_language_playground||[]).push([[4156],{4156:(t,e,n)=>{"use strict";n.r(e),n.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>o,OVERLAY_BACK_BUTTON_PRIORITY:()=>i,blockHardwareBackButton:()=>r,startHardwareBackButton:()=>a});const r=()=>{document.addEventListener("backbutton",()=>{})},a=()=>{const t=document;let e=!1;t.addEventListener("backbutton",()=>{if(e)return;let n=0,r=[];const a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){r.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(a);const i=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach(e=>{e.priority>=t.priority&&(t=e)}),e=!0,r=r.filter(e=>e.id!==t.id),(async t=>{try{if(t&&t.handler){const e=t.handler(i);null!=e&&await e}}catch(e){console.error(e)}})(t).then(()=>e=!1)}};i()})},i=100,o=99}}]);