"use strict";window.g_aoP=class{constructor(c,a){this.g_aoQ=c,this.g_aoR=a,this.g_aoS=!1,this.g_aeT=()=>this.g_Im()}g_aoT(){}g_aoU(e,a,b,c){this.g_aoQ.g_aoV(this.g_aoR,e,a,!!b,c)}g_aoW(e,a,b,c){return this.g_aoQ.g_aoX(this.g_aoR,e,a,!!b,c)}g_aoY(d,a,b){this.g_aoQ.g_aoZ()?this.g_aoU(d,a,b):this.g_aoQ.g_ao_()._OnMessageFromDOM({type:"event",component:this.g_aoR,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_ao$(c,a){this.g_aoQ.g_apa(this.g_aoR,c,a)}g_apb(d){for(const[a,b]of d)this.g_ao$(a,b)}g_apc(){return this.g_aoQ}g_apd(){return this.g_aoR}g_WT(){this.g_aoS||(this.g_aoQ.g_ape(this.g_aeT),this.g_aoS=!0)}g_WH(){this.g_aoS&&(this.g_aoQ.g_apf(this.g_aeT),this.g_aoS=!1)}g_Im(){}},"use strict",window.g_apg=class extends g_aoP{constructor(c,a){super(c,a),this.g_aph=new Map,this.g_api=!0,this.g_ao$("create",b=>this.g_apj(b)),this.g_ao$("destroy",b=>this.g_apk(b)),this.g_ao$("set-visible",b=>this.g_apl(b)),this.g_ao$("update-position",b=>this.g_apm(b)),this.g_ao$("update-state",b=>this.g_apn(b)),this.g_ao$("focus",b=>this.g_apo(b)),this.g_ao$("set-css-style",b=>this.g_app(b))}g_apq(b){this.g_api=!!b}g_apr(c,e){this.g_ao$(c,b=>{const a=b.elementId,c=this.g_aph.get(a);return e(c,b)})}g_apj(d){const a=d.elementId,b=this.g_Xr(a,d);this.g_aph.set(a,b),this.g_api&&document.body.appendChild(b)}g_Xr(){throw new Error("required override")}g_aps(){}g_apk(d){const a=d.elementId,b=this.g_aph.get(a);this.g_aps(b),this.g_api&&b.parentElement.removeChild(b),this.g_aph.delete(a)}g_apt(d,a,b){b||(b={}),b.elementId=a,this.g_aoU(d,b)}g_apu(d,a,b){b||(b={}),b.elementId=a,this.g_aoY(d,b)}g_apl(c){if(this.g_api){const a=this.g_aph.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_apm(d){if(this.g_api){const a=this.g_aph.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_apn(c){const a=this.g_aph.get(c.elementId);this.g_apv(a,c)}g_apv(){throw new Error("required override")}g_apo(c){const a=this.g_aph.get(c.elementId);c.focus?a.focus():a.blur()}g_app(c){const a=this.g_aph.get(c.elementId);a.style[c.prop]=c.val}g_apw(b){return this.g_aph.get(b)}},"use strict";{function p(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}function q(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsText(e)})}function r(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}function s(d){if(!d)return"";const a=d.split(".");if(2>a.length)return"";const b=a[a.length-1].toLowerCase();return g.get(b)||""}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;const f=Math.max(navigator.hardwareConcurrency||0,8),g=new Map([["mp4","video/mp4"],["webm","video/webm"],["m4a","audio/mp4"],["mp3","audio/mpeg"],["js","application/javascript"],["wasm","application/wasm"]]),h=[],i=new Map,j=new Map;let k=0;window.g_apx=class b{constructor(b){this.g_apy=b.g_apz,this.g_apA=null,this.g_adW="",this.g_apB={},this.g_apC=null,this.g_apD=null,this.g_apE=[],this.g_apF=null,this.g_abU=null,this.g_afD=null,this.g_acC=-1,this.g_apG=()=>this.g_apH(),this.g_apI=[],this.g_ad$=b.g_apJ,this.g_apK=!1,"html5"===this.g_ad$&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_apa("runtime","cordova-fetch-local-file",b=>this.g_apL(b)),this.g_apa("runtime","create-job-worker",b=>this.g_apM(b)),"cordova"===this.g_ad$?document.addEventListener("deviceready",()=>this.g_VL(b)):this.g_VL(b)}g_eJ(){this.g_apN(),this.g_apA&&(this.g_apA.onmessage=null,this.g_apA=null),this.g_apC&&(this.g_apC.terminate(),this.g_apC=null),this.g_apD&&(this.g_apD.g_eJ(),this.g_apD=null),this.g_abU&&(this.g_abU.parentElement.removeChild(this.g_abU),this.g_abU=null)}g_apO(){return this.g_abU}g_fA(){return this.g_adW}g_aoZ(){return this.g_apy}g_ahg(){return this.g_ad$}g_afV(){return"cordova"===this.g_ad$&&a}g_apP(){if(!this.g_afV())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_VL(d){if(d.g_apQ)this.g_adW=d.g_apQ;else{this.g_adW=location.origin+location.pathname;const b=this.g_adW.lastIndexOf("/");-1!==b&&(this.g_adW=this.g_adW.substr(0,b+1))}if(d.g_apR)for(const[a,b]of Object.entries(d.g_apR))this.g_apB[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_apA=a.port1,this.g_apA.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_apS(b)),this.g_afD=new self.g_apT(this),await this.g_afD.g_$o(),this.g_apU(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_apV(),this.g_apy?await this.g_apW(d,a.port2):await this.g_apX(d,a.port2)}g_apY(b){return this.g_apB.hasOwnProperty(b)?this.g_apB[b]:b}async g_apZ(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_afV()){const a=await this.g_Ab("scripts/"+f);return new Worker(URL.createObjectURL(a),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_apU(){if(this.g_apP()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_ap_(d){return{baseUrl:this.g_adW,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_ade(),projectData:d.g_ap$,previewImageBlobs:window.cr_previewImageBlobs,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_apJ,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_aqa,jobScheduler:this.g_afD.g_aqb(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||"scripts/opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||"scripts/opus.wasm.wasm",isWKWebView:this.g_afV(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_apW(e,a){let b=e.g_aqc;this.g_apB.hasOwnProperty("workerMain.js")&&(b=this.g_apB["workerMain.js"]),this.g_apC=await this.g_apZ(b,this.g_adW,{name:"Runtime"}),this.g_abU=document.createElement("canvas"),this.g_abU.style.display="none";const f=this.g_abU.transferControlToOffscreen();document.body.appendChild(this.g_abU),this.g_apC.postMessage(Object.assign(this.g_ap_(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:f,workerDependencyScripts:e.g_aqd||[],engineScripts:e.g_aqe}),[a,f,...this.g_afD.g_aqf()]),this.g_apE=h.map(b=>new b(this)),this.g_aqg()}async g_apX(a,b){this.g_abU=document.createElement("canvas"),this.g_abU.style.display="none",document.body.appendChild(this.g_abU),this.g_apE=h.map(b=>new b(this)),this.g_aqg();const c=a.g_aqe.map(b=>new URL(b,this.g_adW).toString());await Promise.all(c.map(a=>p(a)));const d=Object.assign(this.g_ap_(a),{isInWorker:!1,messagePort:b,canvas:this.g_abU});this.g_apD=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_apD,d)}async g_apM(){const b=await this.g_afD.g_aqh();return{outputPort:b,transferables:[b]}}g_ao_(){if(this.g_apy)throw new Error("not available in worker mode");return this.g_apD}g_aoV(f,a,b,c,d){this.g_apA.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_apK?void 0:d)}g_aoX(h,a,b,c,d){const e=k++,f=new Promise((c,a)=>{j.set(e,{resolve:c,reject:a})});return this.g_apA.postMessage({type:"event",component:h,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_apK?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_aqi(c);else if("result"===a)this.g_aqj(c);else if("runtime-ready"===a)this.g_aqk();else throw new Error(`unknown message '${a}'`)}g_aqi(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_aql(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_aql(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_aql(c,!1,d.toString())}):this.g_aql(c,!0,f))}g_aql(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_apA.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_aqj(f){const a=f.responseId,b=f.isOk,c=f.result,d=j.get(a);b?d.resolve(c):d.reject(c),j.delete(a)}g_apa(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_aqm(b){if(h.includes(b))throw new Error("DOM handler already added");h.push(b)}g_aqg(){for(const b of this.g_apE)if("runtime"===b.g_apd())return void(this.g_apF=b);throw new Error("cannot find runtime DOM handler")}g_apS(b){this.g_aoV("debugger","message",b)}g_aqk(){for(const b of this.g_apE)b.g_aoT()}static g_ade(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}g_ape(b){this.g_apI.push(b),this.g_aqn()}g_apf(c){const a=this.g_apI.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_apI.splice(a,1),this.g_apI.length||this.g_apN()}g_aqn(){-1===this.g_acC&&this.g_apI.length&&(this.g_acC=requestAnimationFrame(this.g_apG))}g_apN(){-1!==this.g_acC&&(cancelAnimationFrame(this.g_acC),this.g_acC=-1)}g_apH(){this.g_acC=-1;for(const b of this.g_apI)b();this.g_aqn()}g_aqo(b){this.g_apF.g_aqo(b)}g_aqp(b){this.g_apF.g_aqp(b)}g_aqq(){this.g_apF.g_aqq()}g_aqr(b){this.g_apF.g_aqr(b)}g_AC(b){return!!c[b]}async g_afG(c){const a=await this.g_aoX("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_gl(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_gm(b){return!this.g_gl(b)}async g_apL(c){const a=c.filename;switch(c.as){case"text":return await this.g_Af(a);case"blob":return await this.g_Ab(a);case"blob-url":return await this.g_aqs(a);case"buffer":return await this.g_Ah(a);default:throw new Error("unsupported type");}}g_aqt(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Af(b){const a=await this.g_aqt(b);return await q(a)}g_aqu(){if(d.length&&!(e>=f)){e++;const b=d.shift();this.g_aqv(b.filename,b.g_aqw,b.g_aqx)}}g_Ah(f){return new Promise((g,b)=>{d.push({filename:f,g_aqw:b=>{e--,this.g_aqu(),g(b)},g_aqx:c=>{e--,this.g_aqu(),b(c)}}),this.g_aqu()})}async g_aqv(c,a,b){try{const b=await this.g_aqt(c),d=await r(b);a(d)}catch(c){b(c)}}async g_Ab(d,a){a||(a=s(d));const e=await this.g_Ah(d);return new Blob([e],{type:a})}async g_aqs(c){const a=await this.g_Ab(c);return URL.createObjectURL(a)}g_apV(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_apK=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){return window.parent&&window.parent.document.hasFocus()}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_aoP{constructor(c){super(c,"runtime"),this.g_aqy=!0,this.g_aqz="any",this.g_aqA=null,c.g_apa("canvas","update-size",b=>this.g_aqB(b)),c.g_apa("runtime","invoke-download",b=>this.g_aqC(b)),c.g_apa("runtime","raster-svg-image",b=>this.g_aqD(b)),c.g_apa("runtime","set-target-orientation",b=>this.g_aqE(b)),c.g_apa("runtime","register-sw",()=>this.g_aqF()),c.g_apa("runtime","post-to-debugger",b=>this.g_aqG(b)),c.g_apa("runtime","before-start-ticking",()=>this.g_aqH()),c.g_apa("runtime","debug-highlight",b=>this.g_aqI(b));const a=c.g_apO();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_acT()),this.g_aqJ=new Set,this.g_aqK=new WeakSet,this.g_aqL=!1}g_aqH(){return window.addEventListener("visibilitychange",()=>this.g_afF(document.hidden)),document.addEventListener("pause",()=>this.g_afF(!0)),document.addEventListener("resume",()=>this.g_afF(!1)),{isSuspended:!!(document.hidden||c)}}g_aoT(){window.addEventListener("focus",()=>this.g_aqM("window-focus")),window.addEventListener("blur",()=>this.g_aqM("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_acU()),window.addEventListener("webkitfullscreenchange",()=>this.g_acU()),window.addEventListener("mozfullscreenchange",()=>this.g_acU()),window.addEventListener("fullscreenerror",b=>this.g_acV(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_acV(b)),window.addEventListener("mozfullscreenerror",b=>this.g_acV(b)),window.addEventListener("keydown",b=>this.g_aqN("keydown",b)),window.addEventListener("keyup",b=>this.g_aqN("keyup",b)),window.addEventListener("mousemove",b=>this.g_aqO("mousemove",b)),window.addEventListener("mousedown",b=>this.g_aqO("mousedown",b)),window.addEventListener("mouseup",b=>this.g_aqO("mouseup",b)),window.addEventListener("dblclick",b=>this.g_aqO("dblclick",b)),window.addEventListener("wheel",b=>this.g_aqP("wheel",b)),"undefined"==typeof g_aqQ?(window.addEventListener("touchstart",b=>this.g_aqR("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_aqR("pointermove",b)),window.addEventListener("touchend",b=>this.g_aqR("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_aqR("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_aqS("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_aqS("pointermove",b)),window.addEventListener("pointerup",b=>this.g_aqS("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_aqS("pointercancel",b))),window.addEventListener("deviceorientation",b=>this.g_amS(b)),window.addEventListener("devicemotion",b=>this.g_amT(b));const c=()=>this.g_aqq();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_aqM(c,a){this.g_aoU(c,a||null,!0)}g_acT(){this.g_aoU("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_aqE(b){this.g_aqz=b.targetOrientation}g_aqT(){const c=this.g_aqz;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_acU(){const b=g_apx.g_ade();b&&"any"!==this.g_aqz&&this.g_aqT(),this.g_aoU("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_acV(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_aoU("fullscreenerror",{isFullscreen:g_apx.g_ade(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_afF(b){b?this.g_aoQ.g_apN():this.g_aoQ.g_aqn(),this.g_aoU("visibilitychange",{hidden:b})}g_aqN(c,a){this.g_aoY(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_aqO(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_aoY(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_aqP(c,a){this.g_aoU(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_aqS(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_aoY(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_aqR(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_aoY(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_amS(b){this.g_aoU("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_amT(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_aoU("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_aqB(d){const a=this.g_apc(),b=a.g_apO();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_apU(),this.g_aqy&&(b.style.display="",this.g_aqy=!1)}g_aqC(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_aqD(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_aqq(){const c=[...this.g_aqJ];if(this.g_aqJ.clear(),!this.g_aqL)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_aqK.has(d)||this.g_aqJ.add(d)})}}g_aqo(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_aqK.delete(c);let a;try{a=c.play()}catch(a){return void this.g_aqJ.add(c)}a&&a.catch(()=>{this.g_aqK.has(c)||this.g_aqJ.add(c)})}g_aqp(b){this.g_aqJ.delete(b),this.g_aqK.add(b)}g_aqr(b){this.g_aqL=!!b}g_aqI(d){const a=d.show;if(!a)return void(this.g_aqA&&(this.g_aqA.style.display="none"));this.g_aqA||(this.g_aqA=document.createElement("div"),this.g_aqA.id="inspectOutline",document.body.appendChild(this.g_aqA));const b=this.g_aqA;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_aqF(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_aqG(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}};g_apx.g_aqm(d)}{const c=document.currentScript.src;self.g_apT=class{constructor(a){this.g_aqU=a,this.g_adW=c.substr(0,c.lastIndexOf("/")+1),this.g_ahM=Math.min(navigator.hardwareConcurrency||2,16),this.g_aqV=null,this.g_aqW=[],this.g_ahK=null,this.g_aqX=null}async g_$o(){if(this.g_aqY)throw new Error("already initialised");this.g_aqY=!0;const c=this.g_aqU.g_apY("dispatchWorker.js");this.g_aqV=await this.g_aqU.g_apZ(c,this.g_adW,{name:"DispatchWorker"});const a=new MessageChannel;this.g_ahK=a.port1,this.g_aqV.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_aqX=await this.g_aqh()}async g_aqh(){const f=this.g_aqW.length,a=this.g_aqU.g_apY("jobWorker.js"),b=await this.g_aqU.g_apZ(a,this.g_adW,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_aqV.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aqW.push(b),d.port1}g_aqb(){return{inputPort:this.g_ahK,outputPort:this.g_aqX,maxNumWorkers:this.g_ahM}}g_aqf(){return[this.g_ahK,this.g_aqX]}}}if("use strict",window.C3_IsSupported){const a="undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_apx({g_apz:a,g_aqc:"workerMain.js",g_aqe:["scripts/c3runtime.js"],g_apJ:"html5"})}