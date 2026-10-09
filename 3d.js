var es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sp=0,Ph=1,rp=2;var Ls=1,op=2,Pr=3,ai=0,Qe=1,Ue=2,qe=0,Ir=1,Bi=2,Ih=3,Dh=4,ic=5;var qn=100,ap=101,lp=102,cp=103,up=104,Ns=200,hp=201,fp=202,dp=203,Lh=204,Nh=205,Wo=206,pp=207,Xo=208,mp=209,gp=210,_p=211,xp=212,vp=213,yp=214,vl=0,yl=1,Sl=2,mr=3,Ml=4,bl=5,Tl=6,El=7,Uh=0,Sp=1,Mp=2,li=0,qo=1,Yo=2,Zo=3,Jo=4,$o=5,Ko=6,Us=7;var Fh=300,is=301,Fs=302,sc=303,rc=304,jo=306,gn=1e3,gi=1001,wl=1002,Xe=1003,bp=1004;var Qo=1005;var Be=1006,oc=1007;var Si=1008;var xn=1009,Oh=1010,Bh=1011,Dr=1012,ac=1013,ci=1014,Yn=1015,Ve=1016,lc=1017,cc=1018,ss=1020,zh=35902,kh=35899,Vh=1021,Hh=1022,an=1023,xi=1026,Mi=1027,uc=1028,hc=1029,rs=1030,fc=1031;var dc=1033,ta=33776,ea=33777,na=33778,ia=33779,pc=35840,mc=35841,gc=35842,_c=35843,xc=36196,vc=37492,yc=37496,Sc=37488,Mc=37489,sa=37490,bc=37491,Tc=37808,Ec=37809,wc=37810,Ac=37811,Rc=37812,Cc=37813,Pc=37814,Ic=37815,Dc=37816,Lc=37817,Nc=37818,Uc=37819,Fc=37820,Oc=37821,Bc=36492,zc=36494,kc=36495,Vc=36283,Hc=36284,ra=36285,Gc=36286;var po=2300,Al=2301,gl=2302,_h=2303,xh=2400,vh=2401,yh=2402;var Tp=3200;var oa=0,Ep=1,Zn="",We="srgb",mo="srgb-linear",go="linear",me="srgb";var _l=7680;var wp=519,Ap=512,Rp=513,Cp=514,Wc=515,Pp=516,Ip=517,Xc=518,Dp=519,Lp=35044;var Gh="300 es",ei=2e3,gr=2001;function sg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Np(){let i=_r("canvas");return i.style.display="block",i}var xd={},xr=null;function Wh(...i){let t="THREE."+i.shift();xr?xr("log",t,...i):console.log(t,...i)}function Up(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=Up(i);let t="THREE."+i.shift();if(xr)xr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=Up(i);let t="THREE."+i.shift();if(xr)xr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ms(...i){let t=i.join(" ");t in xd||(xd[t]=!0,qt(...i))}function Fp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Op={[vl]:yl,[Sl]:Tl,[Ml]:El,[mr]:bl,[yl]:vl,[Tl]:Sl,[El]:Ml,[bl]:mr},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=1234567,dr=Math.PI/180,vr=180/Math.PI;function Os(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[e&63|128]+dn[e>>8&255]+"-"+dn[e>>16&255]+dn[e>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Xh(i,t){return(i%t+t)%t}function og(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ag(i,t,e){return i!==t?(e-i)/(t-i):0}function uo(i,t,e){return(1-e)*i+e*t}function lg(i,t,e,n){return uo(i,t,1-Math.exp(-e*n))}function cg(i,t=1){return t-Math.abs(Xh(i,t*2)-t)}function ug(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function dg(i,t){return i+Math.random()*(t-i)}function pg(i){return i*(.5-Math.random())}function mg(i){i!==void 0&&(vd=i);let t=vd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gg(i){return i*dr}function _g(i){return i*vr}function xg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function vg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sg(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qh={DEG2RAD:dr,RAD2DEG:vr,generateUUID:Os,clamp:jt,euclideanModulo:Xh,mapLinear:og,inverseLerp:ag,lerp:uo,damp:lg,pingpong:cg,smoothstep:ug,smootherstep:hg,randInt:fg,randFloat:dg,randFloatSpread:pg,seededRandom:mg,degToRad:gg,radToDeg:_g,isPowerOfTwo:xg,ceilPowerOfTwo:vg,floorPowerOfTwo:yg,setQuaternionFromProperEuler:Sg,normalize:En,denormalize:fr},jh=class jh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jh.prototype.isVector2=!0;var et=jh,je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*v;p<0&&(u=-u,f=-f,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),y=Math.sin(_);g=Math.sin(g*_)/y,a=Math.sin(a*_)/y,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+v*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+v*a;let _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qh=class Qh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wu.copy(this).projectOnVector(t),this.sub(Wu)}reflect(t){return this.sub(Wu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qh.prototype.isVector3=!0;var I=Qh,Wu=new I,yd=new je,tf=class tf{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=s[0],p=s[3],g=s[6],_=s[1],y=s[4],x=s[7],S=s[2],b=s[5],E=s[8];return r[0]=o*v+a*_+l*S,r[3]=o*p+a*y+l*b,r[6]=o*g+a*x+l*E,r[1]=c*v+h*_+d*S,r[4]=c*p+h*y+d*b,r[7]=c*g+h*x+d*E,r[2]=u*v+f*_+m*S,r[5]=u*p+f*y+m*b,r[8]=u*g+f*x+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xu.makeScale(t,e)),this}rotate(t){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xu.makeRotation(-t)),this}translate(t,e){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tf.prototype.isMatrix3=!0;var Qt=tf,Xu=new Qt,Sd=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Md=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){let i={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mo]:{primaries:t,whitePoint:n,transfer:go,toXYZ:Sd,fromXYZ:Md,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Sd,fromXYZ:Md,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}var oe=Mg();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,Rl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Js===void 0&&(Js=_r("canvas")),Js.width=t.width,Js.height=t.height;let s=Js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bg=0,yr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qu(s[o].image)):r.push(qu(s[o]))}else r=qu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Tg=0,Yu=new I,_n=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gi,s=gi,r=Be,o=Si,a=an,l=xn,c=i.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Os(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yu).x}get height(){return this.source.getSize(Yu).y}get depth(){return this.source.getSize(Yu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gn:t.x=t.x-Math.floor(t.x);break;case gi:t.x=t.x<0?0:1;break;case wl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gn:t.y=t.y-Math.floor(t.y);break;case gi:t.y=t.y<0?0:1;break;case wl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Fh;_n.DEFAULT_ANISOTROPY=1;var ef=class ef{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,S=(g+1)/2,b=(h+u)/4,E=(d+v)/4,M=(m+p)/4;return y>x&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=E/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=M/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=E/r,s=M/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ef.prototype.isVector4=!0;var Ne=ef,Cl=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new _n(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends Cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_o=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends _n{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var nc=class nc{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,v,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,v=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Eg,t,wg)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Xi.crossVectors(n,Un),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Xi.crossVectors(n,Un)),Xi.normalize(),ka.crossVectors(Un,Xi),s[0]=Xi.x,s[4]=ka.x,s[8]=Un.x,s[1]=Xi.y,s[5]=ka.y,s[9]=Un.y,s[2]=Xi.z,s[6]=ka.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],y=n[7],x=n[11],S=n[15],b=s[0],E=s[4],M=s[8],T=s[12],w=s[1],C=s[5],P=s[9],N=s[13],D=s[2],U=s[6],H=s[10],X=s[14],rt=s[3],W=s[7],tt=s[11],Q=s[15];return r[0]=o*b+a*w+l*D+c*rt,r[4]=o*E+a*C+l*U+c*W,r[8]=o*M+a*P+l*H+c*tt,r[12]=o*T+a*N+l*X+c*Q,r[1]=h*b+d*w+u*D+f*rt,r[5]=h*E+d*C+u*U+f*W,r[9]=h*M+d*P+u*H+f*tt,r[13]=h*T+d*N+u*X+f*Q,r[2]=m*b+v*w+p*D+g*rt,r[6]=m*E+v*C+p*U+g*W,r[10]=m*M+v*P+p*H+g*tt,r[14]=m*T+v*N+p*X+g*Q,r[3]=_*b+y*w+x*D+S*rt,r[7]=_*E+y*C+x*U+S*W,r[11]=_*M+y*P+x*H+S*tt,r[15]=_*T+y*N+x*X+S*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],p=t[11],g=t[15],_=l*f-c*u,y=a*f-c*d,x=a*u-l*d,S=o*f-c*h,b=o*u-l*h,E=o*d-a*h;return e*(v*_-p*y+g*x)-n*(m*_-p*S+g*b)+s*(m*y-v*S+g*E)-r*(m*x-v*b+p*E)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],p=t[14],g=t[15],_=e*a-n*o,y=e*l-s*o,x=e*c-r*o,S=n*l-s*a,b=n*c-r*a,E=s*c-r*l,M=h*v-d*m,T=h*p-u*m,w=h*g-f*m,C=d*p-u*v,P=d*g-f*v,N=u*g-f*p,D=_*N-y*P+x*C+S*w-b*T+E*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return t[0]=(a*N-l*P+c*C)*U,t[1]=(s*P-n*N-r*C)*U,t[2]=(v*E-p*b+g*S)*U,t[3]=(u*b-d*E-f*S)*U,t[4]=(l*w-o*N-c*T)*U,t[5]=(e*N-s*w+r*T)*U,t[6]=(p*x-m*E-g*y)*U,t[7]=(h*E-u*x+f*y)*U,t[8]=(o*P-a*w+c*M)*U,t[9]=(n*w-e*P-r*M)*U,t[10]=(m*b-v*x+g*_)*U,t[11]=(d*x-h*b-f*_)*U,t[12]=(a*T-o*C-l*M)*U,t[13]=(e*C-n*T+s*M)*U,t[14]=(v*y-m*S-p*_)*U,t[15]=(h*S-d*y+u*_)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,v=o*h,p=o*d,g=a*d,_=l*c,y=l*h,x=l*d,S=n.x,b=n.y,E=n.z;return s[0]=(1-(v+g))*S,s[1]=(f+x)*S,s[2]=(m-y)*S,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(u+g))*b,s[6]=(p+_)*b,s[7]=0,s[8]=(m+y)*E,s[9]=(p-_)*E,s[10]=(1-(u+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$s.set(s[0],s[1],s[2]).length(),a=$s.set(s[4],s[5],s[6]).length(),l=$s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);let c=1/o,h=1/a,d=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,e.setFromRotationMatrix(jn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ei,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===ei)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===gr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ei,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===ei)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===gr)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};nc.prototype.isMatrix4=!0;var Yt=nc,$s=new I,jn=new Yt,Eg=new I(0,0,0),wg=new I(1,1,1),Xi=new I,ka=new I,Un=new I,bd=new Yt,Td=new je,Ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Td.setFromEuler(this),this.setFromQuaternion(Td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ag=0,Ed=new I,Ks=new je,Ri=new Yt,Va=new I,no=new I,Rg=new I,Cg=new je,wd=new I(1,0,0),Ad=new I(0,1,0),Rd=new I(0,0,1),Cd={type:"added"},Pg={type:"removed"},js={type:"childadded",child:null},Zu={type:"childremoved",child:null},$e=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Ni,n=new je,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Qt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(wd,t)}rotateY(t){return this.rotateOnAxis(Ad,t)}rotateZ(t){return this.rotateOnAxis(Rd,t)}translateOnAxis(t,e){return Ed.copy(t).applyQuaternion(this.quaternion),this.position.add(Ed.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wd,t)}translateY(t){return this.translateOnAxis(Ad,t)}translateZ(t){return this.translateOnAxis(Rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Va.copy(t):Va.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(no,Va,this.up):Ri.lookAt(Va,no,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cd),js.child=t,this.dispatchEvent(js),js.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pg),Zu.child=t,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cd),js.child=t,this.dispatchEvent(js),js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,Rg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Cg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new I(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oe=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ig={type:"move"},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Ju(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Xh(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ju(o,r,t+1/3),this.g=Ju(o,r,t),this.b=Ju(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=Bp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return oe.workingToColorSpace(pn.copy(this),t),Math.round(jt(pn.r*255,0,255))*65536+Math.round(jt(pn.g*255,0,255))*256+Math.round(jt(pn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=We){oe.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(Ha);let n=uo(qi.h,Ha.h,e),s=uo(qi.s,Ha.s,e),r=uo(qi.l,Ha.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Pt;Pt.NAMES=Bp;var xo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bs=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Qn=new I,Ci=new I,$u=new I,Pi=new I,Qs=new I,tr=new I,Pd=new I,Ku=new I,ju=new I,Qu=new I,th=new Ne,eh=new Ne,nh=new Ne,cn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Ci.subVectors(n,e),$u.subVectors(t,e);let o=Qn.dot(Qn),a=Qn.dot(Ci),l=Qn.dot($u),c=Ci.dot(Ci),h=Ci.dot($u),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(t,e),eh.fromBufferAttribute(t,n),nh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(th,r.x),o.addScaledVector(eh,r.y),o.addScaledVector(nh,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Ci.subVectors(t,e),Qn.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Qn.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Qs.subVectors(s,n),tr.subVectors(r,n),Ku.subVectors(t,n);let l=Qs.dot(Ku),c=tr.dot(Ku);if(l<=0&&c<=0)return e.copy(n);ju.subVectors(t,s);let h=Qs.dot(ju),d=tr.dot(ju);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qs,o);Qu.subVectors(t,r);let f=Qs.dot(Qu),m=tr.dot(Qu);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(tr,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return Pd.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Pd,a);let g=1/(p+v+u);return o=v*g,a=u*g,e.copy(n).addScaledVector(Qs,o).addScaledVector(tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pe=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(t.matrixWorld),this.union(Ga)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),Wa.subVectors(this.max,io),er.subVectors(t.a,io),nr.subVectors(t.b,io),ir.subVectors(t.c,io),Yi.subVectors(nr,er),Zi.subVectors(ir,nr),xs.subVectors(er,ir);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-xs.z,xs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,xs.z,0,-xs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-xs.y,xs.x,0];return!ih(e,er,nr,ir,Wa)||(e=[1,0,0,0,1,0,0,0,1],!ih(e,er,nr,ir,Wa))?!1:(Xa.crossVectors(Yi,Zi),e=[Xa.x,Xa.y,Xa.z],ih(e,er,nr,ir,Wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new I,new I,new I,new I,new I,new I,new I,new I],ti=new I,Ga=new Pe,er=new I,nr=new I,ir=new I,Yi=new I,Zi=new I,xs=new I,io=new I,Wa=new I,Xa=new I,vs=new I;function ih(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vs.fromArray(i,r);let a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=t.dot(vs),c=e.dot(vs),h=n.dot(vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new I,qa=new et,Dg=0,se=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lp,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qa.fromBufferAttribute(this,e),qa.applyMatrix3(t),this.setXY(e,qa.x,qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix3(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var vo=class extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var yo=class extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lg=new Pe,so=new I,sh=new I,vi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);let e=so.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(sh)),this.expandByPoint(so.copy(t.center).sub(sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ng=0,Xn=new Yt,rh=new $e,sr=new I,Fn=new Pe,ro=new Pe,on=new I,ne=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sg(t)?yo:vo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Fn.min,ro.min),Fn.expandByPoint(on),on.addVectors(Fn.max,ro.max),Fn.expandByPoint(on)):(Fn.expandByPoint(ro.min),Fn.expandByPoint(ro.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(t,c),on.add(sr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new se(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new I,l[M]=new I;let c=new I,h=new I,d=new I,u=new et,f=new et,m=new et,v=new I,p=new I;function g(M,T,w){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,w),u.fromBufferAttribute(r,M),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,w),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(C),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[M].add(v),a[T].add(v),a[w].add(v),l[M].add(p),l[T].add(p),l[w].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let M=0,T=_.length;M<T;++M){let w=_[M],C=w.start,P=w.count;for(let N=C,D=C+P;N<D;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new I,x=new I,S=new I,b=new I;function E(M){S.fromBufferAttribute(s,M),b.copy(S);let T=a[M];y.copy(T),y.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(b,T);let C=x.dot(l[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,C)}for(let M=0,T=_.length;M<T;++M){let w=_[M],C=w.start,P=w.count;for(let N=C,D=C+P;N<D;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new se(u,h,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oh=new I,Ug=new I,Fg=new Qt,Je=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oh.subVectors(n,e).cross(Ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(oh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fg.getNormalMatrix(t),s=this.coplanarPoint(oh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Og=0,ii=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Ir,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Nh,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_l,this.stencilZFail=_l,this.stencilZPass=_l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Je().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Di=new I,ah=new I,Ya=new I,Za=new I,On=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ah.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),Za.copy(this.origin).sub(ah);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ya),a=Za.dot(this.direction),l=-Za.dot(Ya),c=Za.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ah).addScaledVector(Ya,u),f}intersectSphere(t,e){if(t.radius<0)return null;Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,v=e.y-o.y,p=e.z-o.z,g=n.x-o.x,_=n.y-o.y,y=n.z-o.z,x=Math.abs(l),S=Math.abs(c),b=Math.abs(h),E,M,T,w,C,P,N,D,U,H,X,rt;if(x>=S&&x>=b?(T=l,P=d,U=m,rt=g,l>=0?(E=c,M=h,w=u,C=f,N=v,D=p,H=_,X=y):(E=h,M=c,w=f,C=u,N=p,D=v,H=y,X=_)):S>=b?(T=c,P=u,U=v,rt=_,c>=0?(E=h,M=l,w=f,C=d,N=p,D=m,H=y,X=g):(E=l,M=h,w=d,C=f,N=m,D=p,H=g,X=y)):(T=h,P=f,U=p,rt=y,h>=0?(E=l,M=c,w=d,C=u,N=m,D=v,H=g,X=_):(E=c,M=l,w=u,C=d,N=v,D=m,H=_,X=g)),T===0)return null;let W=E/T,tt=M/T,Q=1/T,_t=w-W*P,O=C-tt*P,nt=N-W*U,K=D-tt*U,lt=H-W*rt,F=X-tt*rt,q=lt*K-F*nt,it=_t*F-O*lt,ft=nt*O-K*_t;if(s){if(q<0||it<0||ft<0)return null}else if((q<0||it<0||ft<0)&&(q>0||it>0||ft>0))return null;let pt=q+it+ft;if(pt===0)return null;let xt=Q*(q*P+it*U+ft*rt);return(pt>0?xt<0:xt>0)?null:this.at(xt/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},un=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Id=new Yt,ys=new On,Ja=new vi,Dd=new I,$a=new I,Ka=new I,ja=new I,lh=new I,Qa=new I,Ld=new I,tl=new I,de=class extends $e{constructor(t=new ne,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(lh.fromBufferAttribute(d,t),o?Qa.addScaledVector(lh,h):Qa.addScaledVector(lh.sub(e),h))}e.add(Qa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),ys.copy(t.ray).recast(t.near),!(Ja.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Ja,Dd)===null||ys.origin.distanceToSquared(Dd)>(t.far-t.near)**2))&&(Id.copy(r).invert(),ys.copy(t.ray).applyMatrix4(Id),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ys)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,S=y;x<S;x+=3){let b=a.getX(x),E=a.getX(x+1),M=a.getX(x+2);s=el(this,g,t,n,c,h,d,b,E,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let _=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);s=el(this,o,t,n,c,h,d,_,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=u.length;m<v;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,S=y;x<S;x+=3){let b=x,E=x+1,M=x+2;s=el(this,g,t,n,c,h,d,b,E,M),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){let _=p,y=p+1,x=p+2;s=el(this,o,t,n,c,h,d,_,y,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Bg(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ai,a),l===null)return null;tl.copy(a),tl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(tl);return c<e.near||c>e.far?null:{distance:c,point:tl.clone(),object:i}}function el(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,$a),i.getVertexPosition(l,Ka),i.getVertexPosition(c,ja);let h=Bg(i,t,e,n,$a,Ka,ja,Ld);if(h){let d=new I;cn.getBarycoord(Ld,$a,Ka,ja,d),s&&(h.uv=cn.getInterpolatedAttribute(s,a,l,c,d,new et)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,l,c,d,new et)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new I,materialIndex:0};cn.getNormal($a,Ka,ja,u.normal),h.face=u,h.barycoord=d}return h}var Pn=class extends _n{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Xe,h=Xe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var So=class extends se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},rr=new Yt,Nd=new Yt,nl=[],Ud=new Pe,zg=new Yt,oo=new de,ao=new vi,Mo=class extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new So(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),Ud.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(Ud)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),ao.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ao)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(oo.geometry=this.geometry,oo.material=this.material,oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),t.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),Nd.multiplyMatrices(n,rr),oo.matrixWorld=Nd,oo.raycast(t,nl);for(let o=0,a=nl.length;o<a;o++){let l=nl[o];l.instanceId=r,l.object=this,e.push(l)}nl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new So(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pn(new Float32Array(s*this.count),s,this.count,uc,Yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new vi,kg=new et(.5,.5),il=new I,br=class{constructor(t=new Je,e=new Je,n=new Je,s=new Je,r=new Je,o=new Je){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],_=r[12],y=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,g-m,S-_).normalize(),s[1].setComponents(c+o,f+h,g+m,S+_).normalize(),s[2].setComponents(c+a,f+d,g+v,S+y).normalize(),s[3].setComponents(c-a,f-d,g-v,S-y).normalize(),n)s[4].setComponents(l,u,p,x).normalize(),s[5].setComponents(c-l,f-u,g-p,S-x).normalize();else if(s[4].setComponents(c-l,f-u,g-p,S-x).normalize(),e===ei)s[5].setComponents(c+l,f+u,g+p,S+x).normalize();else if(e===gr)s[5].setComponents(l,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){Ss.center.set(0,0,0);let e=kg.distanceTo(t.center);return Ss.radius=.7071067811865476+e,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(il.x=s.normal.x>0?t.max.x:t.min.x,il.y=s.normal.y>0?t.max.y:t.min.y,il.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(il)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var si=class extends ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Il=new I,Dl=new I,Fd=new Yt,lo=new On,sl=new vi,ch=new I,Od=new I,Ts=class extends $e{constructor(t=new ne,e=new si){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Il.fromBufferAttribute(e,s-1),Dl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Il.distanceTo(Dl);t.setAttribute("lineDistance",new ce(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),sl.radius+=r,t.ray.intersectsSphere(sl)===!1)return;Fd.copy(s).invert(),lo.copy(t.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){let g=h.getX(v),_=h.getX(v+1),y=rl(this,t,lo,l,g,_,v);y&&e.push(y)}if(this.isLineLoop){let v=h.getX(m-1),p=h.getX(f),g=rl(this,t,lo,l,v,p,m-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){let g=rl(this,t,lo,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){let v=rl(this,t,lo,l,m-1,f,m-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rl(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Il.fromBufferAttribute(a,s),Dl.fromBufferAttribute(a,r),e.distanceSqToSegment(Il,Dl,ch,Od)>n)return;ch.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ch);if(!(c<t.near||c>t.far))return{distance:c,point:Od.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Bd=new I,zd=new I,Es=class extends Ts{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bd.fromBufferAttribute(e,s),zd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bd.distanceTo(zd);t.setAttribute("lineDistance",new ce(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bo=class extends Ts{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Tr=class extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kd=new Yt,Sh=new On,ol=new vi,al=new I,Ui=class extends $e{constructor(t=new ne,e=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(s),ol.radius+=r,t.ray.intersectsSphere(ol)===!1)return;kd.copy(s).invert(),Sh.copy(t.ray).applyMatrix4(kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,v=f;m<v;m++){let p=c.getX(m);al.fromBufferAttribute(d,p),Vd(al,p,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,v=f;m<v;m++)al.fromBufferAttribute(d,m),Vd(al,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vd(i,t,e,n,s,r,o){let a=Sh.distanceSqToPoint(i);if(a<e){let l=new I;Sh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var To=class extends _n{constructor(t=[],e=is,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ws=class extends _n{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends _n{constructor(t,e,n=ci,s,r,o,a=Xe,l=Xe,c,h=xi,d=1){if(h!==xi&&h!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ll=class extends yi{constructor(t,e=ci,n=is,s,r,o=Xe,a=Xe,l,c=xi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Eo=class extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fi=class i extends ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function m(v,p,g,_,y,x,S,b,E,M,T){let w=x/E,C=S/M,P=x/2,N=S/2,D=b/2,U=E+1,H=M+1,X=0,rt=0,W=new I;for(let tt=0;tt<H;tt++){let Q=tt*C-N;for(let _t=0;_t<U;_t++){let O=_t*w-P;W[v]=O*_,W[p]=Q*y,W[g]=D,c.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[g]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(_t/E),d.push(1-tt/M),X+=1}}for(let tt=0;tt<M;tt++)for(let Q=0;Q<E;Q++){let _t=u+Q+U*tt,O=u+Q+U*(tt+1),nt=u+(Q+1)+U*(tt+1),K=u+(Q+1)+U*tt;l.push(_t,O,K),l.push(O,nt,K),rt+=6}a.addGroup(f,rt,T),f+=rt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var As=class i extends ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ri=class i extends ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,v=[],p=n/2,g=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function _(){let x=new I,S=new I,b=0,E=(e-t)/n;for(let M=0;M<=r;M++){let T=[],w=M/r,C=w*(e-t)+t;for(let P=0;P<=s;P++){let N=P/s,D=N*l+a,U=Math.sin(D),H=Math.cos(D);S.x=C*U,S.y=-w*n+p,S.z=C*H,d.push(S.x,S.y,S.z),x.set(U,E,H).normalize(),u.push(x.x,x.y,x.z),f.push(N,1-w),T.push(m++)}v.push(T)}for(let M=0;M<s;M++)for(let T=0;T<r;T++){let w=v[T][M],C=v[T+1][M],P=v[T+1][M+1],N=v[T][M+1];(t>0||T!==0)&&(h.push(w,C,N),b+=3),(e>0||T!==r-1)&&(h.push(C,P,N),b+=3)}c.addGroup(g,b,0),g+=b}function y(x){let S=m,b=new et,E=new I,M=0,T=x===!0?t:e,w=x===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,p*w,0),u.push(0,w,0),f.push(.5,.5),m++;let C=m;for(let P=0;P<=s;P++){let D=P/s*l+a,U=Math.cos(D),H=Math.sin(D);E.x=T*H,E.y=p*w,E.z=T*U,d.push(E.x,E.y,E.z),u.push(0,w,0),b.x=U*.5+.5,b.y=H*.5*w+.5,f.push(b.x,b.y),m++}for(let P=0;P<s;P++){let N=S+P,D=C+P;x===!0?h.push(D,D+1,N):h.push(D+1,D,N),M+=3}c.addGroup(g,M,x===!0?1:2),g+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nl=class i extends ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new I,x=new I,S=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],y),f(e[b+1],x),f(e[b+2],S),l(y,x,S,_)}function l(_,y,x,S){let b=S+1,E=[];for(let M=0;M<=b;M++){E[M]=[];let T=_.clone().lerp(x,M/b),w=y.clone().lerp(x,M/b),C=b-M;for(let P=0;P<=C;P++)P===0&&M===b?E[M][P]=T:E[M][P]=T.clone().lerp(w,P/C)}for(let M=0;M<b;M++)for(let T=0;T<2*(b-M)-1;T++){let w=Math.floor(T/2);T%2===0?(u(E[M][w+1]),u(E[M+1][w]),u(E[M][w])):(u(E[M][w+1]),u(E[M+1][w+1]),u(E[M+1][w]))}}function c(_){let y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(_),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let _=new I;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let x=p(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;o.push(x,1-S)}m(),d()}function d(){for(let _=0;_<o.length;_+=6){let y=o[_+0],x=o[_+2],S=o[_+4],b=Math.max(y,x,S),E=Math.min(y,x,S);b>.9&&E<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){let x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){let _=new I,y=new I,x=new I,S=new I,b=new et,E=new et,M=new et;for(let T=0,w=0;T<r.length;T+=9,w+=6){_.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),b.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),M.set(o[w+4],o[w+5]),S.copy(_).add(y).add(x).divideScalar(3);let C=p(S);v(b,w+0,_,C),v(E,w+2,y,C),v(M,w+4,x,C)}}function v(_,y,x,S){S<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=S/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ll=new I,cl=new I,uh=new I,ul=new cn,Rs=class extends ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(dr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:v,b:p,c:g}=ul;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),ul.getNormal(uh),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){let y=(_+1)%3,x=d[_],S=d[y],b=ul[h[_]],E=ul[h[y]],M=`${x}_${S}`,T=`${S}_${x}`;T in u&&u[T]?(uh.dot(u[T].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(E.x,E.y,E.z)),u[T]=null):M in u||(u[M]={index0:c[_],index1:c[y],normal:uh.clone()})}}for(let m in u)if(u[m]){let{index0:v,index1:p}=u[m];ll.fromBufferAttribute(a,v),cl.fromBufferAttribute(a,p),f.push(ll.x,ll.y,ll.z),f.push(cl.x,cl.y,cl.z)}this.setAttribute("position",new ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new Yt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ul=class extends Er{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Hd=new I,Gd=new I,hh=new Yh,fh=new Yh,dh=new Yh,Fl=class extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Gd.subVectors(s[0],s[1]).add(s[0]),c=Gd);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Hd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),hh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,v,p),fh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,v,p),dh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,v,p)}else this.curveType==="catmullrom"&&(hh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),fh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),dh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(hh.calc(l),fh.calc(l),dh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wd(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Vg(i,t){let e=1-i;return e*e*t}function Hg(i,t){return 2*(1-i)*i*t}function Gg(i,t){return i*i*t}function ho(i,t,e,n){return Vg(i,t)+Hg(i,e)+Gg(i,n)}function Wg(i,t){let e=1-i;return e*e*e*t}function Xg(i,t){let e=1-i;return 3*e*e*i*t}function qg(i,t){return 3*(1-i)*i*i*t}function Yg(i,t){return i*i*i*t}function fo(i,t,e,n,s){return Wg(i,t)+Xg(i,e)+qg(i,n)+Yg(i,s)}var wo=class extends Bn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ol=class extends Bn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,s.x,r.x,o.x,a.x),fo(t,s.y,r.y,o.y,a.y),fo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends Bn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bl=class extends Bn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ro=class extends Bn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends Bn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ho(t,s.x,r.x,o.x),ho(t,s.y,r.y,o.y),ho(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Co=class extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Wd(a,l.x,c.x,h.x,d.x),Wd(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},Mh=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Fl,CubicBezierCurve:wo,CubicBezierCurve3:Ol,EllipseCurve:Er,LineCurve:Ao,LineCurve3:Bl,QuadraticBezierCurve:Ro,QuadraticBezierCurve3:zl,SplineCurve:Co}),kl=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Mh[s.type]().fromJSON(s))}return this}},Cs=class extends kl{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ao(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ro(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new wo(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Er(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},oi=class extends Cs{constructor(t){super(t),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Cs().fromJSON(s))}return this}};function Zg(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=zp(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Qg(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){let f=i[u],m=i[u+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Po(r,o,e,a,l,c,0),o}function zp(i,t,e,n,s){let r;if(s===u_(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Xd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Xd(o/n|0,i[o],i[o+1],r);return r&&wr(r,r.next)&&(Do(r),r=r.next),r}function Ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(Do(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Po(i,t,e,n,s,r,o){if(!i)return;!o&&r&&s_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$g(i,n,s,r):Jg(i)){t.push(l.i,i.i,c.i),Do(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Kg(Ps(i),t),Po(i,t,e,n,s,r,2)):o===2&&jg(i,t,e,n,s,r):Po(Ps(i),t,e,n,s,r,1);break}}}function Jg(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&co(s,a,r,l,o,c,m.x,m.y)&&Fe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $g(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),m=Math.min(h,d,u),v=Math.max(a,l,c),p=Math.max(h,d,u),g=bh(f,m,t,e,n),_=bh(v,p,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=g&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&co(a,h,l,d,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&co(a,h,l,d,c,u,x.x,x.y)&&Fe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&co(a,h,l,d,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&co(a,h,l,d,c,u,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Kg(i,t){let e=i;do{let n=e.prev,s=e.next.next;!wr(n,s)&&Vp(n,e,e.next,s)&&Io(n,s)&&Io(s,n)&&(t.push(n.i,e.i,s.i),Do(e),Do(e.next),e=i=s),e=e.next}while(e!==i);return Ps(e)}function jg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&a_(o,a)){let l=Hp(o,a);o=Ps(o,o.next),l=Ps(l,l.next),Po(o,t,e,n,s,r,0),Po(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qg(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=zp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(o_(c))}s.sort(t_);for(let r=0;r<s.length;r++)e=e_(s[r],e);return e}function t_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function e_(i,t){let e=n_(i,t);if(!e)return t;let n=Hp(e,i);return Ps(n,n.next),Ps(e,e.next)}function n_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(wr(i,e))return e;do{if(wr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&kp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Io(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&i_(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function i_(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function s_(i,t,e,n){let s=i;do s.z===0&&(s.z=bh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,r_(s)}function r_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function bh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function o_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function kp(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function co(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&kp(i,t,e,n,s,r,o,a)}function a_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!l_(i,t)&&(Io(i,t)&&Io(t,i)&&c_(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||wr(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wr(i,t){return i.x===t.x&&i.y===t.y}function Vp(i,t,e,n){let s=fl(Fe(i,t,e)),r=fl(Fe(i,t,n)),o=fl(Fe(e,n,i)),a=fl(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&hl(i,e,t)||r===0&&hl(i,n,t)||o===0&&hl(e,i,n)||a===0&&hl(e,t,n))}function hl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fl(i){return i>0?1:i<0?-1:0}function l_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Io(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function c_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hp(i,t){let e=Th(i.i,i.x,i.y),n=Th(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xd(i,t,e,n){let s=Th(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Do(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Th(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Eh=class{static triangulate(t,e,n=2){return Zg(t,e,n)}},_i=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];qd(t),Yd(n,t);let o=t.length;e.forEach(qd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Yd(n,e[l]);let a=Eh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function qd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var $i=class i extends ne{constructor(t=new oi([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:h_,y,x=!1,S,b,E,M;if(g){y=g.getSpacedPoints(h),x=!0,u=!1;let z=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,z),b=new I,E=new I,M=new I}u||(p=0,f=0,m=0,v=0);let T=a.extractPoints(c),w=T.shape,C=T.holes;if(!_i.isClockWise(w)){w=w.reverse();for(let z=0,Y=C.length;z<Y;z++){let at=C[z];_i.isClockWise(at)&&(C[z]=at.reverse())}}function N(z){let at=10000000000000001e-36,ut=z[0];for(let mt=1;mt<=z.length;mt++){let Lt=mt%z.length,Ot=z[Lt],Wt=Ot.x-ut.x,Zt=Ot.y-ut.y,B=Wt*Wt+Zt*Zt,ae=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ut.x),Math.abs(ut.y)),Kt=at*ae*ae;if(B<=Kt){z.splice(Lt,1),mt--;continue}ut=Ot}}N(w),C.forEach(N);let D=C.length,U=w;for(let z=0;z<D;z++){let Y=C[z];w=w.concat(Y)}function H(z,Y,at){return Y||Jt("ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(Y,at)}let X=w.length;function rt(z,Y,at){let ut,mt,Lt,Ot=z.x-Y.x,Wt=z.y-Y.y,Zt=at.x-z.x,B=at.y-z.y,ae=Ot*Ot+Wt*Wt,Kt=Ot*B-Wt*Zt;if(Math.abs(Kt)>Number.EPSILON){let L=Math.sqrt(ae),A=Math.sqrt(Zt*Zt+B*B),G=Y.x-Wt/L,Z=Y.y+Ot/L,st=at.x-B/A,gt=at.y+Zt/A,vt=((st-G)*B-(gt-Z)*Zt)/(Ot*B-Wt*Zt);ut=G+Ot*vt-z.x,mt=Z+Wt*vt-z.y;let ot=ut*ut+mt*mt;if(ot<=2)return new et(ut,mt);Lt=Math.sqrt(ot/2)}else{let L=!1;Ot>Number.EPSILON?Zt>Number.EPSILON&&(L=!0):Ot<-Number.EPSILON?Zt<-Number.EPSILON&&(L=!0):Math.sign(Wt)===Math.sign(B)&&(L=!0),L?(ut=-Wt,mt=Ot,Lt=Math.sqrt(ae)):(ut=Ot,mt=Wt,Lt=Math.sqrt(ae/2))}return new et(ut/Lt,mt/Lt)}let W=[];for(let z=0,Y=U.length,at=Y-1,ut=z+1;z<Y;z++,at++,ut++)at===Y&&(at=0),ut===Y&&(ut=0),W[z]=rt(U[z],U[at],U[ut]);let tt=[],Q,_t=W.concat();for(let z=0,Y=D;z<Y;z++){let at=C[z];Q=[];for(let ut=0,mt=at.length,Lt=mt-1,Ot=ut+1;ut<mt;ut++,Lt++,Ot++)Lt===mt&&(Lt=0),Ot===mt&&(Ot=0),Q[ut]=rt(at[ut],at[Lt],at[Ot]);tt.push(Q),_t=_t.concat(Q)}let O;if(p===0)O=_i.triangulateShape(U,C);else{let z=[],Y=[];for(let at=0;at<p;at++){let ut=at/p,mt=f*Math.cos(ut*Math.PI/2),Lt=m*Math.sin(ut*Math.PI/2)+v;for(let Ot=0,Wt=U.length;Ot<Wt;Ot++){let Zt=H(U[Ot],W[Ot],Lt);it(Zt.x,Zt.y,-mt),ut===0&&z.push(Zt)}for(let Ot=0,Wt=D;Ot<Wt;Ot++){let Zt=C[Ot];Q=tt[Ot];let B=[];for(let ae=0,Kt=Zt.length;ae<Kt;ae++){let L=H(Zt[ae],Q[ae],Lt);it(L.x,L.y,-mt),ut===0&&B.push(L)}ut===0&&Y.push(B)}}O=_i.triangulateShape(z,Y)}let nt=O.length,K=m+v;for(let z=0;z<X;z++){let Y=u?H(w[z],_t[z],K):w[z];x?(E.copy(S.normals[0]).multiplyScalar(Y.x),b.copy(S.binormals[0]).multiplyScalar(Y.y),M.copy(y[0]).add(E).add(b),it(M.x,M.y,M.z)):it(Y.x,Y.y,0)}for(let z=1;z<=h;z++)for(let Y=0;Y<X;Y++){let at=u?H(w[Y],_t[Y],K):w[Y];x?(E.copy(S.normals[z]).multiplyScalar(at.x),b.copy(S.binormals[z]).multiplyScalar(at.y),M.copy(y[z]).add(E).add(b),it(M.x,M.y,M.z)):it(at.x,at.y,d/h*z)}for(let z=p-1;z>=0;z--){let Y=z/p,at=f*Math.cos(Y*Math.PI/2),ut=m*Math.sin(Y*Math.PI/2)+v;for(let mt=0,Lt=U.length;mt<Lt;mt++){let Ot=H(U[mt],W[mt],ut);it(Ot.x,Ot.y,d+at)}for(let mt=0,Lt=C.length;mt<Lt;mt++){let Ot=C[mt];Q=tt[mt];for(let Wt=0,Zt=Ot.length;Wt<Zt;Wt++){let B=H(Ot[Wt],Q[Wt],ut);x?it(B.x,B.y+y[h-1].y,y[h-1].x+at):it(B.x,B.y,d+at)}}}lt(),F();function lt(){let z=s.length/3;if(u){let Y=0,at=X*Y;for(let ut=0;ut<nt;ut++){let mt=O[ut];ft(mt[2]+at,mt[1]+at,mt[0]+at)}Y=h+p*2,at=X*Y;for(let ut=0;ut<nt;ut++){let mt=O[ut];ft(mt[0]+at,mt[1]+at,mt[2]+at)}}else{for(let Y=0;Y<nt;Y++){let at=O[Y];ft(at[2],at[1],at[0])}for(let Y=0;Y<nt;Y++){let at=O[Y];ft(at[0]+X*h,at[1]+X*h,at[2]+X*h)}}n.addGroup(z,s.length/3-z,0)}function F(){let z=s.length/3,Y=0;q(U,Y),Y+=U.length;for(let at=0,ut=C.length;at<ut;at++){let mt=C[at];q(mt,Y),Y+=mt.length}n.addGroup(z,s.length/3-z,1)}function q(z,Y){let at=z.length;for(;--at>=0;){let ut=at,mt=at-1;mt<0&&(mt=z.length-1);for(let Lt=0,Ot=h+p*2;Lt<Ot;Lt++){let Wt=X*Lt,Zt=X*(Lt+1),B=Y+ut+Wt,ae=Y+mt+Wt,Kt=Y+mt+Zt,L=Y+ut+Zt;pt(B,ae,Kt,L)}}}function it(z,Y,at){l.push(z),l.push(Y),l.push(at)}function ft(z,Y,at){xt(z),xt(Y),xt(at);let ut=s.length/3,mt=_.generateTopUV(n,s,ut-3,ut-2,ut-1);Ht(mt[0]),Ht(mt[1]),Ht(mt[2])}function pt(z,Y,at,ut){xt(z),xt(Y),xt(ut),xt(Y),xt(at),xt(ut);let mt=s.length/3,Lt=_.generateSideWallUV(n,s,mt-6,mt-3,mt-2,mt-1);Ht(Lt[0]),Ht(Lt[1]),Ht(Lt[3]),Ht(Lt[1]),Ht(Lt[2]),Ht(Lt[3])}function xt(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function Ht(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return f_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Mh[s.type]().fromJSON(s)),new i(n,t.options)}},h_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-d),new et(u,1-m),new et(v,1-g)]:[new et(a,1-l),new et(h,1-d),new et(f,1-m),new et(p,1-g)]}};function f_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Lo=class i extends Nl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var zn=class i extends ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let y=0;y<c;y++){let x=y*d-r;m.push(x,-_,0),v.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let y=_+c*g,x=_+c*(g+1),S=_+1+c*(g+1),b=_+1+c*g;f.push(y,x,b),f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var No=class i extends ne{constructor(t=new oi([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,m=u.holes;_i.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){let _=m[p];_i.isClockWise(_)===!0&&(m[p]=_.reverse())}let v=_i.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){let _=m[p];f=f.concat(_)}for(let p=0,g=f.length;p<g;p++){let _=f[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,g=v.length;p<g;p++){let _=v[p],y=_[0]+d,x=_[1]+d,S=_[2]+d;n.push(y,x,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return d_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function d_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Oi=class i extends ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,u=new I,f=[],m=[],v=[],p=[];for(let g=0;g<=n;g++){let _=[],y=g/n,x=o+y*a,S=t*Math.cos(x),b=Math.sqrt(t*t-S*S),E=0;g===0&&o===0?E=.5/e:g===n&&l===Math.PI&&(E=-.5/e);for(let M=0;M<=e;M++){let T=M/e,w=s+T*r;d.x=-b*Math.cos(w),d.y=S,d.z=b*Math.sin(w),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(T+E,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let y=h[g][_+1],x=h[g][_],S=h[g+1][_],b=h[g+1][_+1];(g!==0||o>0)&&f.push(y,x,b),(g!==n-1||l<Math.PI)&&f.push(x,S,b)}this.setIndex(f),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Zd(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Zd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function vn(i){let t={};for(let e=0;e<i.length;e++){let n=Bs(i[e]);for(let s in n)t[s]=n[s]}return t}function Zd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function p_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var An={clone:Bs,merge:vn},m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ue=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=p_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ar=class extends ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Is=class extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Uo=class extends ii{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var Vl=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hl=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function or(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ph(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gl=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xh,endingEnd:xh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case vh:r=t,a=2*e-n;break;case yh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:o=t,l=2*n-e;break;case yh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,p=v*m,g=-u*p+2*u*v-u*m,_=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*m+1,y=(-1-f)*p+(1.5+f)*v+.5*m,x=f*p-f*v;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+_*o[c+S]+y*o[l+S]+x*o[d+S];return r}},Wl=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Xl=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ql=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),v=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let v=o[c+m],p=o[l+m],g=f*u+m*2,_=d[g],y=d[g+1],x=t*u+m*2,S=h[x],b=h[x+1],E=x_(n,e,_,S,s);r[m]=Gp(E,v,y,b,p)}return r}};function Gp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function __(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function x_(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Gp(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=__(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=or(e,this.TimeBufferType),this.values=or(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:or(t.times,Array),values:or(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ph(t.settings)&&(n.settings={inTangents:or(t.settings.inTangents,Array),outTangents:or(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ql(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case po:e=this.InterpolantFactoryMethodDiscrete;break;case Al:e=this.InterpolantFactoryMethodLinear;break;case gl:e=this.InterpolantFactoryMethodSmooth;break;case _h:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ph(this.settings)&&(Jd(this.settings.inTangents,t),Jd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&rg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let v=e[d+m];if(v!==e[u+m]||v!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ph(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Al;var ji=class extends kn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=po;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};Yl.prototype.ValueTypeName="color";var Zl=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};Zl.prototype.ValueTypeName="number";var Jl=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)je.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fo=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}};Fo.prototype.ValueTypeName="quaternion";Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends kn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=po;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};$l.prototype.ValueTypeName="vector";var xl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&($d(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!$d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $d(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Kl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wp=new Kl,Rr=class{constructor(t){this.manager=t!==void 0?t:Wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Rr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=new WeakMap,jl=class extends Rr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=xl.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=ar.get(o);d===void 0&&(d=[],ar.set(o,d)),d.push({onLoad:e,onError:s})}return o}let a=_r("img");function l(){h(),e&&e(this);let d=ar.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}ar.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),xl.remove(`image:${t}`);let u=ar.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}ar.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xl.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Oo=class extends Rr{constructor(t){super(t)}load(t,e,n,s){let r=new _n,o=new jl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Bo=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},zo=class extends Bo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},mh=new Yt,Kd=new I,jd=new I,Ql=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kd),jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(mh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},dl=new I,pl=new je,mi=new I,ko=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(dl,pl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,mi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(dl,pl,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,pl,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new I,Qd=new et,tp=new et,mn=class extends ko{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,Qd,tp),e.subVectors(tp,Qd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ts=class extends ko{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wh=class extends Ql{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vo=class extends Bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var lr=-90,cr=1,tc=class extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(lr,cr,t,e);s.layers=this.layers,this.add(s);let r=new mn(lr,cr,t,e);r.layers=this.layers,this.add(r);let o=new mn(lr,cr,t,e);o.layers=this.layers,this.add(o);let a=new mn(lr,cr,t,e);a.layers=this.layers,this.add(a);let l=new mn(lr,cr,t,e);l.layers=this.layers,this.add(l);let c=new mn(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ec=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ho=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=v_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function v_(){this._document.hidden===!1&&this.reset()}var Jh="\\[\\]\\.:\\/",y_=new RegExp("["+Jh+"]","g"),$h="[^"+Jh+"]",S_="[^"+Jh.replace("\\.","")+"]",M_=/((?:WC+[\/:])*)/.source.replace("WC",$h),b_=/(WCOD+)?/.source.replace("WCOD",S_),T_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),E_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),w_=new RegExp("^"+M_+b_+T_+E_+"$"),A_=["material","materials","bones","map"],Ah=class{constructor(t,e,n){let s=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(y_,"")}static parseTrackName(t){let e=w_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);A_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Ah;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jM=new Float32Array(1);var ep=new Yt,Ds=class{constructor(t,e,n=0,s=1/0){this.ray=new On(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ep.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ep),this}intersectObject(t,e=!0,n=[]){return Rh(t,this,n,e),n.sort(np),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Rh(t[s],this,n,e);return n.sort(np),n}};function np(i,t){return i.distance-t.distance}function Rh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Rh(r[o],t,e,!0)}}var Cr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var nf=class nf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};nf.prototype.isMatrix2=!0;var Ch=nf;var ip=new I,ml=new I,ur=new I,hr=new I,gh=new I,R_=new I,C_=new I,wn=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ip.subVectors(t,this.start),ml.subVectors(this.end,this.start);let n=ml.dot(ml);if(n===0)return 0;let r=ml.dot(ip)/n;return e&&(r=jt(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=R_,n=C_){let s=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;ur.subVectors(c,a),hr.subVectors(h,l),gh.subVectors(a,l);let d=ur.dot(ur),u=hr.dot(hr),f=hr.dot(gh);if(d<=s&&u<=s)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(d<=s)r=0,o=f/u,o=jt(o,0,1);else{let m=ur.dot(gh);if(u<=s)o=0,r=jt(-m/d,0,1);else{let v=ur.dot(hr),p=d*u-v*v;p!==0?r=jt((v*f-m*u)/p,0,1):r=0,o=(v*r+f)/u,o<0?(o=0,r=jt(-m/d,0,1)):o>1&&(o=1,r=jt((v-m)/d,0,1))}}return e.copy(a).addScaledVector(ur,r),n.copy(l).addScaledVector(hr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Go=class extends ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Kh(i,t,e,n){let s=P_(n);switch(e){case Vh:return i*t;case uc:return i*t/s.components*s.byteLength;case hc:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case Hh:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case dc:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:case _c:return Math.max(i,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(i,8)*Math.max(t,8)/2;case xc:case vc:case Sc:case Mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yc:case sa:case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Bc:case zc:case kc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case Gc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function P_(i){switch(i){case xn:case Oh:return{byteLength:1,components:1};case Dr:case Bh:case Ve:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case ci:case ac:case Yn:return{byteLength:4,components:1};case zh:case kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fm(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function I_(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var D_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,V_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,q_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,j_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ex=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_x=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Tx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Px=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ix=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ux=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_v=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ev=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ty=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ly=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:D_,alphahash_pars_fragment:L_,alphamap_fragment:N_,alphamap_pars_fragment:U_,alphatest_fragment:F_,alphatest_pars_fragment:O_,aomap_fragment:B_,aomap_pars_fragment:z_,batching_pars_vertex:k_,batching_vertex:V_,begin_vertex:H_,beginnormal_vertex:G_,bsdfs:W_,iridescence_fragment:X_,bumpmap_pars_fragment:q_,clipping_planes_fragment:Y_,clipping_planes_pars_fragment:Z_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:$_,color_fragment:K_,color_pars_fragment:j_,color_pars_vertex:Q_,color_vertex:tx,common:ex,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:sx,displacementmap_vertex:rx,emissivemap_fragment:ox,emissivemap_pars_fragment:ax,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:ux,envmap_common_pars_fragment:hx,envmap_pars_fragment:fx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Tx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:gx,fog_fragment:_x,fog_pars_fragment:xx,gradientmap_pars_fragment:vx,lightmap_pars_fragment:yx,lights_lambert_fragment:Sx,lights_lambert_pars_fragment:Mx,lights_pars_begin:bx,lights_toon_fragment:Ex,lights_toon_pars_fragment:wx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Rx,lights_physical_fragment:Cx,lights_physical_pars_fragment:Px,lights_fragment_begin:Ix,lights_fragment_maps:Dx,lights_fragment_end:Lx,lightprobes_pars_fragment:Nx,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Fx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Bx,map_fragment:zx,map_pars_fragment:kx,map_particle_fragment:Vx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Gx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:Xx,morphcolor_vertex:qx,morphnormal_vertex:Yx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Jx,normal_fragment_begin:$x,normal_fragment_maps:Kx,normal_pars_fragment:jx,normal_pars_vertex:Qx,normal_vertex:tv,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:iv,clearcoat_pars_fragment:sv,iridescence_pars_fragment:rv,opaque_fragment:ov,packing:av,premultiplied_alpha_fragment:lv,project_vertex:cv,dithering_fragment:uv,dithering_pars_fragment:hv,roughnessmap_fragment:fv,roughnessmap_pars_fragment:dv,shadowmap_pars_fragment:pv,shadowmap_pars_vertex:mv,shadowmap_vertex:gv,shadowmask_pars_fragment:_v,skinbase_vertex:xv,skinning_pars_vertex:vv,skinning_vertex:yv,skinnormal_vertex:Sv,specularmap_fragment:Mv,specularmap_pars_fragment:bv,tonemapping_fragment:Tv,tonemapping_pars_fragment:Ev,transmission_fragment:wv,transmission_pars_fragment:Av,uv_pars_fragment:Rv,uv_pars_vertex:Cv,uv_vertex:Pv,worldpos_vertex:Iv,background_vert:Dv,background_frag:Lv,backgroundCube_vert:Nv,backgroundCube_frag:Uv,cube_vert:Fv,cube_frag:Ov,depth_vert:Bv,depth_frag:zv,distance_vert:kv,distance_frag:Vv,equirect_vert:Hv,equirect_frag:Gv,linedashed_vert:Wv,linedashed_frag:Xv,meshbasic_vert:qv,meshbasic_frag:Yv,meshlambert_vert:Zv,meshlambert_frag:Jv,meshmatcap_vert:$v,meshmatcap_frag:Kv,meshnormal_vert:jv,meshnormal_frag:Qv,meshphong_vert:ty,meshphong_frag:ey,meshphysical_vert:ny,meshphysical_frag:iy,meshtoon_vert:sy,meshtoon_frag:ry,points_vert:oy,points_frag:ay,shadow_vert:ly,shadow_frag:cy,sprite_vert:uy,sprite_frag:hy},wt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ti={basic:{uniforms:vn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:vn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:vn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:vn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:vn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:vn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:vn([wt.points,wt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:vn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:vn([wt.common,wt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:vn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:vn([wt.sprite,wt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:vn([wt.common,wt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:vn([wt.lights,wt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Ti.physical={uniforms:vn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var qc={r:0,b:0,g:0},fy=new Yt,dm=new Qt;dm.set(-1,0,0,0,1,0,0,0,1);function dy(i,t,e,n,s,r){let o=new Pt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let x=_.backgroundBlurriness>0;y=t.get(y,x)}return y}function m(_){let y=!1,x=f(_);x===null?p(o,a):x&&x.isColor&&(p(x,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,y){let x=f(y);x&&(x.isCubeTexture||x.mapping===jo)?(c===void 0&&(c=new de(new Fi(1,1,1),new ue({name:"BackgroundCubeMaterial",uniforms:Bs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fy.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dm),c.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new de(new zn(2,2),new ue({name:"BackgroundMaterial",uniforms:Bs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(qc,Zh(i)),e.buffers.color.setClear(qc.r,qc.g,qc.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:v,dispose:g}}function py(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(C,P,N,D,U){let H=!1,X=d(C,D,N,P);r!==X&&(r=X,c(r.object)),H=f(C,D,N,U),H&&m(C,D,N,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(C,P,N,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,P,N,D){let U=D.wireframe===!0,H=n[P.id];H===void 0&&(H={},n[P.id]=H);let X=C.isInstancedMesh===!0?C.id:0,rt=H[X];rt===void 0&&(rt={},H[X]=rt);let W=rt[N.id];W===void 0&&(W={},rt[N.id]=W);let tt=W[U];return tt===void 0&&(tt=u(l()),W[U]=tt),tt}function u(C){let P=[],N=[],D=[];for(let U=0;U<e;U++)P[U]=0,N[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,P,N,D){let U=r.attributes,H=P.attributes,X=0,rt=N.getAttributes();for(let W in rt)if(rt[W].location>=0){let Q=U[W],_t=H[W];if(_t===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),Q===void 0||Q.attribute!==_t||_t&&Q.data!==_t.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function m(C,P,N,D){let U={},H=P.attributes,X=0,rt=N.getAttributes();for(let W in rt)if(rt[W].location>=0){let Q=H[W];Q===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor));let _t={};_t.attribute=Q,Q&&Q.data&&(_t.data=Q.data),U[W]=_t,X++}r.attributes=U,r.attributesNum=X,r.index=D}function v(){let C=r.newAttributes;for(let P=0,N=C.length;P<N;P++)C[P]=0}function p(C){g(C,0)}function g(C,P){let N=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;N[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),U[C]!==P&&(i.vertexAttribDivisor(C,P),U[C]=P)}function _(){let C=r.newAttributes,P=r.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==C[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function y(C,P,N,D,U,H,X){X===!0?i.vertexAttribIPointer(C,P,N,U,H):i.vertexAttribPointer(C,P,N,D,U,H)}function x(C,P,N,D){v();let U=D.attributes,H=N.getAttributes(),X=P.defaultAttributeValues;for(let rt in H){let W=H[rt];if(W.location>=0){let tt=U[rt];if(tt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),tt!==void 0){let Q=tt.normalized,_t=tt.itemSize,O=t.get(tt);if(O===void 0)continue;let nt=O.buffer,K=O.type,lt=O.bytesPerElement,F=K===i.INT||K===i.UNSIGNED_INT||tt.gpuType===ac;if(tt.isInterleavedBufferAttribute){let q=tt.data,it=q.stride,ft=tt.offset;if(q.isInstancedInterleavedBuffer){for(let pt=0;pt<W.locationSize;pt++)g(W.location+pt,q.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pt=0;pt<W.locationSize;pt++)p(W.location+pt);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let pt=0;pt<W.locationSize;pt++)y(W.location+pt,_t/W.locationSize,K,Q,it*lt,(ft+_t/W.locationSize*pt)*lt,F)}else{if(tt.isInstancedBufferAttribute){for(let q=0;q<W.locationSize;q++)g(W.location+q,tt.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let q=0;q<W.locationSize;q++)p(W.location+q);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let q=0;q<W.locationSize;q++)y(W.location+q,_t/W.locationSize,K,Q,_t*lt,_t/W.locationSize*q*lt,F)}}else if(X!==void 0){let Q=X[rt];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}_()}function S(){T();for(let C in n){let P=n[C];for(let N in P){let D=P[N];for(let U in D){let H=D[U];for(let X in H)h(H[X].object),delete H[X];delete D[U]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;let P=n[C.id];for(let N in P){let D=P[N];for(let U in D){let H=D[U];for(let X in H)h(H[X].object),delete H[X];delete D[U]}}delete n[C.id]}function E(C){for(let P in n){let N=n[P];for(let D in N){let U=N[D];if(U[C.id]===void 0)continue;let H=U[C.id];for(let X in H)h(H[X].object),delete H[X];delete U[C.id]}}}function M(C){for(let P in n){let N=n[P],D=C.isInstancedMesh===!0?C.id:0,U=N[D];if(U!==void 0){for(let H in U){let X=U[H];for(let rt in X)h(X[rt].object),delete X[rt];delete U[H]}delete N[D],Object.keys(N).length===0&&delete n[P]}}}function T(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function my(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function gy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==an&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let M=E===Ve&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xn&&E!==Yn&&!M&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,maxSamples:S,samples:b}}function _y(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Je,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let _=r?0:n,y=_*4,x=g.clippingState||null;l.value=x,x=h(m,u,y,f);for(let S=0;S!==y;++S)x[S]=e[S];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,m!==!0||p===null){let g=f+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var Nr=4,xy=6,vy=20,yy=256,aa=new ts,Xp=new Pt,sf=null,rf=0,of=0,af=!1,Sy=new I,zs=new I,Fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Sy}=r;sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sf,rf,of),this._renderer.xr.enabled=af,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Ve,format:an,colorSpace:mo,depthBuffer:!1},s=qp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=My(r)),this._blurMaterial=Ty(r,t,e),this._ggxMaterial=by(r,t,e)}return s}_compileMaterial(t){let e=new de(new ne,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s,r){let l=new mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Xp),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Fi,new un({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,p=v.material,g=!1,_=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,g=!0):(p.color.copy(Xp),g=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;Lr(s,x*S,y>2?S:0,S,S),d.setRenderTarget(s),g&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===is||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,v=this._sizeLods[n],p=3*v*(n>m-Nr?n-m+Nr:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Lr(r,p,g,3*v,2*v),s.setRenderTarget(r),s.render(a,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Lr(t,p,g,3*v,2*v),s.setRenderTarget(t),s.render(a,aa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Nr?s-this._lodMax+Nr:0),u=4*(this._cubeSize-h);Lr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,aa)}};function My(i){let t=[],e=[],n=i,s=i-Nr+1+xy;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let g=0;g<d;g++){let _=g%3*2/3-1,y=g>2?0:-1,x=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];m.set(x,f*u*g);for(let S=0;S<u;S++){let b=h[S*2]*2-1,E=h[S*2+1]*2-1;g===0?zs.set(1,E,b):g===1?zs.set(-b,1,-E):g===2?zs.set(-b,E,1):g===3?zs.set(-1,E,-b):g===4?zs.set(-b,-1,E):zs.set(b,E,-1),zs.toArray(v,(g*u+S)*f)}}let p=new ne;p.setAttribute("position",new se(m,f)),p.setAttribute("outputDirection",new se(v,f)),e.push(new de(p,null)),n>Nr&&n--}return{lodMeshes:e,sizeLods:t}}function qp(i,t,e){let n=new Le(i,t,e);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function by(i,t,e){return new ue({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Ty(i,t,e){return new ue({name:"SphericalGaussianBlur",defines:{SAMPLES:vy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Yp(){return new ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Zp(){return new ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qe,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Zc=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new To(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fi(5,5,5),r=new ue({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:qe});r.uniforms.tEquirect.value=e;let o=new de(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Be),new tc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Ey(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===sc||f===rc)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Zc(m.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===sc||f===rc,v=f===is||f===Fs;if(m||v){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Fr(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return m&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Fr(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===sc?u.mapping=is:f===rc&&(u.mapping=Fs),u}function l(u){let f=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function wy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function Ay(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,v=0;if(m===void 0)return;if(f!==null){let _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){let S=_[y+0],b=_[y+1],E=_[y+2];u.push(S,b,b,E,E,S)}}else{let _=m.array;v=m.version;for(let y=0,x=_.length/3-1;y<x;y+=3){let S=y+0,b=y+1,E=y+2;u.push(S,b,b,E,E,S)}}let p=new(m.count>=65535?yo:vo)(u,1);p.version=v;let g=r.get(d);g&&t.remove(g),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ry(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=u[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Jt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Py(i,t,e){let n=new WeakMap,s=new Ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let b=new Float32Array(x*S*4*d),E=new _o(b,x,S,d);E.type=Yn,E.needsUpdate=!0;let M=y*4;for(let w=0;w<d;w++){let C=p[w],P=g[w],N=_[w],D=x*S*4*w;for(let U=0;U<C.count;U++){let H=U*M;f===!0&&(s.fromBufferAttribute(C,U),b[D+H+0]=s.x,b[D+H+1]=s.y,b[D+H+2]=s.z,b[D+H+3]=0),m===!0&&(s.fromBufferAttribute(P,U),b[D+H+4]=s.x,b[D+H+5]=s.y,b[D+H+6]=s.z,b[D+H+7]=0),v===!0&&(s.fromBufferAttribute(N,U),b[D+H+8]=s.x,b[D+H+9]=s.y,b[D+H+10]=s.z,b[D+H+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new et(x,S)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Iy(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Dy={[qo]:"LINEAR_TONE_MAPPING",[Yo]:"REINHARD_TONE_MAPPING",[Zo]:"CINEON_TONE_MAPPING",[Jo]:"ACES_FILMIC_TONE_MAPPING",[Ko]:"AGX_TONE_MAPPING",[Us]:"NEUTRAL_TONE_MAPPING",[$o]:"CUSTOM_TONE_MAPPING"};function Ly(i,t,e,n,s,r){let o=new Le(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ne;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new Ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new de(c,h),u=new ts(-1,1,1,-1,0,1),f=null,m=null,v=!1,p,g=null,_=[],y=!1;this.setSize=function(x,S){o.setSize(x,S),a!==null&&a.setSize(x,S),l!==null&&l.setSize(x,S);for(let b=0;b<_.length;b++){let E=_[b];E.setSize&&E.setSize(x,S)}},this.setEffects=function(x){_=x,y=_.length>0&&_[0].isRenderPass===!0;let S=o.width,b=o.height;_.length>0&&a===null&&(a=new Le(S,b,{type:Ve,depthBuffer:!1,stencilBuffer:!1}),l=new Le(S,b,{type:Ve,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<_.length;E++){let M=_[E];M.setSize&&M.setSize(S,b)}},this.begin=function(x,S){if(v||x.toneMapping===li&&_.length===0)return!1;if(g=S,S!==null){let b=S.width,E=S.height;(o.width!==b||o.height!==E)&&this.setSize(b,E)}return y===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=li,!0},this.hasRenderPass=function(){return y},this.end=function(x,S){x.toneMapping=p,v=!0;let b=o,E=a;for(let M=0;M<_.length;M++){let T=_[M];T.enabled!==!1&&(T.render(x,E,b,S),T.needsSwap!==!1&&(b=E,E=E===a?l:a))}if(f!==x.outputColorSpace||m!==x.toneMapping){f=x.outputColorSpace,m=x.toneMapping,h.defines={},oe.getTransfer(f)===me&&(h.defines.SRGB_TRANSFER="");let M=Dy[m];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(g),x.render(d,u),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var pm=new _n,uf=new yi(1,1),mm=new _o,gm=new Pl,_m=new To,Jp=[],$p=[],Kp=new Float32Array(16),jp=new Float32Array(9),Qp=new Float32Array(4);function Or(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jp[s];if(r===void 0&&(r=new Float32Array(s),Jp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jc(i,t){let e=$p[t];e===void 0&&(e=new Int32Array(t),$p[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ny(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function By(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Qp.set(n),i.uniformMatrix2fv(this.addr,!1,Qp),en(e,n)}}function zy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;jp.set(n),i.uniformMatrix3fv(this.addr,!1,jp),en(e,n)}}function ky(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Kp.set(n),i.uniformMatrix4fv(this.addr,!1,Kp),en(e,n)}}function Vy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Xy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function Yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function Zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function Jy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uf.compareFunction=e.isReversedDepthBuffer()?Xc:Wc,r=uf):r=pm,e.setTexture2D(t||r,s)}function $y(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gm,s)}function Ky(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_m,s)}function jy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mm,s)}function Qy(i){switch(i){case 5126:return Ny;case 35664:return Uy;case 35665:return Fy;case 35666:return Oy;case 35674:return By;case 35675:return zy;case 35676:return ky;case 5124:case 35670:return Vy;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return jy}}function t1(i,t){i.uniform1fv(this.addr,t)}function e1(i,t){let e=Or(t,this.size,2);i.uniform2fv(this.addr,e)}function n1(i,t){let e=Or(t,this.size,3);i.uniform3fv(this.addr,e)}function i1(i,t){let e=Or(t,this.size,4);i.uniform4fv(this.addr,e)}function s1(i,t){let e=Or(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function r1(i,t){let e=Or(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function o1(i,t){let e=Or(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function a1(i,t){i.uniform1iv(this.addr,t)}function l1(i,t){i.uniform2iv(this.addr,t)}function c1(i,t){i.uniform3iv(this.addr,t)}function u1(i,t){i.uniform4iv(this.addr,t)}function h1(i,t){i.uniform1uiv(this.addr,t)}function f1(i,t){i.uniform2uiv(this.addr,t)}function d1(i,t){i.uniform3uiv(this.addr,t)}function p1(i,t){i.uniform4uiv(this.addr,t)}function m1(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uf:o=pm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function g1(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gm,r[o])}function _1(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_m,r[o])}function x1(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mm,r[o])}function v1(i){switch(i){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return s1;case 35675:return r1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return h1;case 36294:return f1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return x1}}var hf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qy(e.type)}},ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v1(e.type)}},df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},lf=/(\w+)(\])?(\[|\.)?/g;function tm(i,t){i.seq.push(t),i.map[t.id]=t}function y1(i,t,e){let n=i.name,s=n.length;for(lf.lastIndex=0;;){let r=lf.exec(n),o=lf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){tm(e,c===void 0?new hf(a,i,t):new ff(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new df(a),tm(e,d)),e=d}}}var Ur=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);y1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function em(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var S1=37297,M1=0;function b1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nm=new Qt;function T1(i){oe._getMatrix(nm,oe.workingColorSpace,i);let t=`mat3( ${nm.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case go:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function im(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+b1(i.getShaderSource(t),a)}else return r}function E1(i,t){let e=T1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var w1={[qo]:"Linear",[Yo]:"Reinhard",[Zo]:"Cineon",[Jo]:"ACESFilmic",[Ko]:"AgX",[Us]:"Neutral",[$o]:"Custom"};function A1(i,t){let e=w1[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yc=new I;function R1(){oe.getLuminanceCoefficients(Yc);let i=Yc.x.toFixed(4),t=Yc.y.toFixed(4),e=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function P1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ca(i){return i!==""}function sm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(i){return i.replace(D1,N1)}var L1=new Map;function N1(i,t){let e=ie[t];if(e===void 0){let n=L1.get(t);if(n!==void 0)e=ie[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pf(e)}var U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(i){return i.replace(U1,F1)}function F1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function am(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var O1={[Ls]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function B1(i){return O1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var z1={[is]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};function k1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":z1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var V1={[Fs]:"ENVMAP_MODE_REFRACTION"};function H1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":V1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G1={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[Sp]:"ENVMAP_BLENDING_MIX",[Mp]:"ENVMAP_BLENDING_ADD"};function W1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G1[i.combine]||"ENVMAP_BLENDING_NONE"}function X1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function q1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=B1(e),c=k1(e),h=H1(e),d=W1(e),u=X1(e),f=C1(e),m=P1(r),v=s.createProgram(),p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ca).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ca).join(`
`),g.length>0&&(g+=`
`)):(p=[am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),g=[am(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?ie.tonemapping_pars_fragment:"",e.toneMapping!==li?A1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,E1("linearToOutputTexel",e.outputColorSpace),R1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),o=pf(o),o=sm(o,e),o=rm(o,e),a=pf(a),a=sm(a,e),a=rm(a,e),o=om(o),a=om(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=_+p+o,x=_+g+a,S=em(s,s.VERTEX_SHADER,y),b=em(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(C){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",U=P.trim(),H=N.trim(),X=D.trim(),rt=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,b);else{let tt=im(s,S,"vertex"),Q=im(s,b,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+tt+`
`+Q)}else U!==""?qt("WebGLProgram: Program Info Log:",U):(H===""||X==="")&&(W=!1);W&&(C.diagnostics={runnable:rt,programLog:U,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:g}})}s.deleteShader(S),s.deleteShader(b),M=new Ur(s,v),T=I1(s,v)}let M;this.getUniforms=function(){return M===void 0&&E(this),M};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,S1)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var Y1=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gf(t),e.set(t,n)),n}},gf=class{constructor(t){this.id=Y1++,this.code=t,this.usedTimes=0}};function Z1(i){return i===rs||i===sa||i===ra}function J1(i,t,e,n,s,r){let o=new Sr,a=new mf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,T,w,C,P,N){let D=C.fog,U=P.geometry,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?C.environment:null,X=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,rt=t.get(M.envMap||H,X),W=rt&&rt.mapping===jo?rt.image.height:null,tt=f[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&qt("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let Q=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_t=Q!==void 0?Q.length:0,O=0;U.morphAttributes.position!==void 0&&(O=1),U.morphAttributes.normal!==void 0&&(O=2),U.morphAttributes.color!==void 0&&(O=3);let nt,K,lt,F;if(tt){let Re=Ti[tt];nt=Re.vertexShader,K=Re.fragmentShader}else{nt=M.vertexShader,K=M.fragmentShader;let Re=a.getVertexShaderStage(M),xe=a.getFragmentShaderStage(M);a.update(M,Re,xe),lt=Re.id,F=xe.id}let q=i.getRenderTarget(),it=i.state.buffers.depth.getReversed(),ft=P.isInstancedMesh===!0,pt=P.isBatchedMesh===!0,xt=!!M.map,Ht=!!M.matcap,z=!!rt,Y=!!M.aoMap,at=!!M.lightMap,ut=!!M.bumpMap&&M.wireframe===!1,mt=!!M.normalMap,Lt=!!M.displacementMap,Ot=!!M.emissiveMap,Wt=!!M.metalnessMap,Zt=!!M.roughnessMap,B=M.anisotropy>0,ae=M.clearcoat>0,Kt=M.dispersion>0,L=M.retroreflectivity>0,A=M.iridescence>0,G=M.sheen>0,Z=M.transmission>0,st=B&&!!M.anisotropyMap,gt=ae&&!!M.clearcoatMap,vt=ae&&!!M.clearcoatNormalMap,ot=ae&&!!M.clearcoatRoughnessMap,ht=A&&!!M.iridescenceMap,bt=A&&!!M.iridescenceThicknessMap,kt=G&&!!M.sheenColorMap,St=G&&!!M.sheenRoughnessMap,yt=!!M.specularMap,Nt=!!M.specularColorMap,Gt=!!M.specularIntensityMap,$t=Z&&!!M.transmissionMap,V=Z&&!!M.thicknessMap,Tt=!!M.gradientMap,ct=!!M.alphaMap,Et=M.alphaTest>0,Ct=!!M.alphaHash,dt=!!M.extensions,Xt=li;M.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let Bt={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:K,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:F,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:pt,batchingColor:pt&&P._colorsTexture!==null,instancing:ft,instancingColor:ft&&P.instanceColor!==null,instancingMorph:ft&&P.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:Ht,envMap:z,envMapMode:z&&rt.mapping,envMapCubeUVHeight:W,aoMap:Y,lightMap:at,bumpMap:ut,normalMap:mt,displacementMap:Lt,emissiveMap:Ot,normalMapObjectSpace:mt&&M.normalMapType===Ep,normalMapTangentSpace:mt&&M.normalMapType===oa,packedNormalMap:mt&&M.normalMapType===oa&&Z1(M.normalMap.format),metalnessMap:Wt,roughnessMap:Zt,anisotropy:B,anisotropyMap:st,clearcoat:ae,clearcoatMap:gt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ot,dispersion:Kt,retroreflection:L,iridescence:A,iridescenceMap:ht,iridescenceThicknessMap:bt,sheen:G,sheenColorMap:kt,sheenRoughnessMap:St,specularMap:yt,specularColorMap:Nt,specularIntensityMap:Gt,transmission:Z,transmissionMap:$t,thicknessMap:V,gradientMap:Tt,opaque:M.transparent===!1&&M.blending===Ir&&M.alphaToCoverage===!1,alphaMap:ct,alphaTest:Et,alphaHash:Ct,combine:M.combine,mapUv:xt&&m(M.map.channel),aoMapUv:Y&&m(M.aoMap.channel),lightMapUv:at&&m(M.lightMap.channel),bumpMapUv:ut&&m(M.bumpMap.channel),normalMapUv:mt&&m(M.normalMap.channel),displacementMapUv:Lt&&m(M.displacementMap.channel),emissiveMapUv:Ot&&m(M.emissiveMap.channel),metalnessMapUv:Wt&&m(M.metalnessMap.channel),roughnessMapUv:Zt&&m(M.roughnessMap.channel),anisotropyMapUv:st&&m(M.anisotropyMap.channel),clearcoatMapUv:gt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:vt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(M.sheenRoughnessMap.channel),specularMapUv:yt&&m(M.specularMap.channel),specularColorMapUv:Nt&&m(M.specularColorMap.channel),specularIntensityMapUv:Gt&&m(M.specularIntensityMap.channel),transmissionMapUv:$t&&m(M.transmissionMap.channel),thicknessMapUv:V&&m(M.thicknessMap.channel),alphaMapUv:ct&&m(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(mt||B),vertexNormals:!!U.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(xt||ct),fog:!!D,useFog:M.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||U.attributes.normal===void 0&&mt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:it,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:O,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&oe.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:Ot&&M.emissiveMap.isVideoTexture===!0&&oe.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ue,flipSided:M.side===Qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:dt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&M.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function p(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let w in M.defines)T.push(w),T.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(g(T,M),_(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){let T=f[M.type],w;if(T){let C=Ti[T];w=An.clone(C.uniforms)}else w=M.uniforms;return w}function x(M,T){let w=h.get(T);return w!==void 0?++w.usedTimes:(w=new q1(i,T,M,s),c.push(w),h.set(T,w)),w}function S(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function b(M){a.remove(M)}function E(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function $1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function K1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cm(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,v,p,g){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:g},i[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.materialVariant=o(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=p,_.group=g),t++,_}function l(u,f,m,v,p,g,_){_.reversedDepth===!0&&(p=-p);let y=a(u,f,m,v,p,g);m.transmission>0?n.push(y):m.transparent===!0?s.push(y):e.push(y)}function c(u,f,m,v,p,g){let _=a(u,f,m,v,p,g);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||K1),n.length>1&&n.sort(f||lm),s.length>1&&s.sort(f||lm)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function j1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cm,i.set(n,[o])):s>=r.length?(o=new cm,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Pt};break;case"SpotLight":e={position:new I,direction:new I,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function tS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var eS=0;function nS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function iS(i){let t=new Q1,e=tS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Yt,o=new Yt;function a(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,y=0,x=0,S=0,b=0,E=0,M=0,T=0,w=0;c.sort(nS);for(let P=0,N=c.length;P<N;P++){let D=c[P],U=D.color,H=D.intensity,X=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===rs?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=U.r*H,d+=U.g*H,u+=U.b*H;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],H);w++}else if(D.isSunLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let tt=D.shadow,Q=e.get(D);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=rt;let _t=tt.getViewportCount();for(let O=0;O<_t;O++)n.sunShadowMatrix[v+O]=tt.getMatrix(O),n.sunShadowCascade[v+O]=tt._cascadeData[O];v+=_t,m++}n.sun[f]=W,f++}else if(D.isDirectionalLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let tt=D.shadow,Q=e.get(D);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=rt,n.directionalShadowMatrix[p]=D.shadow.matrix,S++}n.directional[p]=W,p++}else if(D.isSpotLight){let W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(U).multiplyScalar(H),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;let tt=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,tt.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,D.castShadow){let Q=e.get(D);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=rt,E++}_++}else if(D.isRectAreaLight){let W=t.get(D);W.color.copy(U).multiplyScalar(H),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=W,y++}else if(D.isPointLight){let W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let tt=D.shadow,Q=e.get(D);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,Q.shadowCameraNear=tt.camera.near,Q.shadowCameraFar=tt.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=W,g++}else if(D.isHemisphereLight){let W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(H),W.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[x]=W,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==y||C.hemiLength!==x||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==b||C.numSpotShadows!==E||C.numSpotMaps!==M||C.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=p,n.spot.length=_,n.rectArea.length=y,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.sunLength=f,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=y,C.hemiLength=x,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=b,C.numSpotShadows=E,C.numSpotMaps=M,C.numLightProbes=w,n.version=eS++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,p=0,g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let x=c[_];if(x.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),d++}else if(x.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(x.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function um(i){let t=new iS(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function sS(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new um(i),t.set(s,[a])):r>=o.length?(a=new um(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var rS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aS=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],lS=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],hm=new Yt,la=new I,cf=new I;function cS(i,t,e){let n=new br,s=new et,r=new et,o=new Ne,a=new Vl,l=new Hl,c={},h=e.maxTextureSize,d={[ai]:Qe,[Qe]:ai,[Ue]:Ue},u=new ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:rS,fragmentShader:oS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ne;m.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new de(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let g=this.type;this.render=function(b,E,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===op&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);let T=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),P=i.state;P.setBlending(qe),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let N=g!==this.type;N&&E.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=b.length;D<U;D++){let H=b[D],X=H.shadow;if(X===void 0){qt("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let rt=X.getFrameExtents();s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=W,X.map===null||N===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Pr){if(H.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Le(s.x,s.y,{format:rs,type:Ve,minFilter:Be,magFilter:Be,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new yi(s.x,s.y,Yn),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=xi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe}else H.isPointLight?(X.map=new Zc(s.x),X.map.depthTexture=new Ll(s.x,ci)):(X.map=new Le(s.x,s.y),X.map.depthTexture=new yi(s.x,s.y,ci)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=xi,this.type===Ls?(X.map.depthTexture.compareFunction=W?Xc:Wc,X.map.depthTexture.minFilter=Be,X.map.depthTexture.magFilter=Be):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xe,X.map.depthTexture.magFilter=Xe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let tt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,M);for(let Q=0;Q<tt;Q++){let _t=X.getCamera(Q);if(H.isPointLight){let O=X.camera,nt=X.matrix,K=H.distance||O.far;K!==O.far&&(O.far=K,O.updateProjectionMatrix()),la.setFromMatrixPosition(H.matrixWorld),O.position.copy(la),cf.copy(O.position),cf.add(aS[Q]),O.up.copy(lS[Q]),O.lookAt(cf),O.updateMatrixWorld(),nt.makeTranslation(-la.x,-la.y,-la.z),hm.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X._frustum.setFromProjectionMatrix(hm,O.coordinateSystem,O.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(X.map),i.clear());let O=X.getViewport(Q);o.set(r.x*O.x,r.y*O.y,r.x*O.z,r.y*O.w),P.viewport(o)}n=X.getFrustum(Q),x(E,M,_t,H,this.type)}X.isPointLightShadow!==!0&&this.type===Pr&&_(X,M),X.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(T,w,C)};function _(b,E){let M=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Le(s.x,s.y,{format:rs,type:Ve}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,M,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,M,f,v,null)}function y(b,E,M,T){let w=null,C=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)w=C;else if(w=M.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=w.uuid,N=E.uuid,D=c[P];D===void 0&&(D={},c[P]=D);let U=D[N];U===void 0&&(U=w.clone(),D[N]=U,E.addEventListener("dispose",S)),w=U}if(w.visible=E.visible,w.wireframe=E.wireframe,T===Pr?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:d[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,M.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let P=i.properties.get(w);P.light=M}return w}function x(b,E,M,T,w){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Pr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);let N=t.update(b),D=b.material;if(Array.isArray(D)){let U=N.groups;for(let H=0,X=U.length;H<X;H++){let rt=U[H],W=D[rt.materialIndex];if(W&&W.visible){let tt=y(b,W,T,w);b.onBeforeShadow(i,b,E,M,N,tt,rt),i.renderBufferDirect(M,null,N,tt,b,rt),b.onAfterShadow(i,b,E,M,N,tt,rt)}}}else if(D.visible){let U=y(b,D,T,w);b.onBeforeShadow(i,b,E,M,N,U,null),i.renderBufferDirect(M,null,N,U,b,null),b.onAfterShadow(i,b,E,M,N,U,null)}}let P=b.children;for(let N=0,D=P.length;N<D;N++)x(P[N],E,M,T,w)}function S(b){b.target.removeEventListener("dispose",S);for(let M in c){let T=c[M],w=b.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function uS(i,t){function e(){let V=!1,Tt=new Ne,ct=null,Et=new Ne(0,0,0,0);return{setMask:function(Ct){ct!==Ct&&!V&&(i.colorMask(Ct,Ct,Ct,Ct),ct=Ct)},setLocked:function(Ct){V=Ct},setClear:function(Ct,dt,Xt,Bt,Re){Re===!0&&(Ct*=Bt,dt*=Bt,Xt*=Bt),Tt.set(Ct,dt,Xt,Bt),Et.equals(Tt)===!1&&(i.clearColor(Ct,dt,Xt,Bt),Et.copy(Tt))},reset:function(){V=!1,ct=null,Et.set(-1,0,0,0)}}}function n(){let V=!1,Tt=!1,ct=null,Et=null,Ct=null;return{setReversed:function(dt){if(Tt!==dt){let Xt=t.get("EXT_clip_control");dt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Tt=dt;let Bt=Ct;Ct=null,this.setClear(Bt)}},getReversed:function(){return Tt},setTest:function(dt){dt?q(i.DEPTH_TEST):it(i.DEPTH_TEST)},setMask:function(dt){ct!==dt&&!V&&(i.depthMask(dt),ct=dt)},setFunc:function(dt){if(Tt&&(dt=Op[dt]),Et!==dt){switch(dt){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=dt}},setLocked:function(dt){V=dt},setClear:function(dt){Ct!==dt&&(Ct=dt,Tt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){V=!1,ct=null,Et=null,Ct=null,Tt=!1}}}function s(){let V=!1,Tt=null,ct=null,Et=null,Ct=null,dt=null,Xt=null,Bt=null,Re=null;return{setTest:function(xe){V||(xe?q(i.STENCIL_TEST):it(i.STENCIL_TEST))},setMask:function(xe){Tt!==xe&&!V&&(i.stencilMask(xe),Tt=xe)},setFunc:function(xe,Kn,di){(ct!==xe||Et!==Kn||Ct!==di)&&(i.stencilFunc(xe,Kn,di),ct=xe,Et=Kn,Ct=di)},setOp:function(xe,Kn,di){(dt!==xe||Xt!==Kn||Bt!==di)&&(i.stencilOp(xe,Kn,di),dt=xe,Xt=Kn,Bt=di)},setLocked:function(xe){V=xe},setClear:function(xe){Re!==xe&&(i.clearStencil(xe),Re=xe)},reset:function(){V=!1,Tt=null,ct=null,Et=null,Ct=null,dt=null,Xt=null,Bt=null,Re=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,y=null,x=null,S=null,b=null,E=null,M=new Pt(0,0,0),T=0,w=!1,C=null,P=null,N=null,D=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,rt=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=rt>=1):W.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=rt>=2);let tt=null,Q={},_t=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),nt=new Ne().fromArray(_t),K=new Ne().fromArray(O);function lt(V,Tt,ct,Et){let Ct=new Uint8Array(4),dt=i.createTexture();i.bindTexture(V,dt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<ct;Xt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(Tt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return dt}let F={};F[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),F[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),F[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(mr),ut(!1),mt(Ph),q(i.CULL_FACE),Y(qe);function q(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function it(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function ft(V,Tt){return u[V]!==Tt?(i.bindFramebuffer(V,Tt),u[V]=Tt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function pt(V,Tt){let ct=m,Et=!1;if(V){ct=f.get(Tt),ct===void 0&&(ct=[],f.set(Tt,ct));let Ct=V.textures;if(ct.length!==Ct.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Xt=Ct.length;dt<Xt;dt++)ct[dt]=i.COLOR_ATTACHMENT0+dt;ct.length=Ct.length,Et=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ct)}function xt(V){return v!==V?(i.useProgram(V),v=V,!0):!1}let Ht={[qn]:i.FUNC_ADD,[ap]:i.FUNC_SUBTRACT,[lp]:i.FUNC_REVERSE_SUBTRACT};Ht[cp]=i.MIN,Ht[up]=i.MAX;let z={[Ns]:i.ZERO,[hp]:i.ONE,[fp]:i.SRC_COLOR,[Lh]:i.SRC_ALPHA,[gp]:i.SRC_ALPHA_SATURATE,[Xo]:i.DST_COLOR,[Wo]:i.DST_ALPHA,[dp]:i.ONE_MINUS_SRC_COLOR,[Nh]:i.ONE_MINUS_SRC_ALPHA,[mp]:i.ONE_MINUS_DST_COLOR,[pp]:i.ONE_MINUS_DST_ALPHA,[_p]:i.CONSTANT_COLOR,[xp]:i.ONE_MINUS_CONSTANT_COLOR,[vp]:i.CONSTANT_ALPHA,[yp]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(V,Tt,ct,Et,Ct,dt,Xt,Bt,Re,xe){if(V===qe){p===!0&&(it(i.BLEND),p=!1);return}if(p===!1&&(q(i.BLEND),p=!0),V!==ic){if(V!==g||xe!==w){if((_!==qn||S!==qn)&&(i.blendEquation(i.FUNC_ADD),_=qn,S=qn),xe)switch(V){case Ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFunc(i.ONE,i.ONE);break;case Ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ih:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",V);break}y=null,x=null,b=null,E=null,M.set(0,0,0),T=0,g=V,w=xe}return}Ct=Ct||Tt,dt=dt||ct,Xt=Xt||Et,(Tt!==_||Ct!==S)&&(i.blendEquationSeparate(Ht[Tt],Ht[Ct]),_=Tt,S=Ct),(ct!==y||Et!==x||dt!==b||Xt!==E)&&(i.blendFuncSeparate(z[ct],z[Et],z[dt],z[Xt]),y=ct,x=Et,b=dt,E=Xt),(Bt.equals(M)===!1||Re!==T)&&(i.blendColor(Bt.r,Bt.g,Bt.b,Re),M.copy(Bt),T=Re),g=V,w=!1}function at(V,Tt){V.side===Ue?it(i.CULL_FACE):q(i.CULL_FACE);let ct=V.side===Qe;Tt&&(ct=!ct),ut(ct),V.blending===Ir&&V.transparent===!1?Y(qe):Y(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Et=V.stencilWrite;a.setTest(Et),Et&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):it(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(V){C!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),C=V)}function mt(V){V!==sp?(q(i.CULL_FACE),V!==P&&(V===Ph?i.cullFace(i.BACK):V===rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):it(i.CULL_FACE),P=V}function Lt(V){V!==N&&(X&&i.lineWidth(V),N=V)}function Ot(V,Tt,ct){V?(q(i.POLYGON_OFFSET_FILL),(D!==Tt||U!==ct)&&(D=Tt,U=ct,o.getReversed()&&(Tt=-Tt),i.polygonOffset(Tt,ct))):it(i.POLYGON_OFFSET_FILL)}function Wt(V){V?q(i.SCISSOR_TEST):it(i.SCISSOR_TEST)}function Zt(V){V===void 0&&(V=i.TEXTURE0+H-1),tt!==V&&(i.activeTexture(V),tt=V)}function B(V,Tt,ct){ct===void 0&&(tt===null?ct=i.TEXTURE0+H-1:ct=tt);let Et=Q[ct];Et===void 0&&(Et={type:void 0,texture:void 0},Q[ct]=Et),(Et.type!==V||Et.texture!==Tt)&&(tt!==ct&&(i.activeTexture(ct),tt=ct),i.bindTexture(V,Tt||F[V]),Et.type=V,Et.texture=Tt)}function ae(){let V=Q[tt];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function A(){try{i.texSubImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function G(){try{i.texSubImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function gt(){try{i.texStorage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function vt(){try{i.texStorage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function ot(){try{i.texImage2D(...arguments)}catch(V){Jt("WebGLState:",V)}}function ht(){try{i.texImage3D(...arguments)}catch(V){Jt("WebGLState:",V)}}function bt(V){return d[V]!==void 0?d[V]:i.getParameter(V)}function kt(V,Tt){d[V]!==Tt&&(i.pixelStorei(V,Tt),d[V]=Tt)}function St(V){nt.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),nt.copy(V))}function yt(V){K.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),K.copy(V))}function Nt(V,Tt){let ct=c.get(Tt);ct===void 0&&(ct=new WeakMap,c.set(Tt,ct));let Et=ct.get(V);Et===void 0&&(Et=i.getUniformBlockIndex(Tt,V.name),ct.set(V,Et))}function Gt(V,Tt){let Et=c.get(Tt).get(V);l.get(Tt)!==Et&&(i.uniformBlockBinding(Tt,Et,V.__bindingPointIndex),l.set(Tt,Et))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,Q={},u={},f=new WeakMap,m=[],v=null,p=!1,g=null,_=null,y=null,x=null,S=null,b=null,E=null,M=new Pt(0,0,0),T=0,w=!1,C=null,P=null,N=null,D=null,U=null,nt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:it,bindFramebuffer:ft,drawBuffers:pt,useProgram:xt,setBlending:Y,setMaterial:at,setFlipSided:ut,setCullFace:mt,setLineWidth:Lt,setPolygonOffset:Ot,setScissorTest:Wt,activeTexture:Zt,bindTexture:B,unbindTexture:ae,compressedTexImage2D:Kt,compressedTexImage3D:L,texImage2D:ot,texImage3D:ht,pixelStorei:kt,getParameter:bt,updateUBOMapping:Nt,uniformBlockBinding:Gt,texStorage2D:gt,texStorage3D:vt,texSubImage2D:A,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:st,scissor:St,viewport:yt,reset:$t}}function hS(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,A){return m?new OffscreenCanvas(L,A):_r("canvas")}function p(L,A,G){let Z=1,st=Kt(L);if((st.width>G||st.height>G)&&(Z=G/Math.max(st.width,st.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let gt=Math.floor(Z*st.width),vt=Math.floor(Z*st.height);u===void 0&&(u=v(gt,vt));let ot=A?v(gt,vt):u;return ot.width=gt,ot.height=vt,ot.getContext("2d").drawImage(L,0,0,gt,vt),qt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+gt+"x"+vt+")."),ot}else return"data"in L&&qt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function g(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function y(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,A,G,Z,st,gt=!1){if(L!==null){if(i[L]!==void 0)return i[L];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let vt;Z&&(vt=t.get("EXT_texture_norm16"),vt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=A;if(A===i.RED&&(G===i.FLOAT&&(ot=i.R32F),G===i.HALF_FLOAT&&(ot=i.R16F),G===i.UNSIGNED_BYTE&&(ot=i.R8),G===i.UNSIGNED_SHORT&&vt&&(ot=vt.R16_EXT),G===i.SHORT&&vt&&(ot=vt.R16_SNORM_EXT)),A===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.R8UI),G===i.UNSIGNED_SHORT&&(ot=i.R16UI),G===i.UNSIGNED_INT&&(ot=i.R32UI),G===i.BYTE&&(ot=i.R8I),G===i.SHORT&&(ot=i.R16I),G===i.INT&&(ot=i.R32I)),A===i.RG&&(G===i.FLOAT&&(ot=i.RG32F),G===i.HALF_FLOAT&&(ot=i.RG16F),G===i.UNSIGNED_BYTE&&(ot=i.RG8),G===i.UNSIGNED_SHORT&&vt&&(ot=vt.RG16_EXT),G===i.SHORT&&vt&&(ot=vt.RG16_SNORM_EXT)),A===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.RG8UI),G===i.UNSIGNED_SHORT&&(ot=i.RG16UI),G===i.UNSIGNED_INT&&(ot=i.RG32UI),G===i.BYTE&&(ot=i.RG8I),G===i.SHORT&&(ot=i.RG16I),G===i.INT&&(ot=i.RG32I)),A===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),G===i.UNSIGNED_INT&&(ot=i.RGB32UI),G===i.BYTE&&(ot=i.RGB8I),G===i.SHORT&&(ot=i.RGB16I),G===i.INT&&(ot=i.RGB32I)),A===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),G===i.UNSIGNED_INT&&(ot=i.RGBA32UI),G===i.BYTE&&(ot=i.RGBA8I),G===i.SHORT&&(ot=i.RGBA16I),G===i.INT&&(ot=i.RGBA32I)),A===i.RGB&&(G===i.UNSIGNED_SHORT&&vt&&(ot=vt.RGB16_EXT),G===i.SHORT&&vt&&(ot=vt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),A===i.RGBA){let ht=gt?go:oe.getTransfer(st);G===i.FLOAT&&(ot=i.RGBA32F),G===i.HALF_FLOAT&&(ot=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ot=ht===me?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&vt&&(ot=vt.RGBA16_EXT),G===i.SHORT&&vt&&(ot=vt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function S(L,A){let G;return L?A===null||A===ci||A===ss?G=i.DEPTH24_STENCIL8:A===Yn?G=i.DEPTH32F_STENCIL8:A===Dr&&(G=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ci||A===ss?G=i.DEPTH_COMPONENT24:A===Yn?G=i.DEPTH_COMPONENT32F:A===Dr&&(G=i.DEPTH_COMPONENT16),G}function b(L,A){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Xe&&L.minFilter!==Be?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function E(L){let A=L.target;A.removeEventListener("dispose",E),T(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function M(L){let A=L.target;A.removeEventListener("dispose",M),C(A)}function T(L){let A=n.get(L);if(A.__webglInit===void 0)return;let G=L.source,Z=f.get(G);if(Z){let st=Z[A.__cacheKey];st.usedTimes--,st.usedTimes===0&&w(L),Object.keys(Z).length===0&&f.delete(G)}n.remove(L)}function w(L){let A=n.get(L);i.deleteTexture(A.__webglTexture);let G=L.source,Z=f.get(G);delete Z[A.__cacheKey],o.memory.textures--}function C(L){let A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(A.__webglFramebuffer[Z]))for(let st=0;st<A.__webglFramebuffer[Z].length;st++)i.deleteFramebuffer(A.__webglFramebuffer[Z][st]);else i.deleteFramebuffer(A.__webglFramebuffer[Z]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Z])}else{if(Array.isArray(A.__webglFramebuffer))for(let Z=0;Z<A.__webglFramebuffer.length;Z++)i.deleteFramebuffer(A.__webglFramebuffer[Z]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Z=0;Z<A.__webglColorRenderbuffer.length;Z++)A.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Z]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let G=L.textures;for(let Z=0,st=G.length;Z<st;Z++){let gt=n.get(G[Z]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(L)}let P=0;function N(){P=0}function D(){return P}function U(L){P=L}function H(){let L=P;return L>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function X(L){let A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function rt(L,A){let G=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){let Z=L.image;if(Z===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(G,L,A);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+A)}function W(L,A){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){it(G,L,A);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+A)}function tt(L,A){let G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){it(G,L,A);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+A)}function Q(L,A){let G=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){ft(G,L,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+A)}let _t={[gn]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[wl]:i.MIRRORED_REPEAT},O={[Xe]:i.NEAREST,[bp]:i.NEAREST_MIPMAP_NEAREST,[Qo]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[oc]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},nt={[Ap]:i.NEVER,[Dp]:i.ALWAYS,[Rp]:i.LESS,[Wc]:i.LEQUAL,[Cp]:i.EQUAL,[Xc]:i.GEQUAL,[Pp]:i.GREATER,[Ip]:i.NOTEQUAL};function K(L,A){if(A.type===Yn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Be||A.magFilter===oc||A.magFilter===Qo||A.magFilter===Si||A.minFilter===Be||A.minFilter===oc||A.minFilter===Qo||A.minFilter===Si)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,_t[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,_t[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,_t[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,O[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,O[A.minFilter]),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,nt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Xe||A.minFilter!==Qo&&A.minFilter!==Si||A.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function lt(L,A){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",E));let Z=A.source,st=f.get(Z);st===void 0&&(st={},f.set(Z,st));let gt=X(A);if(gt!==L.__cacheKey){st[gt]===void 0&&(st[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[gt].usedTimes++;let vt=st[L.__cacheKey];vt!==void 0&&(st[L.__cacheKey].usedTimes--,vt.usedTimes===0&&w(A)),L.__cacheKey=gt,L.__webglTexture=st[gt].texture}return G}function F(L,A,G){return Math.floor(Math.floor(L/G)/A)}function q(L,A,G,Z){let gt=L.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,G,Z,A.data);else{gt.sort((kt,St)=>kt.start-St.start);let vt=0;for(let kt=1;kt<gt.length;kt++){let St=gt[vt],yt=gt[kt],Nt=St.start+St.count,Gt=F(yt.start,A.width,4),$t=F(St.start,A.width,4);yt.start<=Nt+1&&Gt===$t&&F(yt.start+yt.count-1,A.width,4)===Gt?St.count=Math.max(St.count,yt.start+yt.count-St.start):(++vt,gt[vt]=yt)}gt.length=vt+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let kt=0,St=gt.length;kt<St;kt++){let yt=gt[kt],Nt=Math.floor(yt.start/4),Gt=Math.ceil(yt.count/4),$t=Nt%A.width,V=Math.floor(Nt/A.width),Tt=Gt,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,$t,V,Tt,ct,G,Z,A.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function it(L,A,G){let Z=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Z=i.TEXTURE_3D);let st=lt(L,A),gt=A.source;e.bindTexture(Z,L.__webglTexture,i.TEXTURE0+G);let vt=n.get(gt);if(gt.version!==vt.__version||st===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let ct=oe.getPrimaries(oe.workingColorSpace),Et=A.colorSpace===Zn?null:oe.getPrimaries(A.colorSpace),Ct=A.colorSpace===Zn||ct===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment);let ht=p(A.image,!1,s.maxTextureSize);ht=ae(A,ht);let bt=r.convert(A.format,A.colorSpace),kt=r.convert(A.type),St=x(A.internalFormat,bt,kt,A.normalized,A.colorSpace,A.isVideoTexture);K(Z,A);let yt,Nt=A.mipmaps,Gt=A.isVideoTexture!==!0,$t=vt.__version===void 0||st===!0,V=gt.dataReady,Tt=b(A,ht);if(A.isDepthTexture)St=S(A.format===Mi,A.type),$t&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,St,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,St,ht.width,ht.height,0,bt,kt,null));else if(A.isDataTexture)if(Nt.length>0){Gt&&$t&&e.texStorage2D(i.TEXTURE_2D,Tt,St,Nt[0].width,Nt[0].height);for(let ct=0,Et=Nt.length;ct<Et;ct++)yt=Nt[ct],Gt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,yt.width,yt.height,bt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,ct,St,yt.width,yt.height,0,bt,kt,yt.data);A.generateMipmaps=!1}else Gt?($t&&e.texStorage2D(i.TEXTURE_2D,Tt,St,ht.width,ht.height),V&&q(A,ht,bt,kt)):e.texImage2D(i.TEXTURE_2D,0,St,ht.width,ht.height,0,bt,kt,ht.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Gt&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,St,Nt[0].width,Nt[0].height,ht.depth);for(let ct=0,Et=Nt.length;ct<Et;ct++)if(yt=Nt[ct],A.format!==an)if(bt!==null)if(Gt){if(V)if(A.layerUpdates.size>0){let Ct=Kh(yt.width,yt.height,A.format,A.type);for(let dt of A.layerUpdates){let Xt=yt.data.subarray(dt*Ct/yt.data.BYTES_PER_ELEMENT,(dt+1)*Ct/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,dt,yt.width,yt.height,1,bt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,ht.depth,bt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,ht.depth,0,yt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?V&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,ht.depth,bt,kt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,St,yt.width,yt.height,ht.depth,0,bt,kt,yt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Gt&&$t&&e.texStorage2D(i.TEXTURE_2D,Tt,St,Nt[0].width,Nt[0].height);for(let ct=0,Et=Nt.length;ct<Et;ct++)yt=Nt[ct],A.format!==an?bt!==null?Gt?V&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,St,yt.width,yt.height,0,yt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,yt.width,yt.height,bt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,ct,St,yt.width,yt.height,0,bt,kt,yt.data)}else if(A.isDataArrayTexture)if(Gt){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,St,ht.width,ht.height,ht.depth),V)if(A.layerUpdates.size>0){let ct=Kh(ht.width,ht.height,A.format,A.type);for(let Et of A.layerUpdates){let Ct=ht.data.subarray(Et*ct/ht.data.BYTES_PER_ELEMENT,(Et+1)*ct/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Et,ht.width,ht.height,1,bt,kt,Ct)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,bt,kt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,ht.width,ht.height,ht.depth,0,bt,kt,ht.data);else if(A.isData3DTexture)Gt?($t&&e.texStorage3D(i.TEXTURE_3D,Tt,St,ht.width,ht.height,ht.depth),V&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,bt,kt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,St,ht.width,ht.height,ht.depth,0,bt,kt,ht.data);else if(A.isFramebufferTexture){if($t)if(Gt)e.texStorage2D(i.TEXTURE_2D,Tt,St,ht.width,ht.height);else{let ct=ht.width,Et=ht.height;for(let Ct=0;Ct<Tt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,St,ct,Et,0,bt,kt,null),ct>>=1,Et>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ht.parentNode!==ct){ct.appendChild(ht),d.add(A),ct.onpaint=Et=>{let Ct=Et.changedElements;for(let dt of d)Ct.includes(dt.image)&&(dt.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let Ct=i.RGBA,dt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ct,dt,Xt,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Gt&&$t){let ct=Kt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,St,ct.width,ct.height)}for(let ct=0,Et=Nt.length;ct<Et;ct++)yt=Nt[ct],Gt?V&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt,kt,yt):e.texImage2D(i.TEXTURE_2D,ct,St,bt,kt,yt);A.generateMipmaps=!1}else if(Gt){if($t){let ct=Kt(ht);e.texStorage2D(i.TEXTURE_2D,Tt,St,ct.width,ct.height)}V&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,ht)}else e.texImage2D(i.TEXTURE_2D,0,St,bt,kt,ht);g(A)&&_(Z),vt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ft(L,A,G){if(A.image.length!==6)return;let Z=lt(L,A),st=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+G);let gt=n.get(st);if(st.version!==gt.__version||Z===!0){e.activeTexture(i.TEXTURE0+G);let vt=oe.getPrimaries(oe.workingColorSpace),ot=A.colorSpace===Zn?null:oe.getPrimaries(A.colorSpace),ht=A.colorSpace===Zn||vt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let bt=A.isCompressedTexture||A.image[0].isCompressedTexture,kt=A.image[0]&&A.image[0].isDataTexture,St=[];for(let dt=0;dt<6;dt++)!bt&&!kt?St[dt]=p(A.image[dt],!0,s.maxCubemapSize):St[dt]=kt?A.image[dt].image:A.image[dt],St[dt]=ae(A,St[dt]);let yt=St[0],Nt=r.convert(A.format,A.colorSpace),Gt=r.convert(A.type),$t=x(A.internalFormat,Nt,Gt,A.normalized,A.colorSpace),V=A.isVideoTexture!==!0,Tt=gt.__version===void 0||Z===!0,ct=st.dataReady,Et=b(A,yt);K(i.TEXTURE_CUBE_MAP,A);let Ct;if(bt){V&&Tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,$t,yt.width,yt.height);for(let dt=0;dt<6;dt++){Ct=St[dt].mipmaps;for(let Xt=0;Xt<Ct.length;Xt++){let Bt=Ct[Xt];A.format!==an?Nt!==null?V?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt,0,0,Bt.width,Bt.height,Nt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt,$t,Bt.width,Bt.height,0,Bt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt,0,0,Bt.width,Bt.height,Nt,Gt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt,$t,Bt.width,Bt.height,0,Nt,Gt,Bt.data)}}}else{if(Ct=A.mipmaps,V&&Tt){Ct.length>0&&Et++;let dt=Kt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,$t,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(kt){V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,St[dt].width,St[dt].height,Nt,Gt,St[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,$t,St[dt].width,St[dt].height,0,Nt,Gt,St[dt].data);for(let Xt=0;Xt<Ct.length;Xt++){let Re=Ct[Xt].image[dt].image;V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt+1,0,0,Re.width,Re.height,Nt,Gt,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt+1,$t,Re.width,Re.height,0,Nt,Gt,Re.data)}}else{V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Nt,Gt,St[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,$t,Nt,Gt,St[dt]);for(let Xt=0;Xt<Ct.length;Xt++){let Bt=Ct[Xt];V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt+1,0,0,Nt,Gt,Bt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Xt+1,$t,Nt,Gt,Bt.image[dt])}}}g(A)&&_(i.TEXTURE_CUBE_MAP),gt.__version=st.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function pt(L,A,G,Z,st,gt){let vt=r.convert(G.format,G.colorSpace),ot=r.convert(G.type),ht=x(G.internalFormat,vt,ot,G.normalized,G.colorSpace),bt=n.get(A),kt=n.get(G);if(kt.__renderTarget=A,!bt.__hasExternalTextures){let St=Math.max(1,A.width>>gt),yt=Math.max(1,A.height>>gt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,gt,ht,St,yt,A.depth,0,vt,ot,null):e.texImage2D(st,gt,ht,St,yt,0,vt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Zt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,st,kt.__webglTexture,0,Wt(A)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,st,kt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(L,A,G){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer){let Z=A.depthTexture,st=Z&&Z.isDepthTexture?Z.type:null,gt=S(A.stencilBuffer,st),vt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Zt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(A),gt,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(A),gt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,L)}else{let Z=A.textures;for(let st=0;st<Z.length;st++){let gt=Z[st],vt=r.convert(gt.format,gt.colorSpace),ot=r.convert(gt.type),ht=x(gt.internalFormat,vt,ot,gt.normalized,gt.colorSpace);Zt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(A),ht,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(A),ht,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ht,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(L,A,G){let Z=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(A.depthTexture);if(st.__renderTarget=A,(!st.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Z){if(st.__webglInit===void 0&&(st.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),K(i.TEXTURE_CUBE_MAP,A.depthTexture);let bt=r.convert(A.depthTexture.format),kt=r.convert(A.depthTexture.type),St;A.depthTexture.format===xi?St=i.DEPTH_COMPONENT24:A.depthTexture.format===Mi&&(St=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,St,A.width,A.height,0,bt,kt,null)}}else rt(A.depthTexture,0);let gt=st.__webglTexture,vt=Wt(A),ot=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ht=A.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===xi)Zt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ot,gt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,ht,ot,gt,0);else if(A.depthTexture.format===Mi)Zt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,ot,gt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,ht,ot,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z(L){let A=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){let Z=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Z){let st=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Z.removeEventListener("dispose",st)};Z.addEventListener("dispose",st),A.__depthDisposeCallback=st}A.__boundDepthTexture=Z}if(L.depthTexture&&!A.__autoAllocateDepthBuffer)if(G)for(let Z=0;Z<6;Z++)Ht(A.__webglFramebuffer[Z],L,Z);else{let Z=L.texture.mipmaps;Z&&Z.length>0?Ht(A.__webglFramebuffer[0],L,0):Ht(A.__webglFramebuffer,L,0)}else if(G){A.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Z]),A.__webglDepthbuffer[Z]===void 0)A.__webglDepthbuffer[Z]=i.createRenderbuffer(),xt(A.__webglDepthbuffer[Z],L,!1);else{let st=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,gt)}}else{let Z=L.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),xt(A.__webglDepthbuffer,L,!1);else{let st=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(L,A,G){let Z=n.get(L);A!==void 0&&pt(Z.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&z(L)}function at(L){let A=L.texture,G=n.get(L),Z=n.get(A);L.addEventListener("dispose",M);let st=L.textures,gt=L.isWebGLCubeRenderTarget===!0,vt=st.length>1;if(vt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=A.version,o.memory.textures++),gt){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let ht=0;ht<A.mipmaps.length;ht++)G.__webglFramebuffer[ot][ht]=i.createFramebuffer()}else G.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<A.mipmaps.length;ot++)G.__webglFramebuffer[ot]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ot=0,ht=st.length;ot<ht;ot++){let bt=n.get(st[ot]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Zt(L)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<st.length;ot++){let ht=st[ot];G.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);let bt=r.convert(ht.format,ht.colorSpace),kt=r.convert(ht.type),St=x(ht.internalFormat,bt,kt,ht.normalized,ht.colorSpace,L.isXRRenderTarget===!0),yt=Wt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,St,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(G.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),K(i.TEXTURE_CUBE_MAP,A);for(let ot=0;ot<6;ot++)if(A.mipmaps&&A.mipmaps.length>0)for(let ht=0;ht<A.mipmaps.length;ht++)pt(G.__webglFramebuffer[ot][ht],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ht);else pt(G.__webglFramebuffer[ot],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);g(A)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,ht=st.length;ot<ht;ot++){let bt=st[ot],kt=n.get(bt),St=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(St=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,kt.__webglTexture),K(St,bt),pt(G.__webglFramebuffer,L,bt,i.COLOR_ATTACHMENT0+ot,St,0),g(bt)&&_(St)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ot=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),K(ot,A),A.mipmaps&&A.mipmaps.length>0)for(let ht=0;ht<A.mipmaps.length;ht++)pt(G.__webglFramebuffer[ht],L,A,i.COLOR_ATTACHMENT0,ot,ht);else pt(G.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,ot,0);g(A)&&_(ot),e.unbindTexture()}L.depthBuffer&&z(L)}function ut(L){let A=L.textures;for(let G=0,Z=A.length;G<Z;G++){let st=A[G];if(g(st)){let gt=y(L),vt=n.get(st).__webglTexture;e.bindTexture(gt,vt),_(gt),e.unbindTexture()}}}let mt=[],Lt=[];function Ot(L){if(L.samples>0){if(Zt(L)===!1){let A=L.textures,G=L.width,Z=L.height,st=i.COLOR_BUFFER_BIT,gt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(L),ot=A.length>1;if(ot)for(let bt=0;bt<A.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let ht=L.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let bt=0;bt<A.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[bt]);let kt=n.get(A[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,st,i.NEAREST),l===!0&&(mt.length=0,Lt.length=0,mt.push(i.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(mt.push(gt),Lt.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<A.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[bt]);let kt=n.get(A[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let A=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Wt(L){return Math.min(s.maxSamples,L.samples)}function Zt(L){let A=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function B(L){let A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function ae(L,A){let G=L.colorSpace,Z=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==mo&&G!==Zn&&(oe.getTransfer(G)===me?(Z!==an||st!==xn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",G)),A}function Kt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=rt,this.setTexture2DArray=W,this.setTexture3D=tt,this.setTextureCube=Q,this.rebindTextures=Y,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function fS(i,t){function e(n,s=Zn){let r,o=oe.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Oh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===Ve)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Hh)return i.RGB;if(n===an)return i.RGBA;if(n===xi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===hc)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===dc)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===vc||n===yc||n===Sc||n===Mc||n===sa||n===bc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xc||n===vc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sc)return r.COMPRESSED_R11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Nc||n===Uc||n===Fc||n===Oc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bc||n===zc||n===kc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Bc)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vc||n===Hc||n===ra||n===Gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Eo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ue({vertexShader:dS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xf=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,v=typeof XRWebGLBinding<"u",p=new _f,g={},_=e.getContextAttributes(),y=null,x=null,S=[],b=[],E=new et,M=null,T=null,w=new mn;w.viewport=new Ne;let C=new mn;C.viewport=new Ne;let P=[w,C],N=new ec,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let q=S[F];return q===void 0&&(q=new Mr,S[F]=q),q.getTargetRaySpace()},this.getControllerGrip=function(F){let q=S[F];return q===void 0&&(q=new Mr,S[F]=q),q.getGripSpace()},this.getHand=function(F){let q=S[F];return q===void 0&&(q=new Mr,S[F]=q),q.getHandSpace()};function H(F){let q=b.indexOf(F.inputSource);if(q===-1)return;let it=S[q];it!==void 0&&(it.update(F.inputSource,F.frame,c||o),it.dispatchEvent({type:F.type,data:F.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",rt);for(let F=0;F<S.length;F++){let q=b[F];q!==null&&(b[F]=null,S[F].disconnect(q))}D=null,U=null,p.reset();for(let F in g)delete g[F];if(t.setRenderTarget(y),f=null,u=null,d=null,s=null,x=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(E.width,E.height,!1),T!==null){let F=T.camera;F.fov=T.fov,F.zoom=T.zoom,F.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",rt),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,ft=null,pt=null;_.depth&&(pt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?Mi:xi,ft=_.stencil?ss:ci);let xt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Le(u.textureWidth,u.textureHeight,{format:an,type:xn,depthTexture:new yi(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let it={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Le(f.framebufferWidth,f.framebufferHeight,{format:an,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function rt(F){for(let q=0;q<F.removed.length;q++){let it=F.removed[q],ft=b.indexOf(it);ft>=0&&(b[ft]=null,S[ft].disconnect(it))}for(let q=0;q<F.added.length;q++){let it=F.added[q],ft=b.indexOf(it);if(ft===-1){for(let xt=0;xt<S.length;xt++)if(xt>=b.length){b.push(it),ft=xt;break}else if(b[xt]===null){b[xt]=it,ft=xt;break}if(ft===-1)break}let pt=S[ft];pt&&pt.connect(it)}}let W=new I,tt=new I;function Q(F,q,it){W.setFromMatrixPosition(q.matrixWorld),tt.setFromMatrixPosition(it.matrixWorld);let ft=W.distanceTo(tt),pt=q.projectionMatrix.elements,xt=it.projectionMatrix.elements,Ht=pt[14]/(pt[10]-1),z=pt[14]/(pt[10]+1),Y=(pt[9]+1)/pt[5],at=(pt[9]-1)/pt[5],ut=(pt[8]-1)/pt[0],mt=(xt[8]+1)/xt[0],Lt=Ht*ut,Ot=Ht*mt,Wt=ft/(-ut+mt),Zt=Wt*-ut;if(q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Zt),F.translateZ(Wt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),pt[10]===-1)F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let B=Ht+Wt,ae=z+Wt,Kt=Lt-Zt,L=Ot+(ft-Zt),A=Y*z/ae*B,G=at*z/ae*B;F.projectionMatrix.makePerspective(Kt,L,A,G,B,ae),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function _t(F,q){q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let q=F.near,it=F.far;p.texture!==null&&(p.depthNear>0&&(q=p.depthNear),p.depthFar>0&&(it=p.depthFar)),N.near=C.near=w.near=q,N.far=C.far=w.far=it,(D!==N.near||U!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,U=N.far),N.layers.mask=F.layers.mask|6,w.layers.mask=N.layers.mask&-5,C.layers.mask=N.layers.mask&-3;let ft=F.parent,pt=N.cameras;_t(N,ft);for(let xt=0;xt<pt.length;xt++)_t(pt[xt],ft);pt.length===2?Q(N,w,C):N.projectionMatrix.copy(w.projectionMatrix),T===null&&F.isPerspectiveCamera&&(T={camera:F,fov:F.fov,zoom:F.zoom}),O(F,N,ft)};function O(F,q,it){it===null?F.matrix.copy(q.matrixWorld):(F.matrix.copy(it.matrixWorld),F.matrix.invert(),F.matrix.multiply(q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(q.projectionMatrix),F.projectionMatrixInverse.copy(q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=vr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(F){return g[F]};let nt=null;function K(F,q){if(h=q.getViewerPose(c||o),m=q,h!==null){let it=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ft=!1;it.length!==N.cameras.length&&(N.cameras.length=0,ft=!0);for(let z=0;z<it.length;z++){let Y=it[z],at=null;if(f!==null)at=f.getViewport(Y);else{let mt=d.getViewSubImage(u,Y);at=mt.viewport,z===0&&(t.setRenderTargetTextures(x,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(x))}let ut=P[z];ut===void 0&&(ut=new mn,ut.layers.enable(z),ut.viewport=new Ne,P[z]=ut),ut.matrix.fromArray(Y.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Y.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(at.x,at.y,at.width,at.height),z===0&&(N.matrix.copy(ut.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ft===!0&&N.cameras.push(ut)}let pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let z=d.getDepthInformation(it[0]);z&&z.isValid&&z.texture&&p.init(z,s.renderState)}if(pt&&pt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let z=0;z<it.length;z++){let Y=it[z].camera;if(Y){let at=g[Y];at||(at=new Eo,g[Y]=at);let ut=d.getCameraImage(Y);at.sourceTexture=ut}}}}for(let it=0;it<S.length;it++){let ft=b[it],pt=S[it];ft!==null&&pt!==void 0&&pt.update(ft,q,c||o)}nt&&nt(F,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),m=null}let lt=new fm;lt.setAnimationLoop(K),this.setAnimationLoop=function(F){nt=F},this.dispose=function(){}}},mS=new Yt,xm=new Qt;xm.set(-1,0,0,0,1,0,0,0,1);function gS(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Zh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,y,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Qe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Qe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=t.get(g),y=_.envMap,x=_.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(mS.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(xm),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=y*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){let _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _S(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){let b=S.program;n.uniformBlockBinding(x,b)}function c(x,S){let b=s[x.id];b===void 0&&(p(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",_));let E=S.program;n.updateUBOMapping(x,E);let M=t.render.frame;r[x.id]!==M&&(u(x),r[x.id]=M)}function h(x){let S=d();x.__bindingPointIndex=S;let b=i.createBuffer(),E=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let S=s[x.id],b=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,T=b.length;M<T;M++){let w=b[M];if(Array.isArray(w))for(let C=0,P=w.length;C<P;C++)f(w[C],M,C,E);else f(w,M,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,b,E){if(v(x,S,b,E)===!0){let M=x.__offset,T=x.value;if(Array.isArray(T)){let w=0;for(let C=0;C<T.length;C++){let P=T[C],N=g(P);m(P,x.__data,w),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(w+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,x.__data)}}function m(x,S,b){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,b)}function v(x,S,b,E){let M=x.value,T=S+"_"+b;if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:ArrayBuffer.isView(M)?E[T]=M.slice():E[T]=M.clone(),!0;{let w=E[T];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return E[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function p(x){let S=x.uniforms,b=0,E=16;for(let T=0,w=S.length;T<w;T++){let C=Array.isArray(S[T])?S[T]:[S[T]];for(let P=0,N=C.length;P<N;P++){let D=C[P],U=Array.isArray(D.value)?D.value:[D.value];for(let H=0,X=U.length;H<X;H++){let rt=U[H],W=g(rt),tt=b%E,Q=tt%W.boundary,_t=tt+Q;b+=Q,_t!==0&&E-_t<W.storage&&(b+=E-_t),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=W.storage}}}let M=b%E;return M>0&&(b+=E-M),x.__size=b,x.__cache={},this}function g(x){let S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",x),S}function _(x){let S=x.target;S.removeEventListener("dispose",_);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function y(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}var xS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function vS(){return bi===null&&(bi=new Pn(xS,16,16,rs,Ve),bi.name="DFG_LUT",bi.minFilter=Be,bi.magFilter=Be,bi.wrapS=gi,bi.wrapT=gi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Jc=class{constructor(t={}){let{canvas:e=Np(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let v=f,p=new Set([dc,fc,hc]),g=new Set([xn,ci,Dr,ss,lc,cc]),_=new Uint32Array(4),y=new Int32Array(4),x=new I,S=null,b=null,E=[],M=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,C=!1,P=null,N=null,D=null,U=null;this._outputColorSpace=We;let H=0,X=0,rt=null,W=-1,tt=null,Q=new Ne,_t=new Ne,O=null,nt=new Pt(0),K=0,lt=e.width,F=e.height,q=1,it=null,ft=null,pt=new Ne(0,0,lt,F),xt=new Ne(0,0,lt,F),Ht=!1,z=new br,Y=!1,at=!1,ut=new Yt,mt=new I,Lt=new Ne,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Zt(){return rt===null?q:1}let B=n;function ae(R,k){return e.getContext(R,k)}let Kt,L,A,G,Z,st,gt,vt,ot,ht,bt,kt,St,yt,Nt,Gt,$t,V,Tt,ct,Et,Ct,dt;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Kn,!1),B===null){let k="webgl2";if(B=ae(k,R),B===null)throw ae(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(R){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),Jt("WebGLRenderer: "+R.message),R}function Xt(){Kt=new wy(B),Kt.init(),Et=new fS(B,Kt),L=new gy(B,Kt,t,Et),A=new uS(B,Kt),L.reversedDepthBuffer&&u&&A.buffers.depth.setReversed(!0),N=B.createFramebuffer(),D=B.createFramebuffer(),U=B.createFramebuffer(),G=new Cy(B),Z=new $1,st=new hS(B,Kt,A,Z,L,Et,G),gt=new Ey(w),vt=new I_(B),Ct=new py(B,vt),ot=new Ay(B,vt,G,Ct),ht=new Iy(B,ot,vt,Ct,G),V=new Py(B,L,st),Nt=new _y(Z),bt=new J1(w,gt,Kt,L,Ct,Nt),kt=new gS(w,Z),St=new j1,yt=new sS(Kt),$t=new dy(w,gt,A,ht,m,l),Gt=new cS(w,ht,L),dt=new _S(B,G,L,A),Tt=new my(B,Kt,G),ct=new Ry(B,Kt,G),G.programs=bt.programs,w.capabilities=L,w.extensions=Kt,w.properties=Z,w.renderLists=St,w.shadowMap=Gt,w.state=A,w.info=G}v!==xn&&(T=new Ly(v,e.width,e.height,a,s,r));let Bt=new xf(w,B);this.xr=Bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=Kt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Kt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(lt,F,!1))},this.getSize=function(R){return R.set(lt,F)},this.setSize=function(R,k,j=!0){if(Bt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=R,F=k,e.width=Math.floor(R*q),e.height=Math.floor(k*q),j===!0&&(e.style.width=R+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(lt*q,F*q).floor()},this.setDrawingBufferSize=function(R,k,j){lt=R,F=k,q=j,e.width=Math.floor(R*j),e.height=Math.floor(k*j),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(v===xn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Q)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,k,j,J){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,k,j,J),A.viewport(Q.copy(pt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,k,j,J){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,k,j,J),A.scissor(_t.copy(xt).multiplyScalar(q).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(R){A.setScissorTest(Ht=R)},this.setOpaqueSort=function(R){it=R},this.setTransparentSort=function(R){ft=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,j=!0){let J=0;if(R){let $=!1;if(rt!==null){let Rt=rt.texture.format;$=p.has(Rt)}if($){let Rt=rt.texture.type,Dt=g.has(Rt),At=$t.getClearColor(),Ut=$t.getClearAlpha(),Vt=At.r,ee=At.g,le=At.b;Dt?(_[0]=Vt,_[1]=ee,_[2]=le,_[3]=Ut,B.clearBufferuiv(B.COLOR,0,_)):(y[0]=Vt,y[1]=ee,y[2]=le,y[3]=Ut,B.clearBufferiv(B.COLOR,0,y))}else J|=B.COLOR_BUFFER_BIT}k&&(J|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),P=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Kn,!1),$t.dispose(),St.dispose(),yt.dispose(),Z.dispose(),gt.dispose(),ht.dispose(),Ct.dispose(),dt.dispose(),bt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",cd),Bt.removeEventListener("sessionend",ud),_s.stop()};function Re(R){R.preventDefault(),Wh("WebGLRenderer: Context Lost."),C=!0}function xe(){Wh("WebGLRenderer: Context Restored."),C=!1;let R=G.autoReset,k=Gt.enabled,j=Gt.autoUpdate,J=Gt.needsUpdate,$=Gt.type;Xt(),G.autoReset=R,Gt.enabled=k,Gt.autoUpdate=j,Gt.needsUpdate=J,Gt.type=$}function Kn(R){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function di(R){let k=R.target;k.removeEventListener("dispose",di),K0(k)}function K0(R){j0(R),Z.remove(R)}function j0(R){let k=Z.get(R).programs;k!==void 0&&(k.forEach(function(j){bt.releaseProgram(j)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,j,J,$,Rt){k===null&&(k=Ot);let Dt=$.isMesh&&$.matrixWorld.determinantAffine()<0,At=eg(R,k,j,J,$);A.setMaterial(J,Dt);let Ut=j.index,Vt=1;if(J.wireframe===!0){if(Ut=ot.getWireframeAttribute(j),Ut===void 0)return;Vt=2}let ee=j.drawRange,le=j.attributes.position,Ft=ee.start*Vt,ve=(ee.start+ee.count)*Vt;Rt!==null&&(Ft=Math.max(Ft,Rt.start*Vt),ve=Math.min(ve,(Rt.start+Rt.count)*Vt)),Ut!==null?(Ft=Math.max(Ft,0),ve=Math.min(ve,Ut.count)):le!=null&&(Ft=Math.max(Ft,0),ve=Math.min(ve,le.count));let Ye=ve-Ft;if(Ye<0||Ye===1/0)return;Ct.setup($,J,At,j,Ut);let Ie,Te=Tt;if(Ut!==null&&(Ie=vt.get(Ut),Te=ct,Te.setIndex(Ie)),$.isMesh)J.wireframe===!0?(A.setLineWidth(J.wireframeLinewidth*Zt()),Te.setMode(B.LINES)):Te.setMode(B.TRIANGLES);else if($.isLine){let fn=J.linewidth;fn===void 0&&(fn=1),A.setLineWidth(fn*Zt()),$.isLineSegments?Te.setMode(B.LINES):$.isLineLoop?Te.setMode(B.LINE_LOOP):Te.setMode(B.LINE_STRIP)}else $.isPoints?Te.setMode(B.POINTS):$.isSprite&&Te.setMode(B.TRIANGLES);if($.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))Te.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let fn=$._multiDrawStarts,It=$._multiDrawCounts,Tn=$._multiDrawCount,fe=Ut?vt.get(Ut).bytesPerElement:1,Wn=Z.get(J).currentProgram.getUniforms();for(let pi=0;pi<Tn;pi++)Wn.setValue(B,"_gl_DrawID",pi),Te.render(fn[pi]/fe,It[pi])}else if($.isInstancedMesh)Te.renderInstances(Ft,Ye,$.count);else if(j.isInstancedBufferGeometry){let fn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,It=Math.min(j.instanceCount,fn);Te.renderInstances(Ft,Ye,It)}else Te.render(Ft,Ye)};function ld(R,k,j,J){P!==null&&R.isNodeMaterial&&P.setObject(J,R),Y===!0&&Nt.setState(R,j,!1),R.transparent===!0&&R.side===Ue&&R.forceSinglePass===!1?(R.side=Qe,R.needsUpdate=!0,za(R,k,J),R.side=ai,R.needsUpdate=!0,za(R,k,J),R.side=Ue):za(R,k,J)}this.compile=function(R,k,j=null){j===null&&(j=R),P!==null&&P.renderStart(R,k,j),b=yt.get(j),b.init(k),M.push(b),j.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),R!==j&&R.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),at=this.localClippingEnabled,Y=Nt.init(this.clippingPlanes,at),Y===!0&&Nt.setGlobalState(this.clippingPlanes,k),P!==null&&Gt.render(b.state.shadowsArray,j,k);let J=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Rt=$.material;if(Rt)if(Array.isArray(Rt))for(let Dt=0;Dt<Rt.length;Dt++){let At=Rt[Dt];ld(At,j,k,$),J.add(At)}else ld(Rt,j,k,$),J.add(Rt)}),b=M.pop(),P!==null&&P.renderEnd(),J},this.compileAsync=function(R,k,j=null){let J=this.compile(R,k,j);return new Promise($=>{function Rt(){if(J.forEach(function(Dt){let Ut=Z.get(Dt).currentProgram;(Ut===void 0||Ut.isReady())&&J.delete(Dt)}),J.size===0){$(R);return}setTimeout(Rt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Hu=null;function Q0(R){Hu&&Hu(R)}function cd(){_s.stop()}function ud(){_s.start()}let _s=new fm;_s.setAnimationLoop(Q0),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(R){Hu=R,Bt.setAnimationLoop(R),R===null?_s.stop():_s.start()},Bt.addEventListener("sessionstart",cd),Bt.addEventListener("sessionend",ud),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;P!==null&&P.renderStart(R,k);let j=Bt.enabled===!0&&Bt.isPresenting===!0,J=T!==null&&(rt===null||j)&&T.begin(w,rt);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(k),k=Bt.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,k,rt),b=yt.get(R,M.length),b.init(k),b.state.textureUnits=st.getTextureUnits(),M.push(b),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z.setFromProjectionMatrix(ut,ei,k.reversedDepth),at=this.localClippingEnabled,Y=Nt.init(this.clippingPlanes,at),S=St.get(R,E.length),S.init(),E.push(S),Bt.enabled===!0&&Bt.isPresenting===!0){let Dt=w.xr.getDepthSensingMesh();Dt!==null&&Gu(Dt,k,-1/0,w.sortObjects)}Gu(R,k,0,w.sortObjects),S.finish(),P!==null&&P.updateLights(b.state.lightsArray),w.sortObjects===!0&&S.sort(it,ft),Wt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Wt&&$t.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Y===!0&&Nt.beginShadows();let $=b.state.shadowsArray;if(Gt.render($,R,k),Y===!0&&Nt.endShadows(),(J&&T.hasRenderPass())===!1){let Dt=S.opaque,At=S.transmissive;if(b.setupLights(),k.isArrayCamera){let Ut=k.cameras;if(At.length>0)for(let Vt=0,ee=Ut.length;Vt<ee;Vt++){let le=Ut[Vt];fd(Dt,At,R,le)}Wt&&$t.render(R);for(let Vt=0,ee=Ut.length;Vt<ee;Vt++){let le=Ut[Vt];hd(S,R,le,le.viewport)}}else At.length>0&&fd(Dt,At,R,k),Wt&&$t.render(R),hd(S,R,k)}rt!==null&&X===0&&(st.updateMultisampleRenderTarget(rt),st.updateRenderTargetMipmap(rt)),J&&T.end(w),R.isScene===!0&&R.onAfterRender(w,R,k),Ct.resetDefaultState(),W=-1,tt=null,M.pop(),M.length>0?(b=M[M.length-1],st.setTextureUnits(b.state.textureUnits),Y===!0&&Nt.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,P!==null&&P.renderEnd()};function Gu(R,k,j,J){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLightProbeGrid)b.pushLightProbeGrid(R);else if(R.isLight)b.pushLight(R),R.castShadow&&b.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(z)){J&&Lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);let Dt=ht.update(R),At=R.material;At.visible&&S.push(R,Dt,At,j,Lt.z,null,k)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(z))){let Dt=ht.update(R),At=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Lt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Lt.copy(Dt.boundingSphere.center)),Lt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(At)){let Ut=Dt.groups;for(let Vt=0,ee=Ut.length;Vt<ee;Vt++){let le=Ut[Vt],Ft=At[le.materialIndex];Ft&&Ft.visible&&S.push(R,Dt,Ft,j,Lt.z,le,k)}}else At.visible&&S.push(R,Dt,At,j,Lt.z,null,k)}}let Rt=R.children;for(let Dt=0,At=Rt.length;Dt<At;Dt++)Gu(Rt[Dt],k,j,J)}function hd(R,k,j,J){let{opaque:$,transmissive:Rt,transparent:Dt}=R;b.setupLightsView(j),Y===!0&&Nt.setGlobalState(w.clippingPlanes,j),J&&A.viewport(Q.copy(J)),$.length>0&&Ba($,k,j),Rt.length>0&&Ba(Rt,k,j),Dt.length>0&&Ba(Dt,k,j),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function fd(R,k,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[J.id]===void 0){let Ft=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[J.id]=new Le(1,1,{generateMipmaps:!0,type:Ft?Ve:xn,minFilter:Si,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Rt=b.state.transmissionRenderTarget[J.id],Dt=J.viewport||Q;Rt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);let At=w.getRenderTarget(),Ut=w.getActiveCubeFace(),Vt=w.getActiveMipmapLevel();w.setRenderTarget(Rt),w.getClearColor(nt),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),Wt&&$t.render(j);let ee=w.toneMapping;w.toneMapping=li;let le=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),b.setupLightsView(J),Y===!0&&Nt.setGlobalState(w.clippingPlanes,J),Ba(R,j,J),st.updateMultisampleRenderTarget(Rt),st.updateRenderTargetMipmap(Rt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let ve=0,Ye=k.length;ve<Ye;ve++){let Ie=k[ve],{object:Te,geometry:fn,material:It,group:Tn}=Ie;if(It.side===Ue&&Te.layers.test(J.layers)){let fe=It.side;It.side=Qe,It.needsUpdate=!0,dd(Te,j,J,fn,It,Tn),It.side=fe,It.needsUpdate=!0,Ft=!0}}Ft===!0&&(st.updateMultisampleRenderTarget(Rt),st.updateRenderTargetMipmap(Rt))}w.setRenderTarget(At,Ut,Vt),w.setClearColor(nt,K),le!==void 0&&(J.viewport=le),w.toneMapping=ee}function Ba(R,k,j){let J=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Rt=R.length;$<Rt;$++){let Dt=R[$],{object:At,geometry:Ut,group:Vt}=Dt,ee=Dt.material;ee.allowOverride===!0&&J!==null&&(ee=J),At.layers.test(j.layers)&&dd(At,k,j,Ut,ee,Vt)}}function dd(R,k,j,J,$,Rt){P!==null&&$.isNodeMaterial&&P.setObject(R,$),R.onBeforeRender(w,k,j,J,$,Rt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(w,k,j,J,R,Rt),$.transparent===!0&&$.side===Ue&&$.forceSinglePass===!1?($.side=Qe,$.needsUpdate=!0,w.renderBufferDirect(j,k,J,$,R,Rt),$.side=ai,$.needsUpdate=!0,w.renderBufferDirect(j,k,J,$,R,Rt),$.side=Ue):w.renderBufferDirect(j,k,J,$,R,Rt),R.onAfterRender(w,k,j,J,$,Rt)}function za(R,k,j){k.isScene!==!0&&(k=Ot);let J=Z.get(R),$=b.state.lights,Rt=b.state.shadowsArray,Dt=$.state.version,At=bt.getParameters(R,$.state,Rt,k,j,b.state.lightProbeGridArray),Ut=bt.getProgramCacheKey(At),Vt=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,J.fog=k.fog;let ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=gt.get(R.envMap||J.environment,ee),J.envMapRotation=J.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",di),Vt=new Map,J.programs=Vt);let le=Vt.get(Ut);if(le!==void 0){if(J.currentProgram===le&&J.lightsStateVersion===Dt)return md(R,At),le}else At.uniforms=bt.getUniforms(R),P!==null&&R.isNodeMaterial&&P.build(R,j,At),R.onBeforeCompile(At,w),le=bt.acquireProgram(At,Ut),Vt.set(Ut,le),J.uniforms=At.uniforms;let Ft=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ft.clippingPlanes=Nt.uniform),md(R,At),J.needsLights=ig(R),J.lightsStateVersion=Dt,J.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.sunLights.value=$.state.sun,Ft.sunLightShadows.value=$.state.sunShadow,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.sunShadowMatrix.value=$.state.sunShadowMatrix,Ft.sunShadowCascade.value=$.state.sunShadowCascade,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix),J.lightProbeGrid=b.state.lightProbeGridArray.length>0,J.currentProgram=le,J.uniformsList=null,le}function pd(R){if(R.uniformsList===null){let k=R.currentProgram.getUniforms();R.uniformsList=Ur.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function md(R,k){let j=Z.get(R);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function tg(R,k){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let j=0,J=R.length;j<J;j++){let $=R[j];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function eg(R,k,j,J,$){k.isScene!==!0&&(k=Ot),st.resetTextureUnits();let Rt=k.fog,Dt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?k.environment:null,At=rt===null?w.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:oe.workingColorSpace,Ut=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Vt=gt.get(J.envMap||Dt,Ut),ee=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,le=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ft=!!j.morphAttributes.position,ve=!!j.morphAttributes.normal,Ye=!!j.morphAttributes.color,Ie=li;J.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ie=w.toneMapping);let Te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,fn=Te!==void 0?Te.length:0,It=Z.get(J),Tn=b.state.lights;if(Y===!0&&(at===!0||R!==tt)){let Ce=R===tt&&J.id===W;Nt.setState(J,R,Ce)}let fe=!1;J.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Tn.state.version||It.outputColorSpace!==At||$.isBatchedMesh&&It.batching===!1||!$.isBatchedMesh&&It.batching===!0||$.isBatchedMesh&&It.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&It.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&It.instancing===!1||!$.isInstancedMesh&&It.instancing===!0||$.isSkinnedMesh&&It.skinning===!1||!$.isSkinnedMesh&&It.skinning===!0||$.isInstancedMesh&&It.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&It.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&It.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&It.instancingMorph===!1&&$.morphTexture!==null||It.envMap!==Vt||J.fog===!0&&It.fog!==Rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Nt.numPlanes||It.numIntersection!==Nt.numIntersection)||It.vertexAlphas!==ee||It.vertexTangents!==le||It.morphTargets!==Ft||It.morphNormals!==ve||It.morphColors!==Ye||It.toneMapping!==Ie||It.morphTargetsCount!==fn||!!It.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,It.__version=J.version);let Wn=It.currentProgram;fe===!0&&(Wn=za(J,k,$),P&&J.isNodeMaterial&&P.onUpdateProgram(J,Wn,It));let pi=!1,Hi=!1,Ys=!1,Me=Wn.getUniforms(),Ge=It.uniforms;if(A.useProgram(Wn.program)&&(pi=!0,Hi=!0,Ys=!0),J.id!==W&&(W=J.id,Hi=!0),It.needsLights){let Ce=tg(b.state.lightProbeGridArray,$);It.lightProbeGrid!==Ce&&(It.lightProbeGrid=Ce,Hi=!0)}if(pi||tt!==R){A.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(B,"projectionMatrix",R.projectionMatrix),Me.setValue(B,"viewMatrix",R.matrixWorldInverse);let Wi=Me.map.cameraPosition;Wi!==void 0&&Wi.setValue(B,mt.setFromMatrixPosition(R.matrixWorld)),L.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Me.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),tt!==R&&(tt=R,Hi=!0,Ys=!0)}if(It.needsLights&&(Tn.state.sunShadowMap.length>0&&Me.setValue(B,"sunShadowMap",Tn.state.sunShadowMap,st),Tn.state.directionalShadowMap.length>0&&Me.setValue(B,"directionalShadowMap",Tn.state.directionalShadowMap,st),Tn.state.spotShadowMap.length>0&&Me.setValue(B,"spotShadowMap",Tn.state.spotShadowMap,st),Tn.state.pointShadowMap.length>0&&Me.setValue(B,"pointShadowMap",Tn.state.pointShadowMap,st)),$.isSkinnedMesh){Me.setOptional(B,$,"bindMatrix"),Me.setOptional(B,$,"bindMatrixInverse");let Ce=$.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Me.setValue(B,"boneTexture",Ce.boneTexture,st))}$.isBatchedMesh&&(Me.setOptional(B,$,"batchingTexture"),Me.setValue(B,"batchingTexture",$._matricesTexture,st),Me.setOptional(B,$,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",$._indirectTexture,st),Me.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",$._colorsTexture,st));let Gi=j.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&V.update($,j,Wn),(Hi||It.receiveShadow!==$.receiveShadow)&&(It.receiveShadow=$.receiveShadow,Me.setValue(B,"receiveShadow",$.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&k.environment!==null&&(Ge.envMapIntensity.value=k.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=vS()),Hi){if(Me.setValue(B,"toneMappingExposure",w.toneMappingExposure),It.needsLights&&ng(Ge,Ys),Rt&&J.fog===!0&&kt.refreshFogUniforms(Ge,Rt),kt.refreshMaterialUniforms(Ge,J,q,F,b.state.transmissionRenderTarget[R.id]),It.needsLights&&It.lightProbeGrid){let Ce=It.lightProbeGrid;Ge.probesSH.value=Ce.texture,Ge.probesMin.value.copy(Ce.boundingBox.min),Ge.probesMax.value.copy(Ce.boundingBox.max),Ge.probesResolution.value.copy(Ce.resolution)}Ur.upload(B,pd(It),Ge,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ur.upload(B,pd(It),Ge,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Me.setValue(B,"center",$.center),Me.setValue(B,"modelViewMatrix",$.modelViewMatrix),Me.setValue(B,"normalMatrix",$.normalMatrix),Me.setValue(B,"modelMatrix",$.matrixWorld),J.uniformsGroups!==void 0){let Ce=J.uniformsGroups;for(let Wi=0,Zs=Ce.length;Wi<Zs;Wi++){let _d=Ce[Wi];dt.update(_d,Wn),dt.bind(_d,Wn)}}return Wn}function ng(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.sunLights.needsUpdate=k,R.sunLightShadows.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function ig(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(R,k,j){let J=Z.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Z.get(R.texture).__webglTexture=k,Z.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){let j=Z.get(R);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(R,k=0,j=0){rt=R,H=k,X=j;let J=null,$=!1,Rt=!1;if(R){let At=Z.get(R);if(At.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(B.FRAMEBUFFER,At.__webglFramebuffer),Q.copy(R.viewport),_t.copy(R.scissor),O=R.scissorTest,A.viewport(Q),A.scissor(_t),A.setScissorTest(O),W=-1;return}else if(At.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(At.__hasExternalTextures)st.rebindTextures(R,Z.get(R.texture).__webglTexture,Z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ee=R.depthTexture;if(At.__boundDepthTexture!==ee){if(ee!==null&&Z.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}let Ut=R.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);let Vt=Z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?J=Vt[k][j]:J=Vt[k],$=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?J=Z.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?J=Vt[j]:J=Vt,Q.copy(R.viewport),_t.copy(R.scissor),O=R.scissorTest}else Q.copy(pt).multiplyScalar(q).floor(),_t.copy(xt).multiplyScalar(q).floor(),O=Ht;if(j!==0&&(J=N),A.bindFramebuffer(B.FRAMEBUFFER,J)&&A.drawBuffers(R,J),A.viewport(Q),A.scissor(_t),A.setScissorTest(O),$){let At=Z.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,At.__webglTexture,j)}else if(Rt){let At=k;for(let Ut=0;Ut<R.textures.length;Ut++){let Vt=Z.get(R.textures[Ut]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ut,Vt.__webglTexture,j,At)}}else if(R!==null&&j!==0){let At=Z.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,At.__webglTexture,j)}W=-1};function gd(R){let k=Z.get(R);return(k.__readFormat!==R.format||k.__readType!==R.type)&&(k.__readFormat=R.format,k.__readType=R.type,k.__formatReadable=L.textureFormatReadable(R.format),k.__typeReadable=L.textureTypeReadable(R.type)),k}this.readRenderTargetPixels=function(R,k,j,J,$,Rt,Dt,At=0){if(!(R&&R.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut){A.bindFramebuffer(B.FRAMEBUFFER,Ut);try{let Vt=R.textures[At],ee=Vt.format,le=Vt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+At);let Ft=gd(Vt);if(Ft.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-J&&j>=0&&j<=R.height-$&&B.readPixels(k,j,J,$,Et.convert(ee),Et.convert(le),Rt)}finally{let Vt=rt!==null?Z.get(rt).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,k,j,J,$,Rt,Dt,At=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ut=Ut[Dt]),Ut)if(k>=0&&k<=R.width-J&&j>=0&&j<=R.height-$){A.bindFramebuffer(B.FRAMEBUFFER,Ut);let Vt=R.textures[At],ee=Vt.format,le=Vt.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+At);let Ft=gd(Vt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,Rt.byteLength,B.STREAM_READ),B.readPixels(k,j,J,$,Et.convert(ee),Et.convert(le),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ye=rt!==null?Z.get(rt).__webglFramebuffer:null;A.bindFramebuffer(B.FRAMEBUFFER,Ye);let Ie=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Fp(B,Ie,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Rt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ve),B.deleteSync(Ie),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,j=0){let J=Math.pow(2,-j),$=Math.floor(R.image.width*J),Rt=Math.floor(R.image.height*J),Dt=k!==null?k.x:0,At=k!==null?k.y:0;st.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,Dt,At,$,Rt),A.unbindTexture()},this.copyTextureToTexture=function(R,k,j=null,J=null,$=0,Rt=0){let Dt,At,Ut,Vt,ee,le,Ft,ve,Ye,Ie=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(j!==null)Dt=j.max.x-j.min.x,At=j.max.y-j.min.y,Ut=j.isBox3?j.max.z-j.min.z:1,Vt=j.min.x,ee=j.min.y,le=j.isBox3?j.min.z:0;else{let Ge=Math.pow(2,-$);Dt=Math.floor(Ie.width*Ge),At=Math.floor(Ie.height*Ge),R.isDataArrayTexture?Ut=Ie.depth:R.isData3DTexture?Ut=Math.floor(Ie.depth*Ge):Ut=1,Vt=0,ee=0,le=0}J!==null?(Ft=J.x,ve=J.y,Ye=J.z):(Ft=0,ve=0,Ye=0);let Te=Et.convert(k.format),fn=Et.convert(k.type),It;k.isData3DTexture?(st.setTexture3D(k,0),It=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(st.setTexture2DArray(k,0),It=B.TEXTURE_2D_ARRAY):(st.setTexture2D(k,0),It=B.TEXTURE_2D),A.activeTexture(B.TEXTURE0),A.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),A.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),A.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);let Tn=A.getParameter(B.UNPACK_ROW_LENGTH),fe=A.getParameter(B.UNPACK_IMAGE_HEIGHT),Wn=A.getParameter(B.UNPACK_SKIP_PIXELS),pi=A.getParameter(B.UNPACK_SKIP_ROWS),Hi=A.getParameter(B.UNPACK_SKIP_IMAGES);A.pixelStorei(B.UNPACK_ROW_LENGTH,Ie.width),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie.height),A.pixelStorei(B.UNPACK_SKIP_PIXELS,Vt),A.pixelStorei(B.UNPACK_SKIP_ROWS,ee),A.pixelStorei(B.UNPACK_SKIP_IMAGES,le);let Ys=R.isDataArrayTexture||R.isData3DTexture,Me=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){let Ge=Z.get(R),Gi=Z.get(k),Ce=Z.get(Ge.__renderTarget),Wi=Z.get(Gi.__renderTarget);A.bindFramebuffer(B.READ_FRAMEBUFFER,Ce.__webglFramebuffer),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Zs=0;Zs<Ut;Zs++)Ys&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(R).__webglTexture,$,le+Zs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,Rt,Ye+Zs)),B.blitFramebuffer(Vt,ee,Dt,At,Ft,ve,Dt,At,B.DEPTH_BUFFER_BIT,B.NEAREST);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||Z.has(R)){let Ge=Z.get(R),Gi=Z.get(k);A.bindFramebuffer(B.READ_FRAMEBUFFER,D),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Ce=0;Ce<Ut;Ce++)Ys?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ge.__webglTexture,$,le+Ce):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ge.__webglTexture,$),Me?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gi.__webglTexture,Rt,Ye+Ce):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gi.__webglTexture,Rt),$!==0?B.blitFramebuffer(Vt,ee,Dt,At,Ft,ve,Dt,At,B.COLOR_BUFFER_BIT,B.NEAREST):Me?B.copyTexSubImage3D(It,Rt,Ft,ve,Ye+Ce,Vt,ee,Dt,At):B.copyTexSubImage2D(It,Rt,Ft,ve,Vt,ee,Dt,At);A.bindFramebuffer(B.READ_FRAMEBUFFER,null),A.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Me?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(It,Rt,Ft,ve,Ye,Dt,At,Ut,Te,fn,Ie.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(It,Rt,Ft,ve,Ye,Dt,At,Ut,Te,Ie.data):B.texSubImage3D(It,Rt,Ft,ve,Ye,Dt,At,Ut,Te,fn,Ie):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Rt,Ft,ve,Dt,At,Te,fn,Ie.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Rt,Ft,ve,Ie.width,Ie.height,Te,Ie.data):B.texSubImage2D(B.TEXTURE_2D,Rt,Ft,ve,Dt,At,Te,fn,Ie);A.pixelStorei(B.UNPACK_ROW_LENGTH,Tn),A.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe),A.pixelStorei(B.UNPACK_SKIP_PIXELS,Wn),A.pixelStorei(B.UNPACK_SKIP_ROWS,pi),A.pixelStorei(B.UNPACK_SKIP_IMAGES,Hi),Rt===0&&k.generateMipmaps&&B.generateMipmap(It),A.unbindTexture()},this.initRenderTarget=function(R){Z.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),A.unbindTexture()},this.resetState=function(){H=0,X=0,rt=null,A.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function vm(i,t){let e=new Jc({canvas:i,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:2)),e.outputColorSpace=We,e.toneMapping=Us,e.toneMappingExposure=1,e.localClippingEnabled=!0,e.shadowMap.enabled=!0,e.shadowMap.type=Ls,e.shadowMap.autoUpdate=!1,e}var zt={cal:"#f3eee4",barrado:"#6e5d4b",argila:"#ddc8aa",piso:"#cdb89a",pisoT:"#c9b394",teto:"#f4efe6",telha:"#d39472",madeira:"#8b5a32",azul:"#2c5a86",grafite:"#3b3a38",aco:"#9ba3a5",cobogo:"#c98a62",vidro:"#b9d3dc",solar:"#203650",caixa:"#d9d6cf",grama:"#a9b58a",terra:"#b9a888",calcada:"#d8d0c2",rua:"#6f6b66",vizinho:"#e6dfd2",vizTelha:"#b8a690",agua:"#5f9fb3",folha:"#6f8a4e",ipe:"#e3b627",tronco:"#6a5440",poche:"#3b332a",tinta:"#2a241d"},yS=i=>new Pt(i),as=new Je(new I(-1,0,0),1e4),ls=new Je(new I(0,-1,0),1e4),Sm=[as,ls],vf={r:59/255,g:51/255,b:42/255},SS=[],MS=.72,Mm=(i,t,e)=>{let n=new Pn(new Uint8Array([i,t,e,255]),1,1);return n.needsUpdate=!0,n},ym=Mm(255,255,255),bS=Mm(128,128,255),os={on:{value:0}};for(let i of["plaster","tiles","wood"])os[i]={map:{value:ym},nor:{value:bS},arm:{value:ym}};var TS=`
  vec3 trNW = normalize(vWN) * (gl_FrontFacing ? 1.0 : -1.0);
  vec3 trB = pow(abs(trNW), vec3(4.0)); trB /= trB.x + trB.y + trB.z;
  float trM = tOn * (tTop > .5 ? smoothstep(.45, .6, trNW.y) : 1.0);
  vec2 trUx = vWP.zy / tScale, trUy = vWP.xz / tScale, trUz = vWP.xy / tScale;
  vec3 trMean = max(textureLod(tMap, vec2(.5), 12.0).rgb, vec3(.02)), trAM = max(textureLod(tArm, vec2(.5), 12.0).rgb, vec3(.02));
  vec3 trC = (texture2D(tMap, trUx).rgb * trB.x + texture2D(tMap, trUy).rgb * trB.y + texture2D(tMap, trUz).rgb * trB.z) / trMean;
  vec3 trArm = (texture2D(tArm, trUx).rgb * trB.x + texture2D(tArm, trUy).rgb * trB.y + texture2D(tArm, trUz).rgb * trB.z) / trAM;
  vec3 trX = texture2D(tNor, trUx).xyz * 2.0 - 1.0, trY = texture2D(tNor, trUy).xyz * 2.0 - 1.0, trZ = texture2D(tNor, trUz).xyz * 2.0 - 1.0;
  trX = vec3(trX.xy * tKn + trNW.zy, trNW.x); trY = vec3(trY.xy * tKn + trNW.xz, trNW.y); trZ = vec3(trZ.xy * tKn + trNW.xy, trNW.z);
  vec3 trN = normalize(mix(trNW, trX.zyx * trB.x + trY.xzy * trB.y + trZ * trB.z, trM));
  trArm = mix(vec3(1.0), trArm, trM);
  diffuseColor.rgb *= mix(vec3(1.0), mix(vec3(1.0), trC, tK), trM);`;function ze(i={},t=!0,e=null){let n=new Is({roughness:.9,metalness:0,side:Ue,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,...i});return n.clippingPlanes=Sm,n.clipShadows=!1,n.shadowSide=Ue,n.onBeforeCompile=s=>{if(s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;${e?`
varying vec3 vWN;`:""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;${e?`
  vWN = normalize(mat3(modelMatrix) * objectNormal);`:""}`),e){let r=os[e.set];Object.assign(s.uniforms,{tMap:r.map,tNor:r.nor,tArm:r.arm,tOn:os.on,tScale:{value:e.scale},tK:{value:e.k??1},tKn:{value:e.kn??1},tTop:{value:e.top?1:0}}),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWN;
uniform sampler2D tMap, tNor, tArm;
uniform float tOn, tScale, tK, tKn, tTop;`).replace("#include <color_fragment>",`#include <color_fragment>${TS}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = clamp(roughnessFactor * trArm.g, .04, 1.0);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  normal = normalize(mix(normal, (viewMatrix * vec4(trN, 0.0)).xyz, step(.001, trM)));`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
  reflectedLight.indirectDiffuse *= mix(1.0, trArm.r, .8);`)}s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
  { vec3 q = step(vec3(.24, -.3, vWP.y < 2.95 ? 7.64 : 5.01), vWP) * step(vWP, vec3(8.26, 9.0, vWP.y < 2.95 ? 19.76 : 18.26));
    reflectedLight.indirectDiffuse *= mix(1.0, ${MS.toFixed(2)}, q.x * q.y * q.z); }`),t&&(s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (!gl_FrontFacing) gl_FragColor = vec4(${vf.r.toFixed(4)}, ${vf.g.toFixed(4)}, ${vf.b.toFixed(4)}, 1.0);`))},n.customProgramCacheKey=()=>(t?"solid-p":"solid-n")+(e?"-tri":""),SS.push(n),n}function Sn(i,t){let e=i.index?i.toNonIndexed():i;e.computeVertexNormals();let n=e.attributes.position,s=e.attributes.normal,r=new Float32Array(n.count*3),o={};for(let a=0;a<n.count;a+=3){let l=s.getX(a)+s.getX(a+1)+s.getX(a+2),c=s.getY(a)+s.getY(a+1)+s.getY(a+2),h=s.getZ(a)+s.getZ(a+1)+s.getZ(a+2),d=Math.hypot(l,c,h)||1,u=(n.getX(a)+n.getX(a+1)+n.getX(a+2))/3,f=(n.getY(a)+n.getY(a+1)+n.getY(a+2))/3,m=(n.getZ(a)+n.getZ(a+1)+n.getZ(a+2))/3,v=t(l/d,c/d,h/d,u,f,m),p=o[v]||(o[v]=yS(v));for(let g=0;g<3;g++)r[(a+g)*3]=p.r,r[(a+g)*3+1]=p.g,r[(a+g)*3+2]=p.b}return e.setAttribute("color",new se(r,3)),e}var cs={value:0};function bm(i,t,e,n,s=1,r=7){let o=r,a=()=>(o=o*16807%2147483647)/2147483647,l=new Float32Array(i*t);for(let[c,h]of e){let d=c,u=Math.max(1,Math.round(c/s)),f=new Float32Array(d*u).map(a);for(let m=0;m<t;m++)for(let v=0;v<i;v++){let p=v/i*d,g=m/t*u,_=Math.floor(p),y=Math.floor(g),x=p-_,S=g-y,b=x*x*(3-2*x),E=S*S*(3-2*S),M=(_+1)%d,T=(y+1)%u,w=f[y*d+_],C=f[y*d+M],P=f[T*d+_],N=f[T*d+M];l[m*i+v]+=h*(w+(C-w)*b+(P-w)*E+(w-C-P+N)*b*E)}}return Tm(l,i,t,n)}function Tm(i,t,e,n){let s=new Uint8Array(t*e*4);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let l=(i[o*t+(a+1)%t]-i[o*t+(a-1+t)%t])*n,c=(i[(o+1)%e*t+a]-i[(o-1+e)%e*t+a])*n,h=Math.hypot(l,c,1),d=(o*t+a)*4;s[d]=(-l/h*.5+.5)*255,s[d+1]=(-c/h*.5+.5)*255,s[d+2]=(1/h*.5+.5)*255,s[d+3]=255}let r=new Pn(s,t,e,an);return r.wrapS=r.wrapT=gn,r.magFilter=Be,r.minFilter=Si,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,r}var ES=()=>{let i=bm(256,256,[[4,.55],[9,.25],[24,.12],[64,.08]],9);return i.repeat.set(1/1.6,1/1.6),i},wS=()=>{let i=bm(64,256,[[16,.5],[48,.3],[64,.2]],6,12,11);return i.repeat.set(1,1),i};function AS(){let e=new Float32Array(4096);for(let s=0;s<64;s++)for(let r=0;r<64;r++){let o=s/64;e[s*64+r]=Math.pow(o,1.6)*.9+.05*Math.cos(r/64*Math.PI*2)}let n=Tm(e,64,64,2.2);return n.repeat.set(2.5,4),n}var RS=typeof document<"u";function ua(i,t,e,n,s){if(!RS)return null;let r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);let o=new ws(r);return o.wrapS=o.wrapT=gn,o.repeat.set(n,s),o.anisotropy=4,o.colorSpace=We,o}var CS=()=>ua(64,64,(i,t,e)=>{i.fillStyle="#fff",i.fillRect(0,0,t,e);let n=i.createLinearGradient(0,0,0,e);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.7,"rgba(0,0,0,.05)"),n.addColorStop(1,"rgba(0,0,0,.2)"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(0,0,0,.18)",i.fillRect(0,0,t,2)},2.5,4),PS=()=>ua(64,64,(i,t,e)=>{i.clearRect(0,0,t,e),i.strokeStyle="#fff",i.lineWidth=14;for(let n=-1;n<=1;n++)i.beginPath(),i.moveTo(n*t,0),i.lineTo(n*t+t,e),i.stroke(),i.beginPath(),i.moveTo(n*t+t,0),i.lineTo(n*t,e),i.stroke()},1,1),IS=()=>ua(32,32,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="#fff",i.fillRect(0,0,9,e),i.fillRect(0,0,t,4)},1,1),DS=()=>ua(64,64,(i,t,e)=>{i.fillStyle="#fff",i.fillRect(0,0,t,e),i.fillStyle="#9fb2c8",i.fillRect(0,0,t,2),i.fillRect(0,0,2,e)},5,6),LS=()=>ua(16,32,(i,t,e)=>{i.fillStyle="#fff",i.fillRect(0,0,t,e),i.fillStyle="rgba(0,0,0,.45)",i.fillRect(0,e-9,t,9)},1,7);function NS(){let i=ze({color:zt.agua,roughness:.06,metalness:.05,envMapIntensity:1.4},!1),t=i.onBeforeCompile;return i.onBeforeCompile=(e,n)=>{t(e,n),e.uniforms.uTime=cs,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  { vec2 p = vWP.xz * 3.2; float t = uTime;
    vec2 g = vec2(cos(p.x * 1.7 + t * 1.3) + .6 * cos(p.x * 3.1 - p.y * 2.3 + t * 1.9) + .35 * cos(p.y * 5.3 + t * 2.6),
                  cos(p.y * 1.9 - t * 1.1) + .6 * cos(p.y * 2.9 + p.x * 2.1 - t * 1.7) + .35 * cos(p.x * 4.7 - t * 2.3)) * .05;
    normal = normalize(normal + (viewMatrix * vec4(g.x, 0.0, g.y, 0.0)).xyz); }`)},i.customProgramCacheKey=()=>"water",i}function yf(i){let t=i.onBeforeCompile;return i.onBeforeCompile=(e,n)=>{t(e,n),e.uniforms.uTime=cs,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  { float k = smoothstep(1.0, 6.5, transformed.y);
    transformed.x += k * .06 * sin(uTime * 1.4 + transformed.z * .9 + transformed.y * .6);
    transformed.z += k * .045 * cos(uTime * 1.1 + transformed.x * .8); }`)},i.customProgramCacheKey=()=>"solid-wind",i}function Em(){let i=CS(),t=PS(),e=IS(),n=ES(),s=wS(),r={built:ze({vertexColors:!0,normalMap:n,normalScale:new et(.35,.35)},!0,{set:"plaster",scale:2.4,k:.4,kn:.45}),roof:ze({vertexColors:!0,map:i,normalMap:AS(),normalScale:new et(.6,.6),roughness:.8},!0,{set:"tiles",scale:3.4,k:.85,kn:1,top:!0}),wood:ze({color:zt.madeira,roughness:.7,normalMap:s,normalScale:new et(.4,.4)},!0,{set:"wood",scale:1.4,kn:.6}),louver:ze({color:zt.madeira,roughness:.75,map:LS()}),sash:ze({color:zt.azul,roughness:.6}),steel:ze({color:zt.grafite,roughness:.5,metalness:.3}),cobogo:ze({color:zt.cobogo,roughness:.95}),mux:ze({color:zt.madeira,roughness:.8,map:t,alphaTest:.45},!1),grate:ze({color:zt.aco,roughness:.45,metalness:.5,map:e,alphaTest:.5},!1),rail:ze({color:zt.madeira,roughness:.75,normalMap:s,normalScale:new et(.3,.3)},!0,{set:"wood",scale:1.4,kn:.4}),tank:ze({color:zt.caixa,roughness:.6}),movel:ze({vertexColors:!0,roughness:.65},!0,{set:"wood",scale:1.1,k:.8,kn:.45}),tecido:ze({vertexColors:!0,roughness:1}),liso:ze({vertexColors:!0,roughness:.3,metalness:.05}),solar:ze({color:zt.solar,roughness:.25,metalness:.4,map:DS()}),site:ze({vertexColors:!0,roughness:1}),ground:new Is({vertexColors:!0,roughness:1}),hipRoof:ze({vertexColors:!0,roughness:1},!1),leaf:ze({color:zt.folha,roughness:1,flatShading:!0}),bark:ze({color:zt.tronco,roughness:1}),water:NS(),glass:new Is({color:zt.vidro,roughness:.04,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,side:Ue,envMapIntensity:1.6}),edge:new si({color:zt.tinta,transparent:!0,opacity:.28}),ghost:new si({color:zt.tinta,transparent:!0,opacity:.1})};for(let o of["glass","edge","ghost"])r[o].clippingPlanes=Sm;return t&&(t.repeat.set(1/.09,1/.09),t.colorSpace=Zn),e&&(e.repeat.set(1/.045,1/.045),e.colorSpace=Zn),r}var Dn=[0,3.06,6.12],us=i=>9+(i-7.4)*.3,ks=i=>us(i)+.26,hi=i=>12-(i-11.6)*.3,Qc=i=>hi(i)+.26,tu=8.6,Mn=(i,t,e,n,s=.7)=>e==null?[[i,t,"glass",s]]:[[i,t,"glass",s],[e,n,"band",.65]],ke=18.5,ui=20,US=i=>[[7.4,us(7.4)+i],[12.4,us(12.4)+i],[12.4,hi(12.4)+i],[ke,hi(ke)+i],[ke,3.45]],wm=[{axis:"x",z0:7.4,z1:7.65,a0:.25,a1:8.5,out:-1,top:[[.25,2.9],[8.5,2.9]],open:[{id:"PCZ",room:"cozinha",a0:.6,a1:2.8,v0:0,v1:2.65,leaves:2,parts:Mn(0,2.2,2.25,2.65)},{id:"PT1",room:"copa",a0:3.6,a1:4.6,v0:0,v1:2.55,leaves:1,parts:[[0,1,"panel"],[1,2.1,"glass",.6],[2.15,2.55,"band",.65]]},{id:"PCO",room:"copa",a0:5.05,a1:7.95,v0:0,v1:2.65,leaves:4,parts:Mn(0,2.2,2.25,2.65)}]},{axis:"x",z0:5,z1:5.25,a0:.25,a1:8.5,out:-1,b:3.06,top:[[.25,8.33],[8.5,8.33]],open:[...[.625,2.575,4.525,6.475].map(i=>({id:"JSA",room:"sala",a0:i,a1:i+1.4,v0:3.06,v1:5.65,leaves:2,mux:!0,parts:Mn(3.06,5.26,5.3,5.65)})),...[.625,2.575,4.525,6.475].map(i=>({id:"JAS",room:"sala",a0:i,a1:i+1.4,v0:6.4,v1:7.8,leaves:1,parts:Mn(6.4,7.8)}))]},{axis:"x",z0:ke-.25,z1:ke,a0:.25,a1:8.5,out:1,b:3.06,top:[[.25,hi(ke)+.07],[8.5,hi(ke)+.07]],open:[{id:"JRV",room:"rev",a0:.8,a1:2.4,v0:4.16,v1:5.75,leaves:2,parts:Mn(4.16,5.36,5.4,5.75)},{id:"JBE",room:"bsuite",a0:3.35,a1:4.35,v0:4.66,v1:5.36,leaves:1,parts:Mn(4.66,5.36)},{id:"JSU",room:"suite",a0:5.35,a1:7.75,v0:4.16,v1:5.75,leaves:4,parts:Mn(4.16,5.36,5.4,5.75)},{id:"peitoril",room:"q1",a0:1.2,a1:3.2,v0:6.32,v1:6.82,parts:[[6.32,6.82,"wood"]]},{id:"JQ1",room:"q1",a0:1.2,a1:3.2,v0:7.12,v1:8.7,leaves:2,parts:Mn(7.12,8.32,8.36,8.7)},{id:"peitoril",room:"q2",a0:5.3,a1:7.3,v0:6.32,v1:6.82,parts:[[6.32,6.82,"wood"]]},{id:"JQ2",room:"q2",a0:5.3,a1:7.3,v0:7.12,v1:8.7,leaves:2,parts:Mn(7.12,8.32,8.36,8.7)}]},{axis:"x",z0:ui-.25,z1:ui,a0:.25,a1:8.5,out:1,top:[[.25,3.45],[8.5,3.45]],open:[]},{axis:"z",x0:0,x1:.25,a0:5,a1:ui,out:-1,top:[[5,ks(5)+.35],[12.4,ks(12.4)+.35],[12.4,Qc(12.4)+.35],[19.2,Qc(19.2)+.35],[19.2,3.45],[ui,3.45]],open:[]},{axis:"z",x0:8.25,x1:8.5,a0:7.4,a1:ui-.25,out:1,top:[...US(.05),[ui-.25,3.45]],open:[{id:"JTL",room:"copa",a0:8.4,a1:10.2,v0:.9,v1:2.85,leaves:2,parts:Mn(.9,2.4,2.45,2.85)},{id:"PJE",room:"estarT",a0:15.8,a1:17.55,v0:0,v1:2.65,leaves:2,parts:Mn(0,2.2,2.25,2.65)},{id:"JBH",room:"bhosp",a0:18.3,a1:19.3,v0:1.6,v1:2.2,leaves:1,parts:Mn(1.6,2.2)},{id:"JSL",room:"sala",a0:9,a1:9.8,v0:4.66,v1:5.16,leaves:1,parts:Mn(4.66,5.16,null,null,.45)},{id:"JEL",room:"suite",a0:16.4,a1:17.6,v0:4.36,v1:5.36,leaves:2,parts:Mn(4.36,5.36)},{id:"JQ2L",room:"mezanino",a0:9,a1:9.8,v0:7.72,v1:8.22,leaves:1,parts:Mn(7.72,8.22,null,null,.45)},{id:"cobogo",room:"nucleo",a0:11.6,a1:13.5,v0:.3,v1:8.6,parts:[]}]},{axis:"z",x0:8.25,x1:8.5,a0:5,a1:7.4,out:1,b:3.06,top:[[5,us(5)+.05],[7.4,us(7.4)+.05]],open:[{id:"JSL2",room:"sala",a0:5.6,a1:7,v0:6.5,v1:7.7,leaves:1,parts:Mn(6.5,7.7)}]}],Am=[{lv:0,axis:"z",x0:3.125,x1:3.275,a0:7.65,a1:11.325,b:0,t:2.9,doors:[[8.6,10.4]]},{lv:0,axis:"x",z0:11.325,z1:11.475,a0:.25,a1:3.275,b:0,t:2.9,doors:[[.45,1.25]]},{lv:0,axis:"x",z0:11.325,z1:11.475,a0:5.1,a1:8.25,b:0,t:2.9},{lv:0,axis:"z",x0:1.6,x1:1.75,a0:11.475,a1:13.625,b:0,t:2.9},{lv:0,axis:"z",x0:3.125,x1:3.275,a0:11.475,a1:13.625,b:0,t:2.9,doors:[[12.1,12.9]]},{lv:0,axis:"x",z0:13.625,z1:13.775,a0:.25,a1:8.25,b:0,t:2.9,doors:[[.6,1.4],[3.4,5,"emb"]]},{lv:0,axis:"z",x0:1.6,x1:1.75,a0:13.775,a1:17.75,b:0,t:2.9},{lv:0,axis:"x",z0:17.75,z1:17.9,a0:.25,a1:8.25,b:0,t:2.9,doors:[[.6,1.4],[6.5,7.2]]},{lv:0,axis:"z",x0:5.95,x1:6.1,a0:17.9,a1:ui-.25,b:0,t:2.9},{lv:1,axis:"x",z0:11.325,z1:11.475,a0:.25,a1:8.25,b:3.06,t:5.96,doors:[[3.4,5]],vint:[[5.2,8.2,5.25,5.8]]},{lv:1,axis:"z",x0:1.6,x1:1.75,a0:11.475,a1:13.625,b:3.06,t:5.96,doors:[[12.1,12.9]]},{lv:1,axis:"x",z0:13.625,z1:13.775,a0:.25,a1:8.25,b:3.06,t:5.96,doors:[[1.85,2.65],[3.4,4.2]],vint:[[5.2,8.2,5.25,5.8]]},{lv:1,axis:"z",x0:2.9,x1:3.05,a0:13.775,a1:ke-.25,b:3.06,t:5.96},{lv:1,axis:"x",z0:16,z1:16.15,a0:3.05,a1:4.675,b:3.06,t:5.96,doors:[[3.3,4]]},{lv:1,axis:"z",x0:4.675,x1:4.825,a0:13.775,a1:ke-.25,b:3.06,t:5.96,doors:[[13.95,14.75]]},{lv:2,axis:"x",z0:11.325,z1:11.475,a0:.25,a1:8.25,b:6.12,t:us(11.475)+.04,doors:[[3.5,5]],vint:[[5.2,8.2,8.4,10.1],[3.35,5,8.4,10.1]]},{lv:2,axis:"z",x0:3.125,x1:3.275,a0:11.475,a1:13.775,b:6.12,t:8.96,doors:[[12.1,12.9]]},{lv:2,axis:"x",z0:13.625,z1:13.775,a0:.25,a1:8.25,b:6.12,t:hi(13.625)+.04,doors:[[3.35,4.1],[4.58,5.36]]},{lv:2,axis:"z",x0:4.175,x1:4.325,a0:13.775,a1:ke-.25,b:6.12,top:[[13.775,hi(13.775)+.04],[ke-.25,hi(ke-.25)+.04]]}],re=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Ei={x0:.55,x1:7.95,z0:19.05,z1:19.65,y:3},Rm=[{lv:0,pts:re(0,5,8.5,ui),b:-.15,t:0,kind:"floor"},{lv:1,pts:re(0,5,8.5,11.475),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:re(0,11.475,3.275,13.625),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:re(0,13.625,8.5,ke),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:re(3.275,11.475,5.1,13.625),b:2.96,t:3.06,kind:"grelha"},{lv:1,pts:re(5.1,12.725,5.38,13.625),b:2.96,t:3.06,kind:"grelha"},{lv:1,pts:re(0,ke,8.5,Ei.z0),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:re(0,Ei.z1,8.5,ui),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:re(0,Ei.z0,Ei.x0,Ei.z1),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:re(Ei.x1,Ei.z0,8.5,Ei.z1),b:2.9,t:3.06,kind:"floor"},{lv:2,pts:re(0,tu,8.5,11.475),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:re(0,11.475,3.275,13.625),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:re(0,13.625,8.5,ke),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:re(.25,ke,8.5,ke+.5),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:[[3.275,11.475],[6.22,11.475],[6.22,12.725],[5.38,12.725],[5.38,13.625],[3.275,13.625]],b:6.02,t:6.12,kind:"grelha"},{lv:3,pts:re(4.325,13.775,8.25,ke-.25),b:8.9,t:9.06,kind:"floor"},{lv:3,pts:re(.25,11.475,3.125,13.625),b:8.9,t:8.96,kind:"floor"}],zi=[{id:"pilotis",lv:0,name:"Alpendre",out:!0,pts:re(.25,5,8.5,7.4)},{id:"cozinha",lv:0,name:"Cozinha",key:"jantar",zone:"cozinha",h:2.9,pts:re(.25,7.65,3.125,11.325)},{id:"copa",lv:0,name:"Copa",key:"jantar",zone:"copa",h:2.9,pts:re(3.275,7.65,8.25,11.325)},{id:"despensa",lv:0,name:"Despensa",h:2.9,pts:re(.25,11.475,1.6,13.625)},{id:"lavabo",lv:0,name:"Lavabo",h:2.9,pts:re(1.75,11.475,3.125,13.625)},{id:"passagem",lv:0,name:"Passagem",key:"nucleo",zone:"nucleo",pts:re(3.275,11.325,5.1,13.625)},{id:"escada",lv:0,name:"Escada",key:"nucleo",zone:"nucleo",pts:re(5.1,11.475,8.25,13.625)},{id:"corredor",lv:0,name:"Corredor",h:2.9,pts:re(.25,13.775,1.6,17.75)},{id:"estarT",lv:0,name:"Estar",key:"estarT",h:2.9,pts:re(1.75,13.775,8.25,17.75)},{id:"lavanderia",lv:0,name:"Lavanderia",h:2.9,pts:re(.25,17.9,5.95,ui-.25)},{id:"bhosp",lv:0,name:"Banho de h\xF3spedes",h:2.9,pts:re(6.1,17.9,8.25,ui-.25)},{id:"sala",lv:1,name:"Sala",key:"estar",zone:"sala",h:4.6,pts:re(.25,5.25,8.25,11.325)},{id:"lavabo1",lv:1,name:"Lavabo",h:2.9,pts:re(.25,11.475,1.6,13.625)},{id:"hall",lv:1,name:"Hall",key:"nucleo",zone:"nucleo",pts:re(1.75,11.475,5.38,13.625)},{id:"escada1",lv:1,name:"Escada",key:"nucleo",zone:"nucleo",pts:re(5.38,11.475,8.25,13.625)},{id:"rev",lv:1,name:"Revers\xEDvel",key:"rev",h:2.9,pts:re(.25,13.775,2.9,ke-.25)},{id:"closet",lv:1,name:"Closet",zone:"suite",h:2.9,pts:re(3.05,13.775,4.675,16)},{id:"bsuite",lv:1,name:"Banho da su\xEDte",h:2.9,pts:re(3.05,16.15,4.675,ke-.25)},{id:"suite",lv:1,name:"Su\xEDte",key:"suite",zone:"suite",h:2.9,pts:re(4.825,13.775,8.25,ke-.25)},{id:"mezanino",lv:2,name:"Mezanino",key:"escr",zone:"sala",h:3.6,pts:re(.25,tu,8.25,11.325)},{id:"bsocial",lv:2,name:"Banho social",h:2.8,pts:re(.25,11.475,3.125,13.625)},{id:"hallS",lv:2,name:"Hall",key:"nucleo",zone:"nucleo",pts:[[3.275,11.475],[6.22,11.475],[6.22,12.725],[5.38,12.725],[5.38,13.625],[3.275,13.625]]},{id:"vazio",lv:2,name:"Vazio da escada",key:"nucleo",zone:"nucleo",void:!0,pts:[[6.22,11.475],[8.25,11.475],[8.25,13.625],[5.38,13.625],[5.38,12.725],[6.22,12.725]]},{id:"q1",lv:2,name:"Quarto 1",key:"q1",h:4.4,pts:re(.25,13.775,4.175,ke-.25)},{id:"q2",lv:2,name:"Quarto 2",key:"q2",h:2.78,pts:re(4.325,13.775,8.25,ke-.25)}],Mf=["estar","escr","jantar","estarT","suite","rev","q1","q2","nucleo"],eu={estar:"Sala",escr:"Mezanino",jantar:"Copa e cozinha",estarT:"Estar do t\xE9rreo",suite:"Su\xEDte",rev:"Revers\xEDvel",q1:"Quarto 1",q2:"Quarto 2",nucleo:"Escada e halls"},Cm=[2.95,5.65,8.375],Br=(i,t)=>Array.from({length:t},(e,n)=>+(.12+(i-.12)*n/(t-1)).toFixed(3)),Sf=(i,t,e,n)=>t.flatMap(s=>[{lv:i,k:"cadeira",r:[s-.2,e[0],s+.2,e[1]],back:"n"},{lv:i,k:"cadeira",r:[s-.2,n[0],s+.2,n[1]],back:"s"}]),bf=[{lv:0,k:"mesa",r:[.9,5.55,2.5,6.45],h:.75},...Sf(0,[1.25,2.15],[5.1,5.45],[6.55,6.9]),{lv:0,k:"bancada",r:[.25,8,.85,10.45],back:"w",h:.9,nich:[8,8.33,9.2,9.82,10.38],pia:[8.45,9.15],fogao:[9.45,10.25]},{lv:0,k:"prat",r:[.25,8,.55,9.3],back:"w",prat:[1.55,1.95],fill:"louca"},{lv:0,k:"estante",r:[1.3,10.925,2.35,11.325],back:"s",h:2.4,prat:Br(2.4,7),cols:2,ends:[1,0],fill:"louca"},{lv:0,k:"estante",r:[2.35,10.6,3.125,11.325],back:"s",h:2.4,prat:[1.95,2.4],cols:1,ends:[1,0],base:!1},{lv:0,k:"geladeira",r:[2.45,10.62,3.08,11.3],back:"s",h:1.85},{lv:0,k:"mesa",c:[2,9.4,.38],h:.75},{lv:0,k:"banqueta",c:[1.55,9.95,.16]},{lv:0,k:"banqueta",c:[2.45,9.95,.16]},{lv:0,k:"mesa",r:[4.7,9.3,6.7,10.3],h:.75},...Sf(0,[5.1,5.7,6.3],[8.8,9.2],[10.4,10.8]),{lv:0,k:"bancada",r:[7.75,8.45,8.2,10.15],back:"e",h:.75,nich:!0},{lv:0,k:"estante",r:[.25,11.6,.6,13.55],back:"w",h:2.4,prat:Br(2.4,7),cols:4,ends:[1,1],fill:"potes"},{lv:0,k:"estante",r:[.25,13.9,.6,17.6],back:"w",h:2.4,prat:Br(2.4,6),cols:8,ends:[1,1],fill:"caixas"},{lv:0,k:"bacia",e:[2.05,13.2,.2,.28],back:"s"},{lv:0,k:"bancada",r:[1.8,11.55,2.3,12],back:"n",h:.85,cuba:!0},{lv:0,k:"armario",r:[1.75,13.9,2.3,17.65],back:"w",h:2.4},{lv:0,k:"traco",r:[1.8,14.65,2.25,16.15]},{lv:0,k:"traco",r:[2.3,14.7,4.3,16.1],dash:!0},{lv:0,k:"traco",r:[2.38,14.8,2.78,15.35],dash:!0},{lv:0,k:"traco",r:[2.38,15.45,2.78,16],dash:!0},{lv:0,k:"bancada",r:[5.3,13.775,7.5,14.2],back:"n",h:.45,nich:!0},{lv:0,k:"tv",r:[5.75,13.84,7.05,13.89],y0:.55,h:.74},{lv:0,k:"sofa",r:[4.3,16.25,6.3,17.05],back:"s"},{lv:0,k:"mesa",r:[4.8,15.2,5.8,15.75],h:.38},{lv:0,k:"poltrona",r:[7.2,14.45,7.9,15.15],back:"e"},{lv:0,k:"tanque",r:[.3,19.15,.9,19.7],back:"s"},{lv:0,k:"maquina",r:[1,19.1,1.65,19.7],back:"s"},{lv:0,k:"maquina",r:[1.75,19.1,2.4,19.7],back:"s"},{lv:0,k:"bancada",r:[2.5,19.2,4.2,19.7],back:"s",h:.9,nich:!0},{lv:0,k:"armario",r:[4.3,19.15,5.9,19.7],back:"s",h:2.2},{lv:0,k:"caixa",r:[5.35,18,5.9,18.35],y0:1.1,h:.7},{lv:0,k:"box",r:[6.15,19.05,7.25,19.7],vidro:"n"},{lv:0,k:"bacia",e:[7.85,18.35,.28,.2],back:"e"},{lv:0,k:"bancada",r:[7.65,19.3,8.2,19.7],back:"s",h:.85,cuba:!0},{lv:1,k:"tapete",r:[1.2,6.4,4.6,9.2]},{lv:1,k:"sofa",r:[1,8.5,4,9.35],back:"s"},{lv:1,k:"poltrona",r:[1,6,1.8,6.8],back:"n"},{lv:1,k:"poltrona",r:[3.2,6,4,6.8],back:"n"},{lv:1,k:"mesa",r:[2,7.15,3,7.9],h:.38},{lv:1,k:"estante",r:[.25,5.6,.6,10.9],back:"w",h:2.4,prat:Br(2.4,7),cols:11,ends:[1,1],fill:"livros"},{lv:1,k:"mesa",r:[5.3,6.3,7.3,7.3],h:.75},...Sf(1,[5.75,6.85],[5.85,6.2],[7.4,7.75]),{lv:1,k:"bacia",e:[.65,13.15,.2,.28],back:"s"},{lv:1,k:"bancada",r:[.3,11.55,.8,12],back:"n",h:.85,cuba:!0},{lv:1,k:"sofa",r:[.25,15.35,1.15,17.35],back:"w"},{lv:1,k:"mesa",r:[.55,17.65,2.65,18.25],h:.75},{lv:1,k:"cadeira",c:[1.6,17.3,.22],back:"n"},{lv:1,k:"estante",r:[2.45,16,2.825,17.4],back:"e",h:2,prat:Br(2,6),cols:3,ends:[1,1],fill:"livros"},{lv:1,k:"armario",r:[3.05,14.5,3.5,15.95],back:"w",h:2.4},{lv:1,k:"box",r:[3.1,17.45,4.62,18.2],vidro:"n"},{lv:1,k:"bacia",e:[4.38,16.65,.2,.28],back:"n"},{lv:1,k:"bancada",r:[4.2,16.95,4.62,17.4],back:"e",h:.85,cuba:!0},{lv:1,k:"cama",r:[6.11,13.775,7.71,15.775],back:"n"},{lv:1,k:"movel",r:[5.68,13.8,6.06,14.2],h:.5},{lv:1,k:"movel",r:[7.76,13.8,8.14,14.2],h:.5},{lv:1,k:"poltrona",r:[7.35,16.6,8.05,17.3],back:"e"},{lv:1,k:"bancada",r:[5.5,17.8,7.6,18.25],back:"s",h:.45,almofada:!0},{lv:2,k:"mesa",r:[1,8.75,3.4,9.4],h:.75},{lv:2,k:"cadeira",c:[1.7,9.75,.22],back:"s"},{lv:2,k:"cadeira",c:[2.7,9.75,.22],back:"s"},{lv:2,k:"poltrona",r:[5.6,9.4,6.4,10.2],back:"s"},{lv:2,k:"poltrona",r:[6.8,9.4,7.6,10.2],back:"s"},{lv:2,k:"mesa",c:[6.6,10.55,.2],h:.5},{lv:2,k:"estante",r:[.25,8.9,.6,11.2],back:"w",h:2.4,prat:Br(2.4,7),cols:5,ends:[1,1],fill:"livros"},{lv:2,k:"box",r:[.3,12.75,1.5,13.58],vidro:"n"},{lv:2,k:"bacia",e:[1.95,13.25,.2,.28],back:"s"},{lv:2,k:"bancada",r:[.3,11.55,1.3,12],back:"n",h:.85,cuba:!0},{lv:2,k:"cama",r:[.25,14.4,1.2,16.4],back:"n"},{lv:2,k:"armario",r:[1.4,13.775,3.1,14.375],back:"n",h:2.2},{lv:2,k:"mesa",r:[3.6,15.4,4.175,16.9],h:.75},{lv:2,k:"cadeira",c:[3.25,16.15,.2],back:"w"},{lv:2,k:"cama",r:[7.3,14.4,8.25,16.4],back:"n"},{lv:2,k:"armario",r:[5.5,13.775,7.2,14.375],back:"n",h:2.2},{lv:2,k:"mesa",r:[4.325,15.4,4.9,16.9],h:.75},{lv:2,k:"cadeira",c:[5.25,16.15,.2],back:"e"}];function ha(i,t){let[e,n,s,r]=i;return t==="n"?{u0:e,u1:s,D:r-n,at:(o,a,l,c)=>[o,n+l,a,n+c],pt:(o,a)=>[o,n+a]}:t==="s"?{u0:e,u1:s,D:r-n,at:(o,a,l,c)=>[o,r-c,a,r-l],pt:(o,a)=>[o,r-a]}:t==="w"?{u0:n,u1:r,D:s-e,at:(o,a,l,c)=>[e+l,o,e+c,a],pt:(o,a)=>[e+a,o]}:{u0:n,u1:r,D:s-e,at:(o,a,l,c)=>[s-c,o,s-l,a],pt:(o,a)=>[s-a,o]}}var In=.07;function Pm(i){let t={};if(i.e){let[r,o,a,l]=i.e,c=i.back,h=c==="n"||c==="s"?l:a,d=c==="n"||c==="w"?-1:1,u=h+.06;return t.tank=c==="n"||c==="s"?[r-.18,o+d*u-.08,r+.18,o+d*u+.08]:[r+d*u-.08,o-.18,r+d*u+.08,o+.18],t}if(!i.r||!i.back)return t;let e=ha(i.r,i.back),n=e.D,s=e.u1-e.u0;if(i.k==="estante"){let r=i.ends||[1,1],o=i.cols||1,a=e.u0+(r[0]?In:0),l=e.u1-(r[1]?In:0),c=(l-a-(o-1)*In)/o;t.bays=Array.from({length:o},(h,d)=>[a+d*(c+In),a+d*(c+In)+c]),t.ups=[...r[0]?[e.u0]:[],...t.bays.slice(1).map(h=>h[0]-In),...r[1]?[e.u1-In]:[]]}if(i.k==="bancada"&&i.nich){let r=Math.max(1,Math.round((s-In)/.6)),o=(s-In)/r;t.ups=Array.isArray(i.nich)?i.nich:Array.from({length:r+1},(a,l)=>e.u0+l*o),t.bays=t.ups.slice(0,-1).map((a,l)=>[a+In,t.ups[l+1]])}if(i.pia&&(t.sink=e.at(i.pia[0],i.pia[1],.1,n-.1)),i.fogao&&(t.burners=[i.fogao[0]+.2,i.fogao[1]-.2].flatMap(r=>[n*.28,n*.72].map(o=>[...e.pt(r,o),.09]))),i.cuba&&(t.basin=[...e.pt((e.u0+e.u1)/2,n*.55),Math.min(.19,n*.38,s*.38)]),i.k==="cama"){let r=s>1.3?2:1,o=(s-.1-(r-1)*.06)/r;t.pillows=Array.from({length:r},(a,l)=>e.at(e.u0+.05+l*(o+.06),e.u0+.05+l*(o+.06)+o,.08,.42))}return(i.k==="sofa"||i.k==="poltrona")&&(t.backLine=e.at(e.u0,e.u1,.2,.2)),t}function FS(i,t,e,n,s){let r=[[i,e]];for(let o of[...s].filter(a=>a.v0<=e+.001).sort((a,l)=>a.a0-l.a0))r.push([o.a0,e],[o.a0,o.v1],[o.a1,o.v1],[o.a1,e]);r.push([t,e]);for(let o=n.length-1;o>=0;o--)r.push(n[o]);return r}function OS(i,t){let e=new oi(i.map(n=>new et(n[0],n[1])));for(let n of t)e.holes.push(new Cs([[n.a0,n.v0],[n.a1,n.v0],[n.a1,n.v1],[n.a0,n.v1]].map(s=>new et(s[0],s[1]))));return e}function Tf(i,t,e,n){let s=n.filter(a=>a.v0>t+.001),r=OS(FS(i.a0,i.a1,t,e,n),s);if(i.axis==="x"){let a=new $i(r,{depth:i.z1-i.z0,bevelEnabled:!1});return a.translate(0,0,i.z0),a}let o=new $i(r,{depth:i.x1-i.x0,bevelEnabled:!1});return o.rotateY(-Math.PI/2),o.translate(i.x1,0,0),o}function Im(i,t,e){let n=new oi(i.map(r=>new et(r[0],r[1]))),s=new $i(n,{depth:e-t,bevelEnabled:!1});return s.rotateX(Math.PI/2),s.translate(0,e,0),s}function nu(i,t,e){let n=new oi(i.map(r=>new et(r[0],r[1]))),s=new $i(n,{depth:e-t,bevelEnabled:!1});return s.rotateY(-Math.PI/2),s.translate(e,0,0),s}function te(i,t,e,n,s,r){let o=new Fi(n-i,s-t,r-e);return o.translate((i+n)/2,(t+s)/2,(e+r)/2),o}function Vn(i,t,e,n,s,r,o){return i==="x"?te(t,n,r,e,s,o):te(r,n,t,o,s,e)}function fa(i,t,e,n=e){let s=new I().subVectors(t,i),r=s.length(),o=new Fi(e,r,n);return o.applyQuaternion(new je().setFromUnitVectors(new I(0,1,0),s.normalize())),o.translate((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2),o}function nn(i){let t=i.map(s=>s.index?s.toNonIndexed():s),e=["position","normal","uv","color"].filter(s=>t.every(r=>r.attributes[s])),n=new ne;for(let s of e){let r=t[0].attributes[s].itemSize,o=t.reduce((c,h)=>c+h.attributes[s].count,0),a=new Float32Array(o*r),l=0;for(let c of t)a.set(c.attributes[s].array,l),l+=c.attributes[s].array.length;n.setAttribute(s,new se(a,r))}return n}function Dm(i,t){let e=new zn(i,t),n=e.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*i,n.getY(s)*t);return e}var Ee=(i,t,e)=>new I(i,t,e);function Lm(i){let t=new Oe,e=[],n=[],s=(m,v,p,g={})=>{let _=new de(m,v);return _.castShadow=g.cast!==!1,_.receiveShadow=!0,_.userData.lv=p,_.userData.mat=v,g.edges!==!1&&(_.userData.edges=!0),t.add(_),g.ray!==!1&&e.push(_),_},r=(m,v)=>{let p=new de(m,new un({side:Ue}));return p.userData.tau=v,e.push(p),p},o=m=>m<2.95?0:m<6?1:m<8.85?2:3,a=m=>m<3?0:m<6?3.06:6.12;for(let m of wm){let v=m.out,p=m.axis,g=Sn(Tf(m,m.b||0,m.top,m.open),(_,y,x,S,b)=>{let E=p==="x"?x*v:_*v;return E>.5?b<.6?zt.barrado:zt.cal:E<-.5?zt.argila:zt.cal});s(g,i.built,0);for(let _ of m.open)l(m,_),_.mux&&f(m,_)}function l(m,v){let p=m.axis,g=p==="x"?m.z0:m.x0,_=p==="x"?m.z1:m.x1,y=(g+_)/2,x=o(v.v0+.1),S=.05;if(v.id==="cobogo"){c(m,v);return}let b=[];for(let[N,D,U,H]of v.parts)if(U==="glass"||U==="band"){let X=p==="x"?te(v.a0,N,y-.006,v.a1,D,y+.006):te(y-.006,N,v.a0,y+.006,D,v.a1);s(X,i.glass,x,{cast:!1,ray:!1,edges:!1});let rt=p==="x"?Ee(0,0,m.out):Ee(m.out,0,0),W=p==="x"?Ee(1,0,0):Ee(0,0,1),tt=p==="x"?Ee(v.a0,N,y):Ee(y,N,v.a0);if(n.push({id:v.id,room:v.room,kind:U,tau:H,p0:tt,u:W,v:Ee(0,1,0),w:v.a1-v.a0,h:D-N,n:rt}),U==="band")for(let Q=N+.07;Q<D-.03;Q+=.07)b.push(Vn(p,v.a0,v.a1,Q,Q+.012,y-.03,y+.03))}else U==="wood"?s(Vn(p,v.a0,v.a1,N,D,g+.02,_-.02),i.louver,x):U==="door"?s(Vn(p,v.a0,v.a1,N,D,y-.025,y+.025),i.wood,x):U==="panel"&&s(Vn(p,v.a0,v.a1,N,D,y-.025,y+.025),i.sash,x);if(v.parts.every(N=>N[2]==="wood"||N[2]==="door"))return;let E=v.v0,M=v.v1;b.push(Vn(p,v.a0,v.a0+S,E,M,y-.04,y+.04),Vn(p,v.a1-S,v.a1,E,M,y-.04,y+.04)),b.push(Vn(p,v.a0,v.a1,M-S,M,y-.04,y+.04)),E>a(E)+.05&&b.push(Vn(p,v.a0,v.a1,E,E+S,y-.04,y+.04));let T=v.parts.find(N=>N[2]==="glass"),w=v.parts.find(N=>N[2]==="band");T&&w&&b.push(Vn(p,v.a0,v.a1,T[1]-.01,w[0]+.01,y-.04,y+.04));let C=v.leaves||1,P=T?T[1]:M;for(let N=1;N<C;N++){let D=v.a0+(v.a1-v.a0)*N/C;b.push(Vn(p,D-.025,D+.025,T?T[0]:E,P,y-.035,y+.035))}s(nn(b),i.sash,x,{edges:!1,ray:!1})}function c(m,v){let p=[],g=m.x0,_=m.x1,y=.24,x=.1;for(let S=v.v0;S<=v.v1+1e-6;S+=y)p.push(te(g,S-x/2,v.a0,_,S+x/2,v.a1));for(let S=v.a0;S<=v.a1+1e-6;S+=(v.a1-v.a0)/8)p.push(te(g,v.v0,S-x/2,_,v.v1,S+x/2));s(nn(p),i.cobogo,0,{ray:!1,edges:!1}),r(te(g,v.v0,v.a0,_,v.v1,v.a1),.35),n.push({id:"cobogo",room:"nucleo",kind:"open",tau:1,p0:Ee(g-.01,v.v0,v.a0),u:Ee(0,0,1),v:Ee(0,1,0),w:v.a1-v.a0,h:v.v1-v.v0,n:Ee(1,0,0)})}for(let m of Am){let v=m.top||[[m.a0,m.t],[m.a1,m.t]],p=(m.doors||[]).map(([g,_])=>({a0:g,a1:_,v0:m.b,v1:m.b+2.1})).concat((m.vint||[]).map(([g,_,y,x])=>({a0:g,a1:_,v0:y,v1:x})));s(Sn(Tf(m,m.b,v,p),()=>zt.argila),i.built,m.lv);for(let[g,_,y,x]of m.vint||[]){let S=m.axis==="x"?(m.z0+m.z1)/2:(m.x0+m.x1)/2;s(Vn(m.axis,g,_,y,x,S-.006,S+.006),i.glass,m.lv,{cast:!1,ray:!1,edges:!1});let b=[];for(let E=y+.08;E<x-.03;E+=.08)b.push(Vn(m.axis,g,_,E,E+.012,S-.03,S+.03));s(nn(b),i.sash,m.lv,{edges:!1,ray:!1})}}for(let m of Rm){if(m.kind==="grelha"){h(m);continue}let v=m.lv===0?zt.pisoT:zt.piso;s(Sn(Im(m.pts,m.b,m.t),(p,g)=>g>.5?v:g<-.5?zt.teto:zt.cal),i.built,m.lv)}function h(m){let v=m.pts.map(w=>w[0]),p=m.pts.map(w=>w[1]),g=Math.min(...v),_=Math.max(...v),y=Math.min(...p),x=Math.max(...p),S=new oi(m.pts.map(w=>new et(w[0],w[1]))),b=new No(S);b.rotateX(Math.PI/2),b.translate(0,m.t-.005,0);let E=b.attributes.uv,M=b.attributes.position;for(let w=0;w<E.count;w++)E.setXY(w,M.getX(w),M.getZ(w));s(b,i.grate,m.lv,{ray:!1,edges:!1});let T=[];for(let w=0;w<m.pts.length;w++){let C=m.pts[w],P=m.pts[(w+1)%m.pts.length];T.push(fa(Ee(C[0],m.t-.05,C[1]),Ee(P[0],m.t-.05,P[1]),.05,.1))}s(nn(T),i.steel,m.lv,{edges:!1}),r(te(g,m.b,y,_,m.t,x),.7)}for(let m of[0,3.06]){let v=m?1:0,p=[];for(let g=1;g<=8;g++)p.push(te(5.1+(g-1)*.28,m+g*.18-.05,11.475,5.1+g*.28,m+g*.18,12.425));p.push(te(7.34,m+1.5,11.475,8.25,m+1.62,13.625));for(let g=1;g<=7;g++)p.push(te(7.34-g*.28,m+1.62+g*.18-.05,12.725,7.34-(g-1)*.28,m+1.62+g*.18,13.625));p.push(fa(Ee(5.1,m-.02,12.44),Ee(7.34,m+1.5,12.44),.03,.06),fa(Ee(7.34,m+1.6,12.71),Ee(5.38,m+3,12.71),.03,.06)),s(Sn(nn(p),(g,_)=>_>.5?zt.madeira:zt.grafite),i.built,v)}let d=(m,v)=>v>.5?zt.telha:v<-.5?zt.teto:zt.cal,u=(m,v,p,g)=>[[m,p(m)],[v,p(v)],[v,g(v)],[m,g(m)]];s(Sn(nu(u(4.4,12.4,us,ks),.25,9),d),i.roof,3),s(Sn(nu(u(11.6,19.2,hi,Qc),.25,9),d),i.roof,3);for(let m of[.55,3.25,5.95])s(nu(u(7,10.4,v=>ks(v)+.06,v=>ks(v)+.14),m,m+2.6),i.solar,3,{edges:!1});{s(Sn(nn([te(.25,ks(12.4)-.02,12.35,8.25,10.85,12.45),te(.25,11.7,12.35,8.25,hi(12.4)+.04,12.45)]),()=>zt.cal),i.built,3),s(te(.25,10.85,12.394,8.25,11.7,12.406),i.glass,3,{cast:!1,ray:!1,edges:!1});let _=[];for(let y=.9;y<8.25;y+=.65)_.push(te(y-.025,10.85,12.37,y+.025,11.7,12.43));for(let y=10.85+.09;y<11.7-.03;y+=.09)_.push(te(.25,y,12.385,8.25,y+.012,12.415));s(nn(_),i.sash,3,{edges:!1,ray:!1}),n.push({id:"clerestorio",room:"nucleo",kind:"glass",tau:.6,p0:Ee(.25,10.85,12.4),u:Ee(1,0,0),v:Ee(0,1,0),w:8,h:11.7-10.85,n:Ee(0,0,-1)})}s(te(5.6,9.06,15,7.6,10.1,16.5),i.tank,3);{let{x0:m,x1:v,z0:p,z1:g,y:_}=Ei,y=6.025;s(te(m,_-.006,p,v,_+.006,g),i.glass,1,{cast:!1,ray:!1,edges:!1});let x=[te(m,_-.04,p,v,_+.04,p+.04),te(m,_-.04,g-.04,v,_+.04,g)];for(let S=m;S<=v+1e-6;S+=(v-m)/8)x.push(te(S-.02,_-.04,p,S+.02,_+.04,g));s(nn(x),i.steel,1,{edges:!1,ray:!1});for(let[S,b,E]of[[m,y-.1,"lavanderia"],[y+.1,v,"bhosp"]])n.push({id:"zenital",room:E,kind:"glass",tau:.62,p0:Ee(S,_,p),u:Ee(1,0,0),v:Ee(0,0,1),w:b-S,h:g-p,n:Ee(0,1,0)})}for(let m of Cm)s(Sn(new ri(.13,.13,2.9,20).translate(m,1.45,5.125),()=>zt.cal),i.built,0,{edges:!1});function f(m,v){let p=v.a0+.05,g=v.a1-.05,_=m.z0+.04,y=Dm(g-p,1.05);y.translate((p+g)/2,3.06+.525,_),s(y,i.mux,1,{ray:!1,edges:!1}),s(nn([te(p,4.11,_-.03,g,4.16,_+.03),te(p,3.06,_-.02,g,3.1,_+.02)]),i.rail,1,{edges:!1}),r(te(p,3.06,m.z0,g,4.16,m.z0+.08),.45)}{let m=[],g=tu+.03;for(let _=.31;_<8.25;_+=.11)m.push(te(_-.02,6.12,g-.02,_+.02,7.22,g+.02));m.push(te(.25,7.22-.04,g-.03,8.25,7.22+.02,g+.03)),s(nn(m),i.rail,2,{ray:!1,edges:!1})}{let m=[],g=[[6.22,11.475],[6.22,12.725],[5.38,12.725]];for(let _=0;_<g.length-1;_++){let[y,x]=g[_],[S,b]=g[_+1],E=Math.hypot(S-y,b-x);for(let M=.06;M<E;M+=.11){let T=y+(S-y)*M/E,w=x+(b-x)*M/E;m.push(te(T-.02,6.12,w-.02,T+.02,7.22,w+.02))}m.push(fa(Ee(y,7.22,x),Ee(S,7.22,b),.06,.04))}s(nn(m),i.rail,2,{ray:!1,edges:!1})}return{root:t,occ:e,aps:n}}var Mt={alv:zt.cal,conc:"#b7b0a4",freijo:"#a87b52",escuro:"#5a3b22",linho:"#d6c8ae",couro:"#8f5f3f",lencol:"#ece6da",edredom:"#e2d6c2",manta:"#a65a3a",louca:"#f7f5f0",inox:"#c9cccb",branco:"#ecebe6",tela:"#1f2224",boca:"#4a4a48",fibra:"#b89a6e",argila:"#c98a62",tapete:"#d3c3a6",borda:"#a88f6a",azul:zt.azul,piso:"#cfc8bb"},Nm=["#8c4a3a","#3f5a6b","#c2a36b","#5d6b4a","#e3dccb","#2f2a26","#a5683c","#7a8a8f","#b4532a","#d8cfbd"],Ef=(i,t)=>{let e=i.index?i.toNonIndexed():i,n=new Pt(t),s=e.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return e.setAttribute("color",new se(r,3)),e};function Um(i){let t=new Oe,e=new Map,n=(u,f,m)=>{let v=`${u}|${f}`;e.has(v)||e.set(v,[]),e.get(v).push(m)},s=(u,f,m,v,p,g)=>n(u,f,Ef(te(m[0],Dn[u]+v,m[1],m[2],Dn[u]+p,m[3]),g)),r=(u,f,m,v,p,g,_,y,x,S=1,b=20)=>n(u,f,Ef(new ri(1,S,y-_,b).scale(p,1,g).translate(m,Dn[u]+(_+y)/2,v),x)),o=1,a=()=>(o=o*16807%2147483647)/2147483647,l=u=>u[Math.floor(a()*u.length)],c=(u,f,m,v,p)=>{s(u,"lis",f.at(m-.015,m+.015,v-.015,v+.015),p,p+.3,Mt.inox),s(u,"lis",f.at(m-.012,m+.012,v-.015,v+.18),p+.28,p+.305,Mt.inox)};function h(u,f,m,v,p,g,_,y){if(_<.12)return;if(f==="livros"){let S=v+.015;for(;S<p-.03;){if(a()<.1){S+=.05+a()*.1;continue}if(a()<.08&&p-S>.28){let M=g,T=.2+a()*.05;for(let w=2+Math.floor(a()*3);w>0;w--){let C=.03+a()*.02;s(u,"liv",m.at(S,S+T,y-.2-a()*.03,y-.02),M,M+C,l(Nm)),M+=C}S+=T+.02;continue}let b=.02+a()*.035,E=Math.min(_-.03,.17+a()*.13);s(u,"liv",m.at(S,Math.min(S+b,p-.01),y-.02-(.15+a()*.07),y-.02),g,g+E,l(Nm)),S+=b+.002}return}let x=v+.03;for(;x<p-.08;){let S=a();if(f==="caixas"){let P=Math.min(p-x-.02,.26+a()*.14);if(P<.15)break;let[N,D,U,H]=m.at(x,x+P,.03,y-.03),X=Math.min(_-.04,.18+a()*.1);s(u,"tec",[N,D,U,H],g,g+X,S<.6?Mt.fibra:Mt.linho),x+=P+.03+a()*.06;continue}let E=l(f==="louca"?["prato","tigela","pote","copo","prato"]:["pote","pote","vidro","caixa","tigela"]),M={prato:.1,tigela:.07,pote:.055,vidro:.05,copo:.04,caixa:.08}[E];if(x+2*M>p-.02||2*M>y-.04){x+=.05;continue}let[T,w]=m.pt(x+M,y/2),C=_-.03;E==="prato"?r(u,"lis",T,w,M,M,g,g+Math.min(C,.03+a()*.07),Mt.louca):E==="tigela"?r(u,"lis",T,w,M,M,g,g+Math.min(C,.07),Mt.louca,.65):E==="pote"?r(u,"lis",T,w,M,M,g,g+Math.min(C,.12+a()*.1),a()<.5?Mt.argila:Mt.louca):E==="vidro"?r(u,"lis",T,w,M,M,g,g+Math.min(C,.14+a()*.08),"#e8e2d4"):E==="copo"?r(u,"lis",T,w,M,M,g,g+Math.min(C,.09),l([Mt.azul,Mt.louca,Mt.manta])):s(u,"tec",m.at(x,x+2*M,.05,y-.05),g,g+Math.min(C,.2+a()*.08),l([Mt.fibra,"#c9b48e"])),x+=2*M+.03+a()*.05}}for(let u of bf){let{lv:f,k:m}=u,v=Pm(u);o=7+bf.indexOf(u)*131;let p=u.r&&u.back?ha(u.r,u.back):null,g=p?p.D:0;if(m==="bancada"){let _=u.h,y=_-.05,x=_-.22;if(u.pia){let[S,b]=u.pia;s(f,"alv",p.at(p.u0,S,0,g),y,_,Mt.conc),s(f,"alv",p.at(b,p.u1,0,g),y,_,Mt.conc),s(f,"alv",p.at(S,b,0,.1),y,_,Mt.conc),s(f,"alv",p.at(S,b,g-.1,g),y,_,Mt.conc);let E=v.sink;s(f,"lis",E,x,x+.01,Mt.inox),s(f,"lis",p.at(S,S+.01,.1,g-.1),x,y,Mt.inox),s(f,"lis",p.at(b-.01,b,.1,g-.1),x,y,Mt.inox),s(f,"lis",p.at(S,b,.1,.11),x,y,Mt.inox),s(f,"lis",p.at(S,b,g-.11,g-.1),x,y,Mt.inox),c(f,p,(S+b)/2,.05,_)}else s(f,"alv",p.at(p.u0,p.u1,0,g),y,_,Mt.conc);if(u.fogao){s(f,"lis",p.at(u.fogao[0],u.fogao[1],.07,g-.05),_,_+.008,Mt.tela);for(let[S,b,E]of v.burners)r(f,"lis",S,b,E,E,_+.008,_+.022,Mt.boca)}if(u.cuba){let[S,b,E]=v.basin;r(f,"lis",S,b,E,E,_,_+.13,Mt.louca,.72,28),r(f,"lis",S,b,E*.82,E*.82,_+.13,_+.132,"#dedbd3",1,28),c(f,p,(p.u0+p.u1)/2,.05,_)}if(u.almofada&&s(f,"tec",p.at(p.u0+.03,p.u1-.03,.03,g-.03),_,_+.07,Mt.linho),v.ups){for(let S of v.ups){let b=u.pia&&S+In>u.pia[0]&&S<u.pia[1];s(f,"alv",p.at(S,S+In,0,g),0,b?x-.01:y,Mt.alv)}for(let[S,b]of v.bays)s(f,"alv",p.at(S,b,0,g-.03),0,.1,Mt.alv),_>.7&&s(f,"alv",p.at(S,b,0,g-.02),.4,.44,Mt.conc)}else s(f,"alv",p.at(p.u0,p.u1,0,g),0,y,Mt.alv)}else if(m==="estante"){for(let y of v.ups)s(f,"alv",p.at(y,y+In,0,g),0,u.h,Mt.alv);let _=u.prat;for(let[y,x]of v.bays)_.forEach((S,b)=>{b===0&&S<=.15&&u.base!==!1?s(f,"alv",p.at(y,x,0,g-.03),0,S,Mt.alv):s(f,"alv",p.at(y,x,0,g),S-.04,S,Mt.conc),u.fill&&b<_.length-1&&h(f,u.fill,p,y,x,S,_[b+1]-.04-S,g)})}else if(m==="prat")for(let _ of u.prat)s(f,"alv",p.at(p.u0,p.u1,0,g),_-.04,_,Mt.conc),u.fill&&h(f,u.fill,p,p.u0,p.u1,_,.34,g);else if(m==="geladeira"){let _=u.h;s(f,"lis",u.r,0,_,Mt.inox),s(f,"lis",p.at(p.u0+.01,p.u1-.01,g,g+.004),_*.66-.006,_*.66+.006,"#5a5d5e");for(let[y,x]of[[.85,1.1],[_*.7,_*.86]])s(f,"lis",p.at(p.u0+.04,p.u0+.06,g+.004,g+.03),y,x,"#8d9192")}else if(m==="mesa"){let _=u.h;if(u.c){let[y,x,S]=u.c;r(f,"mad",y,x,S,S,_-.035,_,Mt.freijo,1,32),r(f,"mad",y,x,.045,.045,.03,_-.035,Mt.freijo,1,12),r(f,"mad",y,x,S*.62,S*.62,0,.03,Mt.freijo,1,24)}else{let[y,x,S,b]=u.r,E=.05,M=.05;s(f,"mad",u.r,_-.035,_,Mt.freijo);for(let T of[y+M,S-M-E])for(let w of[x+M,b-M-E])s(f,"mad",[T,w,T+E,w+E],0,_-.035,Mt.freijo)}}else if(m==="cadeira"){let _=u.c?[u.c[0]-u.c[2]*.9,u.c[1]-u.c[2]*.9,u.c[0]+u.c[2]*.9,u.c[1]+u.c[2]*.9]:u.r,y=ha(_,u.back),x=.035;s(f,"mad",y.at(y.u0+.01,y.u1-.01,.02,y.D),.42,.46,Mt.freijo);for(let S of[y.u0+.02,y.u1-.02-x])s(f,"mad",y.at(S,S+x,y.D-.02-x,y.D-.02),0,.42,Mt.freijo),s(f,"mad",y.at(S,S+x,.02,.02+x),0,.88,Mt.freijo);s(f,"mad",y.at(y.u0+.02,y.u1-.02,.025,.05),.62,.86,Mt.freijo)}else if(m==="banqueta"){let[_,y,x]=u.c;r(f,"mad",_,y,x,x,.43,.47,Mt.freijo,1,24),r(f,"mad",_,y,.03,.03,.03,.43,Mt.escuro,1,10),r(f,"mad",_,y,x*.8,x*.8,0,.03,Mt.escuro,1,20)}else if(m==="sofa"||m==="poltrona"){let _=m==="sofa",y=_?.16:.13,x=_?Mt.linho:Mt.couro,S=p.u1-p.u0;for(let w of[p.u0+.04,p.u1-.08])for(let C of[.04,g-.08])s(f,"mad",p.at(w,w+.04,C,C+.04),0,.1,Mt.escuro);s(f,"tec",p.at(p.u0,p.u1,0,g),.1,.3,x),s(f,"tec",p.at(p.u0,p.u1,0,.2),.3,.78,x);for(let w of[p.u0,p.u1-y])s(f,"tec",p.at(w,w+y,.2,g),.3,.6,x);let b=p.u0+y,E=p.u1-y,M=_?Math.max(1,Math.round((E-b)/.7)):1,T=(E-b)/M;for(let w=0;w<M;w++)s(f,"tec",p.at(b+w*T+.005,b+(w+1)*T-.005,.2,g-.02),.3,.44,x),_&&s(f,"tec",p.at(b+w*T+.01,b+(w+1)*T-.01,.2,.33),.44,.74,"#ddd1ba");!_&&S>.6&&s(f,"tec",p.at(b+.02,E-.02,.2,.3),.44,.72,"#9a6a49")}else if(m==="cama"){s(f,"mad",p.at(p.u0+.03,p.u1-.03,.05,g-.03),0,.28,Mt.freijo),s(f,"tec",p.at(p.u0+.02,p.u1-.02,.05,g-.02),.28,.5,Mt.lencol),s(f,"mad",p.at(p.u0,p.u1,0,.05),0,1,Mt.freijo);for(let _ of v.pillows)s(f,"tec",_,.5,.62,Mt.branco);s(f,"tec",p.at(p.u0+.01,p.u1-.01,.55,g-.01),.5,.54,Mt.edredom),s(f,"tec",p.at(p.u0+.005,p.u1-.005,g-.5,g-.005),.54,.565,Mt.manta)}else if(m==="armario"){let _=u.h,y=p.u1-p.u0,x=Math.max(1,Math.round(y/.5));s(f,"mad",p.at(p.u0,p.u1,0,g),.08,_,Mt.freijo),s(f,"mad",p.at(p.u0+.02,p.u1-.02,0,g-.04),0,.08,Mt.escuro);for(let S=1;S<x;S++){let b=p.u0+y*S/x;s(f,"mad",p.at(b-.004,b+.004,g,g+.003),.1,_-.02,Mt.escuro)}}else if(m==="movel"){let[_,y,x,S]=u.r;s(f,"mad",u.r,.06,u.h,Mt.freijo),s(f,"mad",[_+.03,y+.03,x-.03,S-.03],0,.06,Mt.escuro)}else if(m==="tapete"){let[_,y,x,S]=u.r;s(f,"tec",u.r,0,.008,Mt.borda),s(f,"tec",[_+.12,y+.12,x-.12,S-.12],.008,.011,Mt.tapete)}else if(m==="tv"){let[_,y,x,S]=u.r,b=(_+x)/2,E=(y+S)/2;s(f,"lis",u.r,u.y0,u.y0+u.h,Mt.tela),s(f,"lis",[b-.12,E-.06,b+.12,E+.06],u.y0-.1,u.y0,Mt.tela)}else if(m==="bacia"){let[_,y,x,S]=u.e;r(f,"lis",_,y,x*.92,S*.92,0,.38,Mt.louca,.78,28),r(f,"lis",_,y,x,S,.38,.41,Mt.louca,1,28),s(f,"lis",v.tank,.38,.78,Mt.louca)}else if(m==="box"){let _=ha(u.r,u.vidro),y=(_.u0+_.u1)/2,x=_.at(_.u0,_.u1,0,.01);n(f,"vid",te(x[0],Dn[f],x[1],x[2],Dn[f]+2,x[3])),s(f,"lis",_.at(_.u0,_.u1,0,.02),2,2.025,Mt.tela),s(f,"lis",u.r,0,.006,Mt.piso),s(f,"lis",_.at(y-.01,y+.01,_.D-.3,_.D),2.06,2.08,Mt.inox);let[S,b]=_.pt(y,_.D-.3);r(f,"lis",S,b,.1,.1,2.03,2.05,Mt.inox,1,20)}else if(m==="tanque"){s(f,"alv",p.at(p.u0,p.u1,0,g),0,.6,Mt.alv),s(f,"alv",p.at(p.u0,p.u1,0,g),.6,.64,Mt.conc),s(f,"alv",p.at(p.u0,p.u1,0,.04),.64,.88,Mt.conc),s(f,"alv",p.at(p.u0,p.u1,g-.04,g),.64,.88,Mt.conc),s(f,"alv",p.at(p.u0,p.u0+.04,.04,g-.04),.64,.88,Mt.conc),s(f,"alv",p.at(p.u1-.04,p.u1,.04,g-.04),.64,.88,Mt.conc);let _=(p.u0+p.u1)/2;s(f,"lis",p.at(_-.015,_+.015,-.05,.14),1.1,1.13,Mt.inox)}else if(m==="maquina"){let _=(p.u0+p.u1)/2,[y,x]=p.pt(_,g+.008);s(f,"lis",u.r,0,.85,Mt.branco),s(f,"lis",p.at(p.u0+.02,p.u1-.02,g,g+.003),.74,.82,"#d4d4cf");let S=new ri(.17,.17,.016,28).rotateX(Math.PI/2);(u.back==="e"||u.back==="w")&&S.rotateY(Math.PI/2),n(f,"lis",Ef(S.translate(y,Dn[f]+.44,x),"#3a3f42"))}else m==="caixa"&&s(f,"lis",u.r,u.y0,u.y0+u.h,"#d9dad6")}let d={alv:i.built,mad:i.movel,tec:i.tecido,liv:i.tecido,lis:i.liso,vid:i.glass};for(let[u,f]of e){let[m,v]=u.split("|"),p=nn(f),g=new de(p,d[v]);g.castShadow=v!=="vid",g.receiveShadow=!0,g.userData.lv=+m,t.add(g),v!=="liv"&&v!=="vid"&&t.add(new Es(new Rs(p,24),i.edge))}return t}function Fm(i){let t=new Oe,e=[],n=(_,y,x={})=>{let S=new de(_,y);return S.castShadow=x.cast!==!1,S.receiveShadow=!0,S.userData.lv=0,S.userData.mat=y,S.userData.site=!0,t.add(S),x.ray!==!1&&e.push(S),S},s=(_,y,x,S,b,E,M,T)=>n(Sn(te(_,b,y,x,E,S),()=>M),i.site,T),r=new As(260,48);r.rotateX(-Math.PI/2),r.translate(5,-.32,10),n(Sn(r,()=>zt.terra),i.ground,{cast:!1,ray:!1});let o=(_,y,x,S,b,E,M,T)=>n(Sn(te(_,b,y,x,E,S),()=>M),i.ground,T);o(-60,-13,70,-1.6,-.42,-.3,zt.rua,{cast:!1,ray:!1}),o(-60,-1.6,70,0,-.42,-.15,zt.calcada,{cast:!1,ray:!1}),o(-60,0,70,40,-.42,-.15,zt.grama,{cast:!1}),s(.15,.3,2.95,5,-.15,-.13,zt.calcada,{cast:!1,ray:!1}),s(3.6,.15,4.8,5,-.15,-.13,zt.calcada,{cast:!1,ray:!1});for(let _=7.9;_<19.6;_+=.9)(_<10.9||_>14.2)&&s(8.75,_,9.6,_+.5,-.15,-.12,zt.calcada,{cast:!1,ray:!1});s(5,.15,6.1,.75,-.15,1.5,zt.cal);let a=[te(8.82,-.15,11.12,9.68,-.05,11.2),te(8.82,-.15,13.9,9.68,-.05,13.98),te(8.82,-.15,11.2,8.9,-.05,13.9),te(9.6,-.15,11.2,9.68,-.05,13.9)];n(Sn(nn(a),()=>zt.calcada),i.site,{ray:!1});let l=new zn(.7,2.7);l.rotateX(-Math.PI/2),l.translate(9.25,-.09,12.55),n(l,i.water,{cast:!1,ray:!1});for(let[_,y]of[[-7.6,0],[10,17.6]])n(Sn(te(_,-.15,4,y,6.2,16),()=>zt.vizinho),i.site).userData.grp="viz",n(Sn(BS(_-.3,y+.3,3.7,16.3,6.2,7.4),(x,S)=>S<-.5?zt.vizinho:zt.vizTelha),i.hipRoof).userData.grp="viz";s(0,0,10,.15,-.15,.6,zt.cal);let c=[];for(let _=.06;_<10;_+=.12)c.push(te(_-.01,.6,.06,_+.01,1.8,.09));c.push(te(0,1.76,.05,10,1.8,.1)),n(nn(c),i.steel,{ray:!1}),s(0,.15,.15,5,-.15,1.8,zt.cal),s(9.85,.15,10,4,-.15,1.8,zt.cal),s(9.85,16,10,20,-.15,2.2,zt.cal),s(8.5,19.85,9.85,20,-.15,2.2,zt.cal);let h=[];for(let _ of[.3,2.8]){for(let y of[.6,4.7])h.push(te(_-.06,-.15,y-.06,_+.06,2.4,y+.06));h.push(te(_-.05,2.4,.4,_+.05,2.55,4.95))}for(let _=.45;_<4.95;_+=.45)h.push(te(.2,2.55,_-.03,2.9,2.63,_+.03));n(nn(h),i.wood);let d=yf(ze({color:zt.folha,roughness:1,flatShading:!0})),u=yf(ze({color:"#4f6b3a",roughness:1,flatShading:!0})),f=v(8.2,2.3,3.6,5,[1.7,1.5,1.7],d,.13,5),m=v(9.2,18.3,1.2,2.5,[.6,1.1,.95],u,.1,3);function v(_,y,x,S,b,E,M,T){let w=n(new ri(M*.7,M,x+.15,8).translate(_,(x-.15)/2,y),i.bark,{cast:!0}),C=[];for(let X=0;X<T;X++){let rt=X/T*Math.PI*2+.4,W=new I(_,x-.1,y),tt=new I(_+Math.cos(rt)*b[0]*.8,S+b[1]*.45,y+Math.sin(rt)*b[2]*.8),Q=new I().subVectors(tt,W),_t=Q.length(),O=new ri(.03,.06,_t,6);O.applyQuaternion(new je().setFromUnitVectors(new I(0,1,0),Q.normalize())),O.translate((W.x+tt.x)/2,(W.y+tt.y)/2,(W.z+tt.z)/2),C.push(O)}let P=n(nn(C),i.bark,{ray:!1}),N=new Lo(1,2),D=N.attributes.position;for(let X=0;X<D.count;X++){let rt=1+.14*Math.sin(D.getX(X)*5.1+D.getZ(X)*3.7)*Math.cos(D.getY(X)*4.3);D.setXYZ(X,D.getX(X)*rt,D.getY(X)*rt,D.getZ(X)*rt)}N.computeVertexNormals(),N.scale(b[0],b[1],b[2]),N.translate(_,S,y);let U=n(N,E,{ray:!1}),H=new de(new Oi(1,12,8).scale(b[0]*.92,b[1]*.92,b[2]*.92).translate(_,S,y),new un({side:Ue}));H.userData.tau=.25,e.push(H);for(let X of[w,P,U,H])X.userData.grp="tree";return{t:w,branches:P,crown:U,px:H}}let p=(()=>{let y=new Float32Array(960),x=new Float32Array(320),S=3,b=()=>(S=S*16807%2147483647)/2147483647;for(let w=0;w<320;w++){let C=b()*Math.PI*2,P=Math.sqrt(b())*1.9;y.set([8.2+Math.cos(C)*P,3.6+b()*2.6,2.3+Math.sin(C)*P*.95],w*3),x[w]=b()}let E=new ne;E.setAttribute("position",new se(y,3)),E.setAttribute("aPh",new se(x,1));let M=new ue({transparent:!0,depthWrite:!1,uniforms:{uTime:cs,uColor:{value:new Pt(zt.ipe)}},vertexShader:`attribute float aPh; uniform float uTime; varying float vA;
        void main() {
          float k = fract(aPh + uTime * (.045 + .03 * aPh));
          vec3 p = position;
          p.y = mix(position.y, -.1, k);
          p.x += .35 * sin(uTime * .9 + aPh * 40.0) * k + .9 * k;
          p.z += .25 * cos(uTime * .7 + aPh * 31.0) * k;
          vA = smoothstep(0.0, .08, k) * (1.0 - smoothstep(.9, 1.0, k));
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = clamp(90.0 / -mv.z, 1.5, 9.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform vec3 uColor; varying float vA;
        void main() { vec2 q = gl_PointCoord - .5; float d = dot(q, q * vec2(1.0, 2.2)); if (d > .25) discard; gl_FragColor = vec4(uColor, vA * .9);
          #include <colorspace_fragment>
        }`}),T=new Ui(E,M);return T.frustumCulled=!1,T.visible=!1,T.userData.grp="tree",t.add(T),T})();function g(_){let y=_===5||_===6,x=_===7;p.userData.on=x,f.crown.visible=!y,d.color.set(x?zt.ipe:zt.folha),f.px.userData.tau=y?.85:x?.5:.25,m.px.userData.tau=.2}return{root:t,occ:e,setSeason:g,trees:[f,m],petals:p}}function BS(i,t,e,n,s,r){let o=(i+t)/2,a=(t-i)/2,l=[i,s,e],c=[t,s,e],h=[t,s,n],d=[i,s,n],u=[o,r,e+a],f=[o,r,n-a],m=[l,u,c,h,f,d,l,d,f,l,f,u,c,u,f,c,f,h,l,c,h,l,h,d],v=new ne;return v.setAttribute("position",new ce(m.flat(),3)),v}var zS=`
attribute vec3 aDir;
attribute float aSide, aT, aGlass, aLen, aW;
uniform float uWidth;
varying float vT, vSide, vGlass, vLen, vW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec3 c = cross(normalize(aDir), normalize(cameraPosition - wp.xyz));
  float l = length(c);
  vec3 side = l > 1e-4 ? c / l : vec3(0.0, 1.0, 0.0);
  wp.xyz += side * aSide * uWidth;
  gl_Position = projectionMatrix * viewMatrix * wp;
  vT = aT; vSide = aSide; vGlass = aGlass; vLen = aLen; vW = aW;
}`,kS=`
uniform vec3 uColor;
uniform float uTime, uGain;
varying float vT, vSide, vGlass, vLen, vW;
void main() {
  float across = exp(-3.0 * vSide * vSide);
  float inside = step(vGlass, vT);
  float body = mix(0.3 * smoothstep(0.0, vGlass, vT), 1.0, inside);
  float ph = fract(vT * vLen * 1.4 - uTime * 0.8);
  float grain = smoothstep(0.0, 0.06, ph) * (1.0 - smoothstep(0.06, 0.45, ph));
  float tail = 1.0 - 0.5 * smoothstep(0.94, 1.0, vT);
  float a = clamp(vW * across * body * tail * (0.5 + 0.7 * grain) * uGain, 0.0, 1.0);
  gl_FragColor = vec4(uColor, a);
}`;function Om(){let i=new ue({vertexShader:zS,fragmentShader:kS,transparent:!0,depthWrite:!1,blending:Bi,side:Ue,uniforms:{uColor:{value:new Pt("#ffd79a")},uTime:{value:0},uGain:{value:.5},uWidth:{value:.045}}}),t=new ne,e=new de(t,i);e.frustumCulled=!1,e.renderOrder=10;let n=(()=>{if(typeof document>"u")return null;let v=document.createElement("canvas");v.width=v.height=64;let p=v.getContext("2d"),g=p.createRadialGradient(32,32,0,32,32,32);return g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(.35,"rgba(255,255,255,.45)"),g.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=g,p.fillRect(0,0,64,64),new ws(v)})(),s=4e3,r=new Mo(new zn(.26,.26),new un({map:n,color:"#ffcf7a",transparent:!0,opacity:.55,depthWrite:!1,blending:Bi,toneMapped:!1}),s);r.count=0,r.frustumCulled=!1,r.renderOrder=11;let o=3e3,a=new Ui(new ne,new ue({transparent:!0,depthWrite:!1,blending:Bi,uniforms:{uTime:cs,uColor:i.uniforms.uColor},vertexShader:`attribute float aPh; uniform float uTime; varying float vA;
      void main() {
        vec3 p = position + vec3(sin(uTime * .31 + aPh * 17.0), .6 * sin(uTime * .23 + aPh * 29.0), cos(uTime * .27 + aPh * 11.0)) * .05;
        vA = .35 + .65 * pow(.5 + .5 * sin(uTime * 1.7 + aPh * 53.0), 3.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp(26.0 / -mv.z, 1.0, 4.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform vec3 uColor; varying float vA;
      void main() { vec2 q = gl_PointCoord - .5; float d = dot(q, q); if (d > .25) discard; gl_FragColor = vec4(uColor, vA * (1.0 - 4.0 * d) * .7); }`}));a.frustumCulled=!1,a.renderOrder=12;let l=new Oe;l.add(e,r,a);let c=new Yt,h=new je,d=new I(0,0,1),u=new I(1,1,1),f=new I;function m(v){let p=v.length,g=new Float32Array(p*12),_=new Float32Array(p*12),y=new Float32Array(p*4),x=new Float32Array(p*4),S=new Float32Array(p*4),b=new Float32Array(p*4),E=new Float32Array(p*4),M=new Uint32Array(p*6),T=0;v.forEach((U,H)=>{let X=U.a.distanceTo(U.b),rt=U.a.distanceTo(U.g)/Math.max(X,.001);for(let W=0;W<4;W++){let tt=W>>1,Q=tt?U.b:U.a,_t=H*4+W;g[_t*3]=Q.x,g[_t*3+1]=Q.y,g[_t*3+2]=Q.z,_[_t*3]=U.b.x-U.a.x,_[_t*3+1]=U.b.y-U.a.y,_[_t*3+2]=U.b.z-U.a.z,y[_t]=W&1?1:-1,x[_t]=tt,S[_t]=rt,b[_t]=X,E[_t]=U.w}M.set([H*4,H*4+1,H*4+3,H*4,H*4+3,H*4+2],H*6),U.n&&T<s&&(f.copy(U.b).addScaledVector(U.n,.006),h.setFromUnitVectors(d,U.n),u.setScalar(.5+.5*Math.min(1,U.w*1.4)),r.setMatrixAt(T++,c.compose(f,h,u)))}),t.setAttribute("position",new se(g,3)),t.setAttribute("aDir",new se(_,3)),t.setAttribute("aSide",new se(y,1)),t.setAttribute("aT",new se(x,1)),t.setAttribute("aGlass",new se(S,1)),t.setAttribute("aLen",new se(b,1)),t.setAttribute("aW",new se(E,1)),t.setIndex(new se(M,1)),r.count=T,r.instanceMatrix.needsUpdate=!0;let w=Math.max(1,Math.min(3,Math.round(o/Math.max(1,p)))),C=[],P=[],N=5,D=()=>(N=N*16807%2147483647)/2147483647;for(let U of v)for(let H=0;H<w&&P.length<o;H++){let X=D(),rt=U.g,W=U.b;C.push(rt.x+(W.x-rt.x)*X+(D()-.5)*.08,rt.y+(W.y-rt.y)*X+(D()-.5)*.08,rt.z+(W.z-rt.z)*X+(D()-.5)*.08),P.push(D())}a.geometry.dispose(),a.geometry=new ne,a.geometry.setAttribute("position",new se(new Float32Array(C),3)),a.geometry.setAttribute("aPh",new se(new Float32Array(P),1))}return{group:l,set:m,mat:i,glow:r,dust:a}}var VS=`
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,HS=`
uniform vec3 uSun, uZen, uHor, uGlow;
uniform float uDisk, uDay, uHdrOn, uRot;
uniform sampler2D uHdr;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, 0.0, 1.0);
  vec3 col = mix(uHor, uZen, pow(h, 0.55));
  if (uHdrOn > .5) {
    vec2 uv = vec2(fract(atan(d.z, d.x) * .1591549 + .5 + uRot), asin(clamp(d.y, -1.0, 1.0)) * .3183099 + .5);
    vec2 cm = texture2D(uHdr, uv).rg;
    float cl = cm.r * smoothstep(.0, .1, d.y);
    vec3 cc = mix(uHor, vec3(1.0), .5 * uDay) * mix(.82, 1.08, cm.g);
    col = mix(col, cc + uGlow * .2, cl * .8);
  }
  float c = max(dot(d, uSun), 0.0);
  col += uGlow * (0.28 * pow(c, 5.0) + 0.55 * pow(c, 40.0));
  col += uGlow * uDisk * smoothstep(0.99955, 0.99975, c) * 5.0;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,wf=400,Vs=i=>new Pt(i),Hs={zenDay:Vs("#86b3cf"),zenNight:Vs("#2a3550"),horDay:Vs("#efe8da"),horNight:Vs("#5d5866"),horWarm:Vs("#f1c79d"),glowLow:Vs("#ff9f5a"),glowHigh:Vs("#fff0d2")},da=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)};function Bm(){let i=new ue({vertexShader:VS,fragmentShader:HS,side:Qe,depthWrite:!1,uniforms:{uSun:{value:new I(0,1,0)},uZen:{value:new Pt},uHor:{value:new Pt},uGlow:{value:new Pt},uDisk:{value:1},uDay:{value:1},uHdrOn:{value:0},uRot:{value:0},uHdr:{value:null}}}),t=new de(new Oi(wf,48,24),i);t.renderOrder=-2,t.frustumCulled=!1,t.userData.noAO=!0;let e=new si({color:"#b4532a",transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),n=new Ts(new ne,e);n.frustumCulled=!1,n.renderOrder=-1;let s=new Tr({color:"#b4532a",size:5,sizeAttenuation:!1,transparent:!0,opacity:.8,depthWrite:!1,fog:!1}),r=new Ui(new ne,s);r.frustumCulled=!1,r.renderOrder=-1;let o=new Oe;o.add(t,n,r);function a(d,u){let f=da(-6,14,u),m=(1-da(2,28,u))*da(-8,0,u),v=i.uniforms;return v.uSun.value.copy(d),v.uZen.value.copy(Hs.zenNight).lerp(Hs.zenDay,f),v.uHor.value.copy(Hs.horNight).lerp(Hs.horDay,f).lerp(Hs.horWarm,m*.55),v.uGlow.value.copy(Hs.glowLow).lerp(Hs.glowHigh,da(4,40,u)).multiplyScalar(da(-4,4,u)),v.uDisk.value=u>-1?1:0,v.uDay.value=f,v.uRot.value=l-(Math.atan2(d.z,d.x)/(2*Math.PI)+.5),v.uHor.value}let l=0;function c(d,u){i.uniforms.uHdr.value=d,i.uniforms.uHdrOn.value=1,l=u}function h(d){let u=[],f=[];for(let m=4.5;m<=19.5001;m+=.1){let v=d(m);v.y>-.02&&u.push(v.clone().multiplyScalar(wf*.96))}for(let m=5;m<=19;m++){let v=d(m);v.y>0&&f.push(v.clone().multiplyScalar(wf*.96))}n.geometry.dispose(),r.geometry.dispose(),n.geometry=new ne().setFromPoints(u),r.geometry=new ne().setFromPoints(f)}return{group:o,mat:i,setSun:a,setPath:h,setHdr:c,follow:d=>o.position.copy(d.position)}}var iu=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},GS=new Pt("#ffb36e"),WS=new Pt("#fff3e2");function zm(i,t=1){let e=new $e;e.position.set(5,3,12.5);let n=new Vo(16777215,3);n.target=e,n.castShadow=!0;let s=n.shadow.camera;s.left=-17,s.right=17,s.top=17,s.bottom=-17,s.near=1,s.far=170,n.shadow.mapSize.set(i,i),n.shadow.bias=-4e-4,n.shadow.normalBias=.025,n.shadow.radius=2.5;let r=new zo("#d9e6ee","#b9a888",1.1),o=new Oe;o.add(n,e,r);function a(l,c){n.position.copy(e.position).addScaledVector(l,80);let h=iu(-.5,6,c);n.intensity=3.3*h*(.62+.38*iu(4,35,c)),n.color.copy(GS).lerp(WS,iu(3,35,c)),r.intensity=(.25+.9*iu(-6,18,c))*t}return{group:o,set:a,sun:n}}var km={type:"change"},Rf={type:"start"},Hm={type:"end"},su=new On,Vm=new Je,XS=Math.cos(70*qh.DEG2RAD),sn=new I,Ln=2*Math.PI,Se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Af=1e-6,ru=class extends Go{constructor(t,e=null){super(t,e),this.state=Se.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new je,this._lastTargetPosition=new I,this._quat=new je().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cr,this._sphericalDelta=new Cr,this._scale=1,this._panOffset=new I,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new I,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YS.bind(this),this._onPointerDown=qS.bind(this),this._onPointerUp=ZS.bind(this),this._onContextMenu=eM.bind(this),this._onMouseWheel=KS.bind(this),this._onKeyDown=jS.bind(this),this._onTouchStart=QS.bind(this),this._onTouchMove=tM.bind(this),this._onMouseDown=JS.bind(this),this._onMouseMove=$S.bind(this),this._interceptControlDown=nM.bind(this),this._interceptControlUp=iM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Se.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(km),this.update(),this.state=Se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;sn.copy(e).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),e.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=sn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(su.origin.copy(this.object.position),su.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(su.direction))<XS?this.object.lookAt(this.target):(Vm.setFromNormalAndCoplanarPoint(this.object.up,this.target),su.intersectPlane(Vm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Af||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Af||this._lastTargetPosition.distanceToSquared(this.target)>Af?(this.dispatchEvent(km),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){sn.setFromMatrixColumn(e,0),sn.multiplyScalar(-t),this._panOffset.add(sn)}_panUp(t,e){this.screenSpacePanning===!0?sn.setFromMatrixColumn(e,1):(sn.setFromMatrixColumn(e,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(t),this._panOffset.add(sn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;sn.copy(s).sub(this.target);let r=sn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function qS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function YS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ZS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hm),this.state=Se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function JS(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Se.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Se.PAN}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Rf)}function $S(i){switch(this.state){case Se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function KS(i){this.enabled===!1||this.enableZoom===!1||this.state!==Se.NONE||(i.preventDefault(),this.dispatchEvent(Rf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hm))}function jS(i){this.enabled!==!1&&this._handleKeyDown(i)}function QS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Se.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Se.TOUCH_PAN;break;default:this.state=Se.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Se.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Se.TOUCH_DOLLY_ROTATE;break;default:this.state=Se.NONE}break;default:this.state=Se.NONE}this.state!==Se.NONE&&this.dispatchEvent(Rf)}function tM(i){switch(this._trackPointer(i),this.state){case Se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Se.NONE}}function eM(i){this.enabled!==!1&&i.preventDefault()}function nM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var pa={rua:{p:[17,7.5,-12],t:[4.4,4.4,12]},fundos:{p:[24,11,36],t:[4.4,4.6,13]},aerea:{p:[24,31,-7],t:[4.4,3.2,13]},corte:{p:[27,6.4,13],t:[4.4,5.6,13]},planta:{p:[4.3,22,27],t:[4.3,0,12.8]}};function Gm(i,t){let e=new mn(40,1,.1,2e3),n=new ru(e,i);n.enableDamping=!0,n.dampingFactor=.08,n.minDistance=3,n.maxDistance=110,n.maxPolarAngle=Math.PI*.495,n.screenSpacePanning=!0;let s=null;function r(c,h){e.aspect=c/h,e.fov=Math.max(40,2*Math.atan(Math.tan(19*Math.PI/180)/e.aspect)*180/Math.PI),e.updateProjectionMatrix()}function o(c,h=0,d=!1){let u=new I(...c.p).add(new I(0,h,0)),f=new I(...c.t).add(new I(0,h,0));if(t||d){e.position.copy(u),n.target.copy(f),n.update(),s=null;return}s={p0:e.position.clone(),t0:n.target.clone(),p:u,t:f,start:performance.now(),dur:900}}function a(c){if(s){let h=Math.min(1,(c-s.start)/s.dur),d=h<.5?4*h*h*h:1-Math.pow(-2*h+2,3)/2;e.position.lerpVectors(s.p0,s.p,d),n.target.lerpVectors(s.t0,s.t,d),h>=1&&(s=null)}return n.update()||!!s}return n.addEventListener("start",()=>{s=null}),{camera:e,controls:n,resize:r,go:o,tick:a,north:()=>{let c=n.target.x-e.position.x,h=n.target.z-e.position.z;return Math.atan2(-c,-h)}}}var ou=-15.8*Math.PI/180;function Cf(i,t){let e=23.44*Math.PI/180*Math.sin(2*Math.PI/365*(284+i)),n=(t-12)*15*Math.PI/180,s=-Math.cos(e)*Math.sin(n),r=Math.sin(e)*Math.cos(ou)-Math.cos(e)*Math.sin(ou)*Math.cos(n),o=Math.sin(e)*Math.sin(ou)+Math.cos(e)*Math.cos(ou)*Math.cos(n),a=Math.atan2(s,r)*180/Math.PI;return a<0&&(a+=360),{E:s,N:r,U:o,alt:Math.asin(Math.max(-1,Math.min(1,o)))*180/Math.PI,az:a}}var Gs=i=>[i.E,i.U,-i.N],lu={dif(i){if(i<=0)return 0;let t=Math.sin(i*Math.PI/180);return 500*(1.1+21*t+15.5*Math.sqrt(t))},beam(i){return i<=1?0:63750*Math.exp(-.21/Math.sin(i*Math.PI/180))}},ma=(i,t=1)=>i.toFixed(t).replace(".",","),sM=["janeiro","fevereiro","mar\xE7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],au=[31,28,31,30,31,30,31,31,30,31,30,31];function Wm(i){let t=0;for(;i>au[t];)i-=au[t],t++;return t}function ga(i){let t=0;for(;i>au[t];)i-=au[t],t++;return i+" de "+sM[t]}function _a(i){let t=Math.floor(i+1e-6),e=Math.round((i-t)*60);return t+"h"+(e?String(e).padStart(2,"0"):"")}var rM=["norte","norte-nordeste","nordeste","leste-nordeste","leste","leste-sudeste","sudeste","sul-sudeste","sul","sul-sudoeste","sudoeste","oeste-sudoeste","oeste","oeste-noroeste","noroeste","norte-noroeste"],Xm=i=>rM[Math.round(i/22.5)%16];var cu=new Ds;cu.layers.enableAll();var qm=new I,oM=new I;function aM(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}function Pf(i){let t=i.y>-.3&&i.y<.6?0:i.y>2.9&&i.y<3.7?1:i.y>5.9&&i.y<6.7?2:-1;return t<0?null:zi.find(e=>e.lv===t&&aM(i.x,i.z,e.pts))||null}function Ym(i,t,e,n){qm.copy(i).addScaledVector(t,.004),cu.set(qm,t),cu.far=n;let s=cu.intersectObjects(e,!1),r=new Set,o=1;for(let a of s){let l=a.object.userData.tau;if(l==null)return{w:o,hit:a};r.has(a.object)||(r.add(a.object),o*=l)}return{w:o,hit:null}}function Zm(i,t,e,n=.25){let s={rays:[],flux:{},floor:{},s:null};if(i.U<=.02)return s;let r=new I(...Gs(i)).normalize(),o=r.clone().negate();s.s=r;for(let a of t){let l=a.n.dot(r);if(l<=.01)continue;let c=Math.max(1,Math.round(a.w/n)),h=Math.max(1,Math.round(a.h/n)),d=a.w*a.h/(c*h);for(let u=0;u<c;u++)for(let f=0;f<h;f++){let m=a.p0.clone().addScaledVector(a.u,a.w*(u+.5)/c).addScaledVector(a.v,a.h*(f+.5)/h),v=Ym(m,r,e,90);if(v.hit||v.w<.03)continue;let p=Ym(m,o,e,30),g=v.w*p.w;s.flux[a.room]=(s.flux[a.room]||0)+d*l*a.tau*v.w;let _,y=null,x=null;p.hit?(_=p.hit.point.clone(),y=oM.copy(p.hit.face.normal).transformDirection(p.hit.object.matrixWorld).clone(),y.dot(o)>0&&y.negate(),y.y>.7&&(x=Pf(_),x&&(s.floor[x.id]=(s.floor[x.id]||0)+d*l/Math.max(r.y,.05)*g))):_=m.clone().addScaledVector(o,12),s.rays.push({p:m,b:_,n:y,w:g*(a.tau||1),ap:a.id,y:m.y})}}return s}var zr=Math.pow(2,-24),xa=Symbol("SKIP_GENERATION"),uu={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[xa]:!1};function we(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function va(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function If(i,t){t.set(i)}function Df(i,t,e){let n,s;for(let r=0;r<3;r++){let o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function ya(i,t,e){for(let n=0;n<3;n++){let s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function kr(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function he(i,t){return t[i+15]===65535}function ye(i,t){return t[i+6]}function be(i,t){return t[i+14]}function ge(i){return i+8}function _e(i,t){let e=t[i+6];return i+e*8}function Vr(i,t){return t[i+7]}function hu(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,d=1/0,u=1/0,f=1/0,m=-1/0,v=-1/0,p=-1/0,g=i.offset||0;for(let _=(t-g)*6,y=(t+e-g)*6;_<y;_+=6){let x=i[_+0],S=i[_+1],b=x-S,E=x+S;b<r&&(r=b),E>l&&(l=E),x<d&&(d=x),x>m&&(m=x);let M=i[_+2],T=i[_+3],w=M-T,C=M+T;w<o&&(o=w),C>c&&(c=C),M<u&&(u=M),M>v&&(v=M);let P=i[_+4],N=i[_+5],D=P-N,U=P+N;D<a&&(a=D),U>h&&(h=U),P<f&&(f=P),P>p&&(p=P)}n[0]=r,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=h,s[0]=d,s[1]=u,s[2]=f,s[3]=m,s[4]=v,s[5]=p}var ki=32,uM=(i,t)=>i.candidate-t.candidate,hs=new Array(ki).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),fu=new Float32Array(6);function $m(i,t,e,n,s,r){let o=-1,a=0;if(r===0)o=va(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===1)o=va(i),o!==-1&&(a=hM(e,n,s,o));else if(r===2){let l=kr(i),c=1.25*s,h=e.offset||0,d=(n-h)*6,u=(n+s-h)*6;for(let f=0;f<3;f++){let m=t[f],g=(t[f+3]-m)/ki;if(s<ki/4){let _=[...hs];_.length=s;let y=0;for(let S=d;S<u;S+=6,y++){let b=_[y];b.candidate=e[S+2*f],b.count=0;let{bounds:E,leftCacheBounds:M,rightCacheBounds:T}=b;for(let w=0;w<3;w++)T[w]=1/0,T[w+3]=-1/0,M[w]=1/0,M[w+3]=-1/0,E[w]=1/0,E[w+3]=-1/0;ya(S,e,E)}_.sort(uM);let x=s;for(let S=0;S<x;S++){let b=_[S];for(;S+1<x&&_[S+1].candidate===b.candidate;)_.splice(S+1,1),x--}for(let S=d;S<u;S+=6){let b=e[S+2*f];for(let E=0;E<x;E++){let M=_[E];b>=M.candidate?ya(S,e,M.rightCacheBounds):(ya(S,e,M.leftCacheBounds),M.count++)}}for(let S=0;S<x;S++){let b=_[S],E=b.count,M=s-b.count,T=b.leftCacheBounds,w=b.rightCacheBounds,C=0;E!==0&&(C=kr(T)/l);let P=0;M!==0&&(P=kr(w)/l);let N=1+1.25*(C*E+P*M);N<c&&(o=f,c=N,a=b.candidate)}}else{for(let x=0;x<ki;x++){let S=hs[x];S.count=0,S.candidate=m+g+x*g;let b=S.bounds;for(let E=0;E<3;E++)b[E]=1/0,b[E+3]=-1/0}for(let x=d;x<u;x+=6){let E=~~((e[x+2*f]-m)/g);E>=ki&&(E=ki-1);let M=hs[E];M.count++,ya(x,e,M.bounds)}let _=hs[ki-1];If(_.bounds,_.rightCacheBounds);for(let x=ki-2;x>=0;x--){let S=hs[x],b=hs[x+1];Df(S.bounds,b.rightCacheBounds,S.rightCacheBounds)}let y=0;for(let x=0;x<ki-1;x++){let S=hs[x],b=S.count,E=S.bounds,T=hs[x+1].rightCacheBounds;b!==0&&(y===0?If(E,fu):Df(E,fu,fu)),y+=b;let w=0,C=0;y!==0&&(w=kr(fu)/l);let P=s-y;P!==0&&(C=kr(T)/l);let N=1+1.25*(w*y+C*P);N<c&&(o=f,c=N,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function hM(i,t,e,n){let s=0,r=i.offset;for(let o=t,a=t+e;o<a;o++)s+=i[(o-r)*6+n*2];return s/e}var Hr=class{constructor(){this.boundingData=new Float32Array(6)}};function Km(i,t,e,n,s,r){let o=n,a=n+s-1,l=r.pos,c=r.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+c]<l;)o++;for(;o<=a&&e[(a-h)*6+c]>=l;)a--;if(o<a){for(let d=0;d<t;d++){let u=i[o*t+d];i[o*t+d]=i[a*t+d],i[a*t+d]=u}for(let d=0;d<6;d++){let u=o-h,f=a-h,m=e[u*6+d];e[u*6+d]=e[f*6+d],e[f*6+d]=m}o++,a--}else return o}}var jm,du,Lf,Qm,fM=Math.pow(2,32);function pu(i){return"count"in i?1:1+pu(i.left)+pu(i.right)}function t0(i,t,e){return jm=new Float32Array(e),du=new Uint32Array(e),Lf=new Uint16Array(e),Qm=new Uint8Array(e),Nf(i,t)}function Nf(i,t){let e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)jm[e+o]=r[o];if(s)return t.buffer?(Qm.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(du[e+6]=t.offset,Lf[n+14]=t.count,Lf[n+15]=65535,i+32);{let{left:o,right:a,splitAxis:l}=t,c=i+32,h=Nf(c,o),d=i/32,f=h/32-d;if(f>fM)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return du[e+6]=f,du[e+7]=l,Nf(h,a)}}function dM(i,t,e,n,s,r){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:d}=s,u=i.primitiveBuffer,f=i.primitiveBufferStride,m=new Float32Array(6),v=!1,p=new Hr;return hu(t,e,n,p.boundingData,m),_(p,e,n,m),p;function g(y){d&&d((y-r.offset)/r.count)}function _(y,x,S,b=null,E=0){!v&&E>=o&&(v=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let M=S>c;if(S<=l&&!M||E>=o)return g(x+S),y.offset=x,y.count=S,y;let T=$m(y.boundingData,b,t,x,S,h),w=T.axis===-1?-1:Km(u,f,t,x,S,T);if(T.axis===-1||w===x||w===x+S){if(!M)return g(x+S),y.offset=x,y.count=S,y;T.axis=Math.max(0,va(y.boundingData)),w=x+Math.max(1,Math.floor(S/2))}y.splitAxis=T.axis;let C=new Hr,P=x,N=w-x;y.left=C,hu(t,P,N,C.boundingData,m),_(C,P,N,m,E+1);let D=new Hr,U=w,H=S-N;return y.right=D,hu(t,U,H,D.boundingData,m),_(D,U,H,m,E+1),y}}function e0(i,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),s=n[0],r=n[n.length-1],o={offset:s.offset,count:r.offset+r.count-s.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(l=>{let c=dM(i,a,l.offset,l.count,t,o),h=pu(c),d=new e(32*h);return t0(0,c,d),d})}var fs=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Uf=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},pe=new Uf;var ds,Wr,Gr=[],mu=new fs(()=>new Pe);function n0(i,t,e,n,s,r){ds=mu.getPrimitive(),Wr=mu.getPrimitive(),Gr.push(ds,Wr),pe.setBuffer(i._roots[t]);let o=Ff(0,i.geometry,e,n,s,r);pe.clearBuffer(),mu.releasePrimitive(ds),mu.releasePrimitive(Wr),Gr.pop(),Gr.pop();let a=Gr.length;return a>0&&(Wr=Gr[a-1],ds=Gr[a-2]),o}function Ff(i,t,e,n,s=null,r=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=pe,h=i*2;if(he(h,l)){let u=ye(i,c),f=be(h,l);return we(i,a,ds),n(u,f,!1,o,r+i/8,ds)}else{let w=function(P){let{uint16Array:N,uint32Array:D}=pe,U=P*2;for(;!he(U,N);)P=ge(P),U=P*2;return ye(P,D)},C=function(P){let{uint16Array:N,uint32Array:D}=pe,U=P*2;for(;!he(U,N);)P=_e(P,D),U=P*2;return ye(P,D)+be(U,N)},u=ge(i),f=_e(i,c),m=u,v=f,p,g,_,y;if(s&&(_=ds,y=Wr,we(m,a,_),we(v,a,y),p=s(_),g=s(y),g<p)){m=f,v=u;let P=p;p=g,g=P,_=y}_||(_=ds,we(m,a,_));let x=he(m*2,l),S=e(_,x,p,o+1,r+m/8),b;if(S===2){let P=w(m),D=C(m)-P;b=n(P,D,!0,o+1,r+m/8,_)}else b=S&&Ff(m,t,e,n,s,r,o+1);if(b)return!0;y=Wr,we(v,a,y);let E=he(v*2,l),M=e(y,E,g,o+1,r+v/8),T;if(M===2){let P=w(v),D=C(v)-P;T=n(P,D,!0,o+1,r+v/8,y)}else T=M&&Ff(v,t,e,n,s,r,o+1);return!!T}}var Sa=new pe.constructor,gu=new pe.constructor,ps=new fs(()=>new Pe),Xr=new Pe,qr=new Pe,Bf=new Pe,zf=new Pe,kf=!1;function i0(i,t,e,n){if(kf)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");kf=!0;let s=i._roots,r=t._roots,o,a=0,l=0,c=new Yt().copy(e).invert();for(let h=0,d=s.length;h<d;h++){Sa.setBuffer(s[h]),l=0;let u=ps.getPrimitive();we(0,Sa.float32Array,u),u.applyMatrix4(c);for(let f=0,m=r.length;f<m&&(gu.setBuffer(r[f]),o=fi(0,0,e,c,n,a,l,0,0,u),gu.clearBuffer(),l+=r[f].byteLength/32,!o);f++);if(ps.releasePrimitive(u),Sa.clearBuffer(),a+=s[h].byteLength/32,o)break}return kf=!1,o}function fi(i,t,e,n,s,r=0,o=0,a=0,l=0,c=null,h=!1){let d,u;h?(d=gu,u=Sa):(d=Sa,u=gu);let f=d.float32Array,m=d.uint32Array,v=d.uint16Array,p=u.float32Array,g=u.uint32Array,_=u.uint16Array,y=i*2,x=t*2,S=he(y,v),b=he(x,_),E=!1;if(b&&S)h?E=s(ye(t,g),be(t*2,_),ye(i,m),be(i*2,v),l,o+t/8,a,r+i/8):E=s(ye(i,m),be(i*2,v),ye(t,g),be(t*2,_),a,r+i/8,l,o+t/8);else if(b){let M=ps.getPrimitive();we(t,p,M),M.applyMatrix4(e);let T=ge(i),w=_e(i,m);we(T,f,Xr),we(w,f,qr);let C=M.intersectsBox(Xr),P=M.intersectsBox(qr);E=C&&fi(t,T,n,e,s,o,r,l,a+1,M,!h)||P&&fi(t,w,n,e,s,o,r,l,a+1,M,!h),ps.releasePrimitive(M)}else{let M=ge(t),T=_e(t,g);we(M,p,Bf),we(T,p,zf);let w=c.intersectsBox(Bf),C=c.intersectsBox(zf);if(w&&C)E=fi(i,M,e,n,s,r,o,a,l+1,c,h)||fi(i,T,e,n,s,r,o,a,l+1,c,h);else if(w)if(S)E=fi(i,M,e,n,s,r,o,a,l+1,c,h);else{let P=ps.getPrimitive();P.copy(Bf).applyMatrix4(e);let N=ge(i),D=_e(i,m);we(N,f,Xr),we(D,f,qr);let U=P.intersectsBox(Xr),H=P.intersectsBox(qr);E=U&&fi(M,N,n,e,s,o,r,l,a+1,P,!h)||H&&fi(M,D,n,e,s,o,r,l,a+1,P,!h),ps.releasePrimitive(P)}else if(C)if(S)E=fi(i,T,e,n,s,r,o,a,l+1,c,h);else{let P=ps.getPrimitive();P.copy(zf).applyMatrix4(e);let N=ge(i),D=_e(i,m);we(N,f,Xr),we(D,f,qr);let U=P.intersectsBox(Xr),H=P.intersectsBox(qr);E=U&&fi(T,N,n,e,s,o,r,l,a+1,P,!h)||H&&fi(T,D,n,e,s,o,r,l,a+1,P,!h),ps.releasePrimitive(P)}}return E}var _u=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=r._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let o=r*2;for(;!he(o,e);)r=ge(r),o=r*2;return ye(r,t)},this.getRangeEnd=r=>{let o=r*2;for(;!he(o,e);)r=_e(r,t),o=r*2;return ye(r,t)+be(o,e)};let s=(r,o,a)=>{let l=o*2,c=he(l,e);if(!r(a,c,o)&&!c){let d=ge(o),u=_e(o,t);s(r,d,a+1),s(r,u,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{s(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((o,a,l)=>{if(a){let c=l*2,h=t[l+6],d=e[c+14];return r(o,a,new Float32Array(i,l*4,6),h,d)}else{let c=Vr(l,t);return r(o,a,new Float32Array(i,l*4,6),c)}})}}};var s0=new Pe,Yr=new Float32Array(6),xu=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...uu,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),e0(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,s){let r=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let d=t,u=t+e;d<u;d++){this.writePrimitiveBounds(d,Yr,0);let[f,m,v,p,g,_]=Yr;f<r&&(r=f),p>l&&(l=p),m<o&&(o=m),g>c&&(c=g),v<a&&(a=v),_>h&&(h=_)}return n[s+0]=r,n[s+1]=o,n[s+2]=a,n[s+3]=l,n[s+4]=c,n[s+5]=h,n}computePrimitiveBounds(t,e,n){let s=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,Yr,0);let[a,l,c,h,d,u]=Yr,f=(a+h)/2,m=(l+d)/2,v=(c+u)/2,p=(h-a)/2,g=(d-l)/2,_=(u-c)/2,y=(r-s)*6;n[y+0]=f,n[y+1]=p+(Math.abs(f)+p)*zr,n[y+2]=m,n[y+3]=g+(Math.abs(m)+g)*zr,n[y+4]=v,n[y+5]=_+(Math.abs(v)+_)*zr}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,s=e.length;n<s;n++)e[n]+=t;else{let n=this._roots;for(let s=0;s<n.length;s++){let r=n[s],o=new Uint32Array(r),a=new Uint16Array(r),l=r.byteLength/32;for(let c=0;c<l;c++){let h=8*c,d=2*h;he(d,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){_u.setBVH(this,e),_u.traverse(t),_u.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let s=t[e],r=new Uint32Array(s),o=new Uint16Array(s),a=new Float32Array(s),l=s.byteLength/32;for(let c=l-1;c>=0;c--){let h=c*8,d=h*2;if(he(d,o)){let f=ye(h,r),m=be(d,o);this.writePrimitiveRangeBounds(f,m,Yr,0),a.set(Yr,h)}else{let f=ge(h),m=_e(h,r);for(let v=0;v<3;v++){let p=a[f+v],g=a[f+v+3],_=a[m+v],y=a[m+v+3];a[h+v]=p<_?p:_,a[h+v+3]=g>y?g:y}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{we(0,new Float32Array(n),s0),t.union(s0)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:s,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(s&&r){let d=s;s=(u,f,m,v,p)=>d(u,f,m,v,p)?!0:a(u,f,this,r,m,v,o)}else s||(r?s=(d,u,f,m)=>a(d,u,this,r,f,m,o):s=(d,u,f)=>f);let l=!1,c=0,h=this._roots;for(let d=0,u=h.length;d<u;d++){let f=h[d];if(l=n0(this,d,n,s,e,c),l)break;c+=f.byteLength/32}return l}bvhcast(t,e,n){let{intersectsRanges:s}=n;return i0(this,t,e,s)}};function r0(){return typeof SharedArrayBuffer<"u"}function Vf(i){return i.index?i.index.count:i.attributes.position.count}function ms(i){return Vf(i)/3}function mM(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function o0(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=mM(e,n);i.setIndex(new se(s,1));for(let r=0;r<e;r++)s[r]=r}}function gM(i,t,e){let n=Vf(i)/e,s=t||i.drawRange,r=s.start/e,o=(s.start+s.count)/e,a=Math.max(0,r),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function _M(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Hf(i,t,e){let n=gM(i,t,e),s=_M(i,e);if(!s.length)return[n];let r=[],o=n.offset,a=n.offset+n.count,l=Vf(i)/e,c=[];for(let u of s){let{offset:f,count:m}=u,v=f,p=isFinite(m)?m:l-f,g=f+p;v<a&&g>o&&(c.push({pos:Math.max(o,v),isStart:!0}),c.push({pos:Math.min(a,g),isStart:!1}))}c.sort((u,f)=>u.pos!==f.pos?u.pos-f.pos:u.type==="end"?-1:1);let h=0,d=null;for(let u of c){let f=u.pos;h!==0&&f!==d&&r.push({offset:d,count:f-d}),h+=u.isStart?1:-1,d=f}return r}function xM(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,s=i.reduce((c,h)=>c+h.count,0),r=n?4:2,o=t?new SharedArrayBuffer(s*r):new ArrayBuffer(s*r),a=n?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<i.length;c++){let{offset:h,count:d}=i[c];for(let u=0;u<d;u++)a[l+u]=h+u;l+=d}return a}var vu=class extends xu{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!r0())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...uu,...e},e[xa]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let s=Hf(e,t.range,n),r=xM(s,t.useSharedArrayBuffer);this._indirectBuffer=r}else o0(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Pe))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Hf(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var Hn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let a=e[r],l=t.dot(a);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}};Hn.prototype.setFromBox=(function(){let i=new I;return function(e,n){let s=n.min,r=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){i.x=s.x*l+r.x*(1-l),i.y=s.y*c+r.y*(1-c),i.z=s.z*h+r.z*(1-h);let d=e.dot(i);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}})();var vM=(function(){let i=new I,t=new I,e=new I;return function(s,r,o){let a=s.start,l=i,c=r.start,h=t;e.subVectors(a,c),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);let d=e.dot(h),u=h.dot(l),f=h.dot(h),m=e.dot(l),p=l.dot(l)*f-u*u,g,_;p!==0?g=(d*u-m*f)/p:g=0,_=(d+g*u)/f,o.x=g,o.y=_}})(),Ma=(function(){let i=new et,t=new I,e=new I;return function(s,r,o,a){vM(s,r,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){s.at(l,o),r.at(c,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=s.start:h=s.end;let d;c<0?d=r.start:d=r.end;let u=t,f=e;if(s.closestPointToPoint(d,!0,t),r.closestPointToPoint(h,!0,e),u.distanceToSquared(d)<=f.distanceToSquared(h)){o.copy(u),a.copy(d);return}else{o.copy(h),a.copy(f);return}}}})(),a0=(function(){let i=new I,t=new I,e=new Je,n=new wn;return function(r,o){let{radius:a,center:l}=r,{a:c,b:h,c:d}=o;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=h,n.end=d,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let v=o.getPlane(e);if(Math.abs(v.distanceToPoint(l))<=a){let g=v.projectPoint(l,t);if(o.containsPoint(g))return!0}return!1}})();var yM=["x","y","z"],Vi=1e-15,l0=Vi*Vi;function Jn(i){return Math.abs(i)<Vi}var hn=class extends cn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Hn),this.points=[this.a,this.b,this.c],this.plane=new Je,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new wn,this.needsUpdate=!0}intersectsSphere(t){return a0(t,this)}update(){let t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],l=o[0];this.getNormal(a),l.setFromPoints(a,s);let c=r[1],h=o[1];c.subVectors(t,e),h.setFromPoints(c,s);let d=r[2],u=o[2];d.subVectors(e,n),u.setFromPoints(d,s);let f=r[3],m=o[3];f.subVectors(n,t),m.setFromPoints(f,s);let v=c.length(),p=d.length(),g=f.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Vi?p<Vi||g<Vi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):p<Vi?g<Vi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):g<Vi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};hn.prototype.closestPointToSegment=(function(){let i=new I,t=new I,e=new wn;return function(s,r=null,o=null){let{start:a,end:l}=s,c=this.points,h,d=1/0;for(let u=0;u<3;u++){let f=(u+1)%3;e.start.copy(c[u]),e.end.copy(c[f]),Ma(e,s,i,t),h=i.distanceToSquared(t),h<d&&(d=h,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),h=a.distanceToSquared(i),h<d&&(d=h,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<d&&(d=h,r&&r.copy(i),o&&o.copy(l)),Math.sqrt(d)}})();hn.prototype.intersectsTriangle=(function(){let i=new hn,t=new Hn,e=new Hn,n=new I,s=new I,r=new I,o=new I,a=new wn,l=new wn,c=new I,h=new et,d=new et;function u(y,x,S,b){let E=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?E.copy(y.plane.normal):E.copy(x.plane.normal);let M=y.satBounds,T=y.satAxes;for(let P=1;P<4;P++){let N=M[P],D=T[P];if(t.setFromPoints(D,x.points),N.isSeparated(t)||(o.copy(E).cross(D),t.setFromPoints(o,y.points),e.setFromPoints(o,x.points),t.isSeparated(e)))return!1}let w=x.satBounds,C=x.satAxes;for(let P=1;P<4;P++){let N=w[P],D=C[P];if(t.setFromPoints(D,y.points),N.isSeparated(t)||(o.crossVectors(E,D),t.setFromPoints(o,y.points),e.setFromPoints(o,x.points),t.isSeparated(e)))return!1}return S&&(b||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function f(y,x,S,b,E,M,T,w,C,P,N){let D=T/(T-w);P.x=b+(E-b)*D,N.start.subVectors(x,y).multiplyScalar(D).add(y),D=T/(T-C),P.y=b+(M-b)*D,N.end.subVectors(S,y).multiplyScalar(D).add(y)}function m(y,x,S,b,E,M,T,w,C,P,N){if(E>0)f(y.c,y.a,y.b,b,x,S,C,T,w,P,N);else if(M>0)f(y.b,y.a,y.c,S,x,b,w,T,C,P,N);else if(w*C>0||T!=0)f(y.a,y.b,y.c,x,S,b,T,w,C,P,N);else if(w!=0)f(y.b,y.a,y.c,S,x,b,w,T,C,P,N);else if(C!=0)f(y.c,y.a,y.b,b,x,S,C,T,w,P,N);else return!0;return!1}function v(y,x,S,b){let E=x.degenerateSegment,M=y.plane.distanceToPoint(E.start),T=y.plane.distanceToPoint(E.end);return Jn(M)?Jn(T)?u(y,x,S,b):(S&&(S.start.copy(E.start),S.end.copy(E.start)),y.containsPoint(E.start)):Jn(T)?(S&&(S.start.copy(E.end),S.end.copy(E.end)),y.containsPoint(E.end)):y.plane.intersectLine(E,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),y.containsPoint(n)):!1}function p(y,x,S){let b=x.a;return Jn(y.plane.distanceToPoint(b))&&y.containsPoint(b)?(S&&(S.start.copy(b),S.end.copy(b)),!0):!1}function g(y,x,S){let b=y.degenerateSegment,E=x.a;return b.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<l0?(S&&(S.start.copy(E),S.end.copy(E)),!0):!1}function _(y,x,S,b){if(y.isDegenerateIntoSegment)if(x.isDegenerateIntoSegment){let E=y.degenerateSegment,M=x.degenerateSegment,T=s,w=r;E.delta(T),M.delta(w);let C=n.subVectors(M.start,E.start),P=T.x*w.y-T.y*w.x;if(Jn(P))return!1;let N=(C.x*w.y-C.y*w.x)/P,D=-(T.x*C.y-T.y*C.x)/P;if(N<0||N>1||D<0||D>1)return!1;let U=E.start.z+T.z*N,H=M.start.z+w.z*D;return Jn(U-H)?(S&&(S.start.copy(E.start).addScaledVector(T,N),S.end.copy(E.start).addScaledVector(T,N)),!0):!1}else return x.isDegenerateIntoPoint?g(y,x,S):v(x,y,S,b);else{if(y.isDegenerateIntoPoint)return x.isDegenerateIntoPoint?x.a.distanceToSquared(y.a)<l0?(S&&(S.start.copy(y.a),S.end.copy(y.a)),!0):!1:x.isDegenerateIntoSegment?g(x,y,S):p(x,y,S);if(x.isDegenerateIntoPoint)return p(y,x,S);if(x.isDegenerateIntoSegment)return v(y,x,S,b)}}return function(x,S=null,b=!1){this.needsUpdate&&this.update(),x.isExtendedTriangle?x.needsUpdate&&x.update():(i.copy(x),i.update(),x=i);let E=_(this,x,S,b);if(E!==void 0)return E;let M=this.plane,T=x.plane,w=T.distanceToPoint(this.a),C=T.distanceToPoint(this.b),P=T.distanceToPoint(this.c);Jn(w)&&(w=0),Jn(C)&&(C=0),Jn(P)&&(P=0);let N=w*C,D=w*P;if(N>0&&D>0)return!1;let U=M.distanceToPoint(x.a),H=M.distanceToPoint(x.b),X=M.distanceToPoint(x.c);Jn(U)&&(U=0),Jn(H)&&(H=0),Jn(X)&&(X=0);let rt=U*H,W=U*X;if(rt>0&&W>0)return!1;s.copy(M.normal),r.copy(T.normal);let tt=s.cross(r),Q=0,_t=Math.abs(tt.x),O=Math.abs(tt.y);O>_t&&(_t=O,Q=1),Math.abs(tt.z)>_t&&(Q=2);let K=yM[Q],lt=this.a[K],F=this.b[K],q=this.c[K],it=x.a[K],ft=x.b[K],pt=x.c[K];if(m(this,lt,F,q,N,D,w,C,P,h,a))return u(this,x,S,b);if(m(x,it,ft,pt,rt,W,U,H,X,d,l))return u(this,x,S,b);if(h.y<h.x){let xt=h.y;h.y=h.x,h.x=xt,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(d.y<d.x){let xt=d.y;d.y=d.x,d.x=xt,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<d.x||d.y<h.x?!1:(S&&(d.x>h.x?S.start.copy(l.start):S.start.copy(a.start),d.y<h.y?S.end.copy(l.end):S.end.copy(a.end)),!0)}})();hn.prototype.distanceToPoint=(function(){let i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();hn.prototype.distanceToTriangle=(function(){let i=new I,t=new I,e=["a","b","c"],n=new wn,s=new wn;return function(o,a=null,l=null){let c=a||l?n:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let d=0;d<3;d++){let u,f=e[d],m=o[f];this.closestPointToPoint(m,i),u=m.distanceToSquared(i),u<h&&(h=u,a&&a.copy(i),l&&l.copy(m));let v=this[f];o.closestPointToPoint(v,i),u=v.distanceToSquared(i),u<h&&(h=u,a&&a.copy(v),l&&l.copy(i))}for(let d=0;d<3;d++){let u=e[d],f=e[(d+1)%3];n.set(this[u],this[f]);for(let m=0;m<3;m++){let v=e[m],p=e[(m+1)%3];s.set(o[v],o[p]),Ma(n,s,i,t);let g=i.distanceToSquared(t);g<h&&(h=g,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(h)}})();var He=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Yt,this.invMatrix=new Yt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Hn),this.alignedSatBounds=new Array(3).fill().map(()=>new Hn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};He.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,s=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){let u=1*c|2*h|4*d,f=s[u];f.x=c?n.x:e.x,f.y=h?n.y:e.y,f.z=d?n.z:e.z,f.applyMatrix4(t)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let c=0;c<3;c++){let h=o[c],d=r[c],u=1<<c,f=s[u];h.subVectors(a,f),d.setFromPoints(h,s)}let l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();He.prototype.intersectsBox=(function(){let i=new Hn;return function(e){this.needsUpdate&&this.update();let n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let c=o[l],h=r[l];if(i.setFromBox(c,e),h.isSeparated(i))return!1}return!0}})();He.prototype.intersectsTriangle=(function(){let i=new hn,t=new Array(3),e=new Hn,n=new Hn,s=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let u=0;u<3;u++){let f=a[u],m=l[u];if(e.setFromPoints(m,t),f.isSeparated(e))return!1}let c=o.satBounds,h=o.satAxes,d=this.points;for(let u=0;u<3;u++){let f=c[u],m=h[u];if(e.setFromPoints(m,d),f.isSeparated(e))return!1}for(let u=0;u<3;u++){let f=l[u];for(let m=0;m<4;m++){let v=h[m];if(s.crossVectors(f,v),e.setFromPoints(s,t),n.setFromPoints(s,d),e.isSeparated(n))return!1}}return!0}})();He.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();He.prototype.distanceToPoint=(function(){let i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();He.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new wn),e=new Array(12).fill().map(()=>new wn),n=new I,s=new I;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),l&&l.copy(n),c&&c.copy(s)),0;let h=a*a,d=o.min,u=o.max,f=this.points,m=1/0;for(let p=0;p<8;p++){let g=f[p];s.copy(g).clamp(d,u);let _=g.distanceToSquared(s);if(_<m&&(m=_,l&&l.copy(g),c&&c.copy(s),_<h))return Math.sqrt(_)}let v=0;for(let p=0;p<3;p++)for(let g=0;g<=1;g++)for(let _=0;_<=1;_++){let y=(p+1)%3,x=(p+2)%3,S=g<<y|_<<x,b=1<<p|g<<y|_<<x,E=f[S],M=f[b];t[v].set(E,M);let w=i[p],C=i[y],P=i[x],N=e[v],D=N.start,U=N.end;D[w]=d[w],D[C]=g?d[C]:u[C],D[P]=_?d[P]:u[C],U[w]=u[w],U[C]=g?d[C]:u[C],U[P]=_?d[P]:u[C],v++}for(let p=0;p<=1;p++)for(let g=0;g<=1;g++)for(let _=0;_<=1;_++){s.x=p?u.x:d.x,s.y=g?u.y:d.y,s.z=_?u.z:d.z,this.closestPointToPoint(s,n);let y=s.distanceToSquared(n);if(y<m&&(m=y,l&&l.copy(n),c&&c.copy(s),y<h))return Math.sqrt(y)}for(let p=0;p<12;p++){let g=t[p];for(let _=0;_<12;_++){let y=e[_];Ma(g,y,n,s);let x=n.distanceToSquared(s);if(x<m&&(m=x,l&&l.copy(n),c&&c.copy(s),x<h))return Math.sqrt(x)}}return Math.sqrt(m)}})();var Gf=class extends fs{constructor(){super(()=>new hn)}},Rn=new Gf;var ba=new I,Wf=new I;function c0(i,t,e={},n=0,s=1/0){let r=n*n,o=s*s,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>(ba.copy(t).clamp(h.min,h.max),ba.distanceToSquared(t)),intersectsBounds:(h,d,u)=>u<a&&u<o,intersectsTriangle:(h,d)=>{h.closestPointToPoint(t,ba);let u=t.distanceToSquared(ba);return u<a&&(Wf.copy(ba),a=u,l=d),u<r}}),a===1/0)return null;let c=Math.sqrt(a);return e.point?e.point.copy(Wf):e.point=Wf.clone(),e.distance=c,e.faceIndex=l,e}var yu=parseInt("186")>=169,SM=parseInt("186")<=161,Ws=new I,Xs=new I,qs=new I,Su=new et,Mu=new et,bu=new et,u0=new I,h0=new I,f0=new I,Ta=new I;function MM(i,t,e,n,s,r,o,a){let l;if(r===Qe?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==Ue,s),l===null)return null;let c=i.origin.distanceTo(s);return c<o||c>a?null:{distance:c,point:s.clone()}}function d0(i,t,e,n,s,r,o,a,l,c,h){Ws.fromBufferAttribute(t,r),Xs.fromBufferAttribute(t,o),qs.fromBufferAttribute(t,a);let d=MM(i,Ws,Xs,qs,Ta,l,c,h);if(d){if(n){Su.fromBufferAttribute(n,r),Mu.fromBufferAttribute(n,o),bu.fromBufferAttribute(n,a),d.uv=new et;let f=cn.getInterpolation(Ta,Ws,Xs,qs,Su,Mu,bu,d.uv);yu||(d.uv=f)}if(s){Su.fromBufferAttribute(s,r),Mu.fromBufferAttribute(s,o),bu.fromBufferAttribute(s,a),d.uv1=new et;let f=cn.getInterpolation(Ta,Ws,Xs,qs,Su,Mu,bu,d.uv1);yu||(d.uv1=f),SM&&(d.uv2=d.uv1)}if(e){u0.fromBufferAttribute(e,r),h0.fromBufferAttribute(e,o),f0.fromBufferAttribute(e,a),d.normal=new I;let f=cn.getInterpolation(Ta,Ws,Xs,qs,u0,h0,f0,d.normal);d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1),yu||(d.normal=f)}let u={a:r,b:o,c:a,normal:new I,materialIndex:0};if(cn.getNormal(Ws,Xs,qs,u.normal),d.face=u,d.faceIndex=r,yu){let f=new I;cn.getBarycoord(Ta,Ws,Xs,qs,f),d.barycoord=f}}return d}function p0(i){return i&&i.isMaterial?i.side:i}function Zr(i,t,e,n,s,r,o){let a=n*3,l=a+0,c=a+1,h=a+2,{index:d,groups:u}=i;i.index&&(l=d.getX(l),c=d.getX(c),h=d.getX(h));let{position:f,normal:m,uv:v,uv1:p}=i.attributes;if(Array.isArray(t)){let g=n*3;for(let _=0,y=u.length;_<y;_++){let{start:x,count:S,materialIndex:b}=u[_];if(g>=x&&g<x+S){let E=p0(t[b]),M=d0(e,f,m,v,p,l,c,h,E,r,o);if(M)if(M.faceIndex=n,M.face.materialIndex=b,s)s.push(M);else return M}}}else{let g=p0(t),_=d0(e,f,m,v,p,l,c,h,g,r,o);if(_)if(_.faceIndex=n,_.face.materialIndex=0,s)s.push(_);else return _}return null}function Ae(i,t,e,n){let s=i.a,r=i.b,o=i.c,a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function m0(i,t,e,n,s,r,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let h=n,d=n+s;h<d;h++)Zr(l,t,e,h,r,o,a)}function g0(i,t,e,n,s,r,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,h=null;for(let d=n,u=n+s;d<u;d++){let f;f=Zr(a,t,e,d,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function _0(i,t,e,n,s,r,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=i,d=t+i;h<d;h++){let u;if(u=h,Ae(o,u*3,l,c),o.needsUpdate=!0,n(o,u,s,r))return!0}return!1}function x0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,l,c=0,h=i._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,f,m=!1){let v=u*2;if(he(v,a)){let p=ye(u,o),g=be(v,a),_=1/0,y=1/0,x=1/0,S=-1/0,b=-1/0,E=-1/0;for(let M=3*p,T=3*(p+g);M<T;M++){let w=n[M],C=s.getX(w),P=s.getY(w),N=s.getZ(w);C<_&&(_=C),C>S&&(S=C),P<y&&(y=P),P>b&&(b=P),N<x&&(x=N),N>E&&(E=N)}return l[u+0]!==_||l[u+1]!==y||l[u+2]!==x||l[u+3]!==S||l[u+4]!==b||l[u+5]!==E?(l[u+0]=_,l[u+1]=y,l[u+2]=x,l[u+3]=S,l[u+4]=b,l[u+5]=E,!0):!1}else{let p=ge(u),g=_e(u,o),_=m,y=!1,x=!1;if(t){if(!_){let w=p/8+f/32,C=g/8+f/32;y=t.has(w),x=t.has(C),_=!y&&!x}}else y=!0,x=!0;let S=_||y,b=_||x,E=!1;S&&(E=d(p,f,_));let M=!1;b&&(M=d(g,f,_));let T=E||M;if(T)for(let w=0;w<3;w++){let C=p+w,P=g+w,N=l[C],D=l[C+3],U=l[P],H=l[P+3];l[u+w]=N<U?N:U,l[u+w+3]=D>H?D:H}return T}}}function $n(i,t,e,n,s){let r,o,a,l,c,h,d=1/e.direction.x,u=1/e.direction.y,f=1/e.direction.z,m=e.origin.x,v=e.origin.y,p=e.origin.z,g=t[i],_=t[i+3],y=t[i+1],x=t[i+3+1],S=t[i+2],b=t[i+3+2];return d>=0?(r=(g-m)*d,o=(_-m)*d):(r=(_-m)*d,o=(g-m)*d),u>=0?(a=(y-v)*u,l=(x-v)*u):(a=(x-v)*u,l=(y-v)*u),r>l||a>o||((a>r||isNaN(r))&&(r=a),(l<o||isNaN(o))&&(o=l),f>=0?(c=(S-p)*f,h=(b-p)*f):(c=(b-p)*f,h=(S-p)*f),r>h||c>o)?!1:((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),r<=s&&o>=n)}function v0(i,t,e,n,s,r,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let h=n,d=n+s;h<d;h++){let u=c?c[h]:h;Zr(l,t,e,u,r,o,a)}}function y0(i,t,e,n,s,r,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,h=null;for(let d=n,u=n+s;d<u;d++){let f;f=Zr(a,t,e,l?l[d]:d,null,r,o),f&&f.distance<c&&(h=f,c=f.distance)}return h}function S0(i,t,e,n,s,r,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=i,d=t+i;h<d;h++){let u;if(u=e.resolveTriangleIndex(h),Ae(o,u*3,l,c),o.needsUpdate=!0,n(o,u,s,r))return!0}return!1}function M0(i,t,e,n,s,r,o){pe.setBuffer(i._roots[t]),Xf(0,i,e,n,s,r,o),pe.clearBuffer()}function Xf(i,t,e,n,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:c}=pe,h=i*2;if(he(h,l)){let u=ye(i,c),f=be(h,l);m0(t,e,n,u,f,s,r,o)}else{let u=ge(i);$n(u,a,n,r,o)&&Xf(u,t,e,n,s,r,o);let f=_e(i,c);$n(f,a,n,r,o)&&Xf(f,t,e,n,s,r,o)}}var bM=["x","y","z"];function b0(i,t,e,n,s,r){pe.setBuffer(i._roots[t]);let o=qf(0,i,e,n,s,r);return pe.clearBuffer(),o}function qf(i,t,e,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=pe,c=i*2;if(he(c,a)){let d=ye(i,l),u=be(c,a);return g0(t,e,n,d,u,s,r)}else{let d=Vr(i,l),u=bM[d],m=n.direction[u]>=0,v,p;m?(v=ge(i),p=_e(i,l)):(v=_e(i,l),p=ge(i));let _=$n(v,o,n,s,r)?qf(v,t,e,n,s,r):null;if(_){let S=_.point[u];if(m?S<=o[p+d]:S>=o[p+d+3])return _}let x=$n(p,o,n,s,r)?qf(p,t,e,n,s,r):null;return _&&x?_.distance<=x.distance?_:x:_||x||null}}var Tu=new Pe,Jr=new hn,$r=new hn,Ea=new Yt,T0=new He,Eu=new He;function E0(i,t,e,n){pe.setBuffer(i._roots[t]);let s=Yf(0,i,e,n);return pe.clearBuffer(),s}function Yf(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=pe,l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),T0.set(e.boundingBox.min,e.boundingBox.max,n),s=T0),he(l,o)){let h=t.geometry,d=h.index,u=h.attributes.position,f=e.index,m=e.attributes.position,v=ye(i,a),p=be(l,o);if(Ea.copy(n).invert(),e.boundsTree)return we(i,r,Eu),Eu.matrix.copy(Ea),Eu.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Eu.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=v*3,x=(p+v)*3;y<x;y+=3)if(Ae($r,y,d,u),$r.needsUpdate=!0,_.intersectsTriangle($r))return!0;return!1}});{let g=ms(e);for(let _=v*3,y=(p+v)*3;_<y;_+=3){Ae(Jr,_,d,u),Jr.a.applyMatrix4(Ea),Jr.b.applyMatrix4(Ea),Jr.c.applyMatrix4(Ea),Jr.needsUpdate=!0;for(let x=0,S=g*3;x<S;x+=3)if(Ae($r,x,f,m),$r.needsUpdate=!0,Jr.intersectsTriangle($r))return!0}}}else{let h=ge(i),d=_e(i,a);return we(h,r,Tu),!!(s.intersectsBox(Tu)&&Yf(h,t,e,n,s)||(we(d,r,Tu),s.intersectsBox(Tu)&&Yf(d,t,e,n,s)))}}var wu=new Yt,Zf=new He,wa=new He,TM=new I,EM=new I,wM=new I,AM=new I;function w0(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Zf.set(t.boundingBox.min,t.boundingBox.max,e),Zf.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,u=Rn.getPrimitive(),f=Rn.getPrimitive(),m=TM,v=EM,p=null,g=null;s&&(p=wM,g=AM);let _=1/0,y=null,x=null;return wu.copy(e).invert(),wa.matrix.copy(wu),i.shapecast({boundsTraverseOrder:S=>Zf.distanceToBox(S),intersectsBounds:(S,b,E)=>E<_&&E<o?(b&&(wa.min.copy(S.min),wa.max.copy(S.max),wa.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:M=>wa.distanceToBox(M),intersectsBounds:(M,T,w)=>w<_&&w<o,intersectsRange:(M,T)=>{for(let w=M,C=M+T;w<C;w++){Ae(f,3*w,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let P=S,N=S+b;P<N;P++){Ae(u,3*P,c,l),u.needsUpdate=!0;let D=u.distanceToTriangle(f,m,p);if(D<_&&(v.copy(m),g&&g.copy(p),_=D,y=P,x=w),D<r)return!0}}}});{let E=ms(t);for(let M=0,T=E;M<T;M++){Ae(f,3*M,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let w=S,C=S+b;w<C;w++){Ae(u,3*w,c,l),u.needsUpdate=!0;let P=u.distanceToTriangle(f,m,p);if(P<_&&(v.copy(m),g&&g.copy(p),_=P,y=w,x=M),P<r)return!0}}}}}),Rn.releasePrimitive(u),Rn.releasePrimitive(f),_===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=_,n.faceIndex=y,s&&(s.point?s.point.copy(g):s.point=g.clone(),s.point.applyMatrix4(wu),v.applyMatrix4(wu),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function A0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,l,c=0,h=i._roots;for(let u=0,f=h.length;u<f;u++)r=h[u],o=new Uint32Array(r),a=new Uint16Array(r),l=new Float32Array(r),d(0,c),c+=r.byteLength;function d(u,f,m=!1){let v=u*2;if(he(v,a)){let p=ye(u,o),g=be(v,a),_=1/0,y=1/0,x=1/0,S=-1/0,b=-1/0,E=-1/0;for(let M=p,T=p+g;M<T;M++){let w=3*i.resolveTriangleIndex(M);for(let C=0;C<3;C++){let P=w+C;P=n?n[P]:P;let N=s.getX(P),D=s.getY(P),U=s.getZ(P);N<_&&(_=N),N>S&&(S=N),D<y&&(y=D),D>b&&(b=D),U<x&&(x=U),U>E&&(E=U)}}return l[u+0]!==_||l[u+1]!==y||l[u+2]!==x||l[u+3]!==S||l[u+4]!==b||l[u+5]!==E?(l[u+0]=_,l[u+1]=y,l[u+2]=x,l[u+3]=S,l[u+4]=b,l[u+5]=E,!0):!1}else{let p=ge(u),g=_e(u,o),_=m,y=!1,x=!1;if(t){if(!_){let w=p/8+f/32,C=g/8+f/32;y=t.has(w),x=t.has(C),_=!y&&!x}}else y=!0,x=!0;let S=_||y,b=_||x,E=!1;S&&(E=d(p,f,_));let M=!1;b&&(M=d(g,f,_));let T=E||M;if(T)for(let w=0;w<3;w++){let C=p+w,P=g+w,N=l[C],D=l[C+3],U=l[P],H=l[P+3];l[u+w]=N<U?N:U,l[u+w+3]=D>H?D:H}return T}}}function R0(i,t,e,n,s,r,o){pe.setBuffer(i._roots[t]),Jf(0,i,e,n,s,r,o),pe.clearBuffer()}function Jf(i,t,e,n,s,r,o){let{float32Array:a,uint16Array:l,uint32Array:c}=pe,h=i*2;if(he(h,l)){let u=ye(i,c),f=be(h,l);v0(t,e,n,u,f,s,r,o)}else{let u=ge(i);$n(u,a,n,r,o)&&Jf(u,t,e,n,s,r,o);let f=_e(i,c);$n(f,a,n,r,o)&&Jf(f,t,e,n,s,r,o)}}var RM=["x","y","z"];function C0(i,t,e,n,s,r){pe.setBuffer(i._roots[t]);let o=$f(0,i,e,n,s,r);return pe.clearBuffer(),o}function $f(i,t,e,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:l}=pe,c=i*2;if(he(c,a)){let d=ye(i,l),u=be(c,a);return y0(t,e,n,d,u,s,r)}else{let d=Vr(i,l),u=RM[d],m=n.direction[u]>=0,v,p;m?(v=ge(i),p=_e(i,l)):(v=_e(i,l),p=ge(i));let _=$n(v,o,n,s,r)?$f(v,t,e,n,s,r):null;if(_){let S=_.point[u];if(m?S<=o[p+d]:S>=o[p+d+3])return _}let x=$n(p,o,n,s,r)?$f(p,t,e,n,s,r):null;return _&&x?_.distance<=x.distance?_:x:_||x||null}}var Au=new Pe,Kr=new hn,jr=new hn,Aa=new Yt,P0=new He,Ru=new He;function I0(i,t,e,n){pe.setBuffer(i._roots[t]);let s=Kf(0,i,e,n);return pe.clearBuffer(),s}function Kf(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=pe,l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),P0.set(e.boundingBox.min,e.boundingBox.max,n),s=P0),he(l,o)){let h=t.geometry,d=h.index,u=h.attributes.position,f=e.index,m=e.attributes.position,v=ye(i,a),p=be(l,o);if(Aa.copy(n).invert(),e.boundsTree)return we(i,r,Ru),Ru.matrix.copy(Aa),Ru.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Ru.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=v,x=p+v;y<x;y++)if(Ae(jr,3*t.resolveTriangleIndex(y),d,u),jr.needsUpdate=!0,_.intersectsTriangle(jr))return!0;return!1}});{let g=ms(e);for(let _=v,y=p+v;_<y;_++){let x=t.resolveTriangleIndex(_);Ae(Kr,3*x,d,u),Kr.a.applyMatrix4(Aa),Kr.b.applyMatrix4(Aa),Kr.c.applyMatrix4(Aa),Kr.needsUpdate=!0;for(let S=0,b=g*3;S<b;S+=3)if(Ae(jr,S,f,m),jr.needsUpdate=!0,Kr.intersectsTriangle(jr))return!0}}}else{let h=ge(i),d=_e(i,a);return we(h,r,Au),!!(s.intersectsBox(Au)&&Kf(h,t,e,n,s)||(we(d,r,Au),s.intersectsBox(Au)&&Kf(d,t,e,n,s)))}}var Cu=new Yt,jf=new He,Ra=new He,CM=new I,PM=new I,IM=new I,DM=new I;function D0(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),jf.set(t.boundingBox.min,t.boundingBox.max,e),jf.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,d=t.index,u=Rn.getPrimitive(),f=Rn.getPrimitive(),m=CM,v=PM,p=null,g=null;s&&(p=IM,g=DM);let _=1/0,y=null,x=null;return Cu.copy(e).invert(),Ra.matrix.copy(Cu),i.shapecast({boundsTraverseOrder:S=>jf.distanceToBox(S),intersectsBounds:(S,b,E)=>E<_&&E<o?(b&&(Ra.min.copy(S.min),Ra.max.copy(S.max),Ra.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(t.boundsTree){let E=t.boundsTree;return E.shapecast({boundsTraverseOrder:M=>Ra.distanceToBox(M),intersectsBounds:(M,T,w)=>w<_&&w<o,intersectsRange:(M,T)=>{for(let w=M,C=M+T;w<C;w++){let P=E.resolveTriangleIndex(w);Ae(f,3*P,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let N=S,D=S+b;N<D;N++){let U=i.resolveTriangleIndex(N);Ae(u,3*U,c,l),u.needsUpdate=!0;let H=u.distanceToTriangle(f,m,p);if(H<_&&(v.copy(m),g&&g.copy(p),_=H,y=N,x=w),H<r)return!0}}}})}else{let E=ms(t);for(let M=0,T=E;M<T;M++){Ae(f,3*M,d,h),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let w=S,C=S+b;w<C;w++){let P=i.resolveTriangleIndex(w);Ae(u,3*P,c,l),u.needsUpdate=!0;let N=u.distanceToTriangle(f,m,p);if(N<_&&(v.copy(m),g&&g.copy(p),_=N,y=w,x=M),N<r)return!0}}}}}),Rn.releasePrimitive(u),Rn.releasePrimitive(f),_===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=_,n.faceIndex=y,s&&(s.point?s.point.copy(g):s.point=g.clone(),s.point.applyMatrix4(Cu),v.applyMatrix4(Cu),s.distance=v.sub(s.point).length(),s.faceIndex=x),n)}function Qf(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var Pu=new He,Iu=new On,L0=new I,N0=new Yt,U0=new I,td=["getX","getY","getZ"],Du=class i extends vu{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=s.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=s,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));let a=new i(e,{...n,[xa]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let h=new se(t.index,1,!1);e.setIndex(h)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){let d=c[h],u=new Uint32Array(d),f=new Uint16Array(d);for(let m=0,v=d.byteLength/32;m<v;m++){let p=8*m,g=2*p;he(g,f)||(u[p+6]=u[p+6]/8-m)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,c=(r?r[t]:t)*3,h=c+0,d=c+1,u=c+2;a&&(h=a[h],d=a[d],u=a[u]);for(let f=0;f<3;f++){let m=o[td[f]](h),v=o[td[f]](d),p=o[td[f]](u),g=m;v<g&&(g=v),p<g&&(g=p);let _=m;v>_&&(_=v),p>_&&(_=p),e[n+f]=g,e[n+f+3]=_}return e}computePrimitiveBounds(t,e,n){let s=this.geometry,r=this._indirectBuffer,o=s.attributes.position,a=s.index?s.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,h=o.offset||0,d=3;o.isInterleavedBufferAttribute&&(d=o.data.stride);let u=["getX","getY","getZ"],f=n.offset;for(let m=t,v=t+e;m<v;m++){let g=(r?r[m]:m)*3,_=(m-f)*6,y=g+0,x=g+1,S=g+2;a&&(y=a[y],x=a[x],S=a[S]),l||(y=y*d+h,x=x*d+h,S=S*d+h);for(let b=0;b<3;b++){let E,M,T;l?(E=o[u[b]](y),M=o[u[b]](x),T=o[u[b]](S)):(E=c[y+b],M=c[x+b],T=c[S+b]);let w=E;M<w&&(w=M),T<w&&(w=T);let C=E;M>C&&(C=M),T>C&&(C=T);let P=(C-w)/2,N=b*2;n[_+N+0]=w+P,n[_+N+1]=P+(Math.abs(w)+P)*zr}}return n}raycastObject3D(t,e,n=[]){let{material:s}=t;if(s===void 0)return;N0.copy(t.matrixWorld).invert(),Iu.copy(e.ray).applyMatrix4(N0),U0.setFromMatrixScale(t.matrixWorld),L0.copy(Iu.direction).multiply(U0);let r=L0.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let l=this.raycastFirst(Iu,s,o,a);l=Qf(l,t,e),l&&n.push(l)}else{let l=this.raycast(Iu,s,o,a);for(let c=0,h=l.length;c<h;c++){let d=Qf(l[c],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?A0:x0)(this,t)}raycast(t,e=ai,n=0,s=1/0){let r=this._roots,o=[],a=this.indirect?R0:M0;for(let l=0,c=r.length;l<c;l++)a(this,l,e,t,o,n,s);return o}raycastFirst(t,e=ai,n=0,s=1/0){let r=this._roots,o=null,a=this.indirect?C0:b0;for(let l=0,c=r.length;l<c;l++){let h=a(this,l,e,t,n,s);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1,s=this._roots,r=this.indirect?I0:E0;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){let e=Rn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?S0:_0});return Rn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n,o=Rn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?m=>{let v=this.resolveTriangleIndex(m);Ae(o,v*3,a,l)}:m=>{Ae(o,m*3,a,l)},h=Rn.getPrimitive(),d=t.geometry.index,u=t.geometry.attributes.position,f=t.indirect?m=>{let v=t.resolveTriangleIndex(m);Ae(h,v*3,d,u)}:m=>{Ae(h,m*3,d,u)};if(r){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let m=(v,p,g,_,y,x,S,b)=>{for(let E=g,M=g+_;E<M;E++){f(E),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let T=v,w=v+p;T<w;T++)if(c(T),o.needsUpdate=!0,r(o,h,T,E,y,x,S,b))return!0}return!1};if(s){let v=s;s=function(p,g,_,y,x,S,b,E){return v(p,g,_,y,x,S,b,E)?!0:m(p,g,_,y,x,S,b,E)}}else s=m}return super.bvhcast(t,e,{intersectsRanges:s})}intersectsBox(t,e){return Pu.set(t.min,t.max,e),Pu.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Pu.intersectsBox(n),intersectsTriangle:n=>Pu.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?D0:w0)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return c0(this,t,e,n,s)}};var Gn=.2,Ca=.25,Pa=5,ln=40,Nn=74,nd=12,z0=8,F0=nd*z0,ed=[[.25,.25],[.75,.75],[.75,.25],[.25,.75]],LM=["x","y","z"],O0=.15,B0=.2,NM=.08,Lu=.5,Qr=[[20,"#26304a"],[60,"#3c6e9e"],[150,"#4fa3a5"],[300,"#a9cf6e"],[1e3,"#f2d14a"],[5e3,"#f39a2e"],[3e4,"#fff1c7"]],gs=Qr.map(([i,t])=>[Math.log10(i),parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5,7),16)]);function UM(i){let t=Math.log10(Math.max(i,1));if(t<=gs[0][0])return gs[0].slice(1);for(let e=1;e<gs.length;e++)if(t<=gs[e][0]){let n=gs[e-1],s=gs[e],r=(t-n[0])/(s[0]-n[0]);return[n[1]+(s[1]-n[1])*r,n[2]+(s[2]-n[2])*r,n[3]+(s[3]-n[3])*r]}return gs[gs.length-1].slice(1)}function FM(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[l,c]=e[r];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(n=!n)}return n}var Nu=i=>i.zone||i.id;function OM(i){let t=0;for(let[a]of i){let l=a.geometry;t+=l.index?l.index.count:l.attributes.position.count}let e=new Float32Array(t*3),n=new Uint8Array(t),s=new I,r=0;for(let[a,l]of i){let c=a.geometry,h=c.attributes.position,d=c.index,u=d?d.count:h.count;for(let f=0;f<u;f++)s.fromBufferAttribute(h,d?d.getX(f):f).applyMatrix4(a.matrixWorld),e[r*3]=s.x,e[r*3+1]=s.y,e[r*3+2]=s.z,n[r++]=l}let o=new ne;return o.setAttribute("position",new se(e,3)),{bvh:new Du(o),grp:n}}function k0(i,t){var _t;i.root.updateMatrixWorld(!0),t.root.updateMatrixWorld(!0);let e=O=>O.userData.grp==="viz"?2:O.userData.grp==="tree"?3:1,n=OM([...i.occ.filter(O=>O.userData.tau==null).map(O=>[O,0]),...t.occ.filter(O=>O.userData.tau==null).map(O=>[O,e(O)])]),s=[!0,!0,!0,!0],r=[];for(let O of[...i.occ,...t.occ]){if(O.userData.tau==null)continue;O.geometry.computeBoundingBox();let nt=O.geometry.boundingBox.clone().applyMatrix4(O.matrixWorld);O.userData.grp==="tree"?r.push({t:1,m:O,g:3,c:nt.getCenter(new I),r:nt.getSize(new I).multiplyScalar(.5)}):r.push({t:0,m:O,g:0,lo:nt.min,hi:nt.max})}for(let O of i.aps)O.kind!=="open"&&r.push({t:2,g:0,tau:O.tau,p0:O.p0,u:O.u,v:O.v,n:O.n,w:O.w,h:O.h});let o=new On;function a(O,nt,K){o.origin.copy(O),o.direction.copy(nt);let lt=0;for(let F=0;F<6;F++){let q=n.bvh.raycastFirst(o,Ue,lt,K);if(!q)return null;let it=n.grp[q.face.a];if(s[it])return{t:q.distance,g:it,y:q.point.y};lt=q.distance+.001}return null}function l(O,nt,K){let lt=1;for(let F of r){if(!s[F.g])continue;let q=-1;if(F.t===2){let it=F.n.x*nt.x+F.n.y*nt.y+F.n.z*nt.z;if(Math.abs(it)<1e-6)continue;let ft=F.p0.x-O.x,pt=F.p0.y-O.y,xt=F.p0.z-O.z;if(q=(F.n.x*ft+F.n.y*pt+F.n.z*xt)/it,q<=1e-4||q>=K)continue;let Ht=O.x+nt.x*q-F.p0.x,z=O.y+nt.y*q-F.p0.y,Y=O.z+nt.z*q-F.p0.z,at=Ht*F.u.x+z*F.u.y+Y*F.u.z,ut=Ht*F.v.x+z*F.v.y+Y*F.v.z;if(at<0||at>F.w||ut<0||ut>F.h)continue;lt*=F.tau}else if(F.t===0){let it=0,ft=K;for(let pt of LM){let xt=1/nt[pt],Ht=(F.lo[pt]-O[pt])*xt,z=(F.hi[pt]-O[pt])*xt;if(Ht>z){let Y=Ht;Ht=z,z=Y}if(it=Math.max(it,Ht),ft=Math.min(ft,z),it>ft)break}if(it>ft)continue;lt*=F.m.userData.tau}else{let it=(O.x-F.c.x)/F.r.x,ft=(O.y-F.c.y)/F.r.y,pt=(O.z-F.c.z)/F.r.z,xt=nt.x/F.r.x,Ht=nt.y/F.r.y,z=nt.z/F.r.z,Y=xt*xt+Ht*Ht+z*z,at=it*xt+ft*Ht+pt*z,ut=it*it+ft*ft+pt*pt-1,mt=at*at-Y*ut;if(mt<=0||(q=(-at-Math.sqrt(mt))/Y,(-at+Math.sqrt(mt))/Y<=1e-4||q>=K))continue;lt*=F.m.userData.tau}if(lt<.01)return 0}return lt}let c=[];for(let O of[1,0,2])for(let nt=0;nt<Nn;nt++)for(let K=0;K<ln;K++){let lt=Ca+(K+.5)*Gn,F=Pa+(nt+.5)*Gn,q=zi.findIndex(it=>it.lv===O&&!it.void&&FM(lt,F,it.pts));q>=0&&c.push({lv:O,i:K,j:nt,x:lt,z:F,r:q,o:new I(lt,Dn[O]+.02,F),sky:0,skyB:0,sun:0,sunA:0})}let h=[0,1,2].map(()=>new Int32Array(ln*Nn).fill(-1));c.forEach((O,nt)=>{h[O.lv][O.j*ln+O.i]=nt});let d={};for(let O of zi){if(O.out||O.void)continue;let nt=d[_t=Nu(O)]||(d[_t]={A:0,sky:0,sun:0,Er:0}),K=0,lt=0;for(let F=0,q=O.pts.length-1;F<O.pts.length;q=F++)K+=(O.pts[q][0]+O.pts[F][0])*(O.pts[q][1]-O.pts[F][1])/2,lt+=Math.hypot(O.pts[F][0]-O.pts[q][0],O.pts[F][1]-O.pts[q][1]);nt.A+=2*Math.abs(K)+lt*(O.h||2.9)}let u=O=>{let nt=zi.find(K=>K.id===O.room);return nt?Nu(nt):O.room},f=i.aps.filter(O=>O.kind!=="open").map(O=>({a:O,z:u(O),vsf:0})),m=new I,v=1,p=()=>(v=v*16807%2147483647)/2147483647;function g(O,nt,K,lt,F){let q=Math.floor(O/K),it=O%K,ft=(it+p())/K,pt=(q+p())/nt,xt=Math.sqrt(ft),Ht=2*Math.PI*pt+lt,z=xt*Math.cos(Ht),Y=Math.sqrt(Math.max(0,1-ft)),at=xt*Math.sin(Ht);if(!F||F.y>.99)return m.set(z,Y,at);let ut=new I(0,1,0).cross(F).normalize(),mt=F.clone().cross(ut);return m.set(0,0,0).addScaledVector(ut,z).addScaledVector(F,Y).addScaledVector(mt,at)}function _(O,nt){let K=a(O,nt,300),lt=l(O,nt,K?K.t:1e9);return lt<.01?0:K?K.g===0?lt*NM:lt*(K.y<0?B0:O0):lt*(nt.y>0?3/7*(1+2*nt.y):B0)}function y(O){v=1+O.i*7919+O.j*104729+O.lv*1299709;let nt=p()*2*Math.PI/nd,K=0;for(let lt=0;lt<F0;lt++){g(lt,nd,z0,nt);let F=a(O.o,m,300),q=l(O.o,m,F?F.t:1e9);q<.01||(K+=q*(F?F.g===0?0:O0:3/7*(1+2*m.y)))}return K/F0}function x(O){let nt=O.a,K=new I,lt=0,F=0;for(let[q,it]of ed){K.copy(nt.p0).addScaledVector(nt.u,nt.w*q).addScaledVector(nt.v,nt.h*it).addScaledVector(nt.n,.03),v=7+Math.round(K.x*100)*31+Math.round(K.y*100)*17+Math.round(K.z*100);for(let ft=0;ft<48;ft++){let pt=g(ft,8,6,0,nt.n).clone();lt+=_(K,pt),F++}}return lt/F}let S=new Oe,b=[],E=[];for(let O=0;O<3;O++){let nt=new Uint8Array(ln*Nn*4),K=new Pn(nt,ln,Nn,an);K.colorSpace=We,K.magFilter=K.minFilter=Be,K.needsUpdate=!0;let lt=new zn(ln*Gn,Nn*Gn);lt.rotateX(-Math.PI/2),lt.translate(Ca+ln*Gn/2,Dn[O]+.012,Pa+Nn*Gn/2);let F=new de(lt,new un({map:K,transparent:!0,opacity:.94,depthWrite:!1,toneMapped:!1,clippingPlanes:[as,ls],polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));F.renderOrder=2,S.add(F),b.push(nt),E.push(K)}S.visible=!1;let M=0,T=!1,w=null,C=new Float32Array(c.length);function P(O){s[2]=O.viz,s[3]=O.arv;for(let nt of f)nt.vsf=x(nt);M=0}function N(O){if(M>=c.length)return!1;let nt=performance.now();for(;M<c.length&&performance.now()-nt<O;){let K=c[M++];K.sky=y(K),T||(K.skyB=K.sky)}return M>=c.length&&(D(),T=!0),(!T||M>=c.length)&&H(),M<c.length}function D(){let O=[[0,0,4],[1,0,2],[-1,0,2],[0,1,2],[0,-1,2],[1,1,1],[-1,1,1],[1,-1,1],[-1,-1,1]];for(let nt of c){let K=0,lt=0;for(let[F,q,it]of O){let ft=nt.i+F,pt=nt.j+q;if(ft<0||pt<0||ft>=ln||pt>=Nn)continue;let xt=h[nt.lv][pt*ln+ft];xt<0||c[xt].r!==nt.r||(K+=c[xt].sky*it,lt+=it)}nt.skyN=K/lt}for(let nt of c)nt.skyB=nt.skyN}function U(O,nt){w=O;let K=O.U>.02,lt=new I(...Gs(O)).normalize(),F=new I,q=nt?ed.length:1;for(let it of c)if(it.sun=it.sunA=0,!!K)for(let ft=0;ft<q;ft++){let[pt,xt]=nt?ed[ft]:[.5,.5];if(F.set(Ca+(it.i+pt)*Gn,it.o.y,Pa+(it.j+xt)*Gn),a(F,lt,300))continue;let Ht=l(F,lt,1e9);Ht>.02&&(it.sun+=Ht/q,it.sunA+=1/q)}for(let it of Object.values(d))it.sky=it.sun=0;if(K)for(let it of f){let ft=it.a,pt=ft.n.dot(lt),xt=d[it.z];if(!xt||pt<=.01)continue;let Ht=Math.max(1,Math.round(ft.w/.3)),z=Math.max(1,Math.round(ft.h/.3)),Y=ft.w*ft.h/(Ht*z);for(let at=0;at<Ht;at++)for(let ut=0;ut<z;ut++)F.copy(ft.p0).addScaledVector(ft.u,ft.w*(at+.5)/Ht).addScaledVector(ft.v,ft.h*(ut+.5)/z).addScaledVector(ft.n,.02),!a(F,lt,300)&&(xt.sun+=Y*pt*ft.tau*l(F,lt,1e9))}H()}function H(){let O=w;if(!O)return;let nt=lu.dif(O.alt),K=lu.beam(O.alt)*Math.max(0,O.U);for(let lt of Object.values(d))lt.sky=0;for(let lt of f){let F=d[lt.z];F&&(F.sky+=lt.a.w*lt.a.h*lt.a.tau*lt.vsf)}for(let lt of Object.values(d))lt.Er=(lt.sky*nt+lt.sun*lu.beam(O.alt))*Lu/(lt.A*(1-Lu));for(let lt=0;lt<c.length;lt++){let F=c[lt],q=zi[F.r],it=q.out?null:d[Nu(q)];C[lt]=lt<M||T?F.skyB*nt+F.sun*K+(it?it.Er:0):-1}X()}function X(){for(let O of b)O.fill(0);for(let O=0;O<c.length;O++){if(C[O]<0)continue;let nt=c[O],K=b[nt.lv],lt=((Nn-1-nt.j)*ln+nt.i)*4,[F,q,it]=UM(C[O]);K[lt]=F,K[lt+1]=q,K[lt+2]=it,K[lt+3]=255}for(let O of b){let nt=O.slice();for(let K=0;K<ln*Nn;K++){if(nt[K*4+3])continue;let lt=K%ln,F=Math.floor(K/ln);for(let[q,it]of[[1,0],[-1,0],[0,1],[0,-1]]){let ft=lt+q,pt=F+it;if(ft<0||pt<0||ft>=ln||pt>=Nn)continue;let xt=(pt*ln+ft)*4;if(nt[xt+3]){O[K*4]=nt[xt],O[K*4+1]=nt[xt+1],O[K*4+2]=nt[xt+2];break}}}}for(let O of E)O.needsUpdate=!0}function rt(){let O={};c.forEach((nt,K)=>{let lt=zi[nt.r].key;if(!lt||C[K]<0)return;let F=O[lt]||(O[lt]={lx:0,n:0,sunM2:0});F.lx+=C[K],F.n++,F.sunM2+=nt.sunA*Gn*Gn});for(let nt of Object.values(O))nt.lx/=nt.n;return{keys:O,ready:T}}function W(){let O={},nt={};for(let K of f)O[K.z]=(O[K.z]||0)+K.a.w*K.a.h*K.a.tau*K.vsf;for(let K of c){let lt=zi[K.r],F=lt.key,q=Nu(lt),it=d[q];if(!F)continue;let ft=nt[F]||(nt[F]={s:0,n:0});ft.s+=K.skyB+(it?(O[q]||0)*Lu/(it.A*(1-Lu)):0),ft.n++}for(let K in nt)nt[K]=nt[K].s/nt[K].n*100;return nt}function tt(O){let nt=b[O],K=new Uint8ClampedArray(nt.length),lt=ln*4;for(let F=0;F<Nn;F++)K.set(nt.subarray((Nn-1-F)*lt,(Nn-F)*lt),F*lt);return{w:ln,h:Nn,x:Ca,z:Pa,cell:Gn,rgba:K}}return{group:S,invalidate:P,step:N,setSun:U,stats:rt,df:W,image:tt,probe:(O,nt,K)=>{let lt=h[O][Math.floor((K-Pa)/Gn)*ln+Math.floor((nt-Ca)/Gn)];return lt>=0?C[lt]:null},cells:c,zones:d,busy:()=>M<c.length}}var rn=i=>document.getElementById(i),V0=new Intl.NumberFormat("pt-BR"),H0=1,BM=Math.log10(5e3),id=i=>Math.min(1,Math.max(0,(Math.log10(Math.max(i,1))-H0)/(BM-H0)));function G0(i,t){let e=rn("dia"),n=rn("hora"),s=rn("corteX"),r=rn("play"),o=rn("panel"),a=rn("grip");e.value=i.dia,n.value=i.hora,s.value=i.x;for(let _ of["mapa","raios","viz","arv","mob"]){let y=rn(_);y.checked=i[_],y.addEventListener("change",()=>{i[_]=y.checked,t.toggle(_)})}e.addEventListener("input",()=>{i.dia=+e.value,t.dia()}),n.addEventListener("input",()=>{i.hora=+n.value,t.hora()}),n.addEventListener("change",()=>t.settle()),e.addEventListener("change",()=>t.settle()),s.addEventListener("input",()=>{i.x=+s.value,t.cut()}),document.querySelectorAll("[data-dia]").forEach(_=>_.addEventListener("click",()=>{i.dia=+_.dataset.dia,e.value=i.dia,t.dia(),t.settle()}));let l=[...document.querySelectorAll("[data-vista]")];l.forEach(_=>_.addEventListener("click",()=>{i.vista=_.dataset.vista,t.vista()})),l[0].parentElement.addEventListener("keydown",_=>{let y=l.findIndex(E=>E.dataset.vista===i.vista),x=l.length,S={ArrowRight:y+1,ArrowDown:y+1,ArrowLeft:y-1,ArrowUp:y-1,Home:0,End:x-1}[_.key];if(S==null)return;_.preventDefault();let b=l[(S+x)%x];i.vista=b.dataset.vista,t.vista(),b.focus()}),document.querySelectorAll("[data-cam]").forEach(_=>_.addEventListener("click",()=>t.cam(_.dataset.cam))),r.addEventListener("click",()=>{i.playing=!i.playing,t.play()}),a.addEventListener("click",()=>{let _=o.classList.toggle("open");a.setAttribute("aria-expanded",_),t.layout()});let c=rn("rooms");c.innerHTML=Mf.map(_=>`<li data-k="${_}"><span class="nm">${eu[_]}</span><span class="lx"></span><span class="bar" aria-hidden="true"><i></i><b style="left:${(id(60)*100).toFixed(1)}%"></b><b style="left:${(id(300)*100).toFixed(1)}%"></b></span><span class="sp"></span></li>`).join("");let h=Object.fromEntries([...c.children].map(_=>[_.dataset.k,_])),d=Math.log10(Qr[0][0]),u=Math.log10(Qr[Qr.length-1][0]),f=_=>((Math.log10(_)-d)/(u-d)*100).toFixed(1)+"%";rn("ramp").style.background=`linear-gradient(90deg,${Qr.map(([_,y])=>`${y} ${f(_)}`).join(",")})`,rn("ticks").innerHTML=[[60,"60 lx"],[300,"300 lx"],[1e3,"1 mil"],[5e3,"5 mil"],[3e4,"sol direto"]].map(([_,y])=>`<span style="left:${f(_)}">${y}</span>`).join("");function m(){rn("diaOut").textContent=ga(i.dia),rn("horaOut").textContent=_a(i.hora),rn("corteOut").textContent=`a ${ma(i.x,2)} m da divisa oeste`,e.setAttribute("aria-valuetext",ga(i.dia)),n.setAttribute("aria-valuetext",_a(i.hora)),s.setAttribute("aria-valuetext",rn("corteOut").textContent),l.forEach(_=>{let y=_.dataset.vista===i.vista;_.setAttribute("aria-checked",y),_.tabIndex=y?0:-1}),document.querySelectorAll("[data-dia]").forEach(_=>_.setAttribute("aria-pressed",+_.dataset.dia===i.dia)),rn("corteRow").hidden=i.vista!=="corte",rn("mapLegend").hidden=!i.mapa,r.setAttribute("aria-pressed",i.playing),r.setAttribute("aria-label",i.playing?"Pausar o dia":"Animar o dia")}function v(_,y,x){rn("sunline").textContent=_.alt<=0?`${ga(i.dia)}, ${_a(i.hora)}: o sol est\xE1 abaixo do horizonte`:`${ga(i.dia)}, ${_a(i.hora)}: sol a ${Math.round(_.alt)}\xB0 de altura, vindo do ${Xm(_.az)}`;let S=y.rays.length;rn("rayline").textContent=_.alt<=0?"Sem sol agora. A luz do c\xE9u tamb\xE9m some.":S?`${V0.format(S)} raios de sol atravessam os vidros agora.`:"Nenhum raio de sol atravessa os vidros agora.";for(let b of Mf){let E=h[b],M=x.keys[b]||{lx:0,sunM2:0},T=M.lx,w=M.sunM2;E.querySelector(".lx").textContent=x.ready?`${V0.format(T<10?Math.round(T):Math.round(T/10)*10)} lx`:"calculando",E.querySelector("i").style.width=x.ready?`${(id(T)*100).toFixed(1)}%`:"0%",E.querySelector(".sp").textContent=w>=.05?`sol no piso: ${ma(w,1)} m\xB2`:"sem sol no piso",E.classList.toggle("lit",w>=.05)}}let p=rn("needle"),g=document.querySelector(".top");return{labels:m,readout:v,setHora(_){n.value=_},compass(_){p.style.transform=`rotate(${_}rad)`},cover(){let _=o.getBoundingClientRect();return innerWidth>=760?{x:Math.max(0,innerWidth-_.left),y:0}:{x:0,y:Math.max(0,innerHeight-_.top)-g.getBoundingClientRect().bottom}},ready(){document.body.classList.add("ready")},fail(){document.body.classList.add("nogl")}}}var wi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zM=new ts(-1,1,1,-1,0,1),sd=class extends ne{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}},kM=new sd,Ai=class{constructor(t){this._mesh=new de(kM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var to=class extends Cn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ue?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=An.clone(t.uniforms),this.material=new ue({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ai(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ia=class extends Cn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Uu=class extends Cn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Fu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ve}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new to(wi),this.copyPass.material.blending=qe,this.timer=new Ho}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ia!==void 0&&(o instanceof Ia?n=!0:o instanceof Uu&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ou=class extends Cn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Pt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Da={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new et},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Yt},cameraProjectionMatrixInverse:{value:new Yt},cameraWorldMatrix:{value:new Yt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},La={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Bu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function W0(i=5){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=VM(t),n=e.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Pn(s,t,t);return r.wrapS=gn,r.wrapT=gn,r.needsUpdate=!0,r}function VM(i){let t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),n[s*t+r]!==0){r-=2,s++;continue}else n[s*t+r]=o++;r++,s--}return n}var Na={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:rd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new et},cameraProjectionMatrixInverse:{value:new Yt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function rd(i,t,e){let n=HM(i,t,e),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function HM(i,t,e){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*t*s/i,o=Math.pow(s/(i-1),e);n.push(new I(Math.cos(r),Math.sin(r),o))}return n}var zu=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,m=t-u,v=e-f,p,g;m>v?(p=1,g=0):(p=0,g=1);let _=m-p+h,y=v-g+h,x=m-1+2*h,S=v-1+2*h,b=l&255,E=c&255,M=this.perm[b+this.perm[E]]%12,T=this.perm[b+p+this.perm[E+g]]%12,w=this.perm[b+1+this.perm[E+1]]%12,C=.5-m*m-v*v;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[M],m,v));let P=.5-_*_-y*y;P<0?s=0:(P*=P,s=P*P*this._dot(this.grad3[T],_,y));let N=.5-x*x-S*S;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[w],x,S)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),f=1/6,m=(h+d+u)*f,v=h-m,p=d-m,g=u-m,_=t-v,y=e-p,x=n-g,S,b,E,M,T,w;_>=y?y>=x?(S=1,b=0,E=0,M=1,T=1,w=0):_>=x?(S=1,b=0,E=0,M=1,T=0,w=1):(S=0,b=0,E=1,M=1,T=0,w=1):y<x?(S=0,b=0,E=1,M=0,T=1,w=1):_<x?(S=0,b=1,E=0,M=0,T=1,w=1):(S=0,b=1,E=0,M=1,T=1,w=0);let C=_-S+f,P=y-b+f,N=x-E+f,D=_-M+2*f,U=y-T+2*f,H=x-w+2*f,X=_-1+3*f,rt=y-1+3*f,W=x-1+3*f,tt=h&255,Q=d&255,_t=u&255,O=this.perm[tt+this.perm[Q+this.perm[_t]]]%12,nt=this.perm[tt+S+this.perm[Q+b+this.perm[_t+E]]]%12,K=this.perm[tt+M+this.perm[Q+T+this.perm[_t+w]]]%12,lt=this.perm[tt+1+this.perm[Q+1+this.perm[_t+1]]]%12,F=.6-_*_-y*y-x*x;F<0?s=0:(F*=F,s=F*F*this._dot3(this.grad3[O],_,y,x));let q=.6-C*C-P*P-N*N;q<0?r=0:(q*=q,r=q*q*this._dot3(this.grad3[nt],C,P,N));let it=.6-D*D-U*U-H*H;it<0?o=0:(it*=it,o=it*it*this._dot3(this.grad3[K],D,U,H));let ft=.6-X*X-rt*rt-W*W;return ft<0?a=0:(ft*=ft,a=ft*ft*this._dot3(this.grad3[lt],X,rt,W)),32*(s+r+o+a)}noise4d(t,e,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,d,u,f,m,v=(t+e+n+s)*l,p=Math.floor(t+v),g=Math.floor(e+v),_=Math.floor(n+v),y=Math.floor(s+v),x=(p+g+_+y)*c,S=p-x,b=g-x,E=_-x,M=y-x,T=t-S,w=e-b,C=n-E,P=s-M,N=T>w?32:0,D=T>C?16:0,U=w>C?8:0,H=T>P?4:0,X=w>P?2:0,rt=C>P?1:0,W=N+D+U+H+X+rt,tt=o[W][0]>=3?1:0,Q=o[W][1]>=3?1:0,_t=o[W][2]>=3?1:0,O=o[W][3]>=3?1:0,nt=o[W][0]>=2?1:0,K=o[W][1]>=2?1:0,lt=o[W][2]>=2?1:0,F=o[W][3]>=2?1:0,q=o[W][0]>=1?1:0,it=o[W][1]>=1?1:0,ft=o[W][2]>=1?1:0,pt=o[W][3]>=1?1:0,xt=T-tt+c,Ht=w-Q+c,z=C-_t+c,Y=P-O+c,at=T-nt+2*c,ut=w-K+2*c,mt=C-lt+2*c,Lt=P-F+2*c,Ot=T-q+3*c,Wt=w-it+3*c,Zt=C-ft+3*c,B=P-pt+3*c,ae=T-1+4*c,Kt=w-1+4*c,L=C-1+4*c,A=P-1+4*c,G=p&255,Z=g&255,st=_&255,gt=y&255,vt=a[G+a[Z+a[st+a[gt]]]]%32,ot=a[G+tt+a[Z+Q+a[st+_t+a[gt+O]]]]%32,ht=a[G+nt+a[Z+K+a[st+lt+a[gt+F]]]]%32,bt=a[G+q+a[Z+it+a[st+ft+a[gt+pt]]]]%32,kt=a[G+1+a[Z+1+a[st+1+a[gt+1]]]]%32,St=.6-T*T-w*w-C*C-P*P;St<0?h=0:(St*=St,h=St*St*this._dot4(r[vt],T,w,C,P));let yt=.6-xt*xt-Ht*Ht-z*z-Y*Y;yt<0?d=0:(yt*=yt,d=yt*yt*this._dot4(r[ot],xt,Ht,z,Y));let Nt=.6-at*at-ut*ut-mt*mt-Lt*Lt;Nt<0?u=0:(Nt*=Nt,u=Nt*Nt*this._dot4(r[ht],at,ut,mt,Lt));let Gt=.6-Ot*Ot-Wt*Wt-Zt*Zt-B*B;Gt<0?f=0:(Gt*=Gt,f=Gt*Gt*this._dot4(r[bt],Ot,Wt,Zt,B));let $t=.6-ae*ae-Kt*Kt-L*L-A*A;return $t<0?m=0:($t*=$t,m=$t*$t*this._dot4(r[kt],ae,Kt,L,A)),27*(h+d+u+f+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}};var Ua=class i extends Cn{constructor(t,e,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=W0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Le(this.width,this.height,{type:Ve,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ue({defines:Object.assign({},Da.defines),uniforms:An.clone(Da.uniforms),vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Uo,this.normalMaterial.blending=qe,this.pdMaterial=new ue({defines:Object.assign({},Na.defines),uniforms:An.clone(Na.uniforms),vertexShader:Na.vertexShader,fragmentShader:Na.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ue({defines:Object.assign({},La.defines),uniforms:An.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,blending:qe}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ue({uniforms:An.clone(wi.uniforms),vertexShader:wi.vertexShader,fragmentShader:wi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xo,blendDst:Ns,blendEquation:qn,blendSrcAlpha:Wo,blendDstAlpha:Ns,blendEquationAlpha:qn}),this.blendMaterial=new ue({uniforms:An.clone(Bu.uniforms),vertexShader:Bu.vertexShader,fragmentShader:Bu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ic,blendSrc:Xo,blendDst:Ns,blendEquation:qn,blendSrcAlpha:Wo,blendDstAlpha:Ns,blendEquationAlpha:qn}),this._fsQuad=new Ai(null),this._originalClearColor=new Pt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new yi,this.depthTexture.format=Mi,this.depthTexture.type=ss,this.normalRenderTarget=new Le(this.width,this.height,{minFilter:Xe,magFilter:Xe,type:Ve,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=rd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=qe,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new zu,n=t*t*4,s=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;s[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let r=new Pn(s,t,t,an,xn);return r.wrapS=gn,r.wrapT=gn,r.needsUpdate=!0,r}};Ua.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var X0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var eo=class i extends Cn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new Pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,o,{type:Ve,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Le(r,o,{type:Ve,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Le(r,o,{type:Ve,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=X0;this.highPassUniforms=An.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ue({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=An.clone(wi.uniforms),this.blendMaterial=new ue({uniforms:this.copyUniforms,vertexShader:wi.vertexShader,fragmentShader:wi.fragmentShader,premultipliedAlpha:!0,blending:Bi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pt,this._oldClearAlpha=1,this._basic=new un,this._fsQuad=new Ai(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new ue({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ue({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};eo.BlurDirectionX=new et(1,0);eo.BlurDirectionY=new et(0,1);var Fa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ku=class extends Cn{constructor(){super(),this.isOutputPass=!0,this.uniforms=An.clone(Fa.uniforms),this.material=new Ar({name:Fa.name,uniforms:this.uniforms,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader}),this._fsQuad=new Ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Us?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$o&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function q0(i,t){let e=new Fr(i),n=new bs;n.add(new de(new Oi(100,32,16),t));let s=new de(new As(90,32).rotateX(-Math.PI/2).translate(0,-2,0),new un({color:new Pt(zt.terra).multiplyScalar(.7)}));n.add(s);let r=null;return{update(o){let a=e.fromScene(n,0,.1,300);o.environment=a.texture,r&&r.dispose(),r=a}}}var od=class extends Ua{_overrideVisibility(){super._overrideVisibility(),this.scene.traverse(t=>{t.visible&&(t.isMesh||t.isInstancedMesh)&&(t.material.transparent||t.userData.noAO)&&(t.visible=!1,this._visibilityCache.push(t))})}},GM={uniforms:{tDiffuse:{value:null},uWarm:{value:new I(1.012,1,.975)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform vec3 uWarm; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 x = c.rgb;
      x = mix(x, x * x * (3.0 - 2.0 * x), .12);
      float l = dot(x, vec3(.2126, .7152, .0722));
      x = mix(x * uWarm, x, smoothstep(.25, .8, l));
      gl_FragColor = vec4(clamp(x, 0.0, 1.0), c.a);
    }`};function Y0(i,t,e){let n=i.getDrawingBufferSize(new et),s=new Le(n.x,n.y,{type:Ve,samples:4}),r=new Fu(i,s),o=new od(t,e,n.x,n.y);o.updateGtaoMaterial({radius:.7,distanceExponent:1.4,thickness:1.2,scale:1,samples:16,distanceFallOff:1}),o.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),o.blendIntensity=.85;let a=new eo(new et(n.x,n.y),.22,.45,1.05);return r.addPass(new Ou(t,e)),r.addPass(o),r.addPass(a),r.addPass(new ku),r.addPass(new to(GM)),{render:()=>r.render(),setSize(l,c){r.setPixelRatio(i.getPixelRatio()),r.setSize(l,c)}}}var Z0=new Intl.NumberFormat("pt-BR"),WM=i=>{let t=0;for(let e=0,n=i.length-1;e<i.length;n=e++)t+=(i[n][0]+i[e][0])*(i[n][1]-i[e][1])/2;return Math.abs(t)},XM=[0,3.06,6.12];function J0(i,t,e,n,s){let r=new Ds,o=new et,a=new I,l=new bo(new ne,new si({color:"#b4532a",transparent:!0,opacity:.95,depthWrite:!1}));l.visible=!1,l.renderOrder=15,l.userData.noAO=!0;let c=null,h=null;function d(m,v){let p=i.getBoundingClientRect();o.set((m-p.left)/p.width*2-1,-((v-p.top)/p.height)*2+1),r.setFromCamera(o,t);for(let g of r.intersectObjects(e(),!1)){let _=g.object.material;if(!(_.transparent||_.alphaTest>0)&&!(g.point.x>as.constant+.01||g.point.y>ls.constant+.01))return g}return null}function u(m,v,p){a.copy(m.face.normal).transformDirection(m.object.matrixWorld);let g=a.y>.7?Pf(m.point):null;if(!g||g.void){f();return}let _=m.point,y=s.lux(g.lv,_.x,_.z),x=g.key?s.mean(g.key):null,S=[`<b>${g.name}</b> <span>${ma(WM(g.pts),1)} m\xB2</span>`];g.out?S.push("\xE1rea aberta, coberta pelo 1\xBA"):y==null?S.push("a luz ainda est\xE1 sendo calculada"):(S.push(y<1?"sem luz natural nesta hora":`${Z0.format(y<10?Math.round(y):Math.round(y/10)*10)} lx neste ponto${y>9e3?", sol direto":""}`),x>=1&&g.key&&S.push(`m\xE9dia de ${eu[g.key].toLowerCase()}: ${Z0.format(Math.round(x/10)*10)} lx`)),n.innerHTML=S.map(C=>`<span class="l">${C}</span>`).join(""),n.hidden=!1;let b=i.getBoundingClientRect(),E=n.offsetWidth||200,M=n.offsetHeight||60;n.style.left=`${Math.min(Math.max(8,v-b.left-E/2),b.width-E-8)}px`,n.style.top=`${Math.max(8,p-b.top-M-14)}px`;let T=XM[g.lv]+.03,w=g.pts.map(([C,P])=>new I(C,T,P));l.geometry.dispose(),l.geometry=new ne().setFromPoints(w),l.visible=!0,h=g}function f(){n.hidden=!0,l.visible=!1,h=null}return i.addEventListener("pointerdown",m=>{c={x:m.clientX,y:m.clientY,t:performance.now()}}),i.addEventListener("pointerup",m=>{if(!c)return;let v=Math.hypot(m.clientX-c.x,m.clientY-c.y),p=performance.now()-c.t;if(c=null,v>6||p>450)return;let g=d(m.clientX,m.clientY);g?u(g,m.clientX,m.clientY):f(),s.changed()}),addEventListener("keydown",m=>{m.key==="Escape"&&!n.hidden&&(f(),s.changed())}),{line:l,hide:f,room:()=>h}}var qM={plaster:"white_plaster_02",tiles:"clay_roof_tiles_02",wood:"brown_planks_03"},YM="sky_clouds.webp",ZM=.5952;function $0(i,t,e,n){let s=new Oo,r=Math.min(8,i.capabilities.getMaxAnisotropy()),o=(c,h)=>new Promise((d,u)=>s.load(`assets/${c}`,f=>{f.wrapS=f.wrapT=gn,f.anisotropy=r,h&&(f.colorSpace=We),d(f)},void 0,u)),a=Promise.all(Object.entries(qM).map(async([c,h])=>{let[d,u,f]=await Promise.all([o(`${h}_diff_1k.webp`,!0),o(`${h}_nor_gl_1k.${c==="wood"?"jpg":"webp"}`),o(`${h}_arm_1k.webp`)]);return[c,d,u,f]})).then(c=>{for(let[h,d,u,f]of c)os[h].map.value=d,os[h].nor.value=u,os[h].arm.value=f;for(let h of[t.built,t.wood,t.rail])h.normalMap=null;t.roof.map=null,t.roof.normalMap=null;for(let h of[t.built,t.roof,t.wood,t.rail])h.needsUpdate=!0;os.on.value=1,n()}).catch(()=>{}),l=new Promise((c,h)=>s.load(`assets/${YM}`,c,void 0,h)).then(c=>{c.wrapS=gn,c.minFilter=c.magFilter=Be,c.generateMipmaps=!1,e.setHdr(c,ZM),n(!0)}).catch(()=>{});return Promise.all([a,l])}var ad={terreo:Dn[0]+1.5,p1:Dn[1]+1.5,p2:Dn[2]+1.5},JM=["inteira","terreo","p1","p2","corte"],Vu=matchMedia("(pointer: coarse)").matches,Oa=matchMedia("(prefers-reduced-motion: reduce)").matches;function $M(){let i=new URLSearchParams(location.hash.slice(1)),t=(n,s,r,o)=>{let a=parseFloat(i.get(n));return Number.isFinite(a)?Math.min(o,Math.max(r,a)):s},e=(n,s)=>i.has(n)?i.get(n)!=="0":s;return{dia:Math.round(t("dia",172,1,365)),hora:Math.round(t("hora",9.5,5.5,18.5)*4)/4,vista:JM.includes(i.get("vista"))?i.get("vista"):"inteira",x:t("x",6.6,.3,8.4),raios:e("raios",!0),viz:e("viz",!0),arv:e("arv",!0),mob:e("mob",!0),mapa:e("mapa",!1),playing:!1}}function KM(){let i=$M(),t=document.getElementById("gl"),e,n=!0,s=G0(i,{dia:()=>{X(),W(!1),tt()},hora:()=>{W(!1),tt()},settle:()=>{W(!0)},cut:()=>{Q(),n=!0,K()},vista:()=>{Q(),_t(),n=!0,K()},cam:z=>S.go(pa[z]),toggle:z=>{if(z==="mapa"){H();return}if(z==="mob"){h.visible=i.mob,e.shadowMap.needsUpdate=!0,n=!0,K();return}U(),z==="raios"?(nt(),n=!0,K()):W(!0)},play:()=>{s.labels(),i.playing||W(!0)},layout:()=>setTimeout(lt,260)});try{e=vm(t,Vu)}catch{s.fail();return}let r=new bs;r.fog=new xo(16777215,70,250);let o=Em(),a=Lm(o),l=Fm(o);r.add(a.root,l.root);let c=new Oe;for(let z of a.root.children)z.userData.edges&&c.add(new Es(new Rs(z.geometry,24),o.edge));r.add(c);let h=Um(o);h.visible=i.mob,r.add(h);let d=!!e.isWebGLRenderer,u=Bm(),f=zm(Vu?2048:4096,d?.78:1),m=Om();r.add(u.group,f.group,m.group);let v=d?q0(e,u.mat):null;r.environmentIntensity=.55;let p=null;r.updateMatrixWorld(!0);let g=[...a.occ,...l.occ],_=k0(a,l);r.add(_.group);let y="",x=null,S=Gm(t,Oa),b=d&&!Vu?Y0(e,r,S.camera):null,E=()=>b&&i.vista==="inteira"&&!i.mapa,M=document.getElementById("tip"),T=J0(t,S.camera,()=>a.root.children.filter(z=>z.isMesh&&z.visible),M,{lux(z,Y,at){if(!_.stats().ready)return null;let ut=_.probe(z,Y,at);return ut==null||ut<0?null:ut},mean:z=>(_.stats().keys[z]||{}).lx??null,changed:()=>{n=!0}});r.add(T.line);let w={rays:[],flux:{},floor:{},s:null},C=0,P=(z,Y)=>{let at=Cf(z,Y);return new I(...Gs(at)).normalize()},N=new Pt("#ffb26b"),D=new Pt("#ffe3ae");function U(){for(let Y of l.root.children)Y.userData.grp==="viz"&&(Y.visible=i.viz);for(let Y of l.trees)Y.t.visible=Y.branches.visible=Y.crown.visible=i.arv;if(l.setSeason(Wm(i.dia)),!i.arv)for(let Y of l.trees)Y.crown.visible=!1;rt(),e.shadowMap.needsUpdate=!0;let z=`${i.viz}|${i.arv}|${l.trees.map(Y=>Y.px.userData.tau).join()}`;z!==y&&(y=z,_.invalidate(i))}function H(){_.group.visible=i.mapa,i.mapa&&i.vista==="inteira"&&(i.vista="p1",Q(),_t()),s.labels(),n=!0,K(),lt()}function X(){U(),u.setPath(z=>P(i.dia,z))}function rt(){l.petals.visible=!Oa&&i.arv&&!!l.petals.userData.on&&i.vista==="inteira"}function W(z){let Y=Cf(i.dia,i.hora),at=new I(...Gs(Y)).normalize();r.fog.color.copy(u.setSun(at,Y.alt)),f.set(at,Y.alt),v&&(z||p==null||Math.abs(Y.alt-p)>2)&&(v.update(r),p=Y.alt),T.hide(),e.shadowMap.needsUpdate=!0;let ut=g.filter(mt=>(i.viz||mt.userData.grp!=="viz")&&(i.arv||mt.userData.grp!=="tree"));w=Zm(Y,a.aps,ut,z?.2:.4),m.mat.uniforms.uColor.value.copy(N).lerp(D,Math.min(1,Math.max(0,(Y.alt-5)/40))),O(),_.setSun(Y,z),x=Y,s.labels(),s.readout(Y,w,_.stats()),z&&K(),n=!0}function tt(){clearTimeout(C),C=setTimeout(()=>W(!0),220)}function Q(){as.constant=i.vista==="corte"?i.x:1e4,ls.constant=ad[i.vista]??1e4,O(),s.labels(),rt(),T.hide()}function _t(z=!1){i.vista==="corte"?S.go(pa.corte,0,z):ad[i.vista]!=null?S.go(pa.planta,ad[i.vista]-1.5,z):S.go(pa.rua,0,z)}function O(){let z=[];if(w.s)for(let Y of w.rays){let at=Y.p.clone().addScaledVector(w.s,2.4),ut=Y.b,mt=0,Lt=1,Ot=(Kt,L,A)=>{if(Kt<=A&&L<=A)return!0;if(Kt>A&&L>A)return!1;let G=(A-Kt)/(L-Kt);return Kt>A?mt=Math.max(mt,G):Lt=Math.min(Lt,G),!0};if(!Ot(at.x,ut.x,as.constant)||!Ot(at.y,ut.y,ls.constant)||Lt-mt<.001)continue;let Wt=new I().subVectors(ut,at),Zt=at.clone().addScaledVector(Wt,mt),B=at.clone().addScaledVector(Wt,Lt),ae=at.distanceTo(Y.p)/Math.max(Wt.length(),1e-6);z.push({a:Zt,g:ae<=mt?Zt:ae>=Lt?B:Y.p,b:B,w:Y.w,n:Lt<1?null:Y.n})}m.set(z),nt()}function nt(){m.group.visible=i.raios&&!!w.s&&w.rays.length>0}function K(){let z=new URLSearchParams({dia:i.dia,hora:+i.hora.toFixed(2),vista:i.vista});i.vista==="corte"&&z.set("x",i.x.toFixed(2));for(let Y of["raios","viz","arv","mob"])i[Y]||z.set(Y,"0");i.mapa&&z.set("mapa","1");try{history.replaceState(null,"","#"+z)}catch{}}function lt(){let z=innerWidth,Y=innerHeight;e.setSize(z,Y,!1),S.resize(z,Y);let at=s.cover();S.camera.setViewOffset(z,Y,Math.round(at.x/2),Math.round(at.y/2),z,Y),b&&b.setSize(z,Y),n=!0}addEventListener("resize",lt),S.controls.addEventListener("change",()=>{n=!0}),X(),Q(),W(!0),_.group.visible=i.mapa,_t(!0),lt();let F=performance.now(),q=0,it=0,ft=!0,pt=2e4,xt=F;for(let z of["pointerdown","pointermove","wheel","keydown","input"])addEventListener(z,()=>{xt=performance.now()},{capture:!0,passive:!0});function Ht(z){requestAnimationFrame(Ht);let Y=Math.min(.1,(z-F)/1e3);F=z,i.playing&&(i.hora+=Y*1.1,i.hora>18.5&&(i.hora=5.5),s.setHora(i.hora),z-q>70&&(q=z,W(!1))),_.busy()&&(_.step(Vu?6:10),n=!0,!_.busy()&&x&&s.readout(x,w,_.stats()));let at=S.tick(z);(at||i.playing)&&(xt=z);let ut=z-xt<pt,mt=m.group.visible&&!Oa&&ut;mt&&(m.mat.uniforms.uTime.value=z/1e3);let Lt=!Oa&&ut&&z-it>33;Oa||(cs.value=z/1e3),(n||at||mt||Lt)&&(it=z,u.follow(S.camera),s.compass(S.north()),E()?b.render():e.render(r,S.camera),n=!1,ft&&(ft=!1,s.ready(),d&&$0(e,o,u,()=>{v&&v.update(r),n=!0})))}requestAnimationFrame(Ht)}KM();
