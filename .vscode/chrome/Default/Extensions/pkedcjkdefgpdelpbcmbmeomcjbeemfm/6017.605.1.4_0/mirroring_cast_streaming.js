'use strict';var Yw={TAB:0,dg:1,Ti:2},Zw=function(a){we("MediaRouter.CastStreaming.Start.Success",a,Yw)};var $w=Ia("mr.mirror.cast.LogUploader"),bx=function(a,b,c){ax("raw_events.log.gz",a,b,c);return b?"https://crash.corp.google.com/samples?stbtiq="+b:""},ax=function(a,b,c,d){if(0==b.size)u($w,"Trying to upload an empty file to Crash"),d&&d(null);else{var e=new FormData;e.append("prod","Cast");e.append("ver",chrome.runtime.getManifest().version);e.append(a,b);c&&e.append("comments",c);sj("https://clients2.google.com/cr/report",function(a){a=a.target;var b=null;Cj(a)?(b=Dj(a),u($w,"Upload to Crash succeeded: "+
b)):u($w,"Upload to Crash failed. HTTP status: "+a.za());d&&d(b)},"POST",e,void 0,3E4)}};var cx=function(){this.a=0;Nf(this)},ex=function(){dx||(dx=new cx);return dx},fx=function(){var a=ex(),b={fraction:.01,autoSubmitTimeLimitMillis:6048E5},c=b.autoSubmitTimeLimitMillis,d=Date.now();return a.a&&c&&d-a.a<c?!1:Math.random()<b.fraction};cx.prototype.fa=function(){return"mirror.cast.LogUtils"};cx.prototype.sa=function(){return[void 0,{lastAutoSubmitMillis:this.a}]};cx.prototype.wa=function(){var a=Lf(this);this.a=a&&a.lastAutoSubmitMillis||0};var dx=null;Ia("mr.mirror.cast.LogUtils");var gx=Ia("mr.NetworkUtils"),hx=function(a,b){return ge?new Promise(function(c,d){chrome.networkingPrivate.setWifiTDLSEnabledState(a,b,function(a){chrome.runtime.lastError?(t(gx,"Unable to set TDLS state: state = "+b+", error = "+chrome.runtime.lastError.message),d("Unable to set TDLS state to "+b+".")):(u(gx,"TDLS state changed: state = "+b+", status = "+a),c(a))})}):Promise.reject("TDLS feature not enabled.")};var ix=function(){this.a=Promise.resolve(1)},kx=function(a,b,c){return jx(a,function(a){return a==b},c)},lx=function(a,b){var c=[3,4];return jx(a,function(a){return-1!=c.indexOf(a)},b)},mx=function(a,b){a.a=a.a.catch(function(){return 1});return jx(a,function(){return!0},b)},jx=function(a,b,c){var d,e,f=new Promise(function(a,b){d=a;e=b});a.a=a.a.then(function(a){if(!b(a))return e(Error("Operation requires a different starting checkpoint than "+a)),Promise.resolve(a);var f=new nx(a);try{var g=c(f)}catch(y){g=
Promise.reject(y)}return g.then(function(a){return d(a)},function(a){return e(a)}).then(function(){if(null===f.a)throw Error("A prior operation that started at "+(a+" did not complete."));return f.a})},function(a){e(a);throw a;});return f},nx=function(a){this.b=a;this.a=null},ox=function(a,b){a.a="number"===typeof b?b:a.b};var px={Ap:"OFFER",ym:"ANSWER",Tp:"PRESENTATION",Pn:"GET_STATUS",Hq:"STATUS_RESPONSE",On:"GET_CAPABILITIES",Rm:"CAPABILITIES_RESPONSE",uq:"RPC"};var qx=function(){this.capabilities=this.status=this.a=this.error=this.rpc=this.result=this.type=this.b=this.sessionId=null},tx=function(a){try{if("string"!==typeof a)throw SyntaxError("Cannot parse non-string as JSON");var b;rx(JSON.parse(a),function(a){b=sx(a)},function(){throw Error("non-Object result from JSON parse");});return b}catch(d){var c=d instanceof SyntaxError?"JSON parse error: "+d.message:"Type coercion error: "+d.message}"string"==typeof a?a="a string: "+a:a instanceof ArrayBuffer?
(a=new Uint8Array(a),a="an ArrayBuffer whose base64 is "+btoa(String.fromCharCode.apply(null,a))):a="of invalid data type "+typeof a;throw Error(c+". Input was "+a);},sx=function(a){var b=new qx;null!=a.sessionId&&(b.sessionId=String(a.sessionId));ux(a.seqNum,function(a){b.b=a},function(){throw Error('"seqNum" must be a number');});if("type"in a){for(var c=String(a.type).toUpperCase(),d=ja(Object.keys(px)),e=d.next();!e.done;e=d.next())if(px[e.value]==c){b.type=c;break}if(!b.type)throw Error('not a known message "type"');
}"result"in a&&(b.result=String(a.result));if("rpc"in a){if("string"!==typeof a.rpc)throw Error('"rpc" must be a String containing a base64 payload');b.rpc=new Uint8Array([].concat(la(atob(a.rpc))).map(function(a){return a.charCodeAt(0)}))}rx(a.error,function(a){b.error=vx(a)},function(){throw Error('"error" must be an Object');});rx(a.answer,function(a){b.a=wx(a)},function(){throw Error('"answer" must be an Object');});rx(a.status,function(a){b.status=xx(a)},function(){throw Error('"status" must be an Object');
});rx(a.capabilities,function(a){b.capabilities=yx(a)},function(){throw Error('"capabilities" must be an Object');});return b},rx=function(a,b,c){void 0!==a&&(a instanceof Object?b(a):c())},ux=function(a,b,c){void 0!==a&&("number"!==typeof a?c():b(a))},zx=function(a,b,c){void 0!==a&&(a instanceof Array&&a.every(function(a){return"number"===typeof a})?b(a):c())},Ax=function(a,b,c){void 0!==a&&(a instanceof Array?b(a.map(function(a){return String(a)})):c())},Bx=function(){this.l=null;this.a=[];this.b=
[];this.f=this.g=this.h=null},wx=function(a){var b=new Bx;ux(a.udpPort,function(a){b.l=a},function(){throw Error('"answer.udpPort" must be a number');});zx(a.sendIndexes,function(a){b.a=a},function(){throw Error('"answer.sendIndexes" must be an array of numbers');});zx(a.ssrcs,function(a){b.b=a},function(){throw Error('"answer.ssrcs" must be an array of numbers');});"IV"in a&&(b.h=String(a.IV));"receiverGetStatus"in a&&(b.g="true"==String(a.receiverGetStatus).toLowerCase());"castMode"in a&&(b.f=String(a.castMode));
return b},Cx=function(){this.details=this.description=this.code=null},vx=function(a){var b=new Cx;ux(a.code,function(a){b.code=a},function(){throw Error('"error.code" must be a number');});"description"in a&&(b.description=String(a.description));rx(a.details,function(a){b.details=a},function(){throw Error('"error.details" must be an Object');});return b},Dx=function(){this.b=this.a=null},xx=function(a){var b=new Dx;ux(a.wifiSnr,function(a){b.a=a},function(){throw Error('"status.wifiSnr" must be a number');
});zx(a.wifiSpeed,function(a){b.b=a},function(){throw Error('"status.wifiSpeed" must be an array of numbers');});return b},Ex=function(){this.b=this.a=null},yx=function(a){var b=new Ex;Ax(a.mediaCaps,function(a){b.a=a},function(){throw Error('"capabilities.mediaCaps" must be an array');});if("keySystems"in a){a=a.keySystems;if(!(a instanceof Array))throw Error('"capabilities.keySystems" must be an array');b.b=a.map(function(a){var b;rx(a,function(a){b=Fx(a)},function(){throw Error('"capabilities.keySystems" entries must be *Objects');
});return b})}return b},Gx=function(){this.f=this.m=this.h=this.l=this.w=this.a=this.u=this.b=this.initDataTypes=this.g=null},Fx=function(a){var b=new Gx;"keySystemName"in a&&(b.g=String(a.keySystemName));Ax(a.initDataTypes,function(a){b.initDataTypes=a},function(){throw Error('"capabilities.initDataTypes" must be an array');});Ax(a.codecs,function(a){b.b=a},function(){throw Error('"capabilities.codecs" must be an array');});Ax(a.secureCodecs,function(a){b.u=a},function(){throw Error('"capabilities.secureCodecs" must be an array');
});Ax(a.audioRobustness,function(a){b.a=a},function(){throw Error('"capabilities.audioRobustness" must be an array');});Ax(a.videoRobustness,function(a){b.w=a},function(){throw Error('"capabilities.videoRobustness" must be an array');});"persistentLicenseSessionSupport"in a&&(b.l=String(a.persistentLicenseSessionSupport));"persistentReleaseMessageSessionSupport"in a&&(b.h=String(a.persistentReleaseMessageSessionSupport));"persistentStateSupport"in a&&(b.m=String(a.persistentStateSupport));"distinctiveIdentifierSupport"in
a&&(b.f=String(a.distinctiveIdentifierSupport));return b};var Hx=function(a){this.j=Ia("mr.mirror.cast.MessageDispatcher");this.g=a;this.a=null;this.b=new Map;this.f=0},Ix=function(a,b,c){if(a.b.has(b))throw Error("Attempt to multiple-subscribe to the same response type: "+b);a.b.set(b,c);a.f=0;v(a.j,"Added subscriber for "+b+"-type messages.");a.a||(a.a=pr(a.g),a.a.onMessage=a.l.bind(a))},Jx=function(a,b){a.b.delete(b)&&v(a.j,function(){return"Removed subscriber of "+b+"-type messages."});0==a.b.size&&a.a&&(a.a.ta(),a.a=null)};
Hx.prototype.sendMessage=function(a){return this.a?"RPC"==a.type?this.a.sendMessage(a,{namespace:"urn:x-cast:com.google.cast.remoting"}):this.a.sendMessage(a,{namespace:"urn:x-cast:com.google.cast.webrtc"}):Promise.reject(Error("Require at least one subscriber before sending messages."))};
var Kx=function(a,b,c,d,e){var f=null,g=function(){Jx(a,c);null!=f&&(clearTimeout(f),f=null)};try{Ix(a,c,function(a){e(a)&&g()})}catch(l){e(null,l);return}f=setTimeout(function(){g();e(null,Error("timeout"))},d);a.sendMessage(b).catch(function(a){g();e(null,a)})};
Hx.prototype.l=function(a){if(a&&"string"===typeof a.namespace_&&a.namespace_.startsWith("urn:x-cast:com.google.cast.")){do{var b=void 0;try{b=tx(a.data)}catch(d){b=d.message;break}if(b.type){var c=this.b.get(b.type);if(c)try{c(b);return}catch(d){b="Error thrown during delivery. Response was: "+(JSON.stringify(b)+". Error from subscriber callback ")+("was: "+d.message+".")}else b="Message was ignored: "+JSON.stringify(b)}else b="Message did not include response type: "+JSON.stringify(b)}while(0);
10>this.f?t(this.j,b):v(this.j,b);++this.f}};var Lx=chrome.cast.streaming,Nx=function(a,b,c,d,e){this.T=a.sessionId;this.w=a.He;this.G=a.Ie;this.f=b;this.K=c;this.B=d;this.H=Mx(e,"onAnswer",this.w);this.I=Mx(e,"onSessionStop",this.w);this.j=Ia("mr.mirror.cast.StreamingLaunchWorkflow");this.s=new ix;this.m=this.v=this.u=this.b=this.a=this.h=this.l=this.g=null};
Nx.prototype.start=function(a,b,c){var d=this;if(!a&&!b)return Promise.reject(Error("No tracks to stream"));var e=a instanceof Ox,f=b instanceof Ox;(e&&b&&!f||f&&a&&!e)&&pb("Mixing remoting and non-remoting tracks");return kx(this.s,1,function(e){d.g=a;d.l=b;d.h=c;u(d.j,function(){return"Launching streaming for "+Px(d)+" "+("to a "+d.G+".")});return Qx(d).then(d.A.bind(d)).then(function(a){return Rx(d,a).then(function(b){d.H();var c=Sx(d,b,a);d.a=Tx(d,d.a,c);d.b=Tx(d,d.b,c);if(!d.a&&!d.b)throw Error("Receiver did not select any offers from: "+
JSON.stringify(a));d.v=!!b.g;d.m=function(a,b){a==d.a?d.h.qc("Audio stream (id="+a+") error: "+b):a==d.b&&d.h.qc("Video stream (id="+a+") error: "+b)};Lx.rtpStream.onError.addListener(d.m);return Ux(d,b,c)})}).then(function(){u(d.j,function(){return"Launched streaming for "+Px(d)});d.h.sd(d);ox(e,2);return{Ag:null!=d.a?d.a.toString(16):null,hi:null!=d.b?d.b.toString(16):null}})})};
Nx.prototype.stop=function(){var a=this;return mx(this.s,function(b){if(!a.g&&!a.l)return ox(b,1),Promise.resolve();u(a.j,function(){return"Stopping streaming for "+Px(a)+"."});a.m&&(Lx.rtpStream.onError.removeListener(a.m),a.m=null);if(a.h){var c=a.h.Sd();a.h=null}else c=Promise.resolve();return c.then(function(){a.a&&(Lx.rtpStream.stop(a.a),Lx.rtpStream.destroy(a.a),a.a=null);a.b&&(Lx.rtpStream.stop(a.b),Lx.rtpStream.destroy(a.b),a.b=null);a.u&&(Lx.udpTransport.destroy(a.u),a.u=null);a.I();u(a.j,
function(){return"Stopped streaming for "+Px(a)+"."});a.g=null;a.l=null;ox(b,1)})})};
var Vx=function(a,b){var c=JSON.stringify(b);return Promise.all([a.a&&new Promise(function(b){return Lx.rtpStream.getRawEvents(a.a,c,b)}),a.b&&new Promise(function(b){return Lx.rtpStream.getRawEvents(a.b,c,b)})]).catch(function(b){a.j.error("Unexpected error when calling getRawEvents()",b);return[]}).then(function(a){return new Blob(a.filter(function(a){return!!a}),{type:"application/gzip"})})},Wx=function(a){return Promise.all([a.a&&new Promise(function(b){return Lx.rtpStream.getStats(a.a,b)}),a.b&&
new Promise(function(b){return Lx.rtpStream.getStats(a.b,b)})]).catch(function(b){a.j.error("Unexpected error when calling getStats()",b);return[]}).then(function(a){return Object.assign.apply(Object,[].concat([{}],la(a.filter(function(a){return!!a}))))})},Px=function(a){if(a.g&&a.l)var b="audio+video ";else if(a.g)b="audio-only ";else if(a.l)b="video-only ";else return"stopped";return a.g instanceof Ox||a.l instanceof Ox?b+"remoting":b+"streaming"},Qx=function(a){return new Promise(function(b){var c=
function(c,e,f){c&&!a.g&&(Lx.rtpStream.destroy(c),c=null);e&&!a.l&&(Lx.rtpStream.destroy(e),e=null);u(a.j,function(){return"Created Cast Streaming session: audioStreamId="+c+", videoStreamId="+e+"."});a.a=c;a.b=e;a.u=f;b()};a.g instanceof Ox||a.l instanceof Ox?Lx.session.create(null,null,c):Lx.session.create(a.g,a.l,c)})};
Nx.prototype.A=function(){for(var a=Ap(),b=Ap(),c=[],d=ja([this.a,this.b]),e=d.next();!e.done;e=d.next())if(e=e.value)for(var f=e==this.a,g=f?127:96,l=f?Math.floor(499999*Math.random())+1:Math.floor(499999*Math.random())+500001,r=f?48E3:9E4,y=ja(Lx.rtpStream.getSupportedParams(e)),z=y.next();!z.done;z=y.next())z=z.value,z.payload.payloadType=g,z.payload.maxLatency=this.f.maxLatencyMillis,z.payload.minLatency=this.f.minLatencyMillis,z.payload.animatedLatency=this.f.animatedLatencyMillis,z.payload.ssrc=
l,z.payload.clockRate=r,z.payload.aesKey=a,z.payload.aesIvMask=b,f?(z.payload.channels=2,z.payload.maxBitrate=this.f.audioBitrate,z.payload.maxFrameRate=100):(z.payload.minBitrate=this.f.minVideoBitrate,z.payload.maxBitrate=this.f.maxVideoBitrate,z.payload.maxFrameRate=this.f.maxFrameRate),c.push(new Xx(e,z));return c};
var Tx=function(a,b,c){b&&!c.some(function(a){return a.hd==b})&&(t(a.j,"Destroying RTP stream not selected by the receiver: id="+b),Lx.rtpStream.destroy(b),b=null);return b},Rx=function(a,b){return new Promise(function(c,d){for(var e=[],f=0;f<b.length;++f){var g=b[f].params,l={index:f,codecName:g.payload.codecName.toLowerCase(),rtpProfile:"cast",rtpPayloadType:g.payload.payloadType,ssrc:g.payload.ssrc,targetDelay:g.payload.animatedLatency,aesKey:g.payload.aesKey,aesIvMask:g.payload.aesIvMask,timeBase:"1/"+
g.payload.clockRate,receiverRtcpEventLog:a.f.enableLogging,rtpExtensions:["adaptive_playout_delay"]};a.f.dscpEnabled&&(l.receiverRtcpDscp=46);127==g.payload.payloadType?Object.assign(l,{type:"audio_source",bitRate:0<g.payload.maxBitrate?1E3*g.payload.maxBitrate:60*g.payload.maxFrameRate+g.payload.clockRate*g.payload.channels,sampleRate:g.payload.clockRate,channels:g.payload.channels}):Object.assign(l,{type:"video_source",renderMode:"video",maxFrameRate:Math.round(1E3*g.payload.maxFrameRate)+"/1000",
maxBitRate:1E3*g.payload.maxBitrate,resolutions:[{width:a.f.maxWidth,height:a.f.maxHeight}]});e.push(l)}var r=a.g instanceof Ox||a.l instanceof Ox?"remoting":"mirroring",y={type:"OFFER",sessionId:a.T,seqNum:Mj(a.K),offer:{castMode:r,receiverGetStatus:!0,supportedStreams:e}};u(a.j,function(){return"Sending OFFER message: "+JSON.stringify(y)});Kx(a.B,y,"ANSWER",1E4,function(b,e){if(null==b)d(e);else if("ok"==b.result&&b.a){if(b.b!=y.seqNum)return t(a.j,"Ignoring ANSWER for OFFER with different seqNum: "+
JSON.stringify(b)),!1;((e=b.a.f)&&e!=r||!e&&"mirroring"!=r)&&a.j.error("Expected receiver to ANSWER with castMode="+r+", but got: "+e);v(a.j,function(){return"Received ANSWER: "+JSON.stringify(b)});c(b.a)}else d(Error("Non-OK ANSWER received: "+JSON.stringify(b)));return!0})})},Sx=function(a,b,c){if(b.a.length!=b.b.length)return a.j.error("sendIndexes.length != ssrcs.length in ANSWER: "+JSON.stringify(b)),[];for(var d=[],e={},f=0;f<b.a.length;e={candidate:e.candidate},++f){var g=b.a[f];if(0>g||g>=
c.length)return a.j.error("Receiver selected invalid index ("+g+" < "+c.length+") in ANSWER: "+JSON.stringify(b)),[];e.candidate=c[g];if(d.some(function(a){return function(b){return b.hd==a.candidate.hd}}(e)))return a.j.error("Receiver selected same RTP stream twice in ANSWER: "+JSON.stringify(b)),[];e.candidate.params.payload.feedbackSsrc=b.b[g];if(d.some(function(a){return function(b){return b.params.payload.feedbackSsrc==a.candidate.params.payload.feedbackSsrc}}(e)))return a.j.error("Receiver provided same SSRC for two different RTP streams in ANSWER: "+
JSON.stringify(b)),[];d.push(e.candidate)}return d},Ux=function(a,b,c){var d=null,e=function(){d&&(Lx.rtpStream.onStarted.removeListener(d),d=null)};return(new Promise(function(e,g){var f=b.l||2344;u(a.j,function(){return"Starting RTP streams to receiver at "+(a.w+":"+f)+(" for selected offers: "+JSON.stringify(c))});var r=a.u||-1;a.f.dscpEnabled&&(u(a.j,"Enabled DSCP in sender."),Lx.udpTransport.setOptions(r,{DSCP:!0}));Lx.udpTransport.setDestination(r,{address:a.w,port:f});var y=new Set(c.map(function(a){return a.hd}));
d=function(a){y.delete(a);0==y.size&&e()};Lx.rtpStream.onStarted.addListener(d);for(var r=ja(c),z=r.next();!z.done;z=r.next())z=z.value,Lx.rtpStream.toggleLogging(z.hd,a.f.enableLogging),Lx.rtpStream.start(z.hd,z.params);setTimeout(function(){g(Error("Timeout: RTP streams failed to start."))},1E4)})).then(e).catch(function(a){e();throw a;})},Mx=function(a,b,c){var d=this;return a&&b in a?function(){try{a[b](c)}catch(e){d.j.error("Error from testHooks."+b,e)}}:function(){}},Xx=function(a,b){this.hd=
a;this.params=b},Ox=function(){};var Zx=function(a,b,c,d,e,f){b=Math.floor(16777216*Math.random()).toString(16);b="000000".substring(b.length)+b;var g=a.mediaSource.replace("urn:x-org.chromium.media:source:tab:","urn:x-org.chromium.media:source:tab_content_remoting:");b=Kj("undefined","cast",b,g,!0,a.description,a.iconUrl);b.forDisplay=!1;b.offTheRecord=a.offTheRecord;b.ob=a.ob;this.v=b;this.s=new Nx(this.v.ob,c,d,e,f);this.m=e;this.g=new ix;this.b=new Yx;this.j=Ia("mr.mirror.cast.MediaRemoter");this.a=this.l=this.h=this.f=this.u=
null};h=Zx.prototype;h.start=function(a,b){var c=this;return kx(this.g,1,function(d){c.u=a;c.f=b;c.h=Wo(c);ox(d,2);return Promise.resolve()})};h.stop=function(){var a=this;return mx(this.g,function(b){Xo(a);a.a=null;var c=a.l;a.l=null;a.h=null;a.f=null;a.u=null;return new Promise(function(d){window.setTimeout(function(){$x(a).then(function(){ox(b,1);d();c&&c()})},250)})})};h.Db=function(){return this.v};
h.gl=function(a){var b=this;v(this.j,function(){return"Processing control message: "+a});var c=a.split(":"),d=(c.find(function(a){return a.startsWith("session=")})||"").substring(8);if(0==d.length)return this.j.error("Missing valid 'session' field in control message: "+a),Promise.resolve();switch(c[0]){case "START_CAST_REMOTING":return ay(this,d).catch(function(a){b.j.error("Failed to start remoting",a);by(b,d)});case "START_CAST_REMOTING_STREAMS":var e=c.some(function(a){return"audio=Y"==a}),c=c.some(function(a){return"video=Y"==
a});return cy(this,d,e,c).then(this.w.bind(this)).catch(function(a){b.j.error("Failed to start remoting streams",a);by(b,d)});case "STOP_CAST_REMOTING":return dy(this,d).then(function(){b.w("STOPPED_CAST_REMOTING:session="+d)}).catch(function(a){b.j.error("Failed to stop remoting",a);by(b,d)});default:this.j.error("Unknown control message: "+a)}return Promise.resolve()};h.Ml=function(a){return ey(this.b,a)};h.sd=function(a){this.f&&this.f.sd(a)};h.Sd=function(){return this.f?this.f.Sd():Promise.resolve()};
h.qc=function(a,b){this.j.error("Error during streaming: "+a,b);null!=this.a&&by(this,this.a)};
var ay=function(a,b){if(null!=a.a)return Promise.reject(Error("Attempt to start a second session ("+b+") during existing session ("+a.a+")."));a.a=b;var c=!1;u(a.j,function(){c=!0;return"Starting next media remoting session (id="+b+")."});c&&fy(a.b,function(b){return u(a.j,b)});gy(a.b);return kx(a.g,2,function(b){return(0,a.u)().then(function(c){a.l=c;Ix(a.m,"RPC",function(b){if(b.rpc){var c=a.b;b=b.rpc;c.h&&(++c.m,c.b+=b.length,c.h(b))}});ox(b,3)}).catch(function(c){return $x(a).then(function(){ox(b);
throw c;})})})},cy=function(a,b,c,d){return a.a!=b?Promise.reject(Error("Cannot start streams for an unknown session ("+b+") during existing session ("+a.a+")")):kx(a.g,3,function(e){return a.s.start(c?new Ox:null,d?new Ox:null,a).then(function(c){var d="STARTED_CAST_REMOTING_STREAMS:session="+b;c.Ag&&(d+=":audio_stream_id="+c.Ag);c.hi&&(d+=":video_stream_id="+c.hi);hy(a.b,function(b){return a.m.sendMessage(b)},function(b){var c=a.h;c.a&&c.a(b)});ox(e,4);return d}).catch(function(b){return $x(a).then(function(){ox(e);
throw b;})})})},dy=function(a,b){if(a.a!=b)return Promise.reject(Error("Attempting to stop an unknown session ("+b+") during existing session ("+a.a+")."));a.a=null;return new Promise(function(b,d){lx(a.g,function(c){return $x(a).then(function(){ox(c,5);(0,a.l)().then(function(){return kx(a.g,5,function(a){ox(a,2);return Promise.resolve()})}).then(b,function(a){return d(a)});a.l=null})}).catch(function(a){return d(a)})})},$x=function(a){return a.s.stop().then(function(){Jx(a.m,"RPC");iy(a.b);jy(a.b)})};
Zx.prototype.w=function(a){this.h?(v(this.j,function(){return"Sending control message to browser: "+a}),Yo(this.h,a)):v(this.j,function(){return"Dropping control message to browser: "+a})};
var by=function(a,b){a.w("FAILED_CAST_REMOTING:session="+b);a.stop()},Uo=function(){return Jw(Qe.get("mr.ProviderManager")||null,"cast")},Yx=function(){this.h=this.l=this.a=null;this.w=this.b=this.m=this.f=this.u=0;this.g=null},gy=function(a){a.a=[];ky(a,performance.now())},hy=function(a,b,c){a.l=b;a.h=c;a.a?(b=a.a,a.a=null,b.forEach(function(b){return ey(a,b.data).then(b.Ol,b.Nh)})):ky(a,performance.now())},iy=function(a){if(a.a){var b=Error("Stop before delivering pending message");a.a.forEach(function(a){return a.Nh(b)});
a.a=null}a.l=null;a.h=null},ey=function(a,b){if(a.l){var c=btoa(String.fromCharCode.apply(null,b));++a.u;a.f+=b.length;return a.l({type:"RPC",rpc:c})}return a.a?new Promise(function(c,e){a.a.push({data:b,Ol:c,Nh:e})}):Promise.reject(Error("RPC pipe not started"))},fy=function(a,b){jy(a);a.g=setInterval(function(){if(a.a)var c=a.a.length+" messages are waiting to send.";else{c=performance.now();var d=(c-a.w)/1E3,d="Over the past "+d.toFixed(1)+" seconds, sent "+(a.u+" messages ("+Math.round(a.f/d)+
" bytes/sec) and ")+("received "+a.m+" messages ("+Math.round(a.b/d)+" ")+"bytes/sec).";ky(a,c);c=d}b(c)},3E4)},jy=function(a){null!=a.g&&(clearInterval(a.g),a.g=null)},ky=function(a,b){a.u=0;a.f=0;a.m=0;a.b=0;a.w=b};var ly=function(a){return a&&a.getAudioTracks()&&0<a.getAudioTracks().length?a.getAudioTracks()[0]:null},my=function(a){return a&&a.getVideoTracks()&&0<a.getVideoTracks().length?a.getVideoTracks()[0]:null};var ny=function(a,b,c,d,e){this.f=new Nx(a,b,c,d,void 0===e?null:e);this.j=Ia("mr.mirror.cast.MediaStreamer");this.l=new ix;this.g=this.b=this.a=this.h=null};ny.prototype.start=function(a,b){var c=this;return kx(this.l,1,function(d){c.h=a;c.a=ly(a);c.a&&"ended"==c.a.readyState&&(c.a=null);c.b=my(a);c.b&&"ended"==c.b.readyState&&(c.b=null);if(!c.a&&!c.b)return ox(d),Promise.reject(Error("No MediaStream tracks to stream."));c.g=b;return c.f.start(c.a,c.b,c.g).then(function(){return ox(d,2)})})};
ny.prototype.stop=function(){var a=this;return mx(this.l,function(b){return a.f.stop().then(function(){a.a=null;a.b=null;a.h=null;a.g=null;ox(b,1)})})};var oy=function(a){return kx(a.l,2,function(b){u(a.j,"Suspending media streaming...");return a.f.stop().then(function(){u(a.j,"Suspended media streaming.");ox(b,3)})})};
ny.prototype.resume=function(){var a=this;return kx(this.l,3,function(b){a.a&&"ended"==a.a.readyState&&(a.a=null);a.b&&"ended"==a.b.readyState&&(a.b=null);if(!a.a&&!a.b)return Promise.reject(Error("Cannot resume: All tracks have ended."));u(a.j,"Resuming media streaming...");return a.f.start(a.a,a.b,a.g).then(function(){u(a.j,"Resumed media streaming.");ox(b,2)})})};var py=function(a,b,c){this.l=a;this.g=b;this.f=c;this.j=Ia("mr.mirror.cast.WifiStatusMonitor");this.a=null;this.b=[]};py.prototype.start=function(){var a=this;null==this.a&&(v(this.j,"Starting Wifi Status Monitoring."),this.b=[],Ix(this.f,"STATUS_RESPONSE",function(b){return qy(a,b)}),this.a=setInterval(function(){return ry(a)},12E4),ry(this))};py.prototype.stop=function(){null!=this.a&&(v(this.j,"Stopping Wifi Status Monitoring."),clearInterval(this.a),this.a=null,Jx(this.f,"STATUS_RESPONSE"))};
var qy=function(a,b){if(null!=a.a)if(b.status){var c={};null!=b.status.a&&(c.wifiSnr=b.status.a);null!=b.status.b&&(c.wifiSpeed=b.status.b[3]);0==Object.keys(c).length?t(a.j,function(){return"No status fields populated in response: "+JSON.stringify(b)}):(c.timestamp=Date.now(),30==a.b.length&&a.b.shift(),a.b.push(c),u(a.j,function(){return"Current Wifi status: "+JSON.stringify(c)}))}else t(a.j,function(){return"Ignoring response without status: "+JSON.stringify(b)})},ry=function(a){a.f.sendMessage({type:"GET_STATUS",
sessionId:a.l,seqNum:Mj(a.g),get_status:["wifiSnr","wifiSpeed"]})};var sy=function(a,b,c,d){this.B=b.He;this.m={extVersion:chrome.runtime.getManifest().version,extChannel:"public",mirrorSettings:of(a),sender:navigator.userAgent||"UNKNOWN",receiverProductName:b.Ie};this.A=c;this.v=d;this.g=this.b=this.u=this.h=this.l=this.w=this.f=null;this.a=[]};sy.prototype.sd=function(a){null!=this.b&&clearInterval(this.b);this.f=a;this.w=Date.now();this.b=setInterval(this.s.bind(this,a),9E5)};
sy.prototype.Sd=function(){null!=this.b&&(clearInterval(this.b),this.b=null);if(null!=this.f){var a=this.s(this.f);this.f=null;return a}return Promise.resolve()};sy.prototype.qc=function(a,b){null==this.l&&(this.l=Date.now(),"function"===typeof a?this.h=a():"string"===typeof a&&(this.h=a),b&&"string"===typeof b.stack&&(this.u=b.stack))};
var uy=function(a,b){return(null==a.f?Promise.resolve():a.s(a.f)).then(function(){var c=b.map(function(b){b=ty(a,b);var c=b.map(function(a){return a.events}).filter(function(a){return null!=a}),d=["["];b.map(function(a){return a.gd}).forEach(function(a,b){0<b&&d.push(",");d.push(a)});d.push("]");return{events:new Blob(c,{type:"application/gzip"}),gd:new Blob(d,{type:"application/json"})}});a.a=[];return c})};
sy.prototype.s=function(a){var b=this;if(null!=this.g)return this.g;var c=Dc(this.B).then(function(c){c={receiverVersion:c.a,receiverConnected:c.g,receiverOnEthernet:c.f,receiverHasUpdatePending:c.b,receiverUptimeSeconds:c.l};Object.assign(c,b.m);var d=Date.now();Object.assign(c,{startTime:b.w,endTime:d,activity:Px(a),receiverWifiStatus:Array.from(b.v.b)});b.w=d;null!=b.l&&(Object.assign(c,{streamingErrorTime:b.l,streamingErrorMessage:b.h,streamingErrorCause:b.u}),b.l=null,b.h=null,b.u=null);return c});
return(this.g=Promise.all([c.then(function(b){return Vx(a,b)}),c,Wx(a)]).then(function(a){var c=ja(a);a=c.next().value;var d=c.next().value,c=c.next().value;b.a.push({events:a,gd:new Blob([JSON.stringify(Object.assign({tags:d},c))],{type:"application/json"})});b.a=ty(b,b.A);b.g=null}))||Promise.resolve()};
var ty=function(a,b){b-=2;for(var c=[],d=a.a.length-1;0<=d;--d){b-=a.a[d].gd.size+1;if(0>b)break;c.push({events:null,gd:a.a[d].gd});if(null!=a.a[d].events){var e=a.a[d].events.size;b>=e&&(c[c.length-1].events=a.a[d].events,b-=e)}}return c.reverse()};var vy=function(a,b,c,d){d=void 0===d?null:d;lf.call(this,b);var e=b.ob;this.w=e.sessionId;this.K=e.He;this.A=a;this.T=d;this.j=Ia("mr.mirror.cast.Session");this.u=new ix;this.m=new Lj("mirror.cast.SeqNumGenerator");this.h=new Hx(b.id);this.l=new ny(e,this.A,this.m,this.h,this.T);this.f=null;this.a=new sy(a,e,c,new py(this.w,this.m,this.h));this.b=!1;this.s=null};ka(vy,lf);h=vy.prototype;
h.start=function(a){var b=this;return kx(this.u,1,function(c){var d=new me("MediaRouter.CastStreaming.Session.Launch");return wy(b).then(function(c){b.b=c;return b.l.start(a,b)}).then(function(){if(b.l.f.v){var a=b.a;a.m.tdlsIsOn=b.b;a.v.start();xy(b)}else b.a.m.tdlsIsOn=b.b;d.a();b.s=new se("MediaRouter.CastStreaming.Session.Length");ox(c,2);return b})})};
h.stop=function(){var a=this;return mx(this.u,function(b){a.s&&(a.s.a(),a.s=null);a.a.v.stop();return a.l.stop().then(function(){return a.f?a.f.stop():Promise.resolve()}).then(function(){a.f=null;return a.b?yy(a):Promise.resolve()}).then(function(){a.b=!1;ox(b,4)})})};
h.Mh=function(){var a={sessionId:this.w,seqNum:Mj(this.m),type:"PRESENTATION",icons:[]};this.B&&(a.title=this.B);this.iconUrl&&!this.v&&a.icons.push({url:this.iconUrl});u(this.j,"Sending session metadata update to receiver: "+this.w);this.h.sendMessage(a)};h.sd=function(a){this.a.sd(a)};h.Sd=function(){return this.a.Sd()};h.qc=function(a,b){this.a.qc(a,b);this.j.error(a,b);this.stop()};
var zy=function(a,b){return uy(a.a,b)},wy=function(a){return a.A.useTdls?hx(a.K,!0).then(function(b){if("Connected"==b)return u(a.j,"Successfully enabled TDLS."),!0;t(a.j,"Did not enable TDLS: result="+b);return!1}).catch(function(b){t(a.j,"Error while calling enableTDLS()",b);return!1}):Promise.resolve(!1)},yy=function(a){return hx(a.K,!1).catch(function(b){return a.j.error("Error while turning TDLS back off",b)})},xy=function(a){Ay(a).then(function(b){(b.a||[]).includes("video")?By(a):t(a.j,function(){return"Receiver incapable of Media Remoting: "+
JSON.stringify(b)})}).catch(function(b){t(a.j,"None/Invalid capabilites response. Media Remoting disabled.",b)})},Ay=function(a){return new Promise(function(b,c){var d={type:"GET_CAPABILITIES",sessionId:a.w,seqNum:Mj(a.m)};u(a.j,function(){return"Sending GET_CAPABILITIES message: "+JSON.stringify(d)});Kx(a.h,d,"CAPABILITIES_RESPONSE",3E4,function(e,f){if(null==e)return c(f),!0;if("ok"!=e.result||!e.capabilities)return c(Error("Bad response: "+JSON.stringify(e))),!0;if(e.b!=d.seqNum)return u(a.j,function(){return"Ignoring CAPABILITIES_RESPONSE with different seqNum: "+
JSON.stringify(e)}),!1;v(a.j,function(){return"Received CAPABILITIES_RESPONSE: "+JSON.stringify(e)});b(e.capabilities);return!0})})},By=function(a){kx(a.u,2,function(b){var c=a.g.ob.Ie||"<UNKNOWN>";if(!c.startsWith("Chromecast")&&!c.startsWith("Eureka Dongle"))return t(a.j,"HACK: Media Remoting disabled because the receiver model--"+('"'+c+'" according to discovery--is not a Chromecast.')),ox(b),Promise.resolve();a.f=new Zx(a.g,0,a.A,a.m,a.h,a.T);return a.f.start(a.G.bind(a),a).catch(function(b){a.j.error("Media Remoting start failed: "+
b.message,b)}).then(function(){return ox(b)})})};vy.prototype.G=function(){var a=this;return kx(this.u,2,function(b){return new Promise(function(c,d){oy(a.l).then(function(){ox(b,3);c(a.H.bind(a))}).catch(function(b){a.qc("Failed to suspend MediaStreamer before starting remoting",b);d(b)})})})};
vy.prototype.H=function(){var a=this;return kx(this.u,3,function(b){return new Promise(function(c,d){a.l.resume().then(function(){ox(b,2);c()}).catch(function(b){a.qc("Failed resume MediaStreamer after ending remoting mode",b);d(b)})})})};var Cy=function(){af.call(this,"cast_streaming")};ka(Cy,af);h=Cy.prototype;h.getName=function(){return"cast_streaming"};h.he=function(a,b){return new vy(a,b,Math.max(20969472,9351424),null)};h.Ge=function(){Zw(0)};h.De=function(){Zw(1)};h.Hf=function(){Zw(2)};h.Ee=function(){ve("MediaRouter.CastStreaming.Session.End")};h.Fe=function(a){we("MediaRouter.CastStreaming.Start.Failure",a,ye)};h.Kd=function(){ve("MediaRouter.CastStreaming.Stream.End")};
h.Ye=function(a){var b=this;return(new Promise(function(a){return chrome.metricsPrivate.getIsCrashReportingEnabled(a)})).then(function(c){var d=c&&fx(),e=[9351424];d&&e.push(20969472);return zy(a,e).then(function(a){var e=a[a.length-1];a=Wf(a[0].events).catch(function(a){b.F.error("Failed to persist events Blob.",a)});d&&0<e.events.size?bx(e.events,void 0,b.Gk.bind(b)):c&&ax("stats.json",e.gd,void 0,void 0);return a})})};h.Gk=function(a){a&&(ex().a=Date.now())};
h.rf=function(a){u(this.F,"Received message to upload logs for "+a);return this.a?zy(this.a,[20969472]).then(function(b){b=ja(b).next().value;return 0==b.events.size?"":bx(b.events,a)}):Promise.resolve(Dy(this,a))};
var Dy=function(a,b){var c=window.localStorage.getItem("mr.temp.mirror.cast.Service.eventsBlob");if(null==c||1>c.length)c=null;else{for(var d=new Uint16Array(c.length),e=0;e<c.length;++e)d[e]=c.charCodeAt(e);c=d.buffer;d=(new Uint8Array(c,c.byteLength-1,1))[0];c=new Uint8Array(c,0,c.byteLength-(0==d?2:1));c=new Blob([c],{type:"application/gzip"})}if(null!=c&&0!=c.size)return Wf(new Blob),u(a.F,"Uploading saved logs for feedback."),bx(c,b)},Ey=new Cy;Ze("mr.mirror.cast.Service",Ey);
