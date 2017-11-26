/* @license http://www.apache.org/licenses/LICENSE-2.0 */
(function(){
var g=document,l=window,m=navigator;function n(b,d,c){b.attachEvent?b.attachEvent("on"+d,c):b.addEventListener(d,c,!1)}function p(b,d,c){b.attachEvent?b.detachEvent("on"+d,c):b.removeEventListener(d,c,!1)}function t(b){b=b||l.event;return b.target||b.srcElement}
function u(b,d){var c=g.createElement("SCRIPT"),a=!1,h;c.src=b;c.onload=c.onreadystatechange=function(){h=c.readyState||"complete";a||"loaded"!==h&&"complete"!==h||(a=!0,c.onload=c.onreadystatechange=null,c.parentNode.removeChild(c),d&&d())};w.parentNode.appendChild(c)}var w,y=g&&g.getElementsByTagName("SCRIPT");w=y[y.length-1];var z=Array.prototype.slice;function A(b,d){var c;c|=0;b=B(b);var a=b.length,h=b.indexOf,e=h?h.call(b,d,c):-1;if(!h)for(;c<a&&!~e;c++)e=b[c]===d?c:e;return e}function C(b){var d=Array.isArray;return d?d(b):"[object Array]"===Object.prototype.toString.call(b)}function D(b,d){b=B(b);var c=b.length,a=0,h=0,e=b.filter,f=e?e.call(b,d,void 0):[];if(!e)for(;a<c;)e=b[a++],d.call(void 0,e,a,b)&&(f[h++]=e);return f}
function E(b,d){b=B(b);var c=b.length,a=0,h=b.forEach;if(h)h.call(b,d,void 0);else for(;a<c;)d.call(void 0,b[a],a++,b)}function B(b){return C(b)?b:z.call(b)};var F={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,trackOrientation:1,nonInteraction:["form","print","scroll","video","orientation"],debugMode:/[?&]debug=1/.test(location.search)},G=/\.([0-9a-z]+)(?:[\?#]|$)/i,H=l.GoogleAnalyticsObject||"ga";
function I(b){var d=B(arguments);d[0]=d[0]?"social":"event";J(d);var c=l.TagLoader;var a=l.s;var h=[],e=1;if(c&&a&&a instanceof c){for(;e<d.length;e++)c="prop"+e,h.push(c),a[c]=d[e];a.linkTrackEvents="None";a.linkTrackVars=h.join(",");K([a],"tl",[a,"download"===d[1]?"d":"o",d[0]])}a=[].concat(d);"social"==a[0]&&(a[1]="social:"+a.splice(2,1,a[1])[0]);a=a.slice(1);K([l],"ClickTaleEvent",[a.join(":")]);K([l],"__utmTrackEvent",a);l._hmt&&K([l._hmt],"push",[["_trackEvent"].concat(a)]);if(l._gat||l._gaq)a=
l._gat&&l._gat._getTrackers&&l._gat._getTrackers(),d=L(d)?d.concat([1]):d,d[0]={social:"_trackSocial",event:"_trackEvent"}[d[0]],a?K(a,d[0],d.slice(1)):l._gaq&&K([l._gaq],"push",[d])}
function M(){function b(){N=l._komito||{};for(d in F)d in N||(N[d]=F[d]);O&&new O;P&&new P;Q&&new Q;S&&new S;T&&new T;N.trackMedia&&(U&&new U,V&&new V,W&&new W);var c={trackFacebook:X,trackLinkedIn:Y,trackTwitter:aa,trackUsers:ba},a;for(a in c)N[a]&&new c[a]}var d=g.readyState;"interactive"==d||"complete"==d?setTimeout(b,1E3):n(l,"DOMContentLoaded",b)}
function J(b){if("function"===typeof l[H]){var d=l[H].getAll&&l[H].getAll(),c=N.trackingIds;d&&c&&(C(c)||(c=[""+c]),d=D(d,function(a){a=a.get("trackingId");var b=0<=A(c,a);Z(a,b);return b}));b=L(b)?b.concat([{nonInteraction:1}]):b;d&&K(d,"send",b)}}function K(b,d,c){var a=b.length;for(Z(d,c);a;){var h=b[--a];"function"===typeof h[d]&&h[d].apply(h,c)}}function Z(b){var d=l.console;N.debugMode&&d&&d.log.apply(d,arguments)}function L(b){return 0<=A(N.nonInteraction,b[1].split(/\W/)[0])}var N={};
"web.archive.org"!==location.hostname&&M();function O(){function b(c){c=t(c);var a=c.elements,h=a.length,e=0,f=c.getAttribute("action"),k;if(!(k=c.getAttribute("name")||c.getAttribute("id")||c.className.replace(/\W+/g,"-"))&&(k=f)){k=0;for(var x=f.length,q=0,r=0;r<x;)k^=f.charCodeAt(r++)<<q,q+=8,q%=24;k=k.toString(36).toUpperCase()}for(f=k||"form-"+ ++d;e<h;)k=a[e++],k.name&&I(0,"form",f,k.name+":"+(k.type||k.tagName));p(c,"submit",b)}var d=0;(function(){if(N.trackForms)for(var c=g.forms,a=c.length;a;)n(c[--a],"submit",b)})()};function P(){function b(c){c=a(c);var d="outbound",k=c.hostname,f=c.pathname.split("/"),v=h(c),R=e[k.replace(/^www\./,"")];I(0,d,k,v);R&&("twitter.com"===k.substr(-11)&&"intent"===f[f.length-2]&&(d="intent-"+f.pop()),I(1,R,d,v));p(c,"mousedown",b)}function d(c){c=a(c);var b=h(c),k=(b.match(G)||[""]).pop().toLowerCase();I(0,"download",k,b);p(c,"mousedown",d)}function c(b){b=a(b);var d=b.protocol.slice(0,-1),e=h(b);f.test(e)||(I(0,"cta:"+d,e.slice(d.length+1).split("?")[0],e),p(b,"mousedown",c))}function a(a){for(a=
t(a);a&&"A"!==a.tagName;)a=a.parentNode;return a}function h(a){return a.href||a.getAttribute("href")||""}var e={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo",
"reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},f=/^(https?:)?\/\//;(function(){for(var a=g&&g.getElementsByTagName("A"),e=a.length;e;){var q=a[--e],r=h(q),v=f.test(r);r=(r.match(G)||[""]).pop().toLowerCase();N.trackOutbound&&v&&!~q.hostname.indexOf(location.hostname)&&n(q,"mousedown",b);N.trackDownloads&&r&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,".indexOf(","+
r+",")&&n(q,"mousedown",d);N.trackActions&&!v&&n(q,"mousedown",c)}})()};function T(){function b(a){I(0,"orientation","change",d(a))}function d(a){var c=screen.orientation||screen.mozOrientation||screen.msOrientation;return(c?c.type:a.matches?"portrait":"landscape").split("-")[0]}var c;(function(){if((m.maxTouchPoints||"ontouchstart"in g)&&N.trackOrientation){var a=l.matchMedia;c=a&&a("(orientation: portrait)");I(0,"orientation","initial",d(c));c?c.addListener(b):n(l,"orientationchange",b)}})()};function Q(){function b(){I(0,"print",g.title,location.href);d?d.removeListener(b):p(l,"afterprint",b);d=b=null}var d;(function(){if(N.trackPrint){var c=l.matchMedia;(d=c&&c("print"))?d.addListener(b):n(l,"afterprint",b)}})()};function S(){(function(){if(N.trackScroll){var b={25:0,50:0,75:0,100:0},d=g.documentElement,c=g.body,a;n(l,"scroll",function(){(a=25*~~((d.scrollTop||c.scrollTop)/((d.scrollHeight||c.offsetHeight)-(d.clientHeight||l.innerHeight))*100/25))&&a in b&&!b[a]&&(b[a]=1,I(0,"scroll","depth",a+"%"))})}})()};function U(){function b(b){for(var c=[],a=arguments.length,d,e;a;)for(d=arguments[--a],d=g&&g.getElementsByTagName(d),e=0;e<d.length;)c.push(d[e++]);return c}(function(){function d(a){e=t(a);f=a.type;~f.indexOf("fullscreen")&&(f=g.fullScreen||g.mozFullScreen||g.webkitIsFullScreen?"fullscreen":"");f&&I(0,e.tagName.toLowerCase()+":html5",f,e.currentSrc||e.src)}for(var c="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),a=b("AUDIO","VIDEO"),h=a.length,e,f,k;h--;)for(e=
a[h],k=0;6>k;)n(e,c[k++],d)})()};function V(){function b(a){var c=l.Vimeo&&l.Vimeo.Player;if(c)for(var b=a.length,f;b;)f=a[--b],d(new c(f),f.src.split("?")[0])}function d(a,c){a.on("ended",function(){I(0,"video:vimeo","ended",c)});a.on("play",function(){I(0,"video:vimeo","play",c)});a.on("pause",function(){I(0,"video:vimeo","pause",c)})}var c=/^(https?:)?\/\/player\.vimeo\.com\/video\/\d+/;(function(){for(var a=g&&g.getElementsByTagName("IFRAME"),d=a.length,e=[],f;d;)f=a[--d],c.test(f.src)&&e.push(f);e.length&&(l.Vimeo&&l.Vimeo.Player?
b(e):u("https://player.vimeo.com/api/player.js",function(){b(e)}))})()};function W(){function b(c){var a=["ended","play","pause"][c.data];a&&I(0,"video:youtube",a,c.target.getVideoUrl())}var d=/^(https?:)?\/\/(www\.)?youtube(\-nocookie)?\.com\/(embed|watch|v)/;(function(){for(var c=g&&g.getElementsByTagName("IFRAME"),a=c.length,h=0,e=[],f,k;h<a;)f=c[h++],k=f.src,d.test(k)&&(0>k.indexOf("enablejsapi")&&(f.src+=(~k.indexOf("?")?"&":"?")+"enablejsapi=1"),e.push(f));if(a=e.length)l.onYouTubeIframeAPIReady=function(){for(h=0;h<a;)n(new l.YT.Player(e[h++]),"onStateChange",
b)},l.YT||u("https://www.youtube.com/iframe_api")})()};function X(){function b(){if(9>c++){var a=l.FB;if(a=a&&a.Event&&a.Event.subscribe)try{a("edge.create",function(){d("like")}),a("edge.remove",function(){d("unlike")}),a("message.send",function(){d("message")})}catch(h){}else setTimeout(b,5E3)}}function d(a){I(1,"Facebook",a,location.href)}var c=0;b()};function Y(){function b(c,a){function b(){d[a]||(d[a]=1,I(1,"LinkedIn",a,location.href),f&&p(f,"click",b))}var e=["cb_onsuccess",a,+new Date].join("_"),f;c.onsuccess=(c.onsuccess?c.onsuccess+",":"")+e;c.setAttribute("data-onsuccess",e);l[e]=b;setTimeout(function(){(f=c.previousSibling)&&"IN-widget"===f.className&&n(f,"click",b)},1E3)}var d={};(function(){for(var c=g&&g.getElementsByTagName("SCRIPT"),a=c.length,d=0,e,f;d<a;)e=c[d++],f=(e.getAttribute("type")||"").toLowerCase(),f.indexOf("in/")||b(e,
f.substr(3).split("+")[0])})()};function aa(){function b(){9>a++&&(l.twttr&&l.twttr.ready?l.twttr.ready(function(a){var b=N.trackTwitter,e,x,q;b=C(b)?b:d;E(b,function(b){a.events.bind(b,function(a){e=a.type;h[e]||(h[e]=1,x=(q=c[e])&&a.data&&a.data[q]||location.href,I(1,"Twitter",e,x))})})}):setTimeout(b,5E3))}var d=["tweet","retweet","like","follow"],c={follow:"screen_name",retweet:"source_tweet_id",like:"tweet_id",tweet:"url"},a=0,h={};b()};function ba(){var b={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1","Google+":"https://plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",Twitter:"https://twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"};
(function(){function d(a,c){n(a,"load",function(){I(1,c,"pageview",location.href)});a.src=b[c]}function c(a){a(function(a){a&&"unknown"!==a.status&&!h++&&I(1,"Facebook","pageview",location.href)})}function a(){var b=l.FB&&l.FB.getLoginStatus;b?(c(b),n(l,"message",function(a){try{"facebook.com"===a.origin.substr(-12)&&a.data&&~a.data.indexOf("xd_action=proxy_ready")&&c(b)}catch(q){}})):--e&&setTimeout(a,2E3)}var h=0,e=5,f;for(f in b)d(new Image(1,1),f);a()})()};
})();
