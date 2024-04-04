
(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-MKVKQS9':true});

// GTM
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKVKQS9');

// Amplitude
(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
;r.type="text/javascript"
;r.integrity="sha384-MBHPie4YFudCVszzJY9HtVPk9Gw6aDksZxfvfxib8foDhGnE9A0OriRHh3kbhG3q"
;r.crossOrigin="anonymous";r.async=true
;r.src="https://cdn.amplitude.com/libs/amplitude-8.16.1-min.gz.js"
;r.onload=function(){if(!e.amplitude.runQueuedFunctions){console.log(
"[Amplitude] Error: could not load SDK")}};var s=t.getElementsByTagName("script"
)[0];s.parentNode.insertBefore(r,s);function i(e,t){e.prototype[t]=function(){
this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
var o=function(){this._q=[];return this};var a=["add","append","clearAll",
"prepend","set","setOnce","unset","preInsert","postInsert","remove"];for(
var c=0;c<a.length;c++){i(o,a[c])}n.Identify=o;var l=function(){this._q=[]
;return this};var u=["setProductId","setQuantity","setPrice","setRevenueType",
"setEventProperties"];for(var p=0;p<u.length;p++){i(l,u[p])}n.Revenue=l;var d=[
"init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut",
"setVersionName","setDomain","setDeviceId","enableTracking",
"setGlobalUserProperties","identify","clearUserProperties","setGroup",
"logRevenueV2","regenerateDeviceId","groupIdentify","onInit","onNewSessionStart"
,"logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId",
"getDeviceId","getUserId","setMinTimeBetweenSessionsMillis",
"setEventUploadThreshold","setUseDynamicConfig","setServerZone","setServerUrl",
"sendEvents","setLibrary","setTransport"];function v(t){function e(e){
t[e]=function(){t._q.push([e].concat(Array.prototype.slice.call(arguments,0)))}}
for(var n=0;n<d.length;n++){e(d[n])}}v(n);n.getInstance=function(e){e=(
!e||e.length===0?"$default_instance":e).toLowerCase();if(
!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])}
return n._iq[e]};e.amplitude=n})(window,document);

amplitude.getInstance().init("ad3ec3c5c3953686fe374308e2e68fe7", null, {
    // optional configuration options
    saveEvents: true,
    includeUtm: true,
    includeReferrer: true
})

//

var eventProperties = {
 'page': "website" + window.location.pathname,
 'Full Url' : window.location.href
};
amplitude.getInstance().logEvent('page:shown', eventProperties);

  new amplitude.Identify(); // does nothing, must call one of the following methods and pass to client

  var identify = new amplitude.Identify().setOnce('first_landing', window.location.pathname);
  amplitude.getInstance().identify(identify);

  // VWO CODE 
window._vwo_code || (function() {
  var account_id=854157,
  version=2.1,
  settings_tolerance=2000,
  hide_element='body',
  hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
  /* DO NOT EDIT BELOW THIS LINE */
  f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var i=this.getSettings(),n=d.createElement('script'),r=this;t=t||{};if(i){n.textContent=i;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200){_vwo_code.addScript({text:o.responseText})}else{_vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}_vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var i=this.hide_element(),n=i?i+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=n;else t.appendChild(d.createTextNode(n));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var n=d.createElement('div');n.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';n.setAttribute('id','_vis_opt_path_hides');n.classList.add('_vis_hide_layer');t.parentNode.insertBefore(n,t.nextSibling)}var o='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:o})}else{this.load(o+'&x=true')}}};w._vwo_code=code;code.init();})();
  