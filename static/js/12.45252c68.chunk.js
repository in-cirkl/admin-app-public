(this["webpackJsonpadmin-app"]=this["webpackJsonpadmin-app"]||[]).push([[12],{96:function(i,o,t){"use strict";t.r(o),t.d(o,"ion_icon",(function(){return l}));var e=t(48),n=t(93),r=function i(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var t=0;t<o.attributes.length;t++){var e=o.attributes[t].value;if(Object(n.e)(e)&&0===e.toLowerCase().indexOf("on"))return!1}for(t=0;t<o.childNodes.length;t++)if(!i(o.childNodes[t]))return!1}return!0},s=new Map,c=new Map,a=function(i,o){var t=c.get(i);if(!t){if("undefined"===typeof fetch||"undefined"===typeof document)return s.set(i,""),Promise.resolve();t=fetch(i).then((function(t){if(t.ok)return t.text().then((function(t){t&&!1!==o&&(t=function(i){var o=document.createElement("div");o.innerHTML=i;for(var t=o.childNodes.length-1;t>=0;t--)"svg"!==o.childNodes[t].nodeName.toLowerCase()&&o.removeChild(o.childNodes[t]);var e=o.firstElementChild;if(e&&"svg"===e.nodeName.toLowerCase()){var n=e.getAttribute("class")||"";if(e.setAttribute("class",(n+" s-ion-icon").trim()),r(e))return o.innerHTML}return""}(t)),s.set(i,t||"")}));s.set(i,"")})),c.set(i,t)}return t},l=function(){function i(i){var o=this;Object(e.e)(this,i),this.iconName=null,this.inheritedAttributes={},this.isVisible=!1,this.mode=d(),this.lazy=!1,this.sanitize=!0,this.hasAriaHidden=function(){var i=o.el;return i.hasAttribute("aria-hidden")&&"true"===i.getAttribute("aria-hidden")}}return i.prototype.componentWillLoad=function(){this.inheritedAttributes=Object(n.b)(this.el,["aria-label"])},i.prototype.connectedCallback=function(){var i=this;this.waitUntilVisible(this.el,"50px",(function(){i.isVisible=!0,i.loadIcon()}))},i.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},i.prototype.waitUntilVisible=function(i,o,t){var e=this;if(this.lazy&&"undefined"!==typeof window&&window.IntersectionObserver){var n=this.io=new window.IntersectionObserver((function(i){i[0].isIntersecting&&(n.disconnect(),e.io=void 0,t())}),{rootMargin:o});n.observe(i)}else t()},i.prototype.loadIcon=function(){var i=this;if(this.isVisible){var o=Object(n.d)(this);o&&(s.has(o)?this.svgContent=s.get(o):a(o,this.sanitize).then((function(){return i.svgContent=s.get(o)})))}var t=this.iconName=Object(n.c)(this.name,this.icon,this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace(/\-/g," "))},i.prototype.render=function(){var i,o,t=this,n=t.iconName,r=t.ariaLabel,s=t.inheritedAttributes,c=this.mode||"md",a=this.flipRtl||n&&(n.indexOf("arrow")>-1||n.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(e.d)(e.a,Object.assign({"aria-label":void 0===r||this.hasAriaHidden()?null:r,role:"img",class:Object.assign(Object.assign((i={},i[c]=!0,i),h(this.color)),(o={},o["icon-"+this.size]=!!this.size,o["flip-rtl"]=!!a&&"rtl"===this.el.ownerDocument.dir,o))},s),this.svgContent?Object(e.d)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(e.d)("div",{class:"icon-inner"}))},Object.defineProperty(i,"assetsDirs",{get:function(){return["svg"]},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"el",{get:function(){return Object(e.b)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:!1,configurable:!0}),i}(),d=function(){return"undefined"!==typeof document&&document.documentElement.getAttribute("mode")||"md"},h=function(i){var o;return i?((o={"ion-color":!0})["ion-color-"+i]=!0,o):null};l.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}]);
//# sourceMappingURL=12.45252c68.chunk.js.map