function e(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function t(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function r(){}var n=.7,i=1.4285714285714286,a="\\s*([+-]?\\d+)\\s*",o="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",s="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",l=/^#([0-9a-f]{3,8})$/,u=new RegExp(`^rgb\\(${a},${a},${a}\\)$`),h=new RegExp(`^rgb\\(${s},${s},${s}\\)$`),c=new RegExp(`^rgba\\(${a},${a},${a},${o}\\)$`),d=new RegExp(`^rgba\\(${s},${s},${s},${o}\\)$`),f=new RegExp(`^hsl\\(${o},${s},${s}\\)$`),g=new RegExp(`^hsla\\(${o},${s},${s},${o}\\)$`),p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function b(){return this.rgb().formatHex()}function y(){return this.rgb().formatRgb()}function m(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=l.exec(e))?(r=t[1].length,t=parseInt(t[1],16),6===r?w(t):3===r?new k(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===r?$(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===r?$(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=u.exec(e))?new k(t[1],t[2],t[3],1):(t=h.exec(e))?new k(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=c.exec(e))?$(t[1],t[2],t[3],t[4]):(t=d.exec(e))?$(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=f.exec(e))?P(t[1],t[2]/100,t[3]/100,1):(t=g.exec(e))?P(t[1],t[2]/100,t[3]/100,t[4]):p.hasOwnProperty(e)?w(p[e]):"transparent"===e?new k(NaN,NaN,NaN,0):null}function w(e){return new k(e>>16&255,e>>8&255,255&e,1)}function $(e,t,r,n){return n<=0&&(e=t=r=NaN),new k(e,t,r,n)}function v(e){return e instanceof r||(e=m(e)),e?new k((e=e.rgb()).r,e.g,e.b,e.opacity):new k}function x(e,t,r,n){return 1===arguments.length?v(e):new k(e,t,r,null==n?1:n)}function k(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}function N(){return`#${H(this.r)}${H(this.g)}${H(this.b)}`}function M(){const e=E(this.opacity);return`${1===e?"rgb(":"rgba("}${L(this.r)}, ${L(this.g)}, ${L(this.b)}${1===e?")":`, ${e})`}`}function E(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function L(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function H(e){return((e=L(e))<16?"0":"")+e.toString(16)}function P(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new q(e,t,r,n)}function R(e){if(e instanceof q)return new q(e.h,e.s,e.l,e.opacity);if(e instanceof r||(e=m(e)),!e)return new q;if(e instanceof q)return e;var t=(e=e.rgb()).r/255,n=e.g/255,i=e.b/255,a=Math.min(t,n,i),o=Math.max(t,n,i),s=NaN,l=o-a,u=(o+a)/2;return l?(s=t===o?(n-i)/l+6*(n<i):n===o?(i-t)/l+2:(t-n)/l+4,l/=u<.5?o+a:2-o-a,s*=60):l=u>0&&u<1?0:s,new q(s,l,u,e.opacity)}function q(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}function X(e){return(e=(e||0)%360)<0?e+360:e}function Y(e){return Math.max(0,Math.min(1,e||0))}function A(e,t,r){return 255*(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)}function _(e,t,r,n,i){var a=e*e,o=a*e;return((1-3*e+3*a-o)*t+(4-6*a+3*o)*r+(1+3*e+3*a-3*o)*n+o*i)/6}e(r,m,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:b,formatHex:b,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return R(this).formatHsl()},formatRgb:y,toString:y}),e(k,x,t(r,{brighter(e){return e=null==e?i:Math.pow(i,e),new k(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=null==e?n:Math.pow(n,e),new k(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new k(L(this.r),L(this.g),L(this.b),E(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:N,formatHex:N,formatHex8:function(){return`#${H(this.r)}${H(this.g)}${H(this.b)}${H(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:M,toString:M})),e(q,(function(e,t,r,n){return 1===arguments.length?R(e):new q(e,t,r,null==n?1:n)}),t(r,{brighter(e){return e=null==e?i:Math.pow(i,e),new q(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=null==e?n:Math.pow(n,e),new q(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+360*(this.h<0),t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new k(A(e>=240?e-240:e+120,i,n),A(e,i,n),A(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new q(X(this.h),Y(this.s),Y(this.l),E(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=E(this.opacity);return`${1===e?"hsl(":"hsla("}${X(this.h)}, ${100*Y(this.s)}%, ${100*Y(this.l)}%${1===e?")":`, ${e})`}`}}));var z=e=>()=>e;function C(e,t){return function(r){return e+r*t}}function S(e){return 1==(e=+e)?j:function(t,r){return r-t?function(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}(t,r,e):z(isNaN(t)?r:t)}}function j(e,t){var r=t-e;return r?C(e,r):z(isNaN(e)?t:e)}(function e(t){var r=S(t);function n(e,t){var n=r((e=x(e)).r,(t=x(t)).r),i=r(e.g,t.g),a=r(e.b,t.b),o=j(e.opacity,t.opacity);return function(t){return e.r=n(t),e.g=i(t),e.b=a(t),e.opacity=o(t),e+""}}return n.gamma=e,n})(1);function I(e){return function(t){var r,n,i=t.length,a=new Array(i),o=new Array(i),s=new Array(i);for(r=0;r<i;++r)n=x(t[r]),a[r]=n.r||0,o[r]=n.g||0,s[r]=n.b||0;return a=e(a),o=e(o),s=e(s),n.opacity=1,function(e){return n.r=a(e),n.g=o(e),n.b=s(e),n+""}}}var O,B=I((function(e){var t=e.length-1;return function(r){var n=r<=0?r=0:r>=1?(r=1,t-1):Math.floor(r*t),i=e[n],a=e[n+1],o=n>0?e[n-1]:2*i-a,s=n<t-1?e[n+2]:2*a-i;return _((r-n/t)*t,o,i,a,s)}})),V=(I((function(e){var t=e.length;return function(r){var n=Math.floor(((r%=1)<0?++r:r)*t),i=e[(n+t-1)%t],a=e[n%t],o=e[(n+1)%t],s=e[(n+2)%t];return _((r-n/t)*t,i,a,o,s)}})),new Array(3).concat("fc8d59ffffbf99d594","d7191cfdae61abdda42b83ba","d7191cfdae61ffffbfabdda42b83ba","d53e4ffc8d59fee08be6f59899d5943288bd","d53e4ffc8d59fee08bffffbfe6f59899d5943288bd","d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd","d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd","9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2","9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map((function(e){for(var t=e.length/6|0,r=new Array(t),n=0;n<t;)r[n]="#"+e.slice(6*n,6*++n);return r}))),W=B((O=V)[O.length-1]);let F;function D(e){const{target:t,clientX:r,clientY:n}=e;document.removeEventListener("pointermove",F),t.parentNode.removeChild(t);const i=document.elementFromPoint(r,n);null!=i&&(J(i)?K(t,i):null!=i.parentNode&&J(i.parentNode)&&K(t,i.parentNode))}function G(e){const{pageX:t,pageY:r}=e,{scrollWidth:n,scrollHeight:i}=document.documentElement,{offsetWidth:a,offsetHeight:o}=this.box;let s=t-this.offsetX,l=r-this.offsetY;const u=a+s,h=o+l;s<0&&(s=0),u>n&&(s=n-a),l<0?l=0:h>i&&(s=i-o),this.box.style.setProperty("--x",`${s}px`),this.box.style.setProperty("--y",`${l}px`)}function J(e){return e.classList.contains("drop-zone")}function K(e,t){if(e.removeEventListener("pointerup",D),e.classList.remove("box_draggable"),t.classList.contains("drop-zone_2")){const{x:r,y:n}=t.getBoundingClientRect(),{scrollX:i,scrollY:a}=window,o=parseInt(e.style.getPropertyValue("--x")),s=parseInt(e.style.getPropertyValue("--y"));e.style.setProperty("--x",o-r-i+"px"),e.style.setProperty("--y",s-n-a+"px"),e.classList.add("box_position_absolute")}t.append(e)}document.querySelector(".creation-zone").addEventListener("pointerdown",(function(e){const{target:t,offsetX:r,offsetY:n,clientX:i,clientY:a}=e,{x:o,y:s}=t.getBoundingClientRect(),l=document.createElement("div");l.classList.add("box","box_draggable"),l.style.setProperty("--box-color",W(Math.random())),l.style.setProperty("--x",`${o}px`),l.style.setProperty("--y",`${s}px`),l.addEventListener("dragstart",(()=>!1)),l.addEventListener("pointerup",D,{passive:!0}),document.body.prepend(l),F={handleEvent:G,box:l,offsetX:r,offsetY:n},document.addEventListener("pointermove",F)}));
//# sourceMappingURL=index.344c4f20.js.map