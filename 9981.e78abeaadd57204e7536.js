(self.webpackChunksign_language_playground=self.webpackChunksign_language_playground||[]).push([[9981],{9981:(t,a,e)=>{"use strict";e.r(a),e.d(a,{ion_fab:()=>r});var i=e(8005),o=e(2590);const r=class{constructor(t){(0,i.r)(this,t),this.edge=!1,this.activated=!1,this.onClick=()=>{const t=!!this.el.querySelector("ion-fab-list"),a=this.getFab();t&&(!a||!a.disabled)&&(this.activated=!this.activated)}}activatedChanged(){const t=this.activated,a=this.getFab();a&&(a.activated=t),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(a=>{a.activated=t})}componentDidLoad(){this.activated&&this.activatedChanged()}async close(){this.activated=!1}getFab(){return this.el.querySelector("ion-fab-button")}render(){const{horizontal:t,vertical:a,edge:e}=this,r=(0,o.g)(this);return(0,i.h)(i.H,{onClick:this.onClick,class:{[r]:!0,[`fab-horizontal-${t}`]:void 0!==t,[`fab-vertical-${a}`]:void 0!==a,"fab-edge":e}},(0,i.h)("slot",null))}get el(){return(0,i.a)(this)}static get watchers(){return{activated:["activatedChanged"]}}};r.style=":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]):host(.fab-horizontal-center),:host-context([dir=rtl]).fab-horizontal-center{left:unset;right:unset;right:50%}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"}}]);