(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{rqFz:function(t,s,i){"use strict";i.r(s),i.d(s,"ion_infinite_scroll",function(){return o});var l=i("DZm5"),e=i("sZor");const o=class{constructor(t){Object(l.l)(this,t),this.ionInfinite=Object(l.e)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=()=>{const t=this.scrollEl;if(!t||!this.canStart())return 1;const s=this.el.offsetHeight;if(0===s)return 2;const i=t.scrollTop,l=t.offsetHeight,e=0!==this.thrPc?l*this.thrPc:this.thrPx;if(("bottom"===this.position?t.scrollHeight-s-i-e-l:i-s-e)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4}}thresholdChanged(){const t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}disabledChanged(){const t=this.disabled;t&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!t)}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(l.n)(()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)})):console.error("<ion-infinite-scroll> must be used inside an <ion-content>")}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const t=this.scrollEl;if(this.isLoading&&t&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const s=t.scrollHeight-t.scrollTop;requestAnimationFrame(()=>{Object(l.g)(()=>{const i=t.scrollHeight-s;requestAnimationFrame(()=>{Object(l.n)(()=>{t.scrollTop=i,this.isBusy=!1})})})})}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const t=Object(e.c)(this),s=this.disabled;return Object(l.j)(l.b,{class:{[t]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!s}})}get el(){return Object(l.c)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};o.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"}}]);