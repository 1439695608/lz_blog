(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["indexPage_index"],{2:function(e,n,t){t("201c");e.exports=t("mCMz")},E5EJ:function(e,n,t){},mCMz:function(e,n,t){"use strict";t.r(n);var r=t("oCYn");var o=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("div",{attrs:{id:"noVNC_container"}})};var i=[];var s=t("1dTM");var c=t.n(s);var a={name:"App",data:function e(){return{connected:false,rfb:null}},computed:{},mounted:function e(){this.$alert("测试");this.rfb=new c.a(document.getElementById("noVNC_container"),"ws://192.168.10.7:6080/websockify",{shared:true,repeaterID:"",credentials:{password:"123123"}});this.rfb.addEventListener("connect",this.connectFinished);this.rfb.addEventListener("disconnect",function(e){console.log("==============disconnect===============",e)});this.rfb.clipViewport=true;this.rfb.scaleViewport=true;this.rfb.resizeSession=true;this.rfb.qualityLevel=6;this.rfb.compressionLevel=2;this.rfb.showDotCursor=true},methods:{connectFinished:function e(n){this.connected=true;this.rfb.focus();console.log(this.rfb);console.log("==============connect===============",n)}}};var u=a;var d=t("nqi7");var l=t("KHd+");var f=Object(l["a"])(u,o,i,false,null,"5966de10",null);var v=f.exports;var h=Promise.all([t.e("async-vendors"),t.e(2)]).then(t.bind(null,"B+pn"));h.then(function(e){return e}).then(function(e){var n=e.default;console.log(n);new r["a"]({el:"#app",store:n,render:function e(n){return n(v)}})})},nqi7:function(e,n,t){"use strict";var r=t("E5EJ");var o=t.n(r);var i=o.a}},[[2,"runtime","vendors"]]]);