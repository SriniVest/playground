(self.webpackChunksign_language_playground=self.webpackChunksign_language_playground||[]).push([[212],{335:(e,r,t)=>{"use strict";t.d(r,{a:()=>n,b:()=>o,c:()=>h,d:()=>i,h:()=>a});const s={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const r=this.getEngine();if(!r)return;const t=this.isCapacitor()?e.style.toUpperCase():e.style;r.impact({style:t})},notification(e){const r=this.getEngine();if(!r)return;const t=this.isCapacitor()?e.style.toUpperCase():e.style;r.notification({style:t})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>{s.selection()},n=()=>{s.selectionStart()},o=()=>{s.selectionChanged()},a=()=>{s.selectionEnd()},h=e=>{s.impact(e)}},212:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ion_refresher:()=>u});var s=t(8005),i=t(2590),n=t(4647),o=t(335),a=t(7513),h=t(6351);const l=e=>{const r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),s=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),n=i?i.querySelector("ion-icon"):null,o=(0,a.c)().duration(1e3).easing("ease-out"),h=(0,a.c)().addElement(s).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=(0,a.c)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=(0,a.c)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&n){const e=(0,a.c)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),r=(0,a.c)().addElement(n).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([e,r])}return o.addAnimation([h,l,f])},f=(e,r)=>{e.style.setProperty("opacity",r.toString())},c=(e,r)=>{if(!e)return Promise.resolve();const t=d(e,200);return(0,s.w)(()=>{e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${r}, 0px)`)}),t},p=async(e,r)=>{const t=e.querySelector("ion-refresher-content");if(!t)return Promise.resolve(!1);await t.componentOnReady();const s=t.querySelector(".refresher-pulling ion-spinner"),n=t.querySelector(".refresher-refreshing ion-spinner");return null!==s&&null!==n&&("ios"===r&&(0,i.a)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},d=(e,r=0)=>new Promise(t=>{g(e,r,t)}),g=(e,r=0,t)=>{let s,i;const n={passive:!0},o=()=>{s&&s()},a=r=>{void 0!==r&&e!==r.target||(o(),t(r))};return e&&(e.addEventListener("webkitTransitionEnd",a,n),e.addEventListener("transitionend",a,n),i=setTimeout(a,r+500),s=()=>{i&&(clearTimeout(i),i=void 0),e.removeEventListener("webkitTransitionEnd",a,n),e.removeEventListener("transitionend",a,n)}),o},u=class{constructor(e){(0,s.r)(this,e),this.ionRefresh=(0,s.c)(this,"ionRefresh",7),this.ionPull=(0,s.c)(this,"ionPull",7),this.ionStart=(0,s.c)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}async checkNativeRefresher(){const e=await p(this.el,(0,i.g)(this));if(e&&!this.nativeRefresher){const e=this.el.closest("ion-content");this.setupNativeRefresher(e)}else e||this.destroyNativeRefresher()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}async resetNativeRefresher(e,r){this.state=r,"ios"===(0,i.g)(this)?await c(e,void 0):await d(this.el.querySelector(".refresher-refreshing-icon"),200),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(e=>e.destroy()),this.animations=[],this.progress=0,this.state=1}async setupiOSNativeRefresher(e,r){this.elementToTransform=this.scrollEl;const i=e.shadowRoot.querySelectorAll("svg");let a=.16*this.scrollEl.clientHeight;const h=i.length;(0,s.w)(()=>i.forEach(e=>e.style.setProperty("animation","none"))),this.scrollListenerCallback=()=>{(this.pointerDown||1!==this.state)&&(0,s.e)(()=>{const t=this.scrollEl.scrollTop,l=this.el.clientHeight;if(t>0){if(8===this.state){const e=(0,n.c)(0,t/(.5*l),1);return void(0,s.w)(()=>f(r,1-e))}return void(0,s.w)(()=>f(e,0))}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());const p=(0,n.c)(0,Math.abs(t)/l,.99),d=this.progress=(0,n.c)(0,(Math.abs(t)-30)/a,1),g=(0,n.c)(0,Math.floor(d*h),h-1);var u,m;8===this.state||g===h-1?(this.pointerDown&&(u=r,m=this.lastVelocityY,(0,s.w)(()=>{u.style.setProperty("--refreshing-rotation-duration",m>=1?"0.5s":"2s"),u.style.setProperty("opacity","1")})),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,(0,o.c)({style:"light"}),this.pointerDown||c(this.elementToTransform,`${l}px`))):(this.state=2,((e,r,t,i)=>{(0,s.w)(()=>{f(e,t),r.forEach((e,r)=>e.style.setProperty("opacity",r<=i?"0.99":"0"))})})(e,i,p,g))})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(await t.e(5560).then(t.bind(t,5560))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||c(this.elementToTransform,"0px"),0===a&&(a=.16*this.scrollEl.clientHeight)},onMove:e=>{this.lastVelocityY=e.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&(0,s.e)(()=>c(this.elementToTransform,`${this.el.clientHeight}px`))}}),this.disabledChanged()}async setupMDNativeRefresher(e,r,i){const o=(0,n.g)(r).querySelector("circle"),f=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),c=(0,n.g)(i).querySelector("circle");null!==o&&null!==c&&(0,s.w)(()=>{o.style.setProperty("animation","none"),i.style.setProperty("animation-delay","-655ms"),c.style.setProperty("animation-delay","-655ms")}),this.gesture=(await t.e(5560).then(t.bind(t,5560))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:()=>8!==this.state&&32!==this.state&&0===this.scrollEl.scrollTop,onStart:e=>{e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:r=>{if(r.velocityY<0&&0===this.progress&&!r.data.didStart||r.data.cancelled)r.data.cancelled=!0;else{if(!r.data.didStart)return r.data.didStart=!0,this.state=2,void(0,s.w)(()=>{const t=((e,r)=>"scale"===e?(e=>{const r=e.clientHeight,t=(0,a.c)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${r+20}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return l(e).addAnimation([t])})(r):(e=>{const r=e.clientHeight,t=(0,a.c)().addElement(e).keyframes([{offset:0,transform:`translateY(-${r+20}px)`},{offset:1,transform:"translateY(100px)"}]);return l(e).addAnimation([t])})(r))((e=>{const r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"})(e),f);r.data.animation=t,this.scrollEl.style.setProperty("--overflow","hidden"),t.progressStart(!1,0),this.ionStart.emit(),this.animations.push(t)});this.progress=(0,n.c)(0,r.deltaY/180*.5,1),r.data.animation.progressStep(this.progress),this.ionPull.emit()}},onEnd:e=>{if(!e.data.didStart)return;if((0,s.w)(()=>this.scrollEl.style.removeProperty("--overflow")),this.progress<=.4)return this.gesture.enable(!1),void e.data.animation.progressEnd(0,this.progress,500).onFinish(()=>{this.animations.forEach(e=>e.destroy()),this.animations=[],this.gesture.enable(!0),this.state=1});const r=(0,h.g)([0,0],[0,0],[1,1],[1,1],this.progress)[0],t=(e=>(0,a.c)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(f);this.animations.push(t),(0,s.w)(async()=>{f.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),await t.play(),this.beginRefresh(),e.data.animation.destroy()})}}),this.disabledChanged()}async setupNativeRefresher(e){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl)return;this.setCss(0,"",!1,""),this.nativeRefresher=!0;const r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===(0,i.g)(this)?this.setupiOSNativeRefresher(r,t):this.setupMDNativeRefresher(e,r,t)}componentDidUpdate(){this.checkNativeRefresher()}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const e=this.el.closest("ion-content");e?(await e.componentOnReady(),this.scrollEl=await e.getScrollElement(),this.backgroundContentEl=(0,n.g)(e).querySelector("#background-content"),await p(this.el,(0,i.g)(this))?this.setupNativeRefresher(e):(this.gesture=(await t.e(5560).then(t.bind(t,5560))).createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||(0,n.r)(()=>(0,n.r)(()=>this.resetNativeRefresher(this.elementToTransform,32)))):this.close(32,"120ms")}async cancel(){this.nativeRefresher?this.pointerDown||(0,n.r)(()=>(0,n.r)(()=>this.resetNativeRefresher(this.elementToTransform,16))):this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const r=e.event;if(r.touches&&r.touches.length>1)return;if(0!=(56&this.state))return;const t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,s=e.deltaY*t;if(s<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(s,"0ms",!0,""),0===s)return void(this.progress=0);const i=this.pullMin;this.progress=s/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),s<i?this.state=2:s>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,r){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}setCss(e,r,t,i){this.nativeRefresher||(this.appliedStyles=e>0,(0,s.w)(()=>{if(this.scrollEl&&this.backgroundContentEl){const s=this.scrollEl.style,n=this.backgroundContentEl.style;s.transform=n.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",s.transitionDuration=n.transitionDuration=r,s.transitionDelay=n.transitionDelay=i,s.overflow=t?"hidden":""}}))}render(){const e=(0,i.g)(this);return(0,s.h)(s.H,{slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return(0,s.a)(this)}static get watchers(){return{disabled:["disabledChanged"]}}};u.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:flex;flex-direction:column;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{transform-origin:center;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@keyframes refresher-pop{0%{transform:scale(1);animation-timing-function:ease-in}50%{transform:scale(1.2);animation-timing-function:ease-out}100%{transform:scale(1)}}@keyframes refresher-rotate{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:flex;flex-direction:column;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{transform-origin:center;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:flex}ion-refresher.refresher-native .refresher-pulling-icon{transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:flex;border:1px solid #ececec;background:white;box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"}}}]);