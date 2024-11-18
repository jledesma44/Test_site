function A(){const e=document.querySelector("header");e&&(window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled"))}function q(){const e=document.getElementById("theme-toggle");e&&e.addEventListener("click",()=>{const t=document.documentElement.classList.toggle("dark");localStorage.setItem("theme",t?"dark":"light"),A()})}q();A();window.addEventListener("scroll",A);document.addEventListener("astro:after-swap",()=>{const e=localStorage.getItem("theme")||"dark";document.documentElement.classList.toggle("dark",e==="dark"),q(),A()});const Q="astro:before-preparation",Z="astro:after-preparation",ee="astro:before-swap",te="astro:after-swap",ne=e=>document.dispatchEvent(new Event(e));class _ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,r,n,o,a,l,h,f,i){super(t,r),this.from=n,this.to=o,this.direction=a,this.navigationType=l,this.sourceElement=h,this.info=f,this.newDocument=i,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class re extends _{formData;loader;constructor(t,r,n,o,a,l,h,f,i){super(Q,{cancelable:!0},t,r,n,o,a,l,h),this.formData=f,this.loader=i.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class oe extends _{direction;viewTransition;swap;constructor(t,r,n){super(ee,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=r,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function se(e,t,r,n,o,a,l,h){const f=new re(e,t,r,n,o,a,window.document,l,h);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(ne(Z),f.navigationType!=="traverse"&&R({scrollX,scrollY}))),f}async function ie(e,t,r){const n=new oe(e,t,r);return document.dispatchEvent(n),n.swap(),n}const R=e=>{history.state&&(history.scrollRestoration="manual",history.replaceState({...history.state,...e},""))},x=!!document.startViewTransition,P=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),D=(e,t)=>e.origin===t.origin&&e.pathname===t.pathname&&e.search===t.search;let S,p,b=!1,C;const U=e=>document.dispatchEvent(new Event(e)),Y=()=>U("astro:page-load"),ae=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},g="data-astro-transition-persist",B="data-astro-transition",V="data-astro-transition-fallback";let O,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):P()&&(history.replaceState({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");const ce=(e,t)=>{let r=!1,n=!1;return(...o)=>{if(r){n=!0;return}e(...o),r=!0,setTimeout(()=>{n&&(n=!1,e(...o)),r=!1},t)}};async function le(e,t){try{const r=await fetch(e,t),n=r.headers.get("content-type")?.replace(/;.*$/,"");return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await r.text(),redirected:r.redirected?r.url:void 0,mediaType:n}}catch{return null}}function W(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ue(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const r=document.createElement("script");r.innerHTML=t.innerHTML;for(const n of t.attributes){if(n.name==="src"){const o=new Promise(a=>{r.onload=a});e=e.then(()=>o)}r.setAttribute(n.name,n.value)}r.dataset.astroExec="",t.replaceWith(r)}return e}const X=(e,t,r,n)=>{const o=D(t,e);let a=!1;if(e.href!==location.href&&!n)if(r.history==="replace"){const l=history.state;history.replaceState({...r.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else history.pushState({...r.state,index:++T,scrollX:0,scrollY:0},"",e.href);S=e,o||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),n?scrollTo(n.scrollX,n.scrollY):(e.hash?(history.scrollRestoration="auto",location.href=e.href):a||scrollTo({left:0,top:0,behavior:"instant"}),history.scrollRestoration="manual")};function fe(e){const t=[];for(const r of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${g}="${r.getAttribute(g)}"], link[rel=stylesheet][href="${r.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",r.getAttribute("href")),t.push(new Promise(o=>{["load","error"].forEach(a=>n.addEventListener(a,o)),document.head.append(n)}))}return t}async function M(e,t,r,n){const o=(s,d)=>{const m=s.getAttribute(g),w=m&&d.head.querySelector(`[${g}="${m}"]`);if(w)return w;if(s.matches("link[rel=stylesheet]")){const y=s.getAttribute("href");return d.head.querySelector(`link[rel=stylesheet][href="${y}"]`)}return null},a=()=>{const s=document.activeElement;if(s?.closest(`[${g}]`)){if(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement){const d=s.selectionStart,m=s.selectionEnd;return{activeElement:s,start:d,end:m}}return{activeElement:s}}else return{activeElement:null}},l=({activeElement:s,start:d,end:m})=>{s&&(s.focus(),(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.selectionStart=d,s.selectionEnd=m))},h=s=>{const d=document.documentElement,m=[...d.attributes].filter(({name:c})=>(d.removeAttribute(c),c.startsWith("data-astro-")));[...s.newDocument.documentElement.attributes,...m].forEach(({name:c,value:u})=>d.setAttribute(c,u));for(const c of document.scripts)for(const u of s.newDocument.scripts)if(!c.src&&c.textContent===u.textContent||c.src&&c.type===u.type&&c.src===u.src){u.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const u=o(c,s.newDocument);u?u.remove():c.remove()}document.head.append(...s.newDocument.head.children);const w=document.body,y=a();document.body.replaceWith(s.newDocument.body);for(const c of w.querySelectorAll(`[${g}]`)){const u=c.getAttribute(g),L=document.querySelector(`[${g}="${u}"]`);L&&L.replaceWith(c)}l(y)};async function f(s){function d(c){const u=c.effect;return!u||!(u instanceof KeyframeEffect)||!u.target?!1:window.getComputedStyle(u.target,u.pseudoElement).animationIterationCount==="infinite"}const m=document.getAnimations();document.documentElement.setAttribute(V,s);const y=document.getAnimations().filter(c=>!m.includes(c)&&!d(c));return Promise.all(y.map(c=>c.finished))}if(!b)document.documentElement.setAttribute(B,e.direction),n==="animate"&&await f("old");else throw new DOMException("Transition was skipped");const i=await ie(e,p,h);X(i.to,i.from,t,r),U(te),n==="animate"&&!b&&f("new").then(()=>C())}async function K(e,t,r,n,o){const a=o?"traverse":n.history==="replace"?"replace":"push";if(D(t,r)&&!n.formData){a!=="traverse"&&R({scrollX,scrollY}),X(r,t,n,o);return}const l=await se(t,r,e,a,n.sourceElement,n.info,n.formData,f);if(l.defaultPrevented){location.href=r.href;return}function h(i){return i.to.hash===""||!D(i.from,i.to)||i.sourceElement instanceof HTMLFormElement}async function f(i){if(h(i)){const s=i.to.href,d={};i.formData&&(d.method="POST",d.body=i.formData);const m=await le(s,d);if(m===null){i.preventDefault();return}if(m.redirected&&(i.to=new URL(m.redirected)),O??=new DOMParser,i.newDocument=O.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const w=fe(i.newDocument);w.length&&await Promise.all(w)}else{i.newDocument=document;return}}if(b=!1,x)p=document.startViewTransition(async()=>await M(l,n,o));else{const i=(async()=>{await new Promise(s=>setTimeout(s)),await M(l,n,o,W())})();p={updateCallbackDone:i,ready:i,finished:new Promise(s=>C=s),skipTransition:()=>{b=!0}}}p.ready.then(async()=>{await ue(),Y(),ae()}),p.finished.then(()=>{document.documentElement.removeAttribute(B),document.documentElement.removeAttribute(V)}),await p.ready}async function H(e,t){if(!P()){location.href=e;return}await K("forward",S,new URL(e,location.href),t??{})}function de(e){if(!P()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,r=t.index,n=r>T?"forward":"back";T=r,K(n,S,new URL(location.href),{},t)}const N=()=>{R({scrollX,scrollY})};{(x||W()!=="none")&&(S=new URL(location.href),addEventListener("popstate",de),addEventListener("load",Y),"onscrollend"in window?addEventListener("scrollend",N):addEventListener("scroll",ce(N,350),{passive:!0}));for(const e of document.scripts)e.dataset.astroExec=""}const j=new Set,v=new WeakSet;let k,G,F=!1;function me(e){F||(F=!0,k??=e?.prefetchAll??!1,G??=e?.defaultStrategy??"hover",he(),we(),ge())}function he(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{E(t.target,"tap")&&I(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function we(){let e;document.body.addEventListener("focusin",n=>{E(n.target,"hover")&&t(n)},{passive:!0}),document.body.addEventListener("focusout",r,{passive:!0}),J(()=>{for(const n of document.getElementsByTagName("a"))v.has(n)||E(n,"hover")&&(v.add(n),n.addEventListener("mouseenter",t,{passive:!0}),n.addEventListener("mouseleave",r,{passive:!0}))});function t(n){const o=n.target.href;e&&clearTimeout(e),e=setTimeout(()=>{I(o,{with:"fetch"})},80)}function r(){e&&(clearTimeout(e),e=0)}}function ge(){let e;J(()=>{for(const t of document.getElementsByTagName("a"))v.has(t)||E(t,"viewport")&&(v.add(t),e??=ye(),e.observe(t))})}function ye(){const e=new WeakMap;return new IntersectionObserver((t,r)=>{for(const n of t){const o=n.target,a=e.get(o);n.isIntersecting?(a&&clearTimeout(a),e.set(o,setTimeout(()=>{r.unobserve(o),e.delete(o),I(o.href,{with:"link"})},300))):a&&(clearTimeout(a),e.delete(o))}})}function I(e,t){const r=t?.ignoreSlowConnection??!1;if(!pe(e,r))return;if(j.add(e),(t?.with??"link")==="link"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e).catch(o=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(o)})}function pe(e,t){if(!navigator.onLine||!t&&z())return!1;try{const r=new URL(e,location.href);return location.origin===r.origin&&(location.pathname!==r.pathname||location.search!==r.search)&&!j.has(e)}catch{}return!1}function E(e,t){if(e?.tagName!=="A")return!1;const r=e.dataset.astroPrefetch;return r==="false"?!1:t==="tap"&&(r!=null||k)&&z()?!0:r==null&&k||r===""?t===G:r===t}function z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/(2|3)g/.test(e.effectiveType)}return!1}function J(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Te(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function $(e){return e.dataset.astroReload!==void 0}(x||Te()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const r=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,o=new URL(n,location.href).origin;$(t)||t.hasAttribute("download")||!t.href||r&&r!=="_self"||o!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),H(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.querySelector('[name="astro-view-transitions-forms"]')&&document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||$(t))return;const r=t,n=e.submitter,o=new FormData(r);let a=n?.getAttribute("formaction")??r.action??location.pathname;const l=n?.getAttribute("formmethod")??r.method,h={sourceElement:n??r};if(l==="get"){const f=new URLSearchParams(o),i=new URL(a);i.search=f.toString(),a=i.toString()}else h.formData=o;e.preventDefault(),H(a,h)}),me({prefetchAll:!0}));
