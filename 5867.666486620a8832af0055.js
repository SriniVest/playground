(self.webpackChunksign_language_playground=self.webpackChunksign_language_playground||[]).push([[5867],{5867:(i,n,e)=>{"use strict";e.r(n),e.d(n,{ion_refresher_content:()=>t});var r=e(8005),s=e(2590),l=e(3021),h=e(8999);const t=class{constructor(i){(0,r.r)(this,i)}componentWillLoad(){if(void 0===this.pullingIcon){const i=(0,s.g)(this),n=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=s.c.get("refreshingIcon","ios"===i&&(0,s.a)("mobile")?s.c.get("spinner",n):"circular")}if(void 0===this.refreshingSpinner){const i=(0,s.g)(this);this.refreshingSpinner=s.c.get("refreshingSpinner",s.c.get("spinner","ios"===i?"lines":"circular"))}}render(){const i=this.pullingIcon,n=null!=i&&void 0!==h.S[i],e=(0,s.g)(this);return(0,r.h)(r.H,{class:e},(0,r.h)("div",{class:"refresher-pulling"},this.pullingIcon&&n&&(0,r.h)("div",{class:"refresher-pulling-icon"},(0,r.h)("div",{class:"spinner-arrow-container"},(0,r.h)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===e&&"circular"===this.pullingIcon&&(0,r.h)("div",{class:"arrow-container"},(0,r.h)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!n&&(0,r.h)("div",{class:"refresher-pulling-icon"},(0,r.h)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&(0,r.h)("div",{class:"refresher-pulling-text",innerHTML:(0,l.s)(this.pullingText)})),(0,r.h)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&(0,r.h)("div",{class:"refresher-refreshing-icon"},(0,r.h)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&(0,r.h)("div",{class:"refresher-refreshing-text",innerHTML:(0,l.s)(this.refreshingText)})))}get el(){return(0,r.a)(this)}}}}]);