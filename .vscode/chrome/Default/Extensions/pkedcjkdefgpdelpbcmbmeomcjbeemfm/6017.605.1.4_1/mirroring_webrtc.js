'use strict';var e4={TAB:0,dg:1,Ti:2},f4=function(a){we("MediaRouter.WebRtc.Start.Success",a,e4)};var j4=function(a,b){lf.call(this,b);this.s=a;this.a=new Ra;this.h=pr(b.id);this.f=new Ra;this.w=!1;this.l=null;this.u=!1;this.m=this.b=null;g4(this);h4(this);i4(this,new rf("GET_TURN_CREDENTIALS"))};ka(j4,lf);j4.prototype.start=function(a){var b=this;return this.a.a.then(function(c){if(c.b)return Promise.reject(new ze("Mirroring already started"));if(b.l)return Promise.reject(new ze("Session permanently stopped"));b.b=new me("MediaRouter.WebRtc.Session.Launch");c.a.addStream(a);c.start();return b.f.a})};
j4.prototype.stop=function(){var a=this;this.f.reject(new ze("Session stop requested."));this.m&&(this.m.a(),this.m=null);if(this.l)return this.l;this.u=this.w=!1;this.b=null;return this.l=this.a.a.then(function(a){a.stop()}).then(function(){return a.h.ta()}).catch(function(b){a.h.ta();throw b;})};
var g4=function(a){a.h.onMessage=function(b){if(!b.type)throw Error("Message has no type.");switch(b.type){case "TURN_CREDENTIALS":a.a.resolve(new wf(a.g.id,b.data.credentials));break;case "ANSWER":a.a.a.then(function(a){Ef(a,b.data)});break;case "KNOCK_ANSWER":a.u=!0;a.a.a.then(function(a){Ef(a,b.data)});break;case "STOP":a.f.reject(new ze("Stop signal received"));a.stop();break;default:throw new ze("Unknown message type: "+b.type);}}},h4=function(a){a.a.a.then(function(b){Af(b,function(b){i4(a,
new rf("OFFER",new tf(b,a.s,uf)))});Bf(b,function(b){i4(a,sf(b))});xf(b,function(){a.w=!0;i4(a,new rf("SESSION_START_SUCCESS"));!a.u&&a.b&&a.b.a();a.b=null;a.m=new se("MediaRouter.WebRtc.Session.Length");a.f.resolve(a)});zf(b,function(){i4(a,new rf("SESSION_END"))});yf(b,function(b){a.w||a.f.reject(b);i4(a,new rf("SESSION_FAILURE"))})})},i4=function(a,b){a.h.sendMessage(b,k4)},k4={channelType:"cloud"};var l4=function(){af.call(this,"webrtc")};ka(l4,af);h=l4.prototype;h.he=function(a,b){return new j4(a,b)};h.Ge=function(){f4(0)};h.De=function(){f4(1)};h.Hf=function(){f4(2)};h.Ee=function(){ve("MediaRouter.WebRtc.Session.End")};h.Fe=function(a){we("MediaRouter.WebRtc.Start.Failure",a,ye)};h.Kd=function(){ve("MediaRouter.WebRtc.Stream.End")};var m4=new l4;Ze("mr.mirror.webrtc.WebRtcService",m4);
