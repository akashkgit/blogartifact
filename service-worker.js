if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(n[d])return;let s={};const o=e=>i(e,d),u={module:{uri:d},exports:s,require:o};n[d]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(l(...e),s)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"073e31dd123514f85c7b.png",revision:null},{url:"177226c35ebefc5f2ded.png",revision:null},{url:"296cb29ec3edd79b1bc0.jpeg",revision:null},{url:"81074d12bb37853f876b.png",revision:null},{url:"98b73baf52130055600a.png",revision:null},{url:"a79d278a0a101adeb537.png",revision:null},{url:"add677307dffb009942c.png",revision:null},{url:"b134a542d3940d1f0ce8.png",revision:null},{url:"bb40fc0514f327d7edd2.png",revision:null},{url:"index.html",revision:"472a5fa0fe1912e714ac994d296f6f65"},{url:"keyboard.mp3",revision:"c56e6d5094554464af4128d9e142d700"},{url:"main.css",revision:"0ce33c396a6ee45144a8aeef444af5da"},{url:"main.js",revision:"b17776db8fd1e2157dad44de92647c4a"},{url:"main.js.LICENSE.txt",revision:"85bdd68267e3e38b6ee4773a0a1cbed6"}],{})}));
