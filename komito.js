(function(d,q,m){function K(b){b=x(b);var a="outbound",c=b[G],e=V[c.replace("www.","")],d=b.pathname.split("/"),g=b[k];l(0,a,c,g);e&&("twitter.com"===c[E](-11)&&"intent"===d[d[n]-2]&&(a="intent-"+d.pop()),l(1,e,a,g));y(b,u,K)}function L(b){b=x(b);l(0,"download",(b[k].match(M)||[""]).pop()[F](),b[k]);y(b,u,L)}function N(b){b=x(b);var a=b.protocol[v](0,-1);l(0,"cta:"+a,b[k][v](a[n]+1).split("?")[0],m[k]);y(b,u,N)}function O(b){b=x(b);for(var a=b.elements,c=0,e;c<a[n];)e=a[c++],e.name&&l(0,"form",b[H]("name")||
b[H]("id")||"form",e.name+":"+(e.type||e.tagName));y(b,P,O)}function z(){z.a=z.a||0;var b={},a,c,e;9>z.a++&&(d.twttr&&d.twttr.ready?d.__twitterIntentHandler||(p(d,A,function(h){try{"twitter.com"===h.origin[E](-11)&&h.data&&(e=(c=d.JSON&&d.JSON.parse(h.data))&&c.params)&&"trigger"===c.method&&(a=e[0],"click"===a&&e[1]&&(a+="-"+e[1].region),b[a]||(b[a]=1,l(1,"Twitter",a,m[k])))}catch(g){}}),d.twttr.ready(function(a){a.events.bind(A,function(){})}),d.__twitterIntentHandler=!0):setTimeout(z,5E3))}function B(){function b(a){l(1,
"Facebook",a,m[k])}B.a=B.a||0;if(9>B.a++){var a=d.FB;if(a=a&&a.Event&&a.Event.subscribe)try{a("edge.create",function(){b("like")}),a("edge.remove",function(){b("unlike")}),a(A+".send",function(){b(A)})}catch(c){}else setTimeout(B,5E3)}}function W(){function b(a,b){var c=["cb_onsuccess",b,+new Date].join("_");a.onsuccess=(a.onsuccess?a.onsuccess+",":"")+c;d[c]=function(){l(1,"LinkedIn",b,m[k])}}for(var a=C("SCRIPT"),c=a[n],e=0,h,g;e<c;)h=a[e++],g=(h[H]("type")||"")[F](),!g[r]("in/")&&b(h,g[E](3))}
function X(){function b(a,b){p(a,"load",function(){l(1,b,"pageview",m[k])});a.src=Q[b]}function a(a){a(function(a){a&&"unknown"!==a.status&&!e++&&l(1,"Facebook","pageview",m[k])})}function c(){var b=d.FB&&d.FB.getLoginStatus;b?(a(b),p(d,A,function(c){try{"facebook.com"===c.origin[E](-12)&&c.data&&~c.data[r]("xd_action=proxy_ready")&&a(b)}catch(e){}})):--h&&setTimeout(c,2E3)}var e=0,h=5,g;for(g in Q)b(new Image(1,1),g);c()}function Y(){function b(){l(0,"print",q.title,m[k]);c&&c.removeListener(b);
y(d,"afterprint",b);b=null}var a=d.matchMedia,c=a&&a("print");c&&c.addListener(b);p(d,"afterprint",b)}function Z(){function b(a){w=x(a);f=w.currentSrc||w.src;m=w.tagName[F]();k=a.type;~k[r]("fullscreen")?(q.fullScreen||q.mozFullScreen||q.webkitIsFullScreen)&&l(0,m+":html5","fullscreen",f):l(0,m+":html5",k,f)}for(var a="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),c=aa("AUDIO","VIDEO"),e=c[n]>>>0,d=0,g,w,f,k,m;d<e;)for(w=c[d++],g=0;6>g;)p(w,a[g++],b);ba()}
function ba(){function b(a){(g=["ended","play","pause"][a.data])&&l(0,"video:youtube",g,a[R].getVideoUrl())}for(var a=C("IFRAME"),c=a[n],e=0,h=[],g,f,k;e<c;)f=a[e++],k=f.src,/^(https?:)?\/\/(www\.)?youtube\.com\/embed/.test(k)&&(0>k[r]("enablejsapi")&&(f.src+=(~k[r]("?")?"&":"?")+"enablejsapi=1"),h[D](f));if(c=h[n])d.onYouTubeIframeAPIReady=function(){for(e=0;e<c;)p(new d.YT.Player(h[e++]),"onStateChange",b)},d.YT||(C("HEAD")[0].appendChild(q.createElement("SCRIPT")).src="//www.youtube.com/iframe_api")}
function ca(){var b={25:0,50:0,75:0,100:0},a=q.documentElement,c;p(d,"scroll",function(){(c=25*~~((a.scrollTop+q.body.scrollTop)/(a.scrollHeight-a.clientHeight)*100/25))&&!b[c]&&(b[c]=1,l(0,"scroll","depth",c+"%"))})}function p(b,a,c){b[S]?b[S](a,c,!1):b.attachEvent("on"+a,c)}function y(b,a,c){b[T]?b[T](a,c,!1):b.detachEvent("on"+a,c)}function x(b){return b[R]||b[da]}function l(b){var a=Array.prototype[v].call(arguments,0),c;a[0]=a[0]?I:"event";"function"===typeof d[J]&&(c=d[J].getAll&&d[J].getAll())&&
t(c,"send",a);c=a;var e=d.TagLoader,h=d.s,g=[],f=1;if(e&&h&&h instanceof e){for(;f<c[n];f++)e="prop"+f,g[D](e),h[e]=c[f];h.linkTrackEvents="None";h.linkTrackVars=g.join(",");t([h],"tl",[h,"download"===c[1]?"d":"o",c[0]])}c=[].concat(a);I==c[0]&&(c[1]=I+":"+c.splice(2,1,c[1])[0]);c=c[v](1);t([d],"ClickTaleEvent",[c.join(":")]);t([d],"__utmTrackEvent",c);d._hmt&&t([d._hmt],D,[["_trackEvent"].concat(c)]);if(d._gat||d._gaq)c=d._gat&&d._gat._getTrackers&&d._gat._getTrackers(),a[0]={social:"_trackSocial",
event:"_trackEvent"}[a[0]],c?t(c,a[0],a[v](1)):d._gaq&&t([d._gaq],D,[a])}function t(b,a,c){var e=b[n]>>>0,d=0,f;for(ea(a,c);d<e;)f=b[d++],"function"===typeof f[a]&&f[a].apply(f,c)}function ea(b){var a=d.console;f.debugMode&&a&&a.log.apply(a,arguments)}function aa(b){for(var a=[],c=Array.prototype[v].call(arguments,0),e=0,e=0;e<c[n];)a[D].apply(a,C(c[e++]));return a}function C(b){return q.getElementsByTagName(b)}var U={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,
trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:/[?&]debug=1/.test(m.search)},V={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube",
"twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},Q={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1","Google+":"//plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",
Twitter:"//twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"},M=/\.([0-9a-z]+)(?:[\?#]|$)/i,J=d.GoogleAnalyticsObject||"ga",f=d._ega||d._komito||{},n="length",v="slice",D="push",k="href",G="hostname",H="getAttribute",r="indexOf",E="substr",F="toLowerCase",S="addEventListener",T="removeEventListener",A="message",u="mousedown",P="submit",I="social",da="srcElement",R="target";(function(){var b=0,a=C("A"),c=a[n],e;for(e in U)e in f||(f[e]=U[e]);for(;b<
c;){e=a[b++];var d=/^https?:$/.test(e.protocol),g=(e[k].match(M)||[""]).pop()[F]();f.trackOutbound&&d&&!~e[G][r](m[G])&&p(e,u,K);f.trackDownloads&&g&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,"[r](","+g+",")&&p(e,u,L);f.trackActions&&!d&&p(e,u,N)}if(f.trackForms)for(a=q.forms,c=a[n],b=0;b<c;)p(a[b++],P,O);f.trackTwitter&&z();f.trackFacebook&&B();f.trackLinkedIn&&W();f.trackUsers&&X();f.trackPrint&&Y();f.trackMedia&&
Z();f.trackScroll&&ca()})()})(window,document,location);
