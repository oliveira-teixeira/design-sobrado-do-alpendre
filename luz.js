var ja=1;var tc=3,Hn=0,Ys=1,ce=2;var ec=1;var nc=100;var ic=204,sc=205;var Kr=0,Qr=1,jr=2,ys=3,to=4,eo=5,no=6,io=7,Mo=0,rc=1,oc=2;var bo=1,To=2,Eo=3,Ao=4,wo=5,Ro=6,Co=7;var Po=300,ac=301,Io=302;var cc=306,Fn=1e3,di=1001,so=1002,ro=1003;var Gn=1006;var Zs=1008;var lc=1009;var uc=1015;var Wn=1023;var _i=2300,Ss=2301,xs=2302,oo=2303,ao=2400,co=2401,lo=2402;var hc=0;var Xn="",Xt="srgb",uo="srgb-linear",ho="linear",_s="srgb";var vs=7680;var fc=519;var dc=35044;var pi=2e3,fo=2001;function Ul(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fl(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function po(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}var wa={},Ms=null;function pc(o){let t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=o[1];e&&e.isStackTrace?o[0]+=" "+e.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Dt(...o){o=pc(o);let t="THREE."+o.shift();if(Ms)Ms("warn",t,...o);else{let e=o[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...o)}}function Et(...o){o=pc(o);let t="THREE."+o.shift();if(Ms)Ms("error",t,...o);else{let e=o[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...o)}}function Dn(...o){let t=o.join(" ");t in wa||(wa[t]=!0,Dt(...o))}var Bl={[Kr]:Qr,[jr]:no,[to]:io,[ys]:eo,[Qr]:Kr,[no]:jr,[io]:to,[eo]:ys},We=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bp=Math.PI/180,Ol=180/Math.PI;function qn(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[o&255]+Gt[o>>8&255]+Gt[o>>16&255]+Gt[o>>24&255]+"-"+Gt[t&255]+Gt[t>>8&255]+"-"+Gt[t>>16&15|64]+Gt[t>>24&255]+"-"+Gt[e&63|128]+Gt[e>>8&255]+"-"+Gt[e>>16&255]+Gt[e>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Q(o,t,e){return Math.max(t,Math.min(e,o))}function zl(o,t){return(o%t+t)%t}function Ar(o,t,e){return(1-e)*o+e*t}function ci(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jt(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fo=class Fo{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Q(this.x,t.x,e.x),this.y=Q(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Q(this.x,t,e),this.y=Q(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Q(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Q(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fo.prototype.isVector2=!0;var O=Fo,re=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=s[r+0],p=s[r+1],d=s[r+2],g=s[r+3];if(h!==g||c!==f||l!==p||u!==d){let v=c*f+l*p+u*d+h*g;v<0&&(f=-f,p=-p,d=-d,g=-g,v=-v);let y=1-a;if(v<.9995){let m=Math.acos(v),x=Math.sin(m);y=Math.sin(y*m)/x,a=Math.sin(a*m)/x,c=c*y+f*a,l=l*y+p*a,u=u*y+d*a,h=h*y+g*a}else{c=c*y+f*a,l=l*y+p*a,u=u*y+d*a,h=h*y+g*a;let m=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=m,l*=m,u*=m,h*=m}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[r],f=s[r+1],p=s[r+2],d=s[r+3];return t[e]=a*d+u*h+c*p-l*f,t[e+1]=c*d+u*f+l*h-a*p,t[e+2]=l*d+u*p+a*f-c*h,t[e+3]=u*d-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),f=c(n/2),p=c(i/2),d=c(s/2);switch(r){case"XYZ":this._x=f*u*h+l*p*d,this._y=l*p*h-f*u*d,this._z=l*u*d+f*p*h,this._w=l*u*h-f*p*d;break;case"YXZ":this._x=f*u*h+l*p*d,this._y=l*p*h-f*u*d,this._z=l*u*d-f*p*h,this._w=l*u*h+f*p*d;break;case"ZXY":this._x=f*u*h-l*p*d,this._y=l*p*h+f*u*d,this._z=l*u*d+f*p*h,this._w=l*u*h-f*p*d;break;case"ZYX":this._x=f*u*h-l*p*d,this._y=l*p*h+f*u*d,this._z=l*u*d-f*p*h,this._w=l*u*h+f*p*d;break;case"YZX":this._x=f*u*h+l*p*d,this._y=l*p*h+f*u*d,this._z=l*u*d-f*p*h,this._w=l*u*h-f*p*d;break;case"XZY":this._x=f*u*h-l*p*d,this._y=l*p*h-f*u*d,this._z=l*u*d+f*p*h,this._w=l*u*h+f*p*d;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Q(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+r*a+i*l-s*c,this._y=i*u+r*c+s*a-n*l,this._z=s*u+r*l+n*c-i*a,this._w=r*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,r=-r,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bo=class Bo{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ra.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ra.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),u=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+c*l+r*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Q(this.x,t.x,e.x),this.y=Q(this.y,t.y,e.y),this.z=Q(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Q(this.x,t,e),this.y=Q(this.y,t,e),this.z=Q(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Q(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Q(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bo.prototype.isVector3=!0;var A=Bo,wr=new A,Ra=new re,Oo=class Oo{constructor(t,e,n,i,s,r,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,c,l)}set(t,e,n,i,s,r,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],d=n[8],g=i[0],v=i[3],y=i[6],m=i[1],x=i[4],_=i[7],S=i[2],b=i[5],T=i[8];return s[0]=r*g+a*m+c*S,s[3]=r*v+a*x+c*b,s[6]=r*y+a*_+c*T,s[1]=l*g+u*m+h*S,s[4]=l*v+u*x+h*b,s[7]=l*y+u*_+h*T,s[2]=f*g+p*m+d*S,s[5]=f*v+p*x+d*b,s[8]=f*y+p*_+d*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*r*u-e*a*l-n*s*u+n*a*c+i*s*l-i*r*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*r-a*l,f=a*c-u*s,p=l*s-r*c,d=e*h+n*f+i*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/d;return t[0]=h*g,t[1]=(i*l-u*n)*g,t[2]=(a*n-i*r)*g,t[3]=f*g,t[4]=(u*e-i*c)*g,t[5]=(i*s-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return Dn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rr.makeScale(t,e)),this}rotate(t){return Dn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rr.makeRotation(-t)),this}translate(t,e){return Dn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oo.prototype.isMatrix3=!0;var j=Oo,Rr=new j,Ca=new j().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pa=new j().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kl(){let o={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_s&&(i.r=De(i.r),i.g=De(i.g),i.b=De(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_s&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Dn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Dn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[uo]:{primaries:t,whitePoint:n,transfer:ho,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:t,whitePoint:n,transfer:_s,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),o}var de=kl();function De(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Un(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var Sn,bs=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Sn===void 0&&(Sn=po("canvas")),Sn.width=t.width,Sn.height=t.height;let i=Sn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Sn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=po("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=De(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(De(e[n]/255)*255):e[n]=De(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vl=0,Ts=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Cr(i[r].image)):s.push(Cr(i[r]))}else s=Cr(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Cr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bs.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var Hl=0,Pr=new A,Xe=class o extends We{constructor(t=o.DEFAULT_IMAGE,e=o.DEFAULT_MAPPING,n=di,i=di,s=Gn,r=Zs,a=Wn,c=lc,l=o.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=qn(),this.name="",this.source=new Ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new O(0,0),this.repeat=new O(1,1),this.center=new O(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fn:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fn:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Po;Xe.DEFAULT_ANISOTROPY=1;var zo=class zo{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],d=c[9],g=c[2],v=c[6],y=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(d-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(d+v)<.1&&Math.abs(l+p+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,_=(p+1)/2,S=(y+1)/2,b=(u+f)/4,T=(h+g)/4,M=(d+v)/4;return x>_&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=T/n):_>S?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=b/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=M/s),this.set(n,i,s,e),this}let m=Math.sqrt((v-d)*(v-d)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(v-d)/m,this.y=(h-g)/m,this.z=(f-u)/m,this.w=Math.acos((l+p+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Q(this.x,t.x,e.x),this.y=Q(this.y,t.y,e.y),this.z=Q(this.z,t.z,e.z),this.w=Q(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Q(this.x,t,e),this.y=Q(this.y,t,e),this.z=Q(this.z,t,e),this.w=Q(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Q(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zo.prototype.isVector4=!0;var hn=zo;var qs=class qs{constructor(t,e,n,i,s,r,a,c,l,u,h,f,p,d,g,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,r,a,c,l,u,h,f,p,d,g,v)}set(t,e,n,i,s,r,a,c,l,u,h,f,p,d,g,v){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=s,y[5]=r,y[9]=a,y[13]=c,y[2]=l,y[6]=u,y[10]=h,y[14]=f,y[3]=p,y[7]=d,y[11]=g,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qs().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Mn.setFromMatrixColumn(t,0).length(),s=1/Mn.setFromMatrixColumn(t,1).length(),r=1/Mn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=r*u,p=r*h,d=a*u,g=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+d*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=d+p*l,e[10]=r*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,d=l*u,g=l*h;e[0]=f+g*a,e[4]=d*a-p,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=p*a-d,e[6]=g+f*a,e[10]=r*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,d=l*u,g=l*h;e[0]=f-g*a,e[4]=-r*h,e[8]=d+p*a,e[1]=p+d*a,e[5]=r*u,e[9]=g-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let f=r*u,p=r*h,d=a*u,g=a*h;e[0]=c*u,e[4]=d*l-p,e[8]=f*l+g,e[1]=c*h,e[5]=g*l+f,e[9]=p*l-d,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let f=r*c,p=r*l,d=a*c,g=a*l;e[0]=c*u,e[4]=g-f*h,e[8]=d*h+p,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+d,e[10]=f-g*h}else if(t.order==="XZY"){let f=r*c,p=r*l,d=a*c,g=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+g,e[5]=r*u,e[9]=p*h-d,e[2]=d*h-p,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gl,t,Wl)}lookAt(t,e,n){let i=this.elements;return ie.subVectors(t,e),ie.lengthSq()===0&&(ie.z=1),ie.normalize(),ke.crossVectors(n,ie),ke.lengthSq()===0&&(Math.abs(n.z)===1?ie.x+=1e-4:ie.z+=1e-4,ie.normalize(),ke.crossVectors(n,ie)),ke.normalize(),$i.crossVectors(ie,ke),i[0]=ke.x,i[4]=$i.x,i[8]=ie.x,i[1]=ke.y,i[5]=$i.y,i[9]=ie.y,i[2]=ke.z,i[6]=$i.z,i[10]=ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],d=n[2],g=n[6],v=n[10],y=n[14],m=n[3],x=n[7],_=n[11],S=n[15],b=i[0],T=i[4],M=i[8],w=i[12],E=i[1],C=i[5],R=i[9],I=i[13],L=i[2],U=i[6],q=i[10],$=i[14],ht=i[3],it=i[7],st=i[11],rt=i[15];return s[0]=r*b+a*E+c*L+l*ht,s[4]=r*T+a*C+c*U+l*it,s[8]=r*M+a*R+c*q+l*st,s[12]=r*w+a*I+c*$+l*rt,s[1]=u*b+h*E+f*L+p*ht,s[5]=u*T+h*C+f*U+p*it,s[9]=u*M+h*R+f*q+p*st,s[13]=u*w+h*I+f*$+p*rt,s[2]=d*b+g*E+v*L+y*ht,s[6]=d*T+g*C+v*U+y*it,s[10]=d*M+g*R+v*q+y*st,s[14]=d*w+g*I+v*$+y*rt,s[3]=m*b+x*E+_*L+S*ht,s[7]=m*T+x*C+_*U+S*it,s[11]=m*M+x*R+_*q+S*st,s[15]=m*w+x*I+_*$+S*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],d=t[3],g=t[7],v=t[11],y=t[15],m=c*p-l*f,x=a*p-l*h,_=a*f-c*h,S=r*p-l*u,b=r*f-c*u,T=r*h-a*u;return e*(g*m-v*x+y*_)-n*(d*m-v*S+y*b)+i*(d*x-g*S+y*T)-s*(d*_-g*b+v*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(r*u-a*l)-n*(s*u-a*c)+i*(s*l-r*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],d=t[12],g=t[13],v=t[14],y=t[15],m=e*a-n*r,x=e*c-i*r,_=e*l-s*r,S=n*c-i*a,b=n*l-s*a,T=i*l-s*c,M=u*g-h*d,w=u*v-f*d,E=u*y-p*d,C=h*v-f*g,R=h*y-p*g,I=f*y-p*v,L=m*I-x*R+_*C+S*E-b*w+T*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return t[0]=(a*I-c*R+l*C)*U,t[1]=(i*R-n*I-s*C)*U,t[2]=(g*T-v*b+y*S)*U,t[3]=(f*b-h*T-p*S)*U,t[4]=(c*E-r*I-l*w)*U,t[5]=(e*I-i*E+s*w)*U,t[6]=(v*_-d*T-y*x)*U,t[7]=(u*T-f*_+p*x)*U,t[8]=(r*R-a*E+l*M)*U,t[9]=(n*E-e*R-s*M)*U,t[10]=(d*b-g*_+y*m)*U,t[11]=(h*_-u*b-p*m)*U,t[12]=(a*w-r*C-c*M)*U,t[13]=(e*C-n*w+i*M)*U,t[14]=(g*x-d*S-v*m)*U,t[15]=(u*S-h*x+f*m)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,c=t.z,l=s*r,u=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*r,0,l*c-i*a,u*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,u=r+r,h=a+a,f=s*l,p=s*u,d=s*h,g=r*u,v=r*h,y=a*h,m=c*l,x=c*u,_=c*h,S=n.x,b=n.y,T=n.z;return i[0]=(1-(g+y))*S,i[1]=(p+_)*S,i[2]=(d-x)*S,i[3]=0,i[4]=(p-_)*b,i[5]=(1-(f+y))*b,i[6]=(v+m)*b,i[7]=0,i[8]=(d+x)*T,i[9]=(v-m)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Mn.set(i[0],i[1],i[2]).length(),a=Mn.set(i[4],i[5],i[6]).length(),c=Mn.set(i[8],i[9],i[10]).length();s<0&&(r=-r),ge.copy(this);let l=1/r,u=1/a,h=1/c;return ge.elements[0]*=l,ge.elements[1]*=l,ge.elements[2]*=l,ge.elements[4]*=u,ge.elements[5]*=u,ge.elements[6]*=u,ge.elements[8]*=h,ge.elements[9]*=h,ge.elements[10]*=h,e.setFromRotationMatrix(ge),n.x=r,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,r,a=pi,c=!1){let l=this.elements,u=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i),d,g;if(c)d=s/(r-s),g=r*s/(r-s);else if(a===pi)d=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===fo)d=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=pi,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i),d,g;if(c)d=1/(r-s),g=r/(r-s);else if(a===pi)d=-2/(r-s),g=-(r+s)/(r-s);else if(a===fo)d=-1/(r-s),g=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};qs.prototype.isMatrix4=!0;var xt=qs,Mn=new A,ge=new xt,Gl=new A(0,0,0),Wl=new A(1,1,1),ke=new A,$i=new A,ie=new A,Ia=new xt,La=new re,fn=class o{constructor(t=0,e=0,n=0,i=o.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Q(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Q(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Q(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Q(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Q(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Q(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return La.setFromEuler(this),this.setFromQuaternion(La,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xl=0,Na=new A,bn=new re,Ce=new xt,Ki=new A,li=new A,ql=new A,Yl=new re,Da=new A(1,0,0),Ua=new A(0,1,0),Fa=new A(0,0,1),Ba={type:"added"},Zl={type:"removed"},Tn={type:"childadded",child:null},Ir={type:"childremoved",child:null},Ae=class o extends We{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=o.DEFAULT_UP.clone();let t=new A,e=new fn,n=new re,i=new A(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new j}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=o.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=o.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bn.setFromAxisAngle(t,e),this.quaternion.multiply(bn),this}rotateOnWorldAxis(t,e){return bn.setFromAxisAngle(t,e),this.quaternion.premultiply(bn),this}rotateX(t){return this.rotateOnAxis(Da,t)}rotateY(t){return this.rotateOnAxis(Ua,t)}rotateZ(t){return this.rotateOnAxis(Fa,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Da,t)}translateY(t){return this.translateOnAxis(Ua,t)}translateZ(t){return this.translateOnAxis(Fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ce.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ce.lookAt(li,Ki,this.up):Ce.lookAt(Ki,li,this.up),this.quaternion.setFromRotationMatrix(Ce),i&&(Ce.extractRotation(i.matrixWorld),bn.setFromRotationMatrix(Ce),this.quaternion.premultiply(bn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Et("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ba),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zl),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ce.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ce.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ce),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ba),Tn.child=t,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,t,ql),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(li,Yl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),f=r(t.skeletons),p=r(t.animations),d=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=i,n;function r(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ae.DEFAULT_UP=new A(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}};var mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ve={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Lr(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=zl(t,1),e=Q(e,0,1),n=Q(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Lr(r,s,t+1/3),this.g=Lr(r,s,t),this.b=Lr(r,s,t-1/3)}return de.colorSpaceToWorking(this,i),this}setStyle(t,e=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xt){let n=mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=De(t.r),this.g=De(t.g),this.b=De(t.b),this}copyLinearToSRGB(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xt){return de.workingToColorSpace(Wt.copy(this),t),Math.round(Q(Wt.r*255,0,255))*65536+Math.round(Q(Wt.g*255,0,255))*256+Math.round(Q(Wt.b*255,0,255))}getHexString(t=Xt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Wt.copy(this),e);let n=Wt.r,i=Wt.g,s=Wt.b,r=Math.max(n,i,s),a=Math.min(n,i,s),c,l,u=(a+r)/2;if(a===r)c=0,l=0;else{let h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Wt.copy(this),e),t.r=Wt.r,t.g=Wt.g,t.b=Wt.b,t}getStyle(t=Xt){de.workingToColorSpace(Wt.copy(this),t);let e=Wt.r,n=Wt.g,i=Wt.b;return t!==Xt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ve),this.setHSL(Ve.h+t,Ve.s+e,Ve.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ve),t.getHSL(Qi);let n=Ar(Ve.h,Qi.h,e),i=Ar(Ve.s,Qi.s,e),s=Ar(Ve.l,Qi.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new mt;mt.NAMES=mc;var xe=new A,Pe=new A,Nr=new A,Ie=new A,En=new A,An=new A,Oa=new A,Dr=new A,Ur=new A,Fr=new A,Br=new hn,Or=new hn,zr=new hn,qt=class o{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xe.subVectors(t,e),i.cross(xe);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){xe.subVectors(i,e),Pe.subVectors(n,e),Nr.subVectors(t,e);let r=xe.dot(xe),a=xe.dot(Pe),c=xe.dot(Nr),l=Pe.dot(Pe),u=Pe.dot(Nr),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,d=(r*u-a*c)*f;return s.set(1-p-d,d,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ie)===null?!1:Ie.x>=0&&Ie.y>=0&&Ie.x+Ie.y<=1}static getInterpolation(t,e,n,i,s,r,a,c){return this.getBarycoord(t,e,n,i,Ie)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ie.x),c.addScaledVector(r,Ie.y),c.addScaledVector(a,Ie.z),c)}static getInterpolatedAttribute(t,e,n,i,s,r){return Br.setScalar(0),Or.setScalar(0),zr.setScalar(0),Br.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,n),zr.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Br,s.x),r.addScaledVector(Or,s.y),r.addScaledVector(zr,s.z),r}static isFrontFacing(t,e,n,i){return xe.subVectors(n,e),Pe.subVectors(t,e),xe.cross(Pe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xe.subVectors(this.c,this.b),Pe.subVectors(this.a,this.b),xe.cross(Pe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return o.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return o.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return o.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return o.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return o.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;En.subVectors(i,n),An.subVectors(s,n),Dr.subVectors(t,n);let c=En.dot(Dr),l=An.dot(Dr);if(c<=0&&l<=0)return e.copy(n);Ur.subVectors(t,i);let u=En.dot(Ur),h=An.dot(Ur);if(u>=0&&h<=u)return e.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),e.copy(n).addScaledVector(En,r);Fr.subVectors(t,s);let p=En.dot(Fr),d=An.dot(Fr);if(d>=0&&p<=d)return e.copy(s);let g=p*l-c*d;if(g<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(An,a);let v=u*d-p*h;if(v<=0&&h-u>=0&&p-d>=0)return Oa.subVectors(s,i),a=(h-u)/(h-u+(p-d)),e.copy(i).addScaledVector(Oa,a);let y=1/(v+g+f);return r=g*y,a=f*y,e.copy(n).addScaledVector(En,r).addScaledVector(An,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},At=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,_e):_e.fromBufferAttribute(s,r),_e.applyMatrix4(t.matrixWorld),this.expandByPoint(_e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_e),_e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ui),ts.subVectors(this.max,ui),wn.subVectors(t.a,ui),Rn.subVectors(t.b,ui),Cn.subVectors(t.c,ui),He.subVectors(Rn,wn),Ge.subVectors(Cn,Rn),cn.subVectors(wn,Cn);let e=[0,-He.z,He.y,0,-Ge.z,Ge.y,0,-cn.z,cn.y,He.z,0,-He.x,Ge.z,0,-Ge.x,cn.z,0,-cn.x,-He.y,He.x,0,-Ge.y,Ge.x,0,-cn.y,cn.x,0];return!kr(e,wn,Rn,Cn,ts)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,wn,Rn,Cn,ts))?!1:(es.crossVectors(He,Ge),e=[es.x,es.y,es.z],kr(e,wn,Rn,Cn,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Le[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Le[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Le[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Le[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Le[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Le[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Le[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Le[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Le),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Le=[new A,new A,new A,new A,new A,new A,new A,new A],_e=new A,ji=new At,wn=new A,Rn=new A,Cn=new A,He=new A,Ge=new A,cn=new A,ui=new A,ts=new A,es=new A,ln=new A;function kr(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ln.fromArray(o,s);let a=i.x*Math.abs(ln.x)+i.y*Math.abs(ln.y)+i.z*Math.abs(ln.z),c=t.dot(ln),l=e.dot(ln),u=n.dot(ln);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ut=new A,ns=new O,Jl=0,Lt=class extends We{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jl++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dc,this.updateRanges=[],this.gpuType=uc,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.applyMatrix3(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.applyMatrix4(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.applyNormalMatrix(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.transformDirection(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),s=jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends Lt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ws=class extends Lt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _t=class extends Lt{constructor(t,e,n){super(new Float32Array(t),e,n)}},$l=new At,hi=new A,Vr=new A,Bn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$l.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hi.subVectors(t,this.center);let e=hi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hi.copy(t.center).add(Vr)),this.expandByPoint(hi.copy(t.center).sub(Vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kl=0,fe=new xt,Hr=new Ae,Pn=new A,se=new At,fi=new At,zt=new A,Ft=class o extends We{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ul(t)?ws:As)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new j().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fe.makeRotationFromQuaternion(t),this.applyMatrix4(fe),this}rotateX(t){return fe.makeRotationX(t),this.applyMatrix4(fe),this}rotateY(t){return fe.makeRotationY(t),this.applyMatrix4(fe),this}rotateZ(t){return fe.makeRotationZ(t),this.applyMatrix4(fe),this}translate(t,e,n){return fe.makeTranslation(t,e,n),this.applyMatrix4(fe),this}scale(t,e,n){return fe.makeScale(t,e,n),this.applyMatrix4(fe),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];se.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,se.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,se.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(se.min),this.boundingBox.expandByPoint(se.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(se.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(se.min,fi.min),se.expandByPoint(zt),zt.addVectors(se.max,fi.max),se.expandByPoint(zt)):(se.expandByPoint(fi.min),se.expandByPoint(fi.max))}se.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)zt.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(zt));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(Pn.fromBufferAttribute(t,l),zt.add(Pn)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new A,c[M]=new A;let l=new A,u=new A,h=new A,f=new O,p=new O,d=new O,g=new A,v=new A;function y(M,w,E){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,E),f.fromBufferAttribute(s,M),p.fromBufferAttribute(s,w),d.fromBufferAttribute(s,E),u.sub(l),h.sub(l),p.sub(f),d.sub(f);let C=1/(p.x*d.y-d.x*p.y);isFinite(C)&&(g.copy(u).multiplyScalar(d.y).addScaledVector(h,-p.y).multiplyScalar(C),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-d.x).multiplyScalar(C),a[M].add(g),a[w].add(g),a[E].add(g),c[M].add(v),c[w].add(v),c[E].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let M=0,w=m.length;M<w;++M){let E=m[M],C=E.start,R=E.count;for(let I=C,L=C+R;I<L;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let x=new A,_=new A,S=new A,b=new A;function T(M){S.fromBufferAttribute(i,M),b.copy(S);let w=a[M];x.copy(w),x.sub(S.multiplyScalar(S.dot(w))).normalize(),_.crossVectors(b,w);let C=_.dot(c[M])<0?-1:1;r.setXYZW(M,x.x,x.y,x.z,C)}for(let M=0,w=m.length;M<w;++M){let E=m[M],C=E.start,R=E.count;for(let I=C,L=C+R;I<L;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Lt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new A,s=new A,r=new A,a=new A,c=new A,l=new A,u=new A,h=new A;if(t)for(let f=0,p=t.count;f<p;f+=3){let d=t.getX(f+0),g=t.getX(f+1),v=t.getX(f+2);i.fromBufferAttribute(e,d),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,d),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),a.add(u),c.add(u),l.add(u),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)zt.fromBufferAttribute(t,e),zt.normalize(),t.setXYZ(e,zt.x,zt.y,zt.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,d=0;for(let g=0,v=c.length;g<v;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*u;for(let y=0;y<u;y++)f[d++]=l[p++]}return new Lt(f,u,h)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new o,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,u=r.length;l<u;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gr=new A,Ql=new A,jl=new j,ve=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Gr.subVectors(n,e).cross(Ql.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Gr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jl.getNormalMatrix(t),i=this.coplanarPoint(Gr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tu=0,qe=class extends We{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=ec,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=nc,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let a in s){let c=s[a];delete c.metadata,r.push(c)}return r}if(e){let s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ve().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new O().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new O().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ne=new A,Wr=new A,is=new A,ss=new A,Fe=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ne)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ne.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ne.copy(this.origin).addScaledVector(this.direction,e),Ne.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wr.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(Wr);let s=t.distanceTo(e)*.5,r=-this.direction.dot(is),a=ss.dot(this.direction),c=-ss.dot(is),l=ss.lengthSq(),u=Math.abs(1-r*r),h,f,p,d;if(u>0)if(h=r*c-a,f=r*a-c,d=s*u,h>=0)if(f>=-d)if(f<=d){let g=1/u;h*=g,f*=g,p=h*(h+r*f+2*a)+f*(r*h+f+2*c)+l}else f=s,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-d?(h=Math.max(0,-(-r*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=d?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(r*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=r>0?-s:s,h=Math.max(0,-(r*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Wr).addScaledVector(is,f),p}intersectSphere(t,e){if(t.radius<0)return null;Ne.subVectors(t.center,this.origin);let n=Ne.dot(this.direction),i=Ne.dot(Ne)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ne)!==null}intersectTriangle(t,e,n,i,s){let r=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=t.x-r.x,f=t.y-r.y,p=t.z-r.z,d=e.x-r.x,g=e.y-r.y,v=e.z-r.z,y=n.x-r.x,m=n.y-r.y,x=n.z-r.z,_=Math.abs(c),S=Math.abs(l),b=Math.abs(u),T,M,w,E,C,R,I,L,U,q,$,ht;if(_>=S&&_>=b?(w=c,R=h,U=d,ht=y,c>=0?(T=l,M=u,E=f,C=p,I=g,L=v,q=m,$=x):(T=u,M=l,E=p,C=f,I=v,L=g,q=x,$=m)):S>=b?(w=l,R=f,U=g,ht=m,l>=0?(T=u,M=c,E=p,C=h,I=v,L=d,q=x,$=y):(T=c,M=u,E=h,C=p,I=d,L=v,q=y,$=x)):(w=u,R=p,U=v,ht=x,u>=0?(T=c,M=l,E=h,C=f,I=d,L=g,q=y,$=m):(T=l,M=c,E=f,C=h,I=g,L=d,q=m,$=y)),w===0)return null;let it=T/w,st=M/w,rt=1/w,wt=E-it*R,P=C-st*R,N=I-it*U,F=L-st*U,z=q-it*ht,D=$-st*ht,Z=z*F-D*N,G=wt*D-P*z,Y=N*P-F*wt;if(i){if(Z<0||G<0||Y<0)return null}else if((Z<0||G<0||Y<0)&&(Z>0||G>0||Y>0))return null;let ot=Z+G+Y;if(ot===0)return null;let K=rt*(Z*R+G*U+Y*ht);return(ot>0?K<0:K>0)?null:this.at(K/ot,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class extends qe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},za=new xt,un=new Fe,rs=new Bn,ka=new A,os=new A,as=new A,cs=new A,Xr=new A,ls=new A,Va=new A,us=new A,ye=class extends Ae{constructor(t=new Ft,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){ls.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(Xr.fromBufferAttribute(h,t),r?ls.addScaledVector(Xr,u):ls.addScaledVector(Xr.sub(e),u))}e.add(ls)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(s),un.copy(t.ray).recast(t.near),!(rs.containsPoint(un.origin)===!1&&(un.intersectSphere(rs,ka)===null||un.origin.distanceToSquared(ka)>(t.far-t.near)**2))&&(za.copy(s).invert(),un.copy(t.ray).applyMatrix4(za),!(n.boundingBox!==null&&un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,un)))}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,g=f.length;d<g;d++){let v=f[d],y=r[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let _=m,S=x;_<S;_+=3){let b=a.getX(_),T=a.getX(_+1),M=a.getX(_+2);i=hs(this,y,t,n,l,u,h,b,T,M),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{let d=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let v=d,y=g;v<y;v+=3){let m=a.getX(v),x=a.getX(v+1),_=a.getX(v+2);i=hs(this,r,t,n,l,u,h,m,x,_),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let d=0,g=f.length;d<g;d++){let v=f[d],y=r[v.materialIndex],m=Math.max(v.start,p.start),x=Math.min(c.count,Math.min(v.start+v.count,p.start+p.count));for(let _=m,S=x;_<S;_+=3){let b=_,T=_+1,M=_+2;i=hs(this,y,t,n,l,u,h,b,T,M),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=v.materialIndex,e.push(i))}}else{let d=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let v=d,y=g;v<y;v+=3){let m=v,x=v+1,_=v+2;i=hs(this,r,t,n,l,u,h,m,x,_),i&&(i.faceIndex=Math.floor(v/3),e.push(i))}}}};function eu(o,t,e,n,i,s,r,a){let c;if(t.side===Ys?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,t.side===Hn,a),c===null)return null;us.copy(a),us.applyMatrix4(o.matrixWorld);let l=e.ray.origin.distanceTo(us);return l<e.near||l>e.far?null:{distance:l,point:us.clone(),object:o}}function hs(o,t,e,n,i,s,r,a,c,l){o.getVertexPosition(a,os),o.getVertexPosition(c,as),o.getVertexPosition(l,cs);let u=eu(o,t,e,n,os,as,cs,Va);if(u){let h=new A;qt.getBarycoord(Va,os,as,cs,h),i&&(u.uv=qt.getInterpolatedAttribute(i,a,c,l,h,new O)),s&&(u.uv1=qt.getInterpolatedAttribute(s,a,c,l,h,new O)),r&&(u.normal=qt.getInterpolatedAttribute(r,a,c,l,h,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new A,materialIndex:0};qt.getNormal(os,as,cs,f.normal),u.face=f,u.barycoord=h}return u}var Ye=class extends Xe{constructor(t=null,e=1,n=1,i,s,r,a,c,l=ro,u=ro,h,f){super(null,r,a,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class extends qe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}};var Rs=class extends qe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ha=new xt,mo=new Fe,fs=new Bn,ds=new A,vi=class extends Ae{constructor(t=new Ft,e=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(i),fs.radius+=s,t.ray.intersectsSphere(fs)===!1)return;Ha.copy(i).invert(),mo.copy(t.ray).applyMatrix4(Ha);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let d=f,g=p;d<g;d++){let v=l.getX(d);ds.fromBufferAttribute(h,v),Ga(ds,v,c,i,t,e,this)}}else{let f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let d=f,g=p;d<g;d++)ds.fromBufferAttribute(h,d),Ga(ds,d,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ga(o,t,e,n,i,s,r){let a=mo.distanceSqToPoint(o);if(a<e){let c=new A;mo.closestPointToPoint(o,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var yi=class extends Xe{constructor(t,e,n,i,s,r,a,c,l){super(t,e,n,i,s,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zn=class o extends Ft{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],u=[],h=[],f=0,p=0;d("z","y","x",-1,-1,n,e,t,r,s,0),d("z","y","x",1,-1,n,e,-t,r,s,1),d("x","z","y",1,1,t,n,e,i,r,2),d("x","z","y",1,-1,t,n,-e,i,r,3),d("x","y","z",1,-1,t,e,n,i,s,4),d("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(h,2));function d(g,v,y,m,x,_,S,b,T,M,w){let E=_/T,C=S/M,R=_/2,I=S/2,L=b/2,U=T+1,q=M+1,$=0,ht=0,it=new A;for(let st=0;st<q;st++){let rt=st*C-I;for(let wt=0;wt<U;wt++){let P=wt*E-R;it[g]=P*m,it[v]=rt*x,it[y]=L,l.push(it.x,it.y,it.z),it[g]=0,it[v]=0,it[y]=b>0?1:-1,u.push(it.x,it.y,it.z),h.push(wt/T),h.push(1-st/M),$+=1}}for(let st=0;st<M;st++)for(let rt=0;rt<T;rt++){let wt=f+rt+U*st,P=f+rt+U*(st+1),N=f+(rt+1)+U*(st+1),F=f+(rt+1)+U*st;c.push(wt,P,F),c.push(P,N,F),ht+=6}a.addGroup(p,ht,w),p+=ht,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Si=class o extends Ft{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],c=[],l=new A,u=new O;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[f]/t+1)/2,u.y=(r[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ze=class o extends Ft{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],p=[],d=0,g=[],v=n/2,y=0;m(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(p,2));function m(){let _=new A,S=new A,b=0,T=(e-t)/n;for(let M=0;M<=s;M++){let w=[],E=M/s,C=E*(e-t)+t;for(let R=0;R<=i;R++){let I=R/i,L=I*c+a,U=Math.sin(L),q=Math.cos(L);S.x=C*U,S.y=-E*n+v,S.z=C*q,h.push(S.x,S.y,S.z),_.set(U,T,q).normalize(),f.push(_.x,_.y,_.z),p.push(I,1-E),w.push(d++)}g.push(w)}for(let M=0;M<i;M++)for(let w=0;w<s;w++){let E=g[w][M],C=g[w+1][M],R=g[w+1][M+1],I=g[w][M+1];(t>0||w!==0)&&(u.push(E,C,I),b+=3),(e>0||w!==s-1)&&(u.push(C,R,I),b+=3)}l.addGroup(y,b,0),y+=b}function x(_){let S=d,b=new O,T=new A,M=0,w=_===!0?t:e,E=_===!0?1:-1;for(let R=1;R<=i;R++)h.push(0,v*E,0),f.push(0,E,0),p.push(.5,.5),d++;let C=d;for(let R=0;R<=i;R++){let L=R/i*c+a,U=Math.cos(L),q=Math.sin(L);T.x=w*q,T.y=v*E,T.z=w*U,h.push(T.x,T.y,T.z),f.push(0,E,0),b.x=U*.5+.5,b.y=q*.5*E+.5,p.push(b.x,b.y),d++}for(let R=0;R<i;R++){let I=S+R,L=C+R;_===!0?u.push(L,L+1,I):u.push(L+1,L,I),M+=3}l.addGroup(y,M,_===!0?1:2),y+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Cs=class o extends Ft{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];a(i),l(n),u(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(m){let x=new A,_=new A,S=new A;for(let b=0;b<e.length;b+=3)p(e[b+0],x),p(e[b+1],_),p(e[b+2],S),c(x,_,S,m)}function c(m,x,_,S){let b=S+1,T=[];for(let M=0;M<=b;M++){T[M]=[];let w=m.clone().lerp(_,M/b),E=x.clone().lerp(_,M/b),C=b-M;for(let R=0;R<=C;R++)R===0&&M===b?T[M][R]=w:T[M][R]=w.clone().lerp(E,R/C)}for(let M=0;M<b;M++)for(let w=0;w<2*(b-M)-1;w++){let E=Math.floor(w/2);w%2===0?(f(T[M][E+1]),f(T[M+1][E]),f(T[M][E])):(f(T[M][E+1]),f(T[M+1][E+1]),f(T[M+1][E]))}}function l(m){let x=new A;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(m),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){let m=new A;for(let x=0;x<s.length;x+=3){m.x=s[x+0],m.y=s[x+1],m.z=s[x+2];let _=v(m)/2/Math.PI+.5,S=y(m)/Math.PI+.5;r.push(_,1-S)}d(),h()}function h(){for(let m=0;m<r.length;m+=6){let x=r[m+0],_=r[m+2],S=r[m+4],b=Math.max(x,_,S),T=Math.min(x,_,S);b>.9&&T<.1&&(x<.2&&(r[m+0]+=1),_<.2&&(r[m+2]+=1),S<.2&&(r[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function p(m,x){let _=m*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function d(){let m=new A,x=new A,_=new A,S=new A,b=new O,T=new O,M=new O;for(let w=0,E=0;w<s.length;w+=9,E+=6){m.set(s[w+0],s[w+1],s[w+2]),x.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),b.set(r[E+0],r[E+1]),T.set(r[E+2],r[E+3]),M.set(r[E+4],r[E+5]),S.copy(m).add(x).add(_).divideScalar(3);let C=v(S);g(b,E+0,m,C),g(T,E+2,x,C),g(M,E+4,_,C)}}function g(m,x,_,S){S<0&&m.x===1&&(r[x]=m.x-1),_.x===0&&_.z===0&&(r[x]=S/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function y(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.vertices,t.indices,t.radius,t.detail)}};var oe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;e?r=e:r=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);let u=n[i],f=n[i+1]-u,p=(r-u)/f;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),a=this.getPoint(s),c=e||(r.isVector2?new O:new A);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,i=[],s=[],r=[],a=new A,c=new xt;for(let p=0;p<=t;p++){let d=p/t;i[p]=this.getTangentAt(d,new A)}s[0]=new A,r[0]=new A;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let d=Math.acos(Q(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,d))}r[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(Q(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let d=1;d<=t;d++)s[d].applyMatrix4(c.makeRotationAxis(i[d],p*d)),r[d].crossVectors(i[d],s[d])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},kn=class extends oe{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new O){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*u-p*h+this.aX,l=f*h+p*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ps=class extends kn{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Lo(){let o=0,t=0,e=0,n=0;function i(s,r,a,c){o=s,t=a,e=-3*s+3*r-2*a-c,n=2*s-2*r+a+c}return{initCatmullRom:function(s,r,a,c,l){i(r,a,l*(a-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,a,c,l,u,h){let f=(r-s)/l-(a-s)/(l+u)+(a-r)/u,p=(a-r)/u-(c-r)/(u+h)+(c-a)/h;f*=u,p*=u,i(r,a,f,p)},calc:function(s){let r=s*s,a=r*s;return o+t*s+e*r+n*a}}}var Wa=new A,Xa=new A,qr=new Lo,Yr=new Lo,Zr=new Lo,Is=class extends oe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%s]:(Xa.subVectors(i[0],i[1]).add(i[0]),l=Xa);let h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Wa.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,d=Math.pow(l.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(u),p);g<1e-4&&(g=1),d<1e-4&&(d=g),v<1e-4&&(v=g),qr.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,d,g,v),Yr.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,d,g,v),Zr.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,d,g,v)}else this.curveType==="catmullrom"&&(qr.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Yr.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Zr.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(qr.calc(c),Yr.calc(c),Zr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qa(o,t,e,n,i){let s=(n-t)*.5,r=(i-e)*.5,a=o*o,c=o*a;return(2*e-2*n+s+r)*c+(-3*e+3*n-2*s-r)*a+s*o+e}function nu(o,t){let e=1-o;return e*e*t}function iu(o,t){return 2*(1-o)*o*t}function su(o,t){return o*o*t}function gi(o,t,e,n){return nu(o,t)+iu(o,e)+su(o,n)}function ru(o,t){let e=1-o;return e*e*e*t}function ou(o,t){let e=1-o;return 3*e*e*o*t}function au(o,t){return 3*(1-o)*o*o*t}function cu(o,t){return o*o*o*t}function xi(o,t,e,n,i){return ru(o,t)+ou(o,e)+au(o,n)+cu(o,i)}var Mi=class extends oe{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(xi(t,i.x,s.x,r.x,a.x),xi(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ls=class extends oe{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(xi(t,i.x,s.x,r.x,a.x),xi(t,i.y,s.y,r.y,a.y),xi(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bi=class extends oe{constructor(t=new O,e=new O){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ns=class extends oe{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ti=class extends oe{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(gi(t,i.x,s.x,r.x),gi(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ds=class extends oe{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(gi(t,i.x,s.x,r.x),gi(t,i.y,s.y,r.y),gi(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ei=class extends oe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new O){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,c=i[r===0?r:r-1],l=i[r],u=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(qa(a,c.x,l.x,u.x,h.x),qa(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this}},go=Object.freeze({__proto__:null,ArcCurve:Ps,CatmullRomCurve3:Is,CubicBezierCurve:Mi,CubicBezierCurve3:Ls,EllipseCurve:kn,LineCurve:bi,LineCurve3:Ns,QuadraticBezierCurve:Ti,QuadraticBezierCurve3:Ds,SplineCurve:Ei}),Us=class extends oe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new go[i.type]().fromJSON(i))}return this}},dn=class extends Us{constructor(t){super(),this.type="Path",this.currentPoint=new O,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new bi(this.currentPoint.clone(),new O(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Ti(this.currentPoint.clone(),new O(t,e),new O(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Mi(this.currentPoint.clone(),new O(t,e),new O(n,i),new O(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ei(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,i,s,r,a,c),this}absellipse(t,e,n,i,s,r,a,c){let l=new kn(t,e,n,i,s,r,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Se=class extends dn{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new dn().fromJSON(i))}return this}};function lu(o,t,e=2){let n=t&&t.length,i=n?t[0]*e:o.length,s=gc(o,0,i,e,!0),r=[];if(!s||s.next===s.prev)return r;let a,c,l;if(n&&(s=pu(o,t,s,e)),o.length>80*e){a=o[0],c=o[1];let u=a,h=c;for(let f=e;f<i;f+=e){let p=o[f],d=o[f+1];p<a&&(a=p),d<c&&(c=d),p>u&&(u=p),d>h&&(h=d)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Ai(s,r,e,a,c,l,0),r}function gc(o,t,e,n,i){let s;if(i===Eu(o,t,e,n)>0)for(let r=t;r<e;r+=n)s=Ya(r/n|0,o[r],o[r+1],s);else for(let r=e-n;r>=t;r-=n)s=Ya(r/n|0,o[r],o[r+1],s);return s&&Vn(s,s.next)&&(Ri(s),s=s.next),s}function pn(o,t){if(!o)return o;t||(t=o);let e=o,n;do if(n=!1,!e.steiner&&(Vn(e,e.next)||Ct(e.prev,e,e.next)===0)){if(Ri(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ai(o,t,e,n,i,s,r){if(!o)return;!r&&s&&vu(o,n,i,s);let a=o;for(;o.prev!==o.next;){let c=o.prev,l=o.next;if(s?hu(o,n,i,s):uu(o)){t.push(c.i,o.i,l.i),Ri(o),o=l.next,a=l.next;continue}if(o=l,o===a){r?r===1?(o=fu(pn(o),t),Ai(o,t,e,n,i,s,2)):r===2&&du(o,t,e,n,i,s):Ai(pn(o),t,e,n,i,s,1);break}}}function uu(o){let t=o.prev,e=o,n=o.next;if(Ct(t,e,n)>=0)return!1;let i=t.x,s=e.x,r=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(i,s,r),h=Math.min(a,c,l),f=Math.max(i,s,r),p=Math.max(a,c,l),d=n.next;for(;d!==t;){if(d.x>=u&&d.x<=f&&d.y>=h&&d.y<=p&&mi(i,a,s,c,r,l,d.x,d.y)&&Ct(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function hu(o,t,e,n){let i=o.prev,s=o,r=o.next;if(Ct(i,s,r)>=0)return!1;let a=i.x,c=s.x,l=r.x,u=i.y,h=s.y,f=r.y,p=Math.min(a,c,l),d=Math.min(u,h,f),g=Math.max(a,c,l),v=Math.max(u,h,f),y=xo(p,d,t,e,n),m=xo(g,v,t,e,n),x=o.prevZ,_=o.nextZ;for(;x&&x.z>=y&&_&&_.z<=m;){if(x.x>=p&&x.x<=g&&x.y>=d&&x.y<=v&&x!==i&&x!==r&&mi(a,u,c,h,l,f,x.x,x.y)&&Ct(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=p&&_.x<=g&&_.y>=d&&_.y<=v&&_!==i&&_!==r&&mi(a,u,c,h,l,f,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=y;){if(x.x>=p&&x.x<=g&&x.y>=d&&x.y<=v&&x!==i&&x!==r&&mi(a,u,c,h,l,f,x.x,x.y)&&Ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=m;){if(_.x>=p&&_.x<=g&&_.y>=d&&_.y<=v&&_!==i&&_!==r&&mi(a,u,c,h,l,f,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function fu(o,t){let e=o;do{let n=e.prev,i=e.next.next;!Vn(n,i)&&_c(n,e,e.next,i)&&wi(n,i)&&wi(i,n)&&(t.push(n.i,e.i,i.i),Ri(e),Ri(e.next),e=o=i),e=e.next}while(e!==o);return pn(e)}function du(o,t,e,n,i,s){let r=o;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Mu(r,a)){let c=vc(r,a);r=pn(r,r.next),c=pn(c,c.next),Ai(r,t,e,n,i,s,0),Ai(c,t,e,n,i,s,0);return}a=a.next}r=r.next}while(r!==o)}function pu(o,t,e,n){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s]*n,c=s<r-1?t[s+1]*n:o.length,l=gc(o,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Su(l))}i.sort(mu);for(let s=0;s<i.length;s++)e=gu(i[s],e);return e}function mu(o,t){let e=o.x-t.x;if(e===0&&(e=o.y-t.y,e===0)){let n=(o.next.y-o.y)/(o.next.x-o.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function gu(o,t){let e=xu(o,t);if(!e)return t;let n=vc(e,o);return pn(n,n.next),pn(e,e.next)}function xu(o,t){let e=t,n=o.x,i=o.y,s=-1/0,r;if(Vn(o,e))return e;do{if(Vn(o,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,r=e.x<e.next.x?e:e.next,h===n))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,l=r.y,u=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&xc(i<l?n:s,i,c,l,i<l?s:n,i,e.x,e.y)){let h=Math.abs(i-e.y)/(n-e.x);wi(e,o)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&_u(r,e)))&&(r=e,u=h)}e=e.next}while(e!==a);return r}function _u(o,t){return Ct(o.prev,o,t.prev)<0&&Ct(t.next,o,o.next)<0}function vu(o,t,e,n){let i=o;do i.z===0&&(i.z=xo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,yu(i)}function yu(o){let t,e=1;do{let n=o,i;o=null;let s=null;for(t=0;n;){t++;let r=n,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,c--),s?s.nextZ=i:o=i,i.prevZ=s,s=i;n=r}s.nextZ=null,e*=2}while(t>1);return o}function xo(o,t,e,n,i){return o=(o-e)*i|0,t=(t-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Su(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function xc(o,t,e,n,i,s,r,a){return(i-r)*(t-a)>=(o-r)*(s-a)&&(o-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(s-a)>=(i-r)*(n-a)}function mi(o,t,e,n,i,s,r,a){return!(o===r&&t===a)&&xc(o,t,e,n,i,s,r,a)}function Mu(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!bu(o,t)&&(wi(o,t)&&wi(t,o)&&Tu(o,t)&&(Ct(o.prev,o,t.prev)||Ct(o,t.prev,t))||Vn(o,t)&&Ct(o.prev,o,o.next)>0&&Ct(t.prev,t,t.next)>0)}function Ct(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function Vn(o,t){return o.x===t.x&&o.y===t.y}function _c(o,t,e,n){let i=ms(Ct(o,t,e)),s=ms(Ct(o,t,n)),r=ms(Ct(e,n,o)),a=ms(Ct(e,n,t));return!!(i!==s&&r!==a||i===0&&ps(o,e,t)||s===0&&ps(o,n,t)||r===0&&ps(e,o,n)||a===0&&ps(e,t,n))}function ps(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function ms(o){return o>0?1:o<0?-1:0}function bu(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&_c(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function wi(o,t){return Ct(o.prev,o,o.next)<0?Ct(o,t,o.next)>=0&&Ct(o,o.prev,t)>=0:Ct(o,t,o.prev)<0||Ct(o,o.next,t)<0}function Tu(o,t){let e=o,n=!1,i=(o.x+t.x)/2,s=(o.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==o);return n}function vc(o,t){let e=_o(o.i,o.x,o.y),n=_o(t.i,t.x,t.y),i=o.next,s=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Ya(o,t,e,n){let i=_o(o,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ri(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function _o(o,t,e){return{i:o,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eu(o,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(o[r]-o[s])*(o[s+1]+o[r+1]),r=s;return i}var vo=class{static triangulate(t,e,n=2){return lu(t,e,n)}},Ee=class o{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return o.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Za(t),Ja(n,t);let r=t.length;e.forEach(Za);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Ja(n,e[c]);let a=vo.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Za(o){let t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Ja(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}var Je=class o extends Ft{constructor(t=new Se([new O(.5,.5),new O(-.5,.5),new O(-.5,-.5),new O(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];r(l)}this.setAttribute("position",new _t(i,3)),this.setAttribute("uv",new _t(s,2)),this.computeVertexNormals();function r(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,m=e.UVGenerator!==void 0?e.UVGenerator:Au,x,_=!1,S,b,T,M;if(y){x=y.getSpacedPoints(u),_=!0,f=!1;let B=y.isCatmullRomCurve3?y.closed:!1;S=y.computeFrenetFrames(u,B),b=new A,T=new A,M=new A}f||(v=0,p=0,d=0,g=0);let w=a.extractPoints(l),E=w.shape,C=w.holes;if(!Ee.isClockWise(E)){E=E.reverse();for(let B=0,k=C.length;B<k;B++){let V=C[B];Ee.isClockWise(V)&&(C[B]=V.reverse())}}function I(B){let V=10000000000000001e-36,W=B[0];for(let X=1;X<=B.length;X++){let lt=X%B.length,et=B[lt],Tt=et.x-W.x,Rt=et.y-W.y,Ot=Tt*Tt+Rt*Rt,ee=Math.max(Math.abs(et.x),Math.abs(et.y),Math.abs(W.x),Math.abs(W.y)),an=V*ee*ee;if(Ot<=an){B.splice(lt,1),X--;continue}W=et}}I(E),C.forEach(I);let L=C.length,U=E;for(let B=0;B<L;B++){let k=C[B];E=E.concat(k)}function q(B,k,V){return k||Et("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(k,V)}let $=E.length;function ht(B,k,V){let W,X,lt,et=B.x-k.x,Tt=B.y-k.y,Rt=V.x-B.x,Ot=V.y-B.y,ee=et*et+Tt*Tt,an=et*Ot-Tt*Rt;if(Math.abs(an)>Number.EPSILON){let ne=Math.sqrt(ee),Ma=Math.sqrt(Rt*Rt+Ot*Ot),ba=k.x-Tt/ne,Ta=k.y+et/ne,Nl=V.x-Ot/Ma,Dl=V.y+Rt/Ma,Ea=((Nl-ba)*Ot-(Dl-Ta)*Rt)/(et*Ot-Tt*Rt);W=ba+et*Ea-B.x,X=Ta+Tt*Ea-B.y;let Aa=W*W+X*X;if(Aa<=2)return new O(W,X);lt=Math.sqrt(Aa/2)}else{let ne=!1;et>Number.EPSILON?Rt>Number.EPSILON&&(ne=!0):et<-Number.EPSILON?Rt<-Number.EPSILON&&(ne=!0):Math.sign(Tt)===Math.sign(Ot)&&(ne=!0),ne?(W=-Tt,X=et,lt=Math.sqrt(ee)):(W=et,X=Tt,lt=Math.sqrt(ee/2))}return new O(W/lt,X/lt)}let it=[];for(let B=0,k=U.length,V=k-1,W=B+1;B<k;B++,V++,W++)V===k&&(V=0),W===k&&(W=0),it[B]=ht(U[B],U[V],U[W]);let st=[],rt,wt=it.concat();for(let B=0,k=L;B<k;B++){let V=C[B];rt=[];for(let W=0,X=V.length,lt=X-1,et=W+1;W<X;W++,lt++,et++)lt===X&&(lt=0),et===X&&(et=0),rt[W]=ht(V[W],V[lt],V[et]);st.push(rt),wt=wt.concat(rt)}let P;if(v===0)P=Ee.triangulateShape(U,C);else{let B=[],k=[];for(let V=0;V<v;V++){let W=V/v,X=p*Math.cos(W*Math.PI/2),lt=d*Math.sin(W*Math.PI/2)+g;for(let et=0,Tt=U.length;et<Tt;et++){let Rt=q(U[et],it[et],lt);G(Rt.x,Rt.y,-X),W===0&&B.push(Rt)}for(let et=0,Tt=L;et<Tt;et++){let Rt=C[et];rt=st[et];let Ot=[];for(let ee=0,an=Rt.length;ee<an;ee++){let ne=q(Rt[ee],rt[ee],lt);G(ne.x,ne.y,-X),W===0&&Ot.push(ne)}W===0&&k.push(Ot)}}P=Ee.triangulateShape(B,k)}let N=P.length,F=d+g;for(let B=0;B<$;B++){let k=f?q(E[B],wt[B],F):E[B];_?(T.copy(S.normals[0]).multiplyScalar(k.x),b.copy(S.binormals[0]).multiplyScalar(k.y),M.copy(x[0]).add(T).add(b),G(M.x,M.y,M.z)):G(k.x,k.y,0)}for(let B=1;B<=u;B++)for(let k=0;k<$;k++){let V=f?q(E[k],wt[k],F):E[k];_?(T.copy(S.normals[B]).multiplyScalar(V.x),b.copy(S.binormals[B]).multiplyScalar(V.y),M.copy(x[B]).add(T).add(b),G(M.x,M.y,M.z)):G(V.x,V.y,h/u*B)}for(let B=v-1;B>=0;B--){let k=B/v,V=p*Math.cos(k*Math.PI/2),W=d*Math.sin(k*Math.PI/2)+g;for(let X=0,lt=U.length;X<lt;X++){let et=q(U[X],it[X],W);G(et.x,et.y,h+V)}for(let X=0,lt=C.length;X<lt;X++){let et=C[X];rt=st[X];for(let Tt=0,Rt=et.length;Tt<Rt;Tt++){let Ot=q(et[Tt],rt[Tt],W);_?G(Ot.x,Ot.y+x[u-1].y,x[u-1].x+V):G(Ot.x,Ot.y,h+V)}}}z(),D();function z(){let B=i.length/3;if(f){let k=0,V=$*k;for(let W=0;W<N;W++){let X=P[W];Y(X[2]+V,X[1]+V,X[0]+V)}k=u+v*2,V=$*k;for(let W=0;W<N;W++){let X=P[W];Y(X[0]+V,X[1]+V,X[2]+V)}}else{for(let k=0;k<N;k++){let V=P[k];Y(V[2],V[1],V[0])}for(let k=0;k<N;k++){let V=P[k];Y(V[0]+$*u,V[1]+$*u,V[2]+$*u)}}n.addGroup(B,i.length/3-B,0)}function D(){let B=i.length/3,k=0;Z(U,k),k+=U.length;for(let V=0,W=C.length;V<W;V++){let X=C[V];Z(X,k),k+=X.length}n.addGroup(B,i.length/3-B,1)}function Z(B,k){let V=B.length;for(;--V>=0;){let W=V,X=V-1;X<0&&(X=B.length-1);for(let lt=0,et=u+v*2;lt<et;lt++){let Tt=$*lt,Rt=$*(lt+1),Ot=k+W+Tt,ee=k+X+Tt,an=k+X+Rt,ne=k+W+Rt;ot(Ot,ee,an,ne)}}}function G(B,k,V){c.push(B),c.push(k),c.push(V)}function Y(B,k,V){K(B),K(k),K(V);let W=i.length/3,X=m.generateTopUV(n,i,W-3,W-2,W-1);ft(X[0]),ft(X[1]),ft(X[2])}function ot(B,k,V,W){K(B),K(k),K(W),K(k),K(V),K(W);let X=i.length/3,lt=m.generateSideWallUV(n,i,X-6,X-3,X-2,X-1);ft(lt[0]),ft(lt[1]),ft(lt[3]),ft(lt[1]),ft(lt[2]),ft(lt[3])}function K(B){i.push(c[B*3+0]),i.push(c[B*3+1]),i.push(c[B*3+2])}function ft(B){s.push(B.x),s.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wu(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new go[i.type]().fromJSON(i)),new o(n,t.options)}},Au={generateTopUV:function(o,t,e,n,i){let s=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],u=t[i*3+1];return[new O(s,r),new O(a,c),new O(l,u)]},generateSideWallUV:function(o,t,e,n,i,s){let r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[i*3],p=t[i*3+1],d=t[i*3+2],g=t[s*3],v=t[s*3+1],y=t[s*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new O(r,1-c),new O(l,1-h),new O(f,1-d),new O(g,1-y)]:[new O(a,1-c),new O(u,1-h),new O(p,1-d),new O(v,1-y)]}};function wu(o,t,e){if(e.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){let s=o[n];e.shapes.push(s.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ci=class o extends Cs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new o(t.radius,t.detail)}};var Be=class o extends Ft{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,f=e/c,p=[],d=[],g=[],v=[];for(let y=0;y<u;y++){let m=y*f-r;for(let x=0;x<l;x++){let _=x*h-s;d.push(_,-m,0),g.push(0,0,1),v.push(x/a),v.push(1-y/c)}}for(let y=0;y<c;y++)for(let m=0;m<a;m++){let x=m+l*y,_=m+l*(y+1),S=m+1+l*(y+1),b=m+1+l*y;p.push(x,_,b),p.push(_,S,b)}this.setIndex(p),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(g,3)),this.setAttribute("uv",new _t(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.widthSegments,t.heightSegments)}};var Pi=class o extends Ft{constructor(t=new Se([new O(0,.5),new O(-.5,-.5),new O(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new _t(i,3)),this.setAttribute("normal",new _t(s,3)),this.setAttribute("uv",new _t(r,2));function l(u){let h=i.length/3,f=u.extractPoints(e),p=f.shape,d=f.holes;Ee.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,y=d.length;v<y;v++){let m=d[v];Ee.isClockWise(m)===!0&&(d[v]=m.reverse())}let g=Ee.triangulateShape(p,d);for(let v=0,y=d.length;v<y;v++){let m=d[v];p=p.concat(m)}for(let v=0,y=p.length;v<y;v++){let m=p[v];i.push(m.x,m.y,0),s.push(0,0,1),r.push(m.x,m.y)}for(let v=0,y=g.length;v<y;v++){let m=g[v],x=m[0]+h,_=m[1]+h,S=m[2]+h;n.push(x,_,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ru(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new o(n,t.curveSegments)}};function Ru(o,t){if(t.shapes=[],Array.isArray(o))for(let e=0,n=o.length;e<n;e++){let i=o[e];t.shapes.push(i.uuid)}else t.shapes.push(o.uuid);return t}var Ii=class o extends Ft{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(r+a,Math.PI),l=0,u=[],h=new A,f=new A,p=[],d=[],g=[],v=[];for(let y=0;y<=n;y++){let m=[],x=y/n,_=r+x*a,S=t*Math.cos(_),b=Math.sqrt(t*t-S*S),T=0;y===0&&r===0?T=.5/e:y===n&&c===Math.PI&&(T=-.5/e);for(let M=0;M<=e;M++){let w=M/e,E=i+w*s;h.x=-b*Math.cos(E),h.y=S,h.z=b*Math.sin(E),d.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),v.push(w+T,1-x),m.push(l++)}u.push(m)}for(let y=0;y<n;y++)for(let m=0;m<e;m++){let x=u[y][m+1],_=u[y][m],S=u[y+1][m],b=u[y+1][m+1];(y!==0||r>0)&&p.push(x,_,b),(y!==n-1||c<Math.PI)&&p.push(_,S,b)}this.setIndex(p),this.setAttribute("position",new _t(d,3)),this.setAttribute("normal",new _t(g,3)),this.setAttribute("uv",new _t(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function No(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];if($a(i))i.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if($a(i[0])){let s=[];for(let r=0,a=i.length;r<a;r++)s[r]=i[r].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Kt(o){let t={};for(let e=0;e<o.length;e++){let n=No(o[e]);for(let i in n)t[i]=n[i]}return t}function $a(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Cu(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Li=class extends qe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=No(t.uniforms),this.uniformsGroups=Cu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new mt().setHex(i.value);break;case"v2":this.uniforms[n].value=new O().fromArray(i.value);break;case"v3":this.uniforms[n].value=new A().fromArray(i.value);break;case"v4":this.uniforms[n].value=new hn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new j().fromArray(i.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}};var mn=class extends qe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function In(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Jr(o){return o!==void 0&&o.inTangents!==void 0&&o.outTangents!==void 0}var $e=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fs=class extends $e{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ao,endingEnd:ao}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case co:s=t,a=2*e-n;break;case lo:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case co:r=t,c=2*n-e;break;case lo:r=1,c=n+i[1]-i[0];break;default:r=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,d=(n-e)/(i-e),g=d*d,v=g*d,y=-f*v+2*f*g-f*d,m=(1+f)*v+(-1.5-2*f)*g+(-.5+f)*d+1,x=(-1-p)*v+(1.5+p)*g+.5*d,_=p*v-p*g;for(let S=0;S!==a;++S)s[S]=y*r[u+S]+m*r[l+S]+x*r[c+S]+_*r[h+S];return s}},Bs=class extends $e{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)s[f]=r[l+f]*h+r[c+f]*u;return s}},Os=class extends $e{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},zs=class extends $e{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let d=(n-e)/(i-e),g=1-d;for(let v=0;v!==a;++v)s[v]=r[l+v]*g+r[c+v]*d;return s}let f=a*2,p=t-1;for(let d=0;d!==a;++d){let g=r[l+d],v=r[c+d],y=p*f+d*2,m=h[y],x=h[y+1],_=t*f+d*2,S=u[_],b=u[_+1],T=Nu(n,e,m,S,i);s[d]=yc(T,g,x,b,v)}return s}};function yc(o,t,e,n,i){let s=1-o;return s*s*s*t+3*s*s*o*e+3*s*o*o*n+o*o*o*i}function Lu(o,t,e,n,i){let s=1-o;return 3*s*s*(e-t)+6*s*o*(n-e)+3*o*o*(i-n)}function Nu(o,t,e,n,i){let s=(o-t)/(i-t);for(let r=0;r<8;r++){let a=yc(s,t,e,n,i)-o;if(Math.abs(a)<1e-10)break;let c=Lu(s,t,e,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var ae=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=In(e,this.TimeBufferType),this.values=In(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:In(t.times,Array),values:In(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Jr(t.settings)&&(n.settings={inTangents:In(t.settings.inTangents,Array),outTangents:In(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Os(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bs(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fs(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new zs(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _i:e=this.InterpolantFactoryMethodDiscrete;break;case Ss:e=this.InterpolantFactoryMethodLinear;break;case xs:e=this.InterpolantFactoryMethodSmooth;break;case oo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _i;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return xs;case this.InterpolantFactoryMethodBezier:return oo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Jr(this.settings)&&(Ka(this.settings.inTangents,t),Ka(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Et("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Et("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Et("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){Et("KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(i!==void 0&&Fl(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){Et("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xs,s=t.length-1,r=1;for(let a=1;a<s;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let d=0;d!==n;++d){let g=e[h+d];if(g!==e[f+d]||g!==e[p+d]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let h=a*n,f=r*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Jr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ka(o,t){for(let e=0,n=o.length;e!==n;e+=2)o[e]*=t}ae.prototype.ValueTypeName="";ae.prototype.TimeBufferType=Float32Array;ae.prototype.ValueBufferType=Float32Array;ae.prototype.DefaultInterpolation=Ss;var Ke=class extends ae{constructor(t,e,n){super(t,e,n)}};Ke.prototype.ValueTypeName="bool";Ke.prototype.ValueBufferType=Array;Ke.prototype.DefaultInterpolation=_i;Ke.prototype.InterpolantFactoryMethodLinear=void 0;Ke.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends ae{constructor(t,e,n,i){super(t,e,n,i)}};ks.prototype.ValueTypeName="color";var Vs=class extends ae{constructor(t,e,n,i){super(t,e,n,i)}};Vs.prototype.ValueTypeName="number";var Hs=class extends $e{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)re.slerpFlat(s,0,r,l-a,r,l,c);return s}},Ni=class extends ae{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Hs(this.times,this.values,this.getValueSize(),t)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Qe=class extends ae{constructor(t,e,n){super(t,e,n)}};Qe.prototype.ValueTypeName="string";Qe.prototype.ValueBufferType=Array;Qe.prototype.DefaultInterpolation=_i;Qe.prototype.InterpolantFactoryMethodLinear=void 0;Qe.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends ae{constructor(t,e,n,i){super(t,e,n,i)}};Gs.prototype.ValueTypeName="vector";var Ws=class{constructor(t,e,n){let i=this,s=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],d=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sc=new Ws,Xs=class{constructor(t){this.manager=t!==void 0?t:Sc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do="\\[\\]\\.:\\/",Du=new RegExp("["+Do+"]","g"),Uo="[^"+Do+"]",Uu="[^"+Do.replace("\\.","")+"]",Fu=/((?:WC+[\/:])*)/.source.replace("WC",Uo),Bu=/(WCOD+)?/.source.replace("WCOD",Uu),Ou=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uo),zu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uo),ku=new RegExp("^"+Fu+Bu+Ou+zu+"$"),Vu=["material","materials","bones","map"],yo=class{constructor(t,e,n){let i=n||bt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},bt=class o{constructor(t,e,n){this.path=e,this.parsedPath=n||o.parseTrackName(e),this.node=o.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new o.Composite(t,e,n):new o(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Du,"")}static parseTrackName(t){let e=ku.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Vu.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=o.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Et("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=yo;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tp=new Float32Array(1);var ko=class ko{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};ko.prototype.isMatrix2=!0;var So=ko;var Qa=new A,gs=new A,Ln=new A,Nn=new A,$r=new A,Hu=new A,Gu=new A,$t=class{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qa.subVectors(t,this.start),gs.subVectors(this.end,this.start);let n=gs.dot(gs);if(n===0)return 0;let s=gs.dot(Qa)/n;return e&&(s=Q(s,0,1)),s}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Hu,n=Gu){let i=10000000000000001e-32,s,r,a=this.start,c=t.start,l=this.end,u=t.end;Ln.subVectors(l,a),Nn.subVectors(u,c),$r.subVectors(a,c);let h=Ln.dot(Ln),f=Nn.dot(Nn),p=Nn.dot($r);if(h<=i&&f<=i)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(h<=i)s=0,r=p/f,r=Q(r,0,1);else{let d=Ln.dot($r);if(f<=i)r=0,s=Q(-d/h,0,1);else{let g=Ln.dot(Nn),v=h*f-g*g;v!==0?s=Q((g*p-d*f)/v,0,1):s=0,r=(g*s+p)/f,r<0?(r=0,s=Q(-d/h,0,1)):r>1&&(r=1,s=Q((g-d)/h,0,1))}}return e.copy(a).addScaledVector(Ln,s),n.copy(c).addScaledVector(Nn,r),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ju=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$u=`#ifdef USE_AOMAP
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
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,th=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ih=`#ifdef USE_IRIDESCENCE
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
#endif`,sh=`#ifdef USE_BUMPMAP
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dh=`#define PI 3.141592653589793
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
} // validated`,ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mh=`vec3 transformedNormal = objectNormal;
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
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mh=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ih=`#ifdef USE_GRADIENTMAP
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
}`,Lh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vh=`PhysicalMaterial material;
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
#endif`,Hh=`uniform sampler2D dfgLUT;
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
}`,Gh=`
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$h=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tf=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
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
#endif`,cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pf=`float getShadowMask() {
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
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
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
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qf=`uniform sampler2D t2D;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`#include <common>
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
}`,Qf=`#if DEPTH_PACKING == 3200
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
}`,jf=`#define DISTANCE
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
}`,td=`#define DISTANCE
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`uniform float scale;
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
}`,sd=`uniform vec3 diffuse;
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
}`,rd=`#include <common>
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
}`,od=`uniform vec3 diffuse;
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
}`,ad=`#define LAMBERT
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
}`,cd=`#define LAMBERT
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
}`,ld=`#define MATCAP
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
}`,ud=`#define MATCAP
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
}`,hd=`#define NORMAL
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
}`,fd=`#define NORMAL
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
}`,dd=`#define PHONG
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
}`,pd=`#define PHONG
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
}`,md=`#define STANDARD
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
}`,gd=`#define STANDARD
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
}`,xd=`#define TOON
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
}`,_d=`#define TOON
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
}`,vd=`uniform float size;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Sd=`#include <common>
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
}`,Md=`uniform vec3 color;
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
}`,bd=`uniform float rotation;
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
}`,Td=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Zu,alphatest_pars_fragment:Ju,aomap_fragment:$u,aomap_pars_fragment:Ku,batching_pars_vertex:Qu,batching_vertex:ju,begin_vertex:th,beginnormal_vertex:eh,bsdfs:nh,iridescence_fragment:ih,bumpmap_pars_fragment:sh,clipping_planes_fragment:rh,clipping_planes_pars_fragment:oh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:ch,color_fragment:lh,color_pars_fragment:uh,color_pars_vertex:hh,color_vertex:fh,common:dh,cube_uv_reflection_fragment:ph,defaultnormal_vertex:mh,displacementmap_pars_vertex:gh,displacementmap_vertex:xh,emissivemap_fragment:_h,emissivemap_pars_fragment:vh,colorspace_fragment:yh,colorspace_pars_fragment:Sh,envmap_fragment:Mh,envmap_common_pars_fragment:bh,envmap_pars_fragment:Th,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:Fh,envmap_vertex:Ah,fog_vertex:wh,fog_pars_vertex:Rh,fog_fragment:Ch,fog_pars_fragment:Ph,gradientmap_pars_fragment:Ih,lightmap_pars_fragment:Lh,lights_lambert_fragment:Nh,lights_lambert_pars_fragment:Dh,lights_pars_begin:Uh,lights_toon_fragment:Bh,lights_toon_pars_fragment:Oh,lights_phong_fragment:zh,lights_phong_pars_fragment:kh,lights_physical_fragment:Vh,lights_physical_pars_fragment:Hh,lights_fragment_begin:Gh,lights_fragment_maps:Wh,lights_fragment_end:Xh,lightprobes_pars_fragment:qh,logdepthbuf_fragment:Yh,logdepthbuf_pars_fragment:Zh,logdepthbuf_pars_vertex:Jh,logdepthbuf_vertex:$h,map_fragment:Kh,map_pars_fragment:Qh,map_particle_fragment:jh,map_particle_pars_fragment:tf,metalnessmap_fragment:ef,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:rf,morphnormal_vertex:of,morphtarget_pars_vertex:af,morphtarget_vertex:cf,normal_fragment_begin:lf,normal_fragment_maps:uf,normal_pars_fragment:hf,normal_pars_vertex:ff,normal_vertex:df,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:xf,iridescence_pars_fragment:_f,opaque_fragment:vf,packing:yf,premultiplied_alpha_fragment:Sf,project_vertex:Mf,dithering_fragment:bf,dithering_pars_fragment:Tf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:Af,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:If,skinning_pars_vertex:Lf,skinning_vertex:Nf,skinnormal_vertex:Df,specularmap_fragment:Uf,specularmap_pars_fragment:Ff,tonemapping_fragment:Bf,tonemapping_pars_fragment:Of,transmission_fragment:zf,transmission_pars_fragment:kf,uv_pars_fragment:Vf,uv_pars_vertex:Hf,uv_vertex:Gf,worldpos_vertex:Wf,background_vert:Xf,background_frag:qf,backgroundCube_vert:Yf,backgroundCube_frag:Zf,cube_vert:Jf,cube_frag:$f,depth_vert:Kf,depth_frag:Qf,distance_vert:jf,distance_frag:td,equirect_vert:ed,equirect_frag:nd,linedashed_vert:id,linedashed_frag:sd,meshbasic_vert:rd,meshbasic_frag:od,meshlambert_vert:ad,meshlambert_frag:cd,meshmatcap_vert:ld,meshmatcap_frag:ud,meshnormal_vert:hd,meshnormal_frag:fd,meshphong_vert:dd,meshphong_frag:pd,meshphysical_vert:md,meshphysical_frag:gd,meshtoon_vert:xd,meshtoon_frag:_d,points_vert:vd,points_frag:yd,shadow_vert:Sd,shadow_frag:Md,sprite_vert:bd,sprite_frag:Td},H={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j},alphaMap:{value:null},alphaMapTransform:{value:new j},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j}},envmap:{envMap:{value:null},envMapRotation:{value:new j},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j},normalScale:{value:new O(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j},alphaTest:{value:0},uvTransform:{value:new j}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new O(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j},alphaMap:{value:null},alphaMapTransform:{value:new j},alphaTest:{value:0}}},Mc={basic:{uniforms:Kt([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Kt([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Kt([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Kt([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Kt([H.common,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Kt([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Kt([H.points,H.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Kt([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Kt([H.common,H.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Kt([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Kt([H.sprite,H.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new j},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Kt([H.common,H.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Kt([H.lights,H.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Mc.physical={uniforms:Kt([Mc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j},clearcoatNormalScale:{value:new O(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j},transmissionSamplerSize:{value:new O},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j},anisotropyVector:{value:new O},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Ed=new j;Ed.set(-1,0,0,0,1,0,0,0,1);var nv={[bo]:"LINEAR_TONE_MAPPING",[To]:"REINHARD_TONE_MAPPING",[Eo]:"CINEON_TONE_MAPPING",[Ao]:"ACES_FILMIC_TONE_MAPPING",[Ro]:"AGX_TONE_MAPPING",[Co]:"NEUTRAL_TONE_MAPPING",[wo]:"CUSTOM_TONE_MAPPING"};var iv=new Float32Array(16),sv=new Float32Array(9),rv=new Float32Array(4);var ov={[bo]:"Linear",[To]:"Reinhard",[Eo]:"Cineon",[Ao]:"ACESFilmic",[Ro]:"AgX",[Co]:"Neutral",[wo]:"Custom"};var av={[ja]:"SHADOWMAP_TYPE_PCF",[tc]:"SHADOWMAP_TYPE_VSM"};var cv={[ac]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};var lv={[Io]:"ENVMAP_MODE_REFRACTION"};var uv={[Mo]:"ENVMAP_BLENDING_MULTIPLY",[rc]:"ENVMAP_BLENDING_MIX",[oc]:"ENVMAP_BLENDING_ADD"};var Ad=new j;Ad.set(-1,0,0,0,1,0,0,0,1);var hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var J={cal:"#f3eee4",barrado:"#6e5d4b",argila:"#ddc8aa",piso:"#cdb89a",pisoT:"#c9b394",teto:"#f4efe6",telha:"#d39472",madeira:"#8b5a32",azul:"#2c5a86",grafite:"#3b3a38",aco:"#9ba3a5",cobogo:"#c98a62",vidro:"#b9d3dc",solar:"#203650",caixa:"#d9d6cf",grama:"#a9b58a",terra:"#b9a888",calcada:"#d8d0c2",rua:"#6f6b66",vizinho:"#e6dfd2",vizTelha:"#b8a690",agua:"#5f9fb3",folha:"#6f8a4e",ipe:"#e3b627",tronco:"#6a5440",poche:"#3b332a",tinta:"#2a241d"},wd=o=>new mt(o),Wo=new ve(new A(-1,0,0),1e4),Xo=new ve(new A(0,-1,0),1e4),Tc=[Wo,Xo],Ho={r:59/255,g:51/255,b:42/255},Rd=[],Cd=.72,Ec=(o,t,e)=>{let n=new Ye(new Uint8Array([o,t,e,255]),1,1);return n.needsUpdate=!0,n},bc=Ec(255,255,255),Pd=Ec(128,128,255),Go={on:{value:0}};for(let o of["plaster","tiles","wood"])Go[o]={map:{value:bc},nor:{value:Pd},arm:{value:bc}};var Id=`
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
  diffuseColor.rgb *= mix(vec3(1.0), mix(vec3(1.0), trC, tK), trM);`;function Pt(o={},t=!0,e=null){let n=new mn({roughness:.9,metalness:0,side:ce,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,...o});return n.clippingPlanes=Tc,n.clipShadows=!1,n.shadowSide=ce,n.onBeforeCompile=i=>{if(i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;${e?`
varying vec3 vWN;`:""}`).replace("#include <begin_vertex>",`#include <begin_vertex>
  vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;${e?`
  vWN = normalize(mat3(modelMatrix) * objectNormal);`:""}`),e){let s=Go[e.set];Object.assign(i.uniforms,{tMap:s.map,tNor:s.nor,tArm:s.arm,tOn:Go.on,tScale:{value:e.scale},tK:{value:e.k??1},tKn:{value:e.kn??1},tTop:{value:e.top?1:0}}),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWN;
uniform sampler2D tMap, tNor, tArm;
uniform float tOn, tScale, tK, tKn, tTop;`).replace("#include <color_fragment>",`#include <color_fragment>${Id}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  roughnessFactor = clamp(roughnessFactor * trArm.g, .04, 1.0);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  normal = normalize(mix(normal, (viewMatrix * vec4(trN, 0.0)).xyz, step(.001, trM)));`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
  reflectedLight.indirectDiffuse *= mix(1.0, trArm.r, .8);`)}i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
  { vec3 q = step(vec3(.24, -.3, vWP.y < 2.95 ? 7.64 : 5.01), vWP) * step(vWP, vec3(8.26, 9.0, vWP.y < 2.95 ? 19.76 : 18.26));
    reflectedLight.indirectDiffuse *= mix(1.0, ${Cd.toFixed(2)}, q.x * q.y * q.z); }`),t&&(i.fragmentShader=i.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  if (!gl_FrontFacing) gl_FragColor = vec4(${Ho.r.toFixed(4)}, ${Ho.g.toFixed(4)}, ${Ho.b.toFixed(4)}, 1.0);`))},n.customProgramCacheKey=()=>(t?"solid-p":"solid-n")+(e?"-tri":""),Rd.push(n),n}function Yt(o,t){let e=o.index?o.toNonIndexed():o;e.computeVertexNormals();let n=e.attributes.position,i=e.attributes.normal,s=new Float32Array(n.count*3),r={};for(let a=0;a<n.count;a+=3){let c=i.getX(a)+i.getX(a+1)+i.getX(a+2),l=i.getY(a)+i.getY(a+1)+i.getY(a+2),u=i.getZ(a)+i.getZ(a+1)+i.getZ(a+2),h=Math.hypot(c,l,u)||1,f=(n.getX(a)+n.getX(a+1)+n.getX(a+2))/3,p=(n.getY(a)+n.getY(a+1)+n.getY(a+2))/3,d=(n.getZ(a)+n.getZ(a+1)+n.getZ(a+2))/3,g=t(c/h,l/h,u/h,f,p,d),v=r[g]||(r[g]=wd(g));for(let y=0;y<3;y++)s[(a+y)*3]=v.r,s[(a+y)*3+1]=v.g,s[(a+y)*3+2]=v.b}return e.setAttribute("color",new Lt(s,3)),e}var Js={value:0};function Ac(o,t,e,n,i=1,s=7){let r=s,a=()=>(r=r*16807%2147483647)/2147483647,c=new Float32Array(o*t);for(let[l,u]of e){let h=l,f=Math.max(1,Math.round(l/i)),p=new Float32Array(h*f).map(a);for(let d=0;d<t;d++)for(let g=0;g<o;g++){let v=g/o*h,y=d/t*f,m=Math.floor(v),x=Math.floor(y),_=v-m,S=y-x,b=_*_*(3-2*_),T=S*S*(3-2*S),M=(m+1)%h,w=(x+1)%f,E=p[x*h+m],C=p[x*h+M],R=p[w*h+m],I=p[w*h+M];c[d*o+g]+=u*(E+(C-E)*b+(R-E)*T+(E-C-R+I)*b*T)}}return wc(c,o,t,n)}function wc(o,t,e,n){let i=new Uint8Array(t*e*4);for(let r=0;r<e;r++)for(let a=0;a<t;a++){let c=(o[r*t+(a+1)%t]-o[r*t+(a-1+t)%t])*n,l=(o[(r+1)%e*t+a]-o[(r-1+e)%e*t+a])*n,u=Math.hypot(c,l,1),h=(r*t+a)*4;i[h]=(-c/u*.5+.5)*255,i[h+1]=(-l/u*.5+.5)*255,i[h+2]=(1/u*.5+.5)*255,i[h+3]=255}let s=new Ye(i,t,e,Wn);return s.wrapS=s.wrapT=Fn,s.magFilter=Gn,s.minFilter=Zs,s.generateMipmaps=!0,s.anisotropy=4,s.needsUpdate=!0,s}var Ld=()=>{let o=Ac(256,256,[[4,.55],[9,.25],[24,.12],[64,.08]],9);return o.repeat.set(1/1.6,1/1.6),o},Nd=()=>{let o=Ac(64,256,[[16,.5],[48,.3],[64,.2]],6,12,11);return o.repeat.set(1,1),o};function Dd(){let e=new Float32Array(4096);for(let i=0;i<64;i++)for(let s=0;s<64;s++){let r=i/64;e[i*64+s]=Math.pow(r,1.6)*.9+.05*Math.cos(s/64*Math.PI*2)}let n=wc(e,64,64,2.2);return n.repeat.set(2.5,4),n}var Ud=typeof document<"u";function Ui(o,t,e,n,i){if(!Ud)return null;let s=document.createElement("canvas");s.width=o,s.height=t,e(s.getContext("2d"),o,t);let r=new yi(s);return r.wrapS=r.wrapT=Fn,r.repeat.set(n,i),r.anisotropy=4,r.colorSpace=Xt,r}var Fd=()=>Ui(64,64,(o,t,e)=>{o.fillStyle="#fff",o.fillRect(0,0,t,e);let n=o.createLinearGradient(0,0,0,e);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(.7,"rgba(0,0,0,.05)"),n.addColorStop(1,"rgba(0,0,0,.2)"),o.fillStyle=n,o.fillRect(0,0,t,e),o.fillStyle="rgba(0,0,0,.18)",o.fillRect(0,0,t,2)},2.5,4),Bd=()=>Ui(64,64,(o,t,e)=>{o.clearRect(0,0,t,e),o.strokeStyle="#fff",o.lineWidth=14;for(let n=-1;n<=1;n++)o.beginPath(),o.moveTo(n*t,0),o.lineTo(n*t+t,e),o.stroke(),o.beginPath(),o.moveTo(n*t+t,0),o.lineTo(n*t,e),o.stroke()},1,1),Od=()=>Ui(32,32,(o,t,e)=>{o.clearRect(0,0,t,e),o.fillStyle="#fff",o.fillRect(0,0,9,e),o.fillRect(0,0,t,4)},1,1),zd=()=>Ui(64,64,(o,t,e)=>{o.fillStyle="#fff",o.fillRect(0,0,t,e),o.fillStyle="#9fb2c8",o.fillRect(0,0,t,2),o.fillRect(0,0,2,e)},5,6),kd=()=>Ui(16,32,(o,t,e)=>{o.fillStyle="#fff",o.fillRect(0,0,t,e),o.fillStyle="rgba(0,0,0,.45)",o.fillRect(0,e-9,t,9)},1,7);function Vd(){let o=Pt({color:J.agua,roughness:.06,metalness:.05,envMapIntensity:1.4},!1),t=o.onBeforeCompile;return o.onBeforeCompile=(e,n)=>{t(e,n),e.uniforms.uTime=Js,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  { vec2 p = vWP.xz * 3.2; float t = uTime;
    vec2 g = vec2(cos(p.x * 1.7 + t * 1.3) + .6 * cos(p.x * 3.1 - p.y * 2.3 + t * 1.9) + .35 * cos(p.y * 5.3 + t * 2.6),
                  cos(p.y * 1.9 - t * 1.1) + .6 * cos(p.y * 2.9 + p.x * 2.1 - t * 1.7) + .35 * cos(p.x * 4.7 - t * 2.3)) * .05;
    normal = normalize(normal + (viewMatrix * vec4(g.x, 0.0, g.y, 0.0)).xyz); }`)},o.customProgramCacheKey=()=>"water",o}function qo(o){let t=o.onBeforeCompile;return o.onBeforeCompile=(e,n)=>{t(e,n),e.uniforms.uTime=Js,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
  { float k = smoothstep(1.0, 6.5, transformed.y);
    transformed.x += k * .06 * sin(uTime * 1.4 + transformed.z * .9 + transformed.y * .6);
    transformed.z += k * .045 * cos(uTime * 1.1 + transformed.x * .8); }`)},o.customProgramCacheKey=()=>"solid-wind",o}function Rc(){let o=Fd(),t=Bd(),e=Od(),n=Ld(),i=Nd(),s={built:Pt({vertexColors:!0,normalMap:n,normalScale:new O(.35,.35)},!0,{set:"plaster",scale:2.4,k:.4,kn:.45}),roof:Pt({vertexColors:!0,map:o,normalMap:Dd(),normalScale:new O(.6,.6),roughness:.8},!0,{set:"tiles",scale:3.4,k:.85,kn:1,top:!0}),wood:Pt({color:J.madeira,roughness:.7,normalMap:i,normalScale:new O(.4,.4)},!0,{set:"wood",scale:1.4,kn:.6}),louver:Pt({color:J.madeira,roughness:.75,map:kd()}),sash:Pt({color:J.azul,roughness:.6}),steel:Pt({color:J.grafite,roughness:.5,metalness:.3}),cobogo:Pt({color:J.cobogo,roughness:.95}),mux:Pt({color:J.madeira,roughness:.8,map:t,alphaTest:.45},!1),grate:Pt({color:J.aco,roughness:.45,metalness:.5,map:e,alphaTest:.5},!1),rail:Pt({color:J.madeira,roughness:.75,normalMap:i,normalScale:new O(.3,.3)},!0,{set:"wood",scale:1.4,kn:.4}),tank:Pt({color:J.caixa,roughness:.6}),movel:Pt({vertexColors:!0,roughness:.65},!0,{set:"wood",scale:1.1,k:.8,kn:.45}),tecido:Pt({vertexColors:!0,roughness:1}),liso:Pt({vertexColors:!0,roughness:.3,metalness:.05}),solar:Pt({color:J.solar,roughness:.25,metalness:.4,map:zd()}),site:Pt({vertexColors:!0,roughness:1}),ground:new mn({vertexColors:!0,roughness:1}),hipRoof:Pt({vertexColors:!0,roughness:1},!1),leaf:Pt({color:J.folha,roughness:1,flatShading:!0}),bark:Pt({color:J.tronco,roughness:1}),water:Vd(),glass:new mn({color:J.vidro,roughness:.04,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,side:ce,envMapIntensity:1.6}),edge:new On({color:J.tinta,transparent:!0,opacity:.28}),ghost:new On({color:J.tinta,transparent:!0,opacity:.1})};for(let r of["glass","edge","ghost"])s[r].clippingPlanes=Tc;return t&&(t.repeat.set(1/.09,1/.09),t.colorSpace=Xn),e&&(e.repeat.set(1/.045,1/.045),e.colorSpace=Xn),s}var Zo=[0,3.06,6.12],je=o=>9+(o-7.4)*.3,gn=o=>je(o)+.26,be=o=>12-(o-11.6)*.3,$s=o=>be(o)+.26,Ks=8.6,Zt=(o,t,e,n,i=.7)=>e==null?[[o,t,"glass",i]]:[[o,t,"glass",i],[e,n,"band",.65]],It=18.5,Me=20,Hd=o=>[[7.4,je(7.4)+o],[12.4,je(12.4)+o],[12.4,be(12.4)+o],[It,be(It)+o],[It,3.45]],Cc=[{axis:"x",z0:7.4,z1:7.65,a0:.25,a1:8.5,out:-1,top:[[.25,2.9],[8.5,2.9]],open:[{id:"PCZ",room:"cozinha",a0:.6,a1:2.8,v0:0,v1:2.65,leaves:2,parts:Zt(0,2.2,2.25,2.65)},{id:"PT1",room:"copa",a0:3.6,a1:4.6,v0:0,v1:2.55,leaves:1,parts:[[0,1,"panel"],[1,2.1,"glass",.6],[2.15,2.55,"band",.65]]},{id:"PCO",room:"copa",a0:5.05,a1:7.95,v0:0,v1:2.65,leaves:4,parts:Zt(0,2.2,2.25,2.65)}]},{axis:"x",z0:5,z1:5.25,a0:.25,a1:8.5,out:-1,b:3.06,top:[[.25,8.33],[8.5,8.33]],open:[...[.625,2.575,4.525,6.475].map(o=>({id:"JSA",room:"sala",a0:o,a1:o+1.4,v0:3.06,v1:5.65,leaves:2,mux:!0,parts:Zt(3.06,5.26,5.3,5.65)})),...[.625,2.575,4.525,6.475].map(o=>({id:"JAS",room:"sala",a0:o,a1:o+1.4,v0:6.4,v1:7.8,leaves:1,parts:Zt(6.4,7.8)}))]},{axis:"x",z0:It-.25,z1:It,a0:.25,a1:8.5,out:1,b:3.06,top:[[.25,be(It)+.07],[8.5,be(It)+.07]],open:[{id:"JRV",room:"rev",a0:.8,a1:2.4,v0:4.16,v1:5.75,leaves:2,parts:Zt(4.16,5.36,5.4,5.75)},{id:"JBE",room:"bsuite",a0:3.35,a1:4.35,v0:4.66,v1:5.36,leaves:1,parts:Zt(4.66,5.36)},{id:"JSU",room:"suite",a0:5.35,a1:7.75,v0:4.16,v1:5.75,leaves:4,parts:Zt(4.16,5.36,5.4,5.75)},{id:"peitoril",room:"q1",a0:1.2,a1:3.2,v0:6.32,v1:6.82,parts:[[6.32,6.82,"wood"]]},{id:"JQ1",room:"q1",a0:1.2,a1:3.2,v0:7.12,v1:8.7,leaves:2,parts:Zt(7.12,8.32,8.36,8.7)},{id:"peitoril",room:"q2",a0:5.3,a1:7.3,v0:6.32,v1:6.82,parts:[[6.32,6.82,"wood"]]},{id:"JQ2",room:"q2",a0:5.3,a1:7.3,v0:7.12,v1:8.7,leaves:2,parts:Zt(7.12,8.32,8.36,8.7)}]},{axis:"x",z0:Me-.25,z1:Me,a0:.25,a1:8.5,out:1,top:[[.25,3.45],[8.5,3.45]],open:[]},{axis:"z",x0:0,x1:.25,a0:5,a1:Me,out:-1,top:[[5,gn(5)+.35],[12.4,gn(12.4)+.35],[12.4,$s(12.4)+.35],[19.2,$s(19.2)+.35],[19.2,3.45],[Me,3.45]],open:[]},{axis:"z",x0:8.25,x1:8.5,a0:7.4,a1:Me-.25,out:1,top:[...Hd(.05),[Me-.25,3.45]],open:[{id:"JTL",room:"copa",a0:8.4,a1:10.2,v0:.9,v1:2.85,leaves:2,parts:Zt(.9,2.4,2.45,2.85)},{id:"PJE",room:"estarT",a0:15.8,a1:17.55,v0:0,v1:2.65,leaves:2,parts:Zt(0,2.2,2.25,2.65)},{id:"JBH",room:"bhosp",a0:18.3,a1:19.3,v0:1.6,v1:2.2,leaves:1,parts:Zt(1.6,2.2)},{id:"JSL",room:"sala",a0:9,a1:9.8,v0:4.66,v1:5.16,leaves:1,parts:Zt(4.66,5.16,null,null,.45)},{id:"JEL",room:"suite",a0:16.4,a1:17.6,v0:4.36,v1:5.36,leaves:2,parts:Zt(4.36,5.36)},{id:"JQ2L",room:"mezanino",a0:9,a1:9.8,v0:7.72,v1:8.22,leaves:1,parts:Zt(7.72,8.22,null,null,.45)},{id:"cobogo",room:"nucleo",a0:11.6,a1:13.5,v0:.3,v1:8.6,parts:[]}]},{axis:"z",x0:8.25,x1:8.5,a0:5,a1:7.4,out:1,b:3.06,top:[[5,je(5)+.05],[7.4,je(7.4)+.05]],open:[{id:"JSL2",room:"sala",a0:5.6,a1:7,v0:6.5,v1:7.7,leaves:1,parts:Zt(6.5,7.7)}]}],Pc=[{lv:0,axis:"z",x0:3.125,x1:3.275,a0:7.65,a1:11.325,b:0,t:2.9,doors:[[8.6,10.4]]},{lv:0,axis:"x",z0:11.325,z1:11.475,a0:.25,a1:3.275,b:0,t:2.9,doors:[[.45,1.25]]},{lv:0,axis:"x",z0:11.325,z1:11.475,a0:5.1,a1:8.25,b:0,t:2.9},{lv:0,axis:"z",x0:1.6,x1:1.75,a0:11.475,a1:13.625,b:0,t:2.9},{lv:0,axis:"z",x0:3.125,x1:3.275,a0:11.475,a1:13.625,b:0,t:2.9,doors:[[12.1,12.9]]},{lv:0,axis:"x",z0:13.625,z1:13.775,a0:.25,a1:8.25,b:0,t:2.9,doors:[[.6,1.4],[3.4,5,"emb"]]},{lv:0,axis:"z",x0:1.6,x1:1.75,a0:13.775,a1:17.75,b:0,t:2.9},{lv:0,axis:"x",z0:17.75,z1:17.9,a0:.25,a1:8.25,b:0,t:2.9,doors:[[.6,1.4],[6.5,7.2]]},{lv:0,axis:"z",x0:5.95,x1:6.1,a0:17.9,a1:Me-.25,b:0,t:2.9},{lv:1,axis:"x",z0:11.325,z1:11.475,a0:.25,a1:8.25,b:3.06,t:5.96,doors:[[3.4,5]],vint:[[5.2,8.2,5.25,5.8]]},{lv:1,axis:"z",x0:1.6,x1:1.75,a0:11.475,a1:13.625,b:3.06,t:5.96,doors:[[12.1,12.9]]},{lv:1,axis:"x",z0:13.625,z1:13.775,a0:.25,a1:8.25,b:3.06,t:5.96,doors:[[1.85,2.65],[3.4,4.2]],vint:[[5.2,8.2,5.25,5.8]]},{lv:1,axis:"z",x0:2.9,x1:3.05,a0:13.775,a1:It-.25,b:3.06,t:5.96},{lv:1,axis:"x",z0:16,z1:16.15,a0:3.05,a1:4.675,b:3.06,t:5.96,doors:[[3.3,4]]},{lv:1,axis:"z",x0:4.675,x1:4.825,a0:13.775,a1:It-.25,b:3.06,t:5.96,doors:[[13.95,14.75]]},{lv:2,axis:"x",z0:11.325,z1:11.475,a0:.25,a1:8.25,b:6.12,t:je(11.475)+.04,doors:[[3.5,5]],vint:[[5.2,8.2,8.4,10.1],[3.35,5,8.4,10.1]]},{lv:2,axis:"z",x0:3.125,x1:3.275,a0:11.475,a1:13.775,b:6.12,t:8.96,doors:[[12.1,12.9]]},{lv:2,axis:"x",z0:13.625,z1:13.775,a0:.25,a1:8.25,b:6.12,t:be(13.625)+.04,doors:[[3.35,4.1],[4.58,5.36]]},{lv:2,axis:"z",x0:4.175,x1:4.325,a0:13.775,a1:It-.25,b:6.12,top:[[13.775,be(13.775)+.04],[It-.25,be(It-.25)+.04]]}],nt=(o,t,e,n)=>[[o,t],[e,t],[e,n],[o,n]],Re={x0:.55,x1:7.95,z0:19.05,z1:19.65,y:3},Ic=[{lv:0,pts:nt(0,5,8.5,Me),b:-.15,t:0,kind:"floor"},{lv:1,pts:nt(0,5,8.5,11.475),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:nt(0,11.475,3.275,13.625),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:nt(0,13.625,8.5,It),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:nt(3.275,11.475,5.1,13.625),b:2.96,t:3.06,kind:"grelha"},{lv:1,pts:nt(5.1,12.725,5.38,13.625),b:2.96,t:3.06,kind:"grelha"},{lv:1,pts:nt(0,It,8.5,Re.z0),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:nt(0,Re.z1,8.5,Me),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:nt(0,Re.z0,Re.x0,Re.z1),b:2.9,t:3.06,kind:"floor"},{lv:1,pts:nt(Re.x1,Re.z0,8.5,Re.z1),b:2.9,t:3.06,kind:"floor"},{lv:2,pts:nt(0,Ks,8.5,11.475),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:nt(0,11.475,3.275,13.625),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:nt(0,13.625,8.5,It),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:nt(.25,It,8.5,It+.5),b:5.96,t:6.12,kind:"floor"},{lv:2,pts:[[3.275,11.475],[6.22,11.475],[6.22,12.725],[5.38,12.725],[5.38,13.625],[3.275,13.625]],b:6.02,t:6.12,kind:"grelha"},{lv:3,pts:nt(4.325,13.775,8.25,It-.25),b:8.9,t:9.06,kind:"floor"},{lv:3,pts:nt(.25,11.475,3.125,13.625),b:8.9,t:8.96,kind:"floor"}],xn=[{id:"pilotis",lv:0,name:"Alpendre",out:!0,pts:nt(.25,5,8.5,7.4)},{id:"cozinha",lv:0,name:"Cozinha",key:"jantar",zone:"cozinha",h:2.9,pts:nt(.25,7.65,3.125,11.325)},{id:"copa",lv:0,name:"Copa",key:"jantar",zone:"copa",h:2.9,pts:nt(3.275,7.65,8.25,11.325)},{id:"despensa",lv:0,name:"Despensa",h:2.9,pts:nt(.25,11.475,1.6,13.625)},{id:"lavabo",lv:0,name:"Lavabo",h:2.9,pts:nt(1.75,11.475,3.125,13.625)},{id:"passagem",lv:0,name:"Passagem",key:"nucleo",zone:"nucleo",pts:nt(3.275,11.325,5.1,13.625)},{id:"escada",lv:0,name:"Escada",key:"nucleo",zone:"nucleo",pts:nt(5.1,11.475,8.25,13.625)},{id:"corredor",lv:0,name:"Corredor",h:2.9,pts:nt(.25,13.775,1.6,17.75)},{id:"estarT",lv:0,name:"Estar",key:"estarT",h:2.9,pts:nt(1.75,13.775,8.25,17.75)},{id:"lavanderia",lv:0,name:"Lavanderia",h:2.9,pts:nt(.25,17.9,5.95,Me-.25)},{id:"bhosp",lv:0,name:"Banho de h\xF3spedes",h:2.9,pts:nt(6.1,17.9,8.25,Me-.25)},{id:"sala",lv:1,name:"Sala",key:"estar",zone:"sala",h:4.6,pts:nt(.25,5.25,8.25,11.325)},{id:"lavabo1",lv:1,name:"Lavabo",h:2.9,pts:nt(.25,11.475,1.6,13.625)},{id:"hall",lv:1,name:"Hall",key:"nucleo",zone:"nucleo",pts:nt(1.75,11.475,5.38,13.625)},{id:"escada1",lv:1,name:"Escada",key:"nucleo",zone:"nucleo",pts:nt(5.38,11.475,8.25,13.625)},{id:"rev",lv:1,name:"Revers\xEDvel",key:"rev",h:2.9,pts:nt(.25,13.775,2.9,It-.25)},{id:"closet",lv:1,name:"Closet",zone:"suite",h:2.9,pts:nt(3.05,13.775,4.675,16)},{id:"bsuite",lv:1,name:"Banho da su\xEDte",h:2.9,pts:nt(3.05,16.15,4.675,It-.25)},{id:"suite",lv:1,name:"Su\xEDte",key:"suite",zone:"suite",h:2.9,pts:nt(4.825,13.775,8.25,It-.25)},{id:"mezanino",lv:2,name:"Mezanino",key:"escr",zone:"sala",h:3.6,pts:nt(.25,Ks,8.25,11.325)},{id:"bsocial",lv:2,name:"Banho social",h:2.8,pts:nt(.25,11.475,3.125,13.625)},{id:"hallS",lv:2,name:"Hall",key:"nucleo",zone:"nucleo",pts:[[3.275,11.475],[6.22,11.475],[6.22,12.725],[5.38,12.725],[5.38,13.625],[3.275,13.625]]},{id:"vazio",lv:2,name:"Vazio da escada",key:"nucleo",zone:"nucleo",void:!0,pts:[[6.22,11.475],[8.25,11.475],[8.25,13.625],[5.38,13.625],[5.38,12.725],[6.22,12.725]]},{id:"q1",lv:2,name:"Quarto 1",key:"q1",h:4.4,pts:nt(.25,13.775,4.175,It-.25)},{id:"q2",lv:2,name:"Quarto 2",key:"q2",h:2.78,pts:nt(4.325,13.775,8.25,It-.25)}];var Lc=[2.95,5.65,8.375],Yn=(o,t)=>Array.from({length:t},(e,n)=>+(.12+(o-.12)*n/(t-1)).toFixed(3)),Yo=(o,t,e,n)=>t.flatMap(i=>[{lv:o,k:"cadeira",r:[i-.2,e[0],i+.2,e[1]],back:"n"},{lv:o,k:"cadeira",r:[i-.2,n[0],i+.2,n[1]],back:"s"}]),pv=[{lv:0,k:"mesa",r:[.9,5.55,2.5,6.45],h:.75},...Yo(0,[1.25,2.15],[5.1,5.45],[6.55,6.9]),{lv:0,k:"bancada",r:[.25,8,.85,10.45],back:"w",h:.9,nich:[8,8.33,9.2,9.82,10.38],pia:[8.45,9.15],fogao:[9.45,10.25]},{lv:0,k:"prat",r:[.25,8,.55,9.3],back:"w",prat:[1.55,1.95],fill:"louca"},{lv:0,k:"estante",r:[1.3,10.925,2.35,11.325],back:"s",h:2.4,prat:Yn(2.4,7),cols:2,ends:[1,0],fill:"louca"},{lv:0,k:"estante",r:[2.35,10.6,3.125,11.325],back:"s",h:2.4,prat:[1.95,2.4],cols:1,ends:[1,0],base:!1},{lv:0,k:"geladeira",r:[2.45,10.62,3.08,11.3],back:"s",h:1.85},{lv:0,k:"mesa",c:[2,9.4,.38],h:.75},{lv:0,k:"banqueta",c:[1.55,9.95,.16]},{lv:0,k:"banqueta",c:[2.45,9.95,.16]},{lv:0,k:"mesa",r:[4.7,9.3,6.7,10.3],h:.75},...Yo(0,[5.1,5.7,6.3],[8.8,9.2],[10.4,10.8]),{lv:0,k:"bancada",r:[7.75,8.45,8.2,10.15],back:"e",h:.75,nich:!0},{lv:0,k:"estante",r:[.25,11.6,.6,13.55],back:"w",h:2.4,prat:Yn(2.4,7),cols:4,ends:[1,1],fill:"potes"},{lv:0,k:"estante",r:[.25,13.9,.6,17.6],back:"w",h:2.4,prat:Yn(2.4,6),cols:8,ends:[1,1],fill:"caixas"},{lv:0,k:"bacia",e:[2.05,13.2,.2,.28],back:"s"},{lv:0,k:"bancada",r:[1.8,11.55,2.3,12],back:"n",h:.85,cuba:!0},{lv:0,k:"armario",r:[1.75,13.9,2.3,17.65],back:"w",h:2.4},{lv:0,k:"traco",r:[1.8,14.65,2.25,16.15]},{lv:0,k:"traco",r:[2.3,14.7,4.3,16.1],dash:!0},{lv:0,k:"traco",r:[2.38,14.8,2.78,15.35],dash:!0},{lv:0,k:"traco",r:[2.38,15.45,2.78,16],dash:!0},{lv:0,k:"bancada",r:[5.3,13.775,7.5,14.2],back:"n",h:.45,nich:!0},{lv:0,k:"tv",r:[5.75,13.84,7.05,13.89],y0:.55,h:.74},{lv:0,k:"sofa",r:[4.3,16.25,6.3,17.05],back:"s"},{lv:0,k:"mesa",r:[4.8,15.2,5.8,15.75],h:.38},{lv:0,k:"poltrona",r:[7.2,14.45,7.9,15.15],back:"e"},{lv:0,k:"tanque",r:[.3,19.15,.9,19.7],back:"s"},{lv:0,k:"maquina",r:[1,19.1,1.65,19.7],back:"s"},{lv:0,k:"maquina",r:[1.75,19.1,2.4,19.7],back:"s"},{lv:0,k:"bancada",r:[2.5,19.2,4.2,19.7],back:"s",h:.9,nich:!0},{lv:0,k:"armario",r:[4.3,19.15,5.9,19.7],back:"s",h:2.2},{lv:0,k:"caixa",r:[5.35,18,5.9,18.35],y0:1.1,h:.7},{lv:0,k:"box",r:[6.15,19.05,7.25,19.7],vidro:"n"},{lv:0,k:"bacia",e:[7.85,18.35,.28,.2],back:"e"},{lv:0,k:"bancada",r:[7.65,19.3,8.2,19.7],back:"s",h:.85,cuba:!0},{lv:1,k:"tapete",r:[1.2,6.4,4.6,9.2]},{lv:1,k:"sofa",r:[1,8.5,4,9.35],back:"s"},{lv:1,k:"poltrona",r:[1,6,1.8,6.8],back:"n"},{lv:1,k:"poltrona",r:[3.2,6,4,6.8],back:"n"},{lv:1,k:"mesa",r:[2,7.15,3,7.9],h:.38},{lv:1,k:"estante",r:[.25,5.6,.6,10.9],back:"w",h:2.4,prat:Yn(2.4,7),cols:11,ends:[1,1],fill:"livros"},{lv:1,k:"mesa",r:[5.3,6.3,7.3,7.3],h:.75},...Yo(1,[5.75,6.85],[5.85,6.2],[7.4,7.75]),{lv:1,k:"bacia",e:[.65,13.15,.2,.28],back:"s"},{lv:1,k:"bancada",r:[.3,11.55,.8,12],back:"n",h:.85,cuba:!0},{lv:1,k:"sofa",r:[.25,15.35,1.15,17.35],back:"w"},{lv:1,k:"mesa",r:[.55,17.65,2.65,18.25],h:.75},{lv:1,k:"cadeira",c:[1.6,17.3,.22],back:"n"},{lv:1,k:"estante",r:[2.45,16,2.825,17.4],back:"e",h:2,prat:Yn(2,6),cols:3,ends:[1,1],fill:"livros"},{lv:1,k:"armario",r:[3.05,14.5,3.5,15.95],back:"w",h:2.4},{lv:1,k:"box",r:[3.1,17.45,4.62,18.2],vidro:"n"},{lv:1,k:"bacia",e:[4.38,16.65,.2,.28],back:"n"},{lv:1,k:"bancada",r:[4.2,16.95,4.62,17.4],back:"e",h:.85,cuba:!0},{lv:1,k:"cama",r:[6.11,13.775,7.71,15.775],back:"n"},{lv:1,k:"movel",r:[5.68,13.8,6.06,14.2],h:.5},{lv:1,k:"movel",r:[7.76,13.8,8.14,14.2],h:.5},{lv:1,k:"poltrona",r:[7.35,16.6,8.05,17.3],back:"e"},{lv:1,k:"bancada",r:[5.5,17.8,7.6,18.25],back:"s",h:.45,almofada:!0},{lv:2,k:"mesa",r:[1,8.75,3.4,9.4],h:.75},{lv:2,k:"cadeira",c:[1.7,9.75,.22],back:"s"},{lv:2,k:"cadeira",c:[2.7,9.75,.22],back:"s"},{lv:2,k:"poltrona",r:[5.6,9.4,6.4,10.2],back:"s"},{lv:2,k:"poltrona",r:[6.8,9.4,7.6,10.2],back:"s"},{lv:2,k:"mesa",c:[6.6,10.55,.2],h:.5},{lv:2,k:"estante",r:[.25,8.9,.6,11.2],back:"w",h:2.4,prat:Yn(2.4,7),cols:5,ends:[1,1],fill:"livros"},{lv:2,k:"box",r:[.3,12.75,1.5,13.58],vidro:"n"},{lv:2,k:"bacia",e:[1.95,13.25,.2,.28],back:"s"},{lv:2,k:"bancada",r:[.3,11.55,1.3,12],back:"n",h:.85,cuba:!0},{lv:2,k:"cama",r:[.25,14.4,1.2,16.4],back:"n"},{lv:2,k:"armario",r:[1.4,13.775,3.1,14.375],back:"n",h:2.2},{lv:2,k:"mesa",r:[3.6,15.4,4.175,16.9],h:.75},{lv:2,k:"cadeira",c:[3.25,16.15,.2],back:"w"},{lv:2,k:"cama",r:[7.3,14.4,8.25,16.4],back:"n"},{lv:2,k:"armario",r:[5.5,13.775,7.2,14.375],back:"n",h:2.2},{lv:2,k:"mesa",r:[4.325,15.4,4.9,16.9],h:.75},{lv:2,k:"cadeira",c:[5.25,16.15,.2],back:"e"}];function Gd(o,t,e,n,i){let s=[[o,e]];for(let r of[...i].filter(a=>a.v0<=e+.001).sort((a,c)=>a.a0-c.a0))s.push([r.a0,e],[r.a0,r.v1],[r.a1,r.v1],[r.a1,e]);s.push([t,e]);for(let r=n.length-1;r>=0;r--)s.push(n[r]);return s}function Wd(o,t){let e=new Se(o.map(n=>new O(n[0],n[1])));for(let n of t)e.holes.push(new dn([[n.a0,n.v0],[n.a1,n.v0],[n.a1,n.v1],[n.a0,n.v1]].map(i=>new O(i[0],i[1]))));return e}function Jo(o,t,e,n){let i=n.filter(a=>a.v0>t+.001),s=Wd(Gd(o.a0,o.a1,t,e,n),i);if(o.axis==="x"){let a=new Je(s,{depth:o.z1-o.z0,bevelEnabled:!1});return a.translate(0,0,o.z0),a}let r=new Je(s,{depth:o.x1-o.x0,bevelEnabled:!1});return r.rotateY(-Math.PI/2),r.translate(o.x1,0,0),r}function Nc(o,t,e){let n=new Se(o.map(s=>new O(s[0],s[1]))),i=new Je(n,{depth:e-t,bevelEnabled:!1});return i.rotateX(Math.PI/2),i.translate(0,e,0),i}function Qs(o,t,e){let n=new Se(o.map(s=>new O(s[0],s[1]))),i=new Je(n,{depth:e-t,bevelEnabled:!1});return i.rotateY(-Math.PI/2),i.translate(e,0,0),i}function tt(o,t,e,n,i,s){let r=new zn(n-o,i-t,s-e);return r.translate((o+n)/2,(t+i)/2,(e+s)/2),r}function le(o,t,e,n,i,s,r){return o==="x"?tt(t,n,s,e,i,r):tt(s,n,t,r,i,e)}function Fi(o,t,e,n=e){let i=new A().subVectors(t,o),s=i.length(),r=new zn(e,s,n);return r.applyQuaternion(new re().setFromUnitVectors(new A(0,1,0),i.normalize())),r.translate((o.x+t.x)/2,(o.y+t.y)/2,(o.z+t.z)/2),r}function Vt(o){let t=o.map(i=>i.index?i.toNonIndexed():i),e=["position","normal","uv","color"].filter(i=>t.every(s=>s.attributes[i])),n=new Ft;for(let i of e){let s=t[0].attributes[i].itemSize,r=t.reduce((l,u)=>l+u.attributes[i].count,0),a=new Float32Array(r*s),c=0;for(let l of t)a.set(l.attributes[i].array,c),c+=l.attributes[i].array.length;n.setAttribute(i,new Lt(a,s))}return n}function Dc(o,t){let e=new Be(o,t),n=e.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*o,n.getY(i)*t);return e}var yt=(o,t,e)=>new A(o,t,e);function Uc(o){let t=new Ue,e=[],n=[],i=(d,g,v,y={})=>{let m=new ye(d,g);return m.castShadow=y.cast!==!1,m.receiveShadow=!0,m.userData.lv=v,m.userData.mat=g,y.edges!==!1&&(m.userData.edges=!0),t.add(m),y.ray!==!1&&e.push(m),m},s=(d,g)=>{let v=new ye(d,new we({side:ce}));return v.userData.tau=g,e.push(v),v},r=d=>d<2.95?0:d<6?1:d<8.85?2:3,a=d=>d<3?0:d<6?3.06:6.12;for(let d of Cc){let g=d.out,v=d.axis,y=Yt(Jo(d,d.b||0,d.top,d.open),(m,x,_,S,b)=>{let T=v==="x"?_*g:m*g;return T>.5?b<.6?J.barrado:J.cal:T<-.5?J.argila:J.cal});i(y,o.built,0);for(let m of d.open)c(d,m),m.mux&&p(d,m)}function c(d,g){let v=d.axis,y=v==="x"?d.z0:d.x0,m=v==="x"?d.z1:d.x1,x=(y+m)/2,_=r(g.v0+.1),S=.05;if(g.id==="cobogo"){l(d,g);return}let b=[];for(let[I,L,U,q]of g.parts)if(U==="glass"||U==="band"){let $=v==="x"?tt(g.a0,I,x-.006,g.a1,L,x+.006):tt(x-.006,I,g.a0,x+.006,L,g.a1);i($,o.glass,_,{cast:!1,ray:!1,edges:!1});let ht=v==="x"?yt(0,0,d.out):yt(d.out,0,0),it=v==="x"?yt(1,0,0):yt(0,0,1),st=v==="x"?yt(g.a0,I,x):yt(x,I,g.a0);if(n.push({id:g.id,room:g.room,kind:U,tau:q,p0:st,u:it,v:yt(0,1,0),w:g.a1-g.a0,h:L-I,n:ht}),U==="band")for(let rt=I+.07;rt<L-.03;rt+=.07)b.push(le(v,g.a0,g.a1,rt,rt+.012,x-.03,x+.03))}else U==="wood"?i(le(v,g.a0,g.a1,I,L,y+.02,m-.02),o.louver,_):U==="door"?i(le(v,g.a0,g.a1,I,L,x-.025,x+.025),o.wood,_):U==="panel"&&i(le(v,g.a0,g.a1,I,L,x-.025,x+.025),o.sash,_);if(g.parts.every(I=>I[2]==="wood"||I[2]==="door"))return;let T=g.v0,M=g.v1;b.push(le(v,g.a0,g.a0+S,T,M,x-.04,x+.04),le(v,g.a1-S,g.a1,T,M,x-.04,x+.04)),b.push(le(v,g.a0,g.a1,M-S,M,x-.04,x+.04)),T>a(T)+.05&&b.push(le(v,g.a0,g.a1,T,T+S,x-.04,x+.04));let w=g.parts.find(I=>I[2]==="glass"),E=g.parts.find(I=>I[2]==="band");w&&E&&b.push(le(v,g.a0,g.a1,w[1]-.01,E[0]+.01,x-.04,x+.04));let C=g.leaves||1,R=w?w[1]:M;for(let I=1;I<C;I++){let L=g.a0+(g.a1-g.a0)*I/C;b.push(le(v,L-.025,L+.025,w?w[0]:T,R,x-.035,x+.035))}i(Vt(b),o.sash,_,{edges:!1,ray:!1})}function l(d,g){let v=[],y=d.x0,m=d.x1,x=.24,_=.1;for(let S=g.v0;S<=g.v1+1e-6;S+=x)v.push(tt(y,S-_/2,g.a0,m,S+_/2,g.a1));for(let S=g.a0;S<=g.a1+1e-6;S+=(g.a1-g.a0)/8)v.push(tt(y,g.v0,S-_/2,m,g.v1,S+_/2));i(Vt(v),o.cobogo,0,{ray:!1,edges:!1}),s(tt(y,g.v0,g.a0,m,g.v1,g.a1),.35),n.push({id:"cobogo",room:"nucleo",kind:"open",tau:1,p0:yt(y-.01,g.v0,g.a0),u:yt(0,0,1),v:yt(0,1,0),w:g.a1-g.a0,h:g.v1-g.v0,n:yt(1,0,0)})}for(let d of Pc){let g=d.top||[[d.a0,d.t],[d.a1,d.t]],v=(d.doors||[]).map(([y,m])=>({a0:y,a1:m,v0:d.b,v1:d.b+2.1})).concat((d.vint||[]).map(([y,m,x,_])=>({a0:y,a1:m,v0:x,v1:_})));i(Yt(Jo(d,d.b,g,v),()=>J.argila),o.built,d.lv);for(let[y,m,x,_]of d.vint||[]){let S=d.axis==="x"?(d.z0+d.z1)/2:(d.x0+d.x1)/2;i(le(d.axis,y,m,x,_,S-.006,S+.006),o.glass,d.lv,{cast:!1,ray:!1,edges:!1});let b=[];for(let T=x+.08;T<_-.03;T+=.08)b.push(le(d.axis,y,m,T,T+.012,S-.03,S+.03));i(Vt(b),o.sash,d.lv,{edges:!1,ray:!1})}}for(let d of Ic){if(d.kind==="grelha"){u(d);continue}let g=d.lv===0?J.pisoT:J.piso;i(Yt(Nc(d.pts,d.b,d.t),(v,y)=>y>.5?g:y<-.5?J.teto:J.cal),o.built,d.lv)}function u(d){let g=d.pts.map(E=>E[0]),v=d.pts.map(E=>E[1]),y=Math.min(...g),m=Math.max(...g),x=Math.min(...v),_=Math.max(...v),S=new Se(d.pts.map(E=>new O(E[0],E[1]))),b=new Pi(S);b.rotateX(Math.PI/2),b.translate(0,d.t-.005,0);let T=b.attributes.uv,M=b.attributes.position;for(let E=0;E<T.count;E++)T.setXY(E,M.getX(E),M.getZ(E));i(b,o.grate,d.lv,{ray:!1,edges:!1});let w=[];for(let E=0;E<d.pts.length;E++){let C=d.pts[E],R=d.pts[(E+1)%d.pts.length];w.push(Fi(yt(C[0],d.t-.05,C[1]),yt(R[0],d.t-.05,R[1]),.05,.1))}i(Vt(w),o.steel,d.lv,{edges:!1}),s(tt(y,d.b,x,m,d.t,_),.7)}for(let d of[0,3.06]){let g=d?1:0,v=[];for(let y=1;y<=8;y++)v.push(tt(5.1+(y-1)*.28,d+y*.18-.05,11.475,5.1+y*.28,d+y*.18,12.425));v.push(tt(7.34,d+1.5,11.475,8.25,d+1.62,13.625));for(let y=1;y<=7;y++)v.push(tt(7.34-y*.28,d+1.62+y*.18-.05,12.725,7.34-(y-1)*.28,d+1.62+y*.18,13.625));v.push(Fi(yt(5.1,d-.02,12.44),yt(7.34,d+1.5,12.44),.03,.06),Fi(yt(7.34,d+1.6,12.71),yt(5.38,d+3,12.71),.03,.06)),i(Yt(Vt(v),(y,m)=>m>.5?J.madeira:J.grafite),o.built,g)}let h=(d,g)=>g>.5?J.telha:g<-.5?J.teto:J.cal,f=(d,g,v,y)=>[[d,v(d)],[g,v(g)],[g,y(g)],[d,y(d)]];i(Yt(Qs(f(4.4,12.4,je,gn),.25,9),h),o.roof,3),i(Yt(Qs(f(11.6,19.2,be,$s),.25,9),h),o.roof,3);for(let d of[.55,3.25,5.95])i(Qs(f(7,10.4,g=>gn(g)+.06,g=>gn(g)+.14),d,d+2.6),o.solar,3,{edges:!1});{i(Yt(Vt([tt(.25,gn(12.4)-.02,12.35,8.25,10.85,12.45),tt(.25,11.7,12.35,8.25,be(12.4)+.04,12.45)]),()=>J.cal),o.built,3),i(tt(.25,10.85,12.394,8.25,11.7,12.406),o.glass,3,{cast:!1,ray:!1,edges:!1});let m=[];for(let x=.9;x<8.25;x+=.65)m.push(tt(x-.025,10.85,12.37,x+.025,11.7,12.43));for(let x=10.85+.09;x<11.7-.03;x+=.09)m.push(tt(.25,x,12.385,8.25,x+.012,12.415));i(Vt(m),o.sash,3,{edges:!1,ray:!1}),n.push({id:"clerestorio",room:"nucleo",kind:"glass",tau:.6,p0:yt(.25,10.85,12.4),u:yt(1,0,0),v:yt(0,1,0),w:8,h:11.7-10.85,n:yt(0,0,-1)})}i(tt(5.6,9.06,15,7.6,10.1,16.5),o.tank,3);{let{x0:d,x1:g,z0:v,z1:y,y:m}=Re,x=6.025;i(tt(d,m-.006,v,g,m+.006,y),o.glass,1,{cast:!1,ray:!1,edges:!1});let _=[tt(d,m-.04,v,g,m+.04,v+.04),tt(d,m-.04,y-.04,g,m+.04,y)];for(let S=d;S<=g+1e-6;S+=(g-d)/8)_.push(tt(S-.02,m-.04,v,S+.02,m+.04,y));i(Vt(_),o.steel,1,{edges:!1,ray:!1});for(let[S,b,T]of[[d,x-.1,"lavanderia"],[x+.1,g,"bhosp"]])n.push({id:"zenital",room:T,kind:"glass",tau:.62,p0:yt(S,m,v),u:yt(1,0,0),v:yt(0,0,1),w:b-S,h:y-v,n:yt(0,1,0)})}for(let d of Lc)i(Yt(new Ze(.13,.13,2.9,20).translate(d,1.45,5.125),()=>J.cal),o.built,0,{edges:!1});function p(d,g){let v=g.a0+.05,y=g.a1-.05,m=d.z0+.04,x=Dc(y-v,1.05);x.translate((v+y)/2,3.06+.525,m),i(x,o.mux,1,{ray:!1,edges:!1}),i(Vt([tt(v,4.11,m-.03,y,4.16,m+.03),tt(v,3.06,m-.02,y,3.1,m+.02)]),o.rail,1,{edges:!1}),s(tt(v,3.06,d.z0,y,4.16,d.z0+.08),.45)}{let d=[],y=Ks+.03;for(let m=.31;m<8.25;m+=.11)d.push(tt(m-.02,6.12,y-.02,m+.02,7.22,y+.02));d.push(tt(.25,7.22-.04,y-.03,8.25,7.22+.02,y+.03)),i(Vt(d),o.rail,2,{ray:!1,edges:!1})}{let d=[],y=[[6.22,11.475],[6.22,12.725],[5.38,12.725]];for(let m=0;m<y.length-1;m++){let[x,_]=y[m],[S,b]=y[m+1],T=Math.hypot(S-x,b-_);for(let M=.06;M<T;M+=.11){let w=x+(S-x)*M/T,E=_+(b-_)*M/T;d.push(tt(w-.02,6.12,E-.02,w+.02,7.22,E+.02))}d.push(Fi(yt(x,7.22,_),yt(S,7.22,b),.06,.04))}i(Vt(d),o.rail,2,{ray:!1,edges:!1})}return{root:t,occ:e,aps:n}}function Fc(o){let t=new Ue,e=[],n=(m,x,_={})=>{let S=new ye(m,x);return S.castShadow=_.cast!==!1,S.receiveShadow=!0,S.userData.lv=0,S.userData.mat=x,S.userData.site=!0,t.add(S),_.ray!==!1&&e.push(S),S},i=(m,x,_,S,b,T,M,w)=>n(Yt(tt(m,b,x,_,T,S),()=>M),o.site,w),s=new Si(260,48);s.rotateX(-Math.PI/2),s.translate(5,-.32,10),n(Yt(s,()=>J.terra),o.ground,{cast:!1,ray:!1});let r=(m,x,_,S,b,T,M,w)=>n(Yt(tt(m,b,x,_,T,S),()=>M),o.ground,w);r(-60,-13,70,-1.6,-.42,-.3,J.rua,{cast:!1,ray:!1}),r(-60,-1.6,70,0,-.42,-.15,J.calcada,{cast:!1,ray:!1}),r(-60,0,70,40,-.42,-.15,J.grama,{cast:!1}),i(.15,.3,2.95,5,-.15,-.13,J.calcada,{cast:!1,ray:!1}),i(3.6,.15,4.8,5,-.15,-.13,J.calcada,{cast:!1,ray:!1});for(let m=7.9;m<19.6;m+=.9)(m<10.9||m>14.2)&&i(8.75,m,9.6,m+.5,-.15,-.12,J.calcada,{cast:!1,ray:!1});i(5,.15,6.1,.75,-.15,1.5,J.cal);let a=[tt(8.82,-.15,11.12,9.68,-.05,11.2),tt(8.82,-.15,13.9,9.68,-.05,13.98),tt(8.82,-.15,11.2,8.9,-.05,13.9),tt(9.6,-.15,11.2,9.68,-.05,13.9)];n(Yt(Vt(a),()=>J.calcada),o.site,{ray:!1});let c=new Be(.7,2.7);c.rotateX(-Math.PI/2),c.translate(9.25,-.09,12.55),n(c,o.water,{cast:!1,ray:!1});for(let[m,x]of[[-7.6,0],[10,17.6]])n(Yt(tt(m,-.15,4,x,6.2,16),()=>J.vizinho),o.site).userData.grp="viz",n(Yt(Xd(m-.3,x+.3,3.7,16.3,6.2,7.4),(_,S)=>S<-.5?J.vizinho:J.vizTelha),o.hipRoof).userData.grp="viz";i(0,0,10,.15,-.15,.6,J.cal);let l=[];for(let m=.06;m<10;m+=.12)l.push(tt(m-.01,.6,.06,m+.01,1.8,.09));l.push(tt(0,1.76,.05,10,1.8,.1)),n(Vt(l),o.steel,{ray:!1}),i(0,.15,.15,5,-.15,1.8,J.cal),i(9.85,.15,10,4,-.15,1.8,J.cal),i(9.85,16,10,20,-.15,2.2,J.cal),i(8.5,19.85,9.85,20,-.15,2.2,J.cal);let u=[];for(let m of[.3,2.8]){for(let x of[.6,4.7])u.push(tt(m-.06,-.15,x-.06,m+.06,2.4,x+.06));u.push(tt(m-.05,2.4,.4,m+.05,2.55,4.95))}for(let m=.45;m<4.95;m+=.45)u.push(tt(.2,2.55,m-.03,2.9,2.63,m+.03));n(Vt(u),o.wood);let h=qo(Pt({color:J.folha,roughness:1,flatShading:!0})),f=qo(Pt({color:"#4f6b3a",roughness:1,flatShading:!0})),p=g(8.2,2.3,3.6,5,[1.7,1.5,1.7],h,.13,5),d=g(9.2,18.3,1.2,2.5,[.6,1.1,.95],f,.1,3);function g(m,x,_,S,b,T,M,w){let E=n(new Ze(M*.7,M,_+.15,8).translate(m,(_-.15)/2,x),o.bark,{cast:!0}),C=[];for(let $=0;$<w;$++){let ht=$/w*Math.PI*2+.4,it=new A(m,_-.1,x),st=new A(m+Math.cos(ht)*b[0]*.8,S+b[1]*.45,x+Math.sin(ht)*b[2]*.8),rt=new A().subVectors(st,it),wt=rt.length(),P=new Ze(.03,.06,wt,6);P.applyQuaternion(new re().setFromUnitVectors(new A(0,1,0),rt.normalize())),P.translate((it.x+st.x)/2,(it.y+st.y)/2,(it.z+st.z)/2),C.push(P)}let R=n(Vt(C),o.bark,{ray:!1}),I=new Ci(1,2),L=I.attributes.position;for(let $=0;$<L.count;$++){let ht=1+.14*Math.sin(L.getX($)*5.1+L.getZ($)*3.7)*Math.cos(L.getY($)*4.3);L.setXYZ($,L.getX($)*ht,L.getY($)*ht,L.getZ($)*ht)}I.computeVertexNormals(),I.scale(b[0],b[1],b[2]),I.translate(m,S,x);let U=n(I,T,{ray:!1}),q=new ye(new Ii(1,12,8).scale(b[0]*.92,b[1]*.92,b[2]*.92).translate(m,S,x),new we({side:ce}));q.userData.tau=.25,e.push(q);for(let $ of[E,R,U,q])$.userData.grp="tree";return{t:E,branches:R,crown:U,px:q}}let v=(()=>{let x=new Float32Array(960),_=new Float32Array(320),S=3,b=()=>(S=S*16807%2147483647)/2147483647;for(let E=0;E<320;E++){let C=b()*Math.PI*2,R=Math.sqrt(b())*1.9;x.set([8.2+Math.cos(C)*R,3.6+b()*2.6,2.3+Math.sin(C)*R*.95],E*3),_[E]=b()}let T=new Ft;T.setAttribute("position",new Lt(x,3)),T.setAttribute("aPh",new Lt(_,1));let M=new Li({transparent:!0,depthWrite:!1,uniforms:{uTime:Js,uColor:{value:new mt(J.ipe)}},vertexShader:`attribute float aPh; uniform float uTime; varying float vA;
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
        }`}),w=new vi(T,M);return w.frustumCulled=!1,w.visible=!1,w.userData.grp="tree",t.add(w),w})();function y(m){let x=m===5||m===6,_=m===7;v.userData.on=_,p.crown.visible=!x,h.color.set(_?J.ipe:J.folha),p.px.userData.tau=x?.85:_?.5:.25,d.px.userData.tau=.2}return{root:t,occ:e,setSeason:y,trees:[p,d],petals:v}}function Xd(o,t,e,n,i,s){let r=(o+t)/2,a=(t-o)/2,c=[o,i,e],l=[t,i,e],u=[t,i,n],h=[o,i,n],f=[r,s,e+a],p=[r,s,n-a],d=[c,f,l,u,p,h,c,h,p,c,p,f,l,f,p,l,p,u,c,l,u,c,u,h],g=new Ft;return g.setAttribute("position",new _t(d.flat(),3)),g}var Zn=Math.pow(2,-24),Bi=Symbol("SKIP_GENERATION"),js={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Bi]:!1};function St(o,t,e){return e.min.x=t[o],e.min.y=t[o+1],e.min.z=t[o+2],e.max.x=t[o+3],e.max.y=t[o+4],e.max.z=t[o+5],e}function Oi(o){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=o[n+3]-o[n];i>e&&(e=i,t=n)}return t}function $o(o,t){t.set(o)}function Ko(o,t,e){let n,i;for(let s=0;s<3;s++){let r=s+3;n=o[s],i=t[s],e[s]=n<i?n:i,n=o[r],i=t[r],e[r]=n>i?n:i}}function zi(o,t,e){for(let n=0;n<3;n++){let i=t[o+2*n],s=t[o+2*n+1],r=i-s,a=i+s;r<e[n]&&(e[n]=r),a>e[n+3]&&(e[n+3]=a)}}function Jn(o){let t=o[3]-o[0],e=o[4]-o[1],n=o[5]-o[2];return 2*(t*e+e*n+n*t)}function ct(o,t){return t[o+15]===65535}function gt(o,t){return t[o+6]}function vt(o,t){return t[o+14]}function dt(o){return o+8}function pt(o,t){let e=t[o+6];return o+e*8}function $n(o,t){return t[o+7]}function tr(o,t,e,n,i){let s=1/0,r=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,p=1/0,d=-1/0,g=-1/0,v=-1/0,y=o.offset||0;for(let m=(t-y)*6,x=(t+e-y)*6;m<x;m+=6){let _=o[m+0],S=o[m+1],b=_-S,T=_+S;b<s&&(s=b),T>c&&(c=T),_<h&&(h=_),_>d&&(d=_);let M=o[m+2],w=o[m+3],E=M-w,C=M+w;E<r&&(r=E),C>l&&(l=C),M<f&&(f=M),M>g&&(g=M);let R=o[m+4],I=o[m+5],L=R-I,U=R+I;L<a&&(a=L),U>u&&(u=U),R<p&&(p=R),R>v&&(v=R)}n[0]=s,n[1]=r,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=f,i[2]=p,i[3]=d,i[4]=g,i[5]=v}var Oe=32,Zd=(o,t)=>o.candidate-t.candidate,tn=new Array(Oe).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),er=new Float32Array(6);function Oc(o,t,e,n,i,s){let r=-1,a=0;if(s===0)r=Oi(t),r!==-1&&(a=(t[r]+t[r+3])/2);else if(s===1)r=Oi(o),r!==-1&&(a=Jd(e,n,i,r));else if(s===2){let c=Jn(o),l=1.25*i,u=e.offset||0,h=(n-u)*6,f=(n+i-u)*6;for(let p=0;p<3;p++){let d=t[p],y=(t[p+3]-d)/Oe;if(i<Oe/4){let m=[...tn];m.length=i;let x=0;for(let S=h;S<f;S+=6,x++){let b=m[x];b.candidate=e[S+2*p],b.count=0;let{bounds:T,leftCacheBounds:M,rightCacheBounds:w}=b;for(let E=0;E<3;E++)w[E]=1/0,w[E+3]=-1/0,M[E]=1/0,M[E+3]=-1/0,T[E]=1/0,T[E+3]=-1/0;zi(S,e,T)}m.sort(Zd);let _=i;for(let S=0;S<_;S++){let b=m[S];for(;S+1<_&&m[S+1].candidate===b.candidate;)m.splice(S+1,1),_--}for(let S=h;S<f;S+=6){let b=e[S+2*p];for(let T=0;T<_;T++){let M=m[T];b>=M.candidate?zi(S,e,M.rightCacheBounds):(zi(S,e,M.leftCacheBounds),M.count++)}}for(let S=0;S<_;S++){let b=m[S],T=b.count,M=i-b.count,w=b.leftCacheBounds,E=b.rightCacheBounds,C=0;T!==0&&(C=Jn(w)/c);let R=0;M!==0&&(R=Jn(E)/c);let I=1+1.25*(C*T+R*M);I<l&&(r=p,l=I,a=b.candidate)}}else{for(let _=0;_<Oe;_++){let S=tn[_];S.count=0,S.candidate=d+y+_*y;let b=S.bounds;for(let T=0;T<3;T++)b[T]=1/0,b[T+3]=-1/0}for(let _=h;_<f;_+=6){let T=~~((e[_+2*p]-d)/y);T>=Oe&&(T=Oe-1);let M=tn[T];M.count++,zi(_,e,M.bounds)}let m=tn[Oe-1];$o(m.bounds,m.rightCacheBounds);for(let _=Oe-2;_>=0;_--){let S=tn[_],b=tn[_+1];Ko(S.bounds,b.rightCacheBounds,S.rightCacheBounds)}let x=0;for(let _=0;_<Oe-1;_++){let S=tn[_],b=S.count,T=S.bounds,w=tn[_+1].rightCacheBounds;b!==0&&(x===0?$o(T,er):Ko(T,er,er)),x+=b;let E=0,C=0;x!==0&&(E=Jn(er)/c);let R=i-x;R!==0&&(C=Jn(w)/c);let I=1+1.25*(E*x+C*R);I<l&&(r=p,l=I,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:r,pos:a}}function Jd(o,t,e,n){let i=0,s=o.offset;for(let r=t,a=t+e;r<a;r++)i+=o[(r-s)*6+n*2];return i/e}var Kn=class{constructor(){this.boundingData=new Float32Array(6)}};function zc(o,t,e,n,i,s){let r=n,a=n+i-1,c=s.pos,l=s.axis*2,u=e.offset||0;for(;;){for(;r<=a&&e[(r-u)*6+l]<c;)r++;for(;r<=a&&e[(a-u)*6+l]>=c;)a--;if(r<a){for(let h=0;h<t;h++){let f=o[r*t+h];o[r*t+h]=o[a*t+h],o[a*t+h]=f}for(let h=0;h<6;h++){let f=r-u,p=a-u,d=e[f*6+h];e[f*6+h]=e[p*6+h],e[p*6+h]=d}r++,a--}else return r}}var kc,nr,Qo,Vc,$d=Math.pow(2,32);function ir(o){return"count"in o?1:1+ir(o.left)+ir(o.right)}function Hc(o,t,e){return kc=new Float32Array(e),nr=new Uint32Array(e),Qo=new Uint16Array(e),Vc=new Uint8Array(e),jo(o,t)}function jo(o,t){let e=o/4,n=o/2,i="count"in t,s=t.boundingData;for(let r=0;r<6;r++)kc[e+r]=s[r];if(i)return t.buffer?(Vc.set(new Uint8Array(t.buffer),o),o+t.buffer.byteLength):(nr[e+6]=t.offset,Qo[n+14]=t.count,Qo[n+15]=65535,o+32);{let{left:r,right:a,splitAxis:c}=t,l=o+32,u=jo(l,r),h=o/32,p=u/32-h;if(p>$d)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return nr[e+6]=p,nr[e+7]=c,jo(u,a)}}function Kd(o,t,e,n,i,s){let{maxDepth:r,verbose:a,targetLeafSize:c,_strictLeafSize:l=1/0,strategy:u,onProgress:h}=i,f=o.primitiveBuffer,p=o.primitiveBufferStride,d=new Float32Array(6),g=!1,v=new Kn;return tr(t,e,n,v.boundingData,d),m(v,e,n,d),v;function y(x){h&&h((x-s.offset)/s.count)}function m(x,_,S,b=null,T=0){!g&&T>=r&&(g=!0,a&&console.warn(`BVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`));let M=S>l;if(S<=c&&!M||T>=r)return y(_+S),x.offset=_,x.count=S,x;let w=Oc(x.boundingData,b,t,_,S,u),E=w.axis===-1?-1:zc(f,p,t,_,S,w);if(w.axis===-1||E===_||E===_+S){if(!M)return y(_+S),x.offset=_,x.count=S,x;w.axis=Math.max(0,Oi(x.boundingData)),E=_+Math.max(1,Math.floor(S/2))}x.splitAxis=w.axis;let C=new Kn,R=_,I=E-_;x.left=C,tr(t,R,I,C.boundingData,d),m(C,R,I,d,T+1);let L=new Kn,U=E,q=S-I;return x.right=L,tr(t,U,q,L.boundingData,d),m(L,U,q,d,T+1),x}}function Gc(o,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=o.getRootRanges(t.range),i=n[0],s=n[n.length-1],r={offset:i.offset,count:s.offset+s.count-i.offset},a=new Float32Array(6*r.count);a.offset=r.offset,o.computePrimitiveBounds(r.offset,r.count,a),o._roots=n.map(c=>{let l=Kd(o,a,c.offset,c.count,t,r),u=ir(l),h=new e(32*u);return Hc(0,l,h),h})}var en=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var ta=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},ut=new ta;var nn,jn,Qn=[],sr=new en(()=>new At);function Wc(o,t,e,n,i,s){nn=sr.getPrimitive(),jn=sr.getPrimitive(),Qn.push(nn,jn),ut.setBuffer(o._roots[t]);let r=ea(0,o.geometry,e,n,i,s);ut.clearBuffer(),sr.releasePrimitive(nn),sr.releasePrimitive(jn),Qn.pop(),Qn.pop();let a=Qn.length;return a>0&&(jn=Qn[a-1],nn=Qn[a-2]),r}function ea(o,t,e,n,i=null,s=0,r=0){let{float32Array:a,uint16Array:c,uint32Array:l}=ut,u=o*2;if(ct(u,c)){let f=gt(o,l),p=vt(u,c);return St(o,a,nn),n(f,p,!1,r,s+o/8,nn)}else{let E=function(R){let{uint16Array:I,uint32Array:L}=ut,U=R*2;for(;!ct(U,I);)R=dt(R),U=R*2;return gt(R,L)},C=function(R){let{uint16Array:I,uint32Array:L}=ut,U=R*2;for(;!ct(U,I);)R=pt(R,L),U=R*2;return gt(R,L)+vt(U,I)},f=dt(o),p=pt(o,l),d=f,g=p,v,y,m,x;if(i&&(m=nn,x=jn,St(d,a,m),St(g,a,x),v=i(m),y=i(x),y<v)){d=p,g=f;let R=v;v=y,y=R,m=x}m||(m=nn,St(d,a,m));let _=ct(d*2,c),S=e(m,_,v,r+1,s+d/8),b;if(S===2){let R=E(d),L=C(d)-R;b=n(R,L,!0,r+1,s+d/8,m)}else b=S&&ea(d,t,e,n,i,s,r+1);if(b)return!0;x=jn,St(g,a,x);let T=ct(g*2,c),M=e(x,T,y,r+1,s+g/8),w;if(M===2){let R=E(g),L=C(g)-R;w=n(R,L,!0,r+1,s+g/8,x)}else w=M&&ea(g,t,e,n,i,s,r+1);return!!w}}var ki=new ut.constructor,rr=new ut.constructor,sn=new en(()=>new At),ti=new At,ei=new At,ia=new At,sa=new At,ra=!1;function Xc(o,t,e,n){if(ra)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ra=!0;let i=o._roots,s=t._roots,r,a=0,c=0,l=new xt().copy(e).invert();for(let u=0,h=i.length;u<h;u++){ki.setBuffer(i[u]),c=0;let f=sn.getPrimitive();St(0,ki.float32Array,f),f.applyMatrix4(l);for(let p=0,d=s.length;p<d&&(rr.setBuffer(s[p]),r=Te(0,0,e,l,n,a,c,0,0,f),rr.clearBuffer(),c+=s[p].byteLength/32,!r);p++);if(sn.releasePrimitive(f),ki.clearBuffer(),a+=i[u].byteLength/32,r)break}return ra=!1,r}function Te(o,t,e,n,i,s=0,r=0,a=0,c=0,l=null,u=!1){let h,f;u?(h=rr,f=ki):(h=ki,f=rr);let p=h.float32Array,d=h.uint32Array,g=h.uint16Array,v=f.float32Array,y=f.uint32Array,m=f.uint16Array,x=o*2,_=t*2,S=ct(x,g),b=ct(_,m),T=!1;if(b&&S)u?T=i(gt(t,y),vt(t*2,m),gt(o,d),vt(o*2,g),c,r+t/8,a,s+o/8):T=i(gt(o,d),vt(o*2,g),gt(t,y),vt(t*2,m),a,s+o/8,c,r+t/8);else if(b){let M=sn.getPrimitive();St(t,v,M),M.applyMatrix4(e);let w=dt(o),E=pt(o,d);St(w,p,ti),St(E,p,ei);let C=M.intersectsBox(ti),R=M.intersectsBox(ei);T=C&&Te(t,w,n,e,i,r,s,c,a+1,M,!u)||R&&Te(t,E,n,e,i,r,s,c,a+1,M,!u),sn.releasePrimitive(M)}else{let M=dt(t),w=pt(t,y);St(M,v,ia),St(w,v,sa);let E=l.intersectsBox(ia),C=l.intersectsBox(sa);if(E&&C)T=Te(o,M,e,n,i,s,r,a,c+1,l,u)||Te(o,w,e,n,i,s,r,a,c+1,l,u);else if(E)if(S)T=Te(o,M,e,n,i,s,r,a,c+1,l,u);else{let R=sn.getPrimitive();R.copy(ia).applyMatrix4(e);let I=dt(o),L=pt(o,d);St(I,p,ti),St(L,p,ei);let U=R.intersectsBox(ti),q=R.intersectsBox(ei);T=U&&Te(M,I,n,e,i,r,s,c,a+1,R,!u)||q&&Te(M,L,n,e,i,r,s,c,a+1,R,!u),sn.releasePrimitive(R)}else if(C)if(S)T=Te(o,w,e,n,i,s,r,a,c+1,l,u);else{let R=sn.getPrimitive();R.copy(sa).applyMatrix4(e);let I=dt(o),L=pt(o,d);St(I,p,ti),St(L,p,ei);let U=R.intersectsBox(ti),q=R.intersectsBox(ei);T=U&&Te(w,I,n,e,i,r,s,c,a+1,R,!u)||q&&Te(w,L,n,e,i,r,s,c,a+1,R,!u),sn.releasePrimitive(R)}}return T}var or=new class{constructor(){let o=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,r)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=r,this.buffer=o=s._roots[r],this.uint16Array=e=new Uint16Array(o),this.uint32Array=t=new Uint32Array(o)},this.reset=()=>{this.root=null,this.buffer=o=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let r=s*2;for(;!ct(r,e);)s=dt(s),r=s*2;return gt(s,t)},this.getRangeEnd=s=>{let r=s*2;for(;!ct(r,e);)s=pt(s,t),r=s*2;return gt(s,t)+vt(r,e)};let i=(s,r,a)=>{let c=r*2,l=ct(c,e);if(!s(a,l,r)&&!l){let h=dt(r),f=pt(r,t);i(s,h,a+1),i(s,f,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((r,a,c)=>{if(a){let l=c*2,u=t[c+6],h=e[l+14];return s(r,a,new Float32Array(o,c*4,6),u,h)}else{let l=$n(c,t);return s(r,a,new Float32Array(o,c*4,6),l)}})}}};var qc=new At,ni=new Float32Array(6),ar=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...js,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Gc(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let s=1/0,r=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=t,f=t+e;h<f;h++){this.writePrimitiveBounds(h,ni,0);let[p,d,g,v,y,m]=ni;p<s&&(s=p),v>c&&(c=v),d<r&&(r=d),y>l&&(l=y),g<a&&(a=g),m>u&&(u=m)}return n[i+0]=s,n[i+1]=r,n[i+2]=a,n[i+3]=c,n[i+4]=l,n[i+5]=u,n}computePrimitiveBounds(t,e,n){let i=n.offset||0;for(let s=t,r=t+e;s<r;s++){this.writePrimitiveBounds(s,ni,0);let[a,c,l,u,h,f]=ni,p=(a+u)/2,d=(c+h)/2,g=(l+f)/2,v=(u-a)/2,y=(h-c)/2,m=(f-l)/2,x=(s-i)*6;n[x+0]=p,n[x+1]=v+(Math.abs(p)+v)*Zn,n[x+2]=d,n[x+3]=y+(Math.abs(d)+y)*Zn,n[x+4]=g,n[x+5]=m+(Math.abs(g)+m)*Zn}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{let n=this._roots;for(let i=0;i<n.length;i++){let s=n[i],r=new Uint32Array(s),a=new Uint16Array(s),c=s.byteLength/32;for(let l=0;l<c;l++){let u=8*l,h=2*u;ct(h,a)&&(r[u+6]+=t)}}}}traverse(t,e=0){or.setBVH(this,e),or.traverse(t),or.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let i=t[e],s=new Uint32Array(i),r=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/32;for(let l=c-1;l>=0;l--){let u=l*8,h=u*2;if(ct(h,r)){let p=gt(u,s),d=vt(h,r);this.writePrimitiveRangeBounds(p,d,ni,0),a.set(ni,u)}else{let p=dt(u),d=pt(u,s);for(let g=0;g<3;g++){let v=a[p+g],y=a[p+g+3],m=a[d+g],x=a[d+g+3];a[u+g]=v<m?v:m,a[u+g+3]=y>x?y:x}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{St(0,new Float32Array(n),qc),t.union(qc)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:s,scratchPrimitive:r,iterate:a}=t;if(i&&s){let h=i;i=(f,p,d,g,v)=>h(f,p,d,g,v)?!0:a(f,p,this,s,d,g,r)}else i||(s?i=(h,f,p,d)=>a(h,f,this,s,p,d,r):i=(h,f,p)=>p);let c=!1,l=0,u=this._roots;for(let h=0,f=u.length;h<f;h++){let p=u[h];if(c=Wc(this,h,n,i,e,l),c)break;l+=p.byteLength/32}return c}bvhcast(t,e,n){let{intersectsRanges:i}=n;return Xc(this,t,e,i)}};function Yc(){return typeof SharedArrayBuffer<"u"}function oa(o){return o.index?o.index.count:o.attributes.position.count}function rn(o){return oa(o)/3}function jd(o,t=ArrayBuffer){return o>65535?new Uint32Array(new t(4*o)):new Uint16Array(new t(2*o))}function Zc(o,t){if(!o.index){let e=o.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=jd(e,n);o.setIndex(new Lt(i,1));for(let s=0;s<e;s++)i[s]=s}}function tp(o,t,e){let n=oa(o)/e,i=t||o.drawRange,s=i.start/e,r=(i.start+i.count)/e,a=Math.max(0,s),c=Math.min(n,r)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function ep(o,t){return o.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function aa(o,t,e){let n=tp(o,t,e),i=ep(o,e);if(!i.length)return[n];let s=[],r=n.offset,a=n.offset+n.count,c=oa(o)/e,l=[];for(let f of i){let{offset:p,count:d}=f,g=p,v=isFinite(d)?d:c-p,y=p+v;g<a&&y>r&&(l.push({pos:Math.max(r,g),isStart:!0}),l.push({pos:Math.min(a,y),isStart:!1}))}l.sort((f,p)=>f.pos!==p.pos?f.pos-p.pos:f.type==="end"?-1:1);let u=0,h=null;for(let f of l){let p=f.pos;u!==0&&p!==h&&s.push({offset:h,count:p-h}),u+=f.isStart?1:-1,h=p}return s}function np(o,t){let e=o[o.length-1],n=e.offset+e.count>2**16,i=o.reduce((l,u)=>l+u.count,0),s=n?4:2,r=t?new SharedArrayBuffer(i*s):new ArrayBuffer(i*s),a=n?new Uint32Array(r):new Uint16Array(r),c=0;for(let l=0;l<o.length;l++){let{offset:u,count:h}=o[l];for(let f=0;f<h;f++)a[c+f]=u+f;c+=h}return a}var cr=class extends ar{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Yc())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...js,...e},e[Bi]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let i=aa(e,t.range,n),s=np(i,t.useSharedArrayBuffer);this._indirectBuffer=s}else Zc(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new At))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:aa(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var ue=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let s=0,r=t.length;s<r;s++){let c=t[s][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let s=0,r=e.length;s<r;s++){let a=e[s],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};ue.prototype.setFromBox=(function(){let o=new A;return function(e,n){let i=n.min,s=n.max,r=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){o.x=i.x*c+s.x*(1-c),o.y=i.y*l+s.y*(1-l),o.z=i.z*u+s.z*(1-u);let h=e.dot(o);r=Math.min(h,r),a=Math.max(h,a)}this.min=r,this.max=a}})();var ip=(function(){let o=new A,t=new A,e=new A;return function(i,s,r){let a=i.start,c=o,l=s.start,u=t;e.subVectors(a,l),o.subVectors(i.end,i.start),t.subVectors(s.end,s.start);let h=e.dot(u),f=u.dot(c),p=u.dot(u),d=e.dot(c),v=c.dot(c)*p-f*f,y,m;v!==0?y=(h*f-d*p)/v:y=0,m=(h+y*f)/p,r.x=y,r.y=m}})(),Vi=(function(){let o=new O,t=new A,e=new A;return function(i,s,r,a){ip(i,s,o);let c=o.x,l=o.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,r),s.at(l,a);return}else if(c>=0&&c<=1){l<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,r);return}else if(l>=0&&l<=1){c<0?i.at(0,r):i.at(1,r),s.closestPointToPoint(r,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=s.start:h=s.end;let f=t,p=e;if(i.closestPointToPoint(h,!0,t),s.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=p.distanceToSquared(u)){r.copy(f),a.copy(h);return}else{r.copy(u),a.copy(p);return}}}})(),Jc=(function(){let o=new A,t=new A,e=new ve,n=new $t;return function(s,r){let{radius:a,center:c}=s,{a:l,b:u,c:h}=r;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,o).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,o).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,o).distanceTo(c)<=a))return!0;let g=r.getPlane(e);if(Math.abs(g.distanceToPoint(c))<=a){let y=g.projectPoint(c,t);if(r.containsPoint(y))return!0}return!1}})();var sp=["x","y","z"],ze=1e-15,$c=ze*ze;function pe(o){return Math.abs(o)<ze}var Ht=class extends qt{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new A),this.satBounds=new Array(4).fill().map(()=>new ue),this.points=[this.a,this.b,this.c],this.plane=new ve,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new $t,this.needsUpdate=!0}intersectsSphere(t){return Jc(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,s=this.satAxes,r=this.satBounds,a=s[0],c=r[0];this.getNormal(a),c.setFromPoints(a,i);let l=s[1],u=r[1];l.subVectors(t,e),u.setFromPoints(l,i);let h=s[2],f=r[2];h.subVectors(e,n),f.setFromPoints(h,i);let p=s[3],d=r[3];p.subVectors(n,t),d.setFromPoints(p,i);let g=l.length(),v=h.length(),y=p.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,g<ze?v<ze||y<ze?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):v<ze?y<ze?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):y<ze&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ht.prototype.closestPointToSegment=(function(){let o=new A,t=new A,e=new $t;return function(i,s=null,r=null){let{start:a,end:c}=i,l=this.points,u,h=1/0;for(let f=0;f<3;f++){let p=(f+1)%3;e.start.copy(l[f]),e.end.copy(l[p]),Vi(e,i,o,t),u=o.distanceToSquared(t),u<h&&(h=u,s&&s.copy(o),r&&r.copy(t))}return this.closestPointToPoint(a,o),u=a.distanceToSquared(o),u<h&&(h=u,s&&s.copy(o),r&&r.copy(a)),this.closestPointToPoint(c,o),u=c.distanceToSquared(o),u<h&&(h=u,s&&s.copy(o),r&&r.copy(c)),Math.sqrt(h)}})();Ht.prototype.intersectsTriangle=(function(){let o=new Ht,t=new ue,e=new ue,n=new A,i=new A,s=new A,r=new A,a=new $t,c=new $t,l=new A,u=new O,h=new O;function f(x,_,S,b){let T=n;!x.isDegenerateIntoPoint&&!x.isDegenerateIntoSegment?T.copy(x.plane.normal):T.copy(_.plane.normal);let M=x.satBounds,w=x.satAxes;for(let R=1;R<4;R++){let I=M[R],L=w[R];if(t.setFromPoints(L,_.points),I.isSeparated(t)||(r.copy(T).cross(L),t.setFromPoints(r,x.points),e.setFromPoints(r,_.points),t.isSeparated(e)))return!1}let E=_.satBounds,C=_.satAxes;for(let R=1;R<4;R++){let I=E[R],L=C[R];if(t.setFromPoints(L,x.points),I.isSeparated(t)||(r.crossVectors(T,L),t.setFromPoints(r,x.points),e.setFromPoints(r,_.points),t.isSeparated(e)))return!1}return S&&(b||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function p(x,_,S,b,T,M,w,E,C,R,I){let L=w/(w-E);R.x=b+(T-b)*L,I.start.subVectors(_,x).multiplyScalar(L).add(x),L=w/(w-C),R.y=b+(M-b)*L,I.end.subVectors(S,x).multiplyScalar(L).add(x)}function d(x,_,S,b,T,M,w,E,C,R,I){if(T>0)p(x.c,x.a,x.b,b,_,S,C,w,E,R,I);else if(M>0)p(x.b,x.a,x.c,S,_,b,E,w,C,R,I);else if(E*C>0||w!=0)p(x.a,x.b,x.c,_,S,b,w,E,C,R,I);else if(E!=0)p(x.b,x.a,x.c,S,_,b,E,w,C,R,I);else if(C!=0)p(x.c,x.a,x.b,b,_,S,C,w,E,R,I);else return!0;return!1}function g(x,_,S,b){let T=_.degenerateSegment,M=x.plane.distanceToPoint(T.start),w=x.plane.distanceToPoint(T.end);return pe(M)?pe(w)?f(x,_,S,b):(S&&(S.start.copy(T.start),S.end.copy(T.start)),x.containsPoint(T.start)):pe(w)?(S&&(S.start.copy(T.end),S.end.copy(T.end)),x.containsPoint(T.end)):x.plane.intersectLine(T,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),x.containsPoint(n)):!1}function v(x,_,S){let b=_.a;return pe(x.plane.distanceToPoint(b))&&x.containsPoint(b)?(S&&(S.start.copy(b),S.end.copy(b)),!0):!1}function y(x,_,S){let b=x.degenerateSegment,T=_.a;return b.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<$c?(S&&(S.start.copy(T),S.end.copy(T)),!0):!1}function m(x,_,S,b){if(x.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){let T=x.degenerateSegment,M=_.degenerateSegment,w=i,E=s;T.delta(w),M.delta(E);let C=n.subVectors(M.start,T.start),R=w.x*E.y-w.y*E.x;if(pe(R))return!1;let I=(C.x*E.y-C.y*E.x)/R,L=-(w.x*C.y-w.y*C.x)/R;if(I<0||I>1||L<0||L>1)return!1;let U=T.start.z+w.z*I,q=M.start.z+E.z*L;return pe(U-q)?(S&&(S.start.copy(T.start).addScaledVector(w,I),S.end.copy(T.start).addScaledVector(w,I)),!0):!1}else return _.isDegenerateIntoPoint?y(x,_,S):g(_,x,S,b);else{if(x.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(x.a)<$c?(S&&(S.start.copy(x.a),S.end.copy(x.a)),!0):!1:_.isDegenerateIntoSegment?y(_,x,S):v(_,x,S);if(_.isDegenerateIntoPoint)return v(x,_,S);if(_.isDegenerateIntoSegment)return g(x,_,S,b)}}return function(_,S=null,b=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(o.copy(_),o.update(),_=o);let T=m(this,_,S,b);if(T!==void 0)return T;let M=this.plane,w=_.plane,E=w.distanceToPoint(this.a),C=w.distanceToPoint(this.b),R=w.distanceToPoint(this.c);pe(E)&&(E=0),pe(C)&&(C=0),pe(R)&&(R=0);let I=E*C,L=E*R;if(I>0&&L>0)return!1;let U=M.distanceToPoint(_.a),q=M.distanceToPoint(_.b),$=M.distanceToPoint(_.c);pe(U)&&(U=0),pe(q)&&(q=0),pe($)&&($=0);let ht=U*q,it=U*$;if(ht>0&&it>0)return!1;i.copy(M.normal),s.copy(w.normal);let st=i.cross(s),rt=0,wt=Math.abs(st.x),P=Math.abs(st.y);P>wt&&(wt=P,rt=1),Math.abs(st.z)>wt&&(rt=2);let F=sp[rt],z=this.a[F],D=this.b[F],Z=this.c[F],G=_.a[F],Y=_.b[F],ot=_.c[F];if(d(this,z,D,Z,I,L,E,C,R,u,a))return f(this,_,S,b);if(d(_,G,Y,ot,ht,it,U,q,$,h,c))return f(this,_,S,b);if(u.y<u.x){let K=u.y;u.y=u.x,u.x=K,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(h.y<h.x){let K=h.y;h.y=h.x,h.x=K,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<h.x||h.y<u.x?!1:(S&&(h.x>u.x?S.start.copy(c.start):S.start.copy(a.start),h.y<u.y?S.end.copy(c.end):S.end.copy(a.end)),!0)}})();Ht.prototype.distanceToPoint=(function(){let o=new A;return function(e){return this.closestPointToPoint(e,o),e.distanceTo(o)}})();Ht.prototype.distanceToTriangle=(function(){let o=new A,t=new A,e=["a","b","c"],n=new $t,i=new $t;return function(r,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(r,l,!0))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f,p=e[h],d=r[p];this.closestPointToPoint(d,o),f=d.distanceToSquared(o),f<u&&(u=f,a&&a.copy(o),c&&c.copy(d));let g=this[p];r.closestPointToPoint(g,o),f=g.distanceToSquared(o),f<u&&(u=f,a&&a.copy(g),c&&c.copy(o))}for(let h=0;h<3;h++){let f=e[h],p=e[(h+1)%3];n.set(this[f],this[p]);for(let d=0;d<3;d++){let g=e[d],v=e[(d+1)%3];i.set(r[g],r[v]),Vi(n,i,o,t);let y=o.distanceToSquared(t);y<u&&(u=y,a&&a.copy(o),c&&c.copy(t))}}return Math.sqrt(u)}})();var Nt=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new A,this.max=new A,this.matrix=new xt,this.invMatrix=new xt,this.points=new Array(8).fill().map(()=>new A),this.satAxes=new Array(3).fill().map(()=>new A),this.satBounds=new Array(3).fill().map(()=>new ue),this.alignedSatBounds=new Array(3).fill().map(()=>new ue),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Nt.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){let f=1*l|2*u|4*h,p=i[f];p.x=l?n.x:e.x,p.y=u?n.y:e.y,p.z=h?n.z:e.z,p.applyMatrix4(t)}let s=this.satBounds,r=this.satAxes,a=i[0];for(let l=0;l<3;l++){let u=r[l],h=s[l],f=1<<l,p=i[f];u.subVectors(a,p),h.setFromPoints(u,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Nt.prototype.intersectsBox=(function(){let o=new ue;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,s=this.satBounds,r=this.satAxes,a=this.alignedSatBounds;if(o.min=n.x,o.max=i.x,a[0].isSeparated(o)||(o.min=n.y,o.max=i.y,a[1].isSeparated(o))||(o.min=n.z,o.max=i.z,a[2].isSeparated(o)))return!1;for(let c=0;c<3;c++){let l=r[c],u=s[c];if(o.setFromBox(l,e),u.isSeparated(o))return!1}return!0}})();Nt.prototype.intersectsTriangle=(function(){let o=new Ht,t=new Array(3),e=new ue,n=new ue,i=new A;return function(r){this.needsUpdate&&this.update(),r.isExtendedTriangle?r.needsUpdate&&r.update():(o.copy(r),o.update(),r=o);let a=this.satBounds,c=this.satAxes;t[0]=r.a,t[1]=r.b,t[2]=r.c;for(let f=0;f<3;f++){let p=a[f],d=c[f];if(e.setFromPoints(d,t),p.isSeparated(e))return!1}let l=r.satBounds,u=r.satAxes,h=this.points;for(let f=0;f<3;f++){let p=l[f],d=u[f];if(e.setFromPoints(d,h),p.isSeparated(e))return!1}for(let f=0;f<3;f++){let p=c[f];for(let d=0;d<4;d++){let g=u[d];if(i.crossVectors(p,g),e.setFromPoints(i,t),n.setFromPoints(i,h),e.isSeparated(n))return!1}}return!0}})();Nt.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Nt.prototype.distanceToPoint=(function(){let o=new A;return function(e){return this.closestPointToPoint(e,o),e.distanceTo(o)}})();Nt.prototype.distanceToBox=(function(){let o=["x","y","z"],t=new Array(12).fill().map(()=>new $t),e=new Array(12).fill().map(()=>new $t),n=new A,i=new A;return function(r,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(r))return(c||l)&&(r.getCenter(i),this.closestPointToPoint(i,n),r.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;let u=a*a,h=r.min,f=r.max,p=this.points,d=1/0;for(let v=0;v<8;v++){let y=p[v];i.copy(y).clamp(h,f);let m=y.distanceToSquared(i);if(m<d&&(d=m,c&&c.copy(y),l&&l.copy(i),m<u))return Math.sqrt(m)}let g=0;for(let v=0;v<3;v++)for(let y=0;y<=1;y++)for(let m=0;m<=1;m++){let x=(v+1)%3,_=(v+2)%3,S=y<<x|m<<_,b=1<<v|y<<x|m<<_,T=p[S],M=p[b];t[g].set(T,M);let E=o[v],C=o[x],R=o[_],I=e[g],L=I.start,U=I.end;L[E]=h[E],L[C]=y?h[C]:f[C],L[R]=m?h[R]:f[C],U[E]=f[E],U[C]=y?h[C]:f[C],U[R]=m?h[R]:f[C],g++}for(let v=0;v<=1;v++)for(let y=0;y<=1;y++)for(let m=0;m<=1;m++){i.x=v?f.x:h.x,i.y=y?f.y:h.y,i.z=m?f.z:h.z,this.closestPointToPoint(i,n);let x=i.distanceToSquared(n);if(x<d&&(d=x,c&&c.copy(n),l&&l.copy(i),x<u))return Math.sqrt(x)}for(let v=0;v<12;v++){let y=t[v];for(let m=0;m<12;m++){let x=e[m];Vi(y,x,n,i);let _=n.distanceToSquared(i);if(_<d&&(d=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}}return Math.sqrt(d)}})();var ca=class extends en{constructor(){super(()=>new Ht)}},Qt=new ca;var Hi=new A,la=new A;function Kc(o,t,e={},n=0,i=1/0){let s=n*n,r=i*i,a=1/0,c=null;if(o.shapecast({boundsTraverseOrder:u=>(Hi.copy(t).clamp(u.min,u.max),Hi.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<r,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Hi);let f=t.distanceToSquared(Hi);return f<a&&(la.copy(Hi),a=f,c=h),f<s}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(la):e.point=la.clone(),e.distance=l,e.faceIndex=c,e}var lr=parseInt("186")>=169,rp=parseInt("186")<=161,_n=new A,vn=new A,yn=new A,ur=new O,hr=new O,fr=new O,Qc=new A,jc=new A,tl=new A,Gi=new A;function op(o,t,e,n,i,s,r,a){let c;if(s===Ys?c=o.intersectTriangle(n,e,t,!0,i):c=o.intersectTriangle(t,e,n,s!==ce,i),c===null)return null;let l=o.origin.distanceTo(i);return l<r||l>a?null:{distance:l,point:i.clone()}}function el(o,t,e,n,i,s,r,a,c,l,u){_n.fromBufferAttribute(t,s),vn.fromBufferAttribute(t,r),yn.fromBufferAttribute(t,a);let h=op(o,_n,vn,yn,Gi,c,l,u);if(h){if(n){ur.fromBufferAttribute(n,s),hr.fromBufferAttribute(n,r),fr.fromBufferAttribute(n,a),h.uv=new O;let p=qt.getInterpolation(Gi,_n,vn,yn,ur,hr,fr,h.uv);lr||(h.uv=p)}if(i){ur.fromBufferAttribute(i,s),hr.fromBufferAttribute(i,r),fr.fromBufferAttribute(i,a),h.uv1=new O;let p=qt.getInterpolation(Gi,_n,vn,yn,ur,hr,fr,h.uv1);lr||(h.uv1=p),rp&&(h.uv2=h.uv1)}if(e){Qc.fromBufferAttribute(e,s),jc.fromBufferAttribute(e,r),tl.fromBufferAttribute(e,a),h.normal=new A;let p=qt.getInterpolation(Gi,_n,vn,yn,Qc,jc,tl,h.normal);h.normal.dot(o.direction)>0&&h.normal.multiplyScalar(-1),lr||(h.normal=p)}let f={a:s,b:r,c:a,normal:new A,materialIndex:0};if(qt.getNormal(_n,vn,yn,f.normal),h.face=f,h.faceIndex=s,lr){let p=new A;qt.getBarycoord(Gi,_n,vn,yn,p),h.barycoord=p}}return h}function nl(o){return o&&o.isMaterial?o.side:o}function ii(o,t,e,n,i,s,r){let a=n*3,c=a+0,l=a+1,u=a+2,{index:h,groups:f}=o;o.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));let{position:p,normal:d,uv:g,uv1:v}=o.attributes;if(Array.isArray(t)){let y=n*3;for(let m=0,x=f.length;m<x;m++){let{start:_,count:S,materialIndex:b}=f[m];if(y>=_&&y<_+S){let T=nl(t[b]),M=el(e,p,d,g,v,c,l,u,T,s,r);if(M)if(M.faceIndex=n,M.face.materialIndex=b,i)i.push(M);else return M}}}else{let y=nl(t),m=el(e,p,d,g,v,c,l,u,y,s,r);if(m)if(m.faceIndex=n,m.face.materialIndex=0,i)i.push(m);else return m}return null}function Mt(o,t,e,n){let i=o.a,s=o.b,r=o.c,a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l)}function il(o,t,e,n,i,s,r,a){let{geometry:c,_indirectBuffer:l}=o;for(let u=n,h=n+i;u<h;u++)ii(c,t,e,u,s,r,a)}function sl(o,t,e,n,i,s,r){let{geometry:a,_indirectBuffer:c}=o,l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let p;p=ii(a,t,e,h,null,s,r),p&&p.distance<l&&(u=p,l=p.distance)}return u}function rl(o,t,e,n,i,s,r){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=o,h=t+o;u<h;u++){let f;if(f=u,Mt(r,f*3,c,l),r.needsUpdate=!0,n(r,f,i,s))return!0}return!1}function ol(o,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=o.geometry,n=e.index?e.index.array:null,i=e.attributes.position,s,r,a,c,l=0,u=o._roots;for(let f=0,p=u.length;f<p;f++)s=u[f],r=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),h(0,l),l+=s.byteLength;function h(f,p,d=!1){let g=f*2;if(ct(g,a)){let v=gt(f,r),y=vt(g,a),m=1/0,x=1/0,_=1/0,S=-1/0,b=-1/0,T=-1/0;for(let M=3*v,w=3*(v+y);M<w;M++){let E=n[M],C=i.getX(E),R=i.getY(E),I=i.getZ(E);C<m&&(m=C),C>S&&(S=C),R<x&&(x=R),R>b&&(b=R),I<_&&(_=I),I>T&&(T=I)}return c[f+0]!==m||c[f+1]!==x||c[f+2]!==_||c[f+3]!==S||c[f+4]!==b||c[f+5]!==T?(c[f+0]=m,c[f+1]=x,c[f+2]=_,c[f+3]=S,c[f+4]=b,c[f+5]=T,!0):!1}else{let v=dt(f),y=pt(f,r),m=d,x=!1,_=!1;if(t){if(!m){let E=v/8+p/32,C=y/8+p/32;x=t.has(E),_=t.has(C),m=!x&&!_}}else x=!0,_=!0;let S=m||x,b=m||_,T=!1;S&&(T=h(v,p,m));let M=!1;b&&(M=h(y,p,m));let w=T||M;if(w)for(let E=0;E<3;E++){let C=v+E,R=y+E,I=c[C],L=c[C+3],U=c[R],q=c[R+3];c[f+E]=I<U?I:U,c[f+E+3]=L>q?L:q}return w}}}function me(o,t,e,n,i){let s,r,a,c,l,u,h=1/e.direction.x,f=1/e.direction.y,p=1/e.direction.z,d=e.origin.x,g=e.origin.y,v=e.origin.z,y=t[o],m=t[o+3],x=t[o+1],_=t[o+3+1],S=t[o+2],b=t[o+3+2];return h>=0?(s=(y-d)*h,r=(m-d)*h):(s=(m-d)*h,r=(y-d)*h),f>=0?(a=(x-g)*f,c=(_-g)*f):(a=(_-g)*f,c=(x-g)*f),s>c||a>r||((a>s||isNaN(s))&&(s=a),(c<r||isNaN(r))&&(r=c),p>=0?(l=(S-v)*p,u=(b-v)*p):(l=(b-v)*p,u=(S-v)*p),s>u||l>r)?!1:((l>s||s!==s)&&(s=l),(u<r||r!==r)&&(r=u),s<=i&&r>=n)}function al(o,t,e,n,i,s,r,a){let{geometry:c,_indirectBuffer:l}=o;for(let u=n,h=n+i;u<h;u++){let f=l?l[u]:u;ii(c,t,e,f,s,r,a)}}function cl(o,t,e,n,i,s,r){let{geometry:a,_indirectBuffer:c}=o,l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let p;p=ii(a,t,e,c?c[h]:h,null,s,r),p&&p.distance<l&&(u=p,l=p.distance)}return u}function ll(o,t,e,n,i,s,r){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=o,h=t+o;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),Mt(r,f*3,c,l),r.needsUpdate=!0,n(r,f,i,s))return!0}return!1}function ul(o,t,e,n,i,s,r){ut.setBuffer(o._roots[t]),ua(0,o,e,n,i,s,r),ut.clearBuffer()}function ua(o,t,e,n,i,s,r){let{float32Array:a,uint16Array:c,uint32Array:l}=ut,u=o*2;if(ct(u,c)){let f=gt(o,l),p=vt(u,c);il(t,e,n,f,p,i,s,r)}else{let f=dt(o);me(f,a,n,s,r)&&ua(f,t,e,n,i,s,r);let p=pt(o,l);me(p,a,n,s,r)&&ua(p,t,e,n,i,s,r)}}var ap=["x","y","z"];function hl(o,t,e,n,i,s){ut.setBuffer(o._roots[t]);let r=ha(0,o,e,n,i,s);return ut.clearBuffer(),r}function ha(o,t,e,n,i,s){let{float32Array:r,uint16Array:a,uint32Array:c}=ut,l=o*2;if(ct(l,a)){let h=gt(o,c),f=vt(l,a);return sl(t,e,n,h,f,i,s)}else{let h=$n(o,c),f=ap[h],d=n.direction[f]>=0,g,v;d?(g=dt(o),v=pt(o,c)):(g=pt(o,c),v=dt(o));let m=me(g,r,n,i,s)?ha(g,t,e,n,i,s):null;if(m){let S=m.point[f];if(d?S<=r[v+h]:S>=r[v+h+3])return m}let _=me(v,r,n,i,s)?ha(v,t,e,n,i,s):null;return m&&_?m.distance<=_.distance?m:_:m||_||null}}var dr=new At,si=new Ht,ri=new Ht,Wi=new xt,fl=new Nt,pr=new Nt;function dl(o,t,e,n){ut.setBuffer(o._roots[t]);let i=fa(0,o,e,n);return ut.clearBuffer(),i}function fa(o,t,e,n,i=null){let{float32Array:s,uint16Array:r,uint32Array:a}=ut,c=o*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),fl.set(e.boundingBox.min,e.boundingBox.max,n),i=fl),ct(c,r)){let u=t.geometry,h=u.index,f=u.attributes.position,p=e.index,d=e.attributes.position,g=gt(o,a),v=vt(c,r);if(Wi.copy(n).invert(),e.boundsTree)return St(o,s,pr),pr.matrix.copy(Wi),pr.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:m=>pr.intersectsBox(m),intersectsTriangle:m=>{m.a.applyMatrix4(n),m.b.applyMatrix4(n),m.c.applyMatrix4(n),m.needsUpdate=!0;for(let x=g*3,_=(v+g)*3;x<_;x+=3)if(Mt(ri,x,h,f),ri.needsUpdate=!0,m.intersectsTriangle(ri))return!0;return!1}});{let y=rn(e);for(let m=g*3,x=(v+g)*3;m<x;m+=3){Mt(si,m,h,f),si.a.applyMatrix4(Wi),si.b.applyMatrix4(Wi),si.c.applyMatrix4(Wi),si.needsUpdate=!0;for(let _=0,S=y*3;_<S;_+=3)if(Mt(ri,_,p,d),ri.needsUpdate=!0,si.intersectsTriangle(ri))return!0}}}else{let u=dt(o),h=pt(o,a);return St(u,s,dr),!!(i.intersectsBox(dr)&&fa(u,t,e,n,i)||(St(h,s,dr),i.intersectsBox(dr)&&fa(h,t,e,n,i)))}}var mr=new xt,da=new Nt,Xi=new Nt,cp=new A,lp=new A,up=new A,hp=new A;function pl(o,t,e,n={},i={},s=0,r=1/0){t.boundingBox||t.computeBoundingBox(),da.set(t.boundingBox.min,t.boundingBox.max,e),da.needsUpdate=!0;let a=o.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=Qt.getPrimitive(),p=Qt.getPrimitive(),d=cp,g=lp,v=null,y=null;i&&(v=up,y=hp);let m=1/0,x=null,_=null;return mr.copy(e).invert(),Xi.matrix.copy(mr),o.shapecast({boundsTraverseOrder:S=>da.distanceToBox(S),intersectsBounds:(S,b,T)=>T<m&&T<r?(b&&(Xi.min.copy(S.min),Xi.max.copy(S.max),Xi.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:M=>Xi.distanceToBox(M),intersectsBounds:(M,w,E)=>E<m&&E<r,intersectsRange:(M,w)=>{for(let E=M,C=M+w;E<C;E++){Mt(p,3*E,h,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let R=S,I=S+b;R<I;R++){Mt(f,3*R,l,c),f.needsUpdate=!0;let L=f.distanceToTriangle(p,d,v);if(L<m&&(g.copy(d),y&&y.copy(v),m=L,x=R,_=E),L<s)return!0}}}});{let T=rn(t);for(let M=0,w=T;M<w;M++){Mt(p,3*M,h,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let E=S,C=S+b;E<C;E++){Mt(f,3*E,l,c),f.needsUpdate=!0;let R=f.distanceToTriangle(p,d,v);if(R<m&&(g.copy(d),y&&y.copy(v),m=R,x=E,_=M),R<s)return!0}}}}}),Qt.releasePrimitive(f),Qt.releasePrimitive(p),m===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=m,n.faceIndex=x,i&&(i.point?i.point.copy(y):i.point=y.clone(),i.point.applyMatrix4(mr),g.applyMatrix4(mr),i.distance=g.sub(i.point).length(),i.faceIndex=_),n)}function ml(o,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=o.geometry,n=e.index?e.index.array:null,i=e.attributes.position,s,r,a,c,l=0,u=o._roots;for(let f=0,p=u.length;f<p;f++)s=u[f],r=new Uint32Array(s),a=new Uint16Array(s),c=new Float32Array(s),h(0,l),l+=s.byteLength;function h(f,p,d=!1){let g=f*2;if(ct(g,a)){let v=gt(f,r),y=vt(g,a),m=1/0,x=1/0,_=1/0,S=-1/0,b=-1/0,T=-1/0;for(let M=v,w=v+y;M<w;M++){let E=3*o.resolveTriangleIndex(M);for(let C=0;C<3;C++){let R=E+C;R=n?n[R]:R;let I=i.getX(R),L=i.getY(R),U=i.getZ(R);I<m&&(m=I),I>S&&(S=I),L<x&&(x=L),L>b&&(b=L),U<_&&(_=U),U>T&&(T=U)}}return c[f+0]!==m||c[f+1]!==x||c[f+2]!==_||c[f+3]!==S||c[f+4]!==b||c[f+5]!==T?(c[f+0]=m,c[f+1]=x,c[f+2]=_,c[f+3]=S,c[f+4]=b,c[f+5]=T,!0):!1}else{let v=dt(f),y=pt(f,r),m=d,x=!1,_=!1;if(t){if(!m){let E=v/8+p/32,C=y/8+p/32;x=t.has(E),_=t.has(C),m=!x&&!_}}else x=!0,_=!0;let S=m||x,b=m||_,T=!1;S&&(T=h(v,p,m));let M=!1;b&&(M=h(y,p,m));let w=T||M;if(w)for(let E=0;E<3;E++){let C=v+E,R=y+E,I=c[C],L=c[C+3],U=c[R],q=c[R+3];c[f+E]=I<U?I:U,c[f+E+3]=L>q?L:q}return w}}}function gl(o,t,e,n,i,s,r){ut.setBuffer(o._roots[t]),pa(0,o,e,n,i,s,r),ut.clearBuffer()}function pa(o,t,e,n,i,s,r){let{float32Array:a,uint16Array:c,uint32Array:l}=ut,u=o*2;if(ct(u,c)){let f=gt(o,l),p=vt(u,c);al(t,e,n,f,p,i,s,r)}else{let f=dt(o);me(f,a,n,s,r)&&pa(f,t,e,n,i,s,r);let p=pt(o,l);me(p,a,n,s,r)&&pa(p,t,e,n,i,s,r)}}var fp=["x","y","z"];function xl(o,t,e,n,i,s){ut.setBuffer(o._roots[t]);let r=ma(0,o,e,n,i,s);return ut.clearBuffer(),r}function ma(o,t,e,n,i,s){let{float32Array:r,uint16Array:a,uint32Array:c}=ut,l=o*2;if(ct(l,a)){let h=gt(o,c),f=vt(l,a);return cl(t,e,n,h,f,i,s)}else{let h=$n(o,c),f=fp[h],d=n.direction[f]>=0,g,v;d?(g=dt(o),v=pt(o,c)):(g=pt(o,c),v=dt(o));let m=me(g,r,n,i,s)?ma(g,t,e,n,i,s):null;if(m){let S=m.point[f];if(d?S<=r[v+h]:S>=r[v+h+3])return m}let _=me(v,r,n,i,s)?ma(v,t,e,n,i,s):null;return m&&_?m.distance<=_.distance?m:_:m||_||null}}var gr=new At,oi=new Ht,ai=new Ht,qi=new xt,_l=new Nt,xr=new Nt;function vl(o,t,e,n){ut.setBuffer(o._roots[t]);let i=ga(0,o,e,n);return ut.clearBuffer(),i}function ga(o,t,e,n,i=null){let{float32Array:s,uint16Array:r,uint32Array:a}=ut,c=o*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),_l.set(e.boundingBox.min,e.boundingBox.max,n),i=_l),ct(c,r)){let u=t.geometry,h=u.index,f=u.attributes.position,p=e.index,d=e.attributes.position,g=gt(o,a),v=vt(c,r);if(qi.copy(n).invert(),e.boundsTree)return St(o,s,xr),xr.matrix.copy(qi),xr.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:m=>xr.intersectsBox(m),intersectsTriangle:m=>{m.a.applyMatrix4(n),m.b.applyMatrix4(n),m.c.applyMatrix4(n),m.needsUpdate=!0;for(let x=g,_=v+g;x<_;x++)if(Mt(ai,3*t.resolveTriangleIndex(x),h,f),ai.needsUpdate=!0,m.intersectsTriangle(ai))return!0;return!1}});{let y=rn(e);for(let m=g,x=v+g;m<x;m++){let _=t.resolveTriangleIndex(m);Mt(oi,3*_,h,f),oi.a.applyMatrix4(qi),oi.b.applyMatrix4(qi),oi.c.applyMatrix4(qi),oi.needsUpdate=!0;for(let S=0,b=y*3;S<b;S+=3)if(Mt(ai,S,p,d),ai.needsUpdate=!0,oi.intersectsTriangle(ai))return!0}}}else{let u=dt(o),h=pt(o,a);return St(u,s,gr),!!(i.intersectsBox(gr)&&ga(u,t,e,n,i)||(St(h,s,gr),i.intersectsBox(gr)&&ga(h,t,e,n,i)))}}var _r=new xt,xa=new Nt,Yi=new Nt,dp=new A,pp=new A,mp=new A,gp=new A;function yl(o,t,e,n={},i={},s=0,r=1/0){t.boundingBox||t.computeBoundingBox(),xa.set(t.boundingBox.min,t.boundingBox.max,e),xa.needsUpdate=!0;let a=o.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,f=Qt.getPrimitive(),p=Qt.getPrimitive(),d=dp,g=pp,v=null,y=null;i&&(v=mp,y=gp);let m=1/0,x=null,_=null;return _r.copy(e).invert(),Yi.matrix.copy(_r),o.shapecast({boundsTraverseOrder:S=>xa.distanceToBox(S),intersectsBounds:(S,b,T)=>T<m&&T<r?(b&&(Yi.min.copy(S.min),Yi.max.copy(S.max),Yi.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(t.boundsTree){let T=t.boundsTree;return T.shapecast({boundsTraverseOrder:M=>Yi.distanceToBox(M),intersectsBounds:(M,w,E)=>E<m&&E<r,intersectsRange:(M,w)=>{for(let E=M,C=M+w;E<C;E++){let R=T.resolveTriangleIndex(E);Mt(p,3*R,h,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let I=S,L=S+b;I<L;I++){let U=o.resolveTriangleIndex(I);Mt(f,3*U,l,c),f.needsUpdate=!0;let q=f.distanceToTriangle(p,d,v);if(q<m&&(g.copy(d),y&&y.copy(v),m=q,x=I,_=E),q<s)return!0}}}})}else{let T=rn(t);for(let M=0,w=T;M<w;M++){Mt(p,3*M,h,u),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let E=S,C=S+b;E<C;E++){let R=o.resolveTriangleIndex(E);Mt(f,3*R,l,c),f.needsUpdate=!0;let I=f.distanceToTriangle(p,d,v);if(I<m&&(g.copy(d),y&&y.copy(v),m=I,x=E,_=M),I<s)return!0}}}}}),Qt.releasePrimitive(f),Qt.releasePrimitive(p),m===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=m,n.faceIndex=x,i&&(i.point?i.point.copy(y):i.point=y.clone(),i.point.applyMatrix4(_r),g.applyMatrix4(_r),i.distance=g.sub(i.point).length(),i.faceIndex=_),n)}function _a(o,t,e){return o===null?null:(o.point.applyMatrix4(t.matrixWorld),o.distance=o.point.distanceTo(e.ray.origin),o.object=t,o)}var vr=new Nt,yr=new Fe,Sl=new A,Ml=new xt,bl=new A,va=["getX","getY","getZ"],Sr=class o extends cr{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,s=t._indirectBuffer,r=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=r?r.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=i,a.index=r?r.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:s,indirectBuffer:r}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(s));let a=new o(e,{...n,[Bi]:!0});if(a._roots=s,a._indirectBuffer=r||null,n.setIndex){let l=e.getIndex();if(l===null){let u=new Lt(t.index,1,!1);e.setIndex(u)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a;function c(l){for(let u=0;u<l.length;u++){let h=l[u],f=new Uint32Array(h),p=new Uint16Array(h);for(let d=0,g=h.byteLength/32;d<g;d++){let v=8*d,y=2*v;ct(y,p)||(f[v+6]=f[v+6]/8-d)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let i=this.geometry,s=this._indirectBuffer,r=i.attributes.position,a=i.index?i.index.array:null,l=(s?s[t]:t)*3,u=l+0,h=l+1,f=l+2;a&&(u=a[u],h=a[h],f=a[f]);for(let p=0;p<3;p++){let d=r[va[p]](u),g=r[va[p]](h),v=r[va[p]](f),y=d;g<y&&(y=g),v<y&&(y=v);let m=d;g>m&&(m=g),v>m&&(m=v),e[n+p]=y,e[n+p+3]=m}return e}computePrimitiveBounds(t,e,n){let i=this.geometry,s=this._indirectBuffer,r=i.attributes.position,a=i.index?i.index.array:null,c=r.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let l=r.array,u=r.offset||0,h=3;r.isInterleavedBufferAttribute&&(h=r.data.stride);let f=["getX","getY","getZ"],p=n.offset;for(let d=t,g=t+e;d<g;d++){let y=(s?s[d]:d)*3,m=(d-p)*6,x=y+0,_=y+1,S=y+2;a&&(x=a[x],_=a[_],S=a[S]),c||(x=x*h+u,_=_*h+u,S=S*h+u);for(let b=0;b<3;b++){let T,M,w;c?(T=r[f[b]](x),M=r[f[b]](_),w=r[f[b]](S)):(T=l[x+b],M=l[_+b],w=l[S+b]);let E=T;M<E&&(E=M),w<E&&(E=w);let C=T;M>C&&(C=M),w>C&&(C=w);let R=(C-E)/2,I=b*2;n[m+I+0]=E+R,n[m+I+1]=R+(Math.abs(E)+R)*Zn}}return n}raycastObject3D(t,e,n=[]){let{material:i}=t;if(i===void 0)return;Ml.copy(t.matrixWorld).invert(),yr.copy(e.ray).applyMatrix4(Ml),bl.setFromMatrixScale(t.matrixWorld),Sl.copy(yr.direction).multiply(bl);let s=Sl.length(),r=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let c=this.raycastFirst(yr,i,r,a);c=_a(c,t,e),c&&n.push(c)}else{let c=this.raycast(yr,i,r,a);for(let l=0,u=c.length;l<u;l++){let h=_a(c[l],t,e);h&&n.push(h)}}return n}refit(t=null){return(this.indirect?ml:ol)(this,t)}raycast(t,e=Hn,n=0,i=1/0){let s=this._roots,r=[],a=this.indirect?gl:ul;for(let c=0,l=s.length;c<l;c++)a(this,c,e,t,r,n,i);return r}raycastFirst(t,e=Hn,n=0,i=1/0){let s=this._roots,r=null,a=this.indirect?xl:hl;for(let c=0,l=s.length;c<l;c++){let u=a(this,c,e,t,n,i);u!=null&&(r==null||u.distance<r.distance)&&(r=u)}return r}intersectsGeometry(t,e){let n=!1,i=this._roots,s=this.indirect?vl:dl;for(let r=0,a=i.length;r<a&&(n=s(this,r,t,e),!n);r++);return n}shapecast(t){let e=Qt.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?ll:rl});return Qt.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:s}=n,r=Qt.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?d=>{let g=this.resolveTriangleIndex(d);Mt(r,g*3,a,c)}:d=>{Mt(r,d*3,a,c)},u=Qt.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,p=t.indirect?d=>{let g=t.resolveTriangleIndex(d);Mt(u,g*3,h,f)}:d=>{Mt(u,d*3,h,f)};if(s){if(!(t instanceof o))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let d=(g,v,y,m,x,_,S,b)=>{for(let T=y,M=y+m;T<M;T++){p(T),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let w=g,E=g+v;w<E;w++)if(l(w),r.needsUpdate=!0,s(r,u,w,T,x,_,S,b))return!0}return!1};if(i){let g=i;i=function(v,y,m,x,_,S,b,T){return g(v,y,m,x,_,S,b,T)?!0:d(v,y,m,x,_,S,b,T)}}else i=d}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return vr.set(t.min,t.max,e),vr.needsUpdate=!0,this.shapecast({intersectsBounds:n=>vr.intersectsBox(n),intersectsTriangle:n=>vr.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},s=0,r=1/0){return(this.indirect?yl:pl)(this,t,e,n,i,s,r)}closestPointToPoint(t,e={},n=0,i=1/0){return Kc(this,t,e,n,i)}};var Mr=-15.8*Math.PI/180;function El(o,t){let e=23.44*Math.PI/180*Math.sin(2*Math.PI/365*(284+o)),n=(t-12)*15*Math.PI/180,i=-Math.cos(e)*Math.sin(n),s=Math.sin(e)*Math.cos(Mr)-Math.cos(e)*Math.sin(Mr)*Math.cos(n),r=Math.sin(e)*Math.sin(Mr)+Math.cos(e)*Math.cos(Mr)*Math.cos(n),a=Math.atan2(i,s)*180/Math.PI;return a<0&&(a+=360),{E:i,N:s,U:r,alt:Math.asin(Math.max(-1,Math.min(1,r)))*180/Math.PI,az:a}}var Al=o=>[o.E,o.U,-o.N],br={dif(o){if(o<=0)return 0;let t=Math.sin(o*Math.PI/180);return 500*(1.1+21*t+15.5*Math.sqrt(t))},beam(o){return o<=1?0:63750*Math.exp(-.21/Math.sin(o*Math.PI/180))}};var Tl=[31,28,31,30,31,30,31,31,30,31,30,31];function wl(o){let t=0;for(;o>Tl[t];)o-=Tl[t],t++;return t}var he=.2,Zi=.25,Ji=5,kt=40,te=74,Sa=12,Il=8,Rl=Sa*Il,ya=[[.25,.25],[.75,.75],[.75,.25],[.25,.75]],xp=["x","y","z"],Cl=.15,Pl=.2,_p=.08,Tr=.5,vp=[[20,"#26304a"],[60,"#3c6e9e"],[150,"#4fa3a5"],[300,"#a9cf6e"],[1e3,"#f2d14a"],[5e3,"#f39a2e"],[3e4,"#fff1c7"]],on=vp.map(([o,t])=>[Math.log10(o),parseInt(t.slice(1,3),16),parseInt(t.slice(3,5),16),parseInt(t.slice(5,7),16)]);function yp(o){let t=Math.log10(Math.max(o,1));if(t<=on[0][0])return on[0].slice(1);for(let e=1;e<on.length;e++)if(t<=on[e][0]){let n=on[e-1],i=on[e],s=(t-n[0])/(i[0]-n[0]);return[n[1]+(i[1]-n[1])*s,n[2]+(i[2]-n[2])*s,n[3]+(i[3]-n[3])*s]}return on[on.length-1].slice(1)}function Sp(o,t,e){let n=!1;for(let i=0,s=e.length-1;i<e.length;s=i++){let[r,a]=e[i],[c,l]=e[s];a>t!=l>t&&o<(c-r)*(t-a)/(l-a)+r&&(n=!n)}return n}var Er=o=>o.zone||o.id;function Mp(o){let t=0;for(let[a]of o){let c=a.geometry;t+=c.index?c.index.count:c.attributes.position.count}let e=new Float32Array(t*3),n=new Uint8Array(t),i=new A,s=0;for(let[a,c]of o){let l=a.geometry,u=l.attributes.position,h=l.index,f=h?h.count:u.count;for(let p=0;p<f;p++)i.fromBufferAttribute(u,h?h.getX(p):p).applyMatrix4(a.matrixWorld),e[s*3]=i.x,e[s*3+1]=i.y,e[s*3+2]=i.z,n[s++]=c}let r=new Ft;return r.setAttribute("position",new Lt(e,3)),{bvh:new Sr(r),grp:n}}function Ll(o,t){var wt;o.root.updateMatrixWorld(!0),t.root.updateMatrixWorld(!0);let e=P=>P.userData.grp==="viz"?2:P.userData.grp==="tree"?3:1,n=Mp([...o.occ.filter(P=>P.userData.tau==null).map(P=>[P,0]),...t.occ.filter(P=>P.userData.tau==null).map(P=>[P,e(P)])]),i=[!0,!0,!0,!0],s=[];for(let P of[...o.occ,...t.occ]){if(P.userData.tau==null)continue;P.geometry.computeBoundingBox();let N=P.geometry.boundingBox.clone().applyMatrix4(P.matrixWorld);P.userData.grp==="tree"?s.push({t:1,m:P,g:3,c:N.getCenter(new A),r:N.getSize(new A).multiplyScalar(.5)}):s.push({t:0,m:P,g:0,lo:N.min,hi:N.max})}for(let P of o.aps)P.kind!=="open"&&s.push({t:2,g:0,tau:P.tau,p0:P.p0,u:P.u,v:P.v,n:P.n,w:P.w,h:P.h});let r=new Fe;function a(P,N,F){r.origin.copy(P),r.direction.copy(N);let z=0;for(let D=0;D<6;D++){let Z=n.bvh.raycastFirst(r,ce,z,F);if(!Z)return null;let G=n.grp[Z.face.a];if(i[G])return{t:Z.distance,g:G,y:Z.point.y};z=Z.distance+.001}return null}function c(P,N,F){let z=1;for(let D of s){if(!i[D.g])continue;let Z=-1;if(D.t===2){let G=D.n.x*N.x+D.n.y*N.y+D.n.z*N.z;if(Math.abs(G)<1e-6)continue;let Y=D.p0.x-P.x,ot=D.p0.y-P.y,K=D.p0.z-P.z;if(Z=(D.n.x*Y+D.n.y*ot+D.n.z*K)/G,Z<=1e-4||Z>=F)continue;let ft=P.x+N.x*Z-D.p0.x,B=P.y+N.y*Z-D.p0.y,k=P.z+N.z*Z-D.p0.z,V=ft*D.u.x+B*D.u.y+k*D.u.z,W=ft*D.v.x+B*D.v.y+k*D.v.z;if(V<0||V>D.w||W<0||W>D.h)continue;z*=D.tau}else if(D.t===0){let G=0,Y=F;for(let ot of xp){let K=1/N[ot],ft=(D.lo[ot]-P[ot])*K,B=(D.hi[ot]-P[ot])*K;if(ft>B){let k=ft;ft=B,B=k}if(G=Math.max(G,ft),Y=Math.min(Y,B),G>Y)break}if(G>Y)continue;z*=D.m.userData.tau}else{let G=(P.x-D.c.x)/D.r.x,Y=(P.y-D.c.y)/D.r.y,ot=(P.z-D.c.z)/D.r.z,K=N.x/D.r.x,ft=N.y/D.r.y,B=N.z/D.r.z,k=K*K+ft*ft+B*B,V=G*K+Y*ft+ot*B,W=G*G+Y*Y+ot*ot-1,X=V*V-k*W;if(X<=0||(Z=(-V-Math.sqrt(X))/k,(-V+Math.sqrt(X))/k<=1e-4||Z>=F))continue;z*=D.m.userData.tau}if(z<.01)return 0}return z}let l=[];for(let P of[1,0,2])for(let N=0;N<te;N++)for(let F=0;F<kt;F++){let z=Zi+(F+.5)*he,D=Ji+(N+.5)*he,Z=xn.findIndex(G=>G.lv===P&&!G.void&&Sp(z,D,G.pts));Z>=0&&l.push({lv:P,i:F,j:N,x:z,z:D,r:Z,o:new A(z,Zo[P]+.02,D),sky:0,skyB:0,sun:0,sunA:0})}let u=[0,1,2].map(()=>new Int32Array(kt*te).fill(-1));l.forEach((P,N)=>{u[P.lv][P.j*kt+P.i]=N});let h={};for(let P of xn){if(P.out||P.void)continue;let N=h[wt=Er(P)]||(h[wt]={A:0,sky:0,sun:0,Er:0}),F=0,z=0;for(let D=0,Z=P.pts.length-1;D<P.pts.length;Z=D++)F+=(P.pts[Z][0]+P.pts[D][0])*(P.pts[Z][1]-P.pts[D][1])/2,z+=Math.hypot(P.pts[D][0]-P.pts[Z][0],P.pts[D][1]-P.pts[Z][1]);N.A+=2*Math.abs(F)+z*(P.h||2.9)}let f=P=>{let N=xn.find(F=>F.id===P.room);return N?Er(N):P.room},p=o.aps.filter(P=>P.kind!=="open").map(P=>({a:P,z:f(P),vsf:0})),d=new A,g=1,v=()=>(g=g*16807%2147483647)/2147483647;function y(P,N,F,z,D){let Z=Math.floor(P/F),G=P%F,Y=(G+v())/F,ot=(Z+v())/N,K=Math.sqrt(Y),ft=2*Math.PI*ot+z,B=K*Math.cos(ft),k=Math.sqrt(Math.max(0,1-Y)),V=K*Math.sin(ft);if(!D||D.y>.99)return d.set(B,k,V);let W=new A(0,1,0).cross(D).normalize(),X=D.clone().cross(W);return d.set(0,0,0).addScaledVector(W,B).addScaledVector(D,k).addScaledVector(X,V)}function m(P,N){let F=a(P,N,300),z=c(P,N,F?F.t:1e9);return z<.01?0:F?F.g===0?z*_p:z*(F.y<0?Pl:Cl):z*(N.y>0?3/7*(1+2*N.y):Pl)}function x(P){g=1+P.i*7919+P.j*104729+P.lv*1299709;let N=v()*2*Math.PI/Sa,F=0;for(let z=0;z<Rl;z++){y(z,Sa,Il,N);let D=a(P.o,d,300),Z=c(P.o,d,D?D.t:1e9);Z<.01||(F+=Z*(D?D.g===0?0:Cl:3/7*(1+2*d.y)))}return F/Rl}function _(P){let N=P.a,F=new A,z=0,D=0;for(let[Z,G]of ya){F.copy(N.p0).addScaledVector(N.u,N.w*Z).addScaledVector(N.v,N.h*G).addScaledVector(N.n,.03),g=7+Math.round(F.x*100)*31+Math.round(F.y*100)*17+Math.round(F.z*100);for(let Y=0;Y<48;Y++){let ot=y(Y,8,6,0,N.n).clone();z+=m(F,ot),D++}}return z/D}let S=new Ue,b=[],T=[];for(let P=0;P<3;P++){let N=new Uint8Array(kt*te*4),F=new Ye(N,kt,te,Wn);F.colorSpace=Xt,F.magFilter=F.minFilter=Gn,F.needsUpdate=!0;let z=new Be(kt*he,te*he);z.rotateX(-Math.PI/2),z.translate(Zi+kt*he/2,Zo[P]+.012,Ji+te*he/2);let D=new ye(z,new we({map:F,transparent:!0,opacity:.94,depthWrite:!1,toneMapped:!1,clippingPlanes:[Wo,Xo],polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));D.renderOrder=2,S.add(D),b.push(N),T.push(F)}S.visible=!1;let M=0,w=!1,E=null,C=new Float32Array(l.length);function R(P){i[2]=P.viz,i[3]=P.arv;for(let N of p)N.vsf=_(N);M=0}function I(P){if(M>=l.length)return!1;let N=performance.now();for(;M<l.length&&performance.now()-N<P;){let F=l[M++];F.sky=x(F),w||(F.skyB=F.sky)}return M>=l.length&&(L(),w=!0),(!w||M>=l.length)&&q(),M<l.length}function L(){let P=[[0,0,4],[1,0,2],[-1,0,2],[0,1,2],[0,-1,2],[1,1,1],[-1,1,1],[1,-1,1],[-1,-1,1]];for(let N of l){let F=0,z=0;for(let[D,Z,G]of P){let Y=N.i+D,ot=N.j+Z;if(Y<0||ot<0||Y>=kt||ot>=te)continue;let K=u[N.lv][ot*kt+Y];K<0||l[K].r!==N.r||(F+=l[K].sky*G,z+=G)}N.skyN=F/z}for(let N of l)N.skyB=N.skyN}function U(P,N){E=P;let F=P.U>.02,z=new A(...Al(P)).normalize(),D=new A,Z=N?ya.length:1;for(let G of l)if(G.sun=G.sunA=0,!!F)for(let Y=0;Y<Z;Y++){let[ot,K]=N?ya[Y]:[.5,.5];if(D.set(Zi+(G.i+ot)*he,G.o.y,Ji+(G.j+K)*he),a(D,z,300))continue;let ft=c(D,z,1e9);ft>.02&&(G.sun+=ft/Z,G.sunA+=1/Z)}for(let G of Object.values(h))G.sky=G.sun=0;if(F)for(let G of p){let Y=G.a,ot=Y.n.dot(z),K=h[G.z];if(!K||ot<=.01)continue;let ft=Math.max(1,Math.round(Y.w/.3)),B=Math.max(1,Math.round(Y.h/.3)),k=Y.w*Y.h/(ft*B);for(let V=0;V<ft;V++)for(let W=0;W<B;W++)D.copy(Y.p0).addScaledVector(Y.u,Y.w*(V+.5)/ft).addScaledVector(Y.v,Y.h*(W+.5)/B).addScaledVector(Y.n,.02),!a(D,z,300)&&(K.sun+=k*ot*Y.tau*c(D,z,1e9))}q()}function q(){let P=E;if(!P)return;let N=br.dif(P.alt),F=br.beam(P.alt)*Math.max(0,P.U);for(let z of Object.values(h))z.sky=0;for(let z of p){let D=h[z.z];D&&(D.sky+=z.a.w*z.a.h*z.a.tau*z.vsf)}for(let z of Object.values(h))z.Er=(z.sky*N+z.sun*br.beam(P.alt))*Tr/(z.A*(1-Tr));for(let z=0;z<l.length;z++){let D=l[z],Z=xn[D.r],G=Z.out?null:h[Er(Z)];C[z]=z<M||w?D.skyB*N+D.sun*F+(G?G.Er:0):-1}$()}function $(){for(let P of b)P.fill(0);for(let P=0;P<l.length;P++){if(C[P]<0)continue;let N=l[P],F=b[N.lv],z=((te-1-N.j)*kt+N.i)*4,[D,Z,G]=yp(C[P]);F[z]=D,F[z+1]=Z,F[z+2]=G,F[z+3]=255}for(let P of b){let N=P.slice();for(let F=0;F<kt*te;F++){if(N[F*4+3])continue;let z=F%kt,D=Math.floor(F/kt);for(let[Z,G]of[[1,0],[-1,0],[0,1],[0,-1]]){let Y=z+Z,ot=D+G;if(Y<0||ot<0||Y>=kt||ot>=te)continue;let K=(ot*kt+Y)*4;if(N[K+3]){P[F*4]=N[K],P[F*4+1]=N[K+1],P[F*4+2]=N[K+2];break}}}}for(let P of T)P.needsUpdate=!0}function ht(){let P={};l.forEach((N,F)=>{let z=xn[N.r].key;if(!z||C[F]<0)return;let D=P[z]||(P[z]={lx:0,n:0,sunM2:0});D.lx+=C[F],D.n++,D.sunM2+=N.sunA*he*he});for(let N of Object.values(P))N.lx/=N.n;return{keys:P,ready:w}}function it(){let P={},N={};for(let F of p)P[F.z]=(P[F.z]||0)+F.a.w*F.a.h*F.a.tau*F.vsf;for(let F of l){let z=xn[F.r],D=z.key,Z=Er(z),G=h[Z];if(!D)continue;let Y=N[D]||(N[D]={s:0,n:0});Y.s+=F.skyB+(G?(P[Z]||0)*Tr/(G.A*(1-Tr)):0),Y.n++}for(let F in N)N[F]=N[F].s/N[F].n*100;return N}function st(P){let N=b[P],F=new Uint8ClampedArray(N.length),z=kt*4;for(let D=0;D<te;D++)F.set(N.subarray((te-1-D)*z,(te-D)*z),D*z);return{w:kt,h:te,x:Zi,z:Ji,cell:he,rgba:F}}return{group:S,invalidate:R,step:I,setSun:U,stats:ht,df:it,image:st,probe:(P,N,F)=>{let z=u[P][Math.floor((F-Ji)/he)*kt+Math.floor((N-Zi)/he)];return z>=0?C[z]:null},cells:l,zones:h,busy:()=>M<l.length}}function NM(){let o=Rc(),t=Uc(o),e=Fc(o),n=Ll(t,e),i=null,s=-1;return{set(r,a,c=!0){if(r!==s){s=r,e.setSeason(wl(r));let l=e.trees.map(u=>u.px.userData.tau).join();l!==i&&(i=l,n.invalidate({viz:!0,arv:!0}))}n.setSun(El(r,a),c)},step:r=>n.step(r),busy:()=>n.busy(),stats:()=>n.stats(),image:r=>n.image(r),df:()=>n.df()}}export{NM as makeLuz};
