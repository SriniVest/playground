(self.webpackChunksign_language_playground=self.webpackChunksign_language_playground||[]).push([[5931,4156,5560,4778,9470],{2408:(e,t,o)=>{"use strict";o.d(t,{G:()=>a});class i{constructor(e,t,o,i,r){this.id=t,this.name=o,this.disableScroll=r,this.priority=1e6*i+t,this.ctrl=e}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const e=this.ctrl.capture(this.name,this.id,this.priority);return e&&this.disableScroll&&this.ctrl.disableScroll(this.id),e}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class r{constructor(e,t,o,i){this.id=t,this.disable=o,this.disableScroll=i,this.ctrl=e}block(){if(this.ctrl){if(this.disable)for(const e of this.disable)this.ctrl.disableGesture(e,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const e of this.disable)this.ctrl.enableGesture(e,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const s="backdrop-no-scroll",a=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(e){return new i(this,this.newID(),e.name,e.priority||0,!!e.disableScroll)}createBlocker(e={}){return new r(this,this.newID(),e.disable,!!e.disableScroll)}start(e,t,o){return this.canStart(e)?(this.requestedStart.set(t,o),!0):(this.requestedStart.delete(t),!1)}capture(e,t,o){if(!this.start(e,t,o))return!1;const i=this.requestedStart;let r=-1e4;if(i.forEach(e=>{r=Math.max(r,e)}),r===o){this.capturedId=t,i.clear();const o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:e}});return document.dispatchEvent(o),!0}return i.delete(t),!1}release(e){this.requestedStart.delete(e),this.capturedId===e&&(this.capturedId=void 0)}disableGesture(e,t){let o=this.disabledGestures.get(e);void 0===o&&(o=new Set,this.disabledGestures.set(e,o)),o.add(t)}enableGesture(e,t){const o=this.disabledGestures.get(e);void 0!==o&&o.delete(t)}disableScroll(e){this.disabledScroll.add(e),1===this.disabledScroll.size&&document.body.classList.add(s)}enableScroll(e){this.disabledScroll.delete(e),0===this.disabledScroll.size&&document.body.classList.remove(s)}canStart(e){return void 0===this.capturedId&&!this.isDisabled(e)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(e){const t=this.disabledGestures.get(e);return!!(t&&t.size>0)}newID(){return this.gestureId++,this.gestureId}}},4156:(e,t,o)=>{"use strict";o.r(t),o.d(t,{MENU_BACK_BUTTON_PRIORITY:()=>a,OVERLAY_BACK_BUTTON_PRIORITY:()=>s,blockHardwareBackButton:()=>i,startHardwareBackButton:()=>r});const i=()=>{document.addEventListener("backbutton",()=>{})},r=()=>{const e=document;let t=!1;e.addEventListener("backbutton",()=>{if(t)return;let o=0,i=[];const r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(e,t){i.push({priority:e,handler:t,id:o++})}}});e.dispatchEvent(r);const s=()=>{if(i.length>0){let e={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};i.forEach(t=>{t.priority>=e.priority&&(e=t)}),t=!0,i=i.filter(t=>t.id!==e.id),(async e=>{try{if(e&&e.handler){const t=e.handler(s);null!=t&&await t}}catch(t){console.error(t)}})(e).then(()=>t=!1)}};s()})},s=100,a=99},5560:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GESTURE_CONTROLLER:()=>i.G,createGesture:()=>d});var i=o(2408);const r=(e,t,o,i)=>{const r=s(e)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;let a,n;return e.__zone_symbol__addEventListener?(a="__zone_symbol__addEventListener",n="__zone_symbol__removeEventListener"):(a="addEventListener",n="removeEventListener"),e[a](t,o,r),()=>{e[n](t,o,r)}},s=e=>{if(void 0===a)try{const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});e.addEventListener("optsTest",()=>{},t)}catch(t){a=!1}return!!a};let a;const n=e=>e instanceof Document?e:e.ownerDocument,d=e=>{let t=!1,o=!1,s=!0,a=!1;const d=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),m=d.canStart,p=d.onWillStart,u=d.onStart,f=d.onEnd,b=d.notCaptured,y=d.onMove,g=d.threshold,v=d.passive,w=d.blurOnStart,x={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},S=((e,t,o)=>{const i=o*(Math.PI/180),r="x"===e,s=Math.cos(i),a=t*t;let n=0,d=0,l=!1,c=0;return{start(e,t){n=e,d=t,c=0,l=!0},detect(e,t){if(!l)return!1;const o=e-n,i=t-d,h=o*o+i*i;if(h<a)return!1;const m=Math.sqrt(h),p=(r?o:i)/m;return c=p>s?1:p<-s?-1:0,l=!1,!0},isGesture:()=>0!==c,getDirection:()=>c}})(d.direction,d.threshold,d.maxAngle),k=i.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),E=()=>{t&&(a=!1,y&&y(x))},D=()=>!(k&&!k.capture()||(t=!0,s=!1,x.startX=x.currentX,x.startY=x.currentY,x.startTime=x.currentTime,p?p(x).then(Y):Y(),0)),Y=()=>{w&&(()=>{if("undefined"!=typeof document){const e=document.activeElement;null!==e&&e.blur&&e.blur()}})(),u&&u(x),s=!0},A=()=>{t=!1,o=!1,a=!1,s=!0,k.release()},T=e=>{const o=t,i=s;A(),i&&(l(x,e),o?f&&f(x):b&&b(x))},C=((e,t,o,i,s)=>{let a,d,l,c,h,m,p,u=0;const f=i=>{u=Date.now()+2e3,t(i)&&(!d&&o&&(d=r(e,"touchmove",o,s)),l||(l=r(e,"touchend",y,s)),c||(c=r(e,"touchcancel",y,s)))},b=i=>{u>Date.now()||t(i)&&(!m&&o&&(m=r(n(e),"mousemove",o,s)),p||(p=r(n(e),"mouseup",g,s)))},y=e=>{v(),i&&i(e)},g=e=>{w(),i&&i(e)},v=()=>{d&&d(),l&&l(),c&&c(),d=l=c=void 0},w=()=>{m&&m(),p&&p(),m=p=void 0},x=()=>{v(),w()},S=(t=!0)=>{t?(a||(a=r(e,"touchstart",f,s)),h||(h=r(e,"mousedown",b,s))):(a&&a(),h&&h(),a=h=void 0,x())};return{enable:S,stop:x,destroy:()=>{S(!1),i=o=t=void 0}}})(d.el,e=>{const t=h(e);return!(o||!s)&&(c(e,x),x.startX=x.currentX,x.startY=x.currentY,x.startTime=x.currentTime=t,x.velocityX=x.velocityY=x.deltaX=x.deltaY=0,x.event=e,(!m||!1!==m(x))&&(k.release(),!!k.start()&&(o=!0,0===g?D():(S.start(x.startX,x.startY),!0))))},e=>{t?!a&&s&&(a=!0,l(x,e),requestAnimationFrame(E)):(l(x,e),S.detect(x.currentX,x.currentY)&&(S.isGesture()&&D()||I()))},T,{capture:!1,passive:v}),I=()=>{A(),C.stop(),b&&b(x)};return{enable(e=!0){e||(t&&T(void 0),A()),C.enable(e)},destroy(){k.destroy(),C.destroy()}}},l=(e,t)=>{if(!t)return;const o=e.currentX,i=e.currentY,r=e.currentTime;c(t,e);const s=e.currentX,a=e.currentY,n=(e.currentTime=h(t))-r;if(n>0&&n<100){const t=(a-i)/n;e.velocityX=(s-o)/n*.7+.3*e.velocityX,e.velocityY=.7*t+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=a-e.startY,e.event=t},c=(e,t)=>{let o=0,i=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];o=e.clientX,i=e.clientY}else void 0!==e.pageX&&(o=e.pageX,i=e.pageY)}t.currentX=o,t.currentY=i},h=e=>e.timeStamp||Date.now()},5931:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ion_modal:()=>y});var i=o(8005),r=o(2590),s=o(4647),a=o(9984),n=(o(2408),o(5560)),d=o(2886),l=o(7513),c=o(6351),h=o(898),m=o(2598);const p=(e,t)=>{const o=(0,l.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i=(0,l.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),r=(0,l.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(i);if(t){const e=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,a=(0,l.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),n=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",o=`translateY(${s?"-10px":e}) scale(0.93)`;a.afterStyles({transform:o}).beforeAddWrite(()=>n.style.setProperty("background-color","black")).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:o,borderRadius:"10px 10px 0 0"}]),r.addAnimation(a)}else if(r.addAnimation(o),s){const e=`translateY(-10px) scale(${s?.93:1})`;a.afterStyles({transform:e}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:e}]);const o=(0,l.c)().afterStyles({transform:e}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:e}]);r.addAnimation([a,o])}else i.fromTo("opacity","0","1")}else r.addAnimation(o);return r},u=(e,t,o=500)=>{const i=(0,l.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r=(0,l.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),s=(0,l.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(o).addAnimation(r);if(t){const e=window.innerWidth<768,o="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,a=(0,l.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(e=>{1===e&&(t.style.setProperty("overflow",""),Array.from(n.querySelectorAll("ion-modal")).filter(e=>void 0!==e.presentingElement).length<=1&&n.style.setProperty("background-color",""))}),n=document.body;if(e){const e=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${o?"-10px":e}) scale(0.93)`;a.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),s.addAnimation(a)}else if(s.addAnimation(i),o){const e=`translateY(-10px) scale(${o?.93:1})`;a.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:e},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const i=(0,l.c)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:e},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);s.addAnimation([a,i])}else r.fromTo("opacity","1","0")}else s.addAnimation(i);return s},f=e=>{const t=(0,l.c)(),o=(0,l.c)(),i=(0,l.c)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,i])},b=e=>{const t=(0,l.c)(),o=(0,l.c)(),i=(0,l.c)(),r=e.querySelector(".modal-wrapper");return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(r).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},y=class{constructor(e){(0,i.r)(this,e),this.didPresent=(0,i.c)(this,"ionModalDidPresent",7),this.willPresent=(0,i.c)(this,"ionModalWillPresent",7),this.willDismiss=(0,i.c)(this,"ionModalWillDismiss",7),this.didDismiss=(0,i.c)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,d.B)},this.onDismiss=e=>{e.stopPropagation(),e.preventDefault(),this.dismiss()},this.onLifecycle=e=>{const t=this.usersElement,o=g[e.type];if(t&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}}}swipeToCloseChanged(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}connectedCallback(){(0,d.a)(this.el)}async present(){if(this.presented)return;const e=this.el.querySelector(".modal-wrapper");if(!e)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await(0,h.a)(this.delegate,e,this.component,["ion-page"],t),await(0,m.d)(this.usersElement),(0,i.w)(()=>this.el.classList.add("show-modal")),await(0,d.p)(this,"modalEnter",p,f,this.presentingElement),this.swipeToClose&&this.initSwipeToClose()}initSwipeToClose(){if("ios"!==(0,r.g)(this))return;const e=this.leaveAnimation||r.c.get("modalLeave",u),t=this.animation=e(this.el,this.presentingElement);this.gesture=((e,t,o)=>{const i=e.offsetHeight;let r=!1;const a=(0,n.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:e=>{const t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content")},onStart:()=>{t.progressStart(!0,r?1:0)},onMove:e=>{const o=(0,s.c)(1e-4,e.deltaY/i,.9999);t.progressStep(o)},onEnd:e=>{const n=e.velocityY,d=(0,s.c)(1e-4,e.deltaY/i,.9999),l=(e.deltaY+1e3*n)/i>=.5;let h=l?-.001:.001;l?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),h+=(0,c.g)([0,0],[.32,.72],[0,1],[1,1],d)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),h+=(0,c.g)([0,0],[1,0],[.68,.28],[1,1],d)[0]);const m=((e,t)=>(0,s.c)(400,e/Math.abs(1.1*t),500))(l?d*i:(1-d)*i,n);r=l,a.enable(!1),t.onFinish(()=>{l||a.enable(!0)}).progressEnd(l?1:0,h,m),l&&o()}});return a})(this.el,t,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}async dismiss(e,t){if(this.gestureAnimationDismissing&&"gesture"!==t)return!1;const o=d.c.get(this)||[],i=await(0,d.d)(this,e,t,"modalLeave",u,b,this.presentingElement);return i&&(await(0,h.d)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),o.forEach(e=>e.destroy())),this.animation=void 0,i}onDidDismiss(){return(0,d.e)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,d.e)(this.el,"ionModalWillDismiss")}render(){const e=(0,r.g)(this);return(0,i.h)(i.H,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign({[e]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===e},(0,a.g)(this.cssClass)),style:{zIndex:`${2e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},(0,i.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===e&&(0,i.h)("div",{class:"modal-shadow"}),(0,i.h)("div",{tabindex:"0"}),(0,i.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,i.h)("div",{tabindex:"0"}))}get el(){return(0,i.a)(this)}static get watchers(){return{swipeToClose:["swipeToCloseChanged"]}}},g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};y.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:flex;position:absolute;align-items:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{transform:translate3d(0,  40px,  0);opacity:0.01}"}},2886:(e,t,o)=>{"use strict";o.d(t,{B:()=>I,a:()=>p,b:()=>h,c:()=>n,d:()=>S,e:()=>D,f:()=>m,g:()=>c,h:()=>l,i:()=>A,p:()=>w,s:()=>C});var i=o(2590),r=o(4647),s=o(4156);let a=0;const n=new WeakMap,d=e=>({create:t=>u(e,t),dismiss:(t,o,i)=>g(document,t,o,e,i),getTop:async()=>v(document,e)}),l=d("ion-alert"),c=d("ion-action-sheet"),h=d("ion-picker"),m=d("ion-popover"),p=e=>{"undefined"!=typeof document&&y(document);const t=a++;e.overlayIndex=t,e.hasAttribute("id")||(e.id=`ion-overlay-${t}`)},u=(e,t)=>"undefined"!=typeof customElements?customElements.whenDefined(e).then(()=>{const o=document.createElement(e);return o.classList.add("overlay-hidden"),Object.assign(o,t),k(document).appendChild(o),o.componentOnReady()}):Promise.resolve(),f='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',b="input:not([type=hidden]), textarea, button, select",y=e=>{0===a&&(a=1,e.addEventListener("focus",t=>((e,t)=>{const o=v(t),i=e.target;if(o&&i)if(o===i)o.lastFocus=void 0;else{const e=(0,r.g)(o);if(!e.contains(i))return;const s=e.querySelector(".ion-overlay-wrapper");if(!s)return;if(s.contains(i))o.lastFocus=i;else{const e=o.lastFocus;((e,t)=>{let o=e.querySelector(f);const i=o&&o.shadowRoot;i&&(o=i.querySelector(b)||o),o?o.focus():t.focus()})(s,o),e===t.activeElement&&((e,t)=>{const o=Array.from(e.querySelectorAll(f));let i=o.length>0?o[o.length-1]:null;const r=i&&i.shadowRoot;r&&(i=r.querySelector(b)||i),i?i.focus():t.focus()})(s,o),o.lastFocus=t.activeElement}}})(t,e),!0),e.addEventListener("ionBackButton",t=>{const o=v(e);o&&o.backdropDismiss&&t.detail.register(s.OVERLAY_BACK_BUTTON_PRIORITY,()=>o.dismiss(void 0,I))}),e.addEventListener("keyup",t=>{if("Escape"===t.key){const t=v(e);t&&t.backdropDismiss&&t.dismiss(void 0,I)}}))},g=(e,t,o,i,r)=>{const s=v(e,i,r);return s?s.dismiss(t,o):Promise.reject("overlay does not exist")},v=(e,t,o)=>{const i=((e,t)=>(void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(e.querySelectorAll(t)).filter(e=>e.overlayIndex>0)))(e,t);return void 0===o?i[i.length-1]:i.find(e=>e.id===o)},w=async(e,t,o,r,s)=>{if(e.presented)return;e.presented=!0,e.willPresent.emit();const a=(0,i.g)(e),n=e.enterAnimation?e.enterAnimation:i.c.get(t,"ios"===a?o:r);await E(e,n,e.el,s)&&e.didPresent.emit(),"ION-TOAST"!==e.el.tagName&&x(e.el),e.keyboardClose&&e.el.focus()},x=async e=>{let t=document.activeElement;if(!t)return;const o=t&&t.shadowRoot;o&&(t=o.querySelector(b)||t),await e.onDidDismiss(),t.focus()},S=async(e,t,o,r,s,a,d)=>{if(!e.presented)return!1;e.presented=!1;try{e.el.style.setProperty("pointer-events","none"),e.willDismiss.emit({data:t,role:o});const l=(0,i.g)(e),c=e.leaveAnimation?e.leaveAnimation:i.c.get(r,"ios"===l?s:a);"gesture"!==o&&await E(e,c,e.el,d),e.didDismiss.emit({data:t,role:o}),n.delete(e)}catch(l){console.error(l)}return e.el.remove(),!0},k=e=>e.querySelector("ion-app")||e.body,E=async(e,t,o,r)=>{o.classList.remove("overlay-hidden");const s=t(o.shadowRoot||e.el,r);e.animated&&i.c.getBoolean("animated",!0)||s.duration(0),e.keyboardClose&&s.beforeAddWrite(()=>{const e=o.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()});const a=n.get(e)||[];return n.set(e,[...a,s]),await s.play(),!0},D=(e,t)=>{let o;const i=new Promise(e=>o=e);return Y(e,t,e=>{o(e.detail)}),i},Y=(e,t,o)=>{const i=s=>{(0,r.e)(e,t,i),o(s)};(0,r.b)(e,t,i)},A=e=>"cancel"===e||e===I,T=e=>e(),C=(e,t)=>{if("function"==typeof e)return i.c.get("_zoneGate",T)(()=>{try{return e(t)}catch(o){console.error(o)}})},I="backdrop"},9984:(e,t,o)=>{"use strict";o.d(t,{c:()=>r,g:()=>s,h:()=>i,o:()=>n});const i=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},a=/^[a-z][a-z0-9+\-.]*:/,n=async(e,t,o,i)=>{if(null!=e&&"#"!==e[0]&&!a.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,o,i)}return!1}}}]);