function e(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function t(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function r(){}var n=.7,i=1.4285714285714286,o="\\s*([+-]?\\d+)\\s*",a="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",l=/^#([0-9a-f]{3,8})$/,u=new RegExp(`^rgb\\(${o},${o},${o}\\)$`),h=new RegExp(`^rgb\\(${s},${s},${s}\\)$`),f=new RegExp(`^rgba\\(${o},${o},${o},${a}\\)$`),d=new RegExp(`^rgba\\(${s},${s},${s},${a}\\)$`),c=new RegExp(`^hsl\\(${a},${s},${s}\\)$`),g=new RegExp(`^hsla\\(${a},${s},${s},${a}\\)$`),p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(){return this.rgb().formatHex()}function m(){return this.rgb().formatRgb()}function y(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=l.exec(e))?(r=t[1].length,t=parseInt(t[1],16),6===r?w(t):3===r?new k(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===r?$(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===r?$(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=u.exec(e))?new k(t[1],t[2],t[3],1):(t=h.exec(e))?new k(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=f.exec(e))?$(t[1],t[2],t[3],t[4]):(t=d.exec(e))?$(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=c.exec(e))?P(t[1],t[2]/100,t[3]/100,1):(t=g.exec(e))?P(t[1],t[2]/100,t[3]/100,t[4]):p.hasOwnProperty(e)?w(p[e]):"transparent"===e?new k(NaN,NaN,NaN,0):null}function w(e){return new k(e>>16&255,e>>8&255,255&e,1)}function $(e,t,r,n){return n<=0&&(e=t=r=NaN),new k(e,t,r,n)}function v(e){return e instanceof r||(e=y(e)),e?new k((e=e.rgb()).r,e.g,e.b,e.opacity):new k}function x(e,t,r,n){return 1===arguments.length?v(e):new k(e,t,r,null==n?1:n)}function k(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}function N(){return`#${H(this.r)}${H(this.g)}${H(this.b)}`}function M(){const e=E(this.opacity);return`${1===e?"rgb(":"rgba("}${L(this.r)}, ${L(this.g)}, ${L(this.b)}${1===e?")":`, ${e})`}`}function E(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function L(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function H(e){return((e=L(e))<16?"0":"")+e.toString(16)}function P(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new R(e,t,r,n)}function q(e){if(e instanceof R)return new R(e.h,e.s,e.l,e.opacity);if(e instanceof r||(e=y(e)),!e)return new R;if(e instanceof R)return e;var t=(e=e.rgb()).r/255,n=e.g/255,i=e.b/255,o=Math.min(t,n,i),a=Math.max(t,n,i),s=NaN,l=a-o,u=(a+o)/2;return l?(s=t===a?(n-i)/l+6*(n<i):n===a?(i-t)/l+2:(t-n)/l+4,l/=u<.5?a+o:2-a-o,s*=60):l=u>0&&u<1?0:s,new R(s,l,u,e.opacity)}function R(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}function A(e){return(e=(e||0)%360)<0?e+360:e}function X(e){return Math.max(0,Math.min(1,e||0))}function Y(e,t,r){return 255*(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)}function _(e,t,r,n,i){var o=e*e,a=o*e;return((1-3*e+3*o-a)*t+(4-6*o+3*a)*r+(1+3*e+3*o-3*a)*n+a*i)/6}e(r,y,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:b,formatHex:b,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return q(this).formatHsl()},formatRgb:m,toString:m}),e(k,x,t(r,{brighter(e){return e=null==e?i:Math.pow(i,e),new k(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?n:Math.pow(n,e),new k(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new k(L(this.r),L(this.g),L(this.b),E(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:N,formatHex:N,formatHex8:function(){return`#${H(this.r)}${H(this.g)}${H(this.b)}${H(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:M,toString:M})),e(R,(function(e,t,r,n){return 1===arguments.length?q(e):new R(e,t,r,null==n?1:n)}),t(r,{brighter(e){return e=null==e?i:Math.pow(i,e),new R(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?n:Math.pow(n,e),new R(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new k(Y(e>=240?e-240:e+120,i,n),Y(e,i,n),Y(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new R(A(this.h),X(this.s),X(this.l),E(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=E(this.opacity);return`${1===e?"hsl(":"hsla("}${A(this.h)}, ${100*X(this.s)}%, ${100*X(this.l)}%${1===e?")":`, ${e})`}`}}));var z=e=>()=>e;function I(e,t){return function(r){return e+r*t}}function S(e){return 1==(e=+e)?T:function(t,r){return r-t?function(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}(t,r,e):z(isNaN(t)?r:t)}}function T(e,t){var r=t-e;return r?I(e,r):z(isNaN(e)?t:e)}(function e(t){var r=S(t);function n(e,t){var n=r((e=x(e)).r,(t=x(t)).r),i=r(e.g,t.g),o=r(e.b,t.b),a=T(e.opacity,t.opacity);return function(t){return e.r=n(t),e.g=i(t),e.b=o(t),e.opacity=a(t),e+""}}return n.gamma=e,n})(1);function j(e){return function(t){var r,n,i=t.length,o=new Array(i),a=new Array(i),s=new Array(i);for(r=0;r<i;++r)n=x(t[r]),o[r]=n.r||0,a[r]=n.g||0,s[r]=n.b||0;return o=e(o),a=e(a),s=e(s),n.opacity=1,function(e){return n.r=o(e),n.g=a(e),n.b=s(e),n+""}}}var O,V=j((function(e){var t=e.length-1;return function(r){var n=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),i=e[n],o=e[n+1],a=n>0?e[n-1]:2*i-o,s=n<t-1?e[n+2]:2*o-i;return _((r-n/t)*t,a,i,o,s)}})),W=(j((function(e){var t=e.length;return function(r){var n=Math.floor(((r%=1)<0?++r:r)*t),i=e[(n+t-1)%t],o=e[n%t],a=e[(n+1)%t],s=e[(n+2)%t];return _((r-n/t)*t,i,o,a,s)}})),new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map((function(e){for(var t=e.length/6|0,r=new Array(t),n=0;n<t;)r[n]="#"+e.slice(6*n,6*++n);return r}))),C=V((O=W)[O.length-1]);let F,B;function D(e){document.removeEventListener("pointerup",B),document.removeEventListener("pointermove",F),this.box.hidden=!0;const{clientX:t,clientY:r}=e,n=document.elementFromPoint(t,r);null!=n&&J(n)?K(this.box,n):null!=n?.parentNode&&J(n.parentNode)?K(this.box,n.parentNode):this.box.remove()}function G(e){const{box:t,offsetX:r,offsetY:n}=this,{pageX:i,pageY:o}=e,{top:a,left:s}=function(e,t,r,n,i){const{offsetWidth:o,offsetHeight:a}=e,{scrollWidth:s,scrollHeight:l}=document.documentElement,u={top:r-i,left:t-n,bottom:r-i+a,right:t-n+o};u.top<0&&(u.top=0);u.bottom>l&&(u.top=l-a,u.bottom=u.top+a);u.left<0&&(u.left=0);u.right>s&&(u.left=s-o,u.right=u.left+o);return u}(t,i,o,r,n);this.box.style.setProperty("--top",`${a}px`),this.box.style.setProperty("--left",`${s}px`),this.box.scrollIntoView()}function J(e){return"HTML"!==e.nodeName&&e.classList.contains("drop-zone")}function K(e,t){if(e.classList.remove("box_draggable"),"HTML"!==(r=t).nodeName&&r.classList.contains("drop-zone_2")){const{offsetTop:r,offsetLeft:n}=t,i=parseInt(e.style.getPropertyValue("--top")),o=parseInt(e.style.getPropertyValue("--left"));e.style.setProperty("--top",i-r+"px"),e.style.setProperty("--left",o-n+"px"),e.classList.add("box_position_absolute")}var r;t.append(e),e.hidden=!1}document.querySelector(".creation-zone").addEventListener("pointerdown",(function(e){const{target:{offsetTop:t,offsetLeft:r},offsetX:n,offsetY:i}=e,o=document.createElement("div");o.classList.add("box","box_draggable"),o.style.setProperty("--box-color",C(Math.random())),o.style.setProperty("--top",`${t}px`),o.style.setProperty("--left",`${r}px`),o.addEventListener("dragstart",(()=>!1)),document.body.prepend(o),F={handleEvent:G,box:o,offsetX:n,offsetY:i},B={handleEvent:D,box:o},document.addEventListener("pointerup",B),document.addEventListener("pointermove",F)}));
//# sourceMappingURL=index.a150725b.js.map